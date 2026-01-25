---
title: "Browserstack vs Proper Access"
date: 2025-06-21
slug: "browserstack-vs-proper-access-een-mini-experiment-met-automatische-toegankelijkheidstests"
categories: 
  - "tips-en-tools"
  - "de EAA"
tags: 
  - "developer"
description: "Mini-experiment met BrowserStack en automatische toegankelijkheidstests. Wat mis je zonder handmatige WCAG-audit? Een eerlijk developerperspectief."
keywords:
  - browserstack toegankelijkheid
  - automatische toegankelijkheidstests
  - handmatige wcag audit
---

Deze week deed ik een klein experiment. Ik nam een proefabonnement op de betaalde toegankelijkheidstestfunctie van Browserstack en testte twee pagina’s van een website waar mijn team momenteel aan werkt.

Mijn verwachtingen waren hoog. Dit is tenslotte een van de duurste tools op de markt. Maar hoe ver kom je nu écht met geautomatiseerd testen?

## Het resultaat?

Browserstack rapporteerde 86 kritieke issues. Maar…

### ✅ **Wat** ging goed?

- 30 van de 86 bevindingen waren terecht.
- De tool herkende dat een koptekst afgesneden was. Dat vond ik knap!
- Ook zag het dat een decoratieve afbeelding onnodig focus kreeg – netjes opgemerkt (zie ook punt 3 op de lijst hieronder).

### ❌ Wat ging minder goed?

- 56 bevindingen bleken false positives.
- De tool kijkt heel geïsoleerd naar een element en ziet niet hoe omliggende elementen invloed hebben op de toegankelijkheid.
- Er wordt geen onderscheid gemaakt tussen decoratieve en informatieve afbeeldingen. Je krijgt een oplossing om overal een alt-tekst aan toe te voegen.
- Veel issues worden dubbel gerapporteerd, zonder duidelijke reden.
- Problemen in de header en footer worden bij élke pagina opnieuw gemeld. Resultaat: een eindeloze, onoverzichtelijke lijst. En nee, je kunt niet filteren op component…

En dan de belangrijkste tekortkoming: **het missen van serieuze issues**, zoals:

- Links die niet met het toetsenbord te gebruiken zijn
- Knoppen zonder zichtbare naam
- Een zoekknop met de naam “Search2”
- Geen melding van problemen in de cookiebanner
- Verkeerde leesvolgorde
- Menu waarvan de knopnaam niet wijzigt bij openen/sluiten
- Geen koppen in submenu en footer
- Huidige pagina alleen visueel aangeduid

Mijn team documenteerde 65 echte issues op de homepage. De tool miste er meer dan de helft.

## Conclusie

Geautomatiseerde tests kunnen zeker nuttig zijn als eerste stap. Maar ze missen vaak nuance, context en de juiste interpretatie. Issues worden niet per component gegroepeerd. De oplossingen die je krijgt zijn beperkt.

En vooral: **de grote hoeveelheid false positives zorgt voor ruis en kan leiden tot onnodig werk**. Wees kritisch en verlies geen tijd of mankracht aan het oplossen van problemen die er niet zijn.

👉 Benieuwd naar het verschil tussen mens en machine? Plan gerust een call in. Mijn deur staat altijd open.

📌 _Ik deel geen screenshots of resultaten uit dit experiment, omdat het om een klantwebsite ging._
