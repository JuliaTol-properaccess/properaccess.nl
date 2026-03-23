---
title: "Die mooie oranje knop met witte tekst"
date: 2026-05-05
slug: "sc-1-4-3-die-mooie-oranje-knop-met-witte-tekst"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Die mooie oranje knop met witte tekst — WCAG 1.4.3 Contrast (minimum) (post 4/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - die mooie oranje knop met witte tekst
image: "/images/blog/linkedin-series/sc-1-4-3-die-mooie-oranje-knop-met-witte-tekst.png"
---

Oranje knop. Witte tekst. "Bestel nu!"

Ziet er goed uit. Valt op. Precies wat je wilt van een call-to-action.

Maar oranje (#FF8C00) met wit? Contrast: 2,14:1. Ver onder de 4,5:1 die je nodig hebt.

En oranje is niet de enige boosdoener. Lichtblauw, lichtgroen, geel, koraalrood — veel felle kleuren halen de contrasteis niet met witte tekst.

Het probleem: designers kiezen kleuren op basis van hoe ze eruitzien. Niet op basis van hoe ze contrasteren. En "opvallend" is niet hetzelfde als "leesbaar".

**Drie oplossingen:**

```css
/* Optie 1: donkerdere achtergrondkleur */
.cta { background-color: #C25700; color: #FFFFFF; }
/* contrast: 4,63:1 */

/* Optie 2: donkere tekst op lichte achtergrond */
.cta { background-color: #FF8C00; color: #000000; }
/* contrast: 9,78:1 */

/* Optie 3: grotere tekst (18pt+) zodat 3:1 volstaat */
.cta { background-color: #E07800; color: #FFFFFF; font-size: 24px; }
/* contrast: 3,13:1 — voldoende voor grote tekst */
```

**Tip voor designers:** gebruik de contrastchecker voordat je een kleur voorstelt. Niet erna. Het scheelt discussie met de developer en voorkomt dat je ontwerp na de audit moet worden aangepast.

Welke kleur heeft jouw belangrijkste knop? Check het contrast. Je zou verrast kunnen zijn.
