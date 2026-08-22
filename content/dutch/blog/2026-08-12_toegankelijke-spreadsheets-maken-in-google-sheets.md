---
title: "Toegankelijke spreadsheets maken in Google Sheets"
date: 2026-08-12
slug: "toegankelijke-spreadsheets-maken-in-google-sheets"
categories:
  - "webredactie"
  - "tips-en-tools"
tags:
  - "google sheets"
  - "spreadsheets"
  - "tabellen"
  - "excel"
  - "screenreader"
description: "Google Sheets kan geen semantische tabelkoppen. Dat is een echte beperking, maar er valt veel aan te doen. Een handleiding voor koppen, lege cellen, kleur, samengevoegde cellen en de export naar Excel."
keywords:
  - toegankelijke spreadsheet
  - google sheets toegankelijkheid
  - tabelkoppen screenreader
  - google sheets export excel
  - toegankelijke tabel maken
image: "/images/blog/sheets-koprij-niet-herkend.webp"
---

Je maakt een spreadsheet in Google Sheets. Kolommen netjes ingedeeld, kleurtjes erbij, filters aan. Overzichtelijk. Alleen niet voor iemand met een screenreader.

Google Sheets heeft één groot probleem: je kunt tabelkoppen niet semantisch aanwijzen. Een screenreader weet daardoor niet welke cel een kop is en welke een waarde. Dat gaat niemand vandaag voor je oplossen. Wat je wel kunt doen is de rest goed neerzetten en de beperking omzeilen op het moment dat het telt. Hieronder staat hoe.

## In het kort

- Je kunt in Google Sheets geen tabelkoppen aanwijzen. De gebruiker kan zelf instellen dat rij 1 en kolom A worden voorgelezen.
- Begin je tabel in cel A1, anders werkt die instelling niet.
- Voeg geen cellen samen en bevries zo min mogelijk.
- Markeer lege cellen die bewust leeg zijn.
- Deel je het bestand met iemand die een screenreader gebruikt, exporteer dan naar Excel en wijs daar echte koppen aan.

## Tabelkoppen: het grootste struikelblok

![](/images/blog/sheets-koprij-niet-herkend.webp)

Zonder koppen weet een screenreader niet wat een cel betekent. Je hoort "Amsterdam" en dan is de vraag of dat een stad is, een klantnaam of een vestiging. In een tabel van tweehonderd rijen ben je dat onderscheid binnen drie cellen kwijt.

### Wat de gebruiker zelf kan instellen

Iemand die een screenreader gebruikt kan koppen wel laten voorlezen. Dat gaat zo:

1. Ga naar **Extra > Toegankelijkheid**.
2. Vink **Ondersteuning voor schermlezers inschakelen** aan.
3. In de menubalk verschijnt een tabblad **Toegankelijkheid**.
4. Ga naar **Toegankelijkheid > Verbaliseren naar schermlezer**.
5. Kies **Rij 1 verbaliseren bij kolomwijzigingen**, **Kolom A verbaliseren bij rijwijzigingen**, of allebei.

Vanaf dat moment hoort de gebruiker bij het navigeren met de pijltjestoetsen de waarde uit rij 1 of kolom A als kop.

Let op wat hier gebeurt: de oplossing ligt bij de ontvanger, niet bij jou. Je kunt er niet van uitgaan dat iemand dit heeft aanstaan. Als het bestand echt gelezen moet worden, ga dan via Excel.

## Begin in cel A1

![](/images/blog/sheets-start-in-a1.webp)

In Excel is het gebruikelijk om de titel van de tabel in cel A1 te zetten en de tabel in rij 2 te laten beginnen. In Google Sheets doe je dat juist niet.

Alleen rij 1 en kolom A worden herkend door de functie Verbaliseren naar schermlezer. Staat je koprij op rij 2, dan leest de gebruiker de titel voor als kop bij elke kolom. Start je tabel dus direct in A1.

## Geef werkbladen een echte naam

Elk werkblad krijgt een unieke, duidelijke en korte naam. Zo weet een gebruiker wat erin staat zonder eerst door de cellen te navigeren. Klik op het pijltje naast de werkbladnaam en kies **Naam wijzigen**.

Werkt goed: "Omzet Q1 2025" of "Klantenoverzicht". Werkt niet: "Blad1" of "Data".

## Koppen benoemen

Ook al kun je koppen niet semantisch markeren, de tekst zelf moet kloppen. Gebruik "Voornaam", "Achternaam" en "E-mailadres", niet "Kolom 1" of "Veld A".

Twee regels voor de opbouw:

- Je tabel heeft hoogstens één koprij, hoogstens één kopkolom, of één van elk.
- Gebruik geen koppen over meerdere lagen en geen gesplitste koppen.

## Markeer lege cellen

Navigeert iemand met een screenreader naar een lege cel, dan hoort die persoon niets. Is de cel bewust leeg? Is de data niet ingevuld? Hapert er iets? Dat verschil is niet te horen.

Zet er daarom iets in wat de bedoeling duidelijk maakt: "Geen data", "Niet van toepassing" of een streepje. Kies één variant en houd die vol in het hele bestand.

## Cellen samenvoegen: niet doen

![](/images/blog/sheets-samengevoegde-cellen.webp)

Samengevoegde cellen via **Opmaak > Cellen samenvoegen** verstoren de navigatie. De screenreader kondigt de positie van cellen verkeerd aan en de gebruiker raakt de tel kwijt over welke kolom hij leest.

Wil je visueel lucht in je tabel, gebruik dan bredere kolommen of een lege rij tussen blokken. Cellen splitsen met een diagonale lijn is geen standaardfunctie in Google Sheets. Er circuleren workarounds. Gebruik die ook niet.

## Kleur en contrast

Heb je rijen groen gemarkeerd voor goedgekeurd en rood voor afgekeurd? Voor wie kleurenblind is of een screenreader gebruikt bestaat dat onderscheid niet. Zet de status ook als tekst in een aparte kolom.

Voor de rijkleuren via **Opmaak > Afwisselende kleuren** geldt: alle standaardstijlen halen de contrasteis, maar er zit verschil in. Donkerroze met zwarte tekst komt uit op 4,8:1, dus net genoeg. Geel met zwarte tekst leest een stuk makkelijker. In hetzelfde menu maak je een eigen stijl met sterker contrast.

Meten doe je met de Colour Contrast Analyser van TPGi of de online contrastchecker van Deque. Publiceer je het blad als webpagina, dan meet je de kleuren daar met de pipetten in onze [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar).

## Voorwaardelijke opmaak

Voorwaardelijke opmaak via **Opmaak > Voorwaardelijke opmaak** kleurt cellen op basis van hun waarde. Handig om te zien, onzichtbaar om te horen.

Gebruik je het, zorg dan dat dezelfde informatie ook zonder kleur beschikbaar is. Een extra kolom met de status werkt. Een tweede tabblad met alleen de rijen die aan de voorwaarde voldoen werkt ook.

## Bevriezen en verbergen

Rijen of kolommen bevriezen via **Beeld > Blokkeren** levert navigatieproblemen op. Bevries je de bovenste rij, dan komt de sneltoets Home uit op A2 in plaats van A1. Wie op de vertrouwde plek verwacht uit te komen, staat een rij te laag.

Verbergen is een tweede. Verborgen rijen en kolommen leveren bij vrijwel iedereen frustratie op, met of zonder hulpsoftware, omdat ze lastig terug te halen zijn. Laat ze staan of haal ze weg.

## Afbeeldingen

Afbeeldingen komen weinig voor in spreadsheets. Gebruik je ze, zet ze dan in een cel via **Invoegen > Afbeelding > Afbeelding invoegen in cel**.

Alt-tekst voeg je toe met de rechtermuisknop op de cel, of met Shift+F10. Kies **Afbeelding** en dan **Alt-tekst toevoegen aan cel**, en vul het beschrijvingsveld in.

Gebruik niet de optie "Afbeelding invoegen boven cellen". De afbeelding zweeft dan op een laag boven het raster en zit voor een screenreadergebruiker nergens vast.

## Links

1. Plak of typ een URL in een cel.
2. Verlaat de cel. De link wordt automatisch blauw en klikbaar.
3. Klik met de rechtermuisknop en kies **Link bewerken**.
4. Vul bij **Tekst** een beschrijvende linktekst in, bijvoorbeeld "Handleiding tabellen van Deque".

Anders dan in Google Docs hoef je hier niet op Enter te drukken. Het omzetten gebeurt zodra je de cel verlaat.

## Symbolen, emoji en formules

Speciale tekens kun je in Google Sheets niet rechtstreeks invoegen. Er zijn omwegen via kopiëren en plakken. Doe het liever niet, want symbolen worden niet betrouwbaar voorgelezen.

Emoji hebben een ingebouwde naam en komen er meestal goed uit. Ook die plak je vanuit een ander programma. Houd het beperkt.

Wiskundige vergelijkingen horen niet thuis in Sheets. Er is geen editor voor zoals in Word. Gebruik daarvoor Word of MathType.

Gewone functies via **Invoegen > Functie** zijn geen probleem. In de cel staat het resultaat, en dat resultaat wordt gewoon voorgelezen. Een SOM van 2 en 4 levert de waarde 6 op, en dat is wat de gebruiker hoort.

## Filters en opmerkingen

Gegevensfilters via **Gegevens > Filterweergaven** worden in Google Sheets wel aangekondigd door screenreaders. In Excel is dat niet zo. Je kunt ze hier dus gebruiken zonder de gebruiker apart te waarschuwen.

Opmerkingen worden ook automatisch aangekondigd. Selecteer de cel, klik met de rechtermuisknop en kies **Opmerking**.

## Exporteren naar Excel

![](/images/blog/sheets-export-excel.webp)

Dit is de stap die de belangrijkste beperking oplost. In Excel kun je wel echte koppen aanwijzen.

1. Ga naar **Bestand > Downloaden > Microsoft Excel**.
2. Open het bestand in Excel.
3. Heb je in Sheets **Afwisselende kleuren** gebruikt met het selectievakje **Koptekst** aangevinkt, dan herkent Excel de tabel en zet er koppen op. Dat vakje staat standaard aan.
4. Controleer op het tabblad **Tabelontwerp** of **Veldnamenrij** en **Eerste kolom** goed staan.
5. Schuif de tabel één rij naar beneden en zet de titel in cel A1. In Excel is dat wel de juiste plek.
6. Draai de controle via **Controleren > Toegankelijkheid controleren**.

Die laatste stap kost een halve minuut en vindt de dingen die je zelf over het hoofd ziet, zoals een afbeelding zonder alt-tekst of een werkblad dat nog Blad1 heet.

## Checklist voor je de spreadsheet deelt

- De tabel begint in cel A1.
- De koppen in rij 1 en kolom A zijn beschrijvend.
- Elk werkblad heeft een eigen, duidelijke naam.
- Bewust lege cellen zijn gemarkeerd.
- Er zijn geen samengevoegde cellen.
- Kleur is nergens de enige drager van informatie.
- Het contrast van tekst en achtergrond haalt minimaal 4,5:1.
- Afbeeldingen staan in een cel en hebben alt-tekst.
- Linkteksten beschrijven de bestemming.
- Er is niet onnodig bevroren of verborgen.
- Voor screenreadergebruikers: geëxporteerd naar Excel met echte koppen.

## Tot slot

Google Sheets is niet het beste gereedschap als je spreadsheet gelezen moet worden met een screenreader. Dat is een beperking van het product, niet van jou. Maar het scheelt veel als je de tabel simpel houdt, in A1 begint, geen cellen samenvoegt en de status ook in tekst zet.

Moet het bestand echt bruikbaar zijn voor iemand met een screenreader, dan is de export naar Excel de stap die het verschil maakt. Tien van de elf punten in de checklist hierboven regel je in Sheets zelf. Alleen de koppen regel je in Excel.

Zit je met een bestand of een werkwijze waar je niet uitkomt? [Neem contact op](/contact/), dan kijken we mee.
