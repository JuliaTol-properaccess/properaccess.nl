---
title: "Afbeelding als link zonder beschrijvend alt"
date: 2026-04-27
slug: "sc-2-4-4-afbeelding-als-link-zonder-beschrijvend-alt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Afbeelding als link zonder beschrijvend alt — WCAG 2.4.4 Linkdoel (in context) (post 3/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - afbeelding als link zonder beschrijvend alt
image: "/images/blog/linkedin-series/sc-2-4-4-afbeelding-als-link-zonder-beschrijvend-alt.png"
---

Een winkelwagen-icoon. Klik erop en je gaat naar je winkelwagen. Logisch.

Een schermlezer zegt: "Link. cart-icon-dot-s-v-g."

Of erger: "Link." Zonder verdere informatie.

Als een link alleen een afbeelding bevat, is de alt-tekst van die afbeelding de linktekst. Geen alt-tekst = geen linktekst = onbruikbaar.

```html
<!-- Niet doen: geen alt -->
<a href="/winkelwagen">
  <img src="cart-icon.svg">
</a>

<!-- Niet doen: alt beschrijft de afbeelding -->
<a href="/winkelwagen">
  <img src="cart-icon.svg" alt="Icoon van een winkelwagen">
</a>

<!-- Wel doen: alt beschrijft het doel -->
<a href="/winkelwagen">
  <img src="cart-icon.svg" alt="Winkelwagen">
</a>
```

**Het verschil:** "Icoon van een winkelwagen" beschrijft wat je ziet. "Winkelwagen" beschrijft waar je naartoe gaat. Bij een link wil je het doel weten, niet het uiterlijk.

**Dit geldt ook voor:** logo's die naar de homepage linken, social media iconen, en productafbeeldingen die naar een productpagina linken.
