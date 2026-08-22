---
title: 'SC 1.4.1 - Wat betekent "Gebruik van kleur"?'
translationKey: "sc-1-4-1"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-1"
  - "kleur"
description: "WCAG 1.4.1 stelt dat kleur nooit de enige manier mag zijn om informatie over te brengen. Praktische uitleg met voorbeelden voor design, webredactie en developers."
keywords:
  - WCAG SC 1.4.1
  - gebruik van kleur
  - kleur als enige informatiedrager
  - kleurenblind website
  - links onderstrepen WCAG
  - foutmelding alleen rode rand
aliases:
  - /sc-1-4-1-wat-betekent-gebruik-van-kleur/
---

Een invoerveld dat rood kleurt bij een fout. Een groene stip voor beschikbaar en een rode voor bezet. Links die alleen een ander kleurtje hebben dan de tekst eromheen. Voor wie kleuren niet of anders ziet, verdwijnt die informatie volledig. Daarom zegt WCAG: **kleur mag nooit de enige visuele manier zijn om informatie over te brengen**.

Dit heet **1.4.1 Gebruik van kleur**.

## Wat zegt het criterium?

[WCAG-succescriterium 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) verbiedt dat kleur het enige visuele middel is om informatie over te brengen, een actie aan te geven, om een reactie te vragen of een element te onderscheiden.

In de praktijk betekent het: overal waar kleur iets betekent, moet een tweede aanwijzing staan die niet op kleur leunt. Bijvoorbeeld tekst, een icoon, een onderstreping, een vorm, een patroon of een rand. De kleur mag blijven, maar de boodschap moet ook zonder kleur overkomen.

## Waarom is dit belangrijk?

- Ongeveer 1 op de 12 mannen en 1 op de 200 vrouwen is kleurenblind. De meest voorkomende vorm is rood-groen. Juist die twee kleuren gebruiken websites het vaakst voor fout en goed.
- Mensen die slecht zien of hoge contrastinstellingen gebruiken, nemen kleurverschillen minder of anders waar.
- Ook zonder beperking valt kleur regelmatig weg: een e-reader in grijstinten, een zwart-witprint, een scherm in de volle zon.
- Een tweede aanwijzing helpt iedereen. Een foutmelding met tekst en icoon is voor elke bezoeker sneller te begrijpen dan alleen een rood randje.

## Wat is niet verplicht?

- **Je hoeft kleur niet te vermijden.** Gebruik kleur gerust volop; het criterium vraagt alleen dat kleur nooit de enige drager van de informatie is.
- **Kleur als extraatje mag altijd.** Staat de informatie al in tekst, dan mag je die met kleur extra benadrukken. Een foutmelding met duidelijke tekst mag dus prima ook een rode rand hebben.
- **Decoratieve kleuren vallen buiten dit criterium.** Een gekleurde sectie-achtergrond of een sfeervolle illustratie brengt geen informatie over en hoeft dus geen tweede aanwijzing.

## Veelgemaakte fouten

Bij onze audits gaat het bij dit succescriterium meestal mis op een van deze punten:

- **Links die alleen door kleur herkenbaar zijn.** Geen onderstreping, geen icoon, alleen een ander kleurtje. Lees ons praktijkartikel over [links die alleen door kleur herkenbaar zijn](/blog/sc-1-4-1-links-die-alleen-door-kleur-herkenbaar-zijn/).
- **Een formulierveld dat rood kleurt bij een fout, zonder tekst erbij.** De bezoeker moet raden welk veld fout is en waarom. Meer daarover in [formulierveld kleurt rood bij een fout, dat is alles](/blog/sc-1-4-1-formulierveld-kleurt-rood-bij-een-fout-dat-is-alles/).
- **Statussen in tabellen en overzichten alleen met een kleur.** Groen is goedgekeurd, rood is afgewezen, en verder geen verschil. We schreven er een case over: [groene rij is goedgekeurd, rode rij is afgewezen](/blog/sc-1-4-1-groene-rij-goedgekeurd-rode-rij-afgewezen/).
- **Grafieken waarin lijnen, staven of taartpunten alleen door kleur verschillen.** De legenda werkt dan alleen voor wie de kleuren uit elkaar houdt.
- **De actieve pagina in het menu heeft alleen een andere kleur.** Zonder streep, vet of ander kenmerk is niet te zien waar je bent.
- **Verplichte velden die alleen met een kleur zijn gemarkeerd.** Bijvoorbeeld: "velden met een rood label zijn verplicht".

## Wat kun je doen als designer?

Dit criterium wordt vrijwel altijd in de ontwerpfase gewonnen of verloren. Zo houd je het goed:

- Ontwerp elke status met een dubbele drager: kleur plus tekst, of kleur plus een onderscheidend icoon. Een vinkje en een kruisje werken ook in grijstinten.
- Leg in je design system vast dat links in lopende tekst onderstreept zijn. Dat voorkomt discussie per pagina.
- Geef grafiekstijlen naast kleur ook patronen, vormen of directe labels bij de data. Een label bij de lijn zelf werkt beter dan een legenda ernaast.
- Ontwerp de actieve stand van menu's, tabs en stappen met een vormverschil: een streep eronder, een vette letter, een ingekleurde marker.
- Controleer je ontwerp met de grijswaarden-check van onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar). Eén klik en de hele pagina wordt grijs. Alles wat dan onduidelijk wordt, leunt te veel op kleur.

## Wat kun je doen als webredacteur?

Ook in de content zelf sluipt dit probleem er makkelijk in:

- Verwijs in instructies nooit naar kleur. Niet "klik op de groene knop", maar "klik op de knop Verstuur".
- Geef betekenis niet via tekstkleur in je editor. Een rood woord om iets belangrijks te markeren zegt een deel van je bezoekers niets. Gebruik woorden: "let op:".
- Plaats je een grafiek of kaart als afbeelding, controleer dan of de series ook zonder kleur uit elkaar te houden zijn. Vraag anders om een versie met labels of patronen.
- Bekijk je pagina in grijstinten met de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar). Begrijp je nog alles? Zie je welke tekst een link is?

## Wat kun je doen als developer?

Jij bepaalt hoe statussen en links technisch in elkaar zitten. De belangrijkste punten:

- Onderstreep links in lopende tekst met CSS en haal die onderstreping niet weg:

```css
main p a,
main li a {
  text-decoration: underline;
}
```

- Bouw foutmeldingen met tekst en icoon, en koppel de melding aan het veld. De rode rand mag erbij, maar draagt de boodschap niet alleen:

```html
<label for="email">E-mailadres</label>
<input id="email" type="email" aria-invalid="true" aria-describedby="email-fout">
<p id="email-fout">
  <svg aria-hidden="true"><!-- waarschuwingsicoon --></svg>
  Vul een e-mailadres in met een apenstaartje, bijvoorbeeld naam@voorbeeld.nl.
</p>
```

- Markeer verplichte velden met het woord "verplicht" in het label of met `required` plus een zichtbaar teken, niet alleen met een kleur.
- Geef de actieve pagina in navigatie `aria-current="page"` en style die stand met meer dan kleur, bijvoorbeeld een onderstreping.
- Gebruik in grafiekbibliotheken de opties voor patronen, markervormen en directe labels. De meeste bibliotheken, zoals Chart.js en Highcharts, ondersteunen dit.
- Draai de grijswaarden-check van de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) op localhost voordat je oplevert. De radar werkt op elke pagina, ook achter een login.

## Zo test je het

De snelste test is de grijswaarden-check in onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. Met één klik wordt de hele pagina grijs. Stel jezelf dan deze vragen:

- Zie ik welke tekst een link is?
- Zie ik welk veld fout is ingevuld en waarom?
- Zie ik in de grafiek welke lijn welke is?
- Zie ik op welke pagina ik ben in het menu?
- Zie ik welke stap of tab actief is?

Is het antwoord ergens nee, dan leunt dat onderdeel alleen op kleur. Alles draait in je eigen browser, er wordt niets verstuurd of opgeslagen.

## Veelgestelde vragen

### Moeten alle links onderstreept zijn?

In lopende tekst is onderstrepen de veiligste keuze. WCAG staat een alternatief toe: de linkkleur verschilt minimaal 3:1 van de omringende tekst én de link krijgt bij hover en focus een extra aanwijzing, zoals een onderstreping. Dat is lastiger goed te krijgen dan gewoon onderstrepen. Voor links in menu's, knoppen en kaarten geldt dit niet: daar maakt de plek of vorm al duidelijk dat het een link is.

### Mag ik rood en groen gebruiken voor fout en goed?

Ja. Het criterium verbiedt geen kleuren, ook deze combinatie niet. Zet er alleen altijd een tweede aanwijzing bij: het woord "goedgekeurd", een vinkje, een kruisje. Dan werkt je pagina ook voor de bezoekers die rood en groen niet uit elkaar houden.

### Is een icoon genoeg als tweede aanwijzing?

Ja, als het icoon zelf onderscheidend is. Een vinkje tegenover een kruisje werkt. Twee bolletjes die alleen in kleur verschillen niet. Tekst blijft het duidelijkst, zeker bij statussen die de bezoeker moet begrijpen om verder te kunnen.

### Geldt dit ook voor grafieken en kaarten?

Ja. Een grafiek waarin de series alleen door kleur verschillen, voldoet niet. Gebruik patronen, verschillende markervormen, directe labels bij de data of een tabel met dezelfde cijfers onder de grafiek.

### Wat is het verschil met SC 1.4.3 en SC 1.4.11?

Dit criterium gaat over kleur als enige drager van informatie. [SC 1.4.3](/blog/sc-1-4-3-wat-betekent-contrast-minimum/) en [SC 1.4.11](/blog/sc-1-4-11-wat-betekent-contrast-ui/) gaan over voldoende contrast. Een link kan ruim genoeg contrast hebben met de achtergrond en toch dit criterium schenden, omdat hij niet van de gewone tekst te onderscheiden is. Andersom kan een onderstreepte link voldoen aan 1.4.1 en toch te licht zijn voor 1.4.3.

## Samenvatting

WCAG-succescriterium 1.4.1 vraagt dat informatie nooit alleen via kleur wordt overgebracht, zodat de pagina ook werkt voor wie kleuren niet of anders ziet.

De belangrijkste punten:

- Kleur mag, kleur alleen niet. Zet er altijd tekst, een icoon, een onderstreping, een vorm of een patroon bij.
- Designer: ontwerp elke status met een dubbele drager en leg onderstreepte links vast in je design system.
- Webredacteur: verwijs niet naar kleur in instructies en markeer niets met alleen een tekstkleur.
- Developer: onderstreep links in lopende tekst, bouw foutmeldingen met tekst en icoon, en style actieve standen met meer dan kleur.
- Test met de grijswaarden-check van de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar): één klik en je ziet wat er zonder kleur overblijft.

**Wil je zeker weten dat je hele website voldoet?** Vraag dan een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan. We testen elk sjabloon en laten per bevinding zien waar kleur nu de enige drager is en welke oplossing daar past.
