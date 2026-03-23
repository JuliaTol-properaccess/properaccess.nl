---
title: "Zoekbalk in een tabel die wordt afgesneden"
date: 2026-07-14
slug: "sc-1-4-10-zoekbalk-in-een-tabel-die-wordt-afgesneden"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Zoekbalk in een tabel die wordt afgesneden — WCAG 1.4.10 Reflow (post 10/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - zoekbalk in een tabel die wordt afgesneden
image: "/images/blog/linkedin-series/sc-1-4-10-zoekbalk-in-een-tabel-die-wordt-afgesneden.png"
---

Je hebt een tabel met data. Erboven: een zoekbalk om te filteren. De tabel mag horizontaal scrollen — dat is de uitzondering. Maar die zoekbalk?

Die scrollt mee. Naar rechts. Buiten beeld.

Bij 400% zoom kun je niet meer zoeken. Je kunt het invoerveld niet zien, niet bereiken, niet gebruiken. En zonder de zoekfunctie kun je de tabel niet filteren.

Dit is een subtiel maar belangrijk onderscheid: de tabel is uitgezonderd van reflow. Alles eromheen niet.

Een zoekbalk is geen tabelcontent. Een filtermenu is geen tabelcontent. Een knop "Exporteer naar Excel" is geen tabelcontent. Al die elementen moeten gewoon bij 320 pixels breedte bruikbaar zijn.

**De fix:** zorg dat de zoekbalk en andere bedieningselementen buiten het scrollbare tabelgebied staan.

```html
<!-- Zoekbalk staat buiten de scrollbare container -->
<div class="zoekbalk">
  <input type="search" placeholder="Zoek...">
</div>

<!-- Alleen de tabel scrollt horizontaal -->
<div class="tabel-wrapper" style="overflow-x: auto;">
  <table>...</table>
</div>
```

De zoekbalk past zich aan de beschikbare breedte aan. De tabel scrollt onafhankelijk daaronder.

**Waarom wordt dit over het hoofd gezien?**

Omdat developers de hele component — zoekbalk + tabel — in één scrollbare container zetten. Logisch vanuit design-oogpunt. Maar bij inzoomen verdwijnt de zoekbalk mee naar rechts.

Check je datatabellen: staat de zoekfunctionaliteit buiten de scrollbare container? Of scrollt die mee?

Dit was post 10 van 10 over WCAG 1.4.10 Reflow. Van vaste breedtes tot zoekbalken: het draait allemaal om dezelfde vraag. Is je content bruikbaar als iemand inzoomt tot 400%?

Nog niet alles getest? Begin met het simpelste: maak je browservenster 320 pixels breed en loop je website door. Je vindt meer dan je denkt.
