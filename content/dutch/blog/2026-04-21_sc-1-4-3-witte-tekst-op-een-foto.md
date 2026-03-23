---
title: "Witte tekst op een foto"
date: 2026-04-21
slug: "sc-1-4-3-witte-tekst-op-een-foto"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Witte tekst op een foto — WCAG 1.4.3 Contrast (minimum) (post 3/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - witte tekst op een foto
image: "/images/blog/linkedin-series/sc-1-4-3-witte-tekst-op-een-foto.png"
---

"Welkom bij ons"

In wit. Op een foto van een zonnig landschap. Links voldoende contrast. Rechts? Waar de lucht wit is? Onleesbaar.

Tekst op foto's is een gok. Het contrast verschilt per pixel. En bij een dynamische afbeelding — denk aan een slider met verschillende foto's — heb je geen enkele garantie.

Ik zie dit bij bijna elke website met een hero-afbeelding. De designer heeft het getest op de ene foto die bij de lancering werd gebruikt. Maar de marketeer wisselt de foto elke maand. En niemand test het contrast opnieuw.

**Twee oplossingen:**

1. Een semi-transparante overlay achter de tekst:

```css
.hero-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
}
.hero-tekst { color: white; }
```

2. Een tekstvak met een ondoorzichtige achtergrond:

```css
.hero-tekst {
  background-color: #1F2937;
  color: white;
  padding: 0.5rem 1rem;
}
```

Optie 1 is subtieler. Optie 2 is veiliger.

**De test:** kijk niet alleen naar de huidige afbeelding. Vraag jezelf af: werkt dit ook als iemand een lichtere foto uploadt? Als het antwoord "misschien" is, heb je een overlay nodig.
