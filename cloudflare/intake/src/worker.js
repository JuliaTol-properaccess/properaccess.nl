/**
 * Proper Access intake-Worker.
 *
 * Ontvangt het intakeformulier van properaccess.nl/intake als JSON en:
 *   1. maakt een kaartje aan op het GitHub Projects-bord (draft issue);
 *   2. zet dat kaartje in de juiste kolom op basis van de opleverdatum;
 *   3. stuurt de klant een bevestigingsmail met een samenvatting;
 *   4. stuurt Proper Access een interne melding.
 *
 * Er komen nergens prijzen in het formulier of op het kaartje. De Worker
 * zet alleen de velden over die binnenkomen.
 *
 * Secrets (via `wrangler secret put`):
 *   GITHUB_TOKEN    fijnmazige of classic PAT met Projects-rechten (read/write)
 *   AHASEND_API_KEY API-sleutel van AhaSend (EU), zelfde account als de CRM-Worker
 *
 * Vars (in wrangler.jsonc):
 *   PROJECT_OWNER   "JuliaTol-properaccess"
 *   PROJECT_NUMBER  "3"
 *   ALLOW_ORIGIN    "https://www.properaccess.nl"
 *   NOTIFY_EMAIL    "julia@properaccess.nl"
 *   FROM_EMAIL      afzender die in AhaSend is geverifieerd
 */

const DOORLOOPTIJD_DAGEN = 28; // normale doorlooptijd: 4 weken

// Volgorde en labels voor de samenvatting. Alleen ingevulde velden komen terug.
const VELDEN = [
  ["type_onderzoek", "Type onderzoek"],
  ["techniekonderzoek_bestaat", "Techniekonderzoek aanwezig"],
  ["techniekrapport_link", "Link techniekrapport"],
  ["regelkader", "Regelkader"],
  ["functionaliteiten_link", "Lijst met functionaliteiten"],
  ["onderzoeksobject", "Onderzoeksobject"],
  ["hoofddomein", "Hoofddomein"],
  ["omgeving", "Omgeving"],
  ["extra_domeinen", "Extra domeinen of subdomeinen"],
  ["app_naam", "Naam app"],
  ["app_platform", "Apparaat"],
  ["app_store_link", "Link App Store of Google Play"],
  ["app_taal", "Programmeertaal of framework"],
  ["documenten_omschrijving", "Documenten"],
  ["belangrijke_onderdelen", "Belangrijkste onderdelen"],
  ["toegang", "Toegang"],
  ["ip_whitelisting", "IP-whitelisting"],
  ["inloggegevens", "Inloggegevens"],
  ["inloggegevens_details", "Details inloggegevens"],
  ["hulp_oplossen", "Hulp bij oplossen"],
  ["klantplatform", "Klantplatform gewenst"],
  ["platform_gebruikers", "Platformgebruikers"],
  ["opleverdatum", "Uiterste datum rapport"],
  ["contact_naam", "Contactpersoon"],
  ["contact_email", "E-mailadres"],
  ["contact_telefoon", "Telefoonnummer"],
  ["contact2_naam", "Tweede contactpersoon"],
  ["contact2_email", "E-mailadres tweede contactpersoon"],
];

export default {
  async fetch(request, env) {
    const cors = corsHeaders(env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405, cors);
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return json({ ok: false, error: "Ongeldige aanvraag" }, 400, cors);
    }

    // Honeypot: bots vullen dit verborgen veld. Doe alsof het gelukt is.
    if (data._gotcha) {
      return json({ ok: true }, 200, cors);
    }

    if (!data.contact_email || !data.akkoord) {
      return json({ ok: false, error: "Verplichte velden ontbreken" }, 400, cors);
    }

    const summaryMd = buildSummary(data, "\n");
    const column = bepaalKolom(data.opleverdatum);
    const title = buildTitle(data);

    try {
      await maakKaartje(env, title, summaryMd, column);
    } catch (e) {
      return json({ ok: false, error: "Kaartje aanmaken mislukt" }, 502, cors);
    }

    // E-mails zijn niet kritiek voor het antwoord aan de bezoeker.
    try {
      await stuurKlantmail(env, data, summaryMd);
      await stuurInternemail(env, title, summaryMd, column);
    } catch (e) {
      // stil: het kaartje staat er, de mail proberen we niet opnieuw
    }

    return json({ ok: true }, 200, cors);
  },
};

/* ─────────────────────────── Samenvatting ─────────────────────────── */

function buildSummary(data, sep) {
  const lines = [];
  for (const [key, label] of VELDEN) {
    const val = (data[key] || "").toString().trim();
    if (val) lines.push(`**${label}:** ${val}`);
  }
  return lines.join(sep);
}

function buildTitle(data) {
  const wie = (data.contact_naam || "Onbekend").toString().trim();
  const wat =
    (data.hoofddomein || data.app_naam || data.onderzoeksobject || "onderzoek")
      .toString()
      .trim();
  const type = (data.type_onderzoek || "intake").toString().trim();
  return `Intake — ${wie} — ${wat} (${type})`;
}

/* ─────────────────────── Kolom bepalen ─────────────────────── */

function bepaalKolom(opleverdatum) {
  const deadline = new Date(opleverdatum);
  if (isNaN(deadline.getTime())) return "Backlog";

  // Startmoment = opleverdatum minus de normale doorlooptijd.
  const start = new Date(deadline);
  start.setDate(start.getDate() - DOORLOOPTIJD_DAGEN);

  // Binnen een maand starten? Dan is het klaar om op te pakken.
  const grens = new Date();
  grens.setMonth(grens.getMonth() + 1);

  return start <= grens ? "Ready to start" : "Backlog";
}

/* ─────────────────────── GitHub Projects ─────────────────────── */

async function gh(env, query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "properaccess-intake",
    },
    body: JSON.stringify({ query, variables }),
  });
  const body = await res.json();
  if (body.errors) {
    throw new Error("GitHub GraphQL: " + JSON.stringify(body.errors));
  }
  return body.data;
}

async function maakKaartje(env, title, bodyMd, columnName) {
  // 1. Project-id + Status-veld met opties ophalen (op naam, dus geen harde id's).
  const info = await gh(
    env,
    `query($login:String!, $number:Int!){
      user(login:$login){
        projectV2(number:$number){
          id
          field(name:"Status"){
            ... on ProjectV2SingleSelectField { id options { id name } }
          }
        }
      }
    }`,
    { login: env.PROJECT_OWNER, number: Number(env.PROJECT_NUMBER) }
  );

  const project = info.user && info.user.projectV2;
  if (!project) throw new Error("Project niet gevonden");
  const projectId = project.id;

  // 2. Draft issue als kaartje toevoegen.
  const added = await gh(
    env,
    `mutation($projectId:ID!, $title:String!, $body:String!){
      addProjectV2DraftIssue(input:{projectId:$projectId, title:$title, body:$body}){
        projectItem { id }
      }
    }`,
    { projectId, title, body: bodyMd }
  );
  const itemId = added.addProjectV2DraftIssue.projectItem.id;

  // 3. Kolom (Status) zetten, als het veld en de optie bestaan.
  const field = project.field;
  if (field && field.id) {
    const option = (field.options || []).find(
      (o) => o.name.trim().toLowerCase() === columnName.toLowerCase()
    );
    if (option) {
      await gh(
        env,
        `mutation($projectId:ID!, $itemId:ID!, $fieldId:ID!, $optionId:String!){
          updateProjectV2ItemFieldValue(input:{
            projectId:$projectId, itemId:$itemId, fieldId:$fieldId,
            value:{ singleSelectOptionId:$optionId }
          }){ projectV2Item { id } }
        }`,
        { projectId, itemId, fieldId: field.id, optionId: option.id }
      );
    }
  }
}

/* ─────────────────────────── E-mail (AhaSend) ─────────────────────────── */

async function sendEmail(env, to, subject, text) {
  // AhaSend transactional send. Verifieer endpoint en veldnamen tegen de
  // bestaande CRM-Worker (pipedrive-forms) voordat je live gaat.
  return fetch("https://api.ahasend.com/v2/email/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.AHASEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [{ email: to }],
      subject,
      text_body: text,
    }),
  });
}

function stuurKlantmail(env, data, summaryMd) {
  const naam = (data.contact_naam || "").split(" ")[0] || "";
  const plat = summaryMd.replace(/\*\*/g, "");
  const body =
    `Hoi ${naam},\n\n` +
    `Bedankt voor het invullen van het intakeformulier. We gaan je onderzoek inplannen.\n\n` +
    `Voor de zekerheid een samenvatting van wat je hebt ingevuld:\n\n` +
    `${plat}\n\n` +
    `Klopt er iets niet of wil je iets aanvullen? Beantwoord deze mail gewoon, dan passen we het aan.\n\n` +
    `Hartelijke groet,\nProper Access\n085 5055 890`;
  return sendEmail(env, data.contact_email, "Je intake bij Proper Access", body);
}

function stuurInternemail(env, title, summaryMd, column) {
  const plat = summaryMd.replace(/\*\*/g, "");
  const body = `Nieuwe intake, kolom: ${column}\n\n${title}\n\n${plat}`;
  return sendEmail(env, env.NOTIFY_EMAIL, `Nieuwe intake: ${title}`, body);
}

/* ─────────────────────────── Helpers ─────────────────────────── */

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOW_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(obj, status, extra) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...(extra || {}) },
  });
}
