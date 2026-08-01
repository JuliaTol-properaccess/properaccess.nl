---
title: 'SC 1.1.1 - What does "Non-text Content" mean?'
date: 2026-07-28
slug: "wcag-1-1-1-non-text-content"
translationKey: "sc-1-1-1"
categories:
  - "wcag-explained"
tags:
  - "1-1-1"
  - "alt-text"
  - "images"
description: "WCAG 1.1.1 asks for a text alternative for anything that is not text. What that means for images, icons, charts and buttons, and how to decide what to write."
keywords:
  - WCAG 1.1.1
  - alt text
  - text alternative
  - decorative image alt
  - icon accessibility
  - image accessibility
---

Every image on your site is invisible to somebody. Not because their screen is broken, but because they browse with a screen reader, or because the image failed to load on a train, or because they turned images off to save data. What reaches them is whatever you typed into the `alt` attribute. That is the whole point of the first success criterion in WCAG: **anything that is not text needs a text alternative that does the same job**.

## What the criterion says

[Success criterion 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) (level A) requires that all non-text content has a text alternative serving an equivalent purpose. Non-text content is broader than photographs. It covers icons, logos, charts, diagrams, CAPTCHAs, video thumbnails, background images that carry meaning, emoji used as buttons, and form controls that only show a symbol.

Note the wording: *equivalent purpose*, not *equivalent description*. That distinction is where most of the work sits.

## Why this matters

A screen reader announces an image by reading its alt text. No alt attribute at all, and most screen readers fall back to reading the file name, so your visitor hears "I M G underscore four seven two two dot J P G". An empty alt attribute (`alt=""`) tells the screen reader to skip the image entirely, which is exactly right for decoration and exactly wrong for a chart.

The people who depend on this are not a rounding error. Screen reader users are the obvious group, but text alternatives also carry the page for anyone on a slow connection, anyone using a text-only browser, and every search engine and AI assistant that indexes your site. Alt text is one of the rare accessibility fixes that pays off commercially the same week you ship it.

## The one question that decides your alt text

Before writing anything, ask: **what would this page lose if the image disappeared?**

- **Nothing.** It is decoration: a background flourish, a divider, a stock photo of people pointing at a laptop next to text that already says everything. Use `alt=""`. Not a missing attribute, an empty one. That is a deliberate signal, and it is the correct answer surprisingly often.
- **Information.** A chart, a screenshot with text in it, a diagram, a product photo where the colour or shape matters. Describe the information, not the picture.
- **A function.** The image is a link or a button. Describe where it goes or what it does. A magnifying glass icon inside a search button is not "magnifying glass", it is "Search".

That last case trips up the most experienced teams. The alt text of a functional image describes the action, never the artwork.

## Mistakes we keep finding

**"Image of" and "photo of".** Screen readers already announce that it is an image. Writing `alt="Image of a wheelchair user at a service desk"` makes people hear the word "image" twice. Drop the prefix and start with the content.

**Repeating the caption.** If the caption directly under the photo already reads "Our team at the 2026 conference", an identical alt text means the sentence is announced twice in a row. Use `alt=""` and let the caption do the work.

**Icon fonts and emoji as the accessible name.** A button whose entire label is a Font Awesome glyph or a 🔍 emoji has no word attached to it. Assistive software drops the name and announces just the role, so the user hears "button" and nothing else. Give the button an `aria-label` describing its function and set the icon to `aria-hidden="true"`.

**Charts with a one-line alt.** `alt="Bar chart of revenue"` tells a blind reader that they are missing something without telling them what. Either put the takeaway in the alt text ("Revenue grew from 1.2 to 3.4 million between 2023 and 2026") or, better, put the underlying figures in a table near the chart.

**SVG with no accessible name.** Inline SVG is not automatically exposed. A visible, meaningful `<svg>` needs a `<title>` element as its first child, or an `aria-label` on the SVG itself with `role="img"`.

**Decorative images with descriptive alt.** The opposite problem. Every divider and swoosh described in loving detail turns a page into noise. Silence is a feature.

## How to test it

Open the page and turn on the images check in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**, our free bookmarklet. It marks every image with what it found: alt text present, an empty alt, or no alt attribute at all. Visible SVGs join in too, showing their title and description. It also flags redundant words like "image of", while leaving the judgement to you, because only you know whether a picture carries meaning.

Then use the images-off check in the same panel. All imagery dims, and you read the page as if nothing loaded. If a sentence stops making sense, the alt text next to it is doing too little.

Two things a tool cannot decide for you:

1. Whether an image is decorative. That is an editorial call.
2. Whether the alt text is *good*. A tool can confirm the attribute exists. Only a person can tell you that "banner" was a wasted opportunity.

### Who does what

- **Editors** write the alt text. You know why the image is on the page.
- **Designers** decide which images are decorative and flag icons that carry meaning on their own.
- **Developers** make sure the CMS actually offers an alt field, that it can be left deliberately empty, and that icons are hidden from assistive software.

## Frequently asked questions

### Does a logo need alt text?

Yes, if it is a link or if it identifies the organisation. `alt="Proper Access"` is enough. Do not write "Proper Access logo": the fact that it is a logo is rarely the useful part.

### What about background images in CSS?

CSS backgrounds are invisible to assistive software. That is fine for decoration. If a background image carries information, it is in the wrong place: move it to an `<img>` element, or add the information as visible text.

### How long can alt text be?

Long enough to do the job. There is no limit in the specification. In practice, if you need more than roughly two sentences, the content probably belongs on the page itself where everyone can read it.

### Do I need alt text on an image inside a link that also has text?

Usually not. If the link already reads "Read the 2026 annual report" and contains a thumbnail, give the thumbnail `alt=""`. Otherwise the link gets announced twice.

### Is AI-generated alt text good enough?

It is a decent first draft for straightforward photos and a poor one for anything that carries meaning in context. AI does not know why *you* put that image on *this* page. We have [tested what AI can and cannot spot](/en/blog/can-ai-test-website-for-accessibility/) and the pattern is consistent: it describes, it does not decide.

## Summary

- Every non-text element needs a text alternative with an equivalent purpose.
- Ask what the page would lose without the image. Nothing means `alt=""`, information means describe the information, function means describe the action.
- Skip "image of", do not repeat the caption, and never let an icon or emoji be the only name of a button.
- Test with the images and images-off checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then read the result as a human.

Want to know how your whole site scores rather than one page? Start with the [free accessibility scan](https://wcagtoolkit.com), or [ask us for a quote](/en/contact/) if you would rather have a senior auditor go through it with you.
