---
title: "Voldoen aan WCAG is niet hetzelfde als toegankelijk zijn"
date: 2026-06-24
slug: "voldoen-aan-wcag-is-niet-hetzelfde-als-toegankelijk"
categories:
  - "wcag-uitgelegd"
  - "webredactie"
tags:
  - "wcag"
  - "toegankelijkheid"
  - "screenreader"
  - "gebruikerstest"
  - "alt-tekst"
  - "acm"
description: "De ACM zegt het zelf: toegankelijkheid gaat niet alleen om de techniek. Een site kan 0 bevindingen hebben volgens WCAG en alsnog onbruikbaar zijn. Een rondje langs de gevallen waarin voldoen en echt kunnen gebruiken uit elkaar lopen."
keywords:
  - "wcag voldoen niet toegankelijk"
  - "acm toegankelijkheid techniek gebruikers"
  - "marketing alt-tekst"
  - "aria-live screenreader"
  - "toegankelijkheid testen met gebruikers"
image: "/images/blog/wcag-voldoen-niet-toegankelijk.png"
---

Op 22 juni berichtte de NOS dat webwinkels in Nederland toegankelijker worden voor mensen met een visuele beperking, maar dat er nog veel werk nodig is. Je leest het hele bericht bij [de NOS](https://nos.nl/artikel/2619726-webshops-beter-toegankelijk-voor-slechtzienden-maar-nog-veel-werk-nodig).

Het meest opvallende in dat bericht was voor ons niet een cijfer, maar een uitspraak. Martijn Ridderbos, bestuurslid van de Autoriteit Consument en Markt (ACM), benadrukt dat het bij toegankelijkheid niet alleen om de techniek gaat. Het gaat erom of iemand in de praktijk daadwerkelijk door je site heen komt. Test daarom met echte gebruikers, en kijk niet alleen of de code technisch klopt.

![Een scanrapport met als uitkomst 0 fouten en de melding dat er geen afwijkingen zijn gevonden.](/images/blog/wcag-rapport-0-fouten.webp)

Dat vonden we een rake observatie. Want het verklaart iets wat we in ons werk steeds opnieuw zien: een website kan een rapport hebben met 0 bevindingen volgens WCAG en tegelijk niet prettig in gebruik zijn. Om te laten zien hoe dat er in de praktijk uitziet, verzamelden we een aantal voorbeelden.

## Alt-teksten die je dubbel hoort

Informatieve afbeeldingen horen een alt-tekst te hebben, en op een goede webshop hebben ze die ook. Een kloppende alt-tekst levert geen WCAG-fout op. Toch kan het de ervaring in de weg zitten.

Neem een productoverzicht waar elke foto een nette, kloppende alt-tekst heeft, bijvoorbeeld "blauwe linnen jurk met bloemenprint". Daar is niets mis mee. Alleen staat precies diezelfde tekst er als zichtbare productnaam vlak naast. Wie de pagina beluistert, hoort elk product dus twee keer: een keer als productnaam en een keer als alt-tekst. Op een pagina vol producten wordt het overzicht waar je doorheen wilde scannen zo een lange herhaling. Vaak staat die alt-tekst er voor de marketing of de SEO, om het trefwoord nog een keer op de pagina te krijgen. De alt-teksten kloppen allemaal, en toch had het prettiger gekund.

## Te veel van het goede

Koppen helpen bezoekers navigeren. Veel screenreadergebruikers springen van kop naar kop om snel een pagina te overzien. Maar een pagina met een stapel koppen op hetzelfde niveau levert een eindeloze lijst op waarin je het overzicht juist kwijtraakt.

Hetzelfde geldt voor verborgen koppen. Koppen geven secties van een pagina een naam, bijvoorbeeld om verschillende navigaties van elkaar te onderscheiden, en een visueel verborgen kop kan daarbij helpen. Maar als hulpmiddel pakt het soms verkeerd uit. Zo staat er weleens vlak voor een invoerveld een visueel verborgen kop die exact hetzelfde zegt als het zichtbare label. De screenreader leest dan: "Kop Kaartnummer. Invoerveld Kaartnummer." Twee keer zo veel woorden, en bij een betaalformulier word je daar onzeker van in plaats van geholpen.

![Drie productkaartjes naast elkaar. Bij het middelste kaartje zijn de afbeelding, de productnaam en het hartje-icoon elk een aparte link naar dezelfde productpagina.](/images/blog/wcag-productkaartjes-meerdere-links.webp)

En dan zijn er productkaartjes die uit meerdere links bestaan die naar hetzelfde doel verwijzen. Denk aan een productafbeelding, de productnaam en een icoon, elk in een eigen link verpakt, allemaal naar dezelfde productpagina. Voor wie de pagina ziet is het één kaartje. Voor wie het beluistert, zijn het meerdere keren dezelfde link achter elkaar.

## Contrast precies op de grens

De norm voor tekstcontrast is 4,5:1. Een kleurencombinatie die precies op 4,5:1 uitkomt, haalt het en levert dus geen bevinding op. Maar bij een dunne letter of een klein lettertype is diezelfde tekst alsnog moeilijk te lezen. De grenswaarde is een minimum, geen garantie dat het prettig leest. Voldoen en prettig kunnen lezen zijn niet hetzelfde.

Wil je je eigen kleurencombinaties controleren? Met onze gratis [WCAG Radar](/tools/wcag-radar/) zie je meteen of je aan de norm voldoet.

## Aanraakdoelen precies op 24 pixels

Sinds WCAG 2.2 geldt succescriterium 2.5.8 op niveau AA: aanraakdoelen zoals knoppen en links moeten minstens 24 bij 24 CSS-pixels groot zijn. Een knop die precies op 24 pixels uitkomt, haalt de norm en levert geen bevinding op.

![Een telefoonscherm met een rij heel kleine knoppen die dicht op elkaar staan. Een vingertop raakt er per ongeluk twee tegelijk.](/images/blog/wcag-knoppen-te-dicht.webp)

Alleen is 24 pixels klein. Op een telefoon is zo'n knopje priegelig om te raken, zeker als je een motorische beperking hebt of trillende handen. De ruimere maat van 44 bij 44 pixels uit succescriterium 2.5.5 zou een stuk prettiger zijn. Een knop die exact 24 pixels haalt, vinkt het vakje af en is alsnog frustrerend.

## Een schermlezer die maar blijft praten

Met aria-live kun je een screenreader laten melden dat er iets op de pagina is veranderd. Heel nuttig, mits je het spaarzaam inzet. Gebeurt dat niet, dan krijg je het tegenovergestelde van toegankelijk.

![Iemand met een koptelefoon wordt overspoeld door meldingen. In de grootste tekstballon staat "Nog 3 minuten 55 seconden".](/images/blog/wcag-schermlezer-blijft-praten.webp)

Een paar voorbeelden die we tegenkwamen. Een afteltimer die zichzelf laat voorlezen: je probeert de tekst op de pagina te lezen en de stem onderbreekt je steeds met "Nog 4 minuten. Nog 3 minuten 55 seconden." Of een filtergroep met een knop "Toon meer", waarbij elke nieuwe optie hardop wordt opgesomd zodra je hem indrukt. Je zoekt één vinkje en krijgt een waterval aan tekst over je heen.

De vervelendste variant zit op zoekpagina's zonder zoekknop, waar de resultaten meteen verversen zodra je een filter aanpast. Verander je één vinkje, dan leest de schermlezer alle nieuwe resultaten voor, terwijl je misschien nog niet eens klaar bent met filteren. Eén korte melding zou genoeg zijn geweest: "15 producten gevonden." In plaats daarvan moet de bezoeker de stem telkens handmatig stilzetten. Goedbedoeld, en in de praktijk niet te doen.

## Captcha's met een audio-alternatief

Een visuele captcha sluit iedereen buiten die de afbeelding niet kan zien. WCAG vraagt daarom om een alternatief voor een ander zintuig, bijvoorbeeld een audioversie. Staat die audioversie er, dan is aan de regel voldaan.

![Een captcha met vervormde tekst en een audioknop die rommelige geluidsgolven uitzendt. Een luisteraar met koptelefoon kijkt vragend.](/images/blog/wcag-captcha-audio.webp)

Alleen lost dat in de praktijk lang niet alles op. Veel audio-captcha's zetten zoveel ruis en gekraak over de stem dat de cijfers en letters lastig te volgen zijn. Het alternatief is er, precies zoals de richtlijn vraagt, en toch is het zwoegen. En ook een nettere captcha blijft een drempel: je moet eerst een opgave oplossen voordat je verder mag, en dat is voor niemand het prettigste deel van een bezoek.

## Geen skiplink, alleen landmarks

Een skiplink is de link waarmee je in één keer voorbij het menu naar de hoofdinhoud springt. Handig, maar niet verplicht. Heeft een pagina een duidelijke koppenstructuur en goede landmarks, dan voldoe je aan WCAG.

Toch is dat geen gelijkwaardig alternatief. Het gaat niet om de grootte van de site. Niet iedereen kan via landmarks navigeren, dus voor een deel van je bezoekers is die route simpelweg geen oplossing. Een skiplink werkt voor iedereen, en die wil je echt op je website hebben. Het ontbreken ervan levert geen bevinding op, en toch mis je er een hulpmiddel mee dat je bezoekers veel werk bespaart.

## Een widget waar je doorheen moet tabben

![Een webpagina met een ingesloten widget vol kleine knoppen en iconen, en een toetsenbordpad dat zich er met veel stappen doorheen wurmt.](/images/blog/wcag-drukke-widget.webp)

Nog zoiets zie je bij een ingesloten widget met veel interactieve elementen, zoals een socialmediawidget of een interactieve presentatie. Wie de muis niet kan gebruiken, moet soms heel vaak op de Tab-toets drukken om aan dit monster te ontsnappen. Je komt er wel uit, maar het kost je een hoop toetsaanslagen.

## Een logische focusvolgorde die toch onhandig is

Wie met het toetsenbord werkt, springt met de tab-toets van element naar element. WCAG 2.4.3 vraagt dat die volgorde de betekenis en de bediening van de pagina volgt. Komt de focus in een logische volgorde, dan klopt het en is er geen bevinding.

![Een webpagina waarbij het toetsenbordpad eerst door alle inhoud naar beneden loopt en het menu pas onderaan bereikt.](/images/blog/wcag-focus-menu-onderaan.webp)

Maar logisch is niet hetzelfde als handig. Neem een pagina waar de navigatie pas onderaan in de broncode staat. De focusvolgorde sluit netjes aan op de broncode, dus formeel is alles in orde. Alleen moet je je eerst door de hele pagina heen tabben voordat je bij het menu bent. Wil je naar een ander onderdeel, dan ben je een lange reeks tab-aanslagen verder. Het voldoet, en toch ben je veel langer onderweg dan nodig.

## Taal waar je doorheen moet ploegen

Een laatste voorbeeld dat geen enkele scan en geen enkel succescriterium op AA-niveau afvangt: loodzware taal. WCAG stelt op niveau AA geen eisen aan hoe makkelijk een tekst leest. Lange zinnen, ambtelijke formuleringen en vakjargon zonder uitleg leveren dus geen bevinding op. De pagina voldoet.

Maar voor een groot deel van je bezoekers gaat het juist hier mis. Wie laaggeletterd is of door een beperking moeite heeft met ingewikkelde tekst, haakt af bij een muur van moeilijke woorden. Een site is pas toegankelijk als mensen ook begrijpen wat er staat. Er bestaan hulpmiddelen die tekst voorlezen of vereenvoudigen, maar de grootste winst zit in helder schrijven vanaf het begin. En dat helpt iedereen: een duidelijke zin lees je sneller. Wil je weten welke hulpmiddelen wij aanraden? Neem contact op met Phi via info@properaccess.nl.

## De groep die het vaakst wordt vergeten

Veel van wat WCAG goed afdekt, gaat over zien, horen en bedienen. De groep die daarbij het meest onderbelicht blijft, zijn mensen met een cognitieve beperking. Voor hen zit de drempel niet in een te klein knopje of een te laag contrast, maar in een formulier dat te ingewikkeld is of een proces met te veel stappen. Een pagina kan technisch helemaal in orde zijn en voor deze bezoekers alsnog niet te doen.

![Een oudere persoon achter een computer met een vraagteken in een denkwolk.](/images/blog/wcag-oudere-cognitief.webp)

En het gaat om meer mensen dan je zou denken. Niet alleen om wie een diagnose heeft, maar ook om iemand op leeftijd, om jongeren, en om mensen die de taal niet goed spreken. Een formulier dat voor hen te overweldigend is, sluit een groot deel van je bezoekers uit, zonder dat er ook maar één bevinding in een rapport verschijnt.

## Mensen zijn divers, WCAG is de ondergrens

Bij dit alles hoort een belangrijke nuance. Mensen met een beperking zijn net zo verschillend als mensen zonder beperking. Wat de een prettig vindt, vindt de ander verschrikkelijk. De ene screenreadergebruiker wil zo veel mogelijk meldingen horen, de ander wordt er gek van. Eén perfecte oplossing voor iedereen bestaat niet.

Daarom is WCAG ook niet bedoeld als eindstreep, maar als basis. De richtlijnen dekken de ondergrens af: de dingen die echt voor grote groepen misgaan. Voldoe je aan WCAG, dan weet je dat je die minimale eis hebt gehaald. Dat is een goed begin, geen garantie dat je site voor iedereen prettig werkt.

## Het werkt ook andersom

Tot nu toe ging het over sites die voldoen en toch niet werken. Het omgekeerde komt net zo goed voor. Een pagina kan op een detail niet helemaal aan de letter van WCAG voldoen en voor de bezoeker prima werken. De richtlijnen vangen niet elk geval perfect, en ze zijn ook niet bedoeld als afvinklijst waarbij een score van 100% gelijkstaat aan een goede ervaring.

Dat is precies waarom de uitkomst van een scan zo weinig zegt. Een groen vinkje vertelt je dat een regel technisch is nageleefd. Het vertelt je niet of een blinde bezoeker zijn bestelling kan afronden, of iemand met een motorische beperking met het toetsenbord door je formulier komt, of een slechtziende je tekst kan lezen zonder te raden.

De ACM heeft gelijk: het gaat niet alleen om de techniek. Het doel is geen perfecte score, maar een site die werkt voor iedereen.

Wil je weten of jouw site niet alleen voldoet, maar ook echt te gebruiken is? Bel ons gerust op 085 5055 890, dan kijken we mee.
