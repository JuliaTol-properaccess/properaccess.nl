---
title: "Verborgen menu dat toch wordt voorgelezen"
date: 2026-07-06
slug: "sc-1-3-2-verborgen-menu-dat-toch-wordt-voorgelezen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Verborgen menu dat toch wordt voorgelezen — WCAG 1.3.2 Betekenisvolle volgorde (post 9/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - verborgen menu dat toch wordt voorgelezen
image: "/images/blog/linkedin-series/sc-1-3-2-verborgen-menu-dat-toch-wordt-voorgelezen.png"
---

Je mobiele menu is dicht. Ingeklapt. Onzichtbaar.

Maar een schermlezer leest alle vijf de menulinks voor. Home. Over ons. Diensten. Projecten. Contact. Alsof het menu gewoon open is.

Hoe kan dat?

Het menu is "verborgen" met `opacity: 0` en `position: absolute; left: -9999px`. Visueel onzichtbaar. Maar voor een schermlezer bestaat het nog steeds.

Een schermlezer kijkt niet naar je scherm. Die leest de DOM. En in de DOM is dat menu er gewoon. Zichtbaar of niet.

**Wat werkt niet:**
- `opacity: 0` — onzichtbaar maar leesbaar
- `left: -9999px` — buiten beeld maar leesbaar
- `height: 0; overflow: hidden` — soms leesbaar, afhankelijk van de schermlezer
- `transform: translateX(-100%)` — onzichtbaar maar leesbaar

**Wat werkt wel:**
- `display: none` — verborgen voor iedereen
- `visibility: hidden` — verborgen voor iedereen
- `hidden`-attribuut in HTML — verborgen voor iedereen

```html
<!-- Niet doen: visueel verborgen, maar leesbaar -->
<nav style="opacity: 0; position: absolute; left: -9999px;">
  <a href="/">Home</a>
  <!-- schermlezer vindt dit -->
</nav>

<!-- Wel doen: echt verborgen -->
<nav style="display: none;">
  <a href="/">Home</a>
</nav>

<!-- Of met het hidden-attribuut -->
<nav hidden>
  <a href="/">Home</a>
</nav>
```

**Let op:** als het menu opent, verander je `display: none` naar `display: block` (of verwijder het `hidden`-attribuut). Zo is het menu alleen leesbaar wanneer het daadwerkelijk zichtbaar is.

Dit was post 9 van 9 over WCAG 1.3.2 Betekenisvolle volgorde. De kern: wat je ziet is niet wat een schermlezer hoort. Test de volgorde. Test de zichtbaarheid. Test met een schermlezer.
