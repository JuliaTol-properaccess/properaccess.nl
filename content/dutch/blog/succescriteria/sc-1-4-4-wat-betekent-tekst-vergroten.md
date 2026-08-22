---
title: 'SC 1.4.4 - Wat betekent "Tekst vergroten"?'
translationKey: "sc-1-4-4"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-4"
  - "zoom"
description: "WCAG 1.4.4 vraagt dat tekst tot 200% te vergroten is zonder verlies van inhoud of functionaliteit. Uitleg van het verschil tussen paginazoom en alleen tekst vergroten, met voorbeelden voor design, webredactie en developers."
keywords:
  - WCAG SC 1.4.4
  - tekst vergroten
  - browserzoom 200%
  - verschil paginazoom en tekstzoom
  - alleen tekst zoomen Firefox
  - accordions bij 200% zoom
  - zoom geblokkeerd mobiel
  - tekst valt weg bij inzoomen
  - lettergrootte toegankelijkheid
aliases:
  - /sc-1-4-4-wat-betekent-tekst-vergroten/
---

Iemand die de letters op je site te klein vindt, drukt op Ctrl en plus, of Command en plus op een Mac. De tekst wordt groter, en dan gaat het mis: de laatste regel van elk kader valt weg, knopteksten schuiven over elkaar en het menu is niet meer te openen. Voor veel bezoekers is vergroten geen extraatje maar de enige manier om je site te lezen. Daarom zegt WCAG: **tekst moet tot 200% te vergroten zijn zonder dat er inhoud of functionaliteit verloren gaat**.

Dit heet **1.4.4 Tekst vergroten**.

## Wat zegt het criterium?

[WCAG-succescriterium 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) vraagt dat tekst tot 200% van de normale grootte vergroot kan worden, zonder hulpsoftware en zonder verlies van inhoud of functionaliteit.

In de praktijk betekent het: de zoomfunctie van de browser, met Ctrl en plus op Windows en Linux of Command en plus op een Mac, moet gewoon werken op je site. Bij 200% moet alle tekst nog leesbaar zijn, mag er niets wegvallen of overlappen, en moeten knoppen, links en formulieren blijven werken. De lay-out mag daarbij best veranderen: tekst die over meer regels loopt of kolommen die onder elkaar schuiven zijn prima.

Op telefoons en tablets hoort daar ook bij: pinch zoom, het vergroten met twee vingers, mag niet geblokkeerd zijn.

## Twee manieren om te vergroten, twee verschillende uitkomsten

Bezoekers vergroten tekst op twee manieren, en die geven een heel ander beeld van je site. Dit is de belangrijkste reden dat twee mensen die 1.4.4 testen tot verschillende bevindingen komen.

**Paginazoom** is Ctrl en plus, of Command en plus op een Mac. De browser vergroot alles: tekst, afbeeldingen, randen, witruimte. Wat je vaak vergeet: de viewport krimpt. Zoom je een venster van 1280 pixels breed in tot 200%, dan denkt je CSS dat het scherm nog maar 640 pixels breed is. Al je mediaquery's schakelen dus om naar het ontwerp voor smallere schermen.

**Alleen tekst vergroten** is de instelling "Alleen tekst zoomen" in Firefox, de lettergrootte-instelling in de browser en de tekstgrootte-instelling van het besturingssysteem. Hier worden alleen de letters groter en blijft de viewport even breed. Je desktopontwerp blijft dus staan, met grotere tekst erin.

Beide mechanismen tellen mee voor 1.4.4. Je site moet ze allebei aankunnen.

### Wat je bij paginazoom vindt

Omdat de mediaquery's omschakelen, krijg je op 200% letterlijk een ander ontwerp te zien. Componenten die op desktop uitgeklapt naast elkaar staan, klappen in tot de variant voor smalle schermen.

Een voorbeeld dat je bij grote webshops veel ziet: de footer heeft op 1280 pixels vier open kolommen met links naar klantenservice, winkels en voorwaarden. Zoom je in tot 200%, dan verschijnen op diezelfde plek vier dichtgeklapte accordions. Dezelfde links, maar nu achter een klik.

Dat is op zichzelf geen fout. Het criterium vraagt niet dat de lay-out gelijk blijft, en inhoud achter een accordion is niet verloren zolang die accordion te openen is. Waar het misgaat, is als die smalle variant minder goed werkt dan de brede: een accordion die alleen met de muis opengaat, een openknop zonder toegankelijke naam, of een menu dat omklapt naar een hamburger die bij zoom buiten beeld valt. Die problemen zie je alleen als je echt inzoomt.

### Wat je bij alleen tekst vergroten vindt

Hier blijft de lay-out staan en worden alleen de letters groter. Daardoor komt de tekst klem te zitten in kaders die niet meegroeien. Dit is de strengere test, en hij legt precies de fouten bloot die paginazoom verbergt: vaste hoogtes die tekst afsnijden, knoplabels die over de knoprand lopen, koppen die over de intro schuiven.

Bij paginazoom blijft de verhouding tussen tekst en kader namelijk gelijk. Een knop van 140 bij 40 pixels met een label van 16 pixels wordt gewoon twee keer zo groot, dus het label past nog steeds. Bij alleen tekst vergroten wordt het label 32 pixels terwijl de knop 140 bij 40 blijft, en dan zie je meteen dat er een vaste maat in het ontwerp zit.

Test dus allebei. De ene test vindt wat de andere laat liggen.

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
- **De ingeklapte variant werkt slechter dan de brede.** Bij 200% verschijnen accordions, tabbladen of een hamburgermenu die op desktop niet bestaan. Die componenten zijn vaak minder goed getest: een accordion die niet op Enter reageert, een openknop zonder toegankelijke naam, of inhoud die na openen niet in de voorleesvolgorde staat.
- **Belangrijke tekst staat in een afbeelding.** Een openingstijdenbanner of een aanbieding als plaatje wordt bij zoom alleen maar waziger.

## Wat kun je doen als designer?

- Ontwerp componenten die met de tekst meegroeien. Teken kaders niet strak om de tekst heen, maar bedenk bij elk component: wat gebeurt er als deze tekst 2 keer zo groot wordt?
- Reken niet op tekst die precies op één regel past. Een knoplabel, een menu-item of een kop moet ook over 2 regels kunnen lopen zonder dat het ontwerp breekt.
- Leg in je design system vast dat componenten geen vaste hoogtes hebben rond tekst. Een minimale hoogte mag, een vaste niet.
- Teken ook de smalle variant van elk component uit. Bij 200% zoom krijgt je desktopbezoeker die variant te zien, dus een accordion of hamburgermenu dat je "alleen voor mobiel" bedacht hebt, is in de praktijk ook een desktopcomponent.
- Controleer je ontwerp met de check Alleen tekst vergroten van onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar). Eén klik en alle tekst staat op 200% terwijl je lay-out blijft staan, dus je ziet direct welke kaders niet meegroeien.

## Wat kun je doen als webredacteur?

- Zet belangrijke informatie nooit alleen in een afbeelding. Openingstijden, prijzen en aankondigingen horen als echte tekst op de pagina.
- Test je eigen pagina's: druk op Ctrl en plus, of Command en plus op een Mac, tot de browser op 200% staat. Valt er tekst weg? Kun je nog overal bij?
- Schrik niet als de pagina er bij 200% anders uitziet dan je gewend bent. Kolommen die inklappen tot accordions horen erbij. Controleer wel of je alles wat op 100% zichtbaar was, op 200% nog kunt bereiken.
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
- Test je componenten op beide breedtes. Bouw je een accordion die pas onder een breakpoint verschijnt, dan is dat de component die je desktopbezoeker bij 200% zoom krijgt. Geef hem dezelfde aandacht als de brede variant: bedienbaar met het toetsenbord, een `button` met een duidelijke naam en een correcte `aria-expanded`.
- Draai de checks Alleen tekst vergroten en Pagina-zoom 200% van de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) op localhost voordat je oplevert. De radar werkt op elke pagina, ook achter een login.

## Zo test je het

Test allebei de mechanismen. Ze kosten samen een paar minuten en vinden verschillende dingen.

### Test 1: paginazoom met Ctrl en plus of Command en plus

Zet je browservenster op 1280 pixels breed en druk op Ctrl en plus, of Command en plus op een Mac, tot je op 200% staat. Je zit dan op een viewport van 640 pixels, en dat is precies de situatie waarvoor de meeste ontwerpen een ander sjabloon hebben. Stel jezelf deze vragen:

- Is alle tekst nog volledig leesbaar, of valt er iets weg achter een rand?
- Welke componenten zien er anders uit dan op 100%? Loop die na: gaat de accordion open met het toetsenbord, heeft de knop een duidelijke naam, is de hamburger bereikbaar?
- Kun je alles bereiken wat op 100% zichtbaar was?
- Werken het menu, de knoppen en de formulieren nog?

### Test 2: alleen de tekst vergroten

Zet in Firefox de instelling "Alleen tekst zoomen" aan onder Beeld en Zoomen, en zoom daarna in tot 200%. Je lay-out blijft nu staan en alleen de letters worden groter. Stel jezelf deze vragen:

- Wordt er tekst afgesneden door een kader met een vaste hoogte?
- Overlapt er nergens tekst?
- Lopen knoplabels of menu-items over hun rand heen?

En op je telefoon: kun je met twee vingers inzoomen, of is dat geblokkeerd?

### Sneller testen met de WCAG Radar

Wil je het vaker en sneller doen, gebruik dan onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. Voor dit criterium staan er twee checks in:

- **Alleen tekst vergroten (200%)** zet alle tekst op 200% en laat je viewport staan. Dit is test 2, zonder dat je een browserinstelling hoeft om te zetten.
- **Pagina-zoom 200% (640 px)** opent de pagina in een venster van 640 pixels breed. Dat geeft dezelfde lay-out, dezelfde mediaquery's en dezelfde ingeklapte componenten als 1280 pixels op 200%. Zoom dat venster daarna zelf in om ook de lettergrootte te zien.

Alles draait in je eigen browser, er wordt niets verstuurd of opgeslagen. De radar werkt ook achter een login en op localhost.

## Veelgestelde vragen

### Moet ik een knop voor grotere letters op mijn site zetten?

Nee. Zulke widgets zijn niet verplicht en meestal ook niet nodig. De browser heeft het vergroten al aan boord; jouw site moet het alleen aankunnen. Een widget die tekst vergroot terwijl de site zelf breekt bij browserzoom, lost niets op.

### Mag ik lettergroottes in pixels zetten?

Voor dit criterium meestal wel: browserzoom vergroot tekst in pixels gewoon mee. Toch raden we `rem` of `em` aan. Sommige bezoekers vergroten niet de hele pagina maar alleen de tekst, via de browserinstellingen, en die instelling werkt alleen bij relatieve eenheden.

### Waarom zie ik iets anders met de WCAG Radar dan met Ctrl en plus of Command en plus?

Omdat het twee verschillende mechanismen zijn. De check Alleen tekst vergroten schaalt de letters en laat je viewport op zijn huidige breedte staan, zoals "Alleen tekst zoomen" in Firefox. Ctrl en plus, of Command en plus op een Mac, vergroot alles én halveert je viewport, waardoor je mediaquery's omschakelen naar het ontwerp voor smalle schermen. Je krijgt dan letterlijk een andere pagina te zien, met ingeklapte componenten die op 100% niet bestaan.

Wil je die tweede situatie nabootsen, gebruik dan de check Pagina-zoom 200% in de radar. Die opent de pagina in een venster van 640 pixels, precies de viewport die je overhoudt op 1280 pixels bij 200% zoom.

### Bij 200% verschijnen er accordions die er op 100% niet zijn. Is dat een fout?

Op zichzelf niet. Je site mag bij zoom overschakelen naar het ontwerp voor smallere schermen, en inhoud achter een accordion is niet verloren zolang die accordion werkt. Loop die componenten wel na, want ze zijn vaak minder goed getest dan de brede variant. Kijk of de accordion opengaat met het toetsenbord, of de knop een duidelijke naam heeft en of er niets verdwijnt dat op 100% wel zichtbaar was.

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
- Er zijn twee mechanismen. Paginazoom halveert je viewport en laat je site omschakelen naar het smalle ontwerp; alleen tekst vergroten laat de lay-out staan en zet de letters klem in hun kaders. Test ze allebei.
- Ingeklapte componenten bij 200% zijn geen fout, maar controleer wel of ze net zo goed werken als de brede variant.
- Blokkeer pinch zoom nooit met `user-scalable=no` of `maximum-scale=1`.
- Designer: ontwerp componenten die meegroeien met de tekst, zonder vaste hoogtes.
- Webredacteur: zet belangrijke informatie in echte tekst, niet in een afbeelding.
- Developer: gebruik `min-height` in plaats van `height` en combineer viewport-eenheden met `rem`.
- Test met Ctrl en plus, of Command en plus op een Mac, op 1280 pixels, en met de checks Alleen tekst vergroten en Pagina-zoom 200% in de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar).

**Wil je zeker weten dat je hele website voldoet?** Vraag dan een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan. We testen elk sjabloon op 200% en laten per bevinding zien waar tekst wegvalt en hoe je dat oplost.
