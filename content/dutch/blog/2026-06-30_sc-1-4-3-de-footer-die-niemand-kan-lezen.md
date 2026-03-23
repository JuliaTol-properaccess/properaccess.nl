---
title: "De footer die niemand kan lezen"
date: 2026-06-30
slug: "sc-1-4-3-de-footer-die-niemand-kan-lezen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "De footer die niemand kan lezen — WCAG 1.4.3 Contrast (minimum) (post 8/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - de footer die niemand kan lezen
image: "/images/blog/linkedin-series/sc-1-4-3-de-footer-die-niemand-kan-lezen.png"
---

Helemaal onderaan je website. Klein lettertype. Lichtgrijs.

Privacybeleid. Algemene voorwaarden. Cookie-instellingen. Copyright 2026.

De tekst die juridisch gezien het belangrijkst is, is visueel het minst zichtbaar.


"Maar het is de footer. Niemand leest die toch?"

Dat argument gaat niet op. De WCAG maakt geen onderscheid tussen "belangrijke" en "onbelangrijke" tekst. Alle tekst moet 4,5:1 halen. En juist kleine tekst heeft meer contrast nodig — de drempel van 3:1 geldt alleen voor grote tekst (18pt+).

**De fix:**

```css
/* Niet doen — contrast 2,32:1 */
.footer { color: #AAAAAA; font-size: 12px; }

/* Wel doen — contrast 7,0:1 */
.footer { color: #595959; font-size: 12px; }
```

Het verschil in uitstraling? Subtiel. Het verschil in leesbaarheid? Enorm.

**Bonuspunt:** als je footer een donkere achtergrond heeft, controleer dan of je lichte tekst voldoende contrasteert met die donkere achtergrond. Witte tekst op donkerblauw? Check het. Lichtgrijs op donkergrijs? Bijna zeker onvoldoende.
