---
title: "Checklist toegankelijke content"
date: 2024-07-30
slug: "checklist-toegankelijke-content"
categories: 
  - "tips-en-tools"
  - "Webredactie"
tags: 
  - "webredactie"
description: "Praktische checklist voor toegankelijke webcontent volgens WCAG. Handige tips voor webredacties om content correct en inclusief te publiceren."
keywords:
  - checklist toegankelijke content
  - wcag content checklist
  - toegankelijke webcontent
aliases:
  - "/checklist-toegankelijke-content"
---

In deze checklist voor het toevoegen van toegankelijke content aan een webpagina bespreken we de belangrijkste punten waar je op moet letten om je content zo toegankelijk mogelijk te maken. Het oplossen van de onderstaande meest voorkomende fouten zorgt ervoor dat je content grotendeels toegankelijk wordt geplaatst en geschikt is voor bezoekers met diverse beperkingen: visuele, motorische, cognitieve en meer. Daarnaast voldoe je aan de [WCAG-richtlijnen](https://www.w3.org/Translations/WCAG22-nl/). Met een kleine inspanning kun je een groot resultaat bereiken!

## Koppen

**Fout:** Koppen die zijn gemaakt met vetgedrukte of schuingedrukte tekst, kan hulpsoftware niet herkennen als koppen.

**Toelichting:** Vetgedrukte (knop ‘B’) en schuingedrukte (knop ‘I’) tekst is geen kop. 


**Oplossing:** Verander alle vetgedrukte/schuingedrukte tussenkopjes in je tekst in echte koppen. Gebruik Kop 1 tot en met Kop 6 (h1 – h6).

## Teksten

**Fout:** Zinnen of alinea’s die vetgedrukt (knop ‘B’) of schuingedrukt zijn (knop ‘I’).

**Toelichting:** Knoppen ‘B’ en ‘I’ in de teksteditor zijn bedoeld om nadruk te leggen op enkele woorden of zinnen, niet om volledige zinnen of alinea’s opvallend te stylen.

**Oplossing:** Verwijder deze opmaak in bestaande teksten. Heeft je teksteditor een HTML-weergave van de tekst? Vervang dan het strong-element om de vetgedrukte tekst door een b-element en het em-element door een i-element voor schuingedrukte tekst.

## Lijsten

**Fout:** Opsommingen zijn niet als lijsten opgemaakt.

**Oplossing:** Gebruik de juiste knoppen in de teksteditor. Deze knoppen voegen de juiste HTML-code toe aan je lijst: het ul-element voor ongeordende lijsten en het ol-element voor geordende of genummerde lijsten.


## Decoratieve afbeeldingen

**Fout:** Een decoratieve afbeelding heeft een alt-tekst die niets toevoegt aan de inhoud van de pagina.

**Oplossing:** Laat het alt-attribuut van de afbeelding leeg. Hoe je dat doet, verschilt per website. Vraag je webmaster om hulp.

## Informatieve afbeeldingen

**Fout:** Een informatieve afbeelding zonder beschrijving.

**Oplossing bij gewone afbeelding (geen link):** Beschrijf wat er op de afbeelding staat, maximaal 150 karakters.

**Oplossing bij afbeelding die werkt als link:** Beschrijf waar de link naartoe gaat, maximaal 150 karakters.

**Oplossing bij afbeelding met tekst erin:** Herhaal de volledige tekst in de beschrijving.

## Afbeeldingen met veel tekst (schema, organogram)

**Fout:** Een afbeelding met tekst heeft geen tekstalternatief.

**Toelichting:** Informatie uit deze afbeelding is niet beschikbaar voor iemand die de afbeelding niet kan zien. Bied deze informatie op een andere manier aan.

**Oplossing:** Elke afbeelding met tekst moet een uitgeschreven tekst in de buurt van de afbeelding hebben of een link naar een bestand met de uitgeschreven tekst.

## Datatabellen

**Fout:** Een datatabel heeft geen correcte opmaak; de relatie tussen kolomkopcellen en de gewone cellen is niet duidelijk in de HTML.

**Toelichting:** De schermlezer kan de relatie tussen cellen niet correct voorlezen.

**Oplossing:** Maak alle tabellen zo simpel mogelijk. Maak de kolomkoprij correct op. In de meeste tekstbewerkers kun je de kolomkoprij als volgt opmaken: open de tabel, selecteer de koprij, klik op ‘Rij’ – ‘Rij eigenschappen’. Kies vervolgens bij ‘Rijtype’ voor ‘Tabelkop’.

## Afhankelijkheid van vorm, locatie of lay-out

**Fout:** Verwijzingen naar ‘een gekleurd kader’, ‘links’, ‘rechts’, ‘de rode knop’ of ‘de grote knop’. Mensen die kleuren, vormen of locaties niet kunnen waarnemen, begrijpen dit niet.

**Oplossing:** Noem liever de kop waaronder de tekst waarnaar verwezen wordt, staat. Bijvoorbeeld: “Onder het kopje 'Contact' staat een formulier” in plaats van “In de linker zijkolom staat een formulier”.

## Kleurcontrast

**Fout:** Kleurencombinatie van tekst en achtergrond met onvoldoende contrast. Dit kan ook voorkomen in afbeeldingen, grafieken en infographics.

**Toelichting:** Te laag kleurcontrast is moeilijk te lezen.

**Oplossing bij tekst op de pagina:** Controleer het contrast met een contrastchecker-tool. Voor gewone tekst moet het contrast minimaal 4,5:1 zijn, voor grote tekst minimaal 3,0:1.

## Basistaal en taalwisselingen

**Fout:** De taalwissel van passages tekst in een vreemde taal is niet (correct) aangegeven.

**Oplossing:** Voeg `lang="en"` toe aan een stuk tekst in het Engels. De waarde van het lang-attribuut moet je aanpassen afhankelijk van de taal. Vraag je webmaster hoe je dit attribuut moet toevoegen.

## Kleurgebruik

**Fout:** Kleur wordt gebruikt om informatie te geven, bijvoorbeeld in grafieken, legenda’s, links in lopende tekst.

**Oplossing:** Gebruik arcering in grafieken om de balken te onderscheiden. Onderstreep de links in lopende tekst.

## Foutidentificatie, foutsuggestie en preventie

**Fout:** Als een formulier niet wordt verstuurd, is de foutmelding niet duidelijk.

**Oplossing:** Beschrijf duidelijk de fout en waar deze zich bevindt. Geef altijd een suggestie ter verbetering van de fout.

Met deze checklist zorg je ervoor dat 90% van de content op je webpagina toegankelijk is voor iedereen, inclusief mensen met beperkingen. Dit draagt bij aan een inclusieve digitale omgeving en helpt bij het naleven van toegankelijkheidsrichtlijnen en [wetgeving](https://www.digitoegankelijk.nl/wetgeving).

