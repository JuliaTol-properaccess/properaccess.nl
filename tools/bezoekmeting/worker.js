/**
 * Cloudflare Worker — bezoekmeting
 *
 * Meet hoeveel van het bezoek op properaccess.nl te herleiden is naar een
 * organisatie, zonder IP-adressen op te slaan.
 *
 * POST /hit      → ontvangt een paginaweergave van de site, zoekt het netwerk op
 *                  en schrijft alleen de gevonden organisatienaam weg
 * GET  /rapport  → leesbare samenvatting over de afgelopen dagen (sleutel nodig)
 *
 * Wat er in de database komt: datum, pad, organisatienaam, soort netwerk, ASN.
 * Wat er niet in komt: het IP-adres. Dat wordt in het geheugen teruggebracht tot
 * een /24 (IPv4) of /48 (IPv6) en alleen als cachesleutel gebruikt.
 *
 * Bindings (zie wrangler.json):
 *   DB — D1-database pa-bezoekmeting
 * Secrets (npx wrangler secret put):
 *   RAPPORT_SLEUTEL — wachtwoord voor /rapport
 *
 * Deploy: cd tools/bezoekmeting && npx wrangler deploy
 */

const ALLOWED_ORIGINS = [
  "https://www.properaccess.nl",
  "https://properaccess.nl",
  "http://localhost:1313",
];

// Netwerken van hostingpartijen en clouddiensten. Bezoek hiervandaan is vrijwel
// altijd een crawler of een proxy en telt niet mee als bedrijfsbezoek.
const HOSTERS = /\b(amazon|aws|google|microsoft|azure|oracle|hetzner|digitalocean|linode|ovh|scaleway|vultr|cloudflare|fastly|akamai|leaseweb|contabo|alibaba|tencent|huawei|datacamp|m247|choopa|upcloud|netcup|ionos|strato|transip|hostnet|serverius|nforce|worldstream|bit bv|previder|solcon hosting|apnic|arin|lacnic|afrinic|ripe ncc)\b/i;

// Consumenten- en telecomproviders. Hier zit wel een mens achter, maar je weet
// niet bij welk bedrijf hij werkt.
const PROVIDERS = /\b(kpn|ziggo|vodafone|odido|t-mobile|tele2|delta fiber|caiway|freedom internet|online\.nl|xs4all|solcon|budget ?internet|edutel|proximus|telenet|telia|telenor|deutsche telekom|orange|free sas|sfr|british telecom|virgin media|sky (uk|broadband)|liberty global|starlink|three|o2)\b/i;

// Eigen netwerken. Staan wel in de database, maar blijven buiten het rapport.
const EIGEN = /\b(proper access)\b/i;

const MAX_PAD = 300;
const BEWAARTERMIJN_DAGEN = 90;
const CACHE_DAGEN = 30;

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(allowedOrigin) });
    }

    const url = new URL(request.url);

    if (url.pathname === "/hit" && request.method === "POST") {
      return handleHit(request, env, ctx, allowedOrigin);
    }

    if (url.pathname === "/rapport" && request.method === "GET") {
      return handleRapport(env, url);
    }

    return json({ error: "Not found" }, 404, allowedOrigin);
  },
};

// ── Paginaweergave ────────────────────────────────────────────

async function handleHit(request, env, ctx, allowedOrigin) {
  // Alleen vanaf de eigen site. Houdt losse aanroepen van buiten tegen.
  if (!allowedOrigin) {
    return json({ ok: false }, 403, "");
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false }, 400, allowedOrigin);
  }

  const pad = schoonPad(body && body.pad);
  if (!pad) return json({ ok: false }, 400, allowedOrigin);

  const ip = request.headers.get("CF-Connecting-IP") || "";
  const cf = request.cf || {};

  // De bezoeker wacht niet op de opzoekacties.
  ctx.waitUntil(verwerk(env, {
    pad: pad,
    verwijzer: schoonVerwijzer(body && body.verwijzer),
    ip: ip,
    asn: cf.asn || null,
    asOrganisatie: cf.asOrganization || null,
    land: cf.country || null,
  }));

  return new Response(null, { status: 204, headers: corsHeaders(allowedOrigin) });
}

async function verwerk(env, bezoek) {
  const prefix = netwerkPrefix(bezoek.ip);
  if (!prefix) return;

  let netwerk = await leesCache(env, prefix);
  if (!netwerk) {
    netwerk = await zoekNetwerkOp(bezoek.ip, bezoek.asOrganisatie);
    await schrijfCache(env, prefix, netwerk);
  }

  await env.DB.prepare(
    `INSERT INTO bezoek (moment, pad, verwijzer, organisatie, soort, asn, as_organisatie, land)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(
    new Date().toISOString(),
    bezoek.pad,
    bezoek.verwijzer,
    netwerk.organisatie,
    netwerk.soort,
    bezoek.asn,
    bezoek.asOrganisatie,
    bezoek.land
  ).run();
}

// ── Netwerk opzoeken ──────────────────────────────────────────

/**
 * Zoekt bij een IP-adres een organisatie. Twee bronnen, allebei gratis:
 * het PTR-record in DNS en de RDAP-gegevens van de regionale registrar.
 * Lukt geen van beide, dan valt hij terug op de netwerknaam die Cloudflare
 * zelf meegeeft.
 */
async function zoekNetwerkOp(ip, asOrganisatie) {
  const ptr = await zoekPtr(ip);
  const rdap = await zoekRdap(ip);

  const naam = rdap || domeinUit(ptr) || asOrganisatie || null;
  const alles = [naam, ptr, asOrganisatie].filter(Boolean).join(" ");

  let soort = "onbekend";
  if (!naam) soort = "onbekend";
  else if (HOSTERS.test(alles)) soort = "hosting";
  else if (PROVIDERS.test(alles)) soort = "provider";
  else if (EIGEN.test(alles)) soort = "eigen";
  else soort = "bedrijf";

  return { organisatie: naam, soort: soort };
}

/** Reverse DNS via DNS-over-HTTPS. Alleen IPv4; IPv6 gaat via RDAP. */
async function zoekPtr(ip) {
  const delen = ip.split(".");
  if (delen.length !== 4) return null;

  const naam = delen.slice().reverse().join(".") + ".in-addr.arpa";
  try {
    const res = await fetch(
      "https://cloudflare-dns.com/dns-query?type=PTR&name=" + encodeURIComponent(naam),
      { headers: { Accept: "application/dns-json" } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const antwoord = (data.Answer || []).find((a) => a.type === 12);
    if (!antwoord || !antwoord.data) return null;
    return antwoord.data.replace(/\.$/, "");
  } catch {
    return null;
  }
}

/** RDAP bij RIPE, en anders via rdap.org bij de juiste registrar. */
async function zoekRdap(ip) {
  const bronnen = [
    "https://rdap.db.ripe.net/ip/" + encodeURIComponent(ip),
    "https://rdap.org/ip/" + encodeURIComponent(ip),
  ];

  for (const bron of bronnen) {
    try {
      const res = await fetch(bron, { headers: { Accept: "application/rdap+json" } });
      if (!res.ok) continue;
      const data = await res.json();
      const naam = organisatieUit(data);
      if (naam) return String(naam).trim();
    } catch {
      // volgende bron
    }
  }
  return null;
}

/**
 * Haalt de naam van de organisatie uit een RDAP-antwoord.
 *
 * Een blok heeft vaak meerdere registrants: de organisatie zelf en daarnaast
 * een of meer beheerobjecten. Die laatste hebben een handle die eindigt op
 * -MNT en leveren namen als "SURF-AUTO-MNT" op. De organisatie zelf zit in een
 * entiteit met een handle die met ORG- begint, dus die krijgt voorrang.
 *
 * De contactpersonen onder `administrative` en `technical` blijven buiten
 * beschouwing. Daar staan namen van personen in, en die willen we niet hebben.
 * Levert geen enkele registrant iets op, dan is de netnaam van het blok het
 * antwoord: ASTRON-NET en RNNAVY zeggen genoeg en zijn van een organisatie.
 */
function organisatieUit(data) {
  const registrants = (data.entities || []).filter((e) =>
    (e.roles || []).includes("registrant")
  );

  const kandidaten = [
    registrants.find((e) => /^ORG-/i.test(e.handle || "")),
    ...registrants,
  ];

  for (const entiteit of kandidaten) {
    const naam = fnUit(entiteit);
    if (bruikbareNaam(naam)) return naam;
  }

  return bruikbareNaam(data.name) ? data.name : null;
}

function fnUit(entiteit) {
  if (!entiteit || !Array.isArray(entiteit.vcardArray)) return null;
  const velden = entiteit.vcardArray[1] || [];
  const fn = velden.find((v) => Array.isArray(v) && v[0] === "fn");
  return fn && fn[3] ? String(fn[3]).trim() : null;
}

/** Filtert beheerhandles en interne codes eruit; die zeggen niets over de bezoeker. */
function bruikbareNaam(naam) {
  if (!naam || naam.length < 3) return false;
  if (/-(MNT|RIPE)$/i.test(naam)) return false;
  if (/^(RIPE-NCC|IRT-|ORG-|AS\d+$)/i.test(naam)) return false;
  // Sommige beheerobjecten hebben een GUID als naam.
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(naam)) return false;
  return true;
}

/** example.proxy.gemeente-x.nl → gemeente-x.nl */
function domeinUit(hostnaam) {
  if (!hostnaam) return null;
  const delen = hostnaam.split(".").filter(Boolean);
  if (delen.length < 2) return null;
  const staart = delen.slice(-3).join(".");
  // co.uk, com.au en dergelijke: dan drie delen houden, anders twee.
  if (/\.(co|com|org|net|gov|ac)\.[a-z]{2}$/i.test(staart)) return staart;
  return delen.slice(-2).join(".");
}

// ── Cache in D1 ───────────────────────────────────────────────

async function leesCache(env, prefix) {
  const rij = await env.DB.prepare(
    `SELECT organisatie, soort FROM netwerk_cache
     WHERE prefix = ? AND gezien_op > ?`
  ).bind(prefix, dagenGeleden(CACHE_DAGEN)).first();
  return rij || null;
}

async function schrijfCache(env, prefix, netwerk) {
  await env.DB.prepare(
    `INSERT INTO netwerk_cache (prefix, organisatie, soort, gezien_op)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(prefix) DO UPDATE SET
       organisatie = excluded.organisatie,
       soort = excluded.soort,
       gezien_op = excluded.gezien_op`
  ).bind(prefix, netwerk.organisatie, netwerk.soort, new Date().toISOString()).run();
}

// ── Rapport ───────────────────────────────────────────────────

async function handleRapport(env, url) {
  const sleutel = url.searchParams.get("sleutel") || "";
  if (!env.RAPPORT_SLEUTEL || sleutel !== env.RAPPORT_SLEUTEL) {
    return new Response("Geen toegang", { status: 401 });
  }

  const dagen = Math.min(parseInt(url.searchParams.get("dagen") || "7", 10) || 7, BEWAARTERMIJN_DAGEN);
  const data = await rapportData(env, dagen);

  // Het CRM leest deze Worker serverside uit en wil JSON; in de browser is
  // platte tekst prettiger.
  if (url.searchParams.get("formaat") === "json") {
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  return new Response(tekstRapport(data), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

async function rapportData(env, dagen) {
  const vanaf = dagenGeleden(dagen);

  const totaal = await env.DB.prepare(
    `SELECT soort, COUNT(*) AS aantal FROM bezoek WHERE moment > ? GROUP BY soort ORDER BY aantal DESC`
  ).bind(vanaf).all();

  const bedrijven = await env.DB.prepare(
    `SELECT organisatie,
            COUNT(*) AS weergaven,
            COUNT(DISTINCT substr(moment, 1, 10)) AS dagen,
            COUNT(DISTINCT pad) AS paginas,
            MAX(moment) AS laatst
     FROM bezoek
     WHERE moment > ? AND soort = 'bedrijf' AND organisatie IS NOT NULL
     GROUP BY organisatie
     ORDER BY weergaven DESC
     LIMIT 100`
  ).bind(vanaf).all();

  const paden = await env.DB.prepare(
    `SELECT pad, COUNT(*) AS weergaven, COUNT(DISTINCT organisatie) AS organisaties
     FROM bezoek
     WHERE moment > ? AND soort = 'bedrijf'
     GROUP BY pad
     ORDER BY weergaven DESC
     LIMIT 25`
  ).bind(vanaf).all();

  // Per organisatie de pagina's, zodat het CRM kan laten zien waar iemand keek.
  const perOrganisatie = await env.DB.prepare(
    `SELECT organisatie, pad, COUNT(*) AS weergaven
     FROM bezoek
     WHERE moment > ? AND soort = 'bedrijf' AND organisatie IS NOT NULL
     GROUP BY organisatie, pad
     ORDER BY weergaven DESC`
  ).bind(vanaf).all();

  const padenPerOrganisatie = new Map();
  for (const rij of perOrganisatie.results) {
    const lijst = padenPerOrganisatie.get(rij.organisatie) || [];
    if (lijst.length < 5) lijst.push({ pad: rij.pad, weergaven: rij.weergaven });
    padenPerOrganisatie.set(rij.organisatie, lijst);
  }

  const soorten = totaal.results;
  const weergaven = soorten.reduce((som, r) => som + r.aantal, 0);
  const herleidbaar = (soorten.find((r) => r.soort === "bedrijf") || {}).aantal || 0;

  return {
    dagen: dagen,
    vanaf: vanaf,
    weergaven: weergaven,
    herleidbaar: herleidbaar,
    soorten: soorten,
    organisaties: bedrijven.results.map((r) => ({
      ...r,
      paden: padenPerOrganisatie.get(r.organisatie) || [],
    })),
    paden: paden.results,
  };
}

function tekstRapport(data) {
  const regels = [];
  const soorten = data.soorten;
  const bedrijven = data.organisaties;
  const paden = data.paden;
  const alle = data.weergaven;
  const bedrijf = data.herleidbaar;

  regels.push("BEZOEKMETING properaccess.nl");
  regels.push("Periode: laatste " + data.dagen + " dagen");
  regels.push("");
  regels.push("Paginaweergaven gemeten: " + alle);
  regels.push("Daarvan te herleiden naar een organisatie: " + bedrijf +
    " (" + procent(bedrijf, alle) + ")");
  regels.push("Verschillende organisaties: " + bedrijven.length);
  regels.push("");
  regels.push("VERDELING");
  for (const r of soorten) {
    regels.push("  " + r.soort.padEnd(12) + r.aantal.toString().padStart(6) + "  " + procent(r.aantal, alle));
  }

  regels.push("");
  regels.push("ORGANISATIES");
  if (!bedrijven.length) {
    regels.push("  (nog niets)");
  }
  for (const r of bedrijven) {
    regels.push("  " + String(r.organisatie).slice(0, 45).padEnd(47) +
      String(r.weergaven).padStart(4) + " weergaven, " +
      r.paginas + " pagina's, " + r.dagen + " dag(en), laatst " + r.laatst.slice(0, 10));
  }

  regels.push("");
  regels.push("PAGINA'S MET BEDRIJFSBEZOEK");
  for (const r of paden) {
    regels.push("  " + String(r.pad).slice(0, 55).padEnd(57) +
      String(r.weergaven).padStart(4) + " weergaven, " + r.organisaties + " organisaties");
  }

  return regels.join("\n") + "\n";
}

// ── Helpers ───────────────────────────────────────────────────

/** Brengt een IP-adres terug tot /24 (IPv4) of /48 (IPv6). */
function netwerkPrefix(ip) {
  if (!ip) return null;
  if (ip.includes(":")) {
    const delen = ip.split(":").filter((d) => d !== "");
    if (delen.length < 3) return null;
    return delen.slice(0, 3).join(":") + "::/48";
  }
  const delen = ip.split(".");
  if (delen.length !== 4) return null;
  return delen.slice(0, 3).join(".") + ".0/24";
}

function schoonPad(pad) {
  if (typeof pad !== "string" || !pad.startsWith("/")) return null;
  return pad.split("?")[0].split("#")[0].slice(0, MAX_PAD);
}

function schoonVerwijzer(verwijzer) {
  if (typeof verwijzer !== "string" || !verwijzer) return null;
  try {
    return new URL(verwijzer).hostname.slice(0, 100);
  } catch {
    return null;
  }
}

function dagenGeleden(dagen) {
  return new Date(Date.now() - dagen * 86400000).toISOString();
}

function procent(deel, geheel) {
  if (!geheel) return "0%";
  return Math.round((deel / geheel) * 100) + "%";
}

function corsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin || "") },
  });
}

// Alleen voor de test in test-lookup.mjs; de Worker gebruikt hier niets van.
export { zoekNetwerkOp, organisatieUit, domeinUit, netwerkPrefix, bruikbareNaam };
