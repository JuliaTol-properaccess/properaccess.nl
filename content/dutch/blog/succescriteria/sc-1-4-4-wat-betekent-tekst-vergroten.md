---
title: 'SC 1.4.4 - Wat betekent "Tekst vergroten"?'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-4"
  - "zoom"
description: "WCAG 1.4.4 vraagt dat tekst tot 200% te vergroten is zonder verlies van inhoud of functionaliteit. Praktische uitleg met voorbeelden voor design, webredactie en developers."
keywords:
  - WCAG SC 1.4.4
  - tekst vergroten
  - browserzoom 200%
  - zoom geblokkeerd mobiel
  - tekst valt weg bij inzoomen
  - lettergrootte toegankelijkheid
aliases:
  - /sc-1-4-4-wat-betekent-tekst-vergroten/
---

Iemand die de letters op je site te klein vindt, drukt op Ctrl en plus. De tekst wordt groter, en dan gaat het mis: de laatste regel van elk kader valt weg, knopteksten schuiven over elkaar en het menu is niet meer te openen. Voor veel bezoekers is vergroten geen extraatje maar de enige manier om je site te lezen. Daarom zegt WCAG: **tekst moet tot 200% te vergroten zijn zonder dat er inhoud of functionaliteit verloren gaat**.

Dit heet **1.4.4 Tekst vergroten**.

## Wat zegt het criterium?

[WCAG-succescriterium 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) vraagt dat tekst tot 200% van de normale grootte vergroot kan worden, zonder hulpsoftware en zonder verlies van inhoud of functionaliteit.

In de praktijk betekent het: de zoomfunctie van de browser, met Ctrl en plus of Cmd en plus, moet gewoon werken op je site. Bij 200% moet alle tekst nog leesbaar zijn, mag er niets wegvallen of overlappen, en moeten knoppen, links en formulieren blijven werken. De lay-out mag daarbij best veranderen: tekst die over meer regels loopt of kolommen die onder elkaar schuiven zijn prima.

Op telefoons en tablets hoort daar ook bij: pinch zoom, het vergroten met twee vingers, mag niet geblokkeerd zijn.

## Waarom is dit belangrijk?

- Veel mensen die slechter zien, gebruiken geen schermlezer of vergrotingssoftware. Ze zoomen gewoon in met de browser. Voor hen is dit criterium het verschil tussen een leesbare en een onbruikbare site.
- Naarmate mensen ouder worden, hebben ze grotere letters nodig. Een flink deel van je bezoekers heeft de zoom standaard op 125% of 150% staan en ziet je site dus nooit op 100%.
- Ook zonder beperking zoomt iedereen weleens: op een scherp scherm waar alles klein oogt, bij een presentatie op een beamer, of gewoon aan het eind van een lange dag.

## Wat is niet verplicht?

- **Je hoeft geen vergrootknoppen op je site te zetten.** De browser regelt het vergroten al; jouw taak is dat je site dat aankan.
- **De lay-out hoeft niet hetzelfde te blijven.** Tekst mag afbreken over meer regels en elementen mogen verschuiven, zolang alles leesbaar en bedienbaar blijft.
- **Tekst in afbeeldingen hoeft niet scherp mee te vergroten.** Maar tekst als plaatje is sowieso af te raden: hij wordt wazig bij zoom en is voor niemand aan te passen. Ondertitels bij video vallen ook buiten dit criterium.

## Veelgemaakte fouten

Bij onze audits gaat het bij dit succescriterium meestal mis op een van deze punten:

- **Een kader met een vaste hoogte snijdt de tekst af.** Op 100% past de tekst precies, bij 200% verdwijnt de helft achter de rand.
- **Teksten schuiven over elkaar heen.** Bijvoorbeeld een kop die over de intro valt, of labels die over invoervelden schuiven.
- **Zoomen is geblokkeerd op mobiel.** De pagina bevat `user-scalable=no` of `maximum-scale=1`, waardoor pinch zoom niet werkt. Eén regel code die de hele site onvergrootbaar maakt.
- **Lettergroottes in viewport-eenheden groeien niet mee.** Een kop met alleen `font-size: 5vw` blijft bij inzoomen exact even groot, hoe ver de bezoeker ook zoomt.
- **Knoppen en menu's worden onbereikbaar.** Het menu klapt bij zoom om naar de mobiele variant, maar de knop om hem te openen staat buiten beeld of doet het niet.
- **Belangrijke tekst staat in een afbeelding.** Een openingstijdenbanner of een aanbieding als plaatje wordt bij zoom alleen maar waziger.

## Wat kun je doen als designer?

- Ontwerp componenten die met de tekst meegroeien. Teken kaders niet strak om de tekst heen, maar bedenk bij elk component: wat gebeurt er als deze tekst 2 keer zo groot wordt?
- Reken niet op tekst die precies op één regel past. Een knoplabel, een menu-item of een kop moet ook over 2 regels kunnen lopen zonder dat het ontwerp breekt.
- Leg in je design system vast dat componenten geen vaste hoogtes hebben rond tekst. Een minimale hoogte mag, een vaste niet.
- Controleer je ontwerp met de check Tekst vergroten van onze gratis [WCAG Radar](/tools/wcag-radar/). Eén klik en alle tekst staat op 200%, zoals een slechtziende bezoeker de pagina ziet.

## Wat kun je doen als webredacteur?

- Zet belangrijke informatie nooit alleen in een afbeelding. Openingstijden, prijzen en aankondigingen horen als echte tekst op de pagina.
- Test je eigen pagina's: druk op Ctrl en plus, of Cmd en plus op een Mac, tot de browser op 200% staat. Valt er tekst weg? Kun je nog overal bij?
- Merk je dat een pagina breekt bij inzoomen, meld dat dan bij je webbouwer. Het probleem zit dan in het sjabloon en raakt waarschijnlijk meer pagina's.

## Wat kun je doen als developer?

- Blokkeer het zoomen nooit. De viewport-meta hoort er zo uit te zien, zonder `maximum-scale` of `user-scalable=no`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- Gebruik `min-height` in plaats van `height` op elementen met tekst. Dan groeit het kader mee in plaats van de tekst af te snijden:

```css
.kaart {
  min-height: 12rem; /* height: 12rem zou de tekst afsnijden bij zoom */
}
```

- Combineer viewport-eenheden altijd met een rem-deel, bijvoorbeeld via `clamp()`. Een lettergrootte in alleen `vw` groeit niet mee met de zoom van de browser:

```css
h1 {
  font-size: clamp(2rem, 1rem + 3vw, 3.5rem);
}
```

- Kies voor lettergroottes in `rem` of `em`. Browserzoom schaalt pixels ook, maar relatieve eenheden werken daarnaast voor bezoekers die alleen de tekstgrootte aanpassen in hun browserinstellingen.
- Draai de check Tekst vergroten van de [WCAG Radar](/tools/wcag-radar/) op localhost voordat je oplevert. De radar werkt op elke pagina, ook achter een login.

## Zo test je het

De basistest kost een halve minuut: open de pagina en druk op Ctrl en plus, of Cmd en plus op een Mac, tot de browser op 200% staat. Stel jezelf dan deze vragen:

- Is alle tekst nog volledig leesbaar, of valt er iets weg achter een rand?
- Overlapt er nergens tekst?
- Werken het menu, de knoppen en de formulieren nog?
- Kun je op je telefoon met twee vingers inzoomen?

Wil je het sneller en vaker testen, gebruik dan de check Tekst vergroten in onze gratis [WCAG Radar](/tools/wcag-radar/). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. De radar zet alle tekst in één klik op 200% en je ziet direct waar het knelt. Alles draait in je eigen browser, er wordt niets verstuurd of opgeslagen.

## Veelgestelde vragen

### Moet ik een knop voor grotere letters op mijn site zetten?

Nee. Zulke widgets zijn niet verplicht en meestal ook niet nodig. De browser heeft het vergroten al aan boord; jouw site moet het alleen aankunnen. Een widget die tekst vergroot terwijl de site zelf breekt bij browserzoom, lost niets op.

### Mag ik lettergroottes in pixels zetten?

Voor dit criterium meestal wel: browserzoom vergroot tekst in pixels gewoon mee. Toch raden we `rem` of `em` aan. Sommige bezoekers vergroten niet de hele pagina maar alleen de tekst, via de browserinstellingen, en die instelling werkt alleen bij relatieve eenheden.

### Geldt dit criterium ook op mobiel?

Ja. Op een telefoon is pinch zoom het vergrootmechanisme, en dat mag je niet uitschakelen. Check je viewport-meta op `user-scalable=no` en `maximum-scale`: staan die erin, dan haal je ze weg.

### Wat als mijn tekst bij 200% over 2 regels loopt?

Dat is prima. Het criterium vraagt niet dat de lay-out gelijk blijft, alleen dat er geen inhoud of functionaliteit verloren gaat. Tekst die netjes doorschuift naar een volgende regel is precies het gedrag dat je wilt.

### Wat is het verschil met SC 1.4.10 Reflow?

Dit criterium gaat over tekst vergroten tot 200%: blijft alles leesbaar en bedienbaar? [SC 1.4.10](/blog/sc-1-4-10-wat-betekent-reflow/) gaat verder: bij 400% zoom moet de inhoud zich in één kolom schikken, zonder horizontaal scrollen. In de praktijk test je ze vaak samen, maar een site kan aan het ene voldoen en op het andere zakken.

## Samenvatting

WCAG-succescriterium 1.4.4 vraagt dat tekst tot 200% te vergroten is zonder verlies van inhoud of functionaliteit, zodat de site leesbaar blijft voor iedereen die grotere letters nodig heeft.

De belangrijkste punten:

- Browserzoom tot 200% moet gewoon werken: niets valt weg, niets overlapt, alles blijft bedienbaar.
- Blokkeer pinch zoom nooit met `user-scalable=no` of `maximum-scale=1`.
- Designer: ontwerp componenten die meegroeien met de tekst, zonder vaste hoogtes.
- Webredacteur: zet belangrijke informatie in echte tekst, niet in een afbeelding.
- Developer: gebruik `min-height` in plaats van `height` en combineer viewport-eenheden met `rem`.
- Test met Ctrl en plus, of met de check Tekst vergroten in de [WCAG Radar](/tools/wcag-radar/).

**Wil je zeker weten dat je hele website voldoet?** Vraag dan een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan. We testen elk sjabloon op 200% en laten per bevinding zien waar tekst wegvalt en hoe je dat oplost.
