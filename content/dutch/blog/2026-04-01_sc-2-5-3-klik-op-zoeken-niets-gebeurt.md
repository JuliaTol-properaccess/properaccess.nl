---
title: '"Klik op Zoeken." Niets gebeurt.'
date: 2026-04-01
slug: "sc-2-5-3-klik-op-zoeken-niets-gebeurt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-5-3"
  - "label"
  - "spraaksturing"
description: '"Klik op Zoeken." Niets gebeurt. — WCAG 2.5.3 Label in naam (post 1/7)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - "klik op zoeken. niets gebeurt."
image: "/images/blog/linkedin-series/sc-2-5-3-klik-op-zoeken-niets-gebeurt.png"
---

Je gebruikt spraakbesturing. Je ziet een knop met "Zoeken" erop. Je zegt: "Klik op Zoeken."

Niets.

De knop heeft een aria-label: "Doorzoek de volledige website." De spraakbesturing zoekt naar een element met "Zoeken" in de naam. Maar de toegankelijke naam is "Doorzoek de volledige website." Geen match.

```html
<!-- Niet doen: aria-label wijkt af van zichtbare tekst -->
<button aria-label="Doorzoek de volledige website">Zoeken</button>

<!-- Wel doen: aria-label bevat de zichtbare tekst -->
<button aria-label="Zoeken op de website">Zoeken</button>

<!-- Best: geen aria-label nodig -->
<button>Zoeken</button>
```

**De regel:** als een element zichtbare tekst heeft, moet die tekst onderdeel zijn van de toegankelijke naam. Liefst aan het begin.

**Wie gebruikt spraakbesturing?**
- Mensen met een motorische beperking die geen muis of toetsenbord kunnen bedienen
- Mensen met RSI die hun handen willen ontlasten
- Mensen die multitasken

Ze zien een knop, zeggen wat er staat, en verwachten dat het werkt. Als de naam niet overeenkomt, werkt het niet.
