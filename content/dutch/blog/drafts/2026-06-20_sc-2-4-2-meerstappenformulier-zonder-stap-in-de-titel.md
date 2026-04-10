---
draft: true
title: "Meerstappenformulier zonder stap in de titel"
date: 2026-06-20
slug: "sc-2-4-2-meerstappenformulier-zonder-stap-in-de-titel"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: "Meerstappenformulier zonder stap in de titel — WCAG 2.4.2 Paginatitel (post 7/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - meerstappenformulier zonder stap in de titel
image: "/images/blog/linkedin-series/sc-2-4-2-meerstappenformulier-zonder-stap-in-de-titel.png"
---

Stap 1. Stap 2. Stap 3. Stap 4.

Je bent ergens halverwege. Je sluit per ongeluk het tabblad. Je opent het opnieuw. De titel: "Verhuizing doorgeven - Gemeente Utrecht."

Welke stap was je? Geen idee.

Of je gebruikt een schermlezer. Bij elke stap hoor je dezelfde titel. Je hebt op "Volgende" gedrukt. Is de pagina veranderd? Dezelfde titel. Heb je de stap succesvol afgerond? Dezelfde titel. Ben je überhaupt op een andere pagina? Dezelfde titel.

```html
<!-- Niet doen: geen stap in de titel -->
<title>Verhuizing doorgeven - Gemeente Utrecht</title>

<!-- Wel doen: stap en totaal in de titel -->
<title>Stap 2 van 4: Nieuw adres - Verhuizing doorgeven - Gemeente Utrecht</title>
```

**Het patroon:** `Stap [nummer] van [totaal]: [onderwerp] - [formuliernaam] - [sitenaam]`

De stap is de meest specifieke informatie. Die staat vooraan. De sitenaam achteraan.

**Waar gaat dit mis?**

Bij meerstappenformulieren die als SPA zijn gebouwd. De URL verandert soms wel (stap-1, stap-2), maar de title wordt niet bijgewerkt. Of bij formulieren die alles op één pagina laden en secties tonen/verbergen — dan verandert er technisch niets aan de pagina.

Dit was post 7 van 7 over WCAG 2.4.2 Paginatitel. Het klinkt als een klein detail. Maar de paginatitel is het eerste wat iemand hoort of ziet. Het is je eerste kans om te communiceren waar iemand is. Gebruik die kans.
