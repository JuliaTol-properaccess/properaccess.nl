---
title: "Mouseover zonder focus-equivalent"
date: 2026-04-10
slug: "sc-2-1-1-mouseover-zonder-focus-equivalent"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Mouseover zonder focus-equivalent — WCAG 2.1.1 Toetsenbord (post 2/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - mouseover zonder focus-equivalent
image: "/images/blog/linkedin-series/sc-2-1-1-mouseover-zonder-focus-equivalent.png"
---

Je hovert over een tekst. Een tooltip verschijnt. Handige extra informatie.

Je navigeert met het toetsenbord naar datzelfde element. Tab. Focus. En... niets. Geen tooltip.

De informatie bestaat alleen voor muisgebruikers.

Dit gaat niet alleen over tooltips. Denk aan:
- Uitklapmenu's die openen bij hover
- Extra details die verschijnen als je erover gaat
- Afbeeldingen die veranderen bij mouseover
- Previews die alleen bij hover zichtbaar zijn

**Het probleem:** de developer heeft `mouseover` en `mouseout` gebruikt. Maar niet `focus` en `blur`.

```javascript
// Niet doen: alleen muis
element.addEventListener("mouseover", toonTooltip);
element.addEventListener("mouseout", verbergTooltip);

// Wel doen: muis én toetsenbord
element.addEventListener("mouseover", toonTooltip);
element.addEventListener("focus", toonTooltip);
element.addEventListener("mouseout", verbergTooltip);
element.addEventListener("blur", verbergTooltip);
```

Of in CSS:

```css
/* Niet doen */
.trigger:hover .tooltip { display: block; }

/* Wel doen */
.trigger:hover .tooltip,
.trigger:focus .tooltip,
.trigger:focus-within .tooltip { display: block; }
```

**De check:** zoek in je codebase naar `mouseover`, `mouseout`, `mouseenter`, `mouseleave` en `:hover`. Heeft elk ervan een toetsenbordequivalent?
