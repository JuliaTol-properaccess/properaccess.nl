---
title: "Hoe test ik focus zichtbaarheid"
date: 2025-10-23
slug: "hoe-test-ik-focus-zichtbaarheid"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags:
  - "2-4-7"
description: "Hoe test je focus zichtbaarheid volgens WCAG 2.4.7? Praktische stappen voor toetsenbordnavigatie en zichtbare focus."
keywords:
  - focus zichtbaarheid testen
  - wcag 2.4.7 focus zichtbaarheid
  - toetsenbord focus testen
aliases:
  - /hoe-test-ik-focus-zichtbaarheid/
---

# Hoe test ik SC 2.4.7 - Focus zichtbaarheid

Navigeer met het toetsenbord door alle elementen op de pagina die focus kunnen krijgen. 

- Tab toets vooruit navigeren
- Shift Tab achteruit navigeren
- Pijltoetsen binnen een element navigeren

Activeer met Enter of Spatiebalk eventuele functies die een menu, dialoogvenster of iets vergelijkbaars openen.

Als een element geen zichtbare focusmarkering heeft, controleer dan in de CSS-code of de focusmarkering bewust is verborgen. 


Open de Inspector, klik op een element dat geen focus heeft, klik op de knop met ":hov" en vervolgens op een checkbox naast het label ":focus". De boosdoener is de code ‘outline:none’. Hiermee is de standaard browserfocus verwijderd.

## Uitzondering

Het is toegestaan dat een focusmarkering pas zichtbaar wordt zodra het toetsenbord is gebruikt. Zodra de markering eenmaal is weergegeven, moet deze echter zichtbaar blijven.

## Controles

- Alle elementen die focus kunnen krijgen, hebben een zichtbare focusmarkering.
