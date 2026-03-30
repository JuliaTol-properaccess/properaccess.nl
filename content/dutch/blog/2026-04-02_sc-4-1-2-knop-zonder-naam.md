---
title: "Knop zonder naam"
date: 2026-04-02
slug: "sc-4-1-2-knop-zonder-naam"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Knop zonder naam — WCAG 4.1.2 Naam, rol, waarde (post 1/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - knop zonder naam
image: "/images/blog/linkedin-series/sc-4-1-2-knop-zonder-naam.png"
---

"Knop."

Dat is wat een schermlezer zegt. Knop. Maar welke knop? Wat doet die?

Een hamburger-icoon. Drie SVG-streepjes. Geen tekst. Geen aria-label. Geen alt.

De schermlezer weet: het is een knop (de rol). Maar niet wat die doet (de naam).

```html
<!-- Niet doen: icoon zonder naam -->
<button>
  <svg viewBox="0 0 24 24">
    <path d="M3 6h18v2H3z"/>
  </svg>
</button>

<!-- Wel doen: aria-label geeft de naam -->
<button aria-label="Menu openen">
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M3 6h18v2H3z"/>
  </svg>
</button>
```

Let op de twee toevoegingen:
1. `aria-label="Menu openen"` — geeft de knop een naam
2. `aria-hidden="true"` op de SVG — voorkomt dat de schermlezer de SVG-code probeert voor te lezen

**Dit geldt ook voor:**
- Invoervelden zonder label
- Links met alleen een afbeelding zonder alt
- Sluitknoppen met alleen een X-icoon
- Social media links met alleen iconen

Elk interactief element heeft een naam nodig. Geen uitzondering.
