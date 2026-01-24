---
title: "SC 2.5.7 - Wat betekent “Sleepbewegingen”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-5-7"
---

Veel moderne websites en apps maken gebruik van **sleepbewegingen** om inhoud te verplaatsen, bijvoorbeeld bij fotogalerijen, schuifbalken, kaarttoepassingen of drag-and-drop formulieren. Dit kan lastig of zelfs onmogelijk zijn voor gebruikers met een motorische beperking, zoals tremoren, beperkte handcoördinatie of spraakgestuurde apparaten.

Daarom zegt WCAG: **bied een alternatief voor sleepbewegingen, zodat iedereen de interface kan gebruiken**.

Dit heet **2.5.7 Dragging Movements**.

## Wat wordt er van websites verwacht?

- Als je een functie hebt die **slepen** vereist, moet je een alternatief aanbieden, zoals:
    - **Klikken** om iets te selecteren en vervolgens op een andere plaats te klikken om het neer te zetten,
    
    - **Knoppen** om inhoud te verplaatsen,
    
    - Of **toetsenbordnavigatie** voor hetzelfde effect.

Kort: bied altijd een alternatief voor slepen.

## Wat is niet verplicht?

- Elementen die puur decoratief zijn en geen echte interactie vereisen, hoeven geen alternatief te hebben.

- Als het slepen zelf een essentieel onderdeel is van de ervaring (bijvoorbeeld een tekentoepassing), dan mag je dit behouden, zolang er ook een alternatieve manier is.

## Veelgemaakte fouten

- Fotogalerijen die alleen via slepen bediend kunnen worden.

- Formulieren die alleen via drag-and-drop worden ingediend.

- Kaarten die alleen via sleepbewegingen verschoven kunnen worden, zonder knoppen of toetsenbordondersteuning.

## Wat kun je als webredacteur of manager doen?

- **Test je interactieve elementen**: Kun je alles bedienen zonder te slepen?

- **Controleer alternatieven**: Zijn er knoppen, toetsenbordcombinaties of andere manieren om elementen te verplaatsen?

- **Vraag je webbouwer**: Is er aandacht besteed aan mensen die niet kunnen slepen, bijvoorbeeld via `aria-grabbed` en `aria-dropeffect`?

## Samenvatting

Sleepbewegingen zijn niet voor iedereen toegankelijk. Zorg daarom altijd voor een alternatief, zodat ook mensen met beperkte motorische controle je website goed kunnen gebruiken.
