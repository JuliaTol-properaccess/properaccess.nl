/**
 * Basic Auth-gate voor afgeschermde Proper Access-rapporten.
 *
 * Draait als Cloudflare Worker op routes die specifieke rapportpaden afdekken
 * (zie wrangler.jsonc). Beschermt ALLE bestanden onder die paden: HTML,
 * screenshots (.webp), presentatie en de PDF. Zonder geldig wachtwoord krijgt
 * de bezoeker een 401 met een browser-wachtwoordprompt.
 *
 * Gebruikersnaam: env.AUTH_USER (var, default "bijenkorf").
 * Wachtwoord:     env.AUTH_PASS (secret; zetten met `wrangler secret put AUTH_PASS`).
 */
export default {
  async fetch(request, env) {
    const expectedUser = env.AUTH_USER || "bijenkorf";
    const expectedPass = env.AUTH_PASS;
    const realm = env.REALM || "Beveiligd rapport";

    const unauthorized = () =>
      new Response("Authenticatie vereist.", {
        status: 401,
        headers: {
          "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`,
          "Cache-Control": "no-store",
        },
      });

    // Fail closed: zonder ingesteld wachtwoord nooit doorlaten.
    if (!expectedPass) {
      return new Response("Configuratiefout: wachtwoord niet ingesteld.", {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      });
    }

    const header = request.headers.get("Authorization") || "";
    const [scheme, encoded] = header.split(" ");
    if (scheme !== "Basic" || !encoded) return unauthorized();

    let decoded;
    try {
      decoded = atob(encoded);
    } catch {
      return unauthorized();
    }
    const idx = decoded.indexOf(":");
    if (idx < 0) return unauthorized();
    const user = decoded.slice(0, idx);
    const pass = decoded.slice(idx + 1);

    if (!timingSafeEqual(user, expectedUser) || !timingSafeEqual(pass, expectedPass)) {
      return unauthorized();
    }

    // Geldig: haal het origineel op. Een subrequest naar dezelfde URL
    // triggert deze Worker niet opnieuw, dus dit gaat naar de origin/cache.
    return fetch(request);
  },
};

function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  if (ab.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < ab.length; i++) diff |= ab[i] ^ bb[i];
  return diff === 0;
}
