---
title: "Accessibility Tree in Chrome: Installatie & Interpretatie Gids [2026]"
date: 2026-02-15
slug: "accessibility_tree_voor_developers"
categories:
  - "webdeveloper"
tags:
  - "4-1-2"
description: "Leer hoe je de Chrome Accessibility Tree installeert en gebruikt voor toegankelijkheidstesten. Stapsgewijze handleiding met praktijkvoorbeelden voor developers."
keywords:
  - WCAG SC 4.1.2
  - toegankelijke naam WCAG
  - digitale toegankelijkheid developers
  - Accessibility Tree Chrome
  - Chrome Accessibility Tree
  - Toegankelijkheidstest Chrome
  - Chrome DevTools accessibility
---

# Accessibility Tree in Chrome: Installatie en Interpretatie

## Wat is de Accessibility Tree?

De Accessibility Tree is een representatie van de webpagina die door hulpsoftware (zoals schermlezers) wordt gebruikt. Het is een vereenvoudigde versie van de DOM-tree die alleen toegankelijkheidsrelevante informatie bevat.

## Installatie en toegang

### Stap 1: Chrome DevTools openen

De Accessibility Tree is ingebouwd in Chrome en vereist geen aparte installatie. Je hebt alleen Chrome nodig (Ik ga ervanuit dat je in 2026 de versie 77 of hoger gebruikt).

Open Chrome DevTools op een van deze manieren:

- Druk op `F12`
- Druk op `Ctrl+Shift+I` (Windows/Linux) of `Cmd+Option+I` (Mac)
- Klik rechts → "Inspecteren"

### Stap 2: Toegang tot de Accessibility Tree

1. Open DevTools
2. Ga naar het **Elements** tabblad
3. Zoek het **Accessibility** paneel op een van deze locaties:
   - Als subtabblad rechts naast "Styles", "Computed", etc.
   - Klik op de `>>` pijl als het verborgen is
   - Of ga naar de drie puntjes (⋮) → "More tools" → "Accessibility"

### Stap 3: Volledig Accessibility Tree weergeven

Voor een volledig overzicht van de tree:

1. Klik in het Accessibility paneel op **"Enable full-page accessibility tree"**
2. Of typ in de adresbalk: `chrome://accessibility/`
3. Zoek je pagina in de lijst en klik op **"Accessibility Tree"**

## De Accessibility Tree gebruiken

### Interface navigatie

Wanneer je de Accessibility Tree opent, zie je:

1. **Tree-structuur (links)**: Hierarchische weergave van toegankelijkheidselementen
2. **Details paneel (rechts)**: Properties van het geselecteerde element
3. **Filter opties**: Om specifieke node-types te tonen/verbergen

![Screenshot a11y tree](./images/blog2026/a11ytree.png)

### Navigeren door de tree

- Klik op elementen in de DOM tree (Elements tab) om het corresponderende accessibility node te zien
- Of navigeer direct in de Accessibility Tree door nodes uit te klappen (▶)
- Gebruik de zoekfunctie (`Ctrl+F`) in de DOM-weergave om specifieke rollen of tekst te vinden. Klik vervolgens op het poppetje om naar de Accessibility Tree te schakelen.

![Screenshot zoeken](./images/blog2026/zoekintree.png)

## Gegevens interpreteren

### Belangrijkste properties

Elk node in de Accessibility Tree bevat verschillende properties:

#### 1. **Role** (Rol)

De semantische functie van het element.

Veelvoorkomende rollen:

- `button`: Knop
- `link`: Hyperlink
- `heading`: Koptekst
- `navigation`: Navigatiegebied
- `main`: Hoofdinhoud
- `complementary`: Aanvullende content (bijv. sidebar)
- `list` / `listitem`: Lijst en lijstitems
- `textbox`: Invoerveld
- `img`: Afbeelding

#### 2. **Name** (Naam)

De toegankelijke naam - wat een schermlezer zal voorlezen.

Bronnen voor de naam (in volgorde van prioriteit):

- `aria-label` attribuut
- `aria-labelledby` verwijzing
- Tekst binnen het element
- `alt` attribuut (voor afbeeldingen)
- `title` attribuut
- `placeholder` (voor invoervelden)

**Voorbeeld:**

```html
<button aria-label="Menu sluiten">×</button>
```

- **Role**: `button`
- **Name**: "Menu sluiten"

Zie deze Codepen als je wil weten hoe je een link een toegankelijke naam geeft: https://codepen.io/Julia-Tol-wcag/pen/ZYOweKw.

#### 3. **Description** (Beschrijving)

Extra context, vaak afkomstig van:

- `aria-describedby`
- `title` attribuut (niet betrowbaar omdat deze waarde makkelijk overgeschreven kan worden)

#### 4. **Value** (Waarde)

De huidige waarde voor interactieve elementen:

- Tekst in een invoerveld
- Geselecteerde toestand (bijv bij een knop: aan of uit)
- Positie van een slider

#### 5. **States** (Toestanden)

Dynamische eigenschappen:

- `checked`: Voor checkboxes/radio buttons
- `expanded`: Voor uitklapbare elementen
- `selected`: Voor geselecteerde items
- `disabled`: Voor uitgeschakelde elementen
- `hidden`: Voor verborgen elementen

**Voorbeeld:**

```html
<button aria-expanded="false" aria-controls="menu">Menu</button>
```

- **Role**: `button`
- **Name**: "Menu"
- **States**: `expanded: false`

#### 6. **Properties**

Statische kenmerken:

- `level`: Niveau van headings (h1=1, h2=2, etc.)
- `required`: Verplicht invoerveld
- `readonly`: Alleen-lezen
- `multiline`: Meerdere regels tekst

### Interpretatie van de tree-structuur

#### Voorbeeld 1: Goed gestructureerde navigatie

```HTML
navigation "Hoofdnavigatie"
  ├─ link "Home"
  ├─ link "Producten"
  ├─ link "Over ons"
  └─ link "Contact"
```

**Interpretatie:**

- ✅ Duidelijke `navigation` rol
- ✅ Toegankelijke naam ("Hoofdnavigatie")
- ✅ Elk item is een link met duidelijke naam
- ✅ Logische hierarchie

#### Voorbeeld 2: Slecht toegankelijke button

```HTML
generic
  └─ StaticText "Klik hier"
```

**Problemen:**

- ❌ Geen `button` rol (waarschijnlijk een `<div>` met onclick)
- ❌ Role is `generic` - geen semantische betekenis
- ❌ Niet toetsenbord-toegankelijk
- ❌ Schermlezer leest het niet als button

**Oplossing:**

```html
<!-- Slecht -->
<div onclick="submit()">Klik hier</div>

<!-- Goed -->
<button type="button">Formulier verzenden</button>
```

#### Voorbeeld 3: Formulierveld

```HTML
textbox "E-mailadres", required, invalid
  └─ StaticText "john@example"
```

**Interpretatie:**

- ✅ Correcte `textbox` rol
- ✅ Duidelijke label ("E-mailadres")
- ✅ Required state is gecommuniceerd
- ⚠️ Invalid state - gebruiker moet dit corrigeren
- ✅ Huidige waarde is zichtbaar

## Praktijkvoorbeelden

### Voorbeeld 1: Heading structuur controleren

**Wat te zoeken:**

1. Filter op `heading` roles
2. Controleer de `level` property (1-6)
3. Verifieer logische volgorde (geen levels overslaan)

**Goed:**

```HTML
heading "Welkom" level=1
  ├─ heading "Onze diensten" level=2
  │   ├─ heading "Webdesign" level=3
  │   └─ heading "SEO" level=3
  └─ heading "Contact" level=2
```

**Slecht:**

```HTML
heading "Welkom" level=1
  └─ heading "Details" level=4  ❌ Level 2 en 3 overgeslagen
```

Dit wordt alleen afgekeurd als er geen content tussen de `<h1>` en `<h4>` staat.

### Voorbeeld 2: Formulier accessibility

Check voor elk invoerveld:

- **Name** is aanwezig en beschrijvend
- **Role** is correct (`textbox`, `combobox`, `checkbox`, etc.)
- **Required** state indien van toepassing
- **Invalid** state bij validatiefouten
- **Description** voor extra instructies

**HTML voorbeeld:**

```html
<label for="email">E-mailadres</label>
<input
  type="email"
  id="email"
  required
  autocomplete="email"
  aria-describedby="email-hint"
  aria-invalid="true"
/>
<span id="email-hint">Gebruik je werk e-mailadres</span>
<span role="alert">Ongeldig e-mailadres formaat</span>
```

**Accessibility Tree:**

```HTML
textbox "E-mailadres", required, invalid
  ├─ Name: "E-mailadres"
  ├─ Description: "Gebruik je werk e-mailadres"
  └─ Related alert: "Ongeldig e-mailadres formaat"
```

### Voorbeeld 3: Custom componenten

Voor een custom dropdown:

**Controleren:**

- Role is `combobox` of `listbox`
- `expanded` state wijzigt bij openen/sluiten
- `selected` items zijn gemarkeerd
- Toetsenbordnavigatie werkt (↑↓ pijlen)

## Best practices

### 1. Veelvoorkomende problemen identificeren

**Ontbrekende namen:**

```HTML
button ""  ❌ Geen toegankelijke naam
```

Oplossing: Voeg `aria-label` of (zichtbare) tekst toe.

**Generieke roles:**

```HTML
generic  ❌ Geen semantische betekenis
```

Oplossing: Gebruik semantische HTML (`<button>`, `<nav>`, etc.) of ARIA roles.

**Verborgen content die toegankelijk moet zijn:**

```HTML
element, hidden=true  ❌ Onbedoeld verborgen
```

Oplossing: Gebruik `visibility: hidden` of `display: none` alleen voor echt verborgen content.

### 2. Testing workflow

1. **Navigeer met keyboard**: Kan je alle interactieve elementen bereiken met Tab?
2. **Check focus order**: Is de volgorde logisch?
3. **Verifieer naming**: Heeft elk element een duidelijke naam?
4. **Test states**: Veranderen states correct bij interactie?
5. **Screen reader test**: Test met een echte screenreader (NVDA, VoiceOver)

### 3. Gebruik met andere tools

Combineer Accessibility Tree met:

- **axe DevTools**: Uitgebreide accessibility testing
- **WAVE**: Visual feedback over accessibility issues
- **Screen readers**: NVDA (Windows), VoiceOver (Mac)

### 4. Documentatie en resources

- [Chrome DevTools Accessibility Reference](https://developer.chrome.com/docs/devtools/accessibility/reference/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)

## Samenvatting

De Accessibility Tree is een essentieel hulpmiddel voor het bouwen van toegankelijke websites. Door de tree te inspecteren kun je:

- ✅ Verifiëren dat elementen de juiste roles hebben
- ✅ Controleren of alle interactieve elementen toegankelijke namen hebben
- ✅ States en properties valideren
- ✅ Heading hierarchie controleren
- ✅ Formulier accessibility testen
- ✅ Custom componenten debuggen

**Onthoud:** De Accessibility Tree laat zien wat ondersteunende technologieën "zien" - als het daar niet klopt, is je site niet toegankelijk voor gebruikers die op deze technologieën vertrouwen.
