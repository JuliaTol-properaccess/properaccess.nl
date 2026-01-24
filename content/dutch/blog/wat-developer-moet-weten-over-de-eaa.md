---
title: "Wat je als Web Agency moet weten om te voldoen aan de toegankelijkheidswet (EAA)."
slug: "wat-developer-moet-weten-over-de-eaa"
date: 2025-03-25
categories: 
  - "achtergrond_wcag"
tags: 
  - "toegankelijke-website"
---

## Wat is de toegankelijkheidswet?

De toegankelijkheidswet is een Europese wet die op **28 juni** van **2025** ingaat en gevolgen heeft voor **heel veel** bedrijven die via een website diensten of producten leveren aan consumenten of de overheid. De wet is ook bekend als de EAA, de European Accessibility Act. **Alle** bedrijven die meer dan **10** medewerkers hebben, **óf** meer dan **2 miljoen** omzet per jaar, moeten eraan voldoen. 

Om te voldoen aan deze wet, moet je zorgen dat jouw websites, apps of andere digitale kanalen **toegankelijk** zijn voor mensen met een functiebeperking. Dat zijn bijvoorbeeld mensen die niet kunnen zien, die de muis niet kunnen gebruiken of die kleurenblind zijn. Uit onderzoeken blijkt dat het om zo’n **25 procent** van alle mensen gaat. De wet is bedacht om ervoor te zorgen dat **elk mens**, met of zonder beperking, digitale diensten en producten kan gebruiken.

Vanaf 26 juni 2025 moeten alle websites die je nieuw oplevert of ingrijpend aanpast voldoen aan de eisen van de toegankelijkheidswet, de European Accessibility Act. 

## Wie moet voldoen aan de toegankelijkheidswet?

De wet geldt voor de meeste middelgrote en grote bedrijven die via digitale kanalen diensten of producten leveren aan consumenten of de overheid. Er zijn een paar uitzonderingen. Ten eerste geldt de wet niet voor bedrijven die uitsluitend aan de zakelijke markt leveren. Maar let op: de overheid valt hier dus niet onder. De wet geldt ook niet voor bedrijven die minder dan 10 medewerkers hebben, of minder dan 2 miljoen omzet per jaar.

## Wat gebeurt er als ik niet voldoe aan de toegankelijkheidswet?

  
Niet voldoen aan de wet betekent dat je straks te maken kunt krijgen met een toezichthouder die het naleven van deze wet komt controleren. Er wordt nu gezegd dat er 7 verschillende toezichthouders komen die dit gaan doen. Op dit moment, in maart 2025, is het nog niet duidelijk hoe dit precies gaat werken.  
  

## Hoe kan een web agency digitale toegankelijkheid het beste aanpakken?

De beste oplossing is: zoek een ervaren auditbureau en ga een samenwerking aan. Laat je meest recente websites onderzoeken. Een audit levert een gedetailleerd rapport op met uitleg en oplossingen die je teamleden ook kunnen toepassen op toekomstige projecten. Zo bouw je kennis op binnen je bedrijf en voorkom je herhaling van dezelfde fouten.

Bel Julia (06-28742275), dan kunnen we samen kijken naar waar je behoefte ligt. 

## Maar wat betekent dat concreet?

Op basis van onze ervaring in het auditen van websites volgens WCAG 2.1 en 2.2 hebben we een lijst gemaakt met controlepunten die je minimaal moet checken. Deze lijst bevat de meest voorkomende problemen die we op de websites zien. Als je deze fouten niet maakt, heb je al een behoorlijk toegankelijke website. 

Zijn sommige begrippen voor jou nieuw? Wil je meer weten over dit onderwerp? Of wil je je team door ons laten trainen? Neem dan contact op met Julia Tol: [contact@properaccess.nl](mailto:contact@properaccess.nl). 

## Meest voorkomende toegankelijkheidsissues

In deze lijst verkorten we de toegankelijkheidsnaam tot een a11y naam.

### Header

- Pagina heeft geen <title> of deze bevat tekst die de pagina niet beschrijft.
- lang-attribuut ontbreekt op <html> of bevat een ongeldige waarde.
- Logo: zichtbare tekst staat niet in de a11y naam, interactieve rol en naam ontbreken, linkdoel is onduidelijk, tekst verdwijnt bij zoom tot 200% en 400%.
- Skiplink ontbreekt, is niet zichtbaar bij focus of verwijst niet naar unieke inhoud. 

### Navigatie

- Links en knoppen zijn niet te bedienen met het toetsenbord.
- Focus is niet zichtbaar, of komt op onzichtbare elementen terecht.
- Focus wordt niet naar het mobiele menu gestuurd, kan het menu verlaten of verplaatst na sluiten van het menu niet naar een logische plek.
- Contrast van tekst is lager dan 4,5:1.
- Bij 200% en 400% zoom gaat content of functionaliteit verloren.
- Content op hover en focus kan niet met ESC worden afgesloten.
- Actieve link is alleen visueel te herkennen, dit is niet in de HTML vastgelegd.
- Relatie tussen links is niet zichtbaar in de HTML (op te lossen met <ul> of <nav>).
- Button met dropdown mist aria-expanded-attribuut.
- Hamburgerknop mist aria-expanded-attribuut om de toestand van het menu aan te geven.
- De functie van de hamburgerknop (openen/sluiten) staat niet in de a11y naam. 

### Zoekfunctie

- Zoekknop of invoerveld hebben geen a11y naam of geen rol.
- Contrast van zoekicoon met achtergrond is lager dan 3,0:1. Ook op hover en focus.
- Contrast van rand invoerveld is lager dan 3,0:1.
- Lijst met suggesties is geen combobox of mist de nodige attributen, bijvoorbeeld het aria-expanded-attribuut.
- Contrast van placeholder-tekst is lager dan 4,5:1 (als de placeholder als label of instructie dient).
- Zichtbare tekst op/bij het invoerveld staat niet in de a11y naam van het invoerveld.
- Focus is zichtbaar op of landt op onzichtbare elementen.
- Niet alle pagina’s of PDF’s zijn via het zoekveld te vinden.

### Hoofdinhoud

- Koppen staan niet in <h>-elementen, niet in de correcte volgorde, <h>-element is voor opmaak gebruikt.
- <strong> en <em> worden voor opmaak gebruikt of als alternatief voor koppen.
- Opsommingen zijn niet gemarkeerd met <ul> of <ol>.
- Meerdere alinea's staan in één<p>-element.
- Niet alles wat je op de pagina ziet is in de HTML aanwezig. Denk bijvoorbeeld aan voortgangsbalken en informatie over de voortgang zelf.

### Sidebar

- Skiplink slaat de sidebar niet over.
- Filters: groepen checkboxen zijn niet gegroepeerd. Relatie met het groepslabel ontbreekt. 
- Filters: aanvinken van checkbox zorgt voor het herladen van de pagina waarbij de focus wordt verplaatst. 
- Filters: niet alles is te bedienen met het toetsenbord.
- Filterknop op klein scherm: voldoet niet aan alle eisen (deze zijn hetzelfde als bij een hamburgerknop).

### Footer

- <h>-element is niet gebruikt voor de kopjes boven kolommen.
- Logo’s hebben geen tekstalternatieven.
- Opt-in formulier: invoerveld voor e-mail mist het autocomplete-attribuut.

### Dialoogvenster 

- role=”dialog” en/of de toegankelijke naam ontbreekt.
- Focus kan het venster verlaten. Focus komt na sluiten van het venster niet terug op de triggerknop of het eerstvolgende element in de DOM.

### Accordeons

- De tekst die een accordeon opent is geen <h>-element. Daarbinnen moet een <button>-element staan. Niet andersom!

### Formulieren: login / registratie

- autocomplete op gebruikersnaam en wachtwoord ontbreekt.
- Bezoeker moet puzzel oplossen om in te loggen.
- Knop met oog heeft geen naam en geen rol.
- Correct ingevulde velden worden leeggemaakt als het formulier niet verzonden kan worden.

### Formulieren: algemeen

- Er zijn geen permanent zichtbare labels bij invoervelden (placeholder is geen label!).
- Invoervelden of knoppen hebben geen toegankelijke naam.
- <label> is niet verbonden met <input> door for en id.
- Zichtbare tekst op knop of invoerveld staat niet in de toegankelijke naam.
- Foutmeldingen zijn instructies in plaats van dat ze aangeven wat er mis ging.
- Foutmeldingen zijn niet gekoppeld aan de bijbehorende invoervelden (gebruik aria-describedby).
- Focus is niet zichtbaar, landt op onzichtbare elementen of heeft onlogische volgorde.
- Knoppen en invoervelden zijn niet met toetsenbord te bedienen.
- Groepen radiobuttons of checkboxen zijn niet gegroepeerd in de HTML.
- Randen van de invoervelden en tekst (ook placeholder) hebben niet genoeg contrast..
- autocomplete-attribuut ontbreekt op velden die persoonlijke info verzamelen.
- Berichten die de status van de uitgevoerde acties bevestigen hebben geen aria-live region.

Deze punten komen we in elke audit tegen. Dit zijn ongeveer 60% van alle technische fouten die ontwikkelaars regelmatig maken. Laat je website altijd door een expert bekijken om echt alle issues te detecteren.

## Wil je digitale toegankelijkheid écht goed aanpakken?

Laat je devteam een training volgen en geef ze de juiste tools en kennis om toegankelijke websites en apps te bouwen. Ze leren hoe ze hun eigen werk kunnen testen en de resultaten correct interpreteren.

Onze training is volledig afgestemd op jouw team en projecten. We analyseren je laatste 3 tot 5 projecten en focussen alleen op de kennishiaten binnen jouw team. Zo krijgen ze precies wat ze nodig hebben om inclusiever te ontwikkelen.

We zijn trots op onze samenwerking met bedrijven als Ilionix, Stichting Rijksmuseum, Plus Retail, Jumbo Supermarkten, Wirelab en vele anderen.

Wil je bespreken wat wij voor jouw team kunnen betekenen? Neem contact op via **contact@properaccess.nl** of bel **Julia Tol op 06 2874 22 75**.
