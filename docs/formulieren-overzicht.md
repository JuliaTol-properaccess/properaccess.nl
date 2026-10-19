# Waar gaan de formulieren op onze websites naartoe?

Overzicht van elk formulier op properaccess.nl, testtoegankelijkheid.nl, wcagtoolkit.com en
eaa-monitor.nl: op welke pagina het staat, waar de inzending heen gaat, of de inzender een
bevestiging krijgt en welke tweede route er nog loopt. pdf-toegankelijk.nl valt buiten dit
overzicht.

Gevraagd door Julia via Chief op 16 oktober 2026, nadat bleek dat het contactformulier op
properaccess.nl naar `juliatol@properaccess.nl` gaat en niet naar `info@`.

## Hoe dit gemeten is

- **properaccess.nl**: `origin/main` op commit `4edc0972`, lokaal gebouwd met Hugo 0.154.5. De
  formulieren zijn geteld in de gebouwde HTML, niet in de bron, want drie layouts in de repo
  renderen niet meer. Daarna steekproefgewijs nagekeken op de live site met `curl`.
- **testtoegankelijkheid.nl en wcagtoolkit.com**: `wcag-scan` op `df6bbe2`.
- **eaa-monitor.nl**: `eaa-monitor` op `6046177`.
- **Het CRM**: `proper-access-crm` op `5458d1a`.
- Elk endpoint is live aangeroepen met een onvolledige inzending, zodat het antwoord de
  validatie van de code laat zien zonder dat er een echte aanvraag ontstaat.

Twee dingen kan ik niet van buiten lezen, en die staan hieronder als aanname:

- De **uitgerolde** code van een Cloudflare Worker. Ik lees de bron in de repo. Julia rolt uit,
  dus een worker kan in theorie achterlopen op wat hier staat. Voor de `pipedrive-forms`-worker
  klopt de bron met wat in de andere draad is gevonden.
- De **omgevingsvariabelen op de server van testtoegankelijkheid.nl**. Die staan in
  `deploy/.env` en kunnen het standaardadres overschrijven.

## properaccess.nl

### De gedeelde route

Elk formulier op properaccess.nl, behalve de intake, stuurt via
`static/js/form-submit.js` (regel 18) naar de Cloudflare Worker `pipedrive-forms` op
`https://pipedrive-forms.juliatol.workers.dev/submit`. Elk formulier geeft daarbij zijn eigen
`bron` mee. De worker doet drie dingen:

1. **Naar het CRM**: `tools/pipedrive-forms/worker.js` regel 24 en 125, naar
   `https://crm.properaccess.nl/api/webhooks/website-form`. Dat endpoint is live en antwoordt
   met 401 op een verkeerd geheim.
2. **Een interne mail** via AhaSend naar `NOTIFY_EMAIL`, en dat staat op
   `juliatol@properaccess.nl` in `tools/pipedrive-forms/worker.js` regel 29. De mail gaat weg
   als `noreply@properaccess.nl` met de inzender als antwoordadres.
3. **Een mail naar de inzender**, alleen bij een quiz met een score.

Er is één uitzondering, in `NOTIFY_OVERRIDES` op regel 32 tot 34: `offerte-audit` gaat naar
`info@properaccess.nl`. Let op hoe de code die lijst gebruikt. Alleen de offerte-tak
leest hem, op regel 395. De algemene tak op regel 438 stuurt naar `NOTIFY_EMAIL` zonder naar de
lijst te kijken. **Een nieuwe bron in `NOTIFY_OVERRIDES` zetten verandert dus niets**, zolang
regel 438 niet mee verandert.

Dat laatste is onderweg. Pull request 336, "Contactformulier NL en EN: meldingsmail naar
info@properaccess.nl", zet `contactformulier` en `contactformulier-en` in de lijst **en** zet op
regel 438 `NOTIFY_OVERRIDES[bron] || NOTIFY_EMAIL`. Die pull request stond op 16 oktober 2026 nog
open. Gaat hij erin, dan is de lijst de enige plek die telt en is elk volgend formulier een regel
erbij. De regelnummers in dit document schuiven er dan twee op.

Daarnaast stuurt `form-submit.js` bij elke gelukte inzending een `form_submission`-gebeurtenis
naar Plausible, met de bron als eigenschap. Dat is telemetrie en geen postbus.

### Per formulier

| Formulier | Pagina | bron | Interne mail | Bevestiging aan inzender | Tweede route |
|---|---|---|---|---|---|
| Contactformulier | `/contact/` | `contactformulier` | juliatol@ | nee | CRM: todo of lead |
| Contactformulier Engels | `/en/contact/` | `contactformulier-en` | juliatol@ | nee | CRM: lead |
| Blok "Klaar om te beginnen" | 32 pagina's | `contactformulier` | juliatol@ | nee | CRM: todo of lead |
| Blok in een tekstsectie | 3 pagina's | `contactformulier` | juliatol@ | nee | CRM: todo of lead |
| Homepage Nederlands | `/` | `homepage-b` | juliatol@ | nee | CRM: lead |
| Homepage Engels | `/en/` | `homepage-footer-en` | juliatol@ | nee | CRM: lead |
| Monitoring | `/automatische-monitoring/` | `monitoring` | juliatol@ | nee | CRM: lead |
| Klachtenformulier | `/klachtenregeling/` | `klacht` | juliatol@ | nee, met de hand | CRM: lead |
| Offerte-rekentool | 2 pagina's | `offerte-audit` | **info@** | nee | CRM: lead |
| Mini-audit webshop | `/webshop-quickscan/` | `mini-audit-quickscan` | juliatol@ | nee | CRM: lead |
| Mini-audit e-commerce | `/e-commerce-digitale-toegankelijkheid/` | `mini-audit-ecommerce` | juliatol@ | nee | CRM: lead |
| Quiz voor developers | 2 pagina's | `quiz` | juliatol@ | ja, met de tips | CRM: lead |
| Quiz voor musea | 2 pagina's | `quiz museum` | juliatol@ | ja, met de tips | CRM: lead |
| Quiz voor webredactie | 2 pagina's | `quiz webredactie` | juliatol@ | ja, met de tips | CRM: lead |
| Intakeformulier | `/intake/` en `/en/intake/` | `intake` | **julia@** | ja, met een samenvatting | kaartje op het auditbord |

Wat het CRM met een inzending doet, staat in
`proper-access-crm`, `src/app/api/webhooks/website-form/route.ts`. Het maakt of werkt een
contact bij en maakt daarna een lead in de kolom "nieuw". Eén uitzondering, op regel 46 en
169: een inzending met bron `contactformulier` wordt alleen een lead als er een woord als
"offerte", "prijs", "kosten" of "audit" in staat. Zonder zo'n woord wordt het een todo
"Contactvraag beantwoorden". Alle andere bronnen worden altijd een lead.

Nu de details per formulier.

**Contactformulier, `/contact/`**
Het formulier in de kop van de pagina, met het id `contact-hero-form`, uit
`layouts/contact/list.html` regel 30 tot 34. Velden: naam, e-mailadres, organisatie, telefoon
en bericht. Interne mail naar juliatol@, onderwerp "Website: contactformulier". De inzender
krijgt alleen een melding op de pagina: "Bericht verstuurd! We nemen binnen 1 werkdag contact
op."

**Contactformulier Engels, `/en/contact/`**
Dit is een formulier in het contentbestand zelf, `content/english/contact/_index.md` regel 40,
met bron `contactformulier-en`. Op dezelfde pagina staan nog twee formulieren met de bron
`contactformulier`: het hero-formulier uit dezelfde layout als de Nederlandse pagina, en het
blok "Klaar om te beginnen". Drie formulieren op één pagina, met twee verschillende bronnen.

**Het blok "Klaar om te beginnen", 32 pagina's**
Uit `layouts/partials/call-to-action.html` regel 43 tot 47, met het id `cta-form`. Dertien van
die 32 pagina's staan onder `/en/` en sturen toch de Nederlandse bron `contactformulier` mee.
Een Engelse aanvraag is in het CRM daardoor niet te onderscheiden van een Nederlandse. De
volledige lijst staat onderaan dit document.

**Het blok in een tekstsectie, 3 pagina's**
Uit de shortcode `layouts/shortcodes/section-split.html` regel 38. Staat op
`/digitale-toegankelijkheid/`, `/onderwijs-digitale-toegankelijkheid/` en `/strippenkaart/`.
Bron `contactformulier`, dus ook deze inzending wordt alleen een lead als er een offertewoord
in het bericht staat.

**Homepage Nederlands, `/`**
`layouts/_default/homepage-b.html` regel 250 tot 254, id `hb-contact-form`, bron `homepage-b`.
De homepage heeft daarboven ook een vraagvenster met het id `hb-vraag-form`. Dat is de chat en
geen formulier met een bestemming; zie "Formulieren zonder postbus".

**Homepage Engels, `/en/`**
`layouts/_default/homepage-en.html` regel 635 tot 639, id `hp-contact-form-2`, bron
`homepage-footer-en`.

**Monitoring, `/automatische-monitoring/`**
`layouts/_default/monitoring.html` regel 332 tot 336, id `mo-contact-form`, bron `monitoring`.
De rekenhulp hoger op die pagina, id `mo-rekenhulp`, rekent alleen in de browser en stuurt
niets.

**Klachtenformulier, `/klachtenregeling/`**
`layouts/klachten/single.html` regel 54 tot 58, bron `klacht`. De interne mail krijgt een eigen
onderwerpregel "Klacht: <naam>", gezet in `tools/pipedrive-forms/worker.js` regel 370. De
melding op de pagina belooft iets wat geen code doet: "Je krijgt binnen 2 werkdagen een
persoonlijke bevestiging van ons." Die bevestiging moet dus met de hand. In het CRM wordt een
klacht een lead in de verkooppijplijn, want `klacht` staat niet in de lijst met titels en valt
daarmee in de algemene tak.

**Offerte-rekentool, 2 pagina's**
`layouts/partials/offerte-calculator.html` regel 15, met `static/js/offerte-form.js` regel 339
tot 343. Staat op `/offerte-wcag-onderzoek/` en op `/toegankelijkheid-testen-tijdens-de-bouw/`.
Dit is het enige formulier waarvan de interne mail naar `info@properaccess.nl` gaat, met het
onderwerp "Offerte-aanvraag: <organisatie>" en de volledige scope eronder. De inzender krijgt
geen mail, alleen de melding op de pagina: "Bedankt, je aanvraag is binnen. We sturen je binnen
1 werkdag een offerte op maat."

**Mini-audit webshop, `/webshop-quickscan/`**
`layouts/quickscan/single.html` regel 410, met het script op regel 480 tot 489. Na een gelukte
inzending gaat de bezoeker naar `/webshop-quickscan-bedankt/`. Geen mail aan de inzender, en de
pagina zegt dat wij contact opnemen en de factuur sturen.

**Mini-audit e-commerce, `/e-commerce-digitale-toegankelijkheid/`**
`layouts/voor_wie/ecommerce.html` regel 45 en 94, id `ec-qs-form`. Op dezelfde pagina staat ook
het blok "Klaar om te beginnen" met bron `contactformulier`.

**De drie quizzen, 6 pagina's**
`static/js/accessibility-quiz.js` regel 718 (`/tools/quiz-developers/` en
`/en/tools/quiz-developers/`), `static/js/museum-quiz.js` regel 748 (`/tools/quiz-museum/` en
`/en/tools/quiz-museum/`) en `static/js/webredactie-quiz.js` regel 615
(`/tools/quiz-webredactie/` en `/en/tools/quiz-web-editors/`). De deelnemer krijgt een mail met
zijn score en tips per zwakke categorie, opgebouwd in `tools/pipedrive-forms/worker.js` vanaf
regel 240, met de tips per categorie vanaf regel 165. Die mail gaat hooguit één keer per 24 uur per adres, zodat het endpoint niet als
mailversterker te gebruiken is. De interne melding met de score gaat naar juliatol@.

**Intakeformulier, `/intake/` en `/en/intake/`**
Het enige formulier met een eigen worker. `layouts/intake/single.html` en `single.en.html`
regel 13, met `static/js/intake-form.js` regel 12 en 134, naar
`https://properaccess-intake.juliatol.workers.dev/submit`. Die worker staat in
`cloudflare/intake/src/worker.js` en doet drie dingen:

1. een issue met het label `PA` in `JuliaTol-properaccess/audit-planning`, als kaartje op het
   auditbord in de kolom "Backlog" of "Ready to start";
2. een bevestiging aan de inzender met een samenvatting van de antwoorden, regel 504;
3. een interne melding naar `NOTIFY_EMAIL`, regel 513. Dat adres staat op
   **`julia@properaccess.nl`** in `cloudflare/intake/wrangler.jsonc` regel 12, en dat is een
   ander persoonlijk adres dan de `juliatol@` van de andere formulieren.

Een intake komt niet in het CRM. Weigert GitHub, dan mailt de worker de hele intake alsnog naar
`julia@` en krijgt de bezoeker toch een bevestiging; dat staat in `cloudflare/intake/README.md`.

### Formulieren zonder postbus

Deze staan wel als `<form>` in de pagina, maar er gaat geen inzending naar een adres of een
dienst:

- **De chat**, id `pa-chat-form`, op 738 van de gebouwde pagina's. Gaat naar
  `https://pa-chat.juliatol.workers.dev/chat` (`static/js/chat-widget.js` regel 4). De vraag en
  het antwoord blijven 90 dagen in een D1-database staan, zie `tools/chat-worker/README.md`.
  Niemand krijgt er een mail van. Het vraagvenster op de homepage, `hb-vraag-form`, is dezelfde
  chat (`static/js/homepage-b.js` regel 11).
- **De twee generatoren voor een toegankelijkheidsverklaring**, id `wizardForm`, op
  `/tools/toegankelijkheidsverklaring-generator/` en `-wdo/`. `static/js/tool-verklaring.js` en
  `tool-verklaring-wdo.js` hebben geen enkele `fetch`: alles blijft in de browser.
- **De rekenhulp op de monitoringpagina**, id `mo-rekenhulp`.
- **Het wachtwoordvenster op `/klanten/amersfoort/`**, id `amf-gate-form`. Vergelijkt een
  sha256-hash in de browser (`layouts/klanten/single.html` regel 151 tot 164).
- **De inlogvensters bij afgeschermde rapporten**, op `/rapporten/` en `/rapporten/pnh/`, plus
  een staticrypt-venster bij één rapport. Die lopen via de worker in `cloudflare/report-auth/`
  of ontsleutelen in de browser.
- **De zoekformulieren** op de site.

### Formulieren die eraf zijn gehaald

- **De nieuwsbrief-aanmelding** staat in `layouts/partials/essentials/footer.html` regel 1 tot
  26, maar het hele blok is uitgecommentarieerd met `{{/* Nieuwsbrief-formulier tijdelijk
  uitgeschakeld`. Het id `newsletter-form` komt op nul gebouwde pagina's voor. De bron
  `nieuwsbrief` bestaat nog wel in het CRM, dus een oude inzending is daar terug te vinden.
- **De wachtlijst voor de PDF-reparatietool**, bron `pdf-tool-wachtlijst`, is op 14 oktober
  2026 van `/tools/pdf-checker/` gehaald op besluit van Julia. Dat staat in het commentaar
  bovenaan `layouts/tools/pdf-tool-aankondiging.html`. Het CRM kan die bron nog verwerken en
  hangt er een eigen label aan.
- **Er is geen inschrijfformulier voor een training.** `/trainen-van-webredactie/` en
  `/training-devteams/` wijzen met een link naar `/contact/`. Het voorstel voor een open
  dagcursus met een eigen voorinschrijving staat in `proper-access-marketing`,
  `docs/open-dagcursus-webredactie-2026-10-08.md`, en is niet gebouwd.
- Er staat op properaccess.nl geen enkel formulier bij een dienst van buiten. Geen Formspree,
  geen Typeform, geen Google Forms, geen Mailchimp.

## testtoegankelijkheid.nl en wcagtoolkit.com

Eén codebase, twee domeinen, de taal volgt het domein. De paden zijn op beide domeinen gelijk;
`/offerte` en `/quote` leiden naar elkaar door. De mail gaat via AhaSend. Het interne adres
komt uit `QUOTE_INBOX` in `wcag-scan`, `lib/email.ts` regel 18, en staat standaard op
`info@properaccess.nl`. In `deploy/env.example` regel 86 staat de variabele leeg, dus zonder een
waarde in `deploy/.env` op de server geldt het standaardadres. Het antwoordadres van elke
uitgaande mail is ook `info@properaccess.nl`, uit `lib/email-transport.ts` regel 83.

| Formulier | Pagina | Interne mail | Bevestiging aan inzender | Tweede route |
|---|---|---|---|---|
| Rapport van een scan opvragen | `/scan` | **geen** | ja, het rapport | bestand in `leads/` |
| Offerte-aanvraag | `/offerte` en `/quote` | info@ | ja, een samenvatting | bestand in `quotes/` |
| Feedback | `/feedback` en 3 andere plekken | info@ | nee | geen |
| Inloglink aanvragen | `/inloggen` | geen | ja, de inloglink | geen |

**Rapport van een scan opvragen, `/scan`**
`app/scan/ScanFlow.tsx`, verwerkt in `app/api/lead/route.ts`. De bezoeker vult naam, functie,
e-mailadres en drie vragen over de wet in. Regel 43: de aanvraag gaat als JSON-bestand naar
`$DATA_DIR/leads/` op de server. Regel 64: de bezoeker krijgt het rapport gemaild. **Verder
gebeurt er niets.** Geen interne mail, geen CRM, geen melding. Alleen `deploy/backup.sh` raakt
die map nog aan. Wie deze leads wil zien, moet op de server kijken.

**Offerte-aanvraag, `/offerte` en `/quote`**
`app/offerte/QuoteForm.tsx`, verwerkt in `app/api/quote/route.ts`. Regel 75 bewaart de aanvraag
in `$DATA_DIR/quotes/`, regel 77 stuurt twee mails: de interne naar `QUOTE_INBOX`
(`lib/email.ts` regel 390) en een bevestiging met een samenvatting naar de aanvrager (regel
406).

**Feedback**
`app/feedback/FeedbackForm.tsx` op `/feedback`, en als dialoogvenster op `/inloggen`, `/portaal`
en `/wcag-radar`. Gaat naar `QUOTE_INBOX` (`lib/email.ts` regel 475), met de bron erbij in de
onderwerpregel. Een licentiesleutel in het bericht wordt eruit gehaald voordat de mail weggaat.
Geen bevestiging aan de inzender.

**Inloglink, `/inloggen`**
`app/inloggen/LoginForm.tsx` naar `app/api/auth/request`. Stuurt alleen een inloglink naar het
opgegeven adres.

**In het portaal** staan nog een accountformulier en een formulier voor de licentieplekken.
Die horen bij een ingelogde klant. De mails daaruit, zoals een licentiesleutel, een factuur of
een verlenging, gaan naar de klant zelf. Eén interne mail komt daar vandaan zonder formulier:
de melding dat proefplekken aflopen, naar `PROMO_INBOX`, dat terugvalt op `QUOTE_INBOX`
(`lib/email.ts` regel 21 en 376).

## eaa-monitor.nl

Alle formulieren gaan naar `https://eaa-monitor.nl/api/...`, naar de worker in
`eaa-monitor`, `worker/src/index.js`. Het interne adres is `info@eaa-monitor.nl`
(`worker/wrangler.jsonc` regel 34), met een eigen postbus `vragen@eaa-monitor.nl` voor anonieme
vragen (regel 40). Beide adressen lopen via Cloudflare Email Routing naar een echte postbus;
welke dat is, staat in het Cloudflare-dashboard en niet in de repo.

| Formulier | Pagina | Interne mail | Bevestiging aan inzender | Tweede route |
|---|---|---|---|---|
| Offerte-aanvraag voor een audit | `/hulp-nodig.html` | info@eaa-monitor.nl | nee | geen |
| Bezwaar tegen vermelding | `/bezwaar.html` | alleen zonder domeinmatch | ja, een bevestigingslink | pull request |
| Klopt iets niet? | `/melden.html` | info@eaa-monitor.nl | nee | geen |
| Anonieme vraag | `/vraag-stellen.html` | vragen@eaa-monitor.nl | nee | geen |
| Aanmelding Vierogen-pact | `/vierogen-pact.html` | info@eaa-monitor.nl | nee | geen |
| Nominatie eregalerij | `/nomineren.html` | nee | ja, een bevestigingslink | commit naar `main` |
| Stem in de eregalerij | `/eregalerij.html` | nee | ja, een bevestigingslink | teller in KV |
| Nieuwsbrief | 31 pagina's | **geen** | ja, een bevestigingslink | KV-sleutel `sub:<adres>` |
| Feedback op een artikel | 7 artikelen | info@eaa-monitor.nl | nee | geen |

**Offerte-aanvraag, `/hulp-nodig.html`**
Het id is `offerte-form`, naar `POST /api/offerte`. De mail naar `info@eaa-monitor.nl` staat in
`worker/src/index.js` regel 1531 tot 1560 en zegt in de tekst wat de bedoeling is: de aanvraag
doorsturen naar de bureaus in `data/auditbureaus.json`, en zolang die lijst leeg is gaat de
aanvraag naar Proper Access. De aanvrager krijgt geen mail.

**Bezwaar, `/bezwaar.html`**
`POST /api/submit`, afgehandeld vanaf regel 159. Komt het e-mailadres van hetzelfde domein als
de webshop, dan krijgt de inzender een bevestigingslink en opent `/confirm` daarna een pull
request op `data/objections.json` (regel 1184 tot 1248). Is er geen domeinmatch, dan gaat de
melding met de mail naar `info@eaa-monitor.nl` en verwerkt Julia het met de hand.

**Nieuwsbrief, 31 pagina's**
`POST /api/newsletter`, met dubbele opt-in. Na de bevestiging staat de inschrijving als
`sub:<adres>` in de KV-namespace `NEWSLETTER` (`worker/wrangler.jsonc` regel 17). **Er gaat
geen melding naar een postbus.** Wie wil weten hoeveel inschrijvingen er zijn, moet de KV
uitlezen met `wrangler`.

**Nominatie en stem in de eregalerij**
`POST /api/hof/nominate` en `/api/hof/vote`, beide met een bevestigingslink naar de inzender.
Een bevestigde nominatie commit de worker rechtstreeks naar `main`, zonder pull request; dat is
een besluit van 21 juni 2026 en staat in de `CLAUDE.md` van de repo. Een bevestigde stem gaat
naar een teller in KV.

**Feedback op een artikel**
Id `feedback-form`, op de 7 Nederlandse kennisbankartikelen. Komt uit
`tools/build_articles.py`, dus elk nieuw artikel krijgt het formulier mee. De Engelse artikelen
hebben het niet. Gaat naar `info@eaa-monitor.nl` met de artikeltitel in de onderwerpregel.

Er loopt ook een interne route zonder formulier: `POST /api/alert` mailt storingen uit de
GitHub Actions-workflows naar `info@eaa-monitor.nl`, beveiligd met een token in een header
(vanaf regel 337).

## Advies

### Naar info@

1. **Alle contactformulieren op properaccess.nl.** Dit zijn de 37 plekken met bron
   `contactformulier` of `contactformulier-en`, plus de homepages, de monitoringpagina en de
   twee mini-audits. Een aanvraag die op één persoonlijk adres binnenkomt, blijft liggen zodra
   die persoon een week weg is. De offerte-rekentool staat al op `info@` en dat bewijst dat de
   route werkt.
2. **Het klachtenformulier.** Een klacht moet aantoonbaar binnen een termijn worden behandeld,
   en de pagina belooft een bevestiging binnen 2 werkdagen. Dat hoort niet van één postbus af te
   hangen. Mijn voorstel: `info@`, en daarnaast een automatische bevestiging aan de inzender in
   plaats van een belofte die met de hand moet.
3. **De drie quizzen.** De deelnemer krijgt zijn tips al automatisch. De interne melding is
   opvolgwerk en hoort bij de postbus die het team leest.
4. **Het rapport van een scan op testtoegankelijkheid.nl.** Hier is het geen kwestie van een
   verkeerd adres: er is helemaal geen adres. Iemand vult naam, functie en e-mailadres in en de
   aanvraag wordt een bestand op de server waar niets naar kijkt. Dit is van de vier sites het
   grootste gat. Voorstel: dezelfde interne mail als bij een offerte-aanvraag, naar `info@`.
5. **De nieuwsbrief van eaa-monitor.nl.** Niemand ziet een inschrijving. Ook hier is een
   melding naar `info@eaa-monitor.nl` het kleinste dat helpt, al is een maandelijkse telling
   misschien handiger dan een mail per inschrijving.

### Wat bij een persoonlijk adres kan blijven

1. **Het intakeformulier**, nu naar `julia@properaccess.nl`. Een intake komt alleen bij een
   klant terecht met wie al een opdracht loopt, en het echte signaal is het kaartje op het
   auditbord. De mail is een kopie. Wel twee punten: dit adres is een ander persoonlijk adres
   dan de `juliatol@` van de rest, en de intake komt niet in het CRM. Als Julia er één adres van
   wil maken, is dit het moment.
2. **De aanmelding voor het Vierogen-pact en de nominaties voor de eregalerij.** Dat zijn
   redactionele beslissingen over eaa-monitor.nl en geen omzet. Die mogen bij het adres blijven
   waar ze nu staan, maar dat is al `info@eaa-monitor.nl` en dus geen persoonlijke postbus.
3. **De feedbackformulieren**, op zowel eaa-monitor.nl als testtoegankelijkheid.nl. Ook geen
   aanvraag. Nu al niet bij een persoon.

### Twee dingen om los van de adressen te regelen

- **De override in de worker werkt maar half, en pull request 336 repareert dat.** Op `main`
  wordt `NOTIFY_OVERRIDES` alleen gelezen in de offerte-tak van `sendNotificationEmail` (regel
  395); de algemene tak op regel 438 kijkt er niet naar. Wie nu een bron naar een ander adres
  wil sturen zonder 336, moet ook regel 438 aanpassen, anders lijkt de wijziging gedaan en
  verandert er niets. Met 336 erin is de lijst de enige plek die telt. Daarmee is het advies
  hierboven uit te voeren met één regel per bron, plus een uitrol van de worker door Julia:
  `npx wrangler deploy worker.js --name pipedrive-forms` in `tools/pipedrive-forms`.
- **Dertien Engelse pagina's sturen de Nederlandse bron `contactformulier` mee.** Daardoor is
  een Engelse aanvraag in het CRM niet te herkennen, en valt hij ook onder de regel die alleen
  bij een Nederlands woord als "offerte" of "kosten" een lead maakt. Een Engelse aanvraag met
  "quote" erin komt er nog wel door, want dat woord staat in de lijst, maar "price" en "cost"
  niet.

## Bijlage: de 32 pagina's met het blok "Klaar om te beginnen"

Gemeten in de gebouwde HTML op het id `cta-form`. Alle 32 sturen bron `contactformulier`.

`/app-toegankelijkheid-testen/`, `/auditbureau-kiezen/`,
`/blog/checklist-toegankelijke-content/`, `/diensten/`, `/digital-agency/`,
`/digitale-toegankelijkheid-overheid/`, `/eaa/`,
`/e-commerce-digitale-toegankelijkheid/`, `/en/about-us/`, `/en/accessibility-audit/`,
`/en/accessibility-credits/`, `/en/app-accessibility-audit/`, `/en/contact/`,
`/en/eaa-acm-e-commerce/`, `/en/eaa-afm-financial-services/`,
`/en/eaa-ilt-passenger-transport/`, `/en/e-commerce-digital-accessibility/`,
`/en/european-accessibility-act/`, `/en/mini-audit/`,
`/en/software-suppliers-dutch-government/`, `/en/tools/wcag-radar/`,
`/financiele-instellingen-digitale-toegankelijkheid/`,
`/hulp-bij-europese-toegankelijkheidswetgeving/`,
`/inclusie-cultuur-sport-en-attracties/`, `/offerte-wcag-onderzoek/`, `/onderzoek/`,
`/sectoren/`, `/strippenkaart/`, `/toegankelijkheidsaudit/`,
`/toegankelijkheid-testen-tijdens-de-bouw/`, `/tools/wcag-radar/`, `/zo-werken-wij/`.
