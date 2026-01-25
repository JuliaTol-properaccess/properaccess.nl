---
title: "Skiplinks issue op mijn Wordpress website"
date: 2024-07-31
slug: "skiplinks-issue-op-mijn-wordpress-website"
categories: 
  - "tips-en-tools"
  - "Webdeveloper"
tags: 
  - "2-4-1"
  - "skiplink"
  - "toegankelijke-website"
---

Op mijn WordPress-website werkte de skiplink niet op sommige pagina’s. Op deze pagina's heb ik een externe plugin toegevoegd die andere ID's gebruikt, waardoor de connectie tussen de skiplink in de header en het ID op de content verloren is gegaan.

Dit bleek makkelijker op te lossen dan ik aanvankelijk had gedacht.

## Probleem met skiplink:

De skiplink op mijn Wordpress website verwijst naar \`#breakthrough-page-title\`. De nieuwe content die de externe plugin heeft toegevoegd, heeft dit ID niet. Hoe kan ik dit ID aan de H2 toevoegen waarmee de unieke inhoud op mijn pagina begint?

## Oplossing:

```

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('h2.epkb-ml-search-title');
  elements.forEach(function(element) {
  element.id = 'breakthrough-page-title';
  });
});
```

Heb je snel deze oplossing nodig of heb je geen zin om deze code te deployen? Plak het in de theme editor: Customizer - Theme settings - Header and Footer scripts.

Mijn website maakt gebruik van het Genesis-framework voor Wordpress. Dit framework heeft standaard drie skiplinks: naar de zijbalk, naar de inhoud en naar de footer. De skiplink naar de inhoud moet **de eerste link** zijn. Als een sidebar op de pagina aanwezig is die op meerdere pagina's terugkomt, moet het ook worden overgeslagen. Ik moest de andere skiplinks kwijt.

Om het nog leuker te maken was het ID op de unieke content op de homepage anders dan op de onderliggende pagina’s.

Dit probleem kun je in \`functions.php\` als volgt oplossen. De onderstaande code werkt alleen voor het Genesis-framework.

### Code:

```

// Ik verwijder alle skiplinks
add_filter('genesis_skip_links_output', 'remove_nav_skiplink');
  function remove_nav_skiplink($links) {
  unset($links['genesis-nav-primary']);
  unset($links['genesis-content']);
  return $links;
}

// Ik voeg een skiplink toe die naar het gewenste ID verwijst
add_filter('genesis_skip_links_output', 'add_custom_skiplink');
function add_custom_skiplink($links) {
  $links['breakthrough-page-title'] = esc_html__('Naar inhoud', 'genesis');
  return $links;
}
```

Er bleef nog een probleem over. Op sommige pagina’s werd nog steeds de eerste link naar de zijbalk getoond. Omdat het 30+ graden is buiten en mijn laptop bijna niet meer aan te raken is, heb ik deze shortcut gebruikt. In mijn situatie is deze skiplink useless en mag op deze manier worden verstopt. Hiermee is het issue met de skiplink in een commerciële Wordpress thema opgelost.

```
.genesis-skip-link a[href="#genesis-sidebar-primary"] {
  display: none;
}
```

Voor technische consultancy in digitale toegankelijkheid, neem contact op met Julia: julia@properaccess.nl.

Meer artikelen voor webontwikkelaars? Volg tag: [ontwikkelaar](https://properaccess.nl/tag/ontwikkelaar/)
