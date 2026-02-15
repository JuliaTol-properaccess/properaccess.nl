---
title: "WCAG 1.1.1 Niet-tekstuele content: wat je moet weten als je digitaal verkoopt of informeert"
date: 2026-02-15
categories:
  - "wcag-uitgelegd"
description: "Leer hoe je WCAG 1.1.1 implementeert in jouw webshop om te voldoen aan de EAA. Praktische voorbeelden, alt-tekst tips en testmethoden voor toegankelijke e-commerce."
keywords:
  - WCAG 1.1.1 webshop
  - Alt-tekst webshop
  - EAA webshop
  - Webshop toegankelijk maken
  - WCAG niet-tekstuele content
  - European Accessibility Act webwinkel
  - Alt-teksten productafbeeldingen
  - Toegankelijke webshop
  - WCAG e-commerce
  - Webshop EAA compliance
  - Alt-tekst schrijven webshop
  - Toegankelijkheid productpagina
  - WCAG 2.1 webwinkel
tags:
  - "1-1-1"
  - "Afbeeldingen"
---

# WCAG 1.1.1 Niet-tekstuele content: wat je moet weten als je digitaal verkoopt of informeert

_Voor product owners van websites en -winkels die hun site toegankelijk moeten maken_

## WCAG 1.1.1: Niet-tekstuele content uitgelegd

### Wat zegt het criterium?

[WCAG succescriterium 1.1.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) vereist dat alle niet-tekstuele content die aan gebruikers wordt gepresenteerd, een tekstalternatief heeft dat hetzelfde doel dient.

In begrijpelijke taal: **elke informatieve afbeelding, video, audio en elk klikbaar icoon op jouw webshop moet een tekstuele beschrijving hebben, zodat mensen die de visuele content niet kunnen waarnemen, toch begrijpen wat er wordt getoond of wat het icoon doet.**

### Waarom is dit belangrijk?

Mensen die blind zijn of een schermlezer gebruiken, kunnen afbeeldingen niet zien. De schermlezer leest wél de tekstuele beschrijving (alt-tekst) voor. Zonder deze beschrijving:

- Weten klanten niet welk product ze bekijken
- Begrijpen ze niet wat knoppen doen (bijvoorbeeld een winkelwagen-icoon)
- Missen ze belangrijke informatie in infographics of diagrammen

**Voor jou als webshop-eigenaar** betekent dit letterlijk gemiste verkopen als potentiële klanten niet kunnen zien wat je verkoopt.

## Wat valt onder niet-tekstuele content in een webshop?

In jouw webshop komen verschillende typen niet-tekstuele content voor:

### 1. Productafbeeldingen

De belangrijkste categorie voor webshops. Elke foto van een product heeft een beschrijvende alt-tekst nodig.

**Slecht voorbeeld:**

```html
<img src="IMG_5472.jpg" alt="" />
```

De alt-tekst is leeg. Een blinde bezoeker weet niet wat dit product is.

**Goed voorbeeld:**

```html
<img
  src="blauwe-hardloop-sneakers.jpg"
  alt="Nike Air Zoom hardloopschoenen in blauw met witte zool, maat 42"
/>
```

### 2. Iconen op knoppen

Veel webshops gebruiken iconen zonder tekst. Deze hebben ook een tekstalternatief nodig.

**Slecht voorbeeld:**

```html
<button>
  <img src="cart-icon.svg" alt="" />
</button>
```

**Goed voorbeeld:**

```html
<button>
  <img src="cart-icon.svg" alt="Winkelwagen" />
</button>
```

Of beter nog, met zichtbare tekst:

```html
<button>
  <img src="cart-icon.svg" alt="" aria-hidden="true" />
  Winkelwagen
</button>
```

### 3. Logo's en merkafbeeldingen

Jouw bedrijfslogo heeft een tekstalternatief nodig, meestal jouw bedrijfsnaam.

**Voorbeeld:**

```html
<img src="logo.png" alt="Sportwinkel De Hardloper" />
```

### 4. Informatieve grafieken en diagrammen

Bijvoorbeeld een maattabel of vergelijkingstabel.

**Voorbeeld:**

```html
<img
  src="maattabel.png"
  alt="Maattabel: Maat S voor borstomvang 86-90cm, 
          Maat M voor 91-95cm, Maat L voor 96-100cm"
/>
```

### 5. Decoratieve afbeeldingen

Afbeeldingen die alleen voor styling dienen en geen informatie toevoegen.

**Deze krijgen een leeg alt-attribuut:**

```html
<img src="decoratieve-lijn.png" alt="" />
```

Dit vertelt de schermlezer: "Sla deze afbeelding over, het is decoratie."

## Veelvoorkomende problemen in webshops

### Probleem 1: Generieke productnamen

**Wat zien we vaak:**

```html
<img src="product-1.jpg" alt="Product afbeelding" />
<img src="product-2.jpg" alt="Foto" />
<img src="product-3.jpg" alt="" />
```

**Waarom is dit fout?**
Een klant die blind is, weet niet welk product dit is. "Product afbeelding" vertelt niets.

**Oplossing:**

```html
<img src="laptop-dell-xps13.jpg" alt="Dell XPS 13 laptop" />
```

### Probleem 2: Bestandsnamen als alt-tekst

Sommige systemen vullen automatisch de bestandsnaam in als alt-tekst.

**Fout:**

```html
<img src="DSC_8472_FINAL_v2.jpg" alt="DSC_8472_FINAL_v2" />
```

Een schermlezer leest voor: "D S C understreep acht vier zeven twee understreep F I N A L understreep v twee". Volstrekt waardeloos voor de gebruiker.

### Probleem 3: "Klik hier" en "Lees meer"

**Fout:**

```html
<a href="/product-details">
  <img src="arrow-right.png" alt="Klik hier" />
</a>
```

**Waarom fout?** "Klik hier" zegt niets over de bestemming.

**Goed:**

```html
<a href="/product-details">
  Bekijk productdetails
  <img src="arrow-right.png" alt="" aria-hidden="true" />
</a>
```

### Probleem 4: Productkenmerken alleen in afbeeldingen

Bijvoorbeeld een badge "UITVERKOOP 50%" als afbeelding zonder alt-tekst, of belangrijke productinformatie alleen in een foto.

**Oplossing:** Belangrijke informatie moet ook in tekst beschikbaar zijn, niet alleen in afbeeldingen.

### Probleem 5: Vergeten video-beschrijvingen

Een productvideo zonder beschrijving.

**Goed voorbeeld:**

```html
<h3>Productvideo koffiemachine</h3>
<video src="koffiemachine-demo.mp4" controls aria-label="Video koffiemachine">
  <track kind="captions" src="ondertitels.vtt" />
</video>
```

## Specifieke voorbeelden voor webshops

### Voorbeeld 1: Productpagina schoenen

**Slecht:**

```html
<div class="product-gallery">
  <img src="img1.jpg" alt="Afbeelding 1" />
  <img src="img2.jpg" alt="Afbeelding 2" />
  <img src="img3.jpg" alt="Afbeelding 3" />
  <img src="img4.jpg" alt="Afbeelding 4" />
</div>
```

**Goed:**

```html
<div class="product-gallery">
  <img
    src="sneaker-front.jpg"
    alt="Nike Air Max 90 sneakers voorkant, wit met rode accenten"
  />
  <img
    src="sneaker-side.jpg"
    alt="Nike Air Max 90 sneakers zijkant, Air Max logo zichtbaar"
  />
  <img
    src="sneaker-sole.jpg"
    alt="Nike Air Max 90 sneakers onderkant, zool met grippatroon"
  />
  <img
    src="sneaker-detail.jpg"
    alt="Nike Air Max 90 close-up van Air cushion systeem in hak"
  />
</div>
```

### Voorbeeld 2: Zoekfunctie

**Slecht:**

```html
<button type="submit">
  <img src="search.svg" alt="" />
</button>
```

**Goed - optie 1:**

```html
<button type="submit">
  <img src="search.svg" alt="Zoeken" />
</button>
```

**Goed - optie 2 (beste oplossing):**

```html
<button type="submit" aria-label="Zoeken in producten">
  <svg aria-hidden="true"><!-- search icon --></svg>
</button>
```

### Voorbeeld 3: Winkelwagen indicator

**Slecht:**

```html
<a href="/cart">
  <img src="cart.svg" alt="" />
  <span>3</span>
</a>
```

Gebruiker weet niet wat "3" betekent.

**Goed:**

```html
<a href="/cart">
  <img src="cart.svg" alt="Winkelwagen" />
  <span>Winkelwagen: 3 artikelen</span>
</a>
```

### Voorbeeld 4: Betaalmethoden

**Slecht:**

```html
<img src="ideal.png" alt="" />
<img src="paypal.png" alt="" />
<img src="visa.png" alt="" />
```

**Goed:**

```html
<p>Betaalmethoden:</p>
<img src="ideal.png" alt="iDEAL" />
<img src="paypal.png" alt="PayPal" />
<img src="visa.png" alt="Visa" />
```

### Voorbeeld 5: Sterrenbeoordelingen

**Slecht:**

```html
<img src="5-stars.png" alt="" />
```

**Goed:**

```html
<img src="5-stars.png" alt="Beoordeling: 5 van 5 sterren" />
```

Of nog beter met gestructureerde data:

```html
<div>
  <img src="stars.png" alt="Beoordeling" />
  4.5 (127 reviews)
</div>
```

## Uitzonderingen: wanneer is alt-tekst niet nodig?

Er zijn situaties waarin alt-tekst niet verplicht is:

### 1. Decoratieve afbeeldingen

Afbeeldingen die alleen voor opmaak dienen, geen informatie toevoegen.

**Voorbeeld:** Een decoratieve lijn tussen secties, een achtergrondpatroon.

```html
<img src="decoratieve-lijn.png" alt="" />
```

**Let op:** Bij twijfel, vraag het aan een expert. Mail je vraag naar contact@properaccess.nl. We kijken graag met je mee.

### 2. Afbeeldingen waar de info al in tekst staat

Als de informatie van de afbeelding direct ernaast in tekst staat.

**Voorbeeld:**

```html
<h2>Draadloze Bluetooth koptelefoon</h2>
<img src="koptelefoon.jpg" alt="" />
<p>Deze draadloze koptelefoon heeft 30 uur batterijduur...</p>
```

Het alt-attribuut kan leeg blijven als de productnaam en beschrijving direct bij de afbeelding staan. Maar soms is het beter om toch een korte alt toe te voegen: `alt="Draadloze koptelefoon"`.

### 3. Knoppen met zichtbare tekst

Als een knop al tekst bevat, kan het icoon een leeg alt krijgen. Maar let wel op! Op kleine schermen verdwijnt vaak de tekst op een knop en blijft alleen een icoon over. Dan is tekstalterantief heel belangrijk!

```html
<button>
  <img src="plus-icon.svg" alt="" aria-hidden="true" />
  Toevoegen aan winkelwagen
</button>
```

## Hoe schrijf je goede alt-teksten?

### Basisprincipes

1. **Wees beschrijvend maar bondig**
   - Focus op essentie: wat moet de gebruiker weten?

2. **Beschrijf functie EN inhoud**
   - Niet alleen: "Blauwe schoen"
   - Maar: "Nike hardloopschoen in blauw, mesh materiaal"

3. **Vermijd overbodige woorden**
   - Niet: "Afbeelding van " of "Foto van"
   - Wel: "Dell XPS 13 laptop"
   - (De schermlezer zegt al dat het een afbeelding is)

4. **Context is belangrijk**
   - Dezelfde afbeelding kan op verschillende pagina's andere alt-tekst hebben
   - Voorbeeld: Bedrijfslogo op homepage: "Sportwinkel De Hardloper"
   - Zelfde logo in footer: kan `alt=""` als de bedrijfsnaam al in de footer staat

5. **Geen keyword-stuffing voor SEO**
   - Niet: "Hardloopschoenen hardloopschoenen voor hardlopen beste hardloopschoenen kopen"
   - Wel: "Nike Air Zoom hardloopschoenen in blauw"

### Praktische tips per type afbeelding

**Productfoto's:**

- Merk, model, kleur, opvallende kenmerken
- "Samsung Galaxy S24 smartphone in grafietgrijs"

**Close-ups van details:**

- Wat wordt getoond in de close-up
- "Close-up van de USB-C aansluiting aan de onderkant"

**Lifestyle foto's:**

- Als het product duidelijk is: beschrijf het product
- "Vrouw draagt de grijze wollen trui tijdens wandeling in park"
- Bijna alle foto's van stockmarkets zijn decoratief en moeten geen beschrijving krijgen.

**Meerdere afbeeldingen van hetzelfde product:**

- Wees specifiek per afbeelding
- Niet 4x "Product afbeelding"
- Maar: "Voorkant", "Achterkant", "Linkerzijde", "Detail van sluiting"

## Hoe kun je controleren of jouw webshop voldoet?

### Methode 1: Handmatige controle met browser

1. **Inspecteer de HTML-code:**
   - Rechtermuisknop op een afbeelding → "Inspecteren"
   - Zoek het `<img>` element
   - Controleer of het `alt` attribuut aanwezig is en zinvol

2. **Gebruik Chrome DevTools:**
   - Open DevTools (F12)
   - Ga naar Elements tab
   - Klik op een afbeelding
   - Rechts zie je het Accessibility panel
   - Hier staat de "Name" (= de alt-tekst die schermlezers voorlezen)

### Methode 2: Geautomatiseerde tools

**WAVE Web Accessibility Evaluation Tool (gratis Chrome extensie)**

- Instaleer de WAVE extensie
- Bezoek jouw webshop pagina
- Klik op het WAVE icoon
- Rode foutmeldingen tonen afbeeldingen zonder alt-tekst
- Groene vinkjes tonen correcte alt-teksten

**axe DevTools (gratis Chrome extensie)**

- Instaleer axe DevTools
- Open DevTools (F12)
- Klik op "axe DevTools" tab
- Klik "Scan ALL of my page"
- Bekijk de resultaten onder "Images"

### Methode 3: Test met een schermlezer

De beste manier om te testen is met een echte schermlezer:

**Windows - NVDA (gratis):**

1. Download NVDA van nvaccess.org
2. Installeer en start NVDA
3. Bezoek jouw webshop
4. Gebruik ↓ pijl om door de pagina te navigeren
5. Luister wat NVDA voorleest bij afbeeldingen

**Mac - VoiceOver (ingebouwd):**

1. Open Systeemvoorkeuren → Toegankelijkheid → VoiceOver
2. Schakel VoiceOver in (of druk Cmd+F5)
3. Bezoek jouw webshop in Safari
4. Gebruik Ctrl+Option+→ om door de pagina te navigeren
5. Luister wat VoiceOver voorleest

**Wat moet je horen?**

- Bij elke productafbeelding: een duidelijke productbeschrijving
- Bij knoppen: wat de knop doet
- Bij logo's: de bedrijfsnaam
- Bij decoratieve afbeeldingen: niets (schermlezer slaat over)

### Methode 4: Professionele audit

Voor [een complete check](https://www.properaccess.nl/toegankelijkheidsaudit/) kun je een toegankelijkheidsexpert inhuren die:

- Handmatig jouw hele webshop doorloopt
- Test met verschillende hulpmiddelen
- Een rapport oplevert met alle problemen
- Advies geeft over oplossingen

## Veelgestelde vragen

**Moet ik voor elke kleurvariatie van een product een andere alt-tekst?**

Ja. Als je foto's toont van hetzelfde shirt in rood, blauw en groen, heeft elke foto een eigen alt-tekst:

- `alt="Katoenen t-shirt in rood"`
- `alt="Katoenen t-shirt in blauw"`
- `alt="Katoenen t-shirt in groen"`

**Kan ik AI gebruiken om alt-teksten te genereren?**

AI kan helpen, maar controleer altijd de output. AI begrijpt context niet altijd goed. Bijvoorbeeld: een foto van schoenen op een strand kan als "Schoenen op het strand" worden beschreven, terwijl je wilt: "Nike hardloopschoenen in actie tijdens strandtraining".

**Moet ik alt-teksten toevoegen aan thumbnail-afbeeldingen?**

Als de thumbnail naar een grotere versie van dezelfde afbeelding linkt, kan de alt hetzelfde zijn. Als het een link is, beschrijf dan ook de actie: `alt="Nike Air Max schoenen in rood - bekijk grote versie"`.

**Hoe zit het met video's?**

Video's moeten een korte tekstuele introductie krijgen: geef video's een beschrijvende titel of inleiding, zodat mensen weten waar de video over gaat voor ze hem afspelen.

**Telt dit ook voor afbeeldingen in PDF's?**

Ja! Als je productcatalogi of brochures als PDF aanbiedt, moeten afbeeldingen daarin ook alt-teksten hebben.

**Wat als mijn e-commerce platform geen alt-teksten ondersteunt?**

Bijna alle moderne platforms (Shopify, WooCommerce, Magento, etc.) ondersteunen alt-teksten. Als het jouw platform niet ondersteunt, moet je overwegen om te migreren naar een platform dat wel toegankelijk is.

## Resources en hulpmiddelen

### Gratis tools

- **WAVE:** wave.webaim.org
- **axe DevTools:** deque.com/axe/devtools
- **NVDA Schermlezer:** nvaccess.org (Windows)

### Documentatie

- **WCAG 2.1 Nederlands:** wcag.nl
- **W3C Understanding 1.1.1:** www.w3.org/WAI/WCAG21/Understanding/non-text-content
- **NL Design System:** nldesignsystem.nl/wcag/1.1.1
- **WebAIM Artikelen:** webaim.org/articles

## Conclusie

WCAG-succescriterium 1.1.1 is de basis van een toegankelijke webshop. Door alle afbeeldingen, iconen en niet-tekstuele content te voorzien van betekenisvolle tekstalternatieven, maak je jouw webshop bruikbaar voor miljoenen mensen met een visuele beperking.

**Belangrijkste takeaways:**

- ✅ **Elke productafbeelding** heeft een beschrijvende alt-tekst nodig
- ✅ **Elk icoon en elke knop** moet een tekstlabel of alt-tekst hebben
- ✅ **Decoratieve afbeeldingen** krijgen een leeg alt-attribuut (`alt=""`)
- ✅ **Test regelmatig** met tools zoals WAVE en een schermlezer
- ✅ **Maak het een gewoonte** om direct alt-teksten toe te voegen bij nieuwe content

**Heb je vragen over het toegankelijk maken van jouw webshop?** Overweeg om [een quicksan](https://www.properaccess.nl/quickscan-digitale-toegankelijkheid/) of [een toegankelijkheidsaudit](https://www.properaccess.nl/toegankelijkheidsaudit/) aan te vragen of een specialist te raadplegen. Investeren in toegankelijkheid nu bespaart je op de lange termijn tijd, geld en juridische problemen.

Wil je een langer checklist hebben met punten waar je je webshop op moet checken? Daar heb ik een artikel over geschreven. Lees [mijn artikel op Frankwatching](https://www.frankwatching.com/archive/2025/02/17/meer-omzet-met-toegankelijke-webshop/).
