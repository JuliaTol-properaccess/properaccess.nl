# Rubriek Onderzoek

De rubriek `/onderzoek/` is de plek waar Proper Access eigen marktonderzoek publiceert.
Elke editie heeft één vaste URL op ons eigen domein, zodat zoekmachines en AI-assistenten
naar ons verwijzen en niet naar een kopie op LinkedIn of Medium.

Besluit van Julia, 10 oktober 2026.

## Wat de rubriek niet is

De rubriek is geen blog. Het besluit van 29 augustus 2026 om geen nieuwe blogartikelen op
properaccess.nl te zetten, blijft staan. Daarom:

- de editiepagina's staan niet in `content/dutch/blog/` en hebben geen blogcategorie;
- de rubriek staat niet in de blogindex en niet in de zoekfunctie. Die twee lezen alleen
  de secties uit `mainSections` en `search.include_sections` in
  `config/_default/params.toml`, en dat is alleen `blog`;
- de rubriek heeft geen eigen RSS-feed: `outputs: ["HTML"]` in `_index.md` haalt
  `/onderzoek/index.xml` weg. De sitewijde feed `/index.xml` bevat elke pagina van de
  site en dus ook een editie.

## Waar de URL vandaan komt

| Pagina | URL | Komt uit |
|---|---|---|
| Overzicht | `/onderzoek/` | `url` in `content/dutch/onderzoek/_index.md` |
| Editie | `/onderzoek/<slug>/` | `slug` in de front matter plus de permalinkregel in `hugo.toml` |

In `hugo.toml` staat onder `[permalinks.page]` de regel
`"onderzoek" = "/onderzoek/:slugorcontentbasename/"`. Daardoor hangt de URL aan de slug en
niet aan de plek van het bestand. Komt er later een indeling per jaar, of wordt een editie
een paginabundel met bijlagen, dan blijft de URL van een gepubliceerde editie gelijk.

**De slug van een gepubliceerde editie verandert nooit.** Verandert de titel, dan blijft de
slug staan. Moet een URL toch wijzigen, zet dan een redirect in `_redirects`.

## Een editie toevoegen

1. Kopieer `content/dutch/onderzoek/voorbeeld-editie.md` naar
   `content/dutch/onderzoek/<slug>.md`. Dat bestand staat op `draft: true` en laat zien
   welke velden er zijn.
2. Vul de front matter. Deze velden doen iets:

   | Veld | Verplicht | Wat het doet |
   |---|---|---|
   | `title` | ja | de h1 en de `headline` in de JSON-LD |
   | `slug` | ja | de URL |
   | `description` | ja | de meta description, de tekst op `/onderzoek/` en `description` in de JSON-LD |
   | `date` | ja | de publicatiedatum en `datePublished` |
   | `editie` | ja | het nummer. Bepaalt de volgorde op `/onderzoek/`: hoogste nummer bovenaan. Komt in de JSON-LD als `reportNumber` |
   | `meetdatum` | ja | de dag waarop de gegevens zijn gemeten. Staat zichtbaar op de pagina en komt in de JSON-LD als `temporalCoverage` |
   | `meetdatum_tot` | nee | zet dit erbij als het om een meetperiode gaat |
   | `bron` | nee | waar de gegevens vandaan komen, in één regel |
   | `omvang` | nee | hoeveel er is gemeten, in één regel |
   | `tldr` | nee | de samenvatting bovenaan. Staat in de `speakable`-markering |
   | `verspreiding` | nee | lijst met `naam` en `url` van de kopieën op andere platforms |
   | `keywords` | nee | een lijst, komt in de meta keywords en in de JSON-LD |

3. Zet `draft: false`.
4. Draai `npm run build` en controleer dat `public/onderzoek/<slug>/index.html` bestaat.
5. `dateModified` in de JSON-LD komt uit de git-historie (`enableGitInfo`), dus een
   herschreven editie meldt zichzelf vanzelf als bijgewerkt.

## De kopieën op LinkedIn en Medium

Onze pagina is het origineel. De editiepagina zet een canonical naar zichzelf; dat doet
`layouts/partials/basic-seo.html` voor elke pagina zonder `canonical` in de front matter.

Zet bij elke kopie buiten properaccess.nl een canonical naar onze URL:

- **Medium**: publiceer via Import a story met onze URL, of zet de canonical in de
  verhaalinstellingen. Medium zet dan `rel="canonical"` naar ons.
- **LinkedIn**: een artikel op LinkedIn kan geen canonical zetten. Zet daar een kortere
  versie met een link naar onze pagina, niet de volledige tekst.

## Waarom Report en Article in de JSON-LD

Het blok staat in `layouts/partials/json-ld.html`, achter `.Section == "onderzoek"`.

`Report` is in schema.org een subtype van `Article` en is bedoeld voor een rapport van een
organisatie. Dat past op eigen marktonderzoek, waar `NewsArticle` (nieuwsuitgever) en
`ScholarlyArticle` (wetenschappelijk, met peer review) dat niet doen. We melden beide types
in een array, zodat een verwerker die letterlijk op `Article` zoekt de pagina ook herkent.
Het Organization-blok bovenaan gebruikt dezelfde constructie.

De auteur is de organisatie en niet Julia: het onderzoek staat op naam van Proper Access.
Met het `@id` naar `#organization` hangt het rapport aan de entiteit die op elke pagina
staat, inclusief de verwijzingen naar LinkedIn en Wikidata.

Een volgende stap is een `Dataset`-blok met de getallen zelf, zodra we de meetgegevens als
bestand publiceren. Dat kan naast dit blok staan.

## De Engelse rubriek

`/en/onderzoek/` kan erbij zonder dat een Nederlandse URL verandert:

1. Maak `content/english/onderzoek/_index.md` met `url: "/en/onderzoek/"`.
2. Zet de editie in `content/english/onderzoek/<slug>.md`. De permalinkregel geldt voor
   beide talen; Hugo zet `/en/` ervoor.
3. De labels op de pagina staan in `i18n/nl.yaml` en `i18n/en.yaml` onder `onderzoek_*`,
   dus de templates hoeven niet mee te veranderen.
4. Hoort een Engelse editie bij een Nederlandse, geef dan beide dezelfde
   `translationKey`. Dan zetten de twee pagina's hreflang naar elkaar.
