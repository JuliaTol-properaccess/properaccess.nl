---
title: "Google Lighthouse als toegankelijkheidstool"
date: 2024-08-07
slug: "google-lighthouse-als-toegankelijkheidstool"
categories: 
  - "tips-en-tools"
  - "de EAA"
description: "Hoe betrouwbaar is Google Lighthouse voor toegankelijkheid? Een praktijkexperiment met WCAG-resultaten en vergelijking met handmatige audits."
keywords:
  - google lighthouse toegankelijkheid
  - automatische wcag tests
  - handmatige toegankelijkheidsaudit
aliases:
  - /google-lighthouse-als-toegankelijkheidstool/
---

Vijf jaar geleden werkte ik als webontwikkelaar en wist ik veel minder over digitale toegankelijkheid dan nu. In 2019 leverde ik een website op die mijn teamleider wilde laten testen op het voldoen aan de WCAG-richtlijnen. Ik was ervan overtuigd dat de website toegankelijk was. Drie jaar daarvoor had ik mijn opleiding Informatica aan de Hogeschool van Malmö afgerond, waar aandacht werd besteed aan digitale toegankelijkheid. Ik gebruikte Google Lighthouse als testtool om de homepagina te controleren en behaalde een score van 95%. Mij kon niets gebeuren! Ik was geen moment bang dat er iets zou worden afgekeurd. Het resultaat van het toegankelijkheidsonderzoek was echter teleurstellend: 15 succescriteria onvoldoende! Sindsdien is veel gebeurd in mijn leven. Sinds dat jaar heb ik Google Lighthouse niet meer gebruikt.

Tegenwoordig ben ik alleen maar bezig met het doen of controleren van toegankelijkheidsonderzoeken en kan ik een goede vergelijking maken tussen het resultaat van deze tool en handmatig onderzoek. Ik krijg regelmatig vragen van mijn opdrachtgevers of Google Lighthouse te vertrouwen is.

Ik weet dat Google in de afgelopen jaren veel aandacht heeft besteed aan de toegankelijkheid van hun producten. Ik verwacht dat Google Lighthouse momenteel anders presteert dan vijf jaar geleden. Laten we eens kijken wat deze tool in 2024 doet!

## Het experiment

In [het register van toegankelijkheidsverklaringen](https://www.toegankelijkheidsverklaring.nl/register?w=&order=changed&sort=desc) op deze pagina selecteer ik de kolom "Laatst gewijzigd" om de nieuwste verklaringen bovenaan te krijgen

Ik selecteer acht websites met status A, waarbij ik websites die sterk op elkaar lijken of offline zijn, niet in de selectie zijn meegenomen:

- https://www.gelderland.nl/

- https://maasdriel.mijnafspraakmaken.nl/

- https://regionaalenergieloket.nl/eemsdelta

- https://www.cibg.nl/

- https://www.val-niet.nl/

- https://zevenaar.incijfers.nl/dashboard/

- https://www.duurzaamveenendaal.nl/

- https://bedrijvenparkmedel.nl/

## Resultaten (TLDR)

- Totaal aantal bevindingen: 7 (waarvan 2 hetzelfde)
- Correct afgekeurd: 2
- Onterecht afgekeurd: 5

## Resultaten per website

### https://www.gelderland.nl/

- Google Lighthouse Score: 93%
- Issue: Elementen met `role="dialog"` of `role="alertdialog"` hebben geen toegankelijke namen.
- Feedback Julia: Correct, dit valt onder succescriterium 4.1.2.
- Uitspraak: Google Lighthouse heeft gelijk.

### https://maasdriel.mijnafspraakmaken.nl/

- Google Lighthouse Score: 91%

  Issue 1: \`\[aria-\*\]\`-kenmerken zijn niet geldig of verkeerd gespeld.
- Element: `<input class="search-input-field au-target" ... aria-label="Zoek een activiteit..." ...>`
- Feedback Julia: Er zijn twee aria-label attributen aanwezig in dit invoerveld. De Accessbility API leest het laatste correct. Volgens mij is dit geen echte probleem. Ik zou wel aanraden om aria-label.bind te verwijderen.

  Issue 2: Sommige elementen hebben een `[tabindex]`\-waarde groter dan 0.

- Element: `<div id="first-focus-element" tabindex="1">`
- Feedback Julia: Dit maakt de website niet minder toegankelijk. Tabindex met een positieve waarde kan in sommige situaties nuttig zijn. Op deze website lijkt het weinig zin dit te gebruiken.

- Uitspraak: Google Lighthouse is te streng.

### https://regionaalenergieloket.nl/eemsdelta

- Google Lighthouse Score: 92%
Issue 1: \`\[aria-\*\]\`-kenmerken komen niet overeen met hun rollen.
- Element: `<div aria-expanded="false" aria-live="polite" ...>`
- Feedback Julia: Correct. Het gaat om de code die geplaatst is op de containers waarin de knoppen van het hoofdmenu zitten: “Inzicht krijgen”, “Woning verbeteren” en verder. De attributen `aria-expanded="false"` en `aria-live="polite"` horen inderdaad niet op de div-elementen.

Issue 2: Elementen met `role="dialog"` of `role="alertdialog"` hebben geen toegankelijke namen.

- Element: `<div role="dialog" aria-describedby="modalBody" ...>`
- Feedback Julia: Ik kan dit modalvenster niet zo snel oproepen om te controleren of de naam ontbreekt. Maar ik zie een attribuut aria-describedby="modalBody". Dit attribuut kan ook voor een toegankelijkheidsnaam zorgen. Dit issue is twijfelachtig.
- Uitspraak: Issue 1 is correct, Issue 2 vereist meer onderzoek.

### https://www.cibg.nl/

- Google Lighthouse Score: 99%
- Issue: Koppen worden niet weergegeven in aflopende volgorde.
- Feedback Julia: Onder een onzichtbare kop (h1) staat een video waaronder h3-koppen staan. In Nederland wordt dit niet afgekeurd.
- Uitspraak: Google Lighthouse is te streng.

### https://www.val-niet.nl/

- Google Lighthouse Score: 95%
- Issue: Contrastverhouding van achtergrond- en voorgrondkleuren is onvoldoende.
- Feedback Julia: De website heeft een goed functionerende hoogcontrastknop.
- Uitspraak: Google Lighthouse is te streng.

### https://zevenaar.incijfers.nl/dashboard/

- Google Lighthouse Score: 100%

### https://www.duurzaamveenendaal.nl/

- Google Lighthouse Score: 100%

### https://bedrijvenparkmedel.nl/

- Google Lighthouse Score: 97%
- Issue: Contrastverhouding van achtergrond- en voorgrondkleuren is onvoldoende.
- Feedback: De website heeft een goed functionerende hoogcontrastknop.
- Uitspraak: Google Lighthouse is te streng.

## Conclusie

Hoewel Google Lighthouse een nuttige tool kan zijn, vertoont het soms onterecht strengheid bij bepaalde issues. Het is belangrijk om deze bevindingen handmatig te controleren en de toegankelijkheid van websites verder te onderzoeken.
