---
title: "Focusindicator die opgaat in de achtergrond"
date: 2026-03-18
slug: "sc-2-4-7-onzichtbaar-contrast"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "css"
  - "focus"
  - "contrast"
description: "Focusindicator die opgaat in de achtergrond — WCAG 2.4.7 Focus zichtbaar (post 2/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - focusindicator contrast
image: "/images/blog/linkedin-series/sc-2-4-7-onzichtbaar-contrast.png"
---

Er is een focusindicator. Technisch gezien. Een lichtgrijze outline (#E0E0E0) op een witte achtergrond. 1 pixel dik.

Contrast: 1,4:1. Je moet er met je neus tegenaan zitten om het te zien.

De browser toont standaard een duidelijke focus. Maar de designer wilde iets "subtielers." Het resultaat: een indicator die er is maar onzichtbaar is.

```css
/* Niet doen: te subtiel */
button:focus-visible {
  outline: 1px solid #E0E0E0;
}

/* Wel doen: duidelijk zichtbaar */
button:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}
```

## Twee factoren bepalen de zichtbaarheid

1. **Kleur:** voldoende contrast met de achtergrond (minimaal 3:1)
2. **Dikte:** minimaal 2px (1px is op veel schermen nauwelijks zichtbaar)

Let op: test op alle achtergrondkleuren die op je website voorkomen. Een donkerblauwe focus op wit is perfect. Op een donkerblauwe footer? Onzichtbaar.

## Dubbele ring als universele oplossing

```css
button:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px #FFFFFF;
}
```

Donkere ring op lichte achtergrond. Witte schaduw op donkere achtergrond. Altijd zichtbaar.
