/**
 * Controleert de opzoeklogica tegen echte adressen, zonder Cloudflare.
 * Draaien: node test-lookup.mjs (vanuit tools/bezoekmeting/)
 *
 * Handig als je de lijsten HOSTERS en PROVIDERS hebt aangepast, of als je wilt
 * zien wat RDAP en reverse DNS bij een bepaald adres teruggeven.
 */
import { zoekNetwerkOp, netwerkPrefix, domeinUit, bruikbareNaam, deelIn } from "./worker.js";

const IPS = [
  "131.211.1.1", "145.100.1.1", "192.87.1.1", "213.75.1.1", "84.105.1.1",
  "8.8.8.8", "1.1.1.1", "145.21.1.1", "62.221.192.1", "77.60.1.1",
];

for (const ip of IPS) {
  const r = await zoekNetwerkOp(ip, null);
  console.log(
    ip.padEnd(16),
    netwerkPrefix(ip).padEnd(18),
    String(r.soort).padEnd(10),
    r.organisatie
  );
}

console.log("\ndomeinUit:");
for (const h of ["proxy.gemeente-x.nl", "mail.bbc.co.uk", "host", "a.b.c.example.com"]) {
  console.log("  ", h.padEnd(24), "→", domeinUit(h));
}
console.log("\nprefix ipv6:", netwerkPrefix("2a02:a44f:1234:5678::1"));

// ── Indeling, met de namen die echt in de meting stonden ──────
// verwachting per regel: wat het hoort te worden.
const GEVALLEN = [
  ["SKY-6191063", "SOCC-4615408", "provider"],
  ["NETIA-CGNAT", "Netia CGNAT", "provider"],
  ["ZSCALER-AMS3", "Zscaler Netherlands AMS3", "proxy"],
  ["Web2Objects LLC", "Web2Objects LLC", "hosting"],
  ["MNT-IT-TV_ANTON", "End user ip pool", "provider"],
  ["Fidium", "Fidium", "provider"],
  ["AVC-Infomatics-WAN", "IT", "bedrijf"],
  ["AT&T Enterprises, LLC", "AT&T Enterprises, LLC", "provider"],
  ["ARISEON", "ARISEON BUSINESS SOLUTIONS PRIVATE LIMITED", "provider"],
  ["OTS212484", "Keurslager Worst", "bedrijf"],
  ["msn.com", "Microsoft Corporation", "hosting"],
  ["Universiteit Utrecht", "SURF", "bedrijf"],
  ["ASTRON-NET", "SURF", "bedrijf"],
  // een gemeente op een blok van KPN hoort bij de gemeente te blijven staan
  ["Gemeente Alkmaar", "KPN B.V.", "bedrijf"],
];

console.log("\nIndeling:");
let fout = 0;
for (const [rdap, asOrg, verwacht] of GEVALLEN) {
  const naam = [rdap, asOrg].find((n) => bruikbareNaam(n)) || null;
  const soort = deelIn(rdap, [rdap, asOrg].filter(Boolean).join(" "), naam);
  const goed = soort === verwacht;
  if (!goed) fout++;
  console.log(
    `  ${goed ? "ok  " : "FOUT"} ${String(rdap).slice(0, 22).padEnd(24)}` +
    `→ ${String(soort).padEnd(10)} naam: ${naam}` +
    (goed ? "" : `   (verwacht ${verwacht})`)
  );
}
console.log(fout === 0 ? "\nAlle gevallen goed." : `\n${fout} gevallen fout.`);
