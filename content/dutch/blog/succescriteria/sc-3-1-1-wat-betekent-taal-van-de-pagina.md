---
title: "SC 3.1.1 - Wat betekent “Taal van de pagina”"
translationKey: "sc-3-1-1"
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
description: "WCAG 3.1.1 vraagt dat de hoofdtaal van elke pagina in de code staat. Lees waarom dat belangrijk is en hoe je het als webredacteur zelf controleert."
keywords:
  - WCAG 3.1.1
  - taal van de pagina
  - lang-attribuut
  - paginataal instellen
  - screenreader uitspraak
  - meertalige website toegankelijkheid
tags:
  - "3-1-1"
aliases:
  - /sc-3-1-1-wat-betekent-taal-van-de-pagina/
---

Voorleessoftware spreekt je tekst uit in de taal die de pagina opgeeft. Staat daar de verkeerde taal, dan leest een Engelse stem jouw Nederlandse tekst voor. Daarom zegt WCAG: **de hoofdtaal van elke pagina moet in de code zijn vastgelegd**.

Dit heet **3.1.1 Language of Page**.

## Wat zegt het criterium?

[WCAG-succescriterium 3.1.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) vraagt dat de hoofdtaal van elke webpagina in de HTML-code staat. Dat gebeurt met het lang-attribuut: een Nederlandstalige pagina begint met `<html lang="nl">`.

Dat klinkt als werk voor je webbouwer, en dat is het meestal ook. Maar als webredacteur merk jij de gevolgen als het misgaat, en kun je het zelf controleren. Zeker op een meertalige website: jij publiceert de vertaalde pagina's, dus jij ziet als eerste of de taalinstelling per pagina klopt.

## Waarom is dit belangrijk?

Voorleessoftware kiest op basis van de paginataal de juiste stem en uitspraakregels. Klopt die taal niet, dan wordt je tekst onverstaanbaar. Een Engelse stem die "Welkom bij de gemeente" voorleest, klinkt als een toerist die Nederlands probeert te lezen: de klanken kloppen niet en de woorden zijn nauwelijks te herkennen.

De paginataal doet meer dan alleen de uitspraak sturen:

- Brailleleesregels gebruiken de taal om tekst correct in braille om te zetten.
- Browsers bieden op basis van de paginataal een vertaling aan. Staat je Nederlandse pagina op "en", dan krijgen Engelstalige bezoekers geen vertaalknop te zien.
- Zoekmachines gebruiken de taal om je pagina aan de juiste bezoekers te tonen.

## Veelgemaakte fouten

- **Er is helemaal geen taal ingesteld.** Het lang-attribuut ontbreekt en voorleessoftware moet gokken welke stem ze gebruikt.
- **De verkeerde taal staat ingesteld.** Veel websitethema's komen uit het buitenland en staan standaard op "en". Wordt dat nooit aangepast, dan leest een Engelse stem alle Nederlandse pagina's voor.
- **De taalwissel wisselt niet mee.** De website heeft een Nederlandse en een Engelse versie, maar beide versies staan op "nl". De Engelse pagina's worden dan met een Nederlandse stem voorgelezen.
- **Losse anderstalige teksten zonder eigen taalmarkering.** Een Engelse quote of slogan midden in een Nederlandse pagina valt onder het zustercriterium [3.1.2 Taal van onderdelen](/blog/sc-3-1-2-wat-betekent-taal-van-onderdelen/).

## Zo controleer je het zelf

Je hoeft geen code te kunnen schrijven om dit te checken:

1. **Bekijk de paginabron.** Klik met de rechtermuisknop op je pagina en kies "Paginabron bekijken". Helemaal bovenaan zie je iets als `<html lang="nl">`. Staat daar de juiste taal? En ontbreekt lang helemaal, dan is dat je bevinding.
2. **Check elke taalversie.** Heeft je website meerdere talen? Herhaal de check dan op een pagina van elke taalversie. De Engelse versie hoort op "en" te staan, de Duitse op "de".
3. **Luister zelf.** Laat je pagina voorlezen met de ingebouwde voorleesfunctie van je telefoon of computer. Klinkt je Nederlandse tekst vreemd of Engels? Dan staat de taal waarschijnlijk verkeerd.

## Zo los je het op

- **Meld het aan je webbouwer.** De paginataal staat in het sjabloon van je website. Eén aanpassing daar lost het voor al je pagina's tegelijk op.
- **Stel bij meertalige websites de taal per pagina goed in.** De meeste systemen met een vertaalmodule zetten het lang-attribuut automatisch goed, zolang jij bij elke pagina de juiste taal kiest. Publiceer je een Engelse pagina onder de Nederlandse taalinstelling, dan gaat het alsnog mis.
- **Neem het op in je publicatiechecklist.** Vooral na een nieuw thema, een migratie of een nieuwe taalversie is dit een check van 10 seconden die veel ellende voorkomt.

## Controleer je pagina's met WCAG Radar

Wil je weten hoe jouw pagina's ervoor staan? Gebruik de gratis [WCAG Radar van Proper Access](/tools/wcag-radar/). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. Je ziet direct of de paginataal is ingesteld en welke onderdelen een andere taal hebben.

De radar vervangt geen volledige audit, maar helpt je de meest voorkomende fouten zelf op te sporen en op te lossen voordat je publiceert. Wil je een complete check door een specialist? Bekijk dan onze [contentaudit](/contentaudit/) of [toegankelijkheidsaudit](/toegankelijkheidsaudit/).

## Veelgestelde vragen

### Mijn website is alleen Nederlands. Moet ik dan nog iets doen?

Ja, ook dan moet `lang="nl"` in de code staan. Voorleessoftware gokt anders welke taal je pagina heeft, en die gok valt vaak verkeerd uit. Het goede nieuws: dit is een eenmalige aanpassing in het sjabloon door je webbouwer.

### Wat als een pagina twee talen bevat?

De taal waarin het grootste deel van de pagina is geschreven, is de hoofdtaal. Losse anderstalige zinnen of blokken krijgen een eigen taalmarkering in de code. Dat valt onder succescriterium [3.1.2 Taal van onderdelen](/blog/sc-3-1-2-wat-betekent-taal-van-onderdelen/).

### Maakt het uit of er "nl" of "nl-NL" staat?

Nee, beide voldoen. "nl" is de taalcode, "NL" is de landcode. Voor voorleessoftware is de taalcode het belangrijkst. Let wel op verwisselingen: "nl" is Nederlands, "de" is Duits.

### Ik kan dit nergens instellen in mijn CMS. Wat nu?

Dat klopt meestal: de paginataal staat in het sjabloon van je website, niet in de teksteditor. Vraag je webbouwer om het aan te passen. Werk je met een meertalige website, dan regelt de vertaalmodule het vaak automatisch zodra jij de taal van de pagina goed instelt.

## Samenvatting

WCAG-succescriterium 3.1.1 zorgt ervoor dat voorleessoftware je tekst in de juiste taal uitspreekt. De aanpassing zit in de code, maar de controle kun je prima zelf doen.

De belangrijkste punten:

- Elke pagina heeft een hoofdtaal in de code nodig, bijvoorbeeld `<html lang="nl">`.
- Controleer bij meertalige websites elke taalversie apart.
- De oplossing zit in het sjabloon: één melding aan je webbouwer lost het voor de hele website op.
- Controleer je pagina's met de [WCAG Radar](/tools/wcag-radar/).
- Anderstalige stukken tekst binnen een pagina vallen onder [3.1.2 Taal van onderdelen](/blog/sc-3-1-2-wat-betekent-taal-van-onderdelen/).

**Wil je dat je hele redactie toegankelijk leert schrijven en publiceren?** Bekijk dan onze [training voor webredacties](/trainen-van-webredactie/) of vraag [een contentaudit](/contentaudit/) aan.
