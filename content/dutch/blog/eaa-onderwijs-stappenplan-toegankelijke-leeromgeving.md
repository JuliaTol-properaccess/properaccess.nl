---
title: "EAA en het onderwijs: 6 stappen naar een toegankelijke leeromgeving"
slug: "eaa-onderwijs-stappenplan-toegankelijke-leeromgeving"
date: 2026-03-09
categories:
  - "de EAA"
  - "achtergrond_wcag"
tags:
  - "toegankelijke-website"
  - "onderwijs"
  - "moodle"
  - "wordpress"
aliases:
  - /eaa-onderwijs-stappenplan-toegankelijke-leeromgeving/
description: "Wat moet jouw onderwijsinstelling doen voor de European Accessibility Act? Een concreet stappenplan voor Moodle, Canvas en WordPress, van mini-audit tot borging."
---

Je leeromgeving draait, je docenten zijn enthousiast over digitaal onderwijs en je studenten loggen dagelijks in op Moodle of Canvas. Maar kun je garanderen dat een blinde student die toets kan maken? Of dat een student met een motorische beperking door je WordPress-site kan navigeren om zich in te schrijven voor een minor?

Sinds 28 juni 2025 is de [European Accessibility Act (EAA)](/eaa/) van kracht. Voor een deel van de onderwijsinstellingen is dat de wet die geldt. Voor het andere deel gold de plicht al jaren, via het Besluit digitale toegankelijkheid overheid. Welke van de twee bij jou hoort, staat hieronder. Maar wat moet je dan precies doen? En waar begin je als je meerdere platformen hebt, honderden documenten en een IT-afdeling die al overvol zit?

In dit artikel neem ik je mee door de zes stappen die we bij Proper Access doorlopen met onderwijsinstellingen. Het stappenplan komt uit de 950+ audits die we sinds 2019 hebben gedaan, stand 7 augustus 2026.

## Eerst even: onder welke wet valt jouw instelling?

Dat hangt af van wat je instelling juridisch is, en niet van wat ze aanbiedt. Voor je eigen website en je eigen apps geldt het ene regime of het andere, nooit allebei.

- Ben je een overheidsinstantie of een **publiekrechtelijke instelling**, dan geldt het Besluit digitale toegankelijkheid overheid (BDTO). Dat besluit geldt in Nederland sinds 1 juli 2018.
- Ben je dat niet en bied je digitale diensten aan, dan geldt de [European Accessibility Act (EAA)](/eaa/), sinds 28 juni 2025.

**Publiekrechtelijke instelling is een juridisch begrip en geen kwestie van subsidie.** Het komt uit het aanbestedingsrecht, uit artikel 2 van richtlijn 2014/24, en kent drie voorwaarden die alle drie moeten gelden:

1. opgericht om te voorzien in behoeften van algemeen belang, zonder industrieel of commercieel karakter;
2. rechtspersoonlijkheid;
3. in hoofdzaak gefinancierd door de overheid, of onder toezicht van de overheid, of een bestuur waarvan de overheid meer dan de helft benoemt.

Een rijksbijdrage of een subsidie zet het BDTO dus niet in werking. Het gaat om financiering in hoofdzaak, plus die eerste twee voorwaarden. Twijfel je over je eigen instelling, leg dat dan voor aan een jurist en niet aan een auditor. Wij toetsen je website; onder welke wet je valt, bepalen wij niet.

Voor het dagelijkse werk maakt het verschil minder uit dan je zou denken. Onder beide wetten ligt EN 301 549, de Europese norm voor toegankelijkheid van ICT, en die staat nu op WCAG 2.1 niveau A en AA. Wij toetsen aan WCAG 2.2, als extra service boven de geldende norm. Wat wél verschilt, is wat je moet publiceren: onder het BDTO heeft elk digitaal kanaal een eigen toegankelijkheidsverklaring in het Register nodig, dus je hoofdsite, je leeromgeving, je studentportaal en je apps allemaal apart. Onder de EAA zet je informatie over de toegankelijkheid van je dienst op een aparte pagina op je website.

## Wat we tegenkomen bij onderwijsinstellingen

Bij onderwijsinstellingen komen vijf problemen bijna overal terug. Zelden iets exotisch.

**Toetsen die niet werken met hulpsoftware.** De toetsomgeving is het meest kritieke onderdeel. Studenten moeten onder tijdsdruk presteren, en dan werkt de timer niet met een schermlezer, zijn multiple-choice vragen niet gekoppeld aan hun antwoordopties, of sluit een pop-up niet met Escape. Zo'n student wordt beoordeeld op het bedienen van kapotte software en niet op zijn kennis.

**Leermateriaal als ontoegankelijke PDF.** Readers, syllabi en hand-outs worden massaal als PDF aangeboden. Zonder koppenstructuur, zonder alt-teksten bij diagrammen, zonder leesbare tabellen. Een schermlezer leest dan tekst zonder structuur voor, in de volgorde waarin die in het bestand staat.

**Videocontent zonder ondertiteling of transcript.** Opgenomen hoorcolleges, instructievideo's en webinars: het onderwijs leunt zwaar op video. Maar ondertiteling ontbreekt structureel, of is automatisch gegenereerd zonder correctie.

**Custom thema's die de basis kapotmaken.** Moodle en Canvas zijn out-of-the-box redelijk toegankelijk. Maar de eerste aanpassing aan het thema levert vaak nieuwe barrières op: een eigen navigatiemenu, een eigen dashboard, een inlogpagina in de huisstijl. Omdat niemand test na de aanpassing.

**SCORM-pakketten waar niemand in kijkt.** E-learningmodules van Articulate of Captivate worden als SCORM-pakket in het LMS geladen. De instelling heeft vaak geen idee wat erin zit, en de leverancier ook niet. Je houdt dan een module over die er goed uitziet en die met het toetsenbord niet te bedienen is.

## Het stappenplan: van eerste meting tot hercontrole

### Stap 1: Breng je digitale landschap in kaart

Voordat je kunt verbeteren, moet je weten wat je hebt. En bij een onderwijsinstelling is dat meer dan "een website".

Maak een overzicht van al je digitale omgevingen:

- Je **website** (meestal WordPress of een ander CMS)
- Je **leeromgeving** (Moodle, Canvas, Blackboard)
- Je **studentportaal** (inschrijving, rooster, cijfers)
- Je **videoplatform** (Panopto, Kaltura, YouTube)
- Je **e-learning modules** (Articulate, Captivate, SCORM-pakketten)
- **Overige tools** (chat, berichten, discussiefora)

Per platform: wie is de eigenaar? Wie beheert het technisch? En wie produceert de content?

**Hoe wij hierbij helpen:** In een oriënterend gesprek lopen we samen je digitale landschap door. We helpen je bepalen bij welke platformen het risico het grootst is en waar je begint. Dat gesprek is gratis en vrijblijvend, en je weet daarna hoe groot de scope is.

### Stap 2: Start met een mini-audit op je belangrijkste platform

Je hoeft niet meteen alles te laten auditen. Begin met je meest gebruikte platform. In de meeste gevallen is dat je LMS of je hoofdwebsite.

Een mini-audit geeft je in vijf werkdagen een beknopt risico-overzicht. Je weet dan:

- Hoe groot het probleem is
- Welke categorieën problemen je hebt: technisch, content, of allebei
- Of je met een paar aanpassingen al een heel eind komt, of dat er structureel werk nodig is

**Hoe wij hierbij helpen:** Onze mini-audit doen we met de hand. Een geautomatiseerde scan herkent ongeveer 30% van de succescriteria; de rest zie je alleen door de pagina zelf te gebruiken. We testen je platform zoals een student het gebruikt: met het toetsenbord, met een schermlezer en met vergroting. Na vijf werkdagen heb je een concreet overzicht.

### Stap 3: Laat een volledige WCAG-audit uitvoeren

Met de mini-audit weet je waar je staat. De volgende stap is een volledige audit volgens WCAG 2.2. Dit is het fundament van je verbetertraject.

Bij onderwijsinstellingen auditen we per platform:

| Platform                      | Wat we testen                                              |
| ----------------------------- | ---------------------------------------------------------- |
| Website (WordPress/CMS)       | Navigatie, content, formulieren, zoekfunctie, inschrijving |
| LMS (Moodle/Canvas)           | Modules, toetsen, opdrachten, discussies, cijferoverzicht  |
| E-learning (Articulate/SCORM) | Navigatie, interacties, multimedia, toetsenbordbediening   |
| Studentportaal                | Inschrijving, rooster, cijfers, berichten                  |
| Videoplatform                 | Speler, ondertiteling, bediening, toetsenbordnavigatie     |

**Hoe wij hierbij helpen:** Ons auditrapport is fundamenteel anders dan wat je van andere bureaus krijgt. We rapporteren per element, niet per succescriterium. Dat betekent: je IT-afdeling krijgt niet "SC 1.1.1 is niet gehaald" met een lijst van veertig pagina's. Ze krijgen: "Deze knop in het toetsscherm mist een toegankelijke naam. Hier is een screenshot. Dit is de impact. Zo los je het op."

We weten bovendien of een probleem in je Moodle-thema zit, in een plugin, of in de core. Dat scheelt je IT-afdeling weken zoekwerk.

_Indicatieve prijs: een website-audit start vanaf circa € 2.250, exclusief btw. Wat een leeromgeving kost, hangt af van het aantal platformen en de omvang van de steekproef; dat rekenen we uit in de kennismaking._

### Stap 4: Prioriteer en plan de verbeteringen

Een auditrapport kan overweldigend zijn. Tientallen bevindingen, verdeeld over meerdere platformen. De kunst is: niet alles tegelijk willen oplossen, maar beginnen waar de impact het grootst is.

Onze vuistregel voor onderwijs:

1. **Toetsomgeving eerst.** Als studenten niet fatsoenlijk een toets kunnen maken, is dat je grootste risico, juridisch en inhoudelijk.
2. **Navigatie en structuur.** Kunnen studenten bij de lesstof komen? Werkt het menu, de zoekfunctie, de modulelijst?
3. **Content: de meest gebruikte documenten.** Begin met de PDF's en video's die door de meeste studenten worden gebruikt.
4. **Formulieren en interactie.** Inschrijving, contactformulieren, discussiefora.
5. **Visueel ontwerp.** Contrast, lettergroottes, focus-indicatoren.

**Hoe wij hierbij helpen:** Na de audit plannen we een nabespreking van een uur met je team. We lopen het rapport samen door, beantwoorden vragen en helpen je een realistische planning maken. Wie pakt wat op? Wat kan je IT-afdeling zelf? Waarvoor moet je terug naar je leverancier? Na die sessie heeft iedereen een duidelijke takenlijst.

### Stap 5: Voer de verbeteringen door en betrek je hele organisatie

Hier wordt het concreet. Je IT-afdeling pakt de technische bevindingen op, je contentteam verbetert documenten en video's, en je gaat in gesprek met leveranciers over de problemen in hun software.

Een paar tips uit de praktijk:

- **Moodle-thema's:** Laat je leverancier niet zomaar een nieuw thema installeren zonder toegankelijkheidscheck. Bijna elk custom thema dat we zien introduceert nieuwe problemen.
- **WordPress-plugins:** Niet elke plugin is toegankelijk. Kies voor plugins die WCAG-ondersteuning expliciet benoemen, en test ze voordat je ze live zet.
- **PDF's:** Maak een handleiding voor docenten. Hoe voeg je koppenstructuur toe in Word? Hoe schrijf je alt-teksten bij diagrammen? Hoe exporteer je een toegankelijke PDF? Een pagina met de vijf belangrijkste regels is genoeg.
- **Video:** Automatische ondertiteling (bijvoorbeeld via Panopto of YouTube) is een goed startpunt, maar moet altijd handmatig worden gecorrigeerd. Vooral vaktermen en eigennamen gaan fout.

**Hoe wij hierbij helpen:** Vragen na de audit stel je met een [strippenkaart](/strippenkaart/): één strip is één vraag over één onderwerp. Dat geldt voor een bevinding die niet duidelijk is, voor de interpretatie van een richtlijn, en voor een IT-afdeling die vastloopt op een Moodle-probleem en wil dat we meedenken bij de oplossing. Je spreekt rechtstreeks met de auditor die je rapport heeft geschreven, zonder tussenlaag.

We bieden ook een contentaudit aan: we toetsen een steekproef van jullie documenten, video's en LMS-pagina's en leveren richtlijnen op die je hele organisatie kan toepassen. Handig als je honderden docenten hebt die content maken. Eén voorwaarde: een contentaudit doen we alleen naast een onderzoek van de techniek van dezelfde omgeving, door ons of door iemand anders. Zonder dat tweede deel heeft een verklaring maar de helft van haar onderbouwing.

### Stap 6: Laat een hercontrole uitvoeren en borg de toegankelijkheid

Verbeteringen doorgevoerd? Dan wil je zeker weten dat alles goed is opgelost en dat er geen nieuwe problemen zijn ontstaan. Een hercontrole geeft je die zekerheid.

Daarmee ben je er nog niet. Nieuwe content, een nieuwe plugin of een nieuw stuk functionaliteit kan opnieuw barrières opleveren.

**Hoe wij hierbij helpen:** Wat een hercontrole kost hangt af van het aantal bevindingen in je rapport; meestal ligt dat tussen € 300 en € 1.100. We controleren of de bevindingen uit de oorspronkelijke audit zijn opgelost en signaleren eventuele nieuwe problemen.

Voor instellingen die structureel willen borgen, bieden we een toegankelijkheids-abonnement of strippenkaart aan. Dan denken we doorlopend mee: bij nieuwe releases, bij de keuze voor een nieuwe plugin, bij de inrichting van een nieuw deel van je leeromgeving. Zo voorkom je dat je over een jaar weer van voren af aan moet beginnen.

## De tijdlijn: wanneer moet je klaar zijn?

Dat hangt af van welke wet voor jou geldt, en in beide gevallen is het antwoord: nu.

- **Onder het BDTO** zijn alle nalevingsdata verstreken. Websites van vóór 23 september 2018 moesten voldoen op 23 september 2020, websites van daarna op 23 september 2019, en mobiele apps op 23 juni 2021.
- **Onder de EAA** gelden de regels sinds 28 juni 2025. Er is één uitloop, en die is smaller dan vaak wordt gedacht: diensten die op 28 juni 2025 al liepen, mogen tot 28 juni 2030 doorwerken met producten die er toen al waren. Dat is geen uitstel voor je leeromgeving zelf.

Maar wacht niet op de deadline. Bij een gemiddelde onderwijsinstelling duurt het traject van eerste audit tot een volledig toegankelijk resultaat al snel zes tot twaalf maanden. Je hebt te maken met meerdere platformen, externe leveranciers en honderden content-auteurs. Dat kost tijd.

## Begin vandaag, niet volgende maand

Elke dag dat je digitale leeromgeving niet toegankelijk is, zijn er studenten die niet volledig kunnen deelnemen aan het onderwijs. Een student die een toets niet kan maken. Een student die de lesstof niet kan lezen. Een student die zich niet kan inschrijven voor een vak.

Dat is niet alleen een wettelijk risico. Het raakt de kern van waar onderwijs voor staat: gelijke kansen voor iedereen.

De eerste stap is klein: een mini-audit op je belangrijkste platform, klaar binnen vijf werkdagen. Dan weet je waar je staat. En als je verder wilt, helpen we je stap voor stap naar een toegankelijk resultaat.

Advies nodig? Neem contact op voor een vrijblijvend gesprek: 085 5055 890 of mail naar info@properaccess.nl.

---

*Julia Tol is oprichter van Proper Access en helpt onderwijsinstellingen bij het realiseren van digitale toegankelijkheid. Met 9 jaar ervaring als ontwikkelaar en diepgaande kennis van Moodle, Canvas, WordPress en Articulate kent ze de techniek achter je platform tot in de broncode.*
