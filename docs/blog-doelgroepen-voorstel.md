# Voorstel doelgroep per blogartikel

Stap 1 van het plan blogfilters. Nog niets in de front matter veranderd.

- Telling: `find content/dutch/blog -name '*.md' -not -path '*/drafts/*' -not -name '_index.md' | wc -l` geeft **194**, geteld op 22-11-2026. Daarvan staat 1 op `draft: true` (2026-04-09_overlay-tools-accessibe-userway-wcag.md), dus **193 gepubliceerde artikelen** in de tabel.
- Verdeling (een artikel kan in meer groepen): webredactie 57, developer 122, manager 53.
- Doelgroepen: `webredactie` (schrijft en plaatst content), `developer` (bouwt, ontwerpt of test de site), `manager` (beslist of koopt in: EAA/BDTO, audits, kosten, verklaring, toezicht).
- Bepaald op titel, description en huidige categorie. Bij twijfel heb ik de tekst ingekeken; de reden staat in de laatste kolom. Een lege reden betekent geen twijfel.
- De uitlegpagina's per succescriterium (`succescriteria/sc-…`) hebben bijna allemaal een vaste kop "Wat kun je als webredacteur of manager doen?". Die kop heb ik niet als signaal gebruikt; ik keek naar wie het criterium in de praktijk oplost.
- Huidige categorieën die niet kloppen met de inhoud: `aria-hidden` en "Boetes onder de EAA" staan in `webredactie`.

| # | Bestand | Titel | Voorstel | Reden bij twijfel |
|---|---|---|---|---|
| 1 | `2026-03-02_nl_taalswitch-met-alleen-en-en-nl-hoe-maak-je-die-toegankelijk.md` | Taalswitch met alleen 'EN' en 'NL': hoe maak je die toegankelijk? | developer |  |
| 2 | `2026-03-21_webshop-productafbeelding-zonder-beschrijving.md` | Productafbeelding zonder beschrijving | webredactie |  |
| 3 | `2026-04-02_wat-is-wcag.md` | Wat is WCAG? | manager |  |
| 4 | `2026-04-03_kan-ai-website-testen-op-toegankelijkheid.md` | Kan AI jouw website testen op toegankelijkheid? Wij gaan het uitzoeken | developer, manager | AI-test: wie AI wil inzetten bij testen of erover beslist |
| 5 | `2026-04-03_wat-houdt-wcag-21-in-voor-websites.md` | Wat houdt WCAG 2.1 in voor websites? | manager |  |
| 6 | `2026-04-04_herkent-ai-div-als-knop.md` | AI-test: Herkent AI een div die doet alsof het een knop is? | developer |  |
| 7 | `2026-04-04_wat-is-een-toegankelijkheidsaudit.md` | Wat is een toegankelijkheidsaudit? | manager |  |
| 8 | `2026-04-04_webshop-afbeelding-van-prefix.md` | Afbeelding van prefix | webredactie |  |
| 9 | `2026-04-04_ziet-ai-dat-je-tekst-te-licht-is.md` | Ziet AI dat je tekst te licht is? | developer | AI-test op contrast; kan ook webredactie |
| 10 | `2026-04-05_geldt-de-eaa-voor-mijn-webshop.md` | Geldt de EAA-wet voor mijn webshop? | manager |  |
| 11 | `2026-04-06_boetes-niet-nakoming-eaa.md` | Wat zijn de boetes bij niet-nakoming van de EAA? | manager |  |
| 12 | `2026-04-07_voor-wie-is-digitale-toegankelijkheid-verplicht.md` | Voor wie gelden het BDTO en de EAA? | manager |  |
| 13 | `2026-04-08_moet-mijn-overheidswebsite-voldoen-aan-wcag.md` | Moet mijn overheidswebsite al voldoen aan WCAG? | manager |  |
| 14 | `2026-04-08_sc-1-4-10-content-verdwijnt-door-overflow-hidden.md` | Content verdwijnt door overflow hidden | developer |  |
| 15 | `2026-04-09_eaa-checklist-2026-webshops.md` | EAA-checklist 2026: 30 punten waarop je webshop moet voldoen | manager, developer | checklist van 30 punten, deels technisch |
| 17 | `2026-04-09_sc-1-4-11-invoerveld-zonder-zichtbare-rand.md` | Invoerveld zonder zichtbare rand | developer |  |
| 18 | `2026-04-09_wat-kost-wcag-audit-webshop.md` | Wat kost een WCAG-audit voor een webshop? Een antwoord met prijsindicatie | manager |  |
| 19 | `2026-04-10_sc-2-1-1-mouseover-zonder-focus-equivalent.md` | Mouseover zonder focus-equivalent | developer |  |
| 20 | `2026-04-11_mini-audit-mkb.md` | Mini-audit voor MKB: weet of je website aan de EAA voldoet | manager |  |
| 21 | `2026-04-11_sc-2-4-2-alle-paginas-hebben-dezelfde-titel.md` | Alle pagina's hebben dezelfde titel | developer, webredactie | paginatitel komt uit het CMS-template of uit de redacteur |
| 22 | `2026-04-12_sc-2-4-3-dialoogvenster-krijgt-geen-focus-bij-openen.md` | Dialoogvenster krijgt geen focus bij openen | developer |  |
| 23 | `2026-04-13_hoe-begin-ik-met-digitale-toegankelijkheid.md` | Hoe begin ik met digitale toegankelijkheid? | manager |  |
| 24 | `2026-04-13_sc-2-4-4-url-als-linktekst.md` | URL als linktekst | webredactie |  |
| 25 | `2026-04-13_user-stories-in-toegankelijkheidsrapport.md` | Waarom elke bevinding in ons rapport begint met een user story | manager |  |
| 26 | `2026-04-14_hoe-check-ik-de-toegankelijkheid-van-mijn-website.md` | Hoe check ik de toegankelijkheid van mijn website? | manager, webredactie | eerste kennismaking met testen, geen code |
| 27 | `2026-04-15_sc-2-5-3-aria-labelledby-verwijst-naar-de-verkeerde-tekst.md` | aria-labelledby verwijst naar de verkeerde tekst | developer |  |
| 28 | `2026-04-15_welke-tools-zijn-er-voor-toegankelijkheidstesten.md` | Gratis tools om je website op WCAG te testen: welke vindt wat? | developer, webredactie | overzicht van tools, ook contrasttools voor redacteuren |
| 29 | `2026-04-16_hoe-lang-duurt-een-toegankelijkheidsaudit.md` | Hoe lang duurt een toegankelijkheidsaudit? | manager |  |
| 30 | `2026-04-16_sc-4-1-2-div-als-knop-naam-maar-geen-rol.md` | Div als knop: naam maar geen rol | developer |  |
| 31 | `2026-04-17_desktop-en-mobiele-audit.md` | Heb ik een desktop- en mobiele audit nodig? | manager |  |
| 32 | `2026-04-17_sc-1-3-1-labels.md` | Labels | developer |  |
| 33 | `2026-04-18_automatische-tool-vs-handmatige-test.md` | Hoeveel problemen vindt een automatische tool vs. een handmatige test? | manager |  |
| 34 | `2026-04-18_wat-is-wcag-2-2.md` | Wat is WCAG 2.2? De 6 nieuwe succescriteria op niveau A en AA | developer, manager | nieuwe eisen: developer bouwt, manager wil weten wat er bij kwam |
| 35 | `2026-04-18_wcag-em-methode-toegankelijkheidsonderzoek.md` | WCAG-EM: de methode van het W3C voor een toegankelijkheidsonderzoek | manager |  |
| 36 | `2026-04-18_webshop-decoratieve-afbeeldingen.md` | Decoratieve afbeeldingen | webredactie |  |
| 37 | `2026-04-19_hoe-vaak-opnieuw-laten-testen.md` | Hoe vaak moet ik mijn website opnieuw laten testen? | manager |  |
| 38 | `2026-04-19_sc-1-3-2-css-order-die-de-logica-verbreekt.md` | CSS order die de logica verbreekt | developer |  |
| 39 | `2026-04-20_sc-1-4-1-groene-rij-goedgekeurd-rode-rij-afgewezen.md` | Groene rij = goedgekeurd, rode rij = afgewezen | developer, webredactie | kleur in een tabel: opmaak of code |
| 40 | `2026-04-21_sc-1-4-3-witte-tekst-op-een-foto.md` | Witte tekst op een foto | webredactie, developer | tekst op een foto plaatst meestal de redacteur |
| 41 | `2026-04-22_sc-1-4-10-tekst-afgesneden-door-een-vaste-hoogte.md` | Tekst afgesneden door een vaste hoogte | developer |  |
| 42 | `2026-05-02_webshop-knop-zonder-naam.md` | Knop zonder naam in een webshop | developer |  |
| 43 | `2026-05-16_webshop-tekst-in-afbeelding.md` | Tekst in afbeelding | webredactie |  |
| 44 | `2026-05-28_tolkie-leeshulp-aanrader.md` | Tolkie als leeshulp voor je overheidswebsite: zo wordt je tekst begrijpelijk op B1-niveau | webredactie | B1-taal; stond in tips-en-tools |
| 45 | `2026-05-30_webshop-plattegrond.md` | Plattegrond | webredactie |  |
| 46 | `2026-06-08_toegankelijk-alternatief-1-klik-regel.md` | Een ontoegankelijk element met een toegankelijk alternatief: mag je het laten staan? | manager, developer | beslisvraag over een uitzondering |
| 47 | `2026-06-13_webshop-gelinkte-afbeelding.md` | Gelinkte afbeelding | webredactie |  |
| 48 | `2026-06-16_case-nrc.md` | NRC: de klant die de meeste vragen heeft gesteld | manager |  |
| 49 | `2026-06-21_case-bluebillywig-videospelers.md` | Blue Billywig: negen videospelers naast elkaar | manager |  |
| 50 | `2026-06-22_webshops-toegankelijker-maar-nog-niet-bruikbaar.md` | Webshops worden toegankelijker, maar nog niet bruikbaar | manager |  |
| 51 | `2026-06-24_voldoen-aan-wcag-is-niet-hetzelfde-als-toegankelijk.md` | Voldoen aan WCAG is niet hetzelfde als toegankelijk zijn | manager, webredactie | stond in webredactie |
| 52 | `2026-06-26_nul-fouten-scan-ruim-honderd-bevindingen.md` | Nul fouten in de scan, ruim honderd bevindingen in de audit | manager |  |
| 53 | `2026-06-26_wat-doet-een-toezichthouder-acm-over-de-eaa.md` | Wat doet een toezichthouder eigenlijk? De ACM over de European Accessibility Act | manager |  |
| 54 | `2026-06-27_webshop-maattabel-screenshot.md` | Maattabel screenshot | webredactie |  |
| 55 | `2026-06-30_hoe-kies-je-een-toegankelijkheidsbureau.md` | Hoe kies je een toegankelijkheidsbureau? De vragen die je stelt en hoe je de antwoorden leest | manager |  |
| 56 | `2026-07-19_aria-hidden-wat-het-doet-en-wanneer-je-het-gebruikt.md` | aria-hidden: wat het doet en wanneer je het wel of niet gebruikt | developer | stond in webredactie, maar gaat over een HTML-attribuut |
| 57 | `2026-08-01_aria-rollen-en-attributen.md` | ARIA-rollen en -attributen: wanneer je ze nodig hebt en wanneer niet | developer |  |
| 58 | `2026-08-01_wat-is-een-toegankelijke-naam.md` | Wat is een toegankelijke naam? | developer, webredactie | begrip voor wie code schrijft, ook nuttig voor redacteuren |
| 59 | `2026-08-10_toegankelijkheidsregister-oogt-gezond.md` | Het toegankelijkheidsregister oogt gezond. Onder de oppervlakte brokkelt het af. | manager |  |
| 60 | `2026-08-11_toegankelijk-wordpress-thema-kiezen.md` | Een toegankelijk WordPress-thema kiezen: waar let je op? | developer | wie de site bouwt kiest het thema; ook kleine ondernemer die zelf bouwt |
| 61 | `2026-08-11_toegankelijke-content-schrijven-in-google-docs.md` | Toegankelijke content schrijven in Google Docs | webredactie |  |
| 62 | `2026-08-12_toegankelijke-spreadsheets-maken-in-google-sheets.md` | Toegankelijke spreadsheets maken in Google Sheets | webredactie |  |
| 63 | `2026-08-13_toegankelijkheidsrapport-ontvangen-zo-pak-je-het-aan.md` | Waaraan herken je een goed toegankelijkheidsrapport? | manager |  |
| 64 | `2026-08-22_testen-met-nvda-op-windows.md` | Testen met NVDA: zo begin je op Windows | developer |  |
| 65 | `2026-08-22_testen-met-voiceover-op-de-mac.md` | Testen met VoiceOver: zo begin je op de Mac | developer |  |
| 66 | `2026-08-22_zo-gebruik-je-talkback-op-android.md` | Zo gebruik je TalkBack op Android | developer |  |
| 67 | `2026-08-27_webmcp-en-toegankelijkheid.md` | WebMCP: wat het is, en waarom het toegankelijkheid niet vervangt | developer, manager | nieuwe techniek; manager wil weten of het toegankelijkheid vervangt |
| 68 | `2026-09-08_eaa-updates-afm-financiele-sector.md` | Wat de AFM in drie EAA-updates van financiële instellingen verwacht | manager |  |
| 69 | `2026-09-25_nieuw-model-toegankelijkheidsverklaring.md` | Nieuw model toegankelijkheidsverklaring per 1 oktober 2026: 3 dingen veranderen | manager |  |
| 70 | `2026-10-29_impact-toegankelijkheidsproblemen.md` | Wat betekent impact bij een toegankelijkheidsprobleem? | manager |  |
| 71 | `20260125_submenu_dichtklappen.md` | Submenu dichtklappen | developer |  |
| 72 | `202601_UI_contrast_exception.md` | Native HTML-componenten en kleurcontrast volgens WCAG 2.1 | developer |  |
| 73 | `202602_accessibility_tree.md` | Accessibility Tree in Chrome: Installatie & Interpretatie Gids [2026] | developer |  |
| 74 | `202602_eaa-boetes.md` | Boetes onder de EAA. Zo verschilt de European Accessibility Act per land | manager | stond in webredactie |
| 75 | `202602_logoin h1.md` | Logo in een h1-tag? Waarom dit fout is voor SEO en a11y | developer |  |
| 76 | `accessible-name-que.md` | Accessible name: wat moet je weten | developer |  |
| 77 | `alt-tekst-keuzehulp.md` | Alt-tekst schrijven: de keuzehulp voor de juiste alt-tekst bij elke afbeelding | webredactie |  |
| 78 | `browserstack-vs-proper-access-een-mini-experiment-met-automatische-toegankelijkheidstests.md` | Browserstack vs Proper Access | manager, developer | vergelijking automatische test en handmatig onderzoek |
| 79 | `button-vreet-de-kop-op.md` | Button vreet de kop op | developer |  |
| 80 | `checklist-toegankelijke-content.md` | Checklist toegankelijke content | webredactie |  |
| 81 | `citaat-in-toegankelijke-pdf.md` | Hoe maak je een citaat in een PDF-document (en waarom dat belangrijk is voor toegankelijkheid) | webredactie |  |
| 82 | `digitale-toegankelijkheid-musea-en-culturele-instellingen.md` | Digitale toegankelijkheid voor musea en culturele instellingen | manager |  |
| 83 | `eaa-onderwijs-stappenplan-toegankelijke-leeromgeving.md` | EAA en het onderwijs: 6 stappen naar een toegankelijke leeromgeving | manager |  |
| 84 | `eaa-voor-webshops-wat-moet-je-regelen.md` | EAA voor webshops: wat moet je regelen en waar begin je? | manager |  |
| 85 | `een-toegankelijk-iframe.md` | Een toegankelijk iframe | developer |  |
| 86 | `google-lighthouse-als-toegankelijkheidstool.md` | Google Lighthouse als toegankelijkheidstool | developer, manager | Lighthouse gebruikt de developer, de manager vraagt of het genoeg is |
| 87 | `hoe-gebruikt-een-blinde-persoon-een-website.md` | Gesprek met een blinde collega | webredactie, developer | ervaring van een schermlezergebruiker; past bij iedereen |
| 88 | `hoe-geef-ik-een-applicatie-accessible-name.md` | Hoe geef ik een applicatie een accessible name? | developer |  |
| 89 | `hoe-herken-je-niet-getagde-tekst-in-een-pdf.md` | Hoe herken je niet-getagde tekst in een PDF | webredactie |  |
| 90 | `hoe-maak-je-een-website-digitaal-toegankelijk.md` | Hoe maak je een website digitaal toegankelijk? 4 stappen | manager |  |
| 91 | `hoe-test-ik-focus-zichtbaarheid.md` | Hoe test ik focus zichtbaarheid | developer |  |
| 92 | `hoe-test-ik-focusvolgorde.md` | Hoe test ik focusvolgorde? | developer |  |
| 93 | `hoe-test-ik-kleurcontrast.md` | Instructie: hoe test ik kleurcontrast? | webredactie |  |
| 94 | `hoe-test-je-elementen-die-op-hover-focus-of-klik-verschijnen-en-meteen-weer-verdwijnen.md` | Hoe test je elementen die op hover, focus of klik verschijnen (en meteen weer verdwijnen)? | developer |  |
| 95 | `hoe-toegankelijk-is-het-dl-element.md` | Hoe toegankelijk is het `<dl>`-element? | developer |  |
| 96 | `hoe-toegankelijk-zijn-de-websites-van-de-grootste-opticiens.md` | Hoe toegankelijk zijn de websites van de grootste opticiens? | manager |  |
| 97 | `hoeveel_tijd_nodig_om_digitale_toegankelijkheid_te_leren.md` | Hoe veel tijd is nodig om digitale toegankelijkheid te leren? | webredactie, developer | over toegankelijkheid leren; geen duidelijke doelgroep |
| 98 | `huisstijlkleuren-software-contrastproblemen-wcag.md` | Automatisch toepassen van huisstijlkleuren in software: contrastproblemen voorkomen | developer |  |
| 99 | `interview-met-julia-tol-over-digitale-toegankelijkheid-in-het-financieel-dagblad.md` | Julia Tol over digitale toegankelijkheid in het FD | manager |  |
| 100 | `is-jouw-e-mailhandtekening-digitaal-toegankelijk.md` | Is jouw e-mailhandtekening digitaal toegankelijk? | webredactie |  |
| 101 | `logo-toegankelijk-maken-wcag.md` | Logo met veel tekst: hoe maak je het toegankelijk én gebruiksvriendelijk? | webredactie, developer | alt-tekst en logo |
| 102 | `meerdere-knoppen-met-dezelfde-naam.md` | Meerdere knoppen met dezelfde naam | developer |  |
| 103 | `overlay-toegankelijkheidstools-lossen-ze-echt-iets-op.md` | Overlay-toegankelijkheidstools: lossen ze echt iets op? | manager |  |
| 104 | `rapport-per-element-vs-per-succescriterium.md` | WCAG-audit: het verschil tussen rapporteren per element en per succescriterium | manager |  |
| 105 | `rijksmuseum-apps-toegankelijkheid-getest.md` | Rijksmuseum-apps getest op toegankelijkheid: onze leukste opdracht van 2025 | manager |  |
| 106 | `skiplinks-issue-op-mijn-wordpress-website.md` | Skiplinks issue op mijn Wordpress website | developer |  |
| 107 | `tabel-met-knoppen-om-in-de-kolommen-te-sorteren.md` | Tabel met knoppen om in de kolommen te sorteren | developer |  |
| 108 | `toegankelijke-websites-van-politieke-partijen.md` | Hoe toegankelijk zijn de websites van politieke partijen eigenlijk? | manager |  |
| 109 | `toegankelijke_kopteksten_wcag.md` | Waarom is het belangrijk om koppen als kopteksten op te maken? | webredactie |  |
| 110 | `toegankelijke_pin_automaat.md` | Gestrand dicht bij de poolcirkel : digitale ontoegankelijkheid | manager | persoonlijk verhaal, geen duidelijke doelgroep |
| 111 | `toegankelijkheid-en-cybersecurity.md` | Toegankelijkheid en cybersecurity hoeven geen tegenpolen te zijn | developer, manager | captcha en timeouts bouwt de developer, de afweging maakt de manager |
| 112 | `toegankelijkheidslabel-ontoegankelijk-plaatsen.md` | Toegankelijkheidslabel ontoegankelijk plaatsen (doe dat niet!) | developer, webredactie | plaatsen van het label in de site |
| 113 | `toetsenbord_toegankelijk.md` | Hoe verwijder ik de melding ‘Google vragen over dit bericht’ – en waarom zou je dat willen? | developer | Chrome-melding die tests verstoort; voor wie test |
| 114 | `tools-om-contrast-te-checken.md` | Tools om contrast te checken | webredactie, developer | contrasttools |
| 115 | `video-transcript-de-makkelijkste-manier.md` | Video transcript: goed resultaat met een gratis tool | webredactie |  |
| 116 | `waarom-correcte-html-lijsten-het-verschil-maken-in-toegankelijkheid.md` | Waarom correcte HTML-lijsten hét verschil maken in toegankelijkheid | webredactie, developer | lijsten in de editor en in HTML |
| 117 | `wat-developer-moet-weten-over-de-eaa.md` | Wat je als Web Agency moet weten om te voldoen aan de toegankelijkheidswet (EAA). | developer, manager | voor web agencies: wat de EAA van hun werk vraagt |
| 118 | `wat-kost-een-toegankelijkheidsaudit.md` | Wat kost een toegankelijkheidsaudit? Prijzen, pakketten en waar je op moet letten | manager |  |
| 119 | `wat-ondernemers-vinden-van-de-eaa.md` | Wat ondernemers echt vinden van de European Accessibility Act | manager |  |
| 120 | `wcag-succescriteria-per-beperking-tool.md` | WCAG-succescriteria per beperking: welke eisen gelden voor jouw bezoekers? | developer, webredactie, manager | tool voor iedereen; overweeg geen doelgroep |
| 121 | `zo-controleer-je-de-koppenstructuur-van-je-website.md` | Zo controleer je de koppenstructuur van je website | webredactie |  |
| 122 | `succescriteria/2026-03-17_sc-2-4-7-outline-none.md` | outline: none, de meest destructieve regel in CSS | developer |  |
| 123 | `succescriteria/2026-03-18_sc-2-4-7-onzichtbaar-contrast.md` | Focusindicator die opgaat in de achtergrond | developer |  |
| 124 | `succescriteria/2026-03-19_sc-2-4-7-negatieve-offset.md` | Negatieve outline-offset die de focus verbergt | developer |  |
| 125 | `succescriteria/2026-03-20_sc-1-3-1-kopniveaus.md` | Kopniveaus | webredactie, developer | kopniveaus zet de redacteur in de editor |
| 126 | `succescriteria/2026-03-20_sc-2-4-7-overflow-hidden.md` | overflow: hidden knipt de focusindicator af | developer |  |
| 127 | `succescriteria/2026-03-21_sc-2-4-7-javascript-blur.md` | JavaScript dat de focus actief verwijdert | developer |  |
| 128 | `succescriteria/2026-03-22_sc-1-3-2-metadata-boven-de-kop-van-een-artikel.md` | Metadata boven de kop van een artikel | developer |  |
| 129 | `succescriteria/2026-03-23_sc-1-4-1-links-die-alleen-door-kleur-herkenbaar-zijn.md` | Links die alleen door kleur herkenbaar zijn | developer |  |
| 130 | `succescriteria/2026-03-24_sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond.md` | Lichtgrijze tekst op een witte achtergrond | developer |  |
| 131 | `succescriteria/2026-03-25_sc-1-4-10-elementen-met-een-vaste-breedte.md` | Elementen met een vaste breedte | developer |  |
| 132 | `succescriteria/2026-03-26_sc-1-4-11-informatief-icoon-dat-onzichtbaar-is.md` | Informatief icoon dat onzichtbaar is | developer |  |
| 133 | `succescriteria/2026-03-27_sc-2-1-1-klikbare-div-in-plaats-van-een-button.md` | Klikbare div in plaats van een button | developer |  |
| 134 | `succescriteria/2026-03-28_sc-2-4-2-paginatitel-ontbreekt.md` | Paginatitel ontbreekt | developer, webredactie | paginatitel uit template of CMS |
| 135 | `succescriteria/2026-03-29_sc-2-4-3-focus-springt-onverwacht-door-de-pagina.md` | Focus springt onverwacht door de pagina | developer |  |
| 136 | `succescriteria/2026-03-30_sc-2-4-4-lees-meer.md` | "Lees meer" | webredactie | linktekst schrijft de redacteur |
| 137 | `succescriteria/2026-04-01_sc-2-5-3-klik-op-zoeken-niets-gebeurt.md` | "Klik op Zoeken." Niets gebeurt. | developer |  |
| 138 | `succescriteria/2026-04-02_sc-4-1-2-knop-zonder-naam.md` | WCAG 4.1.2: knop zonder naam | developer |  |
| 139 | `succescriteria/2026-04-03_sc-1-3-1-tabellen.md` | Tabellen in WCAG 1.3.1 | webredactie, developer | tabellen in de editor en in HTML |
| 140 | `succescriteria/2026-04-05_sc-1-3-2-kolommen-waarvan-de-inhoud-door-elkaar-loopt.md` | Kolommen waarvan de inhoud door elkaar loopt | developer |  |
| 141 | `succescriteria/2026-04-06_sc-1-4-1-formulierveld-kleurt-rood-bij-een-fout-dat-is-alles.md` | Formulierveld kleurt rood bij een fout. Dat is alles. | developer |  |
| 142 | `succescriteria/2026-04-07_sc-1-4-3-placeholdertekst-die-niemand-kan-lezen.md` | Placeholdertekst die niemand kan lezen | developer |  |
| 143 | `succescriteria/2026-04-30_sc-4-1-2-knop-die-navigeert-link-die-een-actie-uitvoert.md` | Knop die navigeert, link die een actie uitvoert | developer |  |
| 144 | `succescriteria/sc-1-1-1-wat-betekent-niet-tekstuele-content.md` | SC 1.1.1 - Wat betekent “Niet-tekstuele content” | webredactie, developer | description noemt webredacteur |
| 145 | `succescriteria/sc-1-2-1-wat-betekent-alleen-audio-of-alleen-video.md` | SC 1.2.1 - Wat betekent "Alleen audio of alleen video" | webredactie |  |
| 146 | `succescriteria/sc-1-2-2-wat-betekent-ondertiteling-vooraf-opgenomen.md` | SC 1.2.2 - Wat betekent "Ondertiteling (vooraf opgenomen)" | webredactie |  |
| 147 | `succescriteria/sc-1-2-3-wat-betekent-audiodescriptie-of-media-alternatief-vooraf-opgenomen.md` | 1.2.3 - Wat betekent “Audiodescriptie of media-alternatief (vooraf opgenomen)”? | webredactie |  |
| 148 | `succescriteria/sc-1-2-4-wat-betekent-ondertiteling-live.md` | SC 1.2.4 - Wat betekent "Ondertiteling (live)" | webredactie |  |
| 149 | `succescriteria/sc-1-2-5-wat-betekent-audiodescriptie.md` | 1.2.5 - Wat betekent "Audiodescriptie"? | webredactie |  |
| 150 | `succescriteria/sc-1-3-1-wat-betekent-informatie-en-relaties.md` | SC 1.3.1 - Wat betekent “Informatie en relaties” | webredactie, developer | description noemt webredacteur |
| 151 | `succescriteria/sc-1-3-2-wat-betekent-betekenisvolle-volgorde.md` | 1.3.2 - Wat betekent “Betekenisvolle volgorde”? | webredactie, developer | description noemt webredacteur |
| 152 | `succescriteria/sc-1-3-3-wat-betekent-zintuigelijke-eigenschappen.md` | 1.3.3 - Wat betekent "Zintuiglijke kenmerken"? | webredactie |  |
| 153 | `succescriteria/sc-1-3-4-wat-betekent-orientatie.md` | SC 1.3.4 - Wat betekent "Oriëntatie" | developer |  |
| 154 | `succescriteria/sc-1-3-5-wat-betekent-invoerdoel-identificeren.md` | SC 1.3.5 - Wat betekent "Invoerdoel identificeren" | developer |  |
| 155 | `succescriteria/sc-1-4-1-wat-betekent-gebruik-van-kleur.md` | SC 1.4.1 - Wat betekent "Gebruik van kleur"? | developer, webredactie | designer en developer; ook redacteur bij kleur in tekst |
| 156 | `succescriteria/sc-1-4-10-wat-betekent-reflow.md` | SC 1.4.10 - Wat betekent "Reflow"? | developer |  |
| 157 | `succescriteria/sc-1-4-11-wat-betekent-contrast-UI.md` | Zijn je formulieren goed zichtbaar? (WCAG 1.4.11) | developer |  |
| 158 | `succescriteria/sc-1-4-12-wat-betekent-tekstafstand.md` | Text Spacing: waarom vaste hoogtes je code breken (WCAG 1.4.12) | developer |  |
| 159 | `succescriteria/sc-1-4-13-wat-betekent-inhoud-bij-hover-of-focus.md` | SC 1.4.13 - Wat betekent “Inhoud bij hover of focus” | developer |  |
| 160 | `succescriteria/sc-1-4-2-wat-betekent-audiobediening.md` | SC 1.4.2 - Wat betekent "Audiobediening" | developer, webredactie | autoplay instellen kan in het CMS |
| 161 | `succescriteria/sc-1-4-3-wat-betekent-contrast-minimum.md` | SC 1.4.3 - Wat betekent "Contrast (minimum)"? | developer, webredactie | kleuren in de huisstijl, tekst op beeld door de redacteur |
| 162 | `succescriteria/sc-1-4-4-wat-betekent-tekst-vergroten.md` | SC 1.4.4 - Wat betekent "Tekst vergroten"? | developer |  |
| 163 | `succescriteria/sc-1-4-5-wat-betekent-afbeeldingen-van-tekst.md` | Tekst in afbeeldingen: waarom het niet mag (WCAG 1.4.5) | webredactie | stond in webredactie |
| 164 | `succescriteria/sc-1-4-5-wat-betekent-contrast-voor-niet-tekstuele-onderdelen.md` | SC 1.4.11 - Wat betekent “Contrast voor niet-tekstuele onderdelen” | developer |  |
| 165 | `succescriteria/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk.md` | SC 2.1.1 - Wat betekent "Toetsenbord toegankelijk" | developer |  |
| 166 | `succescriteria/sc-2-1-4-wat-betekent-sneltoetsen-met-tekens.md` | SC 2.1.4 - Wat betekent “Sneltoetsen met tekens” | developer |  |
| 167 | `succescriteria/sc-2-2-1-wat-betekent-tijdslimiet-aanpassen.md` | SC 2.2.1 - Wat betekent "Tijdslimiet aanpassen" | developer |  |
| 168 | `succescriteria/sc-2-2-2-wat-betekent-pauzeren-stoppen-of-verbergen.md` | SC 2.2.2 - Wat betekent "Pauzeren, stoppen of verbergen" | developer, webredactie | carrousels: bouw en instelling |
| 169 | `succescriteria/sc-2-4-1-wat-betekent-blokken-overslaan-in-wcag.md` | SC 2.4.1 - Wat betekent “Blokken overslaan” in WCAG? | developer |  |
| 170 | `succescriteria/sc-2-4-11-wat-betekent-focusweergave-minimum.md` | SC 2.4.11 - Wat betekent "Focus niet volledig bedekt" | developer |  |
| 171 | `succescriteria/sc-2-4-2-wat-betekent-paginatitels.md` | SC 2.4.2 - Wat betekent "Paginatitels" | webredactie, developer | description noemt webredacteur |
| 172 | `succescriteria/sc-2-4-3-wat-betekent-focusvolgorde.md` | SC 2.4.3 - Wat betekent “Focusvolgorde” | developer |  |
| 173 | `succescriteria/sc-2-4-4-wat-betekent-doel-van-links-in-context.md` | SC 2.4.4 - Wat betekent “Doel van links (in context)” | webredactie, developer | description noemt webredacteur |
| 174 | `succescriteria/sc-2-4-5-wat-betekent-meerdere-manieren.md` | SC 2.4.5 - Wat betekent "Meerdere manieren" | developer | navigatie en zoekfunctie; kan ook manager |
| 175 | `succescriteria/sc-2-4-6-wat-betekent-koppen-en-labels.md` | SC 2.4.6 - Wat betekent "Koppen en labels" | webredactie, developer | koppen en labels schrijft de redacteur |
| 176 | `succescriteria/sc-2-4-7-wat-betekent-focus-zichtbaar.md` | SC 2.4.7 - Wat betekent "Focus zichtbaar" | developer |  |
| 177 | `succescriteria/sc-2-5-3-wat-betekent-label-in-naam.md` | SC 2.5.3 - Wat betekent “Label in naam” | developer |  |
| 178 | `succescriteria/sc-2-5-7-wat-betekent-sleepbewegingen.md` | SC 2.5.7 - Wat betekent "Sleepbewegingen" | developer |  |
| 179 | `succescriteria/sc-2-5-8-wat-betekent-doelgrootte-minimum.md` | SC 2.5.8 - Wat betekent "Doelgrootte (minimum)"? | developer |  |
| 180 | `succescriteria/sc-3-1-1-wat-betekent-taal-van-de-pagina.md` | SC 3.1.1 - Wat betekent “Taal van de pagina” | developer |  |
| 181 | `succescriteria/sc-3-1-2-wat-betekent-taal-van-onderdelen.md` | SC 3.1.2 - Wat betekent "Taal van onderdelen" | webredactie, developer | lang-attribuut zet de redacteur vaak in de editor |
| 182 | `succescriteria/sc-3-2-1-wat-betekent-bij-focus.md` | SC 3.2.1 - Wat betekent “Bij focus” | developer |  |
| 183 | `succescriteria/sc-3-2-2-bij-invoer.md` | SC 3.2.2 - Wat betekent “Bij invoer” | developer |  |
| 184 | `succescriteria/sc-3-2-3-wat-betekent-consistente-navigatie.md` | SC 3.2.3 - Wat betekent "Consistente navigatie" | developer |  |
| 185 | `succescriteria/sc-3-2-4-wat-betekent-consistente-identificatie.md` | SC 3.2.4 - Wat betekent "Consistente identificatie" | developer |  |
| 186 | `succescriteria/sc-3-2-6-wat-betekent-consistente-hulp.md` | SC 3.2.6 - Wat betekent "Consistente hulp" | developer |  |
| 187 | `succescriteria/sc-3-3-1-wat-betekent-foutidentificatie.md` | SC 3.3.1 - Wat betekent "Foutidentificatie" | developer |  |
| 188 | `succescriteria/sc-3-3-2-wat-betekent-labels-en-instructies.md` | SC 3.3.2 - Wat betekent “Labels en instructies” | webredactie, developer | description noemt webredacteur |
| 189 | `succescriteria/sc-3-3-3-wat-betekent-foutsuggestie.md` | SC 3.3.3 - Wat betekent “Foutsuggestie” | developer |  |
| 190 | `succescriteria/sc-3-3-4-wat-betekent-foutpreventie-juridisch-financieel-data.md` | SC 3.3.4 - Wat betekent "Foutpreventie (juridisch, financieel, data)" | developer |  |
| 191 | `succescriteria/sc-3-3-7-wat-betekent-redundante-invoer.md` | SC 3.3.7 - Wat betekent "Redundante invoer" | developer |  |
| 192 | `succescriteria/sc-3-3-7-wat-betekent-toegankelijke-authenticatie.md` | SC 3.3.8 - Wat betekent "Toegankelijke authenticatie" | developer |  |
| 193 | `succescriteria/sc-4-1-2-wat-betekent-naam-rol-waarde.md` | SC 4.1.2 - Wat betekent "Naam, rol, waarde" | developer |  |
| 194 | `succescriteria/sc-4-1-3-wat-betekent-statusbericht.md` | SC 4.1.3 - Wat betekent "Statusbericht" | developer |  |

## Stap 2: voorstel onderwerpen

Nog niets in de front matter veranderd. Indeling per artikel staat ook in `docs/blog-onderwerpen-indeling.json`, die stap 3 als invoer gebruikt.

- **13 onderwerpen**, voor dezelfde 193 gepubliceerde artikelen als in stap 1.
- Een artikel krijgt één of twee onderwerpen. Het eerste is het label op de kaart.
- "Eerste" telt de artikelen waar het onderwerp het label is, "totaal" ook de artikelen waar het tweede staat.
- Telling gemaakt met een script op de front matter (`categories`, `tags`, titel en het SC-nummer in de bestandsnaam), daarna per titel nagelopen en ongeveer 40 artikelen met de hand verplaatst.

| Slug | Naam | URL | Eerste | Totaal | Wat erin gaat |
|---|---|---|---|---|---|
| `wcag-uitgelegd` | WCAG en achtergrond | bestaat al | 16 | 17 | wat WCAG is, versies, onderzoek, interviews, cases. Neemt `achtergrond_wcag` en `cases` op. De SC-uitlegpagina's gaan naar een vakonderwerp. |
| `de-eaa` | EAA en wetgeving | bestaat al (ook `de EAA`, `eaa`) | 12 | 18 | EAA, BDTO, toezicht (ACM, AFM), boetes, toegankelijkheidsverklaring, register, sectoren. |
| `e-commerce-eaa` | Webshops | bestaat al | 12 | 13 | EAA voor webshops, checklist, de reeks alt-teksten in webshops. Tags `webshop`, `ecommerce`, `e-commerce`. |
| `audits` | Audits en rapporten | nieuw; alias vanaf `/categories/wcag-vragen/` | 17 | 19 | kosten, duur, WCAG-EM, rapportage, een bureau kiezen. Tags `audit`, `toegankelijkheidsaudit`, `wcag-em`, `kosten`. Neemt het grootste deel van `wcag-vragen` op. |
| `tips-en-tools` | Testen en tools | bestaat al (ook `tips en tools`); alias vanaf `/categories/ai-en-wcag/` | 20 | 25 | testtools, schermlezers (VoiceOver, NVDA, TalkBack), overlays, Lighthouse, de AI-tests. Tags `tools`, `testen`, `AI`. |
| `teksten-en-documenten` | Teksten en documenten | nieuw | 10 | 10 | PDF, Google Docs en Sheets, e-mailhandtekening, koppen opmaken, begrijpelijke tekst. |
| `afbeeldingen-en-media` | Afbeeldingen, video en audio | nieuw | 13 | 22 | alt-tekst, video, ondertiteling, audio. SC 1.1.1, 1.2.x, 1.4.2, 1.4.5, 2.2.2. |
| `kleur-en-contrast` | Kleur en contrast | nieuw | 13 | 16 | SC 1.4.1, 1.4.3, 1.4.11. Tags `contrast`, `kleur`, `kleurenblindheid`. |
| `toetsenbord-en-focus` | Toetsenbord en focus | nieuw | 16 | 20 | SC 2.1.x, 2.4.3, 2.4.7, 2.4.11, 3.2.1. Tags `focus`, `toetsenbord`, `tabvolgorde`. |
| `formulieren` | Formulieren | nieuw | 12 | 15 | SC 1.3.5, 2.2.1, 3.2.2, 3.3.x. Tags `formulier`, `label`, `labels`. |
| `html-en-aria` | HTML en ARIA | nieuw | 21 | 30 | SC 1.3.1, 2.5.3, 4.1.2, 4.1.3; toegankelijke naam, ARIA-rollen, knoppen. Tags `aria`, `semantiek`, `naam-rol-waarde`, `html`. |
| `structuur-en-navigatie` | Structuur en navigatie | nieuw | 21 | 21 | paginatitels, linkteksten, skiplinks, volgorde, taal, consistente navigatie. SC 1.3.2, 1.3.3, 2.4.1, 2.4.2, 2.4.4, 2.4.5, 2.4.6, 3.1.x, 3.2.3, 3.2.4, 3.2.6. |
| `zoom-en-mobiel` | Zoom en mobiel | nieuw | 10 | 11 | reflow, tekstgrootte, tekstafstand, oriëntatie, doelgrootte, apps. SC 1.3.4, 1.4.4, 1.4.10, 1.4.12, 1.4.13, 2.5.7, 2.5.8. |

### Wat er met de oude categorieën gebeurt

| Oude categorie | Artikelen nu | Wordt |
|---|---|---|
| `wcag-uitgelegd` | 96 | blijft, als "WCAG en achtergrond" |
| `achtergrond_wcag` | 23 | alias naar `wcag-uitgelegd` |
| `cases` | 3 | alias naar `wcag-uitgelegd` |
| `wcag-vragen` | 16 | alias naar `audits` |
| `ai-en-wcag` | 4 | alias naar `tips-en-tools` |
| `de-eaa` / `de EAA` | 21 | blijft |
| `e-commerce-eaa` | 10 | blijft, als "Webshops" |
| `tips-en-tools` / `tips en tools` | 34 | blijft, als "Testen en tools" |
| `webredactie` / `Webredactie` | 17 | geen onderwerp; alias in `content/dutch/doelgroepen/webredactie/_index.md` |
| `webdeveloper` / `Webdeveloper` | 23 | geen onderwerp; alias in `content/dutch/doelgroepen/developer/_index.md` |

Hugo maakt van `de EAA`, `Webdeveloper` en `tips en tools` al dezelfde URL als de slug, dus die varianten hebben geen eigen alias nodig.

### Open vragen voor Julia

1. **AI-tests onder "Testen en tools".** Het zijn 4 artikelen, te weinig voor een eigen onderwerp. Maar `ai-en-wcag` heeft een eigen blog-CTA. Liever een eigen onderwerp houden?
2. **`wcag-uitgelegd` als "WCAG en achtergrond".** De 73 SC-uitlegpagina's krijgen een vakonderwerp, zoals "Kleur en contrast". Daardoor blijven er onder `wcag-uitgelegd` 16 artikelen over. De lange uitleg op die categoriepagina gaat nu over de SC-pagina's en moet dan herschreven worden.
3. **Tags.** Ik heb ze gebruikt als signaal en laat ze verder staan. In stap 3 alleen dubbele varianten samenvoegen (`wcag`/`WCAG`, `schermlezer`/`screenreader`, `Afbeeldingen`/`afbeeldingen`)?

### Indeling per artikel

| # | Bestand | Titel | Onderwerpen |
|---|---|---|---|
| 1 | `alt-tekst-keuzehulp.md` | Alt-tekst schrijven: de keuzehulp voor de juiste alt-tekst bij elke afbeelding | afbeeldingen-en-media |
| 2 | `logo-toegankelijk-maken-wcag.md` | Logo met veel tekst: hoe maak je het toegankelijk én gebruiksvriendelijk? | afbeeldingen-en-media |
| 3 | `succescriteria/sc-1-1-1-wat-betekent-niet-tekstuele-content.md` | SC 1.1.1 - Wat betekent “Niet-tekstuele content” | afbeeldingen-en-media |
| 4 | `succescriteria/sc-1-2-1-wat-betekent-alleen-audio-of-alleen-video.md` | SC 1.2.1 - Wat betekent "Alleen audio of alleen video" | afbeeldingen-en-media |
| 5 | `succescriteria/sc-1-2-2-wat-betekent-ondertiteling-vooraf-opgenomen.md` | SC 1.2.2 - Wat betekent "Ondertiteling (vooraf opgenomen)" | afbeeldingen-en-media |
| 6 | `succescriteria/sc-1-2-3-wat-betekent-audiodescriptie-of-media-alternatief-vooraf-opgenomen.md` | 1.2.3 - Wat betekent “Audiodescriptie of media-alternatief (vooraf opgenomen)”? | afbeeldingen-en-media |
| 7 | `succescriteria/sc-1-2-4-wat-betekent-ondertiteling-live.md` | SC 1.2.4 - Wat betekent "Ondertiteling (live)" | afbeeldingen-en-media |
| 8 | `succescriteria/sc-1-2-5-wat-betekent-audiodescriptie.md` | 1.2.5 - Wat betekent "Audiodescriptie"? | afbeeldingen-en-media |
| 9 | `succescriteria/sc-1-4-2-wat-betekent-audiobediening.md` | SC 1.4.2 - Wat betekent "Audiobediening" | afbeeldingen-en-media |
| 10 | `succescriteria/sc-1-4-5-wat-betekent-afbeeldingen-van-tekst.md` | Tekst in afbeeldingen: waarom het niet mag (WCAG 1.4.5) | afbeeldingen-en-media |
| 11 | `succescriteria/sc-1-4-5-wat-betekent-contrast-voor-niet-tekstuele-onderdelen.md` | SC 1.4.11 - Wat betekent “Contrast voor niet-tekstuele onderdelen” | afbeeldingen-en-media |
| 12 | `succescriteria/sc-2-2-2-wat-betekent-pauzeren-stoppen-of-verbergen.md` | SC 2.2.2 - Wat betekent "Pauzeren, stoppen of verbergen" | afbeeldingen-en-media |
| 13 | `video-transcript-de-makkelijkste-manier.md` | Video transcript: goed resultaat met een gratis tool | afbeeldingen-en-media, tips-en-tools |
| 14 | `2026-04-04_wat-is-een-toegankelijkheidsaudit.md` | Wat is een toegankelijkheidsaudit? | audits |
| 15 | `2026-04-09_wat-kost-wcag-audit-webshop.md` | Wat kost een WCAG-audit voor een webshop? Een antwoord met prijsindicatie | audits, e-commerce-eaa |
| 16 | `2026-04-11_mini-audit-mkb.md` | Mini-audit voor MKB: weet of je website aan de EAA voldoet | audits, de-eaa |
| 17 | `2026-04-13_hoe-begin-ik-met-digitale-toegankelijkheid.md` | Hoe begin ik met digitale toegankelijkheid? | audits, tips-en-tools |
| 18 | `2026-04-13_user-stories-in-toegankelijkheidsrapport.md` | Waarom elke bevinding in ons rapport begint met een user story | audits |
| 19 | `2026-04-14_hoe-check-ik-de-toegankelijkheid-van-mijn-website.md` | Hoe check ik de toegankelijkheid van mijn website? | audits, tips-en-tools |
| 20 | `2026-04-16_hoe-lang-duurt-een-toegankelijkheidsaudit.md` | Hoe lang duurt een toegankelijkheidsaudit? | audits |
| 21 | `2026-04-17_desktop-en-mobiele-audit.md` | Heb ik een desktop- en mobiele audit nodig? | audits |
| 22 | `2026-04-18_automatische-tool-vs-handmatige-test.md` | Hoeveel problemen vindt een automatische tool vs. een handmatige test? | audits, tips-en-tools |
| 23 | `2026-04-18_wcag-em-methode-toegankelijkheidsonderzoek.md` | WCAG-EM: de methode van het W3C voor een toegankelijkheidsonderzoek | audits |
| 24 | `2026-04-19_hoe-vaak-opnieuw-laten-testen.md` | Hoe vaak moet ik mijn website opnieuw laten testen? | audits |
| 25 | `2026-06-08_toegankelijk-alternatief-1-klik-regel.md` | Een ontoegankelijk element met een toegankelijk alternatief: mag je het laten staan? | audits, wcag-uitgelegd |
| 26 | `2026-06-30_hoe-kies-je-een-toegankelijkheidsbureau.md` | Hoe kies je een toegankelijkheidsbureau? De vragen die je stelt en hoe je de antwoorden leest | audits |
| 27 | `2026-08-13_toegankelijkheidsrapport-ontvangen-zo-pak-je-het-aan.md` | Waaraan herken je een goed toegankelijkheidsrapport? | audits |
| 28 | `2026-10-29_impact-toegankelijkheidsproblemen.md` | Wat betekent impact bij een toegankelijkheidsprobleem? | audits |
| 29 | `rapport-per-element-vs-per-succescriterium.md` | WCAG-audit: het verschil tussen rapporteren per element en per succescriterium | audits |
| 30 | `wat-kost-een-toegankelijkheidsaudit.md` | Wat kost een toegankelijkheidsaudit? Prijzen, pakketten en waar je op moet letten | audits |
| 31 | `2026-04-06_boetes-niet-nakoming-eaa.md` | Wat zijn de boetes bij niet-nakoming van de EAA? | de-eaa |
| 32 | `2026-04-07_voor-wie-is-digitale-toegankelijkheid-verplicht.md` | Voor wie gelden het BDTO en de EAA? | de-eaa |
| 33 | `2026-04-08_moet-mijn-overheidswebsite-voldoen-aan-wcag.md` | Moet mijn overheidswebsite al voldoen aan WCAG? | de-eaa |
| 34 | `2026-06-26_wat-doet-een-toezichthouder-acm-over-de-eaa.md` | Wat doet een toezichthouder eigenlijk? De ACM over de European Accessibility Act | de-eaa |
| 35 | `2026-08-10_toegankelijkheidsregister-oogt-gezond.md` | Het toegankelijkheidsregister oogt gezond. Onder de oppervlakte brokkelt het af. | de-eaa |
| 36 | `2026-09-08_eaa-updates-afm-financiele-sector.md` | Wat de AFM in drie EAA-updates van financiële instellingen verwacht | de-eaa |
| 37 | `2026-09-25_nieuw-model-toegankelijkheidsverklaring.md` | Nieuw model toegankelijkheidsverklaring per 1 oktober 2026: 3 dingen veranderen | de-eaa |
| 38 | `202602_eaa-boetes.md` | Boetes onder de EAA. Zo verschilt de European Accessibility Act per land | de-eaa |
| 39 | `digitale-toegankelijkheid-musea-en-culturele-instellingen.md` | Digitale toegankelijkheid voor musea en culturele instellingen | de-eaa |
| 40 | `eaa-onderwijs-stappenplan-toegankelijke-leeromgeving.md` | EAA en het onderwijs: 6 stappen naar een toegankelijke leeromgeving | de-eaa |
| 41 | `wat-developer-moet-weten-over-de-eaa.md` | Wat je als Web Agency moet weten om te voldoen aan de toegankelijkheidswet (EAA). | de-eaa |
| 42 | `wat-ondernemers-vinden-van-de-eaa.md` | Wat ondernemers echt vinden van de European Accessibility Act | de-eaa |
| 43 | `2026-03-21_webshop-productafbeelding-zonder-beschrijving.md` | Productafbeelding zonder beschrijving | e-commerce-eaa, afbeeldingen-en-media |
| 44 | `2026-04-04_webshop-afbeelding-van-prefix.md` | Afbeelding van prefix | e-commerce-eaa, afbeeldingen-en-media |
| 45 | `2026-04-05_geldt-de-eaa-voor-mijn-webshop.md` | Geldt de EAA-wet voor mijn webshop? | e-commerce-eaa, de-eaa |
| 46 | `2026-04-09_eaa-checklist-2026-webshops.md` | EAA-checklist 2026: 30 punten waarop je webshop moet voldoen | e-commerce-eaa, de-eaa |
| 47 | `2026-04-18_webshop-decoratieve-afbeeldingen.md` | Decoratieve afbeeldingen | e-commerce-eaa, afbeeldingen-en-media |
| 48 | `2026-05-02_webshop-knop-zonder-naam.md` | Knop zonder naam in een webshop | e-commerce-eaa, html-en-aria |
| 49 | `2026-05-16_webshop-tekst-in-afbeelding.md` | Tekst in afbeelding | e-commerce-eaa, afbeeldingen-en-media |
| 50 | `2026-05-30_webshop-plattegrond.md` | Plattegrond | e-commerce-eaa, afbeeldingen-en-media |
| 51 | `2026-06-13_webshop-gelinkte-afbeelding.md` | Gelinkte afbeelding | e-commerce-eaa, afbeeldingen-en-media |
| 52 | `2026-06-22_webshops-toegankelijker-maar-nog-niet-bruikbaar.md` | Webshops worden toegankelijker, maar nog niet bruikbaar | e-commerce-eaa, de-eaa |
| 53 | `2026-06-27_webshop-maattabel-screenshot.md` | Maattabel screenshot | e-commerce-eaa, afbeeldingen-en-media |
| 54 | `eaa-voor-webshops-wat-moet-je-regelen.md` | EAA voor webshops: wat moet je regelen en waar begin je? | e-commerce-eaa, de-eaa |
| 55 | `2026-04-15_sc-2-5-3-aria-labelledby-verwijst-naar-de-verkeerde-tekst.md` | aria-labelledby verwijst naar de verkeerde tekst | formulieren, html-en-aria |
| 56 | `2026-04-17_sc-1-3-1-labels.md` | Labels | formulieren, html-en-aria |
| 57 | `succescriteria/sc-1-3-5-wat-betekent-invoerdoel-identificeren.md` | SC 1.3.5 - Wat betekent "Invoerdoel identificeren" | formulieren |
| 58 | `succescriteria/sc-2-2-1-wat-betekent-tijdslimiet-aanpassen.md` | SC 2.2.1 - Wat betekent "Tijdslimiet aanpassen" | formulieren |
| 59 | `succescriteria/sc-3-2-2-bij-invoer.md` | SC 3.2.2 - Wat betekent “Bij invoer” | formulieren |
| 60 | `succescriteria/sc-3-3-1-wat-betekent-foutidentificatie.md` | SC 3.3.1 - Wat betekent "Foutidentificatie" | formulieren |
| 61 | `succescriteria/sc-3-3-2-wat-betekent-labels-en-instructies.md` | SC 3.3.2 - Wat betekent “Labels en instructies” | formulieren |
| 62 | `succescriteria/sc-3-3-3-wat-betekent-foutsuggestie.md` | SC 3.3.3 - Wat betekent “Foutsuggestie” | formulieren |
| 63 | `succescriteria/sc-3-3-4-wat-betekent-foutpreventie-juridisch-financieel-data.md` | SC 3.3.4 - Wat betekent "Foutpreventie (juridisch, financieel, data)" | formulieren |
| 64 | `succescriteria/sc-3-3-7-wat-betekent-redundante-invoer.md` | SC 3.3.7 - Wat betekent "Redundante invoer" | formulieren |
| 65 | `succescriteria/sc-3-3-7-wat-betekent-toegankelijke-authenticatie.md` | SC 3.3.8 - Wat betekent "Toegankelijke authenticatie" | formulieren |
| 66 | `toegankelijkheidslabel-ontoegankelijk-plaatsen.md` | Toegankelijkheidslabel ontoegankelijk plaatsen (doe dat niet!) | formulieren, html-en-aria |
| 67 | `2026-03-02_nl_taalswitch-met-alleen-en-en-nl-hoe-maak-je-die-toegankelijk.md` | Taalswitch met alleen 'EN' en 'NL': hoe maak je die toegankelijk? | html-en-aria |
| 68 | `2026-04-16_sc-4-1-2-div-als-knop-naam-maar-geen-rol.md` | Div als knop: naam maar geen rol | html-en-aria |
| 69 | `2026-07-19_aria-hidden-wat-het-doet-en-wanneer-je-het-gebruikt.md` | aria-hidden: wat het doet en wanneer je het wel of niet gebruikt | html-en-aria |
| 70 | `2026-08-01_aria-rollen-en-attributen.md` | ARIA-rollen en -attributen: wanneer je ze nodig hebt en wanneer niet | html-en-aria |
| 71 | `2026-08-01_wat-is-een-toegankelijke-naam.md` | Wat is een toegankelijke naam? | html-en-aria |
| 72 | `accessible-name-que.md` | Accessible name: wat moet je weten | html-en-aria |
| 73 | `button-vreet-de-kop-op.md` | Button vreet de kop op | html-en-aria |
| 74 | `een-toegankelijk-iframe.md` | Een toegankelijk iframe | html-en-aria |
| 75 | `hoe-geef-ik-een-applicatie-accessible-name.md` | Hoe geef ik een applicatie een accessible name? | html-en-aria |
| 76 | `hoe-toegankelijk-is-het-dl-element.md` | Hoe toegankelijk is het `<dl>`-element? | html-en-aria |
| 77 | `meerdere-knoppen-met-dezelfde-naam.md` | Meerdere knoppen met dezelfde naam | html-en-aria |
| 78 | `succescriteria/2026-03-20_sc-1-3-1-kopniveaus.md` | Kopniveaus | html-en-aria |
| 79 | `succescriteria/2026-04-01_sc-2-5-3-klik-op-zoeken-niets-gebeurt.md` | "Klik op Zoeken." Niets gebeurt. | html-en-aria |
| 80 | `succescriteria/2026-04-02_sc-4-1-2-knop-zonder-naam.md` | WCAG 4.1.2: knop zonder naam | html-en-aria |
| 81 | `succescriteria/2026-04-03_sc-1-3-1-tabellen.md` | Tabellen in WCAG 1.3.1 | html-en-aria |
| 82 | `succescriteria/2026-04-30_sc-4-1-2-knop-die-navigeert-link-die-een-actie-uitvoert.md` | Knop die navigeert, link die een actie uitvoert | html-en-aria |
| 83 | `succescriteria/sc-1-3-1-wat-betekent-informatie-en-relaties.md` | SC 1.3.1 - Wat betekent “Informatie en relaties” | html-en-aria |
| 84 | `succescriteria/sc-2-5-3-wat-betekent-label-in-naam.md` | SC 2.5.3 - Wat betekent “Label in naam” | html-en-aria |
| 85 | `succescriteria/sc-4-1-2-wat-betekent-naam-rol-waarde.md` | SC 4.1.2 - Wat betekent "Naam, rol, waarde" | html-en-aria |
| 86 | `succescriteria/sc-4-1-3-wat-betekent-statusbericht.md` | SC 4.1.3 - Wat betekent "Statusbericht" | html-en-aria |
| 87 | `tabel-met-knoppen-om-in-de-kolommen-te-sorteren.md` | Tabel met knoppen om in de kolommen te sorteren | html-en-aria |
| 88 | `2026-04-09_sc-1-4-11-invoerveld-zonder-zichtbare-rand.md` | Invoerveld zonder zichtbare rand | kleur-en-contrast, formulieren |
| 89 | `2026-04-20_sc-1-4-1-groene-rij-goedgekeurd-rode-rij-afgewezen.md` | Groene rij = goedgekeurd, rode rij = afgewezen | kleur-en-contrast |
| 90 | `2026-04-21_sc-1-4-3-witte-tekst-op-een-foto.md` | Witte tekst op een foto | kleur-en-contrast |
| 91 | `202601_UI_contrast_exception.md` | Native HTML-componenten en kleurcontrast volgens WCAG 2.1 | kleur-en-contrast, html-en-aria |
| 92 | `huisstijlkleuren-software-contrastproblemen-wcag.md` | Automatisch toepassen van huisstijlkleuren in software: contrastproblemen voorkomen | kleur-en-contrast |
| 93 | `succescriteria/2026-03-23_sc-1-4-1-links-die-alleen-door-kleur-herkenbaar-zijn.md` | Links die alleen door kleur herkenbaar zijn | kleur-en-contrast, html-en-aria |
| 94 | `succescriteria/2026-03-24_sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond.md` | Lichtgrijze tekst op een witte achtergrond | kleur-en-contrast |
| 95 | `succescriteria/2026-03-26_sc-1-4-11-informatief-icoon-dat-onzichtbaar-is.md` | Informatief icoon dat onzichtbaar is | kleur-en-contrast |
| 96 | `succescriteria/2026-04-06_sc-1-4-1-formulierveld-kleurt-rood-bij-een-fout-dat-is-alles.md` | Formulierveld kleurt rood bij een fout. Dat is alles. | kleur-en-contrast, formulieren |
| 97 | `succescriteria/2026-04-07_sc-1-4-3-placeholdertekst-die-niemand-kan-lezen.md` | Placeholdertekst die niemand kan lezen | kleur-en-contrast |
| 98 | `succescriteria/sc-1-4-1-wat-betekent-gebruik-van-kleur.md` | SC 1.4.1 - Wat betekent "Gebruik van kleur"? | kleur-en-contrast |
| 99 | `succescriteria/sc-1-4-11-wat-betekent-contrast-UI.md` | Zijn je formulieren goed zichtbaar? (WCAG 1.4.11) | kleur-en-contrast |
| 100 | `succescriteria/sc-1-4-3-wat-betekent-contrast-minimum.md` | SC 1.4.3 - Wat betekent "Contrast (minimum)"? | kleur-en-contrast |
| 101 | `2026-04-11_sc-2-4-2-alle-paginas-hebben-dezelfde-titel.md` | Alle pagina's hebben dezelfde titel | structuur-en-navigatie |
| 102 | `2026-04-13_sc-2-4-4-url-als-linktekst.md` | URL als linktekst | structuur-en-navigatie |
| 103 | `2026-04-19_sc-1-3-2-css-order-die-de-logica-verbreekt.md` | CSS order die de logica verbreekt | structuur-en-navigatie |
| 104 | `202602_logoin h1.md` | Logo in een h1-tag? Waarom dit fout is voor SEO en a11y | structuur-en-navigatie, afbeeldingen-en-media |
| 105 | `skiplinks-issue-op-mijn-wordpress-website.md` | Skiplinks issue op mijn Wordpress website | structuur-en-navigatie |
| 106 | `succescriteria/2026-03-22_sc-1-3-2-metadata-boven-de-kop-van-een-artikel.md` | Metadata boven de kop van een artikel | structuur-en-navigatie |
| 107 | `succescriteria/2026-03-28_sc-2-4-2-paginatitel-ontbreekt.md` | Paginatitel ontbreekt | structuur-en-navigatie |
| 108 | `succescriteria/2026-03-30_sc-2-4-4-lees-meer.md` | "Lees meer" | structuur-en-navigatie |
| 109 | `succescriteria/2026-04-05_sc-1-3-2-kolommen-waarvan-de-inhoud-door-elkaar-loopt.md` | Kolommen waarvan de inhoud door elkaar loopt | structuur-en-navigatie |
| 110 | `succescriteria/sc-1-3-2-wat-betekent-betekenisvolle-volgorde.md` | 1.3.2 - Wat betekent “Betekenisvolle volgorde”? | structuur-en-navigatie |
| 111 | `succescriteria/sc-1-3-3-wat-betekent-zintuigelijke-eigenschappen.md` | 1.3.3 - Wat betekent "Zintuiglijke kenmerken"? | structuur-en-navigatie |
| 112 | `succescriteria/sc-2-4-1-wat-betekent-blokken-overslaan-in-wcag.md` | SC 2.4.1 - Wat betekent “Blokken overslaan” in WCAG? | structuur-en-navigatie |
| 113 | `succescriteria/sc-2-4-2-wat-betekent-paginatitels.md` | SC 2.4.2 - Wat betekent "Paginatitels" | structuur-en-navigatie |
| 114 | `succescriteria/sc-2-4-4-wat-betekent-doel-van-links-in-context.md` | SC 2.4.4 - Wat betekent “Doel van links (in context)” | structuur-en-navigatie |
| 115 | `succescriteria/sc-2-4-5-wat-betekent-meerdere-manieren.md` | SC 2.4.5 - Wat betekent "Meerdere manieren" | structuur-en-navigatie |
| 116 | `succescriteria/sc-2-4-6-wat-betekent-koppen-en-labels.md` | SC 2.4.6 - Wat betekent "Koppen en labels" | structuur-en-navigatie |
| 117 | `succescriteria/sc-3-1-1-wat-betekent-taal-van-de-pagina.md` | SC 3.1.1 - Wat betekent “Taal van de pagina” | structuur-en-navigatie |
| 118 | `succescriteria/sc-3-1-2-wat-betekent-taal-van-onderdelen.md` | SC 3.1.2 - Wat betekent "Taal van onderdelen" | structuur-en-navigatie |
| 119 | `succescriteria/sc-3-2-3-wat-betekent-consistente-navigatie.md` | SC 3.2.3 - Wat betekent "Consistente navigatie" | structuur-en-navigatie |
| 120 | `succescriteria/sc-3-2-4-wat-betekent-consistente-identificatie.md` | SC 3.2.4 - Wat betekent "Consistente identificatie" | structuur-en-navigatie |
| 121 | `succescriteria/sc-3-2-6-wat-betekent-consistente-hulp.md` | SC 3.2.6 - Wat betekent "Consistente hulp" | structuur-en-navigatie |
| 122 | `2026-05-28_tolkie-leeshulp-aanrader.md` | Tolkie als leeshulp voor je overheidswebsite: zo wordt je tekst begrijpelijk op B1-niveau | teksten-en-documenten, de-eaa |
| 123 | `2026-08-11_toegankelijke-content-schrijven-in-google-docs.md` | Toegankelijke content schrijven in Google Docs | teksten-en-documenten |
| 124 | `2026-08-12_toegankelijke-spreadsheets-maken-in-google-sheets.md` | Toegankelijke spreadsheets maken in Google Sheets | teksten-en-documenten |
| 125 | `checklist-toegankelijke-content.md` | Checklist toegankelijke content | teksten-en-documenten |
| 126 | `citaat-in-toegankelijke-pdf.md` | Hoe maak je een citaat in een PDF-document (en waarom dat belangrijk is voor toegankelijkheid) | teksten-en-documenten |
| 127 | `hoe-herken-je-niet-getagde-tekst-in-een-pdf.md` | Hoe herken je niet-getagde tekst in een PDF | teksten-en-documenten |
| 128 | `is-jouw-e-mailhandtekening-digitaal-toegankelijk.md` | Is jouw e-mailhandtekening digitaal toegankelijk? | teksten-en-documenten |
| 129 | `toegankelijke_kopteksten_wcag.md` | Waarom is het belangrijk om koppen als kopteksten op te maken? | teksten-en-documenten |
| 130 | `waarom-correcte-html-lijsten-het-verschil-maken-in-toegankelijkheid.md` | Waarom correcte HTML-lijsten hét verschil maken in toegankelijkheid | teksten-en-documenten, html-en-aria |
| 131 | `zo-controleer-je-de-koppenstructuur-van-je-website.md` | Zo controleer je de koppenstructuur van je website | teksten-en-documenten |
| 132 | `2026-04-03_kan-ai-website-testen-op-toegankelijkheid.md` | Kan AI jouw website testen op toegankelijkheid? Wij gaan het uitzoeken | tips-en-tools |
| 133 | `2026-04-04_herkent-ai-div-als-knop.md` | AI-test: Herkent AI een div die doet alsof het een knop is? | tips-en-tools, html-en-aria |
| 134 | `2026-04-04_ziet-ai-dat-je-tekst-te-licht-is.md` | Ziet AI dat je tekst te licht is? | tips-en-tools, kleur-en-contrast |
| 135 | `2026-04-15_welke-tools-zijn-er-voor-toegankelijkheidstesten.md` | Gratis tools om je website op WCAG te testen: welke vindt wat? | tips-en-tools, audits |
| 136 | `2026-06-26_nul-fouten-scan-ruim-honderd-bevindingen.md` | Nul fouten in de scan, ruim honderd bevindingen in de audit | tips-en-tools, audits |
| 137 | `2026-08-11_toegankelijk-wordpress-thema-kiezen.md` | Een toegankelijk WordPress-thema kiezen: waar let je op? | tips-en-tools, toetsenbord-en-focus |
| 138 | `2026-08-22_testen-met-nvda-op-windows.md` | Testen met NVDA: zo begin je op Windows | tips-en-tools |
| 139 | `2026-08-22_testen-met-voiceover-op-de-mac.md` | Testen met VoiceOver: zo begin je op de Mac | tips-en-tools |
| 140 | `2026-08-22_zo-gebruik-je-talkback-op-android.md` | Zo gebruik je TalkBack op Android | tips-en-tools |
| 141 | `2026-08-27_webmcp-en-toegankelijkheid.md` | WebMCP: wat het is, en waarom het toegankelijkheid niet vervangt | tips-en-tools |
| 142 | `202602_accessibility_tree.md` | Accessibility Tree in Chrome: Installatie & Interpretatie Gids [2026] | tips-en-tools |
| 143 | `browserstack-vs-proper-access-een-mini-experiment-met-automatische-toegankelijkheidstests.md` | Browserstack vs Proper Access | tips-en-tools |
| 144 | `google-lighthouse-als-toegankelijkheidstool.md` | Google Lighthouse als toegankelijkheidstool | tips-en-tools |
| 145 | `hoe-test-ik-focus-zichtbaarheid.md` | Hoe test ik focus zichtbaarheid | tips-en-tools, toetsenbord-en-focus |
| 146 | `hoe-test-ik-focusvolgorde.md` | Hoe test ik focusvolgorde? | tips-en-tools, toetsenbord-en-focus |
| 147 | `hoe-test-ik-kleurcontrast.md` | Instructie: hoe test ik kleurcontrast? | tips-en-tools, kleur-en-contrast |
| 148 | `hoe-test-je-elementen-die-op-hover-focus-of-klik-verschijnen-en-meteen-weer-verdwijnen.md` | Hoe test je elementen die op hover, focus of klik verschijnen (en meteen weer verdwijnen)? | tips-en-tools, toetsenbord-en-focus |
| 149 | `overlay-toegankelijkheidstools-lossen-ze-echt-iets-op.md` | Overlay-toegankelijkheidstools: lossen ze echt iets op? | tips-en-tools |
| 150 | `toetsenbord_toegankelijk.md` | Hoe verwijder ik de melding ‘Google vragen over dit bericht’ – en waarom zou je dat willen? | tips-en-tools |
| 151 | `tools-om-contrast-te-checken.md` | Tools om contrast te checken | tips-en-tools, kleur-en-contrast |
| 152 | `2026-04-10_sc-2-1-1-mouseover-zonder-focus-equivalent.md` | Mouseover zonder focus-equivalent | toetsenbord-en-focus |
| 153 | `2026-04-12_sc-2-4-3-dialoogvenster-krijgt-geen-focus-bij-openen.md` | Dialoogvenster krijgt geen focus bij openen | toetsenbord-en-focus |
| 154 | `20260125_submenu_dichtklappen.md` | Submenu dichtklappen | toetsenbord-en-focus |
| 155 | `succescriteria/2026-03-17_sc-2-4-7-outline-none.md` | outline: none, de meest destructieve regel in CSS | toetsenbord-en-focus |
| 156 | `succescriteria/2026-03-18_sc-2-4-7-onzichtbaar-contrast.md` | Focusindicator die opgaat in de achtergrond | toetsenbord-en-focus |
| 157 | `succescriteria/2026-03-19_sc-2-4-7-negatieve-offset.md` | Negatieve outline-offset die de focus verbergt | toetsenbord-en-focus |
| 158 | `succescriteria/2026-03-20_sc-2-4-7-overflow-hidden.md` | overflow: hidden knipt de focusindicator af | toetsenbord-en-focus |
| 159 | `succescriteria/2026-03-21_sc-2-4-7-javascript-blur.md` | JavaScript dat de focus actief verwijdert | toetsenbord-en-focus |
| 160 | `succescriteria/2026-03-27_sc-2-1-1-klikbare-div-in-plaats-van-een-button.md` | Klikbare div in plaats van een button | toetsenbord-en-focus, html-en-aria |
| 161 | `succescriteria/2026-03-29_sc-2-4-3-focus-springt-onverwacht-door-de-pagina.md` | Focus springt onverwacht door de pagina | toetsenbord-en-focus |
| 162 | `succescriteria/sc-2-1-1-wat-betekent-toetsenbord-toegenkelijk.md` | SC 2.1.1 - Wat betekent "Toetsenbord toegankelijk" | toetsenbord-en-focus |
| 163 | `succescriteria/sc-2-1-4-wat-betekent-sneltoetsen-met-tekens.md` | SC 2.1.4 - Wat betekent “Sneltoetsen met tekens” | toetsenbord-en-focus |
| 164 | `succescriteria/sc-2-4-11-wat-betekent-focusweergave-minimum.md` | SC 2.4.11 - Wat betekent "Focus niet volledig bedekt" | toetsenbord-en-focus |
| 165 | `succescriteria/sc-2-4-3-wat-betekent-focusvolgorde.md` | SC 2.4.3 - Wat betekent “Focusvolgorde” | toetsenbord-en-focus |
| 166 | `succescriteria/sc-2-4-7-wat-betekent-focus-zichtbaar.md` | SC 2.4.7 - Wat betekent "Focus zichtbaar" | toetsenbord-en-focus |
| 167 | `succescriteria/sc-3-2-1-wat-betekent-bij-focus.md` | SC 3.2.1 - Wat betekent “Bij focus” | toetsenbord-en-focus |
| 168 | `2026-04-02_wat-is-wcag.md` | Wat is WCAG? | wcag-uitgelegd |
| 169 | `2026-04-03_wat-houdt-wcag-21-in-voor-websites.md` | Wat houdt WCAG 2.1 in voor websites? | wcag-uitgelegd |
| 170 | `2026-04-18_wat-is-wcag-2-2.md` | Wat is WCAG 2.2? De 6 nieuwe succescriteria op niveau A en AA | wcag-uitgelegd |
| 171 | `2026-06-16_case-nrc.md` | NRC: de klant die de meeste vragen heeft gesteld | wcag-uitgelegd |
| 172 | `2026-06-21_case-bluebillywig-videospelers.md` | Blue Billywig: negen videospelers naast elkaar | wcag-uitgelegd, afbeeldingen-en-media |
| 173 | `2026-06-24_voldoen-aan-wcag-is-niet-hetzelfde-als-toegankelijk.md` | Voldoen aan WCAG is niet hetzelfde als toegankelijk zijn | wcag-uitgelegd |
| 174 | `hoe-gebruikt-een-blinde-persoon-een-website.md` | Gesprek met een blinde collega | wcag-uitgelegd |
| 175 | `hoe-maak-je-een-website-digitaal-toegankelijk.md` | Hoe maak je een website digitaal toegankelijk? 4 stappen | wcag-uitgelegd |
| 176 | `hoe-toegankelijk-zijn-de-websites-van-de-grootste-opticiens.md` | Hoe toegankelijk zijn de websites van de grootste opticiens? | wcag-uitgelegd |
| 177 | `hoeveel_tijd_nodig_om_digitale_toegankelijkheid_te_leren.md` | Hoe veel tijd is nodig om digitale toegankelijkheid te leren? | wcag-uitgelegd |
| 178 | `interview-met-julia-tol-over-digitale-toegankelijkheid-in-het-financieel-dagblad.md` | Julia Tol over digitale toegankelijkheid in het FD | wcag-uitgelegd |
| 179 | `rijksmuseum-apps-toegankelijkheid-getest.md` | Rijksmuseum-apps getest op toegankelijkheid: onze leukste opdracht van 2025 | wcag-uitgelegd, zoom-en-mobiel |
| 180 | `toegankelijke-websites-van-politieke-partijen.md` | Hoe toegankelijk zijn de websites van politieke partijen eigenlijk? | wcag-uitgelegd |
| 181 | `toegankelijke_pin_automaat.md` | Gestrand dicht bij de poolcirkel : digitale ontoegankelijkheid | wcag-uitgelegd |
| 182 | `toegankelijkheid-en-cybersecurity.md` | Toegankelijkheid en cybersecurity hoeven geen tegenpolen te zijn | wcag-uitgelegd, formulieren |
| 183 | `wcag-succescriteria-per-beperking-tool.md` | WCAG-succescriteria per beperking: welke eisen gelden voor jouw bezoekers? | wcag-uitgelegd, tips-en-tools |
| 184 | `2026-04-08_sc-1-4-10-content-verdwijnt-door-overflow-hidden.md` | Content verdwijnt door overflow hidden | zoom-en-mobiel |
| 185 | `2026-04-22_sc-1-4-10-tekst-afgesneden-door-een-vaste-hoogte.md` | Tekst afgesneden door een vaste hoogte | zoom-en-mobiel |
| 186 | `succescriteria/2026-03-25_sc-1-4-10-elementen-met-een-vaste-breedte.md` | Elementen met een vaste breedte | zoom-en-mobiel |
| 187 | `succescriteria/sc-1-3-4-wat-betekent-orientatie.md` | SC 1.3.4 - Wat betekent "Oriëntatie" | zoom-en-mobiel |
| 188 | `succescriteria/sc-1-4-10-wat-betekent-reflow.md` | SC 1.4.10 - Wat betekent "Reflow"? | zoom-en-mobiel |
| 189 | `succescriteria/sc-1-4-12-wat-betekent-tekstafstand.md` | Text Spacing: waarom vaste hoogtes je code breken (WCAG 1.4.12) | zoom-en-mobiel |
| 190 | `succescriteria/sc-1-4-13-wat-betekent-inhoud-bij-hover-of-focus.md` | SC 1.4.13 - Wat betekent “Inhoud bij hover of focus” | zoom-en-mobiel |
| 191 | `succescriteria/sc-1-4-4-wat-betekent-tekst-vergroten.md` | SC 1.4.4 - Wat betekent "Tekst vergroten"? | zoom-en-mobiel |
| 192 | `succescriteria/sc-2-5-7-wat-betekent-sleepbewegingen.md` | SC 2.5.7 - Wat betekent "Sleepbewegingen" | zoom-en-mobiel |
| 193 | `succescriteria/sc-2-5-8-wat-betekent-doelgrootte-minimum.md` | SC 2.5.8 - Wat betekent "Doelgrootte (minimum)"? | zoom-en-mobiel |
