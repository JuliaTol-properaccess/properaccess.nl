---
title: "WCAG Radar"
meta_title: "WCAG Radar — free accessibility bookmarklet (Editors, Designer, Developer) | Proper Access"
description: "Free bookmarklet with three tabs: Editors, Designer and Developer. Shows live, on any page, whether alt text, headings, contrast, focus, ARIA, tab order and much more hold up."
layout: "bookmarklet-install"
bookmarklet_key: "lens-en"
gratis: true
uitgelicht: true
weight: -3
doelgroep: ["Web editors", "Web designers", "Web developers"]
aliases:
  - /en/tools/accessibility-lens/
  - /en/tools/alt-text-checker/
  - /en/tools/heading-checker/
keywords:
  - accessibility checker
  - check alt text
  - heading structure check
  - link text wcag
  - contrast checker page
  - colour blindness simulation
  - target size wcag
  - text spacing test
  - aria checker
  - tab order test
  - accessible name checker
  - resize text test
  - make focus visible
  - accessibility bookmarklet
hero_sub: "A free button in your bookmarks bar that shows how any page is doing on accessibility. Headings, alt text, contrast, focus, ARIA and tab order, visible right on your own screen. The radar runs entirely in your browser: nothing is sent and nothing is stored."
rollen:
  - eyebrow: "For web editors"
    titel: "The checks you run every week, in one click"
    svg: "redactie"
    tekst: |
      As an editor you work in the CMS, not in the code. Yet your work decides a large part of the accessibility: the alt text, the heading structure, the link text, the tables. That is exactly where things go wrong most often.

      Our ambition for the Editors tab is straightforward: make the checks you should be doing anyway so easy that you actually do them. No source code to read, no developer to ask. You click the radar and see at once which image has no alt text, where a heading level is skipped and which link is called "read more".

      The radar does not judge for you. With alt text it shows you what is there; you decide whether it fits the image. That is precisely the part an automated scanner can never do for you.
    link: "/en/blog/"
    link_tekst: "Read more on our blog"
  - eyebrow: "For designers"
    titel: "Check contrast, focus and target size without a plugin"
    svg: "designer"
    tekst: |
      In your design tool everything looks fine. In the browser it comes down to the real colours, the real fonts and the real behaviour when someone zooms. You want to get at that, including on a page that is not finished yet.

      Our ambition for the Designer tab is to bring the checks you normally spread across three tools into one place. Measure contrast with the two eyedroppers, drop the page to greyscale, force a visible focus ring, mark tap targets smaller than 24 pixels and push the text to 200% to see whether your layout holds.

      There is nothing to install and your design does not have to be online. The radar works just as well on a staging environment or on localhost.
    link: "/en/blog/"
    link_tekst: "Read more on our blog"
  - eyebrow: "For developers"
    titel: "Faster than opening the inspector"
    svg: "developer"
    tekst: |
      You know what to look for. What costs time is the digging: which button exactly has no accessible name, does that aria-controls point at an id that exists, and in what order does focus actually travel?

      Our ambition for the Developer tab is to answer those questions before you open the inspector. The radar numbers every focusable element in tab order and flags positive tabindex values as an error. It shows every role and aria attribute and reveals which references point at nothing. On hover you get the tag, id, class, role, accessible name and size of any element.

      Useful while building, and useful when resolving an audit finding: you see straight away whether your fix had the effect you wanted.
    link: "/en/blog/"
    link_tekst: "Read more on our blog"
tabs:
  - label: "Editors"
    checks:
      - titel: "Page language"
        uitleg: "See whether the page language is set and which parts have their own language. The right language makes a screen reader pronounce words correctly."
      - titel: "Page title"
        uitleg: "Shows the title of the page. A clear, unique title helps visitors tell tabs and search results apart."
      - titel: "Styles off (reading order)"
        uitleg: "One click turns off all styling. You then see the bare order in which a screen reader reads the page. Does your story still flow?"
      - titel: "Reading order (overview)"
        uitleg: "The page as a clickable list, the way assistive software walks through it: headings, landmarks, links, buttons and fields in document order. See whether the story makes sense, and click straight through to any element."
      - titel: "Show hidden elements"
        uitleg: "See which elements are hidden and why (display:none, visibility:hidden, the hidden attribute or aria-hidden). Handy for spotting content that is accidentally invisible, or read out twice."
      - titel: "Headings and structure"
        uitleg: "The Radar draws every heading with its level and warns when you skip a level. A logical heading structure helps everyone who scans the page or reads it with a screen reader."
      - titel: "Heading quality"
        uitleg: "Marks empty headings and headings with uninformative text such as “Go to” or “Read more”. Anyone navigating by headings should be able to tell from the heading what the section is about."
      - titel: "Sensory references"
        uitleg: "Marks references to position, colour or shape, such as “on the left”, “top right” or “the red button”, including inside alt text. Someone who cannot see the page gets nothing from those. Check that the instruction works without them."
      - titel: "List structure"
        uitleg: "Marks real lists, so you can see whether bullet points are actually marked up as lists rather than loose lines with dashes."
      - titel: "Tables"
        uitleg: "Marks tables without header cells or a caption. Header cells tell assistive software which row or column a cell belongs to. A caption gives the table a title."
      - titel: "Images and alt text"
        uitleg: "See which images have alt text, which have an empty alt attribute (alt=\"\") and which have none. Visible svg images join in too: you see their title and desc. The Radar warns about redundant words like “image of” in alt text, but leaves the judgement to you: you decide whether an image carries meaning."
      - titel: "Images off"
        uitleg: "Images are dimmed. Check whether the page still makes sense without imagery and whether the text can carry the story on its own."
      - titel: "Clickable images"
        uitleg: "Links and buttons containing an image show their accessible name. That name should describe the destination or function, not what the image looks like. Clickable images without a name are marked as errors."
      - titel: "Show accessible name"
        uitleg: "Every interactive element (links, buttons, form fields) shows its accessible name: the name a screen reader announces. Elements without a name are marked as errors."
      - titel: "Link text"
        uitleg: "Marks vague links such as “read more” and links without text. Good link text tells you on its own where you will end up."
      - titel: "All links"
        uitleg: "All links on the page in a single list in the panel, the way a screen reader announces them: just the link text, without surrounding context. Empty and vague texts stand out. Click a row to jump to that link on the page."
      - titel: "Titles of embedded frames (iframes)"
        uitleg: "Marks embedded frames (iframes), such as a video or a map, without a title. A title tells a screen reader user what is inside the frame."
      - titel: "Autocomplete on personal data"
        uitleg: "Fields asking for personal data, such as name, email address or phone number, should have an autocomplete attribute. The browser can then fill them in, which helps people with motor or cognitive disabilities, among others. The Radar shows the value and warns when it is missing or unknown."
      - titel: "Accessible names of form fields"
        uitleg: "Marks input fields without an accessible name and fields that only have a placeholder. Note: visible text next to a field only counts as its accessible name when it is linked to the field via <label for>, aria-label or aria-labelledby. A placeholder disappears as soon as you type and never counts."
      - titel: "Error messages on form fields"
        uitleg: "The Radar looks for visible error messages (via role=alert, aria-live, or a class like error/invalid) and checks whether they are linked to an input via aria-describedby or aria-errormessage. Unlinked messages are an error: a screen reader will not announce them."
      - titel: "Text contrast"
        uitleg: "Automatically marks text on a solid background with insufficient contrast. For text on a photo or gradient you measure two colours yourself with the two pickers. You immediately see the contrast ratio and whether it meets the requirement for normal and large text."
  - label: "Designer"
    checks:
      - titel: "Text contrast"
        uitleg: "Automatically marks text on a solid background with insufficient contrast. For text on a photo or gradient you measure two colours yourself with the two pickers. You immediately see the contrast ratio and whether it meets the requirement for normal and large text."
      - titel: "Contrast of borders and focus"
        uitleg: "Measures the contrast of input field borders and of the focus style (WCAG 1.4.11). The Radar briefly focuses each element and warns below 3:1, or when a visible focus style is missing entirely."
      - titel: "Links by colour alone"
        uitleg: "Finds links in running text that are distinguished from the text by colour alone (no underline) and shows the colour difference with the surrounding text. Underlining is the safest fix."
      - titel: "Grayscale (colour-blindness check)"
        uitleg: "One click turns the page grey. Check that information such as links or error messages is still recognisable without colour."
      - titel: "Dark mode"
        uitleg: "Force-applies the site's own dark mode (the prefers-color-scheme: dark styles), so you can check contrast and readability in dark mode. If the site has no dark mode styles, the Radar says so honestly."
      - titel: "Make focus visible"
        uitleg: "The Radar forces a clear focus outline. Tab through your design to see whether every interactive layer has visible focus."
      - titel: "Target size (24px)"
        uitleg: "Every clickable element shows its dimensions; elements smaller than 24 by 24 pixels get an orange mark. Note: a small target can still pass, for example a link within a sentence or a target with enough space around it. Use the marks as a starting point."
      - titel: "Gestures and mouse-only controls"
        uitleg: "Marks elements that can only be operated with a mouse or touch: script-clickable elements without keyboard focus, drag and drop without a clear alternative, and fake buttons with only a mouse cursor."
      - titel: "Resize text only (200%)"
        uitleg: "The Radar sets all text to 200% and keeps your viewport as it is, like the “Zoom text only” setting in Firefox. Check whether text disappears, overlaps or falls off screen, and whether everything still works."
      - titel: "Page zoom 200% (640 px)"
        uitleg: "Opens the page in a 640 pixel wide window. That is the same layout you get at 1280 pixels with 200% browser zoom, with the same media queries and the same collapsed components. Then zoom that window yourself to also see the text size."
      - titel: "Text spacing (1.4.12)"
        uitleg: "Applies the WCAG text spacing values. Check whether text disappears, overlaps or is cut off when a visitor increases the space between letters and lines."
      - titel: "Reflow (320 px)"
        uitleg: "Checks for horizontal scrolling at page level, marks the elements extending off screen, and opens the page in a 320 pixel wide window (WCAG 1.4.10)."
      - titel: "Images off"
        uitleg: "Images are dimmed. Check whether your design still makes sense without imagery and whether the text can carry the story on its own."
      - titel: "Automatic motion"
        uitleg: "Finds motion that starts by itself and lasts longer than 5 seconds: CSS animations, autoplay videos and marquees. The Radar also watches script-driven motion, such as carousels and tickers, for 5 seconds."
      - titel: "Ruler and guides"
        uitleg: "A horizontal and vertical guide follow your mouse and show the x and y position in pixels, so you can verify alignment and distances precisely."
  - label: "Developer"
    checks:
      - titel: "Element info on hover"
        uitleg: "Move your mouse over the page and see tag, id, class, role, accessible name, size, focusability and (where measurable) colour and contrast of each element. Also works in embedded frames from the same domain. Faster than opening the inspector for a quick check."
      - titel: "Show accessible name"
        uitleg: "Every interactive element (links, buttons, form fields) shows its accessible name: the name a screen reader announces. Elements without a name are marked as errors."
      - titel: "ARIA roles and attributes"
        uitleg: "Shows all roles and aria attributes and marks four kinds of errors: broken references to non-existent ids, unknown roles (typos), roles missing a required attribute (such as checkbox without aria-checked), and aria-hidden on focusable content."
      - titel: "Iframes (title)"
        uitleg: "Iframes without a title or aria-label stand out. A title is needed so a screen reader user knows what is inside the frame."
      - titel: "Autocomplete on personal data"
        uitleg: "Fields asking for personal data should have an autocomplete attribute with a valid value (WCAG 1.3.5). The Radar shows the value per field and warns about missing or unknown values."
      - titel: "Groups and visible labels"
        uitleg: "Fieldsets without a legend and groups (role=group) without a name are marked as errors. You also see which fields only have an aria-label and no visible label. That is sometimes fine, for example a magnifying glass icon on a search field, but usually visible text belongs there."
      - titel: "Accessible names of form fields"
        uitleg: "Marks input fields without an accessible name and fields that only have a placeholder. Visible text next to a field only counts when it is linked to the field via <label for>, aria-label or aria-labelledby."
      - titel: "Required fields"
        uitleg: "Shows which fields are marked as required for assistive software (required or aria-required) and warns about fields with an asterisk or 'required' in the label that lack this marking."
      - titel: "Error messages on form fields"
        uitleg: "The Radar looks for visible error messages (via role=alert, aria-live, or a class like error/invalid) and checks whether they are linked to an input via aria-describedby or aria-errormessage. Unlinked messages are an error: a screen reader will not announce them. Linked messages without aria-invalid=\"true\" on the field get a warning."
      - titel: "Paste blocked"
        uitleg: "Marks elements that block pasting, copying or dragging via inline code (onpaste, oncopy, oncut, ondrop). Blocked pasting forces retyping and is a barrier, for example with passwords and email confirmations. Blocks added through scripts are invisible to the Radar; also test pasting yourself."
      - titel: "Make focus visible"
        uitleg: "The Radar forces a clear focus outline on every element. Tab through the page to see whether focus is always visible and moves logically."
      - titel: "Tab order"
        uitleg: "Every focusable element gets a number in the order you reach it with Tab. Positive tabindex values jump ahead of the rest and are marked as errors, because they disturb the logical keyboard order."
      - titel: "Target size (24px)"
        uitleg: "Every clickable element shows its dimensions; elements smaller than 24 by 24 pixels get an orange mark. A small target can still pass, for example a link within a sentence."
      - titel: "Gestures and mouse-only controls"
        uitleg: "Marks elements that can only be operated with a mouse or touch: script-clickable elements without keyboard focus, drag and drop without a clear alternative, and fake buttons with only a mouse cursor."
      - titel: "Resize text only (200%)"
        uitleg: "The Radar sets all text to 200% and keeps your viewport as it is, like the “Zoom text only” setting in Firefox. Check whether text disappears, overlaps or falls off screen, and whether everything still works."
      - titel: "Page zoom 200% (640 px)"
        uitleg: "Opens the page in a 640 pixel wide window. That is the same layout you get at 1280 pixels with 200% browser zoom, with the same media queries and the same collapsed components. Then zoom that window yourself to also see the text size."
      - titel: "Text spacing (1.4.12)"
        uitleg: "Applies the WCAG text spacing values: line height, letter and word spacing and paragraph spacing. You immediately see whether text disappears, overlaps or is cut off."
      - titel: "Reflow (320 px)"
        uitleg: "Checks for horizontal scrolling at page level, marks the elements extending off screen, and opens the page in a 320 pixel wide window (WCAG 1.4.10)."
      - titel: "Text contrast"
        uitleg: "Automatically marks text on a solid background that drops below 4.5:1 (normal text) or 3:1 (large text). For text on an image or gradient you measure two colours yourself with the two pickers."
      - titel: "Contrast of borders and focus"
        uitleg: "Measures the contrast of input field borders and of the focus style (WCAG 1.4.11). The Radar briefly focuses each element and warns below 3:1, or when a visible focus style is missing entirely."
---

At the top of the panel you switch between three tabs, tuned to what you do. Each tab holds the checks that belong to that role, so you never scroll past things you do not use.

When a check finds something, previous and next buttons appear in the panel. Use them to jump along every finding on the page instead of hunting for them yourself.
