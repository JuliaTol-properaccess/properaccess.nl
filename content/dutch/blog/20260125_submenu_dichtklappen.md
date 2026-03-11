---
title: "Submenu dichtklappen"
date: 2026-01-25
slug: "submenu-dichtklappen"
aliases:
  - /blog/submenu_dichtklappen/
categories:
  - "webdeveloper"
tags:
  - "developer"
  - "2-4-3"
description: "Hoe zorg je dat een submenu netjes dichtklapt als de toetsenbordfocus verdwijnt? Praktische fix voor WCAG 2.4.3 focusvolgorde."
keywords:
  - WCAG SC 2.4.3
  - wcag focusvolgorde
  - digitale toegankelijkheid developers
---

# Toetsenbordfocus moet logisch zijn

Als bezoekers met het toetsenbord door een website navigeren, moeten interactieve elementen in een logische volgorde focus krijgen. Logisch betekent: aansluitend op de visuele volgorde. Wijkt de focusvolgorde daar sterk van af, dan wordt de website moeilijk te gebruiken voor mensen die geen muis kunnen of willen gebruiken.

Dit raakt onder andere mensen met een motorische beperking, blinde bezoekers die een schermlezer gebruiken, en mensen met een leesstoornis die afhankelijk zijn van voorspelbare navigatiepatronen.

**WCAG succescriterium 2.4.3** (Focusvolgorde) eist dat de volgorde logisch en bruikbaar is.

## Het probleem: een submenu dat open blijft staan

Een veelvoorkomend probleem zit in navigatiemenu's met submenu's. Het scenario:

1. Een bezoeker navigeert met Tab naar een menu-item zoals "Diensten"
2. Het submenu klapt open (op focus of op hover)
3. De bezoeker tabt door alle items in het submenu
4. Na het laatste item gaat de focus naar het volgende hoofdmenu-item
5. **Maar het submenu blijft open staan**

Dat is verwarrend. Het submenu overlapt mogelijk andere content, en de visuele status klopt niet meer met waar de focus is. Op onze eigen website hadden we dit probleem in het hoofdmenu bij "Diensten" en "Voor wie".

## Waarom gebeurt dit?

De meeste submenu's worden geopend met een CSS `:hover` of `:focus-within` selector, of met JavaScript dat luistert naar een `mouseenter` of `focus` event. Maar het sluiten van het menu bij het vertrekken van de focus wordt vaak vergeten -- vooral bij toetsenbordnavigatie.

Bij een muis is het simpel: de muis verlaat het menu-gebied en het menu klapt dicht. Bij toetsenbordnavigatie is er geen "verlaat"-event op dezelfde manier. Je moet expliciet luisteren of de focus zich nog binnen het menu bevindt.

## De oplossing

Luister naar het `focusin`-event op documentniveau. Bij elke focusverandering controleer je of de nieuwe focus zich binnen het menu bevindt. Zo niet, sluit je het menu.

```javascript
document.addEventListener('focusin', (e) => {
  const target = e.target;

  menus.forEach(({ trigger, submenu, close }) => {
    if (
      trigger.contains(target) ||
      submenu.contains(target)
    ) {
      return; // focus is nog binnen het menu
    }

    close(); // focus is buiten het menu → sluit het
  });
});
```

### Hoe werkt dit?

- `focusin` bubbelt (in tegenstelling tot `focus`), dus je vangt het op documentniveau op
- Bij elke focusverandering loop je door alle menu's
- Per menu controleer je of de nieuwe focus in de trigger of het submenu zit
- Zo niet, roep je de `close()`-functie aan

### Extra: sluit ook met Escape

Voeg een `keydown`-listener toe voor de Escape-toets:

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menus.forEach(({ trigger, submenu, close, isOpen }) => {
      if (isOpen && submenu.contains(document.activeElement)) {
        close();
        trigger.focus(); // zet focus terug op de trigger
      }
    });
  }
});
```

## Hoe test je dit?

1. Navigeer met Tab naar het menu-item dat het submenu opent
2. Tab door alle items in het submenu
3. Tab voorbij het laatste item -- het submenu moet nu dichtklappen
4. Druk op Escape terwijl je in het submenu bent -- het menu moet sluiten en de focus moet teruggaan naar de trigger

Doet het menu dit niet? Dan heb je een focusvolgorde-probleem dat je moet oplossen.
