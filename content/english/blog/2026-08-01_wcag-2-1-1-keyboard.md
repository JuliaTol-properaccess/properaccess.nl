---
title: 'SC 2.1.1 - What does "Keyboard" mean?'
date: 2026-08-01
slug: "wcag-2-1-1-keyboard"
translationKey: "sc-2-1-1"
homepage_exclude: true
categories:
  - "wcag-explained"
tags:
  - "2-1-1"
  - "keyboard"
  - "development"
description: "WCAG 2.1.1 asks that everything on your site can be operated with a keyboard. What that covers, where it breaks, and the fifteen-minute test that finds most of it."
keywords:
  - WCAG 2.1.1
  - keyboard accessibility
  - keyboard navigation
  - tab key testing
  - keyboard trap
  - div onclick
---

Put your mouse in a drawer and try to use your own website. Order something, submit the contact form, open the menu, close the cookie banner. Most teams get about a minute in before something stops working.

That is the whole of this criterion in one exercise. WCAG says: **everything on the page has to be operable with a keyboard**.

It is not a niche requirement. Anything that cannot be reached by keyboard is also unreachable for screen readers, voice control and switch devices, because all of them ride on the same underlying focus model. Fix the keyboard and you fix most of the rest.

## What the criterion says

[Success criterion 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) (level A) requires that all functionality is operable through a keyboard interface, without requiring specific timings for individual keystrokes.

Two details in that sentence matter. **All functionality**, not most of it. And **without specific timings**, which rules out anything that depends on how fast you press or how long you hold.

There is one exception: functionality that genuinely depends on the path of the movement rather than its endpoints, such as freehand drawing. A signature field can require a pointer. A drag-and-drop list cannot, because reordering a list is about the endpoints and a keyboard alternative is always possible.

## Why this matters

- People with a motor impairment who cannot control a pointer accurately, or at all.
- Blind and partially sighted people. A screen reader drives the page through the keyboard, so anything unreachable by Tab is invisible to them regardless of how good your markup is.
- People with RSI who avoid the mouse to protect their hands.
- Anyone using voice control or a switch device, both of which map onto keyboard focus.
- Temporary situations. A broken wrist, a dead trackpad, a laptop on a train.
- People who are simply faster by keyboard, which in a form-heavy back office is most of the users.

## The keys that have to work

| Key | What it should do |
|---|---|
| Tab | Move to the next focusable element |
| Shift + Tab | Move back |
| Enter | Activate a link or a button |
| Space | Activate a button, tick a checkbox |
| Arrow keys | Move within a group: radio buttons, tabs, menus, sliders |
| Escape | Close a modal, a menu, a dropdown |

Native HTML gives you all of this for nothing. `<button>`, `<a href>`, `<input>`, `<select>` and `<textarea>` are focusable, are in the tab order, and respond to the right keys without a line of JavaScript.

## Mistakes we keep finding

**The div with a click handler.** The single most common failure of this criterion. It looks like a button, works with a mouse, and is not in the tab order, so it does not exist for a keyboard user. It fails [SC 4.1.2](/en/blog/wcag-4-1-2-name-role-value/) at the same time. The fix is almost always to use a real `<button>`.

**Custom dropdowns and comboboxes.** Built from divs and a list. Opening works, arrowing through the options does not, and Escape does nothing.

**Modals that do not trap focus.** The dialog opens and Tab walks straight out of it into the page behind, where the user cannot see where they are.

**Keyboard traps.** The opposite problem and a separate criterion ([SC 2.1.2](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)). Focus goes into an embedded player or a date picker and cannot get out again except by reloading the page.

**The mobile menu.** Zoom to 200% until the hamburger appears, then test it. The button often works and the menu itself often does not, because it was only ever tested by touch. Closing with Escape is missing more often than not.

**Hover-only content.** Tooltips, submenus and preview cards that appear on `:hover` and have no focus equivalent. If it appears on hover it has to appear on focus. That is also [SC 1.4.13](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html).

**Drag and drop with no alternative.** Reordering a list, moving a card between columns, uploading by dragging. Each needs a keyboard route, usually a set of buttons or a plain file input.

**`tabindex` used as a layout tool.** Positive values on elements to force an order. They jump ahead of everything else and scramble the sequence. Only `0` and `-1` belong in production code.

## How to test it

Three checks in **[WCAG Radar](https://wcagtoolkit.com/wcag-radar)** get you most of the way.

**Tab order** numbers every focusable element in the order you reach it and flags positive `tabindex` values as errors. Look at the numbers on your interactive elements. A control with no number is not focusable, and that is your failure list.

**Gestures and mouse-only controls** marks the elements that can only be driven by mouse or touch: script-clickable elements without keyboard focus, drag and drop without a clear alternative, and fake buttons with nothing but a pointer cursor. This is the check aimed straight at the div-as-button pattern.

**Make focus visible** forces a clear outline, which you want on while you do the manual pass.

Then do the manual pass, because no tool can tell you whether the order made sense or whether Escape worked. Start from the browser address bar and Tab through the entire page:

- Can you reach every control you can click?
- Can you activate each one with Enter or Space?
- Does the order follow the visual layout?
- Can you get out of everything you get into?
- Do the menu, the modal, the carousel and the date picker all work?

Fifteen minutes on your main templates will find more than any scan.

### Who does what

- **Developers** own this almost entirely. Native elements first. Every ARIA widget you build by hand is a keyboard interaction you now maintain yourself.
- **Designers** flag custom components early, and design the focus states along with hover and active.
- **Editors** can still test. Tab through your own pages and report anything you cannot reach. You do not need to know why it is broken to report that it is.

## Frequently asked questions

### Does everything have to work with Tab alone?

No. Within a composite widget such as a set of tabs, a radio group or a menu, the arrow keys do the moving and Tab jumps to the next widget. That is the expected pattern, and it is what assistive software users are used to.

### Is drag and drop allowed?

Yes, as long as there is a keyboard route to the same result. Reordering by dragging is fine if there are also move up and move down buttons. WCAG 2.2 added [SC 2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) which makes this explicit for pointer users too.

### What about a signature field?

That is the path-dependent exception. Freehand drawing genuinely needs a pointer. A typed-name alternative is good practice but is not required by this criterion.

### Our component library handles this. Do we still need to test?

Yes. Libraries usually get the individual component right and say nothing about what happens when you nest three of them, or when your CSS hides the focus ring. The composition is where it breaks.

### Is a keyboard trap the same failure?

No, it is [SC 2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html), also level A. They travel together often enough that it is worth checking both in the same pass.

## Summary

- Everything that works with a mouse has to work with a keyboard.
- Native HTML elements give you focus, tab order and key handling for free. Divs give you none of it.
- Watch the mobile menu, modals, custom dropdowns, hover-only content and drag and drop.
- Only `tabindex="0"` and `tabindex="-1"` belong in production.
- Check with the tab order and gestures checks in [WCAG Radar](https://wcagtoolkit.com/wcag-radar), then put the mouse away and walk the page.

This is the criterion where automated tools help least and fifteen minutes of tabbing helps most, which is why we do it by hand on every template we audit. [Ask us for a quote](/en/contact/) if you want to know what your site looks like without a mouse.
