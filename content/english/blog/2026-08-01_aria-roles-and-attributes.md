---
title: "ARIA roles and attributes: when you need them and when you do not"
date: 2026-08-01
slug: "aria-roles-and-attributes"
translationKey: "aria-rollen-attributen"
categories:
  - "wcag-explained"
tags:
  - "aria"
  - "developers"
  - "semantics"
description: "ARIA changes what assistive technology announces, never what an element does. Which roles and attributes you need, the four failures we find most, and how to test them."
keywords:
  - ARIA roles
  - aria attributes
  - when to use ARIA
  - aria-hidden focusable
  - broken aria-labelledby
  - first rule of ARIA
---

ARIA is the one technology in web accessibility that lets you make a page actively worse than it was without it. A wrong role tells assistive software something untrue, and the user acts on it.

The whole thing in one sentence: **ARIA changes what assistive technology announces, never what an element does.** Put `role="button"` on a `div` and nothing changes about focus, keyboard behaviour or clicking. You have only told the screen reader it is a button, and now you owe it that behaviour.

This one is for developers. For the broader question of how an element gets its name at all, we have a [separate article on the accessible name](/en/blog/what-is-an-accessible-name/).

## The first rule of ARIA

The rule from the [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) is: do not use ARIA if a native HTML element already does what you need.

Native HTML gives you four things for free:

- the role
- the accessible name, from its own content or an associated label
- keyboard behaviour
- state, such as checked or disabled

ARIA gives you the first and sometimes the fourth. The rest you build and maintain yourself, across every browser and every screen reader.

```html
<!-- Four things you now own -->
<div role="button" tabindex="0"
     onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();submit()}"
     onclick="submit()">Send</div>

<!-- Zero things -->
<button type="button" onclick="submit()">Send</button>
```

That does not make ARIA wrong. For patterns HTML has no element for, it is exactly the right tool: tabs, a combobox with suggestions, a tree view, a status message. There is no native equivalent to reach for.

## What ARIA is made of

**Roles** say what something is: `role="tab"`, `role="dialog"`, `role="status"`. One role per element. A role replaces the native one, so `role="button"` on a link strips the link semantics without handing back button behaviour.

**Properties** describe something that does not change during use: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-required`, `aria-controls`.

**States** describe something that does change: `aria-expanded`, `aria-checked`, `aria-selected`, `aria-invalid`, `aria-disabled`, `aria-busy`.

The difference between those last two is where most bugs live. A property you set once. A state has to keep up with reality, and that is what teams forget.

## The four failures we find most

These are exactly the four things the **ARIA roles and attributes** check in [WCAG Radar](https://wcagtoolkit.com/wcag-radar) marks, because it was built around them.

### 1. Broken references to ids that do not exist

`aria-labelledby`, `aria-describedby` and `aria-controls` point at an id. If that id is not on the page, nothing happens. No error, no console warning, just an element with no name.

```html
<!-- The id was renamed to #dialog-title in a refactor -->
<div role="dialog" aria-labelledby="modal-title">
```

This is the quietest of the four. The code looks careful and considered, and the element is nameless. Copy a component to a second place on the same page and you also get two identical ids, where the first one wins.

### 2. Unknown roles

A typo in a role does not produce a warning. The browser ignores a role it does not recognise and falls back to the native role, or to nothing at all.

```html
<div role="navigation">   <!-- fine -->
<div role="nav">          <!-- does not exist, ignored -->
<div role="tabpanel">     <!-- fine -->
<div role="tab-panel">    <!-- does not exist -->
```

Watch out too for roles that exist but do something other than you expect. `role="application"` switches off a screen reader's normal browse mode, so every standard shortcut key stops working. It is rarely used deliberately.

### 3. A role missing its required attribute

Some roles are incomplete without their state. A `role="checkbox"` with no `aria-checked` is announced as a checkbox whose state is unknown, so the user cannot tell whether it is on or off, which is the entire purpose of a checkbox.

| Role | Required attribute |
| --- | --- |
| `checkbox` | `aria-checked` |
| `radio` | `aria-checked` |
| `switch` | `aria-checked` |
| `slider` | `aria-valuenow` |
| `scrollbar` | `aria-valuenow` |
| `combobox` | `aria-expanded` |

Then there is the variant no scan will catch: the attribute is present and never updates. An accordion with `aria-expanded="false"` hardcoded in the template opens perfectly and keeps announcing "collapsed". Put the state change in the same function that toggles the class, not next to it.

```js
button.addEventListener("click", function () {
  var open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!open));
  panel.hidden = open;
});
```

### 4. `aria-hidden="true"` on focusable content

This is the nastiest of the four, because it breaks a page in a way you will never notice with a mouse. `aria-hidden="true"` removes an element from the accessibility tree but not from the tab order. A keyboard user lands on something that does not exist as far as the screen reader is concerned, so focus vanishes into nothing.

```html
<!-- Wrong: the button is still focusable -->
<div aria-hidden="true">
  <button type="button">Close</button>
</div>
```

You see this most on carousels where inactive slides are hidden, on off-canvas menus, and on modals where the background page is pushed out of the way. The fix is to make the content genuinely unreachable: `inert`, `display: none`, or `tabindex="-1"` on the focusable children.

Beyond that, never put `aria-hidden` on an element that can take focus, and not on `body` or on a landmark that still contains content.

## Three more traps with no check of their own

**`aria-label` does nothing on an element with no role.** A bare `div` or `span` will not take a name. Put it on an element that has one.

**ARIA never changes behaviour.** `role="button"` on an `<a href>` strips the link semantics and does not add space-bar activation. `aria-disabled="true"` announces "disabled" and does not block the click.

**`role="presentation"` and `role="none"` remove semantics.** Useful on a layout table, damaging on anything that still carries meaning. They do not apply to focusable elements.

## How to test it

On the **Developer** tab in the free [WCAG Radar](https://wcagtoolkit.com/wcag-radar), turn on **ARIA roles and attributes**. Every element shows its roles and aria attributes, and the four failures above are marked as errors. It all runs in your own browser, including on localhost and behind a login.

Then check the three things the Radar cannot judge for you:

1. **Does the role match what the element actually does?** A `role="tab"` on something that navigates to another page is a valid role in the wrong place.
2. **Does every state keep up?** Expand it, tick it, drag the slider, and watch the attribute change in the inspector.
3. **Does it sound right?** Turn on a screen reader and listen. A technically correct combination can still be incomprehensible.

When you are not sure which states and properties belong to a role, look it up in our [ARIA roles and attributes reference](/en/tools/aria-reference/). It gives you, per role, what it means, which attributes it supports, which HTML element does the same job, and a code example.

If you want to know whether it has actually landed, take our [accessibility quiz for developers](/en/tools/quiz-developers/). It goes beyond ARIA and takes a few minutes.

## Frequently asked questions

### Is ARIA required to meet WCAG?

No. Native HTML already carries name, role and state, and plenty of sites meet [SC 4.1.2 Name, Role, Value](/en/blog/wcag-4-1-2-name-role-value/) without a single ARIA attribute. ARIA exists for patterns HTML does not have.

### Can I put `aria-label` on a link that already has text?

Only if the visible text stays inside the name. Replace it and voice control breaks, because the user says what they see. That is [SC 2.5.3 Label in Name](/en/blog/wcag-2-5-3-label-in-name/).

### What is the difference between `aria-hidden` and `hidden`?

`hidden` hides the element from everyone and takes it out of the tab order. `aria-hidden="true"` hides it from assistive technology only and leaves it visible and focusable. Use `aria-hidden` for decorative icons next to a text label, not to remove content.

### Is `aria-disabled` the same as `disabled`?

No. `disabled` blocks interaction and removes the element from the tab order. `aria-disabled="true"` only announces the state. That is sometimes what you want, because a disabled control that still takes focus is easier to find, but you have to block the action yourself.

### How many roles can an element have?

One. You may list several separated by spaces, but the browser uses the first one it recognises. That is a fallback mechanism, not a way to combine roles.

## Summary

- ARIA changes what assistive technology announces, never what an element does.
- If an HTML element already does the job, use it.
- The four failures we find most: broken id references, unknown roles, a role missing its required attribute, and `aria-hidden` on focusable content.
- A state that does not keep up is worse than no state, because assistive software then announces something untrue.
- Check with **ARIA roles and attributes** in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), look roles up in the [ARIA reference](/en/tools/aria-reference/), and test yourself with the [developer quiz](/en/tools/quiz-developers/).

Whether a role matches what the component does is not something any scan can decide. That is why we walk every custom component by hand. [Ask us for a quote](/en/contact/) if you want to know how yours hold up.
