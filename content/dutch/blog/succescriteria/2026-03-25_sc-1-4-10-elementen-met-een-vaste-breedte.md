---
title: "Elementen met een vaste breedte"
date: 2026-03-25
slug: "sc-1-4-10-elementen-met-een-vaste-breedte"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Elementen met een vaste breedte — WCAG 1.4.10 Reflow (post 1/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - elementen met een vaste breedte
image: "/images/blog/linkedin-series/sc-1-4-10-elementen-met-een-vaste-breedte.png"
---

Je zoomt in tot 400%. De tekst wordt groter, de pagina smaller.

Maar die ene container? Die blijft koppig 960 pixels breed. Je moet horizontaal scrollen om de zin uit te lezen. Heen. En weer. En weer.

Dat is wat er gebeurt als je `width: 960px` gebruikt in je CSS. Het element past zich niet aan. Het scherm wel. De bezoeker heeft pech.

En dit gaat niet alleen over mensen met een visuele beperking. Iedereen die op een telefoon een oudere website bezoekt, kent dit probleem.

**De fix is simpel:**

Vervang `width` door `max-width` en voeg `width: 100%` toe. Zo groeit het element mee als er ruimte is, maar krimpt het netjes mee als die er niet is.

```css
/* Niet doen */
.container { width: 960px; }

/* Wel doen */
.container { max-width: 960px; width: 100%; }
```

**De test is nog simpeler:**

Maak je browservenster 320 pixels breed. Moet je horizontaal scrollen? Dan is er werk aan de winkel.

Dit is WCAG 1.4.10 Reflow. De eis dat content bruikbaar blijft bij 400% zoom — zonder horizontaal te scrollen.

Post 1 van 10 over de meest voorkomende reflow-problemen.
