---
title: "SC 1.1.1 - Wat betekent “Niet-tekstuele content”"
date: 2026-02-15
categories:
  - "wcag-uitgelegd"
description: "WCAG 1.1.1 vraagt een tekstalternatief voor elke informatieve afbeelding, video en elk icoon. Lees hoe je als webredacteur goede alt-teksten schrijft en zelf controleert."
keywords:
  - WCAG 1.1.1
  - WCAG niet-tekstuele content
  - alt-tekst schrijven
  - alt-tekst controleren
  - tekstalternatief afbeeldingen
  - toegankelijke afbeeldingen
  - alt-tekst webredactie
  - alt-teksten productafbeeldingen
tags:
  - "1-1-1"
  - "Afbeeldingen"
aliases:
  - /sc-1-1-1-wat-betekent-niet-tekstuele-content/
---

Afbeeldingen, iconen en video's vertellen vaak een groot deel van het verhaal op een pagina. Mensen die blind of slechtziend zijn, gebruiken een schermlezer die alleen tekst kan voorlezen. Daarom zegt WCAG: **elke niet-tekstuele content heeft een tekstalternatief dat hetzelfde doel dient**.

Dit heet **1.1.1 Non-text Content**.

## Wat zegt het criterium?

[WCAG succescriterium 1.1.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) vraagt dat alle niet-tekstuele content die je aan bezoekers toont, een tekstalternatief heeft dat hetzelfde doel dient.

In begrijpelijke taal: elke informatieve afbeelding, video, audio en elk klikbaar icoon op jouw website moet een tekstuele beschrijving hebben. Zo begrijpen mensen die de visuele content niet kunnen waarnemen toch wat er op een afbeelding staat of wat een icoon doet.

Als webredacteur regel je dit via het alt-tekst-veld in je CMS. Bijna elk CMS toont dat veld bij het uploaden of invoegen van een afbeelding. Soms heet het "alternatieve tekst" of "beschrijving".

## Waarom is dit belangrijk?

De schermlezer leest de alt-tekst voor. Zonder die tekst:

- weten bezoekers niet wat er op een foto staat
- begrijpen ze niet wat een knop of icoon doet
- missen ze belangrijke informatie in infographics en diagrammen

Voor jou als redacteur betekent dit: bezoekers haken af, missen je boodschap of kunnen een taak niet afmaken.

## Welke content heeft een tekstalternatief nodig?

### Informatieve afbeeldingen

Foto's die informatie toevoegen: een productfoto, een foto bij een nieuwsbericht, een portret bij een interview.

- Slecht: het alt-veld is leeg of bevat "IMG_5472".
- Goed: "Nike Air Zoom hardloopschoenen in blauw, maat 42".

### Logo's

Het logo van je organisatie krijgt als alt-tekst de naam van de organisatie, bijvoorbeeld "Sportwinkel De Hardloper".

### Grafieken, diagrammen en infographics

De alt-tekst bevat de boodschap van de afbeelding, niet alleen het onderwerp. Bijvoorbeeld bij een maattabel als afbeelding: "Maattabel: maat S voor borstomvang 86 tot 90 centimeter, maat M voor 91 tot 95 centimeter". Nog beter: zet die informatie ook als gewone tekst of echte tabel op de pagina.

### Video en audio

Geef video's en audiofragmenten een beschrijvende titel of korte introductie, zodat bezoekers weten waar het over gaat voordat ze op afspelen klikken.

### Iconen en knoppen

Een zoek-icoon of winkelwagen-icoon heeft ook een tekstalternatief nodig. Dit zit meestal in de techniek van de website en regelt je webbouwer. Plaats je zelf een klikbaar icoon in je content? Geef het dan een alt-tekst die vertelt wat het doet, zoals "Zoeken", of zet er zichtbare tekst naast.

### Decoratieve afbeeldingen

Afbeeldingen die alleen voor sfeer of opmaak dienen, krijgen juist een **leeg alt-veld**. De schermlezer slaat ze dan over. Dat is precies de bedoeling: een sierlijn of achtergrondpatroon voegt niets toe aan het verhaal.

## Veelgemaakte fouten

- **Een leeg alt-veld bij een informatieve afbeelding.** De bezoeker weet niet wat er op de afbeelding staat.
- **De bestandsnaam als alt-tekst.** Sommige systemen vullen die automatisch in. Een schermlezer leest dan voor: "D S C underscore acht vier zeven twee underscore final". Daar heeft niemand iets aan.
- **Generieke teksten** zoals "foto", "afbeelding" of "plaatje 1".
- **"Klik hier" bij een afbeelding die ergens heen linkt.** Beschrijf de bestemming, bijvoorbeeld "Bekijk productdetails".
- **Belangrijke informatie alleen in de afbeelding.** Bijvoorbeeld een banner met "Uitverkoop: 50% korting" zonder die tekst ergens anders op de pagina. Zet belangrijke informatie ook in gewone tekst.
- **"Afbeelding van" of "foto van" in de alt-tekst.** De schermlezer meldt al dat het om een afbeelding gaat.

## Wanneer mag het alt-veld leeg blijven?

Er zijn twee situaties waarin een lege alt-tekst de juiste keuze is:

1. **De afbeelding is decoratief.** Een sfeerbeeld, sierlijn of achtergrondpatroon voegt geen informatie toe. Bijna alle stockfoto's zijn decoratief.
2. **De informatie staat al in de tekst ernaast.** Staat een productfoto direct naast de productnaam en de beschrijving? Dan mag het alt-veld leeg blijven. Een korte alt-tekst zoals "Draadloze koptelefoon" kan ook, maar herhaal niet de hele beschrijving.

Twijfel je of een afbeelding decoratief is? Mail je vraag naar contact@properaccess.nl. We kijken graag met je mee.

## Zo schrijf je een goede alt-tekst

1. **Wees beschrijvend maar bondig.** Wat moet de bezoeker weten? Niet meer, niet minder.
2. **Beschrijf inhoud én functie.** Niet alleen "blauwe schoen", maar "Nike hardloopschoen in blauw, mesh materiaal". Linkt de afbeelding ergens heen? Beschrijf dan de bestemming.
3. **Laat "afbeelding van" weg.** De schermlezer zegt dat al.
4. **Kijk naar de context.** Dezelfde afbeelding kan op verschillende pagina's een andere alt-tekst nodig hebben. Het logo bovenaan de homepage krijgt de organisatienaam; hetzelfde logo in de footer mag een leeg alt-veld hebben als de naam daar al in tekst staat.
5. **Geen zoekwoorden stapelen.** Een alt-tekst is voor bezoekers, niet voor zoekmachines. Dus niet "hardloopschoenen hardloopschoenen kopen beste hardloopschoenen".

### Tips per type afbeelding

- **Productfoto's:** noem merk, model, kleur en opvallende kenmerken. "Samsung Galaxy S24 smartphone in grafietgrijs".
- **Close-ups:** beschrijf wat de close-up toont. "Close-up van de USB-C-aansluiting aan de onderkant".
- **Sfeerfoto's:** is het product duidelijk in beeld, beschrijf dan het product: "Vrouw draagt de grijze wollen trui tijdens een wandeling in het park". Puur decoratieve sfeerfoto's krijgen een leeg alt-veld.
- **Meerdere afbeeldingen van hetzelfde onderwerp:** wees per afbeelding specifiek. Niet 4 keer "productafbeelding", maar "voorkant", "achterkant", "linkerzijde" en "detail van de sluiting".

## Controleer je pagina's met de Toegankelijkheids-lens

Wil je weten hoe jouw pagina's ervoor staan? Gebruik onze gratis [Toegankelijkheids-lens voor webredactie](/tools/toegankelijkheids-lens-webredactie/). Je sleept de lens één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. Je ziet direct welke afbeeldingen een goede alt-tekst hebben, welke decoratief zijn en welke er nog een missen.

De lens vervangt geen volledige audit, maar helpt je de meest voorkomende fouten zelf op te sporen en op te lossen voordat je publiceert. Wil je een complete check door een specialist? Bekijk dan onze [contentaudit](/contentaudit/) of [toegankelijkheidsaudit](/toegankelijkheidsaudit/).

## Veelgestelde vragen

### Moet elke kleurvariatie van een product een eigen alt-tekst hebben?

Ja. Toon je hetzelfde shirt in rood, blauw en groen, dan beschrijf je elke foto apart: "katoenen t-shirt in rood", "katoenen t-shirt in blauw", "katoenen t-shirt in groen".

### Kan ik AI gebruiken om alt-teksten te genereren?

AI kan helpen, maar controleer altijd de uitkomst. AI kent de context niet. Een foto van schoenen op het strand wordt bijvoorbeeld beschreven als "schoenen op het strand", terwijl jij wilt zeggen: "Nike hardloopschoenen in actie tijdens een strandtraining".

### Geldt dit ook voor afbeeldingen in PDF's?

Ja. Bied je brochures, rapporten of catalogi als PDF aan? Dan hebben de afbeeldingen daarin ook een alt-tekst nodig.

### Wat als ik geen alt-tekst-veld kan vinden in mijn CMS?

Bijna alle moderne systemen hebben er een, soms onder een andere naam zoals "alternatieve tekst" of "beschrijving". Kun je het veld echt niet vinden? Vraag het aan je webbouwer.

## Samenvatting

WCAG-succescriterium 1.1.1 is de basis van een toegankelijke website. Door alle informatieve afbeeldingen, iconen en video's een goed tekstalternatief te geven, maak je jouw content bruikbaar voor iedereen, ook voor de miljoenen mensen met een visuele beperking.

De belangrijkste punten:

- Elke informatieve afbeelding heeft een beschrijvende alt-tekst nodig.
- Decoratieve afbeeldingen krijgen een leeg alt-veld.
- Zet belangrijke informatie nooit alleen in een afbeelding.
- Controleer je pagina's met de [Toegankelijkheids-lens voor webredactie](/tools/toegankelijkheids-lens-webredactie/).
- Maak er een gewoonte van om direct een alt-tekst toe te voegen bij nieuwe content.

**Wil je dat je hele redactie toegankelijk leert schrijven en publiceren?** Bekijk dan onze [training voor webredacties](/trainen-van-webredactie/) of vraag [een contentaudit](/contentaudit/) aan.

Heb je een webshop en wil je een langere checklist met punten om te controleren? Daar heb ik een artikel over geschreven. Lees [mijn artikel over toegankelijke webshops op Frankwatching](https://www.frankwatching.com/archive/2025/02/17/meer-omzet-met-toegankelijke-webshop/).
