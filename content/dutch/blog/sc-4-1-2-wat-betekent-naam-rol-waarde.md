---
title: "SC 4.1.2 - Wat betekent \"Naam, rol, waarde\""
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
description: "WCAG 4.1.2 vereist dat interactieve elementen een correcte naam, rol en waarde hebben. Lees hoe je aria-labels en semantische HTML correct toepast."
---

Succescriterium 4.1.2 richt zich op het juist benoemen van interactieve elementen zoals knoppen, invoervelden en links. Dit succescriterium zorgt ervoor dat hulpsoftware zoals schermlezers deze elementen goed kunnen identificeren en de juiste naam, rol en waarde aan gebruikers kunnen overbrengen.

Een toegankelijkheidsnaam (accessibility name) verwijst naar de beschrijvende tekst die aan een element wordt toegewezen via HTML-attributen zoals aria-label, aria-labelledby, alt, of door de zichtbare tekst van het element. Deze naam maakt duidelijk wat het element doet of welke inhoud het bevat.

## Waarom is toegankelijkheidsnaam belangrijk?

Een duidelijke en accurate toegankelijkheidsnaam is cruciaal omdat het gebruikers van hulpmiddelen, zoals schermlezers, in staat stelt om te begrijpen wat een element op een pagina doet. Zonder een goede naamgeving kunnen zij niet interactief en zelfstandig door een website navigeren. Voor mensen met visuele beperkingen of cognitieve uitdagingen is een duidelijke toegankelijkheidsnaam essentieel om de bedoeling en functionaliteit van een website-element te begrijpen.

## Hoe test je toegankelijkheidsnaam?

Er zijn verschillende manieren om toegankelijkheidsnamen te testen:

1. **Gebruik van een schermlezer**: Open de website met een schermlezer (zoals NVDA of VoiceOver) en navigeer naar interactieve elementen. Let op of de naam die wordt aangekondigd overeenkomt met de visuele functie van het element.

3. **Developer Tools in browsers**: Inspecteer de broncode met ingebouwde tools van de browser (zoals Chrome DevTools) om te controleren of er relevante aria-label, alt, of title-attributen aanwezig zijn.

![screenshot van DevTools in Chrome](https://properaccess.nl/wp-content/uploads/2024/10/Scherm­afbeelding-2024-10-22-om-19.34.41-1024x350.png)

## Voorbeelden van fouten onder WCAG SC 4.1.2 m.b.t. naam

1. **Knoppen zonder beschrijving**: Een knop die alleen een afbeelding bevat, zonder een aria-label of alt-tekst, bijvoorbeeld een zoekknop die alleen als "knop" wordt herkend door een schermlezer.

3. **Invoervelden zonder label**: Tekstvelden of formulieren die geen zichtbaar label hebben en geen associatie hebben met een label-element of aria-labelledby-attribuut.

5. **Links met alleen een afbeelding**: Links die alleen een afbeelding bevatten zonder alternatieve tekst of aria-label, waardoor een schermlezer slechts "link" aankondigt zonder verdere context.

## Hoe geef je naam aan een element?

Er zijn verschillende methoden om een naam aan een element toe te kennen. De juiste keuze hangt af van het type element:

1. **aria-label**: Gebruik aria-label voor interactieve elementen zoals knoppen of links die geen zichtbare tekst bevatten. Bijvoorbeeld: `<button aria-label="Verstuur formulier"></button>.`

3. **aria-labelledby**: Gebruik aria-labelledby wanneer een element zijn naam ontleent aan een ander element op de pagina. Bijvoorbeeld: `<input id="email" aria-labelledby="email-label"><label id="email-label" for="email">E-mailadres</label>`.

5. **alt-attribuut voor afbeeldingen**: Gebruik een betekenisvolle alt-tekst voor afbeeldingen, bijvoorbeeld: `<img src="logo.png" alt="Logo van gemeente X">`.

7. **Zichtbare tekst als naam**: Voor knoppen of links met zichtbare tekst is het voldoende om de juiste en duidelijke tekst te gebruiken. Bijvoorbeeld: `<a href="/contact">Neem contact op</a>`.

## **Conclusie**

Het juist benoemen van elementen onder WCAG SC 4.1.2 is essentieel om een toegankelijke digitale ervaring te bieden voor iedereen. Het biedt gebruikers van hulpmiddelen duidelijke en intuïtieve informatie, wat leidt tot betere navigatie en interactie. Door consistent namen aan elementen toe te voegen, zorg je ervoor dat je website voldoet aan WCAG-normen en toegankelijk blijft voor een breed publiek.
