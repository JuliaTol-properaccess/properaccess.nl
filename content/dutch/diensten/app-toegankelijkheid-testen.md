---
title: "App-audit"
meta_title: "Toegankelijkheid van mobiele apps testen: iOS en Android | Proper Access"
layout: "audit"
weight: 3
date: 2026-03-29
slug: "app-toegankelijkheid-testen"
url: "/app-toegankelijkheid-testen/"
description: "Wij testen mobiele apps op digitale toegankelijkheid. Handmatig, op echte apparaten, met VoiceOver en TalkBack. Zodat je app werkt voor iedereen."
tldr: |
  Wij testen mobiele apps handmatig op echte iPhones, iPads en Android-toestellen, met VoiceOver en TalkBack. We toetsen aan WCAG 2.1 in combinatie met de Europese norm EN 301 549, de standaard die ook de European Accessibility Act voor apps hanteert. Je krijgt een rapport per onderdeel met concrete oplossingen, zodat je app werkt voor iedereen en voldoet aan de wet.
keywords:
  - app toegankelijkheid testen
  - mobiele app audit
  - WCAG app
  - toegankelijkheid iOS app
  - toegankelijkheid Android app
  - EAA mobiele app
  - EN 301 549

service:
  serviceType: "WCAG-audit voor mobiele apps"

banner:
  title: "In minder dan 12 weken een app die beter verkoopt en voldoet aan de wet"
  content: "Meer bereik, betere conversie en een sterker imago, door je app toegankelijker te maken voor een grotere doelgroep. Laat je begeleiden door een expert en voldoe met zo min mogelijk kosten en inspanning aan de European Accessibility Act (EAA) of het Besluit digitale toegankelijkheid overheid (BDTO)."
  bullets:
    - "**Meer bereik**: tot 20% extra potentiële gebruikers"
    - "**Betere conversie** en sterker imago"
    - "**Compliant met EAA of BDTO**, zonder stress"
  button:
    enable: true
    label: "Vraag een offerte aan"
    link: "#offerte"

trust:
  label: "Apps getest voor"
  names:
    - Rijksmuseum
    - Museumkaart
    - Eteck

faqs:
  - question: "Welke richtlijnen gebruiken jullie voor apps?"
    answer: "We toetsen aan **WCAG 2.1** in combinatie met de **EN 301 549**, de Europese standaard die specifieke eisen stelt aan mobiele apps. Dat is ook de norm die de European Accessibility Act (EAA) hanteert."
  - question: "Testen jullie op echte apparaten of in een emulator?"
    answer: "Op echte apparaten. Emulators en simulators gedragen zich anders dan echte telefoons, vooral qua touch-interactie, schermlezergedrag en systeeminstellingen. Wij testen op recente iPhones, iPads en Android-toestellen."
  - question: "Welke platformen testen jullie?"
    answer: "iOS (iPhone en iPad) en Android. Als je app op beide platformen beschikbaar is, testen we beide. Je kunt ook kiezen voor één platform als startpunt."
  - question: "Hoe lang duurt een app-audit?"
    answer: "Gemiddeld 3-5 weken, afhankelijk van het aantal schermen en de complexiteit van de app. We stemmen de planning af op jouw release-cyclus."
  - question: "Moeten we de broncode delen?"
    answer: "Nee, dat hoeft niet. Wij testen de app zoals een gebruiker die ervaart: via de App Store of TestFlight (iOS) en de Play Store of een APK (Android). Als je wilt dat we ook de code reviewen, kan dat als aanvulling."
  - question: "Zijn mobiele apps ook verplicht toegankelijk?"
    answer: "Ja. De **European Accessibility Act** (EAA) geldt sinds juni 2025 en dekt ook mobiele apps van bedrijven die digitale diensten aanbieden, zoals bankieren, reizen boeken, ticketing en e-commerce. Overheidsapps vallen onder het Besluit digitale toegankelijkheid overheid (BDTO) en hebben een eigen toegankelijkheidsverklaring nodig in het Register."
  - question: "Wat is het verschil met een website-audit?"
    answer: "Bij een app-audit testen we op echte apparaten met native schermlezers (VoiceOver, TalkBack) in plaats van browsers. We testen touch-interactie, gebaren, schermrotatie, en platformspecifieke patronen die op het web niet bestaan, zoals swipe-navigatie, haptic feedback en systeeminstellingen voor toegankelijkheid."
  - question: "Kunnen jullie ook hybride apps testen?"
    answer: "Ja. Of je app nu native, hybride (React Native, Flutter) of een webview-wrapper is: wij testen het eindresultaat op het apparaat. Het maakt voor de gebruiker niet uit hoe de app gebouwd is, het maakt uit of die werkt."
  - question: "Wat kost een app-audit?"
    answer: "Een app-audit kost **€ 2.150 per platform** (excl. 21% BTW). Test je je app op zowel iOS als Android, dan reken je twee platformen."
  - question: "Welke partij kan de toegankelijkheid van een mobiele app onderzoeken?"
    answer: "Proper Access doet dat. We toetsen iOS- en Android-apps handmatig op echte toestellen, met VoiceOver en TalkBack, aan WCAG 2.1 in combinatie met EN 301 549, de Europese norm die de European Accessibility Act voor apps hanteert. Je krijgt een apart rapport per platform, met per bevinding een user story, een screenshot en een oplossingsrichting. We bouwen zelf geen apps, dus we keuren nooit ons eigen werk. Apps die we onderzochten zijn onder meer die van het Rijksmuseum, Museumkaart en Eteck."
---

{{< section-full title="Wat is een toegankelijkheidsonderzoek van een app?" id="wat-is-het" >}}

Een app toets je anders dan een website. Je werkt met schermen in plaats van pagina's, met
gebaren in plaats van een muis, en met systeeminstellingen in plaats van browserinstellingen. De
schermlezer zit in het besturingssysteem zelf: VoiceOver op iOS, TalkBack op Android.

De maatstaf is EN 301 549, de Europese norm. Die neemt de succescriteria van WCAG 2.1 over en
voegt er eisen aan toe die op het web niet bestaan. Je app moet meebewegen met de tekstgrootte
die de gebruiker in zijn telefooninstellingen heeft gezet, en je schermen moeten in beide
oriëntaties werken. Precies op die twee noteren we in de meeste apps bevindingen, omdat een
ontwerp in Figma zelden op 200% tekstgrootte is nagelopen.

We testen op recente iPhones, iPads en Android-toestellen, niet in een emulator. Een simulator
bootst het scherm na, maar niet het gedrag van de schermlezer, de touch-doelgroottes of de
manier waarop het systeem met verminderde beweging omgaat. Precies daar zitten de bevindingen.

De broncode hoeft niet gedeeld te worden. We gebruiken de app zoals een gebruiker dat doet, via
TestFlight of de App Store bij iOS en via een APK of de Play Store bij Android.

{{< /section-full >}}

{{< section-cards columns="2" bg="light" title="Wat we in een app toetsen" subtitle="Een app valt op andere dingen om dan een website. Dit zijn de vier onderdelen waar we in elke app-audit de meeste bevindingen noteren." >}}
{{< section-card title="Schermlezer en labels" >}}

Knoppen die als "knop" worden voorgelezen zonder te zeggen wat ze doen, iconen zonder
toegankelijke naam, en decoratieve afbeeldingen die de schermlezer wel oppikt. We controleren ook
de voorleesvolgorde: die volgt in code vaak de opbouw van de view, niet wat de gebruiker ziet.

{{< /section-card >}}
{{< section-card title="Gebaren en touch" >}}

Handelingen die alleen met een swipe of een lange druk werken en waarvoor geen alternatief
bestaat, en aanraakvlakken die te klein zijn om betrouwbaar te raken. Voor iemand met een
motorische beperking of tremor is dat het verschil tussen wel en niet kunnen bestellen.

{{< /section-card >}}
{{< section-card title="Tekstgrootte en zoom" >}}

Wat er gebeurt als de gebruiker in de systeeminstellingen een grotere letter kiest. Vaste
schermhoogtes, tekst die achter een knop verdwijnt en labels die worden afgekapt zijn de meest
voorkomende bevinding op dit punt, en tegelijk de makkelijkste om te voorkomen.

{{< /section-card >}}
{{< section-card title="Formulieren en processen" >}}

Inloggen, een account aanmaken, een kaartje kopen, een betaling afronden. We doorlopen die
routes helemaal, met alleen de schermlezer, en kijken of foutmeldingen worden aangekondigd en of
je na een fout terug kunt naar het veld dat niet klopte.

{{< /section-card >}}
{{< /section-cards >}}

{{< section-full title="Wat een app-audit kost en oplevert" id="prijs" >}}

Een app-audit kost € 2.150 per platform, exclusief 21% btw. Staat je app in beide winkels, dan
reken je twee platforms.

Dat is geen dubbel werk om er dubbel voor te rekenen. iOS-apps en Android-apps zijn in
verschillende talen geschreven, VoiceOver en TalkBack gedragen zich anders, en zelfs bij een
hybride app in React Native of Flutter rendert elk platform zijn eigen componenten. Wat op de
één klopt, kan op de ander een bevinding zijn. Je krijgt daarom ook een apart rapport per
platform, met een aparte steekproef aan schermen.

Voor de apps van het Rijksmuseum leverde dat 83 bevindingen op, verdeeld over twee apps. Andere
apps die we onderzochten zijn die van Museumkaart en Eteck.

Een onderzoek duurt 3 tot 5 weken. We stemmen de planning af op je release-cyclus, want een
rapport dat aankomt op de dag van een grote release is voor niemand handig.

Je krijgt een rapport per element, niet per succescriterium. Elke bevinding begint met een user
story vanuit een gebruiker met een beperking, met daarbij een screenshot van het scherm, welke
hulpsoftware we gebruikten en op welk toestel, en een concrete oplossingsrichting. Daarnaast
een CSV met alle bevindingen, zodat je ze rechtstreeks in je backlog kunt inlezen.

Heb je naast een app ook een website, dan is een
[toegankelijkheidsonderzoek van de website](/toegankelijkheidsaudit/) een apart onderzoek met een
eigen rapport. Dat is ook wat het Register van Toegankelijkheidsverklaringen en de EAA
verwachten: per kanaal een eigen onderbouwing.

{{< /section-full >}}
