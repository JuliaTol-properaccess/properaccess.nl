---
title: 'SC 2.4.4 - What does "Link Purpose (In Context)" mean?'
date: 2026-07-31
slug: "wcag-2-4-4-link-purpose-in-context"
translationKey: "sc-2-4-4"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-4-4"
  - "links"
  - "content"
description: "WCAG 2.4.4 asks that the purpose of every link is clear. Why 'read more' is a problem, when context rescues it, and how to check a page full of links at once."
keywords:
  - WCAG 2.4.4
  - link purpose
  - read more links
  - descriptive link text
  - accessible links
  - click here
---

Screen reader users have a shortcut that sighted visitors do not: pull up a list of every link on the page and jump straight to the one you want. It is fast and it is how a lot of people actually browse. Now imagine that list on a typical news site. Fourteen entries, all reading "Read more". Success criterion 2.4.4 exists to stop that: **the purpose of a link must be clear**.

## What the criterion says

[Success criterion 2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) (level A) requires that the purpose of each link can be determined from the link text alone, or from the link text together with its programmatically determined context.

That second half is the part people miss. "In context" is generous. The context can be the sentence the link sits in, the paragraph, the list item, the table cell with its header, or the heading of the section. So a "Read more" link is not automatically a failure. It is a failure when the surrounding markup does not tie it to anything.

There is also a stricter AAA version, [SC 2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html), where the link text has to stand on its own. Most teams are not aiming for AAA, but it is a useful target for exactly the "read more" case, because it is the version that survives the link list.

## Why this matters

Three groups feel this immediately.

**Screen reader users** navigating by link list, as described above. Out of context, "Read more" is noise.

**Voice control users** say "click Read more" and get asked which one, then have to work through a numbered overlay. Distinct link text means the command just works.

**People who use the keyboard.** Tabbing through a page moves from link to link, so the link text arrives on its own, without the sentence around it. Same list, same problem: "Read more, read more, read more".

## What good link text looks like

Put the meaningful words *inside* the link, and make the link long enough to be a comfortable target but short enough to scan.

- Not "Click [here](#) to download the annual report" but "Download the [2026 annual report](#)".
- Not "[Read more](#)" after a news teaser but "[Read more about our audit method](#)".
- Not "[Learn more](#)" on six cards in a row but a link on each card title.

If a card design genuinely needs a short call to action, two patterns work. Wrap the whole card in the link so the heading becomes part of the accessible name. Or keep the visible "Read more" and give the link an `aria-label` that includes the subject. The second is a compromise: the visible text and the accessible name then differ, which needs care under [SC 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html), so make sure the visible words are contained in the label.

## Mistakes we keep finding

**"Read more", "Learn more", "Click here", "More".** The classic four. In a link list they are indistinguishable.

**The bare URL as link text.** `https://example.com/en/services/audits/?utm_source=news` gets read out character by character by some screen readers. Use words.

**Links that only differ visually.** Two links reading "Download" where one is the PDF and one is the Word file, distinguished only by an icon. If the icon has no accessible name, the two links are identical to assistive software.

**Icon-only links.** A social media row of five icons with no accessible name announces as "link, link, link, link, link". Every icon-only link needs an `aria-label`, and the icon itself should be `aria-hidden="true"`.

**Images used as links without alt text.** The image *is* the link, so the alt text becomes the link text. An empty alt on a linked image leaves the link with no name at all. See [SC 1.1.1](/en/blog/wcag-1-1-1-non-text-content/).

**Two links with the same text going to different places.** Legitimate sometimes, confusing often. If "Contact" appears in the nav and in the footer pointing at the same page, fine. If it appears twice pointing at two different pages, not fine.

**No warning on a file download or a new window.** Not strictly required by 2.4.4, but a link that opens a 12 MB PDF in a new tab without saying so is a support ticket waiting to happen. Put it in the link text: "Annual report 2026 (PDF, 12 MB)".

## How to test it

**[WCAG Radar](https://wcagtoolkit.com/wcag-radar)** has three checks for this and they build on each other.

**Link text** marks empty links and links with vague text such as "read more", straight on the page, so you see where they sit.

**Clickable images** shows the accessible name of every link and button that contains an image. Anything without a name is marked as an error, which is how you catch the icon rows.

**All links** is the one that matters most here. It renders the page as a list of links exactly the way a screen reader announces them, in document order. Scroll that list. If you cannot tell from an entry where it goes, neither can anyone else. Click a row to jump to that link on the page.

That third check is deliberately a reading exercise rather than a pass or fail. No tool can judge whether "our approach" is descriptive enough in your context. Reading the list takes thirty seconds and tells you more than any score.

### Who does what

- **Editors** write the link text. This criterion is almost entirely yours, and it is one of the few WCAG rules you can fix without involving anyone.
- **Designers** design card patterns that do not force a bare "Read more", and give icon links a visible or hidden label.
- **Developers** implement `aria-label` where it is needed, hide decorative icons, and make sure the CMS does not wrap link text in a way that strips context.

## Frequently asked questions

### Is "read more" always wrong?

No. If the link sits inside a paragraph or a list item that names the subject, the context rescues it and you meet 2.4.4 at level A. It still fails the link-list test, so we usually recommend fixing it anyway. Doing so is free and it also helps your search ranking.

### Does the link text have to be unique across the page?

Not by this criterion. Identical link text pointing at the same destination is fine. Identical text pointing at different destinations is where you get into trouble.

### Can I use `title` instead of visible text?

No. The `title` attribute does not appear on touch devices, is inconsistently announced by screen readers, and cannot be reached by keyboard. It is not a substitute for a name.

### What about links that open in a new tab?

Not covered by 2.4.4, but announcing it is good practice. Add "(opens in a new window)" to the accessible name, or include it visibly.

### Is a skip link exempt?

No, and it does not need to be. "Skip to main content" is already perfectly descriptive.

## Summary

- The purpose of a link must be clear from its text, or from the context the markup ties it to.
- Put the meaningful words inside the link.
- Icon-only links and linked images need an accessible name, always.
- Read the "all links" list in [WCAG Radar](https://wcagtoolkit.com/wcag-radar) the way a screen reader would. If an entry is unclear on its own, rewrite it.

Link text is the kind of finding that fills an audit report because it repeats on every template. If you want the full picture per element rather than per criterion, that is [how we write our reports](/en/blog/user-stories-in-accessibility-reports/).
