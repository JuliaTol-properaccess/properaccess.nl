---
draft: true
title: "Toggle-knop zonder status"
date: 2026-07-12
slug: "sc-4-1-2-toggle-knop-zonder-status"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Toggle-knop zonder status — WCAG 4.1.2 Naam, rol, waarde (post 9/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - toggle-knop zonder status
image: "/images/blog/linkedin-series/sc-4-1-2-toggle-knop-zonder-status.png"
---

Een knop: "Donkere modus." Je klikt. De achtergrond wordt donker. Visueel is het duidelijk: donkere modus is aan.

Een schermlezer zegt: "Donkere modus, knop." Je klikt. De schermlezer zegt: "Donkere modus, knop." Niets veranderd. Is het aan of uit? Geen idee.

Het probleem: de knop heeft geen status. Er is geen `aria-pressed` dat aangeeft of de knop is ingedrukt.

```html
<!-- Niet doen: toggle zonder status -->
<button class="toggle active">Donkere modus</button>

<!-- Wel doen: aria-pressed geeft de status door -->
<button aria-pressed="true">Donkere modus</button>
```

Een schermlezer leest nu: "Donkere modus, ingedrukt, knop." Bij het uitschakelen: "Donkere modus, niet ingedrukt, knop."

**Hetzelfde geldt voor zelfgemaakte checkboxen:**

```html
<!-- Niet doen: checkbox zonder status -->
<div role="checkbox" tabindex="0">Onthoud mij</div>

<!-- Wel doen: aria-checked geeft de status door -->
<div role="checkbox" tabindex="0" aria-checked="false">Onthoud mij</div>
```

**En vergeet niet:** de waarde moet meeveranderen bij interactie. `aria-pressed="true"` bij klikken wijzigen naar `aria-pressed="false"`. Anders is de status statisch en dus fout.
