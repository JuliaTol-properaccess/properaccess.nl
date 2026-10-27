/**
 * Cloudflare Email Address Obfuscation vervangt een zichtbaar adres of een
 * mailto-href door "[email protected]" als JavaScript uit staat. Het commentaar
 * email_off tot /email_off slaat Cloudflare over. Hugo minify haalt commentaar
 * weg, dus dit draait daarna over public/. Het adres zelf verandert niet.
 * Adressen in script, style, textarea en head laat Cloudflare al met rust.
 *
 * https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public");
const blocks =
  /(<head\b[^>]*>[\s\S]*?<\/head>|<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<textarea\b[^>]*>[\s\S]*?<\/textarea>|<noscript\b[^>]*>[\s\S]*?<\/noscript>)/gi;
const protectable =
  /(?<!<!--email_off-->)(<[^>]*\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}[^>]*>|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

function protect(html) {
  if (!html.includes("@")) return html;
  return html
    .split(blocks)
    .map((part) => {
      if (/^<(head|script|style|textarea|noscript)\b/i.test(part)) return part;
      return part.replace(protectable, (match) => "<!--email_off-->" + match + "<!--/email_off-->");
    })
    .join("");
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = 0;
  let wrapped = 0;
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await walk(full);
      files += nested.files;
      wrapped += nested.wrapped;
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    files += 1;
    const before = await readFile(full, "utf8");
    const after = protect(before);
    if (after !== before) {
      await writeFile(full, after);
      wrapped += 1;
    }
  }
  return { files, wrapped };
}

const result = await walk(root);
console.log(
  "E-mailadressen leesbaar zonder JavaScript: " + result.wrapped + " HTML-bestanden aangepast, " + result.files + " bekeken."
);
