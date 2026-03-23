---
title: "Accordion zonder aria-expanded"
date: 2026-07-17
slug: "sc-4-1-2-accordion-zonder-aria-expanded"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Accordion zonder aria-expanded — WCAG 4.1.2 Naam, rol, waarde (post 10/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - accordion zonder aria-expanded
image: "/images/blog/linkedin-series/sc-4-1-2-accordion-zonder-aria-expanded.png"
---

Een accordion. Je klikt op "Meer informatie." De content verschijnt. Je klikt opnieuw. De content verdwijnt.

Visueel: een pijltje draait. Open. Dicht.

Een schermlezer: "Meer informatie, knop." Klik. "Meer informatie, knop." Open of dicht? Wie zal het zeggen.

```html
<!-- Niet doen: geen status -->
<button>Meer informatie</button>
<div class="panel">
  <p>Extra informatie.</p>
</div>

<!-- Wel doen: aria-expanded geeft de status door -->
<button aria-expanded="false" aria-controls="panel-1">
  Meer informatie
</button>
<div id="panel-1" hidden>
  <p>Extra informatie.</p>
</div>
```

Na het openen wordt `aria-expanded="false"` gewijzigd naar `aria-expanded="true"` en `hidden` verwijderd. De schermlezer zegt nu: "Meer informatie, uitgevouwen, knop."

**Dit geldt voor elk uitklapbaar element:**
- Accordions
- Submenu's in navigatie
- FAQ-secties
- "Toon meer"-secties
- Filterlijsten in webshops

**Twee attributen, dat is alles:**
1. `aria-expanded` op de trigger (true/false)
2. `aria-controls` dat verwijst naar het paneel (id)

Of gebruik `<details>`/`<summary>` — die regelen het automatisch.
