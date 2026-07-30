---
title: "1. De steekproef en scope"
hide_cta: true
meta_title: "Scope en steekproef van een WCAG-audit: hoe wij de omvang bepalen | Proper Access"
type: "zo-werken-wij"
layout: "agency"
date: 2026-05-30
slug: "steekproef-en-scope"
url: "/zo-werken-wij/steekproef-en-scope/"
weight: 1
description: "Voordat we testen, leggen we vast wat we testen. Welk type audit, welke pagina's en flows, en welke deadline we halen. Per mail, zonder verplicht kennismakingsgesprek."
keywords:
  - scope wcag audit
  - steekproef wcag
  - wcag-em methode
  - type audit kiezen

banner:
  title: "Stap 1: De steekproef en scope"
  content: "Voordat we testen, bepalen we samen wat we testen. Welk type audit, welke pagina's en flows, welke deadline. Per mail, een gesprek hoeft niet, maar mag wel."
  button:
    enable: true
    label: "Stuur ons een mail"
    link: "/contact/"

trust:
  label: "Per mail leggen we vast"
  names:
    - "Doel en deadline"
    - "Type audit"
    - "Templates en flows"
    - "BDTO of EAA"
    - "Wie levert wat"
---

{{< section-full >}}

De meeste audits beginnen met een mail. Je beschrijft wat er getest moet worden, welke deadline er staat, en of er eerder iemand naar gekeken heeft. Wij vragen door waar nodig en sturen binnen twee werkdagen een offerte met scope, type audit, prijs en doorlooptijd. Een kennismakingsgesprek hoeft niet, maar mag wel.

Scope en steekproef leggen we expliciet vast. Een audit van "de website" klinkt simpel, maar bij elke website komen we situaties tegen die om een keuze vragen. Hieronder leggen we uit welke keuzes dat zijn.

{{< /section-full >}}

{{< section-full title="Welk type audit past bij jou?" bg="light" >}}

In Nederland onderscheiden we vier vormen van audits. We leggen ze hieronder kort uit. Per mail bepalen we samen welke vorm past, en soms is dat een combinatie.

{{< /section-full >}}

{{< section-cards columns="2" bg="light" >}}
{{< section-card title="Volledige audit" >}}

De standaard. We toetsen alle 55 succescriteria van WCAG 2.2 op een representatieve selectie pagina's. Geschikt voor websites en apps waar je zowel de techniek als de content in eigen hand hebt. Vrijwel elke overheidsorganisatie en webshop kiest hiervoor.

[Lees over de volledige audit →](/toegankelijkheidsaudit/)

{{< /section-card >}}
{{< section-card title="Contentaudit" >}}

Alleen de content, niet de techniek. Geschikt als de techniek bij een externe leverancier ligt en je daar zelf niets aan kunt veranderen. We toetsen 33 succescriteria. Eventuele technische problemen schrijven we wel op, zodat je leverancier ermee aan de slag kan.

[Lees over de contentaudit →](/contentaudit/)

{{< /section-card >}}
{{< section-card title="Techniek- of systeemaudit" >}}

Voor softwareleveranciers en productteams die een component, plug-in of compleet platform laten toetsen. We toetsen 48 succescriteria: alles behalve de criteria die over multimedia en pure content gaan.

[Lees over de techniek- of systeemaudit →](/techniekaudit/)

{{< /section-card >}}
{{< section-card title="Heronderzoek" >}}

Een controle van eerdere bevindingen, na het oplossen. Voor de status A in een toegankelijkheidsverklaring is een heronderzoek nodig. We werken die stap apart uit in [aflevering 5](/zo-werken-wij/heronderzoek/).

{{< /section-card >}}
{{< /section-cards >}}

{{< section-full title="Wat is scope, wat niet" >}}

De scope is de grens van het onderzoek. We leggen vast wat erbinnen valt en wat erbuiten, en bij twijfel beslissen we samen voordat de audit start.

Een paar veelvoorkomende keuzes:

- **Subdomeinen.** Een subdomein als `webshop.jouwsite.nl` zien we als een aparte website. Je kunt het meenemen in dezelfde audit, maar het krijgt een eigen plek in de steekproef met minimaal vier pagina's. Wil je het er niet bij hebben, dan blijft het buiten scope.
- **Iframes en widgets.** Wij testen ingebedde widgets en kaarten gewoon mee, ook als ze van een externe leverancier zijn. Je kunt er soms zelf niet alles aan veranderen, maar je wilt wel weten of een bezoeker met een schermlezer er doorheen komt. Wat je vervolgens met die bevindingen doet, beslis je zelf: bij de leverancier neerleggen, een alternatief zoeken, of laten staan.
- **URL's met parameters.** Een zoekresultatenpagina waarvan alleen de filterparameters verschillen, telt als één pagina. We onderzoeken één goed voorbeeld.
- **Processen in meerdere stappen.** Een formulier dat over vijf schermen loopt, of een checkout met intake en betaalstap, tellen we als één geheel. We nemen het startpunt op in de steekproef en lopen het hele proces door.
- **Mijn-omgevingen.** Een afgeschermd deel waar bezoekers inloggen kan in de audit, maar we raden het meestal af. De combinatie is vaak te complex voor een steekproef van vijftien pagina's. Een aparte audit voor de mijn-omgeving werkt beter.
- **Acceptatie-omgeving.** Test je op acceptatie omdat productie nog niet leeft? Dat kan. We noteren in het rapport dat de URL's straks veranderen, zodat je dat ook in je toegankelijkheidsverklaring kunt toelichten.
- **Intranet of besloten omgevingen.** Daar testen we met geanonimiseerde URL's en zonder screenshots van persoonsgegevens.
- **Content van derden.** Reacties van bezoekers, forumberichten, documenten die gebruikers zelf uploaden: daar heb je geen invloed op. Dat valt buiten scope.

Wettelijke uitzonderingen zoals kaartapplicaties, oude PDF's en oude video's, hoeven volgens de wet niet toegankelijk gemaakt te worden. Wij testen ze wel, maar nemen de bevindingen op als informatie. Je beslist zelf wat je ermee doet: oplossen omdat het je gebruikers helpt, of laten staan met een toelichting in je toegankelijkheidsverklaring. We schrijven in het rapport precies op om welke onderdelen het gaat, zodat je dat onderscheid in je verklaring kunt verantwoorden.

{{< /section-full >}}

{{< section-full title="Hoe wij de steekproef samenstellen" >}}

Een handmatige audit doe je op een representatieve selectie pagina's, niet op alle. Dat is de [WCAG-EM-methode](https://w3c.github.io/wai/wcag-em/), de internationale standaard. Het doel: een steekproef die een zo volledig mogelijk beeld geeft van de techniek en content op je site.

De omvang hangt af van hoe groot je website is:

- **Klein:** ongeveer 12 pagina's
- **Gemiddeld:** 13 tot 19 pagina's
- **Groot:** 20 tot 30 pagina's
- **Per subdomein:** minimaal 4 pagina's extra

Heel kleine sites (minder dan 12 pagina's) testen we volledig.

In elke steekproef zitten in elk geval:

- De homepage
- De contactpagina
- Een pagina met zoekresultaten
- Minstens één formulierpagina
- Belangrijke processen: aanmelden, bestellen, inschrijven
- Pagina's met bijzondere elementen: multimedia, tabellen, iframes
- Twee PDF-documenten, waarvan minstens één met codes
- En 10% willekeurig gekozen pagina's, om plekken te raken die anders systematisch overgeslagen worden

Test je een app? Dan stellen we een aparte steekproef en een apart rapport op per platform. iOS-apps en Android-apps zijn in verschillende programmeertalen geschreven, en hybride apps worden per platform anders gerenderd. Wat op de één werkt, kan op de ander stuklopen.

{{< /section-full >}}

{{< section-cta >}}

## Klaar voor stap 1?

Stuur een mail met wat je wilt laten testen en je deadline. Binnen twee werkdagen sturen we een offerte met scope, steekproef en prijs.

[Stuur ons een mail](/contact/) [Bekijk wat een audit kost](/toegankelijkheidsaudit/)

{{< /section-cta >}}
