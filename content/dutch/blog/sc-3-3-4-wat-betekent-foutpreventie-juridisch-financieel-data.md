---
title: 'SC 3.3.4 - Wat betekent \"Foutpreventie (juridisch, financieel, data)\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-3-4"
  - "formulier"
description: "WCAG 3.3.4 vereist foutpreventie bij juridische, financiele of data-transacties. Lees de eisen voor bevestigings- en correctiemogelijkheden."
---

Je bestelt een vliegticket online. Je typt per ongeluk Amsterdam in plaats van Rotterdam als bestemming. Je klikt op "Bevestigen" en de boeking is definitief. Geen bevestigingsscherm, geen mogelijkheid om terug te gaan, geen "Weet je het zeker?". Het ticket is gekocht, en annuleren kost je geld.

Dat is precies het scenario waar **WCAG succescriterium 3.3.4** (Error Prevention - Legal, Financial, Data) tegen beschermt. Bij transacties met juridische, financiele of persoonlijke gevolgen moet de gebruiker de kans krijgen om fouten te voorkomen of te herstellen.

## Wanneer geldt dit criterium?

SC 3.3.4 geldt voor drie typen transacties:

### 1. Juridische verplichtingen

Acties die een wettelijke overeenkomst creëren:
- Een contract ondertekenen
- Akkoord gaan met voorwaarden
- Een abonnement afsluiten
- Een verzekeringsaanvraag indienen

### 2. Financiele transacties

Acties die geld kosten of financiele gevolgen hebben:
- Een product kopen
- Een betaling uitvoeren
- Een donatie doen
- Een abonnement met betaling starten

### 3. Wijzigingen in gebruikersdata

Acties die door de gebruiker beheerde gegevens wijzigen of verwijderen:
- Persoonsgegevens aanpassen in een profiel
- Een account verwijderen
- Gegevens definitief wissen
- Een formulier met persoonlijke informatie indienen

## Wat wordt er verwacht?

Bij deze transacties moet je minstens een van de volgende drie mogelijkheden bieden:

### Controleren (reviewen voor verzending)

Toon een overzichtspagina waarin de gebruiker alle ingevoerde gegevens kan controleren voordat het formulier definitief wordt verzonden.

**Voorbeeld:** een webshop die na het invullen van adres- en betaalgegevens een bevestigingspagina toont met een samenvatting van de bestelling, het afleveradres en het totaalbedrag, met een "Bevestig bestelling"-knop.

### Bevestigen (expliciet akkoord vragen)

Vraag de gebruiker om een expliciete bevestiging voordat een onomkeerbare actie wordt uitgevoerd.

**Voorbeeld:** "Weet je zeker dat je je account wilt verwijderen? Dit kan niet ongedaan worden gemaakt." met een "Ja, verwijder mijn account"-knop en een "Annuleren"-knop.

### Corrigeren (terugdraaien na verzending)

Geef de gebruiker de mogelijkheid om een actie ongedaan te maken na verzending.

**Voorbeeld:** een bestelbevestiging met een "Annuleer bestelling"-optie die gedurende een bepaalde periode beschikbaar is.

## Voorbeelden uit de praktijk

### Webshop bestelproces

**Goed:**
1. Stap 1: Producten in winkelwagen
2. Stap 2: Adresgegevens invullen
3. Stap 3: Betaalmethode kiezen
4. Stap 4: **Besteloverzicht** -- samenvatting van alles, met "Wijzig"-links bij elke sectie
5. Stap 5: "Bestelling plaatsen"-knop

**Fout:**
1. Producten in winkelwagen
2. Alles in een formulier
3. "Betaal nu" -- bestelling is geplaatst zonder overzicht

### Accountverwijdering

**Goed:** "Weet je zeker dat je je account wilt verwijderen? Je verliest al je gegevens en bestellingen. Typ 'VERWIJDER' om te bevestigen."

**Fout:** een "Account verwijderen"-link die direct uitvoert zonder bevestiging.

### Persoonlijke gegevens wijzigen

**Goed:** na het wijzigen van je e-mailadres ontvang je een bevestigingsmail op het oude adres met de mogelijkheid om de wijziging ongedaan te maken.

**Fout:** e-mailadres direct gewijzigd zonder bevestiging, geen mogelijkheid om terug te draaien.

## Veelgemaakte fouten

- Bestellingen die direct geplaatst worden na het invullen van betaalgegevens, zonder bevestigingspagina
- Formulieren voor persoonlijke gegevens zonder overzichtspagina
- Account- of gegevensverwijdering zonder "Weet je het zeker?"-dialoog
- Abonnementen die automatisch starten na het invullen van een formulier zonder bevestigingsstap
- Geen mogelijkheid om een bestelling of aanvraag te annuleren na verzending

## Het verschil met SC 3.3.6

SC 3.3.4 (niveau AA) geldt voor juridische, financiele en data-transacties. SC 3.3.6 (niveau AAA) is breder: die geldt voor **alle** formulieren die de gebruiker invult. In de praktijk is het slim om het bevestigingspatroon overal toe te passen, niet alleen bij de drie genoemde categorieën.

## Wat kun je als webredacteur of manager doen?

- **Controleer je bestelproces**: is er een overzichtspagina voordat de bestelling definitief wordt?
- **Test accountwijzigingen**: kun je fouten corrigeren of acties terugdraaien?
- **Controleer formulieren met persoonlijke gegevens**: is er een bevestigingsstap?
- **Vraag je webbouwer**: is er bij elke onomkeerbare actie een bevestigingsdialoog?

Foutpreventie is niet alleen een toegankelijkheidseis -- het is gewoon goed webdesign. Niemand wil per ongeluk een verkeerde bestelling plaatsen of z'n account kwijtraken.
