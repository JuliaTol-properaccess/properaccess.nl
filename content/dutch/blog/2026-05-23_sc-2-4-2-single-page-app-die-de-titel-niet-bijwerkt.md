---
draft: true
title: "Single-page app die de titel niet bijwerkt"
date: 2026-05-23
slug: "sc-2-4-2-single-page-app-die-de-titel-niet-bijwerkt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: "Single-page app die de titel niet bijwerkt — WCAG 2.4.2 Paginatitel (post 5/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - single-page app die de titel niet bijwerkt
image: "/images/blog/linkedin-series/sc-2-4-2-single-page-app-die-de-titel-niet-bijwerkt.png"
---

Je navigeert van de homepage naar de contactpagina. De content verandert. De URL verandert. Het tabblad? Staat nog steeds "Home - Webshop."

In een single-page applicatie (React, Vue, Angular, Next.js) laadt de browser geen nieuwe pagina bij navigatie. De content wordt dynamisch vervangen. Maar het `<title>`-element wordt niet automatisch bijgewerkt — dat moet de developer handmatig doen.

**Waarom is dit een probleem?**

- Een schermlezer kondigt de nieuwe pagina niet aan. De gebruiker weet niet of de navigatie gelukt is.
- Bij meerdere tabbladen staat overal dezelfde titel.
- De browsergeschiedenis (terug-knop) toont dezelfde titel voor elke "pagina."

```javascript
// Niet doen: titel vergeten bij routewijziging
function navigeerNaar(pagina) {
  renderContent(pagina);
  // document.title blijft ongewijzigd
}

// Wel doen: titel meteen bijwerken
function navigeerNaar(pagina) {
  renderContent(pagina);
  document.title = pagina.titel + " - Webshop";
}
```

In React:

```javascript
useEffect(() => {
  document.title = `${paginaTitel} - Webshop`;
}, [paginaTitel]);
```

**Tip:** voeg dit toe aan je router, niet aan elke individuele pagina. Dan vergeet je het niet bij een nieuwe pagina.

**Test:** klik door je SPA en kijk na elke navigatie naar het tabblad. Verandert de titel?
