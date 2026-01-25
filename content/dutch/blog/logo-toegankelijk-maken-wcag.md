---
title: "Logo met veel tekst: hoe maak je het toegankelijk én gebruiksvriendelijk?"
date: 2025-12-03
slug: "logo-toegankelijk-maken-wcag"
categories: 
  - "de EAA"
  - "tips-en-tools"
description: "Hoe maak je een logo met veel tekst toegankelijk volgens WCAG? Praktische tips over alt-tekst, linkdoel en gebruiksvriendelijkheid."
keywords:
  - logo toegankelijkheid wcag
  - alt tekst logo
  - toegankelijk logo link
---

Heeft je website een logo met veel tekst? Linkt dit logo naar de homepagina? Dan kan het lastig zijn om zo’n logo toegankelijk én gebruiksvriendelijk te maken. In dit artikel leggen we uit waar je op moet letten en hoe je de juiste balans vindt.

### Welke potentiële problemen zijn er?

Een veelvoorkomend probleem: het logo bevat meer tekst dan er in de alternatieve tekst (alt-tekst) staat. Wij als toegankelijkheidsexperts zeggen dat een blinde bezoeker dezelfde informatie moet krijgen als een ziende. Bij informatieve afbeeldingen betekent dat: zet de volledige tekst van het logo in de alt-tekst. Dat is in lijn met succescriterium 1.1.1 – Niet-tekstuele content van de WCAG-richtlijnen.

Is je logo ook een link (bijvoorbeeld naar de homepagina)? Dan moet de bestemming van de link duidelijk zijn voor bezoekers die schermlezers gebruiken. Dit kun je op meerdere manieren aangeven:

- voeg “naar de homepagina” toe aan het einde van de alt-tekst,

- gebruik een extra `<span>`\-element binnen de link,

- of gebruik een `aria-label`.  
    

Waarom is dit belangrijk? De meeste mensen weten dat een logo linksboven op een site naar de homepagina leidt. Maar er zijn ook bezoekers met minder internetervaring of cognitieve beperkingen die dat níet weten. Volgens succescriterium 2.4.4 – Linkdoel moet het doel van een link altijd duidelijk zijn.

Daarnaast moet de link met stem bedienbaar zijn. Dat betekent: de zichtbare tekst in het logo (bedrijfsnaam + slogan) moet vooraan staan in de toegankelijke naam van de link. Dit staat beschreven in succescriterium 2.5.3 – Label in naam.

Je kunt dit op verschillende manieren implementeren:

- via de alt-tekst van de afbeelding,

- via een `aria-label`,

- of via een extra `<span>`\-element met tekst.  
    

### Het spanningsveld tussen toegankelijkheid en gebruiksvriendelijkheid

Hier ontstaat een spanningsveld tussen toegankelijkheid en gebruiksvriendelijkheid.

Als ik een schermlezer gebruik en op het logo klik, hoor ik eerst de volledige tekst (zoals bedrijfsnaam en slogan) voordat duidelijk is dat het een link is. Schermlezers als NVDA en VoiceOver lezen namelijk eerst de inhoud en daarna pas de rol van het element.

Bijvoorbeeld:

“Bedrijfsnaam – Onze missie en waarom we het beste bedrijf ter wereld zijn en je alleen bij ons moet kopen, link.”

Moet deze tekst op elke pagina opnieuw te horen zijn? Nee, dat is niet nodig. Het is niet gebruiksvriendelijk. 

### Wat doet W3C?

De W3C (World Wide Web Consortium), de organisatie achter WCAG, heeft onlangs zelf een nieuw logo gelanceerd: [https://www.w3.org/press-releases/2025/new-logo/](https://www.w3.org/press-releases/2025/new-logo/).

Dat zette me aan het denken.

Het W3C-logo bevat een abstract vignet en de tekst “World Wide Web Consortium”. In de alt-tekst staat simpelweg “W3C”. De toegankelijke naam van de link is “W3C Visit the homepage”.

![screenshot logo W3C](https://properaccess.nl/wp-content/uploads/2025/12/Scherm­afbeelding-2025-12-03-om-15.56.25-1024x377.png)

✅ Voordeel: Het is kort, helder en prettig om naar te luisteren.

❌ Nadeel: Je kunt deze link niet met stem bedienen, omdat “W3C” niet letterlijk voorkomt in de zichtbare afbeeldingstekst.

### Conclusie

Als website-eigenaar kun je het jezelf én je bezoekers gemakkelijker maken:

- Houd het logo eenvoudig. Laat de slogan weg uit de afbeelding. Zet deze liever als HTML-tekst naast of onder het logo.  
    

- Geef het logo een alt-tekst zoals:  
      
    “Proper Access, ga naar de homepagina”  
      
    – met de zichtbare tekst (bedrijfsnaam) vooraan in de toegankelijke naam.  
    

Zo maak je je website zowel toegankelijk als gebruiksvriendelijk. En dat is precies wat je bezoekers nodig hebben.
