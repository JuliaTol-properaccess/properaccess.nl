# Academy Section — Layout (Fase 1)

## Problem Statement

Proper Access wil een "Academy" sectie op de website: een interactief leerplatform over web accessibility, gebaseerd op de Deque Web Accessibility Checklist (WCAG 2.2 AA). In fase 1 bouwen we alleen de layout — alle hoofdstukken staan op slot. Bezoekers zien de sidebar met hoofdstuknamen maar kunnen de inhoud nog niet openen.

## Objectives

1. Nieuwe Hugo-sectie `/academy/` met eigen layout
2. Sidebar-navigatie met alle hoofdstukken (gegroepeerd per sectie)
3. Locked state voor alle hoofdstukken (visueel slot-icoon, niet klikbaar)
4. Landing page met introductie en overzicht
5. Responsive: sidebar klapt in op mobile
6. Volledig in het Nederlands

## Content Structure (uit Deque checklist)

### Sectie 1: Structuur en Semantiek
1. Semantische markup
2. Paginatitel
3. Taal
4. Koppen
5. Landmarks
6. Lijsten
7. Tabellen
8. Iframes
9. Markup-validiteit
10. Overige semantische elementen

### Sectie 2: Links en Navigatie
11. Links
12. Sitenavigatie
13. Navigatie binnen de pagina
14. Leesvolgorde en focusvolgorde

### Sectie 3: Afbeeldingen en Visueel Ontwerp
15. Afbeeldingen
16. Kleur en contrast
17. Tekststijl, formaat, reflow en zoom
18. Visuele aanwijzingen
19. Adaptieve en responsieve output

### Sectie 4: Multimedia, Animaties en Beweging
20. Audio en video
21. Animatie, beweging en getimede content

### Sectie 5: Gebruikersinvoer en Formulieren
22. Apparaatonafhankelijke invoer
23. Formuliervelden, labels en instructies
24. Formuliervalidatie en feedback
25. CAPTCHA

### Sectie 6: Dynamische Content, ARIA en Widgets
26. Dynamische content (JavaScript, AJAX)
27. ARIA
28. Custom widgets

## Technical Approach

### Hugo-structuur

```
content/dutch/academy/
├── _index.md                          # Landing page
├── structuur-en-semantiek/
│   ├── _index.md                      # Sectie-intro (locked)
│   ├── semantische-markup.md          # Locked
│   ├── paginatitel.md                 # Locked
│   ├── taal.md                        # Locked
│   ├── koppen.md                      # Locked
│   ├── landmarks.md                   # Locked
│   ├── lijsten.md                     # Locked
│   ├── tabellen.md                    # Locked
│   ├── iframes.md                     # Locked
│   ├── markup-validiteit.md           # Locked
│   └── overige-semantische-elementen.md
├── links-en-navigatie/
│   ├── _index.md
│   ├── links.md
│   ├── sitenavigatie.md
│   ├── navigatie-binnen-de-pagina.md
│   └── leesvolgorde-en-focusvolgorde.md
├── afbeeldingen-en-visueel-ontwerp/
│   ├── _index.md
│   ├── afbeeldingen.md
│   ├── kleur-en-contrast.md
│   ├── tekststijl-formaat-reflow-en-zoom.md
│   ├── visuele-aanwijzingen.md
│   └── adaptieve-en-responsieve-output.md
├── multimedia-animaties-en-beweging/
│   ├── _index.md
│   ├── audio-en-video.md
│   └── animatie-beweging-en-getimede-content.md
├── gebruikersinvoer-en-formulieren/
│   ├── _index.md
│   ├── apparaatonafhankelijke-invoer.md
│   ├── formuliervelden-labels-en-instructies.md
│   ├── formuliervalidatie-en-feedback.md
│   └── captcha.md
└── dynamische-content-aria-en-widgets/
    ├── _index.md
    ├── dynamische-content.md
    ├── aria.md
    └── custom-widgets.md
```

### Layout-bestanden

```
layouts/academy/
├── list.html          # Academy landing page (overzicht alle secties)
├── single.html        # Individuele les-pagina (fase 2, nu locked)
└── section.html       # Sectie-overzicht (fase 2, nu locked)
```

### CSS (BEM, in assets/css/custom.css)

Prefix: `.academy__`

```
.academy                        - Wrapper (grid: sidebar + main)
.academy__sidebar               - Linker sidebar navigatie
.academy__sidebar-toggle        - Mobile hamburger voor sidebar
.academy__nav                   - <nav> element
.academy__section               - Groep hoofdstukken (collapsible)
.academy__section-title         - Sectienaam (h2 in sidebar)
.academy__section-list          - <ul> met hoofdstukken
.academy__chapter               - <li> per hoofdstuk
.academy__chapter--locked       - Locked state (grijs, slot-icoon)
.academy__chapter--active       - Actieve pagina (highlight)
.academy__main                  - Rechter content-area
.academy__hero                  - Landing page hero
.academy__progress              - Voortgangsbalk per sectie
.academy__lock-icon             - SVG slot-icoon
```

### Front matter per hoofdstuk

```yaml
---
title: "Paginatitel"
section_number: 1
chapter_number: 2
locked: true
description: "Korte beschrijving"
layout: "academy"
---
```

## Implementation Phases

### Phase 1: Content-bestanden aanmaken

**Goal**: Alle markdown files met front matter

**Steps**:
1. Maak `content/dutch/academy/_index.md` met introductietekst
2. Maak alle sectie `_index.md` bestanden
3. Maak alle hoofdstuk `.md` bestanden met `locked: true`
4. Elke file heeft: title, section_number, chapter_number, locked, description

**Files**: 36 markdown bestanden (1 landing + 6 secties + 28 hoofdstukken)

### Phase 2: Hugo layouts

**Goal**: Academy-specifieke templates

**Steps**:
1. `layouts/academy/list.html` — Landing page met hero, introductie, en overzicht van alle secties met hun hoofdstukken (allemaal locked)
2. `layouts/academy/single.html` — Placeholder voor individuele lessen (toont "locked" bericht)

**Key design**:
- Twee-kolom layout: sidebar links (280px), main content rechts
- Sidebar bevat alle secties en hoofdstukken
- Locked items: grijs, niet-klikbare tekst, slot-icoon
- Mobile: sidebar verborgen, toggle-knop bovenaan

### Phase 3: CSS styling

**Goal**: Volledige styling in `assets/css/custom.css`

**Key styles**:
- Grid layout voor desktop (sidebar + main)
- Sidebar: vaste breedte, scrollbaar, sticky
- Secties in sidebar: uitklapbaar met chevron
- Locked state: `opacity: 0.6`, `cursor: default`, slot-icoon
- Active state: magenta accent (#A30D4B)
- Dark mode ondersteuning
- Mobile: sidebar als overlay met slide-in
- Focus styles op alle interactieve elementen

### Phase 4: JavaScript (minimaal)

**Goal**: Sidebar toggle en sectie-uitklap

**Steps**:
1. Mobile sidebar toggle (open/close)
2. Sectie-accordion in sidebar (uitklappen/inklappen)
3. Alle click-events op locked items blokkeren

**File**: `static/js/academy.js` (~50 regels)

## Testing Strategy

### Manual Testing
- [ ] Hugo build slaagt zonder fouten
- [ ] Landing page toont alle 6 secties met 28 hoofdstukken
- [ ] Alle hoofdstukken tonen locked state (slot-icoon, niet klikbaar)
- [ ] Sidebar werkt op desktop (sticky, scrollbaar)
- [ ] Sidebar toggle werkt op mobile
- [ ] Dark mode ziet er goed uit
- [ ] Koppenstructuur is correct (H1 → H2 → H3)
- [ ] Toetsenbordnavigatie werkt in sidebar

### WCAG Check
- [ ] Lang attribute correct
- [ ] Heading hiërarchie (1.3.1)
- [ ] Focus zichtbaar op alle interactieve elementen (2.4.7)
- [ ] Sidebar toggle heeft aria-expanded (4.1.2)
- [ ] Locked items communiceren status aan schermlezers

## Success Criteria

- [ ] `/academy/` toont de landing page
- [ ] Sidebar toont 6 secties met 28 hoofdstukken
- [ ] Alle hoofdstukken zijn locked (visueel + functioneel)
- [ ] Layout is responsive (mobile + desktop)
- [ ] Hugo build slaagt
- [ ] WCAG heading hiërarchie klopt
- [ ] Past bij het bestaande Proper Access design (kleuren, typografie)

## Design Notes

- **Kleuren**: Magenta #A30D4B (accenten), Donker blauw #1F2937 (sidebar bg), Secondary #004050, Licht grijs #f5f5f5, Wit #ffffff
- **Typografie**: Bestaande font-stack van de site
- **Iconen**: Inline SVG voor slot-icoon (geen externe dependencies)
- **Geen externe libraries**: Puur CSS + vanilla JS

---

*Created: 2026-03-04*
*Status: todo*
