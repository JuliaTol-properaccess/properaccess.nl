# GEO-actieplan properaccess.nl

Doel: in AI-antwoorden vaker en hoger genoemd worden dan alle concurrenten wanneer iemand
vraagt om een toegankelijkheidsbureau.

Opgesteld 14 augustus 2026, op basis van de Peec AI-meting over 15 juli tot 14 augustus 2026
(744 chats, Nederlandse prompts).

## Status

Bijgewerkt 29 augustus 2026.

| Batch | Stand |
| --- | --- |
| 0. Prijzen rechtzetten | Klaar, door Julia zelf |
| 1. Techniek en zichtbaarheid | Live, 14 augustus 2026 |
| 2. Bodyteksten op zes lege pagina's | Live, 14 augustus 2026 (PR #75) |
| 3. Twee nieuwe pagina's | Live, 14 augustus 2026 (PR #76) |
| Meting | Gedaan op 29 augustus, zie hieronder |
| Merknaam koppelen | Live, 29 augustus 2026 |
| Search Console | Draait; nulmeting geëxporteerd op 29 augustus 2026 |
| Fase 2 | Kan starten |

Alles uit batch 1 tot en met 3 staat sinds 14 augustus op properaccess.nl. Wat er daarna nog
ligt staat onderaan onder [Restwerk](#restwerk).

**Belangrijk voor wie hier verder schrijft.** In de reviewronde van batch 2 en 3 zaten negen
feitelijke fouten over hoe digitale toegankelijkheid in Nederland werkt, waarvan twee
overgenomen uit teksten die al op deze site stonden. Ze zijn gecorrigeerd, maar de les geldt
voor elk volgend stuk tekst: **bestaande content op properaccess.nl is geen bron.** De
geverifieerde vakinhoud staat in het hoofdstuk "Vakinhoud: wetgeving, het Register en onze
methode" in `~/.claude/CLAUDE.md`. Staat het daar niet, dan weet je het niet: vraag het na of
laat het weg.

---

## Wat de meting van 29 augustus liet zien

De diagnose die eerder in dit plan staat, dat de site te weinig wordt opgehaald, klopt niet
meer voor alle onderwerpen. Er kwam een tweede probleem bovendrijven dat er los van staat.

**Onze pagina's worden opgehaald en geciteerd, maar onze naam staat niet in het antwoord.**
Twee voorbeelden uit de meting van 29 augustus:

- `/tools/wcag-radar/` had de hoogste citatiegraad van al onze productpagina's, terwijl het merk
  op de onderwerpen rond tools en scans op 0% stond.
- `geldt-de-eaa-voor-mijn-webshop` stond in de top 20 van bronnen voor het onderwerp wetgeving,
  terwijl het merk ook daar op 0% stond. Geen van de vier wetgevingspagina's noemde Proper
  Access één keer.

Een model haalt de pagina dus op, gebruikt de inhoud, en noemt vervolgens een ander bureau.
Dat is een ander probleem dan onvindbaarheid en het vraagt een andere maatregel: de naam moet
in de tekst staan die wordt opgehaald.

**Wat daarop is gedaan, 29 augustus:**

- 75 links in 43 blogartikelen wijzen niet meer naar `testtoegankelijkheid.nl/wcag-radar` maar
  naar onze eigen pagina `/tools/wcag-radar/`. De eerste vermelding per artikel heet nu "de
  WCAG Radar van Proper Access".
- Vier wetgevingspagina's noemen de naam nu wel.
- `/eaa/` is aangelegd als hubpagina. Er stonden tien EAA-artikelen die elk een deelvraag
  beantwoordden en elkaar in de weg zaten; geen enkele beantwoordde "wat is de EAA" en geen
  enkele had de term vooraan in de titel. De tien linken nu terug naar de hub.
- De meta-titel van de homepage staat op de Nederlandse zoekterm in plaats van op
  "Accessibility as a Service".
- `/hulp-bij-europese-toegankelijkheidswetgeving/` is verbreed van wetgeving naar hulp bij
  digitale toegankelijkheid, en heeft er secties bij gekregen over zelf leren, tools, vragen
  stellen en wat een expert oplevert. Die pagina staat inmiddels in de AI Overview.
- `llms.txt` is bijgewerkt.

**Search Console draait.** De property is aangesloten en op 29 augustus 2026 is de eerste export
gemaakt over 30 juli tot en met 26 augustus. Die export is de nulmeting waartegen batch 1 tot en
met 3 wordt afgerekend.

De uitkomst verandert de diagnose op één punt. Het plan ging uit van onvindbaarheid; wat de data
laat zien is dat er twee verschillende problemen naast elkaar lopen.

- **Op informatieve vragen zijn we vindbaar en verliezen we de klik.** De Engelse WCAG-serie staat
  gemiddeld op positie 6 tot 9 en haalt een CTR ver onder wat op die posities normaal is. Wat het
  bewijs niet toelaat: Search Console schrijft geen enkele vertoning aan een AI Overview toe, dus
  dat een AI-antwoord de klik opneemt past bij de cijfers maar staat niet vast.
- **Op commerciële vragen in het Nederlands zijn we niet vindbaar.** Op de kerntermen van het vak
  staan we buiten pagina 2, en de pagina's die Google daarvoor kiest zijn blogartikelen en geen
  dienstpagina's.

Daar volgen drie richtingen uit voor Fase 2:

1. **De Nederlandse dienstpagina's moeten gaan ranken op de kerntermen.** Daar zit het gat met de
   meeste omzet erachter.
2. **Bij informatieve content is de klik niet meer de maatstaf.** Daar telt of onze naam in het
   opgehaalde antwoord staat, en dat is precies wat er op 29 augustus is aangepakt.
3. **Meer tools, minder uitleg.** De tools zijn de enige categorie op de site met een normale CTR,
   en het enige wat een AI-antwoord niet kan overnemen.

De cijfers zelf staan bewust niet in dit bestand: deze repository is openbaar. De volledige
analyse ligt naast de export in `~/Downloads/properaccess.nl-Performance-on-Search-2026-08-29/`.

---

## Context

Proper Access meet sinds augustus 2026 met Peec AI hoe vaak AI-modellen ons noemen. De eerste
analyse gaf 26,3% zichtbaarheid, de hoogste van alle gevolgde partijen. Dat cijfer klopt maar
zegt het verkeerde.

Uitgesplitst per prompt: op merkprompts ("Wat doet Proper Access?") scoren we 88 tot 100%. Op
niet-merkprompts is de gemiddelde zichtbaarheid **21,0%**, en op **56 van de 89**
niet-merkprompts zitten we onder de 25%. De 26,3% meet dus vooral dat mensen onze naam al
kennen. Op het moment dat iemand níét naar ons vraagt maar naar een bureau, verliezen we.

| Prompt | Proper Access | Beste concurrent |
| --- | --- | --- |
| Welke partijen bieden praktische hulp bij het voldoen aan de Europese toegankelijkheidswetgeving? | 0% | Stichting Accessibility 93,3% |
| Welke partij doet onafhankelijk toegankelijkheidsonderzoek voor de digitale dienstverlening van een overheidsorganisatie? | 0% | Audit House 66,7% |
| Ik zoek een bureau dat website toegankelijkheid toetst volgens Europese wetgeving | 6,7% | Bureau Toegankelijkheid 93,3% |
| Welk bureau kan ik het beste een toegankelijkheidsonderzoek laten uitvoeren in Nederland? | 11,1% | Bureau Toegankelijkheid 77,8% |
| Welke partij kan mijn website laten testen op toegankelijkheid? | 13,3% | Stichting Accessibility 80,0% |
| Welk bureau toetst een webshop op de European Accessibility Act? | 22,2% | Audit House 77,8% |
| Wie kan een toegankelijkheidsonderzoek doen voor een museum of theater? | 44,4% | Audit House 100% |

---

## Diagnose

Drie feiten, alle drie geverifieerd in de repo:

**1. Zes geldpagina's hebben nul regels body.** `content/dutch/diensten/toegankelijkheidsaudit.md`,
`app-toegankelijkheid-testen.md`, en de sectorpagina's voor overheid, e-commerce, cultuur en
digital agency bestaan volledig uit front matter. Wat je op die pagina's ziet komt uit de
layout. Voor een model is er dus nauwelijks tekst om te citeren. De drie pagina's die wél een
body hebben (contentaudit, techniekaudit, hercontrole, elk ruim 330 woorden in `llms-full.txt`)
staan op `hide_from_overview: true` en niet in het menu, dus ze krijgen bijna geen interne
links.

**2. Het woord "toegankelijkheidsonderzoek" komt in geen enkel bestand in `diensten/` en
`voor_wie/` voor.** Dat is precies het woord in drie van de prompts waarop we tussen 0 en 13%
scoren. Waar het promptwoord wel op onze pagina staat, scoren we ook: op de cultuurpagina
staat "museum" 29 keer, en daar zitten we op 44,4%. Onze enige winst op een niet-merkprompt
is "Bestaat er een toegankelijkheidsbureau dat direct bruikbare rapporten levert voor
ontwikkelaars?" (93,3%), en dat is precies het onderwerp dat we wél uitgebreid beschrijven.

**3. Concurrenten worden gratis geholpen door hun naam.** Op een vraag die begint met "welk
bureau" of "welke partij" matchen Bureau Toegankelijkheid, Stichting Accessibility en Audit
House op de vraagwoorden zelf. "Proper Access" bevat geen Nederlands vraagwoord. Dat halen we
niet in met een naamswijziging, wel met tekst die de vraagwoorden bevat.

Daar komt een leveringsprobleem bij: de IndexNow-stap in `.github/workflows/main.yml` stuurt
maar twee hardgecodeerde URL's (de homepage en `/toegankelijkheidsaudit/`). Nieuwe content
wordt dus nooit aan Bing en Copilot gemeld, en ChatGPT-search leunt op de Bing-index.

**Bronnendata die dit ondersteunt.** Modellen halen bij 30,2% van de chats iets van
properaccess.nl op, tegen 39,7% bij accessibility.nl. Per chat halen ze 0,47 pagina's van ons
en 1,18 van hen. Wij hebben 14 opgehaalde URL's, accessibility.nl 21. Peec's eigen
opportunity score zet eigen productpagina's op een gat van 76,5% (gebruikt in 166 chats) en
how-to-guides op 94% (67 chats).

---

## Batch 0: prijzen (Julia, loopt al)

Julia corrigeert de prijzen zelf en pusht naar `main`. Alles hieronder wacht daarop, want de
nieuwe teksten nemen prijsindicaties over uit de site. Voor uitvoering: `git pull` en de
bedragen uit de gecorrigeerde pagina's overnemen, niet uit dit document en niet uit de
CRM-code.

---

## Batch 1: techniek en zichtbaarheid (een halve dag)

Geen schrijfwerk, wel randvoorwaarde voor alles daarna.

| Wat | Bestand |
| --- | --- |
| IndexNow de volledige `urlList` uit `public/nl/sitemap.xml` laten sturen in plaats van twee vaste URL's | `.github/workflows/main.yml` (± regel 141) |
| De dode Google sitemap-ping verwijderen (endpoint is in 2023 uitgezet) | `.github/workflows/main.yml` (± regel 136) |
| `enableGitInfo = true`, zodat `lastmod` en `dateModified` meebewegen met echte wijzigingen in plaats van gelijk te blijven aan de publicatiedatum | `hugo.toml` |
| `hide_from_overview: true` weghalen op contentaudit, techniekaudit en hercontrole | `content/dutch/diensten/{contentaudit,techniekaudit,hercontrole}.md` |
| Menu-items voor die drie toevoegen onder "Diensten", onder de hoofddiensten | `config/_default/menus.nl.toml` |
| Kop "Deelonderzoeken, als een volledig onderzoek niet past" op het dienstenoverzicht | `content/dutch/diensten/_index.md` |
| Drie dubbele slugs oplossen: `wat-kost-een-toegankelijkheidsaudit`, `webshop-decoratieve-afbeeldingen`, `webshop-knop-zonder-naam` | `content/dutch/blog/` |
| `x-default` naar één vaste NL-versie in plaats van naar `.Permalink` | `layouts/partials/basic-seo.html` (± regel 89) |
| `static/llms.txt` gelijktrekken met het menu en met `llms-full.txt` (nu 53 versus 63 opdrachtgevers, en app-audit, onderwijs en zo-werken-wij ontbreken) | `static/llms.txt` |

### Wat er bij de uitvoering afweek

**Dubbele slugs.** Twee van de drie zijn opgelost. Bij `webshop-decoratieve-afbeeldingen` en
`webshop-knop-zonder-naam` bleek dezelfde tekst twee keer gepubliceerd: één keer in de
wcag-uitgelegd-serie van maart met een eigen illustratie, één keer in de e-commerce-eaa-serie
van april en mei met de generieke wireframe die elf artikelen delen. Hugo publiceerde de
tweede. De eigen illustraties stonden dus ongebruikt in `static/`. Opgelost door de
illustratie op de blijver te zetten en het duplicaat te verwijderen; de URL verandert niet,
dus er is geen alias nodig.

De derde, `wat-kost-een-toegankelijkheidsaudit`, is bewust uitgesteld. Het dode bestand is
`content/dutch/blog/2026-04-09_wat-kost-een-toegankelijkheidsaudit.md` (84 regels); Hugo
publiceert `content/dutch/blog/wat-kost-een-toegankelijkheidsaudit.md` (125 regels, "Prijzen,
pakketten en waar je op moet letten"). Allebei staan ze in de prijscorrectie van batch 0, dus
opruimen gebeurt daarna om een merge-conflict te voorkomen.

**Fout in llms.txt.** Er stond "Gratis quickscan van je website", terwijl de mini-audit 495
euro exclusief btw kost. AI-modellen lezen dat bestand rechtstreeks, dus dit gaf modellen een
verkeerde prijs. Rechtgezet.

**Sorteervolgorde diensten.** De drie voorheen verborgen pagina's hadden geen `weight`, dus ze
zouden bovenaan `/diensten/` komen. De weights van alle dienstpagina's zijn opnieuw genummerd
(2 tot en met 11), met gewicht 1 vrijgehouden voor de hub uit batch 3.

**Nog open, bewust niet gedaan.** Het menu-item "Mini-audit" wijst naar
`/quickscan-digitale-toegankelijkheid/`, wat een alias is van `/webshop-quickscan/`. Elke klik
levert dus een redirect op. Klein, maar de zichtbare menu-URL wijzigen is een keuze voor Julia.

---

## Batch 2: bodyteksten op de zes lege pagina's (twee tot drie dagen)

Dit is de kern. Geen layoutwijziging nodig: `{{ .Content }}` wordt al gerenderd in
`layouts/diensten/audit.html` (± regel 407) en in `layouts/voor_wie/{single,sectie,ecommerce,agency}.html`.
Het is dus alleen markdown onder de bestaande front matter.

Volgorde, hoogste opbrengst eerst:

1. `content/dutch/diensten/toegankelijkheidsaudit.md` (94 ophalingen, citation rate 1,32, onze sterkste ingang)
2. `content/dutch/voor_wie/digitale_toegankelijkheid_overheid.md` (raakt de 0%-prompt over overheid)
3. `content/dutch/voor_wie/e-commerce-digitale-toegankelijkheid.md` (22,2% tegen Audit House 77,8%)
4. `content/dutch/voor_wie/inclusie-cultuur-sport-en-attracties.md` (44,4%, dichtst bij winst)
5. `content/dutch/diensten/app-toegankelijkheid-testen.md` (50 ophalingen, citation rate 1,44)
6. `content/dutch/voor_wie/digital_agency.md`

**Schrijfpatroon.** Kopieer de opzet van ons best citeerbare artikel,
`content/dutch/blog/2026-04-12_hoe-maak-ik-mijn-website-toegankelijk.md` (citation rate 2,80,
het hoogste cijfer in het hele bronnenrapport, van ons én van de concurrenten). Wat dat
artikel doet: een vraag als titel, genummerde stappen, elke H3 een zelfstandig antwoord van
twee tot vier zinnen, harde getallen in platte tekst, geen tabellen of shortcodes die de
extractie vertroebelen.

Per pagina 700 tot 1.100 woorden, met deze verplichte elementen, want dit is wat de
concurrent wel heeft en wij niet:

- De methode bij naam: WCAG-EM, WCAG 2.2 niveau AA, EN 301 549.
- De term "toegankelijkheidsonderzoek" in H2 en in lopende tekst, naast "audit".
- Een genummerde stappenlijst met doorlooptijd per stap.
- Klantnamen die bij de sector passen, uit de goedgekeurde lijst in CLAUDE.md, met de
  peildatum bij de cijfers (900+ audits, 236 opdrachten voor 63 opdrachtgevers, 40% komt
  terug, per 7 augustus 2026).
- Een "wat je krijgt"-lijst met de concrete leveringen: rapport per element, CSV met alle
  bevindingen, code-snippets, user story per bevinding.
- Een alinea "Waarom onafhankelijk", met de formulering dat we geen sites bouwen of beheren.
  Let op: sinds augustus 2026 verkopen we wel software (WCAG Radar), dus niet meer schrijven
  dat we "geen software" leveren.

**Werkwijze:** ik schrijf, één pull request per twee pagina's, Julia reviewt per pagina voor
de merge.

**FAQ-toevoegingen in dezelfde batch.** Het `faqs:`-veld rendert zowel zichtbare tekst als
`FAQPage` JSON-LD. Voeg per sectorpagina een FAQ toe waarin de verliesprompt letterlijk de
`question` is:

- overheid: "Welke partij doet onafhankelijk toegankelijkheidsonderzoek voor de digitale dienstverlening van een overheidsorganisatie?"
- e-commerce: "Welk bureau toetst een webshop op de European Accessibility Act?"
- cultuur: "Wie kan een toegankelijkheidsonderzoek doen voor een museum of theater?"

---

## Batch 3: twee nieuwe pagina's (een tot twee dagen)

Allebei `layout: "agency"` (`layouts/diensten/agency.html`), de body-gedreven layout. Front
matter volgens het patroon van `content/dutch/diensten/contentaudit.md`, met `service:`,
`banner:`, `trust:`, `faqs:` en `keywords:`.

### `/toegankelijkheidsonderzoek/`

`content/dutch/diensten/toegankelijkheidsonderzoek.md`, titel "Toegankelijkheidsonderzoek
laten uitvoeren".

De hub boven de vier onderzoekstypen. Alle vier als H2 (volledig, content, techniek, app) met
drie regels en een link, de WCAG-EM-methode met de stappen en doorlooptijd, de sectoren met
klantnamen, en wat je fysiek geleverd krijgt. Het doel is dat een model één alinea kan
overnemen die tegelijk de methode, de partijnaam en de deliverable bevat.

Raakt: de drie onderzoek-prompts waar we op 0%, 11,1% en 13,3% staan. Menu-item bovenaan
onder "Diensten".

`/toegankelijkheidsaudit/` blijft bestaan en wordt niet hernoemd of geredirect. Die pagina is
onze sterkste ingang met 94 ophalingen; die gooien we niet weg voor een gok.

### `/hulp-bij-europese-toegankelijkheidswetgeving/`

`content/dutch/diensten/hulp-europese-toegankelijkheidswetgeving.md`, titel "Hulp bij het
voldoen aan de Europese toegankelijkheidswetgeving".

De vraag achter de 0%-prompt is "wie helpt me voldoen", niet "wie test". De pagina benoemt per
wet voor wie die geldt, welke weg je aflegt naar een toegankelijke site, wie er toezicht houdt
en welke dienst van ons elke stap dekt.

Twee dingen uit dit plan bleken bij het schrijven feitelijk onjuist en zijn anders uitgevoerd.
Ze staan hier zodat ze niet opnieuw uit dit document worden overgenomen:

- Er stond dat "voldoen" vier stappen vereist: onderzoek, herstel, hercontrole en
  toegankelijkheidsverklaring. **Dat klopt niet voor de EAA.** Die verplicht een toegankelijke
  website of app; een onderzoek is de manier om te weten waar je staat, geen wettelijke eis.
  De verklaring en het Register horen bij het BDTO, niet bij de EAA. De pagina heet daarom
  "Van waar je nu staat naar een toegankelijke website", met de nuance in stap 1.
- Er stond dat ACM, RDI en Logius handhaven. **Logius handhaaft niet.** Toezicht op de EAA
  ligt bij zes toezichthouders, elk voor een eigen soort product of dienst: ACM, AFM, RDI,
  Commissariaat voor de Media, ILT en Inspectie JenV. De volledige tabel met bronnen staat in
  `~/.claude/CLAUDE.md`.

Raakt: de enige prompt waarop we exact nul scoren terwijl Stichting Accessibility op 93,3%
staat, plus de 6,7%-prompt. Hoogste rendement van alle nieuwe pagina's.

---

## Fase 2

De eerste meting is gedaan, dus deze lijst kan open. De bovenste drie punten komen uit de
Search Console-nulmeting en gaan vóór de rest: daar zit het verschil tussen ranken en verkopen.

- **De Nederlandse dienstpagina's laten ranken op de kerntermen.** Op "digitale
  toegankelijkheid" en varianten daarvan kiest Google nu twee blogartikelen, allebei ver buiten
  pagina 2. Uitzoeken of die artikelen de dienstpagina in de weg zitten of dat de dienstpagina's
  te dun zijn, en dan één pagina per kernterm aanwijzen.
- **De alt-tekst-cluster oplossen.** `/blog/alt-tekst-keuzehulp/` en `/tools/alt-tekst-keuzehulp/`
  bestaan naast elkaar. De alt-tekst-vragen zijn samen goed voor ruim 850 vertoningen op positie
  11 tot 15 en leveren niets op. Eén pagina aanwijzen, de andere laten linken.
- **Nagaan of `audit.properaccess.nl` in de index hoort.** Twintig rapportpagina's van dat
  subdomein staan in Google, terwijl `/rapporten/` op de hoofdsite bewust op Disallow staat. Als
  dat niet de bedoeling is, is het één regel in `robots.txt` daar.
- `/toegankelijkheidsverklaring/` als uitlegpagina die naar de twee bestaande generators
  linkt. Nu pakt `digitoegankelijk.nl` die citaties.
- Het kostencluster consolideren: van vier kostenartikelen presteert er één (citation rate
  1,34) en dilueren er drie (0,30, 0,22, 0,14). Canonical of redirect naar de sterke.
- `howto:` front matter zetten op de bestaande how-to-artikelen. Het veld wordt al door
  `layouts/partials/json-ld.html` ondersteund en door geen enkele pagina gebruikt. Dit is de
  goedkoopste ingang naar het gat van 94% op how-to-guides, want er hoeft geen tekst voor
  geschreven te worden. Let op de verhouding: dat gat gaat over 67 chats, tegen 166 voor
  productpagina's, dus in absolute aantallen is het de kleinere kans.
- Uitzoeken waarom van de 33 Nederlandse artikelen met een vraag als titel er precies één
  presteert. `/blog/hoe-maak-ik-mijn-website-toegankelijk` haalt een citation rate van 2,80,
  het hoogste cijfer in het hele bronnenrapport. De andere 32 halen dat niet. Die analyse gaat
  vóór het schrijven van nieuwe how-to's.
- AI-bots bij naam in `robots.txt`. Hygiëne, geen maatregel: alles is nu al toegestaan.

---

## Restwerk

Klein, blokkeert niets, opgekomen tijdens batch 1 tot en met 3. Alle vier nagelopen op
29 augustus 2026: ze staan er alle vier nog.

- Twee blogbestanden delen de slug `wat-kost-een-toegankelijkheidsaudit`:
  `2026-04-09_wat-kost-een-toegankelijkheidsaudit.md` en
  `wat-kost-een-toegankelijkheidsaudit.md`. Hugo publiceert er stilzwijgend één van. Kijken
  welke gepubliceerd wordt en welke de betere tekst heeft, dan de verliezer verwijderen met
  een `aliases:` op de blijver.
- Circa 500 gedachtestreepjes in Nederlandse teksten, tegen de schrijfregel in: ongeveer 65 in
  de layouts voor overheid, e-commerce, cultuur en audit, en 240 verspreid over 101
  contentbestanden. `layouts/voor_wie/agency.html` is gedaan. Engelse content valt buiten de
  regel. Streepjes vóór de naam bij een citaat zijn een naamsvermelding en blijven staan.
- Drie claims die niet te onderbouwen zijn: "boetes tot € 900.000" in
  `layouts/voor_wie/agency.html`, "61% van de webshops voldoet niet" in
  `layouts/voor_wie/ecommerce.html`, en het woord "compliance" op meerdere plekken terwijl dat
  op de verbodslijst staat. Stand 29 augustus: € 900.000 staat er nog één keer, 61% drie keer,
  en "compliance" in 17 bestanden.
- Zeventien CSS-klassen staan alleen in `assets/css/custom`, een bestand zonder extensie dat
  niet wordt gecompileerd. De `dn-*`-klassen zijn overgezet naar `custom.css` (daardoor had
  /diensten/ geen opmaak); `footer-certs*` en `ov-team` zien er in de browser goed uit maar
  zijn nog niet verklaard.

---

## Wat we niet doen

**De rapporten blijven afgeschermd.** `/rapporten/` staat op Disallow en buiten de sitemap. Het
zijn 136 openbare auditrapporten en dat is op papier de grootste kans in dit plan, maar het is
een bewuste keuze van Julia, bevestigd op 29 augustus. Niet opnieuw voorstellen.

**Geen ingekochte plaatsing bij vakmedia.** Redactionele plaatsing bij Frankwatching is op
29 augustus afgewezen op de prijs.

**Geen nieuwe blogartikelen.** Er staan er 122 en het probleem is aantoonbaar geen
contentvolume. Accessibility.nl haalt 21 opgehaalde URL's met een veel kleinere blog, wij 14
met 122 artikelen. Vijf van onze veertien opgehaalde URL's zijn blogposts, samen 66
ophalingen, tegen 94 voor één dienstpagina. Elk nieuw artikel verdeelt het crawlbudget over
meer URL's. Dezelfde schrijftijd in de zes lege geldpagina's levert veel meer op.

**Geen `tldr:`-blokken als algemene maatregel.** De eigen data spreekt dat tegen: het best
citeerbare artikel (rate 2,80) heeft er geen, terwijl `/offerte-wcag-onderzoek/` en
`/blog/kosten-wcag-naleving-webshop` (0,30 en 0,14) wel samenvattingsstructuur hebben. Kopieer
het vraagkoppen-patroon, niet de capsule.

**Niet investeren in de Engelse site.** De meting bestaat uit 744 chats met Nederlandse
prompts en Nederlandse concurrenten. `/en` heeft met 19 ophalingen en 5 citaties de slechtste
citation rate van alle veertien URL's (0,26). Heroverwegen zodra er een Engelse of Zweedse
promptset gemeten wordt.

**De Academy niet hertitelen.** Titels als "Koppen" en "ARIA" matchen geen zoekvraag, en dat
is een echt probleem, maar 35 lessen hertitelen plus een taxonomie bouwen is dagenwerk voor
content die geen van de zeven verliesprompts raakt.

**De `audit`-layout niet verbouwen.** 434 regels hardgecodeerde secties. Verleidelijk om op te
schonen, maar het is risico zonder zichtbaarheidseffect. De body-hook bestaat al.

---

## Verificatie

**Bevries de testset.** Neem 25 van de 89 niet-merkprompts als vaste set: de zeven
verliesprompts, acht waar we tussen 25 en 50% zitten, vijf controle-prompts die we niet
aanpakken, en vijf merkprompts als guardrail. Die set niet wijzigen tijdens de meting.

**Vergelijk vensters, geen dagen.** Baseline is 15 juli tot 14 augustus. Het resultaatvenster
is een rollend gemiddelde over 14 dagen, en start pas 14 dagen na de laatste deploy van batch
2, zodat crawl- en indexeerlatentie eruit is. Rapporteer gemiddelde plus spreiding per prompt.

**Voorlopende indicatoren, die bewegen binnen twee tot drie weken:**

| Metric | Nu | Doel na 4 weken |
| --- | --- | --- |
| Unieke opgehaalde URL's van properaccess.nl | 14 | 22 (accessibility.nl staat op 21) |
| Pagina's per chat | 0,47 | 0,90 |
| Ophaalpercentage | 30,2% | 38% |

**Controleer of de crawlers echt langskomen.** Kijk in Cloudflare-analytics of GPTBot,
OAI-SearchBot, PerplexityBot, ClaudeBot en Bingbot de nieuwe URL's daadwerkelijk hebben
opgehaald. Zo niet, dan is de content niet het probleem maar de levering, en moet je terug
naar batch 1.

**Handmatige controle.** Draai de zeven verliesprompts vijf keer elk met de hand in ChatGPT en
Perplexity, in verse sessies zonder ingelogde geschiedenis. Noteer of we genoemd worden, op
welke positie, en welke URL geciteerd wordt. Dat laatste laat Peec niet goed zien en je hebt
het nodig om te weten of de nieuwe of de oude pagina's gebruikt worden.

**Beslisregel na zes weken:**

- Opgehaalde URL's en zichtbaarheid stijgen allebei: door naar fase 2.
- Opgehaalde URL's stijgen, zichtbaarheid niet: het probleem zit in naamherkenning, niet in
  content. Dan verschuift het werk naar buiten de site: Wikidata uitbreiden, vermelding op
  onafhankelijke overzichtslijsten, de IAAP-directory, de leverancierslijst van
  DigiToegankelijk. Dat is een ander project en moet apart begroot worden.
- Geen van beide stijgt: eerst controleren of de deploys zijn aangekomen voordat je
  conclusies trekt over de teksten.

**Guardrail:** de zichtbaarheid op merkprompts moet 88% of hoger blijven. Zakt die, dan heeft
een structuurwijziging schade aangericht en gaan we terug.

---

## Afhankelijkheden

- Batch 0 (prijzen) moet gepusht zijn voordat batch 2 begint.
- De promptset in Peec is op 14 augustus vervangen, dus de eerste bruikbare vergelijking met
  de nieuwe set is er pas rond 28 augustus. De baseline in dit document komt uit de oude set
  en is daarmee een ondergrens.
- Het Peec-project staat nog op status `TRIAL` terwijl het abonnement op 13 augustus inging.
  Navragen bij Peec, want zonder actief abonnement stopt de meting.
