---
draft: true
title: "Focusrand die alleen door kleur werkt"
date: 2026-06-01
slug: "sc-1-4-1-focusrand-die-alleen-door-kleur-werkt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-1"
  - "kleur"
  - "kleurenblindheid"
description: "Focusrand die alleen door kleur werkt — WCAG 1.4.1 Gebruik van kleur (post 6/8)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Gebruik van kleur
  - focusrand die alleen door kleur werkt
image: "/images/blog/linkedin-series/sc-1-4-1-focusrand-die-alleen-door-kleur-werkt.png"
---

Je navigeert met het toetsenbord. Een knop krijgt focus. De focusrand is lichtblauw (#99CCFF) op een witte achtergrond.

Contrast: minder dan 3:1. Dat betekent dat de focusrand alleen door kleur te herkennen is — niet door contrast. En als kleur het enige middel is, voldoe je niet aan 1.4.1.

```css
/* Niet doen: focusrand met onvoldoende contrast */
button:focus-visible {
  outline: 2px solid #99CCFF;
}

/* Wel doen: contrastrijke focusrand */
button:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}
```

**Het onderscheid:** als je focusrand 3:1 of meer contrasteert met de achtergrond, is het contrast — niet kleur. Dan is 1.4.1 niet van toepassing (maar 1.4.11 wel, die eist minimaal 3:1).

Onder 3:1? Dan is het kleurgebruik en heb je een tweede visueel kenmerk nodig.

**De makkelijkste fix:** maak de focusrand donker genoeg (3:1+) en dik genoeg (minimaal 2px). Dan voldoe je aan zowel 1.4.1 als 1.4.11 in één keer.
