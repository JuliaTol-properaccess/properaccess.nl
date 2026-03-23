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
    

Deze lijst is niet volledig -- de knop die het venster opent, heeft z’n eigen checklist.

## WCAG 1.4.13: Content on Hover or Focus

Er is een specifiek WCAG-criterium dat hierover gaat: **SC 1.4.13 Content on Hover or Focus**. Dit criterium stelt drie eisen aan content die verschijnt bij hover of focus:

**1. Wegklikbaar (Dismissible).** De gebruiker moet het verschenen element kunnen sluiten zonder de muis te verplaatsen of de focus te verliezen. De standaard manier: druk op **Escape**. Dit is belangrijk voor vergrotingssoftware-gebruikers -- als een tooltip hun leestekst bedekt, moeten ze die kunnen wegsluiten.

**2. Hoverbaar (Hoverable).** Als de content verschijnt door een muishover, moet de gebruiker de muis naar het verschenen element kunnen bewegen zonder dat het verdwijnt. Denk aan een tooltip: als je je muis ernaartoe beweegt om de tekst te lezen, mag de tooltip niet dichtklappen.

**3. Persistent.** De content moet zichtbaar blijven totdat de gebruiker het expliciet sluit, de hover of focus verplaatst, of de content niet meer relevant is. Het mag niet vanzelf verdwijnen na een paar seconden.

## Andere manieren om tijdelijke content te bevriezen

Naast de `debugger`-methode zijn er nog een paar trucjes:

- **Chrome DevTools > Rendering > Emulate a focused page.** Hiermee kun je de pagina in een permanente focus-staat houden.
- **Sources-paneel > Event Listener Breakpoints.** Zet een breakpoint op `blur` of `mouseout` events. Het script pauzeert voordat het element verdwijnt.
- **CSS aanpassen in DevTools.** Zoek de CSS-regel die het element verbergt (vaak `display: none` of `opacity: 0` op een parent bij `:hover`) en schakel die tijdelijk uit.

## Waarom dit ertoe doet

Tijdelijke content is een van de lastigste categorieeen om te testen, juist omdat het verdwijnt voordat je het goed kunt bekijken. Maar voor schermlezers, toetsenbordgebruikers en mensen met vergrotingssoftware is het cruciaal dat deze elementen correct zijn gebouwd. Een ontoegankelijk dropdown-menu of tooltip kan betekenen dat iemand een hele sectie van je website niet kan bereiken.
