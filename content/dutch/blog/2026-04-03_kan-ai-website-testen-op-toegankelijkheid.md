---
title: "Kan AI jouw website testen op toegankelijkheid? Wij gaan het uitzoeken"
date: 2026-04-03
slug: "kan-ai-website-testen-op-toegankelijkheid"
categories:
  - "ai-en-wcag"
tags:
  - "AI"
  - "wcag"
  - "automatisch testen"
  - "toegankelijkheid"
description: "Wat kan AI echt detecteren aan toegankelijkheidsproblemen? Wij combineren onze kennis van AI met ervaring in 900+ toegankelijkheidsaudits om deze vraag te beantwoorden. Deel 0 van onze serie AI en toegankelijkheid."
keywords:
  - AI toegankelijkheid testen
  - WCAG AI
  - automatisch testen toegankelijkheid
  - AI audit
  - toegankelijkheid automatiseren
  - digitale toegankelijkheid AI
---

{{< case-section >}}

## Kan AI jouw website testen op toegankelijkheid?

"Kan ChatGPT niet gewoon even mijn website checken?"

Die vraag krijgen we steeds vaker. Van developers die hun code willen laten controleren. Van product owners die geen budget hebben voor een volledige audit. Van webshop-eigenaren die eigenlijk gisteren al klaar hadden moeten zijn voor de EAA.

Het is een logische vraag. AI kan tegenwoordig code schrijven, essays beoordelen en medische scans analyseren. Waarom zou het niet ook kunnen zien dat je contrastverhouding te laag is, of dat je knop geen naam heeft?

Het korte antwoord: AI kan een heleboel. Het wordt met de dag slimmer. Maar er zijn beperkingen en nadelen.

Het langere antwoord? Dat ligt aan wat je precies wil doen, welke tools je gebruikt, hoeveel je ervoor wilt betalen en hoe lang je bereid bent te wachten. In deze serie gaan we dat uitzoeken. In een serie artikelen test ik precies wat AI wel en niet kan detecteren aan toegankelijkheidsproblemen. Geen theorie, geen aannames. Echte tests met echte code.

{{< /case-section >}}

{{< case-section image="/images/julia.webp" alt="Julia Tol, senior auditor bij Proper Access" round="true" caption="Julia Tol, developer, WCAG-expert, AI consultant" >}}

## Waarom ik dit onderzoek doe

Ik ben Julia Tol, oprichter van Proper Access. Ik ben afgestudeerd in computer science, heb 8 jaar full-time ervaring als WCAG-auditor en de laatste drie jaar volg ik de ontwikkelingen van AI op de voet. Ik geef advies over AI aan mijn vrienden en bevriende ondernemers. En heb inmiddels de helft van alle software op mijn computer en telefoon vervangen door zelfgeschreven programma's. Momenteel ben ik bezig met de voorbereidende studie voor het certificaat Certified Anthropic Engineer.

{{< /case-section >}}

{{< case-section >}}

Wat mij bijzonder interesseert is of AI capabel is om dezelfde testen te doen die wij als onderzoekers in digitale toegankelijkheid uitvoeren. En heel belangrijk: met dezelfde resultaat en de correcte interpretatie van bevindingen.

Vanuit mijn 9-jarige ervaring als toegankelijkheidsonderzoeker en vanuit de ruim 900 audits die ik tot nu toe heb uitgevoerd of begeleid, weet ik dat een WCAG-toets heel complex en tijdrovend kan zijn. In onze interne wiki hebben we maar liefst 586 problemen beschreven die je op een webpagina, in een mobiele app of in een PDF-document kan tegenkomen.

Wat ik wil doen in de komende maanden, is deze 586 punten testen om te zien of AI deze tests met hetzelfde succes kan uitvoeren als een ervaren toegankelijkheidsonderzoeker. Volg mijn serie als je ook benieuwd bent naar het resultaat. Deze serie wordt gepubliceerd op Linkedin, onze website (properaccess.nl) en Medium (in het engels).

De vragen die ik met dit onderzoek wil beantwoorden:

- Wat kun je veilig automatiseren? En waar heb je iemand nodig die de website daadwerkelijk gebruikt, test, en begrijpt?
- Hoe correct worden de bevindingen beoordeeld? Hoeveel vals positieve bevindingen zullen er zijn?
- Welke tools, frameworks en methodes zijn er om digitale toegankelijkheid met AI te testen?
- Hoe werkt elk AI-hulpmiddel onder de motorkap?

Die eerlijkheid is belangrijk. Want als je AI overschat, mis je problemen die je bezoekers dagelijks raken. En als je AI onderschat, loop je achter.

{{< /case-section >}}

{{< case-section >}}

## De vier lagen van AI-testen

Niet alle AI is hetzelfde. Als mensen het hebben over "AI en toegankelijkheid testen", gooien ze vier heel verschillende dingen op een hoop.

### Laag 1: Geautomatiseerde tools (axe, Lighthouse, WAVE)

Tools als axe DevTools, Google Lighthouse en WAVE scannen je HTML en CSS op bekende patronen. Ze zoeken naar ontbrekende alt-teksten, te laag contrast, formuliervelden zonder labels, knoppen zonder naam.

Dit is strikt genomen geen AI. Het zijn deterministische regels. Maar het is wel de basis waar veel mensen aan denken als ze "automatisch testen" zeggen.

Ze zijn snel, schaalbaar en gratis. Maar ze falen bij alles wat context vereist. Een tool kan zien dat een alt-tekst aanwezig is, maar niet of die zinvol is. "afbeelding123.jpg" als alt-tekst? De tool zegt: voldoet.

De vraag die ik me steeds stel: waarom zijn deze tools nog steeds zo beperkt? Google en Deque zijn grote bedrijven met grote researchbudgetten, maar het resultaat dat deze tools produceren is even beperkt als 7 jaar geleden.

### Laag 2: LLM code-analyse (Claude, ChatGPT)

Grote taalmodellen zoals Claude en ChatGPT kunnen code lezen en begrijpen. Je kunt een stuk HTML plakken en vragen: "Wat zijn de toegankelijkheidsproblemen?" Met Playwright kun je zelfs de hele Accessibility tree van een pagina downloaden en in detail laten bestuderen.

Anders dan geautomatiseerde tools kunnen LLMs redeneren over code. Ze kunnen zien dat een `<div onclick>` eigenlijk een knop moet zijn. Ze kunnen beoordelen of een foutmelding duidelijk genoeg is. Ze begrijpen dat `aria-label="Search entire website"` niet matcht met de zichtbare tekst "Zoeken".

De kracht zit in nuance en context. De zwakte: ze zien alleen de code die je ze geeft. Ze testen niets in een browser. Ze weten niet hoe de pagina er uitziet of hoe die zich gedraagt.

### Laag 3: AI vision (screenshots analyseren)

Zowel Claude als GPT-4 kunnen screenshots analyseren. Je maakt een screenshot van je webpagina en vraagt: "Welke toegankelijkheidsproblemen zie je?"

De AI ziet de pagina zoals een bezoeker die ziet. Visueel. Het kan opmerken dat tekst over een foto moeilijk leesbaar is, dat knoppen te klein zijn, of dat een focusstijl ontbreekt.

Maar de AI kan de pagina niet zomaar bedienen. Het kan niet tabben, niet klikken, niet scrollen. Het ziet een momentopname, geen ervaring. In het volgende artikel ga ik dieper in op wat wel mogelijk is op dit moment: HTTP-requests, browserautomatisering en computerautomatisering.

### Laag 4: Menselijk oordeel

En dan is er de laag die geen AI kan vervangen. De auditor die met een toetsenbord door je website navigeert. Die een schermlezer aanzet en luistert hoe je pagina klinkt. Die probeert een formulier in te vullen met alleen het toetsenbord en merkt dat de focusvolgorde nergens op slaat.

Menselijk testen gaat over gedrag. Over hoe iets aanvoelt. Over context die je alleen begrijpt als je weet wie je bezoekers zijn en wat ze proberen te doen.

En het belangrijkste is de interpretatie van de bevindingen. Alles wat AI doet, moet door een mens worden gecontroleerd. Dat is hier extra belangrijk, omdat een slecht advies je team aan het werk kan zetten om 'problemen' op te lossen die geen problemen zijn. Alleen een mens kan beoordelen of er een toegankelijk alternatief is voor een gevonden barriere en of dit alternatief gelijkwaardig is.

{{< /case-section >}}

{{< case-section image="/images/blog/ai-wcag-scorekaart.svg" alt="" >}}

## Hoe we gaan testen

We pakken dit systematisch aan. Voor elke test gebruiken we:

- **Claude Code** voor LLM code-analyse
- **Claude vision** voor screenshot-analyse (identieke screenshots aan beide)
- Andere tools en frameworks die momenteel als paddenstoelen uit de grond komen

Gaandeweg ga ik mijn eigen skills maken en met jullie delen.

Elke test krijgt een score:

| Score            | Betekenis                                                       |
| ---------------- | --------------------------------------------------------------- |
| **Gevonden**     | AI detecteert het probleem correct                              |
| **Gemist**       | AI detecteert het probleem niet                                 |
| **Vals alarm**   | AI meldt een probleem dat er niet is                            |
| **Gedeeltelijk** | AI detecteert het, maar mist de kern of geeft onvolledig advies |

Aan het eind van de serie maken we een compleet overzicht: welke WCAG-criteria kan AI betrouwbaar testen, waar helpt het als startpunt, en waar heb je een specialist nodig? Met de snelheid waarmee de ontwikkeling nu gaat, is de kans groot dat we dan opnieuw moeten beginnen. :)

{{< /case-section >}}

{{< case-section >}}

## Voor wie is deze serie?

- **Developers** die willen weten welke AI-tools ze in hun workflow kunnen inzetten
- **Product owners** die moeten beslissen of ze een automatische scan of een handmatige audit nodig hebben
- **Webshop-eigenaren** die voor de EAA-deadline staan en snel willen handelen
- **Digital agencies** die klanten adviseren over toegankelijkheid en zelf automatisch willen testen

Geen AI-hype. Geen doemscenario's. Gewoon eerlijke tests met echte code.

---

_Dit is deel 0 van de serie "AI en Toegankelijkheidstesten". Bij Proper Access onderzoeken we wat AI echt kan detecteren, en waar menselijke expertise het verschil maakt. Nieuwsgierig hoe toegankelijk jouw website of app is? Laat het door een mens testen voor het beste resultaat. [Neem contact met ons op](/contact/)._

{{< /case-section >}}
