---
draft: true
title: "Foutmelding en zoekresultaat ontbreken in de titel"
date: 2026-06-06
slug: "sc-2-4-2-foutmelding-en-zoekresultaat-ontbreken-in-de-titel"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: "Foutmelding en zoekresultaat ontbreken in de titel — WCAG 2.4.2 Paginatitel (post 6/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - foutmelding en zoekresultaat ontbreken in de titel
image: "/images/blog/linkedin-series/sc-2-4-2-foutmelding-en-zoekresultaat-ontbreken-in-de-titel.png"
---

Je vult een formulier in. Twee velden fout. Je drukt op Versturen. De pagina herlaadt.

De titel? Staat nog steeds "Contactformulier - Gemeente Utrecht."

Een schermlezergebruiker hoort die titel en denkt: prima, het formulier is verstuurd. Maar het is niet verstuurd. Er staan twee foutmeldingen op de pagina die diegene nog niet heeft gevonden.

Hetzelfde geldt voor zoekresultaten. Je zoekt op "paspoort." De resultatenpagina heeft als titel: "Zoeken - Gemeente Utrecht." Hoeveel resultaten? Welke zoekterm? Geen idee zonder de pagina door te lezen.

```html
<!-- Niet doen: geen fout in de titel -->
<title>Contactformulier - Gemeente Utrecht</title>

<!-- Wel doen: fout in de titel -->
<title>2 fouten - Contactformulier - Gemeente Utrecht</title>

<!-- Niet doen: zoekterm niet in de titel -->
<title>Zoeken - Gemeente Utrecht</title>

<!-- Wel doen: zoekterm en resultaten in de titel -->
<title>12 resultaten voor "paspoort" - Zoeken - Gemeente Utrecht</title>
```

**Waarom in de titel en niet alleen op de pagina?**

Omdat de titel het eerste oriëntatiepunt is. Voordat je de pagina leest, hoor of ziet je de titel. "2 fouten" in de titel is een directe waarschuwing. Zonder dat moet je eerst door de hele pagina navigeren om te ontdekken dat er iets mis is.

**De implementatie:** werk `document.title` bij na formuliervalidatie en bij zoekresultaten. Het is één regel code.
