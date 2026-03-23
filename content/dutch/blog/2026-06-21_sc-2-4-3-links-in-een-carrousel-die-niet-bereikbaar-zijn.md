---
title: "Links in een carrousel die niet bereikbaar zijn"
date: 2026-06-21
slug: "sc-2-4-3-links-in-een-carrousel-die-niet-bereikbaar-zijn"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Links in een carrousel die niet bereikbaar zijn — WCAG 2.4.3 Focusvolgorde (post 7/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - links in een carrousel die niet bereikbaar zijn
image: "/images/blog/linkedin-series/sc-2-4-3-links-in-een-carrousel-die-niet-bereikbaar-zijn.png"
---

Een carrousel met aanbiedingen. Elke slide heeft een "Bekijk aanbieding"-link. Je tabt door de pagina. Je bereikt de carrousel.

Maar de link in de actieve slide? Niet focusbaar. `tabindex="-1"`.

De developer heeft alle interactieve elementen in de slides een `tabindex="-1"` gegeven. Waarschijnlijk om te voorkomen dat je door onzichtbare slides tabt. Goed bedoeld. Maar nu kun je ook de actieve slide niet bedienen.

**De oplossing:** `tabindex="-1"` alleen op elementen in niet-actieve slides.

```html
<!-- Niet doen: alles onbereikbaar -->
<div class="slide actief">
  <a href="/aanbieding" tabindex="-1">Bekijk aanbieding</a>
</div>

<!-- Wel doen: actieve slide is bereikbaar -->
<div class="slide actief">
  <a href="/aanbieding">Bekijk aanbieding</a>
</div>
<div class="slide inactief">
  <a href="/andere" tabindex="-1">Andere aanbieding</a>
</div>
```

Bij elke slide-wisseling:
1. Verwijder `tabindex="-1"` van elementen in de nieuwe actieve slide
2. Voeg `tabindex="-1"` toe aan elementen in de nieuwe inactieve slide
3. Optioneel: verplaats de focus naar de nieuwe actieve slide

**Waarom is dit belangrijk?**

Omdat de link in de slide vaak de hele reden is dat de carrousel bestaat. "Bekijk aanbieding." "Lees meer." "Bestel nu." Als die link niet bereikbaar is, heeft de carrousel voor toetsenbordgebruikers geen functie.
