---
title: "SC 2.4.5 - Wat betekent \"Meerdere manieren\""
date: 2025-05-18
categories: 
  - "wcag-uitgelegd"
tags: 
  - "2-4-5"
description: "WCAG 2.4.5 vereist minstens twee manieren om een pagina te vinden, zoals navigatie en zoekfunctie. Lees welke opties je hebt."
---

Het doel van succescriterium 2.4.5 - Meerdere manieren van WCAG is om bezoekers minimaal twee mogelijkheden te bieden om elke pagina van de website te vinden. Waarom twee? Omdat we allemaal verschillend zijn en onze voorkeuren voor het zoeken kunnen variëren. De één gebruikt liever een zoekbalk, terwijl een ander de voorkeur geeft aan het doornemen van de volledige sitemap.

Zeer kleine websites tot vijf pagina’s, die alle links in de footer of de header hebben staan, hebben geen tweede manier nodig.

Welke tweede manier zou je kunnen implementeren? De onderstaande oplossingen zijn niet verplicht. Kies één of twee opties die het beste bij jouw situatie passen:

- Een zoekveld dat alle pagina’s en pdf’s op de website doorzoekt.

- Een TOC van alle pagina’s op de website (een sitemap in begrijpelijke taal, geen XML!).

- Links naar alle pagina’s in de header of de footer (bij websites met maximaal 5 pagina’s).

- Links naar alle pagina’s op de homepage.

Uitzonderingen:

- Pagina’s die deel uitmaken van een proces. Bijvoorbeeld, je moet een formulier versturen om bij een bedanktpagina te komen.

- Een pagina die dynamisch is gegenereerd als resultaat van een zoekactie. Deze herken je aan de parameters in de URL, bijvoorbeeld [https://website.nl/?=test](https://website.nl/?=test).

## **Zoekbalk**

Stel, je hebt een website met verschillende secties goederen of een website die bedoeld is voor twee verschillende doelgroepen. Moet de zoekbalk op de homepage alle pagina’s en producten kunnen vinden of niet? Is het oké om meerdere zoekbalken aan te bieden die binnen een beperkte set gegevens zoeken? WCAG zegt van wel (zie [voorbeeld 1](https://www.w3.org/WAI/WCAG21/Techniques/general/G161)). Maar er zijn sterke meningsverschillen onder Nederlandse onderzoekers over dit onderwerp. Sommige eisen een zoekbalk die overal zoekt. Ik ben het eens met de strenge onderzoekers dat dit de optimale oplossing is. Echter, ik lees deze verplichting nergens in de WCAG.

## **PDF**

Omdat WCAG-EM een PDF als een zelfstandige pagina beschouwt, moet elke PDF ook via een tweede manier gevonden kunnen worden. Zorg ervoor dat deze bestanden ook worden geïndexeerd.

Binnen een PDF kun je (dit is niet verplicht) de navigatie verbeteren door bladwijzers te creëren. Dit is [een techniek](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2) die je daarbij kan helpen.

## **Hoe test je 2.4.5 - Meerdere manieren?**

- Bij websites met minder dan vijf pagina’s controleer je de footer, de header en de sitemap. Elke link in de sitemap moet werken. Hier kunnen vaak fouten in zitten omdat deze pagina niet vaak wordt bijgewerkt.

- Bij websites met meer dan vijf pagina’s gebruik je het zoekveld om pagina’s te vinden.

- Hoe streng moet je zijn als je in plaats van de exacte pagina een andere pagina vindt met links naar de pagina die je zoekt? WCAG zegt niets over deze situatie. Beoordeel zelf of dit een toegankelijke situatie is.
