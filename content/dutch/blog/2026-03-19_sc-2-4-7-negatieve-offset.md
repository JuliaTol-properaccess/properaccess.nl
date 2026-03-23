---
title: "Negatieve outline-offset die de focus verbergt"
date: 2026-03-19
slug: "sc-2-4-7-negatieve-offset"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "css"
  - "focus"
description: "Negatieve outline-offset die de focus verbergt — WCAG 2.4.7 Focus zichtbaar (post 3/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - outline-offset
image: "/images/blog/linkedin-series/sc-2-4-7-negatieve-offset.png"
---

Een link met een donkere achtergrond. De focusindicator is er — een zwarte outline van 2 pixels. Maar `outline-offset: -4px` duwt die outline naar binnen. Onder de achtergrondkleur.

De indicator verdwijnt achter het element. Technisch aanwezig. Visueel onzichtbaar.

```css
/* Niet doen: outline verdwijnt onder de achtergrond */
a:focus-visible {
  outline: 2px solid black;
  outline-offset: -4px;
  background-color: black;
  color: white;
}

/* Wel doen: outline buiten het element */
a:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}
```

## Wanneer is een negatieve offset verleidelijk?

Als de designer de focus "strakker" wil — dichter bij het element, of binnen de border. Maar een negatieve offset op een element met een achtergrondkleur is een recept voor onzichtbaarheid.

De vuistregel: gebruik altijd een positieve `outline-offset` (2px is een goede standaard). De outline staat dan buiten het element en wordt nooit bedekt door de achtergrond.
