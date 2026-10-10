/**
 * Controleert het logboek van de chat zonder Cloudflare.
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
// `antwoordVanClaude` bepaalt wat er terugkomt; zet hem op null voor een fout.
let antwoordVanClaude = "Een antwoord.";

globalThis.fetch = async (url) => {
  if (String(url).startsWith("https://api.anthropic.com/")) {
    if (antwoordVanClaude === null) {
      return new Response("overloaded", { status: 529 });
    }
    return new Response(JSON.stringify({ content: [{ text: antwoordVanClaude }] }), {
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

function chatVerzoek(body, ip) {
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

async function chat(env, body, ip = "203.0.113.9") {
  const { ctx, klaar } = maakCtx();
  const antwoord = await worker.fetch(chatVerzoek(body, ip), env, ctx);
  await klaar();
  return antwoord;
}

function rijen(sqlite) {
  return sqlite
    .prepare("SELECT moment, taal, pagina, vraag, antwoord, links FROM vraag ORDER BY id")
    .all();
}

function haal(env, pad) {
  return worker.fetch(new Request("https://pa-chat.example" + pad), env, maakCtx().ctx);
}

// ── 1. Wat er in het logboek komt ─────────────────────────────

console.log("\n1. Wat er in het logboek komt");
{
  const { sqlite, env } = nieuweOmgeving();
  antwoordVanClaude =
    "Een audit kost rond 3.150 euro. Kijk op https://www.properaccess.nl/toegankelijkheidsaudit/ voor meer.";
  const antwoord = await chat(
    env,
    {
      messages: [
        { role: "user", content: "Wat kost een audit?" },
        { role: "assistant", content: "Rond 3.150 euro." },
        { role: "user", content: "  En voor een PDF?  " },
      ],
      lang: "nl",
      pagina: "/tools/pdf-checker/",
    },
    "203.0.113.11"
  );
  const r = rijen(sqlite);
  controleer("de chat antwoordt nog", antwoord.status === 200);
  controleer("één rij per vraag, niet het hele gesprek", r.length === 1, "rijen: " + r.length);
  controleer("de laatste vraag staat erin, zonder witruimte", r[0] && r[0].vraag === "En voor een PDF?", JSON.stringify(r[0]));
  controleer("het antwoord van de assistent staat erin", r[0].antwoord === antwoordVanClaude, r[0].antwoord);
  controleer(
    "de link uit het antwoord staat er apart bij, zonder punt",
    r[0].links === "https://www.properaccess.nl/toegankelijkheidsaudit/",
    r[0].links
  );
  controleer("de taal staat erin", r[0].taal === "nl", r[0].taal);
  controleer("de pagina staat erin", r[0].pagina === "/tools/pdf-checker/", r[0].pagina);
  controleer("het moment is ISO 8601 in UTC", /^\d{4}-\d{2}-\d{2}T.*Z$/.test(r[0].moment), r[0].moment);

  const kolommen = sqlite.prepare("PRAGMA table_info(vraag)").all().map((k) => k.name);
  controleer(
    "de tabel heeft precies de zeven afgesproken kolommen",
    JSON.stringify(kolommen) ===
      JSON.stringify(["id", "moment", "taal", "pagina", "vraag", "antwoord", "links"]),
    kolommen.join(", ")
  );
  controleer(
    "geen kolom voor een IP-adres, een hash of een cookie",
    !kolommen.some((k) => /ip|hash|cookie|sessie|gesprek/i.test(k)),
    kolommen.join(", ")
  );

  // Een tweede vraag in hetzelfde gesprek levert een losse rij op, zonder
  // sleutel die de twee aan elkaar knoopt.
  await chat(
    env,
    {
      messages: [
        { role: "user", content: "En voor een PDF?" },
        { role: "assistant", content: "Die checker is gratis." },
        { role: "user", content: "Mag ik Julia bellen?" },
      ],
      lang: "en",
      pagina: "/en/contact/",
    },
    "203.0.113.11"
  );
  const twee = rijen(sqlite);
  controleer("vervolgvraag is een losse rij", twee.length === 2 && twee[1].vraag === "Mag ik Julia bellen?");
  controleer("de taal van die rij is en", twee[1].taal === "en", twee[1].taal);
  antwoordVanClaude = "Een antwoord.";
}

// ── 2. Meer dan één link, en geen link ────────────────────────

console.log("\n2. De links uit het antwoord");
{
  const { sqlite, env } = nieuweOmgeving();
  antwoordVanClaude =
    "Kijk op https://www.properaccess.nl/contact/ of bel ons. Zie ook " +
    "https://www.properaccess.nl/strippenkaart/ en nog eens https://www.properaccess.nl/contact/.";
  await chat(env, { messages: [{ role: "user", content: "Hoe bereik ik jullie?" }], lang: "nl", pagina: "/" }, "203.0.113.12");

  antwoordVanClaude = "Dat weet ik niet.";
  await chat(env, { messages: [{ role: "user", content: "Hoe oud is Julia?" }], lang: "nl", pagina: "/" }, "203.0.113.12");

  const r = rijen(sqlite);
  controleer(
    "twee verschillende links, de dubbele maar één keer",
    r[0].links === "https://www.properaccess.nl/contact/ https://www.properaccess.nl/strippenkaart/",
    r[0].links
  );
  controleer("een antwoord zonder link geeft een leeg linkveld", r[1].links === "", JSON.stringify(r[1].links));
  antwoordVanClaude = "Een antwoord.";
}

// ── 3. Wat er niet wordt weggeschreven ────────────────────────

console.log("\n3. Wat er niet wordt weggeschreven");
{
  const { sqlite, env } = nieuweOmgeving();
  await chat(env, { messages: [{ role: "user", content: "Hoi" }], _gotcha: "bot", lang: "nl" }, "203.0.113.21");
  controleer("een honeypot-treffer komt er niet in", rijen(sqlite).length === 0);

  await chat(env, { messages: [], lang: "nl" }, "203.0.113.21");
  controleer("een leeg gesprek komt er niet in", rijen(sqlite).length === 0);

  await chat(env, { messages: [{ role: "user", content: "x".repeat(501) }], lang: "nl" }, "203.0.113.21");
  controleer("een bericht boven 500 tekens komt er niet in", rijen(sqlite).length === 0);

  await chat(
    env,
    {
      messages: [
        { role: "user", content: "Wat kost een audit?" },
        { role: "assistant", content: "Rond 3.150 euro." },
      ],
      lang: "nl",
    },
    "203.0.113.21"
  );
  controleer("een gesprek dat op een assistent-bericht eindigt komt er niet in", rijen(sqlite).length === 0);

  // Dezelfde bezoeker 21 keer: de 21e wordt geweigerd en komt er niet in.
  const bulk = nieuweOmgeving();
  let laatste;
  for (let i = 0; i < 21; i++) {
    laatste = await chat(bulk.env, { messages: [{ role: "user", content: "vraag " + i }], lang: "nl" }, "198.51.100.7");
  }
  controleer("de 21e vraag binnen tien minuten geeft 429", laatste.status === 429);
  controleer("en staat niet in de database", rijen(bulk.sqlite).length === 20, "rijen: " + rijen(bulk.sqlite).length);
}

// ── 4. Een e-mailadres of telefoonnummer gaat eruit ───────────

console.log("\n4. Een e-mailadres of telefoonnummer gaat eruit");
{
  const { sqlite, env } = nieuweOmgeving();
  antwoordVanClaude = "Mail naar info@properaccess.nl of bel 085 5055 890.";
  await chat(
    env,
    {
      messages: [{ role: "user", content: "Bel me op 06-12345678 of mail jan.de.vries@gemeente-x.nl" }],
      lang: "nl",
      pagina: "/contact/",
    },
    "203.0.113.31"
  );

  antwoordVanClaude = "SC 1.4.11 vraagt 3:1 contrast.";
  await chat(
    env,
    {
      messages: [{ role: "user", content: "Geldt 1.4.11 1.4.12 2.5.8 ook voor een audit van 2.250 euro in 2026?" }],
      lang: "nl",
      pagina: "/",
    },
    "203.0.113.31"
  );

  const r = rijen(sqlite);
  controleer("het e-mailadres uit de vraag is weg", !/gemeente-x/.test(r[0].vraag), r[0].vraag);
  controleer("het telefoonnummer uit de vraag is weg", !/12345678/.test(r[0].vraag), r[0].vraag);
  controleer("er staat [weggelaten] voor in de plaats", (r[0].vraag.match(/\[weggelaten\]/g) || []).length === 2, r[0].vraag);
  controleer("ook in het antwoord gaat het eruit", !/info@|5055/.test(r[0].antwoord), r[0].antwoord);
  controleer(
    "succescriteria blijven leesbaar staan",
    r[1].vraag === "Geldt 1.4.11 1.4.12 2.5.8 ook voor een audit van 2.250 euro in 2026?",
    r[1].vraag
  );
  antwoordVanClaude = "Een antwoord.";
}

// ── 5. De pagina ──────────────────────────────────────────────

console.log("\n5. De pagina");
{
  const { sqlite, env } = nieuweOmgeving();
  const gevallen = [
    ["/blog/wat-is-wcag/?utm_source=nieuwsbrief#top", "/blog/wat-is-wcag/", "querystring en fragment gaan eraf"],
    ["https://www.properaccess.nl/eaa/", null, "een volledige URL wordt niet bewaard"],
    ["//kwaadaardig.example/", null, "een protocol-relatieve URL wordt niet bewaard"],
    ["geen pad", null, "iets dat geen pad is wordt niet bewaard"],
    [undefined, null, "zonder pagina blijft het veld leeg"],
  ];
  let i = 0;
  for (const [ingang, verwacht] of gevallen) {
    await chat(env, { messages: [{ role: "user", content: "vraag " + i++ }], lang: "nl", pagina: ingang }, "203.0.113.41");
  }
  const r = rijen(sqlite);
  gevallen.forEach(function (geval, n) {
    controleer(geval[2], r[n].pagina === geval[1], "pagina: " + JSON.stringify(r[n].pagina));
  });
}

// ── 6. Zonder database en zonder antwoord ─────────────────────

console.log("\n6. Zonder database en zonder antwoord");
{
  const antwoord = await chat(
    { ANTHROPIC_API_KEY: "test" },
    { messages: [{ role: "user", content: "Wat kost een audit?" }], lang: "nl", pagina: "/" },
    "203.0.113.51"
  );
  controleer("geen D1-binding: chat geeft gewoon antwoord", antwoord.status === 200);
  const body = await antwoord.json();
  controleer("en het antwoord komt door", body.ok === true && body.content === "Een antwoord.");

  // De Claude API valt om. De vraag hoort dan juist wel in het logboek.
  const { sqlite, env } = nieuweOmgeving();
  antwoordVanClaude = null;
  const fout = await chat(
    env,
    { messages: [{ role: "user", content: "Doet de chat het nog?" }], lang: "nl", pagina: "/" },
    "203.0.113.52"
  );
  antwoordVanClaude = "Een antwoord.";
  controleer("een fout van de Claude API geeft 500", fout.status === 500);
  const r = rijen(sqlite);
  controleer("de vraag staat toch in het logboek", r.length === 1 && r[0].vraag === "Doet de chat het nog?");
  controleer("met een leeg antwoord en geen link", r[0].antwoord === "" && r[0].links === "", JSON.stringify(r[0]));
}

// ── 7. Opschonen na 90 dagen ──────────────────────────────────

console.log("\n7. Opschonen na 90 dagen");
{
  const { sqlite, env } = nieuweOmgeving();
  const dagenTerug = (d) => new Date(Date.now() - d * 86400000).toISOString();
  const zet = sqlite.prepare(
    "INSERT INTO vraag (moment, taal, pagina, vraag, antwoord, links) VALUES (?, 'nl', '/', ?, 'Antwoord.', '')"
  );
  zet.run(dagenTerug(120), "oud: 120 dagen");
  zet.run(dagenTerug(91), "oud: 91 dagen");
  zet.run(dagenTerug(90.1), "oud: 90 dagen en een beetje");
  zet.run(dagenTerug(89), "jong: 89 dagen");
  zet.run(dagenTerug(0), "jong: vandaag");

  await worker.scheduled({ cron: "20 3 * * *" }, env);
  const over = rijen(sqlite).map((r) => r.vraag);
  controleer("alles ouder dan 90 dagen is weg", !over.some((v) => v.startsWith("oud")), over.join(" | "));
  controleer("wat jonger is blijft staan", over.length === 2, over.join(" | "));
  controleer("het antwoord gaat mee weg, niet alleen de vraag", sqlite.prepare("SELECT COUNT(*) AS n FROM vraag WHERE antwoord IS NOT NULL").get().n === 2);
}

// ── 8. Het rapport ────────────────────────────────────────────

console.log("\n8. Het rapport");
{
  const { sqlite, env } = nieuweOmgeving();
  const zet = sqlite.prepare(
    "INSERT INTO vraag (moment, taal, pagina, vraag, antwoord, links) VALUES (?, ?, ?, ?, ?, ?)"
  );
  const nu = new Date().toISOString();
  const contact = "https://www.properaccess.nl/contact/";
  const audit = "https://www.properaccess.nl/toegankelijkheidsaudit/";
  zet.run(nu, "nl", "/toegankelijkheidsaudit/", "Wat kost een audit van een webshop?", "Rond 3.150 euro.", audit);
  zet.run(nu, "nl", "/toegankelijkheidsaudit/", "Hoeveel kost een hercontrole?", "Dat hangt af van de bevindingen.", contact);
  zet.run(nu, "nl", "/eaa/", "Moet mijn webshop in juni 2025 aan de EAA voldoen?", "Ja, sinds 28 juni 2025.", audit);
  zet.run(nu, "en", "/en/tools/", "How do I make a PDF accessible?", "Use our checker.", "");
  zet.run(nu, "nl", "/", "Wie is de oprichter van jullie bedrijf?", "Julia Tol.", contact);
  zet.run(nu, "nl", "/webshop-quickscan/", "Mag dit?", "", "");
  zet.run(new Date(Date.now() - 200 * 86400000).toISOString(), "nl", "/", "Oude vraag van 200 dagen terug", "Antwoord.", "");

  controleer("zonder sleutel: 401", (await haal(env, "/rapport")).status === 401);
  controleer("met een verkeerde sleutel: 401", (await haal(env, "/rapport?sleutel=mis")).status === 401);

  const data = await (await haal(env, "/rapport?sleutel=geheim&dagen=7&formaat=json")).json();
  controleer("telt alleen de gevraagde periode", data.vragen === 6, "vragen: " + data.vragen);
  controleer("en kent de hele database", data.rijen_totaal === 7, "rijen: " + data.rijen_totaal);
  controleer("meldt de oudste vraag, om de 90 dagen te controleren", !!data.oudste_vraag);

  controleer("vijf vragen kregen een antwoord", data.met_antwoord === 5, "met antwoord: " + data.met_antwoord);
  controleer("één vraag kreeg geen antwoord", data.zonder_antwoord === 1, "zonder antwoord: " + data.zonder_antwoord);
  controleer("twee antwoorden weken uit naar de contactpagina", data.naar_contact === 2, "naar contact: " + data.naar_contact);
  controleer(
    "één antwoord had geen link, en dat is de verbeterlijst",
    data.zonder_link.length === 1 && data.zonder_link[0].vraag === "How do I make a PDF accessible?",
    JSON.stringify(data.zonder_link.map((r) => r.vraag))
  );
  controleer(
    "een vraag zonder antwoord staat niet op de verbeterlijst",
    !data.zonder_link.some((r) => r.vraag === "Mag dit?")
  );

  controleer("per taal: vijf nl en één en", JSON.stringify(data.per_taal) === JSON.stringify([{ taal: "nl", aantal: 5 }, { taal: "en", aantal: 1 }]), JSON.stringify(data.per_taal));
  controleer(
    "de drukste pagina staat bovenaan",
    data.per_pagina[0].pagina === "/toegankelijkheidsaudit/" && data.per_pagina[0].aantal === 2,
    JSON.stringify(data.per_pagina)
  );

  const namen = data.onderwerpen.map((o) => o.onderwerp);
  controleer("prijsvragen worden als prijs geteld", namen.includes("prijs"));
  controleer("de EAA-vraag valt onder wetgeving", namen.includes("wetgeving"));
  controleer("de PDF-vraag valt onder pdf", namen.includes("pdf"));
  controleer("de vraag over de oprichter valt onder over Proper Access", namen.includes("over Proper Access"));
  controleer("hoogstens tien onderwerpen", data.onderwerpen.length <= 10, "onderwerpen: " + data.onderwerpen.length);
  controleer("'Mag dit?' valt buiten alle onderwerpen", data.zonder_onderwerp === 1, "zonder: " + data.zonder_onderwerp);

  const tekst = await (await haal(env, "/rapport?sleutel=geheim")).text();
  controleer("het tekstrapport noemt het aantal vragen", /Vragen gesteld: 6/.test(tekst));
  controleer("het noemt het aandeel naar de contactpagina", /Uitgeweken naar de contactpagina: 2\s+40%/.test(tekst), tekst.match(/Uitgeweken.*/) || "");
  controleer("de verbeterlijst staat eronder, met de vraag erbij", /VERBETERLIJST[\s\S]*How do I make a PDF accessible\?/.test(tekst));
  controleer("losse woorden komen eruit", /webshop/.test(tekst));
  controleer("het tekstrapport bevat geen antwoord", !tekst.includes("Rond 3.150 euro."), tekst.slice(0, 120));
}

// ── 9. De steekproef ──────────────────────────────────────────

console.log("\n9. De steekproef");
{
  const { sqlite, env } = nieuweOmgeving();
  const zet = sqlite.prepare(
    "INSERT INTO vraag (moment, taal, pagina, vraag, antwoord, links) VALUES (?, 'nl', '/eaa/', ?, ?, ?)"
  );
  for (let i = 1; i <= 30; i++) {
    zet.run(
      new Date(Date.now() - i * 3600000).toISOString(),
      "Vraag nummer " + i + "?",
      "Antwoord nummer " + i + ".",
      "https://www.properaccess.nl/eaa/"
    );
  }
  zet.run(new Date(Date.now() - 200 * 86400000).toISOString(), "Vraag van 200 dagen terug?", "Oud antwoord.", "");

  controleer("zonder sleutel: 401", (await haal(env, "/steekproef")).status === 401);
  controleer("met een verkeerde sleutel: 401", (await haal(env, "/steekproef?sleutel=mis")).status === 401);

  const tekst = await (await haal(env, "/steekproef?sleutel=geheim")).text();
  controleer("standaard 25 regels", /Regels: 25/.test(tekst), tekst.split("\n")[3]);
  controleer("de nieuwste staat bovenaan", tekst.indexOf("Vraag nummer 1?") < tekst.indexOf("Vraag nummer 2?"));
  controleer("vraag, antwoord en link staan bij elkaar", /Vraag:\s+Vraag nummer 1\?[\s\S]{0,200}Antwoord:\s+Antwoord nummer 1\.[\s\S]{0,200}Links:\s+https/.test(tekst));
  controleer("de pagina en de taal staan erbij", /Taal:\s+nl/.test(tekst) && /Pagina:\s+\/eaa\//.test(tekst));
  controleer("buiten de periode blijft eruit", !tekst.includes("200 dagen terug"));

  const minder = await (await haal(env, "/steekproef?sleutel=geheim&max=5")).text();
  controleer("max werkt", /Regels: 5/.test(minder));

  const json = await (await haal(env, "/steekproef?sleutel=geheim&max=3&formaat=json")).json();
  controleer("formaat=json geeft de regels", json.regels.length === 3 && json.regels[0].antwoord === "Antwoord nummer 1.");

  const zonderDb = await haal({ RAPPORT_SLEUTEL: "geheim" }, "/steekproef?sleutel=geheim");
  controleer("zonder database: 503", zonderDb.status === 503);
}

// ── 10. Migratie van de oude tabel ────────────────────────────

console.log("\n10. Migratie van de oude tabel uit PR 307");
{
  // De tabel zoals hij in PR 307 stond, met één rij erin.
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(
    "CREATE TABLE vraag (id INTEGER PRIMARY KEY AUTOINCREMENT, moment TEXT NOT NULL, vraag TEXT NOT NULL);" +
      "CREATE INDEX vraag_moment ON vraag (moment);"
  );
  sqlite.prepare("INSERT INTO vraag (moment, vraag) VALUES (?, ?)").run(new Date().toISOString(), "Oude vraag");

  // De migratie uit schema.sql.
  const schema = readFileSync(new URL("./schema.sql", import.meta.url), "utf8");
  const migratie = (schema.match(/ALTER TABLE vraag ADD COLUMN \w+ TEXT;/g) || []);
  controleer("schema.sql noemt vier ALTER-regels", migratie.length === 4, migratie.join(" "));
  for (const regel of migratie) sqlite.exec(regel);

  const env = { DB: maakDb(sqlite), ANTHROPIC_API_KEY: "test", RAPPORT_SLEUTEL: "geheim" };
  const oud = sqlite.prepare("SELECT vraag, taal, pagina, antwoord, links FROM vraag").get();
  controleer("de bestaande rij blijft staan", oud.vraag === "Oude vraag");
  controleer(
    "de nieuwe kolommen zijn leeg op de oude rij",
    oud.taal === null && oud.pagina === null && oud.antwoord === null && oud.links === null
  );

  antwoordVanClaude = "Zie https://www.properaccess.nl/eaa/";
  await chat(env, { messages: [{ role: "user", content: "Nieuwe vraag" }], lang: "en", pagina: "/en/" }, "203.0.113.61");
  antwoordVanClaude = "Een antwoord.";
  const alles = rijen(sqlite);
  controleer("de schrijfregel vult de nieuwe kolommen", alles.length === 2 && alles[1].taal === "en" && alles[1].links === "https://www.properaccess.nl/eaa/");

  const rapport = await (await haal(env, "/rapport?sleutel=geheim&formaat=json")).json();
  controleer("het rapport werkt op een gemigreerde tabel", rapport.vragen === 2, "vragen: " + rapport.vragen);
  controleer("de oude rij telt als taal onbekend", rapport.per_taal.some((t) => t.taal === "onbekend"), JSON.stringify(rapport.per_taal));
  const steek = await (await haal(env, "/steekproef?sleutel=geheim")).text();
  controleer("de steekproef werkt op een gemigreerde tabel", /Vraag:\s+Oude vraag/.test(steek) && /Pagina:\s+onbekend/.test(steek));
}

// ── Slot ──────────────────────────────────────────────────────

console.log("\n" + geslaagd + " controles geslaagd, " + gezakt.length + " gezakt");
if (gezakt.length) {
  for (const g of gezakt) console.log("  - " + g);
  process.exit(1);
}
