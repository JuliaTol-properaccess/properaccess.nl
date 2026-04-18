---
title: "EAA-checklist 2026: 30 punten waarop je webshop moet voldoen"
date: 2026-04-09
slug: "eaa-checklist-2026-webshops"
categories:
  - "e-commerce-eaa"
tags:
  - "eaa"
  - "wcag"
  - "checklist"
  - "webshop"
  - "e-commerce"
description: "De European Accessibility Act geldt sinds 28 juni 2025 voor webshops. Een praktische 30-punten checklist om te zien of je voldoet, georganiseerd per onderdeel van je site."
keywords:
  - "EAA checklist webshop"
  - "European Accessibility Act checklist"
  - "WCAG checklist webshop 2026"
  - "EAA voor webshops checklist"
  - "EAA compliance webshop"
image: "/images/blog/webshop-wireframe-eaa.svg"
seo_title: "EAA-checklist 2026 voor webshops — 30 punten | Proper Access"
seo_description: "Volledige 30-punten EAA-checklist voor webshops. Praktisch, per onderdeel van je site. Wat moet er kloppen om aan WCAG 2.1 AA en de European Accessibility Act te voldoen."
seo_keywords:
  [
    "EAA checklist webshop",
    "WCAG checklist webshop",
    "European Accessibility Act webshop",
    "EAA voor webshops 2026",
    "EAA compliance",
  ]
---

Sinds 28 juni 2025 moet je webshop voldoen aan de European Accessibility Act. Lees [het overzicht van wat de EAA precies inhoudt](/blog/geldt-de-eaa-voor-mijn-webshop/) als je nog twijfelt of de wet voor jou geldt. Dit artikel slaat dat over en beantwoordt de vervolgvraag: _waar moet ik concreet op letten?_

Hieronder een checklist van 30 punten, georganiseerd per onderdeel van je webshop. Geen academische opsomming van succescriteria, maar praktische checks die je samen met je developer of contentmanager kunt afvinken. Bij elk punt staat waar het over gaat, hoe je het test, en welk WCAG-criterium erachter zit voor wie wil doorlezen.

Deze checklist is geen vervanging van een audit. Het is een hulpmiddel om te zien waar je staat en wat de laaghangende verbeteringen zijn. Voor een echte audit is een paar dagen handmatig testwerk nodig — meer daarover in [Wat kost een WCAG-audit voor een webshop](/blog/wat-kost-wcag-audit-webshop/).

## Hoe gebruik je deze checklist?

Loop 'm door in deze volgorde:

1. **Eerst Scope & wetgeving (1-4).** Je moet weten of en hoe de wet voor jou geldt voordat je iets gaat aanpassen.
2. **Dan Technische basis (5-12).** Dit zijn fundamenten die voor de hele site gelden.
3. **Dan Productpagina's en Checkout (13-23).** De plek waar de meeste webshops falen.
4. **Tenslotte Account, content en governance (24-30).** Belangrijk maar minder urgent dan checkout.

Pak een Google Doc, vink af wat je weet, zet vraagtekens bij wat je niet weet, en bel een audit-bureau voor de rest. Je hoeft dit niet allemaal in je eentje te doen.

## Categorie A — Scope & wetgeving (4 punten)

### 1. Bepaal of de EAA op jou van toepassing is

De wet geldt niet als je webshop een micro-onderneming is: **minder dan 10 FTE én minder dan € 2 miljoen jaaromzet**. Beide voorwaarden moeten gelden, anders val je er gewoon onder. Twijfel je? Lees [Geldt de EAA voor mijn webshop](/blog/geldt-de-eaa-voor-mijn-webshop/).

### 2. Bepaal welke onderdelen van je site onder de wet vallen

De EAA geldt voor het deel van je site dat aan consumenten verkoopt. Heb je daarnaast een B2B-portaal of een interne tool? Die vallen er mogelijk buiten. Maar pas op: zodra consumenten zich kunnen registreren of bestellen, val je er weer onder.

### 3. Stel een toegankelijkheidsverklaring op

De EAA verplicht je om aantoonbaar te voldoen. In de praktijk betekent dat een **toegankelijkheidsverklaring** op je site, met een datum, scope, gevolgde norm (WCAG 2.1 AA) en contactgegevens voor klachten. Anders dan bij de Wdo (overheid) is er geen centraal portaal — je publiceert hem op je eigen site. We hebben een handige tool gemaakt om je te helpen om een verklaring op te stellen: https://www.properaccess.nl/tools/toegankelijkheidsverklaring-generator/.

### 4. Wijs een verantwoordelijke aan binnen je organisatie

Iemand moet de eigenaar zijn van toegankelijkheid. Niet "de webdeveloper", niet "marketing". Eén persoon die de verklaring beheert, klachten behandelt en zorgt dat nieuwe features niet onbedoeld iets breken. Zonder eigenaar verwatert het.

## Categorie B — Technische basis (8 punten)

Dit is slechts een korte lijst van alle punten die op je website gecheckt moeten worden!

### 5. De hele site is bedienbaar met alleen toetsenbord

Test het zelf in 15 minuten. Leg je muis weg en navigeer met `Tab`, `Shift+Tab`, `Enter`, `Space` en pijltoetsen. Kun je naar elke knop, elk filter, elke productvariant, elke checkout-stap? Kun je een pop-up sluiten met `Escape`? Als ergens je focus verdwijnt of vastraakt, is dat een directe overtreding.

_WCAG: 2.1.1 Toetsenbord, 2.1.2 Geen toetsenbordval_

### 6. De focus is altijd duidelijk zichtbaar

Als je met `Tab` door de site loopt, moet je altijd zien waar je bent. Een vaag stippellijntje dat je standaard browser-focus weghaalt en niets terugzet, is een fout. Zorg voor een duidelijke focus-indicator met voldoende contrast en dikte.

_WCAG: 2.4.7 Focus zichtbaar_

### 7. Kleurcontrast voldoet aan minimaal 4.5:1 voor tekst en 3:1 voor UI-elementen

Open een contrast-checker, bijvoorbeeld deze gratis tool https://www.properaccess.nl/tools/kleurcontrast-checker/ en test je hoofdtekst, je knop-tekst, je linkkleur, je placeholder-tekst en je foutmeldingen. Lichtgrijze tekst op witte achtergrond is een klassieker — bijna altijd te laag.

_WCAG: 1.4.3 Contrast (minimum), 1.4.11 Contrast voor niet-tekstuele elementen_

### 8. Tekst is leesbaar bij 200% en bij 400% zoom zonder content verlies

Zoom in je browser tot 200% (`Cmd +` of `Ctrl +`). Kun je nog steeds bij je menu, kun je nog steeds naar je winkelwagen, valt er geen tekst weg achter overlays of buiten beeld? Veel sticky headers en mini-cart pop-ups breken hier.

_WCAG: 1.4.4 Herschalen van tekst, 1.4.10 Reflow_

### 9. Een "skip to content"-link bovenaan elke pagina

Een onzichtbare link die zichtbaar wordt zodra je 'm met `Tab` activeert, en je direct naar de hoofdinhoud brengt. Bespaart screenreader-gebruikers vijftig keer "menu, menu, menu, account, search...". Bij Shopify en WooCommerce zit hij vaak standaard in het thema, maar lang niet altijd.

_WCAG: 2.4.1 Blokken omzeilen_

### 10. Correcte taalattributen (`lang="nl"`, `lang="en"`)

Op het `<html>`-element moet de hoofdtaal staan. Heb je een meertalige shop? Dan moet elke taalversie zijn eigen `lang`-attribuut hebben. Voor losse anderstalige woorden of zinnen binnen een pagina kun je `<span lang="en">` gebruiken.

_WCAG: 3.1.1 Taal van de pagina, 3.1.2 Taal van delen_

### 11. Logische koppenstructuur (h1-h6) zonder gaten

Eén `<h1>` per pagina, dan `<h2>` voor de secties, dan `<h3>` voor sub-secties. Geen `<h1>` gevolgd door `<h4>`, geen `<h2>` gebruikt voor opmaak. Je homepage en productpagina zijn de plekken waar dit het vaakst fout gaat. Test de koppen met onze tool: https://www.properaccess.nl/tools/koppenstructuur-checker/.

_WCAG: 1.3.1 Info en relaties, 2.4.6 Koppen en labels_

### 12. Cookie-banner is af te sluiten én vormt geen focus trap

Een cookie-banner moet als eerste in de focusvolgorde zijn zodat je het meteen kan afsluiten en mag de gebruiker niet beletten om de rest van de website te gebruiken.

_WCAG: 2.1.2 Geen toetsenbordval, 2.4.3 Focus volgorde_

## Categorie C — Productpagina's (5 punten)

### 13. Productfoto's hebben een beschrijvende alt-tekst

`alt="image"`, `alt="product"`, `alt="IMG_4521"` en lege alt-teksten zijn fout. Een goede alt-tekst beschrijft kort wat je ziet en is relevant voor de context: `alt="Rode sneakers, zijaanzicht"`. Voor productafbeeldingen geldt: gebruik de productnaam plus de variant. Decoratieve afbeeldingen die geen informatie toevoegen mogen wél een lege alt-tekst hebben.

_WCAG: 1.1.1 Niet-tekstuele content_

### 14. Productvarianten zijn met toetsenbord en screenreader te kiezen

De maat- en kleurkiezers zijn een berucht struikelpunt. Test of je met `Tab` en pijltoetsen door de varianten kunt en of de gekozen variant wordt voorgelezen.

_WCAG: 4.1.2 Naam, rol, waarde, 2.1.1 Toetsenbord_

### 15. Maattabellen gebruiken echte tabel-markup

Een maattabel die opgebouwd is uit gewone teskt 's of een afbeelding van een tabel is voor screenreader-gebruikers onbruikbaar. Gebruik `<table>` met `<thead>`, `<th scope="col">` voor kolomkoppen en `<th scope="row">` voor rijkoppen. Een afbeelding van een maattabel is een directe schending van WCAG 1.4.5.

_WCAG: 1.3.1 Info en relaties, 1.4.5 Afbeeldingen van tekst_

### 16. Voorraad- en prijsupdates worden aangekondigd

Als de prijs verandert na het kiezen van een variant, of als er "Nog 3 op voorraad" verschijnt, moet een screenreader dat kunnen voorlezen. Als deze informatie verschijnt zonder de pagina te herladen, mist een screenreader-gebruiker het volledig.

_WCAG: 4.1.3 Statusberichten_

### 17. Wishlist-, share- en review-knoppen hebben duidelijke labels

Een hartje-icoon zonder verborgn tekst die een schermlezer kan voorlezen is fout. Gebruik `aria-label="Toevoegen aan favorieten"` of een visueel verborgen `<span>` met de tekst. Voor knoppen die van staat wisselen (aan/uit) is `aria-pressed` of een wisselende `aria-label` nodig.

_WCAG: 1.1.1 Niet-tekstuele content, 4.1.2 Naam, rol, waarde_

## Categorie D — Checkout & formulieren (6 punten)

### 19. Elk formulierveld heeft een gekoppeld `<label>`

Geen placeholders als label. Gebruik een echte `<label for="...">`. Zonder label weet een screenreader niet waar je naam, postcode of e-mail moet komen. Test door je veld aan te klikken op het label — als het invoerveld geen focus krijgt, klopt de koppeling niet.

_WCAG: 1.3.1 Info en relaties, 3.3.2 Labels of instructies_

### 20. Foutmeldingen worden gekoppeld én aangekondigd

Een rode rand om een veld is niet genoeg. De foutmelding moet als tekst onder of bij het veld staan, gekoppeld worden via `aria-describedby`, en het veld moet `aria-invalid="true"` krijgen. Bij submit moet de fout aangekondigd worden zodat een screenreader-gebruiker direct hoort wat er mis is.

_WCAG: 3.3.1 Foutidentificatie, 3.3.3 Foutsuggestie, 4.1.3 Statusberichten_

### 21. Multi-step checkouts hebben een duidelijke voortgang

"Stap 2 van 4: Bezorging". Visueel én voor screenreaders. Een progress-indicator met alleen kleur zonder tekst is voor een blinde gebruiker onzichtbaar.

_WCAG: 1.3.1 Info en relaties, 1.4.1 Gebruik van kleur_

### 23. De 3D Secure-flow is getest met screenreader

3D Secure pop-ups zijn berucht: ze openen een nieuw venster of iframe op het domein van de bank, en je hebt er zelden invloed op. Toch ben jij als webshop verantwoordelijk voor de hele flow. Test minimaal of de gebruiker terugkomt op je bevestigingspagina, en of de focus na sluiten ergens zinvol landt.

_Gerelateerd aan 2.4.3 Focus volgorde, 4.1.3 Statusberichten_

## Categorie E — Account & post-purchase (3 punten)

### 24. Wachtwoord-reset zonder cognitieve test

Een login die alleen werkt door een puzzel op te lossen of een captcha te tekenen, faalt op WCAG 3.3.8 (Toegankelijke authenticatie) — een nieuw criterium uit WCAG 2.2.

_WCAG: 3.3.8 Toegankelijke authenticatie_

### 25. Orderbevestiging blijft onbeperkt zichtbaar

Na het afronden van een bestelling moet de gebruiker een bevestigingspagina zien met ordernummer, totaalbedrag en bezorginfo. Niet verstopt in een toast die na 3 seconden verdwijnt. De `<h1>` van die pagina moet "Bedankt voor je bestelling" of vergelijkbaar zijn, zodat een screenreader meteen weet waar je bent.

_WCAG: 2.4.2 Paginatitel, 1.3.1 Info en relaties_

### 26. Track-and-trace updates worden aangekondigd

Als je op je accountpagina de status van je bestelling kunt zien en die status verandert dynamisch, gebruik dan een `aria-live`-region. Anders mist een screenreader-gebruiker dat de status van "Verzonden" naar "Onderweg" is gegaan.

_WCAG: 4.1.3 Statusberichten_

## Categorie F — Content & beheer (2 punten)

### 27. PDF facturen, handleidingen en retourformulieren zijn toegankelijk

Een PDF die een gescande afbeelding is, of een PDF zonder codes, is voor een screenreader een baksteen. Genereer PDF's met de juiste tags (titel, koppen, leesvolgorde) of bied minimaal een HTML-alternatief op je site.

_WCAG: 1.1.1 Niet-tekstuele content, 1.3.1 Info en relaties_

### 28. Redactie-richtlijn voor nieuwe content

Als je marketing of redactie zelf productbeschrijvingen, blogposts of bannerteksten invoert, hebben ze een korte richtlijn nodig: gebruik koppen in volgorde, zet alt-tekst in elke afbeelding, gebruik geen tekst in afbeeldingen, schrijf in begrijpelijke taal. Zonder richtlijn wordt je site een paar weken na de audit weer langzaam slechter.

_WCAG: alle content-gerelateerde criteria_

## Categorie G — Governance & test (2 punten)

### 30. Audit door een onafhankelijke partij plus retest na fixes

Een interne check is geen audit. Een onafhankelijke partij met een handmatige werkwijze vindt issues die je zelf nooit zou vinden — niet omdat je dom bent, maar omdat je je eigen blinde vlekken hebt. Plan minimaal één audit per jaar, plus een retest nadat je de issues hebt opgelost. Zo voorkom je dat je dezelfde fouten een jaar later weer hebt.

_Vereist door EAA voor het kunnen opstellen van een onderbouwde toegankelijkheidsverklaring_

## Kort samengevat

- 30 punten verdeeld over scope, technische basis, productpagina's, checkout, account, content en governance.
- Volgorde: eerst scope, dan basis, dan checkout en productpagina's, dan governance.

Wil je weten waar jouw webshop staat? [Vraag een gratis quickscan aan](https://properaccess.nl/diensten/quickscan/) of bel **085 5055 890**.

## Meer in deze serie

- [Geldt de EAA voor mijn webshop? Een beslisboom](/blog/geldt-de-eaa-voor-mijn-webshop/)
- [Wat kost een WCAG-audit voor een webshop?](/blog/wat-kost-wcag-audit-webshop/)
- [Waarom overlay-tools geen WCAG maken](/blog/overlay-tools-accessibe-userway-wcag/)
