---
title: 'SC 3.1.2 - What does "Language of Parts" mean?'
date: 2026-08-01
slug: "wcag-3-1-2-language-of-parts"
translationKey: "sc-3-1-2"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "3-1-2"
  - "language"
description: "WCAG 3.1.2 asks that passages in another language are marked in the code. Which words need it, which loanwords do not, and how to check a page quickly."
keywords:
  - WCAG 3.1.2
  - language of parts
  - lang attribute span
  - foreign words screen reader
  - quote in another language
  - multilingual content accessibility
---

Most pages are written in one language, with the occasional passage in another: a quote, a product name, a phrase the industry never bothered to translate. If you do not say where the language changes, a screen reader keeps applying the wrong pronunciation rules and the passage comes out as noise.

WCAG says: **mark the passages that are in a different language from the page**.

## What the criterion says

[Success criterion 3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html) (level AA) requires that the human language of each passage or phrase in the content can be programmatically determined, with exceptions for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the surrounding language.

In practice you wrap the passage and set the language:

```html
<p>The report calls this a <span lang="nl">toegankelijkheidsverklaring</span>.</p>
```

Any element takes a `lang` attribute, so a `<blockquote>`, a `<div>` or a whole `<section>` works the same way.

## Why this matters

A screen reader switches voice and pronunciation rules when it hits a `lang` change. Without it, an English voice reading a Dutch phrase produces something the listener has to decode rather than understand, and a long passage becomes unlistenable.

Braille displays have the same problem, and worse, because braille contractions are language specific. A passage in the wrong language does not come out as accented braille, it comes out as the wrong characters.

## What does not need marking

This is where the criterion is more generous than people assume, and where most of the arguing happens.

**Proper names.** People, places, organisations, product names. "Rijksmuseum" in an English sentence does not need marking.

**Technical terms** with no equivalent in the surrounding language, particularly where the field simply uses the foreign word.

**Words of indeterminate language**, such as a made-up brand name.

**Words that have become part of the language.** This is the big one. "Pizza", "email", "weekend" and "software" in a Dutch sentence are Dutch now. If a monolingual dictionary of the page's language lists it, it does not need marking.

**Regional variation.** Belgian Dutch inside Netherlands Dutch, or American English inside British English, is the same language. No marking.

The practical test: would a native speaker of the page's language, reading aloud, switch accent for this word? "Le weekend" no. "Sans serif" no. A full sentence of quoted French, yes.

## Mistakes we keep finding

**English phrases in a Dutch page, unmarked.** By volume this is most of it. Marketing and technology copy is full of them, and a Dutch voice reading "user experience" or "best practices" is genuinely hard to follow.

**Quotes in another language.** A pull quote from an English-language source in a Dutch article, styled beautifully and unmarked.

**Multilingual pages where only the heading is marked.** Someone marked the obvious one and stopped.

**The language switcher itself.** The list of languages in the header is the one place on every page where the words are deliberately in another language. "English", "Deutsch", "Français" each need their own `lang`, and this is almost universally missed. It is also the most useful place to get right, because it is how a visitor finds their own language.

**Over-marking.** Wrapping every borrowed word in a `<span lang="en">` makes a screen reader switch voice mid-sentence repeatedly, which is worse than not marking at all. If it has entered the language, leave it alone.

**A `lang` value that is not valid.** `lang="eng"` or `lang="english"` do nothing. It is `en`.

## How to test it

Turn on **page language** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. As well as showing the page language, it shows which parts of the page declare their own language, so you can see immediately what has been marked and start from there.

A tool cannot tell you what should have been marked, because that judgement needs someone who reads the page's language and knows which borrowings have naturalised. So the real test is a reading pass:

1. Read the page and mark every passage that is genuinely in another language.
2. Strike out the proper names, the technical terms and the naturalised borrowings.
3. What is left should be marked in the code. Check whether it is.

If you want to be sure, listen to it. Let the page be read aloud and note where the pronunciation goes wrong. Everything that made you flinch is either a missing `lang` or an over-marked one.

### Who does what

- **Editors** own the decision about which words count. You know the subject and the register, so you know whether the term has naturalised or is genuinely foreign.
- **Developers** make sure the CMS lets an editor set a language on a passage at all. In a lot of systems this is the blocker: the editor knows exactly which phrase needs marking and the editor toolbar has no way to do it.
- **Designers** mark up the language switcher properly, since that component is theirs and it is the one every page has.

## Frequently asked questions

### Does every English word in a Dutch page need marking?

No, and marking them all is a mistake. Words that have entered Dutch stay unmarked. Full phrases and quotes that a Dutch reader would pronounce in English do need it.

### What about a whole page in a second language?

Then it is not a "part". The page's own language goes on `<html>` under [SC 3.1.1](/en/blog/wcag-3-1-1-language-of-page/).

### Do proper names really not need it?

Not for this criterion. You may still mark them if the pronunciation matters to you, and for a name that is central to the page it is often a kindness.

### Our editor has no way to set a language on a selection.

That is the most common practical blocker, and it is a developer task: expose it in the editor, or add a snippet or shortcode. Until then, editors cannot comply no matter how well they understand the rule.

### Does this apply to `alt` text and labels?

Yes. `alt` text, button labels and link text are all content. An attribute value cannot carry its own `lang`, so if the whole string is in another language, put `lang` on the element itself.

## Summary

- Mark passages that are in a different language from the page, with `lang` on any element.
- Proper names, technical terms and naturalised borrowings are exempt.
- Over-marking is its own failure. If a native speaker would not switch accent, leave it.
- The language switcher in your header needs a `lang` on each option, and almost never has one.
- Check with the page language check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then read the page and decide the rest yourself.

Which words count is a language judgement, not a technical one, which is why this criterion needs an editor rather than a scan. We report it per element so it is clear exactly which phrase is meant. [Ask us for a quote](/en/contact/) if you want your content read that way.
