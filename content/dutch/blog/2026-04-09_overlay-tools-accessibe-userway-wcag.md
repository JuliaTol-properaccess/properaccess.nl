---
title: "Waarom overlay-tools zoals AccessiBe en UserWay je webshop niet WCAG-conform maken"
date: 2026-04-09
slug: "overlay-tools-accessibe-userway-wcag"
categories:
  - "e-commerce-eaa"
tags:
  - "accessibe"
  - "userway"
  - "overlay"
  - "wcag"
  - "webshop"
description: "AccessiBe, UserWay en EqualWeb beloven WCAG-compliance met één regel JavaScript. In de praktijk werken overlays niet, soms zelfs averechts, en bieden ze geen juridische dekking. Een eerlijk overzicht."
keywords:
  - "AccessiBe review"
  - "UserWay review"
  - "overlay tools WCAG"
  - "accessibility overlay werkt niet"
  - "AccessiBe alternatief"
image: "/images/blog/webshop-wireframe-eaa.svg"
seo_title: "Werken overlay-tools? AccessiBe en UserWay eerlijk getest | Proper Access"
seo_description: "Maken AccessiBe, UserWay en EqualWeb je site echt WCAG-conform? Wat zeggen screenreader-gebruikers, wat zegt onderzoek en wat zegt de rechter? Een eerlijk overzicht voor webshops."
seo_keywords:
  [
    "AccessiBe review",
    "UserWay review",
    "overlay accessibility tool",
    "AccessiBe WCAG",
    "accessibility overlay nadelen",
  ]
---

Als je de afgelopen maanden iets hebt opgezocht over de European Accessibility Act, is de kans groot dat je een advertentie hebt gezien voor AccessiBe, UserWay, EqualWeb of accessiBle. De boodschap is overal hetzelfde: _"Maak je site WCAG-conform met één knop op je website. Vanaf vandaag. Geen developer nodig. Vanaf € 49 per maand."_

Het klinkt te mooi om waar te zijn, en dat is het ook. In januari 2025 oordeelde de Amerikaanse Federal Trade Commission (FTC) dat AccessiBe's claims "false, misleading, or unsubstantiated" zijn, en legde een boete van $ 1 miljoen op. Daar kom ik verderop op terug. Voor nu is het belangrijkste om te weten dat dit geen mening van een criticus is — het is een formele uitspraak van een toezichthouder.

In dit artikel leg ik uit waarom overlay-tools niet doen wat ze beloven, wat het onderzoek erover zegt, waarom ze soms zelfs averechts werken voor de groep die ze claimen te helpen, en wat je in plaats daarvan zou moeten doen. Ik probeer het feitelijk en zonder cynisme te brengen, maar het is geen geheim dat ik in deze discussie een mening heb.

Dit artikel is onderdeel van onze serie [E-commerce en de EAA](/blog/geldt-de-eaa-voor-mijn-webshop/).

## Wat is een overlay-tool?

Een accessibility overlay is een stuk JavaScript dat je in één regel aan je site toevoegt. Na installatie verschijnt er meestal een rond icoontje rechtsonder in je scherm — een poppetje, een rolstoel, een oog. Klik je erop, dan kun je dingen aanpassen: lettergrootte, contrast, lettertype, animaties uit, links onderstrepen.

De grote namen in deze markt zijn:

- **AccessiBe** (Israël/VS) — de bekendste, ook degene die het meest agressief adverteert.
- **UserWay** (Israël/VS) — vergelijkbare functionaliteit.
- **EqualWeb** (Israël) — vergelijkbaar.
- **accessiBle**, **MaxAccess**, **Audioeye** — kleinere spelers met dezelfde aanpak.

Sommige overlays beweren bovendien dat ze "AI" gebruiken om je site achter de schermen te repareren: alt-teksten genereren, ARIA-labels toevoegen, koppenstructuur aanpassen, fouten in formulieren oplossen.

## De belofte

De marketing van deze tools is ongeveer als volgt:

> "Voldoe in 48 uur aan WCAG 2.1 AA, ADA en de European Accessibility Act. Geen developer nodig. Wij scannen je site, lossen issues automatisch op, en bieden bezoekers een widget waarmee ze de site naar hun voorkeur kunnen aanpassen. Volledige juridische bescherming inbegrepen."

Voor een webshop-eigenaar die op zoek is naar een snelle oplossing voor de EAA-deadline klinkt dat aantrekkelijk. Vooral omdat een echte audit een paar duizend euro kost en weken duurt, terwijl een overlay vanaf ongeveer € 49 per maand begint en in een uur live staat. Let wel: dat instaptarief geldt voor kleine sites. Voor grote e-commerce sites met veel pagina's en pageviews lopen de kosten op tot **€ 2.000 per jaar of meer** — sommige enterprise-pakketten zitten daar nog ruim boven.

Het probleem is dat die belofte niet waar is. Niet ten dele, maar fundamenteel.

## Waarom werkt het niet?

### 1. Een widget verandert niets aan de onderliggende code

Het belangrijkste om te begrijpen: een overlay raakt je HTML niet aan. Hij voegt een laagje toe boven op je site dat sommige visuele dingen kan veranderen voor de gebruiker die het widget actief gebruikt. Maar de onderliggende structuur — de koppen, de labels, de ARIA, de toetsenbord-toegankelijkheid van je componenten — blijft precies zoals ze is.

Een screenreader-gebruiker komt op je site, en die ervaart je site niet via het widget. Hij ervaart hem via zijn eigen software (NVDA, JAWS, VoiceOver) die rechtstreeks de HTML uitleest. Als jouw productvariant-picker een rij alleen met de muis te bedienen is en het met het toetsenbord, dan helpt geen widget ter wereld daar iets aan.

### 2. Automatische "fixes" zijn beperkt en vaak fout

De overlays die claimen je site automatisch te repareren, gebruiken AI om bijvoorbeeld alt-teksten te genereren, ARIA-attributen toe te voegen, of koppen te corrigeren. Op kleine schaal werkt dat soms. Maar:

- **Toetsentordbediening en correcte focus(volgorde)** de tool weet niet altijd wat de gewenste volgorde van handelingen die je wilt dat je klant op de website doorloopt. Neem geen risico met een tool die je klantreis gaat verstoren.
- **ARIA-attributen automatisch toevoegen** is gevaarlijk. ARIA verkeerd gebruiken is vaak slechter dan helemaal geen ARIA. Onjuist gebruik van deze techniken zal meer problemen aan je website toevoegen.
- **De automatische detectie mist context.** Of een afbeelding decoratief of informatief is, of een tabel een data-tabel is of een layout-tabel — dat zijn beslissingen die je niet uit code alleen kunt afleiden.

### 3. Het lost de fundamentele problemen niet op

Een korte lijst van wat een overlay structureel niet kan oplossen:

- Een checkout die niet met toetsenbord te bedienen is.
- Een mini-cart pop-up die de focus vasthoudt.
- Een variant-picker die alleen op klik reageert.
- Een formulier waarvan de foutmelding niet aan het veld is gekoppeld.
- Een iDEAL-modal van je payment provider.
- Een carrousel die automatisch doorrolt zonder pauzeknop.
- Onjuiste of ontbrekende koppenstructuur.
- Tabellen die als `<div>` zijn opgebouwd.
- Ontoegankelijke PDFs.

Met andere woorden: precies de dingen waarop de meeste webshops falen.

## Wat zegt het onderzoek?

Dit is geen mening van mij alleen. Er is een breed gedragen consensus binnen de internationale accessibility-gemeenschap, en die consensus is gebaseerd op onderzoek en ervaringen van mensen die screenreaders dagelijks gebruiken.

### WebAIM Accessibility Overlay Survey

WebAIM (een gezaghebbend accessibility-onderzoekscentrum verbonden aan Utah State University) deed in 2021 een [grootschalige enquête onder gebruikers van overlays](https://webaim.org/projects/overlaysurvey/), met name screenreader-gebruikers. De uitkomsten waren ongenuanceerd: de overgrote meerderheid van de respondenten vond overlays niet behulpzaam of ronduit storend. Veel respondenten gaven aan dat ze actief proberen overlays uit te schakelen of de site überhaupt te verlaten zodra ze er een tegenkomen.

Dit is geen marginaal punt. Het is een directe uitspraak van de mensen voor wie de overlay gebouwd zou moeten zijn: "het werkt niet voor mij, en ik wou dat het er niet was".

### Adrian Roselli, Karl Groves en andere experts

Onafhankelijke accessibility-experts zoals [Adrian Roselli](https://adrianroselli.com/) en Karl Groves hebben jarenlang gedetailleerde technische analyses gepubliceerd waarin ze aantonen wat overlays in de praktijk wel en niet doen. Roselli's blog is een goldmijn voor wie wil zien hoe een overlay een specifiek WCAG-criterium probeert op te lossen en daar in vrijwel elk geval bij faalt.

### De Overlay Fact Sheet

Een groep van honderden accessibility-professionals heeft samen de [Overlay Fact Sheet](https://overlayfactsheet.com/) opgesteld — een onderbouwd overzicht van de kritiek op overlays, met links naar onderzoek, testresultaten en juridische uitspraken. Het is een primaire bron als je dieper wilt graven, of als je je leverancier of management wilt overtuigen.

## Waarom werken ze soms juist averechts?

Hier zit een wrang punt. Voor sommige screenreader-gebruikers maakt een overlay de site niet alleen niet beter, maar actief slechter. Hoe?

- **De overlay voegt extra elementen toe** die de screenreader voorleest voordat hij bij de eigenlijke content komt. Eerst hoor je "Toegankelijkheidswidget, druk op Enter om te openen", dan "Lettertype-instellingen", dan "Contrast-instellingen", en pas dán de productpagina.
- **De overlay overschrijft soms ARIA-attributen** die de site al goed had. Een knop met een correct label krijgt opeens een verkeerd label van de overlay-AI.
- **De overlay verstoort de focusvolgorde** door zijn eigen widget in te voegen.
- **Sommige overlays detecteren een screenreader en proberen hun eigen "screen reader profile" te activeren**, wat zelden werkt zoals bedoeld en het normale gedrag van de native screenreader verstoort.

Dit is geen theoretische zorg. Het is een gedocumenteerde realiteit, en het is de reden waarom de meeste blinde gebruikers zeggen liever géén overlay op een site te willen zien.

## Wat zegt de toezichthouder en de rechter?

Dit is misschien wel het sterkste argument voor wie nog twijfelt. Overlays beloven juridische bescherming, maar in de praktijk is die er niet.

### De FTC beboette AccessiBe in 2025 voor misleidende claims

In januari 2025 publiceerde de Amerikaanse Federal Trade Commission (FTC) een formele klacht tegen AccessiBe. De conclusie was ongezouten: AccessiBe's belofte dat hun AI-widget elke website WCAG-conform kan maken, is "false, misleading, or unsubstantiated". In april 2025 werd de [consent order definitief](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million) en moest AccessiBe een **boete van $ 1 miljoen** betalen. Bovendien is AccessiBe voor de komende 20 jaar verplicht om jaarlijks rapporten bij de FTC in te dienen en mogen ze bepaalde claims niet meer maken. De [FTC-aankondiging](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites) noemt ook dat AccessiBe betaalde reviews liet verschijnen als onafhankelijke beoordelingen.

Dit is geen mening van een criticus. Het is een formele uitspraak van een toezichthouder na onderzoek. Als je ergens een signaal zoekt dat de claims van overlay-leveranciers niet kloppen, dan is het dit.

### Murphy v. Eyebobs — de overlay werd verwijderd als onderdeel van de schikking

Een van de bekendste Amerikaanse zaken is [Murphy v. Eyebobs](https://www.adatitleiii.com/wp-content/uploads/sites/25/2021/01/Murphy-v.-Eyebobs.pdf) uit 2021. Anthony Murphy, een blinde consument, kon Eyebobs' webshop niet gebruiken met zijn screenreader. Eyebobs had de AccessiBe-widget geïnstalleerd en beriep zich daarop als oplossing. De rechter in de U.S. District Court for the Western District of Pennsylvania ging daar niet in mee. De zaak werd geschikt, en in de schikking werd Eyebobs verplicht om:

- de AccessiBe-widget te **verwijderen**;
- handmatige remediation te doen tot WCAG 2.1 AA-niveau;
- een accessibility consultant in te huren;
- een intern accessibility-team op te richten;
- alle digitale properties, inclusief mobiele apps, mee te nemen.

Met andere woorden: de overlay was geen verdediging. De schikking vereiste precies het werk dat Eyebobs had willen vermijden door de widget te installeren. [Een uitgebreide analyse van deze zaak staat bij Equal Entry](https://equalentry.com/the-infamous-eyebobs-web-accessibility-lawsuit-heres-what-you-want-to-know/).

### En de overlay-leveranciers zelf?

Eerlijk is eerlijk: AccessiBe publiceert op hun eigen site ook voorbeelden van zaken waarin een overlay door een rechter wél werd geaccepteerd. In *Erkan v. David A. Hidalgo, MD, P.C.* bijvoorbeeld werd de zaak door een rechtbank in de Eastern District van New York geseponeerd, mede omdat het bedrijf een widget had geïnstalleerd. Dat is een echt voorbeeld en het hoort in een eerlijk overzicht thuis.

Maar twee dingen. Eén: zulke uitspraken zijn zeldzaam en vaak zaak-specifiek (een rechter oordeelde dat er geen redelijke verwachting was dat de klacht zou terugkomen, niet dat de widget daadwerkelijk WCAG-conform maakte). Twee: het is precies waar de FTC vervolgens mee kwam — de claim dat een widget je sluitend beschermt, is commercieel overdreven. De analyses bij [Adrian Roselli](https://adrianroselli.com/2025/01/ftc-catches-up-to-accessibe.html) en [Lainey Feingold](https://www.lflegal.com/2025/01/ftc-accessibe-million-dollar-fine/) zijn de moeite waard voor wie de nuance wil lezen.

### En in Europa?

De jurisprudentie rondom de EAA in Europa is nog jong (de wet is sinds 28 juni 2025 van kracht). Er zijn op dit moment nog weinig gepubliceerde Europese uitspraken over overlays. Wat wel vaststaat: de EAA verwijst voor e-commerce naar de Europese norm **EN 301 549**, die voor het web-hoofdstuk **WCAG 2.1 niveau AA** bevat. Die norm wordt ingevuld door wat er feitelijk in je HTML staat. Een widget die op het scherm kleuren en lettergrootte aanbiedt, wijzigt die onderliggende code niet. Het is daarom niet aannemelijk dat een Europese rechter of een toezichthouder zoals de ACM tot een andere conclusie komt dan de Amerikaanse FTC.

Met andere woorden: de juridische bescherming die overlay-leveranciers verkopen, is er niet.

## Wat moet je dan wel doen?

Drie stappen, in deze volgorde.

### 1. Laat een audit doen op je onderliggende site

Een handmatige WCAG-audit door een onafhankelijke partij geeft je een rapport met concrete issues en oplossingen. Voor een webshop kost dat bij ons indicatief [€ 2.100 tot € 4.500](/blog/wat-kost-wcag-audit-webshop/). Dat klinkt veel ten opzichte van een overlay-abonnement van € 49 per maand voor een kleine site. Maar voor grote e-commerce sites begint een overlay-abonnement vaak pas vanaf **€ 2.000 per jaar** en loopt het bij enterprise-tarieven snel verder op. Reken het uit over drie jaar: dat is € 6.000 of meer aan abonnementskosten, en je hebt nog steeds geen rapport, geen aanwijsbare verbetering en geen juridische dekking. Voor datzelfde bedrag kun je een complete audit + retest hebben gehad én de echte issues opgelost.

### 2. Los de issues op in de code, niet in een widget

Je developer pakt het rapport ter hand. Dingen als toetsenbord-toegankelijkheid, formulier-labels, koppenstructuur en alt-teksten zijn doorgaans relatief snel op te lossen. Complexere zaken zoals een variant-picker of een mini-cart kosten meer werk, maar zijn eenmalig.

### 3. Plan een retest en blijf testen

Na de fixes laat je een retest doen. Zo weet je dat de oplossingen werken én documenteer je dat je voldoet, wat nodig is voor je toegankelijkheidsverklaring. Daarna bouw je in dat nieuwe features standaard worden getest met toetsenbord en screenreader, zodat je niet langzaam weer verslechtert.

Bij Proper Access werken we volgens deze drie stappen bij elke webshop-klant. Je kunt beginnen met een [gratis quickscan](https://properaccess.nl/diensten/quickscan/) waarin we de meest opvallende problemen vinden in ongeveer een uur.

## Veelgestelde vragen

**Maar mijn leverancier zegt dat hun overlay juridisch is goedgekeurd door experts.**
Vraag wie die experts zijn en of je hun namen mag opzoeken. In de praktijk blijken het vaak medewerkers van het overlay-bedrijf te zijn, of partners die op commissie werken. Onafhankelijke accessibility-organisaties (de Overlay Fact Sheet, WebAIM, IAAP, het Bureau of Internet Accessibility) zijn unaniem kritisch.

**Helpt een overlay als ik geen budget heb voor een audit?**
Het helpt minder dan niets-doen, omdat het je in slaap sust. Je betaalt elke maand, je denkt dat je gedekt bent, en je echte probleem groeit ondertussen door. Een gratis quickscan is een betere eerste stap, en kost nul euro.

**Maar AccessiBe heeft toch klanten met logo's van grote merken?**
Ja, en sommige van die merken zijn vervolgens aangeklaagd. Logo-walls zijn geen bewijs van werking.

**Wat als mijn overlay AI gebruikt en zichzelf verbetert?**
De claim "AI lost het op" is sinds 2019 onveranderd door overlay-leveranciers herhaald. De resultaten zijn in de praktijk niet beter geworden. AI kan helpen bij specifieke taken (alt-tekst voorstellen op basis van beeldherkenning, een ontwerp scannen op contrast), maar niet bij het oplossen van structurele toegankelijkheidsfouten in code die context vragen.

**Mag ik een overlay houden naast een audit?**
Technisch kan dat. Maar het maakt je site niet conformer, en het kan voor een deel van je screenreader-gebruikers nog steeds storend zijn. Mijn advies: verwijder hem als je een echte audit hebt laten doen. De ruimte op je scherm is ook iets waard.

## Kort samengevat

- Overlay-tools zoals AccessiBe en UserWay maken je site **niet** WCAG-conform. Ze raken de onderliggende code niet aan.
- Onderzoek (WebAIM, Overlay Fact Sheet) en ervaringen van screenreader-gebruikers wijzen uit dat overlays in de meeste gevallen niet helpen en soms juist storend zijn.
- De Amerikaanse FTC legde AccessiBe in 2025 een boete van $ 1 miljoen op voor misleidende WCAG-claims, en de Murphy v. Eyebobs-schikking verplichtte de webshop om de overlay te verwijderen en handmatig te remediëren.
- Een overlay biedt geen juridische bescherming, ook niet onder de EAA in Europa.
- De juiste route is: audit → fixes in de code → retest → blijven testen.
- Begin met een [gratis quickscan](https://properaccess.nl/diensten/quickscan/). Wat je niet weet kun je niet repareren.

Wil je weten wat een echte audit voor jouw webshop oplevert? Bel **085 5055 890** of vraag een quickscan aan.

## Meer in deze serie

- [Geldt de EAA voor mijn webshop? Een beslisboom](/blog/geldt-de-eaa-voor-mijn-webshop/)
- [Wat kost een WCAG-audit voor een webshop?](/blog/wat-kost-wcag-audit-webshop/)
- [EAA-checklist 2026 voor webshops](/blog/eaa-checklist-2026-webshops/)
