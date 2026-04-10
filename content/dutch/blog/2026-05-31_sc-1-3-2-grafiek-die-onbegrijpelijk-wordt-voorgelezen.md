---
draft: true
title: "Grafiek die onbegrijpelijk wordt voorgelezen"
date: 2026-05-31
slug: "sc-1-3-2-grafiek-die-onbegrijpelijk-wordt-voorgelezen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Grafiek die onbegrijpelijk wordt voorgelezen — WCAG 1.3.2 Betekenisvolle volgorde (post 6/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - grafiek die onbegrijpelijk wordt voorgelezen
image: "/images/blog/linkedin-series/sc-1-3-2-grafiek-die-onbegrijpelijk-wordt-voorgelezen.png"
---

Een mooie staafgrafiek. Omzet per kwartaal. Vier balken. Duidelijke labels.

Een schermlezer leest: "100. 250. 180. 320. Q1. Q2. Q3. Q4. Omzet in duizenden euro's."

Eerst alle getallen. Dan alle labels. Dan de titel. In die volgorde. Want dat is hoe de SVG-elementen in de code staan.

Welk getal hoort bij welk kwartaal? Geen idee.

SVG-grafieken worden voorgelezen in codevolgorde. En die volgorde is zelden logisch voor een luisteraar. De developer bouwt de grafiek van achteren naar voren, of van onder naar boven, afhankelijk van het coordinatensysteem.

**De oplossing is niet om de SVG te herstructureren.** Bij complexe grafieken werkt dat niet.

**De oplossing:** bied een tekstueel alternatief. Een tabel met dezelfde data.

```html
<!-- Grafiek voor visuele gebruikers -->
<figure>
  <svg aria-hidden="true">
    <!-- grafiek -->
  </svg>
  <figcaption>Omzet per kwartaal in 2025</figcaption>
</figure>

<!-- Tabel als alternatief -->
<table>
  <caption>Omzet per kwartaal in 2025 (x €1.000)</caption>
  <tr><th>Kwartaal</th><th>Omzet</th></tr>
  <tr><td>Q1</td><td>100</td></tr>
  <tr><td>Q2</td><td>250</td></tr>
  <tr><td>Q3</td><td>180</td></tr>
  <tr><td>Q4</td><td>320</td></tr>
</table>
```

De `aria-hidden="true"` op de SVG voorkomt dat de schermlezer de onlogische SVG-volgorde voorleest. De tabel geeft dezelfde informatie in een logische structuur.

**Geldt ook voor:** taartdiagrammen, lijngrafieken, dashboards en kaarten.
