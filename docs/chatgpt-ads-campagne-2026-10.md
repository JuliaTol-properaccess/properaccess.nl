# ChatGPT Ads-campagne Proper Access

## Doel

Meer gekwalificeerde aanvragen voor een onafhankelijke WCAG-audit en meer
offertes voor audits van websites, webshops, apps en overheidsplatforms.

## Campagnestructuur

### 1. Directe offerteaanvraag

- Campagne: `CHATGPT_CONVERSIONS_NL_WCAG-AUDIT_Q4-2026`
- Doel: Conversions
- Bestemming: `/offerte-wcag-onderzoek/`
- Conversie: `lead_created`
- Startbudget: €25–€40 per dag
- Geografie: Nederland
- Taal: Nederlands

UTM-sjabloon:

`?utm_source=chatgpt&utm_medium=paid&utm_campaign=wcag-audit&utm_content={ad_id}`

Advertentievarianten:

1. **Onafhankelijke WCAG-audit voor je website**  
   Krijg een concreet rapport met screenshots, prioriteiten en oplossingen.
   Proper Access toetst websites, webshops en apps handmatig aan WCAG 2.2 AA.
   Vraag vrijblijvend een offerte op maat aan.

2. **Vraag een offerte voor een toegankelijkheidsaudit**  
   Weet binnen één werkdag wat een audit voor jouw website of app kost. 950+
   audits, senior auditors en rapporten waar je team direct mee verder kan.

3. **Voldoe aan de EAA met aantoonbaar bewijs**  
   Een automatische scan is niet genoeg. Laat je website of app onafhankelijk
   onderzoeken en ontvang een bruikbaar rapport volgens WCAG-EM, met begeleiding
   en retest.

### 2. Oriënterende auditcampagne

- Bestemming: `/toegankelijkheidsaudit/`
- Doel: Clicks of Reach tijdens de eerste test
- CTA: `Plan een gratis kennismaking`
- Context: EAA, BDTO, WCAG 2.2 AA, auditbureau kiezen, toegankelijkheidsonderzoek

## Meetplan

- `lead_created`: succesvolle offerte- of kennismakingsaanvraag
- `form_submission`: bestaande Plausible-event voor diagnose
- Klik op telefoonnummer
- Klik op e-mailadres
- Klik naar kennismakingskalender

## Testperiode

Vier weken. Beoordeel niet alleen CTR en CPC, maar vooral:

- gekwalificeerde offerteaanvragen;
- kosten per gekwalificeerde aanvraag;
- aantal verstuurde offertes;
- aantal gewonnen audits.

## Activering

1. Maak in Ads Manager een Pixel aan.
2. Plaats het Pixel ID in `config/_default/params.toml` bij
   `params.openai_ads.pixel_id`.
3. Zet tijdelijk `debug = true` en controleer de pixel in de browserconsole.
4. Zet `debug` daarna weer op `false`.
5. Maak de conversie `lead_created` aan en koppel die aan de campagne.
6. Controleer privacy/cookie-instellingen vóór publicatie.
