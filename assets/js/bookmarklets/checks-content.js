/* Content-checks: gericht op webredactie. */

PA.register({
  id: "alt",
  group: "Inhoud",
  label: "Afbeeldingen en alt-tekst",
  wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/",
  run: function (ctx) {
    var imgs = Array.prototype.slice.call(document.querySelectorAll("img"));
    /* “Afbeelding van…” in een alt-tekst is dubbelop: een screenreader kondigt
       zelf al aan dat het een afbeelding is. Woordenlijst per taal in strings.js. */
    var redundant = PA.rx("altRedundant");
    var missing = 0, empty = 0, ok = 0, redundantN = 0;
    imgs.forEach(function (img) {
      var hasAlt = img.hasAttribute("alt");
      var alt = img.getAttribute("alt");
      if (!hasAlt) {
        missing++;
        ctx.mark(img, { status: "error", label: PA.t("geen alt-attribuut") });
      } else if (alt.trim() === "") {
        empty++;
        ctx.mark(img, { status: "info", label: 'alt=""' });
      } else if (redundant.test(alt.trim())) {
        redundantN++;
        ctx.mark(img, { status: "warn", label: PA.t("alt begint met “{word}”: {alt}", { word: alt.trim().split(/\s+/)[0], alt: alt }) });
      } else {
        ok++;
        ctx.mark(img, { status: "ok", label: "alt: " + alt });
      }
    });
    /* Zichtbare svg's: toon <title> en <desc>, of meld dat ze ontbreken. */
    var svgs = Array.prototype.slice.call(document.querySelectorAll("svg"));
    var svgNamed = 0, svgBare = 0;
    svgs.forEach(function (svg) {
      if (svg.closest("[data-pa-lens]")) return;
      if (!PA.visible(svg)) return;
      if (svg.getAttribute("aria-hidden") === "true") return;
      var t = svg.querySelector("title");
      var d = svg.querySelector("desc");
      var name = (t && t.textContent.replace(/\s+/g, " ").trim()) || PA.accName(svg);
      var dsc = (d && d.textContent.replace(/\s+/g, " ").trim()) || "";
      if (name) {
        svgNamed++;
        ctx.mark(svg, { status: "ok", label: "svg: " + name + (dsc ? " · " + dsc : "") });
      } else {
        svgBare++;
        ctx.mark(svg, { status: "info", label: PA.t("svg zonder titel") });
      }
    });
    return {
      count: imgs.length + svgNamed + svgBare,
      summary: PA.t("{imgs} afbeeldingen: {ok} met alt-tekst, {red} met een overbodig woord als “afbeelding” in de alt-tekst, {empty} met leeg alt (alt=\"\"), {missing} zonder alt-attribuut. Daarnaast {svg} zichtbare svg-elementen, waarvan {bare} zonder titel (dat mag, als de svg decoratief is).",
        { imgs: imgs.length, ok: ok, red: redundantN, empty: empty, missing: missing, svg: svgNamed + svgBare, bare: svgBare })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "headings",
  group: "Inhoud",
  label: "Koppen en structuur",
  wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/",
  run: function (ctx) {
    var nodes = Array.prototype.slice.call(
      document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]')
    );
    var prev = 0, skips = 0, h1 = 0;
    nodes.forEach(function (el) {
      var lvl;
      if (el.hasAttribute("aria-level")) lvl = parseInt(el.getAttribute("aria-level"), 10);
      else lvl = parseInt(el.tagName.charAt(1), 10);
      if (!lvl) lvl = 2;
      if (lvl === 1) h1++;
      var status = "info", note = "H" + lvl;
      if (prev && lvl > prev + 1) { skips++; status = "warn"; note = PA.t("H{lvl} (sprong vanaf H{prev})", { lvl: lvl, prev: prev }); }
      prev = lvl;
      ctx.mark(el, { status: status, label: note });
    });
    var msg = PA.t("{n} koppen. {h1} keer H1.", { n: nodes.length, h1: h1 }) + " ";
    msg += skips ? PA.t("{n} overgeslagen niveau(s).", { n: skips }) : PA.t("Geen overgeslagen niveaus.");
    return { count: nodes.length, summary: msg };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "headingquality",
  group: "Inhoud",
  label: "Kwaliteit van kopteksten",
  wcag: "/blog/sc-2-4-6-wat-betekent-koppen-en-labels/",
  run: function (ctx) {
    /* Nietszeggende koppen beschrijven de sectie niet: een screenreader-gebruiker
       die op koppen navigeert weet dan niet waar hij landt. */
    var vague = PA.rx("vagueHeading");
    var nodes = Array.prototype.slice.call(
      document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]')
    );
    var empty = 0, vagueN = 0, n = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      n++;
      var text = (el.textContent || "").replace(/\s+/g, " ").trim();
      var bare = PA.bareText(text);
      if (!bare) { empty++; ctx.mark(el, { status: "error", label: PA.t("lege kop") }); }
      else if (vague.test(bare)) { vagueN++; ctx.mark(el, { status: "warn", label: PA.t("nietszeggend: “{text}”", { text: text }) }); }
    });
    return {
      count: empty + vagueN,
      summary: PA.t("{n} koppen: {empty} leeg, {vague} met een nietszeggende tekst zoals “Ga naar” of “Lees meer”. Een goede kop vat samen waar de sectie over gaat.", { n: n, empty: empty, vague: vagueN })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "links",
  group: "Inhoud",
  label: "Linkteksten",
  wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/",
  run: function (ctx) {
    var links = Array.prototype.slice.call(document.querySelectorAll("a[href]"));
    var empty = 0, vagueN = 0;
    links.forEach(function (a) {
      var name = PA.accName(a).replace(/\s+/g, " ").trim();
      if (!name) { empty++; ctx.mark(a, { status: "error", label: PA.t("lege link") }); }
      else if (PA.VAGUE_LINK.test(PA.bareText(name))) { vagueN++; ctx.mark(a, { status: "warn", label: PA.t("vaag: “{name}”", { name: name }) }); }
    });
    return {
      count: links.length,
      summary: PA.t("{n} links: {empty} zonder tekst, {vague} met vage tekst zoals “lees meer”.", { n: links.length, empty: empty, vague: vagueN })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "linkedimages",
  group: "Inhoud",
  label: "Klikbare afbeeldingen",
  wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/",
  run: function (ctx) {
    /* Bij een link of knop met alleen een afbeelding erin moet de toegankelijke
       naam de bestemming of functie beschrijven. We tonen die naam per element. */
    var sel = "a[href], button, [role=button], [role=link]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    var withImg = 0, noName = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      if (!el.querySelector("img, svg, [role=img]")) return;
      if (!PA.visible(el)) return;
      withImg++;
      var name = PA.accName(el).replace(/\s+/g, " ").trim();
      if (!name) {
        noName++;
        ctx.mark(el, { status: "error", label: PA.t("klikbare afbeelding zonder naam") });
      } else {
        ctx.mark(el, { status: "ok", label: PA.t("naam: {name}", { name: name }) });
      }
    });
    return {
      count: withImg,
      summary: PA.t("{n} links en knoppen met een afbeelding erin, {missing} zonder toegankelijke naam. De naam moet de bestemming of functie beschrijven, niet hoe de afbeelding eruitziet.", { n: withImg, missing: noName })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "linklist",
  group: "Inhoud",
  label: "Alle links",
  wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/",
  run: function (ctx) {
    /* Lijst van alle links in het paneel, zoals een screenreader-gebruiker ze
       in een linkenlijst ziet: alleen de namen, zonder context eromheen. Zo
       zie je in één oogopslag of de teksten op zichzelf duidelijk zijn.
       Klikken op een lijstregel springt naar de link op de pagina. */
    var links = Array.prototype.slice.call(document.querySelectorAll("a[href]"));
    var items = [], empty = 0, vagueN = 0;
    links.forEach(function (a) {
      if (a.closest("[data-pa-lens]")) return;
      var name = PA.accName(a).replace(/\s+/g, " ").trim();
      var status = "ok";
      if (!name) { status = "error"; empty++; }
      else if (PA.VAGUE_LINK.test(PA.bareText(name))) { status = "warn"; vagueN++; }
      items.push({ label: name || PA.t("(link zonder tekst)"), el: a, status: status });
      if (status !== "ok") ctx.mark(a, { status: status, label: name ? PA.t("vaag: “{name}”", { name: name }) : PA.t("lege link") });
    });
    return {
      count: items.length,
      items: items,
      summary: PA.t("{n} links, zoals een screenreader ze voorleest: {empty} zonder tekst, {vague} met vage tekst. Klik op een regel om naar de link op de pagina te springen.", { n: items.length, empty: empty, vague: vagueN })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "sensory",
  group: "Inhoud",
  label: "Zintuiglijke verwijzingen",
  wcag: "/blog/sc-1-3-3-wat-betekent-zintuigelijke-eigenschappen/",
  run: function (ctx) {
    /* Positiewoorden. “hieronder”/“onder” bewust weggelaten: in lopende tekst
       is “zie hieronder” vrijwel altijd ook zonder zicht te volgen (leesvolgorde),
       en het gaf te veel ruis. */
    var re = PA.rx("sensory");
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node, seen = [];
    while ((node = walker.nextNode())) {
      var el = node.parentElement;
      if (!el || el.closest("[data-pa-lens]")) continue;
      var tag = el.tagName.toLowerCase();
      if (tag === "script" || tag === "style" || tag === "noscript") continue;
      var m = node.nodeValue.match(re);
      if (m) {
        if (seen.indexOf(el) === -1) { seen.push(el); ctx.mark(el, { status: "warn", label: "“" + m[1].toLowerCase() + "”" }); }
      }
    }
    /* Ook alt-teksten controleren: “klik op de rode knop rechtsboven” in een
       alt-tekst helpt een blinde bezoeker niet. */
    var imgs = Array.prototype.slice.call(document.querySelectorAll("img[alt]"));
    imgs.forEach(function (img) {
      if (img.closest("[data-pa-lens]")) return;
      var ma = (img.getAttribute("alt") || "").match(re);
      if (ma && seen.indexOf(img) === -1) {
        seen.push(img);
        ctx.mark(img, { status: "warn", label: PA.t("in alt-tekst: “{word}”", { word: ma[1].toLowerCase() }) });
      }
    });
    return {
      count: seen.length,
      summary: PA.t("{n} plekken met verwijzingen naar positie, kleur of vorm, zoals “links”, “rechtsboven” of “de rode knop”. Controleer of de instructie ook klopt voor wie niet kan zien waar iets staat of welke kleur het heeft.", { n: seen.length })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "tablescontent",
  group: "Inhoud",
  label: "Tabellen",
  wcag: "/blog/sc-1-3-1-tabellen/",
  run: function (ctx) {
    var tables = Array.prototype.slice.call(document.querySelectorAll("table")).filter(function (t) {
      return !t.closest("[data-pa-lens]");
    });
    var noHead = 0;
    tables.forEach(function (t) {
      var ths = t.querySelectorAll("th").length;
      var caption = t.querySelector("caption");
      var bits = [], status = "ok";
      if (!ths) { noHead++; status = "error"; bits.push(PA.t("geen kopcellen")); }
      else bits.push(PA.t("{n} kopcellen", { n: ths }));
      if (!caption) { if (status !== "error") status = "warn"; bits.push(PA.t("geen bijschrift")); }
      else bits.push(PA.t("bijschrift aanwezig"));
      ctx.mark(t, { status: status, label: bits.join(" · ") });
    });
    return {
      count: tables.length,
      summary: PA.t("{n} tabellen, {noHead} zonder kopcellen. Kopcellen vertellen voorleessoftware welke rij of kolom bij een cel hoort. Een bijschrift geeft de tabel een titel.", { n: tables.length, noHead: noHead })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "lang",
  group: "Inhoud",
  label: "Taal van de pagina",
  wcag: "/blog/sc-3-1-1-wat-betekent-taal-van-de-pagina/",
  run: function (ctx) {
    var htmlLang = document.documentElement.getAttribute("lang");
    var parts = Array.prototype.slice.call(document.querySelectorAll("[lang]")).filter(function (el) {
      return el !== document.documentElement;
    });
    parts.forEach(function (el) { ctx.mark(el, { status: "info", label: "lang=\"" + el.getAttribute("lang") + "\"" }); });
    var msg = htmlLang
      ? PA.t("Pagina-taal: lang=\"{lang}\".", { lang: htmlLang }) + " "
      : PA.t("Let op: geen lang-attribuut op <html>.") + " ";
    msg += PA.t("{n} onderdelen met een eigen taal.", { n: parts.length });
    return { count: parts.length, summary: msg };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "lists",
  group: "Inhoud",
  label: "Lijststructuur",
  wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/",
  run: function (ctx) {
    var lists = Array.prototype.slice.call(document.querySelectorAll("ul,ol,dl"));
    lists.forEach(function (l) {
      var n = l.querySelectorAll(":scope > li, :scope > dt, :scope > dd").length;
      ctx.mark(l, { status: "info", label: l.tagName.toLowerCase() + " (" + n + " items)" });
    });
    return { count: lists.length, summary: PA.t("{n} echte lijsten op de pagina.", { n: lists.length }) };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "iframetitle",
  group: "Inhoud",
  label: "Titels van ingesloten kaders (iframes)",
  wcag: "/blog/sc-4-1-2-wat-betekent-naam-rol-waarde/",
  run: function (ctx) {
    // Alleen zichtbare iframes controleren. Iframes met display:none,
    // visibility:hidden of zonder afmetingen zijn niet toegankelijk voor
    // screenreaders en hoeven ook geen titel.
    var frames = Array.prototype.slice.call(document.querySelectorAll("iframe")).filter(function (f) {
      if (f.closest("[data-pa-lens]")) return false;
      return PA.visible(f);
    });
    var noTitle = 0;
    frames.forEach(function (f) {
      var title = f.getAttribute("title") || f.getAttribute("aria-label");
      if (!title || !title.trim()) { noTitle++; ctx.mark(f, { status: "error", label: PA.t("kader zonder titel") }); }
      else ctx.mark(f, { status: "ok", label: PA.t("titel: {title}", { title: title }) });
    });
    return {
      count: frames.length,
      summary: PA.t("{n} zichtbare kaders (iframes), {noTitle} zonder titel. Een titel vertelt een screenreadergebruiker wat er in het kader zit, bijvoorbeeld een video of een kaart.", { n: frames.length, noTitle: noTitle })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "pagetitle",
  group: "Inhoud",
  label: "Paginatitel",
  wcag: "/blog/sc-2-4-2-wat-betekent-paginatitels/",
  run: function () {
    var t = (document.title || "").trim();
    return {
      count: t ? 1 : 0,
      summary: t ? PA.t("Paginatitel: “{t}”", { t: t }) : PA.t("Deze pagina heeft geen titel.")
    };
  },
  clear: function () {}
});

PA.register({
  id: "hidden",
  group: "Inhoud",
  label: "Verborgen elementen tonen",
  wcag: "/blog/sc-1-3-1-wat-betekent-informatie-en-relaties/",
  run: function (ctx) {
    var all = Array.prototype.slice.call(document.querySelectorAll("[hidden],[aria-hidden='true'],[style*='display:none'],[style*='visibility:hidden']"));
    var shown = 0;
    all.forEach(function (el) {
      var reason = PA.hiddenReason(el);
      if (!reason) return;
      if (el.closest("[data-pa-lens]")) return;
      shown++;
      ctx.mark(el, { status: "warn", label: reason });
    });
    return { count: shown, summary: PA.t("{n} verborgen elementen gemarkeerd (kunnen wel of niet door een screenreader gelezen worden).", { n: shown }) };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "linearize",
  group: "Inhoud",
  label: "Opmaak uit (leesvolgorde)",
  wcag: "/blog/sc-1-3-2-wat-betekent-betekenisvolle-volgorde/",
  run: function () {
    var sheets = Array.prototype.slice.call(
      document.querySelectorAll('link[rel="stylesheet"],style')
    ).filter(function (n) { return !n.closest("[data-pa-lens]") && n !== null; });
    PA._linSheets = [];
    sheets.forEach(function (n) {
      if (n.sheet && !n.sheet.disabled) { n.sheet.disabled = true; PA._linSheets.push(n); }
    });
    return { count: sheets.length, summary: PA.t("Alle opmaak uitgezet. De pagina toont nu de kale leesvolgorde die een screenreader volgt. Klik nogmaals om terug te zetten.") };
  },
  clear: function () {
    (PA._linSheets || []).forEach(function (n) { if (n.sheet) n.sheet.disabled = false; });
    PA._linSheets = [];
  }
});

PA.register({
  id: "formlabels",
  group: "Inhoud",
  label: "Toegankelijke naam bij formuliervelden",
  wcag: "/blog/sc-3-3-2-wat-betekent-labels-en-instructies/",
  run: function (ctx) {
    var skipTypes = { hidden: 1, submit: 1, button: 1, reset: 1, image: 1 };
    function fieldName(el) {
      if (el.id) {
        var safe = window.CSS && CSS.escape ? CSS.escape(el.id) : el.id;
        var l = document.querySelector('label[for="' + safe + '"]');
        if (l && (l.textContent || "").trim()) return (l.textContent || "").trim();
      }
      var wrap = el.closest("label");
      if (wrap && (wrap.textContent || "").trim()) return (wrap.textContent || "").trim();
      var al = el.getAttribute("aria-label");
      if (al && al.trim()) return al.trim();
      var lb = el.getAttribute("aria-labelledby");
      if (lb) { var t = document.getElementById(lb.split(/\s+/)[0]); if (t && (t.textContent || "").trim()) return (t.textContent || "").trim(); }
      var title = el.getAttribute("title");
      if (title && title.trim()) return title.trim();
      return "";
    }
    var nodes = Array.prototype.slice.call(document.querySelectorAll("input,select,textarea"));
    var total = 0, missing = 0, placeholderOnly = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]")) return;
      if (skipTypes[(el.getAttribute("type") || "").toLowerCase()]) return;
      if (!PA.visible(el)) return;
      total++;
      var name = fieldName(el);
      if (name) { ctx.mark(el, { status: "ok", label: PA.t("toegankelijke naam: {name}", { name: name }) }); return; }
      var ph = el.getAttribute("placeholder");
      if (ph && ph.trim()) { placeholderOnly++; ctx.mark(el, { status: "warn", label: PA.t("alleen placeholder (geen toegankelijke naam)") }); }
      else { missing++; ctx.mark(el, { status: "error", label: PA.t("geen toegankelijke naam") }); }
    });
    var msg = PA.t("{total} formuliervelden. {missing} zonder toegankelijke naam", { total: total, missing: missing });
    msg += placeholderOnly ? PA.t(", {n} alleen met placeholder (telt niet). ", { n: placeholderOnly }) : ". ";
    msg += PA.t("Let op: zichtbare tekst naast een veld telt alleen als toegankelijke naam als hij via <label for>, aria-label of aria-labelledby aan het veld is gekoppeld.");
    return { count: missing + placeholderOnly, summary: msg };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "readingorder",
  group: "Inhoud",
  label: "Leesvolgorde (overzicht)",
  wcag: "/blog/sc-1-3-2-wat-betekent-betekenisvolle-volgorde/",
  run: function (ctx) {
    /* Vriendelijke samenvatting van de accessibility tree: koppen, landmarks,
       links, knoppen en velden in documentvolgorde, zonder technisch jargon.
       Klikken op een regel springt naar het element op de pagina. */
    var LANDMARK = { nav: "navigatie", main: "hoofdinhoud", header: "paginakop", footer: "paginavoet", aside: "zijbalk", form: "formulier" };
    var ROLE_LANDMARK = { navigation: "navigatie", main: "hoofdinhoud", banner: "paginakop", contentinfo: "paginavoet", complementary: "zijbalk", search: "zoekgebied", form: "formulier", region: "gebied" };
    var sel = "h1,h2,h3,h4,h5,h6,[role=heading],a[href],button,input,select,textarea,nav,main,header,footer,aside,[role=navigation],[role=main],[role=banner],[role=contentinfo],[role=complementary],[role=search]";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    var items = [], problems = 0;
    nodes.forEach(function (el) {
      if (el.closest("[data-pa-lens]") || !PA.visible(el)) return;
      var tag = el.tagName.toLowerCase();
      var role = (el.getAttribute("role") || "").toLowerCase();
      var name = PA.accName(el).replace(/\s+/g, " ").trim();
      var status = "info", label;
      if (/^h[1-6]$/.test(tag) || role === "heading") {
        var lvl = el.getAttribute("aria-level") || (tag.charAt(0) === "h" ? tag.charAt(1) : "2");
        label = PA.t("kop {lvl}: {text}", { lvl: lvl, text: (el.textContent || "").replace(/\s+/g, " ").trim() || PA.t("(leeg)") });
        if (!(el.textContent || "").trim()) { status = "error"; problems++; }
      } else if (ROLE_LANDMARK[role] || LANDMARK[tag]) {
        var lm = PA.t(ROLE_LANDMARK[role] || LANDMARK[tag]);
        if ((tag === "header" || tag === "footer") && el.parentElement && el.parentElement.tagName.toLowerCase() !== "body") return;
        if (tag === "form" && !name) return;
        label = "— " + lm + (name ? " (" + name + ")" : "") + " —";
      } else if (tag === "a") {
        label = PA.t("link: {name}", { name: name || PA.t("(zonder tekst)") });
        if (!name) { status = "error"; problems++; }
      } else if (tag === "button") {
        label = PA.t("knop: {name}", { name: name || PA.t("(zonder naam)") });
        if (!name) { status = "error"; problems++; }
      } else {
        var t = (el.getAttribute("type") || "").toLowerCase();
        if (["hidden", "submit", "button", "image", "reset"].indexOf(t) !== -1) {
          if (t === "submit" || t === "button" || t === "image") label = PA.t("knop: {name}", { name: name || el.value || PA.t("(zonder naam)") });
          else return;
        } else {
          label = PA.t("veld: {name}", { name: name || PA.t("(zonder label)") });
          if (!name) { status = "error"; problems++; }
        }
      }
      items.push({ label: label, el: el, status: status });
    });
    return {
      count: items.length,
      items: items,
      summary: PA.t("De pagina zoals hulpsoftware hem doorloopt: {n} koppen, landmarks, links, knoppen en velden in documentvolgorde. {p} ervan missen een tekst of naam. Loopt het verhaal logisch als je alleen deze lijst leest?", { n: items.length, p: problems })
    };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});
