---
title: 'SC 3.2.6 - Wat betekent \"Consistente hulp\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-2-6"
description: "WCAG 3.2.6 vereist dat hulpopties zoals chat of FAQ altijd op dezelfde plek te vinden zijn. Lees hoe je consistente hulp biedt."
aliases:
  - /sc-3-2-6-wat-betekent-consistente-hulp/
---

Je zit vast op een website. Je hebt een vraag over je bestelling, of je snapt een formulier niet. Je zoekt naar de helpknop. Op de vorige pagina stond die rechtsonder. Maar op deze pagina is die nergens te vinden. Of hij staat ineens linksboven. Of hij heet nu "Support" in plaats van "Hulp".

Voor iemand met een cognitieve beperking of lage digitale vaardigheden kan die inconsistentie het verschil zijn tussen wel of geen hulp krijgen.

**WCAG succescriterium 3.2.6** (Consistent Help) eist dat als je hulpmechanismen aanbiedt op meerdere pagina's, die op elke pagina op dezelfde relatieve positie staan.

## Nieuw in WCAG 2.2

Dit criterium is toegevoegd in WCAG 2.2 en is niveau A. Het is een van de criteria die gericht zijn op mensen met cognitieve beperkingen -- een groep die in eerdere WCAG-versies ondervertegenwoordigd was.

## Welke hulpmechanismen vallen hieronder?

Het criterium noemt specifiek vier typen hulp:

1. **Contactgegevens** -- telefoonnummer, e-mailadres, openingstijden
2. **Contactformulier of chatfunctie** -- een directe manier om hulp te vragen
3. **Zelfhulpmechanismen** -- FAQ, kennisbank, handleidingen
4. **Volledig geautomatiseerde contactmechanismen** -- chatbots

Als je een of meer van deze hulpopties aanbiedt op meerdere pagina's, moeten ze steeds op **dezelfde relatieve plek** staan. Dat betekent niet per se dezelfde pixelcoördinaten, maar dezelfde plek in de structuur van de pagina.

## Wat betekent "dezelfde relatieve positie"?

Als je helplink in de footer staat, moet die op elke pagina in de footer staan. Als je chatwidget rechtsonder zweeft, moet die op elke pagina rechtsonder zweven. Als je telefoonnummer in de header staat, moet het op elke pagina in de header staan.

De sleutel is **voorspelbaarheid**. Een gebruiker die heeft geleerd waar de hulp staat, moet dat op de volgende pagina niet opnieuw hoeven uitzoeken.

## Voorbeelden uit de praktijk

### Goed: consistente hulp

- Een chatwidget die op elke pagina rechtsonder staat
- Een "Contact"-link die altijd het laatste item in het hoofdmenu is
- Een telefoonnummer dat op elke pagina in de header staat
- Een "Hulp nodig?"-blok dat op elke productpagina onder de productinformatie staat

### Fout: inconsistente hulp

- Een chatwidget die op de homepage rechtsonder staat maar op productpagina's linksonder
- Een contactpaginalink die op de homepage in de header staat en op andere pagina's in de footer
- Een FAQ-link die op sommige pagina's in het hoofdmenu staat en op andere in een zijbalk
- Een telefoonnummer dat op de homepage prominent zichtbaar is maar op andere pagina's ontbreekt

## Wat is niet verplicht?

- Je hoeft niet op **elke pagina** hulp aan te bieden. Het criterium geldt alleen als je hulp op meerdere pagina's aanbiedt -- dan moet die consistent zijn
- Als je verschillende hulpmechanismen op verschillende pagina's toont (chatbot op de homepage, FAQ op productpagina's), hoeven die niet identiek te zijn. Maar als hetzelfde mechanisme op meerdere pagina's voorkomt, moet het consistent gepositioneerd zijn
- De exacte visuele vormgeving mag variëren, zolang de positie in de paginastructuur hetzelfde blijft

## Veelgemaakte fouten

- Contactinformatie die op de homepage prominent in de header staat maar op subpagina's alleen in de footer
- Een chatwidget die op sommige pagina's verschijnt en op andere niet, zonder duidelijke reden
- Helplinks die op verschillende pagina's verschillende namen hebben ("Hulp", "Support", "Contact", "Klantenservice")
- Een telefoonnummer dat op mobiel verdwijnt terwijl het op desktop wel zichtbaar is
- FAQ-links die op productpagina's in de zijbalk staan maar op informatiepagina's in de footer

## Hoe test je het?

1. Bezoek minstens vijf verschillende pagina's op je website
2. Zoek op elke pagina naar hulpmechanismen (chat, contact, FAQ, telefoonnummer)
3. Controleer: staan ze steeds op dezelfde plek?
4. Controleer: hebben ze steeds dezelfde naam?
5. Test ook op mobiel: blijven de hulpmechanismen op dezelfde relatieve positie?

## Wat kun je als webredacteur of manager doen?

- **Inventariseer je hulpmechanismen**: welke hulpopties bied je aan en op welke pagina's?
- **Controleer de consistentie**: staan ze overal op dezelfde plek in de pagina?
- **Gebruik een vast template**: als je header of footer een contactlink bevat, zorg dat die in het template zit zodat hij automatisch op elke pagina verschijnt
- **Vraag je webbouwer**: zijn hulpmechanismen onderdeel van het paginatemplate of worden ze per pagina handmatig toegevoegd?

Consistente hulp is een van de eenvoudigste WCAG-criteria om goed te doen. Als je hulpmechanismen in je paginatemplate opneemt, ben je in een keer klaar voor je hele website.
