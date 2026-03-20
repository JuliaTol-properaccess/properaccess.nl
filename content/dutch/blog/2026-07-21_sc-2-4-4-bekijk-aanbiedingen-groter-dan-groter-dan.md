---
title: '"Bekijk aanbiedingen groter dan groter dan"'
date: 2026-07-21
slug: "sc-2-4-4-bekijk-aanbiedingen-groter-dan-groter-dan"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: '"Bekijk aanbiedingen groter dan groter dan" — WCAG 2.4.4 Linkdoel (in context) (post 12/14)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - "bekijk aanbiedingen groter dan groter dan"
image: "/images/blog/linkedin-series/sc-2-4-4-bekijk-aanbiedingen-groter-dan-groter-dan.png"
---

"Bekijk aanbiedingen >>"

Ziet er prima uit. Dat pijltje geeft richting. Je weet dat je ergens naartoe gaat.

Een schermlezer leest: "Bekijk aanbiedingen groter dan groter dan."

Het `>>` teken is geen pijl. Het is het wiskundige symbool voor "groter dan". En een schermlezer leest het voor zoals het heet.

```html
<!-- Niet doen -->
<a href="/aanbiedingen">Bekijk aanbiedingen >></a>
<!-- "Bekijk aanbiedingen groter dan groter dan" -->

<!-- Wel doen: geen decoratieve tekens -->
<a href="/aanbiedingen">Bekijk aanbiedingen</a>

<!-- Of: visueel pijltje dat verborgen is -->
<a href="/aanbiedingen">
  Bekijk aanbiedingen
  <span aria-hidden="true"> &rarr;</span>
</a>
```

`aria-hidden="true"` verbergt het pijltje voor schermlezers. Het is zichtbaar op het scherm maar wordt niet voorgelezen.

**Andere tekens die verrassend worden voorgelezen:**
- `|` — "verticale balk"
- `&` — "en-teken" of "ampersand"
- `/` — "schuine streep"
- `•` — "opsommingsteken"

Vermijd decoratieve tekens in linktekst. Gebruik CSS of `aria-hidden` voor visuele toevoegingen.
