---
title: 'SC 1.4.1 - What does "Use of Colour" mean?'
date: 2026-08-01
slug: "wcag-1-4-1-use-of-colour"
translationKey: "sc-1-4-1"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-4-1"
  - "colour"
  - "design"
description: "WCAG 1.4.1 says colour may never be the only way you convey information. Where that bites, what is exempt, and the one-click test that settles it."
keywords:
  - WCAG 1.4.1
  - use of colour
  - colour blind website
  - underline links accessibility
  - colour only error message
  - chart colour accessibility
---

An input that turns red when something is wrong. A green dot for available and a red one for taken. Links that differ from the surrounding text by colour alone.

For anyone who does not see colour the same way you do, that information is simply not there. WCAG says: **colour may never be the only visual means of conveying information**.

Note what it does not say. It does not say use less colour.

## What the criterion says

[Success criterion 1.4.1 Use of Colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) (level A) prohibits colour from being the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

In practice: wherever colour means something, there has to be a second cue that does not depend on colour. Text, an icon, an underline, a shape, a pattern, a border, a position. The colour can stay. The message just has to survive without it.

This is not the contrast criterion. [SC 1.4.3](/en/blog/wcag-1-4-3-contrast-minimum/) is about whether you can see the text at all. This one is about whether the colour is carrying meaning nothing else carries. A page can pass contrast perfectly and fail this badly.

## Why this matters

- Around one in twelve men and one in two hundred women has some form of colour vision deficiency. The most common form is red-green, and red and green are exactly what sites use for wrong and right.
- People with low vision, or using high contrast modes, perceive colour differences less reliably or not at all. Windows High Contrast Mode in particular replaces your palette wholesale.
- Colour disappears for everyone sometimes: a greyscale e-reader, a black and white print, a screen in direct sun.
- A second cue helps everyone. An error with an icon and a sentence is faster to understand than a red border, for every visitor.

## What is not required

- **You do not have to avoid colour.** Use as much as you like. The requirement is only that colour is never the sole carrier.
- **Colour as reinforcement is always fine.** If the information is already in the text, colour on top of it is good design. An error message with clear wording may absolutely also have a red border.
- **Decorative colour is out of scope.** A coloured section background or an illustration conveys no information and needs no second cue.

## Mistakes we keep finding

**Links distinguished by colour alone.** No underline, no icon, just a different colour from the body text. This is the most common failure of this criterion by a distance, and the most contested, because designers dislike underlines. The specification does allow colour alone if the contrast between the link and the surrounding text is at least 3:1 *and* there is another cue on hover and focus, but that is a narrow escape route and easy to get wrong. Underlining is the safe answer.

**A field that turns red and nothing else.** The visitor has to guess which field and why. Also a failure of [SC 3.3.1 Error Identification](/en/blog/wcag-3-3-1-error-identification/), which is usually the more serious one.

**Status in tables and dashboards.** Green is approved, red is rejected, and there is no other difference. Add the word, or an icon with a name.

**Charts where series differ only by colour.** The legend maps colours to labels, so it only works for people who can tell the colours apart. Direct labels on the lines beat a legend for everyone.

**The active item in a menu.** Current page in a different colour, with no underline, no weight change, no marker.

**Required fields marked by colour.** "Fields with a red label are required."

**Instructions that name a colour.** "Click the green button." That is this criterion and [SC 1.3.3 Sensory Characteristics](/en/blog/wcag-1-3-3-sensory-characteristics/) at once.

## How to test it

Turn on **grayscale (colour-blindness check)** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. The whole page goes grey in one click. Then read it and ask:

- Can I still see which text is a link?
- Can I tell which field is in error, and why?
- Do the statuses in that table still mean anything?
- Can I tell which menu item is the current page?
- Is the chart still readable?

Anything that became ambiguous was leaning on colour.

**Links by colour alone** is the more precise check for the most common case. It finds links in running text distinguished only by colour, and shows the colour difference against the surrounding text, so you can see whether the 3:1 escape route even applies.

Greyscale is a blunt instrument on purpose, and it is stricter than actual colour blindness, which is the right way round for a test. Something that survives greyscale survives every form of colour vision deficiency.

### Who does what

- **Designers** win or lose this one, almost entirely in the design phase. Give every status a double cue: colour plus text, or colour plus a distinct icon. A tick and a cross work in greyscale. Put underlines on links in body text in the design system so it stops being a per-page argument. Give charts patterns, shapes or direct labels. Design the active state of menus, tabs and steps with a shape difference.
- **Editors** never refer to colour in instructions, and do not use text colour in the editor to carry meaning. If something is important, write "Note:".
- **Developers** keep the underline on body links, make sure status components render their icon and text and not just the class that colours them, and check what happens in forced-colours mode.

## Frequently asked questions

### Do links in body text have to be underlined?

Not strictly. The criterion allows colour alone if the link contrast against surrounding text is at least 3:1 and there is an additional cue on hover and focus. In practice that is fragile, it constrains your palette, and it fails as soon as the link sits on a coloured background. Underlining is simpler and it is what readers expect.

### Do links in the navigation need underlining?

No. In a menu, position and grouping already tell you these are links. This criterion is about links inside running text, where there is nothing else to distinguish them.

### Is a red asterisk on required fields a failure?

The asterisk is a shape, not a colour, so the marking itself is fine as long as you explain what it means. Colouring it red as well is fine. Saying "red fields are required" is not.

### What about charts with pastel colours?

Colour alone distinguishing the series is a failure here regardless of how pretty the palette is. Add direct labels, patterns or shapes. Separately, the segments need 3:1 contrast under [SC 1.4.11](/en/blog/wcag-1-4-11-non-text-contrast/).

### Does this cover Windows High Contrast Mode?

Not directly, but it is the same underlying risk. Forced-colours mode replaces your palette, so anything relying on a specific colour disappears. If you pass this criterion you usually survive forced colours as well.

## Summary

- Colour may reinforce information. It may never be the only thing carrying it.
- Underline links in running text. It is the most common failure and the easiest fix.
- Give every status a second cue: a word or a distinct icon.
- Charts need labels, patterns or shapes, not just a colour legend.
- Never refer to a colour in an instruction.
- Test with the grayscale and links-by-colour checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar).

Greyscale gives you the answer in one click, which makes this one of the fastest checks in WCAG to run and one of the hardest to argue your way out of. [Ask us for a quote](/en/contact/) if you want every template checked.
