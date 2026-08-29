---
title: "Hoe check ik de toegankelijkheid van mijn website?"
date: 2026-04-14
slug: "hoe-check-ik-de-toegankelijkheid-van-mijn-website"
categories:
  - "wcag-vragen"
tags:
  - "veelgestelde-vragen"
  - "audit"
  - "wcag"
  - "kosten"
  - "tools"
description: "Wil je de toegankelijkheid van je website checken? Overzicht van gratis tools, handmatige tests en wanneer je een professional nodig hebt."
keywords:
  - digitale toegankelijkheid
  - WCAG
---

Er zijn drie manieren om de toegankelijkheid van je website te checken: geautomatiseerde tools, handmatige tests en professionele audits. Elk heeft z'n plek, en idealiter combineer je ze.

## 1. Geautomatiseerde tools (gratis, 5 minuten)

Deze tools scannen je pagina en rapporteren technische fouten:

### WCAG Radar van Proper Access
- Bookmarklet of browserextensie voor Chrome en Firefox
- Drie tabbladen: een voor redactie, een voor design en een voor development
- Rekent in je eigen browser, dus werkt ook achter een login en op localhost
- De gratis versie doet 28 van de 45 checks, zonder account
- [Bekijk wat de WCAG Radar controleert](/tools/wcag-radar/)

Deze bouwen we zelf bij Proper Access, op basis van wat we in 950 audits sinds 2019 zijn tegengekomen. Onder elke check zit een link waarmee je de bevinding voorlegt aan een van onze auditors.

### WAVE (web accessibility evaluation tool)
- Browser-extensie voor Chrome en Firefox
- Geeft visuele indicatoren op je pagina
- Gratis en makkelijk te gebruiken
- [wave.webaim.org](https://wave.webaim.org)

### axe DevTools
- Browser-extensie, integreert in je developer tools
- Meer technisch, maar zeer nauwkeurig
- Gratis basisversie
- Populair bij developers

### Lighthouse (ingebouwd in Chrome)
- Open DevTools → Lighthouse → Accessibility
- Geeft een score van 0-100
- Let op: een score van 100 betekent niet dat je website toegankelijk is. Het betekent alleen dat de tool geen fouten heeft gevonden

### Wat vinden deze tools wel?
- Ontbrekende alt-teksten
- Te laag contrast
- Formuliervelden zonder label
- Ontbrekende taalattribuut
- Lege knoppen of links

### Wat vinden ze niet?
- Of alt-teksten inhoudelijk kloppen
- Of de toetsenbordnavigatie logisch werkt
- Of een schermlezer de juiste informatie geeft
- Of de focusvolgorde zinvol is
- Of dynamische content goed is geïmplementeerd

**Conclusie:** geautomatiseerde tools vinden ~30% van de problemen. Ze zijn een goed startpunt, niet een eindpunt.

## 2. Handmatige tests (gratis, 30 minuten)

Doe deze tests zelf om een veel beter beeld te krijgen:

### Toetsenbordtest
Navigeer door je website met alleen Tab, Shift+Tab, Enter en de pijltjestoetsen.
- Kun je alle interactieve elementen bereiken?
- Zie je waar de focus is?
- Kun je modals en dropdowns openen en sluiten?
- Zit je nergens "vast"?

### Zoomtest
Zoom in naar 200% en naar 400%.
- Past alle content nog op het scherm?
- Verdwijnt er informatie?
- Moet je horizontaal scrollen bij 400%?

### Koppen-check
Installeer de HeadingsMap-extensie of open het tabblad Redactie van de [WCAG Radar](/tools/wcag-radar/) en bekijk de kopstructuur.
- Is er één h1 per pagina?
- Worden er geen niveaus overgeslagen?
- Beschrijven de koppen de content?

### Contrastcheck
Gebruik de WebAIM Contrast Checker of de kleurenpipet in de [WCAG Radar](/tools/wcag-radar/) voor twijfelgevallen.
- Normale tekst: minimaal 4,5:1
- Grote tekst (18px+ of 14px+ bold): minimaal 3:1

## Als je er bij het zelf testen niet uitkomt

Op een gegeven moment loop je vast op één ding. De radar markeert een knop zonder toegankelijke naam en je weet niet welke van de drie oplossingen hier de goede is. Of je twijfelt of die alt-tekst klopt bij de afbeelding. Dat is precies het stuk dat geen enkele tool voor je beslist.

Daarvoor is de strippenkaart. Je stelt een vraag over één onderwerp, een auditor van Proper Access antwoordt binnen 3 tot 5 werkdagen, en dat kost één strip. Vervolgvragen in dezelfde draad zijn gratis, en de strip gaat er pas af als wij antwoorden: valt je vraag buiten onze scope, dan kost hij niets. Een bundel van 10 strippen kost 250 euro exclusief btw, een losse vraag 37,50 euro. Je hoeft geen audit bij ons te hebben gehad om er een te kopen.

[Zo werkt de strippenkaart](/strippenkaart/)

## 3. Professionele audit (betaald, meest grondig)

Een professionele auditor:
- Test met meerdere schermlezers (NVDA, JAWS, VoiceOver)
- Test op meerdere apparaten en browsers
- Kent de nuances van de WCAG-standaard
- Weet wanneer iets technisch voldoet maar praktisch niet werkt
- Levert een rapport op waarmee je team direct aan de slag kan

Dit is wat je nodig hebt als je moet aantonen dat je voldoet aan de wet, of als je na eigen verbeteringen wilt weten of je het goed hebt gedaan.

## Vergeet de PDF's niet

Documenten op je site vallen onder dezelfde regels als de pagina's eromheen, en bij een zelftest worden ze bijna altijd overgeslagen. Open een PDF in [PAC](https://pac.pdf-accessibility.org/en/download): zie je daar tekst ontbreken die in het document wel staat, dan zit er geen tagstructuur in.

Zit die er niet, dan repareert [pdf-toegankelijk.nl](https://pdf-toegankelijk.nl) de codelaag van het document, met tags, een titel en de taal erin, zonder dat er iets verandert aan hoe het eruitziet. Die tool is van ons en staat nu in besloten test.

## Onze aanbeveling

Begin met stap 1 en 2, die kosten niets en geven je een eerste beeld. Als je serieus aan de slag wilt, laat dan een professionele audit uitvoeren.

Wil je een snelle indicatie? [Vraag een mini-audit aan](/webshop-quickscan/) (495 euro exclusief btw). Een senior auditor bekijkt je website en geeft je een overzicht van de belangrijkste punten.
