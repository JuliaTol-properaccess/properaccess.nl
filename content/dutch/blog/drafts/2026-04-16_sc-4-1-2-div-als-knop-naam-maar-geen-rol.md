---
draft: true
title: "Div als knop: naam maar geen rol"
date: 2026-04-16
slug: "sc-4-1-2-div-als-knop-naam-maar-geen-rol"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "4-1-2"
  - "aria"
  - "naam-rol-waarde"
description: "Div als knop: naam maar geen rol — WCAG 4.1.2 Naam, rol, waarde (post 2/12)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Naam, rol, waarde
  - div als knop: naam maar geen rol
image: "/images/blog/linkedin-series/sc-4-1-2-div-als-knop-naam-maar-geen-rol.png"
---

"Versturen."

Een schermlezer leest de tekst. Maar zegt niet dat het een knop is. Want het is geen knop. Het is een div.

De bezoeker hoort "Versturen" en denkt: dat is een stuk tekst. Niet iets om op te klikken. Niet iets om mee te interacteren.

```html
<!-- Niet doen: div als knop -->
<div class="knop" onclick="verstuur()">Versturen</div>
<!-- Schermlezer: "Versturen" -->

<!-- Wel doen: echt button-element -->
<button onclick="verstuur()">Versturen</button>
<!-- Schermlezer: "Versturen, knop" -->
```

Het verschil: twee woorden. "Versturen" vs. "Versturen, knop." Dat "knop" vertelt de gebruiker dat het interactief is.

**"Maar ik kan toch role="button" toevoegen?"**

Ja. Maar dan moet je ook:
- `tabindex="0"` toevoegen (voor toetsenbordfocus)
- `onkeydown` toevoegen (Enter en Spatie moeten werken)
- De juiste `cursor: pointer` styling
- Focusstijlen toevoegen

Of je gebruikt `<button>` en het werkt allemaal automatisch.

**Dezelfde logica geldt voor:**
- `<div>` als checkbox -> gebruik `<input type="checkbox">`
- `<span>` als link -> gebruik `<a href="...">`
- `<div>` als selectiemenu -> gebruik `<select>`
