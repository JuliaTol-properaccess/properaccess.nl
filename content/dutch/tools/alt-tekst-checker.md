---
title: "Alt-tekst checker — controleer de alternatieve teksten op je website"
description: "Gratis alt-tekst checker. Voer een URL in en bekijk van alle afbeeldingen of de alt-teksten correct zijn ingevuld. Inclusief SVG's en iconen."
layout: "alt-tekst-checker"
gratis: true
weight: 1
doelgroep:
  - "Webredactie"
  - "Webdeveloper"
keywords:
  - alt tekst checker
  - alt tekst controleren
  - alt tekst website checken
  - afbeeldingen checken toegankelijkheid
  - alt attributen controleren
  - alt tekst ontbreekt
  - wcag afbeeldingen check
  - alt tekst tester
  - website afbeeldingen controleren
  - toegankelijkheid afbeeldingen
---

Ontbrekende of onjuiste alt-teksten zijn het meest voorkomende toegankelijkheidsprobleem op websites. In onze audits faalt **WCAG succescriterium 1.1.1** (Niet-tekstuele content) het vaakst — bij bijna elke website die we onderzoeken.

Met deze alt-tekst checker voer je een URL in en zie je direct welke afbeeldingen op de pagina staan, welke informatie schermlezers ontvangen en waar alt-teksten ontbreken.

## Wat controleert deze tool?

De alt-tekst checker analyseert alle afbeeldingen op een pagina:

- **IMG-elementen** — de standaard HTML-afbeeldingen
- **SVG's** — vectorafbeeldingen die steeds vaker worden gebruikt voor iconen en illustraties
- **Achtergrondafbeeldingen** worden niet gedetecteerd — die zijn via CSS toegevoegd en zijn sowieso onzichtbaar voor schermlezers

Per afbeelding zie je welke informatie een schermlezer ontvangt: de alt-tekst, de rol (image, decoratief, link) en eventuele ARIA-attributen.

## Wanneer gebruik je deze tool?

- **Na het publiceren van nieuwe content** — controleer of alle afbeeldingen alt-teksten hebben
- **Bij een website-migratie** — check of alt-teksten behouden zijn gebleven
- **Als voorbereiding op een audit** — los de ergste problemen alvast zelf op
- **Bij het overnemen van een website** — krijg snel inzicht in de staat van de alt-teksten

## Veelgestelde vragen

### Wat is een alt-tekst?

Een alt-tekst (alternatieve tekst) is een tekstbeschrijving van een afbeelding. Schermlezers lezen deze tekst voor aan gebruikers die de afbeelding niet kunnen zien. De alt-tekst staat in het `alt`-attribuut van het HTML `<img>`-element.

### Wanneer moet een afbeelding een lege alt-tekst hebben?

Decoratieve afbeeldingen — sfeerbeelden, scheidingslijnen, achtergrondpatronen — krijgen een lege alt-tekst (`alt=""`). Dit vertelt de schermlezer: sla deze afbeelding over. Gebruik onze [alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/) om te bepalen welk type alt-tekst je nodig hebt.

### Vervangt deze tool een WCAG-audit?

Nee. Deze tool controleert alleen of alt-teksten aanwezig zijn — niet of ze inhoudelijk goed zijn. Een alt-tekst van "foto" is technisch aanwezig, maar niet bruikbaar. Een auditor beoordeelt of de alt-tekst de juiste informatie overbrengt voor de context.

### Hoe schrijf ik een goede alt-tekst?

Dat hangt af van het type afbeelding. Bij een productfoto beschrijf je het product. Bij een functionele afbeelding (link/knop) beschrijf je de actie. Bij een complexe afbeelding (grafiek) geef je een korte samenvatting plus een uitgebreide beschrijving. Lees de volledige uitleg in onze [alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/).

Wil je meer dan alleen alt-teksten laten checken? Een volledige [WCAG-audit](/contact/) onderzoekt alle 55 succescriteria. Of begin met een [quickscan](/quickscan/) om snel te zien waar je staat.
