---
title: "Kleurcontrast checker: haalt jouw kleurcombinatie WCAG?"
meta_title: "Kleurcontrast checker: haalt je kleurcombinatie WCAG AA? | Proper Access"
description: "Gratis kleurcontrast checker. Vul twee kleuren in en zie meteen of de combinatie WCAG 2.2 niveau AA en AAA haalt, voor gewone tekst, grote tekst en interface-onderdelen."
layout: "contrast-checker"
gratis: true
weight: 3
doelgroep: ["Webdesigner", "Webdeveloper", "Webredactie"]
keywords:
  - kleurcontrast checker
  - contrast checker
  - contrast checken
  - kleurcontrast controleren
  - wcag contrast
  - contrastverhouding berekenen
  - contrast wcag aa
  - kleurcontrast website
---

Vul een voorgrondkleur en een achtergrondkleur in, en je ziet de contrastverhouding en of die
voldoet. Op niveau AA vraagt WCAG 4,5:1 voor gewone tekst en 3:1 voor grote tekst, en op niveau
AAA 7:1 en 4,5:1. Interface-onderdelen zoals de rand van een invoerveld of een focusrand vallen
onder een apart criterium, 1.4.11, met een eis van 3:1.

Ken je de hexcodes al, dan is dit de snelste route. Moet je kleuren meten die al op een pagina
staan, gebruik dan de pipetten in de [WCAG Radar van Proper Access](/tools/wcag-radar/). Die
draait in je eigen browser, dus ook achter een inlog en op localhost.

## Twee dingen die een rekenmachine je niet vertelt

**De kleur die je intypt is niet altijd de kleur die de bezoeker ziet.** Een halfdoorzichtige
laag, een gradient of een afbeelding onder de tekst verandert de werkelijke achtergrond. Reken
daarom niet met de kleur uit je stijlgids maar met de kleur die op het scherm staat, en meet bij
een gradient op het lichtste én het donkerste punt.

**Een formulierveld heeft twee verschillende eisen.** De rand van het veld is een
interface-onderdeel en moet 3:1 halen. De placeholder erin is tekst en moet 4,5:1 halen. Dat
tweede gaat in de praktijk bijna altijd mis, want een placeholder wordt meestal opzettelijk
lichtgrijs gemaakt om hem als hint te laten lezen. Het standaardgrijs `#e5e7eb` als veldrand op
wit komt uit op 1,2:1 en zakt dus ruim door de eis.

## Contrast is een ondergrens, geen doel

4,5:1 betekent dat de tekst voor de meeste mensen te lezen is, niet dat hij prettig leest. Zwart
op wit haalt 21:1. Zit je op 4,6:1 en gaat het om een lap tekst in plaats van een label, dan is
meer contrast bijna altijd de betere keuze.
