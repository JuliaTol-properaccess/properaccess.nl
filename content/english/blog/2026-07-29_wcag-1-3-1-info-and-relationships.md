---
title: 'SC 1.3.1 - What does "Info and Relationships" mean?'
date: 2026-07-29
slug: "wcag-1-3-1-info-and-relationships"
translationKey: "sc-1-3-1"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "1-3-1"
  - "semantics"
  - "headings"
description: "WCAG 1.3.1 says the structure you can see must also exist in the code. What that means for headings, lists, tables and form labels, and how to check it in a minute."
keywords:
  - WCAG 1.3.1
  - info and relationships
  - semantic HTML
  - heading structure
  - accessible tables
  - form labels
---

You can see that a line is a heading because it is big and bold. You can see that three lines belong together because they each start with a bullet. You can see which column a number belongs to because it sits underneath the word "Price". None of that is visible to a screen reader. It only knows what the code says. Success criterion 1.3.1 is the rule that closes that gap: **the structure a sighted visitor perceives must also be available in the markup**.

Of all the WCAG criteria, this is the one we report on most often. Not because teams are careless, but because it touches every part of a page at once.

## What the criterion says

[Success criterion 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) (level A) requires that information, structure and relationships conveyed through presentation can be determined programmatically, or are available in text.

"Programmatically determined" is the jargon. In practice it means: use the right HTML element, or if no element fits, say it out loud in the text.

## Why this matters

Screen reader users rarely read a page top to bottom. They navigate by structure: jump to the next heading, list all links, move through a table cell by cell, tab from one form field to the next. That navigation only works if the structure is real.

When it is not, three things happen. Headings that are just bold paragraphs do not appear in the heading list, so the page becomes one undifferentiated block. Lists made of dashes are read as ordinary sentences, so nobody hears that there are seven items. Table cells without header cells are read as bare values, so a blind visitor hears "€ 1,250" without knowing which product or which year it belongs to.

This also affects people who never touch a screen reader. Real headings drive the table of contents, the search index and the outline that AI assistants build of your page. Real form labels mean the label becomes a click target, which helps anyone with a tremor or a small screen.

## What to get right

**Headings.** Use `<h1>` to `<h6>` in a logical order, and do not skip levels on the way down. An `<h4>` directly after an `<h2>` tells assistive software there is a missing layer. Style with CSS, not by choosing a different level because it looks better.

**Lists.** Anything you would read aloud as "these belong together" is a `<ul>` or `<ol>`. A row of dashes or bullets typed by hand is not a list.

**Tables.** Data tables need `<th>` for header cells, with `scope="col"` or `scope="row"` when the table is anything other than trivial. A `<caption>` gives the table a name, which matters when a page has several. Never use a table for layout.

**Form fields.** Every input needs a `<label>` connected with `for` and `id`, or an equally explicit alternative. Placeholder text is not a label: it disappears the moment somebody types, and many screen readers ignore it.

**Groups.** Radio buttons and checkboxes that belong together need a `<fieldset>` with a `<legend>`. Without it, someone tabbing into the third radio button hears "Yes" with no idea what question they are answering.

**Emphasis that carries meaning.** If red text means "required" and grey text means "optional", that relationship exists only in the styling. Add the word.

## Mistakes we keep finding

**Headings chosen for size.** A team needs a smaller heading, so they pick `<h4>` instead of `<h2>` and restyle it. The visual result is right and the structure is broken.

**Multiple H1s, or none.** Not automatically a failure, but almost always a sign that the outline was never thought through.

**Layout tables.** Still alive in email templates and older CMS themes. If a table has no header cells and no relationship between the cells, it is layout, and a screen reader will still announce "table with 4 rows and 3 columns" before reading it.

**Divs with click handlers.** A `<div>` styled as a button has no role, cannot be reached with the keyboard and is announced as nothing at all. We wrote about [what happens when AI is asked to spot this exact pattern](/en/blog/can-ai-detect-div-as-button/).

**Visually grouped, structurally loose.** A card with a border around a heading, an image and a link looks like one unit. In the code it is three unrelated elements. Sometimes that is fine, sometimes the border is carrying meaning that needs to be said out loud.

**Placeholder as label.** The most common form failure we see, and the easiest to fix.

## How to test it

Three checks in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)** cover most of this, and they take about a minute together.

The **headings and structure** check draws every heading with its level and warns when a level is skipped. You immediately see whether the outline matches the visual hierarchy.

The **list structure** check marks real lists. If a bulleted block on screen stays unmarked, those bullets are typed characters, not a list.

The **tables** check marks tables that have no header cells or no caption.

For forms, the **accessible names of form fields** check shows the name every input actually exposes, and the **groups and visible labels** check catches radio and checkbox sets without a legend.

Then do the one test no tool can do for you: turn on **styles off (reading order)**. All CSS disappears and you see the raw document. If the page still reads as a coherent story, with headings that look like headings and lists that look like lists, the structure is real. If it collapses into an undifferentiated wall, the structure was only ever visual.

### Who does what

- **Editors** choose heading levels and mark lists properly in the CMS. Resist the urge to pick a level because of how it looks.
- **Designers** make sure the visual hierarchy can be expressed in real headings, and that grouping is not carried by a border alone.
- **Developers** deliver semantic HTML, connect labels to fields, and give data tables their header cells.

## Frequently asked questions

### Does the heading order really have to be perfect?

WCAG has no failure technique for skipped levels, so an H2 followed by an H4 is not automatically a failure of 1.3.1. It is still a signal that a layer is missing, and it is the kind of thing a screen reader user notices when they navigate by heading, so we report it. Going back up (H4 to H2) to start a new section is completely normal.

### Are ARIA roles a valid alternative?

`role="heading" aria-level="2"` works, but native HTML works better and breaks less. Reach for ARIA only when no HTML element fits.

### Is a table without a caption a failure?

Not on its own. A caption becomes important when a page has multiple tables, or when the table is far from the text that introduces it. Header cells, on the other hand, are not optional.

### What about a visual grid built with CSS Grid?

Grid and Flexbox reorder what you see without changing the document order. That mostly affects [SC 1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html), but the two often fail together. Test with styles off and you catch both.

### Our CMS generates the markup. Is this still our problem?

Yes, and it is worth knowing which parts you can influence. In most systems editors control heading levels and lists, and the theme controls tables and forms. We have tested most platforms and can usually tell you within an hour where the line sits.

## Summary

- Structure you can see must also exist in the code.
- Real headings, real lists, real table headers, real labels, real fieldsets.
- If styling carries meaning, add the meaning as text.
- Check with the headings, lists, tables, form-name and group checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then turn styles off and read the page as a story.

An automated scan finds the missing header cells and the unlabelled fields. It cannot tell you whether a heading level matches the meaning of the section, or whether a border is carrying a relationship that nobody wrote down. That part needs someone reading the page. If you want that done properly, [ask us for a quote](/en/contact/).
