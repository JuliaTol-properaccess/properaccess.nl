---
title: 'SC 3.1.1 - What does "Language of Page" mean?'
date: 2026-08-01
slug: "wcag-3-1-1-language-of-page"
translationKey: "sc-3-1-1"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "3-1-1"
  - "language"
description: "WCAG 3.1.1 asks that every page declares its language in the code. Why the wrong lang attribute makes a page unlistenable, and how to check it in ten seconds."
keywords:
  - WCAG 3.1.1
  - language of page
  - lang attribute
  - html lang
  - screen reader pronunciation
  - multilingual website accessibility
---

A screen reader pronounces your text using the language the page declares. Put the wrong one there and an English voice reads your Dutch page out loud. Not translated, just pronounced with English rules, which produces something close to noise.

WCAG says: **every page declares its main language in the code**.

It is one line of HTML and one of the cheapest fixes in the whole standard, which is why it is slightly embarrassing how often it is wrong.

## What the criterion says

[Success criterion 3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) (level A) requires that the default human language of each web page can be programmatically determined.

In practice that means a `lang` attribute on the `<html>` element:

```html
<html lang="en">
```

The value is a language tag: `en`, `nl`, `de`, `sv`. A region can be added, so `en-GB` and `nl-NL` are both valid. For pronunciation the language part is what matters.

## Why this matters

Screen readers pick their voice and their pronunciation rules from this attribute. Get it wrong and the page is not slightly off, it is unusable by ear.

It does more than pronunciation:

- **Braille displays** use the language to pick the right contractions. Braille is not a direct letter mapping, and the rules differ per language.
- **Browsers** offer translation based on it. A Dutch page declared as `en` never gets the translate prompt for a visitor who needs it.
- **Search engines** use it to serve your page to the right people.
- **Hyphenation and spellcheck** in the browser depend on it.

## Mistakes we keep finding

**No `lang` at all.** The attribute is missing and assistive software guesses, usually from the user's own settings, which is a coin flip.

**The wrong language, inherited from the theme.** A large share of website themes ship with `lang="en"` because they were written in English. Nobody changes it, and every page of a Dutch site is then read by an English voice. This is by far the most common version of this failure and it is a single template edit.

**The language switcher that does not switch the language.** The site has a Dutch and an English version and both declare `nl`. The English pages get read with a Dutch voice. On a multilingual site this is the one to check first, and it is the one a Dutch-speaking tester never notices because the Dutch side is fine.

**A region code that is not a language code.** `lang="nl-BE"` is fine. `lang="be"` is Belarusian.

**Language declared in a meta tag instead.** `<meta http-equiv="content-language">` is obsolete and is not what assistive software reads. It has to be the attribute on `<html>`.

**Passages in another language not marked.** An English quote or slogan inside a Dutch page is the sister criterion, [SC 3.1.2 Language of Parts](/en/blog/wcag-3-1-2-language-of-parts/).

## How to test it

Turn on **page language** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It shows whether the page language is set, what it is, and which parts of the page declare their own language, so this criterion and 3.1.2 come out of the same check.

Without any tool it takes ten seconds. Right-click, view page source, look at the very first line for `<html lang="...">`. Is it there, and is it right?

Two things worth doing beyond that:

**Check every language version.** If your site has more than one, open a page from each and check separately. The failure is nearly always on the version you do not speak.

**Listen to it.** Turn on your phone's or computer's built-in read-aloud and let it read a paragraph. If your own language sounds foreign, the attribute is wrong. This is faster and more convincing than reading source, and it is the test to give a stakeholder who does not believe it matters.

### Who does what

- **Developers** set it in the template. One change fixes every page at once.
- **Editors** own it on a multilingual site, because the translation module usually gets it right only if you pick the right language when you publish the page. Add it to your publishing checklist, especially after a new theme, a migration or a new language version.
- **Designers** are not involved in this one.

## Frequently asked questions

### My site is in one language only. Do I still need it?

Yes. Without the attribute, assistive software guesses, and the guess is based on the user's settings rather than your content. It is a one-off template change.

### Does `nl` or `nl-NL` matter?

Both pass. `nl` is the language, `NL` the region. Screen readers care about the language part. Just do not confuse language codes with country codes: `nl` is Dutch, `de` is German, `be` is Belarusian and not Belgium.

### What if a page has two languages on it?

The main language of the page goes on `<html>`. Individual passages in another language get their own marking under [SC 3.1.2](/en/blog/wcag-3-1-2-language-of-parts/).

### I cannot set this anywhere in my CMS.

That is normal. It lives in the site template, not the text editor. Ask your developer. On a multilingual site the translation module usually handles it, provided you set the page language correctly when publishing.

### Does it affect SEO?

Yes, though indirectly, and it is a useful argument to have on hand. Search engines use the declared language to decide who to show the page to, and it works together with your `hreflang` links.

## Summary

- Every page needs `lang` on the `<html>` element with the correct language.
- The most common failure is a theme that shipped with `lang="en"` and was never changed.
- On a multilingual site, check each language version separately.
- Use the page language check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), or view the source and read the first line.
- Passages in another language are [SC 3.1.2](/en/blog/wcag-3-1-2-language-of-parts/).

This is one of the few criteria where a tool gives you a definitive answer, and where the fix is a single line. Most of WCAG is not like that. [Ask us for a quote](/en/contact/) if you want to know what the rest of it says about your site.
