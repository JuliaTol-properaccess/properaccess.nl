---
title: "Hoe geef ik een applicatie een accessible name?"
date: 2025-08-10
slug: "hoe-geef-ik-een-applicatie-accessible-name"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags:
  - "4-1-2"
  - "2-4-6"
description: "Hoe geef je een applicatie met role=\"application\" een correcte accessible name? Praktische uitleg voor developers met aria-labelledby."
keywords:
  - accessible name applicatie
  - aria-labelledby role application
  - wcag accessible name
aliases:
  - "/hoe-geef-ik-een-applicatie-accessible-name/"
---

Soms kom je in een audit een element tegen met `role="application"` dat geen toegankelijkheidsnaam (accessible name) heeft. Dat is een probleem, want een schermlezer weet dan niet wat dit onderdeel van de pagina doet. In dit artikel leg ik uit wat `role="application"` is, wanneer je het gebruikt en hoe je het een correcte naam geeft.

## Wat doet role="application"?

Het attribuut `role="application"` vertelt een schermlezer: "dit is geen gewone webpagina-content, maar een applicatie." Dat heeft grote gevolgen. Normaal gesproken onderschept een schermlezer toetsaanslagen om er eigen navigatiefuncties aan te koppelen. Denk aan de **H**-toets om naar de volgende kop te springen, of de **Tab**-toets om naar het volgende interactieve element te gaan.

Met `role="application"` schakelt de schermlezer die eigen sneltoetsen uit. Alle toetsaanslagen gaan direct naar de webpagina. Dat is handig als je een interactieve widget hebt gebouwd die eigen toetsenbordbediening nodig heeft -- zoals een kalender, een kaartapplicatie of een tekenprogramma.

**Let op:** gebruik `role="application"` alleen als je echt een reden hebt. In de meeste gevallen is het beter om standaard HTML-elementen te gebruiken. Verkeerd gebruik van deze role kan de navigatie voor schermlezers ernstig verstoren.

## Het probleem: geen accessible name

Elk element met een ARIA-role heeft een **accessible name** nodig. Die naam is wat de schermlezer voorleest als de gebruiker het element bereikt. Zonder naam hoort de gebruiker alleen "application" -- en weet niet waar die applicatie over gaat of wat er mee kan.

In de accessibility tree van Chrome (DevTools > Accessibility tab) zie je dit terug als een leeg Name-veld.

## De oplossing: aria-labelledby

De beste manier om een `role="application"` een naam te geven, is met `aria-labelledby`. Dit attribuut verwijst naar het `id` van een bestaand element op de pagina -- bijvoorbeeld de kop boven de applicatie.

```html
<h2 id="kalender-kop">Beschikbare data</h2>
<div role="application" aria-labelledby="kalender-kop">
  <!-- je interactieve widget -->
</div>
```

Nu leest de schermlezer: **"Beschikbare data, application"**. De gebruiker weet direct wat dit onderdeel doet.

## Waarom aria-labelledby en niet aria-label?

Beide werken technisch, maar `aria-labelledby` heeft twee voordelen:

- **De naam blijft synchroon.** Als je de koptekst verandert, verandert de accessible name automatisch mee.
- **De naam is zichtbaar.** Met `aria-label` geef je een onzichtbare naam die kan afwijken van wat de gebruiker op het scherm ziet. Dat kan verwarrend zijn, vooral voor mensen die spraakbesturing gebruiken (SC 2.5.3).

Gebruik `aria-label` alleen als er geen zichtbare tekst beschikbaar is om naar te verwijzen.

## Checklist

- Heeft je element met `role="application"` een accessible name?
- Gebruik je `aria-labelledby` met een verwijzing naar een zichtbare kop?
- Heb je gecontroleerd in de accessibility tree (DevTools) dat de naam correct wordt weergegeven?
- Heb je getest of alle toetsenbordfuncties binnen de application werken zoals verwacht?

Wil je leren hoe je dit soort problemen zelf opspoort? Op onze pagina over [SC 4.1.2 Naam, rol, waarde](/sc-4-1-2-wat-betekent-naam-rol-waarde/) lees je meer over accessible names en hoe je ze test.
