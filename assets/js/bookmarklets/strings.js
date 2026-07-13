/* Engelse vertalingen voor de WCAG Radar. De Nederlandse tekst is de sleutel;
   PA.t (core.js) zoekt hier de Engelse tegenhanger op. Ontbreekt een sleutel,
   dan valt de lens terug op het Nederlands. De build (build-bookmarklets.js)
   controleert dat elke PA.t-sleutel, elk check-label en elke groepsnaam hier
   een vertaling heeft. Engels is fris geschreven, geen woord-voor-woord
   vertaling. */

PA.EN = {
  /* ---- paneel-chrome (core.js) ---- */
  "{label} uitgezet.": "{label} turned off.",
  "Kon deze check niet uitvoeren.": "This check could not run.",
  "Geen problemen gevonden.": "No issues found.",
  "geen problemen gevonden": "no issues found",
  "1 bevinding": "1 finding",
  "{n} bevindingen": "{n} findings",
  "{i} van {n}": "{i} of {n}",
  "Bevinding {i} van {n}": "Finding {i} of {n}",
  "Vorige bevinding": "Previous finding",
  "Vorige": "Previous",
  "Volgende bevinding": "Next finding",
  "Volgende": "Next",
  "… en nog {n} meer (niet getoond)": "… and {n} more (not shown)",
  "Alle checks uitgezet.": "All checks turned off.",
  "Tabblad {label} geopend.": "Tab {label} opened.",
  "Sleep om het paneel te verplaatsen": "Drag to move the panel",
  "Paneel inklappen": "Collapse panel",
  "Paneel uitklappen": "Expand panel",
  "Lens sluiten": "Close the Radar",
  "Kies een rol": "Choose a role",
  "Alles resetten": "Reset all",
  "Laat het een expert checken": "Have an expert check it",

  /* ---- tabs, rollen en groepen (boot-lens.js) ---- */
  "Redactie": "Editors",
  "Designer": "Designer",
  "Developer": "Developer",
  "Voor webredactie": "For web editors",
  "Voor designers": "For designers",
  "Voor ontwikkelaars": "For developers",
  "Algemeen": "General",
  "Pagina-inhoud": "Page content",
  "Afbeeldingen": "Images",
  "Interactieve elementen": "Interactive elements",
  "Formulieren": "Forms",
  "Kleur": "Colour",
  "Interactie": "Interaction",
  "Pagina aanpassen": "Adapt the page",
  "Beweging": "Motion",
  "Hulpmiddelen": "Tools",
  "Inhoud": "Content",
  "Semantiek": "Semantics",
  "Toetsenbord": "Keyboard",
  "Structuur": "Structure",
  "Inspectie": "Inspection",

  /* ---- check-labels ---- */
  "Afbeeldingen en alt-tekst": "Images and alt text",
  "Koppen en structuur": "Headings and structure",
  "Kwaliteit van kopteksten": "Heading quality",
  "Linkteksten": "Link text",
  "Klikbare afbeeldingen": "Clickable images",
  "Alle links": "All links",
  "Zintuiglijke verwijzingen": "Sensory references",
  "Tabellen": "Tables",
  "Taal van de pagina": "Page language",
  "Lijststructuur": "List structure",
  "Titels van ingesloten kaders (iframes)": "Titles of embedded frames (iframes)",
  "Paginatitel": "Page title",
  "Verborgen elementen tonen": "Show hidden elements",
  "Opmaak uit (leesvolgorde)": "Styles off (reading order)",
  "Toegankelijke naam bij formuliervelden": "Accessible names of form fields",
  "Leesvolgorde (overzicht)": "Reading order (overview)",
  "Foutmeldingen bij formuliervelden": "Error messages on form fields",
  "ARIA-rollen en -attributen": "ARIA roles and attributes",
  "Toon toegankelijke naam": "Show accessible name",
  "Tabvolgorde": "Tab order",
  "Tekst vergroten (200%)": "Resize text (200%)",
  "Focus zichtbaar maken": "Make focus visible",
  "Iframes (titel)": "Iframes (title)",
  "Element-info bij hover": "Element info on hover",
  "Groepen en zichtbare labels": "Groups and visible labels",
  "Autocomplete bij persoonlijke gegevens": "Autocomplete on personal data",
  "Plakken geblokkeerd": "Paste blocked",
  "Gebaren en muis-only bediening": "Gestures and mouse-only controls",
  "Verplichte velden": "Required fields",
  "Tekst contrast": "Text contrast",
  "Grijswaarden (kleurblind-check)": "Grayscale (colour-blindness check)",
  "Doelgrootte (24px)": "Target size (24px)",
  "Tekstafstand (1.4.12)": "Text spacing (1.4.12)",
  "Afbeeldingen uit": "Images off",
  "Liniaal en hulplijnen": "Ruler and guides",
  "Contrast van randen en focus": "Contrast of borders and focus",
  "Links alleen in kleur": "Links by colour alone",
  "Donkere modus": "Dark mode",
  "Reflow (320 px)": "Reflow (320 px)",
  "Automatische beweging": "Automatic motion",

  /* ---- landmarks (leesvolgorde-overzicht) ---- */
  "navigatie": "navigation",
  "hoofdinhoud": "main content",
  "paginakop": "page header",
  "paginavoet": "page footer",
  "zijbalk": "sidebar",
  "zoekgebied": "search area",
  "formulier": "form",
  "gebied": "region",

  /* ---- afbeeldingen en alt-tekst ---- */
  "geen alt-attribuut": "no alt attribute",
  "alt begint met “{word}”: {alt}": "alt starts with “{word}”: {alt}",
  "svg zonder titel": "svg without a title",
  "{imgs} afbeeldingen: {ok} met alt-tekst, {red} met een overbodig woord als “afbeelding” in de alt-tekst, {empty} met leeg alt (alt=\"\"), {missing} zonder alt-attribuut. Daarnaast {svg} zichtbare svg-elementen, waarvan {bare} zonder titel (dat mag, als de svg decoratief is).":
    "{imgs} images: {ok} with alt text, {red} with a redundant word like “image” in the alt text, {empty} with empty alt (alt=\"\"), {missing} without an alt attribute. Plus {svg} visible svg elements, {bare} of which have no title (which is fine if the svg is decorative).",

  /* ---- koppen ---- */
  "H{lvl} (sprong vanaf H{prev})": "H{lvl} (skipped from H{prev})",
  "{n} koppen. {h1} keer H1.": "{n} headings. {h1} H1s.",
  "{n} overgeslagen niveau(s).": "{n} skipped level(s).",
  "Geen overgeslagen niveaus.": "No skipped levels.",
  "lege kop": "empty heading",
  "nietszeggend: “{text}”": "uninformative: “{text}”",
  "{n} koppen: {empty} leeg, {vague} met een nietszeggende tekst zoals “Ga naar” of “Lees meer”. Een goede kop vat samen waar de sectie over gaat.":
    "{n} headings: {empty} empty, {vague} with uninformative text such as “Go to” or “Read more”. A good heading sums up what the section is about.",

  /* ---- links ---- */
  "lege link": "empty link",
  "vaag: “{name}”": "vague: “{name}”",
  "{n} links: {empty} zonder tekst, {vague} met vage tekst zoals “lees meer”.":
    "{n} links: {empty} without text, {vague} with vague text such as “read more”.",
  "klikbare afbeelding zonder naam": "clickable image without a name",
  "naam: {name}": "name: {name}",
  "{n} links en knoppen met een afbeelding erin, {missing} zonder toegankelijke naam. De naam moet de bestemming of functie beschrijven, niet hoe de afbeelding eruitziet.":
    "{n} links and buttons containing an image, {missing} without an accessible name. The name should describe the destination or function, not what the image looks like.",
  "(link zonder tekst)": "(link without text)",
  "{n} links, zoals een screenreader ze voorleest: {empty} zonder tekst, {vague} met vage tekst. Klik op een regel om naar de link op de pagina te springen.":
    "{n} links, as a screen reader announces them: {empty} without text, {vague} with vague text. Click a row to jump to that link on the page.",

  /* ---- zintuiglijke verwijzingen ---- */
  "in alt-tekst: “{word}”": "in alt text: “{word}”",
  "{n} plekken met verwijzingen naar positie, kleur of vorm, zoals “links”, “rechtsboven” of “de rode knop”. Controleer of de instructie ook klopt voor wie niet kan zien waar iets staat of welke kleur het heeft.":
    "{n} places referring to position, colour or shape, such as “on the left”, “top right” or “the red button”. Check that the instruction still works for someone who cannot see where things are or what colour they have.",

  /* ---- tabellen ---- */
  "geen kopcellen": "no header cells",
  "{n} kopcellen": "{n} header cells",
  "geen bijschrift": "no caption",
  "bijschrift aanwezig": "caption present",
  "{n} tabellen, {noHead} zonder kopcellen. Kopcellen vertellen voorleessoftware welke rij of kolom bij een cel hoort. Een bijschrift geeft de tabel een titel.":
    "{n} tables, {noHead} without header cells. Header cells tell assistive software which row or column a cell belongs to. A caption gives the table a title.",

  /* ---- taal ---- */
  "Pagina-taal: lang=\"{lang}\".": "Page language: lang=\"{lang}\".",
  "Let op: geen lang-attribuut op <html>.": "Warning: no lang attribute on <html>.",
  "{n} onderdelen met een eigen taal.": "{n} parts with their own language.",

  /* ---- lijsten ---- */
  "{n} echte lijsten op de pagina.": "{n} real lists on the page.",

  /* ---- iframes ---- */
  "kader zonder titel": "frame without a title",
  "titel: {title}": "title: {title}",
  "{n} zichtbare kaders (iframes), {noTitle} zonder titel. Een titel vertelt een screenreadergebruiker wat er in het kader zit, bijvoorbeeld een video of een kaart.":
    "{n} visible frames (iframes), {noTitle} without a title. A title tells a screen reader user what is inside the frame, for example a video or a map.",
  "iframe zonder titel": "iframe without a title",
  "{n} zichtbare iframes, {noTitle} zonder titel.": "{n} visible iframes, {noTitle} without a title.",

  /* ---- paginatitel ---- */
  "Paginatitel: “{t}”": "Page title: “{t}”",
  "Deze pagina heeft geen titel.": "This page has no title.",

  /* ---- verborgen elementen ---- */
  "{n} verborgen elementen gemarkeerd (kunnen wel of niet door een screenreader gelezen worden).":
    "{n} hidden elements marked (they may or may not be read by a screen reader).",

  /* ---- opmaak uit ---- */
  "Alle opmaak uitgezet. De pagina toont nu de kale leesvolgorde die een screenreader volgt. Klik nogmaals om terug te zetten.":
    "All styling turned off. The page now shows the bare reading order a screen reader follows. Click again to restore.",

  /* ---- formuliervelden ---- */
  "toegankelijke naam: {name}": "accessible name: {name}",
  "alleen placeholder (geen toegankelijke naam)": "placeholder only (no accessible name)",
  "geen toegankelijke naam": "no accessible name",
  "{total} formuliervelden. {missing} zonder toegankelijke naam": "{total} form fields. {missing} without an accessible name",
  ", {n} alleen met placeholder (telt niet). ": ", {n} with only a placeholder (does not count). ",
  "Let op: zichtbare tekst naast een veld telt alleen als toegankelijke naam als hij via <label for>, aria-label of aria-labelledby aan het veld is gekoppeld.":
    "Note: visible text next to a field only counts as its accessible name when it is linked to the field via <label for>, aria-label or aria-labelledby.",

  /* ---- leesvolgorde-overzicht ---- */
  "kop {lvl}: {text}": "heading {lvl}: {text}",
  "(leeg)": "(empty)",
  "link: {name}": "link: {name}",
  "(zonder tekst)": "(no text)",
  "knop: {name}": "button: {name}",
  "(zonder naam)": "(no name)",
  "veld: {name}": "field: {name}",
  "(zonder label)": "(no label)",
  "De pagina zoals hulpsoftware hem doorloopt: {n} koppen, landmarks, links, knoppen en velden in documentvolgorde. {p} ervan missen een tekst of naam. Loopt het verhaal logisch als je alleen deze lijst leest?":
    "The page as assistive software walks through it: {n} headings, landmarks, links, buttons and fields in document order. {p} of them lack a text or name. Does the story make sense reading this list alone?",

  /* ---- foutmeldingen ---- */
  "foutmelding niet gekoppeld: {q}": "error message not linked: {q}",
  " (id={id}, geen veld verwijst hierheen)": " (id={id}, no field points here)",
  " (geen id, kan niet gekoppeld worden)": " (no id, cannot be linked)",
  "gekoppeld ({via}), maar geen aria-invalid=\"true\" op het veld": "linked ({via}), but no aria-invalid=\"true\" on the field",
  "goed gekoppeld ({via}, aria-invalid=\"true\")": "properly linked ({via}, aria-invalid=\"true\")",
  "{n} zichtbare foutmeldingen. {ok} goed gekoppeld, {warn} gekoppeld zonder aria-invalid, {err} niet gekoppeld aan een veld. Een screenreader kondigt een foutmelding pas aan als hij via aria-describedby of aria-errormessage aan het invoerveld hangt (en idealiter het veld aria-invalid=\"true\" heeft).":
    "{n} visible error messages. {ok} properly linked, {warn} linked without aria-invalid, {err} not linked to a field. A screen reader only announces an error message when it is attached to the input via aria-describedby or aria-errormessage (ideally with aria-invalid=\"true\" on the field).",

  /* ---- ARIA ---- */
  "↯ onbekende role": "↯ unknown role",
  "↯ {role} zonder {attr}": "↯ {role} without {attr}",
  "↯ aria-hidden verbergt focusbare inhoud": "↯ aria-hidden hides focusable content",
  "↯ {a} → #{id} bestaat niet": "↯ {a} → #{id} does not exist",
  "{n} elementen met ARIA. {broken} gebroken referentie(s) naar niet-bestaande id's, {roles} onbekende rollen, {attrs} rollen zonder verplicht attribuut (zoals checkbox zonder aria-checked), {hidden} keer aria-hidden op focusbare inhoud.":
    "{n} elements with ARIA. {broken} broken reference(s) to non-existent ids, {roles} unknown roles, {attrs} roles missing a required attribute (such as checkbox without aria-checked), {hidden} times aria-hidden on focusable content.",

  /* ---- toegankelijke naam ---- */
  "{n} interactieve elementen. {missing} zonder toegankelijke naam.": "{n} interactive elements. {missing} without an accessible name.",

  /* ---- tabvolgorde ---- */
  "{n} · tabindex={v} (breekt volgorde)": "{n} · tabindex={v} (breaks the order)",
  "{n} focusbare elementen, genummerd in tabvolgorde.": "{n} focusable elements, numbered in tab order.",
  "{n} met een positieve tabindex: die springen vóór de rest en verstoren de logische volgorde.": "{n} with a positive tabindex: those jump ahead of the rest and disturb the logical order.",
  "Geen positieve tabindex-waarden gevonden.": "No positive tabindex values found.",

  /* ---- tekst vergroten / focus ---- */
  "Alle tekst staat nu op 200%. Kijk of er tekst wegvalt, overlapt of buiten beeld raakt en of alles nog te bedienen is. Klik nogmaals om terug te zetten.":
    "All text is now at 200%. Check whether text disappears, overlaps or falls off screen, and whether everything still works. Click again to restore.",
  "Elke focus krijgt nu een duidelijke magenta rand. Tab door de pagina om te zien waar de focus heen springt.":
    "Every focus now gets a clear magenta outline. Tab through the page to see where focus goes.",

  /* ---- element-info ---- */
  "naam: “{name}”": "name: “{name}”",
  "focusbaar": "focusable",
  "niet focusbaar": "not focusable",
  "tekst {fg} op {bg}": "text {fg} on {bg}",
  "contrast {r}:1": "contrast {r}:1",
  "Beweeg met de muis over de pagina. Je ziet tag, id, class, rol, naam, afmeting, focusbaarheid en (waar meetbaar) kleur en contrast van elk element.":
    "Move your mouse over the page. You see tag, id, class, role, name, size, focusability and (where measurable) colour and contrast of each element.",
  "Werkt ook in {n} ingesloten kaders van dit domein": "Also works in {n} embedded frames from this domain",
  "; {n} kaders van andere domeinen zijn technisch niet bereikbaar.": "; {n} frames from other domains are technically out of reach.",

  /* ---- groepen en labels ---- */
  "fieldset zonder legend": "fieldset without a legend",
  "groep zonder naam": "group without a name",
  "legend: {name}": "legend: {name}",
  "geen zichtbaar label (alleen aria)": "no visible label (aria only)",
  "{n} groepen (fieldset/role=group) bekeken, {p} zonder naam of legend. Daarnaast {inv} velden met alleen een aria-label en geen zichtbaar label. Een icoon als zichtbaar label mag, bijvoorbeeld een vergrootglas bij een zoekveld.":
    "{n} groups (fieldset/role=group) checked, {p} without a name or legend. Plus {inv} fields with only an aria-label and no visible label. An icon can serve as a visible label, for example a magnifying glass on a search field.",

  /* ---- autocomplete ---- */
  "geen autocomplete": "no autocomplete",
  "onbekende autocomplete-waarde: {v}": "unknown autocomplete value: {v}",
  "{n} velden die om persoonlijke gegevens lijken te vragen: {missing} zonder autocomplete, {invalid} met een onbekende waarde. Autocomplete helpt onder meer mensen met een motorische of cognitieve beperking.":
    "{n} fields that appear to ask for personal data: {missing} without autocomplete, {invalid} with an unknown value. Autocomplete helps people with motor or cognitive disabilities, among others.",

  /* ---- plakken ---- */
  "blokkeert {what}": "blocks {what}",
  "eigen {what}-gedrag": "custom {what} behaviour",
  "{n} elementen blokkeren plakken, kopiëren of slepen via inline code. Let op: blokkades via scripts (addEventListener) kan deze check niet zien; test het plakken zelf ook even.":
    "{n} elements block pasting, copying or dragging via inline code. Note: blocks added through scripts (addEventListener) are invisible to this check; also test pasting yourself.",

  /* ---- gebaren ---- */
  "klikbaar via script, niet met toetsenbord": "clickable via script, not by keyboard",
  "script-klikbaar (wel focusbaar): check Enter/spatie": "script-clickable (focusable): check Enter/space",
  "drag-en-drop: is er een toetsenbord-alternatief?": "drag and drop: is there a keyboard alternative?",
  "cursor:pointer zonder interactieve rol": "cursor:pointer without an interactive role",
  "{a} elementen zijn via inline script klikbaar maar niet met het toetsenbord te bereiken, {b} gebruiken drag-en-drop en {c} hebben een muiscursor zonder interactieve rol (vaak script-klikbaar gemaakt). Swipe-gebaren en listeners via addEventListener kan de lens niet zien; test bediening ook zelf met alleen het toetsenbord.":
    "{a} elements are clickable via inline script but unreachable by keyboard, {b} use drag and drop and {c} have a mouse cursor without an interactive role (often made clickable by script). Swipe gestures and addEventListener listeners are invisible to the Radar; also test the page yourself using only the keyboard.",

  /* ---- verplichte velden ---- */
  "verplicht ({how})": "required ({how})",
  "label zegt verplicht, maar required/aria-required ontbreekt": "label says required, but required/aria-required is missing",
  "{n} velden zijn als verplicht gemarkeerd voor hulpsoftware (required of aria-required). {m} velden lijken verplicht (sterretje of 'verplicht' in het label) maar missen die markering; een screenreader-gebruiker hoort het dan niet.":
    "{n} fields are marked as required for assistive software (required or aria-required). {m} fields look required (asterisk or 'required' in the label) but lack that marking; a screen reader user will not hear it.",

  /* ---- tekst contrast ---- */
  "{r}:1 (moet ≥ {need})": "{r}:1 (must be ≥ {need})",
  "Meet twee kleuren met de pipetten, bijvoorbeeld tekst en achtergrond.": "Measure two colours with the pickers, for example text and background.",
  "Je browser heeft geen pixel-pipet. Klik na de knop op een element: pipet 1 meet de tekstkleur, pipet 2 de achtergrondkleur.":
    "Your browser has no pixel eyedropper. After pressing the button, click an element: picker 1 measures the text colour, picker 2 the background colour.",
  "normale tekst": "normal text",
  "grote tekst": "large text",
  "{norm} (eis ≥ {need}:1): {oordeel}": "{norm} (requires ≥ {need}:1): {oordeel}",
  "voldoet": "passes",
  "voldoet niet": "fails",
  "Contrast {c}. Normale tekst: {a}. Grote tekst: {b}.": "Contrast {c}. Normal text: {a}. Large text: {b}.",
  "Klik op de pagina om kleur {i} te meten.": "Click the page to measure colour {i}.",
  "Pipet 1": "Picker 1",
  "Pipet 2": "Picker 2",
  "Meet kleur {i} met de pipet": "Measure colour {i} with the picker",
  "Contrast: ": "Contrast: ",
  "Sleep om het venster te verplaatsen": "Drag to move this window",
  "{n} tekstelementen op een effen achtergrond gemeten, geen met te weinig contrast.": "{n} text elements on a solid background measured, none with insufficient contrast.",
  "{fails} van {n} tekstelementen op een effen achtergrond hebben te weinig contrast (rood gemarkeerd).": "{fails} of {n} text elements on a solid background have insufficient contrast (marked in red).",
  "Meet tekst op een afbeelding of gradient zelf met de pipetten linksonder.": "Measure text on an image or gradient yourself with the pickers in the bottom left.",

  /* ---- grijswaarden / tekstafstand / afbeeldingen uit / liniaal ---- */
  "De pagina is nu grijs. Controleer of informatie (zoals links of foutmeldingen) ook zonder kleur te herkennen is.":
    "The page is now grey. Check that information (such as links or error messages) is still recognisable without colour.",
  "De WCAG-tekstafstanden zijn toegepast. Kijk of er tekst wegvalt, overlapt of wordt afgekapt. Klik nogmaals om terug te zetten.":
    "The WCAG text spacing values are applied. Check whether text disappears, overlaps or is cut off. Click again to restore.",
  "Afbeeldingen zijn vervaagd. Kijk of de pagina zonder beeld nog te begrijpen is en of de alt-teksten kloppen.":
    "Images are dimmed. Check whether the page still makes sense without imagery and whether the alt texts hold up.",
  "Een horizontale en verticale hulplijn volgen je muis en tonen de x- en y-positie in pixels, zodat je uitlijning en afstanden kunt nalopen.":
    "A horizontal and vertical guide follow your mouse and show the x and y position in pixels, so you can verify alignment and distances.",

  /* ---- doelgrootte ---- */
  "{n} klikbare elementen, elk met hun afmeting op de pagina; {small} kleiner dan 24 bij 24 pixels (oranje). Let op: een klein doel kan toch voldoen, bijvoorbeeld een link midden in een tekst of een doel met genoeg ruimte eromheen.":
    "{n} clickable elements, each showing its size on the page; {small} smaller than 24 by 24 pixels (orange). Note: a small target can still pass, for example a link within a sentence or a target with enough space around it.",

  /* ---- contrast van randen en focus ---- */
  "rand {r}:1": "border {r}:1",
  "rand niet meetbaar (transparant of achtergrondafbeelding)": "border not measurable (transparent or background image)",
  "geen rand: check of het veld anders zichtbaar is": "no border: check the field is visible some other way",
  "geen zichtbare focusstijl": "no visible focus style",
  "focusring {r}:1": "focus ring {r}:1",
  "{f} invoervelden bekeken: {lb} met een rand onder 3:1. Focusstijl gemeten op {c} elementen: {nr} zonder zichtbare focusstijl, {lr} met een focusring onder 3:1. De lens zet daarvoor kort focus op elk element.":
    "{f} input fields checked: {lb} with a border below 3:1. Focus style measured on {c} elements: {nr} without a visible focus style, {lr} with a focus ring below 3:1. The Radar briefly focuses each element to measure this.",

  /* ---- links alleen in kleur ---- */
  "alleen kleur, {r}:1 t.o.v. tekst": "colour only, {r}:1 against the text",
  "alleen kleur ({r}:1): check hover/focus-cue": "colour only ({r}:1): check hover/focus cue",
  "{n} links in lopende tekst bekeken: {co} zijn alleen door kleur te onderscheiden (geen onderstreping), waarvan {low} met minder dan 3:1 verschil met de tekstkleur. Onderstrepen is de veiligste oplossing.":
    "{n} links in running text checked: {co} are distinguished by colour alone (no underline), {low} of which have less than 3:1 difference with the text colour. Underlining is the safest fix.",

  /* ---- donkere modus ---- */
  "Let op: {n} stylesheets van andere domeinen kon de lens niet lezen.": "Note: {n} stylesheets from other domains could not be read.",
  "Geen dark-mode-stijlen gevonden op deze pagina (geen prefers-color-scheme: dark in de leesbare css).": "No dark mode styles found on this page (no prefers-color-scheme: dark in the readable css).",
  "Heeft de site wel een donkere modus, test die dan via de systeeminstelling of de DevTools-emulatie.": "If the site does have a dark mode, test it via the system setting or DevTools emulation.",
  "De donkere modus van de site is geforceerd toegepast ({n} dark-mode-regels).": "The site's dark mode has been force-applied ({n} dark mode rules).",
  "Controleer contrast en leesbaarheid, bijvoorbeeld met de check Tekst contrast. Klik nogmaals om terug te zetten.": "Check contrast and readability, for example with the Text contrast check. Click again to restore.",

  /* ---- reflow ---- */
  "steekt {n}px buiten beeld": "extends {n}px off screen",
  "Deze pagina heeft op de huidige breedte ({w}px) al horizontale scroll; de breedste boosdoeners zijn gemarkeerd.": "This page already has horizontal scrolling at the current width ({w}px); the widest culprits are marked.",
  "Geen horizontale scroll op de huidige breedte ({w}px).": "No horizontal scrolling at the current width ({w}px).",
  "Er is een venster van 320px breed geopend met deze pagina: controleer daar of alle inhoud zonder horizontale scroll en zonder verlies te gebruiken is (WCAG 1.4.10).": "A 320px-wide window with this page has been opened: check there that all content works without horizontal scrolling and without loss (WCAG 1.4.10).",
  "Het 320px-venster werd door de browser geblokkeerd; sta pop-ups toe en zet de check opnieuw aan.": "The browser blocked the 320px window; allow pop-ups and turn the check on again.",

  /* ---- automatische beweging ---- */
  "animatie: oneindig ({d}s per cyclus)": "animation: infinite ({d}s per cycle)",
  "animatie: {s}s": "animation: {s}s",
  "marquee: beweegt altijd": "marquee: always moving",
  " (met bediening)": " (with controls)",
  " zonder bediening": " without controls",
  "beweging in ingesloten kader ({n} animaties)": "motion inside embedded frame ({n} animations)",
  "kader van ander domein: beweging hierin kan de lens niet zien, kijk zelf even": "frame from another domain: the Radar cannot see motion inside, take a look yourself",
  "Automatische beweging: {n} later geladen ingesloten kader(s) gemarkeerd.": "Automatic motion: {n} late-loading embedded frame(s) marked.",
  "beweegt via script ({n} wijzigingen in 5s)": "moves via script ({n} changes in 5s)",
  "Automatische beweging: {n} scriptgestuurde bewegers gemarkeerd na 5 seconden meekijken.": "Automatic motion: {n} script-driven movers marked after watching for 5 seconds.",
  "{n} elementen met doorlopende of lange beweging (CSS-animaties, autoplay-video's, marquee, kaders van dit domein).": "{n} elements with continuous or long motion (CSS animations, autoplay videos, marquee, frames from this domain).",
  "Daarnaast {n} ingesloten kaders van andere domeinen waar de lens niet in kan kijken: controleer die zelf op beweging.": "Plus {n} embedded frames from other domains the Radar cannot look into: check those for motion yourself.",
  "De lens kijkt 5 seconden mee naar scriptgestuurde beweging en blijft nieuwe kaders opmerken zolang de check aanstaat, ook als ze pas na scrollen laden. Beweging langer dan 5 seconden moet te pauzeren, stoppen of verbergen zijn.":
    "The Radar watches script-driven motion for 5 seconds and keeps noticing new frames while the check is on, even when they load after scrolling. Motion lasting longer than 5 seconds must be pausable, stoppable or hideable."
};

/* Taalgevoelige woordenlijsten. Alleen 'nl' is verplicht; ontbreekt een
   Engelse variant, dan gebruikt PA.rx de Nederlandse (die soms al tweetalig
   is, zoals altRedundant en requiredHint). */
PA.RX = {
  nl: {
    sensory: new RegExp("\\b(" +
      ["rechtsboven", "rechtsonder", "linksboven", "linksonder", "hierboven", "hiernaast", "rechts", "links"].join("|") +
      "|(?:rode|groene|blauwe|gele|oranje|paarse|roze|grijze|zwarte|witte|gekleurde) (?:knop(?:pen)?|button(?:s)?|links?|balk(?:en)?|kader(?:s)?|vak(?:ken)?|blok(?:ken)?|cirkels?|ico(?:on|nen)|pictogram(?:men)?|tekst)" +
      "|(?:ronde|vierkante|rechthoekige|driehoekige) (?:knop(?:pen)?|button(?:s)?|links?|balk(?:en)?|kader(?:s)?|vak(?:ken)?|blok(?:ken)?|cirkels?|ico(?:on|nen)|pictogram(?:men)?|tekst)" +
      ")\\b", "i"),
    vagueHeading: /^(ga (direct )?naar|direct naar|spring naar|lees meer|lees verder|meer( info(rmatie)?)?|klik hier|welkom|introductie|inleiding|titel|kop|heading|titel hier|untitled|zonder titel|lorem ipsum)$/,
    altRedundant: /^(afbeelding|foto|illustratie|plaatje|icoon|logo afbeelding|image|picture|photo|photograph|graphic|icon)\b( van| of)?/i,
    requiredHint: /\*|verplicht|required|mandatory/i
  },
  en: {
    sensory: new RegExp("\\b(" +
      ["top right", "top left", "bottom right", "bottom left", "on the left", "on the right", "to the left", "to the right", "above"].join("|") +
      "|(?:red|green|blue|yellow|orange|purple|pink|grey|gray|black|white|colou?red) (?:buttons?|links?|bars?|box(?:es)?|blocks?|circles?|icons?|frames?|text)" +
      "|(?:round|square|rectangular|triangular) (?:buttons?|links?|bars?|box(?:es)?|blocks?|circles?|icons?|frames?|text)" +
      ")\\b", "i"),
    vagueHeading: /^(go to|jump to|skip to|read more|learn more|more( info(rmation)?)?|click here|welcome|introduction|intro|title|heading|untitled|no title|lorem ipsum)$/
  }
};
