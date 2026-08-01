---
title: 'SC 2.5.8 - What does "Target Size (Minimum)" mean?'
date: 2026-08-01
slug: "wcag-2-5-8-target-size-minimum"
translationKey: "sc-2-5-8"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-5-8"
  - "target-size"
  - "mobile"
description: "WCAG 2.5.8 asks that clickable targets are at least 24 by 24 pixels, or have enough space around them. The five exceptions, and how to check a page in one click."
keywords:
  - WCAG 2.5.8
  - target size minimum
  - 24 by 24 pixels
  - tap target size
  - small buttons accessibility
  - clickable area
---

A 16 pixel cross to dismiss a notification. Pagination numbers packed edge to edge. A row of tiny icons in the footer. If your hand shakes, or your fingers are broad, or you are on a moving train, those targets are close to unhittable. And when you miss, you usually hit the one next to it. WCAG says: **a clickable target is at least 24 by 24 pixels, or has enough empty space around it**.

## What the criterion says

[Success criterion 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) (level AA, new in WCAG 2.2) requires that targets for pointer input are at least 24 by 24 CSS pixels.

The important detail: it is the clickable area that counts, not the picture. A 16 pixel icon inside a 44 pixel button passes comfortably. And the reverse applies too, which catches teams out: a button that looks generous but where only the text is actually clickable can still fail.

## Why this matters

- People with tremors or limited fine motor control cannot place a pointer precisely. The smaller the target, the more often they miss.
- On a touchscreen a fingertip is wider than a small target. One-handed, in motion, that gets worse.
- Accuracy declines with age, so the group this helps grows every year.
- A miss is not always harmless. Miss the close cross and you open the ad. Miss "cancel" and you confirm the order.
- Generous targets help everyone. Fewer misses means faster tasks, for visitors with no impairment at all.

## The five exceptions

A target smaller than 24 by 24 pixels still passes if at least one of these applies:

1. **Spacing.** Draw an imaginary 24 pixel circle centred on the target. If it does not touch another target, or another target's circle, it passes. Small targets are fine as long as they are not crowded.
2. **Equivalent.** The same function is available elsewhere on the page through a target that is big enough.
3. **Inline.** A link inside a sentence is exempt, because the line height of the text determines its size.
4. **User agent default.** An unstyled checkbox or radio button keeps whatever size the browser gives it. Style it yourself and the exception is gone.
5. **Essential.** The exact presentation is legally required or genuinely necessary to the function. Rare in practice.

The spacing exception is the one that does most of the work, and the one most often misread. It is not "there is a bit of padding". It is a 24 pixel circle that touches nothing.

## Mistakes we keep finding

**Close crosses.** On notifications, modals and filter tags. The glyph is 12 to 16 pixels and nobody put a larger hit area around it.

**Pagination.** Numbers 1 to 10 sitting flush against each other. Each one is a few pixels wide and the circle rule fails everywhere.

**Rows of icons.** Social icons in the footer, action icons in a table row, toolbars in an editor. Small targets almost touching.

**Carousel dots.** Usually 8 to 10 pixels, side by side, and they control the one thing on the page that moves.

**Custom checkboxes and radio buttons at 16 pixels.** Styling them yourself removed the browser exception, and almost nobody notices.

**Calendars and date pickers.** Days are clickable, cramped, and directly adjacent to each other.

## How to test it

Turn on **target size (24px)** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. Every clickable element shows its dimensions and anything under 24 by 24 pixels gets an orange mark.

Treat those marks as a starting point rather than a verdict, because the exceptions matter here more than in most criteria. Walk each mark with three questions:

- Is it a link inside running text? Then it is exempt.
- Is there clear space around it, with no other target nearby? Then the spacing exception covers it.
- Is it an unstyled checkbox or radio button? Also exempt.

Anything left over is genuinely too small, and the fix is to grow the hit area rather than the icon.

### Who does what

- **Designers** decide almost all of this. Set a floor in the design system, design the hit area rather than the glyph, and give small targets room.
- **Developers** make sure the hit area is on the element and not just the icon, and remember that a styled checkbox loses its exemption.
- **Editors** keep standalone links off each other's toes and use the button variant for important links when the editor offers one.

Two implementation notes worth having:

```css
/* Give icon buttons a floor on the element itself */
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
}

/* Or keep the visual small and grow only the hit area */
.small-target {
  position: relative;
}

.small-target::after {
  content: "";
  position: absolute;
  inset: -8px;
}
```

Be careful with the second one. Enlarged hit areas must not overlap each other. Two targets that look separate but whose invisible areas overlap make the problem worse, not better, because now the miss is unpredictable.

## Frequently asked questions

### Does this apply to links in running text?

No. A link inside a sentence falls under the inline exception, because the line height sets its size. Standalone links, such as in a menu or footer, do have to meet the requirement.

### Is 24 pixels enough on mobile?

For WCAG, yes. It is a floor, not a target. Apple recommends 44 by 44 and Google 48 by 48 for touch, and that matches what we see in testing: people with motor impairments are far better served at 44 than at 24.

### Does the visible icon count, or the clickable area?

The clickable area. A 16 pixel icon is fine as long as at least 24 by 24 pixels around it responds. Test by clicking just next to the icon: if it reacts, the area is bigger than the picture.

### What is the difference with SC 2.5.5?

[SC 2.5.5 Target Size (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html) is the level AAA version and asks for 44 by 44 pixels. 2.5.8 is the level AA version at 24 by 24, which is the one that became required with WCAG 2.2. Design to the AAA size and you get the AA one for free.

### Our checkboxes are smaller than 24 pixels. Is that a problem?

If they are the browser's own rendering, no. If you styled them, the exception is gone and they need 24 by 24 or enough space around them.

## Summary

- Clickable targets are at least 24 by 24 CSS pixels, or have a clear 24 pixel circle around them.
- The hit area counts, not the icon.
- Five exceptions: spacing, an equivalent target elsewhere, inline links, unstyled browser controls, and essential presentation.
- Styling a checkbox removes its exemption.
- Check with the target size (24px) check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then walk the marks against the exceptions.

The measurement is easy and the exceptions are where the judgement sits, which is why an automated count of small targets always overstates the problem. [Ask us for a quote](/en/contact/) if you want the real number for your templates.
