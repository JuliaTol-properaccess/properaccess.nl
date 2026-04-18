---
title: 'SC 3.2.4 - Wat betekent "Consistente identificatie"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-2-4"
description: "WCAG 3.2.4 vereist dat dezelfde elementen overal dezelfde naam en functie hebben. Lees hoe je consistentie waarborgt op je website."
aliases:
  - /sc-3-2-4-wat-betekent-consistente-identificatie/
---

Op de homepage staat een knop "Zoeken". Op de productpagina heet dezelfde functie "Vind". In de footer staat "Search". Het zijn allemaal dezelfde actie, maar ze heten steeds anders. Voor de meeste bezoekers is dat licht verwarrend. Voor iemand met een cognitieve beperking kan het het verschil zijn tussen een website die werkt en een die niet te gebruiken is.

**WCAG succescriterium 3.2.4** (Consistent Identification) eist dat elementen met dezelfde functie op je hele website ook dezelfde naam en presentatie hebben.

## Waarom consistentie ertoe doet

Mensen leren patronen herkennen. Als een zoekknop op pagina A "Zoek" heet, verwacht je op pagina B dezelfde tekst voor dezelfde functie. Dat geldt voor iedereen, maar vooral voor:

- **Mensen met cognitieve beperkingen** die afhankelijk zijn van herkenbare patronen en voorspelbaarheid
- **Schermlezergebruikers** die een lijst van links of knoppen op de pagina opvragen. Als dezelfde functie drie verschillende namen heeft, is dat verwarrend
- **Gebruikers van spraakbesturing** die de zichtbare tekst gebruiken om elementen te activeren. Als de naam steeds verandert, weten ze niet welk commando ze moeten geven

## Wat wordt er verwacht?

- Gebruik **dezelfde labels** voor dezelfde functies op verschillende pagina's
- Knoppen of links met dezelfde functie moeten **hetzelfde klinken en eruitzien**
- Iconen moeten consistent dezelfde betekenis hebben, ongeacht waar ze staan

Dit gaat niet alleen over zichtbare tekst. Ook de **accessible name** (de naam die hulpsoftware voorleest) moet consistent zijn. Een knop kan er visueel hetzelfde uitzien maar een andere aria-label hebben op verschillende pagina's -- dat is ook een probleem.

## Voorbeelden uit de praktijk

| Inconsistent | Consistent |
|---|---|
| "Zoek" op homepage, "Vind" op productpagina | Overal "Zoek" |
| "Contact" in de header, "Neem contact op" in de footer | Overal "Contact" |
| Winkelwagenticoon soms met label "Winkelwagen", soms "Cart" | Overal "Winkelwagen" |
| Prullenbakicoon dat op pagina A "Verwijderen" betekent en op pagina B "Archiveren" | Elk icoon heeft een vaste betekenis |

## Wat is niet verplicht?

- Elementen met **verschillende functies** mogen uiteraard verschillende labels hebben, ook als ze op elkaar lijken
- De eis geldt voor elementen met dezelfde functie op **verschillende pagina's** binnen dezelfde website. Binnen een pagina is dit meestal al consistent
- Decoratieve elementen zonder interactieve functie vallen hier niet onder

## Veelgemaakte fouten

- Een zoekfunctie die soms "Zoek" heet en soms "Vind" of "Search"
- Een inlogknop die op de ene pagina "Inloggen" heet en op een andere "Log in" of "Mijn account"
- Iconen die op verschillende pagina's een andere betekenis hebben
- Links naar hetzelfde doel met verschillende linkteksten ("Bekijk meer", "Lees verder", "Meer informatie")

## Wat kun je als webredacteur of manager doen?

- **Maak een terminologielijst** voor je website: welke termen gebruik je voor welke functies? Deel die met je team.
- **Controleer je labels**: gebruik je overal dezelfde termen voor dezelfde functies?
- **Test met een schermlezer**: begrijpen gebruikers de functies overal op dezelfde manier?
- **Vraag je webbouwer**: zijn alle knoppen en links consequent gelabeld in de code, inclusief aria-labels?

Consistentie zorgt voor een prettigere en voorspelbaardere gebruikerservaring. Het kost je weinig moeite om het goed te doen, maar het maakt een groot verschil voor je bezoekers.
