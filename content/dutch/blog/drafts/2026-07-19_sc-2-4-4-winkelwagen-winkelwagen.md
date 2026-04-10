---
draft: true
title: '"Winkelwagen Winkelwagen"'
date: 2026-07-19
slug: "sc-2-4-4-winkelwagen-winkelwagen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: '"Winkelwagen Winkelwagen" — WCAG 2.4.4 Linkdoel (in context) (post 11/14)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - "winkelwagen winkelwagen"
image: "/images/blog/linkedin-series/sc-2-4-4-winkelwagen-winkelwagen.png"
---

Een link naar de winkelwagen. Met een winkelwagen-icoon met alt="Winkelwagen" en het woord "Winkelwagen" ernaast.

Een schermlezer combineert alles in de link tot de linktekst: "Winkelwagen Winkelwagen."

Dubbelop. Verwarrend. Onnodig.

```html
<!-- Niet doen: dubbeling -->
<a href="/winkelwagen">
  <img src="cart.svg" alt="Winkelwagen">
  Winkelwagen
</a>
<!-- Schermlezer: "Winkelwagen Winkelwagen" -->

<!-- Wel doen: lege alt op het icoon -->
<a href="/winkelwagen">
  <img src="cart.svg" alt="">
  Winkelwagen
</a>
<!-- Schermlezer: "Winkelwagen" -->
```

De truc: als er al tekst in de link staat, is het icoon decoratief. Geef het een lege alt (`alt=""`). Zo telt alleen de zichtbare tekst mee.

**Andere veelvoorkomende dubbelingen:**
- "Home logo Ga naar homepage" — logo alt + tekst
- "Zoeken vergrootglas Zoeken" — icoon alt + knoptekst
- "Download PDF Download het rapport" — icoon + tekst

Check je links: open de accessibility tree in DevTools en bekijk de toegankelijke naam. Staan er woorden dubbel?
