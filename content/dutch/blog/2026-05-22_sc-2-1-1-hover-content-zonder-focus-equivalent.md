---
draft: true
title: "Hover-content zonder focus-equivalent"
date: 2026-05-22
slug: "sc-2-1-1-hover-content-zonder-focus-equivalent"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-1-1"
  - "toetsenbord"
description: "Hover-content zonder focus-equivalent — WCAG 2.1.1 Toetsenbord (post 5/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Toetsenbord
  - hover-content zonder focus-equivalent
image: "/images/blog/linkedin-series/sc-2-1-1-hover-content-zonder-focus-equivalent.png"
---

Hover over het producticoon. Een popup verschijnt met specificaties, prijs en een "Bekijk product"-link.

Tab naar het producticoon. Niets. Geen popup. Geen specificaties. Geen link.

Die "Bekijk product"-link bestaat alleen in een wereld met een muis.

Dit is een probleem dat ik vooral zie bij:
- Productkaarten in webshops (hover voor details)
- Navigatiemenu's (hover om submenu te openen)
- Afbeeldingsgalerijen (hover voor zoom of caption)
- Dashboards (hover voor datapunt-details)

Het probleem zit meestal in de CSS:

```css
/* Alleen hover — toetsenbord ziet dit niet */
.kaart:hover .details { display: block; }
```

**De fix — voeg focus-within toe:**

```css
.kaart:hover .details,
.kaart:focus-within .details {
  display: block;
}
```

`focus-within` is de sleutel. Het activeert de stijl als een element binnen de kaart focus heeft. Dus als iemand tabt naar de "Bekijk product"-link in de popup, blijft de popup zichtbaar.

**Maar:** als de popup niet-interactieve content bevat (alleen tekst), moet je het element zelf focusbaar maken:

```html
<div class="kaart" tabindex="0">
  <img src="product.jpg" alt="Rode sneakers">
  <div class="details">
    <p>Maat 36-45. Vanaf 89 euro.</p>
  </div>
</div>
```

Test elke interactie op je website: als het werkt met hover, moet het ook werken met focus.
