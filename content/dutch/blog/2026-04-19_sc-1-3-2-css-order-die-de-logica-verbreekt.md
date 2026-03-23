---
title: "CSS order die de logica verbreekt"
date: 2026-04-19
slug: "sc-1-3-2-css-order-die-de-logica-verbreekt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "CSS order die de logica verbreekt — WCAG 1.3.2 Betekenisvolle volgorde (post 3/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - css order die de logica verbreekt
image: "/images/blog/linkedin-series/sc-1-3-2-css-order-die-de-logica-verbreekt.png"
---

Stap 1: Maak een account.
Stap 2: Kies een template.
Stap 3: Publiceer.

Visueel: logisch. In de HTML: Stap 2, Stap 3, Stap 1.

Hoe dan? CSS `order`.

```css
.stap-2 { order: 2; }
.stap-3 { order: 3; }
.stap-1 { order: 1; }
```

De developer heeft de visuele volgorde hersteld met CSS. Maar de HTML-volgorde — en dus de leesvolgorde voor schermlezers — is nog steeds 2, 3, 1.

Dit gebeurt vaker dan je denkt. Flexbox en CSS Grid maken het verleidelijk makkelijk om elementen visueel te herschikken. `order`, `row-reverse`, `column-reverse`, `grid-row`, `grid-column` — allemaal tools die de visuele volgorde losmaken van de codevolgorde.

**Wanneer is dit een probleem?**

Als de volgorde betekenis heeft. Stappen in een proces. Nummers in een ranglijst. Vragen in een formulier. Dan moet de HTML-volgorde kloppen.

**Wanneer is dit geen probleem?**

Als de volgorde geen betekenis heeft. Een afbeelding die visueel links staat maar in de code na de tekst komt? Geen probleem, zolang de samenhang duidelijk is.

**De fix:** pas de HTML-volgorde aan. Niet de CSS.

**Test:** zoek in je CSS naar `order`, `row-reverse`, `column-reverse`. Controleer bij elk geval of de HTML-volgorde nog logisch is als je de CSS wegdenkt.
