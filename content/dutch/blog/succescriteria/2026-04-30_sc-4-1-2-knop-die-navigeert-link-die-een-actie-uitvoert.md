---
title: "Knop die navigeert, link die een actie uitvoert"
date: 2026-04-30
slug: "sc-4-1-2-knop-die-navigeert-link-die-een-actie-uitvoert"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Knop die navigeert, link die een actie uitvoert — WCAG 4.1.2 Naam, rol, waarde (post 3/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - knop die navigeert, link die een actie uitvoert
image: "/images/blog/linkedin-series/sc-4-1-2-knop-die-navigeert-link-die-een-actie-uitvoert.png"
---

"Contact, knop."

Je drukt op Enter. Een nieuwe pagina opent. Maar het was een knop. Knoppen voeren acties uit. Ze navigeren niet.

Of andersom: "Verwijderen, link." Je klikt. Er wordt iets verwijderd. Maar het was een link. Links navigeren. Ze verwijderen niet.

De verkeerde rol geeft misleidende informatie.

```html
<!-- Niet doen: knop die navigeert -->
<button onclick="window.location='/contact'">Contact</button>

<!-- Wel doen: link voor navigatie -->
<a href="/contact">Contact</a>

<!-- Niet doen: link die een actie uitvoert -->
<a href="#" onclick="verwijder()">Verwijderen</a>

<!-- Wel doen: knop voor acties -->
<button onclick="verwijder()">Verwijderen</button>
```

**De vuistregel:**
- **Link** (`<a>`) = gaat ergens naartoe (nieuwe pagina, ander deel van de pagina)
- **Knop** (`<button>`) = doet iets (openen, sluiten, versturen, verwijderen)

**Waarom maakt het uit?**

Schermlezers en toetsenbordnavigatie behandelen links en knoppen anders:
- Links activeer je met Enter
- Knoppen activeer je met Enter én Spatie
- Schermlezers hebben aparte lijsten voor links en knoppen

Als je "Verwijderen" zoekt in de linkslijst en het is een link, vind je het. Maar het hoort daar niet thuis.
