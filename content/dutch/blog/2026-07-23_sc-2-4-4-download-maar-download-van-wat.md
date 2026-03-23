---
title: '"Download" — maar download van wat?'
date: 2026-07-23
slug: "sc-2-4-4-download-maar-download-van-wat"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "2-4-4"
  - "links"
description: '"Download" — maar download van wat? — WCAG 2.4.4 Linkdoel (in context) (post 13/14)'
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Linkdoel (in context)
  - "download — maar download van wat?"
image: "/images/blog/linkedin-series/sc-2-4-4-download-maar-download-van-wat.png"
---

Een tabel. Kolom 1: documentnaam. Kolom 2: een "Download"-link.

Visueel is het duidelijk: "Download" hoort bij "Jaarverslag 2024" in dezelfde rij. Maar de tabel is gebouwd met divs. Geen echte `<table>`. Geen `<tr>`. Geen `<td>`.

Een schermlezer ziet geen tabelstructuur. Die leest: "Download. Download. Download." Zonder context.

```html
<!-- Niet doen: geen echte tabel, context is alleen visueel -->
<div class="rij">
  <div class="cel">Jaarverslag 2024</div>
  <div class="cel"><a href="/jaarverslag.pdf">Download</a></div>
</div>

<!-- Wel doen: echte tabel, context is programmatisch -->
<table>
  <tr>
    <td>Jaarverslag 2024</td>
    <td><a href="/jaarverslag.pdf">Download</a></td>
  </tr>
</table>
```

In een echte tabel kan een schermlezer de kolomkoppen voorlezen bij elke cel. "Jaarverslag 2024, Download." De relatie is programmatisch bepaalbaar.

**De les:** linkcontext moet programmatisch te bepalen zijn. Visuele nabijheid telt niet. Een schermlezer kan niet zien dat twee divs naast elkaar staan.
