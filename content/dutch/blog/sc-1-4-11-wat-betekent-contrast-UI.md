---
title: "Zijn je formulieren goed zichtbaar?(WCAG 1.4.11)"
date: 2026-02-19
description: "Slechtzienden zien je formuliervelden niet. Leer hoe je UI-componenten en iconen toegankelijk maakt met voldoende contrast. Met code-voorbeelden."
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-3"
  - "kleur"
  - "formulier"
keywords:
  - contrast niet-tekstuele elementen
  - toegankelijkheid webdesign
  - kleurcontrast iconen
  - invoervelden contrast
  - focusindicator WCAG
  - "WCAG 1.4.11"
  - "non-text contrast"
  - "formuliervelden contrast"
  - "toegankelijke knoppen"
  - "UI componenten toegankelijkheid"
  - "kleurenblindheid webdesign"
  - "EAA compliance"
  - "focus indicator contrast"
---

# Non-text Contrast: waarom je formuliervelden, knoppen en iconen onzichtbaar zijn voor slechtzienden (WCAG 1.4.11)

Je staat met je telefoon in de felle zon voor een museum. Je wilt tickets kopen, maar het formulier op de website is nauwelijks zichtbaar. Invoervelden met lichtgrijze randjes, knoppen die opgaan in de achtergrond — je tuurt, draait je scherm, houdt je hand erboven. Uiteindelijk geef je het op en sluit je aan bij de rij voor de kassa.

Herkenbaar? Dat is precies wat SC 1.4.11 probeert te voorkomen. Niet alleen in de zon, maar ook voor de honderdduizenden mensen die door een visuele beperking dagelijks tegen hetzelfde probleem aanlopen — ongeacht het weer.

Welkom bij WCAG succescriterium 1.4.11 Non-text Contrast — het criterium dat designers laat huilen en developers doet fronsen. Maar ook het criterium dat het verschil maakt tussen een formulier dat iedereen kan gebruiken en eentje waar mensen bij wegklikken omdat ze niet eens zien waar ze moeten typen.

## Waarom dit belangrijk is (ook voor jouw project)

Sinds juni 2025 is de European Accessibility Act (EAA) van kracht. WCAG 2.1 niveau AA is de norm, en SC 1.4.11 valt daar volledig onder. Dat betekent: als je website in de EU diensten aanbiedt, moet je hieraan voldoen.

Maar belangrijker nog: **in Nederland hebben ruim 300.000 mensen een visuele beperking**. Voor hen is lichtgrijs op wit vaak niet te onderscheiden — er is simpelweg te weinig verschil in helderheid. Geen randje zien = niet weten waar het invoerveld begint. Geen focus-indicator zien = verdwalen in je formulier.

> **Julia: Even een belangrijk onderscheid:** SC 1.4.11 gaat over _contrast_ — het helderheidsverschil tussen twee kleuren. Kleurenblindheid (het niet kunnen onderscheiden van bepaalde kleuren zoals rood en groen) valt onder een ander criterium: SC 1.4.1 Use of Color. Contrast en kleur zijn twee verschillende dingen.

En het gaat niet alleen om slechtzienden. Denk ook aan mensen met:

- Een slecht beeldscherm (oude laptop, zonlicht op je telefoon)
- Vermoeide ogen aan het eind van een lange werkdag
- Cognitieve beperkingen die baat hebben bij duidelijke visuele afbakening

**De business case:** Een onzichtbaar formulier = geen conversie. Simpel als dat.

## Wat zegt SC 1.4.11 precies?

Het succescriterium eist een **contrastverhouding van minimaal 3:1** tussen:

1. **UI-componenten** en hun aangrenzende kleuren
2. **Grafische objecten** die nodig zijn om de content te begrijpen

Laten we beide categorieën uitpluizen.

### 1. UI-componenten: de visuele aanduiding van je interface

Dit gaat over ALLES waarmee je bezoekers interactie hebben:

- **Invoervelden** — de rand die het veld afbakent
- **Knoppen** — als de knop alleen een icoon heeft, moet het voldoende contrast hebben
- **Checkboxes en radiobuttons** — hun omtrek
- **Toggle switches** — de aan/uit-status moet herkenbaar zijn
- **Sliders** — de positie van de thumb
- **Tabs** — de actieve tab moet zich onderscheiden
- **Focus-indicatoren** — die blauwe outline die je vaak weghaalt (niet doen!)

### 2. Grafische objecten: iconen en visualisaties die betekenis dragen

Denk aan:

- **Iconen zonder tekst** — bijvoorbeeld een winkelwagentje, een zoekloep, een hamburger-menu
- **Grafieklijnen en -segmenten** — de lijnen in een lijndiagram, de segmenten in een taartdiagram
- **Kaartmarkeringen** — pinnetjes op een Google Map
- **Diagrammen** — stroomschema's, organisatieschema's

  **Niet van toepassing op:**

- Decoratieve afbeeldingen (die voegen geen informatie toe)
- Logo's en merknamen
- Inactieve (disabled) componenten
- Standaard browser-stijlen die je niet hebt aangepast

## De meest voorkomende fouten (en hoe ik ze wekelijks tegenkom)

Als auditor zie ik steeds dezelfde problemen:

### Fout 1: Lichtgrijze invoervelden op wit

<svg viewBox="0 0 520 105" width="520" role="img" aria-label="Vergelijking: invoerveld met #ccc border (contrast 1.6:1) versus #767676 border (contrast 4.5:1)">
  <rect width="520" height="105" fill="#f5f5f5" rx="8" />
  <text x="20" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#cc0000" font-weight="bold">Fout — border: #ccc (1.6:1)</text>
  <rect x="20" y="36" width="220" height="40" fill="#fff" stroke="#cccccc" stroke-width="1" rx="4" />
  <text x="32" y="61" font-family="system-ui, sans-serif" font-size="13" fill="#aaa">Typ hier...</text>
  <text x="280" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#008000" font-weight="bold">Goed — border: #767676 (4.5:1)</text>
  <rect x="280" y="36" width="220" height="40" fill="#fff" stroke="#767676" stroke-width="1" rx="4" />
  <text x="292" y="61" font-family="system-ui, sans-serif" font-size="13" fill="#aaa">Typ hier...</text>
  <text x="20" y="97" font-family="system-ui, sans-serif" font-size="12" fill="#666">Zie je het verschil? De linker rand is nauwelijks zichtbaar.</text>
</svg>

```css
/* ❌ Dit haalt de 3:1 niet */
input {
  border: 1px solid #ccc; /* Contrast: 1.6:1 */
  background: #fff;
}

input {
  border: 1px solid #ddd; /* Contrast: 1.3:1 */
  background: #fff;
}
```

**Waarom dit fout gaat:** `#ccc` (RGB 204, 204, 204) op wit heeft een contrastverhouding van slechts 1,6:1. Voor slechtzienden is dit vrijwel onzichtbaar — er is simpelweg te weinig helderheidsverschil om de rand waar te nemen.

**De oplossing:**

```css
/* ✅ Dit haalt makkelijk de 3:1 */
input {
  border: 1px solid #767676; /* Contrast: 4.54:1 — ruim voldoende */
  background: #fff;
}

/* Beter nog: */
input {
  border: 1px solid #595959; /* Contrast: 4.0:1 */
  background: #fff;
}

/* Of gewoon: */
input {
  border: 1px solid #000; /* Contrast: 21:1 — perfectie */
  background: #fff;
}
```

**Pro-tip:** `#767676` is de lichtste grijstint die 4,5:1 haalt op wit — de eis voor tekst (SC 1.4.3). Voor UI-componenten (SC 1.4.11) mag je lichter: `#949494` haalt net de 3:1. Maar `#767676` is de veilige keuze die aan beide eisen voldoet.

### Fout 2: Custom focus-indicatoren die bijna onzichtbaar zijn

<svg viewBox="0 0 520 105" width="520" role="img" aria-label="Vergelijking: focus-indicator met #a8d5ff (contrast 1.4:1) versus #005fcc (contrast 5.1:1)">
  <rect width="520" height="105" fill="#f5f5f5" rx="8" />
  <text x="20" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#cc0000" font-weight="bold">Fout — outline: #a8d5ff (1.4:1)</text>
  <rect x="20" y="38" width="120" height="40" fill="#0066cc" rx="6" />
  <text x="80" y="63" font-family="system-ui, sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Verstuur</text>
  <rect x="15" y="33" width="130" height="50" fill="none" stroke="#a8d5ff" stroke-width="2" rx="9" />
  <text x="280" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#008000" font-weight="bold">Goed — outline: #005fcc (5.1:1)</text>
  <rect x="280" y="38" width="120" height="40" fill="#0066cc" rx="6" />
  <text x="340" y="63" font-family="system-ui, sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Verstuur</text>
  <rect x="273" y="31" width="134" height="54" fill="none" stroke="#005fcc" stroke-width="3" rx="10" />
  <text x="20" y="100" font-family="system-ui, sans-serif" font-size="12" fill="#666">De linker focus-ring is nauwelijks zichtbaar op een lichte achtergrond.</text>
</svg>

```css
/* ❌ Vaak gezien, zelden goed */
button:focus {
  outline: 2px solid #a8d5ff; /* Contrast: 1.4:1 op wit */
}
```

**De oplossing:**

```css
/* ✅ Hoog contrast, duidelijk zichtbaar */
button:focus {
  outline: 2px solid #005fcc; /* Contrast: 5.1:1 */
  outline-offset: 2px;
}

/* Of een donkere outline die altijd werkt */
button:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
}

/* Met een extra accent voor nog meer zichtbaarheid */
button:focus {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 0 5px rgba(0, 102, 204, 0.2);
}
```

**Belangrijke nuance:** SC 1.4.11 eist 3:1 contrast, maar als je echt goed bezig wilt zijn, kijk ook naar SC 2.4.13 Focus Appearance (WCAG 2.2 AAA). Die eist:

- Minimaal 2px dikke focusindicator OF een gebied van minimaal 1 CSS pixel dik rondom het component
- Contrastverhouding van 3:1 tussen focus-stijl en niet-focus-stijl

### Fout 3: Informatieve iconen zonder tekst ernaast die te weinig contrast hebben

<svg viewBox="0 0 520 90" width="520" role="img" aria-label="Vergelijking: zoekicoon in #bbb (contrast 1.9:1) versus #666 (contrast 5.7:1)">
  <rect width="520" height="90" fill="#f5f5f5" rx="8" />
  <text x="20" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#cc0000" font-weight="bold">Fout — icon: #bbb (1.9:1)</text>
  <circle cx="50" cy="58" r="12" fill="none" stroke="#bbbbbb" stroke-width="3" />
  <line x1="58" y1="67" x2="72" y2="80" stroke="#bbbbbb" stroke-width="3" stroke-linecap="round" />
  <text x="280" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#008000" font-weight="bold">Goed — icon: #666 (5.7:1)</text>
  <circle cx="310" cy="58" r="12" fill="none" stroke="#666666" stroke-width="3" />
  <line x1="318" y1="67" x2="332" y2="80" stroke="#666666" stroke-width="3" stroke-linecap="round" />
</svg>

```css
/* ❌ Lichtgrijze iconen op wit */
.icon {
  color: #bbb; /* Contrast: 1.9:1 */
}
```

**De oplossing:**

```css
/* ✅ Donker genoeg om te zien */
.icon {
  color: #666; /* Contrast: 5.7:1 */
}

/* Of met een tekstlabel erbij (altijd beter) */
<button>
  <svg class="icon" aria-hidden="true">...</svg>
  <span>Zoeken</span>
</button>
```

### Fout 4: Toggle switches zonder duidelijk verschil tussen aan en uit

<svg viewBox="0 0 520 100" width="520" role="img" aria-label="Vergelijking: toggle switches met nauwelijks verschil versus duidelijk verschil">
  <rect width="520" height="100" fill="#f5f5f5" rx="8" />
  <text x="20" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#cc0000" font-weight="bold">Fout — verschil nauwelijks zichtbaar</text>
  <text x="20" y="52" font-family="system-ui, sans-serif" font-size="12" fill="#666">Uit:</text>
  <rect x="50" y="38" width="44" height="24" rx="12" fill="#e0e0e0" />
  <circle cx="62" cy="50" r="9" fill="#fff" />
  <text x="110" y="52" font-family="system-ui, sans-serif" font-size="12" fill="#666">Aan:</text>
  <rect x="140" y="38" width="44" height="24" rx="12" fill="#c0c0c0" />
  <circle cx="172" cy="50" r="9" fill="#fff" />
  <text x="280" y="24" font-family="system-ui, sans-serif" font-size="14" fill="#008000" font-weight="bold">Goed — verschil direct duidelijk</text>
  <text x="280" y="52" font-family="system-ui, sans-serif" font-size="12" fill="#666">Uit:</text>
  <rect x="310" y="38" width="44" height="24" rx="12" fill="#999999" />
  <circle cx="322" cy="50" r="9" fill="#fff" />
  <text x="370" y="52" font-family="system-ui, sans-serif" font-size="12" fill="#666">Aan:</text>
  <rect x="400" y="38" width="44" height="24" rx="12" fill="#2196f3" />
  <circle cx="432" cy="50" r="9" fill="#fff" />
  <text x="20" y="88" font-family="system-ui, sans-serif" font-size="12" fill="#666">Links: #e0e0e0 vs #c0c0c0 (1.2:1). Rechts: #999 vs #2196f3 — duidelijk verschil.</text>
</svg>

```css
/* ❌ Te subtiel verschil */
.toggle {
  background: #e0e0e0; /* Uit-status */
}

.toggle.active {
  background: #c0c0c0; /* Aan-status — contrast tussen de twee: 1.2:1 */
}
```

**De oplossing:**

```css
/* ✅ Duidelijk onderscheid */
.toggle {
  background: #999; /* Uit-status */
}

.toggle.active {
  background: #2196f3; /* Aan-status — kleurverschil + contrast van beide met omgeving */
}

/* Of met extra visuele aanduiding */
.toggle::after {
  content: "";
  background: #fff;
  /* De "knop" binnen de toggle */
}

.toggle.active::after {
  transform: translateX(20px);
  /* Positieverandering + kleurverschil = extra duidelijk */
}
```

## Hoe test je dit in de praktijk?

### 1. Browser DevTools

**Chrome/Edge:**

1. Inspect Element op het component
2. Kijk in het Styles-paneel naar de kleur
3. Klik op het gekleurde vierkantje naast de kleurcode
4. Chrome toont automatisch de contrastverhouding en of het voldoet

**Firefox:**

1. Inspect Element
2. In het Accessibility-tabblad staat een contrast-indicator
3. Rood = te laag contrast, groen = voldoende

### 2. Contrast Checker

Te doewnlaoden app om contrast te checke (mijn favoriet): https://vispero.com/color-contrast-checker/

Als je geen tools op je computer kan installeren, dan: https://webaim.org/resources/contrastchecker/

Vul de voorgrond- en achtergrondkleur in. De tool geeft direct aan:

- AA voor normale tekst (4,5:1)
- AA voor grote tekst (3:1)
- AA voor grafische objecten en UI-componenten (3:1)

### 3. Handmatige check met een visuele simulatie

Chrome-extensie: "NoCoffee Vision Simulator" of de ingebouwde rendering-emulatie in Chrome DevTools (Rendering > Emulate vision deficiencies > Blurred vision).

Kijk naar je interface met verminderde scherpte. Als invoervelden verdwijnen, heb je een contrastprobleem.

## Speciale aandacht: grafieken en datavisualisaties

Grafieken zijn een speciaal geval. SC 1.4.11 eist dat de verschillende elementen (lijnen, segmenten) herkenbaar zijn, maar contrast alleen is vaak niet genoeg. Je moet de informatie uit de grafiek toegankelijk maken en dat doe je meestal met een toegankelijk tabel. Heb je een tabel toegevoegd? Dan mag je grafiek in pastelkleuren blijven.

**Pro-tip:** Gebruik nooit alleen kleur om informatie over te brengen. Combineer met:

- Lijnpatronen (stippellijn, streepjeslijn)
- Labels direct bij de lijn
- Vormen (cirkel, vierkant, driehoek) bij datapunten
- Textuur of arcering in staafdiagrammen

### Voorbeeld: taartdiagram met voldoende onderscheid

<svg viewBox="0 0 200 200" width="300" height="300" role="img" aria-label="Taartdiagram: categorie A 40%, B 30%, C 30%">
  <defs>
    <pattern id="stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="3" height="6" fill="#767676" />
    </pattern>
    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="2" fill="#767676" />
    </pattern>
  </defs>
  <path d="M100,100 L100,10 A90,90 0 0,1 152.9,172.8 Z" fill="#1565c0" />
  <path d="M100,100 L152.9,172.8 A90,90 0 0,1 14.4,127.8 Z" fill="url(#stripes)" stroke="#474747" stroke-width="0.5" />
  <path d="M100,100 L14.4,127.8 A90,90 0 0,1 100,10 Z" fill="url(#dots)" stroke="#474747" stroke-width="0.5" />
  <text x="138" y="88" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">A: 40%</text>
  <text x="88" y="152" font-size="14" fill="#333" font-weight="bold" text-anchor="middle">B: 30%</text>
  <text x="62" y="72" font-size="14" fill="#333" font-weight="bold" text-anchor="middle">C: 30%</text>
</svg>

## Checklist: is jouw interface compliant met SC 1.4.11?

Doorloop deze lijst voor elk component:

### Invoervelden

- [ ] Heeft die rand een contrast van minimaal 3:1 tegen de achtergrond?
- [ ] Is de focus-indicator zichtbaar én heeft die 3:1 contrast? Met alle achtergronden van je website? Echt alles getest? Dit is best arbeidsintensief. Beter is gewoon de browserfocus te gebruiken.

### Knoppen

- [ ] Heeft de knop een icoon en geen tekst? Dan moet het icoon voldoen. Vaak zie je op desktop een knop met een icoon en tekst, bijvoorbeeld "Zoek" en op een klein scherm alleen het icoon. Je moet het icoon alleen in het tweede geval testen.
- [ ] Is de focus-indicator zichtbaar met 3:1 contrast?

### Checkboxes en radiobuttons

- [ ] Is de omtrek van de checkbox/radiobutton zichtbaar met 3:1 contrast?
- [ ] Is de aangevinkte status (vinkje, gevulde cirkel) zichtbaar met 3:1 contrast?

### Iconen

- [ ] Staat naast het icoon een tekst? Zo niet: heeft het icoon 3:1 contrast?
- [ ] Draagt het icoon betekenis? Dan moet het contrast voldoen.

### Toggle switches

- [ ] Heeft de uit-status 3:1 contrast tegen de achtergrond?
- [ ] Is het verschil tussen aan en uit duidelijk herkenbaar?

### Grafieken

- [ ] Hebben lijnen, segmenten en datapunten 3:1 contrast?
- [ ] Gebruik je naast kleur ook patronen of labels om onderscheid te maken?

## Het verschil met SC 1.4.3 (tekstcontrast)

Hier halen veel mensen deze twee door elkaar:

|                        | SC 1.4.3                      | SC 1.4.11                                |
| ---------------------- | ----------------------------- | ---------------------------------------- |
| **Gaat over**          | Tekst                         | UI-componenten en graphics               |
| **Contrast-eis**       | 4,5:1 (normaal) / 3:1 (groot) | 3:1                                      |
| **Voorbeeld**          | Tekst op een knop             |                                          |
| **Placeholder-tekst**  | Valt hieronder                | Niet van toepassing                      |
| **Icoon met label**    | Label valt hieronder          | Icoon is decoratief, niet van toepassing |
| **Icoon zonder label** | Niet van toepassing           | Valt hieronder                           |

Beide criteria moeten voldaan zijn. Je kunt niet kiezen.

## Tot slot

SC 1.4.11 is misschien niet het eerste criterium waar je aan denkt bij toegankelijkheid, maar het heeft enorme impact op de bruikbaarheid van je interface. Elke onzichtbare rand, elke te lichte focus-indicator en elk te bleek icoon is een barrière voor je bezoekers.

De oplossing is simpel: **`#767676` is je nieuwe beste vriend.** Het is de lichtste grijstint die 4,5:1 contrast haalt op wit — voldoende voor zowel tekst (SC 1.4.3) als UI-componenten (SC 1.4.11). Gebruik dit als je baseline en ga bij twijfel donkerder. Mijn persoonlijke favoriet is `#474747`. Makkelijk te onthouden, past overal en voldoet aan de eisen.

En vergeet je focus-indicatoren niet. Ze zijn het navigatiemiddel voor iedereen die je site met een toetsenbord gebruikt — en dat zijn meer mensen dan je denkt.

Wil je weten of jouw interface voldoet aan SC 1.4.11? Proper Access toetst niet alleen, maar levert ook concrete CSS-oplossingen per bevinding. Zodat je team direct aan de slag kan, zonder te raden welke kleuren wél werken.

---

_Julia Tol is oprichter van Proper Access en helpt organisaties bij het realiseren van digitale toegankelijkheid. Niet met dikke rapporten, maar met concrete oplossingen. Haar favoriete kleur? `#474747` — de grijs die de 4,5:1 haalt._
