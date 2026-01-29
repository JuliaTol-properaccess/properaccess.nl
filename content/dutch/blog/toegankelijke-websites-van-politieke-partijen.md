---
title: "Hoe toegankelijk zijn de websites van politieke partijen eigenlijk?"
date: 2025-09-08
slug: "toegankelijke-websites-van-politieke-partijen"
categories: 
  - "achtergrond_wcag"
  - "de EAA"
aliases:
  - /toegankelijke-websites-van-politieke-partijen/
---

Met het oog op de verkiezingen in oktober vroeg ik mij af: hoe toegankelijk zijn de websites van politieke partijen die zeggen dat ze staan voor **een betere digitale wereld**?

Om dat te testen, heb ik iets simpels gedaan. Ik wilde mij op vijf partijwebsites aanmelden als lid. Dat deed ik zonder mijn computermuis. Alleen met het toetsenbord.

Waarom? Omdat veel mensen – bijvoorbeeld blinde mensen – websites zo gebruiken. Ze navigeren met een schermlezer en toetsenbord. En als iets met het toetsenbord niet werkt, dan is er vaak meer mis voor vele soorten hulpsoftware. Dat niet alleen. Als iets niet werkt, betekent dat ook dat de bezoeker de website verlaat. Voor veel websites liggen hier nog kansen. Geldt dit ook voor politieke partijen?

## Mini-onderzoek

Dit is mijn plan:

- Ik kies vijf politieke partijen die iets met digitalisering hebben.

- Ik probeer lid te worden, zonder muis.

- Ik schrijf enkele (!) punten die me opvallen wat betreft de algemene ontoegankelijkheid van de website.  
    

Voor dit onderzoek heb ik gekozen voor de website van:

- GroenLinks-PvdA – [groenlinkspvda.nl/word-lid](https://groenlinkspvda.nl/word-lid/)

- D66 – [actie.d66.nl/wordlid](https://actie.d66.nl/wordlid)

- BBB – [boerburgerbeweging.nl/word-lid](https://boerburgerbeweging.nl/word-lid/)

- VVD – [vvd.nl/word-lid](https://www.vvd.nl/word-lid/)

- Volt – [voltnederland.org/doneer](https://voltnederland.org/doneer/)

Laten we beginnen. Gaat het mij lukken om lid te worden?

### GroenLinks-PvdA

Toetsenbord?  
Nee. Ik kom al niet langs stap 1. Je moet een bedrag kiezen, maar de knoppen reageren niet op het toetsenbord. Zonder bedrag geen lidmaatschap.

👨‍💻 Tip voor de webontwikkelaar: gebruik geen `display: none` voor interactieve elementen. Dan zijn deze namelijk écht weg voor hulpsoftware.

Andere problemen:

- Cookiemelding is niet toegankelijk.

- Foutmeldingen zijn onduidelijk en worden niet op het juiste moment voorgelezen.

- De hoogcontrast-knop verandert niks aan het contrast. 

- Het zoekicoon opent een extra paneel met veel toegankelijkheidsproblemen.  
    

### D66

Toetsenbord?  
Nee. Ik kan de optie D66 activeren met het toetsenbord, maar zodra ik op de knop “Ga verder” met Enter of Spatiebalk druk, gebeurt er niets. 

👨‍💻 Tip voor webdeveloper: kijk waar `preventDefault()` je knop saboteert.

Andere problemen:

- Het D66-logo heet "Actie" voor een schermlezer. Vreemd, want dat is niet wat erop staat.

- Cookiemelding bevat niet-toegankelijke elementen.

- Bij inzoomen verdwijnt tekst bij links met pijltjes. Alleen pijltjes blijven achter. Omdat ze geen tekstalternatieven hebben zijn de links leeg zonder bestemming en zonder naam die hulpsoftware kan begrijpen.  
    

### BBB

Toetsenbord?  
Ja! Het eerste formulier dat ik zonder muis kan invullen én versturen! 🎉

Andere problemen:

- Cookiemelding: contrast slecht, kopjes kloppen niet, focus zie je niet goed.

- Het logo heet “bb-logo\_2022”. Niet erg informatief.

- Submenu’s bedekken de pagina, maar je kunt ze niet sluiten met de Escape-toets.

- Slecht contrast tussen tekst en achtergrond.

- Menuknop werkt niet goed voor schermlezers.

- Iconen hebben onvoldoende contrast.  
    

### VVD

Toetsenbord?  
Ja. Formulier werkt via het toetsenbord. Maar…

- 3 invoervelden hebben geen namen die schermlezers kunnen voorlezen. Dus, blinde bezoekers weten niet wat ze waar moeten invullen.

- Foutmeldingen zijn geen echte foutmeldingen, meer instructies.

- Slecht kleurcontrast van de randen van de invoervelden.

- Geen hulp bij invullen (zoals automatische aanvulling).  
    

Andere problemen:

- Witte tekst op een gekleurde achtergrond = slecht contrast

- In het mobiele menu verandert de knop van vorm en functie, maar dat wordt niet verteld aan hulpsoftware.

- Kopjes in de footer zijn geen echte koppen.

- Zoekknop en menuknop worden wit op wit bij inzoomen wanneer de muis daar overheen gaat. Contrast = nul. Niet handig!

### Volt

Toetsenbord?  
Ja, met het formulier is te doen! Maar ik moest eerst een lange reis maken door allemaal onzichtbare menu-items voordat ik bij het formulier kwam. Niet heel fijn voor iemand met een motorische beperking. 

Andere problemen:

- Invoerveld voor eigen bedrag heeft geen naam. Dus: je weet niet wat je daar moet invullen.

- Kopjes zijn geen echte kopjes – de structuur klopt niet.

- Betaalmethodes staan als plaatjes zonder tekstalternatief. Dus:  iemand die de pagina niet kan zien, weet niet wat ze voorstellen.

- Foutmeldingen vertellen niet wat fout is gegaan.

- De foutmeldingen zijn ook nog eens slecht leesbaar door laag contrast.  
    

## Conclusie

Van de vijf websites kan ik op twee websites niet verder zonder muis. Drie van de vijf sites hebben een formulier  dat wel is in te vullen met het toetsenbord.

Kijkend naar de algemene toegankelijkheid van de vijf websites, dan is te concluderen dat ze allemaal meerdere problemen hebben. Dat is heel jammer. Als als je bedenkt dat ongeveer één op de vier Nederlanders een beperking heeft,  dan is het goed mogelijk dat deze partijen leden mislopen. 

Kortom, digitale toegankelijkheid is ook voor politieke partijen die zeggen te staan voor digitale inclusie nog niet zo gemakkelijk te realiseren. Maar het is nog niet te laat om hun eigen ‘online huis’ op orde te brengen. Wie weet dat zij dan (meer) nieuwe leden kunnen verwelkomen.
