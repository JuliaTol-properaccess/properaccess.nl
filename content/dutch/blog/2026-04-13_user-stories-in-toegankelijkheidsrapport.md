---
title: "Waarom elke bevinding in ons rapport begint met een user story"
date: 2026-04-13
slug: "user-stories-in-toegankelijkheidsrapport"
layout: "case"
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
image: "/images/rapport/rapport1.png"
---

{{< case-section image="/images/rapport/rapport1.png" alt="Samenvatting-pagina van een auditrapport met aantal voldoet en afgekeurde succescriteria, impactverdeling en score per WCAG-richtlijn" >}}

Atlassian schrijft over user stories: _"Een userstory plaatst eindgebruikers centraal. Na het lezen van een userstory weet het team waarom het bouwt, wat het bouwt en welke waarde het creëert."_

Wij zijn gaan kijken wat er gebeurt als je diezelfde gedachte toepast op een toegankelijkheidsrapport. Het antwoord: het rapport wordt opeens leesbaar voor iedereen die het moet oplossen — niet alleen voor de auditor die het schreef.

{{< /case-section >}}

{{< case-section image="/images/rapport/rapport2.png" alt="Pagina uit het rapport met opties om bevindingen naar Jira of een spreadsheet te exporteren, plus filters op impact en type" >}}

## Waar de meeste rapporten stranden

Een toegankelijkheidsrapport beschrijft wat er mis is op een website. Dat klinkt simpel, maar de manier waaróp dat gebeurt, bepaalt of het rapport gebruikt wordt of in een la verdwijnt.

De meeste rapporten beschrijven bevindingen in WCAG-taal: _"SC 1.3.2 niet voldaan — content volgorde niet logisch."_ Dat is technisch correct. Een auditor herkent het meteen. Maar een redacteur die de tekst moet aanpassen of een ontwikkelaar die de code moet veranderen, leest dit en denkt: _en nu?_

3 jaar geleden hebben we besloten om te rapporteren per element, niet per succescriterium. Deze aanpak bespaart je tijd: alle bevindingen die te maken hebben met een element staan nu bij elkaar.

Maar hoe motiveer je iemand die deze problemen moet fixen?

{{< /case-section >}}

{{< case-section image="/images/rapport/issuemetuserstory1.png" alt="Bevinding over een complexe afbeelding zonder alternatieve beschrijving, met user story, code-snippet en screenshot van een infographic" >}}

## De gedachte achter user stories

In agile-ontwikkelteams zijn user stories al jaren gemeengoed. Het idee is simpel: in plaats van een feature te beschrijven in technische termen, beschrijf je hem vanuit de eindgebruiker. Wie is het, wat wil die persoon doen, en waarom?

Atlassian formuleert het zo: een user story zorgt dat iedereen in het team begrijpt waarom het werk gedaan wordt. Niet als afvinklijstje, maar als context. Mensen op de eerste plaats.

Toegankelijkheidsrapporten zijn precies het soort document waar die context vaak ontbreekt. Een lijst met succescriteria is geen verhaal. Een tabel met elementen is een goed begin, maar het zegt nog steeds niet wat er gebeurt aan de andere kant van het scherm.

Daarom beginnen wij elke bevinding nu met een user story.

{{< /case-section >}}

{{< case-section image="/images/rapport/issuemetuserstory2.png" alt="Bevinding over onduidelijke 'Lees meer'-linktekst, met user story die schermlezer- en stembesturingsgebruikers combineert" >}}

## Hoe ziet zo'n user story eruit?

Onze user stories zijn niet geschreven vanuit één persoon met één beperking. Ze combineren meerdere manieren waarop iemand tegen hetzelfde issue aan kan lopen — met een schermlezer, met een toetsenbord, met een vergroter, met een voorspelbare leesvolgorde. Eén verhaal, meerdere ingangen.

Een voorbeeld uit een recent rapport:

<blockquote style="border-left: 4px solid #A30D4B; padding: 0.5rem 0 0.5rem 1.5rem; margin: 1.5rem 0; font-style: italic;">
Als bezoeker gebruik ik een schermlezer, stembesturing, of ik lees de pagina zonder afbeeldingen. Op deze pagina staan knoppen met alleen een icoon. Zonder toegankelijke naam weet ik niet wat ze doen. Mijn schermlezer zegt alleen "knop". Mijn stemopdracht heeft niets om op te richten. Met afbeeldingen uit zie ik helemaal niets op de plek van de knop.
</blockquote>

Daaronder volgt de technische uitleg: welk element, welk WCAG-criterium, welke code-aanpassing. Plus een screenshot. De story staat er eerst. Met opzet.

{{< /case-section >}}

{{< case-section image="/images/rapport/issuemetuserstory3.png" alt="Bevinding over een logo-alt-tekst die meer bevat dan de visuele tekst, met user story en code-oplossing" >}}

## Wat dit oplost

De ontwikkelaar of redacteur die met dit rapport gaat werken, hoeft niet meer eerst de WCAG-richtlijn op te zoeken om te begrijpen waarom iets ertoe doet. Ze hoeven niet te raden wie er last van heeft. Het staat er letterlijk — inclusief alle manieren waarop iemand het kan tegenkomen.

Dat heeft drie effecten die we steeds terugzien:

**1. De prioritering wordt logischer.** Als je leest dat een bevinding zowel schermlezer- als toetsenbord- als vergrotingsgebruikers raakt, voelt "niet kritiek" anders dan wanneer er alleen een SC-nummer staat.

**2. De oplossing wordt beter.** Een ontwikkelaar die snapt waarom iets nodig is, kiest een betere fix. Niet de minimaal-vereiste, maar de oplossing die het probleem écht wegneemt.

**3. De kennis blijft hangen.** Een team dat tien user stories heeft gelezen, herkent het patroon de elfde keer. Een team dat tien SC-nummers heeft gezien, blijft afhankelijk van het rapport.

{{< /case-section >}}

{{< case-section image="/images/rapport/rapport3.png" alt="Overzicht van bevindingen per element op één pagina, met kolommen voor impact, type en betrokken beperking" >}}

## Eén story per bevinding, niet één per succescriterium

Dit is misschien het belangrijkste. We schrijven niet één user story per WCAG-criterium, en ook niet één per persona. We schrijven er één per bevinding.

Want hetzelfde succescriterium kan op de ene plek een groot probleem zijn voor schermlezergebruikers en op een andere plek vooral hinderlijk voor toetsenbordgebruikers. Dat verschil verdwijnt zodra je gaat groeperen. Door per bevinding te schrijven, blijft het verhaal precies op de plek waar het hoort: bij dat ene element, op die ene pagina, in die ene context.

Het kost ons meer schrijftijd. Daar zijn we eerlijk over. Maar dit is wat ons werk is — en het werkt.

{{< /case-section >}}

{{< case-section >}}

## Wil je zien hoe zo'n rapport eruit ziet?

We laten graag een geanonimiseerd voorbeeldrapport zien tijdens een kennismaking van 30 minuten. Je krijgt direct een gevoel voor hoe een user story per bevinding eruit ziet, en wat het verschil maakt voor het team dat ermee aan de slag gaat.

[Plan een kennismaking](/contact/) of bel direct: [085 5055 890](tel:+31855055890).

{{< /case-section >}}
