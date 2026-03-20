---
title: '"Welkom" zegt niets'
date: 2026-04-25
slug: "sc-2-4-2-welkom-zegt-niets"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-2"
  - "paginatitel"
description: '"Welkom" zegt niets — WCAG 2.4.2 Paginatitel (post 3/7)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Paginatitel
  - "welkom zegt niets"
image: "/images/blog/linkedin-series/sc-2-4-2-welkom-zegt-niets.png"
---

"Welkom."
"Pagina 1."
"Home."
"Untitled Document."

Dat zijn titels die ik regelmatig tegenkom. Ze bestaan. Ze zijn niet leeg. Maar ze zeggen niets.

Een paginatitel moet de vraag beantwoorden: "Waar ben ik?" zonder dat je de pagina hoeft te bekijken.

"Welkom" — welkom waar?
"Pagina 1" — pagina 1 van wat?
"Home" — van welke website?

```html
<!-- Niet doen -->
<title>Welkom</title>
<title>Pagina 1</title>
<title>Home</title>

<!-- Wel doen -->
<title>Paspoort aanvragen - Gemeente Utrecht</title>
```

**De test is simpel:** lees de titel hardop. Weet je waar de pagina over gaat? Zou je het tabblad terugvinden tussen tien andere tabbladen?

**Wie is hiervoor verantwoordelijk?**

Vaak de contentbeheerder. In de meeste CMS'en is de paginatitel een apart veld. Als de contentbeheerder daar "Welkom" of "Pagina 1" invult, is dat wat er in het tabblad verschijnt.

Maar ook de developer heeft een rol: zorg dat het CMS een beschrijvende titel afdwingt. Een minimale lengte. Een hint bij het veld. Of automatisch de h1 overnemen als fallback.
