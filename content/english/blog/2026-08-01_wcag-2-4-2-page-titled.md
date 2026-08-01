---
title: 'SC 2.4.2 - What does "Page Titled" mean?'
date: 2026-08-01
slug: "wcag-2-4-2-page-titled"
translationKey: "sc-2-4-2"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-4-2"
  - "content"
  - "seo"
description: "WCAG 2.4.2 asks that every page has a title describing its topic or purpose. Why the site name belongs last, what single page apps get wrong, and how to check."
keywords:
  - WCAG 2.4.2
  - page titled
  - title element accessibility
  - descriptive page title
  - duplicate page titles
  - single page app title
---

You have twelve tabs open and you are looking for the one with your basket in it. Three are called "Home", two say "Welcome", and the rest show only the company name. You click through them one by one.

Annoying with a mouse. A real obstacle with a screen reader, because the page title is the first thing announced when a page opens or you switch tabs. If that title is "Home", the announcement tells you nothing at all.

WCAG says: **every page has a title that describes its topic or purpose**.

It is the cheapest criterion in the standard to satisfy and one of the most frequently half-done.

## What the criterion says

[Success criterion 2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html) (level A) requires that web pages have titles that describe topic or purpose.

That is the `<title>` element in the head. It shows up in three places, and each one matters to a different group:

1. **The browser tab**, which is how anybody with several tabs open finds their way back.
2. **Search results**, where it is the clickable heading.
3. **The screen reader**, which announces it before anything else on the page.

## Why this matters

For screen reader users the title is the orientation step. Before any content, before the heading, they hear where they have landed. A wrong or generic title means starting the page with no idea whether it is the right one.

For people with cognitive disabilities, switching between tabs is a working-memory task, and a descriptive title removes the need to remember which tab was which.

For everyone, it is how browser history, bookmarks and search results are labelled. A bookmark called "Home" is a bookmark you will not find again.

## What makes a good title

Specific, concise, unique.

**Specific.** It describes the page, not the site.

| Weak | Better |
|---|---|
| Home | Proper Access - digital accessibility audits |
| Products | Audits and mini audits - Proper Access |
| Blog | Blog about digital accessibility - Proper Access |
| Contact | Contact us - Proper Access |

**Concise.** Roughly 60 to 70 characters. Longer titles get truncated in tabs and search results, so anything past that is decoration.

**Unique.** Three pages called "Products" leaves nobody able to tell them apart, in tabs, in history or in a screen reader's announcement.

**Most specific part first.** Start with what is unique to the page and end with the site name:

```html
<!-- Good -->
<title>Request an accessibility audit - Proper Access</title>

<!-- Worse -->
<title>Proper Access - request an accessibility audit</title>
```

With several tabs open you see only the first few characters. If every title starts with the site name, every tab looks identical, which is exactly the problem the title was supposed to solve.

## Titles that change

Some pages need the title to move with the state:

- **Multi-step processes.** "Step 2: payment method - Checkout - Shop". Someone who returns to the tab needs to know where they were.
- **Search results.** "Results for 'blue shoes' - Shop", so the tab and the history entry mean something.
- **Error pages.** "Page not found (404) - Shop", so it is clear before reading anything that something went wrong.
- **Forms with errors.** Some teams prefix the title with the error count on failed submit. Not required, and genuinely helpful.

**Single page applications** are where this fails most often now. The route changes, the content changes, and the `<title>` stays whatever it was on first load. Every view has the same title, history is unusable, and a screen reader announces nothing on navigation. Updating the title on route change is one line and it is routinely missed. Pair it with moving focus, which is [SC 2.4.3](/en/blog/wcag-2-4-3-focus-order/).

## Mistakes we keep finding

**Generic titles.** "Home", "Welcome", "Page", "Untitled".

**No title at all.** The browser falls back to showing the URL.

**Duplicate titles** across several pages, usually from a template that only outputs the site name.

**Site name only**, on every page.

**Site name first**, making every tab look the same.

**Titles that do not match the page**, usually after a page was repurposed and the title stayed.

**Titles stuffed for search engines.** "Accessibility audit, WCAG audit, accessibility test, EAA audit - Proper Access". Bad for readers, and search engines stopped rewarding it a long time ago.

**The title and the H1 disagreeing.** Not a failure by itself, and usually a sign that one of them is wrong.

## How to test it

Turn on **page title** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)**. It shows the title of the page you are on, which sounds trivial until you use it on a single page application and watch it not change as you navigate.

Then do the checks a tool cannot:

1. **Open your main pages in tabs, side by side.** Can you tell them apart from the tab alone? That is the real test and it takes a minute.
2. **Hover a tab** to see the full title, since tabs truncate.
3. **Navigate a single page application** and watch whether the title updates on each route.
4. **Check your error and search pages**, which are almost never included in a review.

For a whole site, a crawl that lists every title lets you sort for duplicates and for anything under about 20 characters. Those two filters find nearly all of it.

### Who does what

- **Editors** write the titles. In most content management systems this is a field you control, sometimes labelled "SEO title", and it is the same field for both purposes.
- **Developers** build the pattern, put the site name last, and update the title on route change in a single page application.
- **Designers** are not involved here.

## Frequently asked questions

### Does the title have to match the H1?

No, and they often differ for good reason: the title carries the site name and the H1 does not. They should not contradict each other.

### How long can a title be?

There is no limit in the criterion. Browsers and search engines truncate around 60 to 70 characters, so put the important words first and treat the rest as optional.

### Does the site name have to be in there?

Not required, and it is useful in search results and bookmarks. Put it at the end.

### Is a duplicate title a failure?

Not automatically, if both pages genuinely have the same topic. In practice duplicates are nearly always a template that never got a page-specific value.

### Do I need a title on a page inside an iframe?

An embedded document has its own `<title>`, which is good practice. What the user actually needs is a `title` attribute on the `<iframe>` element itself, which falls under [SC 4.1.2](/en/blog/wcag-4-1-2-name-role-value/).

## Summary

- Every page needs a title describing what it is.
- Specific, under about 70 characters, unique across the site.
- Most specific part first, site name last.
- Update the title on route change in a single page application.
- Do not forget error pages, search results and process steps.
- Check with the page title check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then open your main pages side by side in tabs.

Five minutes per page, and it improves both the screen reader experience and your search results. There are not many criteria where those two line up so directly. [Ask us for a quote](/en/contact/) if you want the full set checked.
