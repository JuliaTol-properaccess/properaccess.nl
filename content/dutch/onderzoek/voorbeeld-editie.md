---
# Voorbeeldeditie van de rubriek Onderzoek. Deze pagina staat op draft, dus hij komt
# niet in de productiebuild, niet in de sitemap en niet op /onderzoek/. Hij laat zien
# welke velden een editie heeft en hoe de editiepagina eruitkomt. Bekijk hem met
# `hugo server --buildDrafts`. Een echte editie is een kopie van dit bestand met
# `draft: false` en een eigen slug. De handleiding staat in docs/onderzoek-rubriek.md.
draft: true

title: "Voorbeeldeditie: zo ziet een editie eruit"
meta_title: "Voorbeeldeditie van de rubriek Onderzoek | Proper Access"
# De slug bepaalt de URL: /onderzoek/<slug>/. Kies hem één keer en laat hem daarna
# staan, ook als de titel verandert. Een gepubliceerde URL hoort niet te verschuiven.
slug: "voorbeeld-editie"
description: "Voorbeeld van een editiepagina in de rubriek Onderzoek. Deze pagina staat op draft en is niet gepubliceerd."

# Publicatiedatum. Komt in de JSON-LD als datePublished.
date: 2026-10-10
# Nummer van de editie. Bepaalt de volgorde op /onderzoek/: hoogste nummer bovenaan.
# Editie 1 van Nata krijgt hetzelfde nummer en vervangt dit bestand.
editie: 1
# De dag waarop de gegevens zijn gemeten. Komt in de JSON-LD als temporalCoverage en
# staat zichtbaar op de pagina. Gebruik meetdatum_tot als het om een periode gaat.
meetdatum: 2026-10-05
# meetdatum_tot: 2026-10-05
# Waar de gegevens vandaan komen, in één regel.
bron: "EAA Monitor van Proper Access"
# Hoeveel er is gemeten, in één regel.
omvang: "10.271 websites in 6 sectoren"
# Waar deze editie nog meer staat. De tekst op die plekken verwijst met een canonical
# terug naar deze pagina, zodat de kopieën niet met het origineel concurreren.
# verspreiding:
#   - naam: "LinkedIn"
#     url: "https://www.linkedin.com/"

# Korte samenvatting bovenaan. Deze staat in de speakable-markering van de pagina, dus
# houd hem feitelijk en los leesbaar.
tldr: |
  Hier komt de samenvatting van de editie: wat er is gemeten, op welke dag, en de twee
  of drie uitkomsten die een lezer moet onthouden.
---

Hier komt de inleiding van de editie: wat de vraag was en waarom we hem hebben gemeten.

## Wat we hebben gemeten

Hier komt de omschrijving van de steekproef: welke websites, welke sectoren, hoeveel.

## Hoe we hebben gemeten

Hier komt de methode: welke test, welke software, welke versie, en wat de test niet ziet.

## Uitkomsten

Hier komen de uitkomsten, met de getallen in een lijst of een tabel.

## Wat dit betekent

Hier komt de uitleg bij de uitkomsten.

## Verantwoording

Hier komt wat er buiten de meting valt en hoe iemand de meting kan navolgen.
