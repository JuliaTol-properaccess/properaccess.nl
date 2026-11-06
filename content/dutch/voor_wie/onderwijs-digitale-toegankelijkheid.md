---
title: "Onderwijs"
weight: 6
hide_cta: true
meta_title: "Digitale toegankelijkheid in het onderwijs | Proper Access"
date: 2026-03-07
slug: "onderwijs-digitale-toegankelijkheid"
url: "/onderwijs-digitale-toegankelijkheid/"
layout: "landing"
description: "Kunnen al je studenten bij de lesstof? We testen digitale leeromgevingen, LMS-platformen en e-learningmodules op WCAG. Meer dan 950 audits sinds 2019."
keywords:
  - digitale toegankelijkheid onderwijs
  - WCAG audit leeromgeving
  - toegankelijkheid leeromgeving
  - LMS audit WCAG
  - toegankelijkheid e-learning
  - e-learning toegankelijkheid
  - EAA onderwijs
  - BDTO onderwijs
source_context:
  title: "Bron en actualiteit"
  updated_label: "Laatst gecontroleerd"
  date: "2026-11-06"
  date_display: "6 november 2026"
  expert: "De wettelijke informatie is gecontroleerd door de senior auditors van Proper Access."
  sources_label: "Bronnen"
  sources:
    - { label: "Besluit digitale toegankelijkheid overheid (wetten.nl)", url: "https://wetten.overheid.nl/BWBR0040936" }
    - { label: "European Accessibility Act, richtlijn (EU) 2019/882", url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32019L0882" }
    - { label: "Register van toegankelijkheidsverklaringen", url: "https://www.toegankelijkheidsverklaring.nl/register" }
    - { label: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2", url: "https://www.w3.org/TR/WCAG22/" }

trust:
  label: "Onderzoek gedaan voor onder meer"
  names:
    - "SSR"
    - "RADIO"
    - "Onderwijsraad"
    - "Rijksmuseum"
    - "Provincie Zuid-Holland"

paginanav:
  - { label: "Wat we testen", id: "testen" }
  - { label: "Welke wet", id: "wet" }
  - { label: "Werkwijze", id: "werkwijze" }
  - { label: "Prijs", id: "prijs" }
  - { label: "Vragen", id: "vragen" }

faqs:
  - question: "Kunnen jullie onze leeromgeving testen, of alleen de website?"
    answer: "Allebei. We testen ook je toetsomgeving, studentportaal, e-learningmodules, video's en pdf's."
  - question: "Onze leeromgeving zit achter een inlog. Hoe werkt dat?"
    answer: "Jullie maken een testaccount als student voor ons aan. De omgeving hoeft niet openbaar te zijn."
  - question: "We hebben honderden e-learningmodules. Moeten die allemaal onderzocht worden?"
    answer: "Nee. We testen een steekproef en schrijven op wat je in alle modules aanpast."
  - question: "Valt onze instelling onder het BDTO of onder de EAA?"
    answer: "Dat hangt af van wat je instelling juridisch is. Lees [welke wet voor je instelling geldt](#wet). Twijfel je, leg het dan voor aan een jurist."
  - question: "Kunnen jullie ook onze docenten en redacteuren trainen?"
    answer: "Ja. We geven hands-on trainingen op locatie, over toegankelijke webcontent en over toegankelijke pdf's vanuit Word. [Bekijk de trainingen](/trainen-van-webredactie/)."
  - question: "Hoe lang duurt een audit?"
    answer: "Meestal 3 tot 5 weken van start tot rapport. We stemmen de planning af op jullie deadline."

sections:
  - type: hero
    eyebrow: "Onderwijs"
    title: "Een leeromgeving waarin elke student zelf de toets kan maken"
    intro: "We testen je leeromgeving, toetsomgeving en e-learning met de hand, zoals een student met een beperking ze gebruikt. Per onderdeel lees je wat er misgaat en hoe je het oplost."
    checks:
      - "**Rapport per element:** alles over één knop of formulier op één plek"
      - "**Getest met** NVDA, VoiceOver, alleen het toetsenbord en zoom tot 400%"
      - "**Hercontrole en een uur nabespreking** zitten in de prijs"
    buttons:
      - { label: "Plan een kennismaking", link: "/contact/", pijl: true }
      - { label: "Bel 085 5055 890", link: "tel:+31855055890", variant: "outline" }
    visual: "visual-toets"

  - type: trust
    vinkjes: false

  - type: paginanav

  - type: cards
    id: "testen"
    eyebrow: "Scope"
    title: "Wat we testen"
    intro: "Niet alleen je website, maar alles wat een student nodig heeft om te kunnen studeren."
    columns: 4
    items:
      - icon: "fa-solid fa-graduation-cap"
        title: "Leeromgeving en studentportaal"
        text: "Cursuspagina's, een opdracht inleveren, cijfers bekijken, je inschrijven voor een vak. Lukt dat een student niet zelf, dan moet iemand anders het doen. We testen met een studentaccount, in cursussen die jullie studenten volgen."
      - icon: "fa-solid fa-stopwatch"
        title: "Toetsomgeving"
        text: "Een toets heeft een tijdslimiet. Vindt een student met een schermlezer de antwoorden niet bij de vraag, dan verliest die tijd die de rest van de groep wel heeft. We maken een proeftoets zoals een student dat doet."
      - icon: "fa-regular fa-circle-play"
        title: "E-learningmodules"
        text: "Modules uit een auteurstool hebben eigen knoppen, sleepoefeningen en video's. Heb je er veel? Dan testen we een steekproef en schrijven we op wat je in alle modules aanpast."
      - icon: "fa-regular fa-file-lines"
        title: "Video's en pdf's"
        text: "Een opgenomen college heeft ondertiteling nodig. Een reader of syllabus in pdf heeft koppen, tekstalternatieven en tabellen nodig die een schermlezer kan voorlezen."

  - type: law-chooser
    id: "wet"
    eyebrow: "Wetgeving"
    title: "Welke wet geldt voor je instelling?"
    intro: "Dat hangt af van wat je instelling juridisch is."
    keuzes:
      - kicker: "Overheidsinstantie of publiekrechtelijke instelling?"
        title: "Dan geldt het BDTO"
        text: "Het Besluit digitale toegankelijkheid overheid geldt sinds 2018."
      - kicker: "Geen van beide?"
        title: "Dan kan de EAA gelden"
        text: "De European Accessibility Act geldt sinds 28 juni 2025 voor bedrijven die digitale diensten aanbieden."
    uitleg:
      title: "Wanneer ben je publiekrechtelijk?"
      text: "Het is een begrip uit het aanbestedingsrecht. Er zijn drie voorwaarden en ze moeten alle drie gelden:"
      punten:
        - "Het doel waarvoor je instelling is opgericht"
        - "De rechtspersoonlijkheid"
        - "De financiering of het toezicht door de overheid"
      na: "Een rijksbijdrage alleen is dus niet genoeg. Twijfel je? Leg het voor aan een jurist. Wij testen je leeromgeving, maar bepalen niet onder welke wet je valt."
    donker:
      title: "Val je onder het BDTO?"
      text: "Dan heeft elk digitaal kanaal een eigen toegankelijkheidsverklaring nodig in het Register: je website, leeromgeving, studentportaal en apps. Het onderzoek moet volgens WCAG-EM zijn gedaan en een rapport telt 36 maanden mee."
      button: { label: "Stel gratis je verklaring op", link: "/tools/toegankelijkheidsverklaring-wdo/" }
    slot: "Onder beide wetten ligt de Europese norm EN 301 549. Die verwijst naar WCAG 2.1, niveau A en AA. Wij testen aan WCAG 2.2, dus met de 6 nieuwe criteria op die niveaus erbij. Meer weten? Lees [wat digitale toegankelijkheid inhoudt](/digitale-toegankelijkheid/)."

  - type: cards
    id: "werkwijze"
    bg: "grijs"
    eyebrow: "Werkwijze"
    title: "Zo testen we"
    numbered: true
    columns: 3
    items:
      - title: "Een testaccount als student"
        text: "Jullie maken een studentaccount voor ons aan. De leeromgeving hoeft dus niet openbaar te zijn."
      - title: "Samen een steekproef kiezen"
        text: "Volgens WCAG-EM: de onderdelen die studenten het meest gebruiken, en de toets."
      - title: "Met de hand testen"
        text: "Een senior auditor test met NVDA en VoiceOver, alleen met het toetsenbord, met zoom tot 400% en op contrast en kleurgebruik."
      - title: "Review door een tweede auditor"
        text: "Zo bekijken drie mensen elk rapport. Wij noemen dat het 6-ogen-principe."
      - title: "Rapport per element"
        text: "Alles over een knop, formulier of component staat bij elkaar, met een screenshot en de oplossing. Plus een CSV met alle bevindingen."
      - title: "Een uur nabespreking"
        text: "We lopen het rapport samen met je team door."
    extra: "duo-blok"
    duo:
      donker:
        getal: "150"
        kop: "systemen kennen we, van maatwerk tot standaardplatform."
        text: "Daardoor zien we of een probleem in het thema, een plugin of het platform zelf zit. Dat bepaalt wie het oplost: jullie team of de leverancier."
      licht:
        icon: "fa-solid fa-shield-halved"
        kop: "Onafhankelijk."
        text: "We bouwen geen leeromgevingen en beheren geen content. We keuren dus nooit ons eigen werk."

  - type: price-cards
    id: "prijs"
    eyebrow: "Prijs"
    title: "Wat het kost"
    intro: "De prijs hangt af van de omvang. Een leeromgeving met toetsomgeving en studentportaal is meer werk dan één website. Alle bedragen zijn exclusief btw."
    items:
      - kicker: "Volledige audit"
        vanaf: true
        prijs: "€ 2.175"
        text: "Inclusief de eerste hercontrole binnen twaalf weken na het rapport en een uur nabespreking."
        stijl: "accent"
        button: { label: "Vraag een offerte aan", link: "/offerte-wcag-onderzoek/" }
      - kicker: "Mini-audit"
        prijs: "€ 495"
        text: "Eerst weten waar je staat? Een senior auditor kijkt met de hand naar de belangrijkste onderdelen. Het rapport heb je binnen 5 werkdagen."
        stijl: "rand"
        button: { label: "Vraag een mini-audit aan", link: "/webshop-quickscan/", variant: "outline" }
      - kicker: "Vragen na het rapport"
        vanaf: true
        prijs: "€ 20"
        text: "Via de strippenkaart. Eén strip is één vraag."
        stijl: "grijs"
        button: { label: "Over de strippenkaart", link: "/strippenkaart/", variant: "tekst" }

  - type: faq

  - type: cta-dark
    id: "contact"
    title: "Kan elke student bij jullie zelf de toets maken?"
    text: "Plan een kennismaking. We kijken samen wat er in jullie leeromgeving zit en wat we onderzoeken."
    buttons:
      - { label: "Plan een kennismaking", link: "/contact/", variant: "licht", pijl: true }
      - { label: "Bel 085 5055 890", link: "tel:+31855055890", variant: "spook" }

  - type: feiten
    peildatum: "7 augustus 2026"

  - type: bron
---
