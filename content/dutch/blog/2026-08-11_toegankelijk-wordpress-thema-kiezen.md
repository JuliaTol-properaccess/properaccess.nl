---
title: "Een toegankelijk WordPress-thema kiezen: waar let je op?"
meta_title: "Toegankelijk WordPress-thema kiezen: 5 tests | Proper Access"
date: 2026-08-11
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
    answer: "Maak eerst een shortlist op basis van design en test daarna de demo van het thema, niet de website van de verkoper. Vijf tests: verschijnt er een skiplink als je op Tab drukt, staan alle koppen als kop gemarkeerd en klopt de opbouw, is de hamburgerknop een echte knop met een naam en aria-expanded, blijft de focus in het geopende menu, en zijn alle interactieve elementen op de pagina met het toetsenbord te bedienen."
  - question: "Heeft WordPress een filter voor toegankelijke thema's?"
    answer: "Ja. In de gratis themabibliotheek van WordPress staat onder Weergave, Thema's, Thema toevoegen een Eigenschapsfilter met de optie Toegankelijkheid voorbereid. De selectie is beperkt. Commerciële marktplaatsen zoals ThemeForest hebben geen filter op toegankelijkheid."
  - question: "Hoe test je een WordPress-thema zonder technische kennis?"
    answer: "Open de demo en druk op Tab: verschijnt er een skiplink? Bekijk de koppen met de WCAG Radar en kijk of elke kop een blokje met h1 tot en met h6 krijgt en of de opbouw klopt. Zoom in tot het hamburgermenu verschijnt en controleer met de Radar of het een knop is met een naam en met aria-expanded. Tab door het geopende menu en kijk of de focus erin blijft. Tab daarna door de hele pagina en kijk of alles met het toetsenbord te bedienen is."
  - question: "Kun je een ontoegankelijk WordPress-thema zelf repareren?"
    answer: "Sommige problemen wel. Een ontbrekende skiplink toevoegen kost weinig werk. Een hamburgerknop die geen echte knop is en een focusvolgorde die langs verborgen sliders loopt vragen om JavaScript-kennis. Bij een gekocht thema komt daar het onderhoud bij: je aanpassingen horen in een child theme, anders verdwijnen ze bij de eerstvolgende update, en na elke update moet je opnieuw testen of je oplossing nog werkt. Vooraf het juiste thema kiezen kost vrijwel altijd minder dan achteraf repareren."
  - question: "Zijn de meeste WordPress-thema's toegankelijk?"
    answer: "Nee. De meeste thema's zakken al bij de eerste tests op toetsenbordnavigatie en koppenstructuur. Thema-ontwikkelaars richten zich vooral op het visuele ontwerp, en de marktplaatsen stellen geen toegankelijkheidseisen."
---

Ik was acht jaar WordPress-ontwikkelaar voordat ik overstapte naar toegankelijkheidsonderzoek. In de meer dan 900 audits die mijn team onder mijn begeleiding sinds 2019 heeft gedaan, zien we dat de meeste ontoegankelijke elementen al in het thema zitten. Dus in de code die je koopt, en niet in de content die je er als eigenaar later in hebt gezet.

Dat is vervelend, want je kiest een thema op hoe het eruitziet. Weinig mensen weten waar ze bij die keuze op moeten letten. Kom je er later achter dat iets niet werkt, dan heb je je hele website al in dat thema gebouwd.

## Voor wie dit stuk bedoeld is

Dit artikel gaat over een kant-en-klaar thema dat je koopt of downloadt, van een commerciële bron of uit de themabibliotheek van WordPress. Je installeert het, je vult het met je eigen content en je past kleuren, lettertypen en blokken aan. De onderliggende HTML en JavaScript blijven van de themamaker.

Dat onderscheid bepaalt wat je met een bevinding kunt. Bouw je de front-end zelf, dan pas je de broncode gewoon aan. Zit je op een gekocht thema, dan staat die code in bestanden die je niet zomaar kunt wijzigen. Je kunt hem overrulen met een child theme of een eigen script, maar dat kost werk en onderhoud, en soms is de wijziging technisch niet eens mogelijk.

Daarom is de keuze vooraf hier zoveel belangrijker. Met een thema kies je een ontwerp, en tegelijk kies je de problemen waar je de komende jaren mee werkt.

Bouw je de front-end helemaal zelf, dan kun je de vijf tests hieronder nog steeds als checklist op je eigen werk gebruiken. De strekking van dit artikel gaat voor jou niet op: jij kunt elk van deze punten zelf oplossen zodra je het vindt.

## In het kort

- Test altijd de demo van het thema, niet de website van de verkoper.
- Vijf tests: skiplink, koppenstructuur, de hamburgerknop, de focusvolgorde en toetsenbordtoegankelijkheid.
- Voor test 2, 3, 4 en 5 gebruik je onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar), dan hoef je geen code te lezen.
- Externe plugins en widgets laat ik buiten beschouwing, ook al maken die je website vaak leuker en ingewikkelder.

Hieronder staat het proces dat ik zou doorlopen als ik vandaag een nieuw thema moest kiezen. Je hebt er een browser voor nodig en een kwartier tijd.

## Stap 1: waar zoek je

### De themabibliotheek van WordPress

Ga in je WordPress-beheeromgeving naar Weergave, dan Thema's, dan Thema toevoegen. Daar staat een Eigenschapsfilter met de optie **Toegankelijkheid voorbereid**. Dat is een goed begin.

In de praktijk houd je een handvol thema's over met vrij eenvoudige ontwerpen. Het label betekent dat het thema een review heeft doorlopen op **een aantal** toegankelijkheidseisen. Het is helaas niet altijd een garantie dat het thema volledig voldoet.

Let ook op welke versie van WCAG er wordt bedoeld. De geldende standaard is in 2026 WCAG 2.1 op niveau AA. Sommige thema's zijn alleen getest op niveau A.

### Commerciële marktplaatsen

De meeste bedrijven kopen hun thema bij ThemeForest, Elegant Themes of StudioPress. Daar staan duizenden professioneel vormgegeven thema's. Alleen: geen van die marktplaatsen heeft een filter op toegankelijkheid. Je kunt filteren op branche, op stijl en op kleurenschema, en niet op of het thema met een toetsenbord werkt.

Je zult dus zelf moeten testen.

## Stap 2: maak een shortlist op design

Kies 5 tot 10 thema's die je aanspreken en die passen bij wat je nodig hebt. Een thema mag er ook gewoon goed uitzien.

Open daarna **de demo van het thema**. Dus niet de website van de partij die het thema verkoopt: daar is meestal veel extra aandacht aan besteed, en die is niet representatief voor wat je krijgt na installatie. Je wilt de standaarddemo zien, met de voorbeeldcontent die erbij zit.

Nu ga je testen. Vijf keer, zonder dat je een regel code hoeft te begrijpen.

## Test 1: de skiplink

Dit is de snelste test en meteen de meest veelzeggende.

![Twee browservensters naast elkaar. Links verschijnt na Tab linksboven een magenta link "Ga naar inhoud", met een vinkje: de skiplink verschijnt. Rechts verschijnt niets en staat de focus op het eerste menu-item, met een kruisje: geen skiplink.](/images/blog/wordpress-thema-skiplink.webp)

Open de demo. Klik in de adresbalk van de browser. Druk op de Tab-toets totdat de focus in de webpagina komt.

Is het thema goed gebouwd, dan verschijnt er linksboven een link met een tekst als "Ga naar inhoud" of "Skip to content". Die link is er voor iedereen die zonder muis navigeert: mensen met een motorische beperking, en mensen die een schermlezer gebruiken. Ze springen met deze link direct naar de hoofdinhoud, zonder eerst met de Tab-toets door het hele menu te gaan.

Verschijnt er niets? Dan heeft de ontwikkelaar niet aan toetsenbordgebruikers gedacht.

## Test 2: de koppenstructuur

Deze test laat zien hoe zorgvuldig het thema in elkaar zit.

![Twee panelen met de koppen van een pagina. Links een rommelige structuur met twee h1's, een h5 na een h2 met "h3 en h4 overgeslagen", en vette tekst zonder kop, gemarkeerd met een kruisje. Rechts een nette volgorde h1, h2, h3, h3, h2, h3, met een vinkje.](/images/blog/wordpress-thema-koppenstructuur.webp)

Start onze gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) op de demo en open het tabblad Redactie. Je ziet dan de koppen van de pagina op volgorde, met hun niveau erbij.

Kijk naar twee dingen:

- **Zijn alle koppen ook echt als kop gemarkeerd?** Kijk vooral in de voettekst en de zijkolom. Elke tekst die eruitziet als een kop en inhoudelijk een kop is, hoort in de Radar een blokje te krijgen met h1 tot en met h6. Ontbreekt dat blokje, dan is het gewoon dikgedrukte tekst.
- **Klopt de opbouw?** Er hoort één h1 op de pagina te staan, en die hoort de titel van de pagina te zijn, niet de naam van de site. Na een h2 komt een h3, geen h5. Bij zo'n sprong hoort een screenreadergebruiker dat er een niveau ontbreekt en gaat die zoeken naar iets wat er niet is.

Koppen zijn belangrijk voor mensen die niet kunnen zien en via koppen door de webpagina navigeren. Ook Google en AI gebruiken koppen om te begrijpen waar je pagina over gaat. Dat heeft invloed op de vindbaarheid van je website.

## Test 3: de hamburgerknop

Hier valt het grootste deel van de thema's af.

![Twee panelen over de hamburgerknop in een themademo. Links: rol generic, naam leeg, aria-expanded ontbreekt, alle drie met een kruisje, geen echte knop. Rechts: rol button, naam Menu, aria-expanded false, alle drie met een vinkje, wel een echte knop.](/images/blog/wordpress-thema-hamburgerknop.webp)

Zoom in op de pagina met Ctrl en + op Windows of Cmd en + op de Mac, tot het gewone menu verdwijnt en er een hamburgericoon verschijnt. Dat is het menu dat bezoekers op hun telefoon zien.

Ga met de WCAG Radar naar het tabblad Developer en beweeg je muis over het icoon. Je ziet dan de rol, de toegankelijke naam en de aria-attributen van dat element. Drie dingen moeten kloppen:

- **Het is een knop.** Staat er een rol als generic, of helemaal geen rol, dan herkent een screenreader het niet als iets waar je op kunt klikken of drukken. Een blinde bezoeker weet dan niet dat dit element klikbaar is.
- **De knop heeft een naam.** Kies de optie **Toegankelijke naam** in de WCAG Radar en let op woorden als "Menu" of "Navigatie". Zie je alleen een icoon zonder tekst, dan kondigt een screenreader alleen "knop" aan, of helemaal niets.
- **Er staat `aria-expanded` op.** De optie **Element info bij hover** op het tabblad Developer laat zien of dat attribuut aanwezig is. Het vertelt hulpsoftware of het menu open of dicht staat. Ontbreekt het, dan weet een screenreadergebruiker na een klik niet of er iets is opengegaan.

Wil je liever zonder tool werken: klik met de rechtermuisknop op het icoon en kies Inspecteren. Je zoekt dan naar hetzelfde in de code.

## Test 4: de focusvolgorde

Open het hamburgermenu met een klik. Druk daarna herhaaldelijk op de Tab-toets.

Let op twee dingen:

- **Komt de focus in het menu terecht?** Na het openen zou Tab je langs de menu-items moeten voeren. Springt de focus naar elementen achter het menu, dan is het menu niet goed gebouwd.
- **Blijft de focus in het menu?** Tab je langs het laatste menu-item, dan hoort de focus terug te gaan naar het begin van het menu, totdat je het sluit. Loopt de focus door naar de rest van de pagina terwijl het menu nog openstaat, dan kunnen toetsenbordgebruikers het menu niet bedienen.

Wil je het zwart op wit zien: het tabblad Developer van de WCAG Radar nummert elk focusbaar element in tabvolgorde. Staat het menu open en lopen de nummers gewoon door over de pagina erachter, dan houdt het menu de focus niet vast.

Dit is een van de bevindingen die we het vaakst opschrijven. Repareren kan alleen door de JavaScript van het thema aan te passen, en dat is precies het bestand dat bij de volgende update van de themamaker wordt overschreven.

## Test 5: toetsenbordbediening

![Een browservenster met genummerde focusstops. Stops 1, 2 en 3 staan op zichtbare menu-items, stops 4 en 5 in een gestippeld kader "slider buiten beeld", stop 6 op een zichtbare knop "Lees verder". De focus loopt langs elementen die je niet ziet.](/images/blog/wordpress-thema-focusvolgorde.webp)

Tab van boven naar beneden door de hele pagina. Let op of alle interactieve elementen focus krijgen en met het toetsenbord te bedienen zijn: links, knoppen, invoervelden, sliders en uitklapbare onderdelen.

Dit gaat vaker mis dan je zou denken. Veel thema's hebben sliders, tabbladen of ingeklapte secties waarvan de elementen wel in de code staan, maar niet zichtbaar zijn. Wie alleen het toetsenbord gebruikt, moet hetzelfde kunnen doen als iemand met een muis.

Ook hier helpt de nummering in de WCAG Radar. Krijg je een nummer te zien op een plek waar niets staat, dan zit daar verborgen content waar de focus wel langsgaat.

## Wat zeggen de resultaten

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

Maak eerst een shortlist op design en test daarna de demo van het thema, niet de website van de verkoper. Loop de vijf tests hierboven af: skiplink, koppenstructuur, de hamburgerknop, de focusvolgorde, en de toetsenbordtoegankelijkheid.

### Heeft WordPress een filter voor toegankelijke thema's?

Ja, in de gratis themabibliotheek staat het Eigenschapsfilter met de optie Toegankelijkheid voorbereid. De selectie is beperkt. Commerciële marktplaatsen zoals ThemeForest hebben geen filter op toegankelijkheid, stand augustus 2026.

### Kun je een ontoegankelijk thema zelf repareren?

Een ontbrekende skiplink toevoegen lukt meestal wel. Een hamburgerknop die geen echte knop is en een focusvolgorde die langs verborgen sliders loopt vragen om JavaScript-kennis, en je weet vooraf niet hoe het thema op je aanpassing reageert. Het is zelden een duurzame oplossing.

### Zijn de meeste WordPress-thema's toegankelijk?

Nee, de commerciële thema's die je voor 60 tot 80 dollar koopt zijn dat niet. De meeste zakken al bij de eerste tests op toetsenbordnavigatie en koppenstructuur. Ken je een commercieel thema dat wel toegankelijk is? Laat het ons weten, we delen die kennis graag met onze lezers.

## Zelf aan de slag

Wil je je huidige thema nakijken, dan kun je de vijf tests hierboven vandaag zelf doen met de gratis [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar). Die draait volledig in je browser en stuurt niets door.

Wil je liever dat iemand met auditervaring ernaar kijkt voordat je een thema kiest? Bekijk dan de [mini-audit](/webshop-quickscan/) of [neem contact op](/contact/).
