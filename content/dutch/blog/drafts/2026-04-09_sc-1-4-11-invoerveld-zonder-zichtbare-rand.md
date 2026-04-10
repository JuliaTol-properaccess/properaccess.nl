---
draft: true
title: "Invoerveld zonder zichtbare rand"
date: 2026-04-09
slug: "sc-1-4-11-invoerveld-zonder-zichtbare-rand"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-11"
  - "contrast"
  - "ui-componenten"
description: "Invoerveld zonder zichtbare rand — WCAG 1.4.11 Contrast van niet-tekstuele content (post 2/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast van niet-tekstuele content
  - invoerveld zonder zichtbare rand
image: "/images/blog/linkedin-series/sc-1-4-11-invoerveld-zonder-zichtbare-rand.png"
---

Een wit invoerveld op een witte achtergrond. Met een lichtgrijze rand. Heel lichtgrijs. #D9D9D9.

Contrast met de achtergrond: 1,5:1. Vereist: 3:1.

Waar moet je klikken om tekst in te voeren? Je raadt het eerder dan dat je het ziet.

Dit is een trend die ik steeds vaker tegenkom: minimalistische formulieren. Strakke lijnen, subtiele randen, alles bijna onzichtbaar. Design dat eruitziet als "clean" maar functioneel onbruikbaar is voor mensen die de randen niet kunnen onderscheiden.

**De eis:** als er geen placeholdertekst met voldoende contrast (4,5:1) aanwezig is, moet de rand van het invoerveld minimaal 3:1 contrasteren met de achtergrond.

```css
/* Niet doen — contrast 1,5:1 */
.invoerveld {
  border: 1px solid #D9D9D9;
  background: #FFFFFF;
}

/* Wel doen — contrast 3,1:1 */
.invoerveld {
  border: 1px solid #767676;
  background: #FFFFFF;
}
```

**De uitzondering:** heeft het veld een placeholdertekst die minimaal 4,5:1 contrasteert? Dan hoef je de rand niet te meten. De placeholder maakt dan duidelijk waar het veld is.

Maar zodra je begint met typen verdwijnt die placeholder. En dan? Dan heb je alsnog een rand nodig die zichtbaar is.

**Mijn advies:** maak de rand gewoon donker genoeg. Dan ben je altijd veilig, ongeacht placeholders.
