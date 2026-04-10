---
draft: true
title: "Groene rij = goedgekeurd, rode rij = afgewezen"
date: 2026-04-20
slug: "sc-1-4-1-groene-rij-goedgekeurd-rode-rij-afgewezen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-1"
  - "kleur"
  - "kleurenblindheid"
description: "Groene rij = goedgekeurd, rode rij = afgewezen — WCAG 1.4.1 Gebruik van kleur (post 3/8)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Gebruik van kleur
  - groene rij = goedgekeurd, rode rij = afgewezen
image: "/images/blog/linkedin-series/sc-1-4-1-groene-rij-goedgekeurd-rode-rij-afgewezen.png"
---

Een tabel met aanvragen. Groen: goedgekeurd. Rood: afgewezen. Oranje: in behandeling.

Jij ziet drie statussen. Iemand met kleurenblindheid ziet drie varianten bruin.

En er staat nergens tekst die de status aangeeft. Alleen kleur.

```html
<!-- Niet doen: alleen kleur -->
<td style="background-color: green;">Goedgekeurd</td>
<td style="background-color: red;">Afgewezen</td>

<!-- Wel doen: kleur + tekst + icoon -->
<td style="background-color: green; color: white;">
  ✓ Goedgekeurd
</td>
<td style="background-color: red; color: white;">
  ✗ Afgewezen
</td>
```

**Het verschil:** de tekst "Goedgekeurd" en "Afgewezen" en de iconen ✓ en ✗ zijn leesbaar ongeacht of je kleuren kunt zien.

**Dit speelt niet alleen bij tabellen.** Denk aan:
- Dashboards met gekleurde kaartjes
- Kalenders met gekleurde evenementen
- Kanban-borden met gekleurde labels
- Beschikbaarheidsindicatoren (groen bolletje = online)

Overal waar kleur de status communiceert, moet er een tweede indicator zijn.

**De test:** zet je scherm op grijstinten. Kun je nog steeds alle statussen onderscheiden?
