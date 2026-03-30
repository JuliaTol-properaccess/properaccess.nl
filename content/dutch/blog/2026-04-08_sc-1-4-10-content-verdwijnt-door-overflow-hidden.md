---
title: "Content verdwijnt door overflow hidden"
date: 2026-04-08
slug: "sc-1-4-10-content-verdwijnt-door-overflow-hidden"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Content verdwijnt door overflow hidden — WCAG 1.4.10 Reflow (post 2/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - content verdwijnt door overflow hidden
image: "/images/blog/linkedin-series/sc-1-4-10-content-verdwijnt-door-overflow-hidden.png"
---

Je zoomt in op een webpagina. De tekst wordt groter. En dan — halverwege een zin — houdt de tekst op. Alsof iemand de rest heeft afgeknipt.

Geen scrollbar. Geen indicatie dat er meer tekst is. Het is gewoon weg.

De boosdoener: `overflow: hidden`.

Dit CSS-property is bedoeld om content die buiten een container valt te verbergen. Handig voor decoratieve effecten. Maar dodelijk voor leesbaarheid bij inzoomen.

Bij 100% zoom zie je het probleem niet. Bij 200% misschien ook niet. Maar bij 400% valt de tekst buiten de container en verdwijnt die stilletjes uit beeld.

**Twee opties:**

1. Laat de container meegroeien: `overflow: visible`
2. Sta scrollen toe als het niet anders kan: `overflow-x: auto`

```css
/* Niet doen */
.container { overflow: hidden; }

/* Wel doen — container groeit mee */
.container { overflow: visible; }

/* Of — scrollbar als fallback */
.container { overflow-x: auto; }
```

**Hoe vind je dit?**

Zoom in tot 400% en lees de pagina door. Verdwijnt er tekst? Open de DevTools, inspecteer de container en check de overflow-waarde.

Het vervelende aan dit probleem: je vindt het alleen als je test. Geen geautomatiseerde tool pikt dit op.
