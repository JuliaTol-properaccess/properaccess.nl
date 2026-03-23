---
title: "Tekst afgesneden door een vaste hoogte"
date: 2026-04-22
slug: "sc-1-4-10-tekst-afgesneden-door-een-vaste-hoogte"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Tekst afgesneden door een vaste hoogte — WCAG 1.4.10 Reflow (post 3/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - tekst afgesneden door een vaste hoogte
image: "/images/blog/linkedin-series/sc-1-4-10-tekst-afgesneden-door-een-vaste-hoogte.png"
---

Een banner van 200 pixels hoog. Past precies. Mooie headline, korte tekst, call-to-action.

Tot je inzoomt.

Bij 400% zoom wordt de tekst groter. De banner niet. De tekst valt buiten het element. En als daar `overflow: hidden` op staat — en dat staat er bijna altijd — verdwijnt de onderste helft.

Je leest: "Schrijf je nu in voor onze nieuwsbr..."

En dat was het.

**Het probleem:** `height: 200px` met `overflow: hidden`. De container heeft een plafond. De tekst niet.

**De oplossing:** Vervang `height` door `min-height`. Het element begint op 200 pixels, maar groeit mee als de content dat vraagt.

```css
/* Niet doen */
.banner { height: 200px; overflow: hidden; }

/* Wel doen */
.banner { min-height: 200px; }
```

Eén woord verschil. Drie letters: m-i-n. En je content is weer leesbaar bij elk zoomniveau.

**De vuistregel:** gebruik `height` alleen als je element echt een vaste hoogte moet hebben (zoals een video-embed). In alle andere gevallen: `min-height`.
