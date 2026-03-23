---
title: "Instructie: hoe test ik kleurcontrast?"
date: 2025-05-10
slug: "hoe-test-ik-kleurcontrast"
categories:
  - "tips-en-tools"
  - "Webredactie"
tags:
  - "1-4-3"
  - "1-4-11"
description: "Stap-voor-stap instructie om kleurcontrast te testen volgens WCAG. Praktische uitleg met de TPGi Colour Contrast Analyser."
keywords:
  - kleurcontrast testen
  - wcag kleurcontrast
  - contrast checker wcag
aliases:
  - /hoe-test-ik-kleurcontrast/
---

Kleurcontrast is een van de meest voorkomende toegankelijkheidsproblemen die we tegenkomen in audits. Lichtgrijze tekst op een witte achtergrond, pastelkleurige knoppen, subtiele placeholdertekst -- het ziet er misschien strak uit, maar voor honderdduizenden mensen met een visuele beperking is het simpelweg niet te lezen.

WCAG kent twee succescriteria voor contrast:
- **SC 1.4.3** (Contrast minimum): gaat over tekst
- **SC 1.4.11** (Contrast voor niet-tekstuele elementen): gaat over knoppen, iconen, invoervelden en focusindicatoren

## Welke contrastverhoudingen gelden er?

| Type element | Minimale contrastverhouding |
|---|---|
| **Normale tekst** (kleiner dan 18pt of 14pt bold) | 4,5:1 |
| **Grote tekst** (18pt+ of 14pt+ bold) | 3:1 |
| **UI-componenten** (knoppen, invoervelden, iconen) | 3:1 |
| **Focusindicatoren** | 3:1 |

## Methode 1: TPGi Colour Contrast Analyser (desktop app)

Dit is mijn favoriete tool. Het is gratis, werkt op Windows en Mac, en je kunt kleuren direct van je scherm pikken.

### Stap 1: Download en installeer

Ga naar de officiele website: [https://www.tpgi.com/color-contrast-checker/](https://www.tpgi.com/color-contrast-checker/). Download de versie voor jouw besturingssysteem en installeer.

### Stap 2: Selecteer de kleuren

1. Open de tool. Die verschijnt als een zwevend venster bovenop andere applicaties.
2. Klik op het **pipet-icoon** naast "Voorgrondkleur" en selecteer de tekstkleur op je scherm.
3. Klik op het **pipet-icoon** naast "Achtergrondkleur" en selecteer de achtergrondkleur achter de tekst.
4. Bij een verloopachtergrond of afbeelding: herhaal op meerdere plekken om het slechtste punt te vinden.

### Stap 3: Lees de resultaten

De tool toont direct de **contrastverhouding** en of de combinatie voldoet aan WCAG AA voor normale tekst, grote tekst en informatieve elementen.

## Methode 2: Chrome DevTools

Snel en handig als je al in de browser aan het inspecteren bent:

1. Klik met rechts op een tekstelement en kies **Inspecteren**
2. Klik in het Styles-paneel op het **gekleurde vierkantje** naast de kleurcode
3. Chrome toont automatisch de contrastverhouding en of het voldoet

**Let op:** Chrome controleert alleen tekst, niet UI-componenten zoals randen van invoervelden.

## Methode 3: Online tools

Kun je geen software installeren? Gebruik een online checker:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) -- vul twee hex-codes in en je ziet direct het resultaat

## Veelvoorkomende valkuilen

- **Placeholdertekst.** Die lichtgrijze tekst in invoervelden die verdwijnt zodra je typt. Die moet ook voldoen aan 4,5:1 -- het is gewone tekst.
- **Tekst op foto's.** Als je tekst over een afbeelding plaatst, controleer dan het contrast op het donkerste en lichtste punt van de afbeelding. Of gebruik een semi-transparante overlay.
- **Hover- en focusstaten.** Niet alleen de standaardkleur moet voldoen, maar ook de kleur bij hover en focus.
- **Disabled elementen.** Inactieve knoppen en velden zijn uitgezonderd van de contrasteis. Maar wees voorzichtig: als een gebruiker niet kan zien dat een element er is, is dat ook een probleem.

## Mijn tip

Leer een paar veilige kleurcombinaties uit je hoofd. `#767676` is de lichtste grijs die 4,5:1 haalt op wit -- dat dekt zowel tekst als UI-componenten. Gebruik dit als baseline en ga bij twijfel donkerder.
