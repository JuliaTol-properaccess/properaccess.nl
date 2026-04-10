---
draft: true
title: "Accordion-paneel op de verkeerde plek in de focusvolgorde"
date: 2026-06-07
slug: "sc-2-4-3-accordion-paneel-op-de-verkeerde-plek-in-de-focusvolgorde"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Accordion-paneel op de verkeerde plek in de focusvolgorde — WCAG 2.4.3 Focusvolgorde (post 6/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - accordion-paneel op de verkeerde plek in de focusvolgorde
image: "/images/blog/linkedin-series/sc-2-4-3-accordion-paneel-op-de-verkeerde-plek-in-de-focusvolgorde.png"
---

Een accordion met drie secties. Je opent Sectie 1. Er verschijnt een link in het paneel.

Je drukt op Tab. Waar verwacht je dat de focus naartoe gaat? Naar die link in het net geopende paneel, toch?

Maar nee. De focus gaat naar Sectie 2. Dan Sectie 3. En pas daarna — na alle knoppen — naar de link in het paneel van Sectie 1.

Waarom? Omdat alle panelen na alle knoppen staan in de HTML.

```html
<!-- Niet doen: panelen na alle knoppen -->
<button aria-expanded="true">Sectie 1</button>
<button aria-expanded="false">Sectie 2</button>
<button aria-expanded="false">Sectie 3</button>
<div class="paneel-1">
  <a href="/link">Link in paneel 1</a>
</div>

<!-- Wel doen: paneel direct na de bijbehorende knop -->
<button aria-expanded="true" aria-controls="paneel-1">Sectie 1</button>
<div id="paneel-1" role="region">
  <a href="/link">Link in paneel 1</a>
</div>
<button aria-expanded="false" aria-controls="paneel-2">Sectie 2</button>
<div id="paneel-2" role="region" hidden>...</div>
```

**De logische volgorde:** knop -> paneel -> volgende knop -> volgend paneel.

Niet: knop -> knop -> knop -> paneel -> paneel -> paneel.

Dit geldt ook voor tabs. Na het klikken op een tab verwacht je dat de focus naar de content van die tab gaat. Niet naar de volgende tab.

**Test:** open een accordion-paneel en druk op Tab. Ga je naar de content van dat paneel? Of spring je naar de volgende knop?
