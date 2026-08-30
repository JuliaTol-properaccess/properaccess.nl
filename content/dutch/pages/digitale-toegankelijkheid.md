---
title: "Digitale toegankelijkheid"
meta_title: "Digitale toegankelijkheid: wat het is en wat de wet vraagt | Proper Access"
type: "diensten"
layout: "agency"
hide_cta: true
date: 2026-08-30
slug: "digitale-toegankelijkheid"
url: "/digitale-toegankelijkheid/"
description: "Digitale toegankelijkheid betekent dat je website, app en documenten te gebruiken zijn met een schermlezer, met alleen het toetsenbord en sterk ingezoomd. Wat WCAG 2.2 voorschrijft, welke wet voor jou geldt, en hoe je erachter komt waar je staat."
keywords:
  - digitale toegankelijkheid
  - wat is digitale toegankelijkheid
  - toegankelijke website
  - website toegankelijkheid
  - digitaal toegankelijk
  - WCAG 2.2
  - toegankelijke website maken
  - digitale toegankelijkheid wet
aliases:
  - "/blog/wat-is-digitale-toegankelijkheid/"

banner:
  badge: "WCAG 2.2, het BDTO en de EAA"
  title: "Digitale toegankelijkheid"
  content: "Je website is digitaal toegankelijk als iemand hem ook kan gebruiken met een schermlezer, met alleen het toetsenbord of sterk ingezoomd. Hieronder staat wat daarvoor nodig is, welke wet voor jou geldt en hoe je erachter komt waar je nu staat."
  button:
    enable: true
    label: "Vraag je onderzoek aan"
    link: "/offerte-wcag-onderzoek/"

trust:
  label: "Onderzoek geleverd voor onder meer"
  names:
    - "Gemeenten en provincies"
    - "Musea en culturele instellingen"
    - "Webshops en retail"
    - "Media"
    - "Uitvoeringsorganisaties"
    - "Onderwijs"

faqs:
  - question: "Wat is digitale toegankelijkheid in één zin?"
    answer: "Je website, app of document is digitaal toegankelijk als iemand hem ook kan gebruiken zonder muis, zonder scherm of met sterk vergrote tekst. De internationale standaard die dat uitwerkt heet WCAG. Versie 2.2 telt 55 succescriteria op de niveaus A en AA samen."
  - question: "Is mijn website verplicht toegankelijk?"
    answer: "Dat hangt af van wat je organisatie is. Overheidsinstanties en publiekrechtelijke instellingen vallen onder het Besluit digitale toegankelijkheid overheid, dat sinds 2018 geldt. Commerciële bedrijven die digitale diensten aan consumenten leveren vallen onder de European Accessibility Act, die sinds 28 juni 2025 wordt toegepast. Voor je eigen website of app geldt het ene of het andere, nooit allebei."
  - question: "Wat is het verschil tussen WCAG en de wet?"
    answer: "WCAG is de standaard, de wet verwijst ernaar. Onder beide Nederlandse regimes ligt EN 301 549, de Europese norm voor toegankelijkheid van ICT. Die norm verwijst op dit moment naar WCAG 2.1 niveau A en AA. Wij toetsen aan WCAG 2.2, als extra service boven de geldende norm."
  - question: "Kan ik zelf testen of mijn website toegankelijk is?"
    answer: "Voor een deel wel. Een geautomatiseerde scan herkent ongeveer 30% van de succescriteria; de rest vraagt handwerk. Met de WCAG Radar kom je zelf al een eind: 28 van de 45 checks zijn gratis en vragen geen account. Wat een scan niet ziet is of een foutmelding wordt voorgelezen, of je met alleen het toetsenbord door een bestelproces komt, en of een alt-tekst klopt met wat er op de afbeelding staat."
  - question: "Hoe lang duurt een onderzoek?"
    answer: "Een volledig onderzoek duurt drie tot vijf weken, gerekend vanaf het moment dat de omgeving voor ons open staat. Een mini-audit levert binnen een paar dagen een eerste beeld op."
  - question: "Levert het nog iets op behalve naleving?"
    answer: "Ja, en dat is geen bijzaak. Een koppenstructuur die klopt helpt zowel een schermlezergebruiker als Google. Beschrijvende alt-teksten zetten je afbeeldingen in de beeldresultaten. Een bestelproces dat met alleen het toetsenbord werkt, werkt ook op een telefoon met een haperend touchscreen. En 400% zoom is dezelfde eis als goed leesbaar zijn voor iemand van zeventig."
---

{{< section-full title="Wat digitale toegankelijkheid is" id="wat" >}}

Digitale toegankelijkheid betekent dat je website, app of document te gebruiken is door mensen
die hem anders bedienen dan met een muis en een gemiddeld scherm. Met een schermlezer die de
pagina voorleest, met alleen het toetsenbord, met spraakbediening, sterk ingezoomd, of met de
kleuren en lettergroottes van het besturingssysteem aangepast.

Waar dat op stukloopt is bijna nooit spectaculair. Een knop die is gemaakt van een `div` in
plaats van een `button`, en die een schermlezer daarom aankondigt als "afbeelding" of helemaal
overslaat. Een datumveld in een formulier dat alleen met de muis te bedienen is. Een foutmelding
die in rode tekst onder het veld verschijnt zonder dat er iets wordt voorgelezen, waarna iemand
blijft klikken op een knop die niets doet.

Formulieren zijn technisch het lastigste onderdeel van een website, en het onderdeel waar we bij
onderzoek de meeste problemen vinden. Juist daar zit het inschrijfformulier, de inlog en het
afrekenproces.

{{< /section-full >}}

{{< section-full title="Om hoeveel mensen gaat het?" id="voor-wie" bg="light" >}}

Uit [onderzoek van Jeroen Hulscher](https://jeroenhulscher.nl/hoeveel-mensen-hebben-een-beperking/)
blijkt dat er in Nederland tussen de 2 en 4,5 miljoen mensen zijn die op enig moment een
beperking hebben. Daarbinnen gaat het om ongeveer 500.000 mensen met een visuele beperking en
ongeveer evenveel met een auditieve beperking, ruim een miljoen mensen met een verstandelijke
beperking en 1,6 miljoen met een fysieke beperking. Daarnaast hebben ongeveer 800.000 mensen
dyslexie, zijn ruim 1,5 miljoen mensen laaggeletterd en zijn er 3 miljoen mensen van 65 jaar en
ouder.

Die groepen overlappen, dus je mag de getallen niet bij elkaar optellen. Wat je er wel uit kunt
halen: het gaat niet om een randgeval.

En het gaat niet alleen om permanente beperkingen. Wie een arm in het gips heeft, bedient zijn
telefoon een paar weken met één hand. Wie in de zon op een station staat, ziet hetzelfde grijs op
wit als iemand met beginnende staar. De eisen die daaruit volgen zijn dezelfde.

{{< /section-full >}}

{{< section-full title="Waaraan je het afmeet: WCAG" id="wcag" >}}

De standaard heet WCAG, de Web Content Accessibility Guidelines van het W3C. De criteria zijn
geordend onder vier principes:

1. **Waarneembaar.** Kan iemand de informatie binnenkrijgen, ook zonder te zien of te horen?
2. **Bedienbaar.** Kan iemand alles bedienen, ook zonder muis?
3. **Begrijpelijk.** Is duidelijk wat er gebeurt en wat er wordt gevraagd?
4. **Robuust.** Werkt het samen met hulpsoftware, ook met een versie van volgend jaar?

De actuele versie is WCAG 2.2, uit 2023. Die telt 86 succescriteria over alle niveaus, waarvan er
55 op de niveaus A en AA liggen. Dat zijn de niveaus waar wetgeving naar verwijst. Niveau AAA
blijft daarbuiten, want dat is niet voor alle content haalbaar.

Eén ding om te weten als je een plan voor de komende jaren maakt: er komt geen WCAG 2.3. Het W3C
werkt aan WCAG 3.0, met een andere opzet en een ander scoremodel, en daar is nog geen datum voor.
Kom je in een offerte of een advies "WCAG 2.3" tegen, dan klopt er iets niet.

{{< /section-full >}}

{{< section-full title="Wat de wet van je vraagt" id="wet" bg="light" >}}

Nederland kent twee regimes. Welke van de twee voor jou geldt hangt af van wat je organisatie is,
niet van wat je aanbiedt.

| Wat je bent | Welke wet | Sinds |
| --- | --- | --- |
| Overheidsinstantie of publiekrechtelijke instelling | Besluit digitale toegankelijkheid overheid (BDTO) | 2018 |
| Bedrijf dat producten of diensten aan consumenten levert | European Accessibility Act (EAA) | 28 juni 2025 |

Onder allebei ligt EN 301 549, de Europese norm voor toegankelijkheid van ICT. Die norm verwijst
op dit moment naar WCAG 2.1 niveau A en AA. Dat is dus de juridische ondergrens. Wij toetsen aan
WCAG 2.2, omdat de negen criteria die daarin zijn bijgekomen over dingen gaan die je in de
praktijk tegenkomt, zoals een focusrand die onder een cookiebalk verdwijnt en een knop die te
klein is om te raken.

De norm gaat trouwens over meer dan je website. Ook je klantenondersteuning valt eronder. Een
webshop kan aan WCAG voldoen en op de norm alsnog tekortschieten, bijvoorbeeld omdat de enige
route naar de klantenservice een telefoonnummer is.

Voor bedrijven bestaat één uitzondering: micro-ondernemingen zijn vrijgesteld voor hun diensten.
De richtlijn omschrijft die als een onderneming met minder dan 10 werknemers én een jaaromzet óf
een jaarlijks balanstotaal van ten hoogste 2 miljoen euro. Het personeelsaantal is een harde
grens; van de twee financiële cijfers hoeft er maar één onder de grens te zitten.

Wat er verder bij komt kijken staat op de pagina over de
[European Accessibility Act](/eaa/) en op de pagina over de
[toegankelijkheidsverklaring](/toegankelijkheidsverklaring/).

{{< /section-full >}}

{{< section-full title="Hoe je erachter komt waar je staat" id="meten" >}}

Begin gratis. Een geautomatiseerde scan herkent ongeveer 30% van de succescriteria, en dat is
genoeg om de grofste dingen te zien. Met de [WCAG Radar van Proper Access](/tools/wcag-radar/)
loop je 45 checks langs, waarvan er 28 gratis zijn en zonder account werken. Voor documenten is
er de [pdf-checker](/tools/pdf-checker/).

Wat een scan niet ziet, is het deel waar de meeste bezoekers op stuklopen. Of een foutmelding
daadwerkelijk wordt voorgelezen. Of je met alleen het toetsenbord door het afrekenproces komt en
er ook weer uit. Of een alt-tekst beschrijft wat er op de afbeelding staat in plaats van hoe het
bestand heet. Daar is een mens voor nodig, met een schermlezer erbij.

Voor een onderbouwing die standhoudt, richting het Register of richting een toezichthouder, is
een onderzoek volgens WCAG-EM nodig. Dat is de evaluatiemethode van het W3C: reikwijdte bepalen,
de site verkennen, een representatieve steekproef samenstellen, die steekproef toetsen en de
bevindingen rapporteren. Wat dat inhoudt en welke vier soorten er zijn staat op
[toegankelijkheidsonderzoek](/toegankelijkheidsonderzoek/).

{{< /section-full >}}

{{< section-full title="Wat een onderzoek kost" id="kosten" bg="light" >}}

De prijs volgt de omvang en de complexiteit, want het werk is handwerk. Een mini-audit kost 495
euro en levert binnen een paar dagen een eerste beeld op. Een volledig onderzoek begint bij
ongeveer 2.250 euro voor een eenvoudige site; de meeste websites vallen in de categorie gemiddeld
en komen uit rond 3.150 euro. Alle bedragen zijn exclusief btw.

De hele lijst, plus zes vragen die je aan elk bureau kunt stellen voordat je een offerte tekent,
staat in [wat kost een toegankelijkheidsaudit](/blog/wat-kost-een-toegankelijkheidsaudit/).

{{< /section-full >}}

{{< section-cta title="Weten waar jouw website staat?" >}}

Wij doen sinds 2019 onderzoek naar digitale toegankelijkheid, inmiddels meer dan 950 audits
(stand 7 augustus 2026). We bouwen en beheren zelf geen websites, dus we keuren nooit ons eigen
werk. Elk rapport wordt door drie mensen bekeken voordat het de deur uit gaat.

[Vraag een offerte aan](/offerte-wcag-onderzoek/) en je krijgt binnen twee werkdagen een prijs die
klopt met het werk. Liever eerst overleggen? [Neem contact op](/contact/), we reageren binnen een
werkdag.

{{< /section-cta >}}
