---
title: "SC 2.4.3 - Wat betekent “Focusvolgorde”"
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-4-3"
  - "focus"
  - "toetsenbord"
---

Mensen die met het toetsenbord of andere invoerapparaten navigeren, vertrouwen op een logische focusvolgorde om door een website te bewegen. De focusvolgorde bepaalt in welke volgorde interactieve elementen (zoals knoppen, links en formuliervelden) geselecteerd worden wanneer je de **Tab**\-toets gebruikt. Als de volgorde niet logisch is, kunnen gebruikers verdwalen of belangrijke onderdelen missen.

Daarom zegt WCAG: **zorg dat de focusvolgorde logisch en voorspelbaar is, in lijn met de visuele presentatie**.

Dit heet **2.4.3 Focus Order**.

## Wat wordt er van websites verwacht?

- **Logische volgorde** – De focus moet zich in een logische volgorde door de pagina bewegen, meestal van boven naar beneden en van links naar rechts.

- **Geen onverwachte sprongen** – Gebruikers mogen niet ineens naar andere delen van de pagina springen zonder duidelijke reden.

- **Toegankelijke componenten** – Alle interactieve elementen moeten via toetsenbordfocus bereikbaar zijn.

Kort: de focusvolgorde moet natuurlijk en intuïtief aanvoelen.

## Wat is niet verplicht?

- Elementen die puur decoratief zijn of geen interactie vereisen hoeven geen focus te krijgen.

- Content die dynamisch verandert, zoals modals of popups, mag de focus tijdelijk verplaatsen als dat logisch is.

## Veelgemaakte fouten

- Formuliervelden die in een onlogische volgorde gefocust worden.

- Knoppen of links die helemaal geen focus krijgen.

- Popups die de focus blokkeren, waardoor de gebruiker vastzit.

- JavaScript- of CSS-effecten die de natuurlijke focusvolgorde verstoren.

## Wat kun je als webredacteur of manager doen?

- **Test je site met alleen toetsenbordnavigatie** (Tab en Shift-Tab): Is de volgorde logisch en voorspelbaar?

- **Controleer interactieve elementen**: Zijn alle knoppen, links en formuliervelden goed bereikbaar?

- **Vraag je webbouwer**: Worden focusvolgorde en tabindex correct ingesteld in de code?

## Samenvatting

Een logische focusvolgorde zorgt voor een prettige en toegankelijke navigatie voor iedereen. Zorg dat gebruikers eenvoudig en voorspelbaar door je site kunnen bewegen, ongeacht hoe ze navigeren.
