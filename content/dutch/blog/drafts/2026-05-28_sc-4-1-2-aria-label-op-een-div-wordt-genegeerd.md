---
draft: true
title: "aria-label op een div: wordt genegeerd"
date: 2026-05-28
slug: "sc-4-1-2-aria-label-op-een-div-wordt-genegeerd"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "aria-label op een div: wordt genegeerd — WCAG 4.1.2 Naam, rol, waarde (post 5/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - aria-label op een div: wordt genegeerd
image: "/images/blog/linkedin-series/sc-4-1-2-aria-label-op-een-div-wordt-genegeerd.png"
---

Een developer wil een sectie een naam geven voor schermlezers. Plakt `aria-label="Zoekresultaten"` op een `<div>`.

De schermlezer negeert het. Want een `<div>` zonder rol heeft de impliciete rol "generic." En op generieke elementen mag je geen `aria-label` gebruiken.

```html
<!-- Niet doen: aria-label op een div zonder rol -->
<div aria-label="Zoekresultaten">
  <p>3 resultaten gevonden</p>
</div>

<!-- Wel doen: voeg een rol toe -->
<div role="region" aria-label="Zoekresultaten">
  <p>3 resultaten gevonden</p>
</div>

<!-- Of: gebruik een semantisch element -->
<section aria-label="Zoekresultaten">
  <p>3 resultaten gevonden</p>
</section>
```

**De logica:** een `<div>` is een container zonder betekenis. Het zou vreemd zijn als een schermlezer bij elke div een label zou aankondigen. Daarom worden labels op generieke elementen genegeerd.

Maar een `<section>` of een `<div role="region">` is een landmark — een herkenbaar gebied op de pagina. Daar hoort een label bij.

**Dit geldt ook voor `<span>`:** geen `aria-label` op een span zonder rol.
