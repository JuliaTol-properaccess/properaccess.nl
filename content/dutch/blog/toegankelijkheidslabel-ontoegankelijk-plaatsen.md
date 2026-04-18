---
title: "Toegankelijkheidslabel ontoegankelijk plaatsen (doe dat niet!)"
date: 2024-06-21
slug: "toegankelijkheidslabel-ontoegankelijk-plaatsen"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags: 
  - "aria-label"
  - "toegankelijke-website"
aliases:
  - "/toegankelijkheidslabel-ontoegankelijk-plaatsen/"
description: "Het toegankelijkheidslabel van je verklaring moet zelf ook toegankelijk zijn. Lees hoe je het correct plaatst zonder aria-label fouten."
---

Wanneer je een toegankelijkheidsverklaring hebt opgesteld, kun je een label ophalen dat je op je website kunt plaatsen om de status van je website te tonen. Je vindt het label op deze pagina: https://www.toegankelijkheidsverklaring.nl/verklaringen

Je krijgt de HTML-code die er zo uitziet. Deze code moet je op de webpagina plaatsen die over de toegankelijkheid van de website gaat.

Als ontwikkelaar moet je erop letten dat je deze code niet ontoegankelijk maakt. In een van de laatste onderzoeken zag ik dat de link waarin het label stond een aria-label had gekregen.

Een aria-label is een attribuut dat alle content van het element overschrijft. Wees voorzichtig met dit attribuut, omdat je hiermee meer schade kunt aanrichten dan de toegankelijkheid van het element verbeteren.

In dit specifieke voorbeeld kreeg de link het volgende aria-label:

```
<a href="#" aria-label="opent externe website"><img src="#" alt="De status van deze website is .." /></a>
```

Wat heeft het aria-label gedaan?

- De alt-tekst van de afbeelding wordt niet meer voorgelezen. Dit valt onder WCAG SC 1.1.1. Er stond geen informatie over de status van de website als platte tekst op de pagina. Daarom was deze informatie 100% ontoegankelijk voor een blinde bezoeker.
- Deze link is niet met stem te bedienen. De zichtbare tekst op het label komt niet overeen met de toegankelijkheidsnaam van de link (“opent externe website”). Dit valt onder WCAG SC 2.5.3.
- Het doel van de link is nu onduidelijk. Welke externe website wordt hier bedoeld? Dit valt onder WCAG SC 2.4.4.

## Wat leren we hiervan?

Dit voorbeeld illustreert een breder probleem: **aria-label wordt te vaak ingezet als snelle fix, terwijl het eigenlijk een gevaarlijk attribuut is.** Het overschrijft alle bestaande content van een element -- alt-teksten, linkteksten, knopteksten. Alles. En die overschrijving is onzichtbaar voor ziende bezoekers en ontwikkelaars die niet testen met hulpsoftware.

### De eerste regel van ARIA

Er is een bekende vuistregel in de toegankelijkheidswereld: **"De eerste regel van ARIA is: gebruik geen ARIA."** Dat klinkt paradoxaal, maar het punt is helder. Native HTML-elementen (`<button>`, `<a>`, `<label>`) brengen hun eigen toegankelijkheidsinformatie mee. ARIA is bedoeld om die informatie aan te vullen waar HTML tekortschiet -- niet om het te overschrijven.

### Andere voorbeelden van ARIA-misbruik die we tegenkomen

- **`aria-label` op een div of span.** Die elementen hebben geen interactieve rol. Een schermlezer negeert de aria-label in de meeste gevallen.
- **`role="button"` op een link.** Een link navigeert, een knop voert een actie uit. Door de rol te veranderen creeer je verwarring: de schermlezer zegt "knop", maar het element gedraagt zich als een link.
- **`aria-hidden="true"` op zichtbare content.** Hiermee verberg je content voor schermlezers terwijl het visueel zichtbaar blijft. Soms bewust (bij decoratieve iconen), maar vaak per ongeluk -- waardoor hele secties ontoegankelijk worden.

## De regels voor het toegankelijkheidslabel

Terug naar het concrete geval. Als je het toegankelijkheidslabel van je verklaring op je website plaatst:

1. **Plaats de HTML-code zoals je die krijgt**, zonder aanpassingen.
2. **Voeg geen aria-label, role of andere ARIA-attributen toe** aan de link of de afbeelding.
3. **Vermeld de status ook in platte tekst** op de pagina. Dat is niet verplicht, maar het is een extra vangnet.
4. **Test met een schermlezer** of het label correct wordt voorgelezen. Dat kost je twee minuten.

**Kort samengevat:** ARIA kan je website toegankelijker maken, maar alleen als je weet wat je doet. In de meeste gevallen is de veiligste aanpak: gebruik gewoon goed gestructureerde HTML en laat ARIA met rust.
