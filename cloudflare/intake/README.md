# Proper Access intake-Worker

Verwerkt het intakeformulier van `properaccess.nl/intake`. Voor elke inzending:

1. maakt een kaartje aan op het GitHub Projects-bord (draft issue);
2. zet het kaartje in de juiste kolom op basis van de opleverdatum;
3. mailt de klant een bevestiging met een samenvatting;
4. mailt Proper Access een interne melding.

Er komen **geen prijzen** in het formulier of op het kaartje. De Worker zet alleen de binnengekomen velden over.

## Kolomlogica

Het startmoment is de opleverdatum min 4 weken doorlooptijd. Ligt dat startmoment binnen een maand, dan gaat het kaartje naar **Ready to start**, anders naar **Backlog**. De kolom wordt gematcht op naam, dus je kunt de opties op het bord hernoemen zonder de Worker aan te passen (houd de namen dan wel gelijk of pas ze hier aan).

## Eenmalig instellen

### 1. GitHub-token

Maak een token met lees- en schrijfrechten op je Projects. Een fijnmazige PAT met de permissie **Projects: Read and write** volstaat, of een classic PAT met scope `project`. De eigenaar van het token moet toegang hebben tot bord nummer 3.

```bash
cd cloudflare/intake
npx wrangler secret put GITHUB_TOKEN
```

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

Verwacht: `{"ok":true}`, een nieuw kaartje op het bord in de juiste kolom, en twee mails.

## Velden

De Worker verwacht de veldnamen uit `layouts/intake/single.html`. Nieuwe velden voeg je toe aan de `VELDEN`-lijst in `src/worker.js` zodat ze in de samenvatting en op het kaartje komen.
