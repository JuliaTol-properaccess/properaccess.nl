---
title: "Carrousel-bolletjes: actief = blauw, inactief = grijs"
date: 2026-05-18
slug: "sc-1-4-1-carrousel-bolletjes-actief-blauw-inactief-grijs"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-1"
  - "kleur"
  - "kleurenblindheid"
description: "Carrousel-bolletjes: actief = blauw, inactief = grijs — WCAG 1.4.1 Gebruik van kleur (post 5/8)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Gebruik van kleur
  - carrousel-bolletjes: actief = blauw, inactief = grijs
image: "/images/blog/linkedin-series/sc-1-4-1-carrousel-bolletjes-actief-blauw-inactief-grijs.png"
---

Vijf bolletjes onder een carrousel. Het derde is blauw. De rest grijs.

In grijstinten: vijf grijze bolletjes. Welke is actief? Onmogelijk te zeggen.

```css
/* Niet doen: alleen kleur verschilt */
.dot { background-color: #CCC; width: 12px; height: 12px; border-radius: 50%; }
.dot--actief { background-color: #0066CC; }

/* Wel doen: kleur + formaat + rand */
.dot--actief {
  background-color: #0066CC;
  width: 16px;
  height: 16px;
  border: 2px solid #003D7A;
}
```

**Drie manieren om het actieve bolletje te onderscheiden zonder alleen kleur:**
1. Groter formaat
2. Dikkere rand
3. Andere vorm (vierkant, ster, gevuld vs. leeg)

Het mooiste: combineer grootte en rand. Dan is het verschil in grijstinten direct zichtbaar.

**Eerlijk advies:** als je carrousel vijf bolletjes nodig heeft om navigatie te bieden, is je carrousel misschien te lang. Maar dat is een UX-discussie voor een andere post.
