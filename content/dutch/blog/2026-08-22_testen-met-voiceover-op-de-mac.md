---
title: "Testen met VoiceOver: zo begin je op de Mac"
meta_title: "VoiceOver leren gebruiken om te testen | Proper Access"
date: 2026-08-22
slug: "testen-met-voiceover-op-de-mac"
categories:
  - "tips-en-tools"
  - "webdeveloper"
tags:
  - "voiceover"
  - "schermlezer"
  - "testen"
  - "wcag"
description: "VoiceOver staat al op je Mac. Met vijftien toetscombinaties hoor je wat er van je pagina overblijft zonder scherm. Aanzetten, bedienen en herkennen wat er misgaat."
image: "/images/blog/voiceover-vo-toets.webp"
keywords:
  - VoiceOver testen
  - VoiceOver leren gebruiken
  - schermlezer testen Mac
  - VoiceOver sneltoetsen
  - website testen met schermlezer
tldr: "Zet VoiceOver aan met Command+F5 en gebruik Safari. De VO-toets is Control+Option. Met VO+U open je de webrotor, en daarmee de koppen-, link- en formulierlijst van je pagina. Zet in het VoiceOver-hulpprogramma (VO+F8) het bijschriftvenster aan, zodat je kunt teruglezen wat er wordt gezegd."
faqs:
  - question: "Moet ik VoiceOver installeren op mijn Mac?"
    answer: "Nee. VoiceOver zit in macOS zelf. Je zet hem aan met Command+F5, of door op een Mac met Touch ID drie keer snel op de Touch ID-knop te drukken. Met dezelfde toetscombinatie zet je hem weer uit."
  - question: "Welke browser gebruik ik bij VoiceOver?"
    answer: "Safari. VoiceOver en Safari komen van dezelfde maker en werken het beste samen. Chrome en Firefox werken ook met VoiceOver en gedragen zich op onderdelen anders, dus een uitkomst in Safari zegt niets over die browsers."
  - question: "Wat is de VO-toets in VoiceOver?"
    answer: "VO staat voor Control+Option. Bijna elk VoiceOver-commando begint met die twee toetsen. Wil je ze niet steeds vasthouden, dan vergrendel je de VO-toets met Control+Option+puntkomma."
  - question: "Kan ik met VoiceOver zelf een toegankelijkheidsonderzoek doen?"
    answer: "Je kunt er problemen mee vinden die geen enkele geautomatiseerde scan vindt, zoals knoppen zonder naam en formulieren die niets melden bij een fout. Een volledig onderzoek is meer dan een schermlezertest: contrast, zoom, focuszichtbaarheid en toetsenbordbediening toets je apart, en een onderzoek voor het Register moet volgens WCAG-EM zijn uitgevoerd."
  - question: "Hoe lang duurt het voordat ik VoiceOver kan bedienen?"
    answer: "Voor de tien commando's uit dit artikel heb je een uur nodig. Vlot navigeren met de rotor en snelnavigatie kost een paar sessies. Je hoeft VoiceOver niet zo goed te kennen als een dagelijkse gebruiker om er problemen mee te vinden."
---

VoiceOver staat al op je Mac. Je hoeft niets te downloaden en niets te betalen: <kbd>Command</kbd> + <kbd>F5</kbd> en hij praat. Wat daarna gebeurt, zorgt ervoor dat de meeste mensen hem binnen twee minuten weer uitzetten. Er begint een stem die je niet kunt bijhouden en je pijltjestoetsen doen ineens iets anders dan je verwacht.

Zonde, want dit is de enige test die je laat horen wat er van je pagina overblijft zonder scherm. Alles wat je alleen ziet, bestaat voor een schermlezergebruiker niet.

## Wat je nodig hebt

Een Mac en Safari. VoiceOver en Safari komen van dezelfde maker en werken het beste samen. Chrome en Firefox werken ook, en gedragen zich op onderdelen anders. Test in Safari en houd er rekening mee dat een andere browser tot een andere uitkomst leidt.

Verder een koptelefoon, als je met collega's in een ruimte zit.

## VoiceOver aanzetten

Druk op <kbd>Command</kbd> + <kbd>F5</kbd>. Op een Mac met Touch ID werkt ook: drie keer snel op de Touch ID-knop drukken. De eerste keer verschijnt een welkomstvenster. Met <kbd>Enter</kbd> ga je verder, met <kbd>V</kbd> start je de ingebouwde training die je stap voor stap door de bediening loopt.

Drie dingen die je meteen wilt weten:

- **<kbd>Control</kbd> zet de spraak stil.** De belangrijkste toets van de eerste dag.
- **De VO-toets is <kbd>Control</kbd> + <kbd>Option</kbd>.** Bijna elk commando begint daarmee. In handleidingen staat die combinatie als VO. Vergrendelen kan met <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>puntkomma</kbd>, dan hoef je ze niet steeds vast te houden.
- **Op een MacBook hoort er soms <kbd>Fn</kbd> bij de F-toetsen**, afhankelijk van je toetsenbordinstelling.

![](/images/blog/voiceover-vo-toets.webp)

Praat hij te snel voor je, zet dan de spreeksnelheid lager in het VoiceOver-hulpprogramma. Dat open je met <kbd>VO</kbd> + <kbd>F8</kbd>, de snelheid staat onder Spraak.

Zet in datzelfde hulpprogramma onder Visueel het bijschriftvenster aan. Dat toont op het scherm mee wat VoiceOver zegt, als tekst. Voor een test is dat het eerste wat ik aanzet: je kunt teruglezen wat er precies werd gezegd, het overnemen in een bevinding, en het laten zien aan iemand die niet meeluisterde.

## De commando's die je nodig hebt

| Wat je wilt doen | Toetsen |
| --- | --- |
| VoiceOver aan of uit | <kbd>Command</kbd> + <kbd>F5</kbd> |
| Spraak stoppen | <kbd>Control</kbd> |
| Naar het volgende onderdeel | <kbd>VO</kbd> + <kbd>Pijl rechts</kbd> |
| Naar het vorige onderdeel | <kbd>VO</kbd> + <kbd>Pijl links</kbd> |
| Onderdeel activeren | <kbd>VO</kbd> + <kbd>Spatie</kbd> |
| Alles voorlezen vanaf hier | <kbd>VO</kbd> + <kbd>A</kbd> |
| Webrotor openen | <kbd>VO</kbd> + <kbd>U</kbd> |
| Naar de volgende kop | <kbd>VO</kbd> + <kbd>Command</kbd> + <kbd>H</kbd> |
| Naar de volgende link | <kbd>VO</kbd> + <kbd>Command</kbd> + <kbd>L</kbd> |
| Naar het volgende formulierveld | <kbd>VO</kbd> + <kbd>Command</kbd> + <kbd>J</kbd> |
| Naar de volgende tabel | <kbd>VO</kbd> + <kbd>Command</kbd> + <kbd>T</kbd> |
| Naar de vorige van die soort | <kbd>Shift</kbd> erbij, dus <kbd>VO</kbd> + <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> |
| Een groep in gaan | <kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Pijl omlaag</kbd> |
| Een groep verlaten | <kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Pijl omhoog</kbd> |
| VoiceOver-hulpprogramma openen | <kbd>VO</kbd> + <kbd>F8</kbd> |

<kbd>Tab</kbd> en <kbd>Shift</kbd> + <kbd>Tab</kbd> blijven gewoon werken. Het verschil: met <kbd>Tab</kbd> loop je langs alles wat bedienbaar is, met <kbd>VO</kbd> + <kbd>Pijl rechts</kbd> loop je langs alles, inclusief tekst, afbeeldingen en lege groepen. Beide vertellen je iets anders over je pagina.

## De webrotor is waar je test begint

Druk op <kbd>VO</kbd> + <kbd>U</kbd>. Je krijgt een lijst te zien en te horen. Met <kbd>Pijl links</kbd> en <kbd>Pijl rechts</kbd> wissel je van soort: koppen, links, formulierbesturingselementen, oriëntatiepunten. Met <kbd>Pijl omhoog</kbd> en <kbd>Pijl omlaag</kbd> loop je door de lijst, met <kbd>Enter</kbd> spring je naar het onderdeel, met <kbd>Escape</kbd> sluit je de rotor. Typen filtert de lijst.

![](/images/blog/voiceover-webrotor.webp)

Dit is de belangrijkste stap, en de reden is dit: een dagelijkse gebruiker leest jouw pagina zelden van boven naar beneden. Hij opent deze lijst en kiest waar hij begint. Staat er in de koppenlijst drie keer "Kop niveau 2, Lees meer", dan weet je al genoeg voordat je één regel code hebt geopend.

Er is ook snelnavigatie. Druk <kbd>Pijl links</kbd> en <kbd>Pijl rechts</kbd> tegelijk in en losse letters gaan werken, waaronder <kbd>H</kbd> voor de volgende kop en de cijfers <kbd>1</kbd> tot en met <kbd>6</kbd> voor kopniveaus. Het volledige lijstje staat in het helpmenu van VoiceOver.

## Zo loop je een pagina door

### 1. Luister naar de paginatitel

Laad de pagina en luister naar wat VoiceOver als eerste zegt. Beschrijft de titel deze pagina, of hoor je op elke pagina hetzelfde? Staat de naam van de pagina vooraan, vóór de naam van de site? Dat scheelt een dagelijkse gebruiker seconden per tabblad.

### 2. Vraag de koppen op

<kbd>VO</kbd> + <kbd>U</kbd>, koppenlijst. Lees hem van boven naar beneden en stel jezelf één vraag: begrijp ik hieruit waar deze pagina over gaat en wat erop staat? Let op één h1, op overgeslagen niveaus en op koppen die alleen visueel een kop zijn.

Wil je hetzelfde zien in plaats van horen, dan legt de [WCAG Radar van Proper Access](/tools/wcag-radar/) de koppenstructuur als blokjes over je pagina heen. Hoe je die structuur controleert, staat in [zo controleer je de koppenstructuur van je website](/blog/zo-controleer-je-de-koppenstructuur-van-je-website/).

### 3. Vraag de links op

Wissel in de rotor naar de linklijst. Nu staat elke linktekst los van zijn omgeving, zonder de zin eromheen en zonder de afbeelding ernaast. Kun je van elke regel zeggen waar hij heen gaat? Losse URL's, "hier" en twaalf keer "Lees meer" vallen hier meteen op.

### 4. Doe het formulier

Ga met <kbd>Tab</kbd> door je formulier en luister per veld. Je hoort het label, de soort van het veld en of het verplicht is. Hoor je alleen "invoerveld", dan hangt het label er niet aan vast.

Verstuur daarna expres een leeg formulier. Zegt VoiceOver iets? Stilte na het verzenden is een van de dingen die ik in onderzoeken het vaakst tegenkom: de foutmelding staat wel op het scherm, maar de schermlezer meldt hem niet en de focus gaat er niet heen.

### 5. Open de componenten

Menu's, dialoogvensters, tabs, accordeons, filters. Luister naar de toestand: hoor je "uitgeklapt" of "geselecteerd" als dat zo is? Gaat de focus het dialoogvenster in, blijft hij erin, en sluit <kbd>Escape</kbd> het venster? Voor de focus zelf is er een aparte test, die staat in [hoe test ik focusvolgorde](/blog/hoe-test-ik-focusvolgorde/).

## Wat je hoort als er iets mis is

![](/images/blog/voiceover-zien-en-horen.webp)

| Wat je hoort | Wat er waarschijnlijk aan de hand is |
| --- | --- |
| "afbeelding" plus een bestandsnaam als DSC_0421 | De afbeelding heeft geen alt-tekst en VoiceOver valt terug op de bestandsnaam |
| Alleen "knop", zonder naam | Een knop zonder toegankelijke naam, meestal een icoonknop |
| "link" bij iets dat een actie uitvoert | Een a-element op een plek waar een button hoort |
| Tekst zonder "kop niveau" ervoor | De kop is alleen visueel opgemaakt, met een grotere letter |
| "groep" bij iets waarop je kunt klikken | Een div met een klikafhandeling, zonder rol en zonder toetsenbordbediening |
| Stilte bij een foutmelding of statusbericht | De melding staat niet in een live region en krijgt geen focus |
| Een menuknop die niets zegt over open of dicht | `aria-expanded` ontbreekt of wordt niet bijgewerkt |

Een schermlezer geeft je een signaal en geen oordeel. Controleer in de code wat je hoort voordat je het opschrijft als bevinding. Soms ligt het aan de pagina, soms aan de combinatie van browser en schermlezer, en dat verschil hoor je niet.

## Wat een VoiceOver-test niet is

**Het is geen simulatie van blind zijn.** Laat je scherm aan tijdens het testen. Je zoekt juist het verschil tussen wat je ziet en wat je hoort, en dat verschil is het probleem. Ogen dicht doen geeft bovendien een vertekend beeld van hoe moeilijk iets is: een dagelijkse gebruiker kent zijn schermlezer, draait hem op een snelheid die jij niet kunt volgen en gebruikt sneltoetsen die jij niet kent.

**Het dekt niet alles.** Contrast, zoom tot 400%, zichtbare focus, bediening met alleen het toetsenbord en begrijpelijke taal zijn allemaal aparte tests.

**Eén schermlezer is één combinatie.** VoiceOver met Safari geeft andere uitkomsten dan NVDA met Firefox. Werkt iets in VoiceOver, dan werkt het niet automatisch overal. Voor Windows staat er een [apart artikel over NVDA](/blog/testen-met-nvda-op-windows/).

## Veelgestelde vragen over VoiceOver

### Moet ik VoiceOver installeren op mijn Mac?

Nee. VoiceOver zit in macOS zelf. <kbd>Command</kbd> + <kbd>F5</kbd> zet hem aan en uit, en op een Mac met Touch ID werkt drie keer snel op de Touch ID-knop drukken ook.

### Welke browser gebruik ik bij VoiceOver?

Safari. Chrome en Firefox werken ook met VoiceOver en gedragen zich op onderdelen anders, dus een uitkomst in Safari zegt niets over die browsers.

### Wat is de VO-toets?

VO staat voor <kbd>Control</kbd> + <kbd>Option</kbd>. Bijna elk commando begint met die twee toetsen. Met <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>puntkomma</kbd> vergrendel je ze, zodat je ze niet steeds hoeft vast te houden.

### Kan ik met VoiceOver zelf een toegankelijkheidsonderzoek doen?

Je vindt er problemen mee die geen enkele geautomatiseerde scan vindt. Een volledig onderzoek is breder: contrast, zoom, focuszichtbaarheid en toetsenbordbediening toets je apart, en een onderzoek dat je in het Register wilt gebruiken moet volgens WCAG-EM zijn uitgevoerd.

### Hoe lang duurt het voordat ik VoiceOver kan bedienen?

Voor de commando's uit dit artikel heb je ongeveer een uur nodig. Vlot werken met de rotor kost een paar sessies. Je hoeft VoiceOver niet zo goed te kennen als een dagelijkse gebruiker om er problemen mee te vinden.

## Verder

Zet VoiceOver deze week één keer aan op je eigen homepage en vraag alleen de koppenlijst op. Dat is tien minuten werk en het levert bijna altijd iets op.

Twijfel je of iets wat je hoort een echt probleem is? Stuur je vraag naar info@properaccess.nl. En werk je op Windows, lees dan [testen met NVDA](/blog/testen-met-nvda-op-windows/).
