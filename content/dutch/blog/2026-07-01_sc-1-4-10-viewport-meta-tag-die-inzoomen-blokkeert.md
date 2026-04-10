---
draft: true
title: "Viewport meta-tag die inzoomen blokkeert"
date: 2026-07-01
slug: "sc-1-4-10-viewport-meta-tag-die-inzoomen-blokkeert"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Viewport meta-tag die inzoomen blokkeert — WCAG 1.4.10 Reflow (post 8/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - viewport meta-tag die inzoomen blokkeert
image: "/images/blog/linkedin-series/sc-1-4-10-viewport-meta-tag-die-inzoomen-blokkeert.png"
---

Eén regel code. In de `<head>` van je website. En je bezoeker kan niet meer inzoomen.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

Zie je het? `maximum-scale=1`. Dat zegt tegen de browser: de gebruiker mag niet verder inzoomen dan 100%.

Er is ook een variant: `user-scalable=no`. Nog directer: "Inzoomen is uitgeschakeld."

Iemand die afhankelijk is van zoom om tekst te kunnen lezen, kan jouw website niet gebruiken.

**Waarom staat dit er?**

Meestal vanuit een goed bedoeld motief. Een designer die niet wil dat de layout "kapot gaat" bij inzoomen. Of een developer die een bug oploste op iOS waarbij formuliervelden automatisch inzoomden.

Het probleem is: je lost een visueel probleem op door een hele groep mensen uit te sluiten.

**De fix:**

Verwijder `maximum-scale`, `minimum-scale` en `user-scalable=no`. Dat is alles.

```html
<!-- Niet doen -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

<!-- Wel doen -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**Het goede nieuws:** de meeste moderne mobiele browsers negeren `maximum-scale` en `user-scalable=no` inmiddels. Safari, Chrome en Firefox laten gebruikers altijd inzoomen, ongeacht wat de website zegt.

Maar niet alle browsers doen dat. En het staat nog steeds in je code als een signaal: "Wij hebben niet aan inzoomen gedacht."

Open de DevTools van je website. Zoek naar de viewport meta-tag. Staan er zoombeperkingen in?
