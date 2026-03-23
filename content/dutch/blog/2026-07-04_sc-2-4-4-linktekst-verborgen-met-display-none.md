---
title: "Linktekst verborgen met display: none"
date: 2026-07-04
slug: "sc-2-4-4-linktekst-verborgen-met-display-none"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Linktekst verborgen met display: none — WCAG 2.4.4 Linkdoel (in context) (post 8/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - linktekst verborgen met display: none
image: "/images/blog/linkedin-series/sc-2-4-4-linktekst-verborgen-met-display-none.png"
---

De developer wilde het netjes doen. Een link met een aria-tekst voor schermlezers. Maar in plaats van `sr-only` gebruikte die `display: none`.

```html
<!-- Niet doen: tekst verborgen voor iedereen -->
<a href="/acties">
  <span style="display: none;">Bekijk onze acties</span>
</a>
```

Een schermlezer ziet: "Link." Zonder naam.

`display: none` verbergt het element voor iedereen. Ook voor schermlezers. Hetzelfde geldt voor `visibility: hidden`.

```html
<!-- Wel doen: visueel verborgen, beschikbaar voor schermlezers -->
<a href="/acties">
  <span class="sr-only">Bekijk onze acties</span>
</a>
```

**Het verschil in één overzicht:**

| Methode | Visueel verborgen | Schermlezer leest het | Gebruik |
|---|---|---|---|
| `display: none` | Ja | Nee | Element echt verwijderen |
| `visibility: hidden` | Ja | Nee | Element echt verwijderen |
| `sr-only` class | Ja | Ja | Tekst alleen voor schermlezers |
| `aria-label` | n.v.t. | Ja | Naam voor interactief element |

**Tip:** als je tekst wilt toevoegen aan een link die alleen een icoon bevat, is `aria-label` op de link het simpelst. De `sr-only` class is handig als je langere tekst wilt verbergen.
