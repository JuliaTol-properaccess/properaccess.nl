---
title: 'SC 1.4.11 - What does "Non-text Contrast" mean?'
date: 2026-08-01
slug: "wcag-1-4-11-non-text-contrast"
translationKey: "sc-1-4-11"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-4-11"
  - "colour"
  - "forms"
description: "WCAG 1.4.11 asks for 3:1 contrast on everything you need to see to operate an interface: input borders, icons, focus rings, chart lines. What counts and what is exempt."
keywords:
  - WCAG 1.4.11
  - non-text contrast
  - input field border contrast
  - focus indicator contrast
  - icon contrast accessibility
  - UI component contrast
---

You are standing outside a museum in bright sun, trying to buy a ticket on your phone. The form is there somewhere. The input fields have a pale grey outline you cannot make out, and the button blends into the background. You tilt the screen, cup your hand over it, give up, and join the queue at the desk.

That is what this criterion is about, and it is not only about sunlight. For people with reduced vision the fields are that hard to find in any light. WCAG says: **anything you need to see in order to operate the interface needs enough contrast too**.

Most people know the text contrast rule. This is the one that covers everything else.

## What the criterion says

[Success criterion 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) (level AA, new in WCAG 2.1) requires a contrast ratio of at least **3:1** against adjacent colours for two things:

**User interface components.** The visual information you need to identify a control and its state: the border of an input field, the outline of a checkbox and its checked state, the track and thumb of a slider, the on and off state of a toggle, which tab is active, and the focus indicator.

**Graphical objects.** The parts of a graphic you need in order to understand the content: an icon with no text label, the lines and segments of a chart, pins on a map, the boxes in a flow diagram.

Note the wording on components. You do not need 3:1 on the whole button. You need it on whatever tells the user that the control is there and what state it is in.

## What is exempt

- **Decorative graphics.** Anything that adds no information.
- **Logos and brand names.** Same exemption as text contrast.
- **Inactive controls.** A disabled button is allowed to look disabled.
- **Icons that sit next to a visible text label.** If the word "Search" is there, the magnifying glass is decoration and does not have to meet the ratio. The moment the label disappears on small screens and only the icon remains, it does.
- **Default browser rendering you have not styled.** An unstyled checkbox is the browser's problem, not yours. Style it and it becomes yours.

## Mistakes we keep finding

**Input borders in a pale grey.** `#ccc` on white is about 1.6:1. It is the single most common failure of this criterion, and it is in nearly every design system we audit. `#767676` reaches 4.54:1 and clears both this criterion and the text one, which makes it a useful default. Anything lighter needs checking.

**Focus rings tuned to be subtle.** A pale blue outline on a white background looks tasteful and measures around 1.4:1. If the ring is the only thing marking focus, it has to hit 3:1 against whatever sits behind it, and that includes the dark sections of your page.

**Icon-only controls in light grey.** Search, cart, hamburger, close. Grey them down for visual calm and they drop below the threshold. If the icon is the only thing identifying the control, it needs the ratio.

**Toggles where on and off look almost the same.** A light grey off state next to a slightly less light grey on state. The two states need to be distinguishable, and both need to be visible against the background.

**Custom checkboxes and radio buttons.** The outline of the box and the tick or dot inside it both count. Teams usually get the tick right and leave the outline at `#ddd`.

**Chart colours picked for the brand deck.** Pastel series on a white background, distinguished only by hue. That fails here, and it usually fails [SC 1.4.1 Use of Colour](/en/blog/wcag-1-4-1-use-of-colour/) at the same time.

## How to test it

Turn on **contrast of borders and focus** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It measures the border of every input field and the focus style of every focusable element, briefly focusing each one to do it, and warns below 3:1 or when there is no visible focus style at all. That second case is the one worth watching for, because a missing focus style reads as a pass to anything that only measures colours.

For icons, charts and anything sitting on a photo or a gradient, use the two colour pickers at the bottom of the panel: sample the graphic, sample the background right next to it, read the ratio.

Two more passes no tool will do for you. Check every state a user can reach, because hover and active states routinely drop below the line while the resting state passes. And check on your dark sections: a focus ring tuned for white will vanish on a dark footer.

### Who does what

- **Designers** own this. Fix the values in the design system and it is fixed everywhere.
- **Developers** make sure the tokens are actually used and that no component hardcodes a lighter grey, and keep the browser focus style unless there is a real reason to replace it.
- **Editors** rarely touch this, except when they paste in a chart or an infographic made somewhere else.

## Frequently asked questions

### What is the difference with SC 1.4.3?

[SC 1.4.3](/en/blog/wcag-1-4-3-contrast-minimum/) is about text and asks 4.5:1, or 3:1 for large text. This one is about everything that is not text and asks 3:1. Both apply, and a button with pale text on a pale fill can fail both at once.

### Does the whole button need 3:1 against the page?

Not the whole button. What needs the ratio is whatever visually identifies the control. If a button is a solid fill with a text label, the label is covered by 1.4.3 and the fill does not need to clear 3:1 on its own. If the only thing marking the control is a thin outline, that outline does.

### Is the default browser focus ring good enough?

Usually yes, and it is the safest option because browsers keep improving it. Chrome and Safari now draw a two-tone ring that stays visible on light and dark backgrounds. The risk starts when you replace it with a single colour tuned to one background.

### Do charts need 3:1 between the series?

Each graphical object needs 3:1 against what is adjacent to it, which in a chart usually means the background rather than the neighbouring series. But contrast alone rarely makes a chart usable. Add direct labels, patterns or shapes, or put the underlying figures in a table nearby, and the pastel palette stops being a problem.

### We use a design system from a third party. Whose problem is it?

Yours, legally. Practically, most mature systems expose these values as tokens, so this is often a handful of overrides rather than a rebuild.

## Summary

- 3:1 for anything you need to see to operate the interface: input borders, control states, focus indicators, meaningful icons, chart elements.
- Icons with a visible text label are exempt. The same icon alone on a small screen is not.
- Disabled controls, logos and unstyled browser defaults are exempt.
- `#767676` on white clears both this criterion and the text one, which makes it a safe floor.
- Check with the contrast of borders and focus check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), and use the pickers for icons and charts.

Border and focus contrast is measurable, which makes it one of the few things a tool judges well. Whether a graphic is decorative or load-bearing is not. [Ask us for a quote](/en/contact/) if you want that distinction made properly across your site.
