---
title: 'SC 3.3.8 - Wat betekent \"Toegankelijke authenticatie\"'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-3-7"
description: "WCAG 3.3.8 vereist toegankelijke authenticatie zonder onnodige obstakels zoals CAPTCHA. Lees de alternatieven en hoe je ze implementeert."
aliases:
  - /sc-3-3-7-wat-betekent-toegankelijke-authenticatie/
---

Je wilt inloggen op een website. Eerst moet je een wachtwoord van zestien tekens typen dat je uit je hoofd moet kennen. Dan krijg je een CAPTCHA met vervormde tekst die je moet ontcijferen. Vervolgens moet je alle verkeerslichten in een raster aanklikken. En als je een fout maakt, begin je van voren af aan.

Voor de meeste mensen is dat vervelend. Voor iemand met dyslexie, een visuele beperking of een cognitieve beperking kan het een onoverkomelijke drempel zijn.

**WCAG succescriterium 3.3.8** (Accessible Authentication) eist dat authenticatiemethoden geen onnodige cognitieve functietests opleggen, tenzij er een alternatief beschikbaar is.

## Wat is een cognitieve functietest?

Een cognitieve functietest is een taak die je vraagt om iets te onthouden, te herkennen, te puzzelen of te berekenen. In de context van authenticatie zijn dat:

- **Wachtwoorden onthouden** -- uit je hoofd, zonder wachtwoordmanager
- **CAPTCHA's oplossen** -- vervormde tekst lezen, objecten herkennen in foto's
- **Puzzels oplossen** -- schuifpuzzels, patroonherkenning
- **Vragen beantwoorden** -- "Wat is de naam van je eerste huisdier?"

Het punt is niet dat deze methoden per definitie verboden zijn. Het punt is dat er een alternatief moet zijn dat geen beroep doet op geheugen, herkenning of puzzelvaardigheden.

## Wat wordt er verwacht?

De kern van het criterium: als je een cognitieve functietest gebruikt voor authenticatie, moet je minstens een van deze alternatieven bieden:

- **Kopieer-plakken toestaan** in wachtwoordvelden, zodat wachtwoordmanagers werken
- **Een alternatieve authenticatiemethode** zoals een magische link via e-mail, een sms-code, of biometrische authenticatie (vingerafdruk, gezichtsherkenning)
- **Passkeys** -- de moderne vervanging van wachtwoorden, ondersteund door alle grote browsers
- **OAuth/SSO** -- inloggen via een bestaand account (Google, Apple, etc.)

## Wat is het verschil tussen 3.3.7 en 3.3.8?

WCAG 2.2 heeft twee niveaus van dit criterium:

- **SC 3.3.7** (niveau A): je mag geen cognitieve functietest vereisen, tenzij je een alternatief biedt. Objectherkenning-CAPTCHA's (zoals "klik alle bussen aan") tellen als alternatief.
- **SC 3.3.8** (niveau AA): strenger. Objectherkenning-CAPTCHA's tellen niet meer als geldig alternatief. Je moet een methode bieden die helemaal geen cognitieve test vereist.

Voor de meeste organisaties die AA-conformiteit nastreven, is 3.3.8 het relevante criterium.

## Veelgemaakte fouten

- **Kopieer-plakken blokkeren** in wachtwoordvelden -- dit voorkomt dat wachtwoordmanagers werken en is de meest voorkomende fout
- **Alleen CAPTCHA als verificatie** zonder alternatief. Ook reCAPTCHA v2 ("klik alle fietsen aan") is problematisch
- **Beveiligingsvragen** als enige herstelmethode -- "Wat is je moeders meisjesnaam?" vereist geheugen
- **Tijdgebonden verificatiecodes** die te kort geldig zijn voor mensen die moeite hebben met snel typen
- **Tweefactorauthenticatie** die alleen via sms werkt, zonder alternatief voor mensen die moeite hebben met het overschrijven van codes

## Moderne alternatieven die wel werken

| Methode | Cognitieve belasting | Toegankelijkheid |
|---|---|---|
| Wachtwoord + wachtwoordmanager (plakken toegestaan) | Laag | Goed |
| Passkeys (WebAuthn) | Zeer laag | Uitstekend |
| Magische link via e-mail | Laag | Goed |
| Biometrie (vingerafdruk/gezicht) | Geen | Uitstekend |
| OAuth/SSO (inloggen via Google etc.) | Laag | Goed |
| reCAPTCHA v3 (onzichtbaar, score-based) | Geen | Uitstekend |

## Wat kun je als webredacteur of manager doen?

- **Test of wachtwoordvelden plakken toestaan** -- open je wachtwoordmanager en probeer het
- **Controleer je CAPTCHA** -- is er een alternatief voor mensen die de visuele puzzel niet kunnen oplossen?
- **Vraag je webbouwer**: ondersteunen we passkeys of andere moderne authenticatiemethoden?
- **Test met een schermlezer**: kan iemand het volledige inlogproces doorlopen zonder visuele puzzels?

Toegankelijke authenticatie hoeft niet ten koste te gaan van beveiliging. Passkeys zijn zelfs veiliger dan wachtwoorden. Je maakt je website niet alleen toegankelijker, maar ook moderner en gebruiksvriendelijker.
