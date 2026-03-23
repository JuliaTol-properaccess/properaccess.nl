---
title: "Tekst in afbeeldingen: waarom het niet mag (WCAG 1.4.5)”"
date: 2026-02-16
description: Ontdek waarom tekst als afbeelding problemen geeft voor toegankelijkheid en hoe je het beter aanpakt. Met praktische code-voorbeelden.
categories:
  - "wcag-uitgelegd"
  - "webredactie"
keywords:
  - "WCAG 1.4.5"
  - "afbeeldingen van tekst"
  - "images of text"
  - "digitale toegankelijkheid"
  - "tekst als afbeelding"
  - "EAA compliance"
  - "accessible design"
tags:
  - "1-4-5"
  - "afbeeldingen"
---

# WCAG 1.4.5 Afbeeldingen van tekst: waarom je tekst nooit als plaatje mag gebruiken

Je designer heeft een prachtige header gemaakt. Goed verkopende tekst, perfecte kleurverloop, precies het juiste effect. Hij levert een JPG aan. Klaar, toch?

Niet helemaal.

Want die mooie tekst-als-afbeelding? Die kunnen mensen niet aanpassen aan hun eigen behoeften. Groter maken, ander lettertype instellen, meer regelafstand, hogere contrast — het kan allemaal niet als tekst een plaatje is. En Google heeft er ook weinig aan. Oeps.

Welkom bij [WCAG 1.4.5: Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html). Dit criterium draait om één ding: mensen moeten tekst op een webpagina kunnen aanpassen aan hun eigen leesbehoeften. En dat kan alleen als tekst écht tekst is.

## Waarom tekst-als-afbeelding een probleem is

### Voor mensen die tekst moeten aanpassen

Dit is de kern van SC 1.4.5. Veel mensen passen de weergave van tekst aan om beter te kunnen lezen:

- **Groter lettertype** instellen via browserinstellingen
- **Ander lettertype** gebruiken (bijv. OpenDyslexic voor dyslexie)
- **Meer regelafstand** of woordafstand
- **Eigen kleurenschema** (bijv. lichte tekst op donkere achtergrond)
- **Aangepaste CSS** via een browser-extensie

Dat werkt allemaal perfect voor echte tekst. Maar een afbeelding van tekst? Daar heeft geen enkele aanpassing effect op. De tekst blijft exact zoals de designer het bedoeld heeft — en dat is precies het probleem.

**Het resultaat:** je sluit een groep bezoekers uit van cruciale informatie. Denk aan:

- Je belangrijkste verkoopboodschap in de header
- Prijzen in promotiebanners
- Calls-to-action in afbeeldingen
- Navigatie-elementen als afbeelding

> **Julia:** SC 1.4.5 gaat niet over mensen die de pagina niet kunnen zien. Schermlezers gebruiken alt-teksten om de afbeeldignen te begrijpen [SC 1.1.1 (alt-teksten)](https://www.properaccess.nl/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/). Het gaat hier specifiek over mensen die tekst visueel willen aanpassen aan hun eigen behoeften.

### Voor je SEO

Google kan tekst in afbeeldingen niet indexeren. Al die zorgvuldig gekozen kernwoorden in je hero-banner? Onzichtbaar voor zoekmachines.

Je concurrent die wél echte tekst gebruikt? Die scoort hoger.

## Wat zegt WCAG 1.4.5 precies?

Succescriterium 1.4.5 (niveau AA) stelt:

Als de technologieën die je gebruikt het visuele resultaat kunnen realiseren, wordt **tekst** gebruikt om informatie over te brengen in plaats van **afbeeldingen van tekst**.

Met andere woorden: als je het met HTML en CSS kunt maken, moet je het met HTML en CSS maken.

Maar, wat is now de definitie van 'tekst', hoor ik je vragen? Goede vraag! [WCAG](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html#dfn-text) zegt dat tekst is een <span lang="en">sequence of characters</span>. Dus, 1 letter is geen tekst.

### De uitzonderingen (en wanneer je ze mag gebruiken)

WCAG kent twee uitzonderingen:

1. **Aanpasbaar:** De afbeelding van tekst kan visueel worden aangepast aan de behoeften van de gebruiker (lettertype, grootte, kleur, achtergrond). In de praktijk zie ik dit alleen bij `<svg>` die inline zijn gelpaatst en die `<text>` elementen bevatten. Maar dit telt als tekst, en valt dus niet onder dit succescriterium. :smile:

2. **Essentieel:** De tekst in de afbeeldign is essentieel voor de informatie die wordt overgebracht. Hieronder vallen:
   - **Logo's en merknamen** — de vormgeving van het logo is onderdeel van de merkidentiteit
   - **Tekst met een zeer specifieke visuele presentatie** die je niet (of niet makkelijk) met HTML en CSS kunt nabootsen — denk aan kalligrafie, handgeschreven tekst, of een heel specifieke typografische compositie waar de positionering en vormgeving onlosmakelijk verbonden zijn met de boodschap

De sleutel zit in dat woord "essentieel". Het gaat niet om "mooi" of "on-brand". Het gaat om: is de exacte visuele presentatie noodzakelijk om de informatie over te brengen?

**Wel essentieel:**

- Je bedrijfslogo
- Een historisch document dat je als afbeelding toont
- Kalligrafie of handschrift waar de stijl de boodschap ís
- Een typografisch kunstwerk waar positie en vormgeving niet los te koppelen zijn van de inhoud

**Niet essentieel:**

- Een koptekst in een fancy lettertype (dat kun je als webfont laden)
- Een promotie-banner met tekst (dat kun je met HTML/CSS maken)
- Een button met gestylde tekst (CSS kan dat prima)

## Hoe het relateert aan andere succescriteria

### WCAG 1.1.1 (Niet-tekstuele content)

Hier begint het eigenlijk al. SC 1.1.1 (niveau A) zegt dat alle niet-tekstuele content een tekstalternatief moet hebben.

Als je een afbeelding van tekst gebruikt, moet je dus altijd een alt-tekst toevoegen met de volledige tekst uit de afbeelding.

```html
<!-- ❌ Niet toegankelijk -->
<img src="welkom-bij-ons-bedrijf.png" alt="header" />

<!-- ✅ Beter -->
<img src="welkom-bij-ons-bedrijf.png" alt="" />
<h1>Welkom bij ons bedrijf - De beste oplossingen sinds 1995</h1>
```

### WCAG 1.4.4 (Herschalen van tekst)

SC 1.4.4 (niveau AA) eist dat tekst tot 200% vergroot kan worden zonder verlies van content of functionaliteit.

Afbeeldingen van tekst? Die worden pixelig. Of helemaal niet vergroot, afhankelijk van hoe je ze implementeert.

```css
/* Echte tekst schaalt perfect */
h1 {
  font-size: 2rem; /* Schaalt mee met browser-instellingen */
}

/* Afbeeldingen? Niet zo zeer */
```

## De praktijk: wat kun je ermee?

### Situatie 1: Fancy kopteksten

**Het probleem:**
Je designer wil een specifiek lettertype met een shadow-effect en gradient.

**De verkeerde oplossing:**
Een PNG-afbeelding gebruiken.

**De juiste oplossing:**
Modern CSS kan bijna alles:

```html
<h1 class="fancy-header">Welkom bij ons bedrijf</h1>
```

```css
.fancy-header {
  font-family: "Jouw Fancy Font", sans-serif;
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
```

**Voordelen:**

- Gebruiker kan lettertype, grootte en kleuren aanpassen
- Schaalt perfect bij zoomen
- Tekst blijft selecteerbaar en kopieerbaar
- Google kan het indexeren
- Browser-vertalingen werken

### Situatie 2: Call-to-action buttons met specifieke styling

**Het probleem:**
Klikbaar CTA-banner heeft tekst.

**De verkeerde oplossing:**
De hele button als afbeelding.

**De juiste oplossing:**
Achtergrond als afbeelding, de tekst en de knop in HTML:

```html
<button class="cta-button">Probeer 30 dagen gratis</button>
```

```css
.cta-button {
  position: relative;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(245, 87, 108, 0.3);
  cursor: pointer;
  transition: transform 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(245, 87, 108, 0.4);
}

.cta-button:focus {
  outline: 3px solid #f5576c;
  outline-offset: 3px;
}
```

**Extra tip:** Vergeet de focus-stijl niet. Toetsenbordgebruikers moeten kunnen zien waar ze zijn.

### Situatie 3: Infographics met tekst

**Het probleem:**
Je hebt een infographic met statistieken en korte teksten.

**Acceptabele oplossing (als het echt niet anders kan):**
Gebruik de afbeelding, maar: zet een tekstversie van de info direct onder de afbeelding

```html
<figure>
  <img
    src="jaarlijkse-groei-statistieken.png"
    alt="uitgeschreven tekst staat onder de afbeelding"
  />
  <figcaption>
    <details>
      <summary>Tekstversie van de statistieken</summary>
      <h3>Jaarlijkse groei</h3>
      <ul>
        <li>2021: 45% groei</li>
        <li>2022: 67% groei</li>
        <li>2023: 89% groei</li>
      </ul>
      <h3>Belangrijkste groeifactoren</h3>
      <ul>
        <li>Online verkoop: +120%</li>
        <li>Internationale expansie: +45%</li>
        <li>Productinnovatie: +30%</li>
      </ul>
    </details>
  </figcaption>
</figure>
```

**Nog betere oplossing:**
Maak de infographic met HTML en CSS. Ja, dat is meer werk. Maar het resultaat is volledig toegankelijk, responsive, en je kunt de data zelfs interactief maken.

### Situatie 4: Logo's en merknamen

**Goed nieuws:** Dit mag gewoon als afbeelding.

Maar denk wel aan:

```html
<!-- ✅ Logo in de header -->
<a href="/">
  <img src="logo.svg" alt="Proper Access" />
</a>

<!-- ✅ Logo in de footer -->
<img src="logo.svg" alt="Proper Access logo" />

<!-- ❌ Lege alt-tekst voor een logo -->
<img src="logo.svg" alt="" />
```

## Modern webfonts: geen excuus meer

"Maar we hebben dat specifieke lettertype nodig voor onze branding!"

Geen probleem. Webfonts zijn overal beschikbaar:

```css
/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap");

/* Of self-hosted */
@font-face {
  font-family: "Jouw Custom Font";
  src:
    url("/fonts/custom-font.woff2") format("woff2"),
    url("/fonts/custom-font.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

h1 {
  font-family: "Jouw Custom Font", serif;
}
```

**Let op font-display:** `swap` zorgt ervoor dat er eerst een fallback-font wordt getoond terwijl je custom font laadt. Beter voor performance én toegankelijkheid.

## De business case

"Oké, leuk allemaal, maar dit kost toch extra tijd?"

Korte termijn: misschien een beetje.

Lange termijn: je bespaart tijd en geld. En je vergroot je bereik.

### Voordelen van echte tekst in plaats van afbeeldingen:

**1. Betere SEO = meer organisch verkeer**

- Google indexeert je content beter
- Betere rankings voor je belangrijkste zoektermen
- Meer bezoekers zonder extra advertentiebudget

**2. Lagere bounce rate**

- Mensen kunnen de tekst lezen (letterlijk)
- Betere gebruikerservaring = langer op je site
- Hogere kans op conversie

**3. Makkelijker onderhoud**

- Tekst aanpassen? Even in de CMS, klaar
- Geen designer nodig voor elke tekstwijziging
- A/B testen? Simpel te implementeren

**4. Kleinere pagina's**

- Tekst is veel lichter dan afbeeldingen
- Snellere laadtijd
- Lagere hosting-kosten
- Betere Core Web Vitals (ook een ranking factor)

**5. Toekomstbestendig**

- Nieuwe schermformaten? Tekst past zich aan
- Dark mode? CSS regelt het
- Responsive design zonder extra werk

### Rekensommetje

Een gemiddelde header-afbeelding: ~200KB
Dezelfde tekst in HTML + CSS: ~2KB

Bij 10.000 bezoekers per maand bespaar je:

- 2GB aan dataverkeer
- Snellere laadtijd (minder bounces)
- Betere conversie

En dat is alleen je header.

## Implementatie in jouw organisatie

### Voor product owners

**Wat moet je checken:**

1. Kijk naar je belangrijkste landingspaginas
2. Welke tekst staat er in afbeeldingen?
3. Kunnen bezoekers die informatie lezen als ze de tekst vergroten?

**Actie:**

- Maak een lijst van alle tekst-als-afbeelding op je site
- Prioriteer: waar staat je belangrijkste content?
- Bespreek met je designer en developer hoe je dit kunt oplossen

### Voor designers

**Nieuwe workflow:**

1. Ontwerp in Figma/Sketch zoals gewoonlijk
2. Maar lever géén afbeeldingen aan voor tekst
3. Documenteer in plaats daarvan:
   - Lettertype en font-size
   - Kleuren (in HEX of RGB)
   - Effecten (shadows, gradients, etc.)
   - Spacing en layout

**Tools die helpen:**

- Figma Inspect: geeft direct CSS-code
- Zeplin: automatische style guides
- Chrome DevTools: test of je CSS werkt

### Voor developers

**Checklist bij implementatie:**

- [ ] Alle tekst is echte HTML-tekst
- [ ] Webfonts zijn geïmplementeerd met fallbacks
- [ ] CSS-effecten zijn getest in verschillende browsers
- [ ] Tekst blijft leesbaar bij 200% zoom
- [ ] Dark mode werkt (als je dat ondersteunt)
- [ ] Focus-stijlen zijn zichtbaar

**Bonus tip:** Gebruik CSS Custom Properties voor je typografie:

```css
:root {
  --font-heading: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --heading-1: 3rem;
  --heading-2: 2rem;
  --body: 1rem;
}

h1 {
  font-family: var(--font-heading);
  font-size: var(--heading-1);
}
```

Zo kun je in één keer je hele typografie aanpassen als dat nodig is.

## Veelgestelde vragen

**Q: Maar SVG-tekst dan? Dat schaalt toch goed?**

A: SVG schaalt inderdaad zonder kwaliteitsverlies. De gebruiker kan het lettertype, de regelafstand of de kleuren niet aanpassen via browserinstellingen. Gebruik dus gewone tekst in het `<text>` element met CSS.

**Q: Mag ik tekst als afbeelding gebruiken als ik een goede alt-tekst toevoeg?**

A: Een goede alt-tekst is verplicht onder SC 1.1.1, maar lost het probleem van 1.4.5 niet op. Het punt is dat gebruikers de tekst moeten kunnen aanpassen aan hun leesbehoeften — en dat kan niet met een afbeelding, ongeacht de alt-tekst.

**Q: We gebruiken een heel speciaal lettertype dat niet als webfont beschikbaar is. Wat nu?**

A: Als het lettertype echt niet als webfont te gebruiken is én de specifieke visuele presentatie essentieel is voor de boodschap, dan valt het onder de uitzondering. Maar wees eerlijk: de meeste lettertypes zijn tegenwoordig als webfont beschikbaar of hebben een goed alternatief. "Het staat mooier" is geen geldige reden.

**Q: Hoe zit het met social media afbeeldingen die we op onze site tonen?**

A: Als je een social media card of Instagram-post als afbeelding op je site plaatst, zorg dan dat de essentiële tekstinformatie ook als echte tekst beschikbaar is — bijvoorbeeld als bijschrift of in de omringende content.

## Samenvatting

SC 1.4.5 is simpel: als je tekst met HTML en CSS kunt weergeven, doe dat dan. Gebruik geen afbeeldingen van tekst, tenzij de visuele presentatie echt niet met code na te bootsen is.

Het gaat niet om schermlezers of alt-teksten (dat is SC 1.1.1). Het gaat om mensen die tekst willen aanpassen: groter, ander lettertype, meer contrast, meer regelafstand. Dat kan alleen als tekst écht tekst is.

En het mooie is: echte tekst is ook beter voor SEO, sneller, makkelijker te onderhouden, en goedkoper. Win-win-win.

## Hulp nodig?

Wil je weten of jouw website voldoet aan WCAG 1.4.5 en andere toegankelijkheidscriteria? Bij Proper Access toetsen we niet alleen, we helpen je ook met concrete oplossingen. Van CSS-voorbeelden tot implementatieadvies — zodat je team direct aan de slag kan.

---

_Julia Tol is oprichter van Proper Access en helpt organisaties bij het realiseren van digitale toegankelijkheid. Niet met dikke rapporten, maar met concrete oplossingen. Meer weten? Neem gerust contact op via [contact](https://properaccess.nl/contact)._
