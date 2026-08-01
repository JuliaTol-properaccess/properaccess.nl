---
title: 'SC 1.4.3 - What does "Contrast (Minimum)" mean?'
date: 2026-07-30
slug: "wcag-1-4-3-contrast-minimum"
translationKey: "sc-1-4-3"
categories:
  - "wcag-explained"
tags:
  - "1-4-3"
  - "colour"
  - "contrast"
description: "WCAG 1.4.3 asks for at least 4.5:1 contrast between text and background. What counts as large text, what is exempt, and how to test a whole page in seconds."
keywords:
  - WCAG 1.4.3
  - contrast ratio
  - 4.5:1 contrast
  - text contrast accessibility
  - contrast checker
  - large text contrast
---

Light grey text on a white background looks calm and modern. Put a bit of sunlight on the screen and it is gone. For visitors with reduced vision it is not gone occasionally, it is gone always. That is why WCAG says: **text needs enough contrast with its background**.

This is the criterion with the highest hit rate in our audits. It is also the cheapest to fix, because it usually comes down to a handful of values in a design system.

## What the criterion says

[Success criterion 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) (level AA) requires a contrast ratio of at least:

- **4.5:1** for normal text
- **3:1** for large text, which means 18pt (24px) and up, or 14pt (18.66px) and up when bold

Contrast ratio is a number between 1:1 (two identical colours) and 21:1 (pure black on pure white). It is calculated from the relative luminance of the two colours, which is why two colours that feel very different, like a mid-blue and a mid-green, can still fail badly.

## Why this matters

Around one in twelve men and one in two hundred women has some form of colour vision deficiency. Far more people have reduced contrast sensitivity, which comes with age for almost everyone. Add cataracts, a cheap laptop screen, a projector in a bright room, or a phone held up against the sun, and low contrast stops being a niche concern.

The useful way to think about it: contrast requirements are not about whether *you* can read it in your studio. They are about whether it survives a bad screen in bad light in tired eyes.

## What is exempt

Not everything on the page has to meet 4.5:1. The criterion explicitly excludes:

- **Disabled controls.** A greyed-out button is allowed to look greyed out.
- **Pure decoration.** Text that carries no information, such as a faint watermark behind a section.
- **Logos and brand names.** The text in a logo is exempt as part of the logo.
- **Text inside a picture of significant other visual content**, for example a person's name printed on a photograph of a poster.

Two things people often assume are exempt but are not: placeholder text, and text on top of a photographic background. Both must meet the ratio.

## Mistakes we keep finding

**Placeholder text.** Almost universally too light. It is real text, it conveys real information, and it must reach 4.5:1.

**Brand colours used for body text.** A brand orange that works beautifully in a logo often lands around 2:1 against white. The fix is usually not to change the brand colour but to reserve it for large headings, borders and fills, and pick a darker variant for running text.

**White text on a photo.** The ratio changes with every pixel of the image. What passes over the dark part of the sky fails over the clouds. Use an overlay, a gradient scrim, or a solid panel behind the text.

**Hover and focus states.** The resting state passes and the hover state does not, or vice versa. Every state a user can reach has to meet the ratio.

**Grey-on-grey secondary text.** Captions, metadata, "last updated" lines and footer text are the usual suspects. They are secondary in importance, not in legibility.

**Dark mode as an afterthought.** A palette tuned for light backgrounds rarely inverts cleanly. Dark mode needs its own contrast check.

## How to test it

Turn on the **text contrast** check in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It measures every text element on a solid background in one pass and marks in red anything below the threshold, using the right threshold for the size and weight of that particular element. That is the part people get wrong by hand: 4.5:1 and 3:1 apply to different elements on the same page.

Text sitting on an image or a gradient cannot be measured automatically, because the background is different behind every letter. The panel has two colour pickers at the bottom for exactly that case: sample the text colour, sample the worst spot of the background, and read the ratio.

Two more checks in the same panel are worth running at the same time:

- **Dark mode** applies a dark palette so you can see whether your colours hold up.
- **Grayscale** removes all colour, which shows immediately whether anything relies on hue alone. That is [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) rather than 1.4.3, but the two are usually fixed in the same sitting.

Remember to check hover, focus and visited states. Those need a deliberate pass, because no tool can hover for you.

### Who does what

- **Designers** own this one. Fixing contrast in the design system fixes it everywhere at once.
- **Developers** make sure the tokens are actually used, and that no component quietly hardcodes a lighter grey.
- **Editors** watch out for text placed over images, and for coloured text pasted in from elsewhere.

## Frequently asked questions

### Does this apply to placeholder text?

Yes. Placeholder text is text, and it is one of the most common failures we find. Note separately that a placeholder is not a label: see [SC 1.3.1](/en/blog/wcag-1-3-1-info-and-relationships/).

### Our brand colour does not pass. Now what?

Keep the brand colour where the rule does not apply: the logo, large headings, fills, borders, icons. Add one darker variant of the same hue for body text. In our experience this is almost always solvable without touching the brand identity, and it is a conversation worth having with the brand owner rather than the developer.

### Does contrast have to hold on hover and focus?

Yes. Every state the user can reach counts, including focus indicators, which have their own criterion in [SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

### What is the difference with SC 1.4.11?

1.4.3 is about text. 1.4.11 Non-text Contrast is about everything else you need to see to operate the interface: input borders, icons, focus rings, chart lines. The threshold there is 3:1.

### Is 4.5:1 enough, or should we aim for 7:1?

7:1 is level AAA ([SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html)) and is not required for AA compliance. If you are designing from scratch, aiming higher costs nothing and buys you room for the inevitable exception later.

### Does an accessibility overlay fix this?

No. Overlay widgets that offer a "high contrast mode" do not make your default palette compliant, and they routinely break other things while they are at it. Fix the colours.

## Summary

- 4.5:1 for normal text, 3:1 for large text (24px, or 18.66px bold).
- Logos, disabled controls and pure decoration are exempt. Placeholders and text on photos are not.
- Check hover, focus and dark mode separately.
- Measure a whole page at once with the text contrast check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), and use the colour pickers for text on images.

Contrast is one of the few criteria an automated tool judges reliably. If you want to know what the other two thirds of WCAG say about your site, [request a quote](/en/contact/) or run the [free scan](https://wcagtoolkit.com) first.
