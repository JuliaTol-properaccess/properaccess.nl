---
title: 'SC 4.1.3 - What does "Status Messages" mean?'
date: 2026-08-01
slug: "wcag-4-1-3-status-messages"
translationKey: "sc-4-1-3"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "4-1-3"
  - "aria"
  - "development"
description: "WCAG 4.1.3 asks that messages appearing without a page reload are announced without moving focus. What counts as a status message, and the live region rule everyone gets wrong."
keywords:
  - WCAG 4.1.3
  - status messages
  - aria-live
  - role status
  - live region screen reader
  - added to cart announcement
---

You add something to your basket. The little number next to the cart icon goes from 2 to 3. Nothing else happens: no page reload, no focus change, no confirmation you have to dismiss.

If you can see it, that is elegant. If you cannot, absolutely nothing happened. WCAG says: **when something changes and focus does not move there, assistive software still has to be told**.

## What the criterion says

[Success criterion 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) (level AA, new in WCAG 2.1) requires that status messages can be programmatically determined through role or properties, so they can be presented to the user by assistive technologies without receiving focus.

The definition hinges on one thing: **focus does not move to it**. If your code moves focus to the new content, the screen reader announces it because focus arrived there, and this criterion does not apply. If the content simply appears while the user is somewhere else, it does.

## What counts as a status message

Anything that appears without a page reload and without focus moving:

- "3 results found" appearing above a filtered list
- A form submitted confirmation shown in place
- Validation errors appearing inline after a failed submit
- The basket counter incrementing
- A character counter under a textarea
- A progress bar advancing
- "Loading" or "Fetching your data"
- A session-expiry warning
- Search suggestions appearing under a search field, meaning the fact that there are suggestions, not the suggestions themselves
- New messages arriving in a chat
- A saved or liked confirmation

That list is longer than most teams expect, and the basket counter is the one that surprises people.

## How to do it

Use the right role and let the browser do the work:

- `role="status"` for ordinary confirmations and updates. It is polite: the announcement waits until the screen reader finishes what it is saying.
- `role="alert"` for errors and things that need immediate attention. It interrupts. Use it sparingly, because it interrupts.
- `aria-live="polite"` or `aria-live="assertive"` when you need the behaviour without the role semantics.
- `aria-busy="true"` while a region is being updated in several steps, so it is announced once at the end rather than piecemeal.

### The rule almost everybody gets wrong

**The live region has to exist in the DOM, and be empty, before you put the message in it.**

Assistive software watches live regions for changes. If you inject the whole container and its message at the same moment, there was no region to watch, and there is nothing to announce. The container has to be there first, empty, and then the text goes in.

```html
<!-- Present from page load, empty -->
<div id="cart-status" role="status" class="sr-only"></div>
```

```js
document.querySelector('#cart-status').textContent = 'Product added to your basket';
// Clear it after a few seconds so the same message can be announced again later
setTimeout(() => {
  document.querySelector('#cart-status').textContent = '';
}, 3000);
```

Two details in that snippet. Clearing it afterwards matters, because setting a live region to the text it already contains announces nothing, so adding the same product twice would be silent the second time. And whatever class you use to hide it visually must not be `display: none` or `visibility: hidden`, which remove it from the accessibility tree entirely. Use a proper visually-hidden class that keeps the element rendered.

### For form errors, consider moving focus instead

For validation errors there is often a better pattern than a live region: tie each message to its field with `aria-describedby`, and move focus to the first field in error, or to an error summary. Then the message is announced because the user is there, which is more reliable across screen readers than a live region, and it also puts them where the work is.

Note that this is the point where 4.1.3 hands over to [SC 3.3.1 Error Identification](/en/blog/wcag-3-3-1-error-identification/): if you move focus, it is 3.3.1's problem, and if you do not, it is this one's.

## Mistakes we keep finding

**No live region at all.** The message appears, is perfectly readable, and is never announced.

**The region injected together with its content.** The most common technically-wrong version, and it looks correct in code review.

**`role="alert"` on everything.** Every filter change interrupting the user mid-sentence. Assertive announcements are genuinely disruptive, and a page that uses them for routine updates gets muted.

**A region hidden with `display: none`.** Removed from the accessibility tree, so nothing is announced.

**Announcing far too much.** A live region wrapping a whole results list means every character typed in the filter re-announces everything. Announce "12 results found", not the results.

**A message that clears too fast.** A toast that disappears after two seconds may be gone before a screen reader reaches it.

**The basket counter.** Almost universally missed, because visually it is a number changing rather than a message appearing.

## How to test it

**Error messages on form fields** in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)** looks for messages using `role="alert"`, `aria-live` or an error class, and reports those that are not tied to an input. That covers the form-validation half of this criterion.

Be aware of the limit: no tool can confirm that a live region actually announced. The presence of `aria-live` in the HTML is not proof, because the empty-region-first rule, the timing and the hiding method all decide whether anything is spoken. This is a criterion you have to test with a screen reader.

So do that. NVDA on Windows or VoiceOver on macOS, both free and already installed in the case of VoiceOver. Then:

1. Perform the action: filter, submit, add to basket.
2. Do not touch the keyboard afterwards.
3. Listen. Was anything announced? Was it the right thing? Was it announced once, or eleven times?

Fifteen minutes with a screen reader on your main flows tells you more than any scan for this criterion.

### Who does what

- **Developers** own this entirely: the region, its role, when it is populated, and when it is cleared.
- **Designers** decide which changes are important enough to announce, which is a real design decision and not a technical one.
- **Editors** write the message text. "3 results found" is better than "Results updated".

## Frequently asked questions

### If I move focus to the message, do I still need a live region?

No. The criterion is specifically about messages that do not receive focus. Moving focus is a legitimate alternative, and for form errors it is usually the better one.

### `role="status"` or `aria-live="polite"`?

`role="status"` includes `aria-live="polite"` and adds the semantics, so it is the better default. Use bare `aria-live` when you need the behaviour on an element whose role you cannot change.

### Is a loading spinner a status message?

The visual spinner is not text, so announce something in a live region alongside it, such as "Loading results". Then announce the outcome when it finishes.

### Why does my live region announce twice?

Usually because the region is nested inside another live region, or because a framework re-renders the node rather than changing its text. Both are common in React and Vue.

### Does this apply to a page that fully reloads?

No. On a reload the screen reader starts again from the new page and reads the new title, so there is no silent change.

## Summary

- A message that appears without focus moving to it still has to be announced.
- The live region must exist and be empty before the message goes in.
- `role="status"` for updates, `role="alert"` only when interrupting is justified.
- Never hide a live region with `display: none`. Clear it after a few seconds so it can fire again.
- Announce the summary, not the whole list.
- For form errors, moving focus is often more reliable than a live region.

This is the criterion where the code can look completely correct and nothing is spoken, which makes it one of the very few you cannot sign off without a screen reader. That is exactly the kind of testing we do by hand. [Ask us for a quote](/en/contact/) if you want your dynamic flows checked properly.
