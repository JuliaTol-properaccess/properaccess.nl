/**
 * Cloudflare Worker - WCAG Radar loader
 *
 * Serveert de geobfusceerde bundle op https://tools.properaccess.nl/l/lens.js.
 * De bookmarklet in de pagina is een klein laadscriptje dat die URL ophaalt.
 *
 * Deploy: cd tools/lens-loader && npx wrangler deploy
 *
 * BELANGRIJK - deze Worker heeft GEEN eigen kopie van de bundle meer.
 *
 * Tot juli 2026 serveerde hij zijn eigen bundles.js uit deze repo. Daardoor
 * ontstonden er twee versies van dezelfde tool: de bookmarklets die mensen hier
 * vandaan hadden gesleept bleven hangen op een oude build, terwijl
 * testtoegankelijkheid.nl doorontwikkelde. Die mensen konden dat zelf niet zien
 * en niet oplossen; hun bookmarklet wijst nu eenmaal hierheen.
 *
 * Daarom haalt hij de bundle nu op bij testtoegankelijkheid.nl, de plek waar de
 * WCAG Radar ontwikkeld wordt (repo wcag-scan, map wcag-radar/). Eén bron, dus
 * de twee kunnen niet meer uit elkaar lopen. De bron in
 * assets/js/bookmarklets/ en het bestand bundles.js in deze map doen hier niets
 * meer; bewerk ze niet.
 *
 * De oude rol-URL's (webredactie/ontwikkelaars/designers) blijven werken, zodat
 * al gesleepte bookmarklets uit die tijd niet breken.
 */

/* De canonieke bundle. Verandert deze URL, dan breken alle bookmarklets die ooit
   vanaf properaccess.nl zijn gesleept. */
const UPSTREAM = "https://testtoegankelijkheid.nl/l/lens.js";

/* Alles wijst naar dezelfde samengevoegde bundle: één paneel met drie tabbladen. */
const ALIASES = { webredactie: "lens", ontwikkelaars: "lens", designers: "lens" };
const KNOWN = ["lens"];

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

/* Geen X-Lens-Version meer: het versienummer zit sinds juli 2026 in de bundle
   zelf en staat onderin het paneel. Een header hier zou een tweede waarheid zijn. */
function jsHeaders(maxAgeSeconds) {
  return {
    "Content-Type": "application/javascript; charset=utf-8",
    "Cache-Control": maxAgeSeconds ? "public, max-age=" + maxAgeSeconds : "no-store",
    "Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "X-Lens-Upstream": UPSTREAM,
  };
}

/* Hoe lang een gecachte bundle als vers geldt. Daarna blijft hij bruikbaar,
   maar wordt hij na het antwoord op de achtergrond ververst. */
const FRESH_FOR = 60 * 60 * 1000;

/* Haalt de bundle op en legt hem in de cache. Geeft de tekst terug, of null als
   de bron niet meewerkt. De cache-kopie mag langer leven dan FRESH_FOR: liever
   een bundle van gisteren dan een tool die niet opent. */
async function refresh(cache, cacheKey) {
  let res;
  try {
    res = await fetch(UPSTREAM, { signal: AbortSignal.timeout(20000) });
  } catch (e) {
    return null;
  }
  if (!res.ok) return null;

  const body = await res.text();
  if (!body || body.length < 1000) return null;

  await cache.put(
    cacheKey,
    new Response(body, {
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=604800",
        "X-Fetched-At": String(Date.now()),
      },
    })
  );
  return body;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    /* HEAD toestaan naast GET: handig om vanaf de commandline te controleren of
       de Worker leeft, zonder 373 KB op te halen. */
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("// alleen GET", { status: 405, headers: jsHeaders(0) });
    }

    const match = url.pathname.match(/^\/l\/([a-z-]+)\.js$/);
    if (!match) {
      return new Response("// niet gevonden", { status: 404, headers: jsHeaders(0) });
    }

    const key = ALIASES[match[1]] || match[1];
    if (!KNOWN.includes(key)) {
      return new Response("// onbekende lens", { status: 404, headers: jsHeaders(0) });
    }

    if (KILL_SWITCH) {
      return new Response("// WCAG Radar is tijdelijk uitgeschakeld.", {
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

    /* Uit de cache serveren en pas op de achtergrond verversen.

       Waarom niet gewoon doorlussen: testtoegankelijkheid.nl draait op Fly met
       scale-to-zero. Slaapt die machine, dan duurt een koude start tientallen
       seconden. Iemand die zijn bookmarklet aanklikt staat dan naar niets te
       kijken, zonder dat er een laadindicator is. Gemeten: 17 seconden voor een
       eerste verzoek en een keer een time-out na 75 seconden.

       Dus: staat er iets in de cache, dan gaat dat er meteen uit. Is het ouder
       dan een uur, dan halen we de nieuwe versie er ná het antwoord bij. De
       gebruiker wacht nooit op de origin, en loopt hooguit één klik achter. */
    /* De cachesleutel moet op ons eigen domein liggen. Cloudflare weigert een
       cache.put() met een sleutel op een vreemde host, en die fout is stil: dan
       cachet hij niets en gaat elk verzoek alsnog naar de slapende origin. */
    const cache = caches.default;
    const cacheKey = new Request(url.origin + "/__lens-bundle", { method: "GET" });
    const cached = await cache.match(cacheKey);

    if (cached) {
      const age = Date.now() - Number(cached.headers.get("X-Fetched-At") || 0);
      if (age > FRESH_FOR) ctx.waitUntil(refresh(cache, cacheKey));
      return new Response(cached.body, { status: 200, headers: jsHeaders(3600) });
    }

    /* Lege cache: nu wél wachten op de bron. Gebeurt zelden. */
    const fresh = await refresh(cache, cacheKey);
    if (!fresh) {
      return new Response("// De WCAG Radar is even niet bereikbaar. Probeer het zo nog eens.", {
        status: 502,
        headers: jsHeaders(0),
      });
    }
    return new Response(fresh, { status: 200, headers: jsHeaders(3600) });
  },
};
