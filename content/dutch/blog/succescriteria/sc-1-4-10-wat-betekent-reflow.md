---
title: 'SC 1.4.10 - Wat betekent "Reflow"?'
translationKey: "sc-1-4-10"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-10"
  - "zoom"
description: "WCAG 1.4.10 vraagt dat content zich schikt naar een smal scherm of 400% zoom, zonder horizontaal scrollen. Praktische uitleg met voorbeelden voor design, webredactie en developers."
keywords:
  - WCAG SC 1.4.10
  - reflow
  - 400% zoom
  - horizontaal scrollen toegankelijkheid
  - 320 pixels breed
  - responsive toegankelijkheid
aliases:
  - /sc-1-4-10-wat-betekent-reflow/
---

Iemand die slecht ziet, zoomt in tot 400%. Op een site die zich niet aanpast betekent lezen dan: naar rechts scrollen, terug naar links, en dat bij elke regel opnieuw. Na 2 alinea's geeft iedereen dat op. Daarom zegt WCAG: **de inhoud moet zich schikken naar het scherm, zonder scrollen in twee richtingen**.

Dit heet **1.4.10 Reflow**.

## Wat zegt het criterium?

[WCAG-succescriterium 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow) vraagt dat content zonder verlies van inhoud of functionaliteit te gebruiken is op een scherm van 320 CSS-pixels breed, zonder dat de bezoeker in twee richtingen hoeft te scrollen.

Die 320 pixels klinkt abstract, maar komt overeen met 400% zoom op een venster van 1280 pixels breed. Het is ook ongeveer de breedte van een smalle telefoon. De inhoud moet zich dan in één kolom schikken: alleen verticaal scrollen, nooit heen en weer. Dat opnieuw schikken van de inhoud heet reflow.

Voor content die van nature horizontaal scrolt, zoals een tijdlijn, geldt het omgekeerde: die moet passen in 256 pixels hoogte, zonder verticaal scrollen.

## Waarom is dit belangrijk?

- Mensen met een visuele beperking zoomen vaak tot 200%, 300% of 400%. Zonder reflow moeten ze per regel horizontaal scrollen en dat is in de praktijk onwerkbaar. Met reflow lezen ze gewoon een smalle kolom, zoals op een telefoon.
- Horizontaal scrollen is ook een motorisch probleem. Wie moeite heeft met precieze muisbewegingen, raakt de draad kwijt bij het heen en weer slepen.
- Een groot deel van je bezoekers komt sowieso via een telefoon. Een site die reflow goed doet, werkt voor hen allemaal beter.

## Wat is niet verplicht?

- **Je hoeft geen aparte mobiele site te maken.** Eén responsieve site die zich aanpast is precies wat dit criterium vraagt.
- **De lay-out hoeft niet mooi te blijven.** Kolommen mogen onder elkaar schuiven en witruimte mag verdwijnen, zolang alles leesbaar en bedienbaar blijft.
- **Sommige content mag wél in twee richtingen scrollen.** Het gaat om content die zijn betekenis verliest als je hem in één kolom perst: datatabellen, kaarten, diagrammen, afbeeldingen, video's en werkbalken van bijvoorbeeld een editor. Het scrollen moet dan binnen dat element gebeuren, niet op de hele pagina.

## Veelgemaakte fouten

Bij onze audits gaat het bij dit succescriterium meestal mis op een van deze punten:

- **Elementen met een vaste breedte in pixels.** Eén element van 600 pixels breed is genoeg om de hele pagina aan het horizontaal scrollen te krijgen. Lees ons praktijkartikel over [elementen met een vaste breedte](/blog/sc-1-4-10-elementen-met-een-vaste-breedte/).
- **Content verdwijnt door `overflow: hidden`.** De pagina scrolt netjes niet, maar de tekst die niet past is simpelweg afgesneden. Meer daarover in [content verdwijnt door overflow hidden](/blog/sc-1-4-10-content-verdwijnt-door-overflow-hidden/).
- **Tekst afgesneden door een vaste hoogte.** Bij een smaller scherm wordt de tekst langer, maar het kader groeit niet mee. We schreven er een case over: [tekst afgesneden door een vaste hoogte](/blog/sc-1-4-10-tekst-afgesneden-door-een-vaste-hoogte/).
- **Functionaliteit verdwijnt op het smalle scherm.** Een filter, een vergelijkingstabel of een downloadknop die in de mobiele weergave gewoon weg is. Dat is verlies van functionaliteit en dus een fout.
- **Sticky elementen vullen het scherm bij zoom.** Een vaste header en een cookiebalk die samen op 400% zoom driekwart van het beeld innemen, zodat er amper content overblijft.
- **Afbeeldingen en iframes breken uit hun kolom.** Een embedded video of kaart met een vaste breedte duwt de pagina breder dan het scherm.

## Wat kun je doen als designer?

- Ontwerp naast desktop ook de smalle variant van elke pagina en elk component. Wat op 320 pixels niet ontworpen is, wordt door de bouwer geïmproviseerd.
- Bepaal per sectie wat er stapelt: welke kolom komt eerst, wat gebeurt er met beeld naast tekst, waar mag witruimte verdwijnen.
- Schrap in het smalle ontwerp geen functies. Alles wat de bezoeker op desktop kan, moet ook op het smalle scherm kunnen, desnoods achter een duidelijke knop.
- Houd vaste elementen zoals headers klein. Wat op desktop een subtiele balk is, vreet op 400% zoom het halve scherm op.
- Controleer je ontwerp met de check Tekst vergroten 400% van de gratis [WCAG Radar van Proper Access](/tools/wcag-radar/). Je ziet direct of de tekst netjes meebeweegt of dat er iets afsnijdt of overlapt.

## Wat kun je doen als webredacteur?

- Gebruik tabellen alleen voor echte data, niet om tekst en afbeeldingen naast elkaar te zetten. Een opmaaktabel kan niet reflowen en dwingt tot horizontaal scrollen.
- Zet geen brede afbeeldingen met tekst erin op de pagina. Bij 400% zoom is zo'n afbeelding onleesbaar of loopt hij uit het scherm.
- Test je pagina op je eigen telefoon, ook de formulieren en de ingesloten content zoals video's en kaarten.
- Zoom op je computer in tot 400% met Ctrl en plus, of Cmd en plus op een Mac. Moet je ergens horizontaal scrollen voor gewone tekst, meld dat dan bij je webbouwer.

## Wat kun je doen als developer?

- Geef media een maximale breedte, zodat afbeeldingen, video's en iframes nooit uit hun kolom breken:

```css
img,
video,
iframe {
  max-width: 100%;
  height: auto;
}
```

- Vermijd vaste breedtes in pixels op lay-out-elementen. Gebruik `max-width` met een percentage of laat grid en flexbox het werk doen met `minmax()` en `flex-wrap`.
- Los te brede datatabellen op met een scroll-container, zodat alleen de tabel scrolt en niet de hele pagina. Maak de container bereikbaar voor toetsenbordgebruikers:

```html
<div class="tabel-scroll" tabindex="0" role="region" aria-label="Tarieven per audit">
  <table>...</table>
</div>
```

```css
.tabel-scroll {
  overflow-x: auto;
}
```

- Gebruik `min-height` in plaats van `height` op elementen met tekst. Op een smal scherm wordt tekst langer en moet het kader meegroeien.
- Verberg in je media queries geen functionaliteit. Verplaats een filter of menu naar een uitklapbaar element in plaats van hem met `display: none` te laten verdwijnen.
- Test tijdens het bouwen op 320 pixels in de responsive mode van je browser, of draai de check Tekst vergroten 400% van de [WCAG Radar](/tools/wcag-radar/) op localhost. De radar werkt op elke pagina, ook achter een login.

## Zo test je het

Zet je browservenster op 1280 pixels breed en zoom in tot 400% met Ctrl en plus, of Cmd en plus op een Mac. Sneller kan ook: open de responsive mode van je browser met F12 en zet de breedte op 320 pixels. Stel jezelf dan deze vragen:

- Kan ik alle gewone tekst lezen zonder horizontaal te scrollen?
- Is alle inhoud er nog, of is er iets afgesneden of verdwenen?
- Werken het menu, de knoppen, de filters en de formulieren nog allemaal?
- Blijft er genoeg scherm over naast de vaste balken zoals de header?

Onze gratis [WCAG Radar](/tools/wcag-radar/) heeft hiervoor de check Tekst vergroten 400%. Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. Alles draait in je eigen browser, er wordt niets verstuurd of opgeslagen.

## Veelgestelde vragen

### Mag een tabel horizontaal scrollen?

Ja. Datatabellen zijn een van de uitzonderingen: een tabel verliest zijn betekenis als je de kolommen onder elkaar zet. Zorg wel dat alleen de tabel zelf scrolt, in een eigen scroll-container, en niet de hele pagina.

### Is een responsive website automatisch goed?

Meestal grotendeels, maar niet vanzelf helemaal. Responsive sites gaan vaak alsnog de fout in met vaste hoogtes die tekst afsnijden, embedded content met een vaste breedte, of functies die in de mobiele weergave verdwijnen. Testen op 320 pixels blijft nodig.

### Waarom precies 320 pixels?

Dat is 400% zoom op een venster van 1280 pixels breed, een gangbare schermbreedte toen het criterium werd geschreven. Het is ook de breedte van een smalle telefoon. Werkt je site op 320 CSS-pixels, dan werkt hij voor vrijwel iedereen die zoomt.

### Mag ik onderdelen weglaten in de mobiele weergave?

Nee. Het criterium eist reflow zonder verlies van inhoud of functionaliteit. Je mag een functie wel compacter aanbieden, bijvoorbeeld achter een uitklapknop, maar hij mag niet verdwijnen.

### Wat is het verschil met SC 1.4.4 Tekst vergroten?

[SC 1.4.4](/blog/sc-1-4-4-wat-betekent-tekst-vergroten/) gaat over tekst vergroten tot 200%: blijft alles leesbaar en bedienbaar? Dit criterium gaat verder: bij 400% zoom of 320 pixels breedte moet de inhoud zich in één kolom schikken, zonder horizontaal scrollen. In de praktijk test je ze vaak in één moeite door.

## Samenvatting

WCAG-succescriterium 1.4.10 vraagt dat content zich schikt naar een scherm van 320 CSS-pixels breed, gelijk aan 400% zoom, zonder horizontaal scrollen en zonder verlies van inhoud of functionaliteit.

De belangrijkste punten:

- Gewone content schikt zich in één kolom: alleen verticaal scrollen, nooit in twee richtingen.
- Datatabellen, kaarten en diagrammen mogen scrollen, maar alleen binnen hun eigen element.
- Designer: ontwerp elke pagina ook op 320 pixels en schrap daarbij geen functies.
- Webredacteur: geen opmaaktabellen en geen brede afbeeldingen met tekst erin.
- Developer: `max-width: 100%` op media, geen vaste breedtes en hoogtes, functionaliteit nooit verbergen in media queries.
- Test op 320 pixels in de responsive mode, of met de check Tekst vergroten 400% van de [WCAG Radar](/tools/wcag-radar/).

**Wil je zeker weten dat je hele website voldoet?** Vraag dan een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan. We testen elk sjabloon op 400% zoom en laten per bevinding zien waar de pagina breekt en hoe je dat oplost.
