#!/usr/bin/env node
/**
 * Hoe vaak is WCAG Radar opgehaald?
 *
 * Vraagt bij Cloudflare op hoeveel requests de lens-loader Worker heeft gehad.
 * Die Worker serveert het script dat de bookmarklet ophaalt, dus elk request is
 * iemand die de radar wil gebruiken.
 *
 * Gebruik:
 *   node scripts/radar-stats.js            # laatste 30 dagen
 *   node scripts/radar-stats.js 90         # laatste 90 dagen
 *
 * Authenticatie: gebruikt het OAuth-token van wrangler (je bent al ingelogd als
 * `npx wrangler whoami` je account toont). Je kunt ook CLOUDFLARE_API_TOKEN
 * zetten met een token dat "Account Analytics: Read" mag.
 *
 * LEES DIT VOORDAT JE CONCLUSIES TREKT
 *
 * 1. Het is een ondertelling. Het script wordt een uur gecachet, dus wie de
 *    radar tien keer in een uur opent, telt als één request. Je meet eerder
 *    "hoe vaak iemand ermee begint" dan "hoe vaak hij open is geweest".
 * 2. Niet alles is een mens. Bots scrapen script-URL's. De verdeling over
 *    datacenters helpt: verkeer via Amsterdam is waarschijnlijk echt, een piek
 *    via Hongkong of Washington meestal niet.
 * 3. Eigen werk telt mee. Tijdens ontwikkeldagen schiet het omhoog.
 *
 * We meten bewust niet meer dan dit. Op /tools/wcag-radar/ staat dat we niet
 * bijhouden wat je controleert, en dat blijft zo: geen URL's, geen IP's, geen
 * signaal per keer dat het paneel opengaat.
 */

const fs = require("fs");
const os = require("os");
const path = require("path");

const ACCOUNT_ID = "44505aa6a996a3cc1d9c0a724ccf1239";
const SCRIPT_NAME = "lens-loader";

/* Datacenters in Europa. Verkeer daarbuiten is vaker bot dan bezoeker. */
const EU_COLOS = new Set([
  "AMS", "FRA", "CDG", "LHR", "DUB", "BRU", "ZRH", "VIE", "MAD", "MXP", "MRS",
  "ARN", "CPH", "HEL", "OSL", "WAW", "PRG", "BUD", "SOF", "OTP", "ATH", "LIS",
  "BCN", "DUS", "HAM", "MUC", "TXL", "EDI", "MAN", "RIX", "VNO", "TLL", "ZAG",
]);

function token() {
  if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN;
  const cfg = path.join(
    os.homedir(),
    "Library/Preferences/.wrangler/config/default.toml"
  );
  if (!fs.existsSync(cfg)) {
    throw new Error(
      "Geen token gevonden. Draai `npx wrangler login` of zet CLOUDFLARE_API_TOKEN."
    );
  }
  const m = fs.readFileSync(cfg, "utf8").match(/oauth_token\s*=\s*"([^"]+)"/);
  if (!m) throw new Error("Geen oauth_token in " + cfg + ". Draai `npx wrangler login`.");
  return m[1];
}

async function query(days) {
  const until = new Date();
  const since = new Date(until.getTime() - days * 24 * 60 * 60 * 1000);
  const gql = `query($acct:String!,$since:Time!,$until:Time!){
    viewer{accounts(filter:{accountTag:$acct}){
      workersInvocationsAdaptive(limit:10000, filter:{
        datetime_geq:$since, datetime_leq:$until, scriptName:"${SCRIPT_NAME}"
      }){ sum{requests errors} dimensions{date coloCode} }
    }}}`;

  const res = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: gql,
      variables: {
        acct: ACCOUNT_ID,
        since: since.toISOString().replace(/\.\d+/, ""),
        until: until.toISOString().replace(/\.\d+/, ""),
      },
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Cloudflare gaf een fout: " + JSON.stringify(json.errors));
  }
  const accounts = json.data?.viewer?.accounts || [];
  if (!accounts.length) throw new Error("Geen toegang tot account " + ACCOUNT_ID);
  return accounts[0].workersInvocationsAdaptive || [];
}

function bar(n, max, width = 28) {
  if (max <= 0) return "";
  return "#".repeat(Math.max(1, Math.round((n / max) * width)));
}

async function main() {
  const days = parseInt(process.argv[2] || "30", 10);
  const rows = await query(days);

  if (!rows.length) {
    console.log("Geen verkeer gevonden in de laatste " + days + " dagen.");
    return;
  }

  const perDay = new Map();
  const perColo = new Map();
  let total = 0;
  let errors = 0;
  let eu = 0;

  for (const row of rows) {
    const { date, coloCode } = row.dimensions;
    const n = row.sum.requests;
    total += n;
    errors += row.sum.errors;
    if (EU_COLOS.has(coloCode)) eu += n;
    perDay.set(date, (perDay.get(date) || 0) + n);
    perColo.set(coloCode, (perColo.get(coloCode) || 0) + n);
  }

  const dagen = [...perDay.entries()].sort();
  const max = Math.max(...dagen.map(([, n]) => n));
  const mediaan = [...perDay.values()].sort((a, b) => a - b)[
    Math.floor(perDay.size / 2)
  ];

  console.log(`\nWCAG Radar - script opgehaald, laatste ${days} dagen\n`);
  for (const [dag, n] of dagen) {
    console.log(`  ${dag}  ${String(n).padStart(5)}  ${bar(n, max)}`);
  }

  console.log(`\n  Totaal            ${total}`);
  console.log(`  Dagen met verkeer ${perDay.size}`);
  console.log(`  Mediaan per dag   ${mediaan}   <- realistischer dan het gemiddelde`);
  console.log(`  Fouten            ${errors}`);
  console.log(
    `  Via EU-datacenter ${eu} (${Math.round((eu / total) * 100)}%)   <- rest is vaker bot dan bezoeker`
  );

  const top = [...perColo.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  console.log("\n  Datacenters: " + top.map(([c, n]) => `${c} ${n}`).join(", "));
  console.log(
    "\n  Let op: het script wordt een uur gecachet, dus dit is een ondertelling.\n"
  );
}

main().catch((e) => {
  console.error("\n" + e.message + "\n");
  process.exit(1);
});
