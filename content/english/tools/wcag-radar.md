---
title: "WCAG Radar"
meta_title: "WCAG Radar — 28 free accessibility checks (Editors, Designer, Developer) | Proper Access"
description: "Bookmarklet and browser extension for Chrome and Firefox, with three tabs: Editors, Designer and Developer. Shows live, on any page, whether alt text, headings, contrast, focus, ARIA and tab order hold up. 28 of the 45 checks are free, the rest come with a licence."
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
hero_sub: "A button in your bookmarks bar, or an extension for Chrome and Firefox, that shows how any page is doing on accessibility. 28 of the 45 checks are free and need no account. Headings, alt text, contrast, focus, ARIA and tab order, visible right on your own screen. The radar runs entirely in your browser: nothing is sent and nothing is stored."
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
      - titel: "Page title"
        uitleg: "Shows the title of the page. A clear, unique title helps visitors tell tabs and search results apart."
        wcag: "/en/blog/wcag-2-4-2-page-titled/"
        onderwerp: "page titles"
      - titel: "Styles off (reading order)"
        uitleg: "One click turns off all styling. You then see the bare order in which a screen reader reads the page. Does your story still flow?"
        wcag: "/en/blog/wcag-1-3-2-meaningful-sequence/"
        onderwerp: "meaningful sequence"
      - titel: "Reading order (overview)"
        uitleg: "The page as a clickable list, the way assistive software walks through it: headings, landmarks, links, buttons and fields in document order. See whether the story makes sense, and click straight through to any element."
        wcag: "/en/blog/wcag-1-3-2-meaningful-sequence/"
        onderwerp: "meaningful sequence"
        pro: true
      - titel: "Show hidden parts"
        uitleg: "See which elements are hidden and why (display:none, visibility:hidden, the hidden attribute or aria-hidden). Handy for spotting content that is accidentally invisible, or read out twice."
        pro: true
      - titel: "Headings and structure"
        uitleg: "The Radar draws every heading with its level and warns when you skip a level. A logical heading structure helps everyone who scans the page or reads it with a screen reader."
        wcag: "/en/blog/wcag-1-3-1-info-and-relationships/"
        onderwerp: "headings"
      - titel: "Heading quality"
        uitleg: "Marks empty headings and headings with uninformative text such as “Go to” or “Read more”. Anyone navigating by headings should be able to tell from the heading what the section is about."
        wcag: "/en/blog/wcag-2-4-6-headings-and-labels/"
        onderwerp: "headings and labels"
        pro: true
      - titel: "References to place, colour or shape"
        uitleg: "Marks references to position, colour or shape, such as “on the left”, “top right” or “the red button”, including inside alt text. Someone who cannot see the page gets nothing from those. Check that the instruction works without them."
        wcag: "/en/blog/wcag-1-3-3-sensory-characteristics/"
        onderwerp: "sensory characteristics"
      - titel: "Line breaks used as layout"
        uitleg: "Two blank lines in a row look like space between two paragraphs. To screen reader software it is one long paragraph: you cannot move through it paragraph by paragraph and the short pause between paragraphs is gone. Lines that start with a dash or a bullet are a list in disguise, so they do not count as a list either. The Radar flags both. Single line breaks, as in an address or a poem, are left alone."
        wcag: "/en/blog/wcag-1-3-1-info-and-relationships/"
        onderwerp: "info and relationships"
        pro: true
      - titel: "Strong emphasis (strong)"
        uitleg: "The Radar marks every piece of text with strong emphasis, the strong element. Strong emphasis means: this matters. It is not a way to make letters thicker, that is a styling choice. When a whole sentence or a whole paragraph sits inside it, the emphasis lands on everything and therefore on nothing, so those get flagged. Save emphasis for the word or few words that carry the point."
        wcag: "/en/blog/wcag-1-3-1-info-and-relationships/"
        onderwerp: "info and relationships"
        pro: true
      - titel: "Emphasis (em)"
        uitleg: "The Radar marks every piece of text with emphasis, the em element. Emphasis puts the stress on a word, the way your voice does in conversation. It is not a way to slant letters, that is styling. A whole sentence or a whole paragraph in emphasis gets flagged, because then you can no longer hear where the stress falls."
        wcag: "/en/blog/wcag-1-3-1-info-and-relationships/"
        onderwerp: "info and relationships"
        pro: true
      - titel: "List structure"
        uitleg: "Marks real lists, so you can see whether bullet points are actually marked up as lists rather than loose lines with dashes."
        wcag: "/en/blog/wcag-1-3-1-info-and-relationships/"
        onderwerp: "lists"
      - titel: "Images and alt text"
        uitleg: "See which images have alt text, which have an empty alt attribute (alt=\\\"\\\") and which have none. Visible svg images join in too: you see their title and desc. The Radar warns about redundant words like “image of” in alt text, but leaves the judgement to you: you decide whether an image carries meaning."
        wcag: "/en/blog/wcag-1-1-1-non-text-content/"
        onderwerp: "alt text"
      - titel: "Clickable images"
        uitleg: "Links and buttons containing an image show their accessible name. That name should describe the destination or function, not what the image looks like. Clickable images without a name are marked as errors."
        wcag: "/en/blog/wcag-4-1-2-name-role-value/"
        onderwerp: "name, role and value"
      - titel: "Images off"
        uitleg: "Images are dimmed. Check whether your design still makes sense without imagery and whether the text can carry the story on its own."
        wcag: "/en/blog/wcag-1-1-1-non-text-content/"
        onderwerp: "alt text"
      - titel: "Tables"
        uitleg: "Marks tables without header cells or a caption. Header cells tell assistive software which row or column a cell belongs to. A caption gives the table a title."
        wcag: "/en/blog/wcag-1-3-1-tables/"
        onderwerp: "tables"
        pro: true
      - titel: "Names of links and buttons"
        uitleg: "Every link, button and form field has a name that screen reader software reads out. Usually that is simply the text you can see, but not always: for a button with only an icon, a magnifying glass say, the name sits in the code. The Radar puts that name on screen for every element. That shows you whether someone who cannot see the page gets the same information you do."
        wcag: "/en/blog/wcag-4-1-2-name-role-value/"
        onderwerp: "accessible names"
      - titel: "Link text"
        uitleg: "Marks vague links such as “read more” and links without text. Good link text tells you on its own where you will end up."
        wcag: "/en/blog/wcag-2-4-4-link-purpose-in-context/"
        onderwerp: "link text"
      - titel: "All links"
        uitleg: "All links on the page in a single list in the panel, the way a screen reader announces them: just the link text, without surrounding context. Empty and vague texts stand out. Click a row to jump to that link on the page."
        wcag: "/en/blog/wcag-2-4-4-link-purpose-in-context/"
        onderwerp: "link text"
        pro: true
      - titel: "Titles on embedded videos and maps"
        uitleg: "Marks embedded frames (iframes), such as a video or a map, without a title. A title tells a screen reader user what is inside the frame."
        wcag: "/en/blog/wcag-4-1-2-name-role-value/"
        onderwerp: "iframe titles"
        pro: true
      - titel: "Page in shades of grey"
        uitleg: "One click turns the page grey. Check that information such as links or error messages is still recognisable without colour."
        wcag: "/en/blog/wcag-1-4-1-use-of-colour/"
        onderwerp: "use of colour"
      - titel: "Text contrast"
        uitleg: "Automatically marks text on a solid background that drops below 4.5:1 (normal text) or 3:1 (large text). For text on an image or gradient you measure two colours yourself with the two pickers."
        wcag: "/en/blog/wcag-1-4-3-contrast-minimum/"
        onderwerp: "text contrast"
      - titel: "Contrast of input fields and focus"
        uitleg: "This is not about text but about the things around it: the border of an input field, and the outline that appears when you move through the page with the Tab key. Those have to stand out from the background too, otherwise you cannot see where to type or where you are. The Radar walks the page and reports when the difference is too small, or when no outline appears at all."
        wcag: "/en/blog/wcag-1-4-11-non-text-contrast/"
        onderwerp: "non-text contrast"
      - titel: "Page language"
        uitleg: "See whether the page language is set and which parts have their own language. The right language makes a screen reader pronounce words correctly."
        wcag: "/en/blog/wcag-3-1-1-language-of-page/"
        onderwerp: "the language of the page"
      - titel: "Filling in details automatically"
        uitleg: "Fields asking for personal data should have an autocomplete attribute with a valid value (WCAG 1.3.5). The Radar shows the value per field and warns about missing or unknown values."
        wcag: "/en/blog/wcag-1-3-5-identify-input-purpose/"
        onderwerp: "input purpose"
        pro: true
      - titel: "Labels on input fields"
        uitleg: "Every input field needs a label: the word next to it that says what to fill in, such as “Email address”. Screen reader software announces that label as soon as someone lands in the field. Without one, all they hear is “input field” and they have no idea what to type. The Radar flags those fields in red."
        wcag: "/en/blog/wcag-3-3-2-labels-or-instructions/"
        onderwerp: "labels on form fields"
      - titel: "Error messages on form fields"
        uitleg: "The Radar looks for visible error messages (via role=alert, aria-live, or a class like error/invalid) and checks whether they are linked to an input via aria-describedby or aria-errormessage. Unlinked messages are an error: a screen reader will not announce them. Linked messages without aria-invalid=\\\"true\\\" on the field get a warning."
        wcag: "/en/blog/wcag-3-3-1-error-identification/"
        onderwerp: "error messages"
  - label: "Designer"
    checks:
      - titel: "Text contrast"
        uitleg: "Automatically marks text on a solid background that drops below 4.5:1 (normal text) or 3:1 (large text). For text on an image or gradient you measure two colours yourself with the two pickers."
        wcag: "/en/blog/wcag-1-4-3-contrast-minimum/"
        onderwerp: "text contrast"
      - titel: "Contrast of borders and focus"
        uitleg: "Measures the contrast of input field borders and of the focus style (WCAG 1.4.11). The Radar briefly focuses each element and warns below 3:1, or when a visible focus style is missing entirely."
        wcag: "/en/blog/wcag-1-4-11-non-text-contrast/"
        onderwerp: "non-text contrast"
      - titel: "Links by colour alone"
        uitleg: "Finds links in running text that are distinguished from the text by colour alone (no underline) and shows the colour difference with the surrounding text. Underlining is the safest fix."
        wcag: "/en/blog/wcag-1-4-1-use-of-colour/"
        onderwerp: "use of colour"
      - titel: "Grayscale (colour-blindness check)"
        uitleg: "One click turns the page grey. Check that information such as links or error messages is still recognisable without colour."
        wcag: "/en/blog/wcag-1-4-1-use-of-colour/"
        onderwerp: "use of colour"
      - titel: "Dark mode"
        uitleg: "Force-applies the site's own dark mode (the prefers-color-scheme: dark styles), so you can check contrast and readability in dark mode. If the site has no dark mode styles, the Radar says so honestly."
        pro: true
      - titel: "Make focus visible"
        uitleg: "The Radar forces a clear focus outline on every element. Tab through the page to see whether focus is always visible and moves logically."
        wcag: "/en/blog/wcag-2-4-7-focus-visible/"
        onderwerp: "visible focus"
      - titel: "Target size (24px)"
        uitleg: "Every clickable element shows its dimensions; elements smaller than 24 by 24 pixels get an orange mark. A small target can still pass, for example a link within a sentence."
        wcag: "/en/blog/wcag-2-5-8-target-size-minimum/"
        onderwerp: "target size"
        pro: true
      - titel: "Gestures and mouse-only controls"
        uitleg: "Marks elements that can only be operated with a mouse or touch: script-clickable elements without keyboard focus, drag and drop without a clear alternative, and fake buttons with only a mouse cursor."
        wcag: "/en/blog/wcag-2-1-1-keyboard/"
        onderwerp: "keyboard access"
        pro: true
      - titel: "Resize text only (200%)"
        uitleg: "The Radar sets all text to 200% and keeps your viewport as it is, like the “Zoom text only” setting in Firefox. Check whether text disappears, overlaps or falls off screen, and whether everything still works."
        wcag: "/en/blog/wcag-1-4-4-resize-text/"
        onderwerp: "resizing text"
      - titel: "Page zoom 200%"
        uitleg: "Opens the page in a 640 pixel wide window. That is the same layout you get at 1280 pixels with 200% browser zoom, with the same media queries and the same collapsed components. Then zoom that window yourself to also see the text size."
        wcag: "/en/blog/wcag-1-4-4-resize-text/"
        onderwerp: "resizing text"
      - titel: "Zoom blocked in the code"
        uitleg: "Reads the page's viewport meta tag. If it carries user-scalable=no or a maximum-scale below 2, people cannot zoom to 200 percent on a phone (WCAG 1.4.4). The check names the value that blocks it; that value can go, the tag itself can stay."
        wcag: "/en/blog/wcag-1-4-4-resize-text/"
        onderwerp: "resizing text"
        pro: true
      - titel: "Text spacing (1.4.12)"
        uitleg: "Applies the WCAG text spacing values: line height, letter and word spacing and paragraph spacing. You immediately see whether text disappears, overlaps or is cut off."
        wcag: "/en/blog/wcag-1-4-12-text-spacing/"
        onderwerp: "text spacing"
      - titel: "Reflow (320 px)"
        uitleg: "Checks for horizontal scrolling at page level, marks the elements extending off screen, and opens the page in a 320 pixel wide window (WCAG 1.4.10)."
        wcag: "/en/blog/wcag-1-4-10-reflow/"
        onderwerp: "reflow"
      - titel: "Images off"
        uitleg: "Images are dimmed. Check whether your design still makes sense without imagery and whether the text can carry the story on its own."
        wcag: "/en/blog/wcag-1-1-1-non-text-content/"
        onderwerp: "alt text"
      - titel: "Automatic motion"
        uitleg: "Finds motion that starts by itself and lasts longer than 5 seconds: CSS animations, autoplay videos and marquees. The Radar also watches script-driven motion, such as carousels and tickers, for 5 seconds."
        wcag: "/en/blog/wcag-2-2-2-pause-stop-hide/"
        onderwerp: "automatic motion"
        pro: true
      - titel: "Ruler and guides"
        uitleg: "A horizontal and vertical guide follow your mouse and show the x and y position in pixels, so you can verify alignment and distances precisely."
  - label: "Developer"
    checks:
      - titel: "Element info on hover"
        uitleg: "Move your mouse over the page and see tag, id, class, role, accessible name, size, focusability and (where measurable) colour and contrast of each element. Also works in embedded frames from the same domain. Faster than opening the inspector for a quick check."
      - titel: "Show accessible name"
        uitleg: "Every interactive element (links, buttons, form fields) shows its accessible name: the name a screen reader announces. Elements without a name are marked as errors."
        wcag: "/en/blog/wcag-4-1-2-name-role-value/"
        onderwerp: "accessible names"
      - titel: "ARIA roles and attributes"
        uitleg: "Shows all roles and aria attributes and marks four kinds of errors: broken references to non-existent ids, unknown roles (typos), roles missing a required attribute (such as checkbox without aria-checked), and aria-hidden on focusable content."
        wcag: "/en/blog/wcag-4-1-2-name-role-value/"
        onderwerp: "name, role and value"
      - titel: "Iframes (title)"
        uitleg: "Iframes without a title or aria-label stand out. A title is needed so a screen reader user knows what is inside the frame."
        wcag: "/en/blog/wcag-4-1-2-name-role-value/"
        onderwerp: "iframe titles"
      - titel: "Autocomplete on personal data"
        uitleg: "Fields asking for personal data should have an autocomplete attribute with a valid value (WCAG 1.3.5). The Radar shows the value per field and warns about missing or unknown values."
        wcag: "/en/blog/wcag-1-3-5-identify-input-purpose/"
        onderwerp: "input purpose"
        pro: true
      - titel: "Groups and visible labels"
        uitleg: "Fieldsets without a legend and groups (role=group) without a name are marked as errors. You also see which fields only have an aria-label and no visible label. That is sometimes fine, for example a magnifying glass icon on a search field, but usually visible text belongs there."
        wcag: "/en/blog/wcag-3-3-2-labels-or-instructions/"
        onderwerp: "labels on form fields"
      - titel: "Accessible names of form fields"
        uitleg: "Marks input fields without an accessible name and fields that only have a placeholder. Visible text next to a field only counts when it is linked to the field via <label for>, aria-label or aria-labelledby."
        wcag: "/en/blog/wcag-3-3-2-labels-or-instructions/"
        onderwerp: "labels on form fields"
      - titel: "Required fields"
        uitleg: "Shows which fields are marked as required for assistive software (required or aria-required) and warns about fields with an asterisk or 'required' in the label that lack this marking."
        wcag: "/en/blog/wcag-3-3-2-labels-or-instructions/"
        onderwerp: "labels on form fields"
      - titel: "Error messages on form fields"
        uitleg: "The Radar looks for visible error messages (via role=alert, aria-live, or a class like error/invalid) and checks whether they are linked to an input via aria-describedby or aria-errormessage. Unlinked messages are an error: a screen reader will not announce them. Linked messages without aria-invalid=\\\"true\\\" on the field get a warning."
        wcag: "/en/blog/wcag-3-3-1-error-identification/"
        onderwerp: "error messages"
      - titel: "Paste blocked"
        uitleg: "Marks elements that block pasting, copying or dragging via inline code (onpaste, oncopy, oncut, ondrop). Blocked pasting forces retyping and is a barrier, for example with passwords and email confirmations. Blocks added through scripts are invisible to the Radar; also test pasting yourself."
        wcag: "/en/blog/wcag-3-3-8-accessible-authentication/"
        onderwerp: "accessible authentication"
        pro: true
      - titel: "Make focus visible"
        uitleg: "The Radar forces a clear focus outline on every element. Tab through the page to see whether focus is always visible and moves logically."
        wcag: "/en/blog/wcag-2-4-7-focus-visible/"
        onderwerp: "visible focus"
      - titel: "Tab order"
        uitleg: "Every focusable element gets a number in the order you reach it with Tab. Positive tabindex values jump ahead of the rest and are marked as errors, because they disturb the logical keyboard order."
        wcag: "/en/blog/wcag-2-4-3-focus-order/"
        onderwerp: "focus order"
        pro: true
      - titel: "Target size (24px)"
        uitleg: "Every clickable element shows its dimensions; elements smaller than 24 by 24 pixels get an orange mark. A small target can still pass, for example a link within a sentence."
        wcag: "/en/blog/wcag-2-5-8-target-size-minimum/"
        onderwerp: "target size"
        pro: true
      - titel: "Gestures and mouse-only controls"
        uitleg: "Marks elements that can only be operated with a mouse or touch: script-clickable elements without keyboard focus, drag and drop without a clear alternative, and fake buttons with only a mouse cursor."
        wcag: "/en/blog/wcag-2-1-1-keyboard/"
        onderwerp: "keyboard access"
        pro: true
      - titel: "Resize text only (200%)"
        uitleg: "The Radar sets all text to 200% and keeps your viewport as it is, like the “Zoom text only” setting in Firefox. Check whether text disappears, overlaps or falls off screen, and whether everything still works."
        wcag: "/en/blog/wcag-1-4-4-resize-text/"
        onderwerp: "resizing text"
      - titel: "Page zoom 200%"
        uitleg: "Opens the page in a 640 pixel wide window. That is the same layout you get at 1280 pixels with 200% browser zoom, with the same media queries and the same collapsed components. Then zoom that window yourself to also see the text size."
        wcag: "/en/blog/wcag-1-4-4-resize-text/"
        onderwerp: "resizing text"
      - titel: "Zoom blocked in the code"
        uitleg: "Reads the page's viewport meta tag. If it carries user-scalable=no or a maximum-scale below 2, people cannot zoom to 200 percent on a phone (WCAG 1.4.4). The check names the value that blocks it; that value can go, the tag itself can stay."
        wcag: "/en/blog/wcag-1-4-4-resize-text/"
        onderwerp: "resizing text"
        pro: true
      - titel: "Text spacing (1.4.12)"
        uitleg: "Applies the WCAG text spacing values: line height, letter and word spacing and paragraph spacing. You immediately see whether text disappears, overlaps or is cut off."
        wcag: "/en/blog/wcag-1-4-12-text-spacing/"
        onderwerp: "text spacing"
      - titel: "Reflow (320 px)"
        uitleg: "Checks for horizontal scrolling at page level, marks the elements extending off screen, and opens the page in a 320 pixel wide window (WCAG 1.4.10)."
        wcag: "/en/blog/wcag-1-4-10-reflow/"
        onderwerp: "reflow"
      - titel: "Text contrast"
        uitleg: "Automatically marks text on a solid background that drops below 4.5:1 (normal text) or 3:1 (large text). For text on an image or gradient you measure two colours yourself with the two pickers."
        wcag: "/en/blog/wcag-1-4-3-contrast-minimum/"
        onderwerp: "text contrast"
      - titel: "Contrast of borders and focus"
        uitleg: "Measures the contrast of input field borders and of the focus style (WCAG 1.4.11). The Radar briefly focuses each element and warns below 3:1, or when a visible focus style is missing entirely."
        wcag: "/en/blog/wcag-1-4-11-non-text-contrast/"
        onderwerp: "non-text contrast"
---

At the top of the panel you switch between three tabs, tuned to what you do. Each tab holds the checks that belong to that role, so you never scroll past things you do not use.

When a check finds something, previous and next buttons appear in the panel. Use them to jump along every finding on the page instead of hunting for them yourself.

The Radar holds 45 checks. 28 of them are free and will stay that way, with no account. The other 17 are marked "Licence": they sit in the panel but only run once you have one. Saving a report of your test session belongs to that group too. What a licence costs is on [the WCAG Radar page at WCAG Toolkit](https://wcagtoolkit.com/wcag-radar#licentie).
