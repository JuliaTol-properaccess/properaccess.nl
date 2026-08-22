---
title: "Toegankelijke content schrijven in Google Docs"
date: 2026-08-11
slug: "toegankelijke-content-schrijven-in-google-docs"
categories:
  - "webredactie"
  - "tips-en-tools"
tags:
  - "google docs"
  - "documenten"
  - "alt-tekst"
  - "koppen"
  - "pdf"
description: "Google Docs heeft bijna alles wat je nodig hebt voor een toegankelijk document. Je moet alleen weten waar het zit. Een handleiding voor koppen, alt-tekst, links, tabellen en de route naar een toegankelijke pdf."
keywords:
  - toegankelijk google docs
  - google docs alt-tekst
  - koppen google docs
  - toegankelijk document maken
  - google docs pdf toegankelijk
image: "/images/blog/docs-koppen-vs-dikgedrukt.webp"
---

Je schrijft een document in Google Docs. De opmaak klopt, je collega's kunnen het lezen. Maar kan iemand met een screenreader er ook doorheen navigeren?

Toegankelijke documenten beginnen bij hoe je je content opbouwt, niet bij een dure tool. Google Docs biedt bijna alles wat je daarvoor nodig hebt. Het zit alleen verspreid over menu's die je zelden opent. Hieronder loop ik alles langs: koppen, afbeeldingen, links, kleur, tabellen en de export.

## In het kort

- Koppen zijn het belangrijkste onderdeel. Grote dikgedrukte tekst is geen kop.
- Alt-tekst zet je in het veld **Beschrijving**, nooit in **Titel**.
- Linktekst beschrijft de bestemming. "Klik hier" zegt niets in een linklijst.
- Tabellen in Google Docs kun je niet semantisch van koppen voorzien. Dat is de grootste beperking.
- Exporteer nooit rechtstreeks naar pdf. Die pdf heeft geen tags en is daarmee niet toegankelijk.

## Koppen: de ruggengraat van je document

Een screenreader gebruikt koppen om door een document te springen, zoals jij een inhoudsopgave gebruikt. Zonder echte koppen is een lang document een boek zonder hoofdstukken.

![](/images/blog/docs-koppen-vs-dikgedrukt.webp)

### Zo maak je een kop

1. Klik in de menubalk op het dropdown-menu waar **Normale tekst** staat.
2. Kies **Kop 1**, **Kop 2** of **Kop 3**.

Sneller gaat het met Ctrl+Alt+1 tot en met 6 op Windows, of Cmd+Option+1 tot en met 6 op de Mac. Je ziet standaard drie niveaus in het menu. Er zijn er zes. De rest vind je via **Opmaak > Alineastijlen**.

### Welk niveau gebruik je wanneer

- **Kop 1** is de titel van je document. Die gebruik je één keer, bovenaan.
- **Kop 2** zijn de hoofdsecties.
- **Kop 3** zijn subsecties binnen een hoofdsectie.
- **Kop 4 tot en met 6** gebruik je alleen als je verder onderverdeelt.

De volgorde telt. Spring niet van Kop 2 naar Kop 4. Een screenreadergebruiker hoort dan dat er een niveau ontbreekt en gaat zoeken naar iets wat er niet is.

### Controleer je koppenstructuur

Klik op het **Overzicht-icoon** in het linkerpaneel, het icoon met de drie horizontale lijntjes. Daar staan al je koppen onder elkaar. Verschijnt een regel daar niet, dan is het geen kop maar grote vette tekst. Visueel is dat hetzelfde. Voor een screenreader is het het verschil tussen structuur en losse letters.

Dit is de controle die ik zelf als eerste doe bij een document. Het kost vijf seconden en het vangt de meeste problemen.

### Kop-stijl aanpassen

Wil je lettertype, grootte of kleur van je koppen veranderen? Pas één kop aan in je document, klik er met de rechtermuisknop op, kies **Opmaakopties** en dan **Kop bijwerken zodat deze overeenkomt**. Alle koppen van dat niveau volgen.

### Inhoudsopgave toevoegen

Een inhoudsopgave bouwt Google Docs op uit je koppenstructuur. Ga naar **Invoegen > Inhoudsopgave**, helemaal onderaan het menu, en kies een stijl. Klikken in de inhoudsopgave brengt je direct naar de sectie.

## Afbeeldingen: alt-tekst is niet optioneel

Een afbeelding zonder alt-tekst wordt overgeslagen of voorgelezen als bestandsnaam. "IMG_20250115_143022.jpg" helpt niemand.

![](/images/blog/docs-alt-tekst-veld.webp)

### Alt-tekst toevoegen

1. Klik met de rechtermuisknop op de afbeelding.
2. Kies **Alt-tekst**.
3. Vul het veld **Beschrijving** in.

Gebruik alleen dat beschrijvingsveld. Het veld **Titel** wordt door screenreaders niet betrouwbaar voorgelezen, en bij een export naar Word blijft alleen de beschrijving over.

### Wat schrijf je erin

De alt-tekst beschrijft het doel van de afbeelding. Vraag jezelf af waarom de afbeelding er staat en wat de lezer eruit moet halen.

Stel, je toont een voorbeeld van een correcte dresscode.

- Te weinig: "Lachende man". Klopt, maar het punt van de afbeelding is weg.
- Goed: "Man in kaki broek, donkerblauw overhemd ingestopt, bruine riem en witte sneakers, voorbeeld van een correcte dresscode".

Houd 150 tekens aan als bovengrens.

### Complexe afbeeldingen

Past de informatie niet in een korte zin, zoals bij een infographic, een grafiek of een stroomdiagram? Zet de uitgebreide beschrijving dan als gewone tekst direct boven of onder de afbeelding. Iedereen heeft daar iets aan, ook de lezer die de grafiek wel ziet maar niet meteen doorziet.

### Decoratieve afbeeldingen

Voegt de afbeelding geen informatie toe? Typ dan het woord **Decoratief** in het beschrijvingsveld. Google Docs kent geen aparte schakelaar om een afbeelding als decoratief te markeren.

### Afbeeldingspositie

Laat afbeeldingen staan op **In tekstregel**. Dat is de standaard. Je controleert het via de rechtermuisknop op de afbeelding, dan **Afbeeldingsopties > Tekstterugloop**, en daar de eerste optie **In tekstregel**. Zwevende afbeeldingen komen in de voorleesvolgorde op een onvoorspelbare plek terecht.

## Links: maak ze betekenisvol

Screenreadergebruikers vragen vaak een lijst op van alle links in een document en gaan daaruit kiezen. In zo'n lijst staat geen omringende tekst. "Klik hier, klik hier, klik hier" is dan alles wat er is.

![](/images/blog/docs-linktekst.webp)

### Een toegankelijke link maken

1. Typ of plak een URL en druk op **Enter**. De link wordt blauw en klikbaar.
2. Klik met de rechtermuisknop op de link.
3. Kies **Link bewerken**.
4. Vul bij **Tekst** een beschrijvende linktekst in, bijvoorbeeld "Bekijk het assortiment smartphones".
5. Klik op **Toepassen**.

Blijft de tekst zwart en niet klikbaar, dan heb je geen link maar een stuk tekst dat op een link lijkt. Druk na het plakken altijd op Enter.

### Goede en slechte linktekst

Werkt goed:

- "Download de handleiding toegankelijkheid, pdf"
- "Lees het volledige onderzoeksrapport"

Werkt niet:

- "Klik hier", want de bestemming ontbreekt.
- "https://www.example.com/docs/report-2025-v3-final.pdf", want een voorgelezen URL is voor niemand te volgen.

Zet er geen "link naar" voor. Screenreaders melden zelf al dat het om een link gaat, dus dat hoor je dan twee keer.

## Kleur en contrast

### Kleur mag nooit de enige aanwijzing zijn

Stel, je markeert de bijna verlopen abonnementen in je lijst geel. Wie kleurenblind is of een screenreader gebruikt, ziet en hoort die markering niet.

Zet er een tweede aanwijzing bij die niets met kleur te maken heeft. Een extra kolom met "verloopt binnenkort" bijvoorbeeld, of een woord achter de regel. De kleur mag blijven, hij is alleen niet langer de drager van de informatie.

### Contrast controleren

Tekst moet genoeg contrast hebben met de achtergrond. WCAG vraagt 4,5:1 voor gewone tekst en 3:1 voor grote tekst. Twee gratis tools waarmee je dat meet:

- Colour Contrast Analyser van TPGi, een desktopprogramma voor Windows en macOS.
- De online contrastchecker van Deque.

In audits zie ik het vaakst misgaan bij lichtgrijze tekst op wit. Dat oogt rustig en haalt zelden 4,5:1.

## Lettertype, uitlijning en opmaak

Kies een rustig, goed leesbaar lettertype. Tahoma, Verdana, Garamond en Cambria werken. Decoratieve letters met dunne schreven of sterke contrastverschillen niet.

Lijn je tekst links uit en vul niet uit. Bij uitgevulde tekst ontstaan er witte rivieren tussen de woorden, en die maken het lezen zwaarder voor mensen met dyslexie.

Vet, cursief, onderstreping en markeerkleur zijn visuele stijlen. Een screenreader meldt ze meestal niet. Draagt de opmaak betekenis, zet die betekenis dan ook in woorden.

Verder helpt het om ruime regelafstand te gebruiken en alinea's kort te houden.

## Symbolen en emoji

Typografische symbolen via **Invoegen > Speciale tekens** worden niet altijd goed voorgelezen. Je kunt er in Google Docs geen alt-tekst aan hangen. De enige oplossing is een woord ernaast zetten, bijvoorbeeld een muzieknoot gevolgd door het woord muzieknoot.

Emoji hebben wel een ingebouwde naam en komen er meestal goed uit. Je vindt ze via **Invoegen > Emoji**. Houd het beperkt. Een reeks van vijf emoji achter elkaar levert vijf voorgelezen beschrijvingen op.

## Wiskundige formules

De vergelijkingsfunctie via **Invoegen > Vergelijking** is niet volledig toegankelijk. Losse tekens als plus, min, wortel en cijfers komen er meestal doorheen. Bij breuken, machten en matrices gaat het mis.

NVDA leest deze formules alleen voor als de gebruiker een plugin installeert, MathCAT of Access8Math. Dat kun je van je lezer niet verwachten.

Voor alles wat verder gaat dan een som is de vergelijkingseditor van Microsoft Word beter ondersteund. MathType is de andere route.

## Tabellen: de zwakke plek van Google Docs

Hier houdt het op. Je maakt een tabel via **Invoegen > Tabel**, maar je kunt nergens aanwijzen welke rij of kolom de koppen bevat. Een screenreader weet dus niet welke cel een kop is en welke een waarde. De gebruiker hoort "1.240" zonder te weten of dat een omzet, een aantal of een postcode is.

Er bestaat een optie onder **Toegankelijkheid > Verbaliseren naar schermlezer**, maar die werkt onbetrouwbaar.

Wat je wel kunt doen:

- Houd tabellen simpel. Eén koprij, geen samengevoegde cellen, geen tabel in een tabel.
- Moet de tabel echt gelezen worden door iemand met een screenreader, maak hem dan in Word of Excel en wijs daar echte koppen aan.

## Kop- en voettekst

Je voegt ze toe via **Invoegen > Kop- en voetteksten**. Zet er geen informatie in die alleen daar staat. Screenreaders behandelen deze secties anders dan de hoofdtekst en slaan ze soms over. Alles wat de lezer moet weten, hoort ook in de lopende tekst te staan.

## Opmerkingen

Opmerkingen zijn wel gewoon toegankelijk. Een screenreader meldt dat er een opmerking staat, en de gebruiker kan hem lezen, beantwoorden en zelf een nieuwe plaatsen. Selecteer de tekst, klik met de rechtermuisknop en kies **Opmerking**.

## Exporteren naar Word en pdf

![](/images/blog/docs-pdf-route.webp)

### Naar Word

Ga naar **Bestand > Downloaden > Microsoft Word**. Heb je je document goed opgebouwd, dan gaan echte koppen, linkteksten en alt-teksten gewoon mee.

### Naar pdf

Ga niet naar **Bestand > Downloaden > pdf-document**. Google Docs levert daar een pdf zonder tags. Tags vertellen een screenreader wat elk element is: een kop, een alinea, een afbeelding. Zonder tags is de pdf een verzameling losse tekstblokken.

De werkende route loopt via Word:

1. Download je document als Word-bestand.
2. Open het in Microsoft Word.
3. Exporteer vanuit Word naar pdf.

Je krijgt dan een pdf met basistagging. Reken erop dat je daarna nog handmatig moet corrigeren, zeker bij tabellen en bij afbeeldingen die tekst bevatten.

Heb je geen Word, of heb je al een stapel pdf's zonder tags liggen? [pdf-toegankelijk.nl](https://pdf-toegankelijk.nl) zet de tagstructuur er alsnog in, samen met de titel en de taal, en laat de pagina's zoals ze zijn. Je krijgt er een verslag bij van wat er is opgelost en wat handwerk blijft. De tool is van ons en nu in besloten test.

## Checklist voor je het document deelt

Loop deze punten langs:

- Koppen zijn echte koppen en staan in het Overzicht-paneel.
- De kopniveaus lopen op zonder een niveau over te slaan.
- Elke betekenisvolle afbeelding heeft alt-tekst in het beschrijvingsveld.
- Decoratieve afbeeldingen hebben het woord Decoratief als alt-tekst.
- Afbeeldingen staan op In tekstregel.
- Linkteksten beschrijven de bestemming.
- Kleur is nergens de enige drager van informatie.
- Het contrast van de tekst haalt minimaal 4,5:1.
- Het lettertype is rustig en goed leesbaar.
- Tabellen zijn simpel, of gemaakt in Word of Excel.
- Er staat geen essentiële informatie alleen in de kop- of voettekst.
- Een pdf maak je via Word, niet rechtstreeks vanuit Google Docs.

## Tot slot

De stappen hierboven kosten samen een paar minuten per document, zolang je ze meteen doet. Achteraf een document van dertig pagina's van koppen voorzien kost een uur.

Voor iemand met een screenreader zit het verschil tussen een document met echte koppen en een document met dikgedrukte regels in één vraag: kan ik dit zelf lezen, of moet ik iemand vragen het voor te lezen.

Wil je meedenken over de documenten die jouw organisatie de deur uit doet? [Neem contact op](/contact/). We kijken graag mee naar je werkwijze.
