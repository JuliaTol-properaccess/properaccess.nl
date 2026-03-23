---
title: "Tabel nagebouwd met divs"
date: 2026-05-03
slug: "sc-1-3-2-tabel-nagebouwd-met-divs"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Tabel nagebouwd met divs — WCAG 1.3.2 Betekenisvolle volgorde (post 4/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - tabel nagebouwd met divs
image: "/images/blog/linkedin-series/sc-1-3-2-tabel-nagebouwd-met-divs.png"
---

Maandag. Dinsdag. Woensdag. Donderdag. Vrijdag.
09:00 - 17:00. 09:00 - 17:00. 09:00 - 17:00. 09:00 - 17:00. 09:00 - 13:00.

Dat is wat een schermlezer voorleest. Eerst alle dagen. Dan alle tijden. Welke tijd hoort bij welke dag? Gokken.

Het probleem: de tabel is gebouwd met `<div>`-elementen en CSS Grid. Visueel een perfecte tabel. Maar een schermlezer ziet geen tabel — die leest de divs in codevolgorde.

Een echte HTML-tabel (`<table>`, `<tr>`, `<th>`, `<td>`) koppelt de gegevens aan elkaar. Dinsdag + 09:00-17:00 zijn een paar. Een div-constructie verbreekt die koppeling.

```html
<!-- Goed: een echte tabel behoudt de koppeling -->
<table>
  <tr>
    <th>Dag</th>
    <th>Openingstijden</th>
  </tr>
  <tr>
    <td>Maandag</td>
    <td>09:00 - 17:00</td>
  </tr>
</table>
```

**"Maar tabellen zijn moeilijk te stylen."**

Dat was tien jaar geleden waar. Met moderne CSS kun je tabellen vrijwel alles laten doen. En als je echt een grid-layout wilt, voeg dan `role="table"`, `role="row"` en `role="cell"` toe aan je divs. Dan begrijpt een schermlezer alsnog de structuur.

Maar eerlijk? Gebruik gewoon een `<table>`. Het is eenvoudiger, robuuster en je hoeft geen ARIA-rollen te onthouden.

**Test:** gebruik de Web Developer-extensie in Firefox. Ga naar Miscellaneous > Linearize Page. Klopt de koppeling tussen de gegevens nog?
