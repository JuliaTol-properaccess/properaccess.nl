/**
 * Cloudflare Worker - Toegankelijkheids-lens loader
 *
 * Serveert de geobfusceerde bookmarklet-bundles per rol. De bookmarklet in de
 * pagina is nog maar een klein laadscriptje dat /l/<rol>.js hier ophaalt. Zo
 * staat de leesbare bron niet meer op de site, kun je centraal updaten en later
 * per licentie afschermen.
 *
 * Deploy: cd tools/lens-loader && npx wrangler deploy
 * URL:    GET https://lens-loader.<subdomein>.workers.dev/l/lens.js
 *
 * Sinds de tab-merge is er nog één bundle ("lens"): één paneel met drie
 * tabbladen. De oude rol-URL's (webredactie/ontwikkelaars/designers) blijven
 * via een alias werken, zodat al gesleepte bookmarklets niet breken.
 *
 * bundles.js wordt gegenereerd door scripts/build-bookmarklets.js (npm run build).
 */
import { BUNDLES, VERSION } from "./bundles.js";

/* Oude rol-URL's wijzen naar de samengevoegde bundle. Enkele maanden aanhouden,
   daarna kunnen ze weg. */
const ALIASES = { webredactie: "lens", ontwikkelaars: "lens", designers: "lens" };

/* Noodrem: op true zetten + opnieuw deployen schakelt alle lenzen tijdelijk uit. */
const KILL_SWITCH = false;

/* Rate limiting: per IP, per isolate (reset bij koude start; genoeg tegen scrapen). */
const RATE_LIMIT = 60;
const RATE_WINDOW = 10 * 60 * 1000;
const rateMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  if (rateMap.size > 10000) rateMap.clear();
  const rec = rateMap.get(ip);
  if (!rec || now - rec.windowStart > RATE_WINDOW) {
    rateMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }
  rec.count++;
  return rec.count > RATE_LIMIT;
}

function jsHeaders(maxAgeSeconds) {
  return {
    "Content-Type": "application/javascript; charset=utf-8",
    "Cache-Control": maxAgeSeconds ? "public, max-age=" + maxAgeSeconds : "no-store",
    "Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "X-Lens-Version": VERSION,
  };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET") {
      return new Response("// alleen GET", { status: 405, headers: jsHeaders(0) });
    }

    const match = url.pathname.match(/^\/l\/([a-z-]+)\.js$/);
    if (!match) {
      return new Response("// niet gevonden", { status: 404, headers: jsHeaders(0) });
    }

    const key = ALIASES[match[1]] || match[1];
    const bundle = BUNDLES[key];
    if (!bundle) {
      return new Response("// onbekende lens", { status: 404, headers: jsHeaders(0) });
    }

    if (KILL_SWITCH) {
      return new Response("// De Toegankelijkheids-lens is tijdelijk uitgeschakeld.", {
        status: 503,
        headers: jsHeaders(0),
      });
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (isRateLimited(ip)) {
      return new Response("// Te veel verzoeken. Probeer het later opnieuw.", {
        status: 429,
        headers: jsHeaders(0),
      });
    }

    /* --- Commercieel (later): licentie-check ---------------------------------
       Zet dit aan zodra de lens betaald wordt. Controleer een sleutel uit de
       URL (?k=...) tegen een KV-namespace of externe API en weiger zonder geldige
       sleutel met status 402. Nu uitgeschakeld zodat de gratis versie blijft werken.

       const key = url.searchParams.get("k");
       if (!(await isValidLicense(key))) {
         return new Response("// Licentie vereist. Zie properaccess.nl.", {
           status: 402, headers: jsHeaders(0),
         });
       }
    ------------------------------------------------------------------------- */

    return new Response(bundle, { status: 200, headers: jsHeaders(86400) });
  },
};
