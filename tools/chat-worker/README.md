# Chat-Worker

De Worker achter de chat op properaccess.nl. Hij neemt een vraag van de
bezoeker aan, zet de systeemprompt ervoor en laat Claude het antwoord maken.
Sinds oktober 2026 bewaart hij ook wat er gevraagd wordt.

Draait op `https://pa-chat.juliatol.workers.dev`. De widget op de site staat in
`static/js/chat-widget.js` en `layouts/partials/chat-widget.html`.

## Wat we van een vraag bewaren

Eén rij per vraag, met twee velden: de vraagtekst en het tijdstip. Dat is alles.

Niet: het IP-adres, een hash van het IP-adres, een cookie, een gespreksnummer,
het antwoord van de assistent, de pagina waar de vraag is gesteld of de taal.
Twee vragen van dezelfde bezoeker zijn in de database niet aan elkaar te
knopen; er staat geen sleutel in die dat kan.

Het tijdstip is er omdat de bewaartermijn van 90 dagen zonder dat niet af te
dwingen is.

Drie dingen komen er bewust niet in:

- **Een honeypot-treffer.** Dat is een bot, geen vraag.
- **Een geweigerde vraag.** Boven de 20 berichten per 10 minuten, boven de 500
  tekens of zonder geldige vorm: de Worker weigert hem en bewaart niets.
- **Het antwoord van de assistent.** De widget stuurt bij elke vraag het hele
  gesprek mee; de Worker pakt daar alleen het laatste `user`-bericht uit.

Ontbreekt de D1-binding, dan blijft de chat gewoon werken en bewaart de Worker
niets. Een fout in de database laat de chat ook niet vallen: het wegschrijven
loopt buiten het antwoord om, in `ctx.waitUntil`.

### Later uitbreiden

Het antwoord, de gegeven link en de bronpagina bewaren we nu niet. Of dat mag,
beslist Julia. Komt dat er, dan is dit de hele wijziging:

```bash
npx wrangler d1 execute pa-chat-vragen --remote \
  --command "ALTER TABLE vraag ADD COLUMN antwoord TEXT"
```

Dat zet een kolom met `NULL` achter de bestaande rijen en herschrijft de tabel
niet. De Worker leest de tabel nooit met `SELECT *` en nooit op kolompositie,
dus de schrijfregel en het rapport blijven werken.

## Opschonen na 90 dagen

Een cron trigger, elke nacht om 03:20 UTC. De regel staat in `wrangler.json`
en de `scheduled`-handler in `worker.js` doet één `DELETE`.

Waarom een cron trigger en geen opruimactie bij elke schrijfactie: alleen een
klok houdt de 90 dagen vast in een week waarin niemand iets vraagt. Bij
opruimen-tijdens-schrijven blijft een vraag van 89 dagen oud staan zolang er
geen nieuwe vraag binnenkomt, en dan is de belofte in de privacyverklaring niet
waar.

Een cron trigger kan stil wegvallen. Daarom staan in het rapport het aantal
rijen en de datum van de oudste vraag. Staat daar iets ouder dan 90 dagen, dan
heeft de trigger niet gelopen. Dat is een regel in de weekronde.

Met de hand kan het ook:

```bash
npx wrangler d1 execute pa-chat-vragen --remote \
  --command "DELETE FROM vraag WHERE moment < datetime('now', '-90 days')"
```

## Rapport lezen

Platte tekst in de browser:

```
https://pa-chat.juliatol.workers.dev/rapport?sleutel=<sleutel>&dagen=7
```

Bovenaan het aantal vragen, daarna het aantal per dag, de onderwerpen en de
woorden die vaker terugkomen. Met `&formaat=json` komt hetzelfde terug als
JSON, plus de laatste 50 vragen zelf.

De onderwerpen komen uit een lijst met zoekpatronen in `worker.js`
(`ONDERWERPEN`). Een vraag kan bij meer dan één onderwerp horen en wordt dan
bij allebei geteld, dus de percentages tellen op tot meer dan 100%. Kijk elke
week naar de regel `zonder onderwerp` en naar de woordenlijst: daar staat wat
de patronen nog niet herkennen. Vul de lijst dan aan.

**De vraagtekst gaat niet naar Slack en niet in een commit.** In het
weekoverzicht horen het aantal vragen en de namen van de onderwerpen. De
woordenlijst in het rapport bestaat uit losse woorden uit de vragen, dus ook
die blijft in het rapport en gaat niet verder. Dezelfde regel als bij de
organisatienamen uit de bezoekmeting.

Twee cijfers uit het oorspronkelijke plan kunnen nog niet: welk deel van de
gesprekken naar de contactpagina uitweek, en hoeveel vragen zonder link
eindigden. Daar is het antwoord voor nodig, en dat bewaren we niet.

## Zelf controleren

```bash
cd tools/chat-worker && node test-opslag.mjs
```

Dat draait `schema.sql` in een sqlite-database in het geheugen, zet daar een
laagje omheen dat hetzelfde praat als D1 en laat de echte `worker.js` erop
werken. De Claude API wordt afgevangen, dus de test kost niets en heeft geen
API-sleutel nodig. Exitcode 0 als alles slaagt.

## Uitrollen

De eerste keer moet de database er zijn voordat de Worker hem kan vinden. Twee
stappen, in deze volgorde:

```bash
# 1. database en tabel aanmaken, en de id uit de uitvoer in wrangler.json zetten
cd tools/chat-worker && npx wrangler d1 create pa-chat-vragen
npx wrangler d1 execute pa-chat-vragen --remote --file schema.sql

# 2. uitrollen en de sleutel voor /rapport zetten
npx wrangler deploy && npx wrangler secret put RAPPORT_SLEUTEL
```

De `database_id` in `wrangler.json` staat nu op een plaatshouder. Zonder de
echte id weigert `wrangler deploy`, dus er kan niets halfwerkend live komen.

Let op: `wrangler deploy` overschrijft secrets die in het dashboard zijn gezet.
Controleer daarna of `ANTHROPIC_API_KEY` nog staat, anders geeft de chat een
foutmelding aan de bezoeker.

Later opnieuw uitrollen is alleen `npx wrangler deploy`.

## Nog te regelen

- Of het bewaren van de vragen zonder toestemming mag. Er komt geen cookie aan
  te pas en we bewaren geen IP-adres, maar dat is een vraag voor iemand die de
  AVG-kant kent. Dezelfde open vraag als bij de bezoekmeting.
- De taal van de vraag staat er niet in, want het besluit was "de vraagtekst en
  een tijdstip, verder niets". Wil Julia het onderscheid tussen Nederlandse en
  Engelse vragen zien, dan is dat een kolom `taal` en dezelfde ALTER TABLE
  hierboven.
