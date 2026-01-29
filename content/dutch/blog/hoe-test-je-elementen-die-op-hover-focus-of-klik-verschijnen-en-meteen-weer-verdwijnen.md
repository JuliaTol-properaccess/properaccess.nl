---
title: "Hoe test je elementen die op hover, focus of klik verschijnen (en meteen weer verdwijnen)?"
slug: "hoe-test-je-elementen-die-op-hover-focus-of-klik-verschijnen-en-meteen-weer-verdwijnen"
date: 2025-10-25
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags:
  - "4-1-2"
description: "Hoe test je UI-elementen die op hover, focus of klik verschijnen en weer verdwijnen? Praktische testmethode met Chrome DevTools."
keywords:
  - toegankelijke naam van elementen testen
  - wcag tijdelijke content testen
  - toegankelijkheid menus en dropdowns
aliases:
  - /hoe-test-je-elementen-die-op-hover-focus-of-klik-verschijnen-en-meteen-weer-verdwijnen/
---

Sommige UI-elementen verschijnen alleen kort — bijvoorbeeld vensters, dropdowns of menus die op hover of focus zichtbaar worden. Die kunnen interactieve onderdelen bevatten die je moet testen op toegankelijkheid. Denk aan:

- Is het element bereikbaar met het toetsenbord?
- Is de focus zichtbaar en heeft die voldoende kleurcontrast?
- Zijn alle interactieve elementen toegankelijk voor een schermlezer?  
    

Het probleem: vaak sluiten zulke vensters meteen zodra de muis beweegt of de focus verandert. Daardoor kun je ze niet goed analyseren.

Oplossing: “Bevries” het venster.

Zo doe je dat in Chrome DevTools:

1. Open de Console. Plak dit script:

```
setTimeout(() => { debugger }, 3000)
```

2. Druk op Enter en beweeg de muis meteen naar het element dat het venster opent.

4. Na 3 seconden pauzeert het script en blijft het venster open.

6. Test de inhoud.  
    

### Wat je kunt testen

Als het bijvoorbeeld om een menu gaat, controleer dan minimaal:

- Focuszichtbaarheid en kleurcontrast
- Focusvolgorde binnen het menu en ten opzichte van de knop die het opent
- Contrast van tekst — in standaard, hover en focus-toestand
- Toetsenbordbediening
- Naam en rol van interactieve elementen
- Status van checkboxes of toggles
- Of het menu met de ESC-toets kan worden gesloten  
    

💡 Deze lijst is niet volledig.

De knop die het venster opent, heeft z’n eigen checklist. Zie onze andere artikelen voor meer richtlijnen.
