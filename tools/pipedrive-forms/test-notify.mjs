// Lokale controle van de ontvanger van de meldingsmail, zonder wrangler.
// Draait de echte worker met een nagebootste fetch en print per bron het
// adres waar AhaSend de melding naartoe zou sturen.
//
//   node tools/pipedrive-forms/test-notify.mjs

import worker from "./worker.js";

const env = {
  WEBSITE_FORM_SECRET: "test",
  AHASEND_API_KEY: "test",
  AHASEND_ACCOUNT_ID: "test",
};

const bronnen = [
  "contactformulier",
  "contactformulier-en",
  "offerte-audit",
  "nieuwsbrief",
  "klacht",
];

const echteFetch = globalThis.fetch;
let ontvangers = [];

globalThis.fetch = async (url, init) => {
  const body = init && init.body ? JSON.parse(init.body) : {};
  if (String(url).includes("ahasend.com")) {
    ontvangers.push(body.recipients.map((r) => r.email).join(", "));
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

let fouten = 0;
for (const bron of bronnen) {
  ontvangers = [];
  const verwacht =
    bron === "nieuwsbrief" || bron === "klacht"
      ? "juliatol@properaccess.nl"
      : "info@properaccess.nl";

  const request = new Request("https://pipedrive-forms.juliatol.workers.dev/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", "CF-Connecting-IP": "203.0.113." + bronnen.indexOf(bron) },
    body: JSON.stringify({ bron, email: "klant@voorbeeld.nl", naam: "Test Klant", bericht: "Hallo" }),
  });

  const res = await worker.fetch(request, env);
  const uitkomst = await res.json();
  const gekregen = ontvangers.join(" + ") || "(geen mail)";
  const goed = gekregen === verwacht;
  if (!goed) fouten++;
  console.log(
    (goed ? "ok  " : "FOUT") + "  bron=" + bron.padEnd(20) +
    " status=" + res.status + " " + JSON.stringify(uitkomst) +
    " melding naar: " + gekregen + " (verwacht: " + verwacht + ")"
  );
}

globalThis.fetch = echteFetch;
process.exit(fouten === 0 ? 0 : 1);
