---
title: "aria-hidden: wat het doet en wanneer je het wel of niet gebruikt"
date: 2026-07-19
slug: "aria-hidden-wat-het-doet-en-wanneer-je-het-gebruikt"
categories:
  - "wcag-uitgelegd"
  - "webredactie"
tags:
  - "wcag"
  - "1-3-1"
  - "aria"
  - "screenreader"
  - "webredactie"
description: "aria-hidden verbergt een element voor de schermlezer, maar niet voor het oog. Lees wat het doet, waarom het in je pagina staat en op welke elementen je het wel en niet mag zetten."
keywords:
  - aria-hidden
  - aria-hidden uitleg
  - element verbergen schermlezer
  - verborgen elementen WCAG
  - webredactie toegankelijkheid
  - aria-hidden true
---

Je controleert een pagina met [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) en zet de optie "Verborgen elementen" aan. Er lichten een paar plekken op. Bij elk daarvan staat: `aria-hidden`.

Wat betekent dat? En is het erg?

Kort antwoord: `aria-hidden` is meestal precies goed gebruikt, maar op de verkeerde plek maakt het je pagina onbruikbaar voor mensen die een schermlezer gebruiken. Daarom is het goed om te weten wat het doet.

## Wat doet aria-hidden?

`aria-hidden="true"` is een stukje code dat je aan een element hangt. Het zegt tegen hulpsoftware: sla dit over.

Het element blijft gewoon zichtbaar op het scherm. Alleen de schermlezer doet alsof het er niet is.

```html
<span aria-hidden="true">→</span>
```

Deze pijl zie je staan. Een schermlezer leest hem niet voor. Dat is precies de bedoeling, want "rechter pijl naar rechts" voegt niets toe aan wat je hoort.

## Verborgen is niet hetzelfde als verborgen

Er zijn 3 manieren om iets te verbergen. Ze doen allemaal iets anders.

| Manier | Zichtbaar op scherm? | Hoorbaar in schermlezer? |
| --- | --- | --- |
| `aria-hidden="true"` | ja | nee |
| `hidden` of `display: none` | nee | nee |
| Alleen visueel verbergen met CSS | nee | ja |

Die eerste rij is de bijzondere. Het element is er wel, je ziet het, je kunt het soms zelfs aanklikken, maar in de schermlezer bestaat het niet. Die combinatie is nuttig én gevaarlijk.

## Waarom staat dit in mijn pagina?

Meestal heeft de ontwikkelaar het bewust neergezet. Er zijn 3 veelvoorkomende redenen.

### Iconen naast tekst

Een knop met een prullenbak-icoon en het woord "Verwijderen" ernaast. Zonder `aria-hidden` hoor je mogelijk "prullenbak Verwijderen". Met `aria-hidden` op het icoon hoor je alleen "Verwijderen".

```html
<button>
  <svg aria-hidden="true">...</svg>
  Verwijderen
</button>
```

### Decoratieve vormen

Golfjes, lijntjes, achtergrondvormen, een groot aanhalingsteken bij een citaat. Mooi om te zien, zinloos om te horen.

### Tekst die dubbel voorkomt

Soms staat dezelfde informatie 2 keer op de pagina: één keer voor het oog, één keer verstopt voor de schermlezer. Bijvoorbeeld een prijs die visueel als "€ 19,95" staat en voor de schermlezer als "19 euro en 95 cent". De visuele versie krijgt dan `aria-hidden`.

## Kan ik het zelf toevoegen in het CMS?

Ja, in veel CMS'en kun je naar de broncodeweergave en daar een attribuut toevoegen. Precies daar gaat het vaak mis, want je ziet in de editor niet wat je aanricht. Het scherm blijft er hetzelfde uitzien.

Als je het toch gebruikt, houd je aan de regels hieronder.

## Waar mag je aria-hidden wel op zetten?

- **Decoratieve iconen** die naast tekst staan die hetzelfde zegt
- **Decoratieve vormen en illustraties** zonder informatie
- **Herhaalde tekst** die de schermlezer al ergens anders hoort
- **Losse tekens** die als scheiding dienen, zoals een streepje of een punt tussen 2 stukjes tekst
- **Content die volledig achter een geopend venster ligt**, zolang die content ook niet met de toetsenbord bereikbaar is

## Waar mag je het nooit op zetten?

### Nooit op tekst die informatie bevat

Als de tekst iets zegt wat je nergens anders leest, moet iedereen hem kunnen horen. Zet je er `aria-hidden` op, dan verdwijnt die informatie voor een deel van je bezoekers.

```html
<!-- Niet doen: de melding verdwijnt voor de schermlezer -->
<p aria-hidden="true">Let op: de bezorging duurt deze week 3 dagen langer.</p>
```

### Nooit op iets waar je met de tab-toets naartoe kunt

Dit is de ergste fout. Links, knoppen, invoervelden en keuzelijsten kun je met de tab-toets bereiken. Zet je `aria-hidden` op zo'n element, dan komt de gebruiker er wél met de tab-toets terecht, maar hoort niets. Er wordt niets voorgelezen. De focus lijkt in het niets te vallen.

```html
<!-- Niet doen: de knop is bereikbaar maar wordt niet voorgelezen -->
<button aria-hidden="true">Bestelling afronden</button>
```

Deze regel geldt ook voor alles wat ín het element zit. Zet je `aria-hidden` op een `div`, dan raak je ook elke link en knop daarbinnen.

### Nooit op een icoon dat de enige inhoud is

Een knop met alleen een vergrootglas en verder niets. Het icoon is dan geen versiering, het is de hele knop. Verberg je het, dan hoor je "knop" en niet wat die knop doet. In dat geval geef je de knop een naam met `aria-label`.

```html
<!-- Wel doen: het icoon is decoratief, de knop heeft een naam -->
<button aria-label="Zoeken">
  <svg aria-hidden="true">...</svg>
</button>
```

### Nooit op grote delen van de pagina

Soms staat `aria-hidden` op een hele sectie of zelfs op de `main`. Meestal is dat een restant van een venster of een menu dat ooit openstond en waarbij de code het attribuut niet heeft weggehaald. Het effect is dat de halve pagina niet meer bestaat voor de schermlezer.

## Wat aria-hidden niet doet

- Het verbergt niets voor het oog. Wil je iets visueel weghalen, gebruik dan CSS of het `hidden`-attribuut.
- Het verbergt niets voor zoekmachines. Google leest de tekst gewoon.
- Het haalt een element niet uit de tabvolgorde. Daar heb je andere code voor nodig.
- Het is geen manier om rommelige content op te ruimen. Als tekst overbodig is voor de schermlezer, is hij dat vaak ook voor iedereen. Haal hem dan gewoon weg.

## Wat doe je als WCAG Radar het aanwijst?

Loop deze 3 vragen langs bij elk gemarkeerd element.

1. **Staat er tekst met informatie in?** Zo ja: `aria-hidden` moet weg.
2. **Zit er een link, knop of invoerveld in?** Zo ja: `aria-hidden` moet weg.
3. **Is het puur versiering, of staat dezelfde informatie er vlak naast?** Zo ja: laat het staan, het klopt.

Kom je er niet uit, dan is dit een vraag voor de ontwikkelaar. Geef door om welk element het gaat en wat je in de tool ziet.

## Veelgemaakte fouten

- **aria-hidden gebruiken om iets visueel te verbergen.** Het element blijft gewoon staan.
- **aria-hidden op een element dat je met de tab-toets bereikt.** De focus verdwijnt in het niets.
- **aria-hidden op een sectie waar links in staan.** Ook die links worden onbereikbaar voor de schermlezer.
- **aria-hidden="false" gebruiken.** Dat werkt niet zoals je verwacht. Wil je een element weer zichtbaar maken voor hulpsoftware, haal het attribuut dan helemaal weg.
- **Het attribuut laten staan na het sluiten van een venster.** Controleer of de achtergrond weer normaal voorleest zodra het venster dicht is.

## Welk succescriterium is dit?

`aria-hidden` valt onder meerdere criteria, afhankelijk van wat er misgaat.

- Verdwijnt er informatie of structuur? Dan raakt het [1.3.1 Informatie en relaties](/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/).
- Verdwijnt de naam of rol van een knop of link? Dan raakt het 4.1.2 Naam, rol, waarde.
- Kun je ergens komen maar hoor je niets? Dan raakt het ook 2.4.3 Focus volgorde.

Voor je werk als redacteur maakt het nummer niet zoveel uit. De vuistregel is: alles wat informatie draagt of aanklikbaar is, blijft hoorbaar.

## Veelgestelde vragen

### Mag ik aria-hidden op een afbeelding zetten?

Dat kan, maar er is een betere manier. Geef een decoratieve afbeelding een leeg alt-attribuut: `alt=""`. Dan slaat de schermlezer hem net zo goed over, en het is duidelijker voor wie later de code leest.

### Is aria-hidden slecht?

Nee. Op de juiste plek maakt het je pagina rustiger om te beluisteren. Zonder `aria-hidden` hoor je bij elke knop het icoon erbij. Het gaat mis zodra het op inhoud of op klikbare elementen staat.

### Hoe controleer ik of het goed staat?

Zet in WCAG Radar de optie "Verborgen elementen" aan en kijk wat er oplicht. Wil je het echt zeker weten, dan test je met een schermlezer of laat je het meenemen in een audit.

### Ik zie aria-hidden bij een taalswitch. Klopt dat?

Vaak niet. Bij taalkeuzes staat `aria-hidden` regelmatig op de tekst "NL" of "EN" die je gewoon moet kunnen horen. Lees hoe je [een taalswitch met alleen EN en NL toegankelijk maakt](/blog/taalswitch-met-alleen-en-en-nl-hoe-maak-je-die-toegankelijk/).

## Samenvatting

- `aria-hidden="true"` verbergt een element voor de schermlezer, maar niet voor het oog.
- Gebruik het voor versiering, iconen naast tekst en herhaalde informatie.
- Gebruik het nooit op tekst met informatie, en nooit op links, knoppen of invoervelden.
- Alles wat in het element zit, wordt ook verborgen. Let dus op hele secties.
- Twijfel je? Haal het attribuut weg. Te veel voorlezen is vervelend, te weinig voorlezen sluit mensen buiten.

Wil je weten hoeveel van dit soort dingen op je site staan? Bij een [content-audit](/contentaudit/) lopen we je pagina's na en krijg je per element te zien wat er misgaat en hoe je het oplost.
