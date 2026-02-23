---
title: "SC 2.1.1 - Wat betekent \"Toetsenbord toegankelijk\""
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-1-1"
description: "WCAG 2.1.1 vereist dat alle functionaliteit via het toetsenbord bereikbaar is. Lees hoe je toetsenbordtoegankelijkheid test en veelgemaakte fouten voorkomt."
---

WCAG 2.1.1 stelt dat alle functionaliteiten op een website toegankelijk zijn via een toetsenbord. Dit is belangrijk omdat niet iedereen een muis kan gebruiken. Interactieve elementen die niet met het toetsenbord te bedienen zijn, zullen ook niet voor schermlezers toegankelijk zijn.

Dit succescriterium is interessant voor de [webontwikkelaar.](https://properaccess.nl/tag/ontwikkelaar/)

## Waarom is toetsenbordtoegankelijkheid belangrijk?

Toetsenbordtoegankelijkheid zorgt ervoor dat mensen met motorische beperkingen, slechtziendheid of blindheid, en zelfs tijdelijke beperkingen, zoals een gebroken arm, de website kunnen gebruiken. Het verbetert ook de bruikbaarheid voor iedereen, zoals mensen die liever toetsenbordnavigatie gebruiken.

## Hoe test je toetsenbordtoegankelijkheid?

Gebruik alleen je toetsenbord om door je website te navigeren. Controleer of je alle interactieve elementen kunt bereiken en gebruiken. Begin in de adresbalk van de browser:

![Adresbalk browser](https://properaccess.nl/wp-content/uploads/2024/07/Scherm­afbeelding-2024-07-31-om-09.58.19-1024x285.png)

- Tab-toets: Gebruik de Tab-toets om van het ene focusbare element naar het andere te gaan.

- Shift + Tab: Gebruik Shift + Tab om terug te gaan naar het vorige element.

- Enter-toets: Gebruik de Enter-toets om links en knoppen te activeren.

- Spatiebalk: Gebruik de spatiebalk om selectievakjes aan of uit te vinken.

- Pijltoetsen: Gebruik de pijltoetsen om door opties in dropdown-menu's, radioknoppen en andere interactieve elementen te navigeren.

## Voorbeelden van fouten onder WCAG 2.1.1

Hier zijn voorbeelden van fouten die we vaak tegenkomen:

### Formulieren

Formulieren moeten volledig toegankelijk zijn via het toetsenbord. Dit betekent dat je met de Tab-toets naar elk veld moet kunnen navigeren en elk veld moet kunnen invullen zonder een muis te gebruiken.

### Links, knoppen, invoervelden, keuzelijsten, etc.

Alle links en knoppen op je website moeten bereikbaar en activeerbaar zijn met het toetsenbord. Dit betekent dat een bezoeker bijvoorbeeld op de Enter-toets kan drukken om een link te volgen of op de spatiebalk een knop kan indrukken.

### Menu knop (de zogenaamde hamburgerknop) en mobiele menu

Zoom eens in op je website. Druk op Control en + (Command en +) totdat de zogenaamde hamburgerknop verschijnt. Bij de meeste websites verdwijnt het hoofdmenu achter deze knop wanneer 200% of meer wordt ingezoomd. Controleer deze knop en alle onderdelen van het mobiele menu op toetsenbordtoegankelijkheid. Kun je het menu afsluiten met het toetsenbord?

### Interactie-elementen

Alle interactieve elementen, zoals secties met in- en uitklapbare content, modale vensters en interactieve widgets, moeten volledig met het toetsenbord bruikbaar zijn. Dit betekent dat je ze kunt openen, sluiten en door de opties kunt navigeren zonder een muis te gebruiken.

Voorbeeld: In de zogenaamde tabs navigeer je met de pijltoetsen tussen de tabkoppen en druk je op Enter om het tabblad te openen.

### Content die verschijnt wanneer je met je muis over elementen beweegt

Content die verschijnt als je met je muis over bepaalde elementen op de webpagina beweegt, moet ook met het toetsenbord te bedienen zijn. Denk aan tooltips, submenu’s en andere hulpmiddelen.

Voorbeeld: Een tooltip-icoon moet geactiveerd kunnen worden door op Enter te drukken.

## Hoe los je het op?

Dit probleem kan alleen een webontwikkelaar oplossen. De makkelijkste oplossing is het gebruik van de standaard HTML-elementen (`<button>`, `<a>`, `<input>` enzovoort) in plaats van niet-interactieve elementen waaraan events met JavaScript zijn toegevoegd. Soms heb je als ontwikkelaar geen keuze en moet je andere technieken gebruiken om toetsenbordtoegankelijkheid te implementeren. Lees onderstaande bronnen of schakel een expert in om je te helpen.

## Goede bronnen over WCAG 2.1.1

- WebAIM (Web Accessibility In Mind): https://webaim.org/techniques/keyboard/

- Deque University: https://www.deque.com/blog/understanding-success-criterion-2-1-1-keyboard/

- Mozilla Developer Network (MDN) Web Docs: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable\_JavaScript\_widgets

- W3C Web Accessibility Initiative (WAI): https://www.w3.org/WAI/test-evaluate/preliminary/#keyboard
