---
title: "Hoe toegankelijk is het `<dl>`-element?"
date: 2025-09-04
slug: "hoe-toegankelijk-is-het-dl-element"
categories: 
  - "achtergrond_wcag"
  - "Webdeveloper"
tags:
  - "1-3-1"
description: "Hoe toegankelijk is het dl-element voor schermlezers? Analyse van WCAG, NVDA-ondersteuning en toegankelijke alternatieven."
keywords:
  - dl element toegankelijkheid
  - wcag definitielijst
  - dl element screenreader
aliases:
  - "/hoe-toegankelijk-is-het-dl-element/"
---

Wil je op een webpagina een relatie tussen termen en definities presenteren, dan ligt het gebruik van het `<dl>`\-element voor de hand. Het bestaat uit een container (`<dl>`) waarin je per term een `<dt>` (definition term) gebruikt, gevolgd door een `<dd>` (definition description). Je ziet dit veel terug in juridische teksten, woordenlijsten of bij gegevens die in een tabel lay-out worden gepresenteerd, zoals openingstijden:

```
<dl>
<div></div>
  <dt>Maandag:</dt>
<div></div>
  <dd>0:90 - 17:00</dd>
<div></div>
</dl>
```

```
<dl>

  <dt>Maandag:</dt>

  <dd>0:90 - 17:00</dd>

</dl>
```

Maar hoe toegankelijk is dit element eigenlijk? Vooral voor schermlezers?

## Het probleem met NVDA

In de praktijk blijkt dat het `<dl>`\-element niet goed wordt ondersteund door NVDA, een van de meest gebruikte schermlezers. NVDA behandelt de definitielijst als [een gewone lijst,](https://properaccess.nl/waarom-correcte-html-lijsten-het-verschil-maken-in-toegankelijkheid/) zonder onderscheid te maken tussen termen en definities. Dit veroorzaakt verwarring in de navigatie.

Gebruikers van NVDA zijn gewend om met de toetsen L (spring naar lijst) en I (volgend item in een lijst) te navigeren. Bij een `<dl>` werkt dat anders: de schermlezer kondigt een lijst aan, maar de sneltoetsen functioneren niet zoals verwacht. Druk je op I, dan spring je naar het eerstvolgende item in **een andere lijst** – bijvoorbeeld in het navigatiemenu of de zijbalk. Je raakt de context kwijt, en op drukke pagina’s zoals webshops of nieuwsoverzichten wordt dit al snel frustrerend.

## Alleen een probleem in NVDA?

Ja. Andere schermlezers, zoals VoiceOver op de Mac, ondersteunen <dl> wel op een correcte manier. Uit het [screenreadergebruiksonderzoek van WebAIM](https://webaim.org/projects/screenreadersurvey10/) blijkt echter dat NVDA met 37,7% marktaandeel veruit het meest gebruikt wordt, tegenover slechts 9,7% voor VoiceOver.

Zoals onze blinde collega zei:

"Ik heb altijd NVDA gebruikt en nooit geweten dat een `<dl>`\-element bestond, tot ik een keer VoiceOver gebruikte en merkte dat termen en definities ineens wél als paren werden voorgelezen."

## En nu?

Naar aanleiding van deze bevindingen gaan we  een verzoek indienen bij de ontwikkelaars van NVDA om de ondersteuning van `<dl>` te verbeteren. Of zij dit oppakken, is natuurlijk nog maar de vraag. Tot die tijd nemen wij het zekere voor het onzekere.

## Ons advies

Gebruik het `<dl>`\-element voorlopig niet als toegankelijkheid een vereiste is. We raden aan om alternatieven te gebruiken waarmee je term-definitie relaties duidelijker en consistenter presenteert aan schermlezers.

## Toegankelijke alternatieven

Welke aanpak je kiest hangt af van de context, maar over het algemeen zijn de volgende opties beter:

- Koppenstructuur gebruiken: bijvoorbeeld een `<h3>` voor de term en een `<p>` voor de uitleg.
- **`<details>`** en **`<summary>`**: handig bij langere of inklapbare definities.
- Tabelstructuren: in sommige gevallen kan een eenvoudige tabel zinvoller zijn, zeker als het om data gaat zoals openingstijden of technische specificaties.  
    

## Conclusie

Niet elk HTML-element is even goed ondersteund door alle schermlezers. Het `<dl>`\-element is daarvan een duidelijk voorbeeld. Omdat NVDA – de meest gebruikte schermlezer – dit element t niet goed verwerkt, is het geen betrouwbare keuze voor toegankelijke content. We hopen op verbetering in de toekomst, maar tot die tijd adviseren we om alternatieven te gebruiken.

Voor audits geldt: we keuren het `<dl>`\-element vooralsnog niet af, maar we geven aanbeveling om een alternatief te gebruiken.
