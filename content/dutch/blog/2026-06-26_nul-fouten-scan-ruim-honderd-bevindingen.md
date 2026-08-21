---
title: "Nul fouten in de scan, ruim honderd bevindingen in de audit"
date: 2026-06-26
slug: "nul-fouten-scan-ruim-honderd-bevindingen-audit"
categories:
  - "wcag-uitgelegd"
  - "webdeveloper"
tags:
  - "axe"
  - "geautomatiseerd-testen"
  - "screenreader"
  - "toetsenbordtoegankelijkheid"
  - "aria"
  - "e-commerce"
  - "eaa"
description: "Een grote webshop kwam door een automatische scan met Axe zonder enkele fout. Onze handmatige audit vond er ruim honderd. Dit artikel laat zien wat een scanner mist en waarom dat juist de dingen zijn waar je bezoekers op vastlopen."
keywords:
  - "axe scan 0 fouten"
  - "geautomatiseerd testen toegankelijkheid"
  - "handmatige audit versus scanner"
  - "wat vindt axe niet"
  - "webshop toegankelijkheid eaa"
image: "/images/blog/scan-vs-audit-bevindingen.webp"
---

We onderzochten onlangs een grote Nederlandse webshop. Voordat we handmatig aan de slag gingen, lieten we er eerst Axe op los, een veelgebruikte geautomatiseerde testtool voor toegankelijkheid die veel developmentteams in hun pijplijn hebben zitten. De uitkomst: geen fouten. Een rapport zonder bevindingen, een groen vinkje.

Daarna deden we onze eigen audit. Dezelfde pagina's, dezelfde flows, maar dan met de hand en met een screenreader erbij. We kwamen uit op ruim honderd bevindingen, verspreid over de homepage, de categoriepagina's, de zoekfunctie, een productpagina, de hele checkout en de accountpagina's. Stuk voor stuk echte WCAG-bevindingen, geen twijfelgevallen.

Die twee uitkomsten staan zo ver uit elkaar dat de vraag "Hoe kan dat?" vanzelf opkomt. Hoe haalt een site nul fouten in de scan en alsnog ruim honderd in de audit? Het antwoord zegt veel over wat een geautomatiseerde testtool eigenlijk doet, en nog meer over de dingen waar je bezoekers in de praktijk op vastlopen.

## Wat is Axe eigenlijk?

Axe is een van de bekendste geautomatiseerde testtools voor toegankelijkheid. Het is een tool die je code doorloopt en meldt waar die een regel uit WCAG overtreedt. Je kunt hem als browserextensie gebruiken, maar veel teams bouwen hem in hun ontwikkelstraat in, zodat elke nieuwe versie van een site automatisch wordt gescand. Er zijn meer van dit soort tools, zoals WAVE, Lighthouse en Pa11y, en ze werken in de basis allemaal op dezelfde manier. Ze zijn populair omdat ze snel zijn, gratis of goedkoop, en omdat ze zonder klagen duizend keer per dag draaien.

We hebben dan ook niets tegen geautomatiseerde testtools. Ze vangen een aantal fouten af die je echt niet wilt hebben, en als eerste filter zijn ze prima. Maar je moet weten wat ze wel en niet kunnen.

Een geautomatiseerde testtool kan alleen controleren wat een machine kan aflezen uit de code. Ontbreekt er een alt-attribuut bij een afbeelding? Dat ziet een tool. Heeft een knop helemaal geen tekst en geen label? Dat ziet een tool soms ook. Staat er zwarte tekst op een witte egale achtergrond met te weinig contrast? Dat kan een tool uitrekenen.

Het probleem is dat dit slechts een klein onderdeel van toegankelijkheid is. Het grootste deel van WCAG gaat niet over de vraag of een bepaald attribuut aanwezig is, maar of iets klopt. Of een tekstalternatief, zoals een alt-tekst, de afbeelding ook echt beschrijft. Of de naam van een knop aangeeft wat de knop doet. Of de focus naar het juiste element springt. Dat soort oordelen kan een machine niet vellen. Daar heb je een mens voor nodig die de pagina ook echt gebruikt, met een toetsenbord en een screenreader.

## Hoeveel vangt een geautomatiseerde testtool dan af?

Daar zijn verschillende onderzoeken naar gedaan, en de schattingen lopen uiteen. Ze komen erop neer dat een geautomatiseerde testtool maar 20 tot 30 procent van alle WCAG-problemen vindt. Dat blijft een minderheid. De overige 70 tot 80 procent moet je alsnog met de hand testen.

We zijn niet de enigen die dit zien. Toegankelijkheidsexpert Karl Groves rekende per succescriterium uit wat een tool kan toetsen en kwam voor niveau AA uit op zo'n 17 procent. Je leest zijn analyse in [<span lang="en">Web Accessibility Testing: What Can Be Tested and How</span>](https://karlgroves.com/web-accessibility-testing-what-can-be-tested-and-how/). Negen succescriteria zijn met geen enkele tool zinvol te controleren, dertien andere vragen alsnog om een mens. Steve Faulkner maakt hetzelfde onderscheid in [<span lang="en">Mind the WCAG automation gap</span>](https://html5accessibility.com/stuff/2025/03/27/mind-the-wcag-automation-gap/): een tool kan dingen opsporen en meten, maar of een alt-tekst klopt of een knop logisch werkt, dat beoordeelt alleen een mens. En Adrian Roselli liet in [<span lang="en">Automated WCAG testing is grrreat</span>](https://adrianroselli.com/2025/04/automated-wcag-testing-is-grrreat.html) zien dat de populairste tool maar een fractie vond van de problemen die een handmatige controle wel boven tafel haalde. Drie experts, dezelfde conclusie.

Bij deze webshop lag het cijfer nog lager. De scan vond nul fouten, terwijl er ruim honderd echte bevindingen waren. In dit geval ving de tool dus niet 20 of 30 procent af, maar 0 procent. Dat is een uitschieter, maar het laat wel goed zien hoe ver een foutloos scanrapport van de werkelijkheid af kan liggen. En precies in dat gat zaten al die bevindingen.

Hieronder loop ik de belangrijkste groepen langs, met voorbeelden uit dit rapport. Ik noem de webshop niet bij naam, maar de voorbeelden zijn echt.

## Namen die nergens op slaan

Een geautomatiseerde testtool kan waarnemen dat een knop een toegankelijke naam heeft. Of die naam ergens op slaat, dat ziet hij niet. En juist daar ging het vaak mis.

![Een wachtwoordsterkte-balk waarvan de schermlezer de naam voorleest als de technische code passwordProgressBar.passwordStrength in plaats van het woord wachtwoordsterkte.](/images/blog/naam-technische-string.webp)

Het mooiste voorbeeld was de balk voor de wachtwoordsterkte bij het registreren. Die had keurig een naam, dus de tool gaf groen licht. Alleen was die naam letterlijk "dbk-components.inputs.passwordProgressBar.passwordStrength", een interne vertaalsleutel die per ongeluk doorgesijpeld was naar de buitenkant. Een screenreadergebruiker hoort dan die hele technische string voorbijkomen in plaats van het woord "wachtwoordsterkte". Hetzelfde gebeurde bij het cookievenster, waar de titel "dbk-components.cookieBar.accessibleTitle" was. Voor een tool is dat een geldige naam. Voor een mens is het onzin.

Op de zoekpagina stonden twee invoervelden voor een prijsfilter, één voor de minimumprijs en één voor de maximumprijs. De namen van die velden waren "Prijs Prijs" en "Prijs". Allebei hebben ze een toegankelijke naam, dus de scan keurt ze niet af. Maar wie blind is, weet zo niet welk veld het minimum is en welk het maximum. In de header zaten knoppen met het hartje voor de verlanglijst en het winkeltasje, met daarnaast een tellertje: drie items, twee items. Dat getal stond wel in beeld, maar niet in de naam van de knop. De schermlezer leest alleen "Verlanglijst" voor, niet dat er drie dingen in zitten.

En dan had je nog knoppen die allemaal dezelfde naam deelden maar iets anders deden. In de zoekbalk hadden een pijlknop en een kruisje allebei de naam "Annuleren". Naast de zoeksuggesties hadden meerdere knoppen de naam "Suggestie gebruiken", zonder dat erbij stond welke suggestie het betrof. En in de zoekgeschiedenis had elk kruisje de naam "Geschiedenis verwijderen", zonder aan te geven welke zoekopdracht je dan weggooide. Voor wie blind is, lijken al die knoppen hetzelfde, en dat is flink verwarrend. Toch glipten ze allemaal langs de geautomatiseerde testtool, want een toegankelijke naam hadden ze.

## Dingen die veranderen zonder iets te zeggen

Een groot deel van een webshop verandert terwijl je ernaar kijkt, zonder dat de pagina opnieuw laadt. Je vinkt een filter aan en het aantal resultaten verspringt. Je typt een wachtwoord en de eisen kleuren groen. Je verstuurt een formulier en er verschijnt een foutmelding. Voor wie het ziet, gebeurt dat vanzelf. Voor wie een screenreader gebruikt, moet zo'n verandering actief worden aangekondigd, met een zogenoemde live region. Gebeurt dat niet, dan verandert er voor die bezoeker stilletjes van alles zonder dat hij het doorheeft.

![Iemand met een koptelefoon vinkt een filter aan, het aantal artikelen springt van 9 naar 4, maar de schermlezer blijft stil: boven het hoofd een lege tekstballon met een doorgestreepte luidspreker.](/images/blog/statusbericht-niet-aangekondigd.webp)

Bij deze webshop werd vrijwel niets van dat soort wijzigingen aangekondigd. Pas je op de zoekpagina een filter aan, dan veranderde "9 artikelen" naar een ander getal, maar de screenreader bleef stil. Maakte je een fout bij het inloggen, dan verscheen er een melding in beeld die nooit werd voorgelezen. Sterker nog, die foutmelding werd alleen aangegeven met een kleur: een rode rand om het veld. Wie kleurenblind of blind is, krijgt dan geen enkel signaal dat er iets mis is. En de eisen onder het wachtwoordveld die één voor één groen werden, plus het vinkje dat verscheen zodra je wachtwoord goed was, bleven voor een screenreader volledig onzichtbaar. Een tool ziet alleen dat de tekst aanwezig is. Dat die op het verkeerde moment, of helemaal niet, wordt aangekondigd, ontgaat hem.

## Toetsenbord en focus

Veel mensen bedienen een website helemaal zonder muis, alleen met het toetsenbord. Ze springen met de Tab-toets van element naar element. Of dat soepel gaat, is bijna nooit met een scan te bepalen, want een tool drukt niet zelf op Tab en kijkt niet waar de focus belandt.

Op deze site begon het al bij het ontbreken van een skiplink, de link waarmee je in één keer voorbij het menu naar de inhoud springt. Die was er niet, dus moest je op elke pagina eerst door de hele header heen tabben. Daarna werd het nog vreemder. Na het winkeltasje sprong de focus naar onzichtbare elementen van een menu dat helemaal niet open was, en in de footer kwam de focus terecht op een onzichtbare knop met de naam "Edit" die nergens te bekennen was. Je drukt op Tab en je focus verdwijnt naar dingen die je niet ziet.

Open je het informatievenster naast het wachtwoordveld, dan bleef de focus gewoon op de achterliggende pagina staan in plaats van mee te gaan naar het venster. En op een klein scherm was de focus op het logo helemaal niet zichtbaar, omdat de standaard focusstijl was weggehaald zonder dat er iets voor in de plaats kwam. Voor wie het toetsenbord gebruikt is dat een ramp: je hebt geen idee meer waar je bent op de pagina. Geen enkele scan sloeg hierop aan.

## Alleen met de muis te bedienen

Een tool kan de muis niet bedienen, drukt niet op Tab en zoomt niet in. Daardoor mist hij precies de dingen die alleen opduiken als je dat wel doet.

![Een carrousel met drie productkaarten waarvan de vorige- en volgende-knoppen alleen bij de muiscursor verschijnen; een toetsenbordgebruiker kijkt er vragend naar en kan er niet bij.](/images/blog/carrousel-alleen-muis.webp)

De categoriepagina's stonden vol carrousels, van "Ontdek de heren categorieën" tot "Nieuwe merken". De pijlen om naar de volgende rij te gaan, verschenen alleen als je er met de muis overheen ging. Voor wie afhankelijk is van het toetsenbord zijn die knoppen niet beschikbaar. Je moet dan door alle items van de carrousel heen tabben voordat je verder kunt. Een muisgebruiker is in twee klikken klaar, een toetsenbordgebruiker tabt zich suf.

Datzelfde gold bij inzoomen. Vergrootte je de pagina naar 200 of 400 procent, iets wat veel slechtziende bezoekers standaard doen, dan verdwenen de navigatieknoppen van diezelfde carrousels helemaal uit beeld. De inhoud was er nog, maar je kon er niet meer bij. Voor een tool die de pagina altijd op honderd procent bekijkt en nooit zelf inzoomt, bestaat dit probleem niet.

## Formulieren die net niet kloppen

Een formulier is waar het geld binnenkomt, en juist daar zaten kleine dingen die een geautomatiseerde testtool laat lopen. Het attribuut is wel aanwezig, alleen klopt de waarde niet, en dat controleert een tool niet.

Het zoekveld in de merkenfilter en het invoerveld in de chat hadden allebei alleen een placeholder als label, dus de grijze hinttekst die verdwijnt zodra je begint te typen. "Je bericht" stond er, en weg was het zodra je iets intypte. Wie even niet meer weet waar het veld voor diende, heeft pech, want er is geen zichtbaar blijvend label om op terug te vallen. Dat treft vooral mensen die wat trager lezen, bijvoorbeeld door dyslexie of een cognitieve beperking.

In het registratieformulier ontbrak bij de velden voor naam en adres het autocomplete-attribuut, waarmee de browser of hulpsoftware die velden automatisch kan invullen. Voor iemand met trillende handen of beperkte motoriek scheelt dat een hoop precieze invoer. De velden werkten, dus de tool was tevreden, maar het hulpmiddel dat het invullen makkelijker maakt ontbrak.

En in de filters zat een subtieler probleem: een selectievakje dat in een link was genest, dus een klikbaar element binnen een ander klikbaar element. Hulpsoftware weet dan niet goed wat ze moet aankondigen of wat er gebeurt als je het activeert. De kleurkiezer op de productpagina was een ander geval: de keuzerondjes voor de kleuren waren niet als groep opgemaakt en hadden geen eigen naam, zodat je wel hoorde dat er rondjes waren, maar niet dat het om een kleurkeuze ging of welke kleur je koos. Allemaal dingen waar een mens met een screenreader binnen een minuut tegenaan loopt, en waar een tool blind voor is.

## Structuur die alleen in beeld bestaat

Koppen, lijsten en de markering van de huidige pagina zijn de houvast waarmee een screenreadergebruiker een pagina overziet. Maar die houvast werkt alleen als de structuur ook echt in de code zit, en niet alleen met wat grotere of vettere letters is nagebootst.

Op meerdere plekken zagen we tekst die er als kop uitzag, bijvoorbeeld "Welkom" boven een menu of "Veelgestelde vragen" in de footer, maar die in de code geen kop was. Soms was zo'n tekst zelfs onderdeel van een lijst, alsof het een gewoon lijstitem was. De rij betaallogo's onderaan, iDEAL, Mastercard, Visa, PayPal, Klarna en de rest, was als achtergrondafbeelding ingeladen zonder tekstalternatief, dus wie de pagina beluistert weet niet welke betaalmethoden er zijn. En in de paginanummering van de zoekresultaten was de huidige pagina alleen vetgedrukt, zonder dat in de code stond dat deze actief was. Allemaal dingen die je met het oog meteen ziet, en die een screenreader compleet mist. Een tool controleert of er een lijst in de code staat, niet of de inhoud die eruitziet als een lijst ook echt als lijst is opgemaakt.

De volgorde waarin de inhoud in de code staat, klopte ook niet altijd met wat je ziet. In de productblokken stond de afbeelding en de hartknop vaak bovenaan in de code, en pas daarna de kop met de productnaam. Wie het beluistert, hoort dus eerst een losse afbeelding en knop voordat duidelijk wordt om welk product het gaat. Voor het oog begint een blok netjes bij de titel, voor de screenreader begint het in het midden.

En soms zit de informatie helemaal niet in de code. Bij de afgeprijsde producten was de oude prijs visueel doorgestreept, zodat je in één oogopslag ziet dat er korting op zit. Die doorhaling was puur opmaak en stond nergens in de HTML. Een screenreadergebruiker hoort dan twee prijzen achter elkaar zonder te weten welke de oude is en welke de nieuwe. Geen tool die daar een vinkje voor uitdeelt of juist weghaalt, want er staat technisch niets fout, er ontbreekt alleen betekenis.

## ARIA die het tegenovergestelde beweert

Hier wordt het ironisch. ARIA is bedoeld om hulpsoftware extra informatie te geven, maar verkeerd toegepast vertelt het juist onwaarheden. En een geautomatiseerde testtool controleert vooral of een attribuut bestaat, niet of het klopt.

Het cookievenster gaf bijvoorbeeld `aria-modal="false truefalse"` mee, een waarde die helemaal niet bestaat. Navigatielinks als "Sale" die je gewoon naar een andere pagina brengen, bevatten een aria-expanded alsof ze een submenu open- en dichtklappen, zodat een screenreader meldt dat er iets uitklapt terwijl dat nooit gebeurt. De zoekbalk die suggesties toont gedroeg zich als een combobox, maar miste de bijbehorende rol en de koppeling met de suggestielijst, waardoor die suggesties voor hulpsoftware onzichtbaar bleven. En knoppen die een venster openen, zoals de bezorgknop of de chatknop, gaven nergens aan dat er een venster opent. Voor een tool is een aanwezig attribuut voldoende. Of het de juiste waarde bevat, kan het niet beoordelen.

## Contrast dat een mens pas ziet als hij erop staat

Contrast is nu juist iets wat een tool kan uitrekenen, dus daar zou je geen verrassingen verwachten. Toch zaten hier bevindingen, en wel omdat een geautomatiseerde testtool alleen meet wat op dat moment op het scherm staat. Een focusindicator zie je pas als je met Tab op het element staat, en een tool doet dat niet.

De sticky knop die de chat opent had een aangepaste focusrand in lichtgrijs op een lichtbeige achtergrond, met een contrast van 1,3 op 1, ruim onder de eis van 3 op 1. Je ziet simpelweg niet dat de knop focus heeft. De randen van de selectievakjes in de filters kwamen uit op 2,4 op 1, ook te licht. Dit zijn precies de gevallen die een geautomatiseerde meting overslaat, omdat de situatie waarin het misgaat nooit wordt opgeroepen.

## Waarom dit het werk van mensen is

Als je de bevindingen op een rij zet, valt op dat ze bijna allemaal in dezelfde categorie vallen: dingen die een machine niet kan beoordelen omdat ze om een oordeel vragen, of die alleen zichtbaar worden als je de site echt gebruikt. Klopt deze naam? Wordt deze wijziging op tijd aangekondigd? Belandt mijn focus op een logische plek? Vertelt dit attribuut de waarheid? Dat zijn geen vinkjes, dat zijn afwegingen.

Daarom toetsen wij elk onderdeel met de hand en beschrijven we elke bevinding per element, niet puur als overtreding van een regel maar met een korte user story vanuit de bezoeker die erop vastloopt. Niet omdat dat mooier leest, maar omdat je pas snapt wat er moet gebeuren als je weet wie er last van heeft en waarom. Een scanrapport met nul fouten geeft je een gerust gevoel. Het zegt alleen niets over de vraag of een blinde bezoeker zijn bestelling kan afronden.

## Webshop? De EAA-monitor helpt je op weg

Voor webshops is dit verschil extra belangrijk geworden. Sinds de European Accessibility Act geldt, moet je e-commerce toegankelijk zijn, en een groen vinkje van een scanner is daarvoor niet genoeg. Wil je zien hoe andere bedrijven dit aanpakken, anoniem je vragen kwijt en de ervaringen van anderen teruglezen, en daarbij meedenken door mensen die dit werk al jaren doen? Kijk dan eens op de [EAA-monitor](https://eaa-monitor.nl). Je staat er niet alleen voor.

## Tot slot

Een automatische scan is een prima eerste filter. Gebruik hem, laat hem meedraaien in je build, ruim op wat hij vindt. Welke scanner je daarvoor kiest maakt minder uit dan je denkt; we zetten uiteen [welke tools je gebruikt om je website op WCAG te testen](/blog/welke-tools-zijn-er-voor-toegankelijkheidstesten/) en wat elke tool laat liggen. Maar ga er niet van uit dat een leeg scanrapport bewijst dat je site toegankelijk is. De ruim honderd bevindingen bij deze webshop zaten allemaal in de hoek die een tool nooit bereikt, en het zijn precies de dingen waar mensen in de praktijk op stranden.

Wil je weten wat een scan op jouw site mist? Wij testen het met de hand, met een screenreader en met het toetsenbord, en je krijgt een rapport waarin per element staat wat er aan de hand is en hoe je het oplost. Bel ons gerust op 085 5055 890, dan kijken we mee.
