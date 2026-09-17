---
title: "Tekstafstand check: blijft je tekst leesbaar bij meer ruimte?"
meta_title: "Tekstafstand check: haalt je pagina WCAG 1.4.12? | Proper Access"
description: "Gratis tekstafstand check. Pas regelhoogte, letter-, woord- en alinearuimte aan volgens WCAG 1.4.12 en zie meteen waar tekst afbreekt, overlapt of uit zijn kader loopt."
layout: "text-spacing-check"
gratis: true
weight: 6
doelgroep: ["Webdesigner", "Webdeveloper"]
keywords:
  - tekstafstand check
  - tekstafstand wcag
  - wcag 1.4.12
  - regelhoogte wcag
  - letterafstand wcag
  - text spacing test
  - tekst vergroten test
---

Sommige mensen zetten in hun browser of met een extensie de regelhoogte en de letterafstand
omhoog, omdat tekst daardoor beter te volgen is. Dat geldt bijvoorbeeld voor mensen met dyslexie
of met een visuele beperking. WCAG-succescriterium 1.4.12 Tekstafstand zegt dat je pagina dat
moet kunnen verdragen zonder dat er inhoud of functionaliteit verdwijnt.

De vier waarden uit het criterium, allemaal ten opzichte van de lettergrootte:

- regelhoogte minstens 1,5 keer
- ruimte na een alinea minstens 2 keer
- letterafstand minstens 0,12 keer
- woordafstand minstens 0,16 keer

Met deze check zet je die waarden in één keer aan, zodat je ziet waar het misgaat.

## Waar het meestal stukloopt

Niet in de lopende tekst. Het gaat mis op plekken waar iemand een vaste hoogte heeft opgegeven:
een knop met `height` in pixels, een kaart in een rij van drie die allemaal even hoog moeten
zijn, een menubalk, een tabelcel met een afgekapte regel. De tekst wordt hoger, het kader niet,
en dan valt er een halve regel buiten of er schuift iets onder een ander element.

Let ook op tekst in een element met `overflow: hidden`. Daar verdwijnt de onderste regel zonder
dat je een schuifbalk krijgt, dus je ziet het alleen als je er gericht naar kijkt.

De achtergrond bij dit criterium, met voorbeelden van wat er precies afbreekt, staat in
[wat betekent tekstafstand](/blog/sc-1-4-12-wat-betekent-tekstafstand/).
