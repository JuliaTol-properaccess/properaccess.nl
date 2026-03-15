---
title: "EAA voor webshops: wat moet je regelen en waar begin je?"
date: 2026-03-17
slug: "eaa-voor-webshops"
categories:
  - "de EAA"
tags:
  - "eaa"
  - "webshop"
  - "european-accessibility-act"
  - "e-commerce"
  - "digitale-toegankelijkheid"
description: "De European Accessibility Act geldt sinds juni 2025 ook voor webshops. Wat betekent dat concreet? Welke eisen gelden er en wat moet je als eerste aanpakken?"
keywords:
  - eaa webshop
  - european accessibility act webshop
  - eaa e-commerce
  - digitale toegankelijkheid webshop
  - eaa wetgeving webshop
  - toegankelijke webshop
  - eaa verplichtingen webshop
  - webshop toegankelijk maken
  - european accessibility act e-commerce
  - eaa wet online winkels
  - eaa 2025 webshop
---

Sinds 28 juni 2025 is de European Accessibility Act (EAA) van kracht. En ja, die geldt ook voor jouw webshop. Toch merk ik dat veel webshophouders nog niet weten wat ze precies moeten doen. De informatie online is of te juridisch, of te vaag, of gericht op overheidswebsites. Tijd om het concreet te maken.

In dit artikel leg ik uit wat de EAA betekent voor webshops, welke onderdelen de meeste problemen opleveren en waar je als eerste moet beginnen.

## Wat is de EAA in het kort?

De European Accessibility Act is een Europese wet die ervoor zorgt dat producten en diensten toegankelijk zijn voor mensen met een beperking. In Nederland is de wet omgezet in de Implementatiewet toegankelijkheidsvoorschriften producten en diensten.

Voor webshops betekent dit: je online winkel moet voldoen aan **WCAG 2.1 niveau AA**. Dat zijn de internationale richtlijnen voor digitale toegankelijkheid, met 50 concrete eisen waaraan je website moet voldoen.

**Let op:** de EAA verwijst naar WCAG 2.1, maar in de praktijk adviseer ik om te toetsen op WCAG 2.2. Die bevat 5 extra criteria die specifiek relevant zijn voor webshops (zoals minimale klikgebieden en het voorkomen van redundante invoer in bestelprocessen).

## Voor wie geldt de EAA?

De EAA geldt voor e-commercediensten. Dat is breed: als je online producten of diensten verkoopt, val je er waarschijnlijk onder. Denk aan:

- Online winkels en webshops
- Ticketverkoop (evenementen, musea, bioscopen, attracties)
- Boekingsplatforms (hotels, vakanties, restaurants)
- Abonnementsdiensten
- Digitale marktplaatsen

Er is een uitzondering voor **micro-ondernemingen** (minder dan 10 medewerkers en minder dan 2 miljoen euro omzet). Maar zelfs als je daaronder valt: toegankelijkheid is goed voor je conversie, je bereik en je merk.

## De 7 meest voorkomende problemen bij webshops

Ik heb in de afgelopen jaren tientallen webshops geaudit. Dit zijn de problemen die ik het vaakst tegenkom — gerangschikt van meest voorkomend naar minst voorkomend.

### 1. Productafbeeldingen zonder alt-tekst

Dit is veruit het grootste probleem. Webshops hebben honderden, soms duizenden productafbeeldingen. En bij de meeste ontbreekt een bruikbare alt-tekst.

"Maar mijn CMS vult automatisch de bestandsnaam in als alt-tekst." Dat klopt bij veel systemen, maar `IMG_4523.jpg` of `product-blauw-xl.jpg` is geen bruikbare beschrijving voor iemand die de afbeelding niet kan zien.

**Wat moet je doen:** Elke productafbeelding heeft een alt-tekst nodig die beschrijft wat je ziet. Gebruik onze [alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/) om te bepalen welk type alt-tekst je nodig hebt.

### 2. Filteropties en sortering niet bedienbaar met toetsenbord

Veel webshops hebben filters in de zijbalk: kleur, maat, prijs, merk. In mijn ervaring werkt meer dan de helft van deze filters niet goed met een toetsenbord of schermlezer. Dropdowns die niet openen, checkboxen die niet reageren, schuifregelaars die onbereikbaar zijn.

**Wat moet je doen:** Test je filters met alleen het toetsenbord (Tab, Enter, Spatie, pijltjestoetsen). Kun je elk filter bereiken en activeren? Wordt het resultaat aangekondigd aan schermlezers?

### 3. Bestelproces met toegankelijkheidsproblemen

Het bestelproces is het meest kritische onderdeel van je webshop. Als iemand niet kan afrekenen, verlies je een klant. Veelvoorkomende problemen:

- **Formuliervelden zonder labels** — een schermlezer leest "invoerveld" in plaats van "E-mailadres"
- **Foutmeldingen die niet gekoppeld zijn aan het juiste veld** — je ziet een rode rand, maar een schermlezer meldt niets
- **Betaalmodules van derden die niet toegankelijk zijn** — Mollie, Adyen, Stripe: niet alle betaalintegraties zijn even goed
- **Adresvalidatie die niet werkt met een schermlezer**

**Wat moet je doen:** Loop het volledige bestelproces door met een toetsenbord. Van winkelwagen tot bevestigingspagina. Elk formulierveld moet een zichtbaar label hebben, foutmeldingen moeten bij het juiste veld staan en elke stap moet duidelijk zijn.

### 4. Onvoldoende kleurcontrast

Lichtgrijze tekst op een witte achtergrond, witte tekst op een pastelkleurige knop, subtiele kleurtinten bij statusmeldingen. Het ziet er misschien modern uit, maar het is onleesbaar voor mensen met een visuele beperking.

**De eis:** normale tekst heeft een contrastverhouding van minimaal 4,5:1 nodig. Grote tekst (18pt of 14pt bold) heeft minimaal 3:1 nodig.

### 5. Cookie-banner blokkeert de pagina

Bijna elke webshop heeft een cookie-banner. En bij veel webshops is die banner niet toegankelijk: niet bedienbaar met een toetsenbord, niet voorgelezen door een schermlezer, of de focusvolgorde klopt niet.

Het vervelende: je cookie-banner is het eerste wat een bezoeker tegenkomt. Als die niet werkt, werkt je hele webshop niet.

### 6. Zoekfunctie zonder toegankelijke resultaten

De zoekbalk werkt vaak prima om in te typen, maar de resultaten worden niet aangekondigd. Iemand die een schermlezer gebruikt, typt een zoekterm en hoort... niets. De resultaten verschijnen visueel, maar worden niet gecommuniceerd.

**Wat moet je doen:** Zorg dat zoekresultaten worden aangekondigd via een ARIA live region. En zorg dat elk zoekresultaat een duidelijke link is met een beschrijvende tekst.

### 7. Carrousels en productsliders

Automatisch roterende productcarrousels zijn een klassieker. Ze zijn bijna nooit volledig toegankelijk: de knoppen zijn niet bereikbaar, de autoplay is niet te stoppen en de inhoud wisselt zonder waarschuwing.

**Het beste advies:** vermijd autoplay. Laat de gebruiker zelf door de producten navigeren met duidelijke vorige/volgende-knoppen.

## Waar begin je?

Als je nog niets aan toegankelijkheid hebt gedaan, is dit mijn advies:

### Stap 1: Doe een quickscan

Begin met een [quickscan](/quickscan/) om te zien waar je staat. Je krijgt een overzicht van de belangrijkste knelpunten en een indicatie van de ernst.

### Stap 2: Fix de grootste blokkers

Sommige problemen zijn erger dan andere. Focus eerst op dingen die mensen **uitsluiten**: een bestelproces dat niet werkt met een toetsenbord, een cookie-banner die de hele pagina blokkeert, formulieren zonder labels.

### Stap 3: Laat een volledige audit doen

Na de eerste verbeteringen is het tijd voor een volledig WCAG-EM onderzoek. Dat geeft je een compleet beeld en een nulmeting waar je naartoe kunt werken.

### Stap 4: Plan een retest

Nadat je developer de bevindingen heeft opgepakt, laat je een retest doen om te checken of alles goed is opgelost. Dat klinkt als een extra kostenpost, maar het voorkomt dat je denkt dat alles in orde is terwijl er nog fouten zitten.

## Veelgestelde vragen

### "Wordt er al gehandhaafd?"

Ja, de wet is sinds juni 2025 van kracht. De Autoriteit Financiele Markten (AFM) houdt toezicht op e-commercediensten. In de praktijk richten toezichthouders zich nu vooral op voorlichting en bewustwording, maar formeel kunnen ze handhaven.

### "Geldt de EAA ook voor mijn Shopify/WooCommerce-shop?"

Ja. De EAA maakt geen onderscheid tussen platformen. Of je nu Shopify, WooCommerce, Magento of een maatwerk-oplossing gebruikt — de eisen zijn hetzelfde. Wel verschilt de mate van controle die je hebt: bij Shopify ben je afhankelijk van je thema en apps, bij WooCommerce kun je meer zelf aanpassen.

### "Moet mijn hele webshop in één keer toegankelijk zijn?"

Juridisch gezien wel — de wet is al van kracht. Maar in de praktijk is het een proces. Begin met de meest kritieke onderdelen (bestelproces, productpagina's, zoekfunctie) en werk van daaruit door.

### "Wat als ik een kant-en-klaar thema gebruik?"

Een kant-en-klaar thema is geen garantie voor toegankelijkheid. Zelfs thema's die claimen "WCAG-proof" te zijn, hebben in mijn ervaring altijd nog problemen. Test het zelf of laat het toetsen.

## Verder lezen

- [Alt-tekst keuzehulp](/blog/alt-tekst-keuzehulp/) — bepaal welke alt-tekst je productafbeeldingen nodig hebben
- [Wat kost een toegankelijkheidsaudit?](/blog/wat-kost-een-toegankelijkheidsaudit/) — transparant overzicht van prijzen en pakketten
- [Quickscan aanvragen](/quickscan/) — eerste stap om te zien waar je webshop staat
