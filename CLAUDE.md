# properaccess.nl

De website van Proper Access. Hugo met Tailwind CSS v4, gehost op GitHub Pages. Remote: `JuliaTol-properaccess/properaccess.nl`. Een push naar `main` bouwt en deployt automatisch, dat duurt circa 3 minuten. Lokaal draaien: `npm run dev` op poort 1313.

De merkidentiteit, tone of voice en prijzen staan in `~/.claude/CLAUDE.md` en laden vanzelf mee. Voor feitelijke claims over wetgeving, EN 301 549, WCAG of het Register: laad de skill `proper-access-vakinhoud`. Voor componenten en paginaopbouw is er de skill `frontend-properaccess`.

## Live zetten

Zegt Julia **"het mag live"** (of "zet maar live", "graag live"), dan doet de sessie de
hele keten zelf: de bestanden van die taak committen, mergen naar `main`, pushen, de
Actions-run afwachten en de gepubliceerde pagina controleren. Vraag haar niet om een
`git add`, een commit of een push. Vastgelegd op 17 september 2026.

Een push naar `main` start `.github/workflows/main.yml`: Hugo-build, publiceren naar
GitHub Pages, de Cloudflare-cache legen en de gewijzigde URL's bij IndexNow melden. Een
run duurt ongeveer anderhalve minuut. `main` is niet beschermd, dus rechtstreeks mergen
en pushen mag.

Vóór de push:

- Draai `npm run build`. Een fout in een template laat de build falen, en dan deployt er
  niets en blijft de oude site staan. Je wilt dat lokaal weten en niet pas in Actions.
- Zet je nieuwe links in een pagina of een partial, controleer dan na de build of het
  doel als `public/<pad>/index.html` bestaat. Anders gaat er een kapotte link live.
- Commit alleen de bestanden van je eigen taak en noem ze bij naam. Julia heeft vaak
  ander werk open in dezelfde map. Let op nieuwe bestanden: die staan als `??` in
  `git status` en gaan zonder expliciete `git add` niet mee.

Na de push: `gh run watch` voor de run, daarna `curl` op de echte URL. Meld pas dat het
live staat als je het gezien hebt, zoals werkregel 8 vraagt.

Uitzondering: raakt de wijziging `.github/workflows/main.yml` zelf, dan weigert GitHub
de push, want het agent-token heeft geen `workflow`-scope. Zeg dat, en laat Julia die ene
push zelf doen.

## Wat je niet kunt raden

- Content staat in `content/dutch/` en `content/english/`, met submappen `blog/`, `diensten/`, `voor_wie/`, `pages/` en `contact/`. NL en EN worden apart geschreven, nooit vertaald.
- Naamconventie voor artikelen: `YYYY-MM-DD_slug.md`, soms met `_nl_` of `_en_` ertussen.
- Blogcategorieën: `wcag-uitgelegd`, `webdeveloper`, `webredactie`, `ai-en-wcag`, `de-eaa`, `tips-en-tools`, `achtergrond_wcag`.
- Shortcodes: `{{< button label="" link="" >}}`, `{{< notice "type" >}}…{{< /notice >}}`, `{{< case-section >}}`.
- Afbeeldingen in `static/images/`, aangeroepen als `/images/…`.
- Config ligt verspreid: `config/_default/` (hugo.toml, languages.toml, params.toml, menus.nl.toml, menus.en.toml), kleuren en fonts in `data/theme.json`, labels in `i18n/nl.yaml` en `i18n/en.yaml`.
- `sitemap_exclude: true` in de front matter houdt een pagina uit de sitemap.

De volledige handleiding voor handmatig beheer staat in [docs/website-beheer.md](docs/website-beheer.md).
