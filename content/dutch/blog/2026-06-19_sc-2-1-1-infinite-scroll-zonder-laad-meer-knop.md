---
title: 'Infinite scroll zonder "laad meer"-knop'
date: 2026-06-19
slug: "sc-2-1-1-infinite-scroll-zonder-laad-meer-knop"
categories:
  -' "wcag-uitgelegd"'
tags:
  -' "wcag"'
  -' "2-1-1"'
  -' "toetsenbord"'
description: 'Infinite scroll zonder "laad meer"-knop — WCAG 2.1.1 Toetsenbord (post 7/9)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - 'infinite scroll zonder "laad meer"-knop'
image: "/images/blog/linkedin-series/sc-2-1-1-infinite-scroll-zonder-laad-meer-knop.png"
---

Je scrolt naar beneden. Meer producten laden. Je scrolt verder. Nog meer producten. Eindeloos.

De footer? Die bestaat in theorie. Maar je komt er nooit.

Voor muisgebruikers is infinite scroll al twijfelachtig qua UX. Voor toetsenbordgebruikers is het een nachtmerrie.

Met een toetsenbord tab je door elk interactief element op de pagina. Bij infinite scroll komen er steeds nieuwe elementen bij. Je tabt door 20 producten. Dan laden er 20 nieuwe. Je tabt door die 20. Er laden er weer 20. De footer, het contactformulier, de sitemap — onbereikbaar.

**De oplossing: een "Laad meer"-knop.**

```html
<!-- Niet doen: alleen infinite scroll -->
<div class="resultaten" onscroll="laadMeer()">
  <!-- eindeloze lijst -->
</div>

<!-- Wel doen: expliciete knop -->
<div class="resultaten">
  <!-- beperkte lijst -->
</div>
<button onclick="laadMeer()">Meer resultaten laden</button>
```

Of nog beter: paginering.

```html
<nav aria-label="Paginering">
  <a href="?pagina=1">1</a>
  <a href="?pagina=2" aria-current="page">2</a>
  <a href="?pagina=3">3</a>
</nav>
```

**Paginering geeft controle.** De bezoeker weet hoeveel resultaten er zijn. Kan naar een specifieke pagina springen. En komt altijd bij de footer.

Infinite scroll geeft de illusie van meer content. Paginering geeft structuur. Voor toegankelijkheid wint structuur altijd.
