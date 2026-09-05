# properaccess.nl

De website van Proper Access. Hugo met Tailwind CSS v4, gehost op GitHub Pages. Remote: `JuliaTol-properaccess/properaccess.nl`. Een push naar `main` bouwt en deployt automatisch, dat duurt circa 3 minuten. Lokaal draaien: `npm run dev` op poort 1313.

De merkidentiteit, tone of voice en prijzen staan in `~/.claude/CLAUDE.md` en laden vanzelf mee. Voor feitelijke claims over wetgeving, EN 301 549, WCAG of het Register: laad de skill `proper-access-vakinhoud`. Voor componenten en paginaopbouw is er de skill `frontend-properaccess`.

## Wat je niet kunt raden

- Content staat in `content/dutch/` en `content/english/`, met submappen `blog/`, `diensten/`, `voor_wie/`, `pages/` en `contact/`. NL en EN worden apart geschreven, nooit vertaald.
- Naamconventie voor artikelen: `YYYY-MM-DD_slug.md`, soms met `_nl_` of `_en_` ertussen.
- Blogcategorieën: `wcag-uitgelegd`, `webdeveloper`, `webredactie`, `ai-en-wcag`, `de-eaa`, `tips-en-tools`, `achtergrond_wcag`.
- Shortcodes: `{{< button label="" link="" >}}`, `{{< notice "type" >}}…{{< /notice >}}`, `{{< case-section >}}`.
- Afbeeldingen in `static/images/`, aangeroepen als `/images/…`.
- Config ligt verspreid: `config/_default/` (hugo.toml, languages.toml, params.toml, menus.nl.toml, menus.en.toml), kleuren en fonts in `data/theme.json`, labels in `i18n/nl.yaml` en `i18n/en.yaml`.
- `sitemap_exclude: true` in de front matter houdt een pagina uit de sitemap.

De volledige handleiding voor handmatig beheer staat in [docs/website-beheer.md](docs/website-beheer.md).
