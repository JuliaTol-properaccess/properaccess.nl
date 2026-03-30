---
title: "Dialoogvenster dat de achtergrond niet afschermt"
date: 2026-06-28
slug: "sc-1-3-2-dialoogvenster-dat-de-achtergrond-niet-afschermt"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-2"
  - "volgorde"
  - "screenreader"
description: "Dialoogvenster dat de achtergrond niet afschermt — WCAG 1.3.2 Betekenisvolle volgorde (post 8/9)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Betekenisvolle volgorde
  - dialoogvenster dat de achtergrond niet afschermt
image: "/images/blog/linkedin-series/sc-1-3-2-dialoogvenster-dat-de-achtergrond-niet-afschermt.png"
---

Een popup verschijnt. "Weet je het zeker? Dit item wordt permanent verwijderd."

Je drukt op Tab. En ineens zit je in het navigatiemenu. Achter de popup. Je kunt door de hele pagina tabben terwijl het dialoogvenster open is.

Een schermlezer leest vrolijk de achterliggende pagina voor. Het dialoogvenster is niet meer dan een extra laag — de rest van de pagina is nog steeds bereikbaar.

**Waarom is dit een probleem?**

Omdat de context zoek is. Je was bezig met een actie (iets verwijderen) en ineens zit je in het hoofdmenu. De pagina communiceert niet dat er een dialoogvenster actief is dat je aandacht vraagt.

**De oplossing:** gebruik het `<dialog>`-element.

```html
<dialog aria-modal="true" aria-label="Bevestig verwijdering">
  <h2>Weet je het zeker?</h2>
  <p>Dit item wordt permanent verwijderd.</p>
  <button>Annuleren</button>
  <button>Verwijderen</button>
</dialog>
```

Het `<dialog>`-element met `aria-modal="true"`:
- Beperkt de focus tot het dialoogvenster
- Voorkomt dat een schermlezer de achtergrond voorleest
- Geeft de focus terug aan het trigger-element bij sluiten

**Geen `<dialog>` beschikbaar?** Dan moet je het handmatig doen: `aria-hidden="true"` op de achterliggende content, een focus trap in JavaScript, en focusmanagement bij openen en sluiten. Veel werk. Veel foutgevoelig. Gebruik liever `<dialog>`.
