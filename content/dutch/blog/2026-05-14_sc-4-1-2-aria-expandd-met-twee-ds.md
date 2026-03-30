---
title: "aria-expandd (met twee d's)"
date: 2026-05-14
slug: "sc-4-1-2-aria-expandd-met-twee-ds"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "aria-expandd (met twee d's) — WCAG 4.1.2 Naam, rol, waarde (post 4/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - aria-expandd (met twee d's)
image: "/images/blog/linkedin-series/sc-4-1-2-aria-expandd-met-twee-ds.png"
---

Een menuknop. `aria-expanded` om aan te geven of het menu open is. Maar de developer typte `aria-expandd`. Met twee d's.

De browser herkent het attribuut niet. Negeert het. De schermlezer weet niet of het menu open of dicht is.

En niemand merkt het. Want visueel werkt alles. Alleen de toegankelijke informatie is weg.

```html
<!-- Niet doen: typo in het attribuut -->
<button aria-expandd="true">Menu</button>
<div role="nagivation">...</div>

<!-- Wel doen: correct gespeld -->
<button aria-expanded="true">Menu</button>
<div role="navigation">...</div>
```

**Andere veelvoorkomende typo's:**
- `aria-lable` (moet: `aria-label`)
- `aria-decribedby` (moet: `aria-describedby`)
- `role="buton"` (moet: `role="button"`)
- `aria-haspoup` (moet: `aria-haspopup`)

En ongeldige waarden:
```html
<!-- Niet doen: ongeldige waarde -->
<button aria-expanded="yes">Menu</button>

<!-- Wel doen: geldige waarde -->
<button aria-expanded="true">Menu</button>
```

**Hoe vind je dit?** axe DevTools en Lighthouse detecteren ongeldige ARIA-attributen automatisch. Draai ze bij elke build.
