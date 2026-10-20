# QA report properaccess.nl

Date: 2026-10-19
Branch: `codex/hugo-upgrade`
Scope: Hugo-upgrade smoke test, local build and live core routes

## Result

Health score: 100/100 for the tested scope

No functional or visual regressions were found in the tested routes.

## Tests

- Local Hugo server on Hugo Extended 0.168.0: homepage, English homepage,
  tools, PDF-checker, blog, Academy, sitemap and both RSS feeds returned 200.
- Live `https://www.properaccess.nl`: the same routes returned 200.
- Browser console: no page JavaScript errors locally or live. The local
  browser emitted only harmless live-reload messages about ignoring localhost.
- English page: language combobox is present, with NL and EN options.
- Language switcher: selecting NL from `/en/` navigated to `/` locally.
- Mobile viewport 375px: homepage rendered without a visible horizontal overflow
  or broken layout.
- Production build: 791 NL pages, 240 EN pages, 325 NL aliases and 90 EN
  aliases. No Hugo warnings or errors.

## Evidence

- [Local desktop homepage](screenshots/home-desktop.png)
- [Local mobile homepage](screenshots/home-mobile.png)
- [Live desktop homepage](screenshots/live-home-desktop.png)

No forms were submitted and no external data was changed.
