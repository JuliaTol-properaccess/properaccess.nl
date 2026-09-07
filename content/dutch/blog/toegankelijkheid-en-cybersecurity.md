---
title: "Toegankelijkheid en cybersecurity hoeven geen tegenpolen te zijn"
date: 2026-09-07
slug: "toegankelijkheid-en-cybersecurity-hoeven-geen-tegenpolen-te-zijn"
meta_title: "Toegankelijkheid en cybersecurity: geen tegenpolen"
breadcrumb_title: "Toegankelijkheid en cybersecurity"
coauthors:
  - name: "Janita Top"
    url: "https://janitatop.nl/"
categories:
  - "wcag-uitgelegd"
  - "achtergrond_wcag"
tags:
  - "wcag"
  - "cybersecurity"
  - "beveiliging"
  - "captcha"
  - "sessietimeout"
  - "authenticatie"
description: "Captcha's, sessietimeouts en wachtwoordregels botsen vaak met toegankelijkheid. Zo maak je je site tegelijk veilig en bruikbaar, met WCAG als leidraad."
keywords:
  - toegankelijkheid en beveiliging
  - cybersecurity toegankelijkheid
  - captcha toegankelijkheid
  - sessietimeout wcag 2.2.1
  - wachtwoordregels toegankelijkheid
  - tweestapsverificatie toegankelijk
---

Beveiliging en toegankelijkheid worden vaak tegenover elkaar gezet. Hoe veiliger een site, hoe meer drempels je opwerpt, zo lijkt het. Een captcha hier, een sessie die verloopt daar, een wachtwoord met minstens 12 tekens en 3 hoofdletters. Voor de gemiddelde bezoeker vervelend, voor iemand met een beperking vaak het punt waarop het bezoek stopt.

Dat beeld klopt niet. Goede beveiliging en goede toegankelijkheid willen hetzelfde: de juiste persoon soepel binnenlaten en de rest tegenhouden. Een drempel die de echte gebruiker frustreert, houdt een vastberaden aanvaller zelden tegen.

## Captcha's: een test die de verkeerde buitensluit

Het bekendste voorbeeld is de captcha. Vervormde tekst overtypen, of alle plaatjes met een stoplicht aanklikken. Bedoeld om bots buiten te houden, maar in de praktijk sluit het vooral mensen buiten. Wie de afbeelding niet goed ziet, komt er niet doorheen. Wie moeite heeft met overtypen, ook niet.

WCAG vraagt via succescriterium 1.1.1 om een alternatief voor een ander zintuig, meestal een audioversie. In de praktijk is dat geen bruikbaar alternatief. Juist wie de afbeelding niet ziet, is erop aangewezen. Je hoort dan een reeks tekens door zoveel ruis en gekraak heen dat je het fragment 2 of 3 keer moet afspelen voordat je denkt te weten wat er staat. Daar komt bij dat de afspeelknop lang niet altijd met het toetsenbord te bedienen is, of dat de focus er niet naartoe gaat. En je moet de code daarna alsnog overtypen. Het alternatief staat er dus wel, alleen kom je er niet mee verder.

![Links een invoerveld met vervormde, onleesbare letters en daarboven een doorgestreept oog, met als bijschrift "Overtypen lukt niet". Rechts een afspeelknop met ruisgolven en een doorgestreept toetsenbord, met als bijschrift "Het audio-alternatief ook niet".](/images/blog/cyber-captcha.webp)

Het goede nieuws: een zichtbare puzzel is allang niet meer de enige manier om bots buiten te houden. Er zijn aanpakken die de bezoeker helemaal niet belasten:

- Honeypot-velden: een veld dat een bezoeker niet ziet en een bot wel invult. Wel goed om te weten dat dit een oude truc is waar veel bots inmiddels omheen werken. Het helpt alleen nog als je het veld met CSS verbergt op een manier die niet meteen herkenbaar is, en er geen namen aan geeft als `honeypot` of `nospam`. Zet er `tabindex="-1"` en `autocomplete="off"` bij, zodat iemand met een toetsenbord of schermlezer er niet per ongeluk in terechtkomt.
- Risicoanalyse op de achtergrond, waarbij het gedrag op de pagina bepaalt of er iets verdachts is, zonder dat de bezoeker iets hoeft te doen.
- Snelheidslimieten op het aantal pogingen, zodat een bot die duizenden keren probeert vanzelf wordt geblokkeerd.

Beveiliging tegen bots is geen onzin. Het punt is dat je die achter de schermen kunt regelen, in plaats van als test aan je bezoeker.

## Sessietimeouts: genoeg tijd, ook als het even duurt

Om veiligheidsredenen logt een site je na een tijd inactiviteit automatisch uit. Verstandig op een gedeelde computer of bij een bankomgeving. Maar wie langzamer werkt, komt hier niet verder.

Bijvoorbeeld iemand die een formulier invult met een schermlezer, of met één vinger typt, of die tussendoor even iets moet opzoeken. Verloopt de sessie voordat het formulier af is, dan is de sessie weg en meestal ook alles wat er al was ingevuld. Opnieuw beginnen, en hopen dat het deze keer op tijd lukt.

Hoe je meet of iemand actief is, is een probleem op zich. Meestal kijkt de code alleen naar toetsaanslagen en muisbewegingen. Wie met steminvoer werkt, bijvoorbeeld met Dragon of met Voice Control op de Mac, produceert die niet. Je bent dan volop bezig terwijl de teller op de achtergrond doorloopt, en je wordt uitgelogd midden in een formulier. Neem dus meer signalen mee dan toetsenbord en muis: scrollen, focus die verspringt, en wijzigingen in formuliervelden.

Hier is WCAG duidelijk over. Succescriterium 2.2.1 Timing Adjustable vraagt dat de gebruiker een tijdslimiet kan uitzetten, verlengen of aanpassen. Er zijn uitzonderingen, bijvoorbeeld wanneer de limiet echt essentieel is voor de beveiliging, of langer duurt dan 20 uur. Maar zelfs dan kun je het een stuk vriendelijker maken:

- Waarschuw op tijd. Laat ruim voor de timeout een melding zien: "Je wordt over 2 minuten uitgelogd. Wil je doorgaan?" Dat is precies wat succescriterium 2.2.6 Timeouts op niveau AAA vraagt.
- Geef een knop om verder te gaan waarmee iemand de sessie verlengt zonder opnieuw in te loggen.
- Bewaar de ingevoerde gegevens. Word je toch uitgelogd, laat de gebruiker dan na het opnieuw inloggen verder op het punt waar het misging, in plaats van bij nul.

Zo houd je de korte sessie die je om veiligheidsredenen wilt, zonder dat langzamere bezoekers hun werk kwijtraken.

![Een browservenster met een half ingevuld formulier. Daaroverheen een venster met een zandloper en de tekst "Je wordt over 2 minuten uitgelogd", met daaronder een knop "Ingelogd blijven" en een knop "Uitloggen".](/images/blog/cyber-sessietimeout.webp)

## Wachtwoordregels zijn streng op de verkeerde dingen

Veel sites stellen strenge eisen aan wachtwoorden. Minstens één hoofdletter, één cijfer, één vreemd teken, en elke 3 maanden verplicht wijzigen. Het voelt veilig, maar het werkt vaak averechts. Mensen bedenken voorspelbare trucjes, plakken er een uitroepteken achter, en schrijven het op een briefje omdat ze het niet meer onthouden.

Moderne beveiligingsrichtlijnen, zoals die van het Amerikaanse National Institute of Standards and Technology (NIST), wijzen juist een andere kant op. De aanbevelingen daar komen neer op:

- Sta lange wachtzinnen toe in plaats van korte, ingewikkelde wachtwoorden. Een zin van 4 woorden is makkelijker te onthouden en moeilijker te kraken.
- Dwing geen verplichte wisselrondes af zonder aanleiding. Alleen wisselen als er een aanwijzing is dat een wachtwoord is uitgelekt.
- Sta plakken toe, zodat wachtwoordmanagers gewoon werken.
- Controleer tegen bekende gelekte wachtwoorden in plaats van willekeurige samenstellingsregels op te leggen.

![Links een kort wachtwoordveld met "P@ssw0rd!", drie afgekruiste regels en een geeltje op de rand, met als bijschrift "Streng op de verkeerde dingen". Rechts een breed veld met de wachtzin "paarse fiets zonder zadel", een vinkje en een slotje, met als bijschrift "Lang en te onthouden".](/images/blog/cyber-wachtwoord.webp)

Wat het wachtwoord veiliger maakt, is ook wat het voor de gebruiker makkelijker maakt. Ingewikkelde regels die mensen dwingen tot onthouden en overtypen, botsen ook met succescriterium 3.3.8 Accessible Authentication. Dat criterium verbiedt een verplichte cognitieve test bij het inloggen, zoals iets uit je hoofd onthouden of een reeks tekens overtypen. Dat mag alleen als er een alternatief of een hulpmiddel is. Een wachtwoordmanager die het veld invult, telt als zo'n hulpmiddel.

## Beveiligingsvragen en het misverstand rond autocomplete

Nog twee plekken waar goede bedoelingen verkeerd uitpakken.

De eerste zijn beveiligingsvragen. "Wat was de naam van je eerste huisdier?" Op het eerste gezicht lijkt WCAG 3.3.8 dat toe te staan, want er is een uitzondering voor content van de gebruiker zelf. Alleen geldt die uitzondering hier niet. De toelichting bij het criterium zegt er expliciet bij: "Text-based personal content does not qualify for this exception as it relies on recall (rather than recognition), and transcription (rather than selecting an item)." De uitzondering is bedoeld voor herkennen en aanwijzen, bijvoorbeeld je eigen foto uit een rijtje kiezen. De naam van je eerste huisdier moet je je herinneren en overtypen, en dat is precies wat 3.3.8 wil voorkomen. Beveiligingsvragen voldoen dus niet, en in de praktijk zijn ze ook nog een geheugentest die veel mensen laat gokken. Een wachtwoordloze methode of een tweede stap via een app is veiliger, en makkelijker voor de bezoeker.

De tweede is het uitzetten van automatisch invullen op gevoelige velden. Sommige sites, vooral van banken en verzekeraars, zetten `autocomplete="off"` op inlogvelden of blokkeren plakken, in de veronderstelling dat dat veiliger is.

Dat idee komt ergens vandaan. De HTML5 Security Cheat Sheet van het Open Worldwide Application Security Project (OWASP) adviseert nog steeds om autocomplete uit te zetten op formulieren met gevoelige gegevens. MDN Web Docs legt uit waar dat advies vandaan komt: op een gedeelde computer kan een opgeslagen wachtwoord bij de volgende gebruiker terechtkomen.

Dat advies is inmiddels achterhaald. Browsers negeren `autocomplete="off"` op inlog- en wachtwoordvelden grotendeels, juist omdat het advies mensen slechtere wachtwoorden liet kiezen. De huidige lijn in de beveiligingswereld is de omgekeerde: laat de wachtwoordmanager een lang, uniek wachtwoord genereren en invullen, en zet er tweestapsverificatie naast. Dat levert meer op dan het blokkeren van automatisch invullen ooit heeft gedaan.

Voor toegankelijkheid telt het dubbel. Blokkeer je automatisch invullen, dan botst dat met succescriterium 1.3.5 Identify Input Purpose, dat vraagt om het doel van velden machineleesbaar te maken, en met 3.3.8, want dan moet iemand zijn wachtwoord alsnog onthouden en overtypen. Laat de wachtwoordmanager gewoon zijn werk doen.

## Tweestapsverificatie vraagt om ruimte

Een extra stap bij het inloggen, met een code uit een sms of een app, maakt een account flink veiliger. Maar zo'n code brengt twee toegankelijkheidsvalkuilen mee.

De eerste is overtypen. Een code van 6 cijfers uit je berichten overnemen is voor veel mensen lastig, en valt sinds WCAG 2.2 onder succescriterium 3.3.8. Los het op door het codeveld `autocomplete="one-time-code"` te geven, zodat de telefoon de sms-code zelf aanbiedt, en door plakken niet te blokkeren.

De tweede valkuil is tijd. Een code die maar kort geldig is, is een bewuste beveiligingsmaatregel. WCAG erkent dat ook. De toelichting bij succescriterium 2.2.1 Timing Adjustable noemt een tijdgebonden tweestapscode als voorbeeld van een tijdslimiet die essentieel is voor de beveiliging. Zo'n limiet is uitgezonderd van de eis om de tijd te kunnen verlengen. De geldigheidsduur van de code zelf hoef je dus niet aanpasbaar te maken.

Tijd blijft wel meetellen. Kies een venster dat ruim genoeg is dat ook iemand die langzamer werkt de code op tijd invoert, en maak het makkelijk om een nieuwe code aan te vragen zonder het hele proces opnieuw te doorlopen.

Ook 3.3.7 Redundant Entry blijft gelden, dat vraagt om mensen niet onnodig dezelfde gegevens opnieuw te laten invoeren.

Een tweede stap die soepel werkt, gebruiken mensen ook echt. Een tweede stap die frustreert, zetten mensen uit zodra ze de kans krijgen, en dan ben je de beveiliging alsnog kwijt.

## Waarom dit één verhaal is

Slechte beveiliging herken je aan de drempels die de echte gebruiker in de weg staan terwijl ze een aanvaller amper afremmen. Ontwerp je een inlog of een betaling zo dat je slechtziende of langzaam typende bezoeker er nog doorheen komt, dan komt iedereen er doorheen. En je beveiliging wordt er niet minder van.

Wil je weten of de beveiligde onderdelen van jouw site echt te gebruiken zijn, zoals inloggen of betalen? Bel ons op 085 5055 890, dan kijken we mee.

Dit artikel schreven Julia Tol en Janita Top samen. Julia is oprichter en senior auditor bij Proper Access. Janita is zelfstandig adviseur digitale toegankelijkheid, je vindt haar werk op [janitatop.nl](https://janitatop.nl/).
