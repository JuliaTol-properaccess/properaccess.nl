---
title: "Actieve pagina in het menu: alleen een andere kleur"
date: 2026-05-04
slug: "sc-1-4-1-actieve-pagina-in-het-menu-alleen-een-andere-kleur"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-1"
  - "kleur"
  - "kleurenblindheid"
description: "Actieve pagina in het menu: alleen een andere kleur — WCAG 1.4.1 Gebruik van kleur (post 4/8)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Gebruik van kleur
  - actieve pagina in het menu: alleen een andere kleur
image: "/images/blog/linkedin-series/sc-1-4-1-actieve-pagina-in-het-menu-alleen-een-andere-kleur.png"
---

Home. Over ons. Diensten. Contact.

Je bent op "Diensten." Hoe weet je dat? De tekst is blauw in plaats van zwart.

Alleen blauw. Geen onderstreping. Geen vetgedrukt. Geen achtergrondkleur. Geen border-bottom.

Voor iemand met kleurenblindheid zijn alle vier de menulinks identiek.

```css
/* Niet doen: alleen kleur */
.nav-link--actief { color: #0066CC; }

/* Wel doen: kleur + visueel kenmerk */
.nav-link--actief {
  color: #0066CC;
  border-bottom: 3px solid currentColor;
  font-weight: bold;
}
```

**Drie opties om de actieve pagina aan te geven zonder alleen kleur:**
1. Onderstreping of border-bottom
2. Vetgedrukt lettertype
3. Achtergrondkleur (met voldoende contrast)

Combineer er twee voor het beste resultaat.

**Vergeet ook niet:** `aria-current="page"` op de actieve link. Dat vertelt schermlezers welke pagina actief is.

```html
<a href="/diensten" aria-current="page">Diensten</a>
```
