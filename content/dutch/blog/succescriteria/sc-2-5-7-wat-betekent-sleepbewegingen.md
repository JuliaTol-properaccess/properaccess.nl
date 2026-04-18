---
title: 'SC 2.5.7 - Wat betekent \"Sleepbewegingen\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "2-5-7"
description: "WCAG 2.5.7 vereist een alternatief voor sleepbewegingen (drag-and-drop). Lees waarom dit belangrijk is en welke alternatieven je kunt bieden."
aliases:
  - /sc-2-5-7-wat-betekent-sleepbewegingen/
---

Je hebt een mooie interface gebouwd waar gebruikers items kunnen slepen om ze te sorteren. Of een kaart waar je kunt slepen om te navigeren. Of een kanban-bord waar je taken van de ene kolom naar de andere sleept. Intuïtief, toch?

Niet voor iedereen. Voor iemand met tremoren in de handen is precies slepen bijna onmogelijk. Voor iemand die spraakbesturing gebruikt, bestaat de sleepbeweging niet. En voor iemand die alleen een schakelaar of joystick kan gebruiken, is drag-and-drop een onoverkomelijke drempel.

**WCAG succescriterium 2.5.7** (Dragging Movements) eist dat voor elke functie die een sleepbeweging vereist, er een alternatief beschikbaar is dat met een enkele aanwijzeractie (zoals klikken) werkt.

## Nieuw in WCAG 2.2

Dit criterium is toegevoegd in WCAG 2.2 en is niveau AA. Het erkent dat drag-and-drop steeds vaker wordt gebruikt in webapplicaties, maar dat niet iedereen in staat is om die beweging uit te voeren.

## Wie heeft hier last van?

- **Mensen met tremoren of beperkte motoriek** -- een sleepbeweging vereist het ingedrukt houden van een knop terwijl je precies beweegt, wat zeer moeilijk kan zijn
- **Gebruikers van spraakbesturing** -- spraakcommando's kunnen klikken simuleren, maar geen sleepbewegingen
- **Gebruikers van schakelaars** -- een enkelknops-interface kan geen sleepbeweging uitvoeren
- **Mensen met een touchscreen en beperkte vingervaardigheid** -- precies slepen op een klein scherm is lastig
- **Toetsenbordgebruikers** -- het toetsenbord heeft geen native sleepfunctionaliteit

## Wat wordt er verwacht?

Voor elke functie die slepen vereist, moet er een alternatief zijn dat werkt met **een enkele aanwijzeractie**. Dat betekent: klikken, tikken, of een vergelijkbare simpele actie.

### Voorbeeld 1: Sorteerbare lijst

**Sleepbeweging:** een item vastpakken en naar een nieuwe positie slepen.

**Alternatief:** pijlknoppen naast elk item waarmee je het omhoog of omlaag kunt verplaatsen.

```html
<li>
  <span>Taak 1</span>
  <button aria-label="Taak 1 omhoog verplaatsen">Omhoog</button>
  <button aria-label="Taak 1 omlaag verplaatsen">Omlaag</button>
</li>
```

### Voorbeeld 2: Kanban-bord

**Sleepbeweging:** een kaart van "Te doen" naar "In behandeling" slepen.

**Alternatief:** een dropdown of contextmenu op de kaart waarmee je de kolom kunt kiezen.

### Voorbeeld 3: Kaartnavigatie

**Sleepbeweging:** de kaart slepen om te pannen.

**Alternatief:** navigatieknoppen (noord, zuid, oost, west) of een zoekveld om direct naar een locatie te gaan.

### Voorbeeld 4: Slider/schuifbalk

**Sleepbeweging:** de schuifknop slepen naar een waarde.

**Alternatief:** een numeriek invoerveld naast de slider, of plus/min-knoppen om de waarde stapsgewijs aan te passen.

## Wanneer geldt de uitzondering?

Het criterium kent een uitzondering: als de sleepbeweging **essentieel** is. Dat komt in de praktijk zelden voor. Een tekenapp waar je vrij moet tekenen is essentieel -- de sleepbeweging is de functie zelf. Maar een sorteerbare lijst of een kanban-bord? Daar is slepen een interactiemethode, niet de functie zelf.

## Veelgemaakte fouten

- Sorteerbare lijsten die alleen via drag-and-drop werken, zonder knoppen als alternatief
- Kaartapplicaties zonder navigatieknoppen of zoekveld
- Sliders zonder numeriek invoerveld of stappenknoppen
- Bestandsupload die alleen via drag-and-drop werkt, zonder een bestandskiezer-knop
- Kanban-borden zonder dropdownmenu om items te verplaatsen

## Hoe test je het?

1. Identificeer alle elementen op je website die gesleept kunnen worden
2. Probeer dezelfde actie uit te voeren **zonder te slepen** -- alleen met klikken
3. Test ook met het toetsenbord: kun je dezelfde functie bereiken?
4. Controleer of het alternatief duidelijk zichtbaar en vindbaar is

## Wat kun je als webredacteur of manager doen?

- **Inventariseer je drag-and-drop functies**: waar op je website moet je slepen?
- **Controleer de alternatieven**: kun je dezelfde actie uitvoeren met alleen klikken?
- **Vraag je webbouwer**: zijn er knoppen, dropdowns of invoervelden als alternatief voor elke sleepfunctie?
- **Test met het toetsenbord**: zijn alle sleepfuncties ook via Tab en Enter bereikbaar?

Een goed alternatief voor slepen maakt je interface niet alleen toegankelijker, maar vaak ook sneller en preciezer in gebruik. Niet iedereen wil slepen -- zelfs als ze het kunnen.
