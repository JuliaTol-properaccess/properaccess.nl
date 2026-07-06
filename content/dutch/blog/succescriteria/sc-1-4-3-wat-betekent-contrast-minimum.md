---
title: 'SC 1.4.3 - Wat betekent "Contrast (minimum)"?'
date: 2025-05-18
categories:
  - "wcag-uitgelegd"
tags:
  - "1-4-3"
  - "kleur"
description: "WCAG 1.4.3 vraagt minimaal 4,5:1 contrast tussen tekst en achtergrond. Lees wat de regels zijn, welke fouten wij het vaakst zien en test je kleuren met onze gratis tools."
keywords:
  - kleurcontrast WCAG
  - WCAG SC 1.4.3
  - contrastverhouding 4,5:1
  - tekst contrast toegankelijkheid
  - webtoegankelijkheid contrast
  - kleurcontrast checker
aliases:
  - /sc-1-4-3-wat-betekent-contrast-minimum/
---

Lichtgrijze tekst op een witte achtergrond. Het oogt rustig en modern, maar met een beetje zon op je scherm is er niets meer van te lezen. Voor bezoekers die minder goed zien is dat niet af en toe zo, maar altijd. Daarom zegt WCAG: **tekst moet genoeg contrast hebben met de achtergrond**.

Dit heet **1.4.3 Contrast (minimum)**.

## Wat zegt het criterium?

[WCAG-succescriterium 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) vraagt dat tekst en achtergrond voldoende in kleur en helderheid verschillen. Dat verschil is meetbaar en heet de contrastverhouding. Er gelden twee grenzen:

- **Normale tekst** heeft een contrastverhouding van minimaal **4,5:1** nodig.
- **Grote tekst** mag iets minder: minimaal **3:1**. Grote tekst is tekst vanaf 24 pixels, of vanaf ongeveer 18,5 pixels als de tekst vet is.

Dit geldt voor alle tekst die informatie overbrengt: lopende tekst, koppen, knopteksten, links, tekst in invoervelden, tekst in tabellen en tekst in afbeeldingen zoals grafieken en schema's. En het geldt in elke stand: ook bij hover, bij focus en in een opengeklapt menu moet het contrast voldoende blijven.

## Waarom is dit belangrijk?

- Mensen met een visuele beperking, zoals staar of slechtziendheid, kunnen tekst met weinig contrast niet of nauwelijks ontcijferen.
- Naarmate mensen ouder worden, nemen ogen minder contrast waar. Wat voor een ontwerper van 30 prima leesbaar is, is voor een bezoeker van 70 een grijze waas.
- Iedereen heeft er last van in de praktijk: een telefoon in de zon, een goedkoop scherm, een beamer in een lichte vergaderruimte.

Voldoende contrast is een van de eisen met de grootste impact op je hele website: het raakt letterlijk elke pagina.

## Hoe werkt zo'n contrastverhouding?

De contrastverhouding loopt van 1:1 tot 21:1. Wit op wit is 1:1, zwart op wit is 21:1. Een paar voorbeelden:

{{< contrast-voorbeeld voorgrond="#999999" achtergrond="#FFFFFF" >}}
Lichtgrijs #999999 op wit: **2,85:1**. Onvoldoende, ook voor grote tekst.
{{< /contrast-voorbeeld >}}

{{< contrast-voorbeeld voorgrond="#767676" achtergrond="#FFFFFF" >}}
Grijs #767676 op wit: **4,54:1**. Dit is ongeveer het lichtste grijs dat op wit nog voldoet voor normale tekst.
{{< /contrast-voorbeeld >}}

{{< contrast-voorbeeld voorgrond="#FFFFFF" achtergrond="#FFA500" >}}
Wit op oranje #FFA500: **1,97:1**. Ver onvoldoende, hoe groot je de tekst ook maakt.
{{< /contrast-voorbeeld >}}

{{< contrast-voorbeeld voorgrond="#1F2937" achtergrond="#FFFFFF" >}}
Donkerblauw #1F2937 op wit: **14,68:1**. Ruim voldoende.
{{< /contrast-voorbeeld >}}

Je hoeft dit niet zelf uit te rekenen. Vul twee kleuren in onze gratis [kleurcontrast checker](/tools/kleurcontrast-checker/) in en je ziet direct de contrastverhouding, en of de combinatie voldoet aan niveau AA en AAA.

## Wat is niet verplicht?

- **Decoratieve tekst** hoeft niet te voldoen. Bijvoorbeeld een woord in een achtergrondafbeelding dat geen informatie overbrengt.
- **Logo's** hoeven niet aangepast te worden. Ook een merklogo met weinig contrast is toegestaan.
- **Tekst die toevallig in een foto staat**, zoals een straatnaambord op een sfeerfoto, telt niet mee.
- **Uitgeschakelde knoppen en velden** vallen buiten de eis. Een grijze, niet-klikbare knop mag dus flets zijn.
- **Grafische elementen zonder tekst**, zoals iconen en randen van invoervelden, vallen niet onder dit criterium maar onder [SC 1.4.11 Contrast van niet-tekstuele content](/blog/sc-1-4-11-wat-betekent-contrast-ui/). Daar geldt een grens van 3:1.

## Veelgemaakte fouten

Bij onze audits gaat het bij dit succescriterium meestal mis op een van deze punten:

- **Lichtgrijze tekst op een witte achtergrond.** De klassieker, vooral bij datums, bijschriften en meta-informatie. Lees ook ons praktijkartikel over [lichtgrijze tekst op een witte achtergrond](/blog/sc-1-4-3-lichtgrijze-tekst-op-een-witte-achtergrond/).
- **Placeholdertekst in invoervelden.** De standaard placeholderkleur van browsers voldoet niet, en veel ontwerpen maken hem nog lichter. Meer daarover in [placeholdertekst die niemand kan lezen](/blog/sc-1-4-3-placeholdertekst-die-niemand-kan-lezen/).
- **Witte tekst op oranje, geel, lichtgroen of pastelkleuren.** Deze combinaties halen zelfs de grens voor grote tekst zelden.
- **Knopteksten die amper afsteken tegen de knopkleur.** Juist de knop waarmee de bezoeker iets moet doen.
- **Witte tekst op een foto.** Zonder donkere laag tussen foto en tekst wisselt het contrast per plek op de foto. Lees hoe je dit oplost in [witte tekst op een foto](/blog/sc-1-4-3-witte-tekst-op-een-foto/).
- **Contrast dat wegzakt bij hover.** De knop of link wordt lichter zodra je eroverheen beweegt, en zakt dan onder de grens.
- **Links die alleen door kleur herkenbaar zijn en ook nog te licht.** Dan gaat het naast dit criterium ook mis op [SC 1.4.1 Gebruik van kleur](/blog/sc-1-4-1-wat-betekent-gebruik-van-kleur/).

## Zo test je het contrast

### Eén kleurencombinatie: de kleurcontrast checker

Wil je één combinatie controleren, bijvoorbeeld je linkkleur op wit? Gebruik onze gratis [kleurcontrast checker](/tools/kleurcontrast-checker/). Vul de tekstkleur en de achtergrondkleur in en je ziet direct de contrastverhouding, met het resultaat voor normale tekst, grote tekst en UI-componenten op niveau AA en AAA.

Weet je niet welke kleurcodes je pagina gebruikt? In ons instructieartikel [hoe test ik kleurcontrast](/blog/hoe-test-ik-kleurcontrast/) laten we stap voor stap zien hoe je kleuren van je scherm opzoekt en test.

### De hele pagina in één keer: WCAG Radar

Wil je niet kleur voor kleur testen maar een complete pagina? Gebruik onze gratis [WCAG Radar](/tools/wcag-radar/). Je sleept de knop één keer naar je bladwijzerbalk en klikt hem daarna op elke pagina aan. De radar meet het contrast van alle tekst tegen de achtergrond, markeert wat onvoldoende is en toont de gemeten verhouding naast de eis die geldt.

De radar werkt op elke website en ook op localhost. Daarmee is hij net zo handig voor ontwikkelaars: draai hem tijdens het bouwen en je ziet meteen waar een kleur uit het ontwerp te licht uitpakt. Alles draait in je eigen browser, er wordt niets verstuurd of opgeslagen.

### Wie doet wat?

- **Webredacteur:** kies in je editor geen lichte tekstkleuren en zet geen tekst over een foto zonder donkere laag. Test je pagina's met de radar.
- **Designer:** leg per kleurencombinatie vast waar hij wel en niet gebruikt mag worden. Controleer elke combinatie met de kleurcontrast checker voordat het ontwerp naar de bouw gaat.
- **Ontwikkelaar:** neem de goedgekeurde kleuren over als variabelen en gebruik nergens een eigen, lichtere variant. Style ook de placeholder en de hoverstand bewust, want juist daar zakt het contrast vaak weg. Draai de radar op localhost voordat je oplevert.

```css
:root {
  --kleur-tekst: #1f2937;         /* 14,68:1 op wit */
  --kleur-tekst-subtiel: #767676; /* 4,54:1 op wit, net voldoende */
}

::placeholder {
  color: var(--kleur-tekst-subtiel);
  opacity: 1; /* Firefox maakt placeholders anders extra transparant */
}
```

## Veelgestelde vragen

### Geldt dit criterium ook voor placeholdertekst?

Ja. Een placeholder brengt informatie over en moet dus minimaal 4,5:1 contrast hebben met de achtergrond van het veld. De standaardkleur van browsers haalt dat niet. Overigens is een placeholder nooit een vervanging voor een zichtbaar label.

### Onze huisstijlkleur voldoet niet, wat nu?

Gebruik de huisstijlkleur voor grote vlakken en accenten, en een donkerdere variant voor tekst en links. Vaak is een klein verschil al genoeg om boven de 4,5:1 uit te komen, terwijl de kleur nog steeds als jouw merk voelt. We schreven er een apart artikel over: [huisstijlkleuren en contrastproblemen](/blog/huisstijlkleuren-software-contrastproblemen-wcag/).

### Moet het contrast ook kloppen bij hover en focus?

Ja. Het criterium geldt voor elke stand waarin tekst zichtbaar is. Een link die bij hover van donkerblauw naar lichtblauw springt, moet ook in die lichtblauwe stand minimaal 4,5:1 halen.

### Wat is het verschil met SC 1.4.11?

SC 1.4.3 gaat over tekst. [SC 1.4.11](/blog/sc-1-4-11-wat-betekent-contrast-ui/) gaat over niet-tekstuele onderdelen die je nodig hebt om de pagina te begrijpen of te bedienen: iconen, randen van invoervelden, focusranden en delen van grafieken. Daar geldt een grens van 3:1.

### Is 4,5:1 genoeg, of moet ik naar 7:1?

Voor niveau AA, de norm in Nederlandse en Europese wetgeving, is 4,5:1 genoeg voor normale tekst. De grens van 7:1 hoort bij niveau AAA en is niet verplicht. Meer contrast is wel altijd prettiger om te lezen, dus zit je ruim boven de grens, dan is dat winst voor iedereen.

## Samenvatting

WCAG-succescriterium 1.4.3 vraagt meetbaar genoeg contrast tussen tekst en achtergrond, zodat teksten leesbaar zijn voor iedereen.

De belangrijkste punten:

- Normale tekst: minimaal 4,5:1. Grote tekst: minimaal 3:1.
- De eis geldt voor alle informatieve tekst, ook op knoppen, in invoervelden en in afbeeldingen, en in elke stand.
- Logo's, decoratieve tekst en uitgeschakelde knoppen zijn uitgezonderd.
- Test één combinatie met de [kleurcontrast checker](/tools/kleurcontrast-checker/).
- Test een complete pagina met de [WCAG Radar](/tools/wcag-radar/), ook op localhost.

**Wil je zeker weten dat je hele website voldoet?** Vraag dan een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan. We testen elk sjabloon en laten per bevinding zien welke kleuren je moet aanpassen en waarom.
