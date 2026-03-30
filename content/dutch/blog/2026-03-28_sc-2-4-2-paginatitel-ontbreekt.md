---
title: "Paginatitel ontbreekt"
date: 2026-03-28
slug: "sc-2-4-2-paginatitel-ontbreekt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: "Paginatitel ontbreekt — WCAG 2.4.2 Paginatitel (post 1/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - paginatitel ontbreekt
image: "/images/blog/linkedin-series/sc-2-4-2-paginatitel-ontbreekt.png"
---

Je opent een pagina. De schermlezer zegt: "https colon slash slash w-w-w dot example dot com slash pagina dash 3-b dot html."

Dat is je paginatitel. Of eigenlijk: je hebt geen paginatitel. De browser valt terug op de URL.

Het `<title>`-element in de `<head>` van je HTML is het eerste wat een schermlezergebruiker hoort bij het openen van een pagina. Het staat in elk tabblad. In je bladwijzers. In zoekresultaten.

En op deze pagina? Niets. Of erger: "Untitled Document."

```html
<!-- Niet doen -->
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
  <!-- Geen title-element -->
</head>

<!-- Niet doen -->
<title></title>

<!-- Wel doen -->
<title>Contact - Gemeente Utrecht</title>
```

**Hoe vaak komt dit voor?**

Vaker dan je denkt. Vooral bij:
- Pagina's die gegenereerd worden door een framework maar waar de titellogica ontbreekt
- Landingspagina's die snel zijn gebouwd zonder aandacht voor de head
- Iframes zonder eigen title
- PDF's die in de browser worden geopend

**De test:** kijk naar het tabblad in je browser. Staat er een beschrijvende titel? Of een URL? Of "Untitled Document"?

Elke pagina verdient een naam.
