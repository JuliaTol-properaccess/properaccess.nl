---
title: "Een toegankelijk iframe"
date: 2024-06-16
slug: "een-toegankelijk-iframe"
categories: 
  - "achtergrond_wcag"
tags: 
  - "developer"
description: "Waar moet een iframe aan voldoen om WCAG-proof te zijn? Praktische uitleg voor developers over titels, toegankelijkheidsnaam en taal."
keywords:
  - toegankelijk iframe
  - wcag iframe
  - iframe toegankelijkheid
---

Waar moet je opletten als je een iframe digitaal toegankelijk wil toevoegen aan een webpagina? De WCAG stelt een aantal eisen aan de implementatie van een iframe. Dit zijn de kritieke punten.

Een iframe is een soort pagina binnen een andere pagina en kan verschillende typen content bevatten: een video, een test, een formulier of iets anders. Om iframes toegankelijk te maken volgens de WCAG-richtlijnen moet je aan een aantal aspecten denken. 

## SC 2.4.6 - Goede beschrijving van de inhoud

Een `<iframe>` heeft een goede beschrijving nodig, meestal geleverd in het title-attribuut van het iframe. Deze titel moet het type inhoud in het iframe beschrijven en een unieke beschrijving van de inhoud geven. Deze tekst helpt een blinde bezoeker te beslissen of de inhoud van het iframe de moeite waard is om te openen. Teksten zoals "YouTube-video" of "iframe" voldoen niet.

```
 <iframe title="Video: Masters Tournament"></iframe>
```

## SC 4.1.2 - Een toegankelijkheidsnaam voor het iframe

Een iframe moet een toegankelijke naam hebben. Een bezoeker die een schermlezer gebruikt, moet deze naam kunnen horen om te begrijpen wat er in het iframe staat. Dit kan worden gedaan door een title-attribuut toe te voegen aan het `<iframe>`-element. Het title-attribuut moet unieke, betekenisvolle tekst bevatten die de inhoud en het type inhoud beschrijft.

## SC 3.1.1 - Taal van de pagina en SC 3.1.2 - Taal van onderdelen

Hoe gaan we om met iframes die anderstalige content bevatten? Een iframe is een apart document binnen een webpagina en heeft een eigen `<html>`-element met een taalaanduiding nodig (het lang-attribuut). Stel dat je iframe afkomstig is van een Engelstalige bron en de knoppen daarin hebben Engelstalige namen ("Play", "Pause", "Stop"), maar de inhoud van het filmpje is in het Nederlands. Welke taal moet je instellen op `<html lang="?">` van het iframe? 

In de landelijke discussie tussen onderzoeksbureaus is besloten:

> “Als een iframe een Nederlandstalige video bevat, maar de knoppen van de videospeler zijn in het Engels, dan moet de taal van het iframe als Engels worden gedefinieerd (`lang="en"`) zodat de knoppen goed worden voorgelezen.”

Zie: https://github.com/WCAG-Audit-Discussions/NL-BE/issues/58

Als deze taalaanduiding niet klopt, kunnen de Engelstalige namen onder SC 3.1.2 - Taal van onderdelen worden afgekeurd. Sommige bureaus keuren deze namen pas af als de naam langer is dan drie woorden.

```
<iframe title="Video: Masters Tournament"><html lang="en">...</html></iframe>
```

Gebruik je iframes op een webpagina ter ondersteuning van je ontwikkelwerk die niet zichtbaar moeten zijn voor bezoekers en schermlezers? Voeg aria-hidden="true" toe om ze te verbergen. Weet dat geautomatiseerde controletools zoals Wave en Lighthouse deze iframes kunnen 'zien' en zo false positieve bevindingen kunnen melden. Dit is niet erg; we maken websites toegankelijk voor mensen, niet voor tools.

```
<iframe title="Intentionally blank" aria-hidden="true" src="#"></iframe>
```

Wanneer je tekstuele content via een iframe op de pagina toevoegt waar kop-elementen aanwezig zijn, zijn deze koppen zichtbaar voor een schermlezer. Let erop dat de koppenstructuur van de hele pagina klopt. Dit is echter geen harde eis vanuit de WCAG.

## Geen afkeur meer

In Nederland wordt dit niet afgekeurd omdat de schermlezer JAWS nauwelijks wordt gebruikt, maar in de VS zie je dit wel. Wanneer een iframe geen `<title>`-element bevat met een betekenisvolle tekst, wordt dit als fout gerekend. Dit werd vroeger afgekeurd onder SC 2.4.2 - Pagina titel.

Vroeger keurden we het ontbreken van het title-attribuut of een tekst daarin af onder SC 2.4.1 - Blokken herhalende content omzeilen. Dit wordt niet meer gedaan, al blijft de techniek H64 nog steeds onder dit succescriterium staan. Zie: https://www.w3.org/WAI/WCAG22/Techniques/html/H64.html
