# Les: Alt-teksten (webredactie)

> **Status:** concept, niet live. Hoofdstuk 2 van de opleiding voor webredactie, volgens de opzet in [academy-webredactie-opzet.md](academy-webredactie-opzet.md). Gaat naar `content/dutch/academy-webredactie/` zodra de templates twee opleidingen aankunnen.

Concept van 19 november 2026. Zelfde opbouw en toon als de proefles [Koppen](academy-webredactie-koppen-concept.md).

---

## Wat een schermlezer met je afbeelding doet

Een schermlezer kan een foto niet bekijken. Hij leest voor wat jij in het veld voor de alternatieve tekst hebt getypt. Dat veld heet in veel systemen "alt-tekst", "alternatieve tekst" of "beschrijving".

Is dat veld leeg, dan hangt het van je systeem af wat er gebeurt. Soms slaat de schermlezer de afbeelding over zonder iets te zeggen. Soms leest hij de bestandsnaam voor, bijvoorbeeld "IMG underscore 4032 punt jpg". In beide gevallen mist de bezoeker wat de afbeelding vertelt.

## Wat jij in handen hebt, en wat niet

Jij gaat over de afbeeldingen die je zelf plaatst: in de tekst van een pagina, in een nieuwsbericht, als uitgelichte afbeelding bij een artikel, in een carrousel die je zelf vult.

Het logo, de iconen in het menu en de knoppen met een icoon zitten in het ontwerp van de site. Die vallen onder het werk van de webdevelopers. Zie je daar een fout, meld het dan.

## Eerst de vraag: informatief of decoratief?

Bij elke afbeelding beslis je eerst wat hij doet. Stel jezelf deze vraag:

**Verliest de pagina informatie als je deze afbeelding weghaalt?**

- **Ja:** de afbeelding is informatief. Hij krijgt een alt-tekst die zegt wat de afbeelding vertelt.
- **Nee:** de afbeelding is decoratief. Hij krijgt geen alt-tekst, zodat de schermlezer hem overslaat.

Een foto van de wethouder bij een nieuwsbericht over haar bezoek is informatief. Een sfeerfoto van een kop koffie boven een artikel over openingstijden is meestal decoratief. Dezelfde foto kan op de ene pagina informatief zijn en op de andere decoratief. Je beslist het dus per plek.

<div class="academy-tip">
<p class="academy-tip__title">Hoe je "decoratief" aangeeft</p>

Dat verschilt per systeem. Sommige hebben een vinkje "Decoratieve afbeelding". In andere laat je het veld leeg. Vraag je developers wat jouw systeem doet met een leeg veld. Leest de schermlezer dan de bestandsnaam voor, dan heb je dat vinkje nodig, of een aanpassing in het systeem.

</div>

## Zo schrijf je een goede alt-tekst

### Beschrijf wat de afbeelding zegt, niet hoe hij eruitziet

Vraag je af waarom de afbeelding op deze pagina staat. Dat schrijf je op.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: foto bij een nieuwsbericht over een nieuwe fietsbrug</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

Je typt in het veld: "Foto".

De schermlezer meldt dat er een afbeelding staat en leest "Foto" voor. De bezoeker weet nu dat er een foto staat, maar niet wat erop staat.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

Je typt in het veld: "De nieuwe fietsbrug over de Vaart, met fietsers in beide richtingen".

De schermlezer leest dat voor, en de bezoeker weet wat de foto laat zien.

</div>
</div>

### Begin niet met "afbeelding van"

De schermlezer zegt zelf al dat het een afbeelding is. "Afbeelding van een fietsbrug" wordt dan "afbeelding, afbeelding van een fietsbrug". Begin direct met wat er te zien is.

### Geen bestandsnamen en geen losse tekens

"fietsbrug_def_2026.jpg", "____" of "#" leest een schermlezer letterlijk voor. Typ gewone woorden.

### Herhaal niet wat er al staat

Staat er naast de foto een tekst die al zegt wat erop staat, dan hoort de bezoeker het met een alt-tekst twee keer. Maak de afbeelding dan decoratief.

Bij een bijschrift onder de foto is dat ook de beste keuze. Herhaalt de alt-tekst het bijschrift, dan keuren wij dat niet af, maar de bezoeker hoort het wel twee keer.

### Tekst in een afbeelding hoort in de alt-tekst

Een banner met "Inschrijven kan tot 1 maart" is een afbeelding met informatie. Die tekst moet volledig in de alt-tekst staan.

Beter is het om zulke tekst niet in een afbeelding te zetten, maar als gewone tekst op de pagina. Gewone tekst kan iemand vergroten, in een ander lettertype zetten of laten voorlezen. Tekst in een afbeelding niet. Daar gaat ook een apart succescriterium over: 1.4.5 Afbeeldingen van tekst.

### Een grafiek heeft meer nodig dan één zin

Bij een grafiek, een kaart of een infographic past de informatie niet in een korte alt-tekst. Geef dan twee dingen:

- een korte alt-tekst die zegt wat het is, bijvoorbeeld "Grafiek van het aantal aanvragen per maand in 2026"
- de inhoud in gewone tekst, direct onder de afbeelding of op een pagina waar je naar linkt

Jij weet het beste wat je lezer moet weten. Soms zijn dat alle getallen, en zet je ze in een tabel. Soms is het alleen de trend: "Het aantal aanvragen steeg van maart tot juni en daalde daarna weer."

### Een afbeelding als link

Is de afbeelding zelf een link, en staat er geen tekst bij? Beschrijf dan niet de afbeelding, maar waar de link heen gaat. Een foto van een flyer die naar het aanmeldformulier linkt, krijgt de alt-tekst "Aanmelden voor de informatieavond".

## Wat geen eis is

- **Een maximale lengte.** Er staat nergens een aantal tekens. Voor de bezoeker is een korte alt-tekst wel prettiger om te horen. Past het niet in een paar zinnen, gebruik dan de aanpak voor een grafiek.
- **Elke afbeelding een alt-tekst.** Een decoratieve afbeelding hoort er juist geen te hebben.

## De fouten die wij het vaakst tegenkomen

Dit zijn bevindingen uit onze rapporten, in de woorden die je in het rapport terugziet:

1. **Informatieve afbeelding wordt zonder melding overgeslagen.** Een afbeelding met informatie is als decoratief gemarkeerd. Impact Matig.
2. **Alternatieve tekst van informatieve afbeelding is niet betekenisvol.** De alt-tekst is er, maar zegt niet wat de afbeelding vertelt.
3. **Alternatieve tekst zorgt voor herhaling van tekst.** Alt-tekst en bijschrift zeggen hetzelfde. Impact Matig.
4. **Alt-tekst bevat overbodige tekens**, zoals underscores of een bestandsnaam.
5. **Tekst die op afbeeldingen te zien is, staat niet in de alternatieve tekst.** Komt veel voor bij banners en carrousels.
6. **Beschrijving van complexe afbeelding ontbreekt of is onvolledig.** Een grafiek met alleen "grafiek" als alt-tekst. Impact Matig.

<div class="academy-tip">
<p class="academy-tip__title">Ook in PDF's</p>

Een ingescand document, zoals een ondertekende brief, is voor een schermlezer één grote afbeelding zonder tekst. Daar komt het hoofdstuk over PDF's op terug.

</div>

## Het succescriterium

**1.1.1 Niet-tekstuele content**, niveau A. De Engelse tekst van WCAG 2.2:

> All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.

"Equivalent purpose" is de kern: de alt-tekst doet hetzelfde werk als de afbeelding. Een van de uitzonderingen in het criterium is decoratie. Die mag de schermlezer overslaan.

## Zelf nakijken zonder in de code te kijken

- Gebruik onze [WCAG Radar](/tools/wcag-radar/) en zet de optie "Afbeeldingen en alt-tekst" aan. Je ziet per afbeelding of er een alt-tekst is en wat erin staat.
- Lees de alt-teksten op een pagina achter elkaar, zonder naar de afbeeldingen te kijken. Begrijp je de pagina dan nog? Hoor je iets twee keer?
- Selecteer de tekst in een banner. Lukt dat niet, dan is het een afbeelding en moet de tekst in de alt-tekst.

---

## Quiz

Vijf vragen, geen code.

**Vraag 1.** Boven een artikel over de openingstijden van het zwembad staat een sfeerfoto van water. In de tekst staat alles over de openingstijden. Wat doe je met de foto?

- a. Alt-tekst "Foto van water"
- b. Alt-tekst "Openingstijden zwembad"
- c. De foto als decoratief markeren
- d. De bestandsnaam laten staan

Goed: c. De pagina verliest geen informatie als je de foto weghaalt. Een alt-tekst laat de bezoeker alleen iets horen wat niets toevoegt.

**Vraag 2.** Onder een foto staat het bijschrift "Burgemeester De Vries opent de nieuwe bibliotheek". Wat zet je in de alt-tekst?

- a. Hetzelfde als het bijschrift
- b. Niets: je markeert de foto als decoratief, want het bijschrift zegt het al
- c. "Afbeelding van de burgemeester"
- d. "Klik voor een grotere versie"

Goed: b. Anders hoort de bezoeker hetzelfde twee keer. Antwoord a is geen fout, maar wel minder prettig. Voegt de foto meer toe dan het bijschrift zegt, dan schrijf je alleen dat extra deel op.

**Vraag 3.** Een banner zegt "Inschrijven kan tot 1 maart". Welke oplossing is het beste?

- a. Alt-tekst "Banner"
- b. Alt-tekst "Inschrijven kan tot 1 maart"
- c. De tekst als gewone tekst op de pagina zetten
- d. De banner als decoratief markeren

Goed: c. Gewone tekst kan iedereen vergroten en laten voorlezen. Kan dat niet, dan is b de minimale oplossing: de hele tekst in de alt-tekst.

**Vraag 4.** Je plaatst een grafiek met het aantal bezoekers per maand. Wat doe je?

- a. Alt-tekst "Grafiek"
- b. Alle getallen in de alt-tekst zetten, ook als het er veertig zijn
- c. Een korte alt-tekst die zegt wat de grafiek is, en de informatie in gewone tekst eronder
- d. Niets, grafieken vallen buiten WCAG

Goed: c. Een korte alt-tekst zegt wat het is. De inhoud staat in tekst of een tabel, waar de bezoeker hem in zijn eigen tempo kan lezen.

**Vraag 5.** Het logo bovenaan elke pagina heeft geen alt-tekst. Wie lost dat op?

- a. De webredactie, in de mediabibliotheek
- b. De webdevelopers, want het logo zit in het ontwerp van de site
- c. Niemand, een logo is decoratief
- d. De auditor

Goed: b. Wat op elke pagina hetzelfde is, zit in het ontwerp. Meld het. Een logo is niet decoratief: het zegt van wie de site is, en is vaak ook een link naar de homepage.
