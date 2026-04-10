---
title: 'SC 3.3.7 - Wat betekent \"Redundante invoer\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-3-7"
  - "formulier"
description: "WCAG 3.3.7 stelt dat gebruikers eerder ingevoerde informatie niet opnieuw hoeven in te vullen. Lees hoe je redundante invoer voorkomt."
---

Je bent bezig met een online bestelling. In stap 1 vul je je naam en adres in. In stap 2 vraagt het formulier opnieuw om je naam. In stap 3 moet je je adres nog een keer invullen voor de facturatie. Je hebt dezelfde informatie drie keer getypt.

Voor jou is dat vervelend. Voor iemand met een motorische beperking die elke toetsaanslag moeite kost, is het drie keer zo veel moeite als nodig. Voor iemand met een cognitieve beperking die moeite heeft met typen en formulieren, is het drie keer zo veel kans op fouten en frustratie.

**WCAG succescriterium 3.3.7** (Redundant Entry) eist dat informatie die de gebruiker eerder in hetzelfde proces heeft ingevoerd, niet opnieuw gevraagd wordt -- tenzij dat nodig is voor beveiliging of de informatie niet meer geldig is.

## Nieuw in WCAG 2.2

Dit criterium is toegevoegd in WCAG 2.2 en is niveau A. Het is een van de criteria die gericht zijn op het verminderen van de cognitieve belasting bij het invullen van formulieren.

## Wat wordt er verwacht?

Als een gebruiker informatie al heeft ingevoerd in een eerder stap van hetzelfde proces, moet die informatie:

- **Automatisch ingevuld** worden in latere stappen, of
- **Beschikbaar zijn om te selecteren** (bijvoorbeeld via een checkbox "Factuuradres is hetzelfde als afleveradres"), of
- **Niet opnieuw gevraagd** worden

## Waar kom je dit tegen?

### Bestelprocessen in webshops

Het klassieke voorbeeld: afleveradres en factuuradres. De meeste klanten hebben hetzelfde adres voor beiden.

**Goede oplossing:**

```html
<h2>Factuuradres</h2>
<label>
  <input type="checkbox" id="same-address" checked>
  Factuuradres is hetzelfde als afleveradres
</label>
<!-- Factuuradresvelden worden alleen getoond als de checkbox uit staat -->
```

### Formulieren met meerdere stappen

Een aanmeldformulier dat in stap 1 om je e-mailadres vraagt en in stap 3 opnieuw.

**Goede oplossing:** toon het e-mailadres in stap 3 als vooraf ingevuld veld, of verwijs naar wat er al is ingevuld: "We sturen de bevestiging naar het e-mailadres dat je in stap 1 hebt opgegeven."

### Retourformulieren

Een retourformulier dat opnieuw om je bestelnummer en adresgegevens vraagt, terwijl je ingelogd bent en die informatie al beschikbaar is.

**Goede oplossing:** vul de bekende gegevens automatisch in op basis van het account.

### Enquêtes en vragenlijsten

Een vragenlijst die op pagina 3 opnieuw om je naam en e-mailadres vraagt, terwijl je die op pagina 1 al hebt ingevuld.

## Wanneer mag je wél opnieuw vragen?

Er zijn legitieme redenen om informatie opnieuw te vragen:

- **Beveiliging** -- het opnieuw invoeren van een wachtwoord bij een gevoelige actie (account verwijderen, betaling bevestigen)
- **Vervallen informatie** -- als de eerder ingevoerde informatie mogelijk niet meer klopt (bijvoorbeeld een sessie die is verlopen)
- **Bewuste bevestiging** -- "Typ je e-mailadres nogmaals om tikfouten te voorkomen" bij accountregistratie

Dat laatste is een grijs gebied. Het opnieuw typen van een e-mailadres bij registratie is een veelgebruikt patroon dat bedoeld is om fouten te voorkomen. WCAG staat dit toe als het een beveiligings- of verificatiedoel dient.

## Veelgemaakte fouten

- **Aflever- en factuuradres apart vragen** zonder "zelfde adres"-optie
- **Contactformulieren** die opnieuw om naam en e-mail vragen terwijl de gebruiker ingelogd is
- **Meerstappenformulieren** die in latere stappen informatie herhalen die al is ingevuld
- **Retourprocessen** die gegevens opnieuw vragen die al in het account staan
- **Enquêtes** die op meerdere pagina's dezelfde demografische vragen stellen

## Het verschil met autocomplete (SC 1.3.5)

SC 1.3.5 gaat over het `autocomplete`-attribuut, waardoor de browser eerder ingevulde gegevens kan voorstellen. SC 3.3.7 gaat over informatie die de gebruiker **binnen hetzelfde proces** al heeft ingevoerd. Het verschil: autocomplete helpt bij het invullen van nieuwe formulieren op basis van browsergeheugen. Redundante invoer gaat over het niet herhalen van vragen binnen een lopend proces.

## Wat kun je als webredacteur of manager doen?

- **Loop je bestelproces door**: moet je ergens dezelfde informatie twee keer invullen?
- **Test formulieren met meerdere stappen**: worden gegevens uit eerdere stappen hergebruikt?
- **Controleer ingelogde processen**: worden bekende gegevens automatisch ingevuld?
- **Vraag je webbouwer**: worden sessiegegevens correct doorgegeven tussen formulierstappen?

Redundante invoer voorkomen is niet alleen een toegankelijkheidseis -- het maakt je formulieren sneller en prettiger voor iedereen. En snellere formulieren leiden tot hogere conversie.
