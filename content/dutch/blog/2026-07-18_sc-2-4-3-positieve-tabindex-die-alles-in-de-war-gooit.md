---
draft: true
title: "Positieve tabindex die alles in de war gooit"
date: 2026-07-18
slug: "sc-2-4-3-positieve-tabindex-die-alles-in-de-war-gooit"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Positieve tabindex die alles in de war gooit — WCAG 2.4.3 Focusvolgorde (post 11/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - positieve tabindex die alles in de war gooit
image: "/images/blog/linkedin-series/sc-2-4-3-positieve-tabindex-die-alles-in-de-war-gooit.png"
---

`tabindex="1"`.

Twee woorden. En je hele focusvolgorde is kapot.

Een positieve tabindex haalt een element uit de natuurlijke focusvolgorde. Het krijgt altijd als eerste focus — vóór alle andere elementen op de pagina. Ongeacht waar het in de HTML staat.

```html
<!-- Focus gaat eerst naar Verzenden (1), dan Zoeken (2),
     dan pas de navigatie (0) -->
<nav>
  <a href="/">Home</a>
  <a href="/over-ons">Over ons</a>
</nav>
<main>
  <input tabindex="2" type="text" placeholder="Zoeken">
  <button tabindex="1">Verzenden</button>
</main>
```

De bezoeker drukt op Tab en belandt direct bij "Verzenden" — midden op de pagina. Daarna bij "Zoeken." Daarna pas bij de navigatie. Logica? Nul.

**Waarom doet iemand dit?**

Meestal om een specifiek element "als eerste" focusbaar te maken. Of om de focusvolgorde te "fixen" zonder de HTML aan te passen. Maar positieve tabindex fixt niets — het maakt het erger.

**De regel:** gebruik nooit `tabindex` met een waarde hoger dan 0.

- `tabindex="0"` — voeg toe aan de Tab-volgorde (op de plek waar het in de HTML staat)
- `tabindex="-1"` — programmatisch focusbaar, maar niet via Tab
- `tabindex="1"` of hoger — nooit gebruiken

```html
<!-- Niet doen -->
<button tabindex="1">Verzenden</button>

<!-- Wel doen: fix de HTML-volgorde -->
<input type="text" placeholder="Zoeken">
<button>Verzenden</button>
```

**Test:** zoek in je broncode naar `tabindex` met een positieve waarde. Elk voorkomen is een risico. Verwijder ze allemaal en los de volgorde op in de HTML.

Dit was post 11 van 11 over WCAG 2.4.3 Focusvolgorde. Focus is onzichtbare navigatie. Als de volgorde niet klopt, verdwaalt je bezoeker. Test het zelf: leg je muis weg en tab door je website. Je leert meer in vijf minuten tabben dan in een uur naar je scherm staren.
