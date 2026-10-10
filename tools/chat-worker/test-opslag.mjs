/**
 * Controleert de opslag van de chatvragen zonder Cloudflare.
 *
 * node:sqlite draait het echte schema.sql, een kleine laag eromheen praat
 * hetzelfde als D1 (prepare/bind/run/all/first, meta.changes) en de Claude API
 * wordt afgevangen. Zo komt de echte worker.js langs elke regel die met de
 * database te maken heeft.
 *
 * Draaien: node test-opslag.mjs   (exitcode 0 als alles slaagt)
 */

import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import worker from "./worker.js";

// ── D1 nabouwen op node:sqlite ────────────────────────────────

function maakDb(sqlite) {
  return {
    prepare(sql) {
      const stmt = sqlite.prepare(sql);
      let waarden = [];
      const api = {
        bind(...args) {
          waarden = args;
          return api;
        },
        async run() {
          const uitkomst = stmt.run(...waarden);
          return { success: true, meta: { changes: Number(uitkomst.changes) } };
        },
        async all() {
          return { results: stmt.all(...waarden) };
        },
        async first() {
          return stmt.get(...waarden) || null;
        },
      };
      return api;
    },
  };
}

function nieuweOmgeving(extra = {}) {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(readFileSync(new URL("./schema.sql", import.meta.url), "utf8"));
  return {
    sqlite,
    env: {
      DB: maakDb(sqlite),
      ANTHROPIC_API_KEY: "test",
      RAPPORT_SLEUTEL: "geheim",
      ...extra,
    },
  };
}

function maakCtx() {
  const bezig = [];
  return { ctx: { waitUntil: (p) => bezig.push(p) }, klaar: () => Promise.all(bezig) };
}

// De Claude API afvangen. Alleen api.anthropic.com; al het andere valt op.
globalThis.fetch = async (url) => {
  if (String(url).startsWith("https://api.anthropic.com/")) {
    return new Response(JSON.stringify({ content: [{ text: "Een antwoord." }] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  throw new Error("Onverwachte uitgaande aanroep: " + url);
};

// ── Hulp ──────────────────────────────────────────────────────

const ORIGIN = "https://www.properaccess.nl";
let geslaagd = 0;
const gezakt = [];

function controleer(naam, voorwaarde, extra = "") {
  if (voorwaarde) {
    geslaagd++;
    console.log("  ok    " + naam);
  } else {
    gezakt.push(naam + (extra ? " — " + extra : ""));
    console.log("  FOUT  " + naam + (extra ? " — " + extra : ""));
  }
}

function chatVerzoek(body, ip = "203.0.113.9") {
  return new Request("https://pa-chat.example/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: ORIGIN,
      "CF-Connecting-IP": ip,
    },
    body: JSON.stringify(body),
  });
}

async function chat(env, body, ip) {
  const { ctx, klaar } = maakCtx();
  const antwoord = await worker.fetch(chatVerzoek(body, ip), env, ctx);
  await klaar();
  return antwoord;
}

function rijen(sqlite) {
  return sqlite.prepare("SELECT moment, vraag FROM vraag ORDER BY id").all();
}

// ── 1. Alleen de laatste vraag van de bezoeker ────────────────

console.log("\n1. Wat er wordt weggeschreven");
{
  const { sqlite, env } = nieuweOmgeving();
  const antwoord = await chat(env, {
    messages: [
      { role: "user", content: "Wat kost een audit?" },
      { role: "assistant", content: "Rond 3.150 euro." },
      { role: "user", content: "  En voor een PDF?  " },
    ],
    lang: "nl",
  });
  const r = rijen(sqlite);
  controleer("de chat antwoordt nog", antwoord.status === 200);
  controleer("één rij per vraag, niet het hele gesprek", r.length === 1, "rijen: " + r.length);
  controleer("de laatste vraag staat erin, zonder witruimte", r[0] && r[0].vraag === "En voor een PDF?", JSON.stringify(r[0]));
  controleer("het moment is ISO 8601 in UTC", /^\d{4}-\d{2}-\d{2}T.*Z$/.test(r[0].moment), r[0].moment);

  const kolommen = sqlite.prepare("PRAGMA table_info(vraag)").all().map((k) => k.name);
  controleer(
    "de tabel heeft alleen id, moment en vraag",
    JSON.stringify(kolommen) === JSON.stringify(["id", "moment", "vraag"]),
    kolommen.join(", ")
  );

  // Een tweede vraag in hetzelfde gesprek levert een losse rij op, zonder
  // sleutel die de twee aan elkaar knoopt.
  await chat(env, {
    messages: [
      { role: "user", content: "En voor een PDF?" },
      { role: "assistant", content: "Die checker is gratis." },
      { role: "user", content: "Mag ik Julia bellen?" },
    ],
    lang: "nl",
  });
  const twee = rijen(sqlite);
  controleer("vervolgvraag is een losse rij", twee.length === 2 && twee[1].vraag === "Mag ik Julia bellen?");
}

// ── 2. Wat er niet wordt weggeschreven ────────────────────────

console.log("\n2. Wat er niet wordt weggeschreven");
{
  const { sqlite, env } = nieuweOmgeving();
  await chat(env, { messages: [{ role: "user", content: "Hoi" }], _gotcha: "bot", lang: "nl" });
  controleer("een honeypot-treffer komt er niet in", rijen(sqlite).length === 0);

  await chat(env, { messages: [], lang: "nl" });
  controleer("een leeg gesprek komt er niet in", rijen(sqlite).length === 0);

  await chat(env, { messages: [{ role: "user", content: "x".repeat(501) }], lang: "nl" });
  controleer("een bericht boven 500 tekens komt er niet in", rijen(sqlite).length === 0);

  await chat(env, {
    messages: [
      { role: "user", content: "Wat kost een audit?" },
      { role: "assistant", content: "Rond 3.150 euro." },
    ],
    lang: "nl",
  });
  controleer("een antwoord van de assistent komt er niet in", rijen(sqlite).length === 0);

  // Dezelfde bezoeker 21 keer: de 21e wordt geweigerd en komt er niet in.
  const bulk = nieuweOmgeving();
  for (let i = 0; i < 21; i++) {
    var laatste = await chat(bulk.env, { messages: [{ role: "user", content: "vraag " + i }], lang: "nl" }, "198.51.100.7");
  }
  controleer("de 21e vraag binnen tien minuten geeft 429", laatste.status === 429);
  controleer("en staat niet in de database", rijen(bulk.sqlite).length === 20, "rijen: " + rijen(bulk.sqlite).length);
}

// ── 3. Zonder database blijft de chat werken ──────────────────

console.log("\n3. Zonder database");
{
  const antwoord = await chat({ ANTHROPIC_API_KEY: "test" }, {
    messages: [{ role: "user", content: "Wat kost een audit?" }],
    lang: "nl",
  });
  controleer("geen D1-binding: chat geeft gewoon antwoord", antwoord.status === 200);
  const body = await antwoord.json();
  controleer("en het antwoord komt door", body.ok === true && body.content === "Een antwoord.");
}

// ── 4. Opschonen na 90 dagen ──────────────────────────────────

console.log("\n4. Opschonen na 90 dagen");
{
  const { sqlite, env } = nieuweOmgeving();
  const dagenTerug = (d) => new Date(Date.now() - d * 86400000).toISOString();
  const zet = sqlite.prepare("INSERT INTO vraag (moment, vraag) VALUES (?, ?)");
  zet.run(dagenTerug(120), "oud: 120 dagen");
  zet.run(dagenTerug(91), "oud: 91 dagen");
  zet.run(dagenTerug(90.1), "oud: 90 dagen en een beetje");
  zet.run(dagenTerug(89), "jong: 89 dagen");
  zet.run(dagenTerug(0), "jong: vandaag");

  await worker.scheduled({ cron: "20 3 * * *" }, env);
  const over = rijen(sqlite).map((r) => r.vraag);
  controleer("alles ouder dan 90 dagen is weg", !over.some((v) => v.startsWith("oud")), over.join(" | "));
  controleer("wat jonger is blijft staan", over.length === 2, over.join(" | "));
}

// ── 5. Het rapport ────────────────────────────────────────────

console.log("\n5. Het rapport");
{
  const { sqlite, env } = nieuweOmgeving();
  const zet = sqlite.prepare("INSERT INTO vraag (moment, vraag) VALUES (?, ?)");
  const nu = new Date().toISOString();
  zet.run(nu, "Wat kost een audit van een webshop?");
  zet.run(nu, "Hoeveel kost een hercontrole?");
  zet.run(nu, "Moet mijn webshop in juni 2025 aan de EAA voldoen?");
  zet.run(nu, "Hoe maak ik een PDF toegankelijk?");
  zet.run(nu, "Wie is de oprichter van jullie bedrijf?");
  zet.run(nu, "Mag dit?");
  zet.run(new Date(Date.now() - 200 * 86400000).toISOString(), "Oude vraag van 200 dagen terug");

  const zonderSleutel = await worker.fetch(
    new Request("https://pa-chat.example/rapport"), env, maakCtx().ctx
  );
  controleer("zonder sleutel: 401", zonderSleutel.status === 401);

  const foutief = await worker.fetch(
    new Request("https://pa-chat.example/rapport?sleutel=mis"), env, maakCtx().ctx
  );
  controleer("met een verkeerde sleutel: 401", foutief.status === 401);

  const jsonAntwoord = await worker.fetch(
    new Request("https://pa-chat.example/rapport?sleutel=geheim&dagen=7&formaat=json"), env, maakCtx().ctx
  );
  const data = await jsonAntwoord.json();
  controleer("telt alleen de gevraagde periode", data.vragen === 6, "vragen: " + data.vragen);
  controleer("en kent de hele database", data.rijen_totaal === 7, "rijen: " + data.rijen_totaal);
  controleer("meldt de oudste vraag, om de 90 dagen te controleren", !!data.oudste_vraag);

  const namen = data.onderwerpen.map((o) => o.onderwerp);
  controleer("prijsvragen worden als prijs geteld", namen.includes("prijs"));
  controleer("de EAA-vraag valt onder wetgeving", namen.includes("wetgeving"));
  controleer("de PDF-vraag valt onder pdf", namen.includes("pdf"));
  controleer("de vraag over de oprichter valt onder over Proper Access", namen.includes("over Proper Access"));
  controleer("'Mag dit?' valt buiten alle onderwerpen", data.zonder_onderwerp === 1, "zonder: " + data.zonder_onderwerp);

  const tekst = await (
    await worker.fetch(new Request("https://pa-chat.example/rapport?sleutel=geheim"), env, maakCtx().ctx)
  ).text();
  controleer("het tekstrapport noemt het aantal vragen", /Vragen gesteld: 6/.test(tekst));
  controleer(
    "het tekstrapport bevat geen hele vraag",
    !data.laatste_vragen.some((v) => tekst.includes(v.vraag)),
    tekst.slice(0, 200)
  );
  controleer(
    "wel losse woorden eruit, dus het rapport zelf gaat niet naar Slack",
    /webshop/.test(tekst)
  );
  controleer("de hele vraagtekst zit alleen in de JSON", data.laatste_vragen.length === 6);
}

// ── 6. Kolommen later toevoegen ───────────────────────────────

console.log("\n6. Kolommen later toevoegen");
{
  const { sqlite, env } = nieuweOmgeving();
  await chat(env, { messages: [{ role: "user", content: "Eerste vraag" }], lang: "nl" });

  sqlite.exec("ALTER TABLE vraag ADD COLUMN antwoord TEXT");
  sqlite.exec("ALTER TABLE vraag ADD COLUMN link TEXT");
  sqlite.exec("ALTER TABLE vraag ADD COLUMN bronpagina TEXT");

  const oud = sqlite.prepare("SELECT vraag, antwoord, link, bronpagina FROM vraag").get();
  controleer("de bestaande rij blijft staan", oud.vraag === "Eerste vraag");
  controleer("de nieuwe kolommen zijn leeg op oude rijen", oud.antwoord === null && oud.link === null && oud.bronpagina === null);

  await chat(env, { messages: [{ role: "user", content: "Tweede vraag" }], lang: "nl" });
  controleer("de schrijfregel werkt ongewijzigd door", rijen(sqlite).length === 2);

  const rapport = await (
    await worker.fetch(new Request("https://pa-chat.example/rapport?sleutel=geheim&formaat=json"), env, maakCtx().ctx)
  ).json();
  controleer("het rapport werkt ongewijzigd door", rapport.vragen === 2);
}

// ── Slot ──────────────────────────────────────────────────────

console.log("\n" + geslaagd + " controles geslaagd, " + gezakt.length + " gezakt");
if (gezakt.length) {
  for (const g of gezakt) console.log("  - " + g);
  process.exit(1);
}
