---
title: 'SC 2.4.6 - What does "Headings and Labels" mean?'
date: 2026-08-01
slug: "wcag-2-4-6-headings-and-labels"
translationKey: "sc-2-4-6"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-4-6"
  - "headings"
  - "labels"
description: "WCAG 2.4.6 asks that headings and labels describe what they belong to. Why 'Overview' and 'Number' fail, and the reading test that settles it in thirty seconds."
keywords:
  - WCAG 2.4.6
  - headings and labels
  - descriptive headings
  - form label quality
  - heading list screen reader
  - generic headings
---

You open a page and the first heading is "Overview". Overview of what? You scroll and find "Details", "More information" and "Other". Not one of them tells you what is in the section. You have to read everything to find out what the page is about.

For someone navigating by heading list, that page is worse than unstructured. The structure is there, and it says nothing. WCAG says: **headings and labels describe the topic or purpose of what they belong to**.

## What the criterion says

[Success criterion 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html) (level AA) requires that headings and labels describe topic or purpose.

That is the whole criterion. It says nothing about markup, nothing about levels, nothing about wiring. It is purely about whether the words do their job.

This is the one criterion in this area that is about quality rather than mechanics, which makes it the one an automated tool can help with least:

- [**SC 1.3.1**](/en/blog/wcag-1-3-1-info-and-relationships/) is the markup. Is that heading really an `<h2>`, and is that label connected to its field?
- [**SC 3.3.2**](/en/blog/wcag-3-3-2-labels-or-instructions/) is the presence. Is there a label at all?
- **SC 2.4.6** is the content. Is it any good?

You can have a perfectly marked up, perfectly connected `<h2>Details</h2>` and still fail this one.

## Why this matters

Screen reader users rarely read a page top to bottom. They pull up the list of headings and use it as a table of contents. That list contains nothing but your heading text, stripped of every bit of surrounding context. If it reads "Overview, Details, More information, Other", it is useless and they are back to reading the whole page.

The same applies to people using magnification, who see a small window onto the page and rely on the heading as the anchor that tells them where they are. And to anyone with a cognitive disability who needs to know what a section holds before deciding to read it.

And to everybody else, because almost nobody reads a web page in full. Scanning headings is how most people use most pages.

## What a good heading looks like

| Weak | Better |
|---|---|
| Overview | Overview of your order |
| Information | Product information |
| Details | Technical specifications |
| More | Frequently asked questions |
| Section 1 | Delivery address |

And a good label:

| Weak | Better |
|---|---|
| Name | Full name |
| Address | Street and house number |
| Number | Phone number |
| Date | Date of birth (dd-mm-yyyy) |
| Amount | Donation amount in euros |

The pattern in both columns is the same. The weak version is a category, the better version is the thing itself. You almost always get there by asking "of what?" once.

Headings do not have to be short. They have to be unambiguous out of context. A heading of six words that works in a list beats a heading of one word that needs the paragraph underneath it.

## Mistakes we keep finding

**Generic headings.** "Information", "Details", "Overview". The default output of a template that was designed before anybody knew what would go in it.

**Duplicate headings.** Three sections all called "Products". In a heading list they are indistinguishable, exactly like three links called "Read more" in a link list. Same problem, different criterion.

**Headings that do not match their section.** A "Contact" heading over a block that is really about vacancies. Usually the result of a page being edited over years while the headings stayed put.

**Marketing headings with no content.** "Because you deserve better." Fine as a visual line, useless as a navigation anchor. If you want the slogan, make it a paragraph and give the section a real heading.

**Labels that name a category, not a value.** "Number" is the classic. Phone number, customer number, house number? The user does not know and neither does the person who has to support them.

**Labels that are the same across a repeated block.** A form with three address blocks, each with "Street", "City", "Postcode". Visually clear because of the block headings, ambiguous the moment you navigate field by field.

**A format hint hidden in the placeholder.** The label says "Date" and the format lives in grey text that disappears. Put it in the label: "Date of birth (dd-mm-yyyy)".

## How to test it

**Heading quality** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)** marks empty headings and headings whose text is uninformative, such as "Go to" or "Read more". That catches the worst offenders automatically.

**Headings and structure** draws every heading with its level, which gives you the outline to read.

**Accessible names of form fields** shows the name every input actually exposes, so you can read the labels the way assistive software will announce them rather than the way they look in the layout.

Then do the reading test, which is the one that actually settles it and takes about thirty seconds:

**Read only the headings, in order, and nothing else.** If you can tell what the page is about and what is in each section, they are descriptive. If you cannot, they are not. There is no other way to judge this, and no tool can do it for you, because "Details" is a perfectly good heading on a page where the section really is about details.

Do the same for the form. Read only the labels, top to bottom, with the placeholders imagined away. Do you know what to type in each one?

### Who does what

- **Editors** own this criterion almost entirely. The heading text and the label text are content, and this is one of the few WCAG rules you can fix on your own this afternoon.
- **Designers** avoid patterns that force generic headings, and leave room for labels that are longer than one word.
- **Developers** make sure the CMS does not truncate headings and that a longer label does not break the layout.

## Frequently asked questions

### How long can a heading be?

As long as it needs to be. There is no limit in the criterion. A heading that is clear in a list is worth more than a heading that fits neatly in the design.

### Does every section need a heading?

This criterion does not require headings, only that the ones you have are descriptive. Whether a section needs one is a structure question under [SC 1.3.1](/en/blog/wcag-1-3-1-info-and-relationships/).

### Are duplicate headings a failure?

Not automatically. "Frequently asked questions" appearing on twenty pages is fine. Three sections on one page all called "Products" is where it becomes a problem, because the heading no longer distinguishes anything.

### Does this apply to the page title?

No, the `<title>` element is [SC 2.4.2 Page Titled](/en/blog/wcag-2-4-2-page-titled/). The same instinct applies, and the two usually pass or fail together.

### Is a visually hidden heading acceptable?

Yes, and it is a common and good pattern for landmarks such as "Main navigation". It still has to be descriptive, which is easy to forget precisely because nobody sees it.

## Summary

- Headings and labels have to describe what they belong to, out of context.
- "Overview" becomes "Overview of your order". "Number" becomes "Phone number".
- Duplicate headings on one page defeat the purpose of a heading list.
- Put format hints in the label, not in a placeholder that disappears.
- Check with the heading quality and form field name checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then read only the headings.

This is the most editorial criterion in WCAG, and the one where a scan will tell you least. Reading a page's headings as a stranger would is exactly the kind of thing we do per element in an audit. [Ask us for a quote](/en/contact/) if you want that done across your templates.
