---
draft: true
title: "Knop met icoon en tekst, maar aria-label vervangt alles"
date: 2026-04-29
slug: "sc-2-5-3-knop-met-icoon-en-tekst-maar-aria-label-vervangt-alles"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-5-3"
  - "label"
  - "spraaksturing"
description: "Knop met icoon en tekst, maar aria-label vervangt alles — WCAG 2.5.3 Label in naam (post 3/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - knop met icoon en tekst, maar aria-label vervangt alles
image: "/images/blog/linkedin-series/sc-2-5-3-knop-met-icoon-en-tekst-maar-aria-label-vervangt-alles.png"
---

Een knop. Disketje-icoon. Daarnaast: "Opslaan."

De developer dacht: laat ik een uitgebreider aria-label toevoegen. "Sla het huidige document op naar de server."

Het resultaat: de zichtbare tekst "Opslaan" is niet meer onderdeel van de toegankelijke naam. Spraakbesturing: "Klik op Opslaan." Geen match.

```html
<!-- Niet doen: aria-label vervangt de zichtbare tekst -->
<button aria-label="Sla het huidige document op naar de server">
  <svg aria-hidden="true"><!-- disketje --></svg>
  Opslaan
</button>

<!-- Wel doen: geen aria-label nodig -->
<button>
  <svg aria-hidden="true"><!-- disketje --></svg>
  Opslaan
</button>
```

**De gouden regel:** als je knop al zichtbare tekst heeft, heb je geen aria-label nodig.

Een aria-label overschrijft alles. De zichtbare tekst, de alt-tekst van afbeeldingen erin, alles. Zodra je een aria-label toevoegt, is dat de enige naam die schermlezers en spraakbesturing gebruiken.

**Wanneer heb je wél een aria-label nodig?** Alleen als het element geen zichtbare tekst heeft. Een knop met alleen een icoon. Een link met alleen een afbeelding. Dan is aria-label de juiste oplossing.
