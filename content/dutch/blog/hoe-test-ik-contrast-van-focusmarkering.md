---
title: "Hoe test ik contrast van focusmarkering"
date: 2025-10-23
slug: "hoe-test-ik-contrast-van-focusmarkering"
categories: 
  - "tips-en-tools"
description: "Hoe test je het contrast van focusmarkeringen volgens WCAG 1.4.11? Praktische uitleg voor toetsenbord- en focusgebruik."
keywords:
  - focusmarkering contrast
  - wcag 1.4.11 non text contrast
  - focus contrast testen
---

SC.1.4.11 Non-text Contrast (niveau AA)

Navigeer met het toetsenbord door alle elementen die focus kunnen krijgen. Activeer (met het toetsenbord) functies die een menu, dialoogvenster of iets vergelijkbaars openen.

Je kunt de hexkleur van de focusrand in de Inspector vinden. Vaak is dat de kleur van CSS property ‘outline’, maar het kan ook een ‘border’ property zijn. 


Controleer of deze kleur voldoende contrast met alle achtergronden op de pagina heeft. Vaak hebben verschillende secties van een webpagina, bijvoorbeeld de header, de footer, sidebars en dialoogvensters een andere achtergrond. 

Je kunt deze tool gebruiken om contrast tussen twee kleuren te meten: https://properaccess.nl/hoe-test-ik-kleurcontrast/.

## Uitzondering

Componenten waarbij zowel het uiterlijk van de component als de focusmarkering wordt bepaald door de webbrowser zelf en niet met CSS wordt beïnvloed.

## Controle

Alle focusmarkeringen hebben een contrastverhouding van minimaal 3:1 met aangrenzende kleuren.

Als de contrastverhouding lager is dan 3,0:1, dan wordt deze bevinding ook onder succescriterium 1.4.1 - Gebruik van kleur afgekeurd. Tot aan 3,0:1 is het gebruik van kleur, boven 3,0:1 is het gebruik van contrast om informatie te geven.
