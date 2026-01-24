---
title: "SC 3.1.1 - Wat betekent \"Taal van de pagina\""
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "3-1-1"
---

Succescriterium (SC) 3.1.1 stelt dat de standaardtaal van een webpagina moet worden aangegeven. Dit betekent dat de primaire taal waarin de navigatie, de header en de footer is geschreven, de correcte specificatie in de HTML-code moet krijgen. Dit helpt ondersteunende technologieën, zoals schermlezers, om de inhoud correct uit te spreken.

Dit succescriterium is interessant voor een [webontwikkelaar](https://properaccess.nl/tag/ontwikkelaar/) en [webredactie](https://properaccess.nl/tag/webredactie/).

## Waarom is SC 3.1.1 belangrijk?

Het aangeven van de standaardtaal van een webpagina is cruciaal voor de toegankelijkheid. Het zorgt ervoor dat gebruikers die afhankelijk zijn van ondersteunende technologieën, zoals schermlezers, de inhoud correct kunnen uitspreken. Zonder deze aanduiding kunnen dergelijke technologieën niet bepalen welke taal ze moeten gebruiken, wat kan leiden tot misinterpretaties en een slechte gebruikerservaring voor mensen die schermlezers gebruiken.

## Hoe test je SC 3.1.1?

Het testen van SC 3.1.1 kan als volgt worden uitgevoerd:

### Visuele Inspectie

Controleer of de taal van de pagina is gedefinieerd in het HTML-element. `Bijvoorbeeld: <html lang="nl">` voor een Nederlandstalige pagina. Klik met je rechtermuisknop op de pagina en kies voor “Inspecteer element”. 

![](https://properaccess.nl/wp-content/uploads/2024/08/Scherm­afbeelding-2024-08-04-om-15.39.13-1024x475.png)

### Gebruik van hulpmiddelen

Gebruik tools zoals WAVE, AXE, of de ingebouwde toegankelijkheidscontrole van browsers om te controleren of de taal van de inhoud correct is gespecificeerd.

## Voorbeelden van fouten onder WCAG SC 3.1.1

- Geen taal aangegeven: De webpagina heeft geen lang-attribuut gedefinieerd in het html-element, waardoor de standaardtaal niet is aangegeven.

- Onjuiste taalspecificatie: De taal die is gespecificeerd in het html-element komt niet overeen met de primaire taal van de inhoud op de pagina. Bijvoorbeeld, de pagina is in het Nederlands geschreven, maar de `<html lang="en">` is ingesteld.

## Hoe los je het op?

- Definieer de taal van de pagina: Voeg een lang-attribuut toe aan het html-element om de hoofdtal van de pagina aan te geven. Bijvoorbeeld, voor een Nederlandstalige pagina: `<html lang="nl">.`

- Heb je een taalswich op je website? Controleer of het lang-attribuut een correcte waarde krijgt als een andere taal wordt geselecteerd.

- Controleer de HTML-code: Zorg ervoor dat het lang-attribuut correct is ingesteld en overeenkomt met de taal van de inhoud op de pagina.

- Gebruik automatische tools: Maak gebruik van toegankelijkheidstools om automatisch te controleren op ontbrekende of incorrecte taalmarkeringen en deze waar nodig te corrigeren.

## Goede bronnen over WCAG SC 3.1.1

- [W3C Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/#language-of-page)

- [WebAIM: Introduction to Web Accessibility](WebAIM: Introduction to Web Accessibility)

- [W3C Techniques for WCAG 2.1: Language of Page](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)

- [Axe Accessibility Tools](https://www.deque.com/axe/)

- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
