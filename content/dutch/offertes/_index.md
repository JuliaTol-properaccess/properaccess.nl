---
title: "Offertes"
noindex: true
sitemap_exclude: true
robots: "noindex, nofollow"
# Deze sectie publiceert niets, en dat moet zo blijven.
#
# Tot 6 oktober 2026 stonden hier de offertes voor klanten als gewone pagina's op de
# live site: /offertes/discovery/, /offertes/mave/, /offertes/stjansdal/ en
# /offertes/template/. De shortcode protected-section zet de toegangscode als
# data-token in de HTML en de inhoud in een div met display:none, dus curl, een bot of
# iemand met de link kreeg de aanhef met de klantnaam en de bedragen gewoon terug.
# Disallow: /offertes/ in robots.txt houdt alleen zoekmachines weg.
#
# De cascade hieronder zorgt dat een bestand dat hier opnieuw wordt neergezet niet
# wordt gerenderd, ook niet als iemand het build-blok in de front matter vergeet.
# Haal hem niet weg zonder een bescherming die buiten de browser werkt.
build:
  list: never
  render: never
cascade:
  build:
    list: never
    render: never
---
