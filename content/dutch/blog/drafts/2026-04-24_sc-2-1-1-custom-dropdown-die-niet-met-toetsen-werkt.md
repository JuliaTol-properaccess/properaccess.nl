---
draft: true
title: "Custom dropdown die niet met toetsen werkt"
date: 2026-04-24
slug: "sc-2-1-1-custom-dropdown-die-niet-met-toetsen-werkt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Custom dropdown die niet met toetsen werkt — WCAG 2.1.1 Toetsenbord (post 3/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - custom dropdown die niet met toetsen werkt
image: "/images/blog/linkedin-series/sc-2-1-1-custom-dropdown-die-niet-met-toetsen-werkt.png"
---

Een prachtig gestylede dropdown. Hover erop: de opties verschijnen. Klik op een optie: geselecteerd.

Tab ernaartoe. Druk op Enter. Niets. Druk op Spatie. Niets. Pijltje omlaag. Niets.

De dropdown is een compleet eigen bouwwerk van divs, spans en onclick-handlers. Mooi. Maar onbruikbaar zonder muis.

Een native `<select>`-element doet alles wat je nodig hebt:
- Focusbaar met Tab
- Openen met Enter, Spatie of pijltje omlaag
- Navigeren met pijltjestoetsen
- Sluiten met Escape
- Werkt met schermlezers

```html
<!-- Niet doen: custom dropdown zonder toetsenbord -->
<div class="dropdown" onclick="toggleMenu()">
  <span>Kies een optie</span>
  <ul style="display:none;">
    <li onclick="selecteer('a')">Optie A</li>
    <li onclick="selecteer('b')">Optie B</li>
  </ul>
</div>

<!-- Wel doen: native element -->
<label for="keuze">Kies een optie</label>
<select id="keuze">
  <option value="a">Optie A</option>
  <option value="b">Optie B</option>
</select>
```

**"Maar het native element is lelijk."**

In 2026? Niet meer. Moderne browsers stijlen `<select>` behoorlijk. En met `appearance: none` en wat CSS kun je het bijna alles laten doen.

Wil je toch custom? Dan moet je het ARIA-combobox-patroon volgen. Dat is dagen werk. En het moet in elke browser en met elke schermlezer werken. Weet je zeker dat je dat wilt?
