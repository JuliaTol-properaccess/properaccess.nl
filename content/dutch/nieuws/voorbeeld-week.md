---
# Voorbeeld van een weekpagina in de rubriek Nieuws over toegankelijkheid. Deze pagina
# staat op draft, dus hij komt niet in de productiebuild, niet op /nieuws/, niet in de
# sitemap en niet in de feed. Hij laat zien welke velden een weekpagina heeft en hoe de
# pagina eruitkomt. Bekijk hem met `hugo server --buildDrafts`.
#
# Een echte weekpagina is een kopie van dit bestand met `draft: false`, een eigen slug
# en eigen teksten. De handleiding staat in docs/nieuws-rubriek.md.
draft: true

title: "Voorbeeldweek: zo ziet een weekpagina eruit"
meta_title: "Voorbeeldweek van de rubriek Nieuws over toegankelijkheid | Proper Access"
# De slug bepaalt de URL: /nieuws/<slug>/. Neem de datum van de zaterdag waarop de
# pagina uitkomt, als jaar-maand-dag. Dus 2026-10-17 voor zaterdag 17 oktober 2026.
# Kies de slug één keer en laat hem daarna staan, ook als de titel verandert.
slug: "voorbeeld-week"
description: "Voorbeeld van een weekpagina in de rubriek Nieuws over toegankelijkheid. Deze pagina staat op draft en is niet gepubliceerd."

# Publicatiedatum, dus de zaterdag. Komt in de JSON-LD als datePublished en bepaalt de
# volgorde op /nieuws/: de nieuwste week bovenaan.
date: 2026-10-17

# De week die deze pagina beslaat. Staat zichtbaar boven de pagina en komt in de
# JSON-LD als temporalCoverage. week_van is de maandag, week_tot de zaterdag.
week_van: 2026-10-12
week_tot: 2026-10-17

# Trefwoorden van deze week, optioneel. Komen in de meta keywords en in de JSON-LD.
keywords:
  - nieuws digitale toegankelijkheid

# Korte samenvatting bovenaan: de twee of drie berichten die een lezer moet onthouden.
# Deze staat in de speakable-markering, dus houd hem feitelijk en los leesbaar.
tldr: |
  Hier komt de samenvatting van de week: welke twee of drie berichten er het meest uit
  springen, en waarom.

# De berichten van deze week. Per bericht vier velden, en datum is optioneel:
#
#   kop       de kop van ons stukje. Wordt de kop boven het bericht op de pagina en de
#             naam in de ItemList.
#   bron      wie het bericht publiceerde, in één of twee woorden.
#   url       de volledige link naar het bericht bij de bron.
#   datum     de dag waarop de bron het publiceerde. Laat weg als die er niet is.
#   sectie    voor welke doelgroep dit bericht is. Een van zes sleutels: wetten, normen,
#             ontwikkelaars, redacteuren, onderzoek, gebruikers. De pagina groepeert de
#             berichten onder het kopje van hun sectie, in de volgorde van
#             data/nieuws.yaml. Eén sectie per bericht. Laat je het veld weg, dan komt
#             het bericht onderaan te staan, buiten de kopjes.
#   hoofditem zet dit op true bij het bericht waar de titel van de pagina van komt, dat
#             van 80 tot 100 woorden. Dat bericht staat vooraan in zijn eigen sectie. Bij
#             één bericht per week zetten; staat het bij meer, dan komt er een regel in
#             het buildlog.
#   tekst     onze eigen alinea's. Minimaal 40 woorden per bericht, en minimaal 3
#             berichten per week. Haalt een pagina dat niet, dan krijgt hij een noindex:
#             hij staat dan wel op /nieuws/, maar niet in de zoekmachines. De controle op
#             een pull request wordt rood op een bericht onder de 40 woorden, en niet op
#             het aantal berichten. Zie "De telling" in docs/nieuws-rubriek.md. De
#             teksten in dit voorbeeldbestand blijven met opzet onder die 40 woorden; het
#             is een sjabloon en geen week.
#
# De volgorde in dit bestand is de volgorde binnen een kopje en de volgorde in de
# ItemList. Welk kopje bovenaan de pagina staat, ligt vast in data/nieuws.yaml en is voor
# elke week gelijk. Het nummer van een bericht blijft de plek in dit bestand: het eerste
# bericht is #bericht-1, ook als het onder het tweede kopje staat.
items:
  - kop: "Hier komt de kop van het eerste bericht"
    bron: "Naam van de bron"
    url: "https://example.com/eerste-bericht"
    datum: 2026-10-13
    sectie: wetten
    hoofditem: true
    tekst: |
      Hier komt onze eigen tekst bij het bericht: wat er staat, en wat het betekent voor
      wie een website of app beheert. Eén of twee alinea's, geen samenvatting van het
      hele bericht.

  - kop: "Hier komt de kop van het tweede bericht"
    bron: "Naam van de bron"
    url: "https://example.com/tweede-bericht"
    sectie: ontwikkelaars
    tekst: |
      Hier komt onze eigen tekst bij het tweede bericht. Een bericht zonder datum bij de
      bron kan ook; dan valt die regel weg.

  - kop: "Hier komt de kop van het derde bericht"
    bron: "Naam van de bron"
    url: "https://example.com/derde-bericht"
    datum: 2026-10-16
    sectie: wetten
    tekst: |
      Hier komt onze eigen tekst bij het derde bericht. Dit bericht staat onder hetzelfde
      kopje als het eerste, dus het staat op de pagina direct daaronder. Verwijs waar het
      kan naar een pagina op onze site die er meer over zegt, zoals de pagina over
      [de European Accessibility Act](/eaa/).
---

Hier komt de inleiding van de week, in twee of drie regels: wat deze week opvalt en voor
wie het uitmaakt. Deze tekst staat boven de berichten.
