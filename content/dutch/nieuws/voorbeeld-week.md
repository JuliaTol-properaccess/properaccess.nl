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
#   kop   de kop van ons stukje. Wordt de h2 op de pagina en de naam in de ItemList.
#   bron  wie het bericht publiceerde, in één of twee woorden.
#   url   de volledige link naar het bericht bij de bron.
#   datum de dag waarop de bron het publiceerde. Laat weg als die er niet is.
#   tekst onze eigen alinea's. Verplicht. Een bericht zonder eigen tekst laat de
#         build falen, dus een pagina met alleen koppen en links komt niet live.
#
# Zet het belangrijkste bericht bovenaan; de volgorde in dit bestand is de volgorde op
# de pagina en in de ItemList.
items:
  - kop: "Hier komt de kop van het eerste bericht"
    bron: "Naam van de bron"
    url: "https://example.com/eerste-bericht"
    datum: 2026-10-13
    tekst: |
      Hier komt onze eigen tekst bij het bericht: wat er staat, en wat het betekent voor
      wie een website of app beheert. Eén of twee alinea's, geen samenvatting van het
      hele bericht.

  - kop: "Hier komt de kop van het tweede bericht"
    bron: "Naam van de bron"
    url: "https://example.com/tweede-bericht"
    tekst: |
      Hier komt onze eigen tekst bij het tweede bericht. Een bericht zonder datum bij de
      bron kan ook; dan valt die regel weg.

  - kop: "Hier komt de kop van het derde bericht"
    bron: "Naam van de bron"
    url: "https://example.com/derde-bericht"
    datum: 2026-10-16
    tekst: |
      Hier komt onze eigen tekst bij het derde bericht. Verwijs waar het kan naar een
      pagina op onze site die er meer over zegt, zoals de pagina over
      [de European Accessibility Act](/eaa/).
---

Hier komt de inleiding van de week, in twee of drie regels: wat deze week opvalt en voor
wie het uitmaakt. Deze tekst staat boven de berichten.
