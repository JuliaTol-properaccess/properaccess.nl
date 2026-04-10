---
draft: true
title: "CSS voegt tekst toe die niet in de naam zit"
date: 2026-06-10
slug: "sc-2-5-3-css-voegt-tekst-toe-die-niet-in-de-naam-zit"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-5-3"
  - "label"
  - "spraaksturing"
description: "CSS voegt tekst toe die niet in de naam zit — WCAG 2.5.3 Label in naam (post 6/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - css voegt tekst toe die niet in de naam zit
image: "/images/blog/linkedin-series/sc-2-5-3-css-voegt-tekst-toe-die-niet-in-de-naam-zit.png"
---

Een knop. In de HTML staat "Verwijderen." Maar de CSS voegt via `::after` het woord "definitief" toe.

De gebruiker ziet: "Verwijderen definitief." De toegankelijke naam: "Verwijderen." Spraakbesturing: "Klik op Verwijderen definitief." Geen match.

```css
/* Problematisch: CSS voegt zichtbare tekst toe */
.knop-verwijderen::after {
  content: " definitief";
}
```

```html
<!-- De gebruiker ziet "Verwijderen definitief" -->
<!-- De toegankelijke naam is alleen "Verwijderen" -->
<button class="knop-verwijderen">Verwijderen</button>

<!-- Beter: alle tekst in de HTML -->
<button>Verwijderen definitief</button>
```

**Waarom is dit een probleem?**

CSS-gegenereerde content (`::before` en `::after`) wordt niet altijd meegenomen in de berekening van de toegankelijke naam. Het gedrag verschilt per browser en schermlezer. Je kunt er niet op vertrouwen.

**De vuistregel:** tekst die informatie geeft, hoort in de HTML. CSS is voor styling, niet voor content.

Decoratieve tekens via CSS (een pijltje, een bullet) zijn prima. Maar woorden die de betekenis veranderen? Die horen in de HTML.
