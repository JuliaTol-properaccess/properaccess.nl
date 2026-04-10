---
title: 'SC 3.3.2 - Wat betekent \"Labels en instructies\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-3-2"
  - "formulier"
  - "labels"
description: "WCAG 3.3.2 vereist duidelijke labels en instructies bij formulieren. Lees hoe je invoervelden begrijpelijk maakt voor alle gebruikers."
---

Je komt op een formulier met vijf velden. Geen labels, alleen placeholders die verdwijnen zodra je begint te typen. Halverwege het formulier weet je niet meer wat je in het eerste veld hebt getypt, laat staan of het het juiste veld was. Er staat "Verplicht" bij sommige velden, maar welke? En dat telefoonnummerveld -- moet je +31 ervoor zetten of niet?

Dit soort formulieren zijn overal. En ze zijn een groot probleem voor mensen met cognitieve beperkingen, laaggeletterden, en schermlezergebruikers.

**WCAG succescriterium 3.3.2** (Labels or Instructions) eist dat invoervelden voorzien zijn van labels of instructies die duidelijk maken wat er verwacht wordt.

## Het verschil met andere criteria

SC 3.3.2 wordt vaak verward met twee verwante criteria:

- **SC 1.3.1** (Info and Relationships) gaat over de technische koppeling: is het `<label>` correct verbonden met het `<input>` in de code?
- **SC 2.4.6** (Headings and Labels) gaat over de beschrijvende kwaliteit: is de labeltekst duidelijk genoeg?
- **SC 3.3.2** gaat over de aanwezigheid: is er überhaupt een label of instructie aanwezig?

In de praktijk overlappen ze, maar SC 3.3.2 is het meest fundamenteel: zorg dat er iets is dat de gebruiker vertelt wat er verwacht wordt.

## Wat wordt er verwacht?

### Zichtbare labels

Elk invoerveld moet een **zichtbaar, permanent label** hebben. Niet alleen een placeholder.

```html
<!-- Goed: zichtbaar label -->
<label for="email">E-mailadres</label>
<input type="email" id="email" name="email">

<!-- Fout: alleen placeholder -->
<input type="email" placeholder="E-mailadres">
```

Waarom is een placeholder niet genoeg? Omdat die verdwijnt zodra je begint te typen. Als je halverwege het formulier bent, kun je niet meer zien wat er in de eerdere velden verwacht werd.

### Instructies voor bijzondere invoer

Als een veld een specifiek formaat vereist, moet je dat vermelden:

```html
<label for="tel">Telefoonnummer</label>
<input type="tel" id="tel" name="tel" aria-describedby="tel-hint">
<span id="tel-hint">Formaat: 06-12345678</span>
```

### Verplichte velden markeren

Als niet alle velden verplicht zijn, moet je aangeven welke wel verplicht zijn:

```html
<label for="naam">Naam <span aria-label="verplicht">*</span></label>
<input type="text" id="naam" name="naam" required>
```

Vermeld bovenaan het formulier wat het sterretje betekent: "Velden met een * zijn verplicht."

## Veelgemaakte fouten

### 1. Placeholder als enig label

De meest voorkomende fout. Een formulier met alleen placeholders ziet er clean uit, maar is ontoegankelijk. Placeholders verdwijnen bij invoer, hebben vaak te laag contrast, en worden niet door alle schermlezers als label herkend.

### 2. Label dat te ver van het veld staat

Als het label visueel niet duidelijk bij het veld hoort, weten gebruikers niet welk label bij welk veld hoort. Houd labels direct boven of links van het veld.

### 3. Geen format-instructie

Een datumveld zonder formaat: moet je 11-03-2026, 03/11/2026 of 11 maart 2026 typen? Een IBAN-veld zonder voorbeeld: met of zonder spaties?

### 4. Onduidelijke foutmeldingen als enige instructie

Sommige formulieren geven pas uitleg als je een fout maakt: "Ongeldig telefoonnummer". Maar welk formaat is dan wél geldig? Geef de instructie vooraf, niet achteraf.

### 5. Groepslabels ontbreken

Bij een groep radiobuttons of checkboxen moet de groep als geheel een label hebben:

```html
<!-- Goed: groepslabel met fieldset/legend -->
<fieldset>
  <legend>Hoe wil je betalen?</legend>
  <input type="radio" id="ideal" name="betaal" value="ideal">
  <label for="ideal">iDEAL</label>
  <input type="radio" id="credit" name="betaal" value="credit">
  <label for="credit">Creditcard</label>
</fieldset>
```

## Praktische checklist voor formulieren

- Heeft elk invoerveld een **zichtbaar label** dat niet verdwijnt?
- Is bij elk veld duidelijk of het **verplicht** is?
- Staat er bij velden met een specifiek formaat een **voorbeeld of instructie**?
- Hebben groepen van radiobuttons of checkboxen een **groepslabel**?
- Zijn instructies beschikbaar **voor** het invullen, niet pas na een fout?

## Wat kun je als webredacteur of manager doen?

- **Vul je eigen formulieren in**: is bij elk veld duidelijk wat er verwacht wordt?
- **Test met lege velden**: als je alle placeholders wegdenkt, is het formulier dan nog begrijpelijk?
- **Controleer format-eisen**: geef je bij data, telefoonnummers en postcodes aan welk formaat je verwacht?
- **Vraag je webbouwer**: zijn alle labels technisch gekoppeld aan de juiste velden?

Een goed gelabeld formulier is sneller in te vullen, leidt tot minder fouten, en werkt voor iedereen. Het kost een paar minuten extra bij het bouwen, maar bespaart frustratie en supportvragen.
