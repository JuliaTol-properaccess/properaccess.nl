---
title: "JavaScript dat de focus actief verwijdert"
date: 2026-05-26
slug: "sc-2-4-7-javascript-dat-de-focus-actief-verwijdert"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-7"
  - "focus"
description: "JavaScript dat de focus actief verwijdert — WCAG 2.4.7 Focus zichtbaar (post 5/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focus zichtbaar
  - javascript dat de focus actief verwijdert
image: "/images/blog/linkedin-series/sc-2-4-7-javascript-dat-de-focus-actief-verwijdert.png"
---

```javascript
element.addEventListener("focus", function() {
  this.blur();
});
```

Een element krijgt focus. JavaScript verwijdert de focus direct. Het element heeft een fractie van een seconde focus gehad. De gebruiker merkt niets.

Dit is het digitale equivalent van iemand een stoel aanbieden en die dan wegtrekken.

**Waarom doet iemand dit?**

Meestal om de "lelijke" focusindicator te voorkomen bij muisinteractie. De developer wil niet dat een knop een blauwe rand krijgt na het klikken. De oplossing: focus verwijderen na elke klik.

Het bijeffect: toetsenbordgebruikers kunnen het element niet meer gebruiken. De focus wordt direct verwijderd zodra die arriveert.

**De juiste oplossing voor "focus na klik":**

```css
/* :focus-visible toont de indicator alleen bij toetsenbordnavigatie */
button:focus-visible {
  outline: 2px solid #0066CC;
  outline-offset: 2px;
}

/* Geen outline bij muisklik */
button:focus:not(:focus-visible) {
  outline: none;
}
```

Geen JavaScript nodig. Geen blur(). Geen verwijderde focus. De CSS regelt het.

**Check je codebase:** zoek naar `.blur()` en `outline = 'none'` in je JavaScript. Verwijder elk voorkomen dat focusverwijdering forceert.
