# Academy voor webredactie: opzet

Concept van 8 oktober 2026. Besluit van Julia dezelfde dag: techniek en content worden
twee aparte opleidingen met eigen lesstof. Niet één stel hoofdstukken met twee routes.
Dit bestand staat in `docs/` en niet in `content/`, dus er gaat niets live zolang de opzet
nog niet is goedgekeurd.

## Waarom apart

Het onderwerp overlapt, de les niet. Dezelfde regel levert per team een andere uitleg, een
andere oplossing en andere woorden:

| | Webdeveloper | Webredactie |
|---|---|---|
| Kop | Het juiste kopelement in het template, de hiërarchie over de hele pagina | De keuzelijst in de tekstbewerker, de koppen in het tekstveld |
| Alt-tekst | Het `alt`-attribuut, wanneer het leeg mag, een gelinkte afbeelding | Wat je typt in het veld bij het uploaden, en wanneer je het leeg laat |
| Kleur | Contrast meten, de 3:1 uit techniek G183 | Geen informatie met alleen kleur in een tekst, geen rode tekst als enige markering |
| Video | De speler, bediening met het toetsenbord | Ondertitels maken, een transcript schrijven, audiodescriptie aanvragen |

Daarmee vervalt mijn advies van eerder vandaag om één stel hoofdstukken met een route te
gebruiken. Voor webredactie komt er eigen lesstof.

Twee regels die uit het besluit volgen:

- **Geen codevoorbeelden in de redactielessen.** Een redacteur werkt in een tekstbewerker
  en niet in HTML. Waar de techniekles een codeblok heeft, heeft de redactieles "wat je
  typt" en "wat de bezoeker hoort".
- **Alleen wat een redacteur zelf in handen heeft.** Koppen in een menu, een zijbalk of
  een voettekst zitten in het template en horen in de techniekopleiding. Koppen die je
  met de tekstbewerker aan een pagina toevoegt, horen hier.

## Voorgestelde hoofdstukken

Onderbouwd met onze eigen bibliotheek: van de 632 actieve bevindingen staan er 159 op
`type: Content`, geteld op 8 oktober 2026.

| Nr | Hoofdstuk | Criteria | Bevindingen in de bibliotheek |
|---|---|---|---|
| 0 | Zo werkt WCAG | geen | Inleiding: wat een succescriterium is, wat A, AA en AAA betekenen, wie het W3C is |
| 1 | Koppen in de tekst | 1.3.1, 2.4.6 | 1.3.1 is met 38 bevindingen de grootste van alle content |
| 2 | Alt-teksten | 1.1.1 | 23 |
| 3 | Linkteksten | 2.4.4, 3.2.4 | 9 |
| 4 | Lijsten en tabellen in de tekstbewerker | 1.3.1 | zit in de 38 van 1.3.1 |
| 5 | Taal en begrijpelijke tekst | 3.1.1, 3.1.2 | plus de regels voor leesniveau |
| 6 | Kleur en zintuiglijke kenmerken | 1.3.3, 1.4.1 | 9 op 1.3.3 |
| 7 | Video, ondertitels en transcript | 1.2.2, 1.2.3, 1.2.5 | 8 + 5 + 9 = 22 |
| 8 | Paginatitel en samenvatting | 2.4.2 | 7 |
| 9 | PDF publiceren | PDF/UA, Matterhorn-protocol | 46 van de 59 PDF-bevindingen zijn content |

Tien hoofdstukken, waarvan hoofdstuk 0 en 9 in geen enkel bestaand plan staan. Hoofdstuk 9
is het grootste gat: PDF komt in de zes bestaande secties niet voor, en het is voor een
redactie het meest gevraagde onderwerp.

## Wat de techniek nodig heeft

Werk voor James of Chris, niet voor mij:

- Een tweede boom onder `content/dutch/academy-webredactie/`, met een eigen
  overzichtspagina, eigen voortgang en eigen zijbalk.
- De drie templates in `layouts/academy/` lezen nu de secties op met
  `.Site.GetPage "/academy"`, hardgecodeerd (`single.html` regel 4, `list.html` en de
  partial voor de voortgang). Dat moet de eigen hoofdsectie van de pagina worden, zodat
  dezelfde templates voor beide opleidingen werken.
- De voortgang in `localStorage` moet de twee opleidingen apart bijhouden.
- De hoofdstuknavigatie klopt nu niet: de zijbalk sorteert op `chapter_number`, maar
  "Vorig hoofdstuk" en "Volgend hoofdstuk" gebruiken `.PrevInSection` en
  `.NextInSection`, en die sorteren bij gebrek aan `weight` op bestandsnaam. Repareren
  voordat er een tweede boom bij komt.

## Proefles

`docs/academy-webredactie-koppen-concept.md` is hoofdstuk 1 als proef, zodat de taal en
de diepte te beoordelen zijn voordat de andere negen hoofdstukken worden geschreven.
