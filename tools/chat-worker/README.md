# Chat-Worker

De Worker achter de chat op properaccess.nl. Hij neemt een vraag van de
bezoeker aan, zet de systeemprompt ervoor en laat Claude het antwoord maken.
Sinds oktober 2026 houdt hij ook een logboek van de vragen en de antwoorden.

Draait op `https://pa-chat.juliatol.workers.dev`. De widget op de site staat in
`static/js/chat-widget.js` en `layouts/partials/chat-widget.html`.

## Wat er in het logboek komt

Eén rij per vraag, met zes velden:

| Veld | Wat erin staat |
|---|---|
| `moment` | tijdstip, ISO 8601 in UTC |
| `taal` | `nl` of `en` |
| `pagina` | het pad waar de vraag gesteld is, bijvoorbeeld `/eaa/` |
| `vraag` | de vraag van de bezoeker, maximaal 500 tekens |
| `antwoord` | het antwoord van de assistent, maximaal 4.000 tekens |
| `links` | de URL's uit dat antwoord, gescheiden door een spatie |

Besluit van Julia, 10 oktober 2026: het antwoord en de link gaan juist wel in
het logboek, zodat we achteraf kunnen controleren of het antwoord klopt.

Niet: het IP-adres, een hash van het IP-adres, een cookie en een
gespreksnummer. Twee vragen van dezelfde bezoeker zijn in de database niet aan
elkaar te knopen; er staat geen sleutel in die dat kan. Dat deel van het
besluit staat.

De pagina komt van de widget mee in het verzoek, niet uit de `Referer`-header.
Bij een verzoek naar een ander domein stuurt de browser standaard alleen de
origin mee, dus de header zou alleen `https://www.properaccess.nl/` geven. De
Worker bewaart alleen een pad: een volledige URL, een querystring en een
fragment gooit hij weg.

Vier dingen komen er bewust niet in:

- **Een honeypot-treffer.** Dat is een bot, geen vraag.
- **Een geweigerde vraag.** Boven de 20 berichten per 10 minuten, boven de 500
  tekens of zonder geldige vorm: de Worker weigert hem en bewaart niets.
- **De eerdere berichten uit hetzelfde gesprek.** De widget stuurt bij elke
  vraag het hele gesprek mee; de Worker pakt daar alleen het laatste
  `user`-bericht uit. De eerdere vragen staan al in het logboek.
- **Een e-mailadres of telefoonnummer.** `anonimiseer()` haalt die uit de vraag
  en uit het antwoord voordat de rij de database in gaat, en zet er
  `[weggelaten]` voor in de plaats. Negen cijfers is de ondergrens voor een
  telefoonnummer, en een punt telt niet als scheidingsteken: anders zou
  `1.4.11 1.4.12 2.5.8` als telefoonnummer tellen, en juist die vragen willen
  we kunnen teruglezen.

Ging de Claude API onderuit, dan komt de vraag er met een leeg `antwoord` in.
Die vraag hoort juist op de verbeterlijst. In het rapport staat hij apart, want
een mislukt antwoord is iets anders dan een antwoord zonder link.

Ontbreekt de D1-binding, dan blijft de chat gewoon werken en bewaart de Worker
niets. Een fout in de database laat de chat ook niet vallen: het wegschrijven
loopt buiten het antwoord om, in `ctx.waitUntil`.

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

## Twee eindpunten, één sleutel

Beide achter `RAPPORT_SLEUTEL`, beide alleen lezen. Zonder of met een verkeerde
sleutel: 401.

**`/rapport`: de cijfers.** Platte tekst in de browser, `&formaat=json` voor
een script.

```
https://pa-chat.juliatol.workers.dev/rapport?sleutel=<sleutel>&dagen=7
```

Wat erin staat: het aantal vragen, het aantal per dag, de taal, de tien drukste
pagina's, de tien meestgestelde onderwerpen, de woorden die vaker terugkomen,
het aandeel antwoorden dat naar de contactpagina uitweek, en de vragen waarop
geen link volgde. Die laatste lijst is de verbeterlijst.

De onderwerpen komen uit een lijst met zoekpatronen in `worker.js`
(`ONDERWERPEN`). Een vraag kan bij meer dan één onderwerp horen en wordt dan
bij allebei geteld, dus de percentages tellen op tot meer dan 100%. Kijk elke
week naar de regel `zonder onderwerp` en naar de woordenlijst: daar staat wat
de patronen nog niet herkennen. Vul de lijst dan aan.

**`/steekproef`: de regels zelf.** Om de antwoorden na te kijken. Vraag,
antwoord, links, tijd, taal en pagina bij elkaar in één blok, nieuwste eerst.

```
https://pa-chat.juliatol.workers.dev/steekproef?sleutel=<sleutel>&dagen=7&max=25
```

`max` is standaard 25 en loopt tot 200. `dagen` loopt tot de bewaartermijn.
Met `&formaat=json` komen de regels als JSON terug.

## Wie kan erbij

Gemeten op 10 oktober 2026. De vragen en de antwoorden zijn tekst die
bezoekers hebben getypt, dus de route erheen is onderdeel van het ontwerp.

- **Julia en Chief**: via de twee eindpunten hierboven, in de browser, met de
  sleutel.
- **James**: met `curl` op dezelfde eindpunten, zodra `RAPPORT_SLEUTEL` ook in
  `/home/james/.james.env` staat. Cloudflare-toegang of een D1-recht is daar
  niet voor nodig, en James heeft die ook niet.
- **Gerard**: hij leest Slack. Een bestand in `pa_gedeeld` op branch `uit`
  bereikt hem niet: de leeskopie bij de agents volgt `main` met `--depth 1`
  (`/usr/local/bin/gedeeld_sync.sh`), dus niemand behalve Julia leest die
  branch.
- **Een kopie buiten D1 haalt de 90 dagen onderuit.** `gedeeld_uit.sh` pusht
  gewone commits: wat er uit `uit/` verdwijnt, blijft in de historie van
  `pa_gedeeld` staan. Een wekelijks bestand met vragen en antwoorden in een
  GitHub-repo is dus blijvend, ook na het opschonen. Daarom staat de steekproef
  op het eindpunt en niet in een bestand.

## Zelf controleren

```bash
cd tools/chat-worker && node test-opslag.mjs
```

Dat draait `schema.sql` in een sqlite-database in het geheugen, zet daar een
laagje omheen dat hetzelfde praat als D1 en laat de echte `worker.js` erop
werken. De Claude API wordt afgevangen, dus de test kost niets en heeft geen
API-sleutel nodig. Exitcode 0 als alles slaagt.

Wat hij dekt: wat er wel en niet in het logboek komt, de links uit het
antwoord, het weghalen van een e-mailadres en een telefoonnummer, de controle
op de pagina, een fout van de Claude API, het opschonen na 90 dagen, de cijfers
in het rapport, de steekproef, en de migratie van de oude tabel.

## Uitrollen

De eerste keer moet de database er zijn voordat de Worker hem kan vinden. Twee
stappen, in deze volgorde:

```bash
# 1. database en tabel aanmaken, en de id uit de uitvoer in wrangler.json zetten
cd tools/chat-worker && npx wrangler d1 create pa-chat-vragen
npx wrangler d1 execute pa-chat-vragen --remote --file schema.sql

# 2. uitrollen en de sleutel voor /rapport en /steekproef zetten
npx wrangler deploy && npx wrangler secret put RAPPORT_SLEUTEL
```

De `database_id` in `wrangler.json` staat nu op een plaatshouder. Zonder de
echte id weigert `wrangler deploy`, dus er kan niets halfwerkend live komen.

Let op: `wrangler deploy` overschrijft secrets die in het dashboard zijn gezet.
Controleer daarna of `ANTHROPIC_API_KEY` nog staat, anders geeft de chat een
foutmelding aan de bezoeker.

Staat de tabel al in de oude vorm uit PR 307 (alleen `id`, `moment`, `vraag`),
dan hoeft hij niet opnieuw: de vier `ALTER TABLE`-regels onderaan `schema.sql`
zetten de nieuwe kolommen erachter zonder de bestaande rijen te raken.

**De tekst gaat voor de Worker.** De privacyverklaring op de site zegt pas na
deze wijziging dat we het antwoord bewaren en nakijken. Rol de Worker dus niet
uit voordat die tekst live staat.

Later opnieuw uitrollen is alleen `npx wrangler deploy`.

## Nog te regelen

- Of het bewaren van de vragen en de antwoorden zonder toestemming mag. Er komt
  geen cookie aan te pas en we bewaren geen IP-adres, maar dat is een vraag
  voor iemand die de AVG-kant kent. Dezelfde open vraag als bij de
  bezoekmeting.
- `RAPPORT_SLEUTEL` moet ook in de omgeving van James staan, anders kan hij het
  weekoverzicht niet maken.
