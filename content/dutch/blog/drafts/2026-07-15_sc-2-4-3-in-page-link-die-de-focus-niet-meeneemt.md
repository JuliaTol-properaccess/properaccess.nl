---
draft: true
title: "In-page link die de focus niet meeneemt"
date: 2026-07-15
slug: "sc-2-4-3-in-page-link-die-de-focus-niet-meeneemt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "In-page link die de focus niet meeneemt — WCAG 2.4.3 Focusvolgorde (post 10/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - in-page link die de focus niet meeneemt
image: "/images/blog/linkedin-series/sc-2-4-3-in-page-link-die-de-focus-niet-meeneemt.png"
---

Een inhoudsopgave bovenaan een lang artikel. "Hoofdstuk 3." Je klikt erop. De pagina scrollt naar Hoofdstuk 3.

Je drukt op Tab. De focus springt terug naar de inhoudsopgave. Niet naar de content van Hoofdstuk 3.

Dit is hetzelfde probleem als bij skiplinks: het doel is niet focusbaar. De browser scrollt, maar de focus verplaatst niet mee.

```html
<!-- Niet doen: heading niet focusbaar -->
<a href="#hoofdstuk-3">Hoofdstuk 3</a>
...
<h2 id="hoofdstuk-3">Hoofdstuk 3</h2>

<!-- Wel doen: heading focusbaar -->
<a href="#hoofdstuk-3">Hoofdstuk 3</a>
...
<h2 id="hoofdstuk-3" tabindex="-1">Hoofdstuk 3</h2>
```

**Dit speelt bij:**
- Inhoudsopgaven in lange artikelen
- "Terug naar boven"-links
- Ankerlinks naar secties op dezelfde pagina
- FAQ-pagina's met links naar specifieke vragen
- Navigatie binnen een one-page website

**De vuistregel:** elk element dat het doel is van een in-page link krijgt `tabindex="-1"`. Dan verplaatst de focus mee met de scroll.

**Leuk detail:** sommige browsers (met name oudere versies van Firefox) verplaatsten de focus automatisch naar het doel, ook zonder `tabindex`. Maar dat is niet consistent. Met `tabindex="-1"` werkt het overal.
