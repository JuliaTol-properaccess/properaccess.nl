---
title: "Hoe test je toegankelijkheid van PDF's"
date: 2025-05-07
slug: "instructie-pdfs-testen-met-pac-2024"
categories: 
  - "tips-en-tools"
  - "Webredactie"
description: "Stap-voor-stap uitleg om PDF’s te testen op digitale toegankelijkheid met PAC 2024. Praktische handleiding voor webredacties volgens WCAG."
keywords:
  - pdf toegankelijkheid testen
  - pac 2024 pdf testen
  - wcag pdf testen
---

  
Met de gratis PDF Accessibility Checker (PAC) test je makkelijk of een pdf-bestand toegankelijk is. Wel zo handig voor webredacties: zo ben je niet volledig afhankelijk van auditbureaus. In deze handleiding lees je hoe je dit precies aanpakt.

##   
**Dit heb je nodig**

1. **De PAC-software**: download PAC 2024 vanaf de officiële site: [PDF Accessibility Checker](https://pac.pdf-accessibility.org/en/download) en installeer op je computer.

3. **Een correct getagd brondocument**: gebruik de functies in je bronprogramma (bijvoorbeeld Word of InDesign) om je brondocument correct te taggen voor toegankelijkheid, en exporteer het met de exportfunctie voor toegankelijke pdf als goed gestructureerd pdf-bestand.

## **Pdf testen met PAC**

Om de pdf te testen, ga je als volgt te werk.

### Stap 1: Open het bestand in PAC

Open PAC 2024 en klik op “Open document”. Selecteer het bestand dat je wilt testen.

![](https://properaccess.nl/wp-content/uploads/2025/05/screenshot1-1024x581.png)

### Stap 2: Controleer de basisinformatie

Je ziet nu al de basisinformatie van de pdf. Controleer het volgende:

- **Title**: Staat hier een duidelijke, beschrijvende titel van het pdf-document?
- **Language**: Klopt de taalcode die hier staat met de taal van het document?
- **Tags**: Als hier niets staat (0 tags), dan is je document sowieso ontoegankelijk.

### **Stap 3: Controleer de weergave voor schermlezers**

In PAC kun je zien hoe een schermlezer het document interpreteert. Zo kun je controleren of dit gelijk is aan de visuele weergave. Je doet dit als volgt:

Klik op het oog-icoon om de schermlezer-weergave te openen.

![](https://properaccess.nl/wp-content/uploads/2025/05/screenshot2-1024x1004.png)

Zet je document open naast PAC en vergelijk de weergaven door tegelijkertijd te scrollen.

![](https://properaccess.nl/wp-content/uploads/2025/05/screenshot3-1024x647.png)

Let hierbij op de volgende punten:

- **Koppen**: moeten als koppen (h1 – h6) gemarkeerd zijn.

- **Paragrafen**: moeten netjes in P-tags staan en overeenkomen met wat je in het document ziet. Als in het document een nieuwe alinea begint (witregel), dan moet die alinea in een nieuwe P-tag staan.

- **Leesvolgorde**: moet logisch en consistent zijn met de visuele weergave van je document.

- **Afbeeldingen**: informatieve afbeeldingen moeten in Figure-tags staan en voorzien zijn van een goede alternatieve tekst (alt-tekst). Decoratieve afbeeldingen mogen niet in de tags voorkomen.

- **Lijsten**: moeten met L- en Li-tags worden gemarkeerd.

- **Tabellen**: datatabellen moeten TH-tags hebben voor kolomkoppen en TD-tags voor datacellen. Vermijd complexe tabellen waar mogelijk.

Als er iets niet klopt, pas je dit in het brondocument aan.

### Stap 4: Pas waar nodig de metadata aan

De metadata van je document kun je aanpassen met commerciële software zoals Adobe Acrobat (kost circa 285 euro per jaar). Als je liever een gratis oplossing wilt, kun je ook gebruikmaken van tools zoals [Sejda PDF Metadata Editor](https://www.sejda.com/edit-pdf-metadata). Houd er echter rekening mee dat je je document hiermee deelt met een externe dienst.

### Stap 5: Test nog een keer

Heb je alle problemen opgelost, en handmatig gecontroleerd of bijvoorbeeld de alternatieve teksten van de afbeeldingen kloppen? Test dan nog een laatste keer om te bevestigen dat het document volledig toegankelijk is. Veel succes met het toegankelijk maken van je pdf’s!
