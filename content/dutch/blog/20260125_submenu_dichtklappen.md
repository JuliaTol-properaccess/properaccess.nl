---
title: "Submenu dichtklappen"
date: 2026-01-25
slug: "submenu_dichtklappen"
categories: 
  - "toegankelijke code"
  - "developer"
tags: 
  - "developer"
  - "2-4-3"
description: "Wat is een accessible name en waarom is dit cruciaal voor digitale toegankelijkheid? Praktische uitleg voor developers volgens WCAG."
keywords:
  - WCAG SC 2.4.3
  - wcag focusvolgorde
  - digitale toegankelijkheid developers
---

# Toetsenbordfocus moet logisch zijn

Als bezoekers met het toetsenbord door de website navigeren, moeten interactieve elementen zoals knoppen en links op een logische volgorde toetsenbordfocus krijgen. Logisch betekent dat het aansluit op de volgorde die de elementen hebben in de visuele vormgeving. Anders kunnen bezoekers die alleen een toetsenbord gebruiken, minder makkelijk door de pagina navigeren. 

Het gaat dan bijvoorbeeld om mensen met een motorische of visuele beperking of een leesstoornis. Zorg dat het activeren van de knop de toetsenbordfocus verplaatst naar het volgende logische element in de reeks.

## Veelvookomend probleem in een submenu

Wanneer een submenu openklapt doordat het focus krijgt en de focus na het doorlopen van alle items, het submenu verlaat, mag het niet zo zijn dat het menu open blijft staan. Op deze website had ik dit probleem in het hoofdmenu met "Diensten" en "Voor wie". 

De oplossing is als volgt:

```
      document.addEventListener('focusin', (e) => {
      const target = e.target;

      menus.forEach(({ trigger, submenu, close }) => {
        if (
          trigger.contains(target) ||
          submenu.contains(target)
        ) {
          return; // focus is inside menu
        }

        close(); // focus is outside → close menu
      });
    });
```