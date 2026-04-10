---
draft: true
title: "Vaste elementen die het scherm overnemen"
date: 2026-06-03
slug: "sc-1-4-10-vaste-elementen-die-het-scherm-overnemen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Vaste elementen die het scherm overnemen — WCAG 1.4.10 Reflow (post 6/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - vaste elementen die het scherm overnemen
image: "/images/blog/linkedin-series/sc-1-4-10-vaste-elementen-die-het-scherm-overnemen.png"
---

Je opent een webpagina en zoomt in tot 400%.

Onderaan: een cookiemelding. Die is nu niet meer een bescheiden balkje — het neemt de helft van je scherm in beslag.

Bovenaan: een sticky header. Ook die is gegroeid. Samen met de cookiemelding heb je nog een strookje van 3 regels over om de daadwerkelijke content te lezen.

Welkom in de wereld van `position: fixed` bij inzoomen.

Het probleem is niet dat deze elementen er zijn. Het probleem is dat ze een vaste hoogte hebben in pixels. Bij 100% zoom: prima. Bij 400% zoom: ze claimen het hele scherm.

**De fix:**

Geef vaste elementen een maximale hoogte in viewport-eenheden en sta scrollen toe binnen het element.

```css
/* Niet doen */
.cookiemelding {
  position: fixed;
  height: 100px;
}

/* Wel doen */
.cookiemelding {
  position: fixed;
  max-height: 50vh;
  overflow-y: auto;
}
```

Die `50vh` zorgt dat de cookiemelding nooit meer dan de helft van het zichtbare scherm inneemt. En `overflow-y: auto` zorgt dat je door de content van de melding kunt scrollen als die niet past.

**Bonustip:** overweeg of je cookiemelding niet gewoon `position: static` kan zijn bij hoge zoomniveaus. Dan schuift die gewoon mee met de pagina en neemt geen permanent schermruimte in.

Check je website: hoeveel procent van het scherm is nog over voor content bij 400% zoom?
