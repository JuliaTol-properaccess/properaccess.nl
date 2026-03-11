---
title: "SC 3.2.3 - Wat betekent "Consistente navigatie""
date: 2025-05-17
categories:
  - "wcag-uitgelegd"
description: "WCAG 3.2.3 vereist dat navigatie op elke pagina op dezelfde plek en in dezelfde volgorde staat. Lees waarom en hoe je dit aanpakt."
---

Je kent het vast: je bent op een website, je hebt net geleerd waar het menu zit, en op de volgende pagina is alles anders. Het menu staat ergens anders, de volgorde is veranderd, of de zoekbalk is ineens verdwenen. Je moet opnieuw zoeken naar wat je net had gevonden.

Voor de meeste bezoekers is dat irritant. Voor iemand met een cognitieve beperking, laaggeletterdheid of een schermlezer is het een serieus probleem. Die bezoekers zijn afhankelijk van herkenbare patronen en voorspelbaarheid.

**WCAG succescriterium 3.2.3** (Consistent Navigation) eist dat navigatie-elementen die op meerdere pagina's terugkomen, steeds op dezelfde plek en in dezelfde volgorde staan.

## Wat wordt er verwacht?

Navigatieonderdelen die op meerdere pagina's voorkomen, moeten:

- **Op dezelfde locatie** binnen de pagina staan (het hoofdmenu bovenaan, de zoekfunctie rechtsboven, de footer onderaan)
- **In dezelfde volgorde** blijven (als het menu "Home - Producten - Over ons - Contact" is, moet die volgorde op elke pagina hetzelfde zijn)

Je mag wel items **toevoegen** (een submenu dat uitklapt) of **verwijderen** (een menu-item dat alleen op bepaalde pagina's relevant is), zolang de relatieve volgorde van de overgebleven items hetzelfde blijft.

## Wie heeft hier last van als het misgaat?

- **Mensen met cognitieve beperkingen** die navigatiepatronen aanleren en vertrouwen op herhaling
- **Schermlezergebruikers** die hun mentale model van de pagina opbouwen op basis van structuur. Als de navigatie verspringt, moeten ze opnieuw beginnen
- **Mensen met een visuele beperking** die vergrotingssoftware gebruiken en maar een klein deel van de pagina tegelijk zien. Als het menu op een andere plek staat, moeten ze de hele pagina doorzoeken
- **Laaggeletterden** die visuele herkenning gebruiken in plaats van tekst om te navigeren

## Voorbeelden uit de praktijk

**Consistent:** Een webshop met een vast hoofdmenu (Home - Categorieeen - Aanbiedingen - Winkelwagen - Account) dat op elke pagina bovenaan staat in dezelfde volgorde.

**Inconsistent:** Een website waar het menu op de homepage horizontaal bovenaan staat, op blogpagina's als sidebar links, en op productpagina's als hamburger-menu. De items zijn dezelfde, maar de locatie en presentatie veranderen.

## Responsive design en consistentie

Op kleinere schermen verandert de navigatie vaak: een horizontaal menu wordt een hamburger-menu, een sidebar verdwijnt. Dat is prima -- zolang de volgorde van de items binnen het menu consistent blijft. Het menu mag er anders uitzien op mobiel, maar de interne structuur moet hetzelfde zijn.

## Veelgemaakte fouten

- Een zoekbalk die soms bovenaan staat en soms onderaan
- Menu-items die op verschillende pagina's een andere volgorde hebben
- Een contactlink die in de header staat op sommige pagina's en in de footer op andere
- Een taalschakelaar die op de homepage rechtsboven staat en op andere pagina's linksonder

## Wat kun je als webredacteur of manager doen?

- **Controleer de navigatie op meerdere pagina's**: staan de elementen overal op dezelfde plek en in dezelfde volgorde?
- **Gebruik een vast template** voor je header en footer, zodat die automatisch consistent zijn
- **Test op verschillende schermformaten**: blijft de volgorde van menu-items gelijk op desktop, tablet en mobiel?
- **Vraag je webbouwer**: wordt de navigatie vanuit een enkele bron opgebouwd, of worden er per pagina handmatig items toegevoegd?

Een consistente navigatie maakt je website voorspelbaar en makkelijker te gebruiken. Je bezoekers hoeven niet op elke pagina opnieuw te leren waar alles staat.
