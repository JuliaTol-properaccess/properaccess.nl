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
  ["organisatie", "Organisatie"],
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
  ["taal", "Taal rapport"],
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

    const summaryMd = buildSummary(data, "\n"); // Nederlands, voor de e-mails
    const cardBody = buildCardBody(data); // pijplijnformat, voor het kaartje
    const column = bepaalKolom(data.opleverdatum);
    const title = buildTitle(data);

    // Het kaartje is het doel, maar een weigerende GitHub mag de inzending
    // niet laten verdwijnen: dan komt de intake alsnog per mail binnen en
    // maken we de kaart met de hand. De klant vult dit formulier één keer in.
    let kaart = null;
    let kaartFout = "";
    try {
      kaart = await maakKaartje(env, title, cardBody, column);
    } catch (e) {
      kaartFout = (e && e.message) || String(e);
    }

    try {
      await stuurKlantmail(env, data, summaryMd);
    } catch (e) {
      // stil: de bevestiging aan de klant is niet waar de gegevens in zitten
    }

    let internOk = false;
    try {
      await stuurInternemail(env, title, summaryMd, column, kaart, kaartFout);
      internOk = true;
    } catch (e) {
      internOk = false;
    }

    // Alleen als er niets is gelukt, hoort de bezoeker het te weten.
    if (!kaart && !internOk) {
      return json({ ok: false, error: "Verzenden mislukt" }, 502, cors);
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
  const org = (data.organisatie || data.contact_naam || "Onbekend").toString().trim();
  const wat = (data.hoofddomein || data.app_naam || data.onderzoeksobject || "onderzoek")
    .toString()
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  return `${wat} (${org})`;
}

/* ─────────────── Kaartjes-body in pijplijnformat ─────────────── */
// De HQ-pijplijn (tools/board.py) parset '### Label' met de waarde eronder.
// Labels en waarden Engels, exact zoals templates/audit-intake.md, zodat het
// rapportproject de velden zonder aanpassing kan uitlezen.

function buildCardBody(data) {
  const audittype = mapAuditType(data);
  const domain = (data.hoofddomein || data.app_store_link || "").toString().trim();
  const rows = [
    ["Client", (data.organisatie || "").toString().trim()],
    ["Domain / URL", domain],
    ["Google Doc link (audit document)", ""],
    ["Reviewer (peer review)", ""],
    ["Drive folder link (screenshots)", ""],
    ["Audit type", audittype],
    ["WCAG version", mapWcag(audittype)],
    ["OS (app only)", mapOs(data)],
    ["Language", data.taal === "en" ? "EN" : "NL"],
    ["JSON needed (WCAG-EM)", data.regelkader === "overheid-bdto" ? "yes" : "no"],
    ["Presentation needed", "no"],
    ["Action plan needed", "no"],
    ["Report date", (data.opleverdatum || "").toString().trim()],
    ["Notes", buildNotes(data)],
    ["Sample", buildSample(domain)],
  ];
  return rows.map(([label, value]) => `### ${label}\n\n${value}\n`).join("\n");
}

/**
 * De steekproef, leeg maar met de kop erbij. tools/audit-start.py leest de
 * URL's uit "### Sample" en stopt met een foutmelding als de sectie ontbreekt.
 * Hier draait geen crawl, dus de auditor vult hem aan; het hoofddomein staat
 * er als eerste regel in zodat de vorm meteen klopt.
 */
function buildSample(domain) {
  const regels = [
    '<!-- One page per line: "- URL - Page name [template]". -->',
    "⚠ INCOMPLETE — this card comes from the intake form, so no crawl was run. Please compile the sample first.",
    "",
  ];
  if (domain) regels.push(`- ${domain}`);
  return regels.join("\n");
}

function mapAuditType(data) {
  if (data.onderzoeksobject === "app") return "app";
  // Content-audit zonder techniekonderzoek wordt een volledige audit.
  if (data.type_onderzoek === "content-audit" && data.techniekonderzoek_bestaat === "nee") {
    return "full";
  }
  const map = {
    "mini-audit": "mini",
    "website-audit": "full",
    "content-audit": "content",
    "techniekaudit": "technical",
    "systeemaudit": "full",
    "retest": "retest",
  };
  return map[data.type_onderzoek] || "";
}

function mapWcag(audittype) {
  if (audittype === "app") return "2.1";
  if (audittype === "retest") return "inherits-from-original";
  return "2.2";
}

function mapOs(data) {
  if (data.onderzoeksobject !== "app") return "n/a";
  if (data.app_platform === "ios") return "ios";
  if (data.app_platform === "android") return "android";
  return "n/a";
}

// Alles wat niet in een vaste kop past, onder Notes zodat er niets verdwijnt.
const NOTES_VELDEN = [
  ["regelkader", "Regelkader"],
  ["onderzoeksobject", "Onderzoeksobject"],
  ["belangrijke_onderdelen", "Belangrijkste onderdelen"],
  ["omgeving", "Omgeving"],
  ["extra_domeinen", "Extra domeinen"],
  ["app_naam", "Naam app"],
  ["app_taal", "Programmeertaal of framework"],
  ["techniekonderzoek_bestaat", "Techniekonderzoek aanwezig"],
  ["techniekrapport_link", "Link techniekrapport"],
  ["functionaliteiten_link", "Lijst met functionaliteiten"],
  ["toegang", "Toegang"],
  ["ip_whitelisting", "IP-whitelisting"],
  ["inloggegevens", "Inloggegevens"],
  ["inloggegevens_details", "Details inloggegevens"],
  ["hulp_oplossen", "Hulp bij oplossen"],
  ["klantplatform", "Klantplatform"],
  ["platform_gebruikers", "Platformgebruikers"],
  ["contact_naam", "Contactpersoon"],
  ["contact_email", "E-mailadres"],
  ["contact_telefoon", "Telefoonnummer"],
  ["contact2_naam", "Tweede contactpersoon"],
  ["contact2_email", "E-mailadres tweede contactpersoon"],
];

function buildNotes(data) {
  const lines = [];
  for (const [key, label] of NOTES_VELDEN) {
    const val = (data[key] || "").toString().trim();
    if (val) lines.push(`- ${label}: ${val}`);
  }
  return lines.join("\n");
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

async function ghRest(env, pad, init) {
  const res = await fetch(`https://api.github.com${pad}`, {
    method: (init && init.method) || "GET",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "properaccess-intake",
    },
    body: init && init.body,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`GitHub REST ${res.status}: ${data.message || "onbekende fout"}`);
  }
  return data;
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

  // 2. Een echte issue in de auditplanning-repo, geen draft. De pijplijn
  // (tools/board.py, tools/audit-start.py) haalt een kaart op via
  // repos/<repo>/issues/<nummer>; een draft heeft geen nummer en is voor de
  // pijplijn onzichtbaar.
  const issue = await ghRest(env, `/repos/${env.ISSUES_REPO}/issues`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body: bodyMd,
      labels: ["PA"],
      assignees: [env.ASSIGNEE],
    }),
  });

  // 3. Issue op het bord zetten.
  const added = await gh(
    env,
    `mutation($projectId:ID!, $contentId:ID!){
      addProjectV2ItemById(input:{projectId:$projectId, contentId:$contentId}){
        item { id }
      }
    }`,
    { projectId, contentId: issue.node_id }
  );
  const itemId = added.addProjectV2ItemById.item.id;

  // 4. Kolom (Status) zetten, als het veld en de optie bestaan.
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

  return { number: issue.number, url: issue.html_url };
}

/* ─────────────────────────── E-mail (AhaSend) ─────────────────────────── */

async function sendEmail(env, to, subject, text) {
  // AhaSend transactional send. Zelfde vorm als de portaal-mailservice.
  const url = `https://api.ahasend.com/v2/accounts/${env.AHASEND_ACCOUNT_ID}/messages`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.AHASEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: { email: env.FROM_EMAIL, name: env.FROM_NAME || "Proper Access" },
      recipients: [{ email: to }],
      subject,
      text_content: text,
    }),
  });
  // Een geweigerde mail komt terug als 4xx, niet als exception. Zonder deze
  // controle zou de aanroeper denken dat de intake veilig is aangekomen.
  if (!res.ok) {
    const melding = await res.text().catch(() => "");
    throw new Error(`AhaSend ${res.status}: ${melding.slice(0, 200)}`);
  }
  return res;
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

function stuurInternemail(env, title, summaryMd, column, kaart, kaartFout) {
  const plat = summaryMd.replace(/\*\*/g, "");
  const kop = kaart
    ? `Kaartje #${kaart.number}: ${kaart.url}\nKolom: ${column}`
    : `LET OP: het kaartje is niet aangemaakt (${kaartFout}). Maak het met de hand aan, kolom ${column}.`;
  const body = `Nieuwe intake\n\n${kop}\n\n${title}\n\n${plat}`;
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
