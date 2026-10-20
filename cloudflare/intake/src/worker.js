// Sinds 20 oktober 2026 loopt de intake via het portaal
// (https://portaal.properaccess.nl/intake). Deze Worker maakte eerst een
// kaartje op het auditbord; dat doet hij niet meer. Wie nog naar /submit
// post, bijvoorbeeld vanuit een oude pagina in de cache, krijgt 410 met de
// weg naar het portaal. De oude code staat in de git-historie.

const PORTAAL_INTAKE = "https://portaal.properaccess.nl/login?volgende=/intake";

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOW_ORIGIN || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    return new Response(
      JSON.stringify({
        ok: false,
        error: "De intake loopt nu via het portaal: " + PORTAAL_INTAKE,
        portaal: PORTAAL_INTAKE,
      }),
      { status: 410, headers: { ...cors, "Content-Type": "application/json" } },
    );
  },
};
