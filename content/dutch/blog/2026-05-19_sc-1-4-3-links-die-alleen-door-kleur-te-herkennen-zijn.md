---
title: "Links die alleen door kleur te herkennen zijn"
date: 2026-05-19
slug: "sc-1-4-3-links-die-alleen-door-kleur-te-herkennen-zijn"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-4-3"
  - "contrast"
description: "Links die alleen door kleur te herkennen zijn — WCAG 1.4.3 Contrast (minimum) (post 5/10)"
keywords:
  - digitale toegankelijkheid
  - WCAG
  - Contrast (minimum)
  - links die alleen door kleur te herkennen zijn
image: "/images/blog/linkedin-series/sc-1-4-3-links-die-alleen-door-kleur-te-herkennen-zijn.png"
---

Een alinea tekst. Ergens in die tekst staat een link. Geen onderstreping. Alleen een andere kleur.

De vraag is: welke kleur?

Als je linktekst blauw (#6699CC) is op een witte achtergrond, heb je een contrast van 3,0:1 met de achtergrond. Dat klinkt acceptabel — maar er is een tweede eis.

De link moet ook voldoende contrasteren met de omringende tekst. Als je tekst zwart is (#000000) en je link blauw (#6699CC), moet het contrast tussen die twee kleuren minimaal 3:1 zijn. Anders kan iemand met kleurenblindheid het verschil niet zien.

Twee eisen tegelijk:
1. Link vs. achtergrond: minimaal 4,5:1
2. Link vs. omringende tekst: minimaal 3:1

Dat is een smal paadje. En veel kleurcombinaties vallen eraf.

**De simpelste oplossing:** onderstreep je links gewoon.

```css
/* Problematisch: link alleen door kleur herkenbaar */
a { color: #6699CC; text-decoration: none; }

/* Veilig: duidelijk contrast én onderstreping */
a { color: #2056A5; text-decoration: underline; }
```

Met een onderstreping is kleur niet meer de enige indicator. Dan hoef je alleen nog de 4,5:1 met de achtergrond te halen.

**Waarom vermijden designers onderstreping?** Omdat het "rommelig" zou zijn. Maar wat rommeliger is: een pagina vol tekst waar niemand kan zien wat klikbaar is.
