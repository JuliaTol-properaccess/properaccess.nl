---
title: 'SC 2.5.3 - What does "Label in Name" mean?'
date: 2026-08-01
slug: "wcag-2-5-3-label-in-name"
translationKey: "sc-2-5-3"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-5-3"
  - "voice-control"
  - "aria"
description: "WCAG 2.5.3 asks that the visible text of a control is contained in its accessible name. Why a helpful aria-label can break voice control, and how to check it."
keywords:
  - WCAG 2.5.3
  - label in name
  - voice control accessibility
  - aria-label visible text
  - accessible name mismatch
  - speech recognition website
---

Somebody using voice control looks at your page, sees a button that says "Send", and says "click Send". Nothing happens.

The button carries `aria-label="Submit contact form"`. Somebody added it to be helpful. The visible word "Send" is nowhere in the accessible name, so the software has no way to connect what the user said to the control they are looking at.

WCAG says: **the visible text of a control has to be contained in its accessible name**.

This is the criterion where a well-intentioned improvement is the cause of the failure, which makes it worth understanding properly.

## What the criterion says

[Success criterion 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html) (level A) requires that for user interface components with labels that include text or images of text, the accessible name contains the text that is presented visually.

Two things follow from the word *contains*:

- The accessible name may be **longer** than the visible text. "Read more about our audit method" on a button that visibly says "Read more" is fine, because the visible words are in there.
- The visible text has to appear **in the same order** and unbroken. "Submit the Send form" would not reliably work, because the visible word has been split up.

A common misreading is that the name must equal the visible text. It does not. It has to include it.

## Why this matters

The group this is written for is voice control users: people using Dragon, Voice Control on macOS and iOS, or Voice Access on Android. They navigate by saying the name of the thing they can see. When the accessible name does not contain the visible text, the command fails, and the fallback is a numbered overlay where the user has to find the right number and say it. That turns a one-second action into a ten-second one, on every control that is wrong.

It also affects screen reader users with some sight, who see one word and hear another and have to work out whether they are on the right control.

And it is a symptom worth reading: a mismatch usually means somebody wrote a name without checking what the control already said.

## Mistakes we keep finding

**An `aria-label` that rewrites the visible text.** A button reading "Send" with `aria-label="Submit form"`. The intent was clarity for screen readers. The effect is that voice control cannot operate it.

**"Read more" links with a fully replaced name.** A card link visibly saying "Read more" with `aria-label="Annual report 2026"`. This is the recommended fix for [SC 2.4.4](/en/blog/wcag-2-4-4-link-purpose-in-context/), and done this way it creates a 2.5.3 failure. The correct version keeps the visible words: `aria-label="Read more about the annual report 2026"`.

**Icon plus text where the icon steals the name.** A button containing an icon and the word "Search", where the icon has its own `alt` or `title` that lands in front of the visible word.

**Punctuation and case.** Case does not matter, and neither does punctuation in most implementations, but a stray colon or a non-breaking space inside the visible text can break the match in ways that are hard to see. If a control fails and the words look identical, check the characters.

**Placeholder differing from the label.** A field labelled "Email address" with placeholder "your@email.com" is fine. A field whose visible label is "Email" and whose `aria-label` is "Email address" is technically a mismatch in the wrong direction: the visible text "Email" is contained in "Email address", so that one actually passes. Reverse them and it fails.

**Translated interfaces where only one side got translated.** The visible text is in Dutch and the `aria-label` was left in English from the component library.

## The rule of thumb

Before you write an `aria-label`, ask whether the control already has visible text.

- **No visible text** (an icon-only button)? An `aria-label` is exactly right, and 2.5.3 does not apply because there is no visible label to contain.
- **Visible text that is enough**? Do not add an `aria-label` at all. The visible text is already the name.
- **Visible text that is not enough**? Extend it, do not replace it. Start the accessible name with the visible words and add the rest.

That last line solves nearly every case.

## How to test it

Turn on **show accessible name** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. Every interactive element shows the name a screen reader will announce, drawn next to the element itself. Because the visible text and the announced name are then side by side on the same screen, a mismatch is obvious without opening anything.

Walk the page and compare, control by control. You are looking for any case where the visible words do not appear inside the announced name.

**Link text** and **clickable images** are worth running alongside, because the card-link pattern is where this fails most often.

Then, if you can, test with voice control. Turn on Voice Control on macOS or iOS and try saying the visible label of a few buttons. It is the most convincing demonstration of this criterion there is, and it takes two minutes.

### Who does what

- **Developers** own this. The rule is short: extend the visible text, never replace it.
- **Designers** are involved when a card pattern needs a bare "Read more", because that is the pattern that pushes developers into replacing the name.
- **Editors** can find it in a CMS that exposes a separate "link title" or "screen reader text" field. If that field does not start with the visible link text, it is probably a failure.

## Frequently asked questions

### Can the accessible name be longer than the visible text?

Yes, and that is often the right answer. It has to contain the visible text, not equal it.

### Does case matter?

No. "SEND" and "Send" match.

### What about an icon-only button?

This criterion does not apply, because there is no visible label to contain. It still needs an accessible name under [SC 4.1.2](/en/blog/wcag-4-1-2-name-role-value/).

### Our design system adds a descriptive `aria-label` to every button. Is that a problem?

Almost certainly yes, on every button that has visible text. It is a common and well-meant pattern and it is the single biggest source of this failure we see.

### Does the visible text have to come first in the name?

The criterion does not require it, and putting it first is the safest choice, because some voice control implementations match on the start of the name. "Read more about X" beats "X, read more".

### Is a tooltip that differs from the button text a failure?

If the tooltip becomes the accessible name through `title` and it does not contain the visible text, yes. Another reason not to rely on `title` for naming.

## Summary

- The visible text of a control has to appear inside its accessible name, unbroken and in order.
- The name may be longer. It may not replace.
- The most common cause is a helpful `aria-label` written without looking at what the control already says.
- Icon-only controls are out of scope here and still need a name under 4.1.2.
- Check with the show accessible name check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then try saying a few labels with voice control.

This is a criterion almost nobody tests for, because it only shows up when you drive the page by voice. It is also one of the quickest to fix once you see it. [Ask us for a quote](/en/contact/) if you want your controls checked properly.
