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

Zet geen eigen `type` in de front matter. Hugo kiest het sjabloon op `type`, en bestaat
`layouts/<type>/` niet, dan valt hij terug op het sjabloon van het thema. Met
`type: weekoverzicht` komt de pagina er dus wel, en de build blijft groen, maar de pagina
houdt alleen de titel, het kruimelpad en de lead over: geen berichten, geen bronlinks,
geen periode-regel en geen melding in het log. Gemeten op 11 oktober 2026: 67 zichtbare
woorden tegen 390 zonder het veld, en de drie controles hieronder onder "Wat de build nog
wel laat vallen" draaien dan niet. De sectie `nieuws` kiest `layouts/nieuws/single.html`
zelf; `type: nieuws` mag ook en geeft dezelfde pagina. De controle op een pull request
wordt rood zodra er geen enkele weekpagina gemeten is.

## De telling: drie berichten en veertig eigen woorden per bericht

De twee ondergrenzen van de rubriek staan in `data/nieuws.yaml`. Ze doen met opzet niet
hetzelfde:

| Ondergrens | Waarde | Wat er gebeurt als een weekpagina hem niet haalt |
|---|---|---|
| berichten per week | 3 | de pagina krijgt een noindex, de controle meldt het en wordt niet rood |
| eigen woorden per bericht | 40 | de pagina krijgt een noindex en de controle op de pull request wordt rood |
| geen enkel bericht met `tekst`, pagina wel een lead | - | de pagina krijgt een noindex, de controle meldt het en wordt niet rood |

**Het aantal berichten laat de build nooit vallen en maakt de controle nooit rood.** Of
er in een stille week een pagina uitgaat, is een redactiekeuze en die ligt bij Julia:
valt de build op het aantal berichten, dan kan er in zo'n week niets uit, ook niet als
Julia zegt dat het wel moet. Besluit van Chief, 11 oktober 2026. Een bericht onder de
veertig woorden is tekst die voor de merge bij te schrijven is, en dat mag wel rood
worden.

Eigen woorden zijn de woorden in `items[].tekst`, door `markdownify` en `plainify` heen.
Een kop, een bronnaam, `bron_kop`, een datum en de vaste tekst van het sjabloon tellen
dus niet mee, en van een link telt alleen de linktekst. De lead onder de front matter en
de `tldr` worden geteld en staan in de melding, maar hebben geen ondergrens: die twee
staan per pagina en niet per bericht.

Heeft geen enkel bericht een `tekst`, dan valt er niets te tellen, en dan **krijgt de
pagina ook een noindex**: niet te tellen is nul eigen woorden, en nul ligt onder de
veertig. Een weekpagina met drie koppen, drie links naar anderen en geen woord eigen
duiding komt dus niet in de zoekmachines, niet in `nl/sitemap.xml` en niet in
`llms-full.txt`. De controle op de pull request meldt het en wordt er niet rood op:
verhuist de duiding ooit naar de body van de pagina, dan kijkt de teller op de verkeerde
plek, en dat hoort geen pull request te blokkeren. Besluit van Chief, 11 oktober 2026.

### Wat de noindex wel en niet doet

Een weekpagina met een noindex van de build blijft staan en blijft op `/nieuws/` te
zien, en blijft in de feed op `/nieuws/index.xml`: een lezer die de rubriek volgt, hoort
de week van die week te kunnen lezen. De pagina komt niet in de zoekmachines, niet in
`nl/sitemap.xml` en niet in `llms-full.txt`. Er hoeft geen `noindex: true` in de front
matter; die blijft werken en telt even zwaar.

### Wat de build nog wel laat vallen

`layouts/nieuws/single.html` laat de build vallen met `errorf` als een bericht geen
`kop`, geen `url` of geen `bron` heeft. Dat is een bericht dat niet te renderen is: een
kop die er niet staat, of een link zonder adres. De melding noemt het bestand en het
nummer van het bericht. Een bericht zonder `tekst` laat de build niet meer vallen; dat is
nul eigen woorden en dus de woordgrens hierboven.

### Waar de telling wordt gerekend

`layouts/partials/nieuws-telling.html` rekent de telling uit, voor de noindex en voor de
controle allebei, zodat de melding op de pull request niet kan afwijken van wat er op de
pagina staat. De partial laat zelf nooit een build vallen.

Verhuist de duiding ooit uit `items[].tekst` naar de body van de pagina, dan is die
partial de enige plek die mee moet. Staat er in geen enkel bericht een tekst terwijl de
pagina wel een lead heeft, dan meldt de telling dat de woorden niet te tellen zijn, en
wordt de controle daar niet rood op. De noindex kijkt daar niet naar: die rekent nul
woorden als een tekort, dus zo'n pagina gaat wel op noindex.

### De controle draaien

De controle hoort op een pull request te draaien en niet in `main.yml`: een gevallen
build in `main.yml` deployt niets en laat de oude site staan, dus een teller die daar
omvalt zet de hele site stil. De uitkomst komt in de samenvatting van de run en, als er
iets te melden is, als reactie op de pull request.

De workflow staat klaar in `docs/voorstel-nieuws-controle-workflow.yml` en hoort in
`.github/workflows/nieuws-controle.yml`. **Alleen Julia kan hem daar neerzetten**: het
agent-token heeft geen `workflows`-scope en GitHub weigert de push. In het bestand staat
het commando. Zolang het voorstel in `docs/` staat, draait de controle niet automatisch
en is het script hieronder de enige controle.

Zelf draaien kan ook, met `hugo` op `PATH`:

```shell
python3 scripts/nieuws_telling.py
```

Het script bouwt met `--buildFuture` en zonder `--buildDrafts`. Een weekpagina met de
datum van de komende zaterdag telt dus mee, en `content/dutch/nieuws/voorbeeld-week.md`
niet. Dat laatste is nodig: de voorbeeldteksten in dat bestand staan onder de veertig
woorden, want het is een sjabloon en geen week.

De exitcode is 1 als een bericht onder de woordgrens zit, en 0 als er alleen een melding
is over het aantal berichten. `--log <bestand>` telt een bestaand buildlog na, zonder te
bouwen.

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

## Waar onze eigen duiding terechtkomt

De berichten staan in `items:` in de front matter en niet in de tekst van de pagina.
Dat heeft één gevolg dat je moet kennen: onze duiding valt buiten `.Content` en dus
buiten `.Plain`. Een template dat `.Plain` leest, ziet van een weekpagina alleen de
lead onder de front matter. Drie plekken lezen die duiding daarom apart uit.

| Plek | Wat er in komt |
|---|---|
| `layouts/partials/nieuws-eigen-tekst.html` | De `tldr` en per bericht de kop en `tekst`, als één platte string |
| `layouts/_default/list.searchindex.json` | De lead plus de string uit die partial, in het veld `content` |
| `layouts/_default/index.llmsfull.txt` | Een eigen blok, met per bericht de bron, de link en onze duiding apart gelabeld |

De rubriek staat in de zoekfunctie op de site omdat `nieuws` in `include_sections`
staat, onder `[search]` in `config/_default/params.toml`. Die lijst doet twee dingen:
hij bepaalt welke secties in `searchindex.json` komen, en `assets/js/search.js`
groepeert de resultaten erop. Haal je `nieuws` eruit, dan is geen enkele weekpagina
meer te vinden met de zoekfunctie, ook niet op de titel.

In `llms-full.txt` komen de twaalf nieuwste weken volledig. Oudere weken staan er als
linkregel onder de kop "Oudere weken". Twaalf is dezelfde grens als `pagerSize` voor
`/nieuws/` en als de termijn waarop we de rubriek evalueren. Een week met vijf
berichten kost ongeveer 2 kilobyte; alle 52 weken van een jaar zouden het bestand met
de helft laten groeien.

Het label van het zoekveld moest mee. Het stond op "Zoek in blogartikelen" en dat
beloofde iets anders dan de knop doet zodra de rubriek erbij staat. Nu is het "Zoek in
blogartikelen en nieuws", op drie plekken: `search_input_label` en
`search_input_placeholder` in `i18n/nl.yaml`, en de knop in
`layouts/partials/essentials/header-minimaal.html`. De Engelse labels blijven "Search
blog posts", want de Engelse site heeft geen nieuwssectie. Komt er later een sectie bij
in `include_sections`, dan hoort dat label opnieuw mee.

Drie dingen om op te letten als je hieraan werkt:

- Een weekpagina die de telling op noindex zet, valt uit beide bestanden. Dat loopt
  via `layouts/partials/llms-zichtbaar.html` en via het filter bovenaan
  `list.searchindex.json`. Zie "Wat de noindex wel en niet doet".
- Verhuist de duiding ooit naar de body van de pagina, dan kun je de partial en het
  blok in `index.llmsfull.txt` weghalen. Zolang de duiding in `items[].tekst` staat,
  zijn ze allebei nodig.
- `markdownify` zet een apostrof om in `&rsquo;` en `plainify` laat die entiteit staan.
  Daarom gaat elke tekst door `htmlUnescape`, net als in
  `layouts/partials/llms-pagina.html`. Laat je die stap weg, dan staat er
  `alinea&amp;rsquo;s` in de zoekindex.

## Wat nog open staat

- Een item in het hoofdmenu en de rubriek in `static/llms.txt`. Voorstel: pas doen als
  de eerste weekpagina live staat, zodat die twee niet naar een lege rubriek wijzen.
- De `tldr` van een blogartikel staat niet in de zoekindex, want `list.searchindex.json`
  leest daar alleen `.Plain`. Vier artikelen hebben zo'n `tldr`. Dat is een eigen
  wijziging buiten deze rubriek.
- De zoekresultaten tonen `programma&rsquo;s` in plaats van `programma's`. Oorzaak:
  `.Plain` decodeert die entiteit niet, en `search.js` zet de tekst in `innerHTML`.
  Het raakt 118 van de 275 blogartikelen en is op te lossen met `htmlUnescape` in
  `list.searchindex.json`. Ook een eigen wijziging, want die raakt de hele site.
