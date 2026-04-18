---
title: "Hoe verwijder ik de melding ‘Google vragen over dit bericht’ – en waarom zou je dat willen?"
slug: "toetsenbord-toegankelijk"
date: 2025-11-09
categories:
  - "tips-en-tools"
  - "Webdeveloper"
aliases:
  - "/toetsenbord_toegankelijk/"
  - /blog/toetsenbord_toegankelijk/
description: "Hoe verwijder je de melding Google vragen over dit bericht in Chrome? Lees waarom deze melding je toegankelijkheidstests verstoort."
---

Als je regelmatig digitale toegankelijkheid test, dan weet je hoe onmisbaar de **Tab-toets** is. Het is dé manier om snel te controleren of een website met alleen het toetsenbord te bedienen is. Tijdens onze audits zeg ik het altijd: **wat niet met de Tab-toets bereikbaar is, is ook niet bereikbaar voor veel hulpsoftware.**

Maar sinds kort gooit **Google Chrome** roet in het eten. Wanneer je met de Tab-toets vanuit de adresbalk verder wilt navigeren, krijg je ineens een irritante melding in beeld:

**‘Google vragen over deze pagina’.**

En dan zit je vast. Geen doorkomen aan. Het onderbreekt je flow en maakt toetsenbordnavigatie frustrerend – precies wat we willen voorkomen bij toegankelijk testen.

### **Wat is die melding precies?**

Die melding is onderdeel van een nieuwe functie in Chrome: **contextuele suggesties** in de adresbalk (ook wel ‘Omnibox contextual suggestions’ genoemd). Google wil hiermee extra info tonen over pagina’s, maar voor testers en power users is het vooral een hindernis.

### **Gelukkig kun je het uitzetten. Zo doe je dat:**

1. Open een nieuw tabblad in Chrome

3. Plak dit in de adresbalk: chrome://flags/

5. Zoek naar: **Omnibox contextual suggestions**

7. Zet de optie op **Disabled**

9. Start Chrome opnieuw op

Daarna kun je weer soepel navigeren met de Tab-toets, zoals het hoort.

## Waarom Tab-testen zo belangrijk is

De Tab-toets is de basis van elke toegankelijkheidstest. Als je met Tab door een pagina navigeert, test je in feite het hele toetsenbordpad dat een bezoeker met een motorische beperking dagelijks aflegt. Alles wat niet met Tab bereikbaar is, is ook niet bereikbaar voor veel hulpsoftware -- schakelbesturing, spraakbesturing en in veel gevallen ook schermlezers.

Bij onze audits beginnen we altijd met het toetsenbord. Binnen een paar minuten weet je:

- Zijn alle interactieve elementen (links, knoppen, formuliervelden) bereikbaar?
- Is de focusvolgorde logisch?
- Is er een zichtbare focus-indicator?
- Kun je modals, menu's en andere componenten openen en sluiten?
- Zijn er focusvallen waar je niet meer uitkomt?

## Andere browsermeldingen die je tests verstoren

De Chrome-melding is niet het enige obstakel. Hier zijn een paar andere browser-eigenaardigheden die je kunt tegenkomen:

- **Browserextensies.** Extensies zoals wachtwoordmanagers, adblockers en vertaaltools voegen eigen elementen toe aan de pagina. Die krijgen soms focus en verstoren de focusvolgorde. Test altijd in een schoon profiel of in incognito-modus.
- **PDF-viewers in de browser.** Chrome's ingebouwde PDF-viewer heeft beperkte toetsenbordnavigatie. Test PDF's altijd ook met een desktopschermlezer.
- **Autofill-suggesties.** Chrome en Firefox tonen soms autofill-dropdowns die de focus overnemen. Dit kan verwarrend zijn tijdens het testen van formulieren.

## Je testomgeving inrichten

Een paar tips om je testomgeving schoon te houden:

- **Gebruik een apart browserprofiel** zonder extensies voor toegankelijkheidstests
- **Zet browserupdates niet uit** -- nieuwe versies lossen soms toegankelijkheidsproblemen op, maar kunnen ook nieuwe introduceren
- **Test in meerdere browsers.** Chrome, Firefox en Safari hebben elk hun eigen focusgedrag. Wat in Chrome werkt, werkt niet per se in Safari
- **Houd een toetsenbordcheatsheet bij.** Tab, Shift+Tab, Enter, Spatiebalk, Escape, pijltoetsen -- dat zijn je basistoetsen. Maar elke component heeft eigen verwachtingen (zie de [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/))
