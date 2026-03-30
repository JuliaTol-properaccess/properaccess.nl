---
title: "Eenvoudige tabel die onnodig horizontaal scrollt"
date: 2026-07-08
slug: "sc-1-4-10-eenvoudige-tabel-die-onnodig-horizontaal-scrollt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-10"
  - "reflow"
  - "responsive"
description: "Eenvoudige tabel die onnodig horizontaal scrollt — WCAG 1.4.10 Reflow (post 9/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Reflow
  - eenvoudige tabel die onnodig horizontaal scrollt
image: "/images/blog/linkedin-series/sc-1-4-10-eenvoudige-tabel-die-onnodig-horizontaal-scrollt.png"
---

Openingstijden. Twee kolommen. Dag en tijd.

Maandag: 09:00 - 17:00
Dinsdag: 09:00 - 17:00

Bij 320 pixels breedte past dit prima in één kolom. Maar de tabel scrollt toch horizontaal. Waarom? Omdat het een `<table>` is en iemand er `overflow-x: auto` op heeft gezet.

"Maar tabellen zijn toch uitgezonderd van reflow?"

Ja en nee. De uitzondering geldt voor complexe tabellen met veel kolommen — een spreadsheet met tien kolommen moet je niet in een kolom proppen. Maar een tabel met twee kolommen? Die hoeft niet horizontaal te scrollen.

**De betere aanpak:** maak van een eenvoudige tabel een lijstweergave bij smalle schermen.

```css
@media (max-width: 320px) {
  .tabel thead { display: none; }
  .tabel tr {
    display: block;
    margin-bottom: 1rem;
  }
  .tabel td {
    display: flex;
    justify-content: space-between;
  }
  .tabel td::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
```

Het resultaat: in plaats van een horizontaal scrollende tabel zie je bij smal scherm:

**Maandag**
09:00 - 17:00

**Dinsdag**
09:00 - 17:00

Leesbaar. Geen horizontaal scrollen nodig.

**De vuistregel:** heeft je tabel twee of drie kolommen? Dan is een lijstweergave bij smal scherm bijna altijd beter. Heeft je tabel acht kolommen met data? Dan mag die horizontaal scrollen — maar zet de scrollbar dan op de tabel, niet op de hele pagina.
