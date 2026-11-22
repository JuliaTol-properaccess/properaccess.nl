# properaccess.nl beheren zonder Claude Code

Handleiding voor het handmatig beheren van de site. Stond tot 13 augustus 2026 in
`~/.claude/CLAUDE.md`; verplaatst naar deze repo omdat het een handleiding voor mensen is.

Handleiding voor het handmatig beheren van properaccess.nl. De site draait op **Hugo** (static site generator) met **Tailwind CSS v4**, gehost op **GitHub Pages** via GitHub Actions.

### Vereisten

Zorg dat je deze tools geinstalleerd hebt:

- **Hugo Extended** v0.168.0+ — `brew install hugo`
- **Node.js** — `brew install node`
- **Go** — `brew install go`
- **Git** — al aanwezig op macOS

### Projectmap

De website-repo staat lokaal op: `/Users/juliazjochova/git/properaccess_website`
Remote: `https://github.com/JuliaTol-properaccess/properaccess.nl.git`

### Lokale ontwikkelomgeving starten

```bash
cd /Users/juliazjochova/git/properaccess_website
npm install          # alleen de eerste keer of na package.json-wijzigingen
npm run dev          # start Hugo dev server + Tailwind watcher
```

De site draait dan op `http://localhost:1313/`. Wijzigingen worden automatisch herladen in je browser (hot reload).

### Mappenstructuur content

```
content/
├── dutch/           ← alle Nederlandse content
│   ├── blog/        ← blogposts
│   ├── diensten/    ← dienstenpagina's
│   ├── voor_wie/    ← doelgroeppagina's
│   ├── pages/       ← losse pagina's
│   ├── contact/     ← contactpagina
│   ├── _index.md    ← homepage
│   └── ...
└── english/         ← alle Engelse content
    ├── blog/
    ├── contact/
    ├── _index.md
    └── ...
```

### Bestaande pagina bewerken

1. Open het juiste `.md`-bestand in een teksteditor (bijv. VS Code)
2. Pas de tekst aan in Markdown (onder de `---` front matter)
3. Controleer het resultaat op `localhost:1313`
4. Commit en push (zie "Publiceren" hieronder)

### Nieuwe blogpost maken

1. Maak een nieuw bestand in `content/dutch/blog/`:

```bash
touch content/dutch/blog/2026-04-04_slug-van-je-artikel.md
```

**Naamconventie:** `YYYY-MM-DD_slug.md` (soms met `_nl_` ertussen)

2. Voeg de front matter toe bovenaan het bestand:

```yaml
---
title: "Titel van je artikel"
date: 2026-04-04
slug: "slug-van-je-artikel"
categories:
  - "wcag-uitgelegd"
tags:
  - "wcag"
  - "1-3-1"
description: "Korte beschrijving voor SEO en social media"
keywords:
  - keyword 1
  - keyword 2
image: "/images/blog/pad-naar-afbeelding.png"
---
```

3. Schrijf je artikel in Markdown onder de `---`
4. Controleer op `localhost:1313`

**Beschikbare categorieën:** `wcag-uitgelegd`, `webdeveloper`, `webredactie`, `ai-en-wcag`, `de-eaa`, `tips-en-tools`, `achtergrond_wcag`

### Engelse blogpost maken

Zelfde proces, maar in `content/english/blog/`. Engelse en Nederlandse artikelen worden apart geschreven (geen vertalingen).

### Afbeeldingen toevoegen

Plaats afbeeldingen in `static/images/` (of een submap daarvan, bijv. `static/images/blog/`). Verwijs ernaar in front matter of Markdown:

```markdown
image: "/images/blog/mijn-afbeelding.png"
![Alt-tekst](/images/blog/mijn-afbeelding.png)
```

### Beschikbare shortcodes

In blogposts kun je speciale Hugo-shortcodes gebruiken:

- `{{< button label="Tekst" link="/url/" >}}`: knop
- `{{< notice "type" >}} tekst {{< /notice >}}`: notificatieblok
- `{{< case-section >}}`: case study-sectie

### Een les voor de webredactie-opleiding

De Academy heeft twee opleidingen: `content/dutch/academy/developers/` en `content/dutch/academy/webredactie/`. Een les is een `.md`-bestand in de map van een sectie, zoals `webredactie/linkteksten/linkteksten.md`. Voorbeeld: die les.

Front matter: `title`, `section_number` (gelijk aan die van de sectie), `chapter_number`, `locked: false`, `description`, `points: 10` en `layout: "academy"`. Zet ook `locked: false` in de `_index.md` van de sectie, anders blijft die dicht en staat hij niet in de sitemap.

De opbouw van een les:

1. Waarom het onderwerp telt, voor de bezoeker.
2. Wat WCAG vraagt, met nummer, naam en niveau van het succescriterium.
3. De regels, elk onder een eigen kop, met voorbeelden in `<div class="academy-example">` (fout en goed). Gewone tekst werkt daarin ook, een codeblok is niet nodig.
4. `{{< academy-cms niveau="2" >}}` met genummerde stappen: zo doe je het in het CMS.
5. `{{< academy-controle niveau="2" >}}` met controles die je zonder ontwikkeltools doet.
6. Veelgemaakte fouten, een tabel met de succescriteria, en Verder lezen.
7. Een quiz in `<div class="academy-quiz" id="quiz-<onderwerp>">`. Kopieer de opbouw van een bestaande quiz. De quiz telt vanzelf mee in de voortgang van de eigen opleiding.

Beide blokken hebben als standaardkop "Zo doe je het in je CMS" en "Controleer het zelf". Een andere kop geef je mee met `titel="…"`. Laat je `niveau` weg, dan wordt de kop een `h3`. Laat feitelijke claims over WCAG controleren met `/gerard` voordat de les live gaat.

### Publiceren naar productie

De site wordt automatisch gebouwd en gedeployed wanneer je naar de `main`-branch pusht.

```bash
# 1. Maak een nieuwe branch
git checkout -b feature/mijn-wijziging

# 2. Stage je wijzigingen
git add content/dutch/blog/2026-04-04_mijn-nieuwe-post.md
git add static/images/blog/mijn-afbeelding.png

# 3. Commit
git commit -m "add: blogpost over [onderwerp]"

# 4. Push naar GitHub
git push -u origin feature/mijn-wijziging

# 5. Maak een Pull Request op GitHub (of merge direct naar main)
# Via GitHub.com of via CLI:
gh pr create --title "Nieuwe blogpost: [onderwerp]" --body "..."

# 6. Na review: merge naar main
gh pr merge --squash

# 7. GitHub Actions bouwt en deployt automatisch
# Check status: gh run list --limit 1
```

**Snelle route (voor kleine content-wijzigingen):**

```bash
git checkout main
git pull
# maak je wijziging
git add .
git commit -m "update: [wat je hebt gewijzigd]"
git push
# deploy start automatisch, duurt ~2-3 minuten
```

### Build controleren

```bash
npm run build       # lokale productie-build (output in /public/)
npm run preview     # productie-preview met live reload
```

### Hugo-configuratie

De configuratie is verspreid over meerdere bestanden:

| Bestand | Bevat |
|---------|-------|
| `config/_default/hugo.toml` | Basisinstellingen, outputs, sitemap |
| `config/_default/languages.toml` | Taalinstellingen (NL + EN) |
| `config/_default/params.toml` | Logo, favicon, metadata |
| `config/_default/menus.nl.toml` | Nederlands menu |
| `config/_default/menus.en.toml` | Engels menu |
| `data/theme.json` | Kleuren, fonts (genereert CSS) |
| `i18n/nl.yaml` | Nederlandse vertalingen (knoppen, labels) |
| `i18n/en.yaml` | Engelse vertalingen |

### Veelvoorkomende taken

| Taak | Actie |
|------|-------|
| Menu-item toevoegen | Bewerk `config/_default/menus.nl.toml` |
| Nieuwe pagina maken | Maak `.md` in juiste `content/`-map |
| CSS aanpassen | Bewerk `assets/css/custom.css` |
| Kleur/font wijzigen | Bewerk `data/theme.json`, herstart dev server |
| Vertaling aanpassen | Bewerk `i18n/nl.yaml` of `i18n/en.yaml` |
| Sitemap excluden | Voeg `sitemap_exclude: true` toe aan front matter |

### Deploy-pipeline samengevat

```
git push naar main
       ↓
GitHub Actions start (.github/workflows/main.yml)
       ↓
Hugo build (npm run build)
       ↓
Audit-rapporten build (Eleventy, apart repo)
       ↓
Alles samengevoegd in /public/
       ↓
Deploy naar GitHub Pages
       ↓
Google sitemap ping
       ↓
Live op properaccess.nl
```
