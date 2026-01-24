---
title: "SC 2.4.1 - Wat betekent “Blokken overslaan” in WCAG?"
date: 2025-05-17
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-4-1"
---

## Waarom is dit belangrijk?

Veel websites hebben vaste onderdelen zoals menu’s, zijbalken en headerafbeeldingen die op elke pagina terugkomen. Voor mensen die een schermlezer gebruiken of met het toetsenbord navigeren, kan het vermoeiend zijn om elke keer door die herhalende blokken heen te moeten gaan om bij de eigenlijke inhoud te komen.

Daarom zegt WCAG: **zorg dat gebruikers herhalende content kunnen overslaan en snel naar de hoofdinhoud kunnen springen**.

Dit heet **2.4.1 Bypass Blocks**.

## Wat wordt er van websites verwacht?

- Gebruikers moeten de mogelijkheid hebben om **direct** naar de hoofdinhoud te springen.

- Dit kan met een “skiplink”, een landmarksysteem of een logische paginaopbouw die schermlezers herkennen.

Kort: geef gebruikers een snel pad naar de kern van je pagina. Een skiplink is de beste keuze omdat iedereen deze skiplink kan gebruiken (niet alleen mensen met een schermlezer).

## Veelgemaakte fouten

- Geen skiplink aanbieden.

- Skiplinks die alleen zichtbaar zijn met de muis (maar niet met toetsenbord of schermlezer).

- Geen duidelijke structuur met koppen (`<h1>`, `<h2>`, etc.).

## Hoe test je een skiplink?

1. Laad de webpagina in je browser.

3. Druk direct na het laden op de Tab-toets op je toetsenbord.  
    De eerste keer tabben moet de focus naar de skiplink gaan.  
    De skiplink, doorgaans “Naar de inhoud” of “Skip to main content”, wordt nu zichtbaar op het scherm.

5. Druk op Enter terwijl de focus op de skiplink staat.  
    De focus moet nu direct op de hoofdinhoud komen (bijvoorbeeld het hoofdartikel of de main-sectie).

7. Tab opnieuw en controleer dat de focus nu bij het eerste actie-element in de hoofdinhoud start.

9. (Optioneel) Test met een schermlezer om te horen of de skiplink wordt aangekondigd en correct werkt.

## Samenvatting

Maak het makkelijk voor je bezoekers om direct naar de belangrijkste content te springen. Dat maakt je website toegankelijker en gebruiksvriendelijker voor iedereen.
