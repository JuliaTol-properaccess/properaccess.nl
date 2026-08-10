---
title: "Een toegankelijk WordPress-thema kiezen: waar let je op?"
meta_title: "Toegankelijk WordPress-thema kiezen: 5 tests | Proper Access"
date: 2026-08-13
slug: "toegankelijk-wordpress-thema-kiezen-waar-let-je-op"
categories:
  - "tips-en-tools"
  - "webdeveloper"
tags:
  - "wordpress"
  - "thema"
  - "digitale toegankelijkheid"
  - "wcag"
  - "toetsenbord"
description: "Bouw je je WordPress-website op een kant-en-klaar thema? Met deze 5 tests op de demo zie je vooraf of het thema toegankelijk is, zonder dat je code hoeft te lezen."
keywords:
  - toegankelijk WordPress thema
  - WordPress accessibility
  - WordPress thema kiezen
  - WCAG WordPress
  - toegankelijk thema
image: "/images/blog/wordpress-thema-skiplink.webp"
faqs:
  - question: "Hoe kies je een toegankelijk WordPress-thema?"
    answer: "Maak eerst een shortlist op basis van design en test daarna de demo van het thema, niet de website van de verkoper. Vijf tests: verschijnt er een skiplink als je op Tab drukt, klopt de koppenstructuur, is de hamburgerknop een echte button met een naam en aria-expanded, blijft de focus in het geopende menu, en loopt de focusvolgorde langs elementen die niet in beeld staan."
  - question: "Heeft WordPress een filter voor toegankelijke thema's?"
    answer: "Ja. In de gratis themabibliotheek van WordPress staat onder Weergave, Thema's, Thema toevoegen een Eigenschapsfilter met de optie Toegankelijkheid voorbereid. De selectie is beperkt. Commerciële marktplaatsen zoals ThemeForest hebben geen filter op toegankelijkheid."
  - question: "Hoe test je een WordPress-thema zonder technische kennis?"
    answer: "Open de demo en druk op Tab: verschijnt er een skiplink? Bekijk de koppenstructuur met de WCAG Radar of met HeadingsMap en kijk of er één h1 is en of er geen kopniveaus worden overgeslagen. Zoom in tot het hamburgermenu verschijnt en controleer of het een knop is met een naam. Tab door het geopende menu en kijk of de focus erin blijft. Tab daarna door de hele pagina en kijk of de focus nergens onzichtbaar wordt."
  - question: "Kun je een ontoegankelijk WordPress-thema zelf repareren?"
    answer: "Sommige problemen wel. Een ontbrekende skiplink toevoegen kost weinig werk. Een hamburgerknop die geen echte knop is en een focusvolgorde die langs verborgen sliders loopt vragen om JavaScript-kennis. Bij een gekocht thema komt daar het onderhoud bij: je aanpassingen horen in een child theme, anders verdwijnen ze bij de eerstvolgende update, en na elke update moet je opnieuw testen of je oplossing nog werkt. Vooraf het juiste thema kiezen kost vrijwel altijd minder dan achteraf repareren."
  - question: "Zijn de meeste WordPress-thema's toegankelijk?"
    answer: "Nee. De meeste thema's zakken al bij de eerste tests op toetsenbordnavigatie en koppenstructuur. Thema-ontwikkelaars richten zich vooral op het visuele ontwerp, en de marktplaatsen stellen geen toegankelijkheidseisen."
---

Ik was acht jaar WordPress-ontwikkelaar voordat ik overstapte naar toegankelijkheidsonderzoek. In de meer dan 900 audits die we sinds 2019 hebben gedaan, zit het grootste deel van de problemen al in het thema. Dus in de code die je koopt, en niet in de content die de eigenaar er later in heeft gezet.

Dat is vervelend, want je kiest een thema op hoe het eruitziet. Niemand controleert vooraf of het hamburgermenu met het toetsenbord te bedienen is. Kom je er later achter dat het niet werkt, dan heb je je hele website al in dat thema gebouwd.

## Voor wie dit stuk bedoeld is

Dit gaat over een kant-en-klaar thema dat je koopt of downloadt, van ThemeForest, Elegant Themes, StudioPress of uit de themabibliotheek van WordPress. Je installeert het, je vult het met je eigen content en je past kleuren, lettertypen en blokken aan. De onderliggende HTML en JavaScript blijven van de themamaker.

Dat onderscheid bepaalt wat je met een bevinding kunt. Bouw je de front-end zelf, dan is een hamburgermenu dat de focus niet vasthoudt een taak voor de volgende sprint. Zit je op een gekocht thema, dan zit die code in bestanden die bij de volgende update worden overschreven. Je kunt hem overrulen met een child theme of een eigen script, maar je moet dat wel bij elke update opnieuw controleren.

Daarom is de keuze vooraf hier zoveel belangrijker. Met een thema kies je een ontwerp, en tegelijk kies je de problemen waar je de komende jaren mee werkt.

Bouw je de front-end helemaal zelf, dan kun je de vijf tests hieronder nog steeds als checklist op je eigen werk gebruiken. De strekking van dit artikel gaat voor jou niet op: jij kunt elk van deze punten zelf oplossen zodra je het vindt.

## In het kort

- Test altijd de demo van het thema, niet de website van de verkoper.
- Vijf tests: skiplink, koppenstructuur, de hamburgerknop, de focus in het menu, en de focusvolgorde over de pagina.
- De meeste thema's zakken al bij test 1 of 2.
- Voor test 2, 3 en 5 gebruik je onze gratis [WCAG Radar](/tools/wcag-radar/), dan hoef je geen code te lezen.
- Wat het thema fout doet, staat in bestanden die je bij een update kwijtraakt. Kiezen is daarom goedkoper dan repareren.

Hieronder staat het proces dat ik zou doorlopen als ik vandaag een thema moest kiezen. Je hebt er een browser voor nodig en een kwartier tijd.

## Stap 1: waar zoek je

### De themabibliotheek van WordPress

Ga in je WordPress-beheeromgeving naar Weergave, dan Thema's, dan Thema toevoegen. Daar staat een Eigenschapsfilter met de optie **Toegankelijkheid voorbereid**. Dat klinkt goed.

In de praktijk houd je een handvol thema's over met vrij eenvoudige ontwerpen. Het label betekent dat het thema een review heeft doorlopen op een aantal toegankelijkheidseisen. Het is geen garantie dat alles klopt.

### Commerciële marktplaatsen

De meeste bedrijven kopen hun thema bij ThemeForest, Elegant Themes of StudioPress. Daar staan duizenden professioneel vormgegeven thema's. Alleen: geen van die marktplaatsen heeft een filter op toegankelijkheid. Je kunt filteren op branche, op stijl en op kleurenschema, en niet op of het thema met een toetsenbord werkt.

Je zult dus zelf moeten testen.

## Stap 2: maak een shortlist op design

Kies 5 tot 10 thema's die je aanspreken en die passen bij wat je nodig hebt. Een thema mag er ook gewoon goed uitzien.

Open daarna de demo van het thema. Dus niet de website van de partij die het thema verkoopt: daar is meestal veel extra aandacht aan besteed, en die is niet representatief voor wat je krijgt na installatie. Je wilt de standaarddemo zien, met de voorbeeldcontent die erbij zit.

Nu ga je testen. Vijf keer, zonder dat je een regel code hoeft te begrijpen.

## Test 1: de skiplink

Dit is de snelste test en meteen de meest veelzeggende.

![](/images/blog/wordpress-thema-skiplink.webp)

Open de demo. Klik nergens op de pagina. Druk één keer op de Tab-toets.

Is het thema goed gebouwd, dan verschijnt er linksboven een link met een tekst als "Ga naar inhoud" of "Skip to content". Die link is er voor mensen die met het toetsenbord navigeren. Ze springen daarmee direct naar de hoofdinhoud, zonder eerst door het hele menu te tabben.

Verschijnt er niets? Dan heeft de ontwikkelaar niet aan toetsenbordgebruikers gedacht. Dat zegt genoeg over de rest van het thema.

## Test 2: de koppenstructuur

Deze test laat zien hoe zorgvuldig het thema in elkaar zit.

![](/images/blog/wordpress-thema-koppenstructuur.webp)

Start onze gratis [WCAG Radar](/tools/wcag-radar/) op de demo en open het tabblad Redactie. Je ziet dan de koppen van de pagina op volgorde, met hun niveau erbij. De browserextensie HeadingsMap voor Chrome en Firefox doet hetzelfde.

Kijk naar twee dingen:

- **Staat er precies één h1?** De h1 is de hoofdkop van de pagina. Er hoort er één te zijn. Zie je er twee of drie, of is de h1 de naam van de site in plaats van de titel van de pagina, dan klopt de structuur niet.
- **Worden er niveaus overgeslagen?** Na een h2 hoort een h3 te komen, geen h5. Een screenreadergebruiker hoort bij zo'n sprong dat er een niveau ontbreekt en gaat zoeken naar iets wat er niet is.

Een thema met een rommelige koppenstructuur is bijna altijd ook op andere punten slordig gebouwd. Let de ontwikkelaar hier niet op, dan is de kans klein dat de rest wel klopt.

## Test 3: de hamburgerknop

Hier valt het grootste deel van de thema's af.

![](/images/blog/wordpress-thema-hamburgerknop.webp)

Zoom in op de pagina met Ctrl en + op Windows of Cmd en + op de Mac, tot het gewone menu verdwijnt en er een hamburgericoon verschijnt. Dat is het menu dat bezoekers op hun telefoon zien.

Ga met de WCAG Radar naar het tabblad Developer en beweeg je muis over het icoon. Je ziet dan de rol, de toegankelijke naam en de aria-attributen van dat element. Drie dingen moeten kloppen:

- **Het is een knop.** Staat er een rol als generic of geen rol, dan is het waarschijnlijk een `div` of een `span` met een klikfunctie erop. Een screenreader herkent dat niet als iets waar je op kunt klikken en een toetsenbordgebruiker bereikt het niet.
- **De knop heeft een naam.** Zoek naar "Menu" of "Navigatie" in de toegankelijke naam. Zie je alleen een icoon zonder tekst, dan kondigt een screenreader alleen "knop" aan, of helemaal niets.
- **Er staat `aria-expanded` op.** Dat attribuut vertelt hulpsoftware of het menu open of dicht staat. Ontbreekt het, dan weet een screenreadergebruiker na een klik niet of er iets is opengegaan.

Wil je liever zonder tool werken: klik met de rechtermuisknop op het icoon en kies Inspecteren. Je zoekt dan naar hetzelfde in de code.

## Test 4: het toetsenbord in het geopende menu

Open het hamburgermenu met een klik. Druk daarna herhaaldelijk op Tab.

Let op twee dingen:

- **Komt de focus in het menu terecht?** Na het openen zou Tab je langs de menu-items moeten voeren. Springt de focus naar elementen achter het menu, dan is het menu niet goed gebouwd.
- **Blijft de focus in het menu?** Tab je langs het laatste menu-item, dan hoort de focus terug te gaan naar het begin van het menu, totdat je het sluit. Loopt de focus door naar de rest van de pagina terwijl het menu nog openstaat, dan kunnen toetsenbordgebruikers het menu niet bedienen.

Dit is een van de bevindingen die we het vaakst opschrijven. Repareren kan alleen door de JavaScript van het thema aan te passen, en dat is precies het bestand dat bij de volgende update van de themamaker wordt overschreven.

## Test 5: de focusvolgorde

![](/images/blog/wordpress-thema-focusvolgorde.webp)

Tab van boven naar beneden door de hele pagina. Let op of de focus langs interactieve elementen komt die op dat moment niet in beeld staan.

Dat gebeurt vaker dan je zou denken. Veel thema's hebben sliders, tabbladen of ingeklapte secties waarvan de elementen wel in de code staan, maar niet zichtbaar zijn. Tab je door de pagina, dan verspringt de focus naar die elementen. Op je scherm gebeurt er niets, terwijl de focuspositie wel verschuift. Wie alleen het toetsenbord gebruikt, weet op dat moment niet waar de focus staat en niet hoeveel keer hij nog moet drukken om verder te komen.

Met de WCAG Radar zie je dit in één keer: het tabblad Developer nummert elk focusbaar element in tabvolgorde. Staan er nummers op plekken waar niets te zien is, dan zit daar verborgen content.

## Wat zeggen de resultaten

In de praktijk zakken de meeste thema's al bij test 1 of 2.

Doorstaat een thema alle vijf de tests, dan heb je een goede basis. Perfect toegankelijk is het daarmee niet: er zijn tientallen andere dingen die fout kunnen zitten. Het betekent wel dat de ontwikkelaar aan toegankelijkheid heeft gedacht en dat de fundamenten kloppen.

Zakt een thema op één of twee punten, dan is de vraag of je het zelf oplost. Een skiplink toevoegen kost weinig werk. Een hamburgerknop die geen echte knop is vraagt om JavaScript-kennis. Aan een focusvolgorde die langs een slider of tabbladen loopt, ben je dagen bezig, en je weet vooraf niet hoe het thema op je aanpassingen reageert.

Reken bij die afweging het onderhoud mee. Je aanpassingen horen in een child theme of in een eigen script, anders verdwijnen ze bij de eerstvolgende update van de themamaker. En ook mét een child theme moet je na elke update opnieuw testen of je oplossing nog werkt, want de themamaker kan de opbouw van het menu of de slider hebben gewijzigd. Eén ontbrekende skiplink is dat waard. Vijf losse reparaties op de knoppen en de focus meestal niet.

## De conclusie

Zoek je een WordPress-thema dat uit de doos niet ontoegankelijk is, dan ben je lang bezig.

De meeste thema-ontwikkelaars zien toegankelijkheid niet als prioriteit. Ze bouwen voor het visuele ontwerp en testen niet met een toetsenbord. En de marktplaatsen waar je het thema koopt, stellen geen eisen.

Dat laat je drie opties:

1. Kies het thema dat het dichtst in de buurt komt en los de resterende problemen op in een child theme, of laat ze oplossen.
2. Stap af van een kant-en-klaar thema en laat er een op maat bouwen door een ontwikkelaar die verstand heeft van toegankelijkheid. Dan zit de code in je eigen beheer.
3. Laat een thema onderzoeken voordat je er je hele website in bouwt. Dat kost minder dan achteraf alles aanpassen.

Wij onderzoeken regelmatig thema's en templates voor bedrijven die de keuze willen maken voordat ze investeren. Een halve dag testen vooraf scheelt weken repareren achteraf.

## Veelgestelde vragen

### Hoe kies je een toegankelijk WordPress-thema?

Maak eerst een shortlist op design en test daarna de demo van het thema, niet de website van de verkoper. Loop de vijf tests hierboven af: skiplink, koppenstructuur, de hamburgerknop, de focus in het geopende menu, en de focusvolgorde over de pagina.

### Heeft WordPress een filter voor toegankelijke thema's?

Ja, in de gratis themabibliotheek staat het Eigenschapsfilter met de optie Toegankelijkheid voorbereid. De selectie is beperkt. Commerciële marktplaatsen zoals ThemeForest hebben geen filter op toegankelijkheid.

### Kun je een ontoegankelijk thema zelf repareren?

Een ontbrekende skiplink toevoegen lukt meestal wel. Een hamburgerknop die geen echte knop is en een focusvolgorde die langs verborgen sliders loopt vragen om JavaScript-kennis, en je weet vooraf niet hoe het thema op je aanpassing reageert.

### Zijn de meeste WordPress-thema's toegankelijk?

Nee. De meeste zakken al bij de eerste tests op toetsenbordnavigatie en koppenstructuur.

## Zelf aan de slag

Wil je je huidige thema nakijken, dan kun je de vijf tests hierboven vandaag zelf doen met de gratis [WCAG Radar](/tools/wcag-radar/). Die draait volledig in je browser en stuurt niets door.

Wil je liever dat iemand met auditervaring ernaar kijkt voordat je een thema kiest? Bekijk dan de [mini-audit](/quickscan-digitale-toegankelijkheid/) of [neem contact op](/contact/).
