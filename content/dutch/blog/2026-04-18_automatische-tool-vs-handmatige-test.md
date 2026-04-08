---
title: "Hoeveel problemen vindt een automatische tool vs. een handmatige test?"
date: 2026-04-18
slug: "automatische-tool-vs-handmatige-test"
categories:
  - "wcag-vragen"
tags:
  - "veelgestelde-vragen"
  - "audit"
  - "tools"
description: "Automatisch testen vindt maar 30% van de toegankelijkheidsproblemen. Lees waarom handmatig testen onmisbaar is en wat het verschil maakt."
keywords:
  - digitale toegankelijkheid
  - WCAG
  - tools
image: "/images/blog/vragen-digitale-toegankelijkheid.svg"
---

Dit is een van de belangrijkste dingen om te weten over toegankelijkheidstesten: **geautomatiseerde tools vinden maximaal 30% van de problemen**. De overige 70% vereist menselijke beoordeling.

## Wat vindt een automatische tool?

Geautomatiseerde tools zijn goed in het vinden van objectief meetbare fouten:

- **Ontbrekende alt-teksten** — de tool ziet dat er geen alt-attribuut is
- **Te laag contrast** — de tool berekent de contrastratio
- **Formuliervelden zonder label** — de tool checkt of er een `<label>` is gekoppeld
- **Ontbrekend taalattribuut** — de tool kijkt of `lang="nl"` op de HTML-tag staat
- **Lege links of knoppen** — de tool ziet dat er geen tekst of accessible name is
- **Duplicate ID's** — de tool detecteert identieke ID-attributen

Dit zijn binaire checks: het is er of het is er niet.

## Wat mist een automatische tool?

De tool kan niet beoordelen of iets **kwalitatief goed** is. Voorbeelden:

### Alt-teksten
De tool ziet dat er een alt-tekst is, maar kan niet beoordelen of die tekst de afbeelding correct beschrijft. `alt="foto"` passeert de geautomatiseerde check, maar is waardeloos voor een schermlezergebruiker.

### Toetsenbordtoegankelijkheid
De tool kan controleren of elementen een tabindex hebben, maar niet of de **tabvolgorde logisch** is. En de tool kan niet testen of een complexe widget (modal, datepicker, autocomplete) volledig met het toetsenbord te bedienen is.

### Schermlezerbeleving
De tool kan checken of ARIA-attributen syntactisch correct zijn, maar niet of ze de **juiste informatie** overbrengen. Een `role="button"` op een div is technisch correct, maar als de div er niet uitziet als een knop en geen toetsenbordinteractie heeft, is het misleidend.

### Context en betekenis
De tool kan niet beoordelen of:
- De **kopstructuur** inhoudelijk logisch is
- **Foutmeldingen** begrijpelijk zijn
- De **volgorde van content** zinvol is als je het lineariseert
- **Instructies** duidelijk genoeg zijn

### Dynamische content
Veel moderne websites laden content dynamisch. Modals, accordeons, live zoekresultaten, formuliervalidatie — een geautomatiseerde tool test vaak alleen de initiële DOM, niet wat er gebeurt na interactie.

## De cijfers

Uit onderzoek blijkt consistent:

| Methode                   | Dekking |
| ------------------------- | ------- |
| Alleen geautomatiseerd    | ~30%    |
| Alleen handmatig          | ~70-80% |
| Geautomatiseerd + handmatig | ~95%+ |

Die 30% is bovendien het "makkelijke" deel. De problemen die alleen handmatig te vinden zijn, zijn vaak de problemen met de meeste impact op bezoekers.

## Wat betekent dit voor jou?

Als iemand je een "toegankelijkheidsaudit" aanbiedt die alleen uit een geautomatiseerde scan bestaat, krijg je maximaal een derde van het beeld. Dat is niet genoeg om te weten of je website daadwerkelijk toegankelijk is, en het is zeker niet genoeg om aan te tonen dat je voldoet aan de wet.

Een goede audit combineert altijd:
1. **Geautomatiseerde scan** — voor de snelle, objectieve checks
2. **Handmatige inspectie** — voor alles wat context en expertise vereist
3. **Testen met hulptechnologie** — schermlezer, toetsenbord, zoom

Bij Proper Access is dat standaard. We gebruiken tools om efficiënt te werken, maar de beoordeling is altijd mensenwerk.

Wil je zien wat een combinatie van tools en handmatig onderzoek oplevert? [Vraag een gratis quickscan aan](https://properaccess.nl/quickscan/).
