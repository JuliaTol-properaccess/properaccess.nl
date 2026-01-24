---
title: "SC 2.4.7 - Wat betekent “Focus zichtbaar”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-4-7"
  - "focus"
---

Mensen die hun toetsenbord gebruiken om door een website te navigeren, moeten kunnen zien welk element op dat moment actief is. Zonder een duidelijke focus-indicator kunnen ze de draad kwijt raken en niet zien waar ze zich bevinden op de pagina. Dit is vooral belangrijk voor mensen met een motorische beperking of visuele beperking.

Daarom zegt WCAG: **zorg dat elk interactief element een duidelijke visuele focus krijgt wanneer het geselecteerd is**.

Dit heet **2.4.7 Focus Visible**.

## Wat wordt er van websites verwacht?

- Elk interactief element (knoppen, links, formuliervelden) moet **een duidelijk zichtbare focus** hebben als het geselecteerd is.

- De focus-indicator moet opvallen, bijvoorbeeld door een **gekleurde rand**, **schaduw** of **verandering in achtergrondkleur**.

Kort: laat gebruikers altijd zien waar ze zich bevinden op je site.

## Wat is niet verplicht?

- Decoratieve of niet-interactieve elementen hoeven geen focus-indicator te hebben.

- Je hoeft geen visuele focus toe te voegen aan elementen die nooit via het toetsenbord geselecteerd worden (zoals puur decoratieve afbeeldingen).

## Veelgemaakte fouten

- Focus-indicatoren die te subtiel zijn (bijvoorbeeld een lichte, dunne rand die nauwelijks zichtbaar is).

- Helemaal geen focus-styling, omdat standaardbrowserstijlen zijn verwijderd.

- Interactieve elementen die wel visueel veranderen bij hover (met de muis), maar niet bij toetsenbordfocus.

## Wat kun je als webredacteur of manager doen?

- **Test je site met alleen toetsenbordnavigatie** (Tab en Shift-Tab): Kun je altijd zien waar je bent?

- **Controleer interactieve elementen**: Hebben knoppen, links en formuliervelden een duidelijke focus-stijl?

- **Vraag je webbouwer**: Zijn focusstijlen correct ingesteld en niet per ongeluk verwijderd in de CSS?

## Samenvatting

Focus-indicatoren maken je site gebruiksvriendelijker en toegankelijker voor iedereen die niet met een muis navigeert. Zorg dat gebruikers altijd kunnen zien waar ze zich bevinden op je site.
