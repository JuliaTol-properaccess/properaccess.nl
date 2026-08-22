---
title: "1.3.2 - Wat betekent “Betekenisvolle volgorde”?"
translationKey: "sc-1-3-2"
date: 2025-05-17
categories:
  - "wcag-uitgelegd"
description: "WCAG 1.3.2 vraagt dat je pagina in een logische volgorde wordt voorgelezen. Lees hoe je als webredacteur de leesvolgorde controleert met de WCAG Radar."
keywords:
  - WCAG 1.3.2
  - betekenisvolle volgorde
  - leesvolgorde controleren
  - leesvolgorde schermlezer
  - volgorde nieuwsoverzicht
  - datum boven de kop
  - opmaak uitzetten
tags:
  - "1-3-2"
  - "Structuur"
aliases:
  - /sc-1-3-2-wat-betekent-betekenisvolle-volgorde/
---

Jij ziet een pagina in één oogopslag: de kop staat groot bovenaan, de datum eronder in het klein, de foto ernaast. Je hersenen leggen die verbanden vanzelf. Iemand die een schermlezer gebruikt, krijgt de pagina niet in één oogopslag, maar als één lange reeks: item na item, van boven naar beneden. En die reeks komt uit de code, niet uit de vormgeving.

Staat de datum in de code boven de kop, dan hoort de bezoeker eerst "17 mei 2025" en pas daarna waar dat bij hoort. Dat is waar dit criterium over gaat.

Dit heet **1.3.2 Meaningful Sequence**, in het Nederlands "Betekenisvolle volgorde".

## Wat zegt het criterium?

[WCAG-succescriterium 1.3.2](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence) vraagt dat de volgorde waarin de inhoud wordt voorgelezen, klopt met de betekenis van je verhaal.

In begrijpelijke taal: als de volgorde uitmaakt voor het begrip, moet die volgorde ook in de code kloppen. Wat bij elkaar hoort, staat bij elkaar. En wat eerst gelezen moet worden, staat eerst.

Let op het woord "als". Niet alles hoeft in dezelfde volgorde te staan als op het scherm. Of het menu links of rechts van de tekst staat, verandert niets aan de betekenis. Maar bij een nieuwsbericht maakt het wel uit of de datum boven of onder de kop komt.

## Wat heeft dit met jouw werk te maken?

Veel redacteuren denken: dit is iets voor de webbouwer. Voor een deel klopt dat. De volgorde van de vaste onderdelen van een sjabloon regelt je webbouwer.

Maar binnen je eigen tekst bepaal jij de volgorde. En bij overzichtspagina's bepaal jij vaak, zonder het te weten, of er een informatieve afbeelding boven de kop komt te staan. Dat is precies de fout die wij bij audits het vaakst zien bij dit criterium.

## Wat kun jij zelf doen?

### Zet bij elkaar wat bij elkaar hoort

Schrijf je een blok tekst met een tussenkop? Zorg dat alles wat bij die kop hoort, er ook onder staat. Een introzin die boven de kop hangt, komt bij een schermlezer los te staan van het onderwerp.

### Wees voorzichtig met tekst in kolommen

Zet je in het CMS twee kolommen naast elkaar, dan worden die vrijwel altijd na elkaar voorgelezen: eerst de hele linkerkolom, dan de hele rechterkolom. Loopt je verhaal van links naar rechts door, bijvoorbeeld een vraag links en het antwoord rechts, dan valt het uit elkaar. Zet vraag en antwoord dan onder elkaar in dezelfde kolom.

### Let op de uitgelichte afbeelding in overzichten

Dit is de klassieker. In een nieuws- of blogoverzicht staat de uitgelichte afbeelding meestal bóven de kop. Heeft die afbeelding een alt-tekst, dan hoort de bezoeker eerst een beschrijving van een plaatje en pas daarna bij welk bericht dat hoort.

De oplossing is verrassend simpel: geef de uitgelichte afbeelding een leeg alt-attribuut. De afbeelding is decoratief, want de kop en de samenvatting vertellen het verhaal al. Met een leeg alt-attribuut slaat de schermlezer hem over en begint het item netjes bij de kop.

Let op als je in WordPress met Yoast SEO werkt. Yoast raadt aan om je zoekterm in de alt-tekst te zetten. Doe dat niet bij de uitgelichte afbeelding. In WordPress stel je de alt-tekst in de mediabibliotheek in, en die geldt dan overal waar de afbeelding wordt getoond, dus ook in het overzicht. Je wint dan een groen bolletje bij Yoast en verliest een logische leesvolgorde.

### Gebruik echte tabellen voor gegevens

Zet je openingstijden of tarieven neer als losse regels, of als een raster van tekstvakken, dan raakt het verband tussen dag en tijd kwijt. De bezoeker hoort dan eerst alle dagen achter elkaar en daarna alle tijden. Gebruik de tabelknop van je editor en wijs de kopcellen aan.

## Wat je aan je webbouwer doorgeeft

Deze dingen kun je niet zelf oplossen, maar wel signaleren:

- **Uitklapbare tekst die op de verkeerde plek verschijnt.** Klap je een blok open en verschijnt de tekst voor de schermlezer helemaal onderaan de pagina, dan staat de tekst op de verkeerde plek in de code.
- **Een pop-up of lightbox waarbij de schermlezer gewoon de pagina eronder blijft voorlezen.** Dat is ook een fout bij [2.4.3 Focusvolgorde](/blog/sc-2-4-3-wat-betekent-focusvolgorde/).
- **Tabbladen waarbij eerst alle tabtitels worden voorgelezen en pas daarna de inhoud van het geopende tabblad.**
- **Verborgen tekst die toch wordt voorgelezen**, bijvoorbeeld het mobiele menu op een breed scherm.

## Controleer de leesvolgorde met WCAG Radar

Je hoeft hiervoor geen schermlezer te leren bedienen. Met onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) zie je de leesvolgorde in één klik. Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan.

### Stap 1: zet de opmaak uit

Open het tabblad **Redactie** en klik op **Opmaak uit (leesvolgorde)**. De radar schakelt alle stijlen uit. Wat je overhoudt, is de kale volgorde waarin de inhoud in de code staat, en dat is precies de volgorde die een schermlezer volgt.

Klik nog een keer om de opmaak terug te zetten.

### Stap 2: lees van boven naar beneden

Lees de kale pagina nu gewoon van boven naar beneden en stel jezelf drie vragen:

1. Loopt het verhaal nog? Of moet je terugspringen om te snappen waar iets bij hoort?
2. Staat er informatie boven een kop die er eigenlijk onder hoort, zoals datums, labels en afbeeldingen in een overzicht?
3. Vallen kolommen uit elkaar? Twee kolommen worden na elkaar getoond. Klopt je verhaal dan nog?

Alles wat je in deze kale weergave niet meer kunt volgen, kan een bezoeker met een schermlezer ook niet volgen.

### Stap 3: check de afbeeldingen in overzichten

Zet de opmaak weer aan en klik op **Afbeeldingen en alt-tekst**. Op een overzichtspagina zie je meteen welke uitgelichte afbeeldingen een alt-tekst hebben. Staat die afbeelding boven de kop en heeft hij een alt-tekst? Dan hoort de bezoeker die tekst voordat hij weet om welk bericht het gaat. Maak het alt-attribuut leeg.

### Stap 4: controleer koppen en tabellen

Twee checks die de leesvolgorde ondersteunen:

- **Koppen en structuur** laat zien of je koppen op de juiste plek en het juiste niveau staan. Een kop is voor een schermlezergebruiker het startpunt van een blok, dus alles wat erbij hoort, moet erna komen.
- **Tabellen** markeert tabellen zonder kopcellen. Zonder kopcellen valt het verband tussen rij en kolom weg.

De radar vervangt geen volledige audit, maar hij haalt de meest voorkomende fouten eruit voordat je publiceert. Wil je een complete check door een specialist? Bekijk dan onze [contentaudit](/contentaudit/) of [toegankelijkheidsaudit](/toegankelijkheidsaudit/).

## Veelgemaakte fouten

- **Een informatieve afbeelding of datum boven de kop** in een nieuws- of blogoverzicht.
- **Alt-teksten op uitgelichte afbeeldingen**, waardoor elk item in een overzicht begint met een beschrijving van een plaatje.
- **Tekst in kolommen** die visueel van links naar rechts loopt, maar in de code kolom na kolom staat.
- **Tabellen nagebouwd met losse tekstvakken**, waardoor dagen en tijden los van elkaar worden voorgelezen.
- **Een introzin boven de tussenkop** in plaats van eronder.
- **Tekst in een pdf** waarvan de tags in een andere volgorde staan dan wat je op papier ziet. Dit gaat vaak mis bij voetnoten en bij tekst in kolommen.

## Veelgestelde vragen

### Moet de volgorde in de code altijd gelijk zijn aan wat ik op het scherm zie?

Nee, alleen als de volgorde uitmaakt voor de betekenis. Of het menu boven of naast de tekst staat, maakt niet uit. Of de datum boven of onder de kop van een bericht staat, maakt wel uit.

### Mag ik nooit een alt-tekst op een uitgelichte afbeelding zetten?

Op de pagina van het bericht zelf mag het prima, want daar staat de afbeelding meestal onder de kop. Het probleem ontstaat in het overzicht, waar dezelfde afbeelding boven de kop komt. Kun je dat in je CMS niet per plek regelen? Kies dan voor een leeg alt-attribuut, want een logische leesvolgorde weegt zwaarder.

### Hoe zie ik de leesvolgorde zonder een schermlezer te installeren?

Klik de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) aan en kies **Opmaak uit (leesvolgorde)** in het tabblad Redactie. Je ziet dan dezelfde volgorde als een schermlezer volgt.

### Geldt dit ook voor pdf's?

Ja. Ook in een pdf moet de volgorde van de tags kloppen met wat je ziet. Maak je documenten in Word en exporteer je die naar pdf? Gebruik dan de ingebouwde koppenstijlen en zet tekst niet in tekstvakken, want die belanden vaak achteraan in de leesvolgorde.

## Samenvatting

WCAG-succescriterium 1.3.2 vraagt dat je pagina wordt voorgelezen in een volgorde die klopt met je verhaal.

De belangrijkste punten:

- Zet alles wat bij een kop hoort, ook onder die kop.
- Geef uitgelichte afbeeldingen in overzichten een leeg alt-attribuut.
- Wees voorzichtig met kolommen: die worden na elkaar voorgelezen.
- Gebruik echte tabellen voor gegevens die bij elkaar horen.
- Controleer de leesvolgorde met **Opmaak uit** in de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar).

**Wil je dat je hele redactie toegankelijk leert schrijven en publiceren?** Bekijk dan onze [training voor webredacties](/trainen-van-webredactie/) of vraag [een contentaudit](/contentaudit/) aan.
