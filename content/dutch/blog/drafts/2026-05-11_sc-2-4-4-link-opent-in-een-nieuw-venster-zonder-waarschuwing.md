---
draft: true
title: "Link opent in een nieuw venster zonder waarschuwing"
date: 2026-05-11
slug: "sc-2-4-4-link-opent-in-een-nieuw-venster-zonder-waarschuwing"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Link opent in een nieuw venster zonder waarschuwing — WCAG 2.4.4 Linkdoel (in context) (post 4/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - link opent in een nieuw venster zonder waarschuwing
image: "/images/blog/linkedin-series/sc-2-4-4-link-opent-in-een-nieuw-venster-zonder-waarschuwing.png"
---

Je klikt op een link. Een nieuw tabblad opent. Je drukt op de terugknop. Niets. Want je zit in een nieuw tabblad. Er is geen geschiedenis.

Voor ziende muisgebruikers: mildly annoying. Voor toetsenbordgebruikers en schermlezergebruikers: verwarrend. De context is weg. Het vorige tabblad is vergeten.

En het icoontje dat aangeeft dat de link extern is? Dat is `aria-hidden="true"`. De schermlezer ziet het niet.

```html
<!-- Niet doen: geen indicatie -->
<a href="https://extern.nl" target="_blank">
  <svg aria-hidden="true" class="icoon-extern"></svg>
  Lees het artikel
</a>

<!-- Wel doen: tekst die het aangeeft -->
<a href="https://extern.nl" target="_blank">
  Lees het artikel (opent in nieuw venster)
</a>

<!-- Of: visueel verborgen tekst voor schermlezers -->
<a href="https://extern.nl" target="_blank">
  Lees het artikel
  <span class="sr-only">(opent in nieuw venster)</span>
  <svg aria-hidden="true" class="icoon-extern"></svg>
</a>
```

**Overigens:** overweeg of `target="_blank"` echt nodig is. In de meeste gevallen wil de bezoeker zelf bepalen of een link in een nieuw tabblad opent (Ctrl+klik of rechtermuisknop). Forceer het niet.
