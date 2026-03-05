/**
 * ARIA Rollen & Attributen Referentie — Proper Access
 * WAI-ARIA 1.2 reference lookup with search and category filtering.
 */
(function () {
  "use strict";

  /* ===== DATA ===== */

  var ROLES = [
    /* ── Widget-rollen ── */
    {
      name: "alert",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een element met belangrijke, vaak tijdgevoelige informatie. Wordt automatisch voorgelezen door screenreaders zodra het verschijnt.",
      desc_en: "An element with important, often time-sensitive information. Automatically announced by screen readers when it appears.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-atomic", "aria-busy", "aria-live"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="alert">\n  Er is een fout opgetreden bij het opslaan.\n</div>',
      tags: ["alert", "melding", "waarschuwing", "fout", "notificatie"]
    },
    {
      name: "alertdialog",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een modaal dialoogvenster dat de gebruiker onderbreekt met een belangrijke melding en een reactie verwacht.",
      desc_en: "A modal dialog that interrupts the user with an important message and expects a response.",
      superclassRoles: ["alert", "dialog"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-modal"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="alertdialog" aria-modal="true" aria-labelledby="dlg-title" aria-describedby="dlg-desc">\n  <h2 id="dlg-title">Bevestiging</h2>\n  <p id="dlg-desc">Weet je zeker dat je dit wilt verwijderen?</p>\n  <button>Annuleren</button>\n  <button>Verwijderen</button>\n</div>',
      tags: ["alertdialog", "bevestiging", "modaal", "popup"]
    },
    {
      name: "button",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een interactief element dat een actie uitvoert wanneer het wordt geactiveerd door de gebruiker.",
      desc_en: "An interactive element that performs an action when activated by the user.",
      superclassRoles: ["command"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-expanded", "aria-pressed", "aria-disabled", "aria-haspopup"],
      presentationalChildren: true,
      htmlEquivalent: "<button>",
      snippet: '<!-- Gebruik altijd een native button: -->\n<button type="button">Opslaan</button>\n\n<!-- Alleen als het echt niet anders kan: -->\n<div role="button" tabindex="0">Opslaan</div>',
      tags: ["button", "knop", "actie", "klik", "submit"]
    },
    {
      name: "checkbox",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een selectievakje dat aan, uit of gedeeltelijk geselecteerd kan zijn.",
      desc_en: "A checkbox that can be checked, unchecked, or partially checked.",
      superclassRoles: ["input"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-checked", "aria-readonly", "aria-required", "aria-invalid"],
      presentationalChildren: true,
      htmlEquivalent: '<input type="checkbox">',
      snippet: '<!-- Native: -->\n<label>\n  <input type="checkbox"> Akkoord met voorwaarden\n</label>\n\n<!-- Met ARIA: -->\n<div role="checkbox" aria-checked="false" tabindex="0">\n  Akkoord met voorwaarden\n</div>',
      tags: ["checkbox", "selectievakje", "aanvinken", "formulier"]
    },
    {
      name: "combobox",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een invoerveld gecombineerd met een popup-element (lijst, grid of boomstructuur) waarmee de gebruiker een waarde kan kiezen.",
      desc_en: "An input field combined with a popup element (list, grid, or tree) allowing the user to choose a value.",
      superclassRoles: ["input"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-expanded", "aria-autocomplete", "aria-activedescendant", "aria-controls", "aria-haspopup"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<label for="city">Stad</label>\n<input id="city" role="combobox"\n  aria-expanded="false"\n  aria-controls="city-list"\n  aria-autocomplete="list">\n<ul id="city-list" role="listbox" hidden>\n  <li role="option">Amsterdam</li>\n  <li role="option">Rotterdam</li>\n</ul>',
      tags: ["combobox", "autocomplete", "dropdown", "zoeklijst", "suggesties"]
    },
    {
      name: "dialog",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een dialoogvenster dat bovenop de pagina-inhoud wordt weergegeven. Kan modaal of niet-modaal zijn.",
      desc_en: "A dialog window displayed on top of the page content. Can be modal or non-modal.",
      superclassRoles: ["window"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-modal", "aria-labelledby", "aria-describedby"],
      presentationalChildren: false,
      htmlEquivalent: "<dialog>",
      snippet: '<!-- Native HTML: -->\n<dialog open aria-labelledby="dlg-title">\n  <h2 id="dlg-title">Instellingen</h2>\n  <p>Pas je voorkeuren aan.</p>\n  <button>Sluiten</button>\n</dialog>',
      tags: ["dialog", "modaal", "popup", "venster", "modal"]
    },
    {
      name: "grid",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een interactieve tabelstructuur met rijen en cellen, navigeerbaar met pijltjestoetsen.",
      desc_en: "An interactive table structure with rows and cells, navigable with arrow keys.",
      superclassRoles: ["composite", "table"],
      requiredContext: [],
      requiredOwnedElements: ["row"],
      supportedAttributes: ["aria-activedescendant", "aria-colcount", "aria-rowcount", "aria-multiselectable", "aria-readonly"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="grid" aria-label="Medewerkers">\n  <div role="row">\n    <div role="columnheader">Naam</div>\n    <div role="columnheader">Functie</div>\n  </div>\n  <div role="row">\n    <div role="gridcell">Jan</div>\n    <div role="gridcell">Developer</div>\n  </div>\n</div>',
      tags: ["grid", "tabel", "interactief", "raster", "spreadsheet"]
    },
    {
      name: "gridcell",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een cel in een grid of treegrid.",
      desc_en: "A cell in a grid or treegrid.",
      superclassRoles: ["cell", "widget"],
      requiredContext: ["row"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-readonly", "aria-required", "aria-selected", "aria-expanded"],
      presentationalChildren: false,
      htmlEquivalent: "<td>",
      snippet: '<div role="row">\n  <div role="gridcell" tabindex="0">Bewerkbare cel</div>\n</div>',
      tags: ["gridcell", "cel", "tabelcel"]
    },
    {
      name: "link",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een interactieve verwijzing naar een interne of externe bron.",
      desc_en: "An interactive reference to an internal or external resource.",
      superclassRoles: ["command"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-expanded", "aria-haspopup", "aria-disabled"],
      presentationalChildren: true,
      htmlEquivalent: "<a href>",
      snippet: '<!-- Native: -->\n<a href="/over-ons">Over ons</a>\n\n<!-- Met ARIA (vermijd dit): -->\n<span role="link" tabindex="0" onclick="navigate()">Over ons</span>',
      tags: ["link", "verwijzing", "href", "navigatie", "anchor"]
    },
    {
      name: "listbox",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een lijst waaruit de gebruiker een of meerdere items kan selecteren.",
      desc_en: "A list from which the user can select one or more items.",
      superclassRoles: ["select"],
      requiredContext: [],
      requiredOwnedElements: ["option"],
      supportedAttributes: ["aria-multiselectable", "aria-required", "aria-activedescendant", "aria-orientation"],
      presentationalChildren: false,
      htmlEquivalent: "<select>",
      snippet: '<label id="kleur-label">Kies een kleur</label>\n<ul role="listbox" aria-labelledby="kleur-label">\n  <li role="option" aria-selected="true">Rood</li>\n  <li role="option" aria-selected="false">Blauw</li>\n  <li role="option" aria-selected="false">Groen</li>\n</ul>',
      tags: ["listbox", "keuzelijst", "select", "opties"]
    },
    {
      name: "menu",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een lijst met keuzes of acties voor de gebruiker, zoals een contextmenu of actiemenu.",
      desc_en: "A list of choices or actions for the user, such as a context menu or action menu.",
      superclassRoles: ["select"],
      requiredContext: [],
      requiredOwnedElements: ["menuitem", "menuitemcheckbox", "menuitemradio"],
      supportedAttributes: ["aria-activedescendant", "aria-orientation"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<button aria-haspopup="true" aria-expanded="false" aria-controls="acties-menu">\n  Acties\n</button>\n<ul id="acties-menu" role="menu">\n  <li role="menuitem">Bewerken</li>\n  <li role="menuitem">Dupliceren</li>\n  <li role="menuitem">Verwijderen</li>\n</ul>',
      tags: ["menu", "actiemenu", "contextmenu", "dropdown"]
    },
    {
      name: "menubar",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een horizontale menubalk, meestal bovenaan een applicatie, met menu-items die submenu's kunnen bevatten.",
      desc_en: "A horizontal menu bar, usually at the top of an application, with menu items that can contain submenus.",
      superclassRoles: ["menu"],
      requiredContext: [],
      requiredOwnedElements: ["menuitem", "menuitemcheckbox", "menuitemradio"],
      supportedAttributes: ["aria-activedescendant", "aria-orientation"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="menubar" aria-label="Hoofdmenu">\n  <div role="menuitem" aria-haspopup="true">Bestand</div>\n  <div role="menuitem" aria-haspopup="true">Bewerken</div>\n  <div role="menuitem">Help</div>\n</div>',
      tags: ["menubar", "menubalk", "hoofdmenu", "applicatiemenu"]
    },
    {
      name: "menuitem",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een item in een menu of menubalk.",
      desc_en: "An item in a menu or menu bar.",
      superclassRoles: ["command"],
      requiredContext: ["menu", "menubar", "group"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-disabled", "aria-expanded", "aria-haspopup", "aria-posinset", "aria-setsize"],
      presentationalChildren: true,
      htmlEquivalent: null,
      snippet: '<ul role="menu">\n  <li role="menuitem">Kopieer</li>\n  <li role="menuitem">Plak</li>\n</ul>',
      tags: ["menuitem", "menu-item", "actie"]
    },
    {
      name: "menuitemcheckbox",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een menu-item met een aan/uit-status (checkbox in een menu).",
      desc_en: "A menu item with an on/off state (checkbox in a menu).",
      superclassRoles: ["checkbox", "menuitem"],
      requiredContext: ["menu", "menubar", "group"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-checked"],
      presentationalChildren: true,
      htmlEquivalent: null,
      snippet: '<ul role="menu">\n  <li role="menuitemcheckbox" aria-checked="true">Donkere modus</li>\n  <li role="menuitemcheckbox" aria-checked="false">Compacte weergave</li>\n</ul>',
      tags: ["menuitemcheckbox", "menu-checkbox", "instelling"]
    },
    {
      name: "menuitemradio",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een menu-item in een groep waarvan er slechts een tegelijk geselecteerd kan zijn.",
      desc_en: "A menu item in a group where only one can be selected at a time.",
      superclassRoles: ["menuitemcheckbox", "radio"],
      requiredContext: ["menu", "menubar", "group"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-checked"],
      presentationalChildren: true,
      htmlEquivalent: null,
      snippet: '<ul role="menu">\n  <li role="menuitemradio" aria-checked="true">Klein</li>\n  <li role="menuitemradio" aria-checked="false">Middel</li>\n  <li role="menuitemradio" aria-checked="false">Groot</li>\n</ul>',
      tags: ["menuitemradio", "menu-radio", "keuze"]
    },
    {
      name: "option",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een selecteerbaar item in een listbox.",
      desc_en: "A selectable item in a listbox.",
      superclassRoles: ["input"],
      requiredContext: ["listbox", "group"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-selected", "aria-checked", "aria-disabled", "aria-posinset", "aria-setsize"],
      presentationalChildren: true,
      htmlEquivalent: "<option>",
      snippet: '<ul role="listbox">\n  <li role="option" aria-selected="true">Optie 1</li>\n  <li role="option" aria-selected="false">Optie 2</li>\n</ul>',
      tags: ["option", "optie", "keuzelijst", "item"]
    },
    {
      name: "progressbar",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Toont de voortgang van een langlopende taak.",
      desc_en: "Shows the progress of a long-running task.",
      superclassRoles: ["range"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext"],
      presentationalChildren: true,
      htmlEquivalent: "<progress>",
      snippet: '<!-- Native: -->\n<progress value="70" max="100">70%</progress>\n\n<!-- Met ARIA: -->\n<div role="progressbar"\n  aria-valuenow="70"\n  aria-valuemin="0"\n  aria-valuemax="100"\n  aria-label="Uploadvoortgang">\n  70%\n</div>',
      tags: ["progressbar", "voortgang", "laadbalk", "progress"]
    },
    {
      name: "radio",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een keuzerondje in een groep waarvan er slechts een tegelijk geselecteerd kan zijn.",
      desc_en: "A radio button in a group where only one can be selected at a time.",
      superclassRoles: ["input"],
      requiredContext: ["radiogroup"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-checked", "aria-disabled", "aria-posinset", "aria-setsize"],
      presentationalChildren: true,
      htmlEquivalent: '<input type="radio">',
      snippet: '<!-- Native: -->\n<fieldset>\n  <legend>Bezorgmethode</legend>\n  <label><input type="radio" name="bezorg" value="post"> Post</label>\n  <label><input type="radio" name="bezorg" value="afhalen"> Afhalen</label>\n</fieldset>',
      tags: ["radio", "keuzerondje", "radiobutton", "formulier"]
    },
    {
      name: "radiogroup",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een groep keuzerondjes waarvan er slechts een tegelijk geselecteerd kan zijn.",
      desc_en: "A group of radio buttons where only one can be selected at a time.",
      superclassRoles: ["select"],
      requiredContext: [],
      requiredOwnedElements: ["radio"],
      supportedAttributes: ["aria-required", "aria-readonly", "aria-orientation"],
      presentationalChildren: false,
      htmlEquivalent: "<fieldset>",
      snippet: '<div role="radiogroup" aria-labelledby="groep-label">\n  <span id="groep-label">Taal</span>\n  <div role="radio" aria-checked="true" tabindex="0">Nederlands</div>\n  <div role="radio" aria-checked="false" tabindex="-1">Engels</div>\n</div>',
      tags: ["radiogroup", "keuzegroep", "radiobuttons"]
    },
    {
      name: "scrollbar",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een grafisch object dat de scrollpositie binnen een scrollbaar gebied aangeeft.",
      desc_en: "A graphical object that indicates the scroll position within a scrollable area.",
      superclassRoles: ["range"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-controls", "aria-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax"],
      presentationalChildren: true,
      htmlEquivalent: null,
      snippet: '<div role="scrollbar"\n  aria-controls="content"\n  aria-orientation="vertical"\n  aria-valuenow="25"\n  aria-valuemin="0"\n  aria-valuemax="100"\n  tabindex="0">\n</div>',
      tags: ["scrollbar", "schuifbalk", "scroll"]
    },
    {
      name: "searchbox",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een tekstveld specifiek bedoeld voor zoekfunctionaliteit.",
      desc_en: "A text field specifically intended for search functionality.",
      superclassRoles: ["textbox"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-activedescendant", "aria-autocomplete", "aria-placeholder"],
      presentationalChildren: false,
      htmlEquivalent: '<input type="search">',
      snippet: '<label for="zoek">Zoeken</label>\n<input id="zoek" type="search" role="searchbox"\n  aria-autocomplete="list"\n  aria-controls="suggesties">',
      tags: ["searchbox", "zoekveld", "zoeken", "search"]
    },
    {
      name: "slider",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een invoerelement waarmee de gebruiker een waarde selecteert binnen een bereik door een schuifregelaar te verplaatsen.",
      desc_en: "An input element that allows the user to select a value within a range by moving a slider.",
      superclassRoles: ["input", "range"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext", "aria-orientation"],
      presentationalChildren: true,
      htmlEquivalent: '<input type="range">',
      snippet: '<!-- Native: -->\n<label for="volume">Volume</label>\n<input id="volume" type="range" min="0" max="100" value="50">\n\n<!-- Met ARIA: -->\n<div role="slider"\n  aria-label="Volume"\n  aria-valuenow="50"\n  aria-valuemin="0"\n  aria-valuemax="100"\n  tabindex="0">\n</div>',
      tags: ["slider", "schuifregelaar", "range", "bereik"]
    },
    {
      name: "spinbutton",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een invoerveld voor numerieke waarden met knoppen om de waarde te verhogen of verlagen.",
      desc_en: "An input field for numeric values with buttons to increase or decrease the value.",
      superclassRoles: ["composite", "input", "range"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext", "aria-required", "aria-readonly"],
      presentationalChildren: false,
      htmlEquivalent: '<input type="number">',
      snippet: '<label for="aantal">Aantal</label>\n<input id="aantal" type="number" role="spinbutton"\n  aria-valuenow="1"\n  aria-valuemin="0"\n  aria-valuemax="99">',
      tags: ["spinbutton", "numeriek", "getal", "aantal", "number"]
    },
    {
      name: "switch",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een schakelaar die aan of uit kan staan, vergelijkbaar met een fysieke lichtschakelaar.",
      desc_en: "A switch that can be on or off, similar to a physical light switch.",
      superclassRoles: ["checkbox"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-checked"],
      presentationalChildren: true,
      htmlEquivalent: null,
      snippet: '<button role="switch" aria-checked="false">\n  Donkere modus\n</button>',
      tags: ["switch", "schakelaar", "toggle", "aan/uit"]
    },
    {
      name: "tab",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een tab in een tablijst die een tabpaneel activeert wanneer geselecteerd.",
      desc_en: "A tab in a tab list that activates a tab panel when selected.",
      superclassRoles: ["widget"],
      requiredContext: ["tablist"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-selected", "aria-controls", "aria-disabled", "aria-expanded", "aria-haspopup"],
      presentationalChildren: true,
      htmlEquivalent: null,
      snippet: '<div role="tablist" aria-label="Instellingen">\n  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Algemeen</button>\n  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Privacy</button>\n</div>\n<div role="tabpanel" id="panel1" aria-labelledby="tab1">Inhoud algemeen...</div>\n<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Inhoud privacy...</div>',
      tags: ["tab", "tabblad", "tabinterface"]
    },
    {
      name: "tablist",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een lijst met tabs die elk een tabpaneel activeren.",
      desc_en: "A list of tabs that each activate a tab panel.",
      superclassRoles: ["composite"],
      requiredContext: [],
      requiredOwnedElements: ["tab"],
      supportedAttributes: ["aria-activedescendant", "aria-orientation", "aria-multiselectable"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="tablist" aria-label="Productinformatie">\n  <button role="tab" aria-selected="true">Beschrijving</button>\n  <button role="tab" aria-selected="false">Reviews</button>\n</div>',
      tags: ["tablist", "tablijst", "tabs"]
    },
    {
      name: "tabpanel",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Het inhoudspaneel dat hoort bij een tab.",
      desc_en: "The content panel associated with a tab.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="tabpanel" id="panel1" aria-labelledby="tab1">\n  <p>Inhoud van het eerste tabblad.</p>\n</div>',
      tags: ["tabpanel", "tabinhoud", "paneel"]
    },
    {
      name: "textbox",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een invoerveld voor vrije tekst, zoals een tekstveld of een tekstvak met meerdere regels.",
      desc_en: "An input field for free text, such as a text field or a multi-line text area.",
      superclassRoles: ["input"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
      presentationalChildren: false,
      htmlEquivalent: "<input> / <textarea>",
      snippet: '<!-- Eenregelig: -->\n<label for="naam">Naam</label>\n<input id="naam" type="text">\n\n<!-- Meerregelig: -->\n<label for="bericht">Bericht</label>\n<textarea id="bericht"></textarea>',
      tags: ["textbox", "tekstveld", "invoerveld", "input", "textarea"]
    },
    {
      name: "tooltip",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een contextuele popup met beschrijvende informatie over een element, meestal zichtbaar bij hover of focus.",
      desc_en: "A contextual popup with descriptive information about an element, usually visible on hover or focus.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<button aria-describedby="tip1">Opslaan</button>\n<div role="tooltip" id="tip1">Sla je wijzigingen op (Ctrl+S)</div>',
      tags: ["tooltip", "hint", "uitleg", "popup"]
    },
    {
      name: "tree",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een hiërarchische lijst met items die in- en uitgeklapt kunnen worden, zoals een bestandsstructuur.",
      desc_en: "A hierarchical list of items that can be expanded and collapsed, such as a file structure.",
      superclassRoles: ["select"],
      requiredContext: [],
      requiredOwnedElements: ["treeitem"],
      supportedAttributes: ["aria-multiselectable", "aria-activedescendant", "aria-orientation"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<ul role="tree" aria-label="Bestanden">\n  <li role="treeitem" aria-expanded="true">src/\n    <ul role="group">\n      <li role="treeitem">index.js</li>\n      <li role="treeitem">style.css</li>\n    </ul>\n  </li>\n</ul>',
      tags: ["tree", "boom", "boomstructuur", "bestandslijst"]
    },
    {
      name: "treegrid",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een grid waarvan de rijen in- en uitgeklapt kunnen worden als een boomstructuur.",
      desc_en: "A grid whose rows can be expanded and collapsed as a tree structure.",
      superclassRoles: ["grid", "tree"],
      requiredContext: [],
      requiredOwnedElements: ["row"],
      supportedAttributes: ["aria-activedescendant", "aria-multiselectable"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<table role="treegrid" aria-label="Afdelingen">\n  <tr role="row" aria-expanded="true" aria-level="1">\n    <td role="gridcell">Engineering</td>\n  </tr>\n  <tr role="row" aria-level="2">\n    <td role="gridcell">Frontend team</td>\n  </tr>\n</table>',
      tags: ["treegrid", "boomtabel", "hiërarchisch"]
    },
    {
      name: "treeitem",
      type: "role",
      category: "widget",
      categoryLabel: "Widget-rol",
      catLabel_en: "Widget role",
      description: "Een item in een tree. Kan kinderen bevatten en in-/uitgeklapt worden.",
      desc_en: "An item in a tree. Can contain children and be expanded/collapsed.",
      superclassRoles: ["listitem", "option"],
      requiredContext: ["tree", "group"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-expanded", "aria-selected", "aria-checked", "aria-level", "aria-posinset", "aria-setsize"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<li role="treeitem" aria-expanded="false" aria-level="1">\n  Documenten\n  <ul role="group" hidden>\n    <li role="treeitem" aria-level="2">Rapport.pdf</li>\n  </ul>\n</li>',
      tags: ["treeitem", "boomitem", "node"]
    },

    /* ── Landmark-rollen ── */
    {
      name: "banner",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "De sitewide header met logo, navigatie en zoekfunctionaliteit. Standaard is het <header>-element in de body een banner.",
      desc_en: "The sitewide header with logo, navigation, and search functionality. By default, the <header> element in the body is a banner.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<header>",
      snippet: '<header>\n  <a href="/">Logo</a>\n  <nav aria-label="Hoofdnavigatie">...</nav>\n</header>',
      tags: ["banner", "header", "koptekst", "siteheader"]
    },
    {
      name: "complementary",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "Aanvullende content die gerelateerd is aan de hoofdcontent maar ook zelfstandig bruikbaar is, zoals een sidebar.",
      desc_en: "Supplementary content related to the main content but also independently useful, such as a sidebar.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<aside>",
      snippet: '<aside aria-label="Gerelateerde artikelen">\n  <h2>Lees ook</h2>\n  <ul>...</ul>\n</aside>',
      tags: ["complementary", "aside", "sidebar", "zijbalk", "aanvullend"]
    },
    {
      name: "contentinfo",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "De sitewide footer met copyright, contactgegevens en links. Standaard is het <footer>-element in de body een contentinfo.",
      desc_en: "The sitewide footer with copyright, contact details, and links. By default, the <footer> element in the body is a contentinfo.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<footer>",
      snippet: '<footer>\n  <p>&copy; 2025 Bedrijfsnaam</p>\n  <nav aria-label="Footernavigatie">...</nav>\n</footer>',
      tags: ["contentinfo", "footer", "voettekst", "sitefooter"]
    },
    {
      name: "form",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "Een regio met formulierelementen. Wordt pas een landmark als het een toegankelijke naam heeft.",
      desc_en: "A region containing form elements. Only becomes a landmark when it has an accessible name.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<form>",
      snippet: '<form aria-labelledby="form-title">\n  <h2 id="form-title">Contactformulier</h2>\n  <label for="email">E-mail</label>\n  <input id="email" type="email">\n  <button type="submit">Versturen</button>\n</form>',
      tags: ["form", "formulier", "invoer"]
    },
    {
      name: "main",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "De hoofdcontent van de pagina. Er mag maar een zichtbaar main-element per pagina zijn.",
      desc_en: "The main content of the page. Only one visible main element is allowed per page.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<main>",
      snippet: '<main id="main-content">\n  <h1>Paginatitel</h1>\n  <p>Hoofdinhoud van de pagina.</p>\n</main>',
      tags: ["main", "hoofdinhoud", "content", "hoofdcontent"]
    },
    {
      name: "navigation",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "Een regio met navigatielinks naar andere pagina's of secties binnen de pagina.",
      desc_en: "A region containing navigation links to other pages or sections within the page.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<nav>",
      snippet: '<nav aria-label="Hoofdnavigatie">\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/diensten">Diensten</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>',
      tags: ["navigation", "nav", "navigatie", "menu", "links"]
    },
    {
      name: "region",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "Een generiek landmarkgebied dat belangrijk genoeg is om in de landmarklijst te verschijnen. Vereist een toegankelijke naam.",
      desc_en: "A generic landmark area important enough to appear in the landmark list. Requires an accessible name.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<section>",
      snippet: '<section aria-labelledby="sec-title">\n  <h2 id="sec-title">Laatste nieuws</h2>\n  <p>Inhoud van deze sectie.</p>\n</section>',
      tags: ["region", "section", "sectie", "regio", "gebied"]
    },
    {
      name: "search",
      type: "role",
      category: "landmark",
      categoryLabel: "Landmark-rol",
      catLabel_en: "Landmark role",
      description: "Een regio met zoekfunctionaliteit voor de site of applicatie.",
      desc_en: "A region with search functionality for the site or application.",
      superclassRoles: ["landmark"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<search>",
      snippet: '<!-- HTML: -->\n<search>\n  <label for="zoek">Zoeken</label>\n  <input id="zoek" type="search">\n  <button>Zoek</button>\n</search>\n\n<!-- Met ARIA: -->\n<form role="search" aria-label="Site doorzoeken">\n  <input type="search" aria-label="Zoeken">\n  <button>Zoek</button>\n</form>',
      tags: ["search", "zoeken", "zoekveld", "zoekfunctie"]
    },

    /* ── Documentstructuur-rollen ── */
    {
      name: "application",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Geeft aan dat een regio zich als een desktopapplicatie gedraagt. Screenreaders schakelen over naar applicatiemodus. Gebruik met grote voorzichtigheid.",
      desc_en: "Indicates that a region behaves like a desktop application. Screen readers switch to application mode. Use with great caution.",
      superclassRoles: ["structure"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-activedescendant"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<!-- Gebruik alleen voor echte webapplicaties zoals een\n     spreadsheet of teksteditor. NIET voor gewone websites. -->\n<div role="application" aria-label="Spreadsheet">\n  ...\n</div>',
      tags: ["application", "applicatie", "webapp", "app"]
    },
    {
      name: "article",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een onafhankelijk stuk content dat op zichzelf kan staan, zoals een blogpost, nieuwsbericht of commentaar.",
      desc_en: "An independent piece of content that can stand on its own, such as a blog post, news article, or comment.",
      superclassRoles: ["document"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<article>",
      snippet: '<article>\n  <h2>Titel van het artikel</h2>\n  <p>Inhoud van het artikel.</p>\n  <footer>Gepubliceerd op 1 januari 2025</footer>\n</article>',
      tags: ["article", "artikel", "blogpost", "bericht"]
    },
    {
      name: "cell",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een cel in een tabel.",
      desc_en: "A cell in a table.",
      superclassRoles: ["section"],
      requiredContext: ["row"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan"],
      presentationalChildren: false,
      htmlEquivalent: "<td>",
      snippet: '<table>\n  <tr>\n    <td>Celinhoud</td>\n  </tr>\n</table>',
      tags: ["cell", "cel", "tabelcel", "td"]
    },
    {
      name: "columnheader",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een header-cel voor een kolom in een tabel of grid.",
      desc_en: "A header cell for a column in a table or grid.",
      superclassRoles: ["cell", "gridcell"],
      requiredContext: ["row"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-sort", "aria-colindex"],
      presentationalChildren: false,
      htmlEquivalent: "<th>",
      snippet: '<table>\n  <thead>\n    <tr>\n      <th scope="col" aria-sort="ascending">Naam</th>\n      <th scope="col">E-mail</th>\n    </tr>\n  </thead>\n</table>',
      tags: ["columnheader", "kolomkop", "th", "tabelkop"]
    },
    {
      name: "definition",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "De definitie van een term.",
      desc_en: "The definition of a term.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<dd>",
      snippet: '<dl>\n  <dt>WCAG</dt>\n  <dd role="definition">Web Content Accessibility Guidelines</dd>\n</dl>',
      tags: ["definition", "definitie", "verklaring", "dd"]
    },
    {
      name: "document",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Markeert content als een document dat gelezen kan worden, in tegenstelling tot een applicatie. Dit is de standaard modus van webpagina's.",
      desc_en: "Marks content as a document that can be read, as opposed to an application. This is the default mode of web pages.",
      superclassRoles: ["structure"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<!-- Handig binnen een role="application" om terug\n     te schakelen naar documentmodus: -->\n<div role="application">\n  <div role="document">\n    <p>Deze tekst kan normaal gelezen worden.</p>\n  </div>\n</div>',
      tags: ["document", "leesmodus", "pagina"]
    },
    {
      name: "feed",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een scrollbare lijst artikelen waarbij nieuwe artikelen automatisch worden geladen als de gebruiker scrollt.",
      desc_en: "A scrollable list of articles where new articles are automatically loaded as the user scrolls.",
      superclassRoles: ["list"],
      requiredContext: [],
      requiredOwnedElements: ["article"],
      supportedAttributes: ["aria-busy", "aria-setsize"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="feed" aria-label="Nieuwsfeed">\n  <article aria-posinset="1" aria-setsize="-1">\n    <h2>Eerste bericht</h2>\n  </article>\n  <article aria-posinset="2" aria-setsize="-1">\n    <h2>Tweede bericht</h2>\n  </article>\n</div>',
      tags: ["feed", "nieuwsfeed", "tijdlijn", "artikellijst"]
    },
    {
      name: "figure",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een visueel element met een optioneel bijschrift, zoals een afbeelding, diagram of codefragment.",
      desc_en: "A visual element with an optional caption, such as an image, diagram, or code fragment.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<figure>",
      snippet: '<figure>\n  <img src="grafiek.png" alt="Omzetgrafiek Q4 2025">\n  <figcaption>Figuur 1: Omzet per kwartaal</figcaption>\n</figure>',
      tags: ["figure", "figuur", "afbeelding", "illustratie"]
    },
    {
      name: "group",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een groep gerelateerde elementen die niet bedoeld is als landmark.",
      desc_en: "A group of related elements not intended as a landmark.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-activedescendant", "aria-disabled"],
      presentationalChildren: false,
      htmlEquivalent: "<fieldset>",
      snippet: '<fieldset>\n  <legend>Adresgegevens</legend>\n  <label for="straat">Straat</label>\n  <input id="straat">\n  <label for="plaats">Plaats</label>\n  <input id="plaats">\n</fieldset>',
      tags: ["group", "groep", "fieldset", "gerelateerd"]
    },
    {
      name: "heading",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een kop voor een sectie van de pagina. Gebruik altijd native HTML-koppen (h1-h6) in plaats van deze rol.",
      desc_en: "A heading for a section of the page. Always use native HTML headings (h1-h6) instead of this role.",
      superclassRoles: ["sectionhead"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-level"],
      presentationalChildren: true,
      htmlEquivalent: "<h1> - <h6>",
      snippet: '<!-- Gebruik altijd native koppen: -->\n<h1>Hoofdtitel</h1>\n<h2>Subtitel</h2>\n\n<!-- Alleen als het echt niet anders kan: -->\n<div role="heading" aria-level="2">Subtitel</div>',
      tags: ["heading", "kop", "titel", "h1", "h2", "h3"]
    },
    {
      name: "img",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een afbeelding of visueel element. Gebruik voor complexe afbeeldingen die uit meerdere elementen bestaan (bijv. SVG).",
      desc_en: "An image or visual element. Use for complex images composed of multiple elements (e.g., SVG).",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: true,
      htmlEquivalent: "<img>",
      snippet: '<!-- Native: -->\n<img src="logo.png" alt="Bedrijfslogo">\n\n<!-- SVG als afbeelding: -->\n<svg role="img" aria-label="Staafgrafiek met omzetcijfers">\n  ...\n</svg>',
      tags: ["img", "afbeelding", "image", "plaatje", "svg"]
    },
    {
      name: "list",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een lijst met items.",
      desc_en: "A list of items.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: ["listitem"],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<ul> / <ol>",
      snippet: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>',
      tags: ["list", "lijst", "ul", "ol", "opsomming"]
    },
    {
      name: "listitem",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een item in een lijst.",
      desc_en: "An item in a list.",
      superclassRoles: ["section"],
      requiredContext: ["list", "directory"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-level", "aria-posinset", "aria-setsize"],
      presentationalChildren: false,
      htmlEquivalent: "<li>",
      snippet: '<ul>\n  <li>Lijstitem</li>\n</ul>',
      tags: ["listitem", "lijstitem", "li"]
    },
    {
      name: "math",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een wiskundige uitdrukking.",
      desc_en: "A mathematical expression.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<math>",
      snippet: '<div role="math" aria-label="a kwadraat plus b kwadraat is c kwadraat">\n  a&sup2; + b&sup2; = c&sup2;\n</div>',
      tags: ["math", "wiskunde", "formule", "berekening"]
    },
    {
      name: "none",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Verwijdert de semantische betekenis van een element. Synoniem voor presentation. Het element wordt onzichtbaar voor screenreaders maar de inhoud blijft toegankelijk.",
      desc_en: "Removes the semantic meaning of an element. Synonym for presentation. The element becomes invisible to screen readers but its content remains accessible.",
      superclassRoles: ["structure"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<!-- Verwijder de semantiek van een tabel die alleen\n     voor layout wordt gebruikt: -->\n<table role="none">\n  <tr>\n    <td>Kolom 1</td>\n    <td>Kolom 2</td>\n  </tr>\n</table>',
      tags: ["none", "presentation", "decoratief", "layout"]
    },
    {
      name: "note",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een opmerking of aanvulling bij de hoofdcontent.",
      desc_en: "A note or annotation supplementing the main content.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="note">\n  <strong>Let op:</strong> Deze functie is alleen beschikbaar voor premium-gebruikers.\n</div>',
      tags: ["note", "opmerking", "notitie", "letop"]
    },
    {
      name: "presentation",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Verwijdert de semantische betekenis van een element. Synoniem voor none.",
      desc_en: "Removes the semantic meaning of an element. Synonym for none.",
      superclassRoles: ["structure"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<!-- Decoratieve afbeelding: -->\n<img src="decoratie.png" role="presentation" alt="">\n\n<!-- Layout-tabel: -->\n<table role="presentation">\n  <tr><td>Geen echte tabel</td></tr>\n</table>',
      tags: ["presentation", "none", "decoratief", "layout", "verbergen"]
    },
    {
      name: "row",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een rij in een tabel, grid of treegrid.",
      desc_en: "A row in a table, grid, or treegrid.",
      superclassRoles: ["group", "widget"],
      requiredContext: ["grid", "rowgroup", "table", "treegrid"],
      requiredOwnedElements: ["cell", "columnheader", "gridcell", "rowheader"],
      supportedAttributes: ["aria-colindex", "aria-expanded", "aria-level", "aria-rowindex", "aria-selected"],
      presentationalChildren: false,
      htmlEquivalent: "<tr>",
      snippet: '<table>\n  <tr>\n    <td>Cel 1</td>\n    <td>Cel 2</td>\n  </tr>\n</table>',
      tags: ["row", "rij", "tr", "tabelrij"]
    },
    {
      name: "rowgroup",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een groep rijen in een tabel (thead, tbody, tfoot).",
      desc_en: "A group of rows in a table (thead, tbody, tfoot).",
      superclassRoles: ["structure"],
      requiredContext: ["grid", "table", "treegrid"],
      requiredOwnedElements: ["row"],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<thead> / <tbody> / <tfoot>",
      snippet: '<table>\n  <thead>\n    <tr><th>Kop</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n</table>',
      tags: ["rowgroup", "rijgroep", "thead", "tbody", "tfoot"]
    },
    {
      name: "rowheader",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een header-cel voor een rij in een tabel.",
      desc_en: "A header cell for a row in a table.",
      superclassRoles: ["cell", "gridcell"],
      requiredContext: ["row"],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-sort", "aria-rowindex"],
      presentationalChildren: false,
      htmlEquivalent: '<th scope="row">',
      snippet: '<table>\n  <tr>\n    <th scope="row">Januari</th>\n    <td>150</td>\n    <td>200</td>\n  </tr>\n</table>',
      tags: ["rowheader", "rijkop", "th", "tabelrijkop"]
    },
    {
      name: "separator",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een scheidingslijn tussen secties of groepen menu-items. Kan focusbaar zijn als het een instelbare scheiding is.",
      desc_en: "A divider between sections or groups of menu items. Can be focusable if it is an adjustable separator.",
      superclassRoles: ["structure"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax"],
      presentationalChildren: true,
      htmlEquivalent: "<hr>",
      snippet: '<!-- Decoratief: -->\n<hr>\n\n<!-- Focusbaar (instelbare paneelscheiding): -->\n<div role="separator"\n  tabindex="0"\n  aria-valuenow="50"\n  aria-valuemin="0"\n  aria-valuemax="100">\n</div>',
      tags: ["separator", "scheidingslijn", "hr", "divider"]
    },
    {
      name: "table",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een niet-interactieve tabel met data gerangschikt in rijen en kolommen.",
      desc_en: "A non-interactive table with data arranged in rows and columns.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: ["row"],
      supportedAttributes: ["aria-colcount", "aria-rowcount"],
      presentationalChildren: false,
      htmlEquivalent: "<table>",
      snippet: '<table>\n  <caption>Omzet per kwartaal</caption>\n  <thead>\n    <tr><th>Kwartaal</th><th>Omzet</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Q1</td><td>&euro; 50.000</td></tr>\n  </tbody>\n</table>',
      tags: ["table", "tabel", "data", "gegevens"]
    },
    {
      name: "term",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een woord of zin met een bijbehorende definitie.",
      desc_en: "A word or phrase with an associated definition.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: "<dt>",
      snippet: '<dl>\n  <dt>ARIA</dt>\n  <dd>Accessible Rich Internet Applications</dd>\n</dl>',
      tags: ["term", "begrip", "definitie", "dt"]
    },
    {
      name: "toolbar",
      type: "role",
      category: "document-structure",
      categoryLabel: "Documentstructuur",
      catLabel_en: "Document structure",
      description: "Een werkbalk met knoppen of andere bedieningselementen, gegroepeerd als een logisch geheel.",
      desc_en: "A toolbar with buttons or other controls, grouped as a logical unit.",
      superclassRoles: ["group"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-activedescendant", "aria-orientation"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="toolbar" aria-label="Tekstopmaak">\n  <button aria-pressed="false">Vet</button>\n  <button aria-pressed="false">Cursief</button>\n  <button aria-pressed="false">Onderstreept</button>\n</div>',
      tags: ["toolbar", "werkbalk", "knoppen", "actiebalk"]
    },

    /* ── Live-regio-rollen ── */
    {
      name: "log",
      type: "role",
      category: "live-region-role",
      categoryLabel: "Live-regio",
      catLabel_en: "Live region",
      description: "Een regio waar nieuwe informatie in chronologische volgorde wordt toegevoegd, zoals een chatlog of activiteitenlog.",
      desc_en: "A region where new information is added in chronological order, such as a chat log or activity log.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-live", "aria-relevant"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="log" aria-label="Chatberichten" aria-live="polite">\n  <p>Jan: Hallo!</p>\n  <p>Piet: Goedemorgen!</p>\n</div>',
      tags: ["log", "logboek", "chatlog", "geschiedenis"]
    },
    {
      name: "marquee",
      type: "role",
      category: "live-region-role",
      categoryLabel: "Live-regio",
      catLabel_en: "Live region",
      description: "Een regio met niet-essentiële informatie die regelmatig verandert, zoals een scrollende nieuwsticker.",
      desc_en: "A region with non-essential information that changes regularly, such as a scrolling news ticker.",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-live"],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="marquee" aria-label="Koerswijzigingen" aria-live="off">\n  AEX: +1,2% | DAX: -0,5%\n</div>',
      tags: ["marquee", "ticker", "scrolltekst", "koersen"]
    },
    {
      name: "status",
      type: "role",
      category: "live-region-role",
      categoryLabel: "Live-regio",
      catLabel_en: "Live region",
      description: "Een regio met statusmeldingen die niet belangrijk genoeg zijn om als alert aan te kondigen. Heeft impliciet aria-live=\"polite\".",
      superclassRoles: ["section"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: ["aria-atomic", "aria-live"],
      presentationalChildren: false,
      htmlEquivalent: "<output>",
      snippet: '<!-- Native: -->\n<output>3 resultaten gevonden</output>\n\n<!-- Met ARIA: -->\n<div role="status">3 resultaten gevonden</div>',
      tags: ["status", "statusmelding", "resultaat", "feedback"]
    },
    {
      name: "timer",
      type: "role",
      category: "live-region-role",
      categoryLabel: "Live-regio",
      catLabel_en: "Live region",
      description: "Een element dat een lopende timer of aftelling weergeeft.",
      desc_en: "An element that displays a running timer or countdown.",
      superclassRoles: ["status"],
      requiredContext: [],
      requiredOwnedElements: [],
      supportedAttributes: [],
      presentationalChildren: false,
      htmlEquivalent: null,
      snippet: '<div role="timer" aria-label="Resterende tijd" aria-live="off">\n  02:30\n</div>',
      tags: ["timer", "aftelling", "countdown", "klok", "tijd"]
    }
  ];

  var ATTRIBUTES = [
    /* ── States ── */
    {
      name: "aria-busy",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft aan dat een element wordt bijgewerkt en dat hulptechnologie moet wachten tot de update compleet is.",
      desc_en: "Indicates that an element is being updated and assistive technology should wait until the update is complete.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<div role="feed" aria-busy="true">\n  Laden...\n</div>',
      tags: ["busy", "bezig", "laden", "loading"]
    },
    {
      name: "aria-checked",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft de huidige aangevinkte status aan van checkboxes, radio buttons en switches.",
      desc_en: "Indicates the current checked state of checkboxes, radio buttons, and switches.",
      valueType: "true | false | mixed | undefined",
      allowedValues: ["true", "false", "mixed", "undefined"],
      usedByRoles: ["checkbox", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "treeitem"],
      htmlEquivalent: "checked",
      snippet: '<div role="checkbox" aria-checked="false" tabindex="0">\n  Onthoud mij\n</div>',
      tags: ["checked", "aangevinkt", "geselecteerd", "checkbox"]
    },
    {
      name: "aria-current",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft aan welk element het huidige item is in een set, zoals de huidige pagina in navigatie.",
      desc_en: "Indicates which element is the current item in a set, such as the current page in navigation.",
      valueType: "token",
      allowedValues: ["page", "step", "location", "date", "time", "true", "false"],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<nav>\n  <a href="/" aria-current="page">Home</a>\n  <a href="/diensten">Diensten</a>\n  <a href="/contact">Contact</a>\n</nav>',
      tags: ["current", "huidig", "actief", "pagina", "stap"]
    },
    {
      name: "aria-disabled",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft aan dat een element zichtbaar maar niet interactief is. In tegenstelling tot het HTML disabled-attribuut is het element nog focusbaar.",
      desc_en: "Indicates that an element is visible but not interactive. Unlike the HTML disabled attribute, the element is still focusable.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["button", "link", "menuitem", "tab", "input-rollen"],
      htmlEquivalent: "disabled",
      snippet: '<button aria-disabled="true">\n  Versturen (niet beschikbaar)\n</button>',
      tags: ["disabled", "uitgeschakeld", "inactief", "niet-beschikbaar"]
    },
    {
      name: "aria-expanded",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft aan of een element (bijv. een menulijst of boomstructuur) is uitgeklapt of ingeklapt.",
      desc_en: "Indicates whether an element (e.g., a menu list or tree structure) is expanded or collapsed.",
      valueType: "true | false | undefined",
      allowedValues: ["true", "false", "undefined"],
      usedByRoles: ["button", "combobox", "link", "menuitem", "tab", "treeitem"],
      htmlEquivalent: null,
      snippet: '<button aria-expanded="false" aria-controls="menu1">\n  Menu\n</button>\n<ul id="menu1" hidden>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>',
      tags: ["expanded", "uitgeklapt", "open", "dicht", "toggle", "inklapbaar"]
    },
    {
      name: "aria-hidden",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Verbergt een element en al zijn kinderen voor hulptechnologie. Het element blijft visueel zichtbaar. Gebruik met voorzichtigheid.",
      desc_en: "Hides an element and all its children from assistive technology. The element remains visually visible. Use with caution.",
      valueType: "true | false | undefined",
      allowedValues: ["true", "false", "undefined"],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<!-- Decoratief icoon verbergen: -->\n<button>\n  <span aria-hidden="true">&#x2716;</span>\n  Sluiten\n</button>',
      tags: ["hidden", "verborgen", "onzichtbaar", "decoratief"]
    },
    {
      name: "aria-invalid",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft aan dat de ingevoerde waarde niet voldoet aan het verwachte formaat.",
      desc_en: "Indicates that the entered value does not meet the expected format.",
      valueType: "token",
      allowedValues: ["true", "false", "grammar", "spelling"],
      usedByRoles: ["textbox", "combobox", "listbox", "spinbutton", "checkbox", "radio"],
      htmlEquivalent: null,
      snippet: '<label for="email">E-mail</label>\n<input id="email" type="email"\n  aria-invalid="true"\n  aria-errormessage="email-err">\n<span id="email-err">Voer een geldig e-mailadres in.</span>',
      tags: ["invalid", "ongeldig", "fout", "validatie", "formulier"]
    },
    {
      name: "aria-pressed",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft de ingedrukte status aan van een toggle-knop.",
      desc_en: "Indicates the pressed state of a toggle button.",
      valueType: "true | false | mixed | undefined",
      allowedValues: ["true", "false", "mixed", "undefined"],
      usedByRoles: ["button"],
      htmlEquivalent: null,
      snippet: '<button aria-pressed="false">\n  Donkere modus\n</button>',
      tags: ["pressed", "ingedrukt", "toggle", "schakelknop"]
    },
    {
      name: "aria-selected",
      type: "attribute",
      category: "state",
      categoryLabel: "State",
      catLabel_en: "State",
      description: "Geeft de geselecteerde status aan van items in een lijst, tab of grid.",
      desc_en: "Indicates the selected state of items in a list, tab, or grid.",
      valueType: "true | false | undefined",
      allowedValues: ["true", "false", "undefined"],
      usedByRoles: ["option", "tab", "gridcell", "row", "treeitem"],
      htmlEquivalent: "selected",
      snippet: '<div role="tablist">\n  <button role="tab" aria-selected="true">Tab 1</button>\n  <button role="tab" aria-selected="false">Tab 2</button>\n</div>',
      tags: ["selected", "geselecteerd", "actief", "gekozen"]
    },

    /* ── Properties ── */
    {
      name: "aria-autocomplete",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan of en hoe een tekstveld automatische suggesties toont bij het typen.",
      desc_en: "Indicates whether and how a text field shows automatic suggestions while typing.",
      valueType: "token",
      allowedValues: ["none", "inline", "list", "both"],
      usedByRoles: ["combobox", "textbox", "searchbox"],
      htmlEquivalent: null,
      snippet: '<input role="combobox"\n  aria-autocomplete="list"\n  aria-controls="suggesties"\n  aria-expanded="false">',
      tags: ["autocomplete", "suggesties", "aanvullen", "zoeksuggesties"]
    },
    {
      name: "aria-haspopup",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan dat een element een popup-element kan triggeren (menu, listbox, tree, grid of dialog).",
      desc_en: "Indicates that an element can trigger a popup element (menu, listbox, tree, grid, or dialog).",
      valueType: "token",
      allowedValues: ["false", "true", "menu", "listbox", "tree", "grid", "dialog"],
      usedByRoles: ["button", "combobox", "link", "menuitem", "tab", "textbox"],
      htmlEquivalent: null,
      snippet: '<button aria-haspopup="menu" aria-expanded="false">\n  Opties\n</button>',
      tags: ["haspopup", "popup", "dropdown", "menu", "dialog"]
    },
    {
      name: "aria-level",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieert het hiërarchische niveau van een element binnen een structuur (bijv. kopniveau, boomdiepte).",
      desc_en: "Defines the hierarchical level of an element within a structure (e.g., heading level, tree depth).",
      valueType: "integer",
      allowedValues: ["1", "2", "3", "..."],
      usedByRoles: ["heading", "listitem", "row", "treeitem"],
      htmlEquivalent: null,
      snippet: '<!-- h1-h6 hebben impliciet een level.\n     Gebruik aria-level alleen als je role="heading" gebruikt: -->\n<div role="heading" aria-level="3">Subtitel</div>',
      tags: ["level", "niveau", "diepte", "hiërarchie", "kop"]
    },
    {
      name: "aria-modal",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan dat een dialog modaal is: de rest van de pagina is niet toegankelijk zolang het dialoogvenster open is.",
      desc_en: "Indicates that a dialog is modal: the rest of the page is not accessible while the dialog is open.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["dialog", "alertdialog"],
      htmlEquivalent: null,
      snippet: '<div role="dialog" aria-modal="true" aria-labelledby="titel">\n  <h2 id="titel">Bevestiging</h2>\n  <p>Weet je het zeker?</p>\n  <button>Ja</button>\n  <button>Nee</button>\n</div>',
      tags: ["modal", "modaal", "dialog", "blokkeren"]
    },
    {
      name: "aria-multiline",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan of een tekstveld meerdere regels tekst accepteert.",
      desc_en: "Indicates whether a text field accepts multiple lines of text.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["textbox"],
      htmlEquivalent: null,
      snippet: '<div role="textbox" aria-multiline="true" contenteditable="true"\n  aria-label="Bericht">\n</div>',
      tags: ["multiline", "meerregelig", "textarea", "tekstveld"]
    },
    {
      name: "aria-multiselectable",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan dat meerdere items tegelijk geselecteerd kunnen worden in een lijst, grid of boom.",
      desc_en: "Indicates that multiple items can be selected simultaneously in a list, grid, or tree.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["grid", "listbox", "tablist", "tree"],
      htmlEquivalent: "multiple",
      snippet: '<ul role="listbox" aria-multiselectable="true" aria-label="Kleuren">\n  <li role="option" aria-selected="true">Rood</li>\n  <li role="option" aria-selected="true">Blauw</li>\n  <li role="option" aria-selected="false">Groen</li>\n</ul>',
      tags: ["multiselectable", "meervoudige selectie", "meerdere", "multi"]
    },
    {
      name: "aria-orientation",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan of een element horizontaal of verticaal is georiënteerd.",
      desc_en: "Indicates whether an element is oriented horizontally or vertically.",
      valueType: "token",
      allowedValues: ["horizontal", "vertical", "undefined"],
      usedByRoles: ["scrollbar", "separator", "slider", "tablist", "toolbar", "listbox", "menu", "menubar", "radiogroup", "tree"],
      htmlEquivalent: null,
      snippet: '<div role="tablist" aria-orientation="vertical">\n  <button role="tab">Tab 1</button>\n  <button role="tab">Tab 2</button>\n</div>',
      tags: ["orientation", "orientatie", "horizontaal", "verticaal", "richting"]
    },
    {
      name: "aria-placeholder",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieeert een hint die beschrijft welke waarde verwacht wordt, zichtbaar wanneer het veld leeg is.",
      desc_en: "Defines a hint describing what value is expected, visible when the field is empty.",
      valueType: "string",
      allowedValues: [],
      usedByRoles: ["textbox", "searchbox"],
      htmlEquivalent: "placeholder",
      snippet: '<!-- Gebruik bij voorkeur het HTML-attribuut: -->\n<input type="text" placeholder="bijv. jan@voorbeeld.nl">',
      tags: ["placeholder", "hint", "voorbeeld", "invulhulp"]
    },
    {
      name: "aria-readonly",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan dat een element niet bewerkbaar is maar wel leesbaar en focusbaar blijft.",
      desc_en: "Indicates that an element is not editable but remains readable and focusable.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["checkbox", "combobox", "grid", "gridcell", "listbox", "radiogroup", "slider", "spinbutton", "textbox"],
      htmlEquivalent: "readonly",
      snippet: '<input type="text" readonly aria-readonly="true" value="Niet bewerkbaar">',
      tags: ["readonly", "alleen-lezen", "niet-bewerkbaar"]
    },
    {
      name: "aria-required",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan dat een formulierveld ingevuld moet worden voordat het formulier verstuurd kan worden.",
      desc_en: "Indicates that a form field must be filled in before the form can be submitted.",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["checkbox", "combobox", "gridcell", "listbox", "radiogroup", "spinbutton", "textbox", "tree"],
      htmlEquivalent: "required",
      snippet: '<!-- Gebruik bij voorkeur het HTML-attribuut: -->\n<label for="naam">Naam *</label>\n<input id="naam" type="text" required>',
      tags: ["required", "verplicht", "noodzakelijk", "formulier"]
    },
    {
      name: "aria-roledescription",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieert een menselijk leesbare, aangepaste beschrijving van de rol van een element. Gebruik spaarzaam.",
      desc_en: "Defines a human-readable, custom description of the role of an element. Use sparingly.",
      valueType: "string",
      allowedValues: [],
      usedByRoles: ["alle rollen (behalve abstract)"],
      htmlEquivalent: null,
      snippet: '<div role="region" aria-roledescription="carrousel" aria-label="Uitgelichte producten">\n  ...\n</div>',
      tags: ["roledescription", "rolbeschrijving", "aangepast"]
    },
    {
      name: "aria-sort",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Geeft aan of en hoe een kolom of rij in een tabel is gesorteerd.",
      desc_en: "Indicates whether and how a column or row in a table is sorted.",
      valueType: "token",
      allowedValues: ["ascending", "descending", "none", "other"],
      usedByRoles: ["columnheader", "rowheader"],
      htmlEquivalent: null,
      snippet: '<table>\n  <thead>\n    <tr>\n      <th scope="col" aria-sort="ascending">\n        Naam\n        <button>Sorteer</button>\n      </th>\n    </tr>\n  </thead>\n</table>',
      tags: ["sort", "sorteren", "oplopend", "aflopend", "tabel"]
    },
    {
      name: "aria-valuemax",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieert de maximale toegestane waarde voor een bereik-widget.",
      desc_en: "Defines the maximum allowed value for a range widget.",
      valueType: "number",
      allowedValues: [],
      usedByRoles: ["progressbar", "scrollbar", "separator", "slider", "spinbutton"],
      htmlEquivalent: "max",
      snippet: '<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">\n</div>',
      tags: ["valuemax", "maximum", "max", "bereik"]
    },
    {
      name: "aria-valuemin",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieert de minimale toegestane waarde voor een bereik-widget.",
      desc_en: "Defines the minimum allowed value for a range widget.",
      valueType: "number",
      allowedValues: [],
      usedByRoles: ["progressbar", "scrollbar", "separator", "slider", "spinbutton"],
      htmlEquivalent: "min",
      snippet: '<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">\n</div>',
      tags: ["valuemin", "minimum", "min", "bereik"]
    },
    {
      name: "aria-valuenow",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieert de huidige waarde van een bereik-widget.",
      desc_en: "Defines the current value of a range widget.",
      valueType: "number",
      allowedValues: [],
      usedByRoles: ["progressbar", "scrollbar", "separator", "slider", "spinbutton"],
      htmlEquivalent: "value",
      snippet: '<progress role="progressbar"\n  aria-valuenow="70"\n  aria-valuemin="0"\n  aria-valuemax="100">\n  70%\n</progress>',
      tags: ["valuenow", "waarde", "huidig", "voortgang"]
    },
    {
      name: "aria-valuetext",
      type: "attribute",
      category: "property",
      categoryLabel: "Property",
      catLabel_en: "Property",
      description: "Definieert een menselijk leesbare tekst als alternatief voor de numerieke waarde van aria-valuenow.",
      desc_en: "Defines a human-readable text as an alternative to the numeric value of aria-valuenow.",
      valueType: "string",
      allowedValues: [],
      usedByRoles: ["progressbar", "scrollbar", "separator", "slider", "spinbutton"],
      htmlEquivalent: null,
      snippet: '<div role="slider"\n  aria-valuenow="3"\n  aria-valuemin="1"\n  aria-valuemax="5"\n  aria-valuetext="Gemiddeld"\n  aria-label="Tevredenheid">\n</div>',
      tags: ["valuetext", "waardetekst", "leesbaar", "alternatief"]
    },

    /* ── Relatie-attributen ── */
    {
      name: "aria-activedescendant",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Verwijst naar het ID van het momenteel actieve kind-element in een samengestelde widget, zonder de DOM-focus te verplaatsen.",
      desc_en: "Refers to the ID of the currently active child element in a composite widget, without moving DOM focus.",
      valueType: "ID-referentie",
      allowedValues: [],
      usedByRoles: ["combobox", "grid", "group", "listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
      htmlEquivalent: null,
      snippet: '<ul role="listbox" aria-activedescendant="opt2" tabindex="0">\n  <li role="option" id="opt1">Optie 1</li>\n  <li role="option" id="opt2">Optie 2</li>\n  <li role="option" id="opt3">Optie 3</li>\n</ul>',
      tags: ["activedescendant", "actief kind", "focus", "navigatie"]
    },
    {
      name: "aria-controls",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Verwijst naar het ID van het element dat door dit element wordt aangestuurd.",
      desc_en: "Refers to the ID of the element controlled by this element.",
      valueType: "ID-referentie(s)",
      allowedValues: [],
      usedByRoles: ["button", "combobox", "scrollbar", "tab", "textbox"],
      htmlEquivalent: null,
      snippet: '<button aria-expanded="false" aria-controls="dropdown">\n  Menu openen\n</button>\n<ul id="dropdown" hidden>\n  <li>Item 1</li>\n</ul>',
      tags: ["controls", "bestuurt", "koppeling", "relatie"]
    },
    {
      name: "aria-describedby",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Verwijst naar de ID's van elementen die extra beschrijvende informatie geven over dit element.",
      desc_en: "Refers to the IDs of elements that provide additional descriptive information about this element.",
      valueType: "ID-referentie(s)",
      allowedValues: [],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<label for="ww">Wachtwoord</label>\n<input id="ww" type="password" aria-describedby="ww-eisen">\n<p id="ww-eisen">Minimaal 8 tekens, met een hoofdletter en cijfer.</p>',
      tags: ["describedby", "beschrijving", "uitleg", "hulptekst"]
    },
    {
      name: "aria-details",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Verwijst naar een element met gedetailleerde informatie, als aanvulling op aria-describedby.",
      desc_en: "Refers to an element with detailed information, supplementing aria-describedby.",
      valueType: "ID-referentie",
      allowedValues: [],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<img src="grafiek.png" alt="Omzetgrafiek" aria-details="grafiek-data">\n<table id="grafiek-data">\n  <caption>Omzetgegevens</caption>\n  ...\n</table>',
      tags: ["details", "gedetailleerd", "aanvulling", "extra"]
    },
    {
      name: "aria-errormessage",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Verwijst naar het ID van het element dat de foutmelding bevat voor dit element. Wordt alleen voorgelezen als aria-invalid=\"true\" is.",
      valueType: "ID-referentie",
      allowedValues: [],
      usedByRoles: ["textbox", "combobox", "listbox", "spinbutton", "checkbox", "radiogroup"],
      htmlEquivalent: null,
      snippet: '<label for="email">E-mail</label>\n<input id="email" type="email"\n  aria-invalid="true"\n  aria-errormessage="email-fout">\n<span id="email-fout" role="alert">\n  Voer een geldig e-mailadres in.\n</span>',
      tags: ["errormessage", "foutmelding", "validatie", "fout"]
    },
    {
      name: "aria-flowto",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Geeft een alternatieve leesvolgorde aan door naar het volgende element in de stroom te verwijzen.",
      desc_en: "Indicates an alternative reading order by referring to the next element in the flow.",
      valueType: "ID-referentie(s)",
      allowedValues: [],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<div aria-flowto="sectie2">Eerst lezen</div>\n<div id="sectie3">Dit wordt overgeslagen</div>\n<div id="sectie2">Dan dit lezen</div>',
      tags: ["flowto", "leesvolgorde", "volgorde", "navigatie"]
    },
    {
      name: "aria-label",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Definieert een tekstlabel voor een element dat geen zichtbaar label heeft. Overschrijft de bestaande tekst voor screenreaders.",
      desc_en: "Defines a text label for an element that has no visible label. Overrides existing text for screen readers.",
      valueType: "string",
      allowedValues: [],
      usedByRoles: ["alle rollen (behalve presentatie)"],
      htmlEquivalent: null,
      snippet: '<button aria-label="Sluiten">\n  <svg aria-hidden="true"><!-- X-icoon --></svg>\n</button>\n\n<nav aria-label="Hoofdnavigatie">\n  ...\n</nav>',
      tags: ["label", "naam", "toegankelijke naam", "screenreader"]
    },
    {
      name: "aria-labelledby",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Verwijst naar de ID's van elementen die als label dienen voor dit element. Heeft voorrang boven aria-label en het HTML label-element.",
      desc_en: "Refers to the IDs of elements that serve as labels for this element. Takes precedence over aria-label and the HTML label element.",
      valueType: "ID-referentie(s)",
      allowedValues: [],
      usedByRoles: ["alle rollen (behalve presentatie)"],
      htmlEquivalent: "<label for>",
      snippet: '<h2 id="sec-titel">Contactgegevens</h2>\n<form aria-labelledby="sec-titel">\n  <label for="tel">Telefoon</label>\n  <input id="tel" type="tel">\n</form>',
      tags: ["labelledby", "gelabeld door", "koppeling", "naam"]
    },
    {
      name: "aria-owns",
      type: "attribute",
      category: "relationship",
      categoryLabel: "Relatie-attribuut",
      catLabel_en: "Relationship attribute",
      description: "Definieert een ouder-kind-relatie wanneer de DOM-structuur dit niet weerspiegelt. Gebruik spaarzaam.",
      desc_en: "Defines a parent-child relationship when the DOM structure does not reflect it. Use sparingly.",
      valueType: "ID-referentie(s)",
      allowedValues: [],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<!-- Menu-button en menu staan niet genest in de DOM,\n     maar logisch is het menu een kind van de button: -->\n<button aria-owns="los-menu" aria-expanded="true">Acties</button>\n<ul id="los-menu" role="menu">\n  <li role="menuitem">Opslaan</li>\n</ul>',
      tags: ["owns", "bezit", "ouder-kind", "relatie", "DOM"]
    },

    /* ── Live-regio-attributen ── */
    {
      name: "aria-atomic",
      type: "attribute",
      category: "live-region-attr",
      categoryLabel: "Live-regio-attribuut",
      catLabel_en: "Live region attribute",
      description: "Geeft aan of hulptechnologie de hele live-regio moet voorlezen (true) of alleen de gewijzigde delen (false).",
      desc_en: "Indicates whether assistive technology should read the entire live region (true) or only the changed parts (false).",
      valueType: "true | false",
      allowedValues: ["true", "false"],
      usedByRoles: ["alle rollen (in live-regio's)"],
      htmlEquivalent: null,
      snippet: '<div role="status" aria-live="polite" aria-atomic="true">\n  3 van 10 items geladen\n</div>',
      tags: ["atomic", "geheel", "volledig", "live"]
    },
    {
      name: "aria-live",
      type: "attribute",
      category: "live-region-attr",
      categoryLabel: "Live-regio-attribuut",
      catLabel_en: "Live region attribute",
      description: "Geeft aan dat de inhoud van een element dynamisch kan veranderen en dat hulptechnologie deze wijzigingen moet aankondigen.",
      desc_en: "Indicates that the content of an element can change dynamically and that assistive technology should announce these changes.",
      valueType: "token",
      allowedValues: ["off", "polite", "assertive"],
      usedByRoles: ["alle rollen"],
      htmlEquivalent: null,
      snippet: '<!-- Beleefd: wacht tot de gebruiker klaar is -->\n<div aria-live="polite">3 resultaten gevonden</div>\n\n<!-- Assertief: onderbreek de gebruiker -->\n<div aria-live="assertive">Sessie verloopt over 2 minuten!</div>',
      tags: ["live", "dynamisch", "update", "voorlezen", "aankondigen"]
    },
    {
      name: "aria-relevant",
      type: "attribute",
      category: "live-region-attr",
      categoryLabel: "Live-regio-attribuut",
      catLabel_en: "Live region attribute",
      description: "Geeft aan welke typen wijzigingen in een live-regio relevant zijn: toevoegingen, verwijderingen, tekst of alles.",
      desc_en: "Indicates which types of changes in a live region are relevant: additions, removals, text, or all.",
      valueType: "token list",
      allowedValues: ["additions", "removals", "text", "all", "additions text"],
      usedByRoles: ["alle rollen (in live-regio's)"],
      htmlEquivalent: null,
      snippet: '<div role="log"\n  aria-live="polite"\n  aria-relevant="additions">\n  <!-- Alleen nieuwe berichten worden aangekondigd -->\n</div>',
      tags: ["relevant", "wijzigingen", "toevoegingen", "verwijderingen"]
    }
  ];

  var ALL_ITEMS = ROLES.concat(ATTRIBUTES);

  /* ===== i18n ===== */

  var LANG = {
    nl: {
      toolTitle: "ARIA Rollen & Attributen Referentie",
      intro: 'Doorzoek alle WAI-ARIA rollen en attributen uit de <a href="https://www.w3.org/TR/wai-aria-1.2/" rel="noopener" target="_blank">ARIA 1.2-specificatie</a>. Bekijk beschrijvingen, ondersteunde attributen, HTML-equivalenten en praktische codevoorbeelden.',
      searchLabel: "Zoek een rol of attribuut",
      searchPlaceholder: 'Zoek bijv. "button", "aria-label", "navigation"...',
      filterAriaLabel: "Filter op categorie",
      resultsAriaLabel: "Resultaten",
      loadMore: "Toon meer resultaten",
      ctaHtml: 'ARIA-attributen correct toepassen is essentieel voor de toegankelijkheid van je website. Wil je weten of jouw ARIA-implementatie klopt? <a href="/contact/">Vraag een audit aan</a> of bel <a href="tel:+31855055890">085\u00a05055\u00a0890</a>.',
      badgeRole: "Rol",
      badgeAttribute: "Attribuut",
      htmlEquivalent: "HTML-equivalent",
      superclass: "Superclass",
      requiredContext: "Vereiste context",
      requiredChildren: "Vereiste kinderen",
      supportedAttributes: "Ondersteunde attributen",
      presentationalChildren: "Presentational children",
      yes: "Ja",
      no: "Nee",
      valueType: "Waardetype",
      allowedValues: "Mogelijke waarden",
      usedByRoles: "Gebruikt door",
      codeExample: "Codevoorbeeld",
      copy: "Kopieer",
      copied: "Gekopieerd!",
      noResults: "Geen resultaten voor",
      noResultsTip: 'Tip: probeer een Engelse naam (bijv. "button") of een ARIA-attribuut (bijv. "aria-label").',
      resultsSingular: "resultaat",
      resultsPlural: "resultaten",
      langLabel: "Switch to English"
    },
    en: {
      toolTitle: "ARIA Roles & Attributes Reference",
      intro: 'Search all WAI-ARIA roles and attributes from the <a href="https://www.w3.org/TR/wai-aria-1.2/" rel="noopener" target="_blank">ARIA 1.2 specification</a>. View descriptions, supported attributes, HTML equivalents, and practical code examples.',
      searchLabel: "Search for a role or attribute",
      searchPlaceholder: 'Search e.g. "button", "aria-label", "navigation"...',
      filterAriaLabel: "Filter by category",
      resultsAriaLabel: "Results",
      loadMore: "Show more results",
      ctaHtml: 'Correctly applying ARIA attributes is essential for your website\u2019s accessibility. Want to know if your ARIA implementation is correct? <a href="/contact/">Request an audit</a> or call <a href="tel:+31855055890">+31\u00a085\u00a0505\u00a05890</a>.',
      badgeRole: "Role",
      badgeAttribute: "Attribute",
      htmlEquivalent: "HTML equivalent",
      superclass: "Superclass",
      requiredContext: "Required context",
      requiredChildren: "Required children",
      supportedAttributes: "Supported attributes",
      presentationalChildren: "Presentational children",
      yes: "Yes",
      no: "No",
      valueType: "Value type",
      allowedValues: "Allowed values",
      usedByRoles: "Used by",
      codeExample: "Code example",
      copy: "Copy",
      copied: "Copied!",
      noResults: "No results for",
      noResultsTip: 'Tip: try a role name (e.g. "button") or an ARIA attribute (e.g. "aria-label").',
      resultsSingular: "result",
      resultsPlural: "results",
      langLabel: "Schakel naar Nederlands"
    }
  };

  var CAT_LABELS = [
    { id: "all", nl: "Alles", en: "All" },
    { id: "widget", nl: "Widget-rollen", en: "Widget roles" },
    { id: "landmark", nl: "Landmark-rollen", en: "Landmark roles" },
    { id: "document-structure", nl: "Documentstructuur", en: "Document structure" },
    { id: "live-region-role", nl: "Live-regio-rollen", en: "Live region roles" },
    { id: "state", nl: "States", en: "States" },
    { id: "property", nl: "Properties", en: "Properties" },
    { id: "relationship", nl: "Relatie-attributen", en: "Relationship attributes" },
    { id: "live-region-attr", nl: "Live-regio-attributen", en: "Live region attributes" }
  ];

  var currentLang = "nl";
  try { currentLang = localStorage.getItem("pa-tool-lang") || "nl"; } catch (e) { /* */ }

  function t(key) {
    return (LANG[currentLang] && LANG[currentLang][key]) || LANG.nl[key] || key;
  }

  function getDesc(item) {
    return currentLang === "en" && item.desc_en ? item.desc_en : item.description;
  }

  function getCatLabel(item) {
    return currentLang === "en" && item.catLabel_en ? item.catLabel_en : item.categoryLabel;
  }

  function translateDOM() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute("data-i18n"));
    }
    var htmlEls = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlEls.length; j++) {
      htmlEls[j].innerHTML = t(htmlEls[j].getAttribute("data-i18n-html"));
    }
    var phEls = document.querySelectorAll("[data-i18n-ph]");
    for (var k = 0; k < phEls.length; k++) {
      phEls[k].placeholder = t(phEls[k].getAttribute("data-i18n-ph"));
    }
    var ariaEls = document.querySelectorAll("[data-i18n-aria]");
    for (var l = 0; l < ariaEls.length; l++) {
      ariaEls[l].setAttribute("aria-label", t(ariaEls[l].getAttribute("data-i18n-aria")));
    }
    var container = document.querySelector(".tool-container");
    if (container) {
      if (currentLang === "nl") {
        container.removeAttribute("lang");
      } else {
        container.setAttribute("lang", currentLang);
      }
    }
  }

  function updateLangToggle() {
    var nlOpt = document.getElementById("langOptNL");
    var enOpt = document.getElementById("langOptEN");
    var btn = document.getElementById("langToggle");
    if (!nlOpt || !enOpt) return;
    if (currentLang === "en") {
      nlOpt.classList.remove("tool-pdf__lang-opt--active");
      enOpt.classList.add("tool-pdf__lang-opt--active");
    } else {
      nlOpt.classList.add("tool-pdf__lang-opt--active");
      enOpt.classList.remove("tool-pdf__lang-opt--active");
    }
    if (btn) btn.setAttribute("aria-label", t("langLabel"));
  }

  function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem("pa-tool-lang", lang); } catch (e) { /* */ }
    translateDOM();
    updateLangToggle();
    buildFilterButtons();
    filterAndRender();
  }

  /* ===== DOM REFS ===== */

  var searchInput = document.getElementById("ariaSearch");
  var filtersContainer = document.querySelector(".tool-aria__filters");
  var resultsCount = document.getElementById("resultsCount");
  var resultsGrid = document.getElementById("resultsGrid");
  var loadMoreBtn = document.getElementById("loadMoreBtn");

  if (!searchInput || !resultsGrid) return;

  /* ===== STATE ===== */

  var activeCategory = "all";
  var searchTerm = "";
  var filteredItems = ALL_ITEMS.slice();
  var visibleCount = 20;
  var PAGE_SIZE = 20;

  /* ===== INIT ===== */

  translateDOM();
  updateLangToggle();
  buildFilterButtons();
  filterAndRender();
  handleHashNavigation();

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      setLang(currentLang === "nl" ? "en" : "nl");
    });
  }

  /* ===== SEARCH ===== */

  var debounceTimer;
  searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      searchTerm = searchInput.value.trim().toLowerCase();
      visibleCount = PAGE_SIZE;
      filterAndRender();
    }, 150);
  });

  /* ===== CATEGORY FILTERS ===== */

  function buildFilterButtons() {
    var html = "";
    for (var i = 0; i < CAT_LABELS.length; i++) {
      var cat = CAT_LABELS[i];
      var label = currentLang === "en" ? cat.en : cat.nl;
      var activeClass = cat.id === activeCategory ? " tool-aria__filter--active" : "";
      html += '<button class="tool-aria__filter' + activeClass + '" data-category="' + cat.id + '">' + escapeHtml(label) + "</button>";
    }
    filtersContainer.innerHTML = html;
  }

  filtersContainer.addEventListener("click", function (e) {
    var btn = e.target.closest(".tool-aria__filter");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    var all = filtersContainer.querySelectorAll(".tool-aria__filter");
    for (var i = 0; i < all.length; i++) {
      all[i].classList.toggle("tool-aria__filter--active", all[i] === btn);
    }
    visibleCount = PAGE_SIZE;
    filterAndRender();
  });

  /* ===== FILTER LOGIC ===== */

  function filterAndRender() {
    filteredItems = [];
    for (var i = 0; i < ALL_ITEMS.length; i++) {
      var item = ALL_ITEMS[i];
      var catMatch = activeCategory === "all" || item.category === activeCategory;
      if (!catMatch) continue;

      if (searchTerm) {
        var haystack = (item.name + " " + item.description + " " + (item.htmlEquivalent || "") + " " + (item.tags || []).join(" ")).toLowerCase();
        if (haystack.indexOf(searchTerm) === -1) continue;
      }
      filteredItems.push(item);
    }

    if (searchTerm) {
      filteredItems.sort(function (a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        var aScore = aName === searchTerm ? 0 : (aName.indexOf(searchTerm) === 0 ? 1 : 2);
        var bScore = bName === searchTerm ? 0 : (bName.indexOf(searchTerm) === 0 ? 1 : 2);
        return aScore - bScore || aName.localeCompare(bName);
      });
    }

    render();
  }

  /* ===== RENDER ===== */

  function render() {
    var countText = filteredItems.length + " resultaa" + (filteredItems.length !== 1 ? "ten" : "t");
    resultsCount.textContent = countText;

    var visible = filteredItems.slice(0, visibleCount);
    var html = "";
    for (var i = 0; i < visible.length; i++) {
      html += renderCard(visible[i]);
    }

    if (filteredItems.length === 0) {
      html = '<div class="tool-aria__empty">' +
        "<p>" + t("noResults") + " &ldquo;" + escapeHtml(searchTerm || activeCategory) + "&rdquo;.</p>" +
        "<p>" + t("noResultsTip") + "</p>" +
        "</div>";
    }

    resultsGrid.innerHTML = html;
    loadMoreBtn.hidden = visibleCount >= filteredItems.length;
  }

  function renderCard(item) {
    var id = (item.type === "role" ? "role-" : "attr-") + item.name;
    var typeBadge = item.type === "role" ? t("badgeRole") : t("badgeAttribute");

    return '<div class="tool-aria__card" id="' + id + '">' +
      '<button class="tool-aria__card-header" aria-expanded="false" data-card="' + id + '">' +
        '<div class="tool-aria__card-meta">' +
          '<code class="tool-aria__card-name">' + escapeHtml(item.name) + "</code>" +
          '<span class="tool-aria__badge tool-aria__badge--' + item.type + '">' + typeBadge + "</span>" +
          '<span class="tool-aria__badge tool-aria__badge--cat">' + escapeHtml(getCatLabel(item)) + "</span>" +
        "</div>" +
        '<span class="tool-aria__chevron" aria-hidden="true"></span>' +
      "</button>" +
      '<div class="tool-aria__card-detail" hidden>' +
        '<p class="tool-aria__card-desc">' + escapeHtml(getDesc(item)) + "</p>" +
        renderDetailFields(item) +
        renderSnippet(item) +
      "</div>" +
    "</div>";
  }

  function renderDetailFields(item) {
    if (item.type === "role") return renderRoleDetails(item);
    return renderAttributeDetails(item);
  }

  function renderRoleDetails(item) {
    var html = '<dl class="tool-aria__details">';
    if (item.htmlEquivalent) {
      html += "<dt>" + t("htmlEquivalent") + "</dt><dd><code>" + escapeHtml(item.htmlEquivalent) + "</code></dd>";
    }
    if (item.superclassRoles && item.superclassRoles.length) {
      html += "<dt>" + t("superclass") + "</dt><dd>" + escapeHtml(item.superclassRoles.join(", ")) + "</dd>";
    }
    if (item.requiredContext && item.requiredContext.length) {
      html += "<dt>" + t("requiredContext") + "</dt><dd>" + renderLinkedItems(item.requiredContext, "role") + "</dd>";
    }
    if (item.requiredOwnedElements && item.requiredOwnedElements.length) {
      html += "<dt>" + t("requiredChildren") + "</dt><dd>" + renderLinkedItems(item.requiredOwnedElements, "role") + "</dd>";
    }
    if (item.supportedAttributes && item.supportedAttributes.length) {
      html += "<dt>" + t("supportedAttributes") + "</dt><dd>" + renderLinkedItems(item.supportedAttributes, "attr") + "</dd>";
    }
    html += "<dt>" + t("presentationalChildren") + "</dt><dd>" + (item.presentationalChildren ? t("yes") : t("no")) + "</dd>";
    html += "</dl>";
    return html;
  }

  function renderAttributeDetails(item) {
    var html = '<dl class="tool-aria__details">';
    html += "<dt>" + t("valueType") + "</dt><dd><code>" + escapeHtml(item.valueType) + "</code></dd>";
    if (item.allowedValues && item.allowedValues.length) {
      var vals = [];
      for (var i = 0; i < item.allowedValues.length; i++) {
        vals.push("<code>" + escapeHtml(item.allowedValues[i]) + "</code>");
      }
      html += "<dt>" + t("allowedValues") + "</dt><dd>" + vals.join(", ") + "</dd>";
    }
    if (item.usedByRoles && item.usedByRoles.length) {
      html += "<dt>" + t("usedByRoles") + "</dt><dd>" + renderLinkedItems(item.usedByRoles, "role") + "</dd>";
    }
    if (item.htmlEquivalent) {
      html += "<dt>" + t("htmlEquivalent") + "</dt><dd><code>" + escapeHtml(item.htmlEquivalent) + "</code></dd>";
    }
    html += "</dl>";
    return html;
  }

  function renderLinkedItems(items, prefix) {
    var parts = [];
    for (var i = 0; i < items.length; i++) {
      var name = items[i];
      var id = (prefix === "role" ? "role-" : "attr-") + name;
      parts.push('<a href="#' + id + '" class="tool-aria__link" data-navigate="' + id + '">' + escapeHtml(name) + "</a>");
    }
    return parts.join(", ");
  }

  function renderSnippet(item) {
    if (!item.snippet) return "";
    return '<div class="tool-aria__snippet">' +
      '<div class="tool-aria__snippet-header">' +
        "<span>" + t("codeExample") + "</span>" +
        '<button class="tool-aria__snippet-copy" data-copy aria-label="' + t("copy") + '">' + t("copy") + "</button>" +
      "</div>" +
      "<pre><code>" + escapeHtml(item.snippet) + "</code></pre>" +
    "</div>";
  }

  /* ===== CARD TOGGLE ===== */

  resultsGrid.addEventListener("click", function (e) {
    var headerBtn = e.target.closest(".tool-aria__card-header");
    if (headerBtn) {
      toggleCard(headerBtn);
      return;
    }

    var copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      copySnippet(copyBtn);
      return;
    }

    var navLink = e.target.closest("[data-navigate]");
    if (navLink) {
      e.preventDefault();
      navigateToItem(navLink.dataset.navigate);
    }
  });

  function toggleCard(headerBtn) {
    var card = headerBtn.closest(".tool-aria__card");
    var detail = card.querySelector(".tool-aria__card-detail");
    var isExpanded = headerBtn.getAttribute("aria-expanded") === "true";

    headerBtn.setAttribute("aria-expanded", String(!isExpanded));
    detail.hidden = isExpanded;

    if (!isExpanded) {
      history.replaceState(null, "", "#" + card.id);
    }
  }

  /* ===== COPY SNIPPET ===== */

  function copySnippet(btn) {
    var code = btn.closest(".tool-aria__snippet").querySelector("code");
    navigator.clipboard.writeText(code.textContent).then(function () {
      btn.textContent = t("copied");
      setTimeout(function () { btn.textContent = t("copy"); }, 2000);
    });
  }

  /* ===== NAVIGATE TO ITEM ===== */

  function navigateToItem(id) {
    searchInput.value = "";
    searchTerm = "";
    activeCategory = "all";
    buildFilterButtons();
    visibleCount = ALL_ITEMS.length;
    filterAndRender();

    var el = document.getElementById(id);
    if (el) {
      var btn = el.querySelector(".tool-aria__card-header");
      if (btn && btn.getAttribute("aria-expanded") !== "true") {
        toggleCard(btn);
      }
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (btn) btn.focus();
    }
  }

  /* ===== LOAD MORE ===== */

  loadMoreBtn.addEventListener("click", function () {
    visibleCount += PAGE_SIZE;
    render();
  });

  /* ===== HASH NAVIGATION ===== */

  function handleHashNavigation() {
    var hash = location.hash.replace("#", "");
    if (!hash) return;
    setTimeout(function () {
      navigateToItem(hash);
    }, 100);
  }

  /* ===== HELPERS ===== */

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

})();
