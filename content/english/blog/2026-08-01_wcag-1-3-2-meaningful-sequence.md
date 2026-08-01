---
title: 'SC 1.3.2 - What does "Meaningful Sequence" mean?'
date: 2026-08-01
slug: "wcag-1-3-2-meaningful-sequence"
translationKey: "sc-1-3-2"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-3-2"
  - "structure"
  - "reading-order"
description: "WCAG 1.3.2 asks that the order content is read in still makes sense. Why the featured image in a news list is the classic failure, and how to see the order in one click."
keywords:
  - WCAG 1.3.2
  - meaningful sequence
  - reading order screen reader
  - featured image alt text
  - CSS order reading order
  - two column reading order
---

You take in a page at a glance. The heading is big and at the top, the date sits underneath in small type, the photo is beside it. Your brain assembles the relationships without being asked.

Someone using a screen reader does not get a glance. They get one long sequence, item after item. And that sequence comes from the code, not from the design. Put the date above the heading in the markup and they hear "17 May 2025" before they hear what it belongs to.

WCAG says: **when the order matters for understanding, that order has to be right in the code**.

## What the criterion says

[Success criterion 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html) (level A) requires that when the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

Note the "when". Not everything has to match the visual order. Whether the menu is to the left or the right of the text changes nothing about the meaning. Whether the date comes before or after the headline of a news item does.

The test is not "does the DOM match the layout". It is "does the sequence still tell the story".

## Why this matters

Screen readers, braille displays and reading tools all walk the document in source order. So does anything that strips your styling: reader mode, an email client, a text-only browser, a search engine.

- **Screen reader users** hear the sequence and nothing else. A caption separated from its image, an intro floating above the heading it introduces, a question and answer split across two columns, all arrive as unrelated fragments.
- **People with cognitive disabilities** who use reading tools get the same stripped sequence.
- **Anyone on a narrow screen**, because a layout that stacks in source order will stack in whatever order the DOM happens to be.

## The classic failure: the featured image in a listing

This is the one we report most under this criterion, and it is entirely in the editor's hands.

In a news or blog listing, the featured image usually sits above the heading in the markup. If that image has alt text, a screen reader user hears a description of a picture before they hear which article it belongs to. Twenty items in, that is twenty descriptions arriving before twenty headlines.

The fix is smaller than people expect: **give the featured image an empty alt attribute**. In a listing the image is decorative, because the heading and the summary already tell the story. With `alt=""` the screen reader skips it and each item starts cleanly at the heading.

One trap in WordPress with Yoast SEO: Yoast will suggest putting your keyword in the alt text. Do not do that for a featured image. In WordPress the alt text is set in the media library and applies everywhere the image is used, including the listing. You gain a green dot in Yoast and lose the reading order on every overview page on the site.

## Mistakes we keep finding

**CSS reordering the layout.** Flexbox `order`, `row-reverse` and grid placement change what you see and not what is read. If the visual order is the meaningful one, fix the HTML rather than the CSS. This is the same root cause as [SC 2.4.3 Focus Order](/en/blog/wcag-2-4-3-focus-order/), and the two nearly always fail together.

**Two columns that read across.** A question on the left and its answer on the right. Almost every CMS column block reads the whole left column first, then the whole right one. Put the pair in one column instead.

**Metadata above the heading.** Date, category, reading time and author stacked above the headline in the code. Visually it is a neat little row. In sequence it is four orphan fragments before you learn the topic.

**Content that opens in the wrong place.** An accordion whose panel is at the bottom of the DOM rather than after its trigger. It opens visually in place and reads at the end of the page.

**Modals that do not remove the page underneath.** The dialog is on top visually and the screen reader carries on through the page behind it.

**Hidden content that is not hidden from the sequence.** The mobile menu on a wide screen, moved off screen with a transform, still read in full.

**Layout tables.** Content laid out in a table reads cell by cell across rows, which is rarely what the design was saying.

## How to test it

Turn on **styles off (reading order)** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. All styling disappears and you get the bare sequence, exactly what a screen reader walks through. Then read it top to bottom. If the story still holds together, the sequence is fine. If the intro is above its heading or the answers have drifted away from the questions, you have found it.

**Reading order (overview)** gives you the same thing as a clickable list, with headings, landmarks, links, buttons and fields in document order. Click any row to jump to that element on the page, which is the fastest way to work out why something is where it is.

**Show hidden elements** shows what is hidden and how, which catches the off-screen mobile menu still sitting in the sequence.

You do not need to learn a screen reader for this. Turning styles off gives you the same information in a form you can read.

### Who does what

- **Editors** control more of this than they think. Keep what belongs together together, avoid columns that read across, and give featured images an empty alt.
- **Developers** own the template order. DOM first, CSS for presentation only. Put accordion panels after their triggers, and remove hidden content from the sequence properly.
- **Designers** flag layouts where something appears visually before content that comes later, so it gets decided rather than patched in CSS.

## Frequently asked questions

### Does the reading order have to match the visual order exactly?

No. Only where the sequence affects meaning. A sidebar can sit before or after the main content in the code without changing anything. A caption separated from its image does change something.

### Is this the same as focus order?

They are close relatives and they break on the same causes. [SC 2.4.3](/en/blog/wcag-2-4-3-focus-order/) is about the order you tab through interactive elements. This one is about the order everything is read in, including text. Test them together.

### Should every featured image have an empty alt?

In a listing, yes, because the heading carries the meaning. On the article page itself it depends on whether the image adds information. See [SC 1.1.1](/en/blog/wcag-1-1-1-non-text-content/) for how to decide.

### What about CSS Grid, where I place items anywhere?

Grid gives you complete freedom to break this, and the specification is explicit that visual reordering does not change the reading order. Use it for layout, not for sequence.

### My accordion reads at the bottom of the page. Is that a failure?

Yes, if the panel's content belongs with its trigger. It is a developer fix: move the panel to directly after the button in the markup.

## Summary

- When the order matters for meaning, it has to be right in the code, not just on screen.
- The featured image above a headline in a listing is the most common editorial cause. Give it `alt=""`.
- CSS reordering with flexbox and grid is the most common technical cause.
- Two-column blocks that read across break apart in sequence.
- Check with styles off (reading order) in [WCAG Radar](https://wcagtoolkit.com/wcag-radar) and read the bare page as a story.

Turning off the styling takes one click and tells you in thirty seconds whether the structure was ever real. It is the check we run first on any page. [Ask us for a quote](/en/contact/) if you want that read across your templates.
