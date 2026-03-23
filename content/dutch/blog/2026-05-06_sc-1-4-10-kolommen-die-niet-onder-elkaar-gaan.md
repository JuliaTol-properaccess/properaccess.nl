---
title: "Kolommen die niet onder elkaar gaan"
date: 2026-05-06
slug: "sc-1-4-10-kolommen-die-niet-onder-elkaar-gaan"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Kolommen die niet onder elkaar gaan — WCAG 1.4.10 Reflow (post 4/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - kolommen die niet onder elkaar gaan
image: "/images/blog/linkedin-series/sc-1-4-10-kolommen-die-niet-onder-elkaar-gaan.png"
---

Sidebar links. Content rechts. Op een groot scherm: perfect.

Bij 400% zoom: twee kolommen gepropt in 320 pixels. De sidebar neemt de helft in beslag. De content wordt zo smal dat je twee woorden per regel leest. Of je moet horizontaal scrollen.

Dit is een van de meest voorkomende reflow-problemen die ik tegenkom bij audits. En het heeft bijna altijd dezelfde oorzaak: `flex-shrink: 0` op de sidebar.

Dat property zegt: "Ik krimp niet. Nooit. Wat er ook gebeurt." Best assertief voor een sidebar.

**De fix:**

Geef de layout `flex-wrap: wrap`, zodat kolommen onder elkaar gaan als er niet genoeg ruimte is.

```css
/* Niet doen */
.layout { display: flex; }
.sidebar { width: 300px; flex-shrink: 0; }

/* Wel doen */
.layout { display: flex; flex-wrap: wrap; }
.sidebar { flex: 1 1 300px; }
.content { flex: 1 1 100%; }
```

Of gebruik een media query als je meer controle wilt:

```css
@media (max-width: 320px) {
  .layout { flex-direction: column; }
}
```

**Test het zelf:** maak je browservenster 320 pixels breed. Staan de kolommen nog naast elkaar? Dan heb je een reflow-probleem.

Dit geldt ook voor kaartgrids, productoverzichten en dashboards. Alles wat naast elkaar staat moet onder elkaar kunnen gaan.
