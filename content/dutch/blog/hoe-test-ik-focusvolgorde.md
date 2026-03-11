---
title: "Hoe test ik focusvolgorde?"
date: 2025-10-23
slug: "hoe-test-ik-focusvolgorde"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags:
 - "2-4-3"
description: "Hoe test je focusvolgorde volgens WCAG 2.4.3? Praktische stappen om toetsenbordnavigatie en logische focus te controleren."
keywords:
  - focusvolgorde testen
  - wcag 2.4.3 focusvolgorde
  - toetsenbord navigatie testen
aliases:
  - /hoe-test-ik-focusvolgorde/
---

Focusvolgorde is een van die dingen die je pas opvalt als het misgaat. Je drukt op Tab en ineens spring je van de header naar de footer, of je opent een modal en de focus blijft achter de overlay hangen. Voor iemand die alleen het toetsenbord gebruikt, is dat het verschil tussen een bruikbare website en een onbruikbare.

**WCAG succescriterium 2.4.3** (Focusvolgorde) eist dat de volgorde waarin elementen toetsenbordfocus krijgen, logisch en bruikbaar is. Dat betekent niet dat de focusvolgorde exact de visuele volgorde moet volgen -- kleine afwijkingen zijn prima. Maar de volgorde mag niet verwarrend zijn of de betekenis van de content aantasten.

## Wie heeft hier last van?

- **Mensen met een motorische beperking** die een toetsenbord, schakelaar of andere invoerapparatuur gebruiken
- **Blinde gebruikers** die met een schermlezer navigeren -- zij zien niet waar de focus naartoe springt
- **Mensen met een cognitieve beperking** die afhankelijk zijn van voorspelbare patronen

## Zo test je focusvolgorde

### Stap 1: Begin bij de adresbalk

Klik in de adresbalk van de browser. Gebruik de **Tab**-toets om vooruit te navigeren en **Shift+Tab** om achteruit te gaan. Loop de hele pagina door.

### Stap 2: Let op de volgorde

Volgt de focus een logisch pad? Van navigatie naar hoofdcontent naar footer? Of springt de focus heen en weer op een manier die niet aansluit bij wat je op het scherm ziet?

**Kleine afwijkingen zijn geen probleem.** Als een zoekknop rechts van het zoekveld staat maar net iets eerder focus krijgt, is dat prima. Het wordt een probleem als de focus van de header naar de footer springt en dan terug naar de sidebar.

### Stap 3: Test interactieve componenten

Open met het toetsenbord alle menu's, dialoogvensters, tabs en andere componenten. Let op:

- **Wordt de focus verplaatst naar het geopende element?** Als je een modal opent, moet de focus naar die modal gaan -- niet achter de overlay blijven.
- **Keert de focus terug na sluiting?** Als je de modal sluit, moet de focus teruggaan naar de knop waarmee je de modal opende.
- **Kun je het element weer sluiten?** Escape moet werken bij modals en menu's.

### Stap 4: Check op focusvallen

Een focusval is een element waar je met de Tab-toets niet meer uit kunt. Dit komt voor bij slecht gebouwde modals, embedded content (iframes) of custom widgets. Als je vastzit, is dat een ernstig probleem.

## Veelvoorkomende problemen

- **CSS-layouts met `order` of `flex-direction: row-reverse`** kunnen ervoor zorgen dat de visuele volgorde afwijkt van de DOM-volgorde. De focus volgt de DOM, niet de CSS.
- **`tabindex` met positieve waarden** (zoals `tabindex="1"`) dwingt een onnatuurlijke focusvolgorde af. Gebruik alleen `tabindex="0"` (element toevoegen aan de natuurlijke volgorde) of `tabindex="-1"` (focus programmeerbaar maar niet via Tab).
- **Dynamisch ingevoegde content** (zoals een melding of een notificatie) die niet op de juiste plek in de DOM wordt geplaatst.

## Wat doe je als je een probleem vindt?

De oplossing hangt af van de oorzaak:

- **DOM-volgorde aanpassen** zodat deze overeenkomt met de visuele volgorde
- **Focus management toevoegen** bij interactieve componenten (focus verplaatsen naar een geopend element, terugzetten na sluiting)
- **Positieve tabindex verwijderen** en de natuurlijke volgorde gebruiken

Twijfel je of een afwijking een echt probleem is? De vuistregel: als de afwijking het begrip of de bediening bemoeilijkt, is het een probleem. Als het alleen een kleine visuele afwijking is die niemand in de war brengt, is het prima.
