---
draft: true
title: "Link naar een PDF zonder het te zeggen"
date: 2026-05-25
slug: "sc-2-4-4-link-naar-een-pdf-zonder-het-te-zeggen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: "Link naar een PDF zonder het te zeggen — WCAG 2.4.4 Linkdoel (in context) (post 5/14)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - link naar een pdf zonder het te zeggen
image: "/images/blog/linkedin-series/sc-2-4-4-link-naar-een-pdf-zonder-het-te-zeggen.png"
---

"Algemene voorwaarden."

Je klikt. En ineens opent er een PDF in je browser. Of er start een download. Of je telefoon opent een PDF-viewer.

Je verwachtte een webpagina.

```html
<!-- Niet doen -->
<a href="/voorwaarden.pdf">Algemene voorwaarden</a>

<!-- Wel doen -->
<a href="/voorwaarden.pdf">Algemene voorwaarden (PDF, 340 KB)</a>
```

**Waarom het bestandstype vermelden?**

- Schermlezers kunnen PDF's vaak niet goed voorlezen
- Mobiele gebruikers willen weten of ze een groot bestand downloaden
- Bezoekers met een langzame verbinding willen de bestandsgrootte weten
- Sommige bezoekers kunnen geen PDF's openen

Dit geldt niet alleen voor PDF's. Ook voor Word-documenten, Excel-bestanden, ZIP-archieven en andere downloads.

**Bonuspunt:** bied waar mogelijk een HTML-alternatief naast de PDF. Dat is voor iedereen beter leesbaar en doorzoekbaar.
