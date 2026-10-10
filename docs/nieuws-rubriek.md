# Rubriek Nieuws over toegankelijkheid

De rubriek `/nieuws/` is het weekoverzicht van het nieuws over digitale
toegankelijkheid. Elke zaterdag komt er één pagina bij, met per bericht de bron en een
eigen alinea van ons over wat het betekent.

Besluit van Julia, 10 oktober 2026. Julia wees de naam "wat wij deze week lazen" af,
want die zegt een lezer niet waar het over gaat. De rubriek heet Nieuws over
toegankelijkheid.

## Wat de rubriek niet is

De rubriek is geen blog en geen nieuwsrubriek over ons eigen bedrijf. Het besluit van
29 augustus 2026 om geen nieuwe blogartikelen op properaccess.nl te zetten, blijft
staan. Daarom:

- de weekpagina's staan niet in `content/dutch/blog/` en hebben geen blogcategorie;
- de rubriek staat niet in de blogindex en niet in de zoekfunctie. Die twee lezen
  alleen de secties uit `mainSections` en `search.include_sections` in
  `config/_default/params.toml`, en dat is alleen `blog`;
- de rubriek staat niet in het hoofdmenu. De link staat in de grote footer onder
  Kennis, in `data/footer_groot.yaml`.

Anders dan `/onderzoek/` heeft deze rubriek **wel** een eigen feed, op
`/nieuws/index.xml`. Een weekoverzicht is een reeks waar iemand zich op kan abonneren;
een editie van het onderzoek is dat niet. De sitewijde feed op `/index.xml` bevat elke
pagina van de site en dus ook een weekpagina.

## Waar de URL vandaan komt

| Pagina | URL | Komt uit |
|---|---|---|
| Overzicht | `/nieuws/` | `url` in `content/dutch/nieuws/_index.md` |
| Week | `/nieuws/<slug>/` | `slug` in de front matter plus de permalinkregel in `hugo.toml` |
| Feed | `/nieuws/index.xml` | `outputs` in `_index.md` en `layouts/nieuws/list.rss.xml` |

**De slug van een weekpagina is de datum van de zaterdag waarop hij uitkomt**, als
jaar-maand-dag. De eerste weekpagina staat dus op `/nieuws/2026-10-17/`.

Waarom een datum en geen weeknummer: een lezer in een zoekresultaat of in een antwoord
van een AI-assistent ziet aan 17 oktober 2026 waar het over gaat, aan week 42 niet. Een
datum blijft ook kloppen als een week wordt overgeslagen, als er een keer twee pagina's
in dezelfde week staan, of als de publicatiedag verschuift.

In `hugo.toml` staat onder `[permalinks.page]` de regel
`"nieuws" = "/nieuws/:slugorcontentbasename/"`. Daardoor hangt de URL aan de slug en
niet aan de plek van het bestand. Komt er later een indeling per jaar, dan blijft de URL
van een gepubliceerde weekpagina gelijk.

**De slug van een gepubliceerde weekpagina verandert nooit.** Verandert de titel, dan
blijft de slug staan. Moet een URL toch wijzigen, zet dan een redirect in `_redirects`.

## Een weekpagina toevoegen

1. Kopieer `content/dutch/nieuws/voorbeeld-week.md` naar
   `content/dutch/nieuws/<slug>.md`. Dat bestand staat op `draft: true` en laat zien
   welke velden er zijn.
2. Vul de front matter. Deze velden doen iets:

   | Veld | Verplicht | Wat het doet |
   |---|---|---|
   | `title` | ja | de h1 en de `headline` in de JSON-LD |
   | `slug` | ja | de URL, dus de datum van de zaterdag |
   | `description` | ja | de meta description, de tekst op `/nieuws/` en `description` in de JSON-LD |
   | `date` | ja | de publicatiedatum, `datePublished`, en de volgorde op `/nieuws/` |
   | `week_van` | nee | de maandag van de week. Staat zichtbaar op de pagina en komt in `temporalCoverage` |
   | `week_tot` | nee | de zaterdag van de week. Samen met `week_van` wordt dat een periode |
   | `tldr` | nee | de samenvatting bovenaan. Staat in de `speakable`-markering en is de tekst in de feed |
   | `keywords` | nee | een lijst, komt in de meta keywords en in de JSON-LD |
   | `items` | ja | de berichten van de week, zie hieronder |

3. Vul de berichten in `items`. Per bericht:

   | Veld | Verplicht | Wat het doet |
   |---|---|---|
   | `kop` | ja | de h2 op de pagina en `name` in de ItemList |
   | `bron` | ja | wie het bericht publiceerde. Komt als `publisher` in de ItemList |
   | `url` | ja | de link naar het bericht bij de bron |
   | `bron_kop` | nee | de kop die het bericht bij de bron heeft. Staat die er, dan is dat de linktekst |
   | `datum` | nee | de dag waarop de bron publiceerde |
   | `tekst` | ja | onze eigen alinea's bij het bericht, als Markdown |

4. Zet `draft: false`.
5. Draai `npm run build` en controleer dat `public/nieuws/<slug>/index.html` bestaat.
6. `dateModified` in de JSON-LD komt uit de git-historie (`enableGitInfo`), dus een
   herschreven weekpagina meldt zichzelf vanzelf als bijgewerkt.

De volgorde van `items` in het bestand is de volgorde op de pagina en in de ItemList.
Zet het belangrijkste bericht bovenaan. Elk bericht krijgt een eigen id: `#bericht-1`,
`#bericht-2` en zo verder, zodat iemand naar één bericht kan linken.

## Een bericht heeft eigen tekst, anders valt de build

`layouts/nieuws/single.html` laat de build vallen met `errorf` als een bericht geen
`kop`, `url`, `bron` of `tekst` heeft, of als een weekpagina helemaal geen `items`
heeft. De melding noemt het bestand en het nummer van het bericht.

Dat is met opzet. Een pagina met alleen koppen en links naar anderen voegt niets toe,
niet voor een lezer en niet voor een AI-assistent die ons citeert. Liever een gevallen
build dan zo'n pagina live. Een gevallen build betekent dat er niets deployt en de oude
site blijft staan.

## Wanneer een weekpagina live komt

`npm run build` bouwt zonder `--buildFuture`, dus een pagina met een datum in de
toekomst slaat Hugo over. Dat geeft twee manieren om op zaterdag te publiceren:

- **De pagina staat al in `main` met de datum van zaterdag.** De dagelijkse cron-run in
  `.github/workflows/main.yml` draait om 06:00 UTC, dus de pagina komt die zaterdag om
  08:00 Nederlandse tijd vanzelf live. Er is dan niemand nodig om iets te mergen.
- **De pagina wordt op zaterdag zelf gemerged.** Dan bouwt de push hem meteen.

Zet de datum dus niet op een zaterdag die al voorbij is als de pagina nog niet in `main`
staat: dan komt hij bij de eerstvolgende build live en niet op de dag die er staat.

## De feed

`layouts/nieuws/list.rss.xml` is een eigen RSS-template voor deze sectie. De ingebouwde
template van Hugo zet er Engelse tekst in, zoals "Recent content in Nieuws over
toegankelijkheid on Proper Access". De eigen template zet per week de `tldr` in de
samenvatting, met daaronder de koppen van de berichten, en hij houdt de laatste 20
weken.

De feed is te vinden op twee manieren: zichtbaar onderaan `/nieuws/`, en als
`<link rel="alternate" type="application/rss+xml">` in de `<head>` van de rubriek. Dat
laatste staat in `layouts/partials/basic-seo.html`, achter `.Section == "nieuws"`.

## Het schema

| Pagina | Type | Waar |
|---|---|---|
| `/nieuws/` | `CollectionPage` | het bestaande blok in `layouts/partials/json-ld.html`, nu ook voor sectie `nieuws` |
| Weekpagina | `Article` met een `ItemList` in `mainEntity` | het nieuwe blok in `layouts/partials/json-ld.html` |

De `ItemList` bevat de berichten die een lezer ziet, in dezelfde volgorde en met
dezelfde koppen. Per bericht wijst `url` naar de plek op onze pagina (`#bericht-1`) en
`item` naar de bron, met de naam van de bron als `publisher`.

Niet `NewsArticle`: dat type is voor een nieuwsuitgever, en wij schrijven wat het nieuws
van anderen betekent. `Article` dekt dat. De auteur is de organisatie en niet een
persoon, net als bij de rubriek Onderzoek.

## De Engelse rubriek

`/en/nieuws/` kan erbij zonder dat een Nederlandse URL verandert:

1. Maak `content/english/nieuws/_index.md` met `url: "/en/nieuws/"`.
2. Zet de weekpagina in `content/english/nieuws/<slug>.md`. De permalinkregel geldt voor
   beide talen; Hugo zet `/en/` ervoor.
3. De labels op de pagina staan in `i18n/nl.yaml` en `i18n/en.yaml` onder `nieuws_*`,
   dus de templates hoeven niet mee te veranderen.
4. Hoort een Engelse week bij een Nederlandse, geef dan beide dezelfde
   `translationKey`. Dan zetten de twee pagina's hreflang naar elkaar.

## Wat nog open staat

- Een item in het hoofdmenu en de rubriek in `static/llms.txt`. Voorstel: pas doen als
  de eerste weekpagina live staat, zodat die twee niet naar een lege rubriek wijzen.
- De rubriek in de zoekfunctie, dus `nieuws` toevoegen aan `include_sections` onder
  `[search]` in `config/_default/params.toml`. Dan komen de weekpagina's in de
  zoekindex. Dat is een eigen afweging en een eigen wijziging; de rubriek Onderzoek
  staat er ook niet in.
