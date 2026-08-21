---
title: "3. Het rapport"
hide_cta: true
meta_title: "Auditrapport met bevindingen, user stories en vierogencontrole | Proper Access"
type: "zo-werken-wij"
layout: "agency"
date: 2026-05-30
slug: "rapport-en-bevindingen"
url: "/zo-werken-wij/rapport-en-bevindingen/"
weight: 3
description: "Hoe wij bevindingen schrijven, waarom ons rapport per element is geordend, hoe je in de HTML-versie filtert op impact, en wie meeleest in de vierogencontrole."
keywords:
  - auditrapport toegankelijkheid
  - user story bevinding wcag
  - rapport per element
  - vierogencontrole audit
  - html auditrapport
  - filter bevindingen toegankelijkheid

banner:
  title: "Stap 3: Het rapport"
  content: "Een rapport waar je devteam en redactie meteen mee aan de slag kunnen. Geordend per component, filterbaar op content of techniek, met een user story en een instructie om zelf te testen per bevinding, en een vierogencontrole voor het bij je binnenkomt."
  button:
    enable: true
    label: "Bekijk een voorbeeldrapport"
    link: "/contact/"

trust:
  label: "Wat onze rapporten kenmerkt"
  names:
    - "Per element, niet per SC"
    - "User story per bevinding"
    - "HTML-versie met filter"
    - "Export naar PDF en Excel"
    - "Vierogencontrole"
---

{{< section-full >}}

Het rapport is wat overblijft als de audit klaar is. Voor jouw team is het de gebruiksaanwijzing om de problemen aan te pakken, voor een toezichthouder is het bewijsmateriaal. Allebei moeten kloppen, en allebei moeten leesbaar zijn: voor de ontwikkelaars die de fixes bouwen, voor de redactie die teksten en koppen aanpast, en voor het management dat de planning en het budget maakt.

Daarom besteden we een groot deel van de audit-uren aan schrijven. Niet aan typen, maar aan kiezen wat we precies opnemen, hoe we het formuleren, en hoe iemand zonder voorkennis er morgen mee kan beginnen.

{{< /section-full >}}

{{< section-full title="Per element, niet per succescriterium" >}}

De meeste auditbureaus ordenen hun rapport per succescriterium. Onder SC 1.1.1 staat dan álles wat met alt-teksten te maken heeft: ontbrekende alt op de homepage, foute alt in het nieuwsoverzicht, leeg alt-attribuut in de footer. Voor mensen die WCAG hebben geschreven is dat logisch. Voor de ontwikkelaar die het moet oplossen, niet.

Wij ordenen het rapport per onderdeel op de website: header, footer, formulieren, modal, tabel, productkaart, checkout. Hebben we vijf problemen in een component gevonden? Dan staan ze alle vijf bij elkaar, niet op vijf verschillende plekken in het rapport. Een ontwikkelaar opent het component dat hij vandaag aan het bouwen is, en weet meteen wat er moet veranderen.

Het werkt ook andersom: een redacteur die alleen de content beheert kan de pagina openen waar ze aan werken en de bevindingen één voor één doorlopen.

{{< /section-full >}}

{{< section-full title="Elke bevinding begint met een user story" >}}

Toegankelijkheid is geen technisch onderwerp. Het is een gebruiker die niet doorkomt op je website. Maar veel rapporten zijn zo abstract geschreven dat de gebruiker achter elke bevinding compleet verdwijnt. "SC 2.4.4, link heeft geen toegankelijke naam" zegt niets over wie er last van heeft, en waarom.

Elke bevinding heeft daarom een user story vanuit de bezoeker met een beperking. Met meerdere hulpmiddelen in één verhaal, omdat een bezoeker er meestal ook meerdere tegelijk gebruikt. Bijvoorbeeld:

<blockquote class="pa-user-story">Ik gebruik een schermlezer omdat ik de pagina niet kan zien. Als een knop alleen uit een icoon bestaat zonder een tekstalternatief, weet ik niet wat deze knop doet.</blockquote>

Daarna volgt de technische uitwerking: wat is er fout, waar staat het op de site, naar welk succescriterium verwijst het, en hoe los je het op. De user story is geen versiering. Hij dwingt ons om eerst de gebruiker te begrijpen voordat we de fix beschrijven.

{{< /section-full >}}

{{< section-full title="Het rapport is een HTML-document met filters" >}}

Je rapport krijg je niet als PDF die je in je mail moet zoeken, maar als HTML-document op een eigen URL. Een link die je deelt met je hele team, met filters om snel te vinden wat voor jou bedoeld is.

In dat HTML-rapport zitten een paar dingen die het werk makkelijker maken:

- **Filteren op impact.** Elke bevinding heeft een impact-label: ernstig, gemiddeld of laag. Je kunt het rapport in één klik filteren op alleen de ernstige, om te beginnen waar het echt knelt.
- **Filteren op content of techniek.** Sommige bevindingen los je op in de redactie, andere in code. Met één klik zie je alleen het stuk dat voor jou bedoeld is. Filteren op een specifiek component zit er niet in, maar de ordening per component maakt dat ook niet nodig.
- **Exporteren.** Je kunt het rapport exporteren naar PDF, voor wie het zwart-op-wit wil hebben, of naar Excel, voor wie de bevindingen wil koppelen aan een eigen issue-tracker. De export houdt de filters aan die op dat moment actief zijn.

Naast het rapport krijg je een aparte HTML-presentatie: een toegankelijke presentatie van de bevindingen die je team inzicht geeft in hoe het staat met de digitale toegankelijkheid van je website of app. Geen PowerPoint, maar een webpagina die je doorklikt en intern deelt met collega's of management.

Het rapport blijft beschikbaar tot de hercontrole klaar is. Daarna sluiten we de URL of laten hem op verzoek nog een tijd staan.

{{< /section-full >}}

{{< section-full title="Maximaal drie voorbeelden per bevinding" >}}

Per gevonden probleem geven we maximaal drie voorbeelden, met de expliciete vermelding dat het voorbeelden zijn en dat hetzelfde patroon op meer plekken voorkomt. Vaak is de oplossing een component aanpassen, niet honderd losse plekken.

Bij elke bevinding leggen we ook uit hoe je het probleem zelf kunt opsporen: welke toets, welke tool, welk gedrag verklapt waar het misgaat. Zo krijg je niet alleen een lijst met bugs en problemen, maar leer je gaandeweg ook zelf te testen. Bij een volgend project, of bij een nieuwe sprint waarin je nog geen audit hebt gepland, kan je team de eerste laag fouten zelf eruit halen.

De volledige bevinding heeft een vaste opbouw:

- **Wat.** Wat is er precies aan de hand.
- **Waar.** Op welke pagina's en in welk onderdeel, met screenshot of HTML-fragment, en hoe je het zelf reproduceert.
- **Waarom.** Naar welk succescriterium verwijst het, en wie heeft er last van, gekoppeld aan de user story bovenaan.
- **Hoe.** Een concrete oplossingsrichting, in code als dat helpt, in woorden als dat genoeg is.

{{< /section-full >}}

{{< section-full title="Vierogencontrole voor het rapport eruit gaat" >}}

Geen enkel rapport gaat onze deur uit voordat een tweede senior auditor het heeft nagelezen. Dat is geen pro forma. De tweede lezer kijkt of de bevindingen kloppen, of de voorbeelden representatief zijn, of de aanbevolen oplossing werkt, of de user story de juiste hulpmiddelen noemt.

Bij Proper Access werken alleen senior auditors. Het rapport dat je ontvangt is geschreven door iemand met minimaal drie jaar fulltime auditervaring, en nagelezen door iemand met meer.

{{< /section-full >}}

{{< section-cta >}}

## Klaar voor stap 3?

Het rapport is wat je in handen hebt om aan de slag te gaan. Wil je een voorbeeldrapport zien, of weten wat een audit van jouw site eruit zou laten komen?

[Stuur ons een mail](/contact/) [Bekijk wat een audit kost](/toegankelijkheidsaudit/)

{{< /section-cta >}}
