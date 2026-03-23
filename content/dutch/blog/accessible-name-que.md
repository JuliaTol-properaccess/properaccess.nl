---
title: "Accessible name: wat moet je weten"
date: 2025-04-17
slug: "accessible-name-que"
categories:
  - "achtergrond_wcag"
  - "webdeveloper"
tags:
  - "1-4-3"
description: "Wat is een accessible name en waarom is dit cruciaal voor digitale toegankelijkheid? Praktische uitleg voor developers volgens WCAG."
keywords:
  - accessible name
  - wcag toegankelijke naam
  - digitale toegankelijkheid developers
aliases:
  - /accessible-name-que/
---

Bij Proper Access beginnen we al onze trainingen voor webdevelopers met iets dat simpel lijkt, maar reuze belangrijk is. Als ik je als ontwikkelaar een tip mag geven: begrijp hoe de **toegankelijke naam** (accessible name) van een interactief element werkt. Het is de basis van digitale toegankelijkheid -- en het punt waar het vaakst iets misgaat.

## Wat is een accessible name?

De accessible name is de naam die hulpsoftware -- een schermlezer, spraakbesturing, brailleleesregel -- gebruikt om een interactief element te identificeren. Het is wat een blinde bezoeker hoort als de schermlezer een knop, link of invoerveld voorleest. En het is het woord dat een gebruiker van spraakbesturing uitspreekt om een element te activeren.

Zonder accessible name is een element onbruikbaar voor deze gebruikers. De schermlezer zegt dan "knop" zonder verdere uitleg, of leest een cryptische bestandsnaam voor.

## De drie regels die je moet kennen

**1. Elk interactief element moet een toegankelijke naam hebben.**

Links, knoppen, invoervelden, checkboxes, selectvelden -- alles waarmee je kunt interacteren. Controleer dit zelf in Chrome DevTools onder de tab **Accessibility**. Daar zie je de berekende accessible name van elk element.

**2. De naam moet de functie beschrijven.**

Een hamburger-menuknop moet niet "drie streepjes" heten, maar "Open menu". Een kruisje om een modal te sluiten moet niet "X" heten, maar "Sluit venster". Verandert de functie? Dan moet de naam mee veranderen. Een toggle die het menu opent moet na klikken zeggen "Sluit menu".

**3. De naam moet overeenkomen met de zichtbare tekst.**

Dit is **SC 2.5.3** (Label in Name) en het wordt vaak vergeten. Als er "Verstuur" op een knop staat, moet de accessible name ook "Verstuur" bevatten. Niet "Submit form" of "Formulier verzenden". Waarom? Omdat spraakbesturingssoftware de zichtbare tekst gebruikt om het element te vinden. Zegt de gebruiker "klik Verstuur", maar is de accessible name "Submit", dan werkt het niet.

**Belangrijk:** controleer je website ook op 200% en 400% zoom. Dan verandert de layout en zie je soms andere knoppen en links -- die ook allemaal een correcte naam nodig hebben.

## Hoe wordt de accessible name berekend?

De browser berekent de accessible name via een vaste volgorde (de "accessible name computation"). In vereenvoudigde vorm:

1. `aria-labelledby` -- verwijst naar een ander element op de pagina
2. `aria-label` -- een onzichtbare naam direct op het element
3. **Tekstinhoud** van het element (bij links en knoppen)
4. **Label** (bij invoervelden via `<label for="...">`)
5. `title`-attribuut (als laatste redmiddel)
6. `placeholder` (alleen voor invoervelden, en alleen als er geen label is)

De eerste die een waarde oplevert, wint. Dat betekent: als je `aria-label` toevoegt aan een knop die al zichtbare tekst heeft, overschrijft de aria-label die tekst. De schermlezer leest dan iets anders dan wat op het scherm staat.

## Veelgemaakte fouten

- **Icoonknoppen zonder naam.** Een knop met alleen een SVG-icoon en geen tekst. De schermlezer zegt "knop" en verder niets. Oplossing: voeg een `aria-label` toe of een visueel verborgen tekst.
- **"Lees meer"-links.** Tien keer "Lees meer" op een pagina. De schermlezer geeft een lijst van links en de gebruiker ziet tien keer dezelfde tekst. Oplossing: voeg context toe via `aria-label` of een visueel verborgen tekst ("Lees meer over [onderwerp]").
- **Afbeeldingen in links zonder alt-tekst.** Een link bevat alleen een afbeelding. Zonder alt-tekst heeft de link geen accessible name. De schermlezer leest dan de URL voor.
- **aria-label die de zichtbare tekst overschrijft.** Zie ons artikel over [het toegankelijkheidslabel](/blog/toegankelijkheidslabel-ontoegankelijk-plaatsen/) voor een concreet voorbeeld.

## Hoe geef ik een link de accessible name?

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ZYOweKw" data-pen-title="Accessible name of links" data-user="Julia-Tol-wcag" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/Julia-Tol-wcag/pen/ZYOweKw">
  Accessible name of links</a> by Julia Tol (<a href="https://codepen.io/Julia-Tol-wcag">@Julia-Tol-wcag</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>

Wil je meer weten over de accessible name en hoe je het test? Op onze pagina over [SC 4.1.2 Naam, rol, waarde](/sc-4-1-2-wat-betekent-naam-rol-waarde/) vind je een uitgebreide uitleg.
