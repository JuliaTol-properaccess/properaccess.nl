# Fase 3 — onderhoudbaarheid

Laatste inventarisatie: 19 oktober 2026.

Dit document houdt de onderhoudskandidaten bij. Het is bewust een register en
geen uitnodiging om grote, inhoudelijk verschillende pagina's samen te voegen.

## Templates

De grootste eigen templates zijn:

| Template | Regels | Beoordeling |
| --- | ---: | --- |
| `layouts/_default/homepage-aaas-v2.html` | 1.018 | Experiment/variant; inhoudelijk eigen pagina, niet samenvoegen |
| `layouts/_default/monitoring.html` | 719 | Productpagina met eigen prijs- en rekenlogica |
| `layouts/_default/homepage.html` | 707 | Nederlandse homepage |
| `layouts/_default/homepage-en.html` | 663 | Engelse homepage; inhoud wijkt wezenlijk af |
| `layouts/_default/homepage-b.html` | 580 | Homepagevariant; tijdelijk experiment documenteren, niet abstraheren |
| `layouts/voor_wie/financieel.html` | 581 | Doelgroepspecifieke inhoud en AFM-secties |
| `layouts/voor_wie/ecommerce.html` | 505 | Doelgroepspecifieke inhoud en mini-auditformulier |
| `layouts/voor_wie/agency.html` | 499 | Doelgroepspecifieke inhoud |

De veilige herhaling was de trust-bar. De negen templates die dezelfde
`.Params.trust`-markup hadden gebruiken nu
`layouts/partials/trust-bar.html`. De partial ondersteunt zowel gewone namen
als de bestaande vorm met `name` en optionele `link`.

Niet samengevoegd zijn de homepage-, intake- en monitoringvarianten: daar
verschillen taal, formuliergedrag, productlogica of volledige secties. Een
oppervlakkige abstractie zou die verschillen verbergen en wijzigingen riskanter
maken.

## Documentatie: status

Historische snapshots en afgeronde plannen blijven vindbaar, maar krijgen een
duidelijke status zodat ze niet als actuele werkinstructie worden gebruikt.

- `GEO-AUDIT-REPORT.md`: afgeronde audit; historisch naslagstuk.
- `thin-content-artikelen.md`: gegenereerde momentopname; opnieuw genereren
  voordat conclusies worden getrokken.
- `docs/homepage-vernieuwing-ab-test.md`: tijdelijk experimentdocument; pas
  archiveren nadat de variantbeslissing definitief is.
- `docs/academy-webredactie-opzet.md` en
  `docs/academy-webredactie-koppen-concept.md`: conceptdocumenten.
- `docs/archief/`: reeds gearchiveerde layouts en tijdelijke artefacts.

Actieve beheerinstructies horen in `docs/website-beheer.md` of
`docs/projectkennis.md`, niet in een audit- of TASK-snapshot.

## Scripts: veilige uitvoer

| Script | Optie | Gedrag |
| --- | --- | --- |
| `generate_rapporten_index.py` | `--check` | faalt als het overzicht moet worden herschreven |
| `optimize_report_images.py` | `--dry-run` | toont beeldbewerkingen zonder bestanden te wijzigen |
| `add_wp_aliases.py` | `--check` | faalt als aliases zouden worden toegevoegd |
| `aliassen_zonder_301.py` | standaard | vergelijkt lokaal; `--live` doet netwerkcontroles |
| `check_rapporten_noindex.py` | standaard | read-only controle, faalt bij ontbrekende `noindex` |
| `controleer_redirect_lijst.py` | standaard | read-only netwerkcontrole; wijzigt niets |

Scripts die bestanden aanpassen moeten een expliciete controlemodus houden of
een dry-run aanbieden. Nieuwe muterende scripts voegen die optie toe voordat
ze in de beheerhandleiding worden opgenomen.
