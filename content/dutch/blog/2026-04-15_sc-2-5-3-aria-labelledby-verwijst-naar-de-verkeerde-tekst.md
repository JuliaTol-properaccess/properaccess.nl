---
title: "aria-labelledby verwijst naar de verkeerde tekst"
date: 2026-04-15
slug: "sc-2-5-3-aria-labelledby-verwijst-naar-de-verkeerde-tekst"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-5-3"
  - "label"
  - "spraaksturing"
description: "aria-labelledby verwijst naar de verkeerde tekst — WCAG 2.5.3 Label in naam (post 2/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - aria-labelledby verwijst naar de verkeerde tekst
image: "/images/blog/linkedin-series/sc-2-5-3-aria-labelledby-verwijst-naar-de-verkeerde-tekst.png"
---

Een invoerveld. Zichtbaar label: "E-mailadres." Maar `aria-labelledby` verwijst naar een verborgen element met: "Voer uw elektronische postadres in."

Een schermlezer leest: "Voer uw elektronische postadres in." De gebruiker ziet: "E-mailadres." Spraakbesturing: "Klik op E-mailadres." Geen match.

```html
<!-- Niet doen: aria-labelledby verwijst naar andere tekst -->
<span id="verborgen-label">Voer uw elektronische postadres in</span>
<label>E-mailadres</label>
<input type="email" aria-labelledby="verborgen-label">

<!-- Wel doen: label en toegankelijke naam komen overeen -->
<label for="email">E-mailadres</label>
<input type="email" id="email">
```

**Waarom doet iemand dit?**

Soms om een "betere beschrijving" te bieden voor schermlezers. Goed bedoeld. Maar het resultaat is dat de zichtbare tekst en de toegankelijke naam niet meer overeenkomen.

**De simpelste oplossing:** gebruik gewoon `<label for="">`. Geen aria-labelledby. Geen verborgen teksten. Het zichtbare label is de toegankelijke naam. Klaar.
