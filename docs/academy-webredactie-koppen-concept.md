# Proefles: Koppen in de tekst (webredactie)

Concept van 8 oktober 2026. Dit is hoofdstuk 1 van de opleiding voor webredactie, als
proef op de taal en de diepte. Nog niet in `content/`, dus nog niet live. De frontmatter
komt erbij als de opzet is goedgekeurd.

---

## Wat een kop doet als niemand hem ziet

Je maakt een kop om de pagina leesbaar te houden. Een bezoeker scant de koppen en kiest
waar hij gaat lezen.

Iemand die een schermlezer gebruikt, doet precies hetzelfde, alleen hoort hij het. Een
schermlezer kan een lijst opvragen van alle koppen op de pagina en daarmee van kop naar
kop springen, zonder de tekst ertussen. Die lijst is zijn inhoudsopgave.

In die lijst komt alleen wat je als kop hebt gemarkeerd. Tekst die je vet en groot hebt
gemaakt, staat er niet in. Visueel zien de twee er hetzelfde uit. Voor de bezoeker die de
lijst gebruikt, bestaat de tweede niet.

## Wat jij in handen hebt, en wat niet

De koppen in het menu, in de zijbalk en in de voettekst zitten in het ontwerp van de site.
Daar kun je in de tekstbewerker niets aan doen, en die vallen onder het werk van de
webdevelopers.

Waar jij over gaat: de koppen in het tekstveld van de pagina. En dat is het grootste deel.
Bij onze audits is 1.3.1 Informatie en relaties met afstand de grootste bron van
bevindingen op content, en koppen zijn daarvan het grootste deel.

Meestal maakt het titelveld van de pagina de hoofdkop, dus die typ je niet nog eens in de
tekst. Jouw koppen in de tekst beginnen daaronder: in de keuzelijst heet dat vaak "Kop 2".

## De keuzelijst in je tekstbewerker

Elke tekstbewerker heeft een keuzelijst met "Alinea", "Kop 2", "Kop 3" en zo verder. Die
keuze is wat de schermlezer te horen krijgt. De knoppen voor vet, cursief en tekstgrootte
veranderen alleen hoe het eruitziet.

De regel is dus kort: **een kop maak je met de keuzelijst, nooit met de knop voor vet.**

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: een tussenkop boven een alinea</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

Je typt "Openingstijden", selecteert het en maakt het vet en een punt groter.

De bezoeker ziet een kop. De schermlezer leest "Openingstijden" voor als gewone tekst,
midden in de lopende tekst, en de kop staat niet in de koppenlijst.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

Je typt "Openingstijden" en kiest in de keuzelijst "Kop 2".

De schermlezer zegt "kop niveau 2, Openingstijden". De bezoeker kan er met één
toetsaanslag naartoe springen.

</div>
</div>

## De vier fouten die wij het vaakst tegenkomen

Dit zijn echte bevindingen uit onze rapporten, in de woorden die je in het rapport
terugziet. Alle vier staan op impact Matig.

### 1. Vetgedrukte tekst doet dienst als kop

De fout uit het voorbeeld hierboven. Vet en cursief geven nadruk aan een paar woorden in
een zin. Ze maken geen kop.

### 2. Een kop om tekst groter te maken

Het omgekeerde gebeurt ook: een gewone zin krijgt "Kop 3" omdat het lettertype dan beter
uitkomt. In het rapport heet dat "Gewone tekst staat tussen de koppen". De schermlezer
kondigt een kop aan en er volgt geen onderdeel, alleen een zin.

Wil je tekst groter of opvallender? Vraag dat aan de developers of gebruik de opmaak die
daarvoor bestaat. Niet de keuzelijst met koppen.

### 3. De kopstructuur klopt niet

Koppen vormen een inhoudsopgave, dus ze horen in elkaar te zakken: onder Kop 2 komt Kop 3,
en daaronder Kop 4. Twee fouten komen vaak voor:

- Een niveau overslaan, bijvoorbeeld van Kop 2 naar Kop 4.
- Twee koppen van hetzelfde niveau direct op elkaar, zonder tekst ertussen. Dan is er
  geen onderdeel om aan te kondigen, en is minstens een van de twee geen kop.

<div class="academy-tip">
<p class="academy-tip__title">De voorleesproef</p>

Lees alleen je koppen achter elkaar, zonder de tekst ertussen. Klinkt dat als een
inhoudsopgave van je pagina, dan zit de structuur goed. Hoor je een losse zin, of mis je
een onderwerp, dan zit daar een fout.

</div>

### 4. De koptekst zegt niets

"Snel naar", "Direct naar", "Ga naar", "Meer informatie", "Overig". Uit zo'n kop kun je
niet opmaken wat eronder staat, en in de koppenlijst van een schermlezer staat die kop
zonder zijn omgeving. Dat is een apart succescriterium: 2.4.6 Koppen en labels.

Schrijf waar het stuk over gaat. "Openingstijden in de zomer" in plaats van "Meer
informatie".

Een kop hoeft niet unieker te zijn dan de pagina vraagt. 2.4.6 vraagt dat een kop
beschrijvend is, niet dat hij nergens anders voorkomt. Staat er op twee plekken een kop
"Kosten", en is uit de tekst duidelijk waarover, dan is dat geen fout.

## De twee succescriteria

- **1.3.1 Informatie en relaties**, niveau A. Wat eruitziet als een kop, moet ook als kop
  zijn gemarkeerd. Dit is de keuzelijst gebruiken in plaats van de knop voor vet.
- **2.4.6 Koppen en labels**, niveau AA. De koptekst beschrijft het onderwerp.

Dat zijn twee aparte eisen, en je kunt aan de ene voldoen en de andere overtreden. Een
nette "Kop 2" met de tekst "Overig" voldoet aan 1.3.1 en zakt op 2.4.6.

## Twee dingen die geen fout zijn

Hier worden redacties vaak op aangesproken terwijl het geen eis is:

- **Meer dan één hoofdkop op een pagina.** Eén hoofdkop is een goede gewoonte en maakt de
  inhoudsopgave helder, maar geen succescriterium in WCAG verbiedt een tweede.
- **Een kop die anders heet dan de paginatitel.** Dat mag. Gelijk houden is netter voor
  wie een zoekresultaat aanklikt, en het is geen eis.

## Zelf nakijken zonder in de code te kijken

- Zet je tekstbewerker in de weergave waar de koppen zichtbaar zijn met hun niveau. In de
  meeste systemen staat dat in de keuzelijst zelf als je in de regel klikt.
- Gebruik onze [WCAG Radar](/tools/wcag-radar/) en zet de optie voor koppen aan. Die toont
  de koppenlijst van de pagina zoals een schermlezer die ziet, en werkt ook op een pagina
  achter een inlog.
- Doe de voorleesproef uit het kader hierboven.

---

## Quiz

Vijf vragen, geen code.

**Vraag 1.** Je wilt een tussenkop boven een alinea zetten. Wat doe je?

- a. De tekst selecteren en vet maken
- b. In de keuzelijst "Kop 2" of "Kop 3" kiezen, passend bij de structuur
- c. De tekst groter maken met de knop voor tekstgrootte
- d. De tekst in hoofdletters typen

Goed: b. Alleen de keuzelijst maakt een echte kop. Vet, groter en hoofdletters veranderen
alleen hoe het eruitziet, dus de kop komt niet in de koppenlijst van een schermlezer.

**Vraag 2.** Een pagina heeft achter elkaar: Kop 2 "Tarieven", Kop 2 "Zakelijk", en dan
pas tekst. Wat is er aan de hand?

- a. Niets, twee keer Kop 2 mag
- b. "Zakelijk" had Kop 3 moeten zijn, want het valt onder "Tarieven"
- c. "Tarieven" moet Kop 1 worden
- d. Er mogen geen twee koppen op een pagina staan

Goed: b. Twee koppen van hetzelfde niveau direct op elkaar betekent dat de eerste geen
onderdeel aankondigt. Hoort "Zakelijk" bij "Tarieven", dan is het een niveau lager. Twee
keer Kop 2 op een pagina mag wel, als er inhoud onder de eerste staat.

**Vraag 3.** Welke koptekst is goed?

- a. "Snel naar"
- b. "Meer informatie"
- c. "Openingstijden in de zomer"
- d. "Overig"

Goed: c. Uit de andere drie kun je niet opmaken wat eronder staat. In de koppenlijst van
een schermlezer staat de kop zonder zijn omgeving, dus hij moet het zelf zeggen. Dit is
succescriterium 2.4.6.

**Vraag 4.** Een collega maakt van een gewone zin een Kop 4, omdat het lettertype dan
beter uitkomt. Wat zeg je?

- a. Prima, als het er goed uitziet
- b. Gebruik Kop 5, dan valt het minder op
- c. Dat kan niet: een kop kondigt een onderdeel aan, en dit is een zin. Vraag om andere
  opmaak
- d. Zet het in hoofdletters

Goed: c. De schermlezer kondigt een kop aan die er niet is. In ons rapport heet dat
"Gewone tekst staat tussen de koppen", impact Matig.

**Vraag 5.** De koppen in de voettekst van de site kloppen niet. Wie lost dat op?

- a. De webredactie, in de tekstbewerker
- b. De webdevelopers, want de voettekst zit in het template
- c. Niemand, een voettekst heeft geen koppen nodig
- d. De auditor

Goed: b. Alles wat op elke pagina hetzelfde is, zit in het ontwerp van de site. Je kunt er
in de tekstbewerker niet bij. Meld het, en ga verder met de koppen in je eigen tekst.
