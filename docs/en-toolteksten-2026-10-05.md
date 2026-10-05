# Engelse teksten voor drie toolpagina's

Opgesteld 5 oktober 2026 door Nata, naar aanleiding van de GEO-audit van de Engelse sectie
(weekronde 41, punt 2b). James zet de teksten erin via i18n; de Nederlandse pagina's blijven
zoals ze zijn.

De drie pagina's staan er niet gelijk voor. Bij twee van de drie bestaat de Engelse tekst al.

## 1. /en/tools/alt-text-decision-tree/

Hier bestaat nog geen Engels. `layouts/tools/alt-tekst-keuzehulp.html` heeft geen enkel
`data-i18n`-attribuut en `static/js/webapp-alt-tekst.js` heeft geen taalwoordenboek, dus de
Engelse pagina draait volledig op de Nederlandse tekst.

**De keuzehulp zelf** (vragen, antwoorden, adviezen en voorbeelden) staat nu in
`data/apps/alt_text_decision_tree.json`, met dezelfde `id`-, `next`- en `icon`-waarden als het
Nederlandse bestand, zodat de routes gelijk blijven.

**De tekst om de keuzehulp heen**, in de volgorde waarin die in de layout staat:

| Plek in de layout | Engelse tekst |
| --- | --- |
| `tool-heading__intro` | Answer a few questions about your image and you see straight away which alt text belongs with it, with an example. |
| `tool-heading__punten`, 1 | Works for decorative, informative, functional and complex images |
| `tool-heading__punten`, 2 | Follows WCAG success criterion 1.1.1 |
| `tool-heading__punten`, 3 | Runs in your own browser, without an account and without storing anything |
| `webapp-alt__title` | Choose the right alt text |
| `aria-label` op `webapp-alt__app` | Decision tree steps |
| `noscript` | This decision tree needs JavaScript. Switch JavaScript on to use the tool. |
| `tool-cta`, eerste regel | Want to know more about alt text? Read the [full explanation with examples and common mistakes](/en/blog/wcag-1-1-1-non-text-content/). |
| `tool-cta`, tweede regel | Or [request an audit](/en/contact/) to have every image on your website checked. |

De CTA wijst in het Nederlands naar `/blog/alt-tekst-keuzehulp/`. Dat artikel bestaat niet in
het Engels, dus het Engelse doel is `/en/blog/wcag-1-1-1-non-text-content/`.

## 2. /en/tools/aria-reference/

**Hier hoeft niets geschreven te worden.** `static/js/tool-aria-referentie.js` heeft een
volledig Engels woordenboek (`LANG.en`, regel 1776 en verder): `toolTitle`, `intro`,
`searchLabel`, `searchPlaceholder`, `filterAriaLabel`, `resultsAriaLabel`, `loadMore`,
`ctaHtml` en alle labels in de resultaten.

Wat er overblijft is techniek en geen tekst: de Nederlandse tekst staat als terugvaloptie in
de HTML van de layout en wordt pas door JavaScript vervangen. Een crawler die geen JavaScript
uitvoert, en dus ook een deel van de AI-crawlers, leest de Nederlandse versie van de Engelse
pagina. Dat lijkt me de echte bevinding op deze pagina.

## 3. /en/tools/error-messages/

Ook hier bestaat het Engels al, in `static/js/tool-foutmeldingen.js`: `LANG.en` plus
`FIELDS_EN` en `CATEGORIES_EN`, dus ook de voorbeelden per veldtype. Zelfde terugvalprobleem
als bij de ARIA-referentie.

Twee dingen in het Engelse woordenboek zijn wel tekst, en die kloppen niet:

**`intro`** verwijst naar twee Nederlandse blogartikelen. Voorgestelde Engelse versie:

> Good error messages help users understand and fix form errors. This reference shows examples
> of clear error messages per field type, based on
> [SC&nbsp;3.3.1 Error Identification](/en/blog/wcag-3-3-1-error-identification/) and
> SC&nbsp;3.3.3 Error Suggestion.

3.3.1 bestaat in het Engels, 3.3.3 niet. Daarom staat 3.3.3 hierboven zonder link. Komt dat
artikel er, dan kan de link erbij.

**`ctaLine2`** geeft het telefoonnummer in de Nederlandse notatie, `085 5055 890`, terwijl de
ARIA-referentie op dezelfde site `+31 85 505 5890` gebruikt. Voorgestelde Engelse versie:

> [Request an audit](/en/contact/) or call +31&nbsp;85&nbsp;505&nbsp;5890.
