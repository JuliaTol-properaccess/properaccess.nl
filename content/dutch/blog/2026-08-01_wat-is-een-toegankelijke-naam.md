---
title: "Wat is een toegankelijke naam?"
date: 2026-08-01
slug: "wat-is-een-toegankelijke-naam"
translationKey: "toegankelijke-naam"
categories:
  - "wcag-uitgelegd"
tags:
  - "toegankelijke naam"
  - "accessible name"
  - "aria"
  - "webredactie"
  - "webdeveloper"
description: "De toegankelijke naam is de tekst die voorleessoftware bij een knop, link of veld uitspreekt. Wat hij moet zeggen, hoe een element eraan komt en hoe je hem zelf bekijkt."
keywords:
  - toegankelijke naam
  - accessible name
  - knop zonder naam
  - aria-label uitleg
  - naam rol waarde
  - toegankelijke naam controleren
---

Zet een schermlezer aan en beweeg naar een knop. Je hoort twee of drie dingen: "Voeg toe aan winkelmand, knop". Het woord "knop" is de rol. "Voeg toe aan winkelmand" is de toegankelijke naam.

Ontbreekt die naam, dan hoor je alleen "knop". Je weet dat er iets is, je weet niet wat het doet. En dat is precies wat wij bij audits het vaakst tegenkomen op de plek waar het het meeste kost: bij knoppen en links die de bezoeker nodig heeft om verder te komen.

Dit artikel gaat over die naam. Wat hij is, wat hij moet zeggen, en hoe een element eraan komt. Er staat een stuk in voor webredacteuren en een stuk voor ontwikkelaars, want jullie hebben er allebei invloed op, alleen op andere plekken.

## Wat is een toegankelijke naam precies?

De toegankelijke naam is het label dat hulpsoftware aan een element koppelt. Voorleessoftware spreekt hem uit, spraakbesturing luistert ernaar, en een brailleleesregel zet hem om.

Elk interactief onderdeel heeft er 3 dingen nodig, en de naam is er daar 1 van:

- **Rol**: wat voor onderdeel is het? Een knop, een link, een aankruisvakje.
- **Naam**: hoe heet het? "Zoeken", "Jaarverslag 2026", "Ik ga akkoord".
- **Waarde of status**: in welke stand staat het? Aangevinkt, uitgeklapt, halverwege.

Die 3 samen zijn succescriterium [4.1.2 Naam, rol, waarde](/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/). De naam is het deel waar redactie en ontwerp het meest over te zeggen hebben.

Belangrijk: de toegankelijke naam is niet hetzelfde als de zichtbare tekst. Meestal komt hij eruit voort, maar je kunt hem overschrijven. En daar gaat het geregeld mis, juist bij mensen die hun best doen.

## Welke onderdelen hebben een naam nodig?

- Alle knoppen, links en formuliervelden
- Informatieve afbeeldingen, via de alt-tekst
- Ingesloten kaders zoals een video of een kaart, via het title-attribuut
- Groepen keuzerondjes of aankruisvakjes, via een legenda
- Tabellen, via een bijschrift
- Landmarks zoals navigatieblokken, als je er meer dan 1 van hebt

Decoratieve afbeeldingen hebben juist géén naam nodig. Die krijgen een leeg alt-attribuut, zodat voorleessoftware ze overslaat.

## Hoe komt een element aan zijn naam?

De browser rekent de naam uit volgens een vaste volgorde. Vereenvoudigd ziet die er zo uit:

1. `aria-labelledby`, dat verwijst naar tekst die ergens anders op de pagina staat
2. `aria-label`, letterlijke tekst op het element zelf
3. De eigen inhoud of de native koppeling: de tekst in een knop, een gekoppeld `label`, de `alt` van een afbeelding, de `legend` van een groep
4. `title`
5. `placeholder`, alleen bij formuliervelden

**De eerste die iets oplevert, wint.** Alles daaronder wordt genegeerd. Dat is de regel die de meeste verrassingen verklaart: staat er een `aria-label` op een knop met zichtbare tekst, dan telt die zichtbare tekst niet meer mee.

Twee dingen die hieruit volgen en die vaak verkeerd worden onthouden:

**Een veld met alleen een placeholder heeft wél een naam.** De placeholder is de laatste stap in de berekening en het attribuut blijft in de code staan terwijl je typt. Voorleessoftware noemt dus gewoon iets. Het probleem zit ergens anders: de zichtbare hint verdwijnt zodra iemand begint te typen. Dat is een afkeur onder [3.3.2 Labels en instructies](/blog/sc-3-3-2-wat-betekent-labels-en-instructies/), niet onder 4.1.2.

**Een icoonknop zonder tekst is zelden helemaal stil.** Staat er een emoji in, dan leest voorleessoftware de officiële naam van dat teken voor. Een vergrootglas-emoji wordt <span lang="en">"magnifying glass tilted left"</span>, gevolgd door "knop". Bij een icon font-glyph leest Chrome het teken wel voor en Firefox niet. De naam bestaat dus meestal wel, hij beschrijft alleen het plaatje in plaats van de actie. Daarom blijft deze fout zo lang staan: er komt geluid uit, dus het lijkt goed.

## Wat moet die naam zeggen?

Vier regels, in volgorde van belang.

**Beschrijf de functie of de bestemming, niet het uiterlijk.** Een vergrootglas in een zoekknop heet niet "vergrootglas", maar "Zoeken". Een linkende afbeelding heet niet "foto van het festivalterrein", maar "Naar het programma van het zomerfestival".

**Laat de zichtbare tekst erin staan.** Ziet de bezoeker "Verstuur" en heet de knop technisch "Formulier indienen", dan werkt spraakbesturing niet meer: wie "klik Verstuur" zegt, krijgt niets. De naam mag langer zijn dan de zichtbare tekst, maar de zichtbare woorden moeten erin voorkomen. Dat is [2.5.3 Label in naam](/blog/sc-2-5-3-wat-betekent-label-in-naam/).

**Zet het belangrijkste woord vooraan.** Wie met een schermlezer een lijst van links opvraagt, hoort alleen de namen, achter elkaar, zonder de tekst eromheen. "Jaarverslag 2026 downloaden" scant beter dan "Download hier het jaarverslag over 2026".

**Maak hem onderscheidend genoeg.** Tien links die allemaal "Lees meer" heten, zijn in zo'n lijst niet uit elkaar te houden. Dat is [2.4.4 Doel van links in context](/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/).

En 1 regel over wat je weglaat: geen "afbeelding van", geen "link naar", geen "knop om te". Voorleessoftware zegt de rol er zelf al bij. Wie "link naar contact" schrijft, laat de bezoeker "link, link naar contact" horen.

## Voor webredacteuren

Je schrijft meer toegankelijke namen dan je denkt. Alles wat je in het CMS in een tekstveld typt en wat op een knop of link terechtkomt, is een naam.

Dit heb je in de hand:

- **De linktekst.** Wat tussen de linkopmaak staat, is de naam van die link. "Lees meer" is dus letterlijk hoe de link heet.
- **De alt-tekst.** Bij een afbeelding die ergens naartoe linkt, is de alt-tekst de naam van de link. Een leeg alt-attribuut betekent daar: een link zonder naam.
- **Labels in formuliermodules.** Wat je in het veld "label" typt, wordt de naam van dat invoerveld.
- **Knopteksten in blokken en kaarten.** Veel thema's hebben een knop met een instelbare tekst. Die tekst is de naam.
- **Titels van ingesloten video's en kaarten.** Sommige CMS'en laten je een titel meegeven aan een embed. Doen.

Zo controleer je het zelf: zet op het tabblad **Redactie** van de [WCAG Radar van Proper Access](/tools/wcag-radar/) de check **Toon toegankelijke naam** aan. Bij elke link, knop en elk veld verschijnt de naam die voorleessoftware uitspreekt. Elementen zonder naam worden als fout gemarkeerd.

Loop daarna de lijst **Alle links** door in hetzelfde paneel. Die toont alle links onder elkaar, precies zoals een schermlezer ze aankondigt, dus alleen de naam zonder de zin eromheen. Kun je bij een regel niet zien waar hij heen gaat, dan kan niemand dat.

Twee dingen die de radar niet voor je kan beslissen. Of een afbeelding decoratief is, en of een naam goed genoeg is. "Banner" is een bestaande naam en een gemiste kans.

## Voor ontwikkelaars

De belangrijkste regel is de goedkoopste: **gebruik het juiste element en zet er tekst in.** Dan is de naam er gratis en blijft hij in de vertaling meelopen.

```html
<button type="button">Bewaar concept</button>
<a href="/jaarverslag-2026.pdf">Jaarverslag 2026 (PDF, 2 MB)</a>
```

Heb je geen zichtbare tekst, dan pas ARIA:

```html
<!-- Icoonknop: naam op de knop, icoon verbergen -->
<button type="button" aria-label="Zoeken">
  <svg aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>
</button>

<!-- Nog beter, want hij overleeft ook een CSS-storing -->
<button type="button">
  <svg aria-hidden="true" focusable="false"><use href="#icon-search"></use></svg>
  <span class="sr-only">Zoeken</span>
</button>
```

Let op deze 5 valkuilen:

**`aria-label` op een element zonder rol doet niets.** Een kale `div` of `span` accepteert geen naam. Zet het op een element met een rol, of geef het element eerst een rol.

```html
<!-- Doet niets -->
<span aria-label="Sluiten" onclick="sluit()">×</span>

<!-- Goed -->
<button type="button" aria-label="Sluiten">×</button>
```

**`aria-label` overschrijft de zichtbare tekst.** Wil je alleen aanvullen, begin de naam dan met de zichtbare woorden: `aria-label="Lees meer over het jaarverslag 2026"` op een link die zichtbaar "Lees meer" heet.

**`aria-labelledby` verwijst naar een id die moet bestaan.** Wijst hij naar niets, dan heeft het element geen naam. Je kunt meerdere id's combineren, gescheiden door een spatie.

**`title` is geen naam.** Hij staat wel in de berekening, maar verschijnt niet op touchscreens, wordt wisselend voorgelezen en is met het toetsenbord niet te bereiken. Gebruik hem nooit als enige naam. De uitzondering is het `title`-attribuut op een `iframe`, want daar is het juist de bedoelde manier.

**Verberg decoratieve iconen in een knop met tekst.** Zonder `aria-hidden="true"` kan de glyph in de naam terechtkomen en hoort de bezoeker een raar teken voor het label.

Controleren doe je op het tabblad **Developer** van de [WCAG Radar](/tools/wcag-radar/) met **Toon toegankelijke naam**. Combineer het met **ARIA-rollen en -attributen**, die gebroken verwijzingen naar niet-bestaande id's markeert. Dat is precies de stille variant: er staat een keurige `aria-labelledby` en het element heet nergens naar.

## Veelgemaakte fouten

- **Icoonknoppen zonder naam.** De klassieker: sluiten, zoeken, menu, delen.
- **Een `aria-label` dat de zichtbare tekst vervangt in plaats van uitbreidt.** Goed bedoeld, en het breekt spraakbesturing.
- **Linkende afbeeldingen met een leeg alt-attribuut.** De link houdt dan helemaal geen naam over.
- **"Lees meer" als naam van tien verschillende links.**
- **Een naam die het uiterlijk beschrijft.** "Blauw pijltje" in plaats van "Volgende pagina".
- **Een gebroken `aria-labelledby`.** Verwijst naar een id die na een refactor niet meer bestaat.
- **"Afbeelding van" of "link naar" in de naam.** De rol wordt er al bij gezegd.
- **Een `aria-label` in het Engels op een Nederlandse pagina**, overgenomen uit een componentbibliotheek.

## Veelgestelde vragen

### Is de toegankelijke naam hetzelfde als de alt-tekst?

Nee, de alt-tekst is 1 van de manieren waarop een afbeelding aan een naam komt. Bij een knop komt de naam uit de tekst in de knop, bij een veld uit het gekoppelde label.

### Mag de naam langer zijn dan de zichtbare tekst?

Ja, en dat is vaak de juiste oplossing. Hij moet de zichtbare woorden alleen wel bevatten en niet vervangen.

### Moet elk element een naam hebben?

Nee. Decoratieve afbeeldingen krijgen juist een leeg alt-attribuut, en gewone tekstblokken hebben geen naam nodig. Het gaat om onderdelen waarmee de bezoeker iets doet, plus afbeeldingen en kaders die betekenis dragen.

### Waarom hoor ik bij een naamloze knop toch iets?

Omdat voorleessoftware terugvalt op wat er verder te vinden is: de inhoud van het element, een emoji-naam, soms de bestandsnaam van een afbeelding. Er komt geluid uit, maar het helpt de bezoeker niet.

### Wat is het verschil met een zichtbaar label?

Een zichtbaar label zie je staan, een toegankelijke naam hoor je. Meestal zijn ze hetzelfde, en dat is de bedoeling. Zodra ze uit elkaar lopen, krijg je problemen met spraakbesturing.

## Samenvatting

- De toegankelijke naam is het label dat hulpsoftware bij een onderdeel uitspreekt. Samen met de rol en de status maakt hij een onderdeel bruikbaar.
- De browser rekent hem uit in een vaste volgorde en de eerste treffer wint. `aria-label` zet de zichtbare tekst dus opzij.
- Beschrijf de functie, niet het uiterlijk. Laat de zichtbare woorden in de naam staan. Zet het belangrijkste vooraan.
- Webredacteur: linktekst, alt-tekst en formulierlabels zijn namen die jij schrijft.
- Ontwikkelaar: gebruik het juiste element met tekst erin, en pak ARIA er pas bij als er geen zichtbare tekst is.
- Controleer het met **Toon toegankelijke naam** in de [WCAG Radar](/tools/wcag-radar/), op het tabblad Redactie of Developer.

Een naam die er staat maar niets zegt, is de lastigste categorie: geen enkele scan meldt hem, en de bezoeker loopt er wel op vast. Daar kijken wij per element naar. Wil je weten hoe jouw site ervoor staat? Vraag een [toegankelijkheidsaudit](/toegankelijkheidsaudit/) aan.
