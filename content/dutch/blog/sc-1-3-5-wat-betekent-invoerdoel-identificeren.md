---
title: "SC 1.3.5 - Wat betekent "Invoerdoel identificeren""
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-3-5"
  - "formulier"
description: "WCAG 1.3.5 vereist dat invoervelden een duidelijk doel hebben via het autocomplete-attribuut. Leer hoe je formulieren slim en toegankelijk maakt."
---

Stel je voor: je vult voor de zoveelste keer een contactformulier in. Naam, e-mail, telefoonnummer, adres. Je browser kent die gegevens allang, maar het formulier werkt niet mee. Je moet alles handmatig typen. Irritant als je haast hebt, maar een echt probleem als je een motorische beperking hebt en elke toetsaanslag moeite kost.

**WCAG succescriterium 1.3.5** (Identify Input Purpose) eist dat invoervelden die persoonlijke gegevens verzamelen, een duidelijk doel hebben dat browsers en hulpsoftware kunnen herkennen. In de praktijk betekent dat: gebruik het `autocomplete`-attribuut.

## Waarom is dit belangrijk?

Het `autocomplete`-attribuut doet meer dan alleen autofill mogelijk maken. Het helpt ook:

- **Mensen met cognitieve beperkingen** -- sommige tools tonen iconen bij invoervelden (een telefoontje bij "tel", een envelop bij "email"). Dat maakt formulieren visueel duidelijker.
- **Mensen met een motorische beperking** -- minder typen betekent minder belasting. Autofill kan een formulier van vijf minuten terugbrengen naar tien seconden.
- **Iedereen** -- autofill is gewoon fijn. Het bespaart tijd en voorkomt tikfouten.

## Wat wordt er verwacht?

Gebruik het `autocomplete`-attribuut op invoervelden die persoonlijke informatie verzamelen. De meest voorkomende waarden:

| Autocomplete-waarde | Wat het betekent |
|---|---|
| `name` | Volledige naam |
| `given-name` | Voornaam |
| `family-name` | Achternaam |
| `email` | E-mailadres |
| `tel` | Telefoonnummer |
| `street-address` | Straatnaam en huisnummer |
| `postal-code` | Postcode |
| `country` | Land |
| `bday` | Geboortedatum |
| `new-password` | Nieuw wachtwoord |
| `current-password` | Huidig wachtwoord |

De volledige lijst staat in de [HTML-specificatie](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute).

## Wat is niet verplicht?

- Velden die geen persoonlijke informatie verzamelen (zoekvelden, opmerkingenvelden, productfilters) hoeven geen `autocomplete` te hebben.
- Velden in een context waar autofill ongewenst is (zoals een quiz of test) zijn uitgezonderd.

## Veelgemaakte fouten

- **Helemaal geen autocomplete-attribuut.** Dit is veruit de meest voorkomende fout. Het kost een paar seconden om toe te voegen, maar wordt standaard vergeten.
- **Verkeerde waarden.** `autocomplete="on"` is niet genoeg -- je moet de specifieke waarde opgeven (`email`, `tel`, etc.).
- **Autocomplete uitgeschakeld.** `autocomplete="off"` op velden die het wel zouden moeten ondersteunen. Sommige browsers negeren dit overigens bewust.

## Voorbeeld

```html
<form>
  <label for="naam">Naam</label>
  <input type="text" id="naam" name="naam" autocomplete="name">

  <label for="email">E-mailadres</label>
  <input type="email" id="email" name="email" autocomplete="email">

  <label for="tel">Telefoonnummer</label>
  <input type="tel" id="tel" name="tel" autocomplete="tel">
</form>
```

## Wat kun je als webredacteur of manager doen?

- **Controleer je formulieren**: hebben de velden voor naam, e-mail en telefoon het juiste `autocomplete`-attribuut?
- **Test met autofill**: werkt automatisch invullen in Chrome, Firefox en Safari?
- **Vraag je webbouwer**: worden invoerdoelen correct geidentificeerd in de HTML?

Duidelijke invoervelden helpen gebruikers sneller en makkelijker formulieren invullen. Het is niet alleen beter voor de toegankelijkheid, maar maakt je site gebruiksvriendelijker voor iedereen.
