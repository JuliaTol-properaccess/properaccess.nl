---
title: "SC 4.1.3 - Wat betekent \"Statusbericht\""
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "4-1-3"
description: "WCAG 4.1.3 vereist dat statusberichten programmatisch bepaalbaar zijn voor schermlezers. Lees hoe je aria-live en ARIA-rollen correct gebruikt."
---

Succescriterium (SC) 4.1.3 gaat over de statusmeldingen. Dit criterium vereist dat statusmeldingen (bijvoorbeeld foutmeldingen, bevestigingen, waarschuwingen) als dusdanig programmatisch bepaald kunnen worden, zodat gebruikers die afhankelijk zijn van ondersteunende technologieën (zoals schermlezers) deze meldingen kunnen horen op het moment dat ze worden getoond. Dit betekent dat statusmeldingen op een manier moeten worden gecodeerd dat ze door software kunnen worden gedetecteerd en aan de gebruiker kan worden voorgelezen.

Dit succescriterium is grotendeels bedoeld voor [webontwikkelaar](https://properaccess.nl/tag/ontwikkelaar/).

## Waarom is SC 4.1.3 belangrijk?

SC 4.1.3 is belangrijk omdat het ervoor zorgt dat alle gebruikers, inclusief diegenen die afhankelijk zijn van hulpsoftware, op de hoogte worden gesteld van belangrijke veranderingen op een webpagina. Dit is cruciaal voor een toegankelijke gebruikerservaring, aangezien statusmeldingen vaak essentieel zijn voor het voltooien van taken, zoals het succesvol indienen van een formulier, het ontvangen van foutmeldingen of andere belangrijke feedback van de website. Zonder deze meldingen kunnen gebruikers gedesoriënteerd raken of cruciale informatie missen.

In de onderstaande voorbeelden is er sprake van een statusbericht, alleen wanneer de focus niet naar de nieuwe content wordt verplaatst:

- Bericht dat sessie verloopt (“U bent te lang niet-actief geweest ..”).

- Wachtanimatie wanneer de pagina of een deel wordt geladen

- Bericht dat gegevens worden opgehaald

- Gevonden resultaten in een zoekveld die een suggestie van gevonden resultaten geeft (niet de resultaten zelf!)

- Bericht op de pagina "XX resultaten gevonden" als de pagina niet wordt ververst

- Een karakterteller onder een tekstvak

- Foutmeldingen in formulieren (die verschijnen zonder de pagina te herladen)

- Bericht dat het formulier is verstuurd (die verschijnt zonder de pagina te herladen)

- Product toegevoegd aan een winkelmand (cijfer bij het winkelmandje)

- Like bij een vacature of bericht of iets dergelijks

- De voortgangsbalk verandert zonder de pagina te herladen

- Berichten in chat

## Hoe test je SC 4.1.3?

Het testen of een statusbericht toegankelijk is, kan als volgt worden uitgevoerd:

Visuele Inspectie: Voer acties uit op de webpagina die statusmeldingen zouden moeten genereren, zoals het invullen en indienen van formulieren, en observeer of de meldingen focus krijgen. Als de focus niet naar de melding wordt verplaatst, dan heb je met een statusbericht te maken.

Gebruik van hulpmiddelen: Gebruik schermlezers om te controleren of statusmeldingen worden aangekondigd wanneer ze verschijnen. Tools zoals NVDA (voor Windows) of VoiceOver (voor macOS) kunnen hierbij helpen.

Code Inspectie: Controleer of statusmeldingen programmatisch bepaald kunnen worden door te kijken of er ARIA-attributen (`aria-live="polite"`, `role="status"`, etc.) aanwezig zijn in de HTML-code. De aanwezigheid van deze ARIA-code is nog geen garantie dat een statusbericht wordt voorgelezen. Dit moet je echt met een schermlezer testen.

## Voorbeelden van fouten onder WCAG SC 4.1.3

Gebruik van verkeerde ARIA-attributen. De statusberichten worden te vaak voorgelezen waardoor de pagina juist ontoegankelijk wordt. 

## Hoe maak je statusberichten toegankelijk?

### Gebruik ARIA-attributen

Een container met een attribuut aria-live moet op de pagina aanwezig en leeg zijn voordat er een aankondiging wordt gedaan. Je kunt niet tegelijkertijd een aria-live aan een container en een statusbericht aan de container toevoegen. De Accessibility API moet weten dat deze regio er is en dat deze leeg is voordat er aankondigingen naar de schermlezer worden gestuurd. Kan dat niet, dan kun je dit met Javascript oplossen door eerst aria-live aan een container toe te voegen en vervolgens twee of drie seconden later het bericht dat moet worden aangekondigd door de schermlezer. 

Let op dat je de onderstaande `span.sr-only` niet met `display:none` verbergt.

```
<button id="addProduct">Voeg toe aan de shoppingmand</button> 

<div id="liveRegion" aria-live="assertive">
<span>Mijn mandje</span>   
 <span class=”sr-only”> </span>
</div>

<script>
    $('#addProduct').click(function(){
      var live = $('#liveRegion span.sr-only');
      live.text('product toegevoegd');

      setTimeout(function(){ 
        live.text('');
      }, 3000);
    });
</script>
```

### Combinatie van aria-describedby en focusverplaatsing

Bij foutmeldingen is een goed alternatief het gebruik van aria-describedby om de foutmeldingen te associëren met het invoerveld waar de fout is gemaakt EN het verplaatsen van focus naar het veld waar de fout is gemaakt. 

## Goede bronnen over WCAG SC 4.1.3

- [W3C Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/#status-messages)

- [WebAIM: Introduction to Web Accessibility](WebAIM: Introduction to Web Accessibility)

- [W3C ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)

- [MDN Web Docs: Using ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

- [Deque University: ARIA Live Regions](https://dequeuniversity.com/tips/webpagechanges)
