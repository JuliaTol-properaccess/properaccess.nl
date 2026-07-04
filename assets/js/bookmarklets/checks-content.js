/* Content-checks: gericht op webredactie. */

PA.register({
  id: "alt",
  group: "Inhoud",
  label: "Afbeeldingen en alt-tekst",
  wcag: "/blog/sc-1-1-1-wat-betekent-niet-tekstuele-content/",
  run: function (ctx) {
    var imgs = Array.prototype.slice.call(document.querySelectorAll("img"));
    var missing = 0, empty = 0, ok = 0;
    imgs.forEach(function (img) {
      var hasAlt = img.hasAttribute("alt");
      var alt = img.getAttribute("alt");
      if (!hasAlt) {
        missing++;
        ctx.mark(img, { status: "error", label: "geen alt-attribuut" });
      } else if (alt.trim() === "") {
        empty++;
        ctx.mark(img, { status: "info", label: 'alt=""' });
      } else {
        ok++;
        ctx.mark(img, { status: "ok", label: "alt: " + alt });
      }
    });
    return {
      count: imgs.length,
      summary: imgs.length + " afbeeldingen: " + ok + " met alt-tekst, " + empty +
        ' met leeg alt (alt=""), ' + missing + " zonder alt-attribuut."
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
      if (prev && lvl > prev + 1) { skips++; status = "warn"; note = "H" + lvl + " (sprong vanaf H" + prev + ")"; }
      prev = lvl;
      ctx.mark(el, { status: status, label: note });
    });
    var msg = nodes.length + " koppen. " + h1 + " keer H1. ";
    msg += skips ? skips + " overgeslagen niveau(s)." : "Geen overgeslagen niveaus.";
    return { count: nodes.length, summary: msg };
  },
  clear: function (ctx) { ctx.clearMarks(); }
});

PA.register({
  id: "links",
  group: "Inhoud",
  label: "Linkteksten",
  wcag: "/blog/sc-2-4-4-wat-betekent-doel-van-links-in-context/",
  run: function (ctx) {
    var vague = /^(lees meer|klik hier|hier|meer|link|read more|click here|meer info|verder)$/i;
    var links = Array.prototype.slice.call(document.querySelectorAll("a[href]"));
    var empty = 0, vagueN = 0;
    links.forEach(function (a) {
      var name = PA.accName(a).replace(/\s+/g, " ").trim();
      if (!name) { empty++; ctx.mark(a, { status: "error", label: "lege link" }); }
      else if (vague.test(name)) { vagueN++; ctx.mark(a, { status: "warn", label: "vaag: “" + name + "”" }); }
    });
    return {
      count: links.length,
      summary: links.length + " links: " + empty + " zonder tekst, " + vagueN +
        " met vage tekst zoals “lees meer”."
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
    var terms = ["rechtsboven", "rechtsonder", "linksboven", "linksonder", "hierboven", "hieronder", "hiernaast", "rechts", "links"];
    var re = new RegExp("\\b(" + terms.join("|") + ")\\b", "i");
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var node, seen = [], hits = 0;
    while ((node = walker.nextNode())) {
      var el = node.parentElement;
      if (!el || el.closest("[data-pa-lens]")) continue;
      var tag = el.tagName.toLowerCase();
      if (tag === "script" || tag === "style" || tag === "noscript") continue;
      var m = node.nodeValue.match(re);
      if (m) {
        hits++;
        if (seen.indexOf(el) === -1) { seen.push(el); ctx.mark(el, { status: "warn", label: "“" + m[1].toLowerCase() + "”" }); }
      }
    }
    return {
      count: seen.length,
      summary: seen.length + " plekken met woorden als “links”, “rechts” of “hieronder”. Controleer of de instructie ook klopt voor wie niet kan zien waar iets staat."
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
      if (!ths) { noHead++; status = "error"; bits.push("geen kopcellen"); }
      else bits.push(ths + " kopcellen");
      if (!caption) { if (status !== "error") status = "warn"; bits.push("geen bijschrift"); }
      else bits.push("bijschrift aanwezig");
      ctx.mark(t, { status: status, label: bits.join(" · ") });
    });
    return {
      count: tables.length,
      summary: tables.length + " tabellen, " + noHead + " zonder kopcellen. Kopcellen vertellen voorleessoftware welke rij of kolom bij een cel hoort. Een bijschrift geeft de tabel een titel."
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
      ? "Pagina-taal: lang=\"" + htmlLang + "\". "
      : "Let op: geen lang-attribuut op <html>. ";
    msg += parts.length + " onderdelen met een eigen taal.";
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
    return { count: lists.length, summary: lists.length + " echte lijsten op de pagina." };
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
      summary: t ? "Paginatitel: “" + t + "”" : "Deze pagina heeft geen titel."
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
    return { count: shown, summary: shown + " verborgen elementen gemarkeerd (kunnen wel of niet door een screenreader gelezen worden)." };
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
    return { count: sheets.length, summary: "Alle opmaak uitgezet. De pagina toont nu de kale leesvolgorde die een screenreader volgt. Klik nogmaals om terug te zetten." };
  },
  clear: function () {
    (PA._linSheets || []).forEach(function (n) { if (n.sheet) n.sheet.disabled = false; });
    PA._linSheets = [];
  }
});
