/* Boot: Toegankelijkheids-lens - één paneel met drie tabbladen. */
PA.tabs = [
  { key: "redactie", label: "Redactie", role: "Voor webredactie",
    order: ["alt", "headings", "links", "sensory", "lang", "lists", "tablescontent", "formlabels", "iframetitle", "pagetitle", "linearize", "contrastpicker"] },
  { key: "designer", label: "Designer", role: "Voor designers",
    order: ["contrastpicker", "grayscale", "forcefocus", "targetsize", "textspacing", "textresize", "textresize400", "outline", "imagesoff", "ruler"] },
  { key: "developer", label: "Developer", role: "Voor ontwikkelaars",
    order: ["aria", "accname", "tabindex", "forcefocus", "contrastpicker", "textspacing", "textresize", "iframes", "elementinfo"] },
];
PA.activeTab = 0;
PA.start();
