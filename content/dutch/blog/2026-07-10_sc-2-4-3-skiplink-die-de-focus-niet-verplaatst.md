---
title: "Skiplink die de focus niet verplaatst"
date: 2026-07-10
slug: "sc-2-4-3-skiplink-die-de-focus-niet-verplaatst"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-3"
  - "focus"
  - "tabvolgorde"
description: "Skiplink die de focus niet verplaatst — WCAG 2.4.3 Focusvolgorde (post 9/11)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Focusvolgorde
  - skiplink die de focus niet verplaatst
image: "/images/blog/linkedin-series/sc-2-4-3-skiplink-die-de-focus-niet-verplaatst.png"
---

"Ga naar inhoud." Je drukt op Enter. De pagina scrollt naar de content. Mooi.

Je drukt op Tab. En je bent terug in het navigatiemenu.

De skiplink heeft gescrolled, maar de focus niet verplaatst. Visueel ben je bij de content. De focus zit nog bovenaan. De volgende Tab gaat naar het eerste element na de skiplink — het menu.

**Waarom gebeurt dit?**

Omdat het doel van de skiplink (`<main id="main">`) niet focusbaar is. Een `<main>`-element krijgt standaard geen focus. De browser scrollt er wel naartoe, maar de focus blijft waar die was.

```html
<!-- Niet doen: doel niet focusbaar -->
<a href="#main">Ga naar inhoud</a>
<main id="main">
  <h1>Paginatitel</h1>
</main>

<!-- Wel doen: doel focusbaar met tabindex="-1" -->
<a href="#main">Ga naar inhoud</a>
<main id="main" tabindex="-1">
  <h1>Paginatitel</h1>
</main>
```

`tabindex="-1"` maakt het element focusbaar via de skiplink (programmatisch), maar voegt het niet toe aan de Tab-volgorde. Precies wat je wilt.

**Let ook op:** het `id` in het doel moet overeenkomen met het `href` in de skiplink. Klinkt logisch. Maar ik zie regelmatig `href="#content"` met `id="main"` of andersom.

**Test:** druk op Tab om de skiplink te bereiken. Activeer met Enter. Druk nogmaals op Tab. Zit je in de content? Of in het menu?
