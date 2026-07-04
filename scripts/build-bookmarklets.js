/*
 * Bouwt de Toegankelijkheids-lens-bookmarklets uit assets/js/bookmarklets/.
 * Voegt de gedeelde core + alle check-modules + een boot-bestand per rol samen,
 * wrapt dat in een IIFE, minificeert licht en schrijft data/bookmarklets.json met
 * per rol { href, code, title, slug }. Draait vóór de Hugo-build (zie package.json).
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "assets", "js", "bookmarklets");
const OUT = path.join(__dirname, "..", "data", "bookmarklets.json");

const SHARED = ["core.js", "checks-content.js", "checks-dev.js", "checks-design.js"];

const ROLES = [
  { key: "webredactie", title: "Voor webredactie", boot: "boot-webredactie.js" },
  { key: "ontwikkelaars", title: "Voor ontwikkelaars", boot: "boot-ontwikkelaars.js" },
  { key: "designers", title: "Voor designers", boot: "boot-designers.js" },
];

function read(file) {
  return fs.readFileSync(path.join(SRC, file), "utf8");
}

/* Lichte, veilige minificatie: verwijder /* *​/-commentaarblokken, trim regels,
   laat lege regels vallen. Newlines blijven staan (veilig voor ASI). */
function minify(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join("\n");
}

function buildRole(role) {
  const parts = SHARED.concat([role.boot]).map(read).join("\n");
  const body = minify(parts);
  const wrapped = "(function(){\n" + body + "\n})();";
  const code = "javascript:" + encodeURIComponent(wrapped);
  return {
    key: role.key,
    title: role.title,
    slug: "toegankelijkheids-lens-" + role.key,
    code: code,
    raw: wrapped,
  };
}

function main() {
  const data = {};
  ROLES.forEach((role) => {
    const b = buildRole(role);
    data[role.key] = { title: b.title, slug: b.slug, href: b.code, code: b.code, bytes: b.raw.length };
  });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n", "utf8");
  Object.keys(data).forEach((k) => {
    console.log("bookmarklet " + k + ": " + data[k].bytes + " bytes bron, " + data[k].href.length + " tekens in URL");
  });
}

main();
