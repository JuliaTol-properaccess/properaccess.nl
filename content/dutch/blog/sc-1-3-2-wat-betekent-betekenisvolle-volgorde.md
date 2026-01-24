---
title: "1.3.2 - Wat betekent “Betekenisvolle volgorde”?"
date: 2025-05-17
categories: 
  - "wcag-uitgelegd"
---

![](https://properaccess.nl/wp-content/uploads/2025/05/1.3.2-1024x1024.png)

## Waar gaat het over?

De inhoud van een webpagina moet in een logische, begrijpelijke volgorde door hulpsoftware kunnen worden gepresenteerd. Dit bereik je door de inhoud op een betekenisvolle manier in de broncode te plaatsen. De visuele weergave mag afwijken van de volgorde in de HTML.

[Officiële tekst van 1.3.2](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence)

Dit artikel is bedoeld voor [de ontwikkelaar](https://properaccess.nl/tag/ontwikkelaar/).

## Waarom is dit belangrijk?

Niet iedereen gebruikt websites op dezelfde manier. Sommige mensen laten de tekst bijvoorbeeld voorlezen door een schermlezer. Zo’n hulpmiddel kijkt niet naar hoe de pagina eruitziet, maar naar de achterliggende code. Als de volgorde daarin niet logisch is, hoor je als bezoeker een rommelig of verwarrend verhaal. Dat is frustrerend en maakt een website moeilijk te gebruiken.

## Wat moet je doen?

Zorg dat je website aan de volgende punten voldoet:

- De volgorde van de elementen in de broncode is logisch.

- Nieuwe content wordt op de juiste plek in de DOM van de pagina toegevoegd.

- Staan er pdf-documenten op de site? Die moeten ook een logische volgorde in de tags hebben.

## Wat is _niet_ verplicht?

Bij onderdelen waarvan de betekenis _niet_ verandert door de volgorde, hoeft de visuele volgorde niet hetzelfde te zijn als de volgorde in de code. Denk bijvoorbeeld aan de volgorde van het navigatiemenu en de hoofdcontent van een pagina. Het maakt voor de betekenis van de pagina niet uit welk deel eerst in de code staat.

## Hoe test je succescriterium 1.3.2?

- Gebruik een schermlezer: Test de pagina met een schermlezer zoals NVDA (NonVisual Desktop Access) voor Windows of VoiceOver voor macOS. Luister naar de volgorde waarin de inhoud wordt voorgelezen en controleer of deze logisch is.

- Controleer de broncode: Bekijk de HTML-broncode van de pagina en controleer de volgorde van de elementen. Zorg dat de volgorde van de elementen in de code overeenkomt met de visuele volgorde op de pagina, als dit de betekenis beïnvloedt.

## Veelgemaakte fouten

Bij onze audits zien we dat het bij dit succescriterium vaak fout gaat op een van de volgende punten:

- Bij overzichten van nieuwsberichten of events staan de datums of informatieve afbeeldingen _boven_ de kop. Als dit van boven naar beneden wordt voorgelezen, is niet meer duidelijk bij welk bericht de datum of afbeelding hoort. Dit los je op door alles wat bij een kop hoort in de code onder die kop te plaatsen.

- Bij tooltips staat de tekst van de tooltip pas verderop in de code. Dit zorgt ervoor dat een schermlezer de tekst niet direct voorleest als een bezoeker de tooltip opent, maar pas veel later.

- Bij een tablijst worden eerst alle titels van de tabs voorgelezen, en dan pas de inhoud van de geopende tab.

- Nieuwe content wordt op de verkeerde plek in de DOM van een pagina toegevoegd als de bezoeker op een knop of link drukt.

- Gebruik van `<div>` of `<span>` in plaats van `<table>` bij tabellen, waardoor de betekenis van de tabel verloren gaat. Dit komt vaak voor bij tabellen met openingstijden. Daardoor worden eerst alle dagen van de week voorgelezen, en daarna pas de openingstijden.

- Er is content die verborgen is voor hulpsoftware met `display:none` of `visibility:hidden`. Hierdoor kan de leesvolgorde van andere content onlogisch worden.

- Als een lightbox of pop-up wordt geopend, blijft de schermlezer de content van de onderliggende pagina voorlezen, in plaats van de content van de lightbox of pop-up. Dit is ook een fout bij succescriterium 2.4.3 (onjuiste focusvolgorde).

- Tags in de codelaag van pdf-documenten staan in een andere volgorde dan wat in het document te zien is. Dit gaat ook vaak fout bij de voetnoten.

### Hoe los je problemen met succescriterium 1.3.2 op?

Zorg dat de HTML-code in een logische en betekenisvolle volgorde staat, en verander de plek in de DOM waar nieuwe content wordt geïnjecteerd als de leesvolgorde niet klopt.

Dit is een voorbeeld van een betekenisvolle volgorde voor een artikel in een nieuwsoverzicht. Alle informatie die bij het artikel hoort, staat in de code _onder_ de h2-kop:

```
<article>
  <h2>Titel bericht</h2>
  <p>01-01-2024</p>
  <img src="#" alt="betekenisvol tekstalternatief">
  <p>Tekst bericht</p>
</article>
```

De volgende structuur mag ook, omdat de afbeelding verborgen is voor hulpsoftware door het lege alt-attribuut:

```
<article>
  <img src="#" alt="">
  <h2>Titel bericht</h2>
  <p>01-01-2024</p>
  <p>Tekst bericht</p>
</article>
```

## Update 8 augustus 2024

Vandaag was ik bezig met het verbeteren van mijn SEO met de onlangs aangeschafte Yoast SEO plugin. Een van de rode stippen had betrekking op de afbeeldingen. Het werd aangeraden om afbeeldingen aan de pagina toe te voegen met de focus key phrase in de alt-tekst. Een begrijpelijke tip uit SEO-oogpunt, maar let op: als je dit doet bij de uitgelichte afbeelding, creëer je een ontoegankelijke situatie.

Het probleem is dat je in WordPress de alt-teksten alleen in de mediatheek kunt toevoegen. Ze worden vervolgens standaard altijd aan de afbeelding toegevoegd. Als webredacteur kun je niet per pagina kiezen of je wel of geen alt-tekst wilt.

Op de pagina zelf is dat geen probleem, maar op de pagina met het overzicht van berichten wel. Want voor succescriterium 1.3.2 mag er geen informatieve content boven de kop staan. En dat is precies wat er gebeurt als de uitgelichte afbeelding een alt-tekst heeft.

De enige snelle oplossing was het verwijderen van de alt-tekst. Hiermee herstel ik de logische leesvolgorde op de blogpagina, maar verlies ik punten bij Yoast SEO.

![](https://properaccess.nl/wp-content/uploads/2024/07/Scherm%C2%ADafbeelding-2024-08-08-om-19.48.54-1024x576.png)

## Goede bronnen over 1.3.2

- [Deque University](https://dequeuniversity.com/rules/axe/3.5/meaningful-sequence)

- [Mozilla Developer Network (MDN) Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)

- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#meaningful-sequence)

## Disclaimer

Sommige situaties en uitzonderingen komen minder vaak voor en staan niet in dit artikel. In zulke gevallen is het slim om een expert mee te laten kijken. Toegankelijkheid is geen eenmalige klus, maar iets waar je steeds aandacht aan moet geven. Regelmatig controleren en verbeteren helpt om te blijven voldoen aan de WCAG-richtlijnen.
