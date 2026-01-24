---
title: "Toegankelijkheidslabel ontoegankelijk plaatsen (doe dat niet!)"
date: 2024-06-21
slug: "toegankelijkheidslabel-ontoegankelijk-plaatsen"
categories: 
  - "tips-en-tools"
tags: 
  - "aria-label"
  - "toegankelijke-website"
---

Wanneer je een toegankelijkheidsverklaring hebt opgesteld, kun je een label ophalen dat je op je website kunt plaatsen om de status van je website te tonen. Je vindt het label op deze pagina: https://www.toegankelijkheidsverklaring.nl/verklaringen

![](https://properaccess.nl/wp-content/uploads/2024/06/Scherm­afbeelding-2024-06-21-om-14.13.24-1024x417.png)

Je krijgt de HTML-code die er zo uitziet. Deze code moet je op de webpagina plaatsen die over de toegankelijkheid van de website gaat.

![](https://properaccess.nl/wp-content/uploads/2024/06/Scherm­afbeelding-2024-06-21-om-12.58.42.png)

Als ontwikkelaar moet je erop letten dat je deze code niet ontoegankelijk maakt. In een van de laatste onderzoeken zag ik dat de link waarin het label stond een aria-label had gekregen.

Een aria-label is een attribuut dat alle content van het element overschrijft. Wees voorzichtig met dit attribuut, omdat je hiermee meer schade kunt aanrichten dan de toegankelijkheid van het element verbeteren.

In dit specifieke voorbeeld kreeg de link het volgende aria-label:

```
<a href="#" aria-label="opent externe website"><img src="#" alt="De status van deze website is .." /></a>
```

![](https://properaccess.nl/wp-content/uploads/2024/06/Scherm­afbeelding-2024-06-21-om-13.22.23-1024x322.png) Wat heeft het aria-label gedaan?

- De alt-tekst van de afbeelding wordt niet meer voorgelezen. Dit valt onder WCAG SC 1.1.1. Er stond geen informatie over de status van de website als platte tekst op de pagina. Daarom was deze informatie 100% ontoegankelijk voor een blinde bezoeker.
- Deze link is niet met stem te bedienen. De zichtbare tekst op het label komt niet overeen met de toegankelijkheidsnaam van de link (“opent externe website”). Dit valt onder WCAG SC 2.5.3.
- Het doel van de link is nu onduidelijk. Welke externe website wordt hier bedoeld? Dit valt onder WCAG SC 2.4.4.

**Conclusie 1:** gebruik aria-labels alleen als je zeker weet wat je doet. Dit geldt voor alle ARIA-technieken.

**Conclusie 2:** plaats het label zoals het is, zonder daar iets aan te veranderen. Voor de zekerheid kun je de status van je verklaring in de tekst op de pagina noemen.
