/*
 * Bouwt de Toegankelijkheids-lens-bookmarklets uit assets/js/bookmarklets/.
 *
 * Per rol wordt de gedeelde core + alle check-modules + het boot-bestand
 * samengevoegd, in een IIFE gewrapt en daarna GEOBFUSCEERD (javascript-obfuscator).
 * De obfuscated code wordt NIET meer in de pagina gezet. In plaats daarvan:
 *
 *   1. tools/lens-loader/bundles.js  -> de obfuscated bundles die de Cloudflare
 *      Worker (tools/lens-loader) serveert op /l/<rol>.js
 *   2. data/bookmarklets.json        -> per rol een kleine LOADER-bookmarklet die
 *      dat script bij de Worker ophaalt. De leesbare bron staat dus niet meer in
 *      de HTML en updates lopen centraal via de Worker.
 *
 * Draait vóór de Hugo-build (zie package.json). Deterministisch: vaste seed, dus
 * dezelfde bron geeft dezelfde output (schone diffs).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const JavaScriptObfuscator = require("javascript-obfuscator");

const SRC = path.join(__dirname, "..", "assets", "js", "bookmarklets");
const OUT_DATA = path.join(__dirname, "..", "data", "bookmarklets.json");
const OUT_BUNDLES = path.join(__dirname, "..", "tools", "lens-loader", "bundles.js");

/* Basis-URL van de loader-Worker. Nu een workers.dev-adres; als je later een
   eigen route koppelt (bv. https://tools.properaccess.nl) hoef je alleen deze
   constante aan te passen en opnieuw te bouwen. */
const LOADER_BASE = "https://lens-loader.juliatol.workers.dev";

const SHARED = ["core.js", "checks-content.js", "checks-dev.js", "checks-design.js"];

/* Sinds de tab-merge is er nog één bundle: één paneel met drie tabbladen
   (Redactie / Designer / Developer), gedefinieerd in boot-lens.js. */
const BOOT = "boot-lens.js";

/* Juridische banner. Blijft bovenaan de bundle staan (obfuscator raakt hem niet
   omdat we hem er na afloop voor plakken). Maakt kopiëren een aantoonbare
   inbreuk in plaats van een grijs gebied. */
const BANNER =
  "/*! Toegankelijkheids-lens (c) Proper Access - properaccess.nl\n" +
  " * Alle rechten voorbehouden. Deze tool en de code erachter zijn eigendom van\n" +
  " * Proper Access. Verveelvoudigen, verspreiden, herpubliceren of onder een\n" +
  " * andere naam aanbieden is niet toegestaan zonder schriftelijke toestemming.\n" +
  " * Vragen of licentie? info@properaccess.nl / 085 5055 890\n" +
  " */\n";

const OBFUSCATOR_OPTIONS = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.5,
  deadCodeInjection: false,
  identifierNamesGenerator: "hexadecimal",
  numbersToExpressions: true,
  simplify: true,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 1,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  splitStrings: true,
  splitStringsChunkLength: 10,
  transformObjectKeys: false,
  selfDefending: false,
  seed: 20260704,
};

function read(file) {
  return fs.readFileSync(path.join(SRC, file), "utf8");
}

function buildBundle() {
  const parts = SHARED.concat([BOOT]).map(read).join("\n");
  const wrapped = "(function(){\n" + parts + "\n})();";
  const obf = JavaScriptObfuscator.obfuscate(wrapped, OBFUSCATOR_OPTIONS).getObfuscatedCode();
  return BANNER + obf + "\n";
}

/* Kleine loader-bookmarklet. Bestaat de lens al op de pagina, dan togglet
   hij open/dicht; anders haalt hij het script bij de Worker op. */
function loaderCode(version) {
  const src = LOADER_BASE + "/l/lens.js?v=" + version;
  const js =
    "(function(){" +
    "var P=window.__paLens;" +
    "if(P&&P.start){P.start();return;}" +
    'var s=document.createElement("script");' +
    's.src="' + src + '";' +
    's.onerror=function(){window.alert("De Toegankelijkheids-lens kon niet laden. Controleer je internetverbinding of probeer een andere pagina.");};' +
    "(document.head||document.documentElement).appendChild(s);" +
    "})();";
  return "javascript:" + encodeURIComponent(js);
}

function main() {
  const bundle = buildBundle();
  const bundles = { lens: bundle };

  /* Versiehash: verandert alleen als de code verandert, zodat de loader-URL
     netjes cachebust bij een echte wijziging. */
  const version = crypto.createHash("sha256").update(bundle).digest("hex").slice(0, 8);

  /* 1. Obfuscated bundle voor de Worker. */
  const bundlesModule =
    "/* AUTO-GEGENEREERD door scripts/build-bookmarklets.js - niet met de hand bewerken. */\n" +
    "export const VERSION = " + JSON.stringify(version) + ";\n" +
    "export const BUNDLES = " + JSON.stringify(bundles, null, 2) + ";\n";
  fs.mkdirSync(path.dirname(OUT_BUNDLES), { recursive: true });
  fs.writeFileSync(OUT_BUNDLES, bundlesModule, "utf8");

  /* 2. Loader-bookmarklet voor de pagina. */
  const code = loaderCode(version);
  const data = {
    lens: {
      title: "Toegankelijkheids-lens",
      slug: "toegankelijkheids-lens",
      href: code,
      code: code,
    },
  };
  fs.mkdirSync(path.dirname(OUT_DATA), { recursive: true });
  fs.writeFileSync(OUT_DATA, JSON.stringify(data, null, 2) + "\n", "utf8");

  console.log(
    "lens: bundle " + bundle.length + " tekens (obfuscated), loader " + code.length + " tekens"
  );
  console.log("versie " + version + " -> " + LOADER_BASE + "/l/lens.js");
}

main();
