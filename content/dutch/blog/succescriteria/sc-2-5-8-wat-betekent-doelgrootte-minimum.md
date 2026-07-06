---
title: 'SC 2.5.8 - Wat betekent "Doelgrootte (minimum)"?'
date: 2026-07-05
categories:
  - "wcag-uitgelegd"
tags:
  - "2-5-8"
  - "doelgrootte"
description: "WCAG 2.5.8 eist dat klikbare doelen minstens 24 bij 24 pixels zijn, of genoeg ruimte om zich heen hebben. Praktische uitleg met voorbeelden voor design, webredactie en developers."
keywords:
  - WCAG SC 2.5.8
  - doelgrootte minimum
  - target size WCAG
  - klikgebied 24 pixels
  - aanraakdoel te klein
  - knoppen te klein mobiel
aliases:
  - /sc-2-5-8-wat-betekent-doelgrootte-minimum/
---

Een kruisje van 16 pixels om een melding te sluiten. Pagineringsnummers die tegen elkaar aan staan. Een rijtje piepkleine iconen in de footer. Voor wie een trillende hand heeft, grote vingers, of gewoon in een hobbelende trein zit, zijn zulke doelen bijna niet te raken. Mis je net, dan klik je vaak op het verkeerde doel ernaast. Daarom zegt WCAG: **een klikbaar doel is minstens 24 bij 24 pixels, of heeft genoeg lege ruimte om zich heen**.

Dit heet **2.5.8 Doelgrootte (minimum)**.

## Wat zegt het criterium?

[WCAG-succescriterium 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) eist dat elk doel dat je met een muis, vinger of pen bedient minstens 24 bij 24 CSS-pixels groot is. Het criterium is nieuw in [WCAG 2.2](/blog/wat-is-wcag-2-2/) en geldt op niveau AA.

Belangrijk om te weten: het gaat om het hele klikbare gebied, niet om het zichtbare plaatje. Een icoon van 16 pixels in een knop van 44 bij 44 pixels voldoet ruim. Andersom geldt het ook: een groot ogende knop waarvan alleen de tekst klikbaar is, kan alsnog te klein zijn.

## Waarom is dit belangrijk?

- Mensen met tremoren of beperkte motoriek kunnen een muis of vinger niet precies plaatsen. Hoe kleiner het doel, hoe vaker ze misklikken.
- Op een touchscreen is een vingertop al gauw breder dan een klein doel. Zeker met één hand, onderweg of in beweging raak je er dan naast.
- Ouderen klikken gemiddeld minder precies. De groep bezoekers die hier baat bij heeft, groeit dus elk jaar.
- Een misklik is niet alleen vervelend, maar soms ook schadelijk. Wie naast het kruisje klikt, opent per ongeluk de advertentie. Wie naast "annuleren" klikt, bevestigt de bestelling.
- Ruime doelen helpen iedereen: minder misklikken betekent minder frustratie en snellere taken, ook voor bezoekers zonder beperking.

## De uitzonderingen

Dit criterium kent 5 uitzonderingen. Een doel kleiner dan 24 bij 24 pixels mag als minstens één hiervan geldt:

1. **Genoeg ruimte eromheen.** Teken een denkbeeldige cirkel van 24 pixels doorsnee, midden op het doel. Raakt die cirkel geen ander doel en geen cirkel van een ander te klein doel, dan voldoet het. Kleine doelen mogen dus, zolang ze niet dicht op elkaar staan.
2. **Gelijkwaardig alternatief.** Dezelfde functie is op dezelfde pagina ook bereikbaar via een doel dat wél groot genoeg is.
3. **Links in lopende tekst.** Een link in een zin valt buiten dit criterium, omdat de regelhoogte van de tekst de grootte bepaalt.
4. **Standaard browserweergave.** Een checkbox of radiobutton zonder eigen styling mag de standaardgrootte van de browser houden. Zodra je hem zelf vormgeeft, vervalt deze uitzondering.
5. **Essentieel.** De precieze weergave is wettelijk verplicht of onmisbaar voor de functie. Dit komt in de praktijk zelden voor.

## Veelgemaakte fouten

Bij onze audits gaat het bij dit succescriterium meestal mis op een van deze punten:

- **Sluitkruisjes van meldingen, modals en filtertags.** Het kruisje zelf is vaak maar 12 tot 16 pixels en er zit geen ruimer klikgebied omheen.
- **Paginering.** De nummers 1 tot en met 10 staan strak naast elkaar, elk nummer is een paar pixels breed en de cirkel-regel wordt nergens gehaald.
- **Rijen iconen.** Social-media-iconen in de footer, actie-iconen in een tabel, werkbalken in een editor: kleine doelen die elkaar bijna raken.
- **Carrouselstippen.** De bolletjes onder een slider zijn vaak 8 tot 10 pixels en staan vlak naast elkaar.
- **Zelf vormgegeven checkboxes en radiobuttons van 16 pixels.** Door de eigen styling geldt de browser-uitzondering niet meer.
- **Kalenders en datumkiezers.** De dagen zijn klikbaar maar krap, en ze grenzen direct aan elkaar.

## Wat kun je doen als designer?

Dit criterium wordt bijna volledig in de ontwerpfase beslist. Zo houd je het goed:

- Leg een minimum vast in je design system: elk klikbaar component is minstens 24 bij 24 pixels. Nog beter is het advies van Apple en Google voor touchscreens: 44 tot 48 pixels.
- Ontwerp het klikgebied, niet alleen het icoon. Zet elk icoon in een vast kader van bijvoorbeeld 44 bij 44 pixels en lever dat kader mee als onderdeel van de component. Zo kan de developer er niet omheen.
- Kun of wil je een doel niet groter maken, geef het dan ruimte. Zet kleine doelen nooit strak tegen elkaar aan; met voldoende witruimte ertussen voldoe je alsnog.
- Loop je risicoplekken na: paginering, sluitkruisjes, iconenrijen, carrouselbediening, tags met een verwijderknop en kalenders.
- Controleer je ontwerp met de doelgrootte-check van onze gratis [WCAG Radar](/tools/wcag-radar/). Eén klik en elk klikbaar element dat kleiner is dan 24 bij 24 pixels licht op.

## Wat kun je doen als webredacteur?

Voor de content zelf is dit criterium mild: links in lopende tekst vallen buiten de eis. Toch kun je 2 dingen doen:

- Zet losse links niet als korte woordjes vlak naast of onder elkaar. Een lijstje links werkt beter met elke link op een eigen regel en een normale regelafstand.
- Biedt je editor een knop-variant voor belangrijke links, gebruik die dan. Een knop is groter en duidelijker dan een kale tekstlink.

## Wat kun je doen als developer?

Jij bepaalt hoe groot het klikgebied echt is. De belangrijkste punten:

- Geef icoonknoppen een minimale maat via het element zelf, niet via het icoon:

```css
.icoon-knop {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
}
```

- Wil je het zichtbare ontwerp klein houden, vergroot dan alleen het klikgebied met een pseudo-element:

```css
.klein-doel {
  position: relative;
}

.klein-doel::after {
  content: "";
  position: absolute;
  inset: -8px;
}
```

- Let op bij die truc: vergrote klikgebieden mogen elkaar niet overlappen. Twee doelen die visueel los staan maar onzichtbaar over elkaar heen liggen, maken het probleem juist groter.
- Style je checkboxes of radiobuttons zelf, maak ze dan meteen minstens 24 bij 24 pixels. De browser-uitzondering geldt alleen voor de standaardweergave.
- Meet in CSS-pixels, niet in apparaatpixels. In de browser check je een element snel met `getBoundingClientRect()` in de console of via het inspectiepaneel.

## Zo test je het

De snelste test is de doelgrootte-check in onze gratis [WCAG Radar](/tools/wcag-radar/). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan, ook op localhost of achter een login. De check markeert elk klikbaar element dat kleiner is dan 24 bij 24 pixels. Loop de markeringen na met deze vragen:

- Is dit een link in lopende tekst? Dan is het geen probleem.
- Staat er ruim lege ruimte omheen, zonder andere doelen vlakbij? Dan voldoet het via de ruimte-uitzondering.
- Is het een standaard checkbox of radiobutton zonder eigen styling? Ook dan voldoet het.
- Geen van deze drie? Dan is het doel te klein en moet het klikgebied groter.

Alles draait in je eigen browser, er wordt niets verstuurd of opgeslagen.

## Veelgestelde vragen

### Geldt dit ook voor links in lopende tekst?

Nee. Een link die in een zin staat, valt onder de uitzondering voor tekstregels. De regelhoogte van de tekst bepaalt daar de grootte van het doel. Losse links buiten lopende tekst, zoals in een menu of footer, moeten wel aan het criterium voldoen.

### Is 24 pixels genoeg op mobiel?

Voor WCAG wel, maar het is echt een minimum. Apple adviseert 44 bij 44 en Google 48 bij 48 pixels voor aanraakdoelen. Onze ervaring uit audits en gebruikerstesten sluit daarbij aan: bezoekers met een motorische beperking zijn met 44 pixels veel beter geholpen dan met 24.

### Telt het zichtbare icoon of het klikbare gebied?

Het klikbare gebied. Een icoon van 16 pixels is prima, zolang het klikgebied eromheen minstens 24 bij 24 pixels is. Test dat door net naast het icoon te klikken: reageert de knop, dan is het gebied ruimer dan het beeld.

### Wat is het verschil met SC 2.5.5?

SC 2.5.5 Doelgrootte (uitgebreid) is de strengere variant op niveau AAA en vraagt 44 bij 44 pixels. SC 2.5.8 is de AA-eis van 24 bij 24 pixels die sinds WCAG 2.2 voor de meeste organisaties verplicht is. Wie op de AAA-maat ontwerpt, voldoet automatisch ook aan de AA-eis.

### Onze checkboxes zijn kleiner dan 24 pixels, is dat een probleem?

Gebruik je de standaardweergave van de browser, dan niet: die valt onder de uitzondering. Heb je de checkboxes zelf vormgegeven, dan vervalt die uitzondering en moeten ze minstens 24 bij 24 pixels zijn of genoeg ruimte om zich heen hebben.

## Samenvatting

WCAG-succescriterium 2.5.8 vraagt dat klikbare doelen minstens 24 bij 24 CSS-pixels groot zijn of voldoende ruimte om zich heen hebben, zodat ook bezoekers die minder precies klikken elk doel kunnen raken.

De belangrijkste punten:

- Het klikgebied telt, niet het zichtbare icoon. Een klein icoon in een ruim klikgebied voldoet.
- Designer: leg een minimum van 24 pixels vast in je design system, ontwerp op 44 tot 48 voor touch en geef kleine doelen ruimte.
- Webredacteur: zet losse links niet dicht op elkaar en kies waar mogelijk de knop-variant.
- Developer: geef icoonknoppen een minimale maat, vergroot klikgebieden met padding of een pseudo-element en let op dat ze elkaar niet overlappen.
- Test met de doelgrootte-check van de [WCAG Radar](/tools/wcag-radar/): één klik en elk te klein doel licht op.

**Wil je zeker weten dat je hele website voldoet?** Vraag dan een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan. We testen elk sjabloon en laten per bevinding zien welk doel te klein is en welke oplossing daar past.
