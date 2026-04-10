---
title: "Lichtgrijze tekst op een witte achtergrond"
date: 2026-03-24
slug: "sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Lichtgrijze tekst op een witte achtergrond — WCAG 1.4.3 Contrast (minimum) (post 1/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - lichtgrijze tekst op een witte achtergrond
image: "/images/blog/linkedin-series/sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond.png"
---

Contrastverhouding: 2,85:1. Vereist: 4,5:1.

Dit is de meest voorkomende contrastfout op het web. En ik snap waarom. Het ziet er strak uit. Rustig. Modern.

Maar voor iemand met verminderd gezichtsvermogen is het alsof je door matglas probeert te lezen. En dat zijn niet alleen ouderen. 1 op de 3 Nederlanders boven de 65 heeft een visuele beperking. Maar ook bij een scherm in de zon, een goedkope monitor of gewoon een drukke dag kan die grijze tekst het verschil maken tussen lezen en opgeven.

**De fix:**

Eén kleur donkerder. Van #999999 naar #767676. Verschil in design? Minimaal. Verschil in leesbaarheid? Enorm.

```css
/* Niet doen — contrast 2,85:1 */
.subtekst { color: #999999; }

/* Wel doen — contrast 4,64:1 */
.subtekst { color: #767676; }
```

**De vuistregel:** elke grijstint lichter dan #767676 op een witte achtergrond voldoet niet. Onthoud die ene kleurcode en je vangt 80% van de contrastproblemen af.

Pak je website erbij. Zoek op #999, #aaa, #bbb of #ccc in je stylesheet. Grote kans dat daar je contrastproblemen zitten.
