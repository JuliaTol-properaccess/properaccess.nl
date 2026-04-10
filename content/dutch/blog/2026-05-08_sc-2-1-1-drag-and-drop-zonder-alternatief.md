---
draft: true
title: "Drag-and-drop zonder alternatief"
date: 2026-05-08
slug: "sc-2-1-1-drag-and-drop-zonder-alternatief"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Drag-and-drop zonder alternatief — WCAG 2.1.1 Toetsenbord (post 4/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - drag-and-drop zonder alternatief
image: "/images/blog/linkedin-series/sc-2-1-1-drag-and-drop-zonder-alternatief.png"
---

Sleep item 1 naar positie 3. Simpel. Met een muis.

Met een toetsenbord? Onmogelijk. Er is geen alternatief.

Drag-and-drop is niet uitgezonderd van de toetsenbordeis. Veel developers denken van wel. "Het gaat om het pad van de muis, dat kan niet met een toetsenbord." Maar dat klopt niet.

De uitzondering geldt alleen als het pad zelf de functionaliteit is — zoals vrij tekenen of een handtekening zetten. Bij drag-and-drop om te sorteren gaat het om het eindresultaat: item 1 staat nu op positie 3. En dat eindresultaat kun je prima met een toetsenbord bereiken.

**De simpelste oplossing: knoppen.**

```html
<!-- Niet doen: alleen drag-and-drop -->
<ul>
  <li draggable="true">Item 1</li>
  <li draggable="true">Item 2</li>
</ul>

<!-- Wel doen: met toetsenbordknoppen -->
<ul>
  <li>
    Item 1
    <button aria-label="Item 1 omhoog">&#9650;</button>
    <button aria-label="Item 1 omlaag">&#9660;</button>
  </li>
  <li>
    Item 2
    <button aria-label="Item 2 omhoog">&#9650;</button>
    <button aria-label="Item 2 omlaag">&#9660;</button>
  </li>
</ul>
```

**Dit geldt ook voor:**
- Kanban-borden (sleep kaartjes tussen kolommen)
- Afbeeldingsgalerijen (sleep om te herordenen)
- Bestandsupload zones (sleep bestanden)
- Puzzels en interactieve oefeningen

Bij bestandsupload: een `<input type="file">` is het toetsenbordalternatief. Die werkt altijd.
