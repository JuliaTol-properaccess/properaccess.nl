---
title: "WebMCP: wat het is, en waarom het toegankelijkheid niet vervangt"
date: 2026-08-27
slug: "webmcp-en-toegankelijkheid"
categories:
  - "ai-en-wcag"
tags:
  - "AI"
  - "wcag"
  - "WebMCP"
  - "accessibility tree"
  - "schermlezer"
description: "Met WebMCP biedt een website zijn functies aan als tools voor AI-agents. In de W3C-groep liep zes maanden lang een discussie over de vraag of dat de accessibility tree overbodig maakt. Dit is wat er is besloten, en wat het betekent voor je eigen website."
keywords:
  - WebMCP
  - WebMCP toegankelijkheid
  - document.modelContext
  - AI-agent website
  - accessibility tree AI
  - agentic web
image: "/images/blog/ai-wcag-serie.svg"
---

{{< case-section image="/images/blog/ai-wcag-webmcp-gokken-vs-vertellen.svg" >}}

## Wat WebMCP doet

Een AI-agent die vandaag iets voor je moet regelen op een website, leest de pagina en gokt. Welk element is de zoekbalk, welke knop verstuurt het formulier, is dat vinkje al aangezet. Dat werkt tot het moment waarop de pagina er net iets anders uitziet.

WebMCP draait dat om. De website vertelt zelf welke handelingen er zijn. Je registreert per handeling een tool: een naam, een beschrijving in gewone taal, een schema voor de invoer, en de JavaScript-functie die het werk doet.

{{< /case-section >}}

{{< case-section >}}

## Zo ziet een tool uit in code

```js
await document.modelContext.registerTool({
  name: "add-todo",
  description: "Add a new item to the user's active todo list",
  inputSchema: {
    type: "object",
    properties: {
      text: { type: "string", description: "The text content of the todo item" }
    },
    required: ["text"]
  },
  async execute({ text }) {
    await addTodoItemToCollection(text);
    return {
      content: [{ type: "text", text: `Added todo item: "${text}" successfully.` }]
    };
  }
});
```

De agent hoeft nu niets meer af te leiden uit de opmaak. Er staat letterlijk wat er kan.

{{< /case-section >}}

{{< case-section >}}

## Waar het staat

WebMCP is een <span lang="en">Draft Community Group Report</span> van de W3C Web Machine Learning Community Group. De versie van 26 augustus 2026 is de laatste. Het is geen standaard en het staat niet op de standards track.

Chrome heeft de API sinds versie 149 in een origin trial. Lokaal aanzetten kan met de vlag `chrome://flags/#enable-webmcp-testing`. Firefox en Safari praten mee in de groep en hebben niets toegezegd.

Let op de naam van de API. Die is verhuisd van `navigator.modelContext` naar `document.modelContext`, omdat tools bij een pagina horen en niet bij de browser. Bijna elk blogartikel van begin 2026 gebruikt nog de oude naam.

Nog een verschil dat in veel artikelen over WebMCP ontbreekt. WebMCP gaat over agents die in een browser draaien en iets voor de gebruiker uitvoeren. De crawlers die tekst ophalen voor ChatGPT, Perplexity of Google AI Overviews doen dat vanaf een server en komen deze tools nooit tegen. Voor je vindbaarheid in AI-antwoorden verandert WebMCP dus niets.

{{< /case-section >}}

{{< case-section >}}

## De vraag die eronder ligt

In de doelen van het voorstel staat toegankelijkheid met zoveel woorden genoemd: agents moeten gebruikers van hulpsoftware kunnen helpen. Precies daar begint het probleem.

Want als een agent via een tool weet dat er een handeling "bestelling afronden" bestaat, en jij hebt op je pagina een `<div>` die eruitziet als een knop en verder niets doet, dan werkt de agent prima en de knop niet. De agent is geholpen. De bezoeker die met een toetsenbord werkt, komt niet verder.

Dat is geen verzonnen scenario. Het is de kern van de discussie die op 15 februari 2026 begon in de WebMCP-repository, onder de titel <span lang="en">"Redundancy with the accessibility tree"</span>.

{{< /case-section >}}

{{< case-section >}}

## Zes maanden discussie, 29 reacties

De opener van die discussie stelde dat de [accessibility tree](/blog/accessibility-tree-voor-developers/) dit werk al doet. Rollen, namen, statussen, verwachte invoer, foutmeldingen, relaties tussen elementen: het staat er allemaal in, en het is machineleesbaar. Een tweede beschrijving naast de eerste gaat op termijn afwijken van de eerste.

Een van de deelnemers vatte het standpunt zo samen:

> <span lang="en">"Every single need an agent has a human also has."</span>

De tegenwerping kwam van Chrome-kant en was scherper dan ik had verwacht. Hulpsoftware helpt een mens de pagina te gebruiken zoals een mens dat doet. WebMCP is bedoeld om precies dat over te slaan:

> <span lang="en">"It's designed to skip all the stuff a user would normally use, like a site's semantic HTML, user interface, and UI, that agents have trouble processing like humans, and reduce the site to a set of low-level, web-UI-bypassing primitives."</span>

Daar zit een tweede zorg achter die uit de W3C-bijeenkomst van november 2025 komt. Zodra ontwikkelaars ARIA gaan schrijven voor agents in plaats van voor mensen, gaan ze keuzes maken die de pagina slechter maken voor de mensen die die informatie nodig hebben. De toegankelijkheidsgemeenschap heeft daar een vaste regel voor: geen ARIA is beter dan slechte ARIA.

Op 17 augustus 2026 is de discussie gesloten als <span lang="en">"not planned"</span>. De reden: geen enkele browserpartij wil WebMCP-tools in de accessibility tree zetten, en Apple heeft laten weten daar uitdrukkelijk tegen te zijn.

{{< /case-section >}}

{{< case-section image="/images/blog/ai-wcag-webmcp-sr-only.svg" >}}

## Wat er gebeurt als je het toch probeert

Halverwege die discussie deelde iemand wat er misging bij een poging om beide werelden te verbinden. Op een productiesite was een element met de class `sr-only` geplaatst, het patroon waarmee je tekst alleen voor schermlezers zichtbaar maakt. In dat element stond een boodschap gericht aan AI-agents, met de mededeling dat de pagina WebMCP-tools had en hoe je die kon opvragen.

Dat werkte. Agents vonden het. En schermlezergebruikers kregen een technische instructie voor machines voorgelezen als paginatekst.

Er kwam nog iets bij. Verborgen tekst die de AI aanspreekt heeft exact de vorm van een prompt-injectie, dus de beveiligingscontrole van de agent-extensie sloeg aan. Het experiment is twee keer gedaan voordat de conclusie duidelijk werd, en die conclusie was: je gebruikt daar een kanaal dat van hulpsoftwaregebruikers is.

Dit is het scenario waar ik in de praktijk bang voor ben. Er is niemand die toegankelijkheid bewust afschaft. Het kanaal voor schermlezers krijgt een tweede functie en wordt daardoor slechter.

{{< /case-section >}}

{{< case-section image="/images/blog/ai-wcag-webmcp-schermlezer-vs-agent.svg" >}}

## Waarom een schermlezer dit niet zomaar kan overnemen

De sterkste technische reden staat in een reactie van Léonie Watson, een bekende naam in het toegankelijkheidsvak:

> <span lang="en">"Screen readers are essentially reactive. They expose what's in the accessibility tree as the user navigates the page. They don't make decisions about which actions to take, construct arguments, or how to interpret structured data, and this is what's missing for the direct model to work."</span>

Dat is het verschil in één zin. Een schermlezer geeft weer wat er is, op het moment dat de gebruiker daar komt. Een tool aanroepen is iets anders: je moet kiezen welke handeling past, je moet de invoer opbouwen die het schema vraagt, en je moet het resultaat interpreteren. Een schermlezer doet dat niet, want dat is niet wat een schermlezer is.

Als WebMCP dus iets voor toegankelijkheid gaat betekenen, loopt dat via een agent die naast de schermlezer staat. En dat is geen theorie: volgens dezelfde reactie werkt Vispero, de maker van JAWS, aan een AI-agent die met de schermlezer wordt meegeleverd.

{{< /case-section >}}

{{< case-section >}}

## Waar het wel iets kan opleveren

Eén idee uit de discussie vind ik echt goed. Een lijst met tools is een lijst met handelingen die je op deze pagina kunt uitvoeren, met een naam en een beschrijving erbij. Dat is een <span lang="en">command palette</span>, het venster dat je in een code-editor opent om een opdracht te zoeken op naam.

Voor iemand die door een uitgebreide interface navigeert met een schermlezer is dat sneller dan een menu- en werkbalkstructuur langsgaan. De browser of de hulpsoftware zou die lijst rechtstreeks aan de gebruiker kunnen tonen, zonder AI ertussen.

Dat kan naast een toegankelijke pagina bestaan. Het vervangt hem niet, want de tools zijn optioneel, de pagina is dat niet.

{{< /case-section >}}

{{< case-section >}}

## Wat je nu doet met je eigen website

Kort: nog niets bijzonders.

WebMCP zit in een origin trial in één browser, de API veranderde deze maand nog van naam, en de discussie over de verhouding tot toegankelijkheid loopt door in een aparte, nog openstaande kwestie in dezelfde repository. Een site die vandaag alles op WebMCP inricht, bouwt op iets dat volgende maand anders heet.

Wat wel nu al klopt:

- Bouw je pagina zo dat een toetsenbord, een schermlezer en 400% zoom werken. Een agent die de DOM leest heeft daar direct baat bij, want die leest dezelfde structuur.
- Zet nooit tekst voor machines in een `sr-only`-element. Dat kanaal is van je bezoekers.
- Ga je WebMCP proberen, houd dan de handeling in de interface en de tool gelijkwaardig. Elke handeling die alleen als tool bestaat, is een functie die je bezoeker niet heeft.
- Laat de tools de bestaande code aanroepen die de knop ook aanroept. Dan kunnen ze niet gaan verschillen, want er is één plek waar het gedrag staat.

{{< /case-section >}}

{{< case-section image="/images/julia.webp" alt="Julia Tol, senior auditor bij Proper Access" round="true" caption="Julia Tol, developer, WCAG-expert, AI consultant" >}}

## Wat ik hiervan leer

Twee beschrijvingen van dezelfde pagina gaan verschillen. Dat is geen voorspelling over WebMCP, dat is wat we in audits al zien bij `aria-label` tegenover het zichtbare label op dezelfde knop: iemand past de zichtbare tekst aan en vergeet de andere. Eén knop, twee waarheden, en de spraakbedieningsgebruiker die de zichtbare tekst uitspreekt krijgt niets. Er is een succescriterium voor nodig geweest om dat af te dwingen, WCAG 3.2.4 en 2.5.3.

WebMCP maakt dat patroon groter. Het gaat dan om de hele lijst met dingen die je op een pagina kunt doen, nog een keer opgeschreven op een andere plek.

Dat is voor mij geen reden om tegen WebMCP te zijn. Een agent die weet welke handelingen er zijn, is beter dan een agent die het uit pixels probeert af te leiden, en voor iemand die een formulier van elf stappen niet zelf wil doorlopen kan dat veel schelen. Het is wel de reden waarom ik de volgorde belangrijk vind. Eerst de pagina die werkt zonder agent. Daarna, als je dat wilt, de tools erbij.

Het omgekeerde levert een website op die alleen nog te bedienen is door wie een AI-agent heeft.

{{< /case-section >}}

{{< case-section >}}

## Bronnen

- [WebMCP-specificatie, W3C Web Machine Learning Community Group](https://webmachinelearning.github.io/webmcp/)
- [WebMCP-documentatie voor Chrome-ontwikkelaars](https://developer.chrome.com/docs/ai/webmcp)
- [Discussie "Redundancy with the accessibility tree", issue 91](https://github.com/webmachinelearning/webmcp/issues/91)
- [Openstaande kwestie "WebMCP accessibility considerations", issue 65](https://github.com/webmachinelearning/webmcp/issues/65)
- [Verslag van de W3C-bijeenkomst over semantiek voor het agentic web, november 2025](https://www.w3.org/2025/11/11-semantics-for-agentic-minutes.html)
- [WebMCP and the future of the agentic web, Bogdan Cerovac](https://cerovac.com/a11y/2026/03/webmcp-and-the-future-of-the-agentic-web-do-not-leave-accessibility-behind/)

{{< /case-section >}}
