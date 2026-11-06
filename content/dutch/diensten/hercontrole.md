---
title: "Hercontrole"
hide_cta: true
meta_title: "Hercontrole WCAG: bewijs dat de bevindingen zijn opgelost | Proper Access"
layout: "landing"
weight: 6
date: 2026-05-30
slug: "hercontrole"
url: "/hercontrole/"
aliases:
  - "/zo-werken-wij/heronderzoek/"
description: "Een hercontrole toetst of de bevindingen uit een eerdere audit correct zijn opgelost. De richtlijn is binnen 12 weken na de audit, later kan ook."
source_context:
  title: "Bron en actualiteit"
  updated_label: "Laatst gecontroleerd"
  date: "2026-10-24"
  date_display: "24 oktober 2026"
  expert: "De werkwijze is gecontroleerd door de senior auditors van Proper Access."
  sources_label: "Bronnen"
  sources:
    - { label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" }
    - { label: "Proper Access: zo werken wij", url: "/zo-werken-wij/" }
keywords:
  - hercontrole wcag
  - heronderzoek toegankelijkheid
  - retest audit
  - status A toegankelijkheidsverklaring
  - wcag heronderzoek

trust:
  label: "Wat erin zit"
  names:
    - "Jij bepaalt wanneer"
    - "Elke bevinding nagelopen"
    - "Bewijs voor status A"
    - "Onafhankelijk beoordeeld"
    - "Rapport per element"

paginanav:
  - { label: "Wat we controleren", id: "controleren" }
  - { label: "Welke audits", id: "audits" }
  - { label: "Prijs", id: "prijs" }
  - { label: "Wanneer", id: "wanneer" }
  - { label: "Wat we tegenkomen", id: "onderweg" }
  - { label: "Wat het oplevert", id: "oplevert" }

sections:
  - type: hero
    eyebrow: "Hercontrole"
    title: "Hercontrole: het bewijs dat het is opgelost"
    intro: "Een audit laat zien waar het mis was. Een hercontrole laat zien dat het is opgelost. Voor overheid én bedrijfsleven."
    buttons:
      - { label: "Plan een hercontrole", link: "#contact", pijl: true }
      - { label: "Bel 085 5055 890", link: "tel:+31855055890", variant: "outline" }
    visual: "visual-hercontrole"

  - type: trust

  - type: paginanav

  - type: intro-split
    lead: "Het oplossen is jullie werk. Maar hoe weet je zeker dat het echt is opgelost? En hoe bewijs je dat?"
    text: |
      Een audit laat zien waar de problemen zitten. Daarna gaan je leverancier, je redactie of je devteam aan de slag. Dan komt de vraag: werkt de oplossing echt? En hoe laat je dat zien aan je toezichthouder?

      Een hercontrole beantwoordt beide vragen. We lopen elke eerdere bevinding na, kijken of de oplossing werkt en controleren of er geen nieuwe problemen zijn ontstaan. Je krijgt een aangepast rapport dat je als bewijs opneemt in je toegankelijkheidsverklaring.

  - type: cards
    id: "controleren"
    bg: "grijs"
    eyebrow: "Werkwijze"
    title: "Wat we precies controleren"
    intro: "We gebruiken dezelfde steekproef als in de oorspronkelijke audit. Bij elke bevinding stellen we drie vragen."
    numbered: true
    columns: 3
    items:
      - title: "Is het probleem weg?"
        text: "De oplossing is doorgevoerd en we zien hem werken: in de browser, met de schermlezer en met het toetsenbord."
      - title: "Is het goed opgelost?"
        text: "Een onlogische workaround is geen oplossing. Een knop die nu een naam heeft, maar de verkeerde, is nog steeds een probleem."
      - title: "Zijn er nieuwe problemen?"
        text: "Dat gebeurt vaker dan je denkt. Een component die eindelijk met het toetsenbord werkt, kan intussen zijn zichtbare focus kwijt zijn."
    extra: "status-bar"
    status_tekst: "Je krijgt een aangepast rapport met de status van elke eerdere bevinding, plus eventuele nieuwe bevindingen."

  - type: cards
    id: "audits"
    eyebrow: "Voor elke audit"
    title: "Voor welk type audit?"
    intro: "We doen hercontroles op alle audits die we eerder hebben uitgevoerd. Het type hercontrole volgt het type audit."
    columns: 4
    stijl: "rand"
    items:
      - { kicker: "Na een", title: "Volledige audit", link: "/toegankelijkheidsonderzoek/", linklabel: "Volledige hercontrole" }
      - { kicker: "Na een", title: "Contentaudit", link: "/contentaudit/", linklabel: "Content-hercontrole" }
      - { kicker: "Na een", title: "Techniekaudit", link: "/techniekaudit/", linklabel: "Techniek-hercontrole" }
      - { kicker: "Na een", title: "Systeemaudit", text: "Systeem-hercontrole" }

  - type: price-split
    id: "prijs"
    bg: "grijs"
    eyebrow: "Prijs"
    title: "Wat een hercontrole kost"
    donker:
      kicker: "Eerste hercontrole"
      prijs: "Inbegrepen"
      text: "De eerste hercontrole zit in de prijs van de audit. Je plant hem binnen twaalf weken na oplevering van het rapport."
    licht:
      kicker: "Daarna"
      prijs: "Op offerte"
      text: "Wil je nog een hercontrole, dan krijg je een aparte offerte. De prijs hangt af van het aantal bevindingen, want we lopen ze allemaal na."
    notitie:
      icon: "fa-regular fa-calendar"
      kop: "Audit besteld vóór 23 oktober 2026?"
      text: "Dan geldt je offerte van toen en krijg je voor de hercontrole een aparte offerte. Meestal komt die uit tussen € 300 en € 1.100, exclusief 21% btw."

  - type: timeline
    id: "wanneer"
    eyebrow: "Planning"
    title: "Wanneer plan je het in?"
    intro: "Onze richtlijn: binnen twaalf weken na oplevering van het rapport. Hoe langer je wacht, hoe meer er op de website verandert. Op een gegeven moment is de oude steekproef niet meer representatief."
    items:
      - { title: "Audit start", text: "Werk je naar een EAA- of BDTO-deadline toe? Plan de hercontrole nu al in." }
      - { title: "Rapport opgeleverd", text: "Je team gaat aan de slag. In het portaal vink je per bevinding aan dat hij is opgelost." }
      - { title: "Binnen 12 weken", text: "De hercontrole. Duurt het oplossen langer? Overleg dan even, het is geen harde grens.", accent: true }
      - { title: "Aangepast rapport", text: "Het bewijs voor je toegankelijkheidsverklaring.", eind: true }

  - type: cards
    id: "onderweg"
    bg: "grijs"
    eyebrow: "Meer dan een afvinklijst"
    title: "Wat we onderweg tegenkomen"
    intro: "We komen vrijwel altijd dingen tegen die we moeten benoemen."
    columns: 3
    items:
      - icon: "fa-solid fa-right-left"
        title: "Vervangende pagina's"
        text: "Is een pagina uit de steekproef verdwenen? Dan kiezen we een vergelijkbare pagina en kijken die volledig na. Eerder goedgekeurde criteria kunnen daar alsnog worden afgekeurd."
      - icon: "fa-regular fa-clone"
        title: "Nieuwe componenten"
        text: "Heeft het team een nieuwe kaart, modal of formulier toegevoegd op een pagina in de steekproef? Dan nemen we die mee."
      - icon: "fa-solid fa-triangle-exclamation"
        title: "Nieuwe fouten in de oplossing"
        text: "Bijvoorbeeld een aria-label dat per ongeluk de zichtbare labeltekst overschrijft, of een focus-trap die te streng is ingesteld."
    slot: "We schrijven het allemaal op. Het doel is geen mooi rapport, maar een website die werkt en een verklaring die klopt."

  - type: equation
    id: "oplevert"
    eyebrow: "Resultaat"
    title: "Wat een hercontrole oplevert"
    intro: "Status A: een compleet onderzoek van hooguit 3 jaar oud, en de site voldoet aan alle eisen."
    som:
      - { label: "Audit", sub: "wat er fout is" }
      - { label: "Hercontrole", sub: "dat het is opgelost" }
      - { label: "Bewijspakket", sub: "voor je verklaring", accent: true }
    items:
      - label: "Overheid"
        title: "Onderbouwing in het Register"
        text: "Overheidsorganisaties leggen de onderbouwing vast in het Register van toegankelijkheidsverklaringen."
      - label: "Bedrijven"
        title: "Bewijs onder de EAA"
        text: "Onder de European Accessibility Act is het toezicht verdeeld over zes toezichthouders. Voor webshops en apps is dat de Autoriteit Consument en Markt."
    slot: "In beide gevallen is een audit plus hercontrole de sterkste vorm van bewijs. Geen zelfverklaring, maar een onafhankelijk rapport waarin elke bevinding is nagelopen en gecontroleerd."

  - type: cta-dark
    id: "contact"
    title: "Plan je hercontrole op tijd"
    text: "Je rapport staat in het portaal. Daar vink je per bevinding aan dat hij is opgelost en dat wij hem mogen controleren. Je hoeft dus niet te wachten tot alles klaar is."
    buttons:
      - { label: "Stuur ons een mail", link: "mailto:info@properaccess.nl", variant: "licht", pijl: true }
      - { label: "Lees over de audit zelf", link: "/toegankelijkheidsonderzoek/", variant: "spook" }

  - type: feiten
    peildatum: "7 augustus 2026"

  - type: bron
---
