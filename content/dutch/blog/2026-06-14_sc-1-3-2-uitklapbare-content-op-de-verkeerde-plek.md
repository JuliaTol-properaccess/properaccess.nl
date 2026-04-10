---
draft: true
title: "Uitklapbare content op de verkeerde plek"
date: 2026-06-14
slug: "sc-1-3-2-uitklapbare-content-op-de-verkeerde-plek"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Uitklapbare content op de verkeerde plek — WCAG 1.3.2 Betekenisvolle volgorde (post 7/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - uitklapbare content op de verkeerde plek
image: "/images/blog/linkedin-series/sc-1-3-2-uitklapbare-content-op-de-verkeerde-plek.png"
---

Je klikt op "Veelgestelde vragen". Een accordion opent. Het antwoord verschijnt.

Maar waar verschijnt het?

Als het antwoord direct onder de knop staat in de HTML: perfect. De schermlezer leest de knop, dan het antwoord.

Als het antwoord ergens anders in de HTML staat — bijvoorbeeld helemaal onderaan de pagina, omdat het makkelijker was om te programmeren — dan leest de schermlezer het antwoord op een totaal onverwacht moment.

Dit speelt bij:
- Accordions waar de panelen los staan van de knoppen
- Tabs waar de content ver van de tablijst staat
- Tooltips die als los element onderaan de body worden ingevoegd
- Dropdownmenu's die in een apart element worden gerenderd

**De regel:** content die verschijnt na interactie, staat direct na het element dat de interactie triggert.

```html
<!-- Goed: content direct na de knop -->
<div class="accordion">
  <h3>
    <button aria-expanded="true" aria-controls="paneel-1">
      Veelgestelde vragen
    </button>
  </h3>
  <div id="paneel-1">
    <p>Het antwoord staat direct na de knop.</p>
  </div>
</div>
```

**Waar het vaak misgaat:** JavaScript-frameworks die dynamische content in een "portal" renderen — een apart element buiten de oorspronkelijke component. React portals, Vue teleport, Angular CDK overlay. Ze plaatsen de content aan het einde van de `<body>`. Visueel op de juiste plek, in de DOM ver weg.

Voor modals en dialoogvensters is dat prima (die nemen toch het hele scherm over). Voor tooltips, dropdowns en accordions niet.
