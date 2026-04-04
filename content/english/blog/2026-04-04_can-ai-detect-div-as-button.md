---
title: "AI test: Can AI detect a div pretending to be a button?"
date: 2026-04-04
slug: "can-ai-detect-div-as-button"
categories:
  - "ai-and-wcag"
tags:
  - "AI"
  - "wcag"
  - "keyboard accessibility"
  - "Playwright"
description: "Can AI find a clickable div on a live website? I tested it with Claude Code and Playwright. Here are the results, the limitations, and the tools you need."
keywords:
  - AI accessibility testing
  - div onclick
  - button accessibility
  - WCAG 2.1.1
  - keyboard accessibility
  - clickable div
  - Playwright accessibility
image: "/images/blog/ai-serie-kickoff-en.png"
---

{{< case-section >}}

## Can AI detect a div pretending to be a button?

A `<div>` with an `onclick`. Looks like a button. Does something when you click it. But press Tab and nothing happens. Enter? Nothing either.

For a keyboard user, this button doesn't exist.

This is the number 1 keyboard issue I encounter in audits (WCAG 2.1.1). And the easiest to fix: replace the div with a `<button>`. But can AI find this problem too? And not just in a code snippet, but on a real, live website?

{{< /case-section >}}

{{< case-section >}}

## Test 1: Code analysis

I gave Claude the following HTML, without hints:

```html
<div class="btn-primary" onclick="addToCart(123)">In winkelwagen</div>
```

My prompt: *"What accessibility issues do you see in this code?"*

### Result

Claude recognized it immediately:

> "A `<div>` with an `onclick` handler is not keyboard accessible by default. It cannot be reached with Tab, it has no button role, and pressing Enter or Space will not activate it."

It links the problem to WCAG 2.1.1 (Keyboard) and gives the correct solution: use a `<button>`.

But I gave AI a piece of code. That's the easy version. Can AI also find this when you only have a URL?

{{< /case-section >}}

{{< case-section >}}

## Test 2: Testing a live website

Can AI visit a web page and detect this issue? Yes, but not by itself. AI needs a browser.

With Playwright (a browser automation tool), Claude Code can open a real browser, visit a web page, and inspect the DOM. That looks like this:

```javascript
const { chromium } = require('playwright');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://example-webshop.com');

// Find all elements with onclick that aren't buttons or links
const problems = await page.evaluate(() => {
  const elements = document.querySelectorAll('[onclick]');
  return Array.from(elements)
    .filter(el => {
      const tag = el.tagName.toLowerCase();
      return tag !== 'button' && tag !== 'a' && tag !== 'input'
             && el.getAttribute('role') !== 'button';
    })
    .map(el => ({
      tag: el.tagName.toLowerCase(),
      text: el.textContent?.trim().substring(0, 80),
      onclick: el.getAttribute('onclick')
    }));
});
```

This script finds every div, span, or other non-interactive element with an onclick attribute. No source code needed. It tests the live page.

### What can Playwright test?

Playwright runs a real Chromium browser. All JavaScript is executed, so you see the rendered DOM, not the source code. You can click, wait for a modal to appear, and then inspect the new HTML. Modals, accordions, tabs, lazy-loaded content, open Shadow DOM, iframes. It all works.

### Where does it go wrong?

The biggest problem: addEventListener. Most modern websites don't use `onclick="..."` in the HTML. They attach click events via JavaScript:

```javascript
element.addEventListener('click', function() {
  addToCart(123);
});
```

This is invisible in the DOM. There's no onclick attribute to search for.

You can look for signals that an element is meant to be clickable:

- Does it have `cursor: pointer` in the computed style?
- Does it have a class like "btn", "button", "clickable"?
- Is it a `<div>` or `<span>` with `tabindex="0"` but without `role="button"`?

But those are educated guesses. You'll get false positives (elements that look clickable but aren't) and false negatives (clickable elements without visual hints).

Other limitations:

| Limitation | Impact |
|-----------|--------|
| addEventListener is invisible in DOM | High, most modern sites use this |
| You test one page state at a time | Medium, logged in vs. logged out, different tabs |
| Closed Shadow DOM is inaccessible | Low, rarely used |
| Bot detection (Cloudflare etc.) | Medium, some sites block headless browsers |
| Pages behind login | Medium, possible but you need to provide credentials |

{{< /case-section >}}

{{< case-section >}}

## What do you need?

To run this test yourself, you need three things:

1. **Node.js** (version 18 or higher)
2. **Playwright** (`npm install playwright`)
3. **A Chromium browser** (`npx playwright install chromium`)

No source code needed, no special access. You test the website as a visitor sees it.

{{< /case-section >}}

{{< case-section >}}

## The scorecard

| Test | Score | Notes |
|------|-------|-------|
| Code analysis: detect div onclick | Found | Claude recognizes the problem in a code snippet |
| Live website: find inline onclick | Found | Playwright can search DOM for onclick attributes |
| Live website: find addEventListener | Missed | Invisible in DOM, only approachable via heuristics |
| Live website: dynamically loaded divs | Found | Playwright can click, wait, and inspect new DOM |
| Understanding context (why it's wrong) | Found | Claude explains what it means for users |

AI finds this problem in code and with inline onclick. But with addEventListener (the way most modern websites work), it depends on heuristics. That's a serious limitation.

{{< /case-section >}}

{{< case-section >}}

## The fix

```html
<!-- Don't do this -->
<div class="btn-primary" onclick="addToCart(123)">Add to cart</div>

<!-- Do this -->
<button class="btn-primary" type="button" onclick="addToCart(123)">
  Add to cart
</button>
```

A `<button>` is focusable by default, activatable with Enter and Space, and has the correct role for screen readers. Free. No extra code needed.

{{< /case-section >}}

{{< case-section image="/images/julia.webp" alt="Julia Tol, senior auditor at Proper Access" round="true" caption="Julia Tol, developer, WCAG expert, AI consultant" >}}

## What I learned from this

Claude understands this problem well. It explains why a div isn't a button, what it means for keyboard users, and how to fix it. That's more than what axe or Lighthouse tell you, which only report that there's an element without a role.

But finding it on a live website is a different story. Searching the DOM works when the site has onclick attributes in the HTML. With JavaScript event listeners, you need heuristics that aren't watertight.

And then the point that really matters: AI can tell you that the div should be a button. But it can't press Tab. It reads and reasons. It doesn't test.

---

_This is test #1 of the series "AI and Accessibility Testing." Each test examines whether AI can detect a specific accessibility issue, not just in code but also on a live website. Want to know how accessible your website is? Have it tested by a human for the best results. [Get in touch](/en/contact/)._

{{< /case-section >}}
