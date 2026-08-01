---
title: "SC 3.3.2 - Wat betekent “Labels en instructies”"
translationKey: "sc-3-3-2"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
description: "WCAG 3.3.2 vraagt een duidelijk label of instructie bij elk invoerveld. Lees hoe je als webredacteur begrijpelijke formulieren maakt en zelf controleert."
keywords:
  - WCAG 3.3.2
  - labels en instructies
  - toegankelijke formulieren
  - formulier labels
  - placeholder in plaats van label
  - verplichte velden markeren
  - formulieren webredactie
tags:
  - "3-3-2"
  - "formulier"
  - "labels"
aliases:
  - /sc-3-3-2-wat-betekent-labels-en-instructies/
---

Je opent een formulier met 5 velden. Geen labels, alleen grijze voorbeeldtekst die verdwijnt zodra je begint te typen. Halverwege weet je niet meer wat er in het eerste veld moest. Bij een paar velden staat een sterretje, maar nergens staat wat dat betekent. Daarom zegt WCAG: **elk invoerveld heeft een label of instructie die duidelijk maakt wat er verwacht wordt**.

Dit heet **3.3.2 Labels or Instructions**.

## Wat zegt het criterium?

[WCAG succescriterium 3.3.2](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html) vraagt dat bezoekers bij elk invoerveld kunnen zien wat ze moeten invullen. Dat kan met een label, zoals "E-mailadres", en waar nodig met een instructie, zoals het formaat van een datum.

Als webredacteur maak je vaak zelf formulieren: een contactformulier, een aanmeldformulier of een nieuwsbriefinschrijving. De labels, de instructies en de uitleg bovenaan het formulier zijn gewoon content. Dit criterium is dus voor een groot deel jouw werk.

## Waarom is dit belangrijk?

Een formulier is vaak het belangrijkste moment op je website: hier stelt iemand een vraag, meldt zich aan of doet een aanvraag. Gaat het invullen mis, dan haakt de bezoeker af of krijg jij een halve aanvraag binnen.

- Schermlezergebruikers horen bij elk veld het label. Ontbreekt dat, dan horen ze alleen "invoerveld" en moeten ze gokken wat erin moet.
- Mensen met een cognitieve beperking of weinig leeservaring raken de draad kwijt als voorbeeldtekst verdwijnt zodra ze typen.
- Iedereen die even wordt afgeleid, weet zonder labels niet meer wat er in een half ingevuld formulier moest.

## Wat verwacht het criterium?

### Een zichtbaar label bij elk veld

Elk invoerveld heeft een label dat blijft staan, ook tijdens en na het typen. Grijze voorbeeldtekst ín het veld, een placeholder, telt niet als label: die verdwijnt zodra iemand begint te typen.

### Een instructie bij een verplicht formaat

Verwacht een veld een specifiek formaat? Zet dat erbij, het liefst met een voorbeeld. Bijvoorbeeld bij een telefoonnummerveld: "Bijvoorbeeld: 06-12 34 56 78".

### Duidelijkheid over verplichte velden

Zijn niet alle velden verplicht? Geef dan bij elk veld aan of het verplicht is. Gebruik je daarvoor een sterretje? Leg dan bovenaan het formulier uit wat dat betekent: "Velden met een * zijn verplicht."

### Een groepslabel bij keuzerondjes en aankruisvakjes

Een groep keuzerondjes of aankruisvakjes heeft een vraag of kop nodig die bij de hele groep hoort. Bijvoorbeeld "Hoe wil je betalen?" boven de opties iDEAL en creditcard. Zonder die vraag zijn de losse opties niet te begrijpen.

## Veelgemaakte fouten

- **Alleen een placeholder als label.** De meest voorkomende fout. Een formulier met alleen placeholders oogt strak, maar de tekst verdwijnt bij het typen, het contrast is vaak te laag en schermlezers behandelen een placeholder niet betrouwbaar als label.
- **Een label dat te ver van het veld staat.** Als het label visueel niet duidelijk bij het veld hoort, weten bezoekers niet welk label bij welk veld hoort. Zet labels direct boven of naast het veld.
- **Geen instructie bij formaat-eisen.** Een datumveld zonder uitleg: moet je 11-03-2026, 03/11/2026 of 11 maart 2026 typen? Een rekeningnummerveld: met of zonder spaties?
- **Uitleg die pas na een fout komt.** Sommige formulieren geven pas uitleg als je een fout maakt: "Ongeldig telefoonnummer". Maar welk formaat is dan wél geldig? Geef de instructie vooraf, niet achteraf.
- **Een groep opties zonder gezamenlijke vraag.** Losse keuzerondjes met "Ja" en "Nee" zonder de vraag erboven zijn voor niemand te volgen.

## Zo maak je een begrijpelijk formulier

1. **Geef elk veld een kort, concreet label.** "E-mailadres", "Voornaam", "Vraag of opmerking".
2. **Zet formaat-eisen vooraf bij het veld.** Het liefst met een voorbeeld, zoals "datum als 11-03-2026".
3. **Markeer verplichte velden en leg de markering uit.** Of draai het om: is bijna alles verplicht, markeer dan alleen de optionele velden met "niet verplicht".
4. **Geef groepen opties een duidelijke vraag als kop.** Zo horen de losse keuzes ergens bij.
5. **Vraag alleen wat je echt nodig hebt.** Hoe minder velden, hoe minder er mis kan gaan.
6. **Vul je eigen formulier in.** Denk alle voorbeeldtekst in de velden weg: begrijp je dan nog steeds wat er overal moet staan?

## Controleer je formulieren met WCAG Radar

Wil je weten hoe jouw formulieren ervoor staan? Gebruik onze gratis [WCAG Radar](/tools/wcag-radar/). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. De radar markeert direct de invoervelden zonder toegankelijke naam, dus velden waar voorleessoftware geen label bij kan vinden. Een placeholder telt daarbij niet als naam.

De radar vervangt geen volledige audit, maar helpt je de meest voorkomende fouten zelf op te sporen en op te lossen voordat je publiceert. Wil je een complete check door een specialist? Bekijk dan onze [contentaudit](/contentaudit/) of [toegankelijkheidsaudit](/toegankelijkheidsaudit/).

## Veelgestelde vragen

### Waarom is een placeholder niet genoeg als label?

Een placeholder verdwijnt zodra iemand begint te typen. Wie halverwege het formulier terugkijkt, ziet niet meer wat er in de eerdere velden moest. Daarnaast is het contrast van placeholdertekst vaak te laag en behandelen schermlezers een placeholder niet betrouwbaar als label. Gebruik een placeholder hooguit als extra voorbeeld naast een zichtbaar label.

### Mijn formulieren komen uit een module in mijn CMS, wat kan ik zelf doen?

De teksten zijn van jou: de labels, de instructies, de uitleg bovenaan en de vraag boven een groep opties. Die maak je in de formulierenmodule zelf duidelijk. Of een label technisch goed aan het veld gekoppeld is, bepaalt de module. Twijfel je daaraan? Vraag het aan je webbouwer of controleer het met de radar.

### Moet ik verplichte of juist optionele velden markeren?

Allebei mag, als het maar duidelijk en consistent is. Zijn de meeste velden optioneel? Markeer dan de verplichte velden. Is bijna alles verplicht? Dan is "niet verplicht" bij de paar optionele velden rustiger. Leg een sterretje altijd bovenaan het formulier uit.

### Wat is het verschil met de andere WCAG-criteria over labels?

SC 3.3.2 gaat over de aanwezigheid: staat er bij elk veld een label of instructie? [SC 1.3.1](/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/) gaat over de technische koppeling tussen label en veld, dat is werk voor je webbouwer. En [SC 2.4.6](/blog/sc-2-4-6-wat-betekent-koppen-en-labels/) gaat over de kwaliteit van de labeltekst: is die duidelijk genoeg?

## Samenvatting

WCAG-succescriterium 3.3.2 draait om duidelijkheid vooraf: bezoekers moeten bij elk veld weten wat ze moeten invullen, nog voordat ze iets typen. Als webredacteur heb je hier veel zelf in de hand.

De belangrijkste punten:

- Elk invoerveld heeft een zichtbaar label dat blijft staan.
- Een placeholder is geen label.
- Vermeld formaat-eisen en verplichte velden vooraf, niet pas na een foutmelding.
- Geef groepen keuzerondjes of aankruisvakjes een duidelijke vraag als kop.
- Controleer je pagina's met de [WCAG Radar](/tools/wcag-radar/).

**Wil je dat je hele redactie toegankelijk leert schrijven en publiceren?** Bekijk dan onze [training voor webredacties](/trainen-van-webredactie/) of vraag [een contentaudit](/contentaudit/) aan.
