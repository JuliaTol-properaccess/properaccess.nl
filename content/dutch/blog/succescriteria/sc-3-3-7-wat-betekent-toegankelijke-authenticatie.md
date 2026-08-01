---
title: 'SC 3.3.8 - Wat betekent "Toegankelijke authenticatie"'
translationKey: "sc-3-3-8"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "3-3-8"
description: "WCAG 3.3.8 vraagt om toegankelijke authenticatie zonder onnodige obstakels zoals CAPTCHA. Lees de alternatieven en hoe je ze toepast."
aliases:
  - /sc-3-3-7-wat-betekent-toegankelijke-authenticatie/
---

Je wilt inloggen op een website. Eerst moet je een wachtwoord van zestien tekens typen dat je uit je hoofd moet kennen. Dan krijg je een CAPTCHA met vervormde tekst die je moet ontcijferen. Vervolgens moet je alle verkeerslichten in een raster aanklikken. En als je een fout maakt, begin je van voren af aan.

Voor de meeste mensen is dat vervelend. Voor iemand met dyslexie, een visuele beperking of een cognitieve beperking kan het een onoverkomelijke drempel zijn.

**WCAG succescriterium 3.3.8** (Accessible Authentication) vraagt dat authenticatiemethoden geen onnodige cognitieve functietests opleggen, tenzij er een alternatief beschikbaar is.

## Wat is een cognitieve functietest?

Een cognitieve functietest is een taak die je vraagt om iets te onthouden, te herkennen, te puzzelen of te berekenen. In de context van authenticatie zijn dat:

- **Wachtwoorden onthouden** -- uit je hoofd, zonder wachtwoordmanager
- **CAPTCHA's oplossen** -- vervormde tekst overtypen, objecten herkennen in foto's. Alleen die eerste is een afkeur op niveau AA; zie de uitzonderingen verderop
- **Puzzels oplossen** -- schuifpuzzels, patroonherkenning
- **Vragen beantwoorden** -- "Wat is de naam van je eerste huisdier?"

Het punt is niet dat deze methoden per definitie verboden zijn. Het punt is dat er een alternatief moet zijn dat geen beroep doet op geheugen, herkenning of puzzelvaardigheden.

## Wat wordt er verwacht?

De kern van het criterium: als je een cognitieve functietest gebruikt voor authenticatie, moet je minstens een van deze alternatieven bieden:

- **Kopieer-plakken toestaan** in wachtwoordvelden, zodat wachtwoordmanagers werken
- **Een alternatieve authenticatiemethode** zoals een magische link via e-mail, een sms-code, of biometrische authenticatie (vingerafdruk, gezichtsherkenning)
- **Passkeys** -- de moderne vervanging van wachtwoorden, ondersteund door alle grote browsers
- **OAuth/SSO** -- inloggen via een bestaand account (Google, Apple, enzovoort)

## Verwar 3.3.8 niet met 3.3.7

In WCAG 2.2 gaat **3.3.7 Overbodige invoer** (niveau A) ergens anders over: informatie die je eerder in hetzelfde proces hebt ingevuld, mag niet nog een keer worden opgevraagd. Dat criterium heeft niets met inloggen te maken.

Toegankelijke authenticatie heeft wel twee niveaus, maar die heten anders:

- **SC 3.3.8 Toegankelijke authenticatie (minimum)**, niveau AA. Dit is het criterium waar de meeste organisaties zich aan moeten houden.
- **SC 3.3.9 Toegankelijke authenticatie (uitgebreid)**, niveau AAA. Zelfde regel, maar met minder uitzonderingen.

### Welke uitzonderingen kent 3.3.8?

Een cognitieve functietest mag onder 3.3.8 als de stap minstens één van deze vier biedt:

1. **Een alternatief**: een andere manier om in te loggen die geen cognitieve test vraagt.
2. **Een hulpmiddel**: iets dat je helpt de test te doorlopen, zoals plakken toestaan zodat een wachtwoordmanager het werk doet.
3. **Objectherkenning**: de test vraagt alleen om alledaagse objecten te herkennen.
4. **Eigen content**: de test vraagt om niet-tekstuele content te herkennen die je zelf hebt geüpload.

Dat betekent iets dat vaak verkeerd wordt onthouden: een CAPTCHA van het type "klik alle bussen aan" is op niveau AA toegestaan. Onder 3.3.9 (AAA) niet meer, want daar vallen de uitzonderingen objectherkenning en eigen content weg.

Wat wél afkeurt op AA: een CAPTCHA met vervormde tekst die je moet overtypen. Dat is geen objectherkenning maar transcriptie, en dat is precies wat het criterium verbiedt.

## Veelgemaakte fouten

- **Kopieer-plakken blokkeren** in wachtwoordvelden -- dit voorkomt dat wachtwoordmanagers werken en is de meest voorkomende fout
- **Een CAPTCHA met vervormde tekst** als enige verificatie. Overtypen wat je nauwelijks kunt lezen valt onder geen enkele uitzondering en is dus een afkeur op AA. Een plaatjes-CAPTCHA als reCAPTCHA v2 ("klik alle fietsen aan") mag op AA wel, maar houdt nog steeds bezoekers buiten: bied er iets naast aan
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
| OAuth/SSO (inloggen via Google enzovoort) | Laag | Goed |
| reCAPTCHA v3, onzichtbaar en op basis van gedrag | Geen | Uitstekend |

## Wat kun je als webredacteur of manager doen?

- **Test of wachtwoordvelden plakken toestaan** -- open je wachtwoordmanager en probeer het
- **Controleer je CAPTCHA** -- is er een alternatief voor mensen die de visuele puzzel niet kunnen oplossen?
- **Vraag je webbouwer**: ondersteunen we passkeys of andere moderne authenticatiemethoden?
- **Test met een schermlezer**: kan iemand het volledige inlogproces doorlopen zonder visuele puzzels?

Toegankelijke authenticatie hoeft niet ten koste te gaan van beveiliging. Passkeys zijn zelfs veiliger dan wachtwoorden. Je maakt je website niet alleen toegankelijker, maar ook moderner en gebruiksvriendelijker.
