---
draft: true
title: "Navigatiemenu verdwijnt bij inzoomen"
date: 2026-05-20
slug: "sc-1-4-10-navigatiemenu-verdwijnt-bij-inzoomen"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Navigatiemenu verdwijnt bij inzoomen — WCAG 1.4.10 Reflow (post 5/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - navigatiemenu verdwijnt bij inzoomen
image: "/images/blog/linkedin-series/sc-1-4-10-navigatiemenu-verdwijnt-bij-inzoomen.png"
---

Home. Over ons. Diensten. Projecten. Contact.

Vijf links op een rij. Op een breed scherm prima. Bij 400% zoom? Dan past "Contact" niet meer. Die link valt buiten het scherm. Zonder scrollbar. Zonder hamburgermenu.

Je bezoeker kan niet meer naar je contactpagina.

Ik zie dit regelmatig bij audits: een horizontaal menu dat geen mobiele variant heeft. De desktop-versie wordt gewoon kleiner geperst. Tot er links afvallen.

En het gekke is: de meeste websites hebben wel een hamburgermenu op mobiel. Maar dat wordt aangestuurd door een media query op de schermgrootte. Niet op het zoomniveau.

Bij 400% zoom op een desktopscherm is de effectieve breedte 320 pixels — maar de media query denkt dat het scherm nog steeds 1920 pixels breed is.

**De oplossing:** baseer je breakpoint niet op `screen width`, maar op de beschikbare ruimte. Of zorg dat je menu altijd een verticale fallback heeft.

```html
<nav>
  <button class="menu-toggle" aria-expanded="false">Menu</button>
  <ul class="nav">
    <li><a href="/">Home</a></li>
    <!-- ... -->
  </ul>
</nav>
```

**Belangrijk detail:** het hamburgermenu moet ook met het toetsenbord bedienbaar zijn. En `aria-expanded` moet meeveranderen als het menu opent en sluit.

Test je website eens bij 400% zoom op je desktopscherm. Niet op je telefoon — op je desktop. Kun je nog navigeren?
