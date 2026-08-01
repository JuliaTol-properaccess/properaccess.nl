---
title: 'SC 1.4.12 - What does "Text Spacing" mean?'
date: 2026-08-01
slug: "wcag-1-4-12-text-spacing"
translationKey: "sc-1-4-12"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-4-12"
  - "css"
  - "readability"
description: "WCAG 1.4.12 asks that your page survives when a reader increases line height, letter, word and paragraph spacing. Why fixed heights break, and how to test it in one click."
keywords:
  - WCAG 1.4.12
  - text spacing
  - line height accessibility
  - fixed height overflow hidden
  - dyslexia text spacing
  - readable text CSS
---

You built the hero exactly as designed. Height 400 pixels, text centred, pixel perfect. Then a reader with dyslexia turns line height up to 1.5, and the last line of your heading is simply gone.

Nobody asked them to leave it alone. Browsers and extensions let people change how text is spaced, because for a lot of readers that is the difference between reading and not reading. WCAG says: **your page has to survive it**.

## What the criterion says

[Success criterion 1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) (level AA) requires that no content or functionality is lost when a reader sets all of the following:

- **Line height** to at least 1.5 times the font size
- **Spacing after paragraphs** to at least 2 times the font size
- **Letter spacing** to at least 0.12 times the font size
- **Word spacing** to at least 0.16 times the font size

You do not have to ship these values. The criterion is about what happens when somebody else applies them. Nothing may disappear, overlap or become unreadable.

There is a condition at the start of the criterion that is easy to miss: it applies to content implemented using markup languages that support these text style properties. A framework that renders its whole interface into a `<canvas>` element, such as Flutter, gives the browser no text to restyle, so a reader cannot apply these values at all and this criterion does not apply. That is not a clean bill of health, it just means the problem sits under other criteria such as screen reader support.

## Why this matters

- **People with dyslexia.** More space between words and lines is one of the most effective single changes for reading speed.
- **People with low vision.** Wider letter and word spacing makes the boundaries between words easier to pick out.
- **Older readers.** Tightly set text is harder to process as contrast sensitivity and acuity decline.
- **People with cognitive disabilities.** More whitespace means less to hold at once.

The reason this criterion exists at all is that these readers were already changing the spacing, and pages were breaking underneath them.

## The main cause: fixed heights

Almost every failure we report comes back to the same pattern:

```css
/* Breaks */
.hero {
  height: 400px;
  overflow: hidden;
}

.button {
  height: 48px;
  line-height: 48px;
}

.card-title {
  height: 60px;
  overflow: hidden;
}
```

Take that card title. Font size 32 pixels, default line height 1.2, so a line is about 38 pixels and two lines fit in a 60 pixel box. The reader sets line height to 1.5 and a line becomes 48 pixels. Two lines now need 96 pixels. The box is still 60, and `overflow: hidden` quietly removes the rest.

The fix is nearly mechanical:

```css
/* Survives */
.hero {
  min-height: 400px;
  padding: 3rem 1rem;
}

.button {
  min-height: 48px;
  padding: 0.75rem 1.5rem;
  line-height: 1.5;
}

.card-title {
  /* no height at all */
}
```

`min-height` instead of `height`, padding instead of a hard-coded line height, and no `overflow: hidden` on anything that contains text. That is most of the work.

## Mistakes we keep finding

**`height` where `min-height` was meant.** The single most common cause, and usually a one-word fix per rule.

**`overflow: hidden` used to tidy up.** It does not solve the overflow, it hides the evidence. Content is lost and the page looks fine.

**`line-height` in pixels.** `line-height: 48px` cannot respond to anything. Use a unitless number so it scales with the font size.

**Buttons and badges sized to their text.** A pill-shaped button with a fixed width breaks as soon as letter spacing widens the label.

**Truncation with `-webkit-line-clamp`.** Clamping a card excerpt to two lines is a design decision that removes content at wider spacing. If the full text is available elsewhere it is defensible. If the card is the only place it appears, it is not.

**Navigation that overlaps.** A horizontal menu sized to fit exactly at default spacing wraps or collides once word spacing increases.

**Absolute positioning of text.** Anything placed with `position: absolute` and exact coordinates will overlap something the moment the text grows.

## How to test it

Turn on **text spacing (1.4.12)** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It applies all four values at once, which is the right way round: the criterion asks about all of them together, and testing them one at a time can pass while the combination fails.

Then read the page looking for four things:

- Text that is cut off or has disappeared entirely
- Content sitting on top of other content
- Labels running outside their buttons
- Tooltips, dropdowns and menus that become unreadable or overlap

Check the components too, not just the article body. Cards, buttons, tabs, navigation and modals fail far more often than paragraphs of running text, because paragraphs were never given a fixed height in the first place.

### Who does what

- **Developers** own this one. `min-height` over `height`, unitless `line-height`, no `overflow: hidden` on text containers, and let components grow.
- **Designers** stop specifying components by exact height. Give the developer a minimum and a padding, and design what a two-line version of every one-line element looks like.
- **Editors** rarely cause this, but they surface it: a heading that is one word longer than the designer expected finds the same bug.

## Frequently asked questions

### Do I have to apply these values to my site?

No. Your default typography is your own choice. The requirement is that nothing breaks when a reader applies them.

### Does this apply to text in images?

No. An image of text does not respond to CSS at all, which is a problem under [SC 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) rather than this one.

### What about languages that do not use spaces between words?

The criterion notes that letter and word spacing do not apply to languages and scripts that do not use those properties. For Chinese, Japanese and Korean the line height and paragraph spacing requirements still hold.

### Is a scrollbar appearing a failure?

No. If a container gains a scrollbar and all the content is reachable, nothing is lost. Losing content is the failure, not gaining a scrollbar.

### How does this relate to reflow?

[SC 1.4.10 Reflow](/en/blog/wcag-1-4-10-reflow/) is about narrow viewports, this one is about roomier text at the same width. They break on the same underlying cause, which is a layout that assumed its content would stay exactly the size it was on the day it was built. Testing them in the same sitting is efficient.

## Summary

- Line height 1.5, paragraph spacing 2, letter spacing 0.12, word spacing 0.16, all at once, and nothing may be lost.
- You do not have to ship those values, only survive them.
- `height` plus `overflow: hidden` on a text container is the cause of most failures.
- Check the components, not just the article text.
- Test with the text spacing check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar).

This is one of the more mechanical criteria: the values are fixed and the fixes are usually a single CSS property. Finding every component that breaks across a whole design system is the part that takes a person. [Ask us for a quote](/en/contact/) if you would rather not go hunting.
