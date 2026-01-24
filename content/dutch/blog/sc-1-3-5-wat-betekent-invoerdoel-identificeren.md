---
title: "SC 1.3.5 - Wat betekent “Invoerdoel identificeren”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "1-3-5"
  - "formulier"
---

Formulieren zijn vaak een belangrijk onderdeel van een website, bijvoorbeeld voor aanmeldingen, contactformulieren of online aankopen. Voor gebruikers met een beperking kan het invullen van formulieren ingewikkeld zijn. Moderne browsers en assistieve technologieën kunnen gebruikers helpen met automatisch invullen of personaliseren – **maar alleen als de velden correct zijn gemarkeerd**.

Daarom zegt WCAG: **geef duidelijk aan wat het doel is van elk invoerveld, zodat technologieën zoals schermlezers en autofill goed kunnen helpen**.

Dit heet **1.3.5 Identify Input Purpose**.

## Wat wordt er van websites verwacht?

- Gebruik **standaard HTML-attributen** om aan te geven wat elk invoerveld betekent (`autocomplete`\-attribuut).

- Denk aan velden voor naam, e-mail, telefoonnummer, adres, geboortedatum en wachtwoord.

Kort: maak formulieren slim en toegankelijk door velden duidelijk te labelen.

## Wat is niet verplicht?

- Velden die geen persoonlijke informatie verzamelen (bijvoorbeeld zoekvelden of notities) hoeven niet altijd gemarkeerd te worden.

- Pure decoratieve formulieren, zoals een zoekbalk voor producten, vallen hier niet onder.

## Veelgemaakte fouten

- Geen gebruik maken van `autocomplete` -attribuut.

## Wat kun je als webredacteur of manager doen?

- **Controleer je formulieren**: Hebben de belangrijkste velden (naam, e-mail, telefoon) de juiste `autocomplete`\-attributen?

- **Test met autofill**: Werkt automatisch invullen in verschillende browsers en op mobiele apparaten?

- **Vraag je webbouwer**: Worden invoerdoelen correct geïdentificeerd in de HTML?

## Samenvatting

Duidelijke invoervelden helpen gebruikers sneller en makkelijker formulieren invullen. Dit is niet alleen beter voor de toegankelijkheid, maar maakt je site ook gebruiksvriendelijker voor iedereen.
