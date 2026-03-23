---
title: "Klikbare div in plaats van een button"
date: 2026-03-27
slug: "sc-2-1-1-klikbare-div-in-plaats-van-een-button"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Klikbare div in plaats van een button — WCAG 2.1.1 Toetsenbord (post 1/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - klikbare div in plaats van een button
image: "/images/blog/linkedin-series/sc-2-1-1-klikbare-div-in-plaats-van-een-button.png"
---

Een div met een onclick. Ziet eruit als een knop. Doet iets als je erop klikt.

Maar druk op Tab. Niets. De div krijgt geen focus. Druk op Enter. Niets. De div reageert niet op het toetsenbord.

Voor een muisgebruiker: een knop. Voor een toetsenbordgebruiker: onzichtbaar.

Dit is de meest voorkomende toetsenbordfout die ik tegenkom bij audits. En het is zo makkelijk te voorkomen.

```html
<!-- Niet doen -->
<div class="knop" onclick="verstuur()">Versturen</div>

<!-- Wel doen -->
<button type="button" onclick="verstuur()">Versturen</button>
```

Een `<button>` is standaard focusbaar, activeerbaar met Enter en Spatie, en heeft de juiste rol voor schermlezers. Gratis. Zonder extra code.

**"Maar ik kan toch tabindex en een keydown-handler toevoegen?"**

Ja. En role="button". En aria-pressed. En de juiste styling voor :focus-visible. En testen of Enter en Spatie allebei werken. Of je gebruikt gewoon `<button>`.

**De vuistregel:**
- Doet het iets op de pagina? -> `<button>`
- Gaat het ergens naartoe? -> `<a href="...">`
- Nooit een `<div>` of `<span>` voor interactie
