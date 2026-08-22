---
title: "Testen met NVDA: zo begin je op Windows"
meta_title: "NVDA leren gebruiken om te testen | Proper Access"
date: 2026-08-22
slug: "testen-met-nvda-op-windows"
categories:
  - "tips-en-tools"
  - "webdeveloper"
tags:
  - "nvda"
  - "schermlezer"
  - "testen"
  - "wcag"
description: "NVDA is gratis en draait op elke Windows-computer. Installeren, de NVDA-toets, het verschil tussen bladermodus en focusmodus, en hoe je hoort dat er iets mis is."
image: "/images/blog/nvda-bladermodus-focusmodus.webp"
keywords:
  - NVDA testen
  - NVDA leren gebruiken
  - schermlezer testen Windows
  - NVDA sneltoetsen
  - bladermodus focusmodus
tldr: "Download NVDA gratis op nvaccess.org. De NVDA-toets is Insert of Caps Lock. In bladermodus lees je de pagina met de pijltjes en werken losse letters als snelnavigatie: H voor koppen, K voor links, F voor formuliervelden. NVDA+F7 opent de elementenlijst. Zet de spraakweergave aan, dan kun je teruglezen wat er wordt gezegd."
faqs:
  - question: "Is NVDA gratis?"
    answer: "Ja. NVDA is gratis en open source, gemaakt door NV Access. Je downloadt het op nvaccess.org. Er is ook een draagbare versie die je vanaf een USB-stick draait, handig op een computer waarop je niets mag installeren."
  - question: "Wat is de NVDA-toets?"
    answer: "Insert. Tijdens de installatie kun je aanzetten dat ook Caps Lock als NVDA-toets werkt, wat handig is op een laptop zonder numeriek toetsenblok. Bijna elk commando begint met die toets, in handleidingen geschreven als NVDA."
  - question: "Wat is het verschil tussen bladermodus en focusmodus in NVDA?"
    answer: "In bladermodus lees je de pagina als een document: de pijltjestoetsen verplaatsen de leescursor en losse letters werken als snelnavigatie. In focusmodus gaan je toetsaanslagen naar de pagina zelf, wat nodig is in invoervelden en in zelfgebouwde componenten. NVDA schakelt meestal zelf en speelt daarbij een geluid af. Met NVDA+Spatie wissel je handmatig."
  - question: "Welke browser gebruik ik bij NVDA?"
    answer: "Firefox of Chrome. Beide werken goed samen met NVDA. Test in de browser die je bezoekers gebruiken, en houd er rekening mee dat de andere browser op onderdelen anders reageert."
  - question: "Klinkt NVDA altijd zo robotachtig?"
    answer: "Nee, dat is de standaardstem eSpeak NG. Met NVDA+Ctrl+S kies je een andere synthesizer, bijvoorbeeld de Windows OneCore-stemmen, en met NVDA+Ctrl+V kies je de stem zelf. Een Nederlandse stem voeg je toe via de spraakinstellingen van Windows."
---

Op Windows moet je een schermlezer zelf installeren. Dat is de enige drempel, en hij is lager dan hij lijkt: NVDA is gratis, open source, gemaakt door de stichting NV Access, en de download is klein. Tien minuten later hoor je je eigen website zoals een blinde bezoeker hem hoort.

Wat daarna komt, is voor de meeste mensen verwarrender dan bij VoiceOver op de Mac. NVDA kent twee standen, en als je niet weet in welke stand je zit, lijkt het alsof je toetsenbord kapot is. Die twee standen krijgen hieronder een eigen hoofdstuk.

## Installeren

Ga naar nvaccess.org en download NVDA. De installer vraagt of je NVDA wilt installeren of een draagbare versie wilt maken. Die draagbare versie draait vanaf een USB-stick zonder beheerdersrechten, wat helpt op een werklaptop waarop je niets mag installeren.

De NVDA-toets is <kbd>Insert</kbd>. Bijna elk commando begint met die toets, en in handleidingen staat hij geschreven als NVDA. Zet tijdens de installatie de optie aan waarmee ook <kbd>Caps Lock</kbd> als NVDA-toets werkt. Op een laptop zonder numeriek toetsenblok scheelt dat veel gedoe.

- **Starten:** <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>.
- **Afsluiten:** <kbd>NVDA</kbd> + <kbd>Q</kbd>.
- **Spraak stoppen:** <kbd>Ctrl</kbd>.
- **NVDA-menu openen:** <kbd>NVDA</kbd> + <kbd>N</kbd>.

## Zet eerst de spraakweergave aan

Open het NVDA-menu met <kbd>NVDA</kbd> + <kbd>N</kbd> en zoek onder Extra de spraakweergave. In de Engelse versie heet dat Tools, Speech viewer.

Er verschijnt een venster dat als tekst toont wat NVDA zegt. Voor een test is dit het waardevolste onderdeel van NVDA: je kunt teruglezen wat er precies werd voorgelezen, de tekst kopiëren naar een bevinding, en hem laten zien aan een developer die zelf geen schermlezer gebruikt. Een screenshot van dat venster naast een screenshot van de pagina maakt een probleem meteen zichtbaar.

![](/images/blog/nvda-spraakweergave.webp)

Klinkt de stem te synthetisch om prettig mee te werken, dan is dat eSpeak NG, de standaardstem. Met <kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> kies je een andere synthesizer en met <kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>V</kbd> een andere stem. De Windows OneCore-stemmen klinken natuurlijker; een Nederlandse stem voeg je toe via de spraakinstellingen van Windows.

## Bladermodus en focusmodus

Dit is het onderdeel waar het bij de meeste mensen misgaat, dus lees het één keer rustig door.

**In bladermodus** lees je de webpagina als een document. De pijltjestoetsen verplaatsen een leescursor door de tekst, en losse letters werken als snelnavigatie. Deze stand gebruik je het grootste deel van je test.

**In focusmodus** gaan je toetsaanslagen rechtstreeks naar de pagina. Dat is nodig zodra je in een invoerveld typt, en in componenten die met de pijltjestoetsen worden bediend, zoals een keuzelijst of een tabpaneel.

NVDA schakelt meestal zelf tussen die twee standen en speelt daarbij een geluid af: twee verschillende tonen, één per stand. Met <kbd>NVDA</kbd> + <kbd>Spatie</kbd> wissel je handmatig.

![](/images/blog/nvda-bladermodus-focusmodus.webp)

Hier zit meteen een test in. Bouw iemand een keuzelijst na met divs en een klikafhandeling, dan schakelt NVDA niet naar focusmodus, want er is geen rol die dat aankondigt. De pijltjestoetsen lezen dan de pagina verder in plaats van door de opties te lopen. Moet jij zelf <kbd>NVDA</kbd> + <kbd>Spatie</kbd> indrukken om het onderdeel werkend te krijgen, dan werkt het voor een gewone gebruiker niet.

## De commando's die je nodig hebt

| Wat je wilt doen | Toetsen |
| --- | --- |
| NVDA starten | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> |
| NVDA afsluiten | <kbd>NVDA</kbd> + <kbd>Q</kbd> |
| Spraak stoppen | <kbd>Ctrl</kbd> |
| Alles voorlezen vanaf hier | <kbd>NVDA</kbd> + <kbd>Pijl omlaag</kbd>, of <kbd>NVDA</kbd> + <kbd>A</kbd> op de laptopindeling |
| Vertel de titel van het venster | <kbd>NVDA</kbd> + <kbd>T</kbd> |
| Vertel waar de focus staat | <kbd>NVDA</kbd> + <kbd>Tab</kbd> |
| Elementenlijst openen | <kbd>NVDA</kbd> + <kbd>F7</kbd> |
| Wisselen tussen blader- en focusmodus | <kbd>NVDA</kbd> + <kbd>Spatie</kbd> |
| Door een tabel bewegen | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>pijltjestoetsen</kbd> |
| NVDA-menu openen | <kbd>NVDA</kbd> + <kbd>N</kbd> |

Werk je op een laptop zonder numeriek toetsenblok, kies dan de laptopindeling in de toetsenbordinstellingen van NVDA. Een deel van de commando's krijgt dan andere toetsen.

## Snelnavigatie in bladermodus

Losse letters springen naar het volgende onderdeel van die soort. <kbd>Shift</kbd> erbij springt terug.

![](/images/blog/nvda-snelnavigatie.webp)

| Toets | Springt naar |
| --- | --- |
| <kbd>H</kbd> | Volgende kop |
| <kbd>1</kbd> tot en met <kbd>6</kbd> | Volgende kop van dat niveau |
| <kbd>K</kbd> | Volgende link |
| <kbd>B</kbd> | Volgende knop |
| <kbd>F</kbd> | Volgend formulierveld |
| <kbd>E</kbd> | Volgend invoerveld |
| <kbd>C</kbd> | Volgende keuzelijst |
| <kbd>X</kbd> | Volgend selectievakje |
| <kbd>R</kbd> | Volgend keuzerondje |
| <kbd>T</kbd> | Volgende tabel |
| <kbd>L</kbd> | Volgende lijst |
| <kbd>I</kbd> | Volgend lijstitem |
| <kbd>G</kbd> | Volgende afbeelding |
| <kbd>D</kbd> | Volgend oriëntatiepunt |
| <kbd>Q</kbd> | Volgend citaat |

Deze toetsen zijn de reden dat een dagelijkse gebruiker sneller door een goed opgebouwde pagina komt dan jij met je muis. Ze zijn ook de reden dat een pagina zonder koppen, zonder oriëntatiepunten en met knoppen die eigenlijk divs zijn, onbruikbaar aanvoelt: er valt niets over te slaan.

## Zo loop je een pagina door

### 1. Laat de hele pagina voorlezen

Ga naar het begin van de pagina met <kbd>Ctrl</kbd> + <kbd>Home</kbd> en druk op <kbd>NVDA</kbd> + <kbd>Pijl omlaag</kbd>. Luister één keer helemaal mee, zonder aantekeningen. Je hoort in welke volgorde de inhoud staat, hoeveel er vóór de hoofdinhoud komt en of er ergens iets wordt voorgelezen dat op het scherm niet bestaat.

### 2. Open de elementenlijst

<kbd>NVDA</kbd> + <kbd>F7</kbd>. Je krijgt een venster met links, koppen, formuliervelden, knoppen en oriëntatiepunten, elk in een eigen weergave. Loop de koppenlijst langs en vraag je af of je hieruit begrijpt wat er op de pagina staat.

Wil je diezelfde structuur zien in plaats van horen, dan legt de [WCAG Radar](https://testtoegankelijkheid.nl/wcag-radar) de koppen als blokjes over de pagina heen. Handig om een developer te laten zien wat er ontbreekt.

### 3. Doe het formulier

Ga met <kbd>Tab</kbd> van veld naar veld en luister per veld. Je hoort het label, de soort van het veld en of het verplicht is. Hoor je alleen "bewerkveld", dan hangt het label er niet aan vast.

Verstuur daarna een leeg formulier. Meldt NVDA de fout, of blijft het stil terwijl er wel rode tekst op het scherm staat? Gaat de focus naar het eerste veld met een fout? Dit is de stap waar ik in onderzoeken de meeste bevindingen uit haal.

### 4. Controleer de tabellen

Ga met <kbd>T</kbd> naar een tabel en beweeg met <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>pijltjestoetsen</kbd> van cel naar cel. NVDA noemt bij elke cel de bijbehorende kolomkop en rijkop. Hoor je alleen de celinhoud, dan zijn de koppen niet als `th` opgemaakt en weet een gebruiker halverwege de tabel niet meer waar hij naar luistert.

### 5. Test wat er verandert zonder herladen

Filters, winkelwagens, meldingen, zoeksuggesties. Verandert er iets op het scherm, dan hoort een gebruiker die verandering ook te horen. Stilte bij een wijziging is een probleem, en te veel geluid is dat ook: een live region die bij elke toetsaanslag praat, maakt een zoekveld onbruikbaar.

## Wat je hoort als er iets mis is

| Wat je hoort | Wat er waarschijnlijk aan de hand is |
| --- | --- |
| "klikbaar" bij gewone tekst | Een div of span met een klikafhandeling, zonder rol en zonder toetsenbordbediening |
| "afbeelding" plus een bestandsnaam | De afbeelding heeft geen alt-tekst en NVDA valt terug op de bestandsnaam |
| Alleen "knop", zonder naam | Een knop zonder toegankelijke naam, meestal een icoonknop |
| Tekst zonder "kop niveau" ervoor | De kop is alleen visueel opgemaakt |
| "bewerkveld" zonder label | Het label hoort niet bij het veld, of er staat alleen een placeholder |
| Geen enkel oriëntatiepunt in de elementenlijst | De pagina gebruikt geen `header`, `nav`, `main` en `footer` |
| Stilte na een actie die het scherm verandert | De wijziging staat niet in een live region en krijgt geen focus |

Wat je hoort is een signaal en geen conclusie. Kijk in de code voordat je iets opschrijft als bevinding, want een deel van wat je hoort komt door de combinatie van browser en schermlezer en niet door de pagina.

## Waar een NVDA-test ophoudt

**Doe je ogen niet dicht.** Houd het scherm aan tijdens het testen. Je zoekt het verschil tussen wat er staat en wat er wordt gezegd, en dat verschil zie je alleen als je allebei hebt. Een blindsimulatie zegt bovendien weinig: een dagelijkse gebruiker kent zijn schermlezer, draait hem op een snelheid die jij niet kunt volgen en weet welke sneltoetsen er zijn.

**Een schermlezertest is een deel van het werk.** Contrast, zoom tot 400%, zichtbare focus, bediening met alleen het toetsenbord, begrijpelijke taal en de teksten in het rapport zijn allemaal aparte controles.

**NVDA is één schermlezer.** JAWS reageert anders, VoiceOver op de Mac ook, en op de telefoon lopen VoiceOver en TalkBack weer anders. Werkt iets in NVDA met Firefox, dan werkt het niet automatisch overal. Werk je ook op een Mac, lees dan [testen met VoiceOver](/blog/testen-met-voiceover-op-de-mac/).

## Veelgestelde vragen over NVDA

### Is NVDA gratis?

Ja. NVDA is gratis en open source, gemaakt door NV Access. Je downloadt het op nvaccess.org, en er is een draagbare versie voor computers waarop je niets mag installeren.

### Wat is de NVDA-toets?

<kbd>Insert</kbd>. Zet tijdens de installatie aan dat ook <kbd>Caps Lock</kbd> werkt, dan kun je NVDA ook bedienen op een laptop zonder numeriek toetsenblok.

### Waarom doen mijn pijltjestoetsen ineens niets?

Dan sta je waarschijnlijk in focusmodus. <kbd>NVDA</kbd> + <kbd>Spatie</kbd> brengt je terug naar bladermodus, waar de pijltjes de pagina lezen en losse letters als snelnavigatie werken.

### Welke browser gebruik ik bij NVDA?

Firefox of Chrome. Beide werken goed samen met NVDA en reageren op onderdelen verschillend, dus test in de browser die je bezoekers gebruiken.

### Kan ik met NVDA zelf een toegankelijkheidsonderzoek doen?

Je vindt er problemen mee die geen enkele geautomatiseerde scan vindt. Een volledig onderzoek is breder, en een onderzoek dat je in het Register van Toegankelijkheidsverklaringen wilt gebruiken moet volgens WCAG-EM zijn uitgevoerd.

## Verder

Begin klein. Installeer NVDA, zet de spraakweergave aan en druk op je eigen homepage één keer op <kbd>NVDA</kbd> + <kbd>F7</kbd>. De koppenlijst die je dan ziet, zegt in dertig seconden meer over de opbouw van je pagina dan een scanrapport van tien pagina's.

Twijfel je of iets wat je hoort een echt probleem is? Stuur je vraag naar info@properaccess.nl.
