---
title: "Link met een enkel teken"
date: 2026-07-16
slug: "sc-2-4-4-link-met-een-enkel-teken"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Link met een enkel teken — WCAG 2.4.4 Linkdoel (in context) (post 10/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - link met een enkel teken
image: "/images/blog/linkedin-series/sc-2-4-4-link-met-een-enkel-teken.png"
---

A. A. A.

Drie links. Om de tekstgrootte aan te passen. Klein, normaal, groot.

Een schermlezer hoort: "Link. A. Link. A. Link. A." Drie identieke links. Welke doet wat?

```html
<!-- Niet doen: enkel teken zonder context -->
<a href="?size=small">A</a>
<a href="?size=medium">A</a>
<a href="?size=large">A</a>

<!-- Wel doen: met aria-labels -->
<a href="?size=small" aria-label="Kleine tekstgrootte">A</a>
<a href="?size=medium" aria-label="Normale tekstgrootte">A</a>
<a href="?size=large" aria-label="Grote tekstgrootte">A</a>
```

**Dit speelt ook bij:**
- Social media links met alleen een icoon (geen tekst)
- Sluitknoppen met alleen een "X"
- Navigatiepijlen met alleen < en >
- Sterren-beoordelingen

Elk interactief element met een enkel teken of icoon verdient een beschrijvend label.
