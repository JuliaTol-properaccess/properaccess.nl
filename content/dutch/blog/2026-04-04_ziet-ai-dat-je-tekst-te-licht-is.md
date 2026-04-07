---
title: "Ziet AI dat je tekst te licht is?"
date: 2026-04-05
slug: "ziet-ai-dat-je-tekst-te-licht-is"
categories:
  - "ai-en-wcag"
tags:
  - "AI"
  - "wcag"
  - "contrast"
  - "AI vision"
description: "Ik gaf Claude een screenshot van een echte website met contrastproblemen. Kan AI vision zien dat gekleurde koppen en lichtgrijze tekst op wit onleesbaar zijn? Dit zijn de resultaten."
keywords:
  - AI toegankelijkheid testen
  - contrast WCAG
  - AI vision toegankelijkheid
  - WCAG 1.4.3
  - kleurcontrast testen
serie: "AI en Toegankelijkheidstesten"
wcag: "1.4.3 Contrast (minimum)"
test_datum: "2026-04-04"
image: "/images/blog/ai-serie-contrast-nl.png"
---

{{< case-section >}}

## Ziet AI dat je tekst te licht is?

Groen op wit. Oranje op wit. Lichtgrijs op wit. Het ziet er fris uit. Kleurrijk. Modern.

Maar voor iemand met verminderd gezichtsvermogen verdwijnt die tekst in de achtergrond. En nee, dat zijn niet alleen ouderen. Ook bij een scherm in de zon of een drukke dag is die lichte tekst het verschil tussen lezen en opgeven.

Dit is het meest voorkomende contrastprobleem dat ik tegenkom bij audits (WCAG 1.4.3). Bijna elke website heeft het ergens. Vaak precies in de elementen die het design "fris" en "modern" maken.

In de vorige test gaf ik AI een stuk code. Nu doe ik iets anders: ik geef AI een screenshot van een echte website. Geen code, geen HTML, geen CSS. Alleen een plaatje. Kan AI vision zien wat er mis is?

{{< /case-section >}}

{{< case-section >}}

## De test

Ik pakte een screenshot van de Divi-website (een populaire WordPress-themebuilder). Het laat vier kolommen zien op een witte achtergrond:

- **"WEB DESIGN AGENCIES"** in paars
- **"WEB DESIGN FREELANCERS"** in blauw
- **"SMALL BUSINESS OWNERS"** in groen
- **"ONLINE STORE OWNERS"** in oranje

Onder elke kop staat bodytekst in lichtgrijs. Erboven staan decoratieve illustraties in dezelfde kleuren.

![Screenshot van de Divi-website met vier kolommen: gekleurde koppen en lichtgrijze bodytekst op een witte achtergrond](/images/blog/contrast_divi.png)

Ik gaf deze screenshot aan Claude met de vraag: _"Welke contrastproblemen zie je op deze webpagina?"_

Geen hints. Geen kleurnummers. Alleen het plaatje.

{{< /case-section >}}

{{< case-section >}}

## Wat AI vond

Claude identificeerde drie categorieën contrastproblemen.

### 1. Groene kop: faalt

> "Groen is de meest problematische kleur voor contrast op wit. Een typisch groen zoals #4CAF50 haalt maar 2,5 tot 3,2:1 tegen wit."

**Score: Niet gevonden.** Ik meet met mijn tools de groene kleur die in de kop is gebruikt als <span style="display:inline-block;width:0.9em;height:0.9em;background:#2CD991;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #2CD991 op een <span style="display:inline-block;width:0.9em;height:0.9em;background:#F0FBF5;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #F0FBF5. Mijn contrastwaarde is 1,7:1. Dit is te groot verschil met 2,5 tot 3,2:1 van Claude. Overigens is de marge van 0,5 tussen 2,5:1 en 3,0:1 gewoon te groot om te accepteren. WCAG heeft het over contrast die met 2 cijfers achter de komma wordt gemeten, bijvoorbeeld 2,99:1.

### 2. Oranje kop: faalt

> "Oranje is ook een problematische kleur. Een typisch oranje zoals #FF9800 haalt ongeveer 2,9:1 tegen wit. Zelfs een donkerder oranje zoals #F57C00 haalt maar 3,6:1."

**Score: Niet gevonden.** Weer mis. Claude meet een andere tint oranje en ziet niet dat elk blokje op de screenshot een subtiele achtergrondkleur heeft. Mijn meting is <span style="display:inline-block;width:0.9em;height:0.9em;background:#FC7519;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #FC7519 op <span style="display:inline-block;width:0.9em;height:0.9em;background:#FDF4EF;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #FDF4EF met resultaat van 2,5:1.

### 3. Bodytekst in lichtgrijs: faalt

> "Een typisch lichtgrijs in dit soort ontwerpen is #888888 tot #AAAAAA. Dat geeft een ratio van 2,3 tot 3,5:1. Dat faalt voor de vereiste 4,5:1."

**Score: Niet gevonden.** Claude ziet lichtgrijze tekst op deze screenshot. Ik zie broodtekst in donkere tinten die allemaal voldoen aan de minimale contrasteisen.

### 4. Paarse kop: twijfelgeval

> "Een typisch Divi-paars haalt ongeveer 4,5-5:1 tegen wit. Dat is op de grens."

**Score: Gevonden.** Claude twijfelt en zegt terecht dat het geverifieerd moet worden met een kleurmeter. Dat is een eerlijk antwoord. Mijn meting is <span style="display:inline-block;width:0.9em;height:0.9em;background:#9534EC;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #9534EC op <span style="display:inline-block;width:0.9em;height:0.9em;background:#F6F0FE;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #F6F0FE met een kleurcontrast van 4,7:1. Ik vind het niet acceptabel dat mijn software ergens over twijfelt.

### 5. Blauwe kop: voldoet waarschijnlijk

> "Een middenblauw haalt doorgaans voldoende contrast tegen wit."

**Score: Gevonden.** Mijn meting is <span style="display:inline-block;width:0.9em;height:0.9em;background:#2372FF;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #2372FF op <span style="display:inline-block;width:0.9em;height:0.9em;background:#F4F6FF;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #F4F6FF met resultaat van 4,0:1.

### 6. Decoratieve illustraties: terecht genegeerd

Claude meldt correct dat de illustraties decoratief zijn en niet onder WCAG 1.4.3 vallen. Goed dat het niet onnodig alarm slaat.

{{< /case-section >}}

{{< case-section >}}

## De scorekaart

| Element                  | AI-oordeel                 | Mijn meting                    | Score             |
| ------------------------ | -------------------------- | ------------------------------ | ----------------- |
| Groene kop               | "Faalt, ratio ~2,5-3,2:1"  | <span style="display:inline-block;width:0.9em;height:0.9em;background:#2CD991;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #2CD991 op <span style="display:inline-block;width:0.9em;height:0.9em;background:#F0FBF5;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #F0FBF5 = 1,7:1    | Niet gevonden     |
| Oranje kop               | "Faalt, ratio ~2,9-3,6:1"  | <span style="display:inline-block;width:0.9em;height:0.9em;background:#FC7519;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #FC7519 op <span style="display:inline-block;width:0.9em;height:0.9em;background:#FDF4EF;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #FDF4EF = 2,5:1    | Niet gevonden     |
| Bodytekst                | "Faalt, ratio ~2,3-3,5:1"  | Donkere tinten, voldoet        | Vals alarm        |
| Paarse kop               | "Op de grens, verifieer"   | <span style="display:inline-block;width:0.9em;height:0.9em;background:#9534EC;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #9534EC op <span style="display:inline-block;width:0.9em;height:0.9em;background:#F6F0FE;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #F6F0FE = 4,7:1    | Gevonden          |
| Blauwe kop               | "Voldoet waarschijnlijk"   | <span style="display:inline-block;width:0.9em;height:0.9em;background:#2372FF;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #2372FF op <span style="display:inline-block;width:0.9em;height:0.9em;background:#F4F6FF;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #F4F6FF = 4,0:1    | Gevonden          |
| Decoratieve illustraties | "Niet van toepassing"      |                                | Correct genegeerd |

**2 van 6 correct, 2 met verkeerde ratio's, 1 vals alarm, 1 correct genegeerd.**

{{< /case-section >}}

{{< case-section >}}

## Wat opvalt

Claude interpreteert de kleuren uit mijn screenshot met andere resultaten dan mijn handmatige test.

Het lijkt erop dat Claude niet goed kan meten. Het geeft geen exacte ratio's, alleen schattingen op basis van "typische" kleurwaarden. Het zegt "een typisch groen haalt 2,5-3,2:1", maar het weet niet welk groen Divi precies gebruikt. Voor een audit heb je een kleurmeter nodig.

Dit is opvallend. Gisteren moest ik een iets installeren op mijn iPhone en wist op een gegeven moment niet welke optie ik moest kiezen. Ik heb toen een screenshot gemaakt en aan Claude gegeven. Het wist meteen welke optie ik moest kiezen. In dit soort gevallen is Claude enorm behulpzaam. Kennelijk niet in het meten van contrast.

## Waar AI vision tekortschiet

**Exacte ratio's.** Claude schat, maar een handmatige test geeft je het precieze getal. Voor een rapport heb je die exacte getallen nodig.

**Hover-states, focus-states, dark mode.** Een screenshot is een momentopname. Wat is het contrast als je met de muis over een kop gaat? In dark mode? Dat kan Claude niet beoordelen.

**Tekst op foto's en gradients.** Als tekst over een foto of gradient staat, varieert het contrast per pixel. Claude kan een indruk geven, maar geen betrouwbare meting.

**Grote tekst vs. gewone tekst.** Claude noemt correct dat grote tekst (18pt of 14pt bold) een lagere drempel heeft (3:1 in plaats van 4,5:1). Maar het kan niet beoordelen hoe groot de tekst in pixels is op basis van een screenshot. Dat maakt het verschil tussen "faalt" en "voldoet" bij de oranje kop.

{{< /case-section >}}

{{< case-section >}}

## AI vision vs. geautomatiseerde tools

|                                       | Geautomatiseerde tool (axe)       | AI vision (Claude)             |
| ------------------------------------- | --------------------------------- | ------------------------------ |
| Exacte ratio                          | Ja, op de komma                   | Nee, schatting                 |
| Weet welke kleuren problematisch zijn | Nee, berekent alleen              | Ja, kent de patronen           |
| Tekst op foto's                       | Nee, kan het niet meten           | Ja, kan het visueel beoordelen |
| Hover/focus states                    | Nee, tenzij je die state triggert | Nee                            |
| Uitleg waarom het fout is             | Minimaal                          | Ja, met context                |
| Snelheid                              | Milliseconden                     | Seconden                       |
| Kosten                                | Gratis                            | API-kosten per screenshot      |

Voor standaard contrastchecks is een geautomatiseerde tool sneller, gratis en exacter. Maar AI vision begrijpt de designcontext. Het weet dat "fris groen op wit" een recept is voor contrastproblemen, en kan dat uitleggen op een manier die een designer begrijpt.

{{< /case-section >}}

{{< case-section >}}

## De vuistregel

Elke grijstint lichter dan <span style="display:inline-block;width:0.9em;height:0.9em;background:#767676;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #767676 op wit voldoet niet. Onthoud die ene kleurcode.

En voor kleuren: test altijd groen, oranje en lichtblauw op wit. Die drie vallen het vaakst door de mand.

| Kleur op wit     | Ratio | Voldoet?                 |
| ---------------- | ----- | ------------------------ |
| <span style="display:inline-block;width:0.9em;height:0.9em;background:#4CAF50;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #4CAF50 (groen)  | 2,9:1 | Nee                      |
| <span style="display:inline-block;width:0.9em;height:0.9em;background:#FF9800;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #FF9800 (oranje) | 2,9:1 | Nee                      |
| <span style="display:inline-block;width:0.9em;height:0.9em;background:#2196F3;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #2196F3 (blauw)  | 3,3:1 | Nee (gewone tekst)       |
| <span style="display:inline-block;width:0.9em;height:0.9em;background:#7B1FA2;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #7B1FA2 (paars)  | 6,6:1 | Ja                       |
| <span style="display:inline-block;width:0.9em;height:0.9em;background:#999999;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #999999 (grijs)  | 2,8:1 | Nee                      |
| <span style="display:inline-block;width:0.9em;height:0.9em;background:#767676;border:1px solid #ccc;border-radius:2px;vertical-align:middle"></span> #767676 (grijs)  | 4,5:1 | Ja (precies op de grens) |

Wil je zelf checken of je kleuren voldoen? Gebruik onze [gratis kleurcontrast checker](/tools/kleurcontrast-checker/).

Werkt je organisatie veel met PDF's? Onze [PDF toegankelijkheidscheck](/tools/pdf-checker/) controleert op tags, taal, koppen en meer. Kleurcontrast in PDF's controleren we bewust niet, omdat dat technisch nog niet betrouwbaar kan. We geven liever geen resultaat dan een vals positief.

{{< /case-section >}}

{{< case-section >}}

## Wat ik hiervan leer

AI vision herkent contrastproblemen niet op een echte website. Het weet welke kleurcombinaties problematisch zijn, begrijpt de WCAG-regels, en kan nuanceren over randgevallen. Het negeert terecht decoratieve elementen.

Ik kan me voorstellen dat je je volledige CSS aan Claude kan geven om problematische kleuren te noemen. Maar, een kleur is nooit op zichtzelf problematisch. Het gaat altijd om een combinatie van twee kleuren. Het wordt een stuk lastiger en duurder om alle combinaties op alle pagina's te laten testen.

Maar voor een audit heb je exacte ratio's nodig. AI vision is een aanvulling, geen vervanging. Het is het sterkst als eerste screening: laat AI een screenshot beoordelen en gebruik daarna een tool voor de exacte getallen.

En net als bij de vorige test geldt: AI ziet een momentopname. Het ziet niet wat er gebeurt bij hover, in dark mode, of bij 400% zoom.

---

_Dit is een test uit de serie "AI en Toegankelijkheidstesten". Elke test onderzoekt of AI een specifiek toegankelijkheidsprobleem kan detecteren. Wil je weten hoe toegankelijk jouw website is? Laat het door een mens testen voor het beste resultaat. [Neem contact met ons op](/contact/)._

{{< /case-section >}}
