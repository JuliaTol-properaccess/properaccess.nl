---
title: "Welke tools gebruik je om je website op WCAG te testen?"
date: 2026-04-15
slug: "welke-tools-zijn-er-voor-toegankelijkheidstesten"
categories:
  - "wcag-vragen"
  - "tips-en-tools"
tags:
  - "veelgestelde-vragen"
  - "eaa"
  - "audit"
  - "tools"
description: "Welke tool vindt wat, en vooral: wat vindt geen enkele tool? Overzicht van scanners, contrasttools, schermlezers en bookmarklets, met per categorie wat er buiten beeld blijft."
keywords:
  - WCAG tools
  - toegankelijkheid testen tool
  - website scannen op WCAG
  - gratis toegankelijkheidstools
  - accessibility overlay
  - automatische WCAG-scan
---

Het korte antwoord: WAVE, axe DevTools, Accessibility Insights en de Colour Contrast Analyser
doen alle vier een deel van het werk, en elk is ergens beter in dan de rest. Sinds deze zomer is
er een nieuwe tool bij die de losse checks in één extensie combineert: de
[WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar).

Wil je het zelf doen, dan werkt deze combinatie het beste: een tool die de meetbare fouten voor je
opzoekt, een schermlezer erbij (NVDA op Windows of VoiceOver op Mac) en een doorloop met alleen je
toetsenbord. In de gratis vorm kost die combinatie niets en je komt er verder mee dan met welke
losse tool ook.

## Wat een geautomatiseerde tool wel en niet ziet

WCAG 2.2 telt op niveau A en AA samen 55 succescriteria. Een geautomatiseerde scan herkent daar
ongeveer 30% van. Dat cijfer is een schatting uit het vakgebied en geen meting van ons, dus neem
het als orde van grootte. In 950 audits sinds 2019 klopt het aardig met wat we zien.

Waar de scheidslijn ligt, is wel goed te beschrijven. Een tool kan meten wat meetbaar is: ontbreekt
er een alt-attribuut, is de contrastverhouding lager dan 4,5:1, heeft een knop een toegankelijke
naam, klopt de nesting van de HTML. Wat een tool niet kan beoordelen is betekenis. Of die alt-tekst
klopt bij de afbeelding. Of de volgorde waarin een schermlezer voorleest logisch is. Of je met het
toetsenbord weer uit een dialoogvenster komt. Of een foutmelding wordt aangekondigd op het moment
dat hij verschijnt.

Dat verschil is geen theorie. We onderzochten een site die in de geautomatiseerde scan nul fouten
gaf en leverden een rapport op met ruim honderd bevindingen. Dat verhaal staat in
[nul fouten in de scan, ruim honderd bevindingen in de audit](/blog/nul-fouten-scan-ruim-honderd-bevindingen-audit/).

## In-pagina checkers

Deze zet je aan op de pagina die je op dat moment bekijkt. Ze zijn gratis, je hebt geen account
nodig en je ziet het resultaat meteen in de pagina zelf.

![](/images/blog/tools-inpagina-checker.webp)

| Tool             | Sterk in                                                                        | Wat het niet vindt                                                                  |
| ---------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **WAVE**         | snel visueel overzicht, ook zonder technische kennis                            | meldt regelmatig dingen die geen echt probleem zijn, dus je moet het nalopen        |
| **axe DevTools** | nauwkeurig, weinig valse meldingen, uitleg per bevinding                        | alles wat om een oordeel vraagt: volgorde, betekenis, of een alternatief klopt      |
| **WCAG Radar**   | drie tabbladen voor redactie, design en development; leesvolgorde en simulaties | het is geen crawler: je zet hem zelf aan, per pagina                                |
| **Lighthouse**   | zit al in Chrome, geeft snel een indruk                                         | de score van 0 tot 100 is misleidend; 100 betekent niet dat je site toegankelijk is |

Over die laatste: een score van 100 in Lighthouse zegt dat er niets is gevonden in de dingen die
Lighthouse kan controleren. Dat is iets heel anders dan voldoen. We zien die 100 met enige
regelmaat langskomen als bewijs in een aanbesteding, en dat is het niet.

### Over de WCAG Radar

De [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) zet je aan als bookmarklet of als
browserextensie. Hij markeert problemen in de pagina die je op dat moment bekijkt, verdeeld over
drie tabbladen: één voor redactie, één voor designers en één voor developers. Hij toont de
leesvolgorde zoals een schermlezer die tegenkomt, meet contrast met een kleurenpipet, en heeft
simulaties voor grijswaarden, tekstzoom en paginazoom.

Elk checkpoint verwijst naar een artikel waarin in niet-technische taal staat wat je moet
controleren en wat je kunt verwachten. De checks volgen de Nederlandse auditpraktijk, dus ze zijn
geordend naar wat er hier het vaakst misgaat.

Twee dingen die hem praktisch maken: alles rekent lokaal in je browser, dus er gaat geen
pagina-inhoud naar een server, en hij werkt achter een login en op localhost. Daarmee kun je een
besloten omgeving of een staging-site testen, wat met een online scanner niet lukt.

De gratis versie doet 28 van de 45 checks en vraagt geen account. Voor alle checks en een
HTML-export is een licentie nodig, vanaf € 119 per jaar voor één persoon en vanaf € 350 per jaar
voor een organisatie.

Wat hij niet is: geen crawler die je site afloopt, geen monitor die in de gaten houdt of er iets
verandert, en geen vervanging van een handmatige audit. Hij geeft geen conformiteitsverklaring en
geen user stories. Een strikt Content Security Policy blokkeert de bookmarklet, dus op sommige
sites werkt alleen de extensie.

## Contrast meten

![](/images/blog/tools-contrast-pipet.webp)

**WebAIM Contrast Checker** is de snelste: twee kleuren invullen, ratio eruit, met een oordeel over
AA en AAA. Werkt in de browser en kost niets.

**Colour Contrast Analyser** van TPGi is een desktopprogramma voor Windows en macOS met een pipet
waarmee je kleuren van je scherm plukt. Dat is precies wat je nodig hebt bij tekst op een foto of
op een verloop, waar geen CSS-waarde te vinden is.

De **WCAG Radar** meet het contrast van tekst en van informatieve interface-elementen, en geeft de
contrastverhouding erbij.

Wat geen van deze drie voor je oplost: bepalen welke twee kleuren je eigenlijk moet vergelijken.
Halftransparante lagen, schaduwen en achtergrondafbeeldingen maken dat lastiger dan het lijkt.

## Structuur bekijken

**HeadingsMap** toont de koppenstructuur van een pagina als boom. In één blik zie je of je van een
h2 naar een h4 springt of dat er twee h1's staan.

De **WCAG Radar** laat zien welke kopniveaus je pagina gebruikt. Je ziet daardoor meteen wanneer
tekst alleen groot en opvallend is gemaakt zonder dat er een kop-element onder zit. Ook de
kopteksten zelf krijgen een beoordeling.

Een kloppende hiërarchie betekent niet dat je koppen goed zijn. Een pagina waar elke kop "Meer
informatie" heet, komt er foutloos doorheen en helpt niemand.

## Schermlezers

![](/images/blog/tools-leesvolgorde.webp)

Een schermlezer is geen meetinstrument. Het is de manier waarop een deel van je bezoekers je site
werkelijk gebruikt. Je zet hem dus niet aan om iets af te vinken, maar om te horen wat er gebeurt.

- **NVDA**, gratis en open source, op Windows. Dit is de schermlezer waar wij het meest mee toetsen.
- **VoiceOver**, ingebouwd in macOS en iOS. Op de Mac zet je hem aan met Cmd + F5.
- **TalkBack**, ingebouwd in Android. Nodig zodra je een Android-app onderzoekt.
- **JAWS**, betaald, op Windows. Veel gebruikt binnen grotere organisaties.

Reken erop dat de eerste keer tegenvalt. Een schermlezer bedienen is een vaardigheid, en wie hem
voor het eerst aanzet hoort vooral ruis. Dat went, en daarna is het de snelste manier om te merken
dat je formulier nergens vertelt wat er misging.

In de **WCAG Radar** kun je de inhoud van je pagina tonen zoals een schermlezer die krijgt. Je kunt
er ook een lijst met alle links uit halen, zodat je kunt beoordelen of een linktekst los van de
pagina nog te begrijpen is.

## Bookmarklets

**Tota11y** van Khan Academy en **ANDI** van de Amerikaanse Social Security Administration zijn
allebei gratis en installeren niets. Handig op een machine waar je geen extensies mag installeren.

De **WCAG Radar** werkt ook als bookmarklet, om diezelfde reden.

## Werken toegankelijkheidsoverlays zoals AccessiBe en UserWay?

Voor het probleem waar ze voor verkocht worden: nee.

Een overlay is een stuk JavaScript dat bovenop je site draait en daar dingen aanpast: contrast
verhogen, tekst vergroten, een voorleesknop toevoegen. Wat het niet doet, is de code eronder
repareren. Een knop zonder toegankelijke naam blijft een knop zonder toegankelijke naam, en een
formulier waarvan de foutmelding niet wordt aangekondigd blijft dat ook.

Daar komt bij dat de functies die een overlay aanbiedt, grotendeels al in het apparaat van de
bezoeker zitten. Wie een schermlezer gebruikt, heeft die al ingesteld zoals hij hem wil. Een extra
laag eroverheen kan die instellingen verstoren.

Wij schreven er uitgebreider over in
[overlay-toegankelijkheidstools: lossen ze echt iets op?](/blog/overlay-toegankelijkheidstools-lossen-ze-echt-iets-op/).

## Helpen AI-tools bij een audit?

Ze helpen, en ze nemen het niet over. Een taalmodel is goed in het beoordelen van dingen waar
betekenis bij komt kijken, zoals of een alt-tekst past bij een afbeelding of een linktekst
duidelijk maakt waar hij heen gaat. Dat is precies wat een klassieke scanner niet kan.

Waar het misgaat is betrouwbaarheid: hetzelfde model geeft niet altijd hetzelfde antwoord, en het
levert soms een keurig onderbouwde bevinding op die niet klopt. Voor een rapport dat als
onderbouwing moet dienen, is dat een probleem.

We hebben dat zelf uitgezocht en opgeschreven in
[kan AI een website testen op toegankelijkheid?](/blog/kan-ai-website-testen-op-toegankelijkheid/).

## Wat doet monitoring?

Monitoringtools scannen je site periodiek en melden wat er verandert. Dat is nuttig voor wat ze
kunnen zien: verdwijnt er een alt-tekst, zakt een contrastverhouding onder de norm, of komt er een
formulierveld zonder label bij.

Wat ze niet doen is beoordelen. Ze meten dezelfde ongeveer 30% als elke andere geautomatiseerde
scan, alleen dan herhaald. Een groen dashboard is dus geen bewijs dat je voldoet, en het Register
van Toegankelijkheidsverklaringen accepteert het ook niet als onderbouwing: daar is onderzoek
volgens WCAG-EM voor nodig.

Waar monitoring wel voor werkt: voorkomen dat je na een audit langzaam terugzakt. De meeste
bevindingen die wij bij een hercontrole tegenkomen zijn nieuw, en komen uit content en features die
er na het onderzoek bij zijn gekomen.

## Is een automatische scan genoeg om aan de wet te voldoen?

Nee, en dat is geen mening.

Val je onder het Besluit digitale toegankelijkheid overheid, dan heb je een verklaring in het
Register nodig, en het Register accepteert alleen onderzoek dat volgens WCAG-EM is uitgevoerd. Die
methode vraagt om een representatieve steekproef die handmatig wordt getoetst. Een scan voldoet daar
niet aan, ook niet als er nul fouten uitkomt.

Val je onder de European Accessibility Act, dan is er helemaal geen onderzoeksplicht. Wat de wet
van je vraagt is een toegankelijke website of app. Een onderzoek is de manier om te weten of je daar
staat, en een scan dekt daar ongeveer 30% van af.

De norm waar beide wetten naar wijzen is EN 301 549. Die staat op dit moment op WCAG 2.1 niveau A
en AA. Wij toetsen aan WCAG 2.2 als extra service.

## Wat wij zelf gebruiken

- **axe DevTools** en de **WCAG Radar** voor de eerste doorloop
- **NVDA** op Windows en **VoiceOver** op macOS en iOS voor de schermlezertesten
- **Alleen het toetsenbord** op elke pagina in de steekproef
- **Zoom tot 200% en tot 400%**, plus meer afstand tussen letters, woorden en regels
- Controle op kleurgebruik, dus niet alleen op contrast maar ook op kleur als enige aanwijzing
- De **browser-DevTools** om de broncode en de accessibility tree te lezen

De tools maken ons sneller. Het oordeel blijft mensenwerk, en bij ons kijkt er altijd een tweede
auditor naar elke bevinding.

Wil je weten waar je staat zonder meteen een volledig onderzoek te laten doen? Een
[mini-audit](/quickscan-digitale-toegankelijkheid/) kost € 495 exclusief btw en combineert deze
tools met handmatig onderzoek.
