# WCAG Accessibility Issues Reference

This list contains 588 accessibility issues organized by WCAG 2.2 Success Criterion.
Each issue describes what to look for when auditing a web page.

---

## SC 1.1.1 Non-text Content

- **Arrow icons have no text alternative** (Dynamic Content > Accordion)
  On this page, sections with hidden content are present. The arrow icon that indicates the presence of the hidden content lacks a text alternative, preventing screen readers from conveying the presence of hidden content. Since this information isn't available via `aria-expanded` or hidden text, a text alternative must be provided.

- **Dots have **no (clear)** text alternative** (Dynamic Content > Carousel)
  On this page, the dot navigation used for scrolling to different sections has images of dots without proper alternative text. The current alternative text (for example, " Slide 1 ", " Slide 2 ") does not accurately describe the function of these interactive elements.

- **No text alternative for text on images** (Dynamic Content > Carousel)
  On this page a carousel under the heading " TEXT " contains images with embedded text, but this text is not included into the images' text alternatives.

Text presented as an image is inaccessible to many users, as it cannot be resized, styled, or otherwise adjusted to meet individual needs.

- **No text alternatives for images in a carousel** (Dynamic Content > Carousel)
  On this page a carousel under " TEXT " contains images that lack text alternatives.

Informative images require text alternatives so that screen readers can convey the image's information or function to visually impaired users.

- **Decorative icon is not hidden from assistive technology** (Images and Visual Design > Icons)
  On this page there is a purely decorative icon that is exposed to screen readers. Because the icon carries no informational value, it creates unnecessary noise for screen reader users, making the page harder to navigate. Decorative elements should be hidden from assistive technology.

- **Icon font has no accessible name** (Images and Visual Design > Icons)
  On this page there is an icon implemented via an icon font ( DESCRIBE ) that has no accessible name. Without an `aria-label`, `aria-labelledby`, or visually hidden text, screen readers cannot convey the meaning or function of this icon to users. In some cases, the icon font's Unicode character may be read aloud, resulting in incomprehensible output.

- **Informative icon has no text alternative** (Images and Visual Design > Icons)
  On this page there is an informative icon ( DESCRIBE ) that conveys meaning to sighted users but has no text alternative. Screen reader users cannot perceive the information this icon communicates. All non-decorative icons must have a text alternative that conveys the same meaning as the visual element.

- **A decorative image is not hidden from screen readers** (Images and Visual Design > Images)
  On this page, under the " HEADING", a decorative image is present with the text alternative " TEXT ". Decorative images serve no informational purpose and should be hidden from screen readers.

- **Alt text contains unreadable characters.** (Images and Visual Design > Images)
  On this page the text alternative " TEXT " contains non-readable characters ( for example, dashes or other symbols ).

Alt texts should not contain symbols such as dashes and underscores. These characters make the alt text unclear.

- **Alt text of an image contains redundant characters** (Images and Visual Design > Images)
  An informative image under the heading “HEADING” has a text alternative which currently contains " TEXT ". There are redundant characters present in this text. These characters make the text difficult to understand.

- **Complex image is missing text alternative** (Images and Visual Design > Images)
  On this page, within the section below " HEADING ", a complex image is present with the text alternative " TEXT ".

Complex images, like infographics or schematics, require a good description.

- **Decorative image is not hidden from screen readers** (Images and Visual Design > Images)
  On this page, under the " HEADING ", a decorative image is present, and its `title` element contains the text " TEXT ". Decorative images convey no meaningful information and should be hidden from screen readers.

- **Icon of a PDF has no text alternative** (Images and Visual Design > Images)
  On this page, a link with the text " TEXT " includes a PDF icon. However, the icon lacks alternative text, so screen reader users are unaware that the link points to a PDF document. This information is important and should be provided in an accessible format.

- **Icon of a new browser tab has no text alternative** (Images and Visual Design > Images)
  On this page, a link with the text " TEXT " includes an icon indicating that it opens in a new browser tab. This icon lacks alternative text, so screen reader users are unaware of this behavior. Information about opening links in new tabs/windows should be provided in an accessible manner.

- **Image has no text alternative (`alt` attribute is missing)** (Images and Visual Design > Images)
  On page URL an image is present without an alt attribute. See the image under the heading "HEADING" .

- **Informative image is missing a meaningful text alternative** (Images and Visual Design > Images)
  On this page, under the " HEADING " section, an informative image is present with the alternative text " XXXX ". This text is [ inadequate in describing the image] [repeats adjacent text] [is not unique]. Informative images require meaningful `alt` text that accurately and succinctly conveys the image's key information.

- **Solution:** (Images and Visual Design > Images)
  Op deze pagina staat een kaart zonder een tekstalternatief. Een bezoeker die een schermlezer gebruikt heeft weet niet wat er staat.

- **Text alternative is hidden from assistive technology** (Images and Visual Design > Images)
  Under the heading "HEADING" , an informative image has a text alternative, provided via a DESCRIBE , but this text is hidden from the screen reader.

However, this text is hidden from screen readers, using CSS properties like `display: none` or `visibility: hidden`. These CSS properties hide content not only visually but also from screen readers. To ensure accessibility, the text alternative must be made available to screen readers.

- **Text alternative repeats other text** (Images and Visual Design > Images)
  On page URL , under the heading " HEADING ", images are present. The text alternative of the image duplicate the text next to the image .

Since these images don't provide any additional information beyond what's already present on the page, they can be considered decorative.

- **`Alt`-attribute is empty by an informative image** (Images and Visual Design > Images)
  On this page, under the " HEADING " section, an informative image is missing a text alternative. [The alt-attribute is empty]. If an informative image is included using an img element, the alt attribute *cannot* be empty.

- **`Object` / `canvas` element does not contain any text** (Images and Visual Design > Images)
  On this page an object/canvas element is present but the element lacks a text alternative.

However, this `object` element does not contain any text. Assistive technologies receive no information about the content of this object.

- **text alternative > 150 chars (Advice)** (Images and Visual Design > Images)
  De alternatieve tekst moet beknopt zijn en alleen essentiële informatie bevatten. Deze tekst wordt in een adem voorgelezen en kan niet worden gepauzeerd of teruggespeeld vanaf een bepaald moment. Het advies is om deze tekst niet langer dan 150 karakters te laten zijn. Als een gedetailleerdere beschrijving nodig is, kan deze beter apart worden geplaatst, bijvoorbeeld via tekst op de pagina.

- **Assistive technology does not know if an accordion is open or closed** (Links and Navigation > Buttons)
  On this page, under " TEXT ", an accordion uses an arrow icon to indicate whether the section is open or closed. While the icon's position visually conveys this state, it is not programmatically accessible to screen reader users.

- **Button consists only of image, but there is no alternative text** (Links and Navigation > Buttons)
  In the top menu, a clickable icon lacks a text alternative. When a button consists only of an image, the image's alternative text must desscribe the function of the button.

- **Button consists solely of image, but alternative text does not describe function** (Links and Navigation > Buttons)
  On this page, the button with a DESCRIBE icon has alternative text that describes the image's visual content instead of its function. When a button consists only of an image, the image's alternative text should describe the button's *function* ( for example, "Open the menu", "Submit the form") rather than just the visual content.

- **Function of button changes, but alt text does not change with it** (Links and Navigation > Buttons)
  On this page, a clickable icon has has the text alternative " ALTTEXT ". When clicked, the icon changes, and the button's function changes to ACTION . However, the alt text does not update to reflect this change. When a button's function changes, its accessible name (in this case, provided by the alt text) *must* also be updated to accurately describe the new function.

- **Image is a link but has no text alternative** (Links and Navigation > Links)
  On this page, under the heading " HEADING ", articles consist of linked images with empty alt attributes and linked article headings leading to the same destination. This redundancy creates an accessibility issue, as the linked images lack meaningful link text (violating WCAG Success Criterion 2.4.4).

- **Logo does not have a text alternative ( the `alt` attribute is missing)** (Links and Navigation > Logo / Skiplink)
  The logo at the top of the website has no text alternative. The alt attribute is empty / is missing.

Logos are informative images and require a text alternative (the alt text). The alt text should contain the full text displayed in the logo. This ensures that visitors who cannot see the image still understand its content.

- **Visible text of he logo is not present in the alternative text** (Links and Navigation > Logo / Skiplink)
  The logo at the top of the website displays the full text " TEXT ", but the text alternative (the alt text) is only " ALT ". The alt text must contain *all* the visible text in the logo to ensure that visitors who cannot see the image receive the same information.

- **Submenu arrows have no text alternative** (Links and Navigation > Navigation)
  In the main menu, some links have arrow icons to indicate submenus, but these icons lack alternative text. Since the arrows convey information ("submenu present"), this information must be accessible to all visitors, including those who cannot see the images.

- **The separator between breadcrumb navigation items is read by screen readers** (Links and Navigation > Navigation)
  On this page, the breadcrumb navigation uses decorative icons as separators between links. However, these icons are not hidden from screen readers, causing them to be read aloud, which is disruptive and unhelpful. Decorative elements that serve no informational purpose should be hidden from screen readers.

- **Search icon has an incorrect text alternative** (Links and Navigation > Search)
  <Buttons_422674433.html#SC-1.1.1-clickable-icon%2C--alt-text-does-not-describe-the-function>

- **Search icon has no text alternative** (Links and Navigation > Search)
  <Buttons_422674433.html#SC-1.1.1-Clickable-icon-has-no-alt-text>

- **Multimedia has no textual introduction on the page** (Multimedia > Video)
  On this page, a video is embedded without any accompanying textual introduction. Furthermore, the `title` attribute of the iframe is empty.

When multimedia content, such as a video, is included on a page, a brief textual description (for example, a heading or paragraph) is required to introduce the video's content. This text serves as a text alternative, informing users about the video's subject matter.

- **Decorative images are added via figure tags** (PDF > Images)
  On page NUMBER of this PDF document, decorative image (s) is/are present, incorrectly tagged as figures without descriptions. See also pages NUMBER and NUMBER.

The Figure tag is intended for informative images and requires a description.

- **Decorative images have automatically generated alt text** (PDF > Images)
  In this PDF document, decorative image (s) are incorrectly tagged as figures with automatically generated descriptions. See pages X and X .

These images do not add any information to the document. Replace the `figure` tags with artifacts.

- **Informative image added via figure tag lacks text alternative** (PDF > Images)
  This PDF document contains informative images lacking text alternatives (alt-text). See pages X and X .

Images tagged as "figure" must always include a description (alt-text), as this tag is reserved for informative images. Without alt text, screen readers cannot convey the image's content to users. Currently, only "image" is announced, potentially misleading visually impaired users into thinking they are missing crucial information.

- **Informative image is placed as background image** (PDF > Images)
  Page X of this PDF document contains a logo as an artefact. Images marked as artefacts are not accessible to screen readers, making the information within them unavailable to blind and visually impaired users.

- **Informative images have automatically generated descriptions** (PDF > Images)
  In this PDF document on page X , informative image (s) are present which are added via a figure tag and have automatically generated descriptions. See image on page X with description “ TEXT ”.

- **Text alternative of images is not correct** (PDF > Images)
  This PDF document contains informative images with *incorrect* text alternatives. See pages X and X for examples.

Images tagged as figure must always have accurate and meaningful descriptions (`alt` text). This tag is reserved for informative images, and without proper alt text, screen readers cannot effectively convey the image's content to users. Inaccurate or insufficient alt text can be just as problematic as missing alt text, potentially misleading or confusing visually impaired users.

- **CAPTCHA has only one way to determine if someone is a human and not a robot** (Specific Components > CAPTCHA)
  On this page there is a form with CAPTCHA. Only a visual test is used to verify if someone is human and not a robot. This is not accessible for people who rely on assistive technology. However, providing a text alternative to the images doesn’t solve the issue, as robots can also read it.

- **CAPTCHA images have no text alternative** (Specific Components > CAPTCHA)
  On page URL , hCaptcha is used. There is no alternative to the images in the CAPTCHA. Also, the website does not currently provide an accessible alternative to the captcha in its entirety. For this reason, the captcha itself must be fully accessible. It is currently not. The text “click any image with...” does make the purpose of the images clear, but that is not enough.

- **Intro: captcha does not have an accessible aternative** (Specific Components > CAPTCHA)
  Op deze pagina wordt een CAPTCHA gebruikt in het formulier. Deze CAPTCHA bestaat uit een afbeelding met tekst die verandert bij het vernieuwen van de pagina. De alternatieve tekst van de afbeelding is alleen “ Image CAPTCHA ” en deze tekst blijft de hele tijd hetzelfde. Deze widget is dus volledig afhankelijk van visuele informatie, maar er is geen toegankelijke alternatieve oplossing. Daarnaast ontbreekt de mogelijkheid om de CAPTCHA over te slaan. Het is belangrijk om deze CAPTCHA toegankelijk te maken voor alle bezoekers.

- **Intro: exception does not apply** (Specific Components > CAPTCHA)
  De uitzondering voor CAPTCHA geldt voor deze website niet. Je moet hiervoor namelijk een alternatief bieden dat niet afhankelijk is van visuele informatie. Op de website zelf is dit alternatief er niet. Ook het alternatief via de website van hCaptcha kunnen we niet goedkeuren, omdat het proces van aanmelden en inloggen bij hCaptcha nog niet helemaal toegankelijk is.

- **Alternative text of the logo is not sufficient** (Specific Components > Cookie Banners)
  In the cookie banner a logo with the alternative text “[logo] - opens in a new window” is present. This is not a good alternative text for a logo.

The text alternative does not indicate clearly enough what is on the image. Change this to “Logo Cookiebot,” for example. The text alternative does not properly indicate where the link goes and does not contain all visible text. See also success criteria 2.4.4, 2.5.3 and 3.1.2.

- **Different icons have the same alternative text** (Specific Components > Cookie Banners)
  At the bottom of the homepage, there is a button to open the cookie settings. This button opens a window with a list of preferences. They represent different statuses, but the alternative text for both is “consent given”.

- **Not all visible text is in the alt text of the logo** (Specific Components > Cookie Banners)
  In the cookie banner there is a logo with the text "Powered by Cookiebot by Usercentrics". The alternative text for this image is "TEXT". Not all visible text is included in the alt text, but it should be.

- **No text alternative for PowerBI visualisations** (Specific Components > Data Visualisation)
  On several pages in the sample, there are iframes with Power BI visualizations that do not provide a text alternative. As a result, blind users are excluded from accessing this information. While most of these visualizations include a table that makes the information more accessible, this table is not directly visible as an accessible alternative. Not every user knows where to find it.

- **QR code has no text alternative** (Specific Components > QR Code)
  On this page a QR code is displayed as an image without a text alternative. A QR code conveys information (typically a URL or identifier) that is completely inaccessible to users who cannot see the image, including screen reader users and users with low vision.

- **Icon as label, no text alternative** (User Input and Forms > Labels)
  This page contains a form where the input field uses an icon as its label. This icon lacks a text alternative, making the information it conveys inaccessible to screen reader users. Icons used as labels must have associated text alternatives so that assistive technologies can communicate the icon's meaning to users.

## SC 1.2.1 Audio-only and Video-only (Prerecorded)

- **Audio-only content has no text transcript** (Multimedia > Audio)
  On this page there is a prerecorded audio-only file ( DESCRIBE ) that has no text transcript available. Users who are deaf or hard of hearing cannot perceive the audio content. A text transcript provides a full alternative that ensures all users can access the information presented in the audio file.

- **Audio file without a text alternative** (Multimedia > Video)
  This page features an audio file/podcast without a transcript. Audio-only content is inaccessible to users with auditory disabilities. Deaf or hard-of-hearing individuals cannot access the audio, necessitating an alternative.

- **Silent video has no transcript** (Multimedia > Video)
  This page features a silent instructional video, which is inaccessible to blind users.

## SC 1.2.2 Captions (Prerecorded)

- **Automatically generated captions** (Multimedia > Video)
  This page contains a video with a voiceover. While captions are present, they are automatically generated and therefore inaccurate. Videos with spoken content require accurate captions to be accessible to users with auditory disabilities. These captions must precisely match the spoken words in the video. Because the automatically generated captions contain errors and misinterpretations of the spoken word, they fail to meet this accessibility requirement.

- **Video has captions in another languge** (Multimedia > Video)
  In the video on this page, the spoken language is LANGUAGE , but the captions are in LANGUAGE .

- **Video has no captions** (Multimedia > Video)
  This page features a video with spoken words but captions are missing. Captions are essential for deaf and hard-of-hearing users to access the video's content.

## SC 1.2.3 Audio Description or Media Alternative (Prerecorded)

- **Visual information in the video is not accessible** (Multimedia > Video)
  On this page, a video is presented under the heading "TEXT" . The video contains text and logos at various points (for example, around 0:00 ). However, neither a media alternative nor an audio description is provided. This video contains visual information (text and logos) that is inaccessible to blind users.

## SC 1.2.5 Audio Description (Prerecorded)

- **Audio description is missing** (Multimedia > Video)
  This video on this page fails Success Criterion 1.2.5, which requires audio description. Audio description is required because there is sufficient space within the existing audio track.

## SC 1.3.1 Info and Relationships

- **Heading rol is overruled by the button** (Dynamic Content > Accordion)
  On this page, under the " TEXT ”, in a section with hidden content, the elements that open and close hidden content lack heading roles. There is a `heading` element present, but this element is placed inside a `button` element.

If a `button` is used for the expand/collapse action, it should be nested within the heading element.

- **Relationship between the button and the panel is not clear** (Dynamic Content > Accordion)
  On this page, under " TEXT ", the section with hidden content is missing the `aria-controls` attribute. `aria-controls` is essential for properly associating the accordion header with its corresponding content panel. The `aria-controls` attribute on the header button must be set to the `id` of the element that contains the accordion panel's content. This connection is crucial for assistive technologies to understand the relationship between the header and the content it controls.

- **Role of heading is missing in an accordion** (Dynamic Content > Accordion)
  On this page, under " TEXT ”, in a section with hidden content, the elements that open and close hidden content isn't marked up as a heading.

The text used to open and close these accordion sections serves as a heading for that content. These texts must be programmatically identified as headings.

- **Heading with no `h`-element in carousel** (Dynamic Content > Carousel)
  On page URL , a carousel under the heading " TEXT " contains slides with headings that are not marked up semantically as headings. Specifically, the headings " XX " and “ XX ” are visually styled as headings but don’t have the appropriate HTML heading elements (`h1`-`h6`).

Visually styled headings that are not marked up as such are useless for screen reader users, who rely on semantic markup to understand page structure. Headings provide a crucial way for users, especially those using assistive technologies, to navigate and scan content. If headings are only visually styled (for example, bolded) without the corresponding HTML heading elements, the logical structure of the page is lost, creating a mismatch between the visual presentation and the underlying code.

- **Groups label is not linked to the group** (Dynamic Content > Filters)
  On this page a sidebar with filters contains a group label “ TEXT ” which is not connected to it's group of checkboxes.

This prevents the screen reader from recognizing the relationship between the group label and the checkboxes. The individual labels of each checkbox are read out without the group label.

- **The selected checkbox appears different, but its status is not indicated in the code** (Dynamic Content > Filters)
  On this page a sidebar with filters is present. The selected option looks different from the rest. This information is not accessible to users of screen readers.

Because the code does not indicate which checkbox is selected, a screen reader cannot convey this information to its user. If you use standard HTML elements such as `<input type="checkbox">` and the visitor checks it, the status of the checkbox is automatically updated in the HTML.

- **`Label` element is not linked to the input element** (Dynamic Content > Filters)
  On this page a sidebar with filters contains checkboxes. There is no connection in the HTML between these labels and the checkboxes.

- **Active tab is not marked in the HTML** (Dynamic Content > Tabs)
  On this page, a tab interface is present. The currently active tab is visually distinguishable, but this information is not conveyed in the HTML code. Screen reader users cannot determine which tab is currently selected. The active state must be communicated using the appropriate ARIA attribute, such as aria-selected="true".

- **Informative image is hidden with `aria-hidden="true"`** (Images and Visual Design > Images)
  On this page, under the heading "Heading", there is an informative image. The image is hidden from the screen reader.

Screen readers ignore content with the attribute `aria-hidden="true"`. This content is therefore hidden from blind users.

- **Informative elements are hidden from the screen reader** (Images and Visual Design > Text Spacing)
  On this page, under the heading "HEADING", an interactive/informative element is hidden from the assistive technology.

This content / functionality is not accessible to a visitor who make use of the assistive technology.

- **The progress is not in the HTML** (Images and Visual Design > Text Spacing)
  This page features a timeline/progress bar. While this visual indicator conveys the user's position within a process to sighted users, it must also be accessible to screen reader users.

- **Visual presentation is missing in the HTML** (Images and Visual Design > Text Spacing)
  On page URL there are (interactive) graphs. Color is used to distinguish objects. This information is only available via presentation and is not accessible to visitors whom can not see the page.

- **role=”presentation” / role=”none” on semantic elements** (Images and Visual Design > Text Spacing)
  On page URL a semantic element has an attribute role=”presentation” / role=”none”. This code removes the semantic role from this element. This creates a difference between visual presentation and the information available to the assistive technology.

- **Elements that can get keyboard focus are hidden from assistive technology** (Links and Navigation > Keyboard)
  On this page, interactive element ELEMENT is hidden from screen readers using aria-hidden. Hiding interactive elements from screen readers is not permitted. Blind users must have equal access to information and functionality. Furthermore, if these elements are still focusable, it creates confusion for keyboard users.

- **Current page indicated visually only** (Links and Navigation > Navigation)
  In the main menu, the active link (to the current page) has a distinct visual appearance, but this distinction is not present in the code. This means screen reader users are not informed which link is currently active.

- **Relationship between links in a group is not present in HTML** (Links and Navigation > Navigation)
  On this page, under " TEXT ", there is a group of links that are visually presented as a group, but this relationship is not reflected in the HTML structure. When links are visually grouped, this relationship should also be present in the HTML to ensure that visitors using assistive technologies, such as screen readers, understand the relationship between these elements.

- **Relationship between links in a pagination is not defined in the code** (Links and Navigation > Navigation)
  On this page, the pagination links below the search results are visually grouped, but this grouping is not present in the HTML structure. When elements are visually grouped, this relationship should also be present in the HTML to ensure that users with assistive technologies, such as screen readers, understand the grouping.

- **Relationship between links in the breadcrumb navigation is not present in the code** (Links and Navigation > Navigation)
  On this page, the breadcrumb navigation is implemented as a collection of links, but the underlying structure and relationship between these links are not semantically defined in the HTML. To provide context and meaning to assistive technologies, wrap the breadcrumb links within a `nav` or `ol` element. This will clearly indicate that these links form a breadcrumb navigation structure.

- **Solution:** (Links and Navigation > Navigation)
  In het mobiele menu fungeren de links “Expertises”, “Markten”, “Thema’s” en vergelijkbare items als kopjes voor de inhoud die daaronder staat. Deze hiërarchische structuur is niet vastgelegd in de HTML.

- **current breadcrumb: not a problem!** (Links and Navigation > Navigation)
  *Testing note: this is usually static text. This makes it obvious.*

- **pagination: current link is only visually** (Links and Navigation > Navigation)

- **It is not defined in the code that the search suggestions belong together** (Links and Navigation > Search)
  The search bar provides a list of suggestions, visually grouped together. However, this grouping is not present in the HTML structure. When elements are visually grouped, this relationship should also be present in the HTML to ensure that users with assistive technologies, such as screen readers, understand the grouping.

- **Search bar label is not connected with the input field** (Links and Navigation > Search)
  <Labels_269942789.html#SC-1.3.1-%3Clabel%3E-not-associated-with-input-(for-id)>

- **Navigation structure is not consistent across pages** (Links and Navigation > Site-wide)
  The main navigation structure or order changes between pages on the website. This concerns the navigation markup and structure, not merely visual differences. Screen reader users learn the order and structure of navigation and rely on this knowledge to navigate efficiently. When the navigation structure differs across pages, it takes more time and effort for these users to find the content they need. Users with cognitive disabilities also depend on predictable and consistent navigation patterns.

- **A complex table is present** (PDF > Content)
  Data tables that contain a heading row and a heading column are considered complex tables. Screen readers have difficulty interpreting the relationships between cells, especially when cells are merged and parts of the table are split into sections with inner headings.

- **Heading element is misused (no content under heading)** (PDF > Content)
  In this PDF document, page X contains two consecutive level X headings without any intervening content.

This can be misleading for users, particularly those using screen readers, as it may give the impression that content is missing or that the document structure is incomplete.

- **Heading tags are misused for styling** (PDF > Content)
  In this PDF document the heading tags are being misused to visually enlarge regular text. Specifically, the text beginning with " TEXT " is styled to resemble a heading, even though it is not a heading.

This discrepancy between the visual presentation and the document's underlying structure, as defined by its tags, creates an inconsistency.

- **Headings not marked up correctly** (PDF > Content)
  In this PDF document there are several headings that are not marked up as headings. For example, see “ Heading ”, “ Heading ”, and “ Heading ”.

This causes the visual information structure to differ from the document structure in the tags.

- **In this PDF-document, on page X an empty heading-tag is present.** (PDF > Content)
  Оn page X, an empty heading-tag is present.

- **List is not marked as list** (PDF > Content)
  In this PDF document on page X there is a list of X items. The proper markup is missing.

Content that appears as a list must be marked up as such to provide a blind visitor with the same information structure as seen in the document. Another advantage of using a list is that the screen reader announces the number of items before reading them. This way, a blind visitor knows how much information is following.

- **List is not marked correctly** (PDF > Content)
  In this PDF document on page X there is a list of X items. In the tags this list is marked up with 2 `L` tags.

Content that looks like a list should also be marked as such in the tags. This way, blind visitors get the same information structure as sighted visitors. Another advantage of marking up a list is that screen readers then announce the number of items before they start reading.

- **Multiple paragraphs are in one `P` tag** (PDF > Content)
  In this PDF document on page X there are NUMBER paragraphs of text. In the tags, these paragraphs are marked up as one `P` tag. See also paragraphs under the headings “ TEXT ” and “ TEXT ”.

The visual structure should be reflected in the tags. If text visually consists of a number of paragraphs, the same number of `P` tags should be present in the tags.

- **Not all list items are marked correctly** (PDF > Content)
  In the PDF-document at URL on page X there is a list of X items. However in the tags there are only X list items present.

- **Table headings are not marked** (PDF > Content)
  In this PDF-document on page X , the table under the heading “ TEXT ” is a data table. The appropriate markup is missing.

The data table needs special tags to inform the screen reader that a table heading is present and that this table heading has a relationship with the underlying data cells.

- **The list structure is not correct** (PDF > Content)
  In this PDF-document on page X there is a list of X items. However in the tags two separate lists are present.

- **Document partially tagged** (PDF > Document Settings)
  This PDF document is partially tagged. The following content is not tagged: “ CONTENT ”.

Please note that tagging this content may introduce new accessibility issues. For example, problems may arise with text labels for form fields, or with the relationships between form fields and their corresponding column headers.

- **PDF lacks tags** (PDF > Document Settings)
  This PDF document lacks codes, rendering its content inaccessible to screen readers. The absence of these codes prevents a complete accessibility evaluation, as all success criteria related to the PDF's underlying code layer (for example, semantic headings and alternative text for images) cannot be assessed. Consequently, addressing this issue may introduce new accessibility challenges.

- **Heading element is misused (no content under heading)** (PDF > Headings)
  In this PDF document, page X contains two consecutive level X headings without any intervening content.

This can be misleading for users, particularly those using screen readers, as it may give the impression that content is missing or that the document structure is incomplete.

- **Heading tags are misused for styling** (PDF > Headings)
  In this PDF document the heading tags are being misused to visually enlarge regular text. Specifically, the text beginning with " TEXT " is styled to resemble a heading, even though it is not a heading.

This discrepancy between the visual presentation and the document's underlying structure, as defined by its tags, creates an inconsistency.

- **Headings not marked up correctly** (PDF > Headings)
  In this PDF document there are several headings that are not marked up as headings. For example, see “ Heading ”, “ Heading ”, and “ Heading ”.

This causes the visual information structure to differ from the document structure in the tags.

- **In this PDF-document, on page X an empty heading-tag is present.** (PDF > Headings)
  Оn page X, an empty heading-tag is present.

- **List is not marked as list** (PDF > Lists)
  In this PDF document on page X there is a list of X items. The proper markup is missing.

Content that appears as a list must be marked up as such to provide a blind visitor with the same information structure as seen in the document. Another advantage of using a list is that the screen reader announces the number of items before reading them. This way, a blind visitor knows how much information is following.

- **List is not marked correctly** (PDF > Lists)
  In this PDF document on page X there is a list of X items. In the tags this list is marked up with 2 `L` tags.

Content that looks like a list should also be marked as such in the tags. This way, blind visitors get the same information structure as sighted visitors. Another advantage of marking up a list is that screen readers then announce the number of items before they start reading.

- **Not all list items are marked correctly** (PDF > Lists)
  In this PDF document on page X there is a list of X items. However, in the tags, only X list items are present. The number of list items in the tag structure must match the number of visible list items.

- **The list structure is not correct** (PDF > Lists)
  In this PDF-document on page X there is a list of X items. However in the tags two separate lists are present.

- **Footnotes are missing **Reference / Note tags**** (PDF > Navigation)
  In this PDF document, page NUMBER contains footnotes that are missing the necessary Reference and/or Note tags.

This omission prevents screen readers from correctly associating the footnotes with their corresponding references in the main text.

- **Reference tags are missing in the TOC** (PDF > Navigation)
  This PDF document contains a table of contents. However, the links to the pages do not utilize the Reference tag.

Screen readers rely on these tags to correctly interpret the document structure. To ensure proper functionality, the table of contents should include the following tags: TOC, TOCI, Reference, and Link.

- **A complex table is present** (PDF > Tables)
  Data tables that contain a heading row and a heading column are considered complex tables. Screen readers have difficulty interpreting the relationships between cells, especially when cells are merged and parts of the table are split into sections with inner headings.

- **In a table for layout, `th` tags are used** (PDF > Tables)
  In this PDF-document on page X a data table is used to give some text a column layout. A data table may not be used in this situation.

The `th` tags may not be present in a layout table. The presence of these tags will confuse blind visitors.

- **Table headings are not marked** (PDF > Tables)
  In this PDF-document on page X , the table under the heading “ TEXT ” is a data table. The appropriate markup is missing.

The data table needs special tags to inform the screen reader that a table heading is present and that this table heading has a relationship with the underlying data cells.

- **Document partially tagged** (PDF > Tags)
  This PDF document is partially tagged. The following content is not tagged: “ CONTENT ”.

Please note that tagging this content may introduce new accessibility issues. For example, problems may arise with text labels for form fields, or with the relationships between form fields and their corresponding column headers.

- **PDF lacks tags** (PDF > Tags)
  This PDF document lacks codes, rendering its content inaccessible to screen readers. The absence of these codes prevents a complete accessibility evaluation, as all success criteria related to the PDF's underlying code layer (for example, semantic headings and alternative text for images) cannot be assessed. Consequently, addressing this issue may introduce new accessibility challenges.

- **Multiple paragraphs are in one `P` tag** (PDF > Text)
  In this PDF document on page X there are NUMBER paragraphs of text. In the tags, these paragraphs are marked up as one `P` tag. See also paragraphs under the headings “ TEXT ” and “ TEXT ”.

The visual structure should be reflected in the tags. If text visually consists of a number of paragraphs, the same number of `P` tags should be present in the tags.

- **CAPTCHA is hidden after it completes** (Specific Components > CAPTCHA)
  When a user successfully completes the hCaptcha on page URL , the checkbox changes into a green checkmark. At that moment, the hCaptcha is hidden using `aria-hidden="true"` on the `div` element with the ID ‘anchor’.

This hides the CAPTCHA from assistive software. As a result, screen readers can no longer read the information in the CAPTCHA. This is not intended.

- **Headers are not marked as headers** (Specific Components > Cookie Banners)
  In the cookie banner, under the “Details” tab, there are several collapsible buttons with texts “Necessary”, “Preferences”, “Statistics”, and so on. The relationship between these buttons and the associated content is not defined in the HTML.

- **Instead of an `h` element, the `strong` element was used for headings** (Specific Components > Cookie Banners)
  In the cookie banner there are headings that are not marked as headings in the code (with the `h`-element). Instead, they are placed in the `strong`-element. These include the texts "Cookie Settings", "Your Current Status", "Consent Date", and "Your Consent ID."

- **List is not marked as list in the code** (Specific Components > Cookie Banners)
  There is an ordered list with three items. The proper markup is missing. The same issue is observed on the Cookie banner that appears the first time a visitor accesses the website. When a visitor clicks the button “Nee, pas aan”, the dialog window appears. This dialog window contains three tabs. In the tab “Cookieverklaring” there are two lists under the headings: “Noodzakelijke cookies” and “Functionele cookies”.

- **Paragraphs are separated with `br` elements instead of `p` elements** (Specific Components > Cookie Banners)
  In the cookie banner, there are tabs labeled “Consent”, “Details”, and “About”. On the ‘About’ tab, there are [ six] paragraphs, such as one beginning with “Cookies are small text files...”. Currently, all of these paragraphs are placed within a single `div` element, with line breaks created using the `br` element. This is not the correct approach.

- **Visual presentation not in the HTML** (Specific Components > Data Visualisation)
  <176717826.html#SC-1.3.1-Visual-presentation-is-missing-in-the-HTML>

- **QR code is built from individual blocks without clear structure** (Specific Components > QR Code)
  On this page a QR code is constructed from individual block elements rather than presented as a single image. This means the QR code has no recognizable structure for assistive technology. A screen reader will attempt to read the individual blocks, which produces incomprehensible output.

- **A data cell (`<td>`) is inappropriately marked as a table header cell (`<th>`)** (Structure and Semantics > Data Tables)
  In the data table under “Heading” the data cells (`td`) are inappropriately marked as table header cells (`th`).

- **Data table lacks proper table head** (Structure and Semantics > Data Tables)
  The table on this page contains a heading row. The proper mark-up is missing. Tables with three or more columns must always have table headers formatted with the `th` element. This formatting will help convey the relationship between the heading row and the related data cells to screen reader users.

- **Data table misses the proper mark-up** (Structure and Semantics > Data Tables)
  On this page, under the heading “ TEXT, “ a data table is present. The appropriate mark-up is missing.

A data table has a header row or column with cells that are related to the data cells. The screen reader needs proper markup to communicate this relationship to a blind user.

- **Data tables are missing accessible names** (Structure and Semantics > Data Tables)
  On this page several data tables are present. These tables lack accessible names. Screen readers read the caption or name of the table when users navigate to the table, giving users a sense of what the table is about. Without a name, it is difficult for users to distinguish between different tables.

- **I ncorrect accociation in a table** (Structure and Semantics > Data Tables)
  On this page, a table is present whose headers are correctly marked with a `th` element. However, screen readers struggle to determine the relationship between the table headers and the data cells because the scope and IDs added confuse the relationship between the cells.

- **In a layout tabel <th>, `<caption>` , `summary` , `headers` is used** (Structure and Semantics > Data Tables)
  On this page under the heading “ TEXT ” a layout table is present. The `th`-elements [ `<caption>` , `summary` , `headers` ]are used in the header row.

This table was used to shape the content in a certain way. Thus, it is not a table of data, but a layout table. A table may be used in this way, but then it should not contain `th` elements. Currently, these are still in the first row.

- **Information in a data table is not structured correctly** (Structure and Semantics > Data Tables)
  The data table under “Heading” lacks the table markup. The screen reader can not determine relationship between the cells of this table.

- **Screen readers do not read the complex table correctly** (Structure and Semantics > Data Tables)
  Under the heading “ TEXT “ a multidimensional table is present. The appropriate association between related cells is missing.

- **Heading lacks the proper markup** (Structure and Semantics > Headings)
  On this page, the following texts are not marked up as headings: " TEXT ", " TEXT ", and " TEXT ". When text functions as a heading but lacks proper markup, it loses its semantic meaning and becomes inaccessible to visitors who rely on assistive technologies like screen readers. Headings are crucial for navigating and understanding content structure.

- **Headings no semantic role** (Structure and Semantics > Headings)
  On this page, `role="presentation"` is added to the heading " TEXT ". This removes the heading's semantic meaning, creating a mismatch between the visual structure and the structure conveyed to assistive technologies.

- **Text is not a heading, `h1 - h6` element used for styling** (Structure and Semantics > Headings)
  The text " TEXT " on this page is not a heading, but it is incorrectly marked up with an `h2` (or `h3`, `h4`, `h5`, `h6`) element to increase its font size. Using heading elements for purely visual styling is semantically incorrect.

- **`Heading` element is in a list item** (Structure and Semantics > Headings)
  On this page the heading “ Heading ” is included as the first item in a list, followed by other `li` elements. The heading should not be part of the list.

Headings should be used to structure content and should not be placed within list items, as this can cause confusion for screen reader users and disrupt the logical flow of information.

- **`strong` / `em` instead of `<h1>- <h6>`** (Structure and Semantics > Headings)
  On this page the following texts are headings but the heading elements are missing. Strong /em element is used to make them look like headings. See " XX ", " XX ", and " XX ".

The `strong` / `em` element is for semantic emphasis, not for creating headings. Using it in place of heading elements (`h1` to `h6`) misrepresents the content's structure and makes it inaccessible to assistive technologies.

- **heading levels not used correctly** (Structure and Semantics > Headings)
  On this page, a heading of level X is immediately followed by another heading of the same level or a higher level. See “ HEADING ” and “ HEADING ”.

This indicates an incorrect heading structure. Headings should follow a logical hierarchy. A heading should not be directly followed by another heading of the same level or a higher level without any intervening content.

- **Description list not used for term-definition pairs** (Structure and Semantics > Lists)
  On page URL , content is structured as term-definition pairs (such as a FAQ, glossary, or metadata) but is not marked up using a description list (`<dl>`, `<dt>`, `<dd>`). Without description list markup, the semantic relationship between terms and their definitions is not conveyed to assistive technology. Screen readers cannot announce which description belongs to which term, making it harder for users of assistive technology to understand and navigate the content.

- **Visual list is not marked up with proper list elements** (Structure and Semantics > Lists)
  On page URL , content is visually presented as a list (using bullets, numbers, or dashes) but is not semantically marked up with HTML list elements (`<ul>`, `<ol>`, `<li>`). Without proper list markup, screen readers cannot identify the content as a list or announce the number of items it contains. This means users who rely on assistive technology miss important structural information that sighted users can perceive visually.

- **Wrong list type used for content** (Structure and Semantics > Lists)
  On page URL , the wrong HTML list type is used. Content that has a meaningful sequence is marked up as an unordered list (`<ul>`), or content without a specific order is marked up as an ordered list (`<ol>`). This conveys incorrect structural information to screen reader users, as `<ol>` communicates that the order of items matters while `<ul>` indicates it does not. Using the wrong list type can mislead users of assistive technology about the nature and meaning of the content.

- **Lists not constructed with `<ul>` or `<ol>`** (Structure and Semantics > Text Semantics)
  On this page, under the heading " TEXT ", a list with X items is present but lacks proper markup. Content visually presented as a list should be semantically marked up as a list using `<ul>` or `<ol>` elements. This ensures that screen readers correctly identify and announce the list, including the number of items, to blind users. Proper list markup provides the same structural information to all visitors and improves navigation for screen reader users.

- **No difference in the HTML between the old and new price** (Structure and Semantics > Text Semantics)
  On this page, some products have reduced prices, visually indicated by a crossed-out original price and a new price. However, this price change is not conveyed in the HTML, making it inaccessible to screen reader users.

- **T ext that is visually shown as being deleted or inserted, this information is not in HTML** (Structure and Semantics > Text Semantics)
  On this page, the product " XX " has two prices: the original " X,XX " and the reduced " X,XX ". This price difference is not conveyed to screen reader users. Visually, the original price is likely styled with a strikethrough, but this visual distinction is not present in the HTML.

- **Text contains characters making it difficult to read** (Structure and Semantics > Text Semantics)
  On this page the text “TEXT” contains `<br>` elements making the screen reader read this text in a strange way. It is difficult to understand the meaning of this text.

- **Visually several paragraphs, in the HTML only one** (Structure and Semantics > Text Semantics)
  On this page, under " TEXT ", a block of text with multiple paragraphs is incorrectly marked up as a single `<p>` element. The visual structure of the content should be accurately reflected in the HTML.

- **`< dl>` contains other elements then `<dt>` and `<dd>`** (Structure and Semantics > Text Semantics)
  On this page, under the heading " TEXT ", a definition list (`dl`) contains elements other than `dt` (definition term) and `dd` (definition description), which violates HTML specifications. This can lead to misinterpretation of the list's structure by screen readers.

- **`<em>`- of `<i>`-element is used in quote** (Structure and Semantics > Text Semantics)
  On this page, a quotation is visually styled as a quote, but the `<i>` or `<em>` element is incorrectly used to achieve this effect.

- **Error message is not connected to the input field** (User Input and Forms > Error Messages)
  On this page the form displays an error message “ MESSAGE ”. The relationship between the error message and the corresponding input field is not programmatically defined. This prevents assistive technologies from conveying the error information to the user. This can be fixed by using the `aria-describedby` attribute on the `input` element.

- **Group labels not associated with the group** (User Input and Forms > Inputs)
  On this page, a form with several sections is present. Each section has a group label, but these labels are not programmatically associated with their respective groups.

This lack of connection means screen reader users are unaware of the relationship between the group labels and the form elements they describe.

- **No group label is present (individual labels do not provide enough info)** (User Input and Forms > Inputs)
  On this page, radio buttons are present, but they lack a group label. The individual labels of the radio buttons do not provide sufficient context about the choice being made.

- **The relationship between radio buttons is not defined in the code** (User Input and Forms > Inputs)
  On this page, a group of radio buttons (or checkboxes) is present, preceded by the text " GroupLabel" . While visually grouped, this relationship is not defined in the HTML. This prevents assistive technologies from understanding relationship between elements .

- **Best practice: add a progress bar** (User Input and Forms > Labels)
  While the current form on page URL is functional, adding a progress indicator would significantly enhance its accessibility and user-friendliness, especially for longer forms. A progress bar allows users to gauge the form's length, track their progress, and anticipate the remaining steps. This is particularly beneficial for users with cognitive limitations or short attention spans, as it reduces anxiety and provides a sense of accomplishment. For screen reader users, text alternatives should be provided for each step in the progress bar, ensuring they also have a clear understanding of their progress through the form.

- **`label` is associated with a wrong `id`** (User Input and Forms > Labels)
  This page contains a form. The `label` element containing "TEXT" is not explicitly associated with its related input field. The `id` present on the `label` element is either missing from the HTML entirely or is not present on the related input field. If a `label` element is used, it must be associated with its corresponding input field in the HTML. The recommended approach is to use the for attribute on the `label` element, referencing the `id` attribute of the input field. This association ensures that screen reader users are immediately informed about the input field's purpose when navigating directly to it.

- **`label` not associated with input (for-id)** (User Input and Forms > Labels)
  This page contains a form where the `label` element containing "TEXT" is not explicitly associated with its corresponding input field. `label` elements should be linked to their input fields using the for attribute, which must match the `id` attribute of the input field. This association provides the input field with an accessible name and increases the clickable area of the label, improving usability and accessibility. Because the accessible name is currently missing, this issue also violates Success Criterion 4.1.2.

## SC 1.3.2 Meaningful Sequence

- **Reading order of tags is not logical** (PDF > Content)
  In this PDF document the reading order is not logical.

The screen reader reads a PDF document in the order of the tags contained in the code layer. When these tags are not in a logical order, the reading order does not become logical and it becomes difficult for a blind visitor to understand the content of the document.

- **Reading order is not correct** (PDF > Navigation)
  In this PDF document, on page NUMBER there are footnotes. However, these footnotes are positioned *before* the text that refers to notes “ X ” and “ X ”.

Because these footnotes are read aloud *before * the text that refers to them, an illogical reading order is created.

- **Reading order of tags is not logical** (PDF > Text)
  In this PDF document the reading order is not logical.

The screen reader reads a PDF document in the order of the tags contained in the code layer. When these tags are not in a logical order, the reading order does not become logical and it becomes difficult for a blind visitor to understand the content of the document.

- **Reading order is not meaningful** (Structure and Semantics > Headings)
  On this page, the HTML order of elements within BLOGPOSTS / NEWSARTICLES / EVENTS is EXAMPLE . The reading order of this content is not meaningfull.

- **DOM order differs from visual order due to CSS positioning** (Structure and Semantics > Reading Order)
  On page URL , CSS techniques such as `flexbox order`, `grid order`, or `absolute positioning` cause the visual presentation order to differ significantly from the DOM order. Screen readers follow the DOM order, not the visual order, which means content is announced in a sequence that does not match what sighted users see. This can create confusion for screen reader users who receive information in an illogical order. Keyboard users may also experience unexpected focus order that does not align with the visual layout.

- **Dynamically injected content breaks the logical reading order** (Structure and Semantics > Reading Order)
  On page URL , DESCRIBE . Content dynamically inserted via JavaScript appears at an incorrect position in the DOM, breaking the logical reading sequence. Screen readers follow the DOM order, so when injected content is placed outside the expected position, users of assistive technology encounter it at an unexpected point. This disrupts the meaningful sequence of the page and makes the content harder to understand in context.

- **The reading order is not meaningful** (Structure and Semantics > Text Semantics)
  The order of HTML elements within articles is not logical, with images positioned above headings. The current order is image, heading, text. When a page contains multiple articles with images, headings, and text, the heading must come *first* in the HTML. This ensures that the content is correctly associated with its heading. The recommended order is: heading, image, text. This way, when assistive technologies like screen readers read the content, the relationship between the heading and its associated content is clear, regardless of the visual layout.

## SC 1.3.3 Sensory Characteristics

- **Instruction refers to a symbol without a text alternative** (Images and Visual Design > Text Spacing)
  This page includes an instruction that references a symbol " XXX " without providing a text alternative. Referring to a visual symbol or location is inaccessible to many users.

- **Instruction refers to a visual aspect** (PDF > Content)
  In this PDF-document on page X , there is the text “ XX … hiernaast”.

The text “alongside” refers to a visual location, which people who cannot see the PDF may not be able to place.

- **Instruction refers to a visual aspect** (PDF > Text)
  In this PDF-document on page X , there is the text “ XX … hiernaast”.

The text “alongside” refers to a visual location, which people who cannot see the PDF may not be able to place.

- **Instruction relies solely on color** (Structure and Semantics > Sensory Characteristics)
  On page URL , the instruction " TEXT " identifies an element solely by its color (for example, "click the green button" or "required fields are marked in red"). Users who are blind and use screen readers do not receive color information and cannot determine which element is being referenced. Users with color vision deficiencies may not perceive the described color differences. Instructions must include an additional non-color-dependent reference so that all users can understand the information.

- **Instruction relies solely on shape or size** (Structure and Semantics > Sensory Characteristics)
  On page URL , the instruction " TEXT " identifies an element solely by its visual shape or size (for example, "click the round icon" or "use the large button"). Users who are blind and use screen readers do not receive information about the shape or size of elements and therefore cannot determine which element is being referenced. Additionally, the visual appearance of elements can vary across devices and zoom levels, making shape or size references unreliable even for sighted users.

- **Instruction relies solely on visual location** (Structure and Semantics > Sensory Characteristics)
  On page URL , the instruction " TEXT " identifies content solely by its visual location (for example, "click the button in the top right corner" or "see the sidebar on the left"). Users who are blind and use screen readers have no awareness of the visual layout and cannot determine which element is being referenced. Users who zoom in significantly or use different screen configurations may also find the described location unreliable. Instructions must include an additional non-visual reference, such as the name or function of the element.

- **Location is used in instruction** (Structure and Semantics > Text Semantics)
  On this page, an instruction uses the terms "links" (left) or "rechts" (right) to indicate the location of an element. This instruction becomes useless if a visitor can not see the page, as the left-right positioning no longer applies.

## SC 1.3.4 Orientation

- **Content restricted to one orientation** (Images and Visual Design > Resize and Reflow)
  This page is restricted to a single display orientation ( portrait or landscape ). Web pages should not restrict visitors to a single orientation unless absolutely essential. Visitors, particularly those with motor disabilities (for example, those with tablets mounted to wheelchairs who may not be able to easily change their device's orientation), should be able to view and operate content in either portrait or landscape mode. Restricting orientation can prevent these visitors from accessing information or functionality. Websites and applications must allow visitors to choose their preferred display orientation without loss of content or functionality.

- **Layout does not adapt** (Specific Components > Apps)
  <div class="meta"> 
<span class="impact"><b>Impact</b>: Medium</span> 
<span class="type"><b>Type</b>: Techniek</span> 
<span class="type"><b>WCAG</b>: 1.1.1, 1.4.5</span> 
<span class="type"><b>EN</b>: 11.1.1.1,11.1.4.5</span> 
</div>

#### Oplossing:

- **Orientation (portrait / landscape)** (Specific Components > Apps)
  <Resize-and-reflow_176619522.html#SC-1.3.4-Orientation-limited-to-one-direction>

## SC 1.3.5 Identify Input Purpose

- **Autocomplete attribute is missing** (User Input and Forms > Inputs)
  On this page, a form containing input fields for personal information (for example, last name, email address, phone number) is missing the `autocomplete` attribute. When forms collect personal data, the appropriate `autocomplete` attribute should be used with these input elements. This enables browsers and assistive technologies to assist users by, for example, automatically populating the fields.

- **`Autocomplete` attribute has wrong value** (User Input and Forms > Inputs)
  On this page, a form collecting personal information (for example, last name, email, phone number) has input fields with [an empty `autocomplete` attribute] [an incorrect value like "TEXT"].

When forms collect personal data, the appropriate `autocomplete` attribute must be used. This allows browsers and assistive technologies to support users, for example, by automatically filling in fields. An empty `autocomplete` attribute or an incorrect value is not sufficient. For correct autocomplete values and more information, see: https://www.w3.org/TR/WCAG21/#input-purposes.

## SC 1.4.1 Use of Color

- **The active dot is indicated by colour only** (Dynamic Content > Carousel)
  On this page, the dot navigation uses only color to indicate the active dot.

- **Color is used to indicate the selected state of a checkbox** (Dynamic Content > Filters)
  On this page, the filter's selected checkbox has a COLOR fill.

When color is used to distinguish the selected state, the contrast ratio between the selected and unselected states must be at least 3,0:1. Since the current contrast ratio is less than 3,0:1, this distinction is not sufficiently clear.

- **Active tab indicated by text color only** (Dynamic Content > Tabs)
  On this page, a tab interface is present where the currently active tab is indicated only by a difference in text color. No other visual indicator (such as an underline, border, or background change) is used. Users who cannot perceive color differences cannot determine which tab is currently selected.

- **Active button in color only** (Images and Visual Design > Color and Contrast)

- **Active link in color only** (Images and Visual Design > Color and Contrast)
  <Navigation_176193538.html#SC-1.4.1-active-link-in-color-only-(menu-and-filters)>

- **Color is used to distinguish information** (Images and Visual Design > Color and Contrast)
  Only color is used in graphs/diagrams to distinguish information. See COLOR in ELEMENT .

Only people who can see and distinguish the colors can tell which color belongs to which category.

- **Color is used to provide information (graph)** (Images and Visual Design > Images)
  See <176717826.html#SC-1.4.1-Color-in-graphs%2C-schema%E2%80%99s%2C-legend-in-maps>

- **Error states are indicated by color only** (Images and Visual Design > Use of Color)
  On this page, error states in the form are indicated only by a color change (such as a red border or red text) without any additional visual indicator. Users who are colorblind or have low vision may not perceive the color change and will therefore not know which fields contain errors. Error feedback must not rely solely on color to communicate the presence of an error.

- **Information is conveyed by color only** (Images and Visual Design > Use of Color)
  On this page, information is conveyed only through color differences: DESCRIBE . No additional visual cue such as a pattern, shape, text label, or icon is provided. Users who are colorblind or have low vision may not be able to distinguish these color differences and will therefore miss essential information. Color must not be the sole means of conveying information.

- **Required fields are indicated by color only** (Images and Visual Design > Use of Color)
  On this page, required form fields are indicated only by a color difference (such as a red label or a red asterisk) without any additional visual cue or text explanation. Users who are colorblind or have low vision may not perceive the color difference and will therefore not know which fields are required. This can lead to form submission errors and a frustrating user experience.

- **Color is used to indicate the keyboard focus** (Links and Navigation > Keyboard)
  Interactive elements on this page have a custom keyboard focus that looks like COLOR on a COLOR background.

This is not sufficient for accessibility, as it may be difficult to perceive for users with low vision, color blindness, or those who require clear visual focus cues. The same issue occurs with ELEMENT .

- **Keyboard focus location only in color of text** (Links and Navigation > Keyboard)
  When the link/button " LINKTEXT " receives keyboard focus, only the text color changes to COLOR . This subtle change may not be sufficient for users with low vision or color blindness. Keyboard focus needs a clear visual indicator so that all users, including those navigating with a keyboard, can easily identify the focused element.

- **Links only in color distinguishable from surrounding text** (Links and Navigation > Links)
  On this page, the paragraph containing links (like " TEXT "). Color is the only difference between the link and the static text. Relying solely on color to distinguish links is problematic for visitors with low vision or color blindness.

- **Active link is only recognizable by color** (Links and Navigation > Navigation)
  In the main menu, the active link (the link to the current page) is indicated only by a different text color. This is not sufficient for visitors with low vision or color blindness, who may not be able to perceive the color difference. Active links should be distinguishable by at least one non-color visual characteristic.

- **pagination: current page number only in color** (Links and Navigation > Navigation)

- **Color only used in legend to graph** (PDF > Color)
  In this PDF-document on page X under the heading “ TEXT ” there is a graph. Color is used to provide information. See the legend and bars in the graph.

Only people who can see and distinguish the colors can tell which bar or line belongs to which category in the legend.

- **Problem with captcha is only indicated by color** (Specific Components > CAPTCHA)
  On this page, there is a form with the verification method reCAPTCHA. In certain situations, only color is used to indicate that verification has failed: the checkbox turns red, but no error message appears. This can be problematic for users with visual impairments, as they may miss that something went wrong.

- **Link is indicated by color only** (Specific Components > Cookie Banners)
  This can be a problem for colorblind or visually impaired visitors. They may not be able to distinguish the colors and therefore may not see that there is a link in the text.

- **Use of color** (Specific Components > Data Visualisation)
  <176717826.html#SC-1.4.1-Color-in-graphs%2C-schema%E2%80%99s%2C-legend-in-maps>

- **Selected state communicated only by color** (Structure and Semantics > State)
  On this page, the selected or active state of a UI component is communicated only through a color difference: DESCRIBE . No additional visual indicator is provided.

Color must not be the sole means of conveying the selected or active state of an element. Users with color blindness or reduced color perception may not be able to perceive the color difference and therefore cannot determine which element is currently selected or active. An additional visual cue must always be present, such as an underline, border, icon, or bold text, to make the state clear without relying on color perception alone.

- **Error by color of input field only** (User Input and Forms > Error Messages)
  On this page the error message in the form is the change of [the color of the label's text ][ the input field's border color] . This approach is inaccessible to users who are blind or colorblind.

## SC 1.4.2 Audio Control

- **Audio plays automatically on page load** (Multimedia > Audio)
  On this page audio plays automatically for more than 3 seconds when the page loads, with no mechanism to pause, stop, or control the volume independently of the system volume. This is particularly problematic for screen reader users, as the auto-playing audio can drown out the screen reader's speech output, making the page unusable.

- **Sound starts automatically and lacks the pauze / stop button** (Multimedia > Video)
  This page violates accessibility guidelines by automatically playing audio for more than three seconds upon page load.

## SC 1.4.3 Contrast (Minimum)

- **Insufficient color contrast of text** (Dynamic Content > Carousel)
  On this page a carousel under the text " TEXT " contains slides with text that has insufficient contrast against the slide background.

- **, 1.4.11 High contrast button** (Images and Visual Design > Color and Contrast)
  The website features a high contrast mode button designed to enhance the site's contrast for users requiring higher visual contrast. The website's evaluation is conducted employing the high contrast mode.

- **Contrast button not working (f.e. disappears when zoomed in)** (Images and Visual Design > Color and Contrast)
  The website features a high contrast mode button designed to enhance the site's contrast for users requiring higher visual contrast. However, this button is currently inaccessible. Consequently, the website's evaluation is conducted without employing the high contrast mode.

- **Contrast issues when zoomed in to **[200%][400%]**** (Images and Visual Design > Color and Contrast)
  Under the heading HEADING is colored text TEXT present on COLOR background. The contrast ratio is X,X:1.

Ensure that the color contrast does not get less than 4,5:1.

- **Contrast ratio of text and background is less than 3,0:1** (Images and Visual Design > Color and Contrast)
  Under the heading HEADING is colored text TEXT present on COLOR background. The color contrast ratio is too low: X,X:1.

- **Contrast ratio of text and background is less than 3,0:1 for big text** (Images and Visual Design > Color and Contrast)
  Under the heading HEADING is colored text TEXT present on COLOR background. The color contrast ratio is too low: X,X:1 .

- **Contrast ratio of text and background is less than 4,5:1** (Images and Visual Design > Color and Contrast)
  Under the heading HEADING is colored text TEXT present on COLOR background. The color contrast ratio is too low: X,X:1. Not all visitors can see this text.

- **Contrast ratio of text and background is less than 4,5:1** (Images and Visual Design > Color and Contrast)
  Under the heading HEADING is colored text TEXT present on COLOR background. The color contrast ratio is too low: X,X:1 .

- **High contrast button has insufficient text contrast** (Images and Visual Design > Color and Contrast)
  The website features a high contrast mode button designed to enhance the site's contrast for users requiring higher visual contrast. However, the text on this button has insufficient contrast and is therefore not usable for visitors who need good contrast. Consequently, the website's evaluation is conducted without employing the high contrast mode.

- **Insufficient contrast of text with the background** (Images and Visual Design > Color and Contrast)
  When the contrast is too low, the text may be difficult to read for users with visual impairments. The contrast for the text must be at least 4,5:1. If the text is larger than 18 points (=24 pixels) or 14 points (=18.66 pixels) when combined with bold , then the contrast must be at least 3,0:1. Bold means `font-weight: bold` or `font-weight: 700`.

- **Link text not enough contrast on focus or on hover** (Images and Visual Design > Color and Contrast)
  The text of the link “TEXT” changes when this link gets the keyboard focus. The contrast ratio of this text is X,X :1.

Text on informative elements must always have sufficient contrast, even when focus is placed on it or when the mouse is moved over the element (hover).

- **Text contrast in image** (Images and Visual Design > Images)
  See <176717826.html#SC-1.4.3-contrast-ratio-%3C-4%2C5%3A1-(%3C19px-and-bold!)>

- **contrast issues when zooming** (Images and Visual Design > Resize and Reflow)
  <176717826.html#SC-1.4.3%2C-SC-1.4.10-Contrast-issues-when-zoomed-in-to-%5B200%25%5D%5B400%25%5D>

- **Large text contrast is below 3:1** (Images and Visual Design > Text Contrast)
  On this page, the large text " TEXT " does not meet the minimum contrast ratio of 3:1 against its background. Large text (18pt and above, or 14pt bold and above) requires a contrast ratio of at least 3:1. Although large text is generally easier to read, users with low vision still need adequate contrast to perceive it. Insufficient contrast makes the text difficult or impossible to read for these users.

- **Placeholder text has insufficient contrast** (Images and Visual Design > Text Contrast)
  On this page, the placeholder text in an input field does not meet the minimum contrast ratio of 4.5:1 against the input background. Placeholder text conveys information such as the expected input format or an example value, and must therefore meet the same contrast requirements as other text. Users with low vision may not be able to read the placeholder and will miss important instructions for completing the form correctly.

- **Text contrast is below 4.5:1** (Images and Visual Design > Text Contrast)
  On this page, the text " TEXT " does not meet the minimum contrast ratio of 4.5:1 against its background. Normal-sized text (smaller than 18pt, or smaller than 14pt bold) requires a contrast ratio of at least 4.5:1 to ensure readability. Insufficient contrast makes text difficult or impossible to read for users with low vision, color deficiencies, or those viewing screens in bright environments.

- **Contrast of text on button is less than 4,5:1** (Links and Navigation > Buttons)
  On this page, the button with the text " TEXT " has insufficient color contrast. The COLOR text against the COLOR background has a contrast ratio of X , X :1, which is below the required minimum of 4,5:1 for standard text.

- **Contrast of text on button too low on hover** (Links and Navigation > Buttons)
  On this page, the button text " TEXT " has insufficient contrast when hovered. The contrast ratio is X,X :1, which is below the required 4,5:1 for normal text. Interactive elements must maintain sufficient contrast in all states, including hover.

- **Text contrast insufficient on keyboard focus** (Links and Navigation > Keyboard)
  On this page, when an element receives keyboard focus, the text color changes to a value with insufficient contrast against the background. The contrast ratio must be at least 4.5:1 for normal text, including when an element has keyboard focus.

- **Link text contrast** (Links and Navigation > Links)
  small text - <176717826.html> 
large text - <176717826.html>

- **The color of the link with focus does not have sufficient contrast** (Links and Navigation > Links)
  On this page, the link with the text " TEXT " has insufficient color contrast when it receives keyboard focus. The color of the focused link text ( COLOR ) has a contrast ratio of X,X :1 against the background, which is below the required 4,5:1 for normal text.

- **link: on hover contrast of link text** (Links and Navigation > Links)
  <Keyboard_235798847.html>

- **Skip link has insufficient contrast** (Links and Navigation > Logo / Skiplink)
  On every page, the skip link has insufficient color contrast. The COLOR text on the COLOR background has a contrast ratio of X . X :1, which is below the required 4.5:1 for standard text. Skip links, like all interactive elements, must meet color contrast requirements to be accessible to visitors with low vision.

- **Breadcrumb navigation has insufficient color contrast** (Links and Navigation > Navigation)
  On this page, the breadcrumb navigation links (" LINKTEXT1 " and " LINKTEXT2 ") have insufficient color contrast. The COLOR text against the COLOR background has a contrast ratio of X , X :1, which is below the required 4,5:1 for standard-sized text. Breadcrumb links must meet the same color contrast requirements as other text elements. This issue likely affects all pages where this color combination is used for the breadcrumb navigation.

- **Search bar placeholder text has insufficient contrast** (Links and Navigation > Search)
  Test when: placeholder is the only visible label

<176717826.html#SC-1.4.3-contrast-ratio-%3C-4%2C5%3A1-(%3C19px)>

- **Captions not enough contrast** (Multimedia > Video)
  This page contains a video with white captions. The captions lack sufficient background contrast, becoming nearly invisible against some of the video's lighter scenes.

- **Color contrast of large text is too low** (PDF > Color)
  In this PDF-document there is а COLOR text “ XXX ” on COLOR background. The color contrast ratio is too low: X,X :1. The contrast must be at least 3,0:1.

- **Color contrast of small text is too low** (PDF > Color)
  In this PDF document there is а COLOR text “ XXX ” on COLOR background. The color contrast ratio is too low: X,X :1. Make sure the contrast is at least 4,5:1.

- **Red text of error message does not have enough contrast** (Specific Components > CAPTCHA)
  On this page there is a form with the verification method reCAPTCHA. When the checkbox is checked but the submit button has not yet been pressed, the message "Verification expired. Please check the checkbox again." appears after some time. This text is red, and the contrast ratio with the light gray background is 3,8:1.

- **Link color has too low contrast** (Specific Components > Cookie Banners)
  The first time a visitor accesses the website, a cookie banner appears. When a visitor clicks the button “Nee, pas aan”, the dialog window appears. This dialog window contains three tabs. In the tab “Instellingen” in the section “Advertenties” there is a link “hier”. The link text color is blue (`#4A80D7`) on the white (`#FFFFFF`) background. The color contrast ratio is too low: 3.9:1.

- **Color contrast of error message falls short** (User Input and Forms > Error Messages)
  On this page the error message in the form is the COLOR text against a white background. The resulting contrast ratio is X.X:1 , which falls short of the required 4.5:1 for normal text.

- **Contrast issues in the search field** (User Input and Forms > Inputs)
  The search bar's light gray placeholder text has a contrast ratio of X,X:1 against the white background. The current contrast ratio of X,X:1 is insufficient.

- **Placeholder text insufficient contrast** (User Input and Forms > Inputs)
  On this page, under the " TEXT ", an input field is present. The gray placeholder text against the COLOR background has a contrast ratio of X,X :1. Insufficient contrast between placeholder text and background can make it difficult for users to read the placeholder, impacting usability.

## SC 1.4.4 Resize Text

- **Dot navigation does not work if the visitor has zoomed in** (Dynamic Content > Carousel)
  On this page, the dot navigation used for scrolling to different sections does not function correctly when zoomed in to 200% at a resolution of 1280 x 1024 pixels. All interactive elements and functionalities must remain usable at different zoom levels.

- **When the visitor zooms in, information and functionality disappears from the tabs** (Dynamic Content > Tabs)
  On page URL there are tabs consisting of sections with hidden content that can be revealed when a visitor clicks on the tab button. When zoomed in, the text of the buttons is replaced by numbers/shorter text. The content is lost.

When the visitor zooms in to 200% on a screen with a resolution of 1280 by 1024 pixels, the display of the tabs changes. Instead of the “ NUMBER ” tabs, arrows appear to navigate to the previous or next tab, along with a number indicating the current tab, such as " XX / XX ". This simplified display results in a loss of information and functionality. Firstly, the topics of the other tabs are no longer visible. Additionally, the visitor can no longer skip tabs, such as jumping directly from tab 1 to tab “ X ”.

- **At 200% zoom functionality is lost / not visible** (Images and Visual Design > Resize and Reflow)
  When this page is viewed at a screen resolution of 1280 by 1024 pixels and zoomed in to 200% , the link / button with the “TEXT” is not visible / not operable .

- **Content is lost when zoomed to 200%** (Images and Visual Design > Resize and Reflow)
  When this page is viewed at a screen resolution of 1280 pixels by 1024 pixels and zoomed in to 200%, the following text is partially lost: TEXT.

Zooming to 200% should not impair the readability of any informative element.

- **Impossible to zoom in or out** (Images and Visual Design > Resize and Reflow)
  On all pages, in the head element of the HTML code, `maximum-scale=1` and `user-scalable=no` are present. This code prevents zooming in in some browsers.

- **intro text (when many issues)** (Images and Visual Design > Resize and Reflow)
  When the text on this website is zoomed to 200%, several problems arise. These are described below.

- **Text of logo disappears from view when zooming in to 200%** (Links and Navigation > Logo / Skiplink)
  When this page is viewed at a screen resolution of 1280 by 1024 pixels and zoomed in to 200%, the logo at the top is replaced with a simplified logo. As a result, the text TEXT is missing.

- **Breadcrumb navigation disappears when visitor zooms in** (Links and Navigation > Navigation)
  When a user zooms in on this page, the breadcrumb navigation disappears. This loss of functionality is an accessibility issue. All content and functionality, including the breadcrumb navigation, must remain accessible and usable when visitors zoom in.

- **Text can not be scaled** (Specific Components > Apps)
  Choosing a larger text size in the phone settings (beyond the last option) does not cause all text in the app to scale correctly.

- **Part of a table is lost on smaller screens** (Structure and Semantics > Data Tables)
  When the table on this page is viewed on a zoomed or small screen, some table cells are off screen.

## SC 1.4.5 Images of Text

- **Image contains embedded text** (Images and Visual Design > Images)
  On this page, below the " HEADING ", an image containing embedded text is present. Embedding text within images makes it inaccessible to many users. They cannot resize or customize the text (font, color, etc.) to suit their needs.

- **Image contains embedded text** (PDF > Images)
  In this PDF document, on page X , an image with embedded text is present.

An image must not include informative text if an equivalent visual presentation of the text can be rendered using real text (unless the text is essential — such as a logo — or the font, size, color, and background are customizable.).

## SC 1.4.10 Reflow

- **At 400% zoom functionality **is lost / not visible**** (Images and Visual Design > Resize and Reflow)
  On this page the link/button with the “TEXT” is not visible / not operable.

Zooming to 400% should not impair the functionality or visibility of any informative element.

- **No responsive design** (Images and Visual Design > Resize and Reflow)
  The website does not have a 'responsive design'. This means the layout does not adapt to smaller screens ('reflow') or when zoomed in significantly. For example, if a visually impaired visitor zooms in to 400%, each page will have not only a vertical scrollbar but also a horizontal one. This also happens on small screens. When zoomed in to 400%, the view is roughly the same as on a screen 320 pixels wide.

- **When 400% zoom a scroll bar appears** (Images and Visual Design > Resize and Reflow)
  On this page appears a scroll bar.

Horizontal scrolling is not allowed, even when the viewport is set to or zoomed in at 320 CSS pixels wide (for vertical content) or 256 CSS pixels high (for horizontal content). Make sure the text fits within the screen. Scrolling in both directions is only allowed if it is truly necessary for the meaning or use of the content. Exceptions include tables, meaningful graphics, and maps. These must remain readable, so scrolling within these elements is allowed.

- **Zoom 400% and content is lost** (Images and Visual Design > Resize and Reflow)
  When this page is viewed at a screen resolution of 1280 by 1024 pixels and zoomed in to 400% [320px width] , the following text is partially lost: TEXT .

Zooming to 400% should not impair the readability of any informative element.

- **into text by many issues and same issues as under 1.4.4** (Images and Visual Design > Resize and Reflow)
  Problems arise when the text on this page is zoomed to 400%. Success Criterion 1.4.4 already described that content and/or functionality is lost when zooming in to 200%. The same happens when zooming to 400%. These problems are therefore not mentioned again here. Make sure the problems are solved not only for when zoomed in to 200%, but also for 400%.

- **Functionality and information are lost when a screen width of 320 pixels** (Specific Components > CAPTCHA)
  On page URL, there is an hCaptcha. Below the hCaptcha logo, there is a link labeled "Terms." This link is no longer fully visible when a visitor views the website on a screen that is 320 pixels wide. Additionally, part of the hCaptcha logo extends out of view on the right-hand side. This is not acceptable, as functionality and information are lost in this way.

## SC 1.4.11 Non-text Contrast

- **Informative icons have less than 3,0:1 contrast** (Dynamic Content > Accordion)
  On this page, sections with hidden content are present. The arrow icon used to indicate the open/closed state of these sections has insufficient contrast, currently at X,X :1. This contrast ratio is too low for accessibility.

- **Focus indicator on carousel buttons is < 3.0:1** (Dynamic Content > Carousel)
  On this page a carousel uses buttons to navigate between images. These buttons have a custom focus indicator consisting of a COLOR rectangular background. However, the contrast ratio between this focus indicator and the button background is only X.X :1.

This is insufficient for users to clearly see the keyboard focus.

- **Insufficient color contrast of buttons** (Dynamic Content > Carousel)
  On this page a carousel displays images and has COLOR buttons to navigate between them. The contrast ratio between the button color and the (dynamically changing) carousel background is only X.X:1 . This does not meet the WCAG minimum contrast requirement of 3.0:1 for interactive elements.

- **Focus indicator has too little color contrast** (Dynamic Content > Filters)
  On this page the filter checkboxes display a COLOR border when they receive keyboard focus. The contrast ratio between this border color and the background is X,X:1 .

- **Insufficient contrast of the input border** (Dynamic Content > Filters)
  On this page, the sidebar filters' [checkboxes] [select elements] have a gray border. The section's background color is COLOR , resulting in a color contrast ratio of X,X:1 .

- **Custom social media icons have too little contrast** (Images and Visual Design > Color and Contrast)
  On this page in the footer , the social media icons have been recolored to COLOR , resulting in a contrast ratio of X , X :1 against the white background. While the default colors of social media icons might be exempt from contrast requirements (as decorative elements), *changing * those colors means they must now meet the 3,0:1 contrast ratio.

- **Insufficient color contrast of informative icons** (Images and Visual Design > Color and Contrast)
  The informative icons under "Text" have insufficient color contrast. The COLOR icons against the COLOR background have a contrast ratio of X,X:1, which is below the required 3,0:1 for graphical elements conveying information.

- **Not enough contrast of informative elements** (Images and Visual Design > Color and Contrast)
  On this page there are graphs / schema’s . Some color combinations have insufficient contrast. For example DESCRIBE .

- **Graphical object has insufficient non-text contrast** (Images and Visual Design > Non-text Contrast)
  On this page, the graphical object DESCRIBE does not meet the required 3:1 contrast ratio against adjacent colors. Informative graphical objects such as charts, graphs, icons that convey meaning, and infographic elements must have sufficient contrast so that users with low vision can perceive the information they communicate. Without adequate contrast, essential visual information is lost.

- **UI component has insufficient non-text contrast** (Images and Visual Design > Non-text Contrast)
  On this page, the UI component DESCRIBE does not meet the required 3:1 contrast ratio against the adjacent background. Interactive components such as buttons, input fields, checkboxes, and toggle switches must be visually distinguishable from their surroundings. When the boundary or surface of a component lacks sufficient contrast, users with low vision may not be able to perceive or identify the control.

- **Contrast of icon on button is too low** (Links and Navigation > Buttons)
  On this page, the button with the DESCRIBE icon has insufficient color contrast between the icon and the background. The contrast ratio of X , X :1 is too low. This makes the icon difficult or impossible to see for some users, especially those with low vision or color blindness. Additionally, if the icon is intended to serve as a visual label for an input field, the low contrast means it's not a valid visual label.

- **contrast of icon on button is <3,0:1** (Links and Navigation > Buttons)
  Contrast van icoon op de knop is minder dan 3,0:1

See: <176717826.html#SC-1.4.11-color-of-informative-icons>

Testing note : this is only a failure if it is necessary to see the icon, i.e. when this is the only thing on the button and when there is no text.

- **Custom keyboard focus indicator has insufficient colour contrast** (Links and Navigation > Keyboard)
  Interactive elements on this page have a custom keyboard focus that looks like COLOR on a COLOR background. The contrast ratio between these colors is X , X :1, which is below the required minimum of 3,0:1. Custom keyboard focus indicators must meet contrast requirements, unlike the default browser focus indicator. Since users cannot adjust custom focus indicators, they must have a contrast ratio of at least 3,0:1 against the background.

- **Underlining of links is not visible to every visitor** (Links and Navigation > Links)
  On page URL links in the running text are underlined. The underline color has insufficient contrast against the white background ( X , X :1).

- **link: contrast of focus indicator < 3,0:1** (Links and Navigation > Links)
  <Keyboard_235798847.html>

- **Arrows at submenus do not have enough contrast** (Links and Navigation > Navigation)
  In the main menu, some links have arrow icons to indicate submenus, but the color contrast between the COLOR icons and the COLOR background is insufficient ( X , X :1). Informative icons, like these arrows, must have a contrast ratio of at least 3,0:1 against their background.

- **Contrast of underline is too low** (Links and Navigation > Navigation)
  In the main menu, the current link has an underline with insufficient color contrast. The COLOR underline has a contrast ratio of X , X :1, which is below the recommended minimum of 3,0:1 for visual cues like underlines.

- **Search icon has insufficient contrast** (Links and Navigation > Search)
  <176717826.html#SC-1.4.11-color-of-informative-elements-(icons%2C-inputs%2C-etc)>

- **Search input border has insufficient contrast** (Links and Navigation > Search)
  <176717826.html#SC-1.4.11-color-of-informative-elements-(icons%2C-inputs%2C-etc)>

- **Buttons lack contrast** (Multimedia > Video)
  This page features a video with buttons. The buttons lack sufficient contrast against the video's background, particularly in lighter scenes, where the contrast ratio drops to approximately 1,1:1.

- **Button does not have sufficient contrast** (PDF > Color)
  In this PDF-document on page X there is an interactive button in the upper right corner in the form of three horizontal dashes. This is a button to return to the document's table of contents. The contrast of this is only X,X: 1.

- **Not enough contrast of informative elements** (PDF > Color)
  In this PDF-document on page X under “ TEXT ” there is a COLOR button with an informative COLOR icon of DESCRIBE . The contrast is X,X :1.

- **Edge of selection box does not have enough contrast** (Specific Components > CAPTCHA)
  On this page, there is a checkbox for the reCAPTCHA verification method. The gray border has a low contrast ratio of 1,8:1 compared to the background of the section.

- **Focus indicator does not have enough contrast** (Specific Components > CAPTCHA)
  On this page, there is an hCaptcha. In the image popup, there is a button with three dots in the bottom-left corner. The accessible name of this button is: "get information about hCaptcha and accessibility options." When a visitor clicks this button, several options appear. These options have a focus indicator, which becomes visible when a visitor navigates to an option using the keyboard.

The contrast of this green focus indicator is slightly too low, at 2.9:1. It must be at least 3.0:1. The same color focus indicator is used for language selection. In other places, the contrast is sufficient: the green focus indicator is darker there, with a contrast ratio of 4.3:1, such as for the "Privacy" link.

- **Contrast of UI** (Specific Components > Data Visualisation)
  <176717826.html#SC-1.4.11-color-of-lines%2C-bars%2C-in-schema%E2%80%99s%2C-maps>

- **QR code has insufficient non-text contrast** (Specific Components > QR Code)
  On this page a QR code is present with a contrast ratio of RATIO between the code and its background. A QR code is an informative graphical object and must therefore meet the minimum non-text contrast ratio of 3:1. Insufficient contrast may make the QR code difficult to scan for users with low vision.

- **Insufficient color contrast of UI-elements** (User Input and Forms > Inputs)
  On this page, under the "TEXT" , an ELEMENT is present. The contrast ratio between the COLOR border and the COLOR page's background is X,X:1 .

## SC 1.4.12 Text Spacing

- **Content is missing when text is resized** (Images and Visual Design > Resize and Reflow)
  On this page, when visitors apply text spacing as described in this success criterion, the text under the heading " Heading " becomes partially invisible and unreadable. Visitors often adjust text spacing with custom CSS for improved readability. This page fails to maintain content visibility when such adjustments are made. All information must remain accessible and readable, even with custom text formatting.

- **Text falls over other text** (Specific Components > CAPTCHA)
  On this page, there is a form with hCaptcha. If the checkbox "I am human" is checked, a window opens. This window contains text such as "Select any image...". This may fall over the text "If there is none, click Skip." The text is then no longer easily readable.

## SC 1.4.13 Content on Hover or Focus

- **Hover content disappears when moving pointer toward it** (Dynamic Content > Content on Hover)
  On this page, additional content appears when hovering over an element: DESCRIBE . When the pointer is moved toward this additional content, it disappears before the pointer reaches it.

Users who rely on screen magnification see only a small portion of the screen at a time and need to move the pointer over the additional content to read it. If the content disappears when the pointer leaves the triggering element, these users cannot access the information. WCAG requires that hover-triggered content must remain visible when the pointer is moved over it.

- **Hover or focus content cannot be dismissed** (Dynamic Content > Content on Hover)
  On this page, additional content appears on hover or focus: DESCRIBE . This additional content cannot be dismissed without moving the pointer or focus away from the trigger.

Users who rely on screen magnifiers may find that the additional content obscures the underlying page content. Without a mechanism to dismiss the overlay, such as pressing `Escape`, the blocked content becomes inaccessible. WCAG requires that any content triggered by hover or focus must be dismissible.

- **Hover or focus content disappears automatically** (Dynamic Content > Content on Hover)
  On this page, additional content appears on hover or focus: DESCRIBE . This additional content disappears automatically after a timeout, before the user has finished reading or interacting with it.

Users who need more time to read content, such as those with cognitive or visual disabilities, may not be able to fully consume the information before it vanishes. WCAG requires that hover- or focus-triggered content must remain visible until the user moves the pointer or focus, actively dismisses it, or the information is no longer valid.

- **Content that appears on hover should be easy to close** (Links and Navigation > Buttons)
  On this page, hovering over the button labeled " TEXT " reveals extra content that overlaps other page elements, like the link " TEXT ". This overlapping content can obscure important information and hinder interaction. Users should be able to easily close or dismiss this extra content without requiring mouse or keyboard focus changes.

- **1.4.13 Content on hover or input** (Links and Navigation > Navigation)

- **Additional content on hover disappears** (Links and Navigation > Navigation)
  When hovering over the menu, a submenu opens, but it closes prematurely if the mouse pointer remains within the submenu. This behavior is incorrect. The submenu should remain open as long as the mouse hovers over either the menu item that triggered it or the submenu itself. It should only close when the mouse moves away from both the menu item and the submenu.

- **Failure to make additional content dismissible without moving pointer hover or keyboard focus.** (Links and Navigation > Navigation)
  When hovering over the main menu, additional content appears that overlaps existing page content.

- **Failure to make additional content dismissible without moving pointer hover or keyboard focus.** (Links and Navigation > Navigation)
  The main menu has items with submenus. When a visitor moves the mouse over these items, the submenus appear. These submenus overlap the content of the page.

## SC 2.1.1 Keyboard

- **Navigation buttons not keyboard accessible** (Dynamic Content > Carousel)
  On this page a carousel displays images and uses buttons to navigate between them. These navigation buttons are not keyboard accessible.

- **Dialog can not be closed by a keyboard (ESC) and there is no close button** (Dynamic Content > Dialog)
  On this page, the button with the text " TEXT " opens a dialog window that cannot be closed using the Escape key or a close button. This prevents keyboard-only users from dismissing the dialog and continuing their interaction with the page.

- **Dialog window is not accessible by the keyboard** (Dynamic Content > Dialog)
  On this page, the button with the text " TEXT " opens a dialog window when clicked. This functionality is currently inaccessible to users who cannot use a mouse.

- **Filter can not be operated by keyboard** (Dynamic Content > Filters)
  On this page the sidebar filters are not operable by keyboard. It is not possible to select checkboxes or activate links using keyboard only.

- **Tabs don’t work with the keyboard** (Dynamic Content > Tabs)
  On page URL there are tabs consisting of sections with hidden content that can be revealed when a visitor clicks on the tab button with the mouse pointer. This functionality is not accessible by the keyboard.

- **Button cannot be operated with Spacebar and Enter key** (Links and Navigation > Buttons)
  On this page, the button labeled " TEXT " is not keyboard accessible. It cannot be activated using the Spacebar or the Enter key. All buttons must be operable using both the Spacebar and the Enter key. This is standard keyboard interaction for buttons and is essential for users who rely on keyboard navigation.

- **Extra cannot be triggered using the keyboard** (Links and Navigation > Buttons)
  On this page, under/next to " TEXT " a button displays additional content on hover, but this functionality is not available for keyboard users. Tooltips must be accessible to keyboard-only users.

- **Element is not keyboard accessible** (Links and Navigation > Keyboard)
  On this page, the element with the text " TEXT " is not keyboard accessible. All interactive elements, including links, must be operable using the keyboard alone.

- **2.4.4 Element not by keyboard** (Links and Navigation > Links)
  <Keyboard_235798847.html>

- **Submenus are not keyboard accessible** (Links and Navigation > Navigation)
  The main menu on this site contains submenus that are not keyboard operable. / The submenu button in the mobile menu have the same problem.

Submenus must be fully accessible via keyboard. Users should be able to open, navigate, and select items within submenus using only the keyboard. Additionally, the information contained within these submenus must be accessible to all users, regardless of whether they use a mouse or keyboard. Finally, the pages linked from these submenu items should contain *all * the information presented in the submenus themselves. Information should not be exclusively available only within the submenu.

- **Video can not be closed by keyboard** (Multimedia > Video)
  On this page, under " TEXT ", a video can be opened in fullscreen mode, but this fullscreen mode cannot be exited using the keyboard.

- **Captcha cannot be controlled by keyboard** (Specific Components > CAPTCHA)
  On this page a form is present with Captcha. This Captcha is only accessible to visitors with a mouse.

- **Captcha test cannot be performed using the keyboard** (Specific Components > CAPTCHA)
  On this page, there is a form with hCaptcha. A challenge may appear with text like "Click on the object that is rotated relative to its neighbors." It is not possible to select this object using the keyboard, making the captcha inaccessible for people who cannot use a mouse.

- **Not by keyboard** (Specific Components > Data Visualisation)
  <Keyboard_235798847.html#SC-2.1.1-Not-by-keyboard>

- **Input is not keyboard accessible** (User Input and Forms > Inputs)
  On this page, under the " HEADING ", an input field labeled " TEXT " is present. This input field is not keyboard accessible.

All input fields must be operable using the keyboard. Ensure that users can interact with the input field using only keyboard navigation.

## SC 2.1.2 No Keyboard Trap

- **Keyboard trap** (Dynamic Content > Change of Context)
  On this page when a visitor navigates using the keyboard, keyboard focus moves from the browser address bar to the "TEXT" button, then gets trapped within the form's interactive elements. Users are unable to navigate out of the form to other interactive elements on the page.

This keyboard trap prevents visitors who use only a keyboard from freely navigating the page. For example people with motor or visual impairments. This makes the website less usable and less accessible.

- **Keyboard focus is trapped inside a component** (Links and Navigation > Focus)
  On this page, keyboard focus gets trapped inside a component: DESCRIBE . The user cannot move focus away from this component using the Tab or Shift+Tab keys.

When keyboard focus becomes trapped, users who navigate exclusively by keyboard cannot reach the rest of the page. This affects users with motor or visual disabilities who rely on keyboard navigation. A keyboard trap effectively renders the remaining page content inaccessible. It must always be possible to move focus out of a component using standard keyboard interaction such as Tab or Shift+Tab.

## SC 2.1.4 Character Key Shortcuts

- **Single character shortcuts are present** (Multimedia > Video)
  The video is included in a a Vimeo video player that utilizes single-character keyboard shortcuts (for example, 's' for sharing, 'd' for details). These shortcuts conflict with screen readers because they remain active even when keyboard focus is on other elements within the player. This creates issues for users relying on voice control, as these letters might be spoken, and can be disruptive for those who accidentally press keys.

- **Single character shortcuts are present** (Multimedia > Video)
  This page includes a Youtube video player that utilizes single-character keyboard shortcuts, such as 'k' to play or pause the video and 'm' to mute the sound. These shortcuts conflict with screen readers because they are also active when the keyboard focus is on another element in the video player. This can cause problems for people using voice control, as these letters may appear in spoken words. It can also be inconvenient for those who accidentally press a key.

## SC 2.2.1 Timing Adjustable

- **Carousel rotates automatically without pause option** (Dynamic Content > Carousel)
  On this page, a carousel automatically rotates through slides. Users cannot pause, stop, or adjust the timing of the rotation. Users who need more time to read the content, such as users with cognitive disabilities or those using assistive technologies, may miss important information.

- **Caroussel van not be paused to read the text** (Dynamic Content > Carousel)
  This page features an automatically rotating image carousel with accompanying text. The automatic rotation limits the time users have to read the text, creating an accessibility issue.

- **There is a time limit on the reCAPTCHA** (Specific Components > CAPTCHA)
  On this page, there is a form with the verification method reCAPTCHA. When the checkbox is checked but the submit button has not yet been pressed, the message "Verification expired. Please check the checkbox again." appears after some time. There is a time limit present. This can be an issue for some users.

- **There is a time limit set for the captcha** (Specific Components > CAPTCHA)
  On this page there is a form with hCaptcha. If a visitor fills it out correctly, but then is inactive for a few minutes, he must retake the test. That means there is a time limit set for hCaptcha. That could be a problem for someone who takes a lot of time to fill out the rest of the form.

This limit is not part of the captcha itself, because the time starts running only after the captcha is completed. Therefore, the time limit must meet accessibility requirements.

- **HTML5 validation is not accessible for many visitors** (User Input and Forms > Error Messages)
  On this page, a form uses only HTML5 validation for the " NAME " and " NAME " input fields. HTML5 validation messages are not consistently supported across browsers and screen readers. Browsers render these messages differently, and there's no guarantee of their visibility or duration.

- **The error messages disappear after a while** (User Input and Forms > Error Messages)
  On this page, error messages appear briefly after form submission, but then disappear. This short duration may not be enough time for all users to read and understand the errors.

- **Automatic re-direct** (User Input and Forms > Inputs)
  This page automatically redirects users to another page after XX seconds. Currently, there is no mechanism to disable, adjust, or extend the time limit.

- **Automatic refresh of the page cannot be turned off or adjusted** (User Input and Forms > Inputs)
  This page automatically refreshes every XX seconds. To comply with accessibility guidelines, users must be able to control this automatic refresh. Currently, there is no mechanism to disable, adjust, or extend the time limit.

- **Carousel can not be paused to read the text** (User Input and Forms > Inputs)
  This page features an automatically rotating image carousel with accompanying text. The automatic rotation limits the time users have to read the text, creating an accessibility issue.

- **Message disappears too quickly** (User Input and Forms > Inputs)
  On this page, form submission results in a message that appears and disappears after a short time. This time limit may not be sufficient for all users to comfortably read or interact with the message.

- **Message disappears too fast** (User Input and Forms > Time Limit)
  On this page, an announcement or error message disappears automatically after a short time. Users who need more time to read the message may miss important information, including users with cognitive disabilities, low vision, or those using assistive technologies.

- **Page redirects automatically after time** (User Input and Forms > Time Limit)
  On this page, the user is automatically redirected to another page after a set time. This does not give users sufficient time to read or interact with the content, particularly users with cognitive disabilities or those using assistive technologies.

- **Page refreshes automatically after a while** (User Input and Forms > Time Limit)
  This page automatically refreshes every XX seconds.

- **Session expires without prior warning** (User Input and Forms > Time Limit)
  On this page there's a poll. The session of this poll expires quickly without prior warning.

- **Too little time to extend session** (User Input and Forms > Time Limit)
  On this page, there is a poll. When the session of this poll expires, a warning appears to extend the session. This warning disappears too quickly. There is too little time to extend the session.

## SC 2.2.2 Pause, Stop, Hide

- **Animation plays automatically without pause control** (Dynamic Content > Carousel)
  On this page, an animated GIF, video, or other animation starts playing automatically. There is no mechanism to pause, stop, or hide the animation. Automatically moving content can be distracting for users with attention disorders and can cause problems for users with vestibular disorders. Screen readers may also have difficulty with content that continuously changes.

- **Moving content cannot be stopped / paused / played back** (Dynamic Content > Carousel)
  On this page there is a carousel / animation / content that shows a new image every few seconds. This carousel cannot be stopped, paused or hidden.

If pieces of content on a web page move, blink or scroll, this can be disruptive for people with cognitive impairment, as they are continuously distracted by the moving content while trying to read the 'static' content.

- **Animation cannot be paused, stopped, or hidden** (Multimedia > Animation)
  On this page there is an animation or moving content ( DESCRIBE ) that plays for more than 5 seconds and cannot be paused, stopped, or hidden. This can be severely distracting for users with cognitive disabilities or attention disorders. Additionally, screen reader users may find it difficult to read other content on the page while continuous movement is present.

- **Animation plays automatically and lacks a stop button** (Multimedia > Video)
  This page features a GIF/animation that plays automatically and cannot be paused or stopped. Automatically playing media can be disruptive for users with cognitive disabilities, hindering their ability to focus on other content.

- **Video plays automatically and lacks a stop button** (Multimedia > Video)
  This page features a video that plays automatically and cannot be paused or stopped. Automatically playing media can be disruptive for users with cognitive disabilities, hindering their ability to focus on other content.

## SC 2.3.1 Three Flashes or Below Threshold

- **Flashing content is present on the page** (Dynamic Content > Carousel)
  In a carousel on this page there is content that flashes more than three times per second.

Flashing or strobe-type effects in videos, graphics, or animations can put some people (those with photosensitive epilepsy) at risk for seizures. Additionally, people with vestibular or migraine disorders can also be severely affected by flashing content. However, small flash areas or very low contrast flashes may be acceptable from a seizure perspective, even though they are still likely to be annoying and distracting, which can be an issue for people with attention deficit disorders or cognitive disabilities.

- **Video with flashing content** (Multimedia > Video)
  On this page a video with flashing content is present.

Flashing or strobe-like effects in videos, graphics, or animations pose a risk of seizures for individuals with photosensitive epilepsy. Furthermore, these effects can severely impact those with vestibular or migraine disorders. While small flash areas or low-contrast flashes *may * be technically acceptable from a seizure perspective, they can still be disruptive and irritating, potentially causing issues for people with attention deficit disorders or cognitive disabilities.

## SC 2.3.3 Animation from Interactions

- **Prefers-reduced-motion setting is not respected** (Multimedia > Animation)
  The website does not respect the operating system's prefers-reduced-motion setting. Animations continue to play for users who have requested reduced motion through their system preferences. This can cause discomfort, dizziness, or nausea for users with vestibular disorders or motion sensitivity.

## SC 2.4.1 Bypass Blocks

- **Skip link target is not the main content** (Dynamic Content > Filters)
  On this page a sidebar containing filters is the target of a skip link. Because this sidebar is present on multiple pages, this skip link does not point to unique content.

- **Skip link does not skip sidebar navigation** (Links and Navigation > Logo / Skiplink)
  On this page, a sidebar with navigation is present, but the skip link does not bypass it, incorrectly directing visitors to a point before the sidebar. Skip links are designed to allow users to bypass repeated content blocks, including navigation menus and sidebars.

- **Skip link does not work and there is no alternative** (Links and Navigation > Logo / Skiplink)
  This page has a skip link, but it is not functional. There are no landmarks and no proper heading structure to provide an alternative method to bypass the repeating content.

- **Skip link is not the first or second link (except for cookie notification)** (Links and Navigation > Logo / Skiplink)
  This page has a skip link, but it is not positioned correctly. It should be the first or second link on the page (excluding the cookie notification). Skip links are designed to be the first interactive element encountered by keyboard users and screen readers, allowing them to bypass repeated content blocks.

- **Skiplink does not point to the right location** (Links and Navigation > Logo / Skiplink)
  On this page, the skip link targets " TEXT ", but there is additional unique content above this target. Skip links should direct visitors to the very beginning of the main content, allowing them to bypass all repeated or non-essential content.

- **Skiplink does not work: focus does not move to right location** (Links and Navigation > Logo / Skiplink)
  This page has a skip link, but it doesn't function correctly. It fails to move the focus to the intended destination, leaving it at the top of the page. Skip links are crucial for bypassing repeated content blocks, enabling visitors to jump directly to the main content. There are no landmarks and no proper headings structure as alternative to a working skiplink.

- **Skiplink is not visible on focus** (Links and Navigation > Logo / Skiplink)
  On this page, the skip link may remain invisible even when it receives keyboard focus. Skip links must either be visible at all times or become visible when they receive focus. This allows visitors to see and utilize the skip link.

- **There is way to bypass blocks of repeating content** (Links and Navigation > Logo / Skiplink)
  This page lacks a solution to bypass blocks of repeating content. There is no skip link, no landmarks and no proper headings structure as alternative to a working skiplink.

## SC 2.4.2 Page Titled

- **PDF title does not describe the content** (PDF > Document Settings)
  This PDF-document has the title "TITLE" set in its file properties, which does not adequately describe the document's content. PDF documents should have clear and descriptive titles that accurately reflect their purpose or subject matter. This helps users, especially those with disabilities, quickly identify the document's relevance.

- **PDF title not displayed (file name is displayed)** (PDF > Document Settings)
  This PDF document has a descriptive title, but it's not displayed in the title bar; the file name is shown instead. The document title should be displayed in the title bar to help users quickly identify the document's content. This is especially beneficial for users with disabilities who rely on assistive technologies. Correct this by adjusting the file properties of the source file or the PDF document itself to ensure the descriptive title appears in the title bar.

- **PDF-document has no title** (PDF > Document Settings)
  This PDF document does not have a title set in its file properties. PDF documents should have the title that clearly describe their purpose or content. This title should also be displayed in the title bar instead of the file name. This helps users, particularly those with disabilities, quickly identify the document's relevance. The title can be added or corrected in the source file or the PDF document's properties.

- **Title of the PDF document is not descriptive and not visible** (PDF > Document Settings)
  This PDF document has the title " TEXT " set in its file properties, which is not descriptive enough. Additionally, the file name is displayed in the title bar instead of the document title. PDF documents should have clear and descriptive titles that accurately reflect their purpose or subject matter. This title should also be displayed in the title bar. This helps users, especially those with disabilities, quickly identify the document's relevance. The title can be improved, and the title bar display can be corrected, by editing the file properties of the source file or the PDF document itself.

- **PDF title does not describe the content** (PDF > Document Title)
  This PDF-document has the title "TITLE" set in its file properties, which does not adequately describe the document's content. PDF documents should have clear and descriptive titles that accurately reflect their purpose or subject matter. This helps users, especially those with disabilities, quickly identify the document's relevance.

- **PDF title not displayed (file name is displayed)** (PDF > Document Title)
  This PDF document has a descriptive title, but it's not displayed in the title bar; the file name is shown instead. The document title should be displayed in the title bar to help users quickly identify the document's content. This is especially beneficial for users with disabilities who rely on assistive technologies. Correct this by adjusting the file properties of the source file or the PDF document itself to ensure the descriptive title appears in the title bar.

- **PDF-document has no title** (PDF > Document Title)
  This PDF document does not have a title set in its file properties. PDF documents should have the title that clearly describe their purpose or content. This title should also be displayed in the title bar instead of the file name. This helps users, particularly those with disabilities, quickly identify the document's relevance. The title can be added or corrected in the source file or the PDF document's properties.

- **Title of the PDF document is not descriptive and not visible** (PDF > Document Title)
  This PDF document has the title " TEXT " set in its file properties, which is not descriptive enough. Additionally, the file name is displayed in the title bar instead of the document title. PDF documents should have clear and descriptive titles that accurately reflect their purpose or subject matter. This title should also be displayed in the title bar. This helps users, especially those with disabilities, quickly identify the document's relevance. The title can be improved, and the title bar display can be corrected, by editing the file properties of the source file or the PDF document itself.

- **Multiple pages have the same `title` text** (Structure and Semantics > Page Title)
  Page URL1 and URL2 have the same text in the `<title>`-element of the page: “TEXT” .

Each page should have a unique and descriptive title. Duplicate titles can confuse users and make navigation between pages more difficult, especially for those who rely on the title bar or browser tabs to identify pages.

- **The `<title>`-element does not describe content** (Structure and Semantics > Page Title)
  The title of this page, " TITLE ", is not a good description of the page's content. The `<title>`-element should provide a clear and concise summary of the page's topic, preferably followed by the organisation's name. This helps users understand the page's content and navigate between different pages or browser tabs more effectively.

- **The `title` element does not change with dynamic content** (Structure and Semantics > Page Title)
  On this website, page content changes dynamically without a corresponding URL change. However, the text in the `title` element is not updated to reflect these content changes. When content updates dynamically, the `title` element should also be updated to accurately describe the current content. Screen reader users often rely on the title to understand the page's purpose, and an outdated title can be misleading.

- **The `title` element does not contain text** (Structure and Semantics > Page Title)
  The `title` element on this page is empty. The `title` element is mandatory and should contain a concise and informative description of the page's content. Ideally followed by the name of the company/organisation. This helps users understand the page's purpose and aids in navigation.

- **There is no `<title>` element present** (Structure and Semantics > Page Title)
  This page is missing a `title` element. The `title` element is mandatory for every webpage and should contain a unique and concise description of the page's content, preferably followed by the organization's name. This title is displayed in the browser tab and is crucial for users to understand the page's purpose and navigate between different pages or browser tabs.

## SC 2.4.3 Focus Order

- **Focus order in accordion is not correct** (Dynamic Content > Accordion)
  On this page, under " TEXT ", sections with hidden content have a focus order issue. When a block is open, keyboard focus does *not* move inside to the interactive elements within the panel. Instead, it jumps to the next accordion header. This is disorienting for keyboard users.

- **Focus order in accordions is not correct** (Dynamic Content > Accordion)
  On this page, under " TEXT ", sections with hidden content have a focus order issue. Elements within *collapsed* blocks are still receiving keyboard focus, even though they are not visible. This is confusing for keyboard users who can see the screen.

- **Dot navigation has a focus management issue** (Dynamic Content > Carousel)
  On this page, the dot navigation used for scrolling to different sections has a focus management issue. When a dot is activated using the keyboard, the focus incorrectly moves to the top of the page instead of the section that the dot navigates to. This is not a logical focus order and can be disorienting for keyboard users.

- **Focus does not return to expected location** (Dynamic Content > Dialog)
  On this page, the link/button with the text " TEXT " opens a dialog window. After closing the dialog, keyboard focus does not return to the triggering element or the next logical element in the page's focus order.

- **Focus order is not logical when a dialog window is open** (Dynamic Content > Dialog)
  On this page, the button with the text "TEXT " opens a modal dialog. However, keyboard focus is not automatically placed within the dialog when it opens.

- **Keyboard focus gets outside the dialog window** (Dynamic Content > Dialog)
  On this page, a button/link opens a dialog window . Currently, keyboard focus can escape the open dialog and move to the underlying page content.

This is incorrect behavior for modal dialogs. While the dialog is open, keyboard focus *must* be constrained within the dialog.

- **Tab panel without interactive elements has no `tabindex=0`** (Dynamic Content > Tabs)
  There are tabs consisting of sections with hidden content that can be revealed when a visitor clicks on the tab button. The tabpanel under “ TEXT ” has no focusable elements. This means that this content is not in the tab order and will not be read by the screen reader.

- **The focus order in the tabs does not work as expected** (Dynamic Content > Tabs)
  On page URL there are tabs consisting of sections with hidden content that can be revealed when a visitor clicks on the tab button. The keyboard focus order does not work as expected.

Tabs consist of tab links and tab panels. One tab panel is visible, while the others are hidden. When a visitor clicks on a tab or activates it using the keyboard, the content of the corresponding tab panel is displayed. Arrow keys are used to navigate through the tab links.

- **Interactive elements are nested, creating redundant focal points** (Links and Navigation > Buttons)
  On this page, a link or button is nested inside another link or button with the name "NAME" .

This structure can create unnecessary focus points when one navigates using the keyboard.

- **Focus order is not logical due to a nested interactive element** (Links and Navigation > Keyboard)
  This page contains a button/link that has another interactive, focusable element nested inside it. Nesting interactive elements within other interactive elements (like buttons or links) make the keybord focus not logical. This causes an "empty focus point". This is confusing and creates a poor experience for users of assistive technologies.

- **Invisible element gets keyboard focus** (Links and Navigation > Keyboard)
  On this page, the keyboard focus lands on an invisible interactive element after the link/button/input . Invisible interactive elements should *not* be included in the focus order. This can lead to accidental activation and confusion, particularly for users who rely on keyboard navigation.

- **Keyboard focus can leave a dialog window** (Links and Navigation > Keyboard)
  On this page, keyboard focus can leave a dialog or modal window, allowing users to interact with content behind the overlay. This creates a confusing experience for keyboard users who may lose their place or be unable to close the dialog.

- **Keyboard focus is not logical** (Links and Navigation > Keyboard)
  On this page the " NAME " button opens more articles. The keyboard focus does not shift to the first newly added article, but to LOCATION . This focus order is illogical and can be disorienting for users, particularly those who rely on keyboard navigation. When interactive elements do not receive focus in a logical order, it impacts users with various disabilities, including mobility impairments, reading disabilities, and low vision. Keyboard focus order should be consistent with the visual layout and flow of the content.

- **Keyboard focus order illogical due to use of tabindex attribute on an element that should not receive focus** (Links and Navigation > Keyboard)
  On page URL the “TEXT” and “TEXT” are not-interactive elements, but they are made focusable by adding `tabindex=0`. These elements should not get focus and make the focus order not logical.

- **Keyboard focus sequence is illogical due to use of tabindex** (Links and Navigation > Keyboard)
  The focus order on this page is not logical. One or more elements have been removed from the natural tab order by using the `tabindex` attribute with a value greater than 0. This disrupts the expected tabbing sequence for keyboard users.

- **After unfolding submenu, other elements get keyboard focus first** (Links and Navigation > Navigation)
  When the page is zoomed in, a menu button appears in the header, revealing the mobile menu. When a submenu is opened within this mobile menu, the keyboard focus follows an incorrect order, reaching other elements *before* the submenu items. This is not a logical focus order and can be disorienting.

- **Focus order in the mobile menu is not correct** (Links and Navigation > Navigation)
  When the page is zoomed in, a menu button appears in the header, revealing the mobile menu. However, keyboard focus does not move into the mobile menu when it opens. This is a critical accessibility flaw.

- **Keyboard focus gets outside the mobile menu** (Links and Navigation > Navigation)
  When the page is zoomed in, a menu button appears in the header, revealing the mobile menu. Currently, keyboard focus can escape the mobile menu and move to the underlying page while the menu remains open. Keyboard focus must be managed correctly for mobile menus. When the menu is open, focus should be *trapped* within the menu to prevent accidental interaction with the underlying page.

- **Keyboard focus on invisible elements** (Links and Navigation > Navigation)
  <Keyboard_235798847.html>

- **Mobile menu does not work properly with keyboard focus** (Links and Navigation > Navigation)
  On a small screen, a menu button opens the mobile navigation menu. Keyboard focus management is incorrect for this menu. The mobile menu overlaps the page content, but keyboard focus is not trapped within the menu. This allows visitors to tab to elements on the underlying page while the menu is still open, which can lead to confusion and accidental interactions.

- **Keyboard focus comes on invisible elements** (Specific Components > CAPTCHA)
  On this page, the verification method reCAPTCHA is used. This is indicated by its logo at the bottom right of the screen. The keyboard focus is visible on the links in view, but then the focus moves to two hidden links. It is not clear where the focus is located.

- **Close button cookie banner does not get first keyboard focus** (Specific Components > Cookie Banners)
  The first time a visitor accesses the website, a cookie banner appears. When the page is viewed on a small screen, this cookie banner covers a part of the page making the content and the functionality invisible. To close this banner, the visitor needs to tab to the very bottom of the page.

- **Order of keyboard focus is not correct for tabs** (Specific Components > Cookie Banners)
  The cookie banner contains the tabs "Consent", "Details", and "About". When a visitor activates the "Details" tab, the keyboard focus first moves through the "About" or "Consent" tabs before reaching the content associated with "Details". This is not how it should function.

- **Focus order in form is not logical** (User Input and Forms > Inputs)
  On this page, the tab order of input fields within the form is illogical. While the visual order is element 1, element 2, element 3 , the tab order is element 3, element 2, element 1 . The tab order must follow the visual order of elements.

## SC 2.4.4 Link Purpose (In Context)

- **Best practice for SC 2.4.4 `Title` attribute repeats the link text** (Links and Navigation > Links)
  Het volgende wordt niet afgekeurd, maar je kunt het wel verbeteren om de website gebruiksvriendelijker te maken voor bezoekers die een schermlezer gebruiken. Aan veel links op de website is een `title`-attribuut toegevoegd waarin de tekst van de link nog een keer staat. Dit zorgt ervoor dat sommige schermlezers dezelfde tekst twee keer voorlezen. Om deze herhaling te voorkomen, kun je het `title`-attribuut hier beter verwijderen.

- **Image opens full screen, link target unknown** (Links and Navigation > Links)
  On this page, the image under " TEXT " functions as a link that opens a fullscreen view of the image when clicked. However, this functionality is not conveyed in the HTML, making it inaccessible to blind users. They cannot perceive that the image is a link or that it triggers a fullscreen view.

- **Link has no clear purpose** (Links and Navigation > Links)
  On this page, under " TEXT ", there is a link that lacks content and, therefore, has no discernible link purpose. This makes it impossible for blind users (and those relying on screen readers) to understand where the link leads.

- **Link text contains unreadable characters** (Links and Navigation > Links)
  On this page, the link with the text " TEXT " under " TEXT " contains non-readable characters (for example, dashes, underscores, or other symbols ). These characters can obscure the link's purpose, particularly for screen reader users.

- **Link text is not clear enough** (Links and Navigation > Links)
  On this page, multiple links contain the non-informative text " TEXT ". This text does not adequately describe the link's destination, creating ambiguity, especially for users with cognitive disabilities or those relying on screen readers. Vague link text like " read more " or " click here " should be avoided.

- **Link with image, link target is unknown** (Links and Navigation > Links)
  On this page, an image under " TEXT " functions as a link, but its `alt` attribute is empty (`alt=""`), hiding the image from screen readers. This results in a link with no accessible content, making its destination unclear. This also violates WCAG Success Criterion 4.1.2, as the link lacks an accessible name.

- **Links have same text but different destinations** (Links and Navigation > Links)
  On this page the link " TEXT " under the heading " HEADING " points to URL1 . Under the heading “ Heading ”, a link with the same text is present, but the destination of this second link is different.

There are several links available in the sample with the same text, but a different link target. This can be confusing for users.

- **Short link texts** (Links and Navigation > Links)
  On this page, the pagination links lack sufficient context. While sighted users understand that "1", "2", "3", etc. represent page numbers, this is not clear to users with low vision or those using screen readers.

- **` title` attribute of the link is the same as link text (advice)** (Links and Navigation > Links)
  Some links on this page have a `title` attribute that simply duplicates the link text. This redundancy is not helpful and can be annoying for screen reader users, as they will hear the same text repeated.

- **Logo is a link, but target is unknown** (Links and Navigation > Logo / Skiplink)
  The logo at the top of the page, which is also a link, lacks descriptive text for its destination. This makes it difficult for visitors relying on assistive technologies, like screen readers, to understand where the link leads.

- **Menu item has wrong name, link target is not clear** (Links and Navigation > Navigation)
  On this page, the menu item with the text " TEXT " does not clearly describe the link's destination. Menu items should have concise and informative labels that accurately reflect the content they lead to.

- **pagination: link text 1, 2, 3** (Links and Navigation > Navigation)
  <Links_422608897.html>

- **Destination of links in reCAPTCHA is not clear** (Specific Components > CAPTCHA)
  On this page, there is a form with the verification method reCAPTCHA. It contains two links, "Privacy" and "Terms".

These links lack context with the surrounding content, making their purpose unclear. Blind users can request a list of links on the page, but it won't be clear that these links lead to pages about reCAPTCHA.

- **Destination of the link on the logo is not clear** (Specific Components > Cookie Banners)
  The cookie banner contains a logo with the visible text "Powered by Cookiebot by Usercentrics". The accessible name of the link is "[logo] - opens in a new window". This text does not clearly indicate the destination of the link.

## SC 2.4.5 Multiple Ways

- **No second way to find a page** (Links and Navigation > Navigation)
  There is no second way to find the pages of this website. Website pages can only be found through a single link on another page. All pages and pdf documents on the website should be accessible through multiple ways: either directly or via intermediary pages with relevant keywords and links to the documents.

- **Only one way to locate content within the website** (Links and Navigation > Site-wide)
  On page URL , the website provides only one mechanism to locate the page within the site (for example, only the main navigation). No alternative way to find content is available, such as a search function, sitemap, or table of contents. Different users have different preferences and abilities when navigating a website. Users with cognitive disabilities may struggle with complex navigation structures and benefit from having a search function or sitemap as an alternative. Providing multiple ways to find content ensures that all users can locate the information they need.

## SC 2.4.6 Headings and Labels

- **Accessible names of navigation buttons are not clear enough** (Dynamic Content > Carousel)
  On this page a carousel uses "previous" and "next" buttons for navigation.

While being functional, these labels are not sufficiently descriptive.

- **Buttons to show more content all have the same text** (Dynamic Content > Filters)
  On this page a sidebar with filters contains sections that can be opened using " Show more " buttons. However, all these buttons share the same label, despite controlling different sections. This lack of distinct labels makes it impossible for visually impaired users, relying on screen readers, to understand which section each button controls.

- **Button name does not describe what the button does** (Links and Navigation > Buttons)
  On this page, the button labeled " TEXT " has the function DESCRIBE , but its accessible name is " NAME ", which does not accurately describe its function. This makes it difficult for blind users and those relying on screen readers to understand the button's purpose. The accessible name should clearly and concisely convey the button's action.

- **Buttons with the same function have different text** (Links and Navigation > Buttons)
  On this page, the button labeled " TEXT1 " has the same functionality as the button labeled " TEXT2 " on page URL2 . Inconsistency in button labels for the same function across different pages can be confusing, especially for users with cognitive disabilities.

- **Buttons with the same text perform a different function** (Links and Navigation > Buttons)
  This page contains multiple buttons with the same visible text: " TEXT ". However, these buttons perform different functions. This can be confusing for screen reader users, as the identical text does not distinguish between the different actions the buttons perform.

- **Menu button for the mobile menu lacks a good text alternative** (Links and Navigation > Navigation)
  On small screens, a menu button with the accessible name " NAME " opens the mobile navigation menu. This name does not accurately describe the button's function. Furthermore, the button's function changes to "close menu" once the menu is open, but the accessible name doesn't reflect this change. When a button's function changes, its accessible name must be updated accordingly.

- **Multiple iframes: title text **not unique/not meaningful**** (Multimedia > Video)
  This page contains multiple iframes, each with the non-unique and unhelpful title "TEXT". Iframes require descriptive titles, typically provided in the `title` attribute. These titles must clearly and concisely describe the content *within * each iframe, giving users, especially those using screen readers, sufficient information to decide whether interacting with the iframe's content is worthwhile.

- **The type of content is missing in the `title`attribute** (Multimedia > Video)
  This page contains an iframe with the `title` attribute " TEXT ". While a `title` attribute is present, it should provide a *more descriptive * title. The title should clearly and concisely describe the content within the iframe, giving users, especially those using screen readers, sufficient information to decide whether they want to interact with the iframe's content.

- **Button text does not describe the function clearly enough** (Specific Components > Cookie Banners)
  In the footer of every page, there is a button to open the cookie settings. The accessible name of this button is “Open widget”. This name does not describe the function of the button.

- **Table head contains non descriptive text** (Structure and Semantics > Data Tables)
  The data table under “Heading” contains text in table head row/column which does not describe the related data cells.

For users using screen readers, descriptive table head is necessary to understand the table structure.

- **Form label does not describe its input field** (Structure and Semantics > Descriptive Text)
  On this page, the form label " TEXT " does not clearly describe the purpose of the associated input field.

Form labels must clearly indicate what information is expected from the user. When a label is vague or generic, such as "Enter value" or "Field 1", users of assistive technology cannot determine what input is required without consulting surrounding context. Screen reader users in particular often navigate from field to field and rely solely on the label to understand each input's purpose.

- **Heading does not describe its section** (Structure and Semantics > Descriptive Text)
  On this page, the heading " TEXT " does not adequately describe the content of its section.

Headings must clearly and accurately describe the content they introduce. Screen reader users frequently navigate by headings to get an overview of the page structure. When a heading is vague or generic, such as "More info" or "Click here", these users cannot determine the purpose of a section without reading its full content. This impedes efficient navigation.

- **Poor quality heading text** (Structure and Semantics > Headings)
  On this page, some headings do not adequately describe the content that follows them. Headings like "Quick access to," "Direct access to," and "Go to" are too generic and don't provide meaningful information about the content's purpose. Screen reader users often rely on headings to navigate and understand page structure. Therefore, headings should be clear, concise, and accurately reflect the topic of the following content.

- **Label text not unique within one page** (User Input and Forms > Labels)
  On this page, the label " TEXT" appears twice. The difference between these input fields is not clear from the label text or the image's `alt` text. When a label is used multiple times on a page but refers to different input fields, the labels *must* be distinct. Even for similar fields (for example, billing and shipping zip codes), each must have a unique, descriptive label. The identical label "TEXT" for two different inputs creates ambiguity.

- **Label text or image is unclear** (User Input and Forms > Labels)
  This page contains a form. The input field labeled "NAME" has a label that may not be meaningful to all users. Labels for input fields must clearly and unambiguously indicate the expected input. While labels can be text or images, they must be readily understandable by the target audience. As this website is intended for the general public, the label must be clear, concise, and universally understandable, clearly specifying the type of input expected in the field.

- **The accessible name of the button does not change when the function changes** (User Input and Forms > Login / Authentication)
  On this page, the [login] form's "Wachtwoord" (password) field has a button with an eye icon to show/hide the password. However, the accessible name of this button does not change to reflect its changing function. When a button's function toggles (for example, "Show password" vs. "Hide password"), its accessible name must also be updated dynamically.

## SC 2.4.7 Focus Visible

- **Keyboard focus not visible on buttons** (Dynamic Content > Carousel)
  On page URL a carousel uses buttons to navigate between images. These buttons lack a visible keyboard focus indicator.

- **Keyboard focus is not visible on the button** (Links and Navigation > Buttons)
  On this page, the button with text " TEXT " lacks a visible keyboard focus indicator. Keyboard-only users need a clear visual cue to know which element has focus and when they can activate a button.

- **Keyboard focus is not visible** (Links and Navigation > Keyboard)
  On all pages of this website, the default keyboard focus style has been removed from interactive elements and no custom focus indicators have been provided as an alternative.

Keyboard focus *must* be visible on all interactive elements (links, buttons, input fields). Keyboard-only users need this visual cue to know where they are on the page and to interact with elements correctly.

- **keyboard focus is not visible** (Links and Navigation > Links)
  <Keyboard_235798847.html>

- **keyboard focus is removed (outline:none)** (Links and Navigation > Links)
  <Keyboard_235798847.html>

- **Search bar focus is not visible** (Links and Navigation > Search)
  <Keyboard_235798847.html#SC-2.4.7-keyboard-focus-is-not-visible>

- **Focus indicator is not visible in the cookie settings screen** (Specific Components > Cookie Banners)
  In the footer of every page, there is a button to open the cookie settings. The keyboard focus is not visible on the interactive elements in this window because `outline: 0` has been added in the CSS. Ensure the focus is visible by removing this property and adding a visible focus style. The same issue occurs with the cookie banner. When someone views the website with a screen resolution of 1280 by 1024 pixels and zooms in to 400%, the focus indicator is not visible on the "Allow all", "Allow selection", and "Decline" buttons.

## SC 2.4.11 Focus Not Obscured (Minimum)

- **Keyboard focus is obscured by “ **element** ”** (Dynamic Content > Dialog)
  On this page the “ ELEMENT ” covers a part of the page on small screens. Interactive elements *underneath* this “ ELEMENT ” can still receive keyboard focus, even though they are visually obscured.

- **Keybord focus obscured** (Images and Visual Design > Resize and Reflow)
  <Keyboard_235798847.html#SC-2.4.11-keyboard-focus-is-obscured>

- **Elements that get keyboard focus are covered** (Links and Navigation > Keyboard)
  On this page, when the website is resized to a smaller resolution, a sticky header/footer obscures part of the page content. While interactive elements like " EXAMPLE " still receive keyboard focus, the focus indicator is hidden behind the sticky header/footer . This makes it impossible for keyboard users to see where the focus is located.

- **Keyboard focus obscured by mobile menu** (Links and Navigation > Keyboard)
  When this page is viewed on a small screen with the mobile menu open, the menu overlaps interactive elements on the underlying page (like the links " LINK " and " LINK "). These underlying elements can still receive keyboard focus, even though they are hidden by the menu. Focusable elements *must * be visible. Allowing focus on hidden elements creates confusion for keyboard and screen reader users.

- **Focus no longer visible because cookie banner covers part of page when zoomed in** (Specific Components > Cookie Banners)
  If a visitor zooms in to 400% on a screen with a resolution of 1280 by 1024 pixels, the keyboard focus lands on elements hidden beneath the cookie banner. This makes it impossible to see where the focus is.

- **Focus no longer visible because the cookie banner covers part of the page when zoomed in** (Specific Components > Cookie Banners)
  When someone visits the website for the first time, a cookie notice banner appears. If a visitor then zooms in to 200% or 400% on a screen with a resolution of 1280 by 1024 pixels, the keyboard focus lands on elements hidden beneath the banner. This makes it impossible to see where the focus is.

## SC 2.5.1 Pointer Gestures

- **Change slides by gesture or mouse pointer** (Dynamic Content > Carousel)
  On this page carousels are displayed on small screens (at 320px resolution) under the headings " HEADING " and " HEADING ". These carousels allow users to click and drag the slides horizontally to navigate. WCAG guidelines require that if specific actions like swiping or dragging are necessary for interacting with a component (like a carousel), an alternative, simpler interaction method must also be provided. This is to accommodate users who may not be able to perform precise gestures or who use assistive technologies like head pointers, eye-tracking systems, or voice-controlled mouse emulators. Some pointing devices lack the capability for multi-touch or trackpad-based gestures, or even the accuracy for complex gestures.

## SC 2.5.3 Label in Name

- **Accessible button name is different from visible text because of `aria-label`** (Links and Navigation > Buttons)
  On this page, there is a button with the visible text “ TEXT ”. The accessible name of the button is “ NAME ”, which comes from the `aria-label`.

The use of the `aria-label` attribute overrides all other methods for naming elements. Screen readers and speech recognition software use the name specified in the `aria-label`. This is referred to as the "accessible name". If the accessible name differs from the visible text, the text that screen readers read aloud and that speech recognition software uses will differ from the visible text on the button. As a result, visitors may not be able to operate the button using voice commands, because they will read aloud the text visible on the button. Since this does not match the accessible name, the speech software will not know which button it refers to.

- **Visible text is missing from accessible name of the button** (Links and Navigation > Buttons)
  On this page, the button with visible text " TEXT " has an accessible name of " NAME ". This discrepancy can cause issues for users who rely on voice control to interact with the page. Voice commands are based on the visible text of elements. If the accessible name differs significantly, the voice commands will not work.

- **Visible link text is not present in accessible name** (Links and Navigation > Links)
  On this page, the link with an image has visible text (" TEXT ") is not included in its accessible name (" AccName "), which is provided via an `aria-label`. This mismatch prevents the logo (which is likely a link) from being activated using voice control. When the visible text differs from the accessible name, voice commands based on the visible text will not work.

- **Text of logo is not present in accessible name** (Links and Navigation > Logo / Skiplink)
  At the top of the page, the logo depicts text: “TEXTLogo” . The accessible name of this link is “ AccName”.

This discrepancy can prevent voice control functionality. Voice commands rely on the visible text of elements. If the accessible name differs, voice commands will not activate the link.

- **Visible link text is not present in accessible name** (Links and Navigation > Navigation)
  On this page, the link with visible text " TEXT " has an accessible name that is either " NAME " or empty. This mismatch between visible text and accessible name can prevent voice control functionality. Visitors relying on voice control issue commands based on the visible text of elements. If the accessible name is different or empty, these commands will not work.

- **Search button cannot be activated by voice** (Links and Navigation > Search)
  <Buttons_422674433.html#SC-2.5.3-accessible-name-of-button-does-not-match-the-visible-text>

- **Visible text of the search bar is not part of the accessible name** (Links and Navigation > Search)
  <Inputs_269811716.html#SC-2.5.3-Input%3A-visible-text-not-in-the-name-(search-bar)>

- **Text of checkbox does not appear in accessible name** (Specific Components > CAPTCHA)
  On this page, there is a checkbox next to the hCaptcha with the text "I am human." This visible text should be part of the accessible name of the component. Currently, it is not, as the accessible name (via `aria-labelledby`) is: “hCaptcha checkbox. Select to enable the challenge or bypass it if you have an accessibility cookie.”

- **Visible text is not in the accessible name** (Specific Components > CAPTCHA)
  On this page a form with Captcha is present. The checkbox with the text “Ik ben een mens” (“I am a human”) has an accessible name that do not contain the visible text.

Because the visible text is missing, this checkbox cannot be operated by voice.

- **Visible text of elements is not in the accessible name** (Specific Components > Cookie Banners)
  In various places, there are interactive elements that get their accessible names through the `aria-label` attribute. The visible text on the interactive elements often does not match these accessible names or differs significantly from them. For example, see the cookie banner that appears when a visitor first accesses the website. On the cookie banner, there is a button “Nee, pas aan” ("No, adjust"). The accessible name is "Pas cookievoorkeuren aan" ("Adjust cookie preferences"). This is not accessible.

The visible text on an interactive element should not differ too much from the accessible name. This can cause issues for visitors using voice control. They issue commands with their voice and say the visible text. If it is not included in the accessible name, the command will not work. Therefore, the visible text must be included verbatim in the accessible name, preferably at the beginning.

- **First option of select list serves as a label, but is not present in the accessible name** (User Input and Forms > Inputs)
  On this page, a `select` element in section “ TEXT ” lacks a visible label, and the first option serves as a pseudo-label. This `pseudo` label disappears when a different option is selected, creating an accessibility issue. Users relying on voice control issue commands based on visible text. If that text (the initial option) is not part of the accessible name, voice commands will fail.

- **Input: visible text not in the name** (User Input and Forms > Inputs)
  On this page, the search bar's visible text (placeholder text) is " TEXT ", and the accessible name of the `input` element is also " TEXT ".

For voice activation to function correctly, the visible text *must* be part of the accessible name. If the placeholder text differs from the accessible name, voice commands based on the visible text will fail. Ensure the accessible name *includes* the visible text, ideally at the beginning. While in this case the text is the same, ensure the accessible name is correctly programmatically associated with the visible label (not just placeholder text). Placeholder text should not be used as a substitute for a proper label.

- **Visible text (label) not in the name** (User Input and Forms > Labels)
  This page contains a form where the placeholder text/label above the input field is " TEXT ", but the accessible name is “ NAME” . The visible text on interactive elements (input fields, links, buttons) should be present in the accessible name. Discrepancies can cause issues for users relying on voice control, as their spoken commands might not activate the intended elements. To ensure voice activation works reliably, the visible text should be *part* of the accessible name, and ideally, it should come *first*. While the text is identical in this case, ensure that the *label* (not just placeholder text) is correctly associated with the input field and that the accessible name is derived from that label. Placeholder text should *not* be used as a replacement for a proper label.

- **Visible text (label) not in the name** (User Input and Forms > Labels)
  This page contains a form where the placeholder text/label above the input field is " TEXT ", and the accessible name is empty. The visible text on interactive elements (input fields, links, buttons) should be present in the accessible name. Discrepancies can cause issues for users relying on voice control, as their spoken commands might not activate the intended elements. To ensure voice activation works reliably, the visible text should be *part* of the accessible name, and ideally, it should come *first*. While the text is identical in this case, ensure that the *label* (not just placeholder text) is correctly associated with the input field and that the accessible name is derived from that label. Placeholder text should *not* be used as a replacement for a proper label.

## SC 2.5.4 Motion Actuation

- **Motion actuation has no alternative input method** (Multimedia > Animation)
  On this page there is functionality triggered by device motion ( DESCRIBE ) that has no alternative input method and cannot be disabled. Users who cannot move their device, for example because it is mounted on a fixed holder, or users with motor impairments cannot access this functionality. All functionality triggered by device motion must also be available through a conventional user interface component.

## SC 2.5.7 Dragging Movements

- **Dragging carousel slides has no alternative** (Dynamic Content > Carousel)
  On this page, visitors can drag carousel slides to a new position. There is no single-pointer alternative to achieve the same functionality. Some users cannot perform dragging movements precisely, while others rely on specialized input devices such as trackballs, head pointers, eye-gaze systems, or speech-controlled mouse emulators, which make dragging cumbersome and error-prone.

## SC 2.5.8 Target Size (Minimum)

- **Navigation buttons do not have enough size** (Dynamic Content > Carousel)
  On this page a carousel has buttons to navigate between images. These buttons do not meet the minimum size requirements for interactive elements. The combined height, width, and surrounding spacing of each button is less than 24 CSS pixels.

- **Interactive targets are too close together without sufficient spacing** (Images and Visual Design > Target Size)
  On this page there are multiple small interactive targets placed too close together without sufficient spacing. Users with motor impairments or those using touch screens may accidentally activate the wrong element. When target sizes are below 24 by 24 CSS pixels, sufficient spacing between elements is required to allow accurate activation.

- **Target size is below the 24x24 CSS pixel minimum** (Images and Visual Design > Target Size)
  On this page the interactive element with the text " TEXT " has a target size smaller than 24 by 24 CSS pixels. Users with motor impairments or those using touch screens may have difficulty accurately activating this element. A minimum target size of 24 by 24 CSS pixels is required to ensure reliable interaction.

- **The clickable area of the button is too small** (Links and Navigation > Buttons)
  On this page the buttons under ELEMENT have a target area (the clickable area) smaller than 24x24 CSS pixels. Interactive elements like buttons must have sufficiently large target areas to be easily clickable by users with motor impairments. The minimum target size is 24x24 CSS pixels. Alternatively, if the target areas are smaller, they must be spaced far enough apart that an imaginary 24-pixel diameter circle around the center of one target area does not overlap any other target areas.

- **Link size < 24px** (Links and Navigation > Links)
  <Buttons_422674433.html>

## SC 3.1.1 Language of Page

- **Accessible name of the iframe buttons is in English** (Multimedia > Video)
  This page embeds a video in an iframe with the `lang` attribute set to "nl" (Dutch), but the video player's button accessible names are in English. This creates a language mismatch. The language of interactive elements, including video player controls, should generally match the primary language of the surrounding content (in this case, Dutch, as indicated by the iframe's `lang` attribute).

- **Language not correct** (PDF > Document Settings)
  In the metadata of this PDF document, the language is set to “ English ” (en). This is incorrect because the document's language is “ Dutch ”. As a result, the screen reader reads the document using “ English ” pronunciation rules, which do not provide an accessible experience for a blind visitor.

- **Language not set** (PDF > Document Settings)
  In the meta data of this PDF the language is not set. The language should be set so that screen readers can transfer the information from the file to the visitor in the correct language. This can be set through the file properties.

- **Language not correct** (PDF > Language)
  In the metadata of this PDF document, the language is set to “ English ” (en). This is incorrect because the document's language is “ Dutch ”. As a result, the screen reader reads the document using “ English ” pronunciation rules, which do not provide an accessible experience for a blind visitor.

- **Language not set** (PDF > Language)
  In the meta data of this PDF the language is not set. The language should be set so that screen readers can transfer the information from the file to the visitor in the correct language. This can be set through the file properties.

- **Lang attribute is missing** (Structure and Semantics > Language)
  This page is missing the lang attribute on the `html` element. The lang attribute is essential for indicating the primary language of the page. Without it, screen readers and other assistive technologies may not apply the correct pronunciation rules, making the content difficult to understand for users.

- **Language code is not correct** (Structure and Semantics > Language)
  The primary language of this page is Dutch, but the `lang` attribute is incorrectly set to " XX ". The lang attribute on the `html` element should accurately reflect the primary language of the page. In this case, it should be `lang="nl"` for Dutch. Screen readers use this attribute to apply the correct pronunciation rules. An incorrect lang attribute can lead to mispronunciation and make the content difficult to understand for screen reader users.

- **Primary language is English but page is in Dutch** (Structure and Semantics > Language)
  The primary language of this page is incorrectly set to English (`lang="en-US"`), while the header and footer content are in Dutch. This mismatch can cause screen readers to apply the wrong pronunciation rules, making the Dutch text difficult to understand.

- **`xml:lang` and `lang` different value** (Structure and Semantics > Language)
  On this page, there is a mismatch between the values of the `xml:lang` attribute and the `lang` attribute. This inconsistency can cause issues with screen readers, as they may not correctly interpret the language of the content.

## SC 3.1.2 Language of Parts

- **English text alternative on Dutch pages (or Dutch on English)** (Images and Visual Design > Images)
  <Language_426868751.html#SC-3.1.2-Alt-text-in-English>

- **The text alternatieve is in English** (Specific Components > Cookie Banners)
  In the cookie banner the logo has the text alternative “ Logo - opens in a new window". This text is in English while the rest of the page is in Dutch.

- **Accessible names are in English** (Structure and Semantics > Language)
  This page contains one or more `aria-label` attributes with text in English. Screen readers will pronounce these English labels using the pronunciation rules of the page's primary language, which is Dutch in this case. This can lead to mispronunciation and make the labels difficult to understand.

- **Part of content is in different language, but no language code is applied** (Structure and Semantics > Language)
  On this page, under the heading " HEADING ", there is a sentence in a different language without a language code. This causes screen readers to use the primary language's pronunciation rules, potentially mispronouncing the foreign language text.

- **Primary language is English but header and footer are in Dutch** (Structure and Semantics > Language)
  On this page, the main content is in English (`lang="en"`), but the header and footer are in Dutch. This inconsistency causes screen readers to mispronounce the Dutch text, as they apply English pronunciation rules by default.

- **` Alt` text is written in different language** (Structure and Semantics > Language)
  The primary language of this page is English, but the alt text for the image " DESCRIBE ” is in Dutch. This inconsistency can cause confusion for screen reader users, as the `alt` text will be read with English pronunciation rules.

- **Error messages in a different language** (User Input and Forms > Error Messages)
  On this page, a form uses HTML5 validation, displaying default HTML5 error messages in English when submitted with empty or incorrect data. Because the site is in Dutch and lacks a language switch, screen readers may attempt to pronounce these English error messages using Dutch pronunciation rules, leading to unintelligibility.

- **Form error messages are in English** (User Input and Forms > Error Messages)
  This page contains a form with error messages displayed in English, while the rest of the website is in Dutch. Error messages should be in the same language as the website's primary content.

## SC 3.2.1 On Focus

- **Form is automatically submitted when a component receives focus** (Dynamic Content > Change of Context)
  In the form on this page when the ELEMENT receives keyboard focus, the form is automatically submitted. This can be very confusing for many visitors. Forms should only be submitted when the visitor consciously chooses to do so, for example, by clicking a submit button. It should not happen automatically when an element receives keyboard focus.

- **Keyboard focus on an element causes a significant change of page content** (Dynamic Content > Change of Context)
  On this page an ELEMENT is present. When the keyboard focus lands on an ELEMENT , an unexpected change occures: the page gets a new meaning: DESCRIBE .

The content of the page changes in such a way that the meaning of the page is no longer the same as before. This is confusing for visitors who navigate using only the keyboard.

- **Loading the page causes another window to open up unexpectedly and gain focus** (Dynamic Content > Change of Context)
  When this page loads, a new window opens and the focus is shifted to this window. This happens unexpectedly.

- **New window launched when **ELEMENT** receives focus** (Dynamic Content > Change of Context)
  On this page when the ELEMENT receives keyboard focus, a new window opens. This happens unexpectedly.

This makes the functionality of the page unpredictable. Any component that is able to trigger an event when it receives focus must not change the context.

- **When a component receives keyboard focus, focus is automatically removed or redirected** (Dynamic Content > Change of Context)
  On this page an ELEMENT is present. When the keyboard focus lands on an ELEMENT , an unexpected change occures: the keyboardfocus moves automatically to ELEMENT .

This is confusing for visitors who navigate using only the keyboard.

- **Unexpected change of context on focus** (Links and Navigation > Focus)
  On this page, when an element receives keyboard focus, an unexpected change of context occurs: DESCRIBE .

Receiving keyboard focus should not trigger any action such as opening a new window, navigating to another page, or submitting a form. Keyboard users expect that moving focus to an element only highlights it without causing side effects. Unexpected context changes on focus are disorienting, especially for screen reader users and people with cognitive disabilities, making the website unpredictable and difficult to operate.

- **When a search **icon / input** gets keyboard focus, the page changes drastically** (Links and Navigation > Search)
  The search bar in the top menu triggers an unexpected change when it receives keyboard focus. An overlay appears, altering the page's context. This unexpected behavior can be disorienting for keyboard users. Changing the page's context (for example, by opening an overlay) should not happen automatically when an element receives focus. It should only occur as a result of explicit user interaction (for example, clicking a button).

## SC 3.2.2 On Input

- **A change of context occurs without warning when the user changes the setting of a UI control** (Dynamic Content > Change of Context)
  On this page an element DESCRIBE triggers a major change of context when the setting of this element is used by the visitor.

This can be very confusing for many visitors. The context should not automatically change when a visitor makes an adjustment in a form (such as checking a checkbox) or changes a setting in another user interface element. However, it is acceptable if the visitor has been clearly informed in advance. Examples of context changes include opening a new window, moving the keyboard focus to another element, and submitting a form.

- **Selecting a filter option makes focus shift** (Dynamic Content > Filters)
  On this page, selecting a filter option causes the keyboard focus to unexpectedly shift to [the top of the page][to LOCATION] . Visitors are not notified of this context change before it happend. Unexpected context changes, such as focus shifts triggered by form interactions (for example, checking a checkbox, filling an input, or selecting a dropdown option), should be avoided. Context changes like form submissions or opening new windows should only occur with prior user warning.

- **Checking check box results in context change** (Specific Components > CAPTCHA)
  On this page, there is a form with a hCaptcha. Inside the CAPTCHA is a checkbox. When a visitor checks this checkbox, the keyboard focus shifts to a pop-up window. This change of context is not allowed to happen as a result of checking a checkbox.

- **changing the context when a checkbox is ticked** (Specific Components > CAPTCHA)
  When the CAPTCHA checkbox is ticked, a context change occurs without prior warning. A new challenge window or verification process is triggered automatically when the user checks the box, without the user being informed beforehand that this action will cause a change of context.

- ****lightbox / video** opens after selecting a checkbox** (User Input and Forms > Inputs)
  On this page, [selecting a `checkbox`] [an option in the `select` element] triggers a lightbox to open automatically, and focus shifts to the lightbox. This automatic opening and focus shift constitute a context change. This context change violates accessibility guidelines because the user is not warned about it beforehand.

- **After data entry, the focus moves automatically to next input** (User Input and Forms > Inputs)
  On this page, after completing the " LABEL " field, the focus automatically jumps to the next input field. This automatic focus shift is disruptive and disorienting for users.

- **Changing a setting of an element triggers a page reload** (User Input and Forms > Inputs)
  On this page, interacting with filters ( checkboxes or select elements ) causes a significant context change, either through a page reload or a shift in focus to another location. Users are not warned *beforehand* about this change. This lack of warning is an accessibility issue.

- **Context change in the form** (User Input and Forms > Inputs)
  This page contains a file input (`<input type="file">`) in a form. When a file is selected, the focus is intentionally moved, causing a context change. While the *default* behavior of a file input does *not* cause a context change, the page's *implementation* specifically moves the focus. This *intentional * focus shift constitutes a context change. Context changes should not occur automatically without user initiation unless the user has been adequately warned. Therefore, users should be informed *beforehand * that selecting a file will result in a change of focus.

- **Page reload after using an option in a `select` element** (User Input and Forms > Inputs)
  On this page, a `select` element under the text " TEXT " triggers a page reload upon option selection. This unexpected behavior is not typical for `select` elements and can be disorienting for users.

## SC 3.2.3 Consistent Navigation

- **Navigation element is not in the same place or order on every page** (Links and Navigation > Navigation)
  The menu, which is present on multiple pages, has an inconsistent order of items. On this page, the order is A , B , C , while on page URL2 , it is B , A , C . Navigation elements (menus, search, table of contents) should maintain a consistent order across all pages. Changing the order can disorient visitors, especially those who are blind, visually impaired, or have cognitive disabilities.

## SC 3.2.4 Consistent Identification

- **Buttons with the same function have different accessible names** (Links and Navigation > Buttons)
  On this page, the button labeled " TEXT " performs the ACTION . On page URL2 , a button with the same label performs the same action. When buttons with identical functions appear across multiple pages, their accessible names should also be consistent. This consistency aids users with cognitive disabilities in recognizing and interacting with the buttons.

- **Two links with the same destination, but different link text** (Links and Navigation > Links)
  On this page, the link " TEXT " under the heading " HEADING " points to URL1 . On page URL2 , another link with different text also leads to URL1 . Having different link text for the same destination can be confusing for users, especially those with cognitive disabilities or those relying on screen readers.

- **Different names are used for the same function** (User Input and Forms > Inputs)
  On this page and page URL2 , buttons/icons with the same function ( FUNCTION ) have different names: “ NAME1 ” and “ NAME2 ”.

Buttons/icons with identical functionality across multiple pages *must* have consistent names. This ensures predictability and usability, especially for users relying on assistive technologies.

- **Same action, different label** (User Input and Forms > Labels)
  This page contains an input field with the label " TEXT " that collects DATA . On page URL2 , another input field with a *different* label, also " TEXT ," collects the *same* DATA .

If input fields appear multiple times on a website and perform the same function, they *must* have identical labels. This consistency is crucial for users with cognitive disabilities, as it simplifies form completion and reduces confusion.

- **`Alt` text is different for the same icons** (User Input and Forms > Labels)
  This page features an icon of DESCRIBE with the alt text "TEXT". On page URL2 , an identical icon is used, but its alt text is different: "TEXT". Icons that are repeated across a set of web pages with the same function *must* have identical alternative text. This consistency is crucial for users with cognitive disabilities, as it helps them easily recognize and interact with these icons.

## SC 3.2.6 Consistent Help

- **Help function is not in the same place on every page** (Links and Navigation > Navigation)
  On this page, a help function is present, but its location is inconsistent with its placement on page URL2 (where it's at LOCATION ). Help functions should maintain a consistent location across all pages of a website, unless the user has explicitly customized the placement. Inconsistent placement makes it difficult for visitors, especially those with cognitive disabilities, to find and access help when needed.

- **Help mechanism is not in a consistent location across pages** (Links and Navigation > Site-wide)
  The website provides a help mechanism (such as contact information, a FAQ page, or a chat function), but this mechanism is not available in a consistent location across pages. Users with cognitive disabilities rely on predictable patterns to navigate websites and find help when they need it. When the help mechanism appears in different locations on different pages, or is absent on some pages entirely, these users may become disoriented and unable to find the assistance they need.

## SC 3.3.1 Error Identification

- **Solution:** (Specific Components > CAPTCHA)
  On this page, the reCAPTCHA verification method may display the error message " TEXT ". It is not clear where the error is located.

- **HTML5 validation is used** (User Input and Forms > Error Messages)
  On this page, a form uses HTML5 validation, displaying default HTML5 error messages when submitted with empty or incorrect data. These default messages are not reliably supported across all browsers and screen readers. Each browser renders them differently, and their accessibility (for example, completeness, duration) is not guaranteed.

- **Send button inactive until all required fields are filled in** (User Input and Forms > Error Messages)
  On this page, a form's submit button is disabled until all mandatory fields are completed. However, there is no visual indication of which fields are actually required. The mandatory fields are FIELD and FIELD . Because the submit button's state is the only indicator of required fields, users are left guessing which fields they need to complete.

## SC 3.3.2 Labels or Instructions

- **Search bar uses placeholder as the only label** (Links and Navigation > Search)
  <Labels_269942789.html#SC-3.3.2-label-via-placeholder-text>

- **Instruction at input field not always visible** (Specific Components > CAPTCHA)
  On this page, there is an hCaptcha widget. When the image pop-up opens, a button with three dots is located in the lower-left corner, labeled with the accessibility description: *"Get information about hCaptcha and accessibility options."* Clicking this button reveals several options. If the "Report bug" option is selected, the "Other" category can be chosen. This triggers the appearance of an input field. Currently, the field's instruction is provided as placeholder text inside the input field itself. However, when users start typing, this instruction disappears.

- **Labels are not visible** (User Input and Forms > Inputs)
  On this page, a form with several sections is present. Each section has a group label, but these labels are not visible on the page. While programmatically associating labels with their groups is important for screen readers, *visible* group labels are also essential for sighted users to understand the form's structure and the purpose of each section.

- **Placeholder text is used as a label** (User Input and Forms > Inputs)
  On this page, an input field with placeholder text “TEXT” is present. However, it lacks a persistent label; the placeholder text is being used as a label.

Input fields require labels that are always visible. Placeholder text cannot fulfill this role, as it disappears when the user begins typing. A proper, always-visible label must be provided.

- ****Radio button / checkbox** no label** (User Input and Forms > Labels)
  On this page, under the " TEXT " heading, a radio button/checkbox is present without a label. This makes it difficult for users, especially those with certain cognitive disabilities, to understand the purpose of the radio button/checkbox.

- **Input field is missing a label** (User Input and Forms > Labels)
  On this page under the heading “ TEXT ”, an input field without a label is present.

- **Instruction is not visible** (User Input and Forms > Labels)
  On this page, the input field "NAME " has an associated instruction. However, this instruction is not permanently visible on the page; it appears only within an error message.

- **Label via placeholder text** (User Input and Forms > Labels)
  On this page, under the text "TEXT" , a form is present. The input field with placeholder text "PLACEHOLDER" lacks a permanent label.

Input fields must always have a visible label, whether text or an icon. Placeholder text is not a substitute for a label, as it disappears when the user begins typing. Input fields without visible labels can confuse users, as they may not understand the expected input.

- **No date format instruction (only in case of a specific format)** (User Input and Forms > Labels)
  On this page, under the text " TEXT ", a date input field is present. This field accepts only a specific date format, but no instructions are provided regarding the required format. This forces users to guess and try various date formats, creating an accessibility issue.

- **Required field symbol is not explained** (User Input and Forms > Labels)
  On page URL there is a form with required fields. These fields are marked with an asterisk symbol. The meaning of this character is not explained in text.

Provide an instruction above the form such as "Fields marked with * are required".

- **`select`: an option as label** (User Input and Forms > Labels)
  On this page, under the text " TEXT" , a `select` element is present without a label. The first option in the `select` element cannot serve as a label because it disappears when a different option is selected. This means users don't know the purpose of the dropdown menu. The option texts themselves are not self-explanatory.

- **`textarea` has no visible label** (User Input and Forms > Labels)
  On this page, under the heading " TEXT " a `textarea` element is present without a label. This means users don't know what information should be entered in the `textarea`.

## SC 3.3.3 Error Suggestion

- **Error message does not indicate which field has triggerd the error** (User Input and Forms > Error Messages)
  On this page, a form with mandatory fields displays error messages upon submission with empty fields. However, the error messages do not indicate *which* fields are required. The required fields are " E-mail " and " Name ".

The error messages should be more informative and clearly state that the respective fields are required. For example, instead of a generic message, use: "The 'E-mail' field is required and has not been filled in" and "The 'Name' field is required and has not been filled in". This gives users specific guidance on how to correct the errors.

- **Error message does not provide a suggestion on how to fix the error** (User Input and Forms > Error Messages)
  This page contains a form. The error messages provide no guidance on how to correct the errors. For example, the error message for the NAME input field is simply " MESSAGE ". Error messages should not only identify the error but also provide specific instructions on how to resolve it. Instead of just " MESSAGE " the error message should explain what is expected in the NAME field (for example, "Please enter your full name using only letters" or "The name field cannot be empty").

- **Error message is an instruction** (User Input and Forms > Error Messages)
  On this page, the error message in the form displays a message " TEXT ".

This error message does not explain how the error can be fixed. A good error message clearly states what you need to do. An example of a good error message is: “The field has not been filled in (correctly).”

- **Zip code does not specify the use a space** (User Input and Forms > Labels)
  On this page, under the text " TEXT ", there is an input field for entering a postal code. There are no instructions specifying the required format (for example, 1234AA or 1234 AA). It is important to clearly instruct users on how to fill in this form field.

## SC 3.3.7 Redundant Entry

- **Correct entry disappears** (User Input and Forms > Error Messages)
  On this page, when the form is submitted, all entered data disappears, including correct information. This forces the user to re-enter everything, which is inefficient.

- **Correct data is missing** (User Input and Forms > Inputs)
  On this page a form is present. When incorrect information is entered in the login form and submitted, the form is returned blank, erasing even the correctly entered data. This forces the user to re-enter all information, including what was already correct. This is a usability issue.

- **Type the e-mail adres twice** (User Input and Forms > Inputs)
  This page contains a form with two email input fields: "E-mail" and "Repeat the e-mail address". The second field does not allow pasting.

- **Visitors must enter correct information twice** (User Input and Forms > Login / Authentication)
  When incorrect information is entered in the login form and submitted, the form should not be returned blank, erasing even the correctly entered data. This forces the user to re-enter all information, including what was already correct.

## SC 3.3.8 Accessible Authentication (Minimum)

- **Solve puzzel to log in** (User Input and Forms > Login / Authentication)
  On this page, the login form requires users to solve a puzzle. This can create an unnecessary barrier for users with cognitive disabilities. Puzzles can be difficult or impossible to solve for some users, preventing them from accessing the login functionality.

## SC 4.1.2 Name, Role, Value

- **Accordion button role is missing** (Dynamic Content > Accordion)
  In a section with hidden content, the element that opens and closes hidden content is missing the role of button. Screen reader users cannot identify the element as interactive. Without the correct role, assistive technologies do not announce the element as a button, making the accordion unusable for these users.

- **Screen reader does not know if an accordion is open or closed** (Dynamic Content > Accordion)
  On this page, sections with hidden content are present. While the open or closed state is visually apparent, it's not programmatically communicated to screen readers.

- **Tablist functionality incorrect implementation** (Dynamic Content > Accordion)
  On this page a section with hidden content, the so-called accordion, is incorrectly implemented using the `tablist` ARIA role. `tablist` is not appropriate for accordions because their behavior differs significantly. Using `tablist` requires implementing *all* tablist functionalities (for example, indicating the active tab), which conflicts with accordion behavior (showing open/closed states). Furthermore, `tablist` requires different keyboard navigation. Since not all `tablist` features are implemented, the component is likely inaccessible as a tablist.

- **Button selected (active slide) not in code** (Dynamic Content > Carousel)
  On this page there is a carousel with images and buttons to switch between the images. The active button looks different than the one that is not active. This information is missing in the HTML. A visitor with a screen reader cannot access this information.

- **Carousel does not follow the tab pattern** (Dynamic Content > Carousel)
  On this page, a carousel functions similarly to a tab interface but does not use the correct ARIA roles and properties for the tab-based carousel pattern. Screen readers cannot correctly interpret the structure. A tab-based carousel should use the roles tablist, tab, and tabpanel, along with the appropriate aria-selected and aria-controls attributes.

- **Close button has no accessible name** (Dynamic Content > Dialog)
  On page URL , a button with the text " TEXT " opens a dialog window containing a close button. This close button lacks an accessible name, preventing screen readers from communicating its function to users.

- **Close button lacks a proper accessible role** (Dynamic Content > Dialog)
  On this page, a button with the text " TEXT " opens a dialog window containing a close button. This close button lacks an accessible role.

Without an appropriate role, screen readers cannot identify the element as an interactive control (for example, a button) that can be activated to close the dialog. This makes the button inaccessible to screen reader users and those navigating without a mouse.

- **Dialog container element has no `aria-modal` attribute** (Dynamic Content > Dialog)
  On this page, a button with text " TEXT " opens a modal dialog window. Users can still interact with the page content *behind* the open dialog, which is not the expected behavior for a modal.

- **Dialog window has no accessible name** (Dynamic Content > Dialog)
  On this page, a button with the text " TEXT " opens a dialog window. This dialog window lacks an accessible name. A blind visitor needs this name to understand the content of the dialog.

- **Dialog window has no role=dialog** (Dynamic Content > Dialog)
  On this page, a button labeled " TEXT " opens a modal dialog window. This dialog lacks the appropriate role, preventing screen readers from identifying it as a dialog window.

- **Dialog window has no role=dialog and no name** (Dynamic Content > Dialog)
  On this page, a button labeled " TEXT " opens a dialog window. This dialog lacks both a proper role and an accessible name.

Consequently, screen readers cannot identify the element as a dialog, nor can they convey its purpose or content.

- **Role of checkbox is missing** (Dynamic Content > Filters)
  On this page the sidebar filters use checkboxes, but the appropriate checkbox role is missing.

This prevents screen readers from correctly identifying these elements, hindering accessibility for visually impaired users. Consequently, these users cannot understand how to interact with the filters.

- **The state of the filter panel is unknown to the screen reader** (Dynamic Content > Filters)
  On smaller screens, the sidebar filters turn into a filter button that toggles the visibility of the filter panel. However, screen readers are not informed about the panel's current state (open or closed).

- **Tab element has no accessible name** (Dynamic Content > Tabs)
  On this page, tabs with role="tab" are used. The accessible name of one or more tabs is missing. Screen readers cannot label the tab, so users do not know which tab they are selecting. An accessible name can be derived from the text content of the element, or added with aria-label or aria-labelledby.

- **The element with the tabs does not have the correct role** (Dynamic Content > Tabs)
  On page URL there is a section with content that looks and behaves as tabs. When a visitor clicks on the tab heading, new content appears. The required roles are missing. The role=”tablist” requires particular children. These roles are currently missing.

- **The state of selected tab is not clear in the HTML** (Dynamic Content > Tabs)
  On this page there are tabs present consisting of sections with hidden content that can be revealed when a visitor clicks on the corresponding text. The active `tab` element does not have an `aria-selected` attribute. / The `aria-selected` attribute is not set to true when the tab is open.

- **`aria-controls` attribute is missing** (Dynamic Content > Tabs)
  On page URL there is a section with content that looks and behaves as tabs. When a visitor clicks on the tab button, new content appears. In the HTML is the order of the elements: button, button, button, panel, panel, panel. Assisitive software can not determine which button opens which panel. The attribute aria-controls is missing.

- **Button does not have correct role** (Links and Navigation > Buttons)
  On this page, the element labeled " TEXT " is a button but does not have the correct accessible role. This prevents screen readers from identifying it as a button, making it inaccessible to blind users. They will not know that this element is interactive and can be clicked.

- **Button has an unreadable character as name (== no a11y name)** (Links and Navigation > Buttons)
  On page URL, the button with an icon of [describe] has un unreadable character in the accessible name. There is no text in the accessible name that help software can read to its user.

- **Button has no code indicating that a popup opens** (Links and Navigation > Buttons)
  On this page, the button labeled " TEXT " opens a dialog window, but this functionality is not indicated in the code.

- **Button is missing an accessible name** (Links and Navigation > Buttons)
  [Location] has a button that lacks an accessible name. This prevents screen reader users from understanding the button's purpose.

- **Button is missing the accessible name** (Links and Navigation > Buttons)
  <Role_1135837185.html#SC-4.1.2-An-element-does-not-have-the-correct-role>

- **Popup state not communicated to screen reader** (Links and Navigation > Buttons)
  On this page, the button labeled " TEXT " at the top opens an extra window, but the code does not indicate whether this window is open or closed. Assistive technologies need this information to convey the state of the window to users, especially those who are blind or visually impaired. The `aria-expanded` attribute can be used to indicate the state.

- **Role is not correct (button instead of a link)** (Links and Navigation > Buttons)
  <Role_1135837185.html#SC-4.1.2-Role-is-not-correct-(f.e.-button-instead-of-an-a-element)>

- **The submit button (submit) is an `a` element** (Links and Navigation > Buttons)
  On this page, the submit button is implemented as an `a` element. This is incorrect; `a` elements are for links, not form submission. This button has the wrong role and may not function as intended.

- **Toggle button state is not defined in the code** (Links and Navigation > Buttons)
  On this page, a button with the text " TEXT " or an icon has multiple states ( for example, pressed, not pressed ) but lacks a programmatic indication of its current state. This prevents assistive technologies from conveying the button's state to users, particularly those who are blind or visually impaired.

- **Link does not have an accessible name** (Links and Navigation > Links)
  On this page, under the heading " HEADING ", a link lacks an accessible name. This prevents screen reader users from understanding the link's purpose or destination. All links must have accessible names that clearly describe their destination.

- **link: no role** (Links and Navigation > Links)
  <Role_1135837185.html>

- **link: role not correct (must be button)** (Links and Navigation > Links)
  <Role_1135837185.html>

- **Information about the state of the Menu button does not change** (Links and Navigation > Navigation)
  On a small screen, a menu button appears to open the mobile menu. However, the `aria-expanded` attribute on the button is not updated correctly to reflect the menu's state. It remains "false" even when the menu is open.

- **Links have role `menuitem`, but parent element lacks role `menubar`** (Links and Navigation > Navigation)
  The top menu on each page, containing links " LINK1 ", " LINK2 ", and " LINK3 ", incorrectly uses the ARIA role `menuitem` on these links. `menuitem` roles require a parent role like `menu`, `menubar`, or `group`, which is missing here. Additionally, `menuitem` roles come with specific keyboard interaction requirements that are likely not implemented. For a simple menu like this, these ARIA roles and their associated complexities are unnecessary.

- **Main menu has redundant role menu** (Links and Navigation > Navigation)
  This navigation menu uses `role="menu"` on the `ul` element and `role="menuitem"` on the `li` elements. These ARIA roles are unnecessary and potentially problematic in this context. The `ul` and `li` elements already provide the necessary semantics for a menu.

- **Menu button does not have an accessible name** (Links and Navigation > Navigation)
  On a small screen, a menu button (the "hamburger" icon with three horizontal lines) appears to open the mobile navigation menu. This button currently lacks an accessible name.

- **Menu button does not have the correct role** (Links and Navigation > Navigation)
  On a small screen, the menu button at the top lacks the correct accessible role. This prevents assistive technologies from recognizing it as a button. The menu button should have the role `button` because it performs an action (opening/closing the menu).

- **Menu button does not provide status information** (Links and Navigation > Navigation)
  On a small screen, a menu button appears to open the mobile navigation menu. The button does not provide information about the menu's state (open or closed) to visitors who cannot see it, such as those using screen readers.

- **Menu with redundant aria role `menubar`** (Links and Navigation > Navigation)
  The menu, which is a `ul` element, has the ARIA role `menubar`. While ARIA can enhance accessibility, in this case, `role="menubar"` is unnecessary and potentially problematic. The `ul` element already provides the necessary semantics for a menu, and adding `role="menubar"` introduces additional ARIA requirements that may not be fully met.

- **State of extra content not communicated to screen reader** (Links and Navigation > Navigation)
  The element " TEXT " opens an extra content, but a user of a screen reader does not get information whether this content is open or closed.

- **The value of aria-haspopup does not match the role of the popup element** (Links and Navigation > Navigation)
  In the main navigation some links have submenu’s. Each link has an attribute aria-haspopup to indicate that submenu’s are present. This attribute must be used in combination with a child role, like role=”menu”. This child role is currently missing.

- **Search bar input has no accessible name** (Links and Navigation > Search)
  <Inputs_269811716.html#SC-4.1.2-No-accessible-name-(form-control)>

- **Search button does not have the correct role** (Links and Navigation > Search)
  <Buttons_422674433.html#SC-4.1.2-button-does-not-have-the-correct-role>

- **Search button has no accessible name** (Links and Navigation > Search)
  <Buttons_422674433.html#SC-4.1.2-Button-has-no-name>

- **Search suggestions don't have the right role** (Links and Navigation > Search)
  The search bar provides suggestions in a drop-down list as the user types, functioning as a combobox. However, the necessary role is missing on the input field.

- **Iframe is missing a title attribute** (Multimedia > Iframe)
  On this page there is an `<iframe>` element that is missing the `title` attribute. Screen readers cannot announce the purpose of the iframe, leaving users unable to determine what content is embedded and whether it is worth navigating into. This significantly hinders navigation for assistive technology users.

- **Iframe title is not descriptive** (Multimedia > Iframe)
  On this page there is an `<iframe>` element with the title " TEXT ". This title does not adequately describe the embedded content. Generic titles such as "iframe" or "embedded content" do not provide meaningful information for screen reader users to determine whether the iframe contains relevant content. The title should clearly describe what content is embedded.

- **Accessible name of an iframe is missing** (Multimedia > Video)
  This page contains an iframe without a `title` attribute. Iframes require descriptive titles, typically provided via the `title` attribute. This title should describe the type of content within the iframe, offering a unique and meaningful description. This text assists blind users in determining whether exploring the iframe's content is worthwhile.

- **Video / audio element is missing an accessible name** (Multimedia > Video)
  On this page a video / an audio element is present with controls attribute. This element is missing an accessible name.

- **Tabs are not programmed correctly** (Specific Components > Cookie Banners)
  The first time a visitor accesses the website, a cookie banner appears. When a visitor clicks the button “Nee, pas aan”, a dialog window appears. This dialog window contains three elements with the `role=”tab”`. However, the element that serves as the container for the set of tabs lacks the `role=”tablist”`.

- **Infographics in iframes** (Specific Components > Data Visualisation)
  <Multimedia-and-iframe_176062465.html#Iframe>

- **ARIA-hidden has been used for an interactive element** (Structure and Semantics > ARIA)
  On this page, there is a button / link hidden using `aria-hidden="true"`. This makes the button / link (including all elements within it) invisible to screen readers. However, the hidden clickable elements can currently still receive keyboard focus.

This causes several issues. For example, blind users can still navigate to these elements using the keyboard, but without knowing what these elements are or what their function is. Additionally, the links “EN”, “NL”, and the logo currently lack an accessible name.

- **Button has no accessible name** (Structure and Semantics > ARIA)
  On this page there is a button with text “ TEXT ”. This button does not have an accessible name. Buttons should always have an accessible name that describes their function. In addition, the name should update as the button's function changes. Accessible names should never be empty, because without it, a blind visitor will not know what the button does.

- **Button has no accessible role** (Structure and Semantics > ARIA)
  On this page, there is a button with an icon DESCRIPTION / with the text “TEXT” . This button does not have an accessible role.

Every HTML element has an inherent role that describes its function and behavior. This means the element has certain properties and functionalities to provide information to the user or receive information from the user. The role defines what the element does. Examples include `button`, `a` (link), and `header`, which automatically have roles recognized by browsers and assistive technologies such as screen readers.

Screen readers and other assistive tools need to know the correct role of each element on a webpage. This allows them to interact with the element intelligently and explain its purpose to the user. If a role is not accessible, it means the role is not correctly assigned or the proper code has not been used.

- **Do not use ARIA if not really needed (general advice)** (Structure and Semantics > ARIA)
  Incorrect use of ARIA techniques can worsen accessibility rather than improve it. The first rule of ARIA is "do NOT use ARIA". Only use ARIA when there are no suitable HTML solutions available. In many instances where ARIA techniques have been applied, they were not needed. Therefore, it is crucial to carefully evaluate whether ARIA techniques are genuinely required and, if so, ensure they are applied correctly. Often, they are not. For comprehensive guidance on properly applying ARIA techniques, refer to the following website: https://www.w3.org/TR/wai-aria-practices-1.2/.

- **Element is missing an ARIA attribute that is required by the role** (Structure and Semantics > ARIA)
  On this page there is an element with `role=”VALUE”`. This role may only be used in combination with a particular attribute.

- **ID appears multiple times on the page** (Structure and Semantics > ARIA)
  Double IDs occur on this page, namely `id=" YYYYY "`.  As a result, “ XXXX ” has an incorrect state or name.

- **Interactive element has `role=“presentation”`.** (Structure and Semantics > ARIA)
  Marking a section as `role="presentation"` essentially cancels the native role of the element and turns it into the equivalent of a `span` or `div`, which are neutral, un-semantic tags that convey no role. Adding `role="presentation"` does not hide the element from anyone. Sighted users will still see it, and blind users will still hear the text, but their screen readers won't announce any kind of semantic role for the text.

- **Name of ARIA attribute is not correct** (Structure and Semantics > ARIA)
  On this page there is an element with an `aria-attribute` “ ATTRIBUTE ”. The attribute name is misspelled / does not exist .

- **Underlying element does not have proper role** (Structure and Semantics > ARIA)
  On this page, there is an element with `role=”value”` present. The child role is missing.

Some ARIA roles require a combination of parent and child roles. This is precisely defined in WAI-ARIA for each role. If these roles are not (fully) included in the code, the elements will not function as intended by the developer. Additionally, an element does not become more accessible if only part of the required roles are present.

- **Upper element does not have proper role** (Structure and Semantics > ARIA)
  On this page, there is an element with `role=”value”` present. The parent role is missing.

Some ARIA roles require a combination of parent and child roles. This is precisely defined in WAI-ARIA for each role. If these roles are not (fully) included in the code, the elements will not function as intended by the developer. Additionally, an element does not become more accessible if only part of the required roles are present.

- **Use less ARIA (general advice)** (Structure and Semantics > ARIA)
  The following is not necessarily wrong, but it can be improved.

ARIA attributes such as role should be used as little as possible. Incorrect or incomplete use of ARIA techniques can actually make a website less accessible.

For example, read https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/. On the page https://www.w3.org/TR/wai-aria-1.2/#role_definitions, there is more information about the different roles and in which situations they can be used. The page https://www.w3.org/TR/wai-aria-1.2/#state_prop_def explains the various ARIA attributes. And the page https://www.w3.org/WAI/ARIA/apg/ explains how these attributes can be combined with JavaScript and CSS to achieve complex goals, such as a search field that shows suggestions while typing or a button that expands upon activation.

- **Used role is not allowed** (Structure and Semantics > ARIA)
  On this page, there is an element with `role=”value”` present. This role is not allowed for this element.

Not all ARIA roles are suitable for every HTML element. This means that certain roles can only be used with specific elements and not with others.

- **Element is missing an accessible name** (Structure and Semantics > Accessible Name)
  On this page, under the heading " HEADING ", an interactive element is missiingng an accessible name. This prevents screen reader users from understanding the link's purpose or destination. All links must have accessible names that clearly describe their destination.

- **No accessible name, role and status on sort button** (Structure and Semantics > Data Tables)
  On this page the table has buttons to sort the results. These buttons do not have a name, a proper role and/or information about the status (the sorting order).

When a button does not have a name, the screen reader cannot determine the function of the button. The sort state informs the screen reader about the order in which the data is sorted. Without the interactive role of a button, a blind user will not know that it is a button that can be used to sort the data.

- **Table has no accessible name (best practice)** (Structure and Semantics > Data Tables)
  On this page several data tables are present. These tables do not have an accessible name. Screen readers read the caption or name of the table when users navigate to the table, giving users a sense of what the table is about.

- **An element is missing the correct accessible role** (Structure and Semantics > Role)
  On this page, under " HEADING ", the button labeled " TEXT " does not have the correct accessible role. Every HTML element has a default role that defines its purpose and behavior. Screen readers and other assistive technologies rely on these roles to understand and interact with elements correctly.

- **Button does not have the correct role** (Structure and Semantics > Role)
  On this page, the " DESCRIBE " button for the FUNCTIONALITY is incorrectly coded as an `a` element (link). This is semantically incorrect, as the element functions as a *button* that triggers an action, not as a *link* that navigates to a different location.

- **Element incorrectly has the role of a button** (Structure and Semantics > Role)
  On this page, the " DESCRIBE " element for the FUNCTIONALITY is incorrectly coded as a button ( either a `button` element or an element with `role="button"` ). Since this element redirects the user to another location, it should have the role of a link, not a button. Buttons are for triggering actions, while links are for navigation.

- **State change not communicated to assistive technology** (Structure and Semantics > State)
  On this page, a UI component changes state but this change is not programmatically communicated to assistive technology: DESCRIBE .

When an interactive element changes state, such as expanded/collapsed, on/off, or selected/unselected, this change must be programmatically conveyed to assistive technology. Screen reader users rely entirely on this programmatic state information to understand what is happening on screen. Without it, they cannot determine the result of their action and cannot effectively operate the component.

- **Toggle button does not announce its state** (Structure and Semantics > State)
  On this page, the toggle button " TEXT " does not communicate its current state to assistive technology. The pressed or not-pressed state is not programmatically available.

Toggle buttons have two states, such as play/pause, show/hide, or mute/unmute. The current state must be programmatically available to assistive technology. Screen reader users cannot perceive the visual change of the button and rely entirely on the programmatic state to know whether the button is currently pressed or not. Without this information, the element cannot be effectively operated.

- **Drop-down list has no accessible name** (User Input and Forms > Inputs)
  On this page, under “ TEXT ” is a drop-down list (`select` element) labeled “ XX ”. The accessible name is missing.

As a result, the drop-down list is not accessible.

- **Legend element is missing** (User Input and Forms > Inputs)
  On this page, a group of radio buttons (or checkboxes) is present, preceded by the text " GROUPLABEL ". This group is placed in a fieldset element, but the legend element is missing. The `legend` element is crucial for providing a label or name to the group of radio buttons/checkboxes .

- **No accessible name for an input field** (User Input and Forms > Inputs)
  On this page, the input field under "TEXT" lacks an accessible name. This prevents blind or visually impaired users relying on screen readers from understanding the field's purpose. All input fields must have an accessible name that clearly describes their function.

- **No accessible rol of an element** (User Input and Forms > Inputs)
  On this page, the ELEMENT with the text "TEXT" lacks an appropriate accessible role. Every HTML element has a role, defining its properties and function, whether providing or receiving information. This role communicates the element's purpose to assistive technologies like screen readers, enabling them to interact correctly and convey the function to users.

- **The legend element is not in the right place** (User Input and Forms > Inputs)
  On this page, a form contains a `fieldset` element that lacks an accessible name. While `legend` elements are present, they are not correctly positioned. The `legend` element must be a direct child of the `fieldset`, meaning no other elements should be between them. Currently, `div` elements are interposed between the `fieldset` and `legend`, violating HTML specifications and creating accessibility issues. Screen readers can only reliably interpret `fieldset` names when the structure is correct. Remove the intervening `div` elements or reposition them so that the `legend` is the immediate child of the `fieldset`.

- **`Legend` element is empty** (User Input and Forms > Inputs)
  On this page, a group of radio buttons (or checkboxes) is present, preceded by the text " TEXT ". A `fieldset` element is correctly used, and a `legend` is present, but it's empty. The `legend` element should contain the text " TEXT " (or a more descriptive label) to serve as the group's label. An empty `legend` does not provide the necessary information to users, especially those using assistive technologies.

## SC 4.1.3 Status Messages

- **The result of the filter change is not announced as a status message** (Dynamic Content > Filters)
  On this page users can refine search results using a search field and filters. When the results are updated dynamically, the message " TEXT " appears, but it does not receive keyboard focus. Consequently, screen readers do not announce this message, making it inaccessible to users of the screen readers.

- **Form status message is not announced** (Dynamic Content > Status Message)
  On this page, a form displays a status message (such as a success or error notification) after submission. This message is not announced to screen reader users because it does not use an appropriate ARIA live region or role. Users relying on screen readers miss important feedback about the result of their action.

- **Items added to the shopping cart are not pronounced by the screen reader** (Dynamic Content > Status Message)
  On this page, a shopping cart icon at the top displays a count of added products. This count is a status message that should be announced automatically by screen readers when it changes. However, the necessary code to enable this functionality is missing.

- **Message about expiration of login time is not pronounced by the screen reader** (Dynamic Content > Status Message)
  On this page, a form displays a message (after a delay) indicating that the login time is expiring (or has expired). This message is a status message but is not announced by screen readers.

- **New messages in the chat are not automatically read by the screen reader** (Dynamic Content > Status Message)
  This chat feature on this page displays new messages without giving them keyboard focus or marking them as status messages. Consequently, screen readers do not automatically announce new messages. This needs to be fixed.

- **Number of remaining characters is not pronounced by the screen reader** (Dynamic Content > Status Message)
  On this page, a character counter beneath a textarea, which displays the number of characters remaining, is a status message. While it updates dynamically, this information is not conveyed to screen readers.

- **Progress message is not pronounced by the screen reader** (Dynamic Content > Status Message)
  When a visitor clicks the " TEXT " button, a " DESCRIBE " process begins, and a message like " xx% is loaded " appears to indicate progress. This progress message is a status message but lacks the necessary attributes to be announced by screen readers.

- **Search results are not pronounced by the screen reader** (Dynamic Content > Status Message)
  On this page, filters modify search results, and a message like " XX results found " appears *without* a page reload. However, this message, which is a status message, is not announced by screen readers. Status messages should be automatically read aloud when they appear or change.

- **Wait animation is not accessible to screen reader users** (Dynamic Content > Status Message)
  On this page, clicking the " TEXT " button triggers a wait animation. This animation, which serves as a status message, is not accessible to blind visitors. Because the loading icon does not receive keyboard focus, screen readers cannot convey its meaning.

- **Status message is not announced** (Links and Navigation > Search)
  The search bar provides feedback saying that no items were found. This is a status message.

- **Captcha status message not visible to screen readers** (Specific Components > CAPTCHA)
  On this page, when a visitor successfully completes the hCaptcha, the checkbox changes to display a green checkmark. This change qualifies as a status message, which means the information must also be accessible to screen readers. Screen readers should notify users that the captcha has been completed successfully. However, this functionality is currently not working as intended. The checkbox includes an `aria-live` attribute, and its accessible name updates when the checkmark is added, which is a good practice. However, the issue arises because the hCaptcha element is hidden using `aria-hidden="true"` after completion. Once hidden, screen readers can no longer detect the hCaptcha, including the status message indicating the successful completion of the captcha. This also prevents verification of whether the status message would be properly conveyed if the content were not hidden with `aria-hidden`.

- **QR code expiration is not announced as a status message** (Specific Components > QR Code)
  On this page a QR code expires after a certain time. When the code expires, this change in status is not communicated to assistive technology. Screen reader users are therefore not informed that the code is no longer valid and may attempt to scan an expired code.

- **Error message is not announced as a status message** (User Input and Forms > Error Messages)
  When form errors occur, an error message appears, but the message is not announced by a screen reader .

- **Error message is not announced as a status message** (User Input and Forms > Error Messages)
  On this page, under the " XX " heading, a form displays the status message " MessageText " upon submission *without* a page reload, but the message is not announced by a screen reader .

- **Notification that file has been uploaded does not get keyboard focus** (User Input and Forms > Error Messages)
  On this page, after a file upload, the message " TEXT " appears without a page reload, but the message is not announced by a screen reader .

## SC 2.1.1. Keyboard

- **Accordion can not be operated by keyboard** (Dynamic Content > Accordion)
  On this page an accordion component is present but is not keyboard accessible. Users who rely solely on keyboard navigation must be able to operate all interactive elements, including links, buttons, forms, dropdown menus, tabs, sliders, and accordions. The accordion must be made fully operable using only the keyboard. This typically involves using the arrow keys to navigate between headers, the Enter/Space key to expand/collapse sections, and appropriate ARIA attributes to convey the state of the accordion to assistive technologies.

Read this article on how to build accessible accordions: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/.
