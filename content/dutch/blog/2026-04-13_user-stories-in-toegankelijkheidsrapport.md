---
title: "Waarom elke bevinding in ons rapport begint met een user story"
date: 2026-04-13
slug: "user-stories-in-toegankelijkheidsrapport"
categories:
  - "achtergrond_wcag"
tags:
  - "toegankelijkheidsaudit"
  - "rapportage"
  - "user-stories"
  - "agile"
  - "wcag"
description: "Atlassian zet eindgebruikers centraal in agile development. Wij doen hetzelfde in onze auditrapporten — met één user story per bevinding."
keywords:
  - user stories toegankelijkheid
  - wcag audit rapport
  - rapport per element
  - toegankelijkheidsrapport leesbaar
  - agile toegankelijkheid
image: "/images/blog/user-stories-in-toegankelijkheidsrapport.png"
---

Atlassian schrijft over user stories: _"Een userstory plaatst eindgebruikers centraal. Na het lezen van een userstory weet het team waarom het bouwt, wat het bouwt en welke waarde het creëert."_

Wij zijn gaan kijken wat er gebeurt als je diezelfde gedachte toepast op een toegankelijkheidsrapport. Het antwoord: het rapport wordt opeens leesbaar voor iedereen die het moet oplossen — niet alleen voor de auditor die het schreef.

## Waar de meeste rapporten stranden

Een toegankelijkheidsrapport beschrijft wat er mis is op een website. Dat klinkt simpel, maar de manier waaróp dat gebeurt, bepaalt of het rapport gebruikt wordt of in een la verdwijnt.

De meeste rapporten beschrijven bevindingen in WCAG-taal: _"SC 1.3.2 niet voldaan — content volgorde niet logisch."_ Dat is technisch correct. Een auditor herkent het meteen. Maar een redacteur die de tekst moet aanpassen of een ontwikkelaar die de code moet veranderen, leest dit en denkt: _en nu?_

We hebben dit al een tijd geleden voor een groot deel opgelost door [te rapporteren per element in plaats van per succescriterium](/blog/rapport-per-element-vs-per-succescriterium/). Daardoor weet je team in elk geval _waar_ het probleem zit en _wat_ er moet veranderen.

Maar er bleef één ding ontbreken: _waarom_ het ertoe doet.

## De gedachte achter user stories

In agile-ontwikkelteams zijn user stories al jaren gemeengoed. Het idee is simpel: in plaats van een feature te beschrijven in technische termen, beschrijf je hem vanuit de eindgebruiker. Wie is het, wat wil die persoon doen, en waarom?

Atlassian formuleert het zo: een user story zorgt dat iedereen in het team begrijpt waarom het werk gedaan wordt. Niet als afvinklijstje, maar als context. Mensen op de eerste plaats.

Toegankelijkheidsrapporten zijn precies het soort document waar die context vaak ontbreekt. Een lijst met succescriteria is geen verhaal. Een tabel met elementen is een goed begin, maar het zegt nog steeds niet wat er gebeurt aan de andere kant van het scherm.

Daarom beginnen wij elke bevinding nu met een user story.

## Hoe ziet zo'n user story eruit?

Onze user stories zijn niet geschreven vanuit één persoon met één beperking. Ze combineren meerdere manieren waarop iemand tegen hetzelfde issue aan kan lopen — met een schermlezer, met een toetsenbord, met een vergroter, met een voorspelbare leesvolgorde. Eén verhaal, meerdere ingangen.

Een voorbeeld uit een recent rapport:

> Als een bezoeker die knoppen activeert met een schermlezer, die de pagina bestuurt met stem, of die de pagina leest met afbeeldingen uitgeschakeld, heb ik nodig dat elke knop met alleen een icoon een toegankelijke naam toont die de functie beschrijft (via alt, aria-label, of visueel verborgen tekst) — want zonder die naam kondigt mijn schermlezer alleen "knop" aan, heeft mijn stemopdracht niets om op te richten, is de tijdelijke aanduiding bij uitgeschakelde afbeeldingen leeg, en kan ik niet zien wat er gebeurt als ik het element activeer.

Daaronder volgt de technische uitleg: welk element, welk WCAG-criterium, welke code-aanpassing. Plus een screenshot. De story staat er eerst. Met opzet.

## Wat dit oplost

De ontwikkelaar of redacteur die met dit rapport gaat werken, hoeft niet meer eerst de WCAG-richtlijn op te zoeken om te begrijpen waarom iets ertoe doet. Ze hoeven geen empathie-oefening te doen om zich voor te stellen wie er last van heeft. Het staat er letterlijk — inclusief alle manieren waarop iemand het kan tegenkomen.

Dat heeft drie effecten die we steeds terugzien:

**1. De prioritering wordt logischer.** Als je leest dat een bevinding zowel schermlezer- als toetsenbord- als vergrotingsgebruikers raakt, voelt "niet kritiek" anders dan wanneer er alleen een SC-nummer staat.

**2. De oplossing wordt beter.** Een ontwikkelaar die snapt waarom iets nodig is, kiest een betere fix. Niet de minimaal-vereiste, maar de oplossing die het probleem écht wegneemt.

**3. De kennis blijft hangen.** Een team dat tien user stories heeft gelezen, herkent het patroon de elfde keer. Een team dat tien SC-nummers heeft gezien, blijft afhankelijk van het rapport.

## Eén story per bevinding, niet één per succescriterium

Dit is misschien het belangrijkste. We schrijven niet één user story per WCAG-criterium, en ook niet één per persona. We schrijven er één per bevinding.

Want hetzelfde succescriterium kan op de ene plek een groot probleem zijn voor schermlezergebruikers en op een andere plek vooral hinderlijk voor toetsenbordgebruikers. Dat verschil verdwijnt zodra je gaat groeperen. Door per bevinding te schrijven, blijft het verhaal precies op de plek waar het hoort: bij dat ene element, op die ene pagina, in die ene context.

Het kost ons meer schrijftijd. Daar zijn we eerlijk over. Maar dit is wat ons werk is — en het werkt.

## Wil je zien hoe zo'n rapport eruit ziet?

We laten graag een geanonimiseerd voorbeeldrapport zien tijdens een kennismaking van 30 minuten. Je krijgt direct een gevoel voor hoe een user story per bevinding eruit ziet, en wat het verschil maakt voor het team dat ermee aan de slag gaat.

[Plan een kennismaking](/contact/) of bel direct: [085 5055 890](tel:+31855055890).
