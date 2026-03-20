---
title: 'Zichtbaar "Submit", aria-label "Verzenden"'
date: 2026-05-27
slug: "sc-2-5-3-zichtbaar-submit-aria-label-verzenden"
categories:
  -' "wcag-uitgelegd"'
tags:
  -' "wcag"'
  -' "2-5-3"'
  -' "label"'
  -' "spraaksturing"'
description: 'Zichtbaar "Submit", aria-label "Verzenden" — WCAG 2.5.3 Label in naam (post 5/7)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Label in naam
  - 'zichtbaar "submit", aria-label "verzenden"'
image: "/images/blog/linkedin-series/sc-2-5-3-zichtbaar-submit-aria-label-verzenden.png"
---

Een Nederlandstalige website. Een knop. Op het scherm staat "Submit." Het aria-label zegt "Verzenden."

De gebruiker ziet "Submit." Zegt: "Klik op Submit." De toegankelijke naam is "Verzenden." Geen match.

Of andersom: de gebruiker ziet "Submit" en probeert "Klik op Verzenden" (want de website is Nederlands). De zichtbare tekst is "Submit." Ook geen match.

```html
<!-- Niet doen: zichtbaar Engels, aria-label Nederlands -->
<button aria-label="Verzenden">Submit</button>

<!-- Wel doen: alles in dezelfde taal -->
<button>Verzenden</button>

<!-- Of: als het Engels moet blijven -->
<button aria-label="Submit form">Submit</button>
```

**De les:** de zichtbare tekst en de toegankelijke naam moeten in dezelfde taal zijn. En de zichtbare tekst moet onderdeel zijn van de toegankelijke naam.

Het simpelst: gebruik geen aria-label. Dan is de zichtbare tekst automatisch de toegankelijke naam. Geen mismatch mogelijk.
