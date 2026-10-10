# Proper Access intake-Worker

Verwerkt het intakeformulier van `properaccess.nl/intake`. Voor elke inzending:

1. maakt een issue aan in `ProperAccessbv/audit-planning`, met label `PA`;
2. zet die issue als kaartje op het GitHub Projects-bord, in de juiste kolom op basis van de opleverdatum;
3. mailt de klant een bevestiging met een samenvatting;
4. mailt Proper Access een interne melding, met het nummer van het kaartje erbij.

Dit is sinds augustus 2026 de enige plek waar een auditkaartje ontstaat. Het CRM maakte er eerst ook een bij het ondertekenen van een offerte; dat leverde twee kaartjes per opdracht op en is eruit gehaald.

Het moet een echte issue zijn, geen draft. De pijplijn in `~/git/ProperAccess` haalt een kaart op via `repos/<repo>/issues/<nummer>`, en een draft heeft geen nummer.

De steekproef staat leeg op het kaartje, onder de kop `### Sample` met het hoofddomein als eerste regel. Hier draait geen crawl. Sinds 5 september 2026 vult de pijplijn in `~/git/ProperAccess` hem in: `tools/inventaris-check.sh` draait elke 30 minuten voor kaartjes in "Ready to start", inventariseert de site (pagina's, PDF's, tabellen, iframes, video, formulieren) en zet een steekproefvoorstel in de lege sectie. De auditor vult daarna aan tot 100%. `tools/audit-start.py` stopt met een foutmelding als de sectie ontbreekt.

Er komen **geen prijzen** in het formulier of op het kaartje. De Worker zet alleen de binnengekomen velden over.

## Als GitHub weigert

Dan verdwijnt de inzending niet. De Worker mailt de intake alsnog naar `NOTIFY_EMAIL`, met de foutmelding erboven, en antwoordt de bezoeker met `ok`. Maak het kaartje dan met de hand aan. Pas als ook die mail faalt, krijgt de bezoeker een foutmelding te zien en kan hij het opnieuw proberen.

## Kolomlogica

Het startmoment is de opleverdatum min 4 weken doorlooptijd. Ligt dat startmoment binnen een maand, dan gaat het kaartje naar **Ready to start**, anders naar **Backlog**. De kolom wordt gematcht op naam, dus je kunt de opties op het bord hernoemen zonder de Worker aan te passen (houd de namen dan wel gelijk of pas ze hier aan).

## Eenmalig instellen

### 1. GitHub App

Sinds oktober 2026 werkt de Worker met de GitHub App `properaccess-agents` (App ID 5196791) en niet meer met een persoonlijk token. Per intake haalt hij een token op dat een uur geldig is, alleen voor `audit-planning` en alleen met rechten op issues en het bord. Het bord is project 1 van de organisatie ProperAccessbv; tot 5 oktober 2026 was dat project 3 van Julia's persoonlijke account. Achtergrond: `github-app/README.md` in de dashboard-repo.

De Worker heeft twee secrets nodig. De sleutel moet in PKCS#8 staan (`BEGIN PRIVATE KEY`); GitHub levert hem in PKCS#1 (`BEGIN RSA PRIVATE KEY`), dus zet hem eerst om. Gebruik een eigen sleutel voor de Worker, zodat je hem kunt intrekken zonder dat de agents stoppen.

```bash
cd cloudflare/intake
echo 5196791 | npx wrangler secret put GITHUB_APP_ID
openssl pkcs8 -topk8 -nocrypt -in <sleutel-van-de-app>.pem | npx wrangler secret put GITHUB_APP_KEY
```

Zijn die twee er niet, dan valt de Worker terug op `GITHUB_TOKEN`. Is alles ingesteld en werkt het, verwijder dat oude token dan met `npx wrangler secret delete GITHUB_TOKEN`.

### 2. AhaSend-sleutel (zelfde account als de CRM-Worker)

```bash
npx wrangler secret put AHASEND_API_KEY
```

> Let op: controleer de AhaSend-aanroep in `src/worker.js` (`sendEmail`) tegen de bestaande `pipedrive-forms`-Worker. Neem daar het exacte endpoint en de veldnamen van over, dan weet je zeker dat de mail net zo verstuurd wordt als bij de andere formulieren.

### 3. Deployen

```bash
npx wrangler deploy
```

Na deploy krijg je de URL, bijvoorbeeld `https://properaccess-intake.juliatol.workers.dev`. Zet die in `static/js/intake-form.js` bij `INTAKE_ENDPOINT` (met `/submit` erachter, of pas de routecontrole in de Worker aan).

## Testen

```bash
curl -X POST https://properaccess-intake.juliatol.workers.dev/submit \
  -H "Content-Type: application/json" \
  -d '{"contact_naam":"Test Klant","contact_email":"test@example.com","akkoord":"ja","type_onderzoek":"website-audit","onderzoeksobject":"website","hoofddomein":"https://voorbeeld.nl","opleverdatum":"2026-08-01"}'
```

Verwacht: `{"ok":true}`, een nieuwe issue in `audit-planning` die als kaartje in de juiste kolom op het bord staat, en twee mails. Ruim de testissue daarna op, anders staat er een testopdracht in de planning.

## Velden

De Worker verwacht de veldnamen uit `layouts/intake/single.html`. Nieuwe velden voeg je toe aan de `VELDEN`-lijst in `src/worker.js` zodat ze in de samenvatting en op het kaartje komen.
