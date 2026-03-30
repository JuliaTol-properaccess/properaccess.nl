---
title: "Zelfgemaakte focusindicator die onzichtbaar is"
date: 2026-05-07
slug: "sc-1-4-11-zelfgemaakte-focusindicator-die-onzichtbaar-is"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-11"
  - "contrast"
  - "ui-componenten"
description: "Zelfgemaakte focusindicator die onzichtbaar is — WCAG 1.4.11 Contrast van niet-tekstuele content (post 4/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast van niet-tekstuele content
  - zelfgemaakte focusindicator die onzichtbaar is
image: "/images/blog/linkedin-series/sc-1-4-11-zelfgemaakte-focusindicator-die-onzichtbaar-is.png"
---

Tab. Tab. Tab. Waar ben ik?

Je navigeert met je toetsenbord door een website. Elke knop en link zou een zichtbare focus moeten hebben. Maar je ziet... niets. Of een vage lichtblauwe gloed.

Veel developers vervangen de standaard browserfocus door een eigen stijl. Dat mag. Maar dan moet die eigen stijl wel zichtbaar zijn.

Lichtblauw (#99CCFF) als box-shadow op een witte achtergrond: contrast 1,8:1. Dat is minder dan de helft van wat je nodig hebt.

**Belangrijk onderscheid:** de standaard browserfocus hoeft niet te worden getest. Maar zodra je `outline: none` schrijft en een eigen focusstijl toevoegt, is het jouw verantwoordelijkheid.

```css
/* Niet doen — contrast 1,8:1 */
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #99CCFF;
}

/* Wel doen — contrast 4,6:1 */
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #2056A5;
}

/* Best practice: dubbele ring voor lichte én donkere achtergronden */
button:focus-visible {
  outline: 2px solid #2056A5;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px #FFFFFF;
}
```

Die dubbele ring — een donkere outline met een witte schaduw eromheen — werkt op elke achtergrond. Op wit ziet je de donkere ring. Op donker ziet je de witte schaduw. Altijd zichtbaar.

**De meest voorkomende fout die ik tegenkom:** `outline: none` zonder vervanging. De developer verwijdert de standaardfocus omdat die "lelijk" is, maar vergeet een alternatief toe te voegen. Resultaat: geen focus zichtbaar. Voor niemand.
