---
title: 'SC 1.4.4 - What does "Resize Text" mean?'
date: 2026-08-01
slug: "wcag-1-4-4-resize-text"
translationKey: "sc-1-4-4"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-4-4"
  - "zoom"
  - "readability"
description: "WCAG 1.4.4 asks that text can be enlarged to 200% without losing content or function. Why page zoom and text-only zoom find different bugs, and how to test both."
keywords:
  - WCAG 1.4.4
  - resize text 200%
  - browser zoom accessibility
  - text only zoom
  - user-scalable no
  - pinch zoom blocked
---

Somebody finds your text too small and presses Ctrl and plus. The letters get bigger, and then it goes wrong: the last line of every card is gone, button labels sit on top of each other, and the menu will not open.

For a lot of visitors, enlarging is not a nice extra. It is the only way they read your site at all. WCAG says: **text has to enlarge to 200% without losing content or functionality**.

## What the criterion says

[Success criterion 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) (level AA) requires that text can be resized up to 200 percent without assistive technology and without loss of content or functionality.

In practice: the browser's own zoom has to work on your site. At 200% all text stays readable, nothing disappears or overlaps, and buttons, links and forms keep working. The layout is allowed to change. Text wrapping onto more lines and columns stacking are fine.

On phones and tablets this includes pinch zoom. Blocking it is a failure.

## The part most people miss: there are two mechanisms

Visitors enlarge text in two different ways, and the two give you a completely different picture of your site. This is the main reason two people testing 1.4.4 come back with different findings.

**Page zoom** is Ctrl and plus, or Command and plus on a Mac. The browser scales everything: text, images, borders, whitespace. The part that gets forgotten is that the viewport shrinks. Zoom a 1280 pixel wide window to 200% and your CSS thinks the screen is 640 pixels wide, so every media query switches to the narrow design.

**Text-only zoom** is the "Zoom text only" setting in Firefox, the browser's font size setting, and the operating system's text size setting. Only the letters grow and the viewport stays as wide as it was. Your desktop layout stays put, with bigger text inside it.

Both count for 1.4.4. Your site has to survive both.

### What page zoom finds

Because the media queries switch, at 200% you are literally looking at a different design. Components that sit open side by side on desktop collapse into their narrow variant.

A pattern you see on large webshops: at 1280 pixels the footer has four open columns of links to customer service, stores and terms. Zoom to 200% and those same links become four collapsed accordions. Same links, now behind a click.

That is not a failure in itself. The criterion does not ask for an identical layout, and content behind an accordion is not lost as long as the accordion opens. It becomes a failure when the narrow variant works worse than the wide one: an accordion that only opens on click, a toggle with no accessible name, or a menu that turns into a hamburger that ends up off screen. You only see any of that if you actually zoom.

### What text-only zoom finds

Here the layout stays and only the letters grow, so text gets trapped in containers that do not grow with it. This is the stricter test, and it exposes exactly what page zoom hides: fixed heights that clip text, button labels running over their border, headings sliding onto the intro.

The arithmetic explains why. Under page zoom the ratio between text and container stays the same. A 140 by 40 pixel button with a 16 pixel label just becomes twice as big, so the label still fits. Under text-only zoom the label becomes 32 pixels while the button stays 140 by 40, and the fixed size in the design shows up immediately.

Test both. Each one finds what the other misses.

## What is not required

- **You do not need zoom buttons on your site.** The browser already does this. Your job is to survive it.
- **The layout does not have to stay the same.** Text may rewrap and elements may move, as long as everything stays readable and operable.
- **Text inside images does not have to stay sharp.** Though text as an image is a bad idea anyway, because it blurs and nobody can adjust it. Video captions are also outside this criterion.

## Mistakes we keep finding

**A fixed height clipping text.** Fits exactly at 100%, loses half at 200%.

**Text overlapping text.** A heading falling onto the intro, labels sliding over inputs.

**Zoom blocked on mobile.** `user-scalable=no` or `maximum-scale=1` in the viewport meta tag. One line of code that makes the whole site unenlargeable, and it is still shockingly common.

**Font sizes in viewport units.** A heading with only `font-size: 5vw` stays exactly the same size no matter how far somebody zooms, because the viewport unit scales with the viewport, not with the zoom.

**Menus and buttons becoming unreachable.** The menu collapses to its mobile variant at zoom, and the button that opens it is off screen or does not work.

**The collapsed variant being worse than the wide one.** At 200% you get accordions, tabs or a hamburger that do not exist on desktop. Those components are usually less well tested: an accordion that ignores Enter, a toggle with no accessible name, content that is not in the reading order once opened.

**Important text baked into an image.** Opening hours or an offer as a picture only gets blurrier.

## How to test it

The Radar has these as two separate checks, for exactly the reason above.

**Resize text only (200%)** sets all text to 200% and keeps your viewport as it is, like Firefox's "Zoom text only". This is the one that finds the containers that do not grow.

**Page zoom 200% (640 px)** opens the page in a 640 pixel wide window, which is the layout you get at 1280 pixels with 200% browser zoom, with the same media queries and the same collapsed components. Then zoom that window yourself to see the text size on top of it.

Run both, in that order, and on mobile check that pinch zoom actually works. Then ask:

- Is any text cut off or hidden?
- Is anything sitting on top of anything else?
- Do the menu, buttons, filters and forms still work?
- In the collapsed variant, does every accordion and tab still open with a keyboard?

### Who does what

- **Designers** design components that grow with their text. Never draw a container tightly around a line of text, and ask of every component what happens when the text doubles. Design the narrow variant too, because at 200% your desktop visitors are looking at it.
- **Developers** avoid fixed heights around text, avoid viewport units for font size, and never ship `user-scalable=no`.
- **Editors** keep important information out of images and check their own pages at 200%.

## Frequently asked questions

### Is this the same as reflow?

No, though they overlap. [SC 1.4.10 Reflow](/en/blog/wcag-1-4-10-reflow/) is about 400% zoom, or 320 pixels wide, and asks that content rearranges into one column. This one is about 200% and asks that nothing is lost. Testing them in one sitting is efficient, but they are separate criteria with separate thresholds.

### Does the text have to be twice as big at 200%?

Yes, that is the point. Which is why viewport units for font size fail: they scale with the viewport, so under page zoom the number does not change.

### Can I block pinch zoom on a web app that uses gestures?

No. `user-scalable=no` fails this criterion, and modern iOS ignores it anyway. If a gesture conflicts, handle it on the specific element rather than disabling zoom for the whole document.

### We use rem everywhere. Are we fine?

Mostly, and it is the right choice. `rem` respects the user's browser font size setting, which `px` does not. It still does not save you from a container with a fixed height.

### What about text spacing?

[SC 1.4.12 Text Spacing](/en/blog/wcag-1-4-12-text-spacing/) is the neighbouring criterion and breaks on the same root cause, which is a layout that assumed its text would never change size. Same fixes, different trigger.

## Summary

- Text enlarges to 200% with nothing lost and everything still working.
- Test page zoom and text-only zoom separately. They find different bugs.
- Never block pinch zoom. `user-scalable=no` is a failure on its own.
- Viewport units for font size do not scale with zoom.
- At 200% your desktop visitor sees the narrow layout, so that variant has to be as good as the wide one.
- Check with the resize text only and page zoom checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar).

The collapsed-variant problem is the one that gets missed most, because it only exists at zoom and nobody designs for it. That is the kind of thing we walk through per template in an audit. [Ask us for a quote](/en/contact/) if you want it checked properly.
