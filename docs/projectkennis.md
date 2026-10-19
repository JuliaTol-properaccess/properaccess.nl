# Projectkennis properaccess.nl

Dit is de centrale technische kennisbasis voor het beheer en de doorontwikkeling
van properaccess.nl. De site blijft voorlopig functioneel zoals hij is: eerst
technische stabilisatie en een betrouwbare overdracht, daarna SEO/AEO en nieuwe
content. Er komen in deze fase geen nieuwe functies bij.

## Scope

Proper Access is een statische, tweetalige website. De auditrapporten onder
`static/rapporten/` mogen blijven staan. De huidige afhankelijkheid van
`~/git/ProperAccess` verdwijnt naar verwachting binnen één à twee weken. De
rapporten en die overgang zijn geen onderdeel van wijzigingen aan de website,
tenzij een deploy daardoor stukgaat.

## Technologie

- Hugo Extended, in CI vastgezet op **0.168.0**.
- Tailwind CSS 4 en Node-dependencies.
- Hugo Modules, lokaal vendored onder `_vendor/`.
- Markdown-content in `content/dutch/` en `content/english/`.
- GitHub Pages, GitHub Actions en Cloudflare.
- Cloudflare Workers voor intake en afgeschermde rapporten.

### Hugo-versie

Lokaal en in CI gebruiken we exact Hugo Extended **0.168.0**. De upgrade vanaf
0.151.0 migreert de deprecated configuratie en template-API's naar de huidige
Hugo-namen; inhoudelijke URL's en redirects zijn daarbij niet gewijzigd.

## Belangrijkste mappen

| Map/bestand | Doel |
|---|---|
| `content/dutch/` | Nederlandse pagina's, blog, Academy en tools |
| `content/english/` | Engelse pagina's, blog en tools |
| `layouts/` | Hugo-templates, partials en shortcodes |
| `assets/css/` | Eigen CSS en styling |
| `assets/js/` en `static/js/` | Site- en toolgebonden JavaScript |
| `static/images/` | Afbeeldingen en illustraties |
| `static/rapporten/` | Statische auditrapporten; voorlopig laten staan |
| `config/` en `hugo.toml` | Hugo-configuratie, talen, menu's en parameters |
| `data/` | Thema- en contentdata |
| `scripts/` | Build-, controle- en publicatiescripts |
| `cloudflare/` | Cloudflare Workers |
| `.github/workflows/main.yml` | Build- en deploypipeline |
| `docs/` | Menselijke projectdocumentatie |

## Lokale workflow

```bash
npm install
npm run dev
```

De site draait op `http://localhost:1313/`. De productie-build is:

```bash
npm run build
```

De build moet vóór een PR slagen. Controleer bij nieuwe of gewijzigde links ook
of het doelbestand in `public/` bestaat. De rapporten worden in de workflow
gecontroleerd op `noindex`; raak dat proces niet aan zonder expliciete reden.

## Veilige Git- en PR-werkwijze

1. Begin iedere taak vanaf een actuele `main`.
2. Werk op een branch met prefix `codex/`, één logisch onderwerp per branch.
3. Laat ongerelateerde bestaande wijzigingen staan. Gebruik nooit blind `git add .`.
4. Maak een PR met samenvatting, testresultaten, risico's en handmatige stappen.
5. Bij layoutwijzigingen: voeg screenshots toe van vóór en na, voor desktop en
   mobiel waar de wijziging relevant is.
6. Laat de PR controleren op digitale toegankelijkheid en veiligheid/robuustheid.
7. Julia controleert de PR en geeft expliciet akkoord.
8. Alleen na `mag live` wordt naar `main` gemerged en gepubliceerd. Daarna
   wachten we op GitHub Actions en controleren we de echte URL.

Een wijziging aan `.github/workflows/` vereist extra voorzichtigheid, omdat het
agent-token mogelijk geen `workflow`-scope heeft. Dan doet Julia die push zelf.

## Verplichte reviewers

### Reviewer digitale toegankelijkheid

Controleert minimaal:

- semantische HTML, koppenstructuur en landmarks;
- toetsenbordbediening, focusvolgorde en zichtbare focus;
- toegankelijke namen, labels, foutmeldingen en statusberichten;
- taalinstelling en taalwisselaar in NL en EN;
- contrast, reflow, zoom en mobiel gedrag;
- alt-teksten, decoratieve afbeeldingen en links;
- reduced motion en redelijk gedrag zonder JavaScript;
- een axe-check plus een gerichte handmatige controle.

Een nulscore van een tool is geen bewijs dat de wijziging toegankelijk is. De
reviewer rapporteert concrete bevindingen met URL, stappen en ernst.

### Reviewer veiligheid en robuustheid

Controleert minimaal:

- geen secrets, tokens of persoonsgegevens in Git, logs of frontendcode;
- inputvalidatie en correcte CORS bij formulieren en Workers;
- veilige foutafhandeling zonder interne details;
- wijzigingen aan authenticatie, redirects, headers en rapporttoegang;
- dependency- en buildrisico's;
- idempotentie en herstelbaarheid van scripts;
- geen onbedoelde massawijziging van content, rapporten of gegenereerde bestanden;
- werking bij lege, onvolledige en onverwachte invoer.

Deze reviews zijn PR-checklists. Een automatische bot geldt niet als bewijs van
veiligheid of toegankelijkheid. Voor grotere wijzigingen kan een aparte
reviewtaak of subagent worden ingezet.

## Deploy en externe systemen

Een push naar `main` start `.github/workflows/main.yml`:

1. Hugo 0.168.0 wordt geïnstalleerd.
2. Dependencies worden geïnstalleerd.
3. Het rapportoverzicht en de rapportcontroles draaien.
4. Hugo bouwt de site.
5. GitHub Pages publiceert het resultaat.
6. Optioneel wordt Cloudflare-cache geleegd.
7. Gewijzigde URL's worden aan IndexNow gemeld.

De workflow bevat ook een geplande publicatiestap voor de WCAG/LinkedIn-serie.
Dat is bestaande automatisering; wijzigingen daaraan krijgen een eigen PR.

Benodigde externe toegang hoeft niet in de repository te staan:

- GitHub: repository, Actions en eventueel projectborden;
- Cloudflare: Workers, routes en cache;
- e-maildienst voor formulieren;
- eventuele analytics- of SEO-tools;
- Peec.ai voor de latere wekelijkse SEO/AEO-review.

Secrets worden uitsluitend als platformsecrets of lokaal beveiligde secrets
beheerd. Ze worden nooit in chat, Markdown, JavaScript of commits gezet.

## Stabilisatieplan

### Fase 1: reproduceerbare build

- Hugo 0.168.0 lokaal en in CI vastzetten;
- lokale build laten slagen;
- verschillen tussen lokale build en GitHub Actions vastleggen;
- README en dit document als enige startpunt gebruiken;
- verouderde Hugoplate-instructies uit de README verwijderen.

### Fase 2: technische controles

- build- en rapportcontroles automatiseren waar dat veilig kan;
- interne links, redirects, sitemap, feeds en taalversies controleren;
- formulieren en Workers met testdata controleren;
- belangrijke pagina's op desktop, mobiel, zoom en toetsenbord testen;
- security- en toegankelijkheidsreview uitvoeren.

#### QA-ronde 19 oktober 2026

De eenmalige stabilisatie-QA is uitgevoerd vóór de Hugo-upgrade. Dit was een
read-only ronde op de lokale productie-build en op de gepubliceerde site; er is
geen formulier met echte gegevens verstuurd.

**Build en output**

- `npm run build` slaagt met Hugo Extended 0.168.0. De build rapporteert 791
  Nederlandse en 240 Engelse pagina's, 325 NL-aliases en 90 EN-aliases.
- De Hugo-deprecationwaarschuwingen voor `imaging.quality`, taalvelden en oude
  template-variabelen zijn op de upgradebranch gemigreerd.
- De productie-output gebruikt canonicals en hreflang-URL's op
  `https://www.properaccess.nl/`; een tijdelijke `hugo server` kan deze output
  lokaal met `localhost:1313` overschrijven. Stop de server vóór een controle
  van `public/`.

**Links, redirects en taalversies**

- De eerdere controle vond een stale bestand onder
  `public/offertes/template/index.html` met de placeholder
  `Demo%20bewonersportaal`. De bronsectie `/offertes/` publiceert niets meer;
  de oorzaak was dat de build oude bestanden niet opruimde. `npm run build`
  gebruikt nu `--cleanDestinationDir`, zodat verwijderde of niet meer
  publiceerbare offertepagina's niet in `public/` blijven hangen.
- De 314 Cloudflare-bulkredirects hebben lokaal allemaal een bestaand doel.
  Live zijn onder andere `/home/` → `/`, `/english/` → `/en/` en de oude
  Lighthouse-route gecontroleerd; deze geven 301 en eindigen op 200.
- De root-sitemap is een geldige sitemapindex met NL- en EN-sitemap. De twee
  onderliggende sitemaps bevatten absolute `https://www.properaccess.nl/`-URL's.
  De NL- en EN-RSS-feeds zijn geldige XML en geven live 200.
- Geteste representatieve NL- en EN-pagina's hebben één H1, een passende
  `lang`-waarde, titel, canonical en taalwisselaar. De Engelse juridische
  pagina's linken bewust naar de Nederlandse versies.

**Visueel en toetsenbord**

- Live getest: NL-homepage op desktop en mobiel, EN-homepage op mobiel, plus
  de NL-preview op mobiel. De belangrijkste content, CTA's, formulieren en
  footer blijven zichtbaar; er is geen duidelijke horizontale overflow in de
  geteste mobiele weergaven.
- De skiplink verschijnt bij de eerste Tab en verplaatst de focus naar
  `#main-content`. Headeracties en CTA's krijgen een zichtbare focusrand; de
  eerste focusvolgorde is logisch.
- Een zoomtest op mobiel laat de tekst reflowen, maar de geteste viewport is
  geen volledige 400%-audit. Een afzonderlijke 400%-controle in een echte
  desktopbrowser blijft aanbevolen bij de upgrade-PR.
- Er is geen dedicated axe-runner beschikbaar in deze werkmap. De handmatige
  controle bevestigt semantische landmarks, koppen, labels, links en
  toetsenbordfocus op de geteste pagina's, maar is geen volledige WCAG-claim.

**Security en robuustheid**

- In de repositoryscan zijn geen concrete secrets of tokens aangetroffen; de
  gevonden token-/key-termen staan in documentatie, voorbeeldcode of
  environment-variable-namen.
- Op 19 oktober 2026 zijn via Cloudflare actieve response-headerregels
  toegevoegd. De live homepage geeft nu HSTS, `X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy` en `Permissions-Policy` terug.
- De live rapportcontrole geeft nu `X-Robots-Tag: noindex, nofollow` naast de
  bestaande HTML-noindex. Rapport-HTML blijft bewust crawlbaar; zo kan Google
  de noindex-instructie lezen.
- Formulieren en Workers zijn in deze ronde niet met testdata verstuurd. Hun
  inputvalidatie, CORS, authenticatie en foutafhandeling blijven een aparte
  controle vóór een wijziging aan die onderdelen.

**Conclusie voor Fase 2**

De stale offerte-output is structureel opgelost in de build en de Cloudflare
securityheaders en rapport-`X-Robots-Tag` zijn live geverifieerd. Daarmee is
Fase 2 afgerond. De Hugo-upgrade kan nu als geïsoleerde vervolgtaak op een
aparte branch starten; wijzig daarin geen inhoudelijke URL's of redirects
zonder opnieuw de volledige routecontrole te draaien.

### Fase 3: onderhoudbaarheid

- grote, dubbel voorkomende templates identificeren;
- patronen alleen naar partials of shortcodes brengen waar dat risico verlaagt;
- scripts voorzien van duidelijke `--check`/dry-runmogelijkheden waar relevant;
- tijdelijke historische documentatie markeren of archiveren;
- geen grote refactor uitvoeren zonder concrete onderhoudswinst.

### Fase 4: gecontroleerde Hugo-upgrade

- aparte upgrade-branch maken;
- Hugo gecontroleerd verhogen;
- deprecated configuratie aanpassen;
- build, links, sitemap, feeds, SEO-output en screenshots vergelijken;
- pas mergen na beide reviewers.

## Later

- wekelijkse controle in Peec.ai voor AI-vindbaarheid, SEO en AEO;
- nieuwe content vanaf november;
- inhoudelijke redactie en actualisering;
- verdere optimalisatie op basis van meetbare problemen.
