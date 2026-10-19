/**
 * Lokale mock-Worker voor browser- en payloadtests van de formulieren.
 *
 * Starten:
 *   npx wrangler dev --config wrangler.json
 *
 * Scenario's:
 *   POST /submit?scenario=success  -> 200 { ok: true }
 *   POST /submit?scenario=error    -> 502 { ok: false, error: ... }
 *   GET  /__last-request           -> laatste synthetische request
 */

let lastRequest = null;

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin":
      origin === "http://localhost:1313" || origin === "http://localhost:1314"
        ? origin
        : "null",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Cache-Control": "no-store",
  };
}

function json(data, status = 200, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...corsHeaders(origin) },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders(origin) });

    if (request.method === "GET" && url.pathname === "/__last-request") {
      return json(lastRequest || { message: "Nog geen request ontvangen." }, 200, origin);
    }

    if (request.method !== "POST" || !url.pathname.endsWith("/submit")) {
      return json({ ok: false, error: "Mock verwacht POST /submit." }, 405, origin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ ok: false, error: "Ongeldige JSON." }, 400, origin);
    }

    lastRequest = {
      method: request.method,
      path: url.pathname,
      contentType: request.headers.get("Content-Type"),
      payload,
    };

    if (url.searchParams.get("scenario") === "error") {
      return json({ ok: false, error: "Synthetische Worker-fout voor QA." }, 502, origin);
    }

    return json({ ok: true, mock: true }, 200, origin);
  },
};
