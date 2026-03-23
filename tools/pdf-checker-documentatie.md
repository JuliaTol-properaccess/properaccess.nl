# PDF Toegankelijkheidscheck — Documentatie

## Over deze tool

De PDF Toegankelijkheidscheck van Proper Access analyseert PDF-bestanden op veelvoorkomende toegankelijkheidsproblemen. De analyse draait volledig in de browser via PDF.js — er worden geen bestanden verstuurd of opgeslagen.

Dit document beschrijft wat de tool wel en niet controleert.

---

## Wat de tool controleert

De tool voert controles uit in zes categorieen: Document, Koppen, Afbeeldingen, Lijsten, Tabellen en Navigatie.

---

### 1. Document

#### 1.1 Tags (structuurinformatie)

De tool controleert of het PDF-document getagd is. Tags zijn de structuurlaag die schermlezers gebruiken om de inhoud te interpreteren.

| Resultaat | Status | Wanneer |
|---|---|---|
| PDF is getagd | Geen problemen gevonden | Het document is gemarkeerd als getagd en alle pagina's bevatten tags |
| PDF is gedeeltelijk getagd | Probleem | Sommige pagina's bevatten tags, andere niet. Toont het aantal getagde vs. totaal aantal pagina's |
| PDF mist tags | Probleem | Het document bevat geen tags. Alle overige controles (koppen, lijsten, tabellen) zijn dan beperkt of niet uitvoerbaar |

**Hoe het werkt:** De tool leest de `MarkInfo`-eigenschap van het PDF-document en loopt per pagina de structuurboom (structure tree) door om te tellen welke pagina's tags bevatten.

**Beperking:** De tool controleert of tags *aanwezig* zijn, niet of ze *correct* zijn toegepast. Een document kan getagd zijn maar toch een verkeerde tagstructuur hebben.

---

#### 1.2 Titel

De tool controleert of het document een titel heeft en of die titel beschrijvend genoeg is.

| Resultaat | Status | Wanneer |
|---|---|---|
| Titel aanwezig | Geen problemen gevonden | Het document heeft een niet-lege titel. De titel wordt getoond |
| Titel beschrijft mogelijk niet de inhoud | Waarschuwing | De titel bestaat, maar lijkt niet beschrijvend (zie hieronder) |
| Geen titel ingesteld | Probleem | Het document heeft geen titel |

**Titelkwaliteitscontrole:** De tool waarschuwt bij titels die:
- Generieke woorden zijn: "title", "document", "untitled", "unnamed", "naamloos", "sans titre", "ohne titel", "sin titulo", "Microsoft Word"
- Een bestandsextensie zijn: ".pdf", ".doc", ".docx"
- Zeer kort zijn (2 tekens of minder)
- Geen letters bevatten (alleen cijfers, symbolen of leestekens)

**Hoe het werkt:** De titel wordt gelezen uit de `Info.Title`-eigenschap van het PDF-document.

**Beperking:** De tool kan niet beoordelen of een titel *inhoudelijk* klopt. Een titel als "Jaarverslag" is technisch geldig maar mogelijk niet specifiek genoeg — dat vereist menselijke beoordeling.

---

#### 1.3 Taal

De tool controleert of de documenttaal is ingesteld, of de taalcode geldig is, en of de ingestelde taal overeenkomt met de daadwerkelijke tekstinhoud.

| Resultaat | Status | Wanneer |
|---|---|---|
| Taal ingesteld | Geen problemen gevonden | Een geldige ISO 639-taalcode is gevonden. Toont de taal in leesbare vorm, bijv. "Nederlands (nl-NL)" |
| Taalinstelling niet herkenbaar | Waarschuwing | Er is een taalcode gevonden, maar deze komt niet voor in de lijst van bekende ISO 639-1 codes. Toont de gevonden waarde |
| Mogelijke taalfout | Waarschuwing | De ingestelde taal komt niet overeen met de gedetecteerde taal van de tekstinhoud |
| Geen taal ingesteld | Probleem | Er is geen taalinstelling gevonden |

**Hoe het werkt:**
1. De taalcode wordt eerst gezocht in de root van de structuurboom (het `Lang`-attribuut). Als die ontbreekt, wordt gekeken naar de XMP-metadata (`dc:language`).
2. De gevonden code wordt opgezocht in een lijst van 50+ ISO 639-1 taalcodes om de leesbare naam te tonen.
3. Voor mismatch-detectie worden de eerste 5 tekstelementen (paragrafen, spans, koppen) uit de structuurboom geanalyseerd. De tool telt stopwoorden per taal (Nederlands, Engels, Duits, Frans, Spaans) en bepaalt de meest waarschijnlijke taal. Er zijn minimaal 3 stopwoordmatches nodig voor een betrouwbare detectie.

**Beperkingen:**
- Taaldetectie werkt alleen voor Nederlands, Engels, Duits, Frans en Spaans.
- Bij korte documenten of meertalige documenten is de detectie onbetrouwbaar.
- De tool controleert geen taalwisselingen binnen het document (het `Lang`-attribuut op individuele tags).

---

### 2. Koppen

#### 2.1 Aanwezigheid van koppen

| Resultaat | Status | Wanneer |
|---|---|---|
| Koppen aanwezig | Geen problemen gevonden | Er zijn H1-H6 tags gevonden. Toont het aantal en een overzicht met paginanummer, kopniveau en tekst |
| Geen koppen gevonden | Waarschuwing | Het document is getagd maar bevat geen kopstructuren |
| Koppen niet controleerbaar | N.v.t. | Het document heeft geen tags, dus koppen kunnen niet gecontroleerd worden |

#### 2.2 Kophierarchie

| Resultaat | Status | Wanneer |
|---|---|---|
| Geen overgeslagen kopniveaus | Geen problemen gevonden | Alle koppen volgen een logische hierarchie (H1 > H2 > H3, etc.) |
| Kopniveaus overgeslagen | Probleem | Er wordt een kopniveau overgeslagen, bijv. H1 direct gevolgd door H3. Toont per bevinding het paginanummer en de sprong (bijv. "H1 > H3") |

**Hoe het werkt:** De tool doorloopt alle koppen in documentvolgorde en controleert of elk volgend kopniveau maximaal 1 niveau dieper is dan het vorige.

**Beperking:** De tool controleert de *technische* hierarchie, niet of koppen *inhoudelijk* logisch zijn. Een H2 "Contactgegevens" gevolgd door H3 "Banaan" is technisch correct maar inhoudelijk onzinnig.

#### 2.3 Lege koppen

| Resultaat | Status | Wanneer |
|---|---|---|
| Geen lege koppen | Geen problemen gevonden | Alle koppen bevatten tekst |
| Lege koppen gevonden | Probleem | Er zijn koptags zonder tekstinhoud. Toont paginanummer en kopniveau |

**Hoe het werkt:** De tool extraheert de tekstinhoud van elke koptag door de onderliggende content items (via MCID-referenties) op te zoeken in de pagina-inhoud.

---

### 3. Afbeeldingen

#### 3.1 Alternatieve tekst

| Resultaat | Status | Wanneer |
|---|---|---|
| X afbeelding(en) heeft/hebben alt-tekst | Geen problemen gevonden | Afbeeldingen met een `Alt`-attribuut. Toont per afbeelding de alt-tekst |
| Afbeeldingen zonder alt-tekst | Probleem | Figure-tags zonder `Alt`-attribuut. Toont paginanummer per bevinding |
| Geen afbeeldingen gevonden | N.v.t. | Er zijn geen Figure-tags in het document |

**Hoe het werkt:** De tool zoekt alle `Figure`-tags in de structuurboom en controleert of het `Alt`-attribuut aanwezig en niet-leeg is.

**Beperkingen:**
- De tool controleert of alt-tekst *aanwezig* is, niet of de tekst *kwalitatief goed* is.
- Decoratieve afbeeldingen die bewust geen alt-tekst hebben, worden als probleem gemeld. De tool kan niet beoordelen of een afbeelding decoratief is.
- Afbeeldingen die niet als `Figure` getagd zijn (bijv. ongetagde afbeeldingen of afbeeldingen in een `Span`-tag) worden niet gedetecteerd.
- Afbeeldingen die tekst bevatten (images of text) worden niet gedetecteerd.

---

### 4. Lijsten

#### 4.1 Lijststructuur

| Resultaat | Status | Wanneer |
|---|---|---|
| X lijst(en) zonder structuurfouten | Geen problemen gevonden | De tagstructuur L > LI > LBody is aanwezig |
| Lijststructuur niet correct | Probleem | De verwachte tagstructuur ontbreekt. Mogelijke issues: lijst bevat geen LI-tags, lijstitem mist LBody-tag, lijst bevat geen items. Toont paginanummer en het specifieke probleem |
| Geen lijsten gevonden | N.v.t. | Er zijn geen L-tags in het document |

**Hoe het werkt:** De tool controleert per `L`-tag of:
1. Er minimaal een `LI`-child aanwezig is
2. Elk `LI`-element een `LBody`-child bevat

**Beperkingen:**
- De tool controleert de technische tagstructuur, niet of de inhoud *logisch* een lijst is.
- Geneste lijsten worden als individuele lijsten geteld.
- De tool controleert niet of `Lbl`-tags (opsommingstekens/nummering) aanwezig zijn — deze zijn optioneel in de PDF-specificatie.

---

### 5. Tabellen

#### 5.1 Tabelkoppen (TH-tags)

| Resultaat | Status | Wanneer |
|---|---|---|
| X tabel(len) met koppen | Geen problemen gevonden | TH-tags zijn aanwezig in de tabel |
| Tabelkoppen ontbreken | Probleem | De tabel bevat geen TH-tags. Toont paginanummer en dimensies (rijen x kolommen) |
| Geen tabellen gevonden | N.v.t. | Er zijn geen Table-tags in het document |

**Hoe het werkt:** De tool doorloopt de children van elke `Table`-tag (inclusief `THead`, `TBody`, `TFoot`-groepen) en controleert of er minimaal een `TH`-tag aanwezig is.

#### 5.2 Tabellen met een enkele cel

| Resultaat | Status | Wanneer |
|---|---|---|
| Mogelijk onterecht gebruik van tabel | Waarschuwing | Een tabel bevat slechts een cel (1 rij x 1 kolom of minder). Dit kan duiden op misbruik van de tabelstructuur voor lay-out |

**Hoe het werkt:** De tool berekent het totaal aantal cellen (rijen x kolommen) en waarschuwt als dit 1 of minder is.

**Beperkingen:**
- De tool controleert niet of `Scope`-attributen correct zijn ingesteld op TH-tags.
- Complexe tabellen (samengevoegde cellen, geneste tabellen) worden niet geanalyseerd op correctheid.
- De tool controleert niet of de tabelinhoud *logisch* tabeldata is of onterecht als tabel is gemarkeerd (behalve bij tabellen met een enkele cel).

---

### 6. Navigatie (bladwijzers)

| Resultaat | Status | Wanneer |
|---|---|---|
| Bladwijzers aanwezig | Geen problemen gevonden | Het document bevat bladwijzers (bookmarks). Toont de eerste 15 bladwijzertitels |
| Geen bladwijzers | Waarschuwing | Het document heeft meer dan 4 pagina's maar bevat geen bladwijzers |
| Bladwijzers niet vereist | Geen problemen gevonden | Het document is kort (4 pagina's of minder), bladwijzers zijn niet noodzakelijk |
| Bladwijzers niet controleerbaar | N.v.t. | Het document heeft geen tags |

**Hoe het werkt:** De tool vraagt de PDF-outline (document outline/bookmarks) op via PDF.js en telt het aantal items.

**Beperking:** De tool controleert of bladwijzers *aanwezig* zijn, niet of ze naar de juiste locaties verwijzen of of de titels beschrijvend zijn.

---

## Wat de tool NIET controleert

De volgende aspecten kunnen niet betrouwbaar geautomatiseerd worden gecontroleerd en vereisen handmatige beoordeling door een specialist:

1. **Correct logisch gebruik van structuurelementen** — Of koppen, lijsten en tabellen inhoudelijk correct zijn gebruikt. De tool controleert alleen de technische tagstructuur, niet of een kop ook daadwerkelijk een kop *hoort* te zijn.

2. **Kwaliteit van alternatieve teksten** — Of alt-teksten de inhoud of functie van afbeeldingen accuraat beschrijven. De tool controleert alleen of alt-tekst aanwezig is.

3. **Afbeeldingen die tekst bevatten** — Of afbeeldingen tekst bevatten die als echte tekst beschikbaar zou moeten zijn (images of text).

4. **Diagrammen** — Of diagrammen, grafieken en infographics een toegankelijk alternatief hebben (bijv. een uitgebreide beschrijving of een datatabel).

5. **Complexe tabellen** — Of tabellen met samengevoegde cellen, geneste koppen of meerdere kopniveaus correct zijn opgebouwd met de juiste `Scope`- en `Headers`-attributen.

6. **Ongetagde elementen** — Of er visuele elementen op de pagina staan die niet in de tagstructuur zijn opgenomen (bijv. ongetagde afbeeldingen, decoratieve lijnen of watermerken).

7. **Tekstcontrast in afbeeldingen** — Of tekst die onderdeel is van een afbeelding voldoende contrast heeft met de achtergrond.

8. **Contrast van informatieve elementen** — Of niet-tekstuele informatieve elementen (iconen, grafieklijnen, diagramonderdelen) voldoende contrast hebben.

9. **Nauwkeurigheid van tekstkleurcontrast** — De tool kan tekstkleuren en achtergrondkleuren niet betrouwbaar extraheren uit een PDF. Contrastcontrole vereist visuele inspectie of gespecialiseerde tools.

10. **Betekenisvolle volgorde van informatie** — Of de leesvolgorde in de tagstructuur overeenkomt met de visuele volgorde op de pagina. Verkeerde leesvolgorde is een veelvoorkomend probleem dat alleen handmatig te controleren is.

11. **Taalherkenning bij korte of meertalige documenten** — Bij documenten met weinig tekst of meerdere talen is de automatische taaldetectie onbetrouwbaar. De tool detecteert ook alleen Nederlands, Engels, Duits, Frans en Spaans.

12. **Volledigheid van alineatekst** — Of paragrafen volledige zinnen vormen of fragmenten en onafgemaakte constructies bevatten. Dit vereist natural language processing die niet betrouwbaar client-side uitgevoerd kan worden.

13. **Taalwisselingen binnen het document** — Of het `Lang`-attribuut correct is ingesteld op individuele tags bij tekstfragmenten in een andere taal dan de hoofdtaal.

14. **Formuliervelden** — Of formuliervelden correct zijn gelabeld, of ze een logische tabvolgorde hebben, en of foutmeldingen toegankelijk zijn.

15. **Leesbare links** — Of linkteksten beschrijvend zijn (niet "klik hier" of kale URL's) en of links correct getagd zijn als `Link`-elementen.

16. **Artefacten** — Of decoratieve elementen (paginanummers, kopteksten, voetteksten, achtergrondafbeeldingen) correct als artefact zijn gemarkeerd zodat schermlezers ze overslaan.

---

## Technische werking

### Verwerking
- De tool gebruikt **PDF.js** (versie 4.8.69) om het PDF-bestand client-side te parseren.
- Per pagina wordt de structuurboom (structure tree) doorlopen via `page.getStructTree()`.
- Tekstinhoud wordt opgehaald via `page.getTextContent()` en gekoppeld aan structuurtags via MCID-referenties (Marked Content Identifiers).
- Documentmetadata wordt gelezen via `pdf.getMetadata()`.
- De PDF-outline (bladwijzers) wordt opgehaald via `pdf.getOutline()`.

### Privacy
Het PDF-bestand wordt volledig in de browser verwerkt. Er worden geen gegevens naar een server verstuurd. Het bestand wordt na analyse niet opgeslagen.

### Export
Bevindingen kunnen geexporteerd worden als HTML-rapport met alle controleresultaten, bevindingen per pagina en oplossingsrichtingen.

---

## Statusiniveaus

De tool gebruikt vier statusiniveaus:

| Status | Betekenis |
|---|---|
| **Geen problemen gevonden** | De automatische controle heeft geen problemen gedetecteerd. Dit betekent niet dat het onderdeel volledig correct is — alleen dat er geen geautomatiseerd detecteerbare fouten zijn gevonden. |
| **Probleem** | Er is een concreet probleem gevonden dat opgelost moet worden. Bevat een oplossingsrichting. |
| **Waarschuwing** | Er is een mogelijke probleem gevonden dat handmatige controle vereist. |
| **N.v.t.** | De controle is niet van toepassing (bijv. geen afbeeldingen gevonden, of controle niet uitvoerbaar zonder tags). |

---

*Laatste update: maart 2026*
*Proper Access — properaccess.nl*
