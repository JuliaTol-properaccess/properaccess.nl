# Nieuwe homepagina en A/B-test

Status, 18 september 2026: variant B is gebouwd op `/home-b/`, nog niet live. De verdeling over A en B (de Worker) en het opslaan van chatvragen zijn nog niet gebouwd.

## Waarom

De huidige homepagina (`layouts/_default/homepage-aaas-v2.html`) heeft 9 secties en draait om één dienst: doorlopende monitoring. Julia wil een homepagina met weinig tekst, die in één zin zegt wie we zijn en wat je bij ons kunt halen, en die de bezoeker direct iets laat doen: een vraag stellen. Het voorbeeld is q42.nl.

We zetten de nieuwe pagina niet meteen live. We laten de oude (A) en de nieuwe (B) een tijd naast elkaar draaien en meten welke meer bezoekers een volgende stap laat zetten.

## Beslissingen van Julia (18 september 2026)

- Trainingen staan niet in de h1. Ze worden sinds 17 september niet actief aangeboden.
- In de h1 wisselt de plaats: Amsterdam en Emmeloord.
- De verdeling over A en B gebeurt door een Cloudflare Worker, zonder cookie en zonder iets op het apparaat van de bezoeker op te slaan.
- De vragen die bezoekers in de vraagsectie typen, worden anoniem opgeslagen, tot 3 maanden na het einde van de test.
- Het adres in Emmeloord is Randweg 25, 8304 AS Emmeloord. Het staat in de footer, net als bij q42.nl.
- "We leren je hoe je zelf moet testen" krijgt op de homepagina de vorm van onze tools: de WCAG Radar en de PDF-checker.
- Phi Pham is Projectmanager.

## Deel 1: variant B

Sinds 19 september 2026 volgt variant B het ontwerp "Homepage D papier" uit Claude Design: een papierkleurige achtergrond, de assistent in een donkerblauw blok met getypte tekst, cijfers en klanten, vier diensten in een raster van 2 bij 2, en een magenta contactblok. Waar de teksten van het ontwerp niet klopten, staat dat bovenaan `layouts/_default/homepage-b.html`. De opbouw hieronder is de oorspronkelijke schets.

### Opbouw van boven naar beneden

**Header.** Alleen het logo en een menuknop, ook op desktop. De knop opent een paneel met hetzelfde menu als nu (`config/_default/menus.nl.toml`). De zoekknop vervalt, want zoeken zit in de vraagsectie. De knop "Offerte audit" staat onderaan in het paneel.

**1. Hero met h1.** Conceptekst:

> We zijn Proper Access, een team enthousiaste WCAG-fanaten in Amsterdam.

"Amsterdam" wisselt elke 6 seconden met "Emmeloord". Daaronder één zin:

> Je kunt bij ons terecht voor een WCAG-audit, tools die toegankelijkheid makkelijker maken, consultancy of gewoon een goed gesprek.

Elk van de vier onderdelen is een link: `/toegankelijkheidsaudit/`, `/tools/`, `/strippenkaart/` en `/contact/`. Controleer de paden bij het bouwen.

De wisseltekst moet toegankelijk blijven:

- Voor screenreaders staat er vaste tekst in de h1: "in Amsterdam en Emmeloord". Het wisselende woord is `aria-hidden`, zodat de naam van de kop niet elke 6 seconden verandert.
- Beweging die vanzelf start, langer dan 5 seconden duurt en naast andere inhoud staat, heeft een pauzeknop nodig (WCAG 2.2.2). Die komt direct naast de h1.
- Bij `prefers-reduced-motion: reduce` wisselt er niets en staat er "in Amsterdam en Emmeloord".

**2. Vraagsectie.** Dit is het onderdeel dat de pagina anders maakt. De chat staat in de pagina zelf, als tweede sectie, en niet in een venster eroverheen.

- Kop: "Stel je vraag". Eén invoerveld en een verzendknop.
- Daaronder 4 voorbeeldvragen als knoppen, bijvoorbeeld "Moeten wij voldoen aan de EAA?", "Wat kost een audit?", "Hoe test ik zelf of mijn site toegankelijk is?" en "Wat doet de WCAG Radar?". Een klik stelt de vraag meteen.
- Het antwoord verschijnt in de sectie, met links naar de pagina's waar het staat. Na een antwoord kun je een vervolgvraag stellen of opnieuw beginnen.
- Het spelelement: de voorbeeldvragen wisselen na elk antwoord, zodat er steeds een volgende vraag klaarstaat. Geen animaties die het lezen hinderen.
- De zwevende chatknop verdwijnt op deze pagina. Twee chats op één pagina is verwarrend.

Techniek: de bestaande Worker `pa-chat` (`tools/chat-worker/worker.js`) blijft het antwoord geven. `static/js/chat-widget.js` krijgt een tweede modus waarin hij in een container op de pagina draait in plaats van in een dialoog. De systeemprompt krijgt een lijst met pagina's van de site, zodat de antwoorden naar de goede pagina linken. De zoekfunctie die er nu is, doorzoekt alleen blogartikelen (`include_sections = ["blog"]`), dus die gebruiken we hier niet.

**3. Bewijs.** Eén regel met cijfers, met peildatum: "950+ audits sinds 2019, 236 opdrachten voor 63 opdrachtgevers. Stand 7 augustus 2026." Daaronder de klantlogo's zoals ze nu in `rd-logos` staan.

**4. Wat we doen.** Vier tegels met elk een kop, één zin en een link: WCAG-audit, WCAG Radar en tools, consultancy, een goed gesprek. De USP "we leren je hoe je zelf moet testen" staat in de tegel "Zelf testen met onze tools".

**5. Contact.** Julia Tol (Directeur) en Phi Pham (Projectmanager) met naam, functie en foto, en het contactformulier. Het formulier stuurt `bron: "homepage-b"`, zodat het CRM ziet uit welke variant het kwam.

**Grote footer.** Deze vervangt de huidige 4 kolommen met 15 links. Voorstel voor de kolommen:

| Kolom | Inhoud |
| --- | --- |
| Diensten | WCAG-audit, app-audit, contentaudit, techniekaudit, hercontrole, mini-audit, strippenkaart, toegankelijkheidsabonnement, testen tijdens de bouw, hulp bij de EAA, offerte aanvragen |
| Voor wie | Overheid, cultuur, e-commerce, financiële instellingen, digital agencies, onderwijs, resellers |
| Tools | WCAG Radar, PDF-checker, toegankelijkheidsverklaring maken, alt-tekst-keuzehulp, ARIA-referentie, foutmeldingen, succescriteria per beperking, de drie quizzen |
| Kennis | Academy, blog per categorie, digitale toegankelijkheid, de EAA, de toegankelijkheidsverklaring, een auditbureau kiezen, zo werken wij |
| Over ons | Over ons, klanten, in de media, bijzondere initiatieven, samenwerken, contact, portaal |
| Juridisch | Privacy, algemene voorwaarden, klachtenregeling, certificeringen, adres, telefoon |

De trainingspagina's staan er niet in; zie de open punten. De linkkolommen komen uit `data/footer_groot.yaml` in plaats van uit hardcoded links, zodat een nieuwe pagina er met één regel bij kan.

Tijdens de test heeft alleen de B-homepagina de nieuwe header en footer. Wint B, dan gaan ze over de hele site.

Het Engels valt buiten deze test. De Engelse homepagina heeft sinds 10 september een eigen doelgroep.

### Wat er gebouwd moet worden

| Onderdeel | Bestanden |
| --- | --- |
| Pagina B (gebouwd) | `layouts/_default/homepage-b.html`, `content/dutch/home-b.md` (`url: /home-b/`, `sitemap_exclude: true`, `canonical: https://www.properaccess.nl/`) |
| Header en footer (gebouwd) | `layouts/partials/essentials/header-minimaal.html`, `footer-groot.html` en `data/footer_groot.yaml`. De keuze staat in de front matter (`header_minimaal`, `footer_groot`, `zonder_chatknop`) en werkt via `layouts/_default/baseof.html` |
| Vraagsectie en meting (gebouwd) | `static/js/homepage-b.js`: de wisselende plaatsnaam, de chat in de pagina en het event `Homepage stap`. `chat-widget.js` blijft ongewijzigd |
| Systeemprompt chat (aangepast, nog niet gedeployed) | `tools/chat-worker/worker.js`. De oude prompt had verouderde prijzen, "geen software" en een verwijzing naar een WhatsApp-knop die in variant B niet bestaat |
| Chatvragen opslaan | D1-database en tabel voor `tools/chat-worker/` |
| Verdeling | nieuwe Worker `tools/homepage-test/` |
| Privacy | `content/dutch/footer/privacyverklaring.md` |

Let op bij `pa-chat`: `npx wrangler deploy` wist de secret `ANTHROPIC_API_KEY`. Na elke deploy moet Julia die opnieuw zetten.

## Deel 2: het A/B-testplan

### De vraag

Zet een bezoeker op de homepagina vaker een volgende stap bij variant B dan bij variant A?

Hypothese: B levert meer volgende stappen op, omdat de bezoeker direct een vraag kan stellen en minder hoeft te lezen om te zien wat we doen.

### Verdeling over A en B

Een nieuwe Worker, `pa-homepage-test`, draait alleen op de homepagina: de routes `properaccess.nl/` en `www.properaccess.nl/`, en geen andere pagina. Op de zone draait al een Worker met routes (`properaccess-report-auth`), dus dit patroon werkt daar.

Per verzoek doet de Worker dit:

1. Hij berekent een hash van IP-adres, user-agent en een zout dat elke dag wisselt. Het getal van 0 tot 99 dat daaruit komt, bepaalt de variant: onder `AANDEEL_B` krijgt de bezoeker B, anders A. Het IP-adres wordt niet opgeslagen. Plausible gebruikt dezelfde methode om bezoekers te tellen.
2. Bij A haalt hij `/` op van GitHub Pages, bij B haalt hij `/home-b/` op. De URL in de adresbalk blijft `/`.
3. `/home-b/` heeft geen noindex, alleen een canonical naar `/` en `sitemap_exclude`. De Worker hoeft de HTML van B dus niet aan te passen.
4. Zoekmachines en AI-crawlers krijgen altijd A. Zo verandert er niets voor de vindbaarheid. De lijst met user-agents komt uit de crawlerinstellingen in Cloudflare.
5. Met de variabele `AANDEEL_B` zet je de verdeling. Op `0` krijgt iedereen A; dat is de noodstop.

Door het zout van een dag kan iemand die morgen terugkomt de andere variant zien. Dat accepteren we: zonder iets op het apparaat op te slaan kan een bezoeker niet langer dan een dag dezelfde variant houden.

### Wat we meten

Elke homepagina krijgt een element met `data-pa-variant="A"` of `"B"`. Bij B doet `static/js/homepage-b.js` de meting: het stuurt het Plausible-event `Homepage stap` met de props `variant` en `soort`. Voor A komt dezelfde meting in `homepage-aaas-v2.html`, zodra de test start.

**Primaire maat: het aandeel homepagebezoeken met een volgende stap.** Een volgende stap is:

- een klik naar een dienst, een tool, de offertepagina of contact
- een vraag in de vraagsectie (alleen B) of in de zwevende chat (alleen A)
- een verstuurd formulier op de homepagina

A kan geen vraag in een sectie stellen, dus we tellen de zwevende chat van A mee als dezelfde soort stap. Anders meet de test alleen dat B een onderdeel heeft dat A mist.

**Secundaire maten:**

- scrolldiepte per variant; `pa-stats.js` meet die al
- het aantal klikken per footerlink bij B, om te zien of de grote footer gebruikt wordt
- de onderwerpen van de chatvragen, uit de opgeslagen vragen

**Bewaking.** De test stopt vroegtijdig als een van deze punten verslechtert:

- Het totaal aantal formulieren per week, in het CRM, zakt onder het gemiddelde van de 8 weken ervoor.
- axe vindt een fout op B, of B is niet met het toetsenbord te bedienen.
- De kosten van `pa-chat` lopen op. De Worker krijgt een daglimiet voor het aantal vragen.

**Wat we niet kunnen meten.** Een bezoeker die van de homepagina naar een dienstpagina gaat en daar een offerte aanvraagt, kunnen we niet aan een variant koppelen. Daarvoor zou de variant op het apparaat bewaard moeten worden. Dat is de prijs van geen cookies. Formulieren op de homepagina zelf koppelen we wel, via `bron`. Of je in Plausible een hele sessie kunt filteren op een prop van één event, zoeken we uit voordat we op die filter rekenen.

### Hoe lang

Dat hangt af van het aantal bezoekers op de homepagina, en dat getal staat niet in dit plan. Stap 0 is het ophalen uit Plausible: bezoekers op `/` per week en het aandeel met een klik naar een dienst, tool, offerte of contact, over de afgelopen 8 weken.

Daarmee rekenen we het aantal bezoekers per variant uit, met de vuistregel n ≈ 16 × p × (1 − p) / d². Hierin is p het aandeel van nu en d het verschil dat we willen kunnen zien (80% onderscheidend vermogen, 5% significantie).

Rekenvoorbeeld, geen meting: bij p = 10% en een verschil van 3 procentpunt is n ≈ 16 × 0,1 × 0,9 / 0,0009 = 1.600 bezoekers per variant.

Regels voor de duur:

- minimaal 4 volle weken, zodat elke weekdag vaker meedoet
- maximaal 10 weken; is er dan geen verschil, dan is het verschil kleiner dan we kunnen meten
- de duur staat vast voordat de test begint, en we kijken tussendoor niet naar de uitkomst om eerder te stoppen; alleen de bewaking mag de test stoppen

### Beslisregel

Deze regel staat vast voordat de test begint:

- **B scoort beter en de bewaking is in orde:** B gaat live, met de nieuwe header en footer over de hele site.
- **Geen meetbaar verschil en de bewaking is in orde:** B gaat ook live. B is het ontwerp dat we willen, het levert de chatvragen op en het is makkelijker te onderhouden.
- **A scoort beter:** A blijft staan. We bekijken met de chatvragen en de scrolldiepte wat er aan B mist, en starten eventueel een nieuwe ronde.

### Vervolgtests

Een vervolgtest doen we pas als test 1 klaar is, en steeds één tegelijk. Mogelijke vervolgtests:

1. De vraagsectie op plek 2 of onder de tegels.
2. De wisselende plaats in de h1 of een vaste tekst.
3. De voorbeeldvragen: welke vier zetten mensen het vaakst aan tot een volgende stap.

Deze verschillen zijn klein. Bij het bezoek van een gespecialiseerde B2B-site duurt zo'n test waarschijnlijk maanden. Levert de rekensom van stap 0 meer dan 10 weken op, dan beslissen we deze punten met een gebruikerstest met 5 mensen in plaats van met een A/B-test.

### Volgorde van werken

1. Bezoekcijfers ophalen uit Plausible en de duur vastleggen.
2. Variant B bouwen op `/home-b/` en lokaal controleren met axe, alleen het toetsenbord, VoiceOver en een schermbreedte van 320 pixels.
3. Gebruikerstest met 5 mensen, onder wie een screenreadergebruiker.
4. Chatvragen opslaan in D1 en de daglimiet in `pa-chat`.
5. De privacyverklaring aanpassen. Zie de open punten.
6. Worker `pa-homepage-test` bouwen, eerst met `AANDEEL_B = 0`, en controleren dat `/` gewoon A geeft.
7. `AANDEEL_B` op 50 zetten. De startdatum komt in dit document.
8. Na de vastgestelde duur: uitkomst in dit document, beslissing volgens de beslisregel.

## Open punten

- **De nieuwe systeemprompt deployen.** `npx wrangler deploy` in `tools/chat-worker/` wist de secret `ANTHROPIC_API_KEY`. Julia zet die daarna opnieuw met `npx wrangler secret put ANTHROPIC_API_KEY`, en test de chat. Tot dan geeft de chat op de hele site antwoorden met de oude prijzen.
- **Grondslag in de privacyverklaring.** Er staat nu "gerechtvaardigd belang" voor de chat en de bezoekmeting. Dat is nog niet juridisch nagekeken.
- **Privacyverklaring bij de start van de test.** De verdeling op basis van een hash van IP-adres en het opslaan van chatvragen komen erbij zodra die gebouwd zijn. Nu staat er "We slaan de chatberichten zelf niet op", en dat klopt tot dan.
- **Consultancy in de h1** linkt naar de strippenkaart. Er is geen aparte pagina over consultancy.
- **Contactpagina.** Daar staat nog "We werken volledig digitaal, dus locatie maakt niet uit", en alleen het adres in Amsterdam. Het adres in Emmeloord staat nu alleen in de footer.
