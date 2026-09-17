/**
 * Controleert de opzoeklogica tegen echte adressen, zonder Cloudflare.
 * Draaien: node test-lookup.mjs (vanuit tools/bezoekmeting/)
 *
 * Handig als je de lijsten HOSTERS en PROVIDERS hebt aangepast, of als je wilt
 * zien wat RDAP en reverse DNS bij een bepaald adres teruggeven.
 */
import { zoekNetwerkOp, netwerkPrefix, domeinUit } from "./worker.js";

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
