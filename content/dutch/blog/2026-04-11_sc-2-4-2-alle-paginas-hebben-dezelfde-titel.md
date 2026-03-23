---
title: "Alle pagina's hebben dezelfde titel"
date: 2026-04-11
slug: "sc-2-4-2-alle-paginas-hebben-dezelfde-titel"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: "Alle pagina's hebben dezelfde titel — WCAG 2.4.2 Paginatitel (post 2/7)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - alle pagina's hebben dezelfde titel
image: "/images/blog/linkedin-series/sc-2-4-2-alle-paginas-hebben-dezelfde-titel.png"
---

Vijf tabbladen open. Allemaal van dezelfde website. Allemaal met dezelfde titel: "Gemeente Utrecht."

Welk tabblad is de contactpagina? Welk tabblad zijn de veelgestelde vragen? Je moet elk tabblad openen om het te ontdekken.

Een schermlezergebruiker hoort bij het openen van elke pagina: "Gemeente Utrecht." Elke keer hetzelfde. Geen manier om te weten of de navigatie gelukt is zonder eerst door de pagina te bladeren.

```html
<!-- Niet doen: overal dezelfde titel -->
<title>Gemeente Utrecht</title>

<!-- Wel doen: uniek per pagina -->
<title>Contact - Gemeente Utrecht</title>
<title>Veelgestelde vragen - Gemeente Utrecht</title>
<title>Paspoort aanvragen - Gemeente Utrecht</title>
```

**Waar gaat dit mis?**

Meestal in het CMS of het template. Iemand heeft de titel hardcoded in het basistemplate. Of het CMS-veld voor de paginatitel is niet verplicht en wordt leeg gelaten.

**De fix:** zorg dat je CMS automatisch een unieke titel genereert. De meest voor de hand liggende formule:

`[Paginanaam] - [Sitenaam]`

En maak het veld verplicht. Geen titel = niet publiceren.
