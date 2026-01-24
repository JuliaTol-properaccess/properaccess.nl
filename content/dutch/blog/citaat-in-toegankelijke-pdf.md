---
title: "Hoe maak je een citaat in een PDF-document (en waarom dat belangrijk is voor toegankelijkheid)"
date: 2025-08-19
slug: "citaat-in-toegankelijke-pdf"
categories: 
  - "tips-en-tools"
tags: 
  - "webredactie"
description: "Leer hoe je een citaat correct tagt in een toegankelijke PDF. Praktische uitleg voor webredacties volgens WCAG-richtlijnen."
keywords:
  - toegankelijk pdf citaat
  - wcag pdf toegankelijkheid
  - citaat taggen pdf
---

Als webredacteur werk je dagelijks met teksten, visuals en documenten. Vaak gaat het niet alleen om wat je schrijft, maar ook om hoe je het aanbiedt. Want een document dat er op het eerste gezicht goed uitziet, kan voor iemand die een schermlezer gebruikt juist verwarrend zijn. Een goed voorbeeld hiervan is een citaat in een PDF: hoe zorg je dat dit ook écht als citaat wordt herkend?

In dit artikel leg ik je uit hoe je een citaat toegankelijk tagt in Acrobat Pro, zodat je PDF voldoet aan de richtlijnen voor digitale toegankelijkheid (WCAG).

## Waarom een citaat taggen?

Voor de meeste lezers is een citaat direct herkenbaar door opmaak: inspringing, cursief of een ander lettertype. Maar een schermlezer “ziet” dat niet. Zonder juiste tagging leest de software het citaat gewoon als lopende tekst, en gaat de betekenis verloren.

Door de tekst te taggen als _Quote_ (Citaat) weet een schermlezer: dit stuk tekst hoort bij een citaat. Zo maak je je document semantisch correct én beter toegankelijk.

## Zo tag je een citaat in Acrobat Pro

Het klinkt misschien technisch, maar met een paar stappen ben je er al.

1. Open het Tags-paneel  
    Ga naar:
    - _View_ → _Show/Hide_ → _Navigation Panels_ → _Tags_  
        (In het Nederlands: _Weergave_ → _Tonen/Verbergen_ → _Navigatiedelen_ → _Tags_).

3. Zoek het citaat in de tagstructuur  
    Blader in de boomstructuur tot je de tekst vindt die je als citaat wilt markeren. Vaak staat die onder een `<P>` (Paragraph)-tag.

5. Pas de tag aan naar Quote (Citaat)
    - Klik met de rechtermuisknop op de betreffende `<P>`\-tag.
    - Kies _Eigenschappen_ of _Properties_.  
    - In het eerste veld "Type" verander de tagnaam naar _Quote_ (Citaat).  
        Nu staat het citaat in de tagstructuur als `<Quote`\>.

7. Controleer de structuur  
    Kijk of het citaat goed in de tag-tree staat. Vanaf nu herkent een schermlezer dit als een blokcitaat.


## Belangrijke aandachtspunten

Dit werkt alleen in een **tagged PDF**. Zorg dus dat je document eerst van tags is voorzien.

Niet alle tekstverwerkers voegen automatisch een _Quote_\-tag toe bij export naar PDF. Vaak moet je dit dus handmatig aanpassen in Acrobat Pro.

## Conclusie

Een citaat taggen in een PDF is een kleine moeite, maar het maakt een groot verschil voor toegankelijkheid. Door de juiste semantische tags te gebruiken, zorg je dat alle lezers – ook wie een schermlezer gebruikt – de inhoud goed kunnen volgen.

👉 Wil je weten hoe toegankelijk jouw documenten zijn? Met een **[quickscan digitale toegankelijkheid](https://properaccess.nl/quickscan-digitale-toegankelijkheid/)** ontdek je snel welke verbeteringen nodig zijn.
