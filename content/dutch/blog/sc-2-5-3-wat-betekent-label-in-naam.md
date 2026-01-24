---
title: "SC 2.5.3 - Wat betekent “Label in naam”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-5-3"
---

Mensen die spraakherkenningssoftware gebruiken om te navigeren, moeten vaak de exacte naam of het label van een knop, link of ander interactief element uitspreken om die te activeren. Als de zichtbare tekst niet overeenkomt met de **technische naam** van het element, kan dit verwarrend zijn of zelfs onbruikbaar worden.

Daarom zegt WCAG: **zorg dat de zichtbare tekst van een interactief element overeenkomt met de naam die door assistieve technologie wordt herkend**.

Dit heet **2.5.3 Label in Name**.

## Wat wordt er van websites verwacht?

- De zichtbare tekst van een knop, link of ander interactief element moet **overeenkomen** met de naam die door assistieve technologie wordt gebruikt (bijvoorbeeld `aria-label` of `aria-labelledby`).

- Dit betekent dat de naam die je ziet, ook de naam is die je uitspreekt bij spraakbesturing.

Kort: zorg dat zichtbare tekst en technische namen consistent zijn.

## Wat is niet verplicht?

- Pure decoratieve elementen zonder interactieve functie hoeven geen specifieke naam te hebben.

- Je hoeft niet altijd de volledige zichtbare tekst te gebruiken, zolang het belangrijkste deel maar overeenkomt.

## Veelgemaakte fouten

- Een knop met de tekst **“Verzenden”** die technisch is gelabeld als **“Verstuur”**.

- Links met alleen een pictogram die geen duidelijke naam hebben voor spraakbesturing.

- Knoppen met lange beschrijvende `aria-labels` die totaal afwijken van de zichtbare tekst.

## Wat kun je als webredacteur of manager doen?

- **Controleer je knoppen en links**: Komt de zichtbare tekst overeen met de naam die in de code staat?

- **Test met spraakbesturing**: Kun je knoppen en links activeren door de zichtbare tekst uit te spreken?

- **Vraag je webbouwer**: Zijn alle `aria-labels` en `aria-labelledby` correct ingesteld?

## Samenvatting

Consistente namen maken je site toegankelijker voor gebruikers die spraakherkenning of andere assistieve technologie gebruiken. Zorg dat de zichtbare tekst en de technische naam van je interactieve elementen altijd overeenkomen.
