(function () {
  'use strict';

  var lang = 'nl';

  var UI = {
    nl: {
      title: 'Accessibility Quiz',
      subtitle: 'Dit is geen beginnersvriendelijke quiz over alt-teksten. Dit is de ultieme test voor developers die beweren dat ze digitale toegankelijkheid beheersen. 20 praktijkscenario\'s met interactieve demo\'s en broncode.',
      startBtn: 'Start quiz',
      questions: 'Vragen',
      duration: 'Geschatte tijd',
      selectType: 'Multi-select',
      level: 'Niveau',
      levelValue: 'Gevorderd',
      langLabel: 'Taal',
      langValue: 'NL / EN',
      welcomeFeatures: '<li>Uitslag direct te zien na de quiz</li><li>Deel je uitslag met je collega\'s</li><li>Vul je e-mail in om uitgebreide uitleg te ontvangen over de fouten die je hebt gemaakt</li>',
      questionOf: 'Vraag {0} van {1}',
      checkBtn: 'Controleer antwoord',
      nextBtn: 'Volgende vraag',
      prevBtn: 'Vorige',
      finishBtn: 'Bekijk resultaten',
      perfect: 'Perfect',
      partial: 'Gedeeltelijk',
      incorrect: 'Fout',
      resultsTitle: 'Quiz voltooid',
      resultsExcellent: 'Uitstekend! Je hebt een sterke WCAG-kennis.',
      resultsGood: 'Goede basis, maar sommige gebieden verdienen meer aandacht.',
      resultsNeedsWork: 'Overweeg om de WCAG-richtlijnen grondiger te bestuderen.',
      reviewTitle: 'Antwoorden bekijken',
      retakeBtn: 'Opnieuw doen',
      reviewBtn: 'Antwoorden bekijken',
      previewTab: 'Preview',
      codeTab: 'Broncode',
      scoreLabel: 'Score',
      gotCorrect: 'Je had {0} van de {1} goed',
      wrongSelections: ', met {0} foute selectie{1}',
      quizLabel: 'Quiz',
      shareTitle: 'Deel je resultaat',
      shareText: 'Ik scoorde {0}% op de WCAG Accessibility Quiz van Proper Access! Test je eigen kennis:',
      copyLink: 'Kopieer link',
      copiedLink: 'Gekopieerd!',
      shareLinkedIn: 'Deel op LinkedIn',
      shareX: 'Deel op X',
      badgeTitle: 'Badge voor je website',
      badgeCopy: 'Kopieer HTML',
      badgeCopied: 'Gekopieerd!',
      emailCtaTitle: 'Ontvang uitleg over je fouten',
      emailCtaDesc: 'Vul je e-mailadres in en we sturen je een uitgebreide uitleg over de vragen die je fout had, inclusief de relevante WCAG-succescriteria.'
    },
    en: {
      title: 'Accessibility Quiz',
      subtitle: 'This is not a beginner-friendly quiz about alt texts. This is the ultimate test for developers who claim to know web accessibility. 20 real-world scenarios with interactive demos and source code.',
      startBtn: 'Start Quiz',
      questions: 'Questions',
      duration: 'Estimated time',
      selectType: 'Multi-select',
      level: 'Level',
      levelValue: 'Advanced',
      langLabel: 'Language',
      langValue: 'NL / EN',
      welcomeFeatures: '<li>See your results instantly after the quiz</li><li>Share your score with your colleagues</li><li>Enter your email to receive detailed explanations of the mistakes you made</li>',
      questionOf: 'Question {0} of {1}',
      checkBtn: 'Check Answer',
      nextBtn: 'Next Question',
      prevBtn: 'Previous',
      finishBtn: 'See Results',
      perfect: 'Perfect',
      partial: 'Partial',
      incorrect: 'Incorrect',
      resultsTitle: 'Quiz Complete',
      resultsExcellent: 'Excellent! You have strong WCAG knowledge.',
      resultsGood: 'Good foundation, but some areas need attention.',
      resultsNeedsWork: 'Consider reviewing WCAG guidelines more thoroughly.',
      reviewTitle: 'Review Answers',
      retakeBtn: 'Retake Quiz',
      reviewBtn: 'Review Answers',
      previewTab: 'Preview',
      codeTab: 'Source Code',
      scoreLabel: 'Score',
      gotCorrect: 'You got {0} of {1} correct',
      wrongSelections: ', with {0} wrong selection{1}',
      quizLabel: 'Quiz',
      shareTitle: 'Share your result',
      shareText: 'I scored {0}% on the WCAG Accessibility Quiz by Proper Access! Test your own knowledge:',
      copyLink: 'Copy link',
      copiedLink: 'Copied!',
      shareLinkedIn: 'Share on LinkedIn',
      shareX: 'Share on X',
      badgeTitle: 'Badge for your website',
      badgeCopy: 'Copy HTML',
      badgeCopied: 'Copied!',
      emailCtaTitle: 'Get explanations for your mistakes',
      emailCtaDesc: 'Enter your email and we\'ll send you a detailed explanation of the questions you got wrong, including the relevant WCAG success criteria.'
    }
  };

  function t(key) {
    return UI[lang][key] || UI.en[key] || key;
  }

  function tx(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || '';
  }

  var Q = [
    {
      id: 1,
      scenario: {
        nl: 'Een productoverzicht bevat interactieve kaarten. Wanneer een gebruiker op een kaart klikt met de muis, navigeert de pagina naar de productdetailpagina.',
        en: 'A product listing interface contains interactive cards. When a user clicks a card with a mouse, the page navigates to the product detail page.'
      },
      demo: '<div class="dp-card" onclick="this.querySelector(\'.n\').style.color=\'#6366f1\'"><div class="n">Wireless headphones</div><div class="p">&euro;120</div></div>',
      code: '&lt;div class="product-card" onclick="location.href=\'/product/123\'"&gt;\n  &lt;p&gt;Wireless headphones&lt;/p&gt;\n  &lt;p&gt;\u20ac120&lt;/p&gt;\n&lt;/div&gt;',
      prompt: {
        nl: 'Welke stellingen over deze implementatie zijn juist?',
        en: 'Which statements about this implementation are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Het element maakt geen deel uit van de sequenti\u00eble toetsenbordnavigatie.', en: 'The element is not part of the sequential keyboard navigation order.' } },
        { l: 'B', t: { nl: 'Screenreadergebruikers zien het kaartje mogelijk niet als een interactief element.', en: 'Screen reader users may not perceive the card as an interactive element.' } },
        { l: 'C', t: { nl: 'Het toevoegen van role="button" alleen zou het component volledig toegankelijk maken.', en: 'Adding role="button" alone would make the component fully accessible.' } },
        { l: 'D', t: { nl: 'Het vervangen van de container door een &lt;a&gt;-element zou ingebouwde toetsenbordactivering bieden.', en: 'Replacing the container with an &lt;a&gt; element would provide built-in keyboard activation.' } },
        { l: 'E', t: { nl: 'Het toevoegen van tabindex="0" en het afhandelen van toetsenbordgebeurtenissen zou het element bedienbaar kunnen maken.', en: 'Adding tabindex="0" and handling keyboard events could make the element operable.' } }
      ],
      correct: ['A', 'B', 'D', 'E'],
      explanation: {
        nl: 'Een <code>&lt;div&gt;</code> met alleen <code>onclick</code> is niet focusbaar en heeft geen impliciete role. Het toevoegen van <code>role="button"</code> alleen voegt semantiek toe, maar geen toetsenbordbediening \u2014 je hebt nog steeds <code>tabindex</code> en key handlers nodig. Een native <code>&lt;a&gt;</code> biedt focus, toetsenbordactivering en link-semantiek uit zichzelf.',
        en: 'A <code>&lt;div&gt;</code> with only <code>onclick</code> is not focusable and has no implicit role. Adding <code>role="button"</code> alone adds semantics but not keyboard operability \u2014 you still need <code>tabindex</code> and key handlers. A native <code>&lt;a&gt;</code> provides focus, keyboard activation, and link semantics out of the box.'
      }
    },
    {
      id: 2,
      scenario: {
        nl: 'Een formulier bevat een knop die visueel uitgeschakeld lijkt.',
        en: 'A form contains a button that appears visually disabled.'
      },
      demo: '<button class="dp-btn" aria-disabled="true" onclick="alert(\'Submitted!\')">Submit</button>',
      code: '&lt;button class="submit-btn" aria-disabled="true"&gt;\n  Submit\n&lt;/button&gt;\n\n&lt;script&gt;\ndocument.querySelector(\'.submit-btn\').addEventListener(\'click\', function() {\n  alert("Submitted");\n});\n&lt;/script&gt;',
      prompt: {
        nl: 'Welke stellingen over deze implementatie zijn juist?',
        en: 'Which statements about this implementation are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'aria-disabled="true" voorkomt niet automatisch dat de knop klikgebeurtenissen ontvangt.', en: 'aria-disabled="true" does not automatically prevent the button from receiving click events.' } },
        { l: 'B', t: { nl: 'De knop kan nog steeds worden geactiveerd via muis en toetsenbord ondanks de aria-disabled status.', en: 'The button can still be activated via mouse and keyboard despite the aria-disabled state.' } },
        { l: 'C', t: { nl: 'Het disabled attribuut (zonder aria-) zou zowel de semantische status als de functionaliteit uitschakelen.', en: 'The disabled attribute (without aria-) would disable both the semantic state and functionality.' } },
        { l: 'D', t: { nl: 'aria-disabled is nutteloos en zou nooit gebruikt mogen worden.', en: 'aria-disabled is useless and should never be used.' } },
        { l: 'E', t: { nl: 'Wanneer aria-disabled="true" wordt gebruikt, moet JavaScript clicks en toetsaanslagen op het element voorkomen.', en: 'When aria-disabled="true" is used, JavaScript must prevent clicks and key presses on the element.' } }
      ],
      correct: ['A', 'B', 'C', 'E'],
      explanation: {
        nl: '<code>aria-disabled="true"</code> communiceert alleen de status naar hulptechnologie \u2014 het schakelt functionaliteit niet uit. Het echte <code>disabled</code>-attribuut doet beide. Als je <code>aria-disabled</code> gebruikt (bijvoorbeeld om focusbaarheid te behouden), moet je klik- en toetsaanslagafhandeling in JavaScript blokkeren. <code>aria-disabled</code> is niet nutteloos (D is fout) \u2014 het is nuttig wanneer je een uitgeschakeld besturingselement focusbaar wilt houden voor screenreadergebruikers.',
        en: '<code>aria-disabled="true"</code> only communicates state to assistive technology \u2014 it doesn\'t disable functionality. The real <code>disabled</code> attribute does both. If you use <code>aria-disabled</code> (e.g., to keep focusability), you must block click and key handling in JS. <code>aria-disabled</code> is not useless (D is wrong) \u2014 it\'s useful when you want a disabled control to remain focusable for screen reader users.'
      }
    },
    {
      id: 3,
      scenario: {
        nl: 'Een opmaakwerkbalk is ge\u00efmplementeerd met meerdere kleine iconknoppen. Elke knop is 16 \u00d7 16 CSS-pixels.',
        en: 'A formatting toolbar is implemented with several small icon buttons. Each button is 16 \u00d7 16 CSS pixels.'
      },
      demo: '<div class="dp-tb"><button type="button" title="Bold">B</button><button type="button" title="Italic"><i>I</i></button><button type="button" title="Underline"><u>U</u></button><button type="button" title="Link">&#128279;</button></div>',
      code: '&lt;div class="editor-tools" aria-label="Text formatting"&gt;\n  &lt;button type="button" aria-label="Bold"&gt;B&lt;/button&gt;\n  &lt;button type="button" aria-label="Italic"&gt;I&lt;/button&gt;\n  &lt;button type="button" aria-label="Underline"&gt;U&lt;/button&gt;\n  &lt;button type="button" aria-label="Insert link"&gt;\ud83d\udd17&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;style&gt;\n  .editor-tools {\n    display: flex;\n    gap: 4px;\n  }\n\n  .editor-tools button {\n    width: 16px;\n    height: 16px;\n    padding: 0;\n    border: 1px solid #767676;\n    font-size: 10px;\n    line-height: 1;\n  }\n&lt;/style&gt;',
      prompt: {
        nl: 'Welke toegankelijkheidsproblemen kunnen zich voordoen bij deze implementatie?',
        en: 'Which accessibility concerns may arise from this implementation?'
      },
      options: [
        { l: 'A', t: { nl: 'Het klikgebied kan te klein zijn voor veel gebruikers.', en: 'The hit area may be too small for many users.' } },
        { l: 'B', t: { nl: 'De knoppen missen een toegankelijke naam.', en: 'The buttons lack accessible names.' } },
        { l: 'C', t: { nl: 'Het component kan niet voldoen aan de eisen voor touch target-grootte.', en: 'The component may fail touch target size requirements.' } },
        { l: 'D', t: { nl: 'De container moet role="toolbar" gebruiken om de widgetstructuur weer te geven.', en: 'The container should use role="toolbar" to expose the widget structure.' } },
        { l: 'E', t: { nl: 'Toetsenbordnavigatie werkt niet met deze knoppen.', en: 'Keyboard navigation will not work with these buttons.' } }
      ],
      correct: ['A', 'C'],
      explanation: {
        nl: 'Met 16\u00d716px voldoen de knoppen niet aan WCAG 2.5.8 (minimaal 24\u00d724px). De knoppen hebben toegankelijke namen via <code>aria-label</code> (B is fout). Native <code>&lt;button&gt;</code>-elementen zijn standaard bedienbaar via het toetsenbord (E is fout). Hoewel <code>role="toolbar"</code> de widgetstructuur zou kunnen verbeteren, is het niet verplicht en zijn de voornaamste problemen hier de target-grootte.',
        en: 'At 16\u00d716px the buttons fail WCAG 2.5.8 (minimum 24\u00d724px). The buttons have accessible names via <code>aria-label</code> (B is wrong). Native <code>&lt;button&gt;</code> elements are keyboard-operable by default (E is wrong). While <code>role="toolbar"</code> could improve the widget structure, it is not required and the primary concerns here are the target sizes.'
      }
    },
    {
      id: 4,
      scenario: {
        nl: 'Een marketingslogan is gestyled met extra spati\u00ebring tussen letters voor een visueel effect.',
        en: 'A marketing tagline is styled with extra spacing between letters for visual effect.'
      },
      demo: '<div class="dp-spaced">We are B&nbsp;l&nbsp;u&nbsp;e&nbsp;S&nbsp;k&nbsp;y and we build the future</div>',
      code: '&lt;p&gt;We are B&amp;nbsp;l&amp;nbsp;u&amp;nbsp;e&amp;nbsp;S&amp;nbsp;k&amp;nbsp;y and we build the future&lt;/p&gt;',
      prompt: {
        nl: 'Welke toegankelijkheidsproblemen kunnen optreden bij deze implementatie?',
        en: 'Which potential accessibility problems can occur with this implementation?'
      },
      options: [
        { l: 'A', t: { nl: 'Screenreaders kunnen elke letter afzonderlijk voorlezen in plaats van het volledige woord.', en: 'Screen readers may announce each letter individually instead of the full word.' } },
        { l: 'B', t: { nl: 'De opmaak kan de betekenisvolle leesorde van de tekst verstoren.', en: 'The markup may interfere with meaningful text reading order.' } },
        { l: 'C', t: { nl: 'De tekst wordt niet opgenomen in de accessibility tree.', en: 'The text will not be included in the accessibility tree.' } },
        { l: 'D', t: { nl: 'Spraakherkenningsgebruikers kunnen moeite hebben om te verwijzen naar het woord dat visueel als "BlueSky" wordt weergegeven.', en: 'Speech recognition users may have difficulty referencing the word visually shown as "BlueSky".' } },
        { l: 'E', t: { nl: 'De spati\u00ebringstechniek verbetert de leesbaarheid voor screenreadergebruikers.', en: 'The spacing technique improves readability for screen reader users.' } }
      ],
      correct: ['A', 'B', 'D'],
      explanation: {
        nl: 'Non-breaking spaces tussen elke letter zorgen ervoor dat screenreaders het woord per letter spellen. De oplossing is CSS <code>letter-spacing</code>. De tekst staat nog steeds in de accessibility tree (C is fout), en deze techniek schaadt de leesbaarheid voor screenreaders (E is fout).',
        en: 'Non-breaking spaces between each letter cause screen readers to spell out the word. The fix is CSS <code>letter-spacing</code>. The text is still in the accessibility tree (C is wrong), and this technique harms screen reader readability (E is wrong).'
      }
    },
    {
      id: 5,
      scenario: {
        nl: 'Een formulier bevat meerdere knoppen. E\u00e9n ervan heeft een toegankelijkheidsprobleem.',
        en: 'A form contains several buttons. One of them has an accessibility issue.'
      },
      demo: '<div style="text-align:left;width:100%;max-width:360px;"><label for="q5email" style="display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:3px;">Email address</label><input id="q5email" type="email" style="width:100%;padding:7px 10px;border:1px solid #ced4da;border-radius:4px;font-size:13px;margin-bottom:10px;"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;"><button class="dp-btn" style="background:#495057" type="button">Previous action</button><button class="dp-btn" type="button" onclick="document.getElementById(\'q5done\').style.display=\'block\'" onfocus="this.blur()">Subscribe</button><button class="dp-btn" style="background:#495057" type="button">Next action</button></div><p id="q5done" style="display:none;font-size:13px;color:#2e7d32;font-weight:600;">Done!</p></div>',
      code: '&lt;form id="subscribe-form"&gt;\n  &lt;label for="email"&gt;Email address&lt;/label&gt;\n  &lt;input id="email" type="email"&gt;\n\n  &lt;button type="button"&gt;Previous action&lt;/button&gt;\n\n  &lt;button type="submit" id="subscribe-button"&gt;\n    Subscribe\n  &lt;/button&gt;\n\n  &lt;button type="button"&gt;Next action&lt;/button&gt;\n\n  &lt;p id="result-message" hidden&gt;Done!&lt;/p&gt;\n&lt;/form&gt;\n\n&lt;script&gt;\n  const button = document.getElementById(\'subscribe-button\');\n  const form = document.getElementById(\'subscribe-form\');\n  const result = document.getElementById(\'result-message\');\n\n  button.addEventListener(\'focus\', function () {\n    this.blur();\n  });\n\n  form.addEventListener(\'submit\', function (event) {\n    event.preventDefault();\n    result.hidden = false;\n  });\n&lt;/script&gt;',
      prompt: {
        nl: 'Welke gevolgen kunnen optreden voor toetsenbordgebruikers?',
        en: 'Which consequences may occur for keyboard users?'
      },
      options: [
        { l: 'A', t: { nl: 'De knop kan geen zichtbare focus ontvangen.', en: 'The button cannot receive visible focus.' } },
        { l: 'B', t: { nl: 'Gebruikers kunnen het besturingselement mogelijk niet activeren via het toetsenbord.', en: 'Users may be unable to activate the control using the keyboard.' } },
        { l: 'C', t: { nl: 'Dit gedrag kan leiden tot het niet voldoen aan eisen voor toetsenbordbediening.', en: 'This behavior can create a failure of keyboard operability requirements.' } },
        { l: 'D', t: { nl: 'Screenreaders negeren het besturingselement automatisch.', en: 'Screen readers will automatically ignore the control.' } },
        { l: 'E', t: { nl: 'Het programmatisch verwijderen van focus kan voorspelbare focusnavigatie verstoren.', en: 'Removing focus programmatically can interfere with predictable focus navigation.' } }
      ],
      correct: ['A', 'B', 'C', 'E'],
      explanation: {
        nl: 'Het aanroepen van <code>blur()</code> bij focus maakt de knop onbedienbaar via het toetsenbord \u2014 gebruikers kunnen er nooit op landen om Enter of Spatie in te drukken. Screenreaders negeren het niet automatisch (D is fout). Dit schendt WCAG 2.1.1 (Keyboard) en 2.4.7 (Focus Visible).',
        en: 'Calling <code>blur()</code> on focus makes the button inoperable via keyboard \u2014 users can never land on it to press Enter or Space. Screen readers don\'t automatically ignore it (D is wrong). This violates WCAG 2.1.1 (Keyboard) and 2.4.7 (Focus Visible).'
      }
    },
    {
      id: 6,
      scenario: {
        nl: 'Een pagina bevat een skiplink bedoeld om toetsenbordgebruikers herhalende content te laten overslaan.',
        en: 'A page includes a skip link intended to help keyboard users bypass repeated content.'
      },
      demo: '<div style="text-align:left;width:100%;font-size:13px;color:#333;"><a href="javascript:void(0)" onclick="var t=document.getElementById(\'q6secnav\');t.style.outline=\'2px solid #6366f1\';t.style.outlineOffset=\'2px\';t.setAttribute(\'tabindex\',\'-1\');t.focus();setTimeout(function(){t.style.outline=\'\';t.style.outlineOffset=\'\'},2000)" style="display:inline-block;margin-bottom:8px;">Skip to main content</a><div style="background:#f1f3f5;padding:8px 12px;border-bottom:1px solid #dee2e6;"><div style="text-align:right;margin-bottom:6px;font-size:12px;"><a href="javascript:void(0)" style="margin-left:12px;">Login</a><a href="javascript:void(0)" style="margin-left:12px;">Support</a></div><nav style="margin-bottom:6px;"><a href="javascript:void(0)" style="margin-right:14px;font-weight:600;">Home</a><a href="javascript:void(0)" style="margin-right:14px;font-weight:600;">Products</a><a href="javascript:void(0)" style="margin-right:14px;font-weight:600;">Services</a><a href="javascript:void(0)" style="font-weight:600;">Contact</a></nav><nav id="q6secnav" style="padding-left:20px;font-size:12px;"><a href="javascript:void(0)" style="margin-right:12px;">Audio</a><a href="javascript:void(0)" style="margin-right:12px;">Video</a><a href="javascript:void(0)">Accessories</a></nav></div><div style="padding:16px 12px;"><h1 style="font-size:18px;margin:0 0 6px;">Wireless Headphones</h1><p style="margin:0 0 8px;color:#495057;">The product details start here.</p><a href="javascript:void(0)">Add to cart</a></div></div>',
      code: '&lt;a href="#section-nav" class="skip-link"&gt;Skip to main content&lt;/a&gt;\n\n&lt;header&gt;\n  &lt;div class="top-bar"&gt;\n    &lt;a href="/login"&gt;Login&lt;/a&gt;\n    &lt;a href="/support"&gt;Support&lt;/a&gt;\n  &lt;/div&gt;\n\n  &lt;nav aria-label="Main navigation"&gt;\n    &lt;a href="/"&gt;Home&lt;/a&gt;\n    &lt;a href="/products"&gt;Products&lt;/a&gt;\n    &lt;a href="/services"&gt;Services&lt;/a&gt;\n    &lt;a href="/contact"&gt;Contact&lt;/a&gt;\n  &lt;/nav&gt;\n\n  &lt;nav id="section-nav" aria-label="Section navigation"&gt;\n    &lt;a href="/products/audio"&gt;Audio&lt;/a&gt;\n    &lt;a href="/products/video"&gt;Video&lt;/a&gt;\n    &lt;a href="/products/accessories"&gt;Accessories&lt;/a&gt;\n  &lt;/nav&gt;\n&lt;/header&gt;\n\n&lt;main id="main-content"&gt;\n  &lt;h1&gt;Wireless Headphones&lt;/h1&gt;\n  &lt;p&gt;The product details start here.&lt;/p&gt;\n  &lt;a href="/cart/add/123"&gt;Add to cart&lt;/a&gt;\n&lt;/main&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'De skiplink brengt gebruikers niet naar het unieke hoofdcontent-gedeelte.', en: 'The skip link does not take users to the unique main content area.' } },
        { l: 'B', t: { nl: 'De skiplink voldoet nog steeds aan zijn doel omdat het de focus naar een navigatielandmark verplaatst.', en: 'The skip link still satisfies its purpose because it moves focus to a navigation landmark.' } },
        { l: 'C', t: { nl: 'Toetsenbordgebruikers moeten mogelijk nog steeds door herhalende content tabben na het activeren ervan.', en: 'Keyboard users may still need to tab through repeated content after activating it.' } },
        { l: 'D', t: { nl: 'Het doel van de skiplink moet de &lt;main&gt;-regio zijn of een element aan het begin van de hoofdcontent.', en: 'The target of the skip link should be the &lt;main&gt; region or an element at the start of the main content.' } },
        { l: 'E', t: { nl: 'De aanwezigheid van meerdere &lt;nav&gt;-elementen maakt de skiplink automatisch overbodig.', en: 'The presence of multiple &lt;nav&gt; elements automatically makes the skip link unnecessary.' } }
      ],
      correct: ['A', 'C', 'D'],
      explanation: {
        nl: 'De skiplink zegt "Skip to main content" maar verwijst naar <code>#section-nav</code>, nog steeds in de header. Gebruikers moeten nog door meer navigatie tabben voordat ze bij de echte content komen. Meerdere landmarks vervangen geen skiplinks (E is fout).',
        en: 'The skip link says "Skip to main content" but points to <code>#section-nav</code>, still inside the header. Users must still tab through more navigation before reaching actual content. Multiple landmarks do not replace skip links (E is wrong).'
      }
    },
    {
      id: 7,
      scenario: {
        nl: 'Een formulier bevat een selector voor bezorgopties. Wanneer de gebruiker de waarde wijzigt, opent er automatisch een dialoogvenster.',
        en: 'A form contains a selector for delivery options. When the user changes its value, a dialog opens automatically.'
      },
      demo: '<div class="dp-form" style="max-width:340px"><label for="q7del">Delivery method</label><select id="q7del" onchange="if(this.value){var d=document.getElementById(\'q7dialog\');d.style.display=\'block\';d.querySelector(\'button\').focus();}"><option value="">Select a delivery method</option><option value="standard">Standard delivery</option><option value="express">Express delivery</option></select><div id="q7dialog" style="display:none;margin-top:10px;padding:14px;background:#f8f9fa;border:2px solid #6366f1;border-radius:8px;"><p style="font-weight:600;font-size:14px;color:#333;margin-bottom:4px;">Additional delivery options</p><p style="font-size:12px;color:#555;margin-bottom:10px;">Extra settings are available for the selected delivery method.</p><button type="button" onclick="document.getElementById(\'q7dialog\').style.display=\'none\';document.getElementById(\'q7del\').value=\'\'" style="padding:6px 14px;background:#6366f1;color:#fff;border:none;border-radius:4px;font-size:12px;cursor:pointer;">Close</button></div></div>',
      code: '&lt;form&gt;\n&lt;label for="delivery"&gt;Delivery method&lt;/label&gt;\n&lt;select id="delivery"&gt;\n&lt;option value=""&gt;Select a delivery method&lt;/option&gt;\n&lt;option value="standard"&gt;Standard delivery&lt;/option&gt;\n&lt;option value="express"&gt;Express delivery&lt;/option&gt;\n&lt;/select&gt;\n&lt;/form&gt;\n\n&lt;div id="delivery-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" hidden&gt;\n&lt;h2 id="dialog-title"&gt;Additional delivery options&lt;/h2&gt;\n&lt;p&gt;Extra settings are available for the selected delivery method.&lt;/p&gt;\n&lt;button type="button"&gt;Close&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;script&gt;\nconst deliverySelect = document.getElementById(\'delivery\');\nconst dialog = document.getElementById(\'delivery-dialog\');\n\ndeliverySelect.addEventListener(\'change\', function () {\n  if (this.value) {\n    dialog.hidden = false;\n  }\n});\n&lt;/script&gt;',
      prompt: {
        nl: 'Welke zorgen zijn terecht?',
        en: 'Which concerns are valid?'
      },
      options: [
        { l: 'A', t: { nl: 'Het wijzigen van de selectiewaarde veroorzaakt een ingrijpende contextwijziging zonder voorafgaande waarschuwing.', en: 'Changing the select value triggers a substantial context change without prior warning.' } },
        { l: 'B', t: { nl: 'Het openen van een dialoogvenster na selectie kan onverwacht zijn voor toetsenbord- en screenreadergebruikers.', en: 'Opening a dialog after selection can be unexpected for keyboard and screen reader users.' } },
        { l: 'C', t: { nl: 'Een native &lt;select&gt; kan niet toegankelijk worden gebruikt als JavaScript naar change luistert.', en: 'A native &lt;select&gt; cannot be used accessibly if JavaScript listens to change.' } },
        { l: 'D', t: { nl: 'Dit gedrag is alleen acceptabel als gebruikers vooraf worden ge\u00efnformeerd of om bevestiging wordt gevraagd.', en: 'This behavior may be acceptable only if users are informed in advance or asked to confirm the action.' } },
        { l: 'E', t: { nl: 'Het probleem bestaat alleen wanneer het dialoogvenster aria-modal="true" mist.', en: 'The issue exists only when the dialog lacks aria-modal="true".' } }
      ],
      correct: ['A', 'B', 'D'],
      explanation: {
        nl: 'Dit schendt WCAG 3.2.2 (On Input). Een <code>&lt;select&gt;</code> met JS is over het algemeen prima (C is fout). Het probleem is de onverwachte contextwijziging, niet ARIA-attributen (E is fout).',
        en: 'This violates WCAG 3.2.2 (On Input). A <code>&lt;select&gt;</code> with JS is fine in general (C is wrong). The issue is the unexpected context change, not ARIA attributes (E is wrong).'
      }
    },
    {
      id: 8,
      scenario: {
        nl: 'Een telefoonnummerveld bevat zichtbare helptekst en een foutmelding na validatie.',
        en: 'A phone number field includes visible helper text and an error message after validation.'
      },
      demo: '<div class="dp-form"><label for="dp-ph">Phone number</label><input id="dp-ph" type="text"><div class="hint">Format: +31 6 12345678</div><div class="err">This field is required.</div></div>',
      code: '&lt;div class="form-field"&gt;\n  &lt;label for="phone"&gt;Phone number&lt;/label&gt;\n  &lt;input id="phone" type="text"&gt;\n  &lt;p id="phone-help"&gt;Format: +31 6 12345678&lt;/p&gt;\n  &lt;p class="error-message"&gt;This field is required.&lt;/p&gt;\n&lt;/div&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'De helptekst is zichtbaar, maar niet programmatisch gekoppeld aan het invoerveld.', en: 'The helper text is visible, but it is not associated with the input programmatically.' } },
        { l: 'B', t: { nl: 'De foutmelding moet gekoppeld worden aan het invoerveld wanneer validatie faalt.', en: 'The error message should be associated with the input when validation fails.' } },
        { l: 'C', t: { nl: 'Het veld stelt beide beschrijvingen al beschikbaar voor hulptechnologie omdat ze in de DOM na het invoerveld staan.', en: 'The field already exposes both descriptions to assistive technologies because they follow the input in the DOM.' } },
        { l: 'D', t: { nl: 'aria-describedby kan worden gebruikt om te verwijzen naar helptekst en relevante fouttekst.', en: 'aria-describedby can be used to reference helper text and relevant error text.' } },
        { l: 'E', t: { nl: 'Het plaatsen van de foutmelding direct na het invoerveld is voldoende voor screenreaders om het automatisch voor te lezen.', en: 'Placing the error message directly after the input is sufficient for screen readers to announce it automatically.' } }
      ],
      correct: ['A', 'B', 'D'],
      explanation: {
        nl: 'Nabijheid in de DOM cre\u00ebert geen programmatische koppeling \u2014 screenreaders lezen niet automatisch tekst voor alleen omdat die in de broncode na het invoerveld staat (C en E zijn fout). De oplossing is <code>aria-describedby</code> dat verwijst naar zowel het help- als het foutmeldingsID.',
        en: 'DOM proximity does not create programmatic association \u2014 screen readers do not automatically announce nearby text just because it follows the input in the source order (C and E are wrong). The fix is <code>aria-describedby</code> referencing both the help and error message IDs.'
      }
    },
    {
      id: 9,
      scenario: {
        nl: 'Een geboortedatum-invoer is opgesplitst in twee &lt;select&gt;-elementen, voorafgegaan door een zichtbaar label.',
        en: 'A date-of-birth control is split into two &lt;select&gt; elements, preceded by a visible label.'
      },
      demo: '<div style="text-align:left;width:100%;max-width:400px;font-size:13px;color:#333;"><form><div><label for="birth-date" style="display:block;font-weight:600;margin-bottom:4px;">Date of birth</label><div style="display:flex;gap:8px;"><select id="birth-date" name="birth-day" style="flex:1;padding:6px 8px;border:1px solid #ced4da;border-radius:4px;font-size:13px;"><option value="">Day</option><option>1</option><option>2</option><option>3</option></select><select id="birth-date" name="birth-month" style="flex:1;padding:6px 8px;border:1px solid #ced4da;border-radius:4px;font-size:13px;"><option value="">Month</option><option>January</option><option>February</option><option>March</option></select></div></div></form></div>',
      code: '&lt;form&gt;\n  &lt;div&gt;\n    &lt;label for="birth-date"&gt;Date of birth&lt;/label&gt;\n\n    &lt;select id="birth-date" name="birth-day"&gt;\n      &lt;option value=""&gt;Day&lt;/option&gt;\n      &lt;option&gt;1&lt;/option&gt;\n      &lt;option&gt;2&lt;/option&gt;\n      &lt;option&gt;3&lt;/option&gt;\n    &lt;/select&gt;\n\n    &lt;select id="birth-date" name="birth-month"&gt;\n      &lt;option value=""&gt;Month&lt;/option&gt;\n      &lt;option&gt;January&lt;/option&gt;\n      &lt;option&gt;February&lt;/option&gt;\n      &lt;option&gt;March&lt;/option&gt;\n    &lt;/select&gt;\n  &lt;/div&gt;\n&lt;/form&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Alleen de eerste select is gekoppeld aan het zichtbare label in deze implementatie.', en: 'Only the first select is associated with the visible label in this implementation.' } },
        { l: 'B', t: { nl: 'Beide selects krijgen dezelfde toegankelijke naam omdat ze visueel gegroepeerd zijn.', en: 'Both selects receive the same accessible name because they are grouped visually.' } },
        { l: 'C', t: { nl: 'Elk formulierelement heeft nog steeds een toegankelijke naam nodig, zelfs als meerdere elementen samen \u00e9\u00e9n logisch veld vormen.', en: 'Each form control still needs an accessible name, even when multiple controls form one logical field.' } },
        { l: 'D', t: { nl: 'Een mogelijke oplossing is een &lt;fieldset&gt; met een &lt;legend&gt; en individuele labels voor elke select.', en: 'One possible solution is to use a &lt;fieldset&gt; with a &lt;legend&gt; and provide individual labels for each select.' } },
        { l: 'E', t: { nl: 'Placeholderteksten zoals de eerste opties "Day" en "Month" zijn altijd voldoende als labels.', en: 'Placeholder texts like first options "Day" and "Month" are always sufficient as labels.' } }
      ],
      correct: ['A', 'C', 'D'],
      explanation: {
        nl: 'Het <code>for</code>-attribuut koppelt slechts aan \u00e9\u00e9n element op basis van ID. Visuele groepering cre\u00ebert geen programmatische relaties (B is fout). Placeholder-opties zijn geen betrouwbare labels (E is fout).',
        en: 'The <code>for</code> attribute only links to one element by ID. Visual grouping doesn\'t create programmatic relationships (B is wrong). Placeholder options are not reliable labels (E is wrong).'
      }
    },
    {
      id: 10,
      scenario: {
        nl: 'Een formulier gebruikt positieve tabindex-waarden bij contact- en adresvelden.',
        en: 'A form uses positive tabindex values across contact and address fields.'
      },
      demo: '<iframe srcdoc="<!DOCTYPE html><html><head><style>body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:#333;margin:12px;} h3{font-size:15px;margin:0 0 10px;} .row{display:flex;align-items:center;margin-bottom:6px;gap:8px;} .row label{min-width:100px;} .row input{flex:1;padding:4px 6px;border:1px solid #333;font-size:13px;} section{margin-bottom:16px;} button{padding:4px 16px;font-size:13px;cursor:pointer;}</style></head><body><form><section><h3>Contact details</h3><div class=row><label>First name</label><input type=text tabindex=1></div><div class=row><label>Last name</label><input type=text tabindex=3></div><div class=row><label>Phone number</label><input type=text tabindex=6></div><div class=row><label>Email address</label><input type=text tabindex=4></div></section><section><h3>Address</h3><div class=row><label>Street</label><input type=text tabindex=4></div><div class=row><label>House number</label><input type=text tabindex=6></div><div class=row><label>Postal code</label><input type=text tabindex=5></div><div class=row><label>City</label><input type=text tabindex=2></div></section><button type=button tabindex=9>Submit</button></form></body></html>" style="width:100%;height:380px;border:none;border-radius:4px;"></iframe>',
      code: '&lt;form&gt;\n  &lt;section aria-labelledby="contact-heading"&gt;\n    &lt;h3 id="contact-heading"&gt;Contact details&lt;/h3&gt;\n\n    &lt;div&gt;\n      &lt;label for="firstName"&gt;First name&lt;/label&gt;\n      &lt;input type="text" id="firstName" tabindex="1"&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n      &lt;label for="lastName"&gt;Last name&lt;/label&gt;\n      &lt;input type="text" id="lastName" tabindex="3"&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n      &lt;label for="phone"&gt;Phone number&lt;/label&gt;\n      &lt;input type="tel" id="phone" tabindex="6"&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n      &lt;label for="email"&gt;Email address&lt;/label&gt;\n      &lt;input type="email" id="email" tabindex="4"&gt;\n    &lt;/div&gt;\n  &lt;/section&gt;\n\n  &lt;section aria-labelledby="address-heading"&gt;\n    &lt;h3 id="address-heading"&gt;Address&lt;/h3&gt;\n\n    &lt;div&gt;\n      &lt;label for="street"&gt;Street&lt;/label&gt;\n      &lt;input type="text" id="street" tabindex="4"&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n      &lt;label for="houseNumber"&gt;House number&lt;/label&gt;\n      &lt;input type="text" id="houseNumber" tabindex="6"&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n      &lt;label for="postalCode"&gt;Postal code&lt;/label&gt;\n      &lt;input type="text" id="postalCode" tabindex="5"&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n      &lt;label for="city"&gt;City&lt;/label&gt;\n      &lt;input type="text" id="city" tabindex="2"&gt;\n    &lt;/div&gt;\n  &lt;/section&gt;\n\n  &lt;button type="submit" tabindex="9"&gt;Submit&lt;/button&gt;\n&lt;/form&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Positieve tabindex-waarden kunnen een focusvolgorde cre\u00ebren die niet overeenkomt met de visuele of logische leesvolgorde.', en: 'Positive tabindex values can create a focus order that does not follow the visual or logical reading sequence.' } },
        { l: 'B', t: { nl: 'Dubbele positieve tabindex-waarden kunnen de onvoorspelbaarheid nog verder vergroten.', en: 'Duplicate positive tabindex values may further increase unpredictability.' } },
        { l: 'C', t: { nl: 'Het gebruik van positieve tabindex is de aanbevolen manier om focusvolgorde af te stemmen op de lay-out.', en: 'Using positive tabindex is the recommended way to align focus order with layout.' } },
        { l: 'D', t: { nl: 'Een betere aanpak is meestal om op de DOM-volgorde te vertrouwen en alleen tabindex="0" te gebruiken wanneer nodig.', en: 'A better approach is usually to rely on DOM order and use tabindex="0" only when necessary.' } },
        { l: 'E', t: { nl: 'Dit probleem treft alleen screenreadergebruikers, niet toetsenbordgebruikers.', en: 'This issue affects only screen reader users, not keyboard-only users.' } }
      ],
      correct: ['A', 'B', 'D'],
      explanation: {
        nl: 'Positieve <code>tabindex</code> cre\u00ebert onvoorspelbare tabvolgorden voor <em>alle</em> toetsenbordgebruikers, niet alleen screenreadergebruikers (E is fout). Het gebruik van positieve tabindex wordt afgeraden (C is fout). Structureer de DOM in logische volgorde.',
        en: 'Positive <code>tabindex</code> creates unpredictable tab sequences for <em>all</em> keyboard users, not just screen reader users (E is wrong). Using positive tabindex is discouraged (C is wrong). Structure the DOM in logical order instead.'
      }
    },
    {
      id: 11,
      scenario: {
        nl: 'Een aanmeldformulier wordt ingediend met lege velden. Ongeldige velden worden alleen aangegeven door een rode rand die via JavaScript wordt toegevoegd.',
        en: 'A signup form is submitted with empty fields. Invalid fields are indicated only by a red border added with JavaScript.'
      },
      demo: '<div class="dp-form" style="max-width:300px"><label>Full name</label><input class="inv"><label>Email</label><input class="inv"><label>Password</label><input type="password" class="inv"><button style="margin-top:0">Sign up</button></div>',
      code: '&lt;form id="signup" novalidate&gt;\n  &lt;div class="form-group"&gt;\n    &lt;label for="name"&gt;Full name&lt;/label&gt;\n    &lt;input type="text" id="name" required&gt;\n  &lt;/div&gt;\n\n  &lt;div class="form-group"&gt;\n    &lt;label for="email"&gt;Email&lt;/label&gt;\n    &lt;input type="email" id="email" required&gt;\n  &lt;/div&gt;\n\n  &lt;div class="form-group"&gt;\n    &lt;label for="password"&gt;Password&lt;/label&gt;\n    &lt;input type="password" id="password" required&gt;\n  &lt;/div&gt;\n\n  &lt;button type="submit"&gt;Sign up&lt;/button&gt;\n&lt;/form&gt;\n\n&lt;style&gt;\n  input.invalid {\n    border: 2px solid #f87171;\n  }\n&lt;/style&gt;\n\n&lt;script&gt;\n  document.getElementById(\'signup\').addEventListener(\'submit\', function (e) {\n    e.preventDefault();\n    this.querySelectorAll(\'input\').forEach(function (input) {\n      if (!input.value.trim()) {\n        input.classList.add(\'invalid\');\n      } else {\n        input.classList.remove(\'invalid\');\n      }\n    });\n  });\n&lt;/script&gt;',
      prompt: {
        nl: 'Welke toegankelijkheidsproblemen kunnen zich voordoen?',
        en: 'Which accessibility problems may arise?'
      },
      options: [
        { l: 'A', t: { nl: 'De foutindicatie is alleen afhankelijk van kleur.', en: 'Error indication relies only on color.' } },
        { l: 'B', t: { nl: 'Screenreadergebruikers worden mogelijk niet ge\u00efnformeerd dat er validatiefouten zijn opgetreden.', en: 'Screen reader users may not be informed that validation errors occurred.' } },
        { l: 'C', t: { nl: 'Gebruikers ontvangen mogelijk geen duidelijke, veldspecifieke instructies over hoe ze het probleem kunnen oplossen.', en: 'Users may not receive clear, field-specific guidance about how to fix the problem.' } },
        { l: 'D', t: { nl: 'Het toevoegen van een rode rand stelt de validatiestatus automatisch beschikbaar voor hulptechnologie.', en: 'Adding a red border automatically exposes the validation state to assistive technologies.' } },
        { l: 'E', t: { nl: 'Deze implementatie kan barri\u00e8res cre\u00ebren voor gebruikers met slechtziendheid, kleurenblindheid en cognitieve beperkingen.', en: 'This implementation can create barriers for users with low vision, color vision deficiency, and cognitive disabilities.' } }
      ],
      correct: ['A', 'B', 'C', 'E'],
      explanation: {
        nl: 'Een CSS-klassewijziging wordt niet doorgegeven aan hulptechnologie, dus het toevoegen van een rode rand communiceert de validatiestatus niet automatisch (D is fout). De randkleur #f87171 heeft slechts 2,58:1 contrastverhouding tegen wit, wat niet voldoet aan het 3:1 minimum vereist door WCAG 1.4.11 voor niet-tekst UI-componenten. Zonder fouttekst en met kleur als enige indicator, informeert deze implementatie screenreadergebruikers, gebruikers met slechtziendheid of kleurenblindheid en gebruikers met cognitieve beperkingen niet.',
        en: 'A CSS class change is not exposed to assistive technology, so adding a red border does not automatically communicate the validation state (D is wrong). The border color #f87171 has only 2.58:1 contrast ratio against white, failing the 3:1 minimum required by WCAG 1.4.11 for non-text UI components. With no error text and color as the sole indicator, this implementation fails to inform screen reader users, users with low vision or color vision deficiency, and users with cognitive disabilities.'
      }
    },
    {
      id: 12,
      scenario: {
        nl: 'Een groep radioknoppen is verpakt in een &lt;fieldset&gt;. De &lt;legend&gt; is aanwezig en bevat de zichtbare labeltekst.',
        en: 'A group of radio buttons is wrapped in a &lt;fieldset&gt;. The &lt;legend&gt; is present and contains the visible label text.'
      },
      demo: '<fieldset style="text-align:left;border:1px solid #cbd5e1;border-radius:8px;padding:16px;max-width:420px;margin:0;"><div style="display:flex;align-items:center;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #e2e8f0;"><legend style="font-weight:600;font-size:1rem;color:#333;padding:0;margin:0;">Shipping method</legend></div><div style="margin-bottom:8px;"><input type="radio" name="q12ship" id="q12std" value="standard" style="margin-right:6px;"><label for="q12std" style="font-size:13px;color:#333;cursor:pointer;">Standard (5\u20137 days)</label></div><div style="margin-bottom:8px;"><input type="radio" name="q12ship" id="q12exp" value="express" style="margin-right:6px;"><label for="q12exp" style="font-size:13px;color:#333;cursor:pointer;">Express (2\u20133 days)</label></div><div style="margin-bottom:0;"><input type="radio" name="q12ship" id="q12ovn" value="overnight" style="margin-right:6px;"><label for="q12ovn" style="font-size:13px;color:#333;cursor:pointer;">Overnight</label></div></fieldset>',
      code: '&lt;fieldset class="shipping-options"&gt;\n  &lt;div class="legend-wrapper"&gt;\n    &lt;legend&gt;Shipping method&lt;/legend&gt;\n  &lt;/div&gt;\n\n  &lt;div class="option"&gt;\n    &lt;input type="radio" name="shipping" id="standard" value="standard"&gt;\n    &lt;label for="standard"&gt;Standard (5\u20137 days)&lt;/label&gt;\n  &lt;/div&gt;\n\n  &lt;div class="option"&gt;\n    &lt;input type="radio" name="shipping" id="express" value="express"&gt;\n    &lt;label for="express"&gt;Express (2\u20133 days)&lt;/label&gt;\n  &lt;/div&gt;\n\n  &lt;div class="option"&gt;\n    &lt;input type="radio" name="shipping" id="overnight" value="overnight"&gt;\n    &lt;label for="overnight"&gt;Overnight&lt;/label&gt;\n  &lt;/div&gt;\n&lt;/fieldset&gt;\n\n&lt;style&gt;\n  .shipping-options {\n    border: 1px solid #cbd5e1;\n    border-radius: 8px;\n    padding: 16px;\n    max-width: 420px;\n  }\n\n  .legend-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 12px;\n    padding-bottom: 8px;\n    border-bottom: 1px solid #e2e8f0;\n  }\n\n  .legend-wrapper legend {\n    font-weight: 600;\n    font-size: 1rem;\n    padding: 0;\n    margin: 0;\n  }\n\n  .option {\n    margin-bottom: 8px;\n  }\n&lt;/style&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Een &lt;legend&gt; moet een direct child-element van &lt;fieldset&gt; zijn om de toegankelijke naam van de groep betrouwbaar te leveren.', en: 'A &lt;legend&gt; must be a direct child of &lt;fieldset&gt; to provide the group\'s accessible name reliably.' } },
        { l: 'B', t: { nl: 'Het verpakken van de legend in een &lt;div&gt; kan de semantische relatie tussen de fieldset en legend verbreken.', en: 'Wrapping the legend in a &lt;div&gt; can break the semantic relationship between the fieldset and legend.' } },
        { l: 'C', t: { nl: 'De radioknoppen zijn individueel labelbaar, maar het groepslabel kan verloren gaan.', en: 'The radio buttons remain individually labelable, but the group label may be lost.' } },
        { l: 'D', t: { nl: 'Screenreaders leiden de legendtekst altijd af uit de visuele lay-out.', en: 'Screen readers will always infer the legend text from the visual layout.' } },
        { l: 'E', t: { nl: 'De juiste oplossing is om &lt;fieldset&gt; in alle gevallen te vervangen door een &lt;div role="radiogroup"&gt;.', en: 'The correct fix is to replace &lt;fieldset&gt; with a &lt;div role="radiogroup"&gt; in all cases.' } }
      ],
      correct: ['A', 'B', 'C'],
      explanation: {
        nl: 'Volgens de HTML-specificatie moet <code>&lt;legend&gt;</code> het eerste child-element van <code>&lt;fieldset&gt;</code> zijn. Het verpakken in een <code>&lt;div&gt;</code> verbreekt de koppeling. Screenreaders leiden niets af uit de visuele lay-out (D is fout). <code>&lt;fieldset&gt;</code>/<code>&lt;legend&gt;</code> is het voorkeurs-native patroon (E is fout).',
        en: 'Per the HTML spec, <code>&lt;legend&gt;</code> must be the first element child of <code>&lt;fieldset&gt;</code>. Wrapping it in a <code>&lt;div&gt;</code> breaks the association. Screen readers do not infer from visual layout (D is wrong). <code>&lt;fieldset&gt;</code>/<code>&lt;legend&gt;</code> is the preferred native pattern (E is wrong).'
      }
    },
    {
      id: 13,
      scenario: {
        nl: 'Het logo met de tekst "Good" staat op een pagina. Dit logo functioneert als een link. De toegankelijke naam van deze link is "homepage".',
        en: 'The logo with text "Good" is present on a page. This logo functions as a link. The accessible name of this link is "homepage".'
      },
      demo: '<div style="display:flex;align-items:center;"><a href="javascript:void(0)" aria-label="Go to homepage" aria-labelledby="q13logo-description" style="display:flex;align-items:center;text-decoration:none;"><img src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%2764%27 viewBox=%270 0 120 64%27%3E%3Crect width=%27120%27 height=%2764%27 rx=%278%27 fill=%27%23e9ecef%27/%3E%3Ctext x=%2760%27 y=%2738%27 text-anchor=%27middle%27 font-family=%27Arial,sans-serif%27 font-weight=%27700%27 font-size=%2724%27 fill=%27%23333%27%3EGood%3C/text%3E%3C/svg%3E" alt="Good Corporation" style="height:64px;border-radius:8px;"><span id="q13logo-description" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">homepage</span></a></div>',
      code: '&lt;a href="/" aria-label="Go to homepage" aria-labelledby="logo-description"&gt;\n  &lt;img src="https://static.vecteezy.com/system/resources/previews/021/396/902/large_2x/good-logo-icon-vector.jpg" alt="Good Corporation"&gt;\n  &lt;span id="logo-description" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0"&gt;homepage&lt;/span&gt;\n&lt;/a&gt;',
      prompt: {
        nl: 'Welke zorgen zijn terecht?',
        en: 'Which concerns are valid?'
      },
      options: [
        { l: 'A', t: { nl: 'De toegankelijke naam komt niet overeen met het zichtbare label dat gebruikers op het scherm zien.', en: 'The accessible name does not match the visible label users see on screen.' } },
        { l: 'B', t: { nl: 'Spraakherkenningsgebruikers kunnen moeite hebben om de link te activeren met de zichtbare tekst.', en: 'Speech-input users may have difficulty activating the link using the visible text.' } },
        { l: 'C', t: { nl: 'Het doel van de link is minder duidelijk dan het zou kunnen zijn.', en: 'The purpose of the link is less clear than it could be.' } },
        { l: 'D', t: { nl: 'Dit is acceptabel omdat aria-labelledby altijd de duidelijkheid van links verbetert.', en: 'This is acceptable because aria-labelledby always improves link clarity.' } },
        { l: 'E', t: { nl: 'Een betere toegankelijke naam zou doorgaans de zichtbare naam bevatten en, indien nodig, de bestemming of het doel.', en: 'A better accessible name would usually include the visible name and, if needed, the destination or purpose.' } }
      ],
      correct: ['A', 'B', 'C', 'E'],
      explanation: {
        nl: '<code>aria-labelledby</code> wint de accessible name-berekening, dus de link wordt aangekondigd als "homepage". Het zichtbare "Good" zit niet in de toegankelijke naam, wat WCAG 2.5.3 (Label in Name) schendt. <code>aria-labelledby</code> verbetert niet automatisch de duidelijkheid (D is fout).',
        en: '<code>aria-labelledby</code> wins the accessible name computation, so the link is announced as "homepage." The visible "Good" is not in the accessible name, violating WCAG 2.5.3 (Label in Name). <code>aria-labelledby</code> doesn\'t automatically improve clarity (D is wrong).'
      }
    },
    {
      id: 14,
      scenario: {
        nl: 'Nadat een gebruiker op een "Bereken"-knop heeft geklikt, verschijnt er een resultaatbericht. Dit is een statusbericht.',
        en: 'After a user activates a "Calculate" button, a result message appears. This is a status message.'
      },
      demo: '<div class="dp-lr"><button onclick="var m=this.parentNode.querySelector(\'.msg\');m.style.display=\'block\';m.textContent=\'The cost is \u20ac300\'">Calculate</button><div class="msg"></div></div>',
      code: '&lt;div id="result" aria-live="polite" hidden&gt;Taking into account the selected parameters, the cost is&lt;/div&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Content in een element met het hidden attribuut wordt niet beschikbaar gesteld, dus live region-aankondigingen vinden mogelijk niet plaats.', en: 'Content inside an element with the hidden attribute is not exposed, so live region announcements may not occur.' } },
        { l: 'B', t: { nl: 'Alleen het bijwerken van een verborgen live region is geen betrouwbare manier om een statusbericht aan te kondigen.', en: 'Merely updating a hidden live region is not a reliable way to announce a status message.' } },
        { l: 'C', t: { nl: 'De toetsenbordfocus moet altijd naar het bericht worden verplaatst om het toegankelijk te maken.', en: 'Keyboard focus must always move to the message for it to be accessible.' } },
        { l: 'D', t: { nl: 'De live region moet over het algemeen aanwezig en zichtbaar zijn voordat de tekstinhoud verandert.', en: 'The live region should generally be present and exposed before its text content changes.' } },
        { l: 'E', t: { nl: 'Dit soort update kan een correct ge\u00efmplementeerd statusberichtpatroon nodig hebben in plaats van focusverplaatsing.', en: 'This kind of update may need a properly implemented status message pattern rather than focus movement.' } }
      ],
      correct: ['A', 'B', 'D', 'E'],
      explanation: {
        nl: 'Het <code>hidden</code>-attribuut verwijdert het element uit de accessibility tree. Wanneer JS <code>hidden</code> verwijdert en tegelijkertijd tekst injecteert, kondigen screenreaders de wijziging niet aan. De live region moet bestaan en zichtbaar zijn voor hulptechnologie <em>v\u00f3\u00f3r</em> de content-update. Focusverplaatsing is niet altijd vereist (C is fout).',
        en: 'The <code>hidden</code> attribute removes the element from the accessibility tree. When JS removes <code>hidden</code> and injects text simultaneously, screen readers won\'t announce the change. The live region must exist and be visible to AT <em>before</em> the content update. Focus movement is not always required (C is wrong).'
      }
    },
    {
      id: 15,
      scenario: {
        nl: 'Een custom autocomplete-widget plaatst role="combobox" op een wrapper &lt;div&gt; die een &lt;input&gt; bevat.',
        en: 'A custom autocomplete widget places role="combobox" on a wrapper &lt;div&gt; that contains an &lt;input&gt;.'
      },
      demo: '<div style="text-align:left;width:100%;max-width:300px;"><label id="q15search-label" for="q15input" style="display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:4px;">Search country</label><div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-controls="q15list" aria-labelledby="q15search-label" style="display:flex;gap:0;"><input id="q15input" type="text" autocomplete="off" placeholder="Type a country" oninput="var ul=document.getElementById(\'q15list\');var v=this.value.toLowerCase();var items=ul.querySelectorAll(\'li\');var any=false;items.forEach(function(li){var match=li.textContent.toLowerCase().indexOf(v)>=0;li.style.display=match?\'block\':\'none\';if(match)any=true;});ul.style.display=any&&v?\'block\':\'none\';this.parentNode.setAttribute(\'aria-expanded\',any&&v?\'true\':\'false\');" onfocus="var ul=document.getElementById(\'q15list\');if(this.value){ul.style.display=\'block\';this.parentNode.setAttribute(\'aria-expanded\',\'true\');}" style="flex:1;padding:7px 10px;border:1px solid #ced4da;border-radius:4px 0 0 4px;font-size:13px;"><button type="button" aria-label="Show suggestions" onclick="var ul=document.getElementById(\'q15list\');var show=ul.style.display!==\'block\';ul.style.display=show?\'block\':\'none\';ul.querySelectorAll(\'li\').forEach(function(li){li.style.display=\'block\';});ul.parentNode.querySelector(\'[role=combobox]\').setAttribute(\'aria-expanded\',show?\'true\':\'false\');" style="padding:7px 10px;border:1px solid #ced4da;border-left:none;border-radius:0 4px 4px 0;background:#f8f9fa;cursor:pointer;font-size:13px;color:#333;">\u25bc</button></div><ul id="q15list" role="listbox" aria-label="Country suggestions" style="display:none;list-style:none;border:1px solid #dee2e6;border-top:none;border-radius:0 0 4px 4px;margin:0;padding:0;"><li role="option" onclick="document.getElementById(\'q15input\').value=this.textContent;document.getElementById(\'q15list\').style.display=\'none\';" style="padding:6px 10px;font-size:13px;color:#333;cursor:pointer;">Netherlands</li><li role="option" onclick="document.getElementById(\'q15input\').value=this.textContent;document.getElementById(\'q15list\').style.display=\'none\';" style="padding:6px 10px;font-size:13px;color:#333;cursor:pointer;">Norway</li><li role="option" onclick="document.getElementById(\'q15input\').value=this.textContent;document.getElementById(\'q15list\').style.display=\'none\';" style="padding:6px 10px;font-size:13px;color:#333;cursor:pointer;">Nigeria</li></ul></div>',
      code: '&lt;label id="search-label" for="search-input"&gt;Search country&lt;/label&gt;\n\n&lt;div\n  class="search-combobox"\n  role="combobox"\n  aria-expanded="false"\n  aria-haspopup="listbox"\n  aria-controls="search-suggestions"\n  aria-labelledby="search-label"\n&gt;\n  &lt;input\n    id="search-input"\n    type="text"\n    autocomplete="off"\n    placeholder="Type a country"\n  &gt;\n  &lt;button type="button" aria-label="Show suggestions"&gt;\u25bc&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;ul id="search-suggestions" role="listbox" aria-label="Country suggestions" hidden&gt;\n  &lt;li role="option"&gt;Netherlands&lt;/li&gt;\n  &lt;li role="option"&gt;Norway&lt;/li&gt;\n  &lt;li role="option"&gt;Nigeria&lt;/li&gt;\n&lt;/ul&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Het toekennen van de combobox role aan een wrapper in plaats van het daadwerkelijke bewerkbare besturingselement kan tegenstrijdige semantiek cre\u00ebren.', en: 'Exposing the combobox role on a wrapper instead of the actual editable control can create conflicting semantics.' } },
        { l: 'B', t: { nl: 'Hulptechnologie kan mogelijk niet correct bepalen welk element het tekstinvoerveld is.', en: 'Assistive technologies may not correctly interpret which element is the text entry field.' } },
        { l: 'C', t: { nl: 'Het input-element moet normaal gesproken het combobox-element zijn bij bewerkbare combobox-patronen.', en: 'The input should typically be the combobox element in editable combobox patterns.' } },
        { l: 'D', t: { nl: 'De aanwezigheid van een &lt;input&gt; binnen een role="combobox" container lost automatisch alle semantiek op.', en: 'The presence of an &lt;input&gt; inside a role="combobox" container automatically resolves all semantics.' } },
        { l: 'E', t: { nl: 'ARIA combobox-implementaties moeten het verwachte eigendoms- en focusmodel zorgvuldig volgen.', en: 'ARIA combobox implementations must follow the expected ownership and focus model carefully.' } }
      ],
      correct: ['A', 'B', 'C'],
      explanation: {
        nl: 'In ARIA 1.2 moet <code>role="combobox"</code> op het <code>&lt;input&gt;</code>-element zelf staan. Het plaatsen op een wrapper <code>&lt;div&gt;</code> cre\u00ebert tegenstrijdige semantiek en verwarring over welk element het bewerkbare besturingselement is. Het nesten van een input binnen een combobox-container lost dit niet automatisch op (D is fout). Hoewel E een over het algemeen ware stelling is, identificeert het geen specifiek probleem in deze implementatie.',
        en: 'In ARIA 1.2, <code>role="combobox"</code> should be on the <code>&lt;input&gt;</code> itself. Placing it on a wrapper <code>&lt;div&gt;</code> creates conflicting semantics and confusion about which element is the editable control. Nesting an input inside a combobox container doesn\'t automatically resolve this (D is wrong). While E is a generally true statement, it does not identify a specific problem in this implementation.'
      }
    },
    {
      id: 16,
      scenario: {
        nl: 'Een disclosure-component gebruikt native &lt;details&gt; en &lt;summary&gt;, maar plaatst ook een knop binnen &lt;summary&gt;.',
        en: 'A disclosure component uses native &lt;details&gt; and &lt;summary&gt;, but also places a button inside &lt;summary&gt;.'
      },
      demo: '<div class="dp-disc"><details><summary>What is your return policy?<button type="button" onclick="event.stopPropagation();alert(\'Contact support\')">Contact support</button></summary><p>Items can be returned within 30 days of purchase.</p></details></div>',
      code: '&lt;section&gt;\n  &lt;h2&gt;Frequently asked questions&lt;/h2&gt;\n\n  &lt;details class="faq-item"&gt;\n    &lt;summary&gt;\n      What is your return policy?\n      &lt;button type="button"&gt;Contact support&lt;/button&gt;\n    &lt;/summary&gt;\n\n    &lt;p&gt;\n      Items can be returned within 30 days of purchase.\n    &lt;/p&gt;\n  &lt;/details&gt;\n&lt;/section&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: '&lt;summary&gt; fungeert al als het interactieve besturingselement voor de disclosure.', en: '&lt;summary&gt; already acts as the interactive control for the disclosure.' } },
        { l: 'B', t: { nl: 'Het plaatsen van een ander interactief element binnen &lt;summary&gt; kan geneste interactieve besturingselementen cre\u00ebren.', en: 'Putting another interactive element inside &lt;summary&gt; can create nested interactive controls.' } },
        { l: 'C', t: { nl: 'Dit kan inconsistent gedrag veroorzaken voor toetsenbord- en hulptechnologiegebruikers.', en: 'This may cause inconsistent behavior for keyboard and assistive technology users.' } },
        { l: 'D', t: { nl: 'Het toevoegen van role="button" aan de binnenste knop lost het probleem op.', en: 'Adding role="button" to the inner button resolves the issue.' } },
        { l: 'E', t: { nl: 'Het extra besturingselement moet meestal buiten het &lt;summary&gt;-element worden geplaatst.', en: 'The extra control should usually be moved outside the &lt;summary&gt; element.' } }
      ],
      correct: ['A', 'B', 'C', 'E'],
      explanation: {
        nl: '<code>&lt;summary&gt;</code> is inherent interactief. Het nesten van een <code>&lt;button&gt;</code> erin cre\u00ebert een interactief-binnen-interactief schending. <code>role="button"</code> lost het structurele nestprobleem niet op (D is fout).',
        en: '<code>&lt;summary&gt;</code> is inherently interactive. Nesting a <code>&lt;button&gt;</code> inside creates an interactive-inside-interactive violation. <code>role="button"</code> doesn\'t fix the structural nesting problem (D is wrong).'
      }
    },
    {
      id: 17,
      scenario: {
        nl: 'De pagina bevat een &lt;meta name="viewport"&gt;-element met het volgende content-attribuut:',
        en: 'The page includes a &lt;meta name="viewport"&gt; element with the following content attribute:'
      },
      demo: '',
      code: '&lt;!doctype html&gt;\n&lt;html lang="en"&gt;\n&lt;head&gt;\n  &lt;meta charset="utf-8"&gt;\n  &lt;title&gt;Checkout&lt;/title&gt;\n  &lt;meta\n    name="viewport"\n    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"\n  &gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;main&gt;\n    &lt;h1&gt;Checkout&lt;/h1&gt;\n\n    &lt;form&gt;\n      &lt;div&gt;\n        &lt;label for="cardNumber"&gt;Card number&lt;/label&gt;\n        &lt;input id="cardNumber" type="text"&gt;\n      &lt;/div&gt;\n\n      &lt;div&gt;\n        &lt;label for="expiry"&gt;Expiry date&lt;/label&gt;\n        &lt;input id="expiry" type="text"&gt;\n      &lt;/div&gt;\n\n      &lt;button type="submit"&gt;Pay now&lt;/button&gt;\n    &lt;/form&gt;\n  &lt;/main&gt;\n&lt;/body&gt;\n&lt;/html&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Het beperken van zoom kan voorkomen dat mensen content schalen naar hun behoefte.', en: 'Restricting user zoom can prevent people from scaling content as needed.' } },
        { l: 'B', t: { nl: 'Dit kan barri\u00e8res cre\u00ebren voor gebruikers met slechtziendheid.', en: 'This can create barriers for users with low vision.' } },
        { l: 'C', t: { nl: 'Het voorkomen van zoom is acceptabel wanneer de lay-out responsive is.', en: 'Preventing zoom is acceptable when the layout is responsive.' } },
        { l: 'D', t: { nl: 'Gebruikers moeten over het algemeen kunnen zoomen tot minimaal 200%.', en: 'Users should generally be allowed to zoom to at least 200%.' } },
        { l: 'E', t: { nl: 'Dit probleem wordt veroorzaakt door CSS, niet door de viewport-configuratie.', en: 'This issue is caused by CSS, not by the viewport configuration.' } }
      ],
      correct: ['A', 'B', 'D'],
      explanation: {
        nl: '<code>maximum-scale=1</code> en <code>user-scalable=no</code> voorkomen pinch-to-zoom, wat WCAG 1.4.4 schendt. Een responsive lay-out vervangt zoom niet (C is fout). Dit is een viewport meta-probleem, geen CSS-probleem (E is fout).',
        en: '<code>maximum-scale=1</code> and <code>user-scalable=no</code> prevent pinch-to-zoom, violating WCAG 1.4.4. A responsive layout does not replace zoom (C is wrong). This is a viewport meta issue, not CSS (E is wrong).'
      }
    },
    {
      id: 18,
      scenario: {
        nl: 'Het activeren van de knop "Open filters" opent het filterpaneel en de toetsenbordfocus wordt in het invoerveld geplaatst.',
        en: 'Activating the "Open filters" button opens the panel with filters and the keyboard focus is placed in the input field.'
      },
      demo: '<iframe srcdoc="<!DOCTYPE html><html><head><style>body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:#333;margin:12px;}a{color:#6366f1;margin-right:12px;}button{padding:6px 14px;font-size:13px;cursor:pointer;}#fp{margin-top:12px;padding:14px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;}#fp h2{font-size:15px;margin:0 0 10px;}#fp label{display:block;font-size:13px;font-weight:600;margin-bottom:4px;}#fp input{width:100%;padding:7px 10px;border:1px solid #ced4da;border-radius:4px;font-size:13px;margin-bottom:8px;box-sizing:border-box;}</style></head><body><a href=javascript:void(0)>Home</a> <button id=ob onclick=document.getElementById(this.dataset.t).hidden=false;document.getElementById(this.dataset.k).focus() data-t=fp data-k=kw>Open filters</button> <a href=javascript:void(0)>Contact</a><div id=fp hidden><h2>Filters</h2><label for=kw>Keyword</label><input id=kw type=text onkeydown=if(event.key===String.fromCharCode(84)+String.fromCharCode(97)+String.fromCharCode(98)){event.preventDefault();this.focus();}><button type=button onclick=void(0) onkeydown=if(event.key===String.fromCharCode(84)+String.fromCharCode(97)+String.fromCharCode(98)){event.preventDefault();document.getElementById(String.fromCharCode(107)+String.fromCharCode(119)).focus()}>Apply</button></div></body></html>" style="width:100%;height:220px;border:none;border-radius:4px;"></iframe>',
      code: '&lt;!doctype html&gt;\n&lt;html lang="en"&gt;\n&lt;head&gt;\n  &lt;meta charset="utf-8"&gt;\n  &lt;title&gt;Keyboard trap example&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;a href="/home"&gt;Home&lt;/a&gt;\n  &lt;button id="openPanel"&gt;Open filters&lt;/button&gt;\n  &lt;a href="/contact"&gt;Contact&lt;/a&gt;\n\n  &lt;div id="filterPanel" hidden&gt;\n    &lt;h2&gt;Filters&lt;/h2&gt;\n\n    &lt;label for="keyword"&gt;Keyword&lt;/label&gt;\n    &lt;input id="keyword" type="text"&gt;\n\n    &lt;button type="button"&gt;Apply&lt;/button&gt;\n  &lt;/div&gt;\n\n  &lt;script&gt;\n    const openPanel = document.getElementById(\'openPanel\');\n    const panel = document.getElementById(\'filterPanel\');\n    const keyword = document.getElementById(\'keyword\');\n\n    openPanel.addEventListener(\'click\', () =&gt; {\n      panel.hidden = false;\n      keyword.focus();\n    });\n\n    panel.addEventListener(\'keydown\', (event) =&gt; {\n      if (event.key === \'Tab\') {\n        event.preventDefault();\n        keyword.focus();\n      }\n    });\n  &lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;',
      prompt: {
        nl: 'Welke gevolgen kunnen voortkomen uit deze implementatie?',
        en: 'Which consequences may arise from this implementation?'
      },
      options: [
        { l: 'A', t: { nl: 'Toetsenbordgebruikers kunnen vast komen te zitten in het component.', en: 'Keyboard users can become trapped inside the component.' } },
        { l: 'B', t: { nl: 'Gebruikers kunnen het component mogelijk niet verlaten met standaard toetsenbordinteractie.', en: 'Users may be unable to leave the component using standard keyboard interaction.' } },
        { l: 'C', t: { nl: 'Dit patroon is alleen acceptabel wanneer een correct modale dialoog-focustrap opzettelijk is ge\u00efmplementeerd.', en: 'This pattern can be acceptable only when a correct modal dialog focus trap is intentionally implemented.' } },
        { l: 'D', t: { nl: 'Het voorkomen van Tab is altijd vereist voor elk custom paneel.', en: 'Preventing Tab is always required for any custom panel.' } },
        { l: 'E', t: { nl: 'Dit gedrag kan niet voldoen aan de eisen voor toetsenbordtoegankelijkheid.', en: 'This behavior can fail keyboard accessibility requirements.' } }
      ],
      correct: ['A', 'B', 'C', 'E'],
      explanation: {
        nl: 'Dit is een ernstige WCAG 2.1.2 (No Keyboard Trap) schending, tenzij het een modale dialoog is met Escape-exit. Een gewoon filterpaneel mag nooit de focus vasthouden (D is fout).',
        en: 'This is a serious WCAG 2.1.2 (No Keyboard Trap) violation unless it\'s a modal dialog with Escape exit. A regular filter panel should never trap focus (D is wrong).'
      }
    },
    {
      id: 19,
      scenario: {
        nl: 'Een boekingsformulier splitst de datum op in drie tekstvelden.',
        en: 'A booking form splits the date into three text fields.'
      },
      demo: '<div class="dp-form" style="max-width:400px"><label for="dp-nm">Full name</label><input id="dp-nm" type="text"><div class="dp-dg"><input placeholder="DD"><span>/</span><input placeholder="MM"><span>/</span><input placeholder="YY"></div><div style="height:10px"></div><button>Continue</button></div>',
      code: '&lt;form&gt;\n  &lt;h2&gt;Book an appointment&lt;/h2&gt;\n\n  &lt;div&gt;\n    &lt;label for="name"&gt;Full name&lt;/label&gt;\n    &lt;input id="name" type="text"&gt;\n  &lt;/div&gt;\n\n  &lt;div class="date-group"&gt;\n    &lt;input type="text" size="2" maxlength="2" placeholder="DD"&gt;\n    /\n    &lt;input type="text" size="2" maxlength="2" placeholder="MM"&gt;\n    /\n    &lt;input type="text" size="2" maxlength="2" placeholder="YY"&gt;\n  &lt;/div&gt;\n\n  &lt;button type="submit"&gt;Continue&lt;/button&gt;\n&lt;/form&gt;',
      prompt: {
        nl: 'Welke zorgen zijn terecht?',
        en: 'Which concerns are valid?'
      },
      options: [
        { l: 'A', t: { nl: 'De datuminvoervelden missen een duidelijk zichtbaar label dat beschrijft wat de gegroepeerde velden voorstellen.', en: 'The date inputs lack a clear visible label describing what the grouped fields represent.' } },
        { l: 'B', t: { nl: 'Placeholdertekst zoals "DD", "MM" en "YY" is op zichzelf voldoende als labeling en instructie.', en: 'Placeholder text such as "DD", "MM", and "YY" is sufficient as labeling and instruction by itself.' } },
        { l: 'C', t: { nl: 'Gebruikers begrijpen mogelijk niet het verwachte formaat of het doel van de groep.', en: 'Users may not understand the expected format or purpose of the group.' } },
        { l: 'D', t: { nl: 'Een zichtbaar groepslabel en expliciete formaatinstructies zouden de toegankelijkheid verbeteren.', en: 'A visible group label and explicit format instructions would improve accessibility.' } },
        { l: 'E', t: { nl: 'Het probleem treft alleen screenreadergebruikers.', en: 'The problem affects only screen reader users.' } }
      ],
      correct: ['A', 'C', 'D'],
      explanation: {
        nl: 'Placeholdertekst verdwijnt bij invoer en is geen betrouwbaar label (B is fout). <em>Alle</em> gebruikers kunnen moeite hebben zonder een zichtbaar label \u2014 niet alleen screenreadergebruikers (E is fout).',
        en: 'Placeholder text disappears on input and isn\'t a reliable label (B is wrong). <em>All</em> users may struggle without a visible label \u2014 not just screen reader users (E is wrong).'
      }
    },
    {
      id: 20,
      scenario: {
        nl: 'Een reeks stapsgewijze instructies wordt visueel in de juiste volgorde weergegeven met CSS order, maar de DOM-volgorde is anders.',
        en: 'A set of step-by-step instructions is presented visually in the correct order using CSS order, but the DOM order is different.'
      },
      demo: '<div class="dp-steps"><div class="si"><span class="sn">1.</span> Read the safety instructions provided with the seat.</div><div class="si"><span class="sn">2.</span> Adjust the harness to fit the child properly.</div><div class="si"><span class="sn">3.</span> Place the car seat on the vehicle seat.</div><div class="si"><span class="sn">4.</span> Secure the seat using the seat belt or ISOFIX anchors.</div><div class="si"><span class="sn">5.</span> Check that the seat does not move more than 2 cm.</div></div>',
      code: '&lt;section class="instructions"&gt;\n  &lt;h2&gt;Install a child car seat&lt;/h2&gt;\n\n  &lt;div class="steps"&gt;\n    &lt;div class="step step-3"&gt;Place the car seat on the vehicle seat.&lt;/div&gt;\n    &lt;div class="step step-5"&gt;Check that the seat does not move more than 2 cm.&lt;/div&gt;\n    &lt;div class="step step-1"&gt;Read the safety instructions provided with the seat.&lt;/div&gt;\n    &lt;div class="step step-4"&gt;Secure the seat using the seat belt or ISOFIX anchors.&lt;/div&gt;\n    &lt;div class="step step-2"&gt;Adjust the harness to fit the child properly.&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/section&gt;\n\n&lt;style&gt;\n  .steps {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .step {\n    position: relative;\n    padding-left: 1.2rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .step::before {\n    content: "\u2022";\n    position: absolute;\n    left: 0;\n  }\n\n  .step-1 { order: 1; }\n  .step-2 { order: 2; }\n  .step-3 { order: 3; }\n  .step-4 { order: 4; }\n  .step-5 { order: 5; }\n&lt;/style&gt;',
      prompt: {
        nl: 'Welke stellingen zijn juist?',
        en: 'Which statements are correct?'
      },
      options: [
        { l: 'A', t: { nl: 'Hulptechnologie volgt doorgaans de DOM-volgorde, niet de visuele volgorde die door CSS wordt gecre\u00eberd.', en: 'Assistive technologies typically follow DOM order, not the visual order created by CSS.' } },
        { l: 'B', t: { nl: 'Gebruikers kunnen de stappen in een andere volgorde waarnemen, afhankelijk van hoe ze de content benaderen.', en: 'Users may perceive the steps in a different sequence depending on how they access the content.' } },
        { l: 'C', t: { nl: 'CSS order wijzigt de semantische leesvolgorde voor alle gebruikers op dezelfde manier.', en: 'CSS order changes the semantic reading order for all users equally.' } },
        { l: 'D', t: { nl: 'Sequenti\u00eble instructies moeten in de juiste DOM-volgorde worden geschreven.', en: 'Sequential instructions should be authored in the correct DOM order.' } },
        { l: 'E', t: { nl: 'Dit soort content moet over het algemeen lijstsemantiek gebruiken in plaats van generieke &lt;div&gt;-elementen.', en: 'This kind of content should generally use list semantics rather than generic &lt;div&gt; elements.' } }
      ],
      correct: ['A', 'B', 'D', 'E'],
      explanation: {
        nl: 'CSS <code>order</code> verandert alleen de visuele lay-out \u2014 de accessibility tree volgt de DOM. Screenreaders lezen de door elkaar gehusselde DOM-volgorde (3, 5, 1, 4, 2), wat bij veiligheidsinstructies gevaarlijk kan zijn. Gebruik een <code>&lt;ol&gt;</code> in de juiste DOM-volgorde.',
        en: 'CSS <code>order</code> only changes visual layout \u2014 the accessibility tree follows the DOM. Screen readers will read the scrambled DOM order (3, 5, 1, 4, 2), which for safety instructions could be dangerous. Use an <code>&lt;ol&gt;</code> in the correct DOM order.'
      }
    }
  ];

  // Quiz state
  var cur = 0;
  var st = {};
  var currentScreen = 'welcome'; // welcome, play, results, review

  function resetState() {
    cur = 0;
    st = {};
    Q.forEach(function (q) {
      st[q.id] = { sel: [], done: false, res: null, pts: 0 };
    });
  }

  resetState();

  function el(id) {
    return document.getElementById(id);
  }

  function scrollToQuiz() {
    var container = el('quizContainer');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --- Rendering ---

  function showScreen(name) {
    currentScreen = name;
    var container = el('quizContainer');
    if (!container) return;

    var screens = container.querySelectorAll('.quiz__screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove('quiz__screen--active');
    }
    var target = container.querySelector('[data-screen="' + name + '"]');
    if (target) {
      target.classList.add('quiz__screen--active');
    }
    scrollToQuiz();
  }

  function renderWelcome() {
    return '<div class="quiz__screen quiz__screen--active" data-screen="welcome">' +
      '<div class="quiz__welcome"><div class="quiz__welcome-card">' +
      '<h2 class="quiz__welcome-title">' + t('title') + '</h2>' +
      '<p class="quiz__welcome-subtitle">' + t('subtitle') + '</p>' +
      '<div class="quiz__welcome-stats">' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">20</div><div class="quiz__welcome-stat-label">' + t('questions') + '</div></div>' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">~30 min</div><div class="quiz__welcome-stat-label">' + t('duration') + '</div></div>' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">' + t('levelValue') + '</div><div class="quiz__welcome-stat-label">' + t('level') + '</div></div>' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">' + t('langValue') + '</div><div class="quiz__welcome-stat-label">' + t('langLabel') + '</div></div>' +
      '</div>' +
      '<ul class="quiz__welcome-features">' + t('welcomeFeatures') + '</ul>' +
      '<button class="quiz__btn quiz__btn--start" id="quizStartBtn">' + t('startBtn') + '</button>' +
      '</div></div>' +
      '</div>';
  }

  function renderPlay() {
    return '<div class="quiz__screen" data-screen="play">' +
      '<div class="quiz__topbar">' +
      '<span class="quiz__topbar-label">' + t('quizLabel') + '</span>' +
      '<div class="quiz__dots" id="quizDots"></div>' +
      '<span class="quiz__topbar-counter" id="quizCounter">1 / 20</span>' +
      '</div>' +
      '<div class="quiz__question" id="quizQuestionArea"></div>' +
      '</div>';
  }

  function renderResults() {
    return '<div class="quiz__screen" data-screen="results">' +
      '<div class="quiz__results"><div class="quiz__results-card">' +
      '<h2 class="quiz__results-title">' + t('resultsTitle') + '</h2>' +
      '<div class="quiz__results-subtitle" id="quizResultsSubtitle"></div>' +
      '<div class="quiz__score-ring">' +
      '<svg viewBox="0 0 140 140"><circle class="quiz__score-ring-bg" cx="70" cy="70" r="65"/><circle class="quiz__score-ring-fill" id="quizScoreRing" cx="70" cy="70" r="65"/></svg>' +
      '<div class="quiz__score-ring-text"><div class="quiz__score-pct" id="quizScorePct">0%</div><div class="quiz__score-label">' + t('scoreLabel') + '</div></div>' +
      '</div>' +
      '<div class="quiz__results-breakdown">' +
      '<div class="quiz__breakdown-item"><div class="quiz__breakdown-num quiz__breakdown-num--green" id="quizPerfectCount">0</div><div class="quiz__breakdown-label">' + t('perfect') + '</div></div>' +
      '<div class="quiz__breakdown-item"><div class="quiz__breakdown-num quiz__breakdown-num--yellow" id="quizPartialCount">0</div><div class="quiz__breakdown-label">' + t('partial') + '</div></div>' +
      '<div class="quiz__breakdown-item"><div class="quiz__breakdown-num quiz__breakdown-num--red" id="quizWrongCount">0</div><div class="quiz__breakdown-label">' + t('incorrect') + '</div></div>' +
      '</div>' +
      '<div class="quiz__results-actions">' +
      '<button class="quiz__btn quiz__btn--review" id="quizReviewBtn">' + t('reviewBtn') + '</button>' +
      '<button class="quiz__btn quiz__btn--retake" id="quizRetakeBtn">' + t('retakeBtn') + '</button>' +
      '</div>' +
      '<div class="quiz__share" id="quizShare">' +
      '<h3 class="quiz__share-title">' + t('shareTitle') + '</h3>' +
      '<div class="quiz__share-buttons">' +
      '<button class="quiz__share-btn quiz__share-btn--copy" id="quizCopyLink"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> ' + t('copyLink') + '</button>' +
      '<button class="quiz__share-btn quiz__share-btn--linkedin" id="quizShareLinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> ' + t('shareLinkedIn') + '</button>' +
      '<button class="quiz__share-btn quiz__share-btn--x" id="quizShareX"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> ' + t('shareX') + '</button>' +
      '</div>' +
      '<div class="quiz__badge">' +
      '<h3 class="quiz__share-title">' + t('badgeTitle') + '</h3>' +
      '<div class="quiz__badge-preview" id="quizBadgePreview"></div>' +
      '<button class="quiz__share-btn quiz__share-btn--copy" id="quizCopyBadge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> ' + t('badgeCopy') + '</button>' +
      '</div>' +
      '<div class="quiz__email-cta">' +
      '<h3 class="quiz__share-title">' + t('emailCtaTitle') + '</h3>' +
      '<p class="quiz__email-cta-desc">' + t('emailCtaDesc') + '</p>' +
      '<div class="quiz__email-form" id="quizEmailForm">' +
      '<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/cB8RFtdtzyAaSGJXCCBBIEE9jAZYqCwwwsDq0eflc8So66xJFxYhR1vZPar2Am4EcH"><script src="https://webforms.pipedrive.com/f/loader"><\/script></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div></div>' +
      '</div>';
  }

  function renderReview() {
    return '<div class="quiz__screen" data-screen="review">' +
      '<div class="quiz__review">' +
      '<div class="quiz__review-header"><h2 class="quiz__review-title">' + t('reviewTitle') + '</h2><button class="quiz__btn quiz__btn--retake" id="quizRetakeBtn2">' + t('retakeBtn') + '</button></div>' +
      '<div id="quizReviewList"></div>' +
      '</div>' +
      '</div>';
  }

  function renderAll() {
    var container = el('quizContainer');
    if (!container) return;

    container.innerHTML = renderWelcome() + renderPlay() + renderResults() + renderReview();

    // Bind start button
    var startBtn = el('quizStartBtn');
    if (startBtn) {
      startBtn.addEventListener('click', startQuiz);
    }

    // Bind results buttons
    var reviewBtn = el('quizReviewBtn');
    if (reviewBtn) reviewBtn.addEventListener('click', showReviewScreen);

    var retakeBtn = el('quizRetakeBtn');
    if (retakeBtn) retakeBtn.addEventListener('click', resetQuiz);

    var retakeBtn2 = el('quizRetakeBtn2');
    if (retakeBtn2) retakeBtn2.addEventListener('click', resetQuiz);
  }

  function buildDots() {
    var w = el('quizDots');
    if (!w) return;
    w.innerHTML = '';
    Q.forEach(function (_, i) {
      var d = document.createElement('div');
      d.className = 'quiz__dot' + (i === 0 ? ' quiz__dot--current' : '');
      d.title = t('questionOf').replace('{0}', i + 1).replace('{1}', Q.length);
      d.setAttribute('data-idx', i);
      d.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-idx'));
        if (st[Q[idx].id].done || idx === cur) goTo(idx);
      });
      w.appendChild(d);
    });
  }

  function updateDots() {
    var dots = el('quizDots');
    if (!dots) return;
    var items = dots.querySelectorAll('.quiz__dot');
    for (var i = 0; i < items.length; i++) {
      var d = items[i];
      d.className = 'quiz__dot';
      var s = st[Q[i].id];
      if (i === cur) d.classList.add('quiz__dot--current');
      if (s.res === 'perfect') d.classList.add('quiz__dot--perfect');
      else if (s.res === 'partial') d.classList.add('quiz__dot--partial');
      else if (s.res === 'wrong') d.classList.add('quiz__dot--wrong');
    }
    var counter = el('quizCounter');
    if (counter) counter.textContent = (cur + 1) + ' / ' + Q.length;
  }

  function renderQuestion() {
    var q = Q[cur];
    var s = st[q.id];
    var isLast = cur === Q.length - 1;
    var allDone = true;
    for (var k in st) {
      if (!st[k].done) { allDone = false; break; }
    }

    var nc = q.correct.length;
    var area = el('quizQuestionArea');
    if (!area) return;

    var hasDemo = q.demo && q.demo.length > 0;

    var html = '<div class="quiz__question-header"><span class="quiz__question-number">' +
      t('questionOf').replace('{0}', q.id).replace('{1}', Q.length) +
      '</span></div>';

    html += '<div class="quiz__scenario">' + tx(q.scenario) + '</div>';

    html += '<div class="quiz__demo-container">';
    if (hasDemo) {
      html += '<div class="quiz__demo-tabs" role="tablist">' +
        '<button class="quiz__demo-tab quiz__demo-tab--active" data-tab="preview" role="tab" aria-selected="true" aria-controls="quizDemoPreview">' + t('previewTab') + '</button>' +
        '<button class="quiz__demo-tab" data-tab="code" role="tab" aria-selected="false" aria-controls="quizDemoCode">' + t('codeTab') + '</button>' +
        '</div>' +
        '<div class="quiz__demo-preview" id="quizDemoPreview" role="tabpanel">' + q.demo + '</div>' +
        '<div class="quiz__demo-code" id="quizDemoCode" role="tabpanel" style="display:none"><pre>' + q.code + '</pre></div>';
    } else {
      html += '<div class="quiz__demo-tabs">' +
        '<button class="quiz__demo-tab quiz__demo-tab--active">' + t('codeTab') + '</button>' +
        '</div>' +
        '<div class="quiz__demo-code" id="quizDemoCode" style="display:block"><pre>' + q.code + '</pre></div>';
    }
    html += '</div>';

    html += '<div class="quiz__prompt">' + tx(q.prompt) + '</div>';

    html += '<div class="quiz__options" id="quizOptions" role="group" aria-label="' + tx(q.prompt) + '">';
    q.options.forEach(function (o) {
      var c = 'quiz__option';
      if (s.done) {
        c += ' quiz__option--locked';
        if (q.correct.indexOf(o.l) !== -1) c += ' quiz__option--correct';
        if (s.sel.indexOf(o.l) !== -1 && q.correct.indexOf(o.l) === -1) c += ' quiz__option--wrong';
      } else if (s.sel.indexOf(o.l) !== -1) {
        c += ' quiz__option--selected';
      }
      var isSelected = s.sel.indexOf(o.l) !== -1;
      html += '<button class="' + c + '" data-letter="' + o.l + '"' +
        ' role="checkbox"' +
        ' aria-checked="' + (isSelected ? 'true' : 'false') + '"' +
        '>' +
        '<span class="quiz__option-letter">' + o.l + '</span>' +
        '<span class="quiz__option-text">' + tx(o.t) + '</span>' +
        '</button>';
    });
    html += '</div>';

    html += '<div class="quiz__actions">';
    if (!s.done) {
      html += '<button class="quiz__btn quiz__btn--check" id="quizCheckBtn"' + (s.sel.length === 0 ? ' disabled' : '') + '>' + t('checkBtn') + '</button>';
    }
    if (s.done && !isLast) {
      html += '<button class="quiz__btn quiz__btn--nav quiz__btn--next" id="quizNextBtn">' + t('nextBtn') + ' \u2192</button>';
    }
    if (s.done && (isLast || allDone)) {
      html += '<button class="quiz__btn quiz__btn--finish" id="quizFinishBtn">' + t('finishBtn') + '</button>';
    }
    if (cur > 0) {
      html += '<button class="quiz__btn quiz__btn--nav quiz__btn--prev" id="quizPrevBtn">\u2190 ' + t('prevBtn') + '</button>';
    }
    if (s.done) {
      var badgeLabel = s.res === 'perfect' ? t('perfect') : s.res === 'partial' ? t('partial') : t('incorrect');
      html += '<span class="quiz__result-badge quiz__result-badge--' + s.res + '">' + badgeLabel + '</span>';
    }
    html += '</div>';

    if (s.done) {
      var hits = 0;
      var misses = 0;
      s.sel.forEach(function (x) {
        if (q.correct.indexOf(x) !== -1) hits++;
        else misses++;
      });
      var scoreDetail = t('gotCorrect').replace('{0}', hits).replace('{1}', nc);
      if (misses > 0) {
        scoreDetail += t('wrongSelections').replace('{0}', misses).replace('{1}', misses > 1 ? (lang === 'nl' ? 's' : 's') : '');
      }
      scoreDetail += '.';
      html += '<div class="quiz__score-detail">' + scoreDetail + '</div>';
    }

    html += '<div class="quiz__explanation' + (s.done ? ' quiz__explanation--show' : '') + '">' + tx(q.explanation) + '</div>';

    area.innerHTML = html;
    updateDots();
    bindQuestionEvents();
  }

  function bindQuestionEvents() {
    // Tab switching
    var tabs = el('quizContainer').querySelectorAll('.quiz__demo-tab[data-tab]');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        var tab = this.getAttribute('data-tab');
        var allTabs = this.parentNode.querySelectorAll('.quiz__demo-tab');
        for (var j = 0; j < allTabs.length; j++) {
          allTabs[j].classList.remove('quiz__demo-tab--active');
          allTabs[j].setAttribute('aria-selected', 'false');
        }
        this.classList.add('quiz__demo-tab--active');
        this.setAttribute('aria-selected', 'true');
        var preview = el('quizDemoPreview');
        var code = el('quizDemoCode');
        if (preview) preview.style.display = tab === 'preview' ? 'flex' : 'none';
        if (code) code.style.display = tab === 'code' ? 'block' : 'none';
      });
    }

    // Option toggle
    var options = el('quizOptions');
    if (options) {
      var btns = options.querySelectorAll('.quiz__option');
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
          var q = Q[cur];
          var s = st[q.id];
          if (s.done) return;
          var letter = this.getAttribute('data-letter');
          var idx = s.sel.indexOf(letter);
          if (idx !== -1) {
            s.sel.splice(idx, 1);
            this.classList.remove('quiz__option--selected');
            this.setAttribute('aria-checked', 'false');
          } else {
            s.sel.push(letter);
            this.classList.add('quiz__option--selected');
            this.setAttribute('aria-checked', 'true');
          }
          var ck = el('quizCheckBtn');
          if (ck) ck.disabled = s.sel.length === 0;
        });
      }
    }

    // Check button
    var checkBtn = el('quizCheckBtn');
    if (checkBtn) checkBtn.addEventListener('click', checkAnswer);

    // Next button
    var nextBtn = el('quizNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', goNext);

    // Previous button
    var prevBtn = el('quizPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', goPrev);

    // Finish button
    var finishBtn = el('quizFinishBtn');
    if (finishBtn) finishBtn.addEventListener('click', finish);
  }

  // --- Quiz Logic ---

  function startQuiz() {
    cur = 0;
    buildDots();
    renderQuestion();
    showScreen('play');
  }

  function checkAnswer() {
    var q = Q[cur];
    var s = st[q.id];
    s.done = true;

    var cs = q.correct;
    var hits = 0;
    var misses = 0;
    s.sel.forEach(function (x) {
      if (cs.indexOf(x) !== -1) hits++;
      else misses++;
    });

    s.pts = Math.max(0, hits - misses);
    if (s.pts === cs.length && misses === 0) s.res = 'perfect';
    else if (s.pts > 0) s.res = 'partial';
    else s.res = 'wrong';

    renderQuestion();
  }

  function goNext() {
    if (cur < Q.length - 1) {
      cur++;
      renderQuestion();
      scrollToQuiz();
    }
  }

  function goPrev() {
    if (cur > 0) {
      cur--;
      renderQuestion();
      scrollToQuiz();
    }
  }

  function goTo(i) {
    cur = i;
    renderQuestion();
    scrollToQuiz();
  }

  function finish() {
    var tp = 0, mx = 0, p = 0, pa = 0, w = 0;
    Q.forEach(function (q) {
      var s = st[q.id];
      mx += q.correct.length;
      if (!s.done) { w++; s.res = 'wrong'; return; }
      tp += s.pts;
      if (s.res === 'perfect') p++;
      else if (s.res === 'partial') pa++;
      else w++;
    });

    var sc = Math.round((tp / mx) * 100);

    el('quizPerfectCount').textContent = p;
    el('quizPartialCount').textContent = pa;
    el('quizWrongCount').textContent = w;
    el('quizScorePct').textContent = sc + '%';

    // Update score label for current language
    var scoreLabel = el('quizContainer').querySelector('.quiz__score-label');
    if (scoreLabel) scoreLabel.textContent = t('scoreLabel');

    var ring = el('quizScoreRing');
    var circ = 2 * Math.PI * 65;
    var off = circ - (sc / 100) * circ;

    ring.style.strokeDasharray = circ;
    ring.style.strokeDashoffset = circ;

    if (sc >= 80) {
      ring.style.stroke = 'var(--correct, #34d399)';
      el('quizResultsSubtitle').textContent = t('resultsExcellent');
    } else if (sc >= 50) {
      ring.style.stroke = 'var(--warning, #fbbf24)';
      el('quizResultsSubtitle').textContent = t('resultsGood');
    } else {
      ring.style.stroke = 'var(--wrong, #f87171)';
      el('quizResultsSubtitle').textContent = t('resultsNeedsWork');
    }

    // Update results title
    var resultsTitle = el('quizContainer').querySelector('.quiz__results-title');
    if (resultsTitle) resultsTitle.textContent = t('resultsTitle');

    // Update breakdown labels
    var breakdownLabels = el('quizContainer').querySelectorAll('.quiz__breakdown-label');
    if (breakdownLabels.length >= 3) {
      breakdownLabels[0].textContent = t('perfect');
      breakdownLabels[1].textContent = t('partial');
      breakdownLabels[2].textContent = t('incorrect');
    }

    // Update results buttons
    var reviewBtn = el('quizReviewBtn');
    if (reviewBtn) {
      reviewBtn.textContent = t('reviewBtn');
      reviewBtn.onclick = null;
      reviewBtn.addEventListener('click', showReviewScreen);
    }
    var retakeBtn = el('quizRetakeBtn');
    if (retakeBtn) {
      retakeBtn.textContent = t('retakeBtn');
      retakeBtn.onclick = null;
      retakeBtn.addEventListener('click', resetQuiz);
    }

    // Share functionality
    var quizUrl = 'https://www.properaccess.nl/digital-agency/#quizSection';
    var shareUrl = quizUrl + '?score=' + sc;
    var shareMsg = t('shareText').replace('{0}', sc);

    // Copy link
    var copyBtn = el('quizCopyLink');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(shareMsg + ' ' + shareUrl).then(function () {
          copyBtn.querySelector('svg').nextSibling.textContent = ' ' + t('copiedLink');
          setTimeout(function () {
            copyBtn.querySelector('svg').nextSibling.textContent = ' ' + t('copyLink');
          }, 2000);
        });
      });
    }

    // LinkedIn
    var liBtn = el('quizShareLinkedIn');
    if (liBtn) {
      liBtn.addEventListener('click', function () {
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl), '_blank', 'width=600,height=500');
      });
    }

    // X/Twitter
    var xBtn = el('quizShareX');
    if (xBtn) {
      xBtn.addEventListener('click', function () {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareMsg) + '&url=' + encodeURIComponent(shareUrl), '_blank', 'width=600,height=500');
      });
    }

    // Badge
    var badgePreview = el('quizBadgePreview');
    var badgeColor = sc >= 80 ? '#0e7a50' : sc >= 50 ? '#92400e' : '#b91c1c';
    var badgeLabel = sc >= 80 ? (lang === 'nl' ? 'Uitstekend' : 'Excellent') : sc >= 50 ? (lang === 'nl' ? 'Goed' : 'Good') : (lang === 'nl' ? 'Beginner' : 'Beginner');
    var badgeHtml = '<a href="' + quizUrl + '" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;font-family:sans-serif;">' +
      '<div style="border:2px solid ' + badgeColor + ';border-radius:8px;padding:12px 20px;text-align:center;background:#fff;">' +
      '<div style="font-size:11px;color:#6b7280;margin-bottom:4px;">WCAG Accessibility Quiz</div>' +
      '<div style="font-size:28px;font-weight:800;color:' + badgeColor + ';">' + sc + '%</div>' +
      '<div style="font-size:12px;font-weight:600;color:' + badgeColor + ';">' + badgeLabel + '</div>' +
      '<div style="font-size:10px;color:#6b7280;margin-top:6px;">properaccess.nl</div>' +
      '</div></a>';

    if (badgePreview) badgePreview.innerHTML = badgeHtml;

    var copyBadgeBtn = el('quizCopyBadge');
    if (copyBadgeBtn) {
      copyBadgeBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(badgeHtml).then(function () {
          copyBadgeBtn.querySelector('svg').nextSibling.textContent = ' ' + t('badgeCopied');
          setTimeout(function () {
            copyBadgeBtn.querySelector('svg').nextSibling.textContent = ' ' + t('badgeCopy');
          }, 2000);
        });
      });
    }

    showScreen('results');

    setTimeout(function () {
      ring.style.strokeDashoffset = off;
    }, 200);
  }

  function showReviewScreen() {
    var list = el('quizReviewList');
    if (!list) return;
    list.innerHTML = '';

    // Update review header
    var reviewTitle = el('quizContainer').querySelector('.quiz__review-title');
    if (reviewTitle) reviewTitle.textContent = t('reviewTitle');

    var retakeBtn2 = el('quizRetakeBtn2');
    if (retakeBtn2) {
      retakeBtn2.textContent = t('retakeBtn');
      retakeBtn2.onclick = null;
      retakeBtn2.addEventListener('click', resetQuiz);
    }

    Q.forEach(function (q) {
      var s = st[q.id];
      var resLabel = s.res === 'perfect' ? t('perfect') : s.res === 'partial' ? t('partial') : t('incorrect');
      var item = document.createElement('div');
      item.className = 'quiz__review-item quiz__review-item--' + (s.res || 'wrong');

      var optionsHtml = '';
      q.options.forEach(function (o) {
        var ic = q.correct.indexOf(o.l) !== -1;
        var ws = s.sel.indexOf(o.l) !== -1;
        var c = 'quiz__review-option';
        if (ic) c += ' quiz__review-option--correct';
        else if (ws) c += ' quiz__review-option--wrong';
        var marker = ic ? '\u2713' : ws ? '\u2717' : o.l;
        var markerLabel = ic ? (lang === 'nl' ? 'Juist' : 'Correct') : ws ? (lang === 'nl' ? 'Fout' : 'Incorrect') : o.l;
        optionsHtml += '<div class="' + c + '"><span class="quiz__review-marker" aria-hidden="true">' + marker + '</span><span class="sr-only">' + markerLabel + ': </span><span>' + tx(o.t) + '</span></div>';
      });

      item.innerHTML = '<button class="quiz__review-item-header" aria-expanded="false">' +
        '<span class="quiz__review-item-num">Q' + q.id + '</span>' +
        '<span class="quiz__review-badge quiz__review-badge--' + (s.res || 'wrong') + '">' + resLabel + '</span>' +
        '<span class="quiz__review-chevron" aria-hidden="true">\u25b6</span>' +
        '</button>' +
        '<div class="quiz__review-item-body" role="region">' +
        '<div class="quiz__review-scenario">' + tx(q.scenario) + '</div>' +
        optionsHtml +
        '<div class="quiz__review-explanation">' + tx(q.explanation) + '</div>' +
        '</div>';

      var header = item.querySelector('.quiz__review-item-header');
      header.addEventListener('click', function () {
        var isOpen = this.parentNode.classList.toggle('quiz__review-item--open');
        this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      list.appendChild(item);
    });

    showScreen('review');
  }

  function resetQuiz() {
    resetState();
    var ring = el('quizScoreRing');
    if (ring) {
      var circ = 2 * Math.PI * 65;
      ring.style.strokeDashoffset = circ;
    }
    buildDots();
    renderQuestion();
    showScreen('play');
  }

  // --- Language switching ---

  window.quizSetLang = function (newLang) {
    if (newLang !== 'nl' && newLang !== 'en') return;
    lang = newLang;

    // Re-render based on current screen
    if (currentScreen === 'welcome') {
      renderAll();
      showScreen('welcome');
    } else if (currentScreen === 'play') {
      // Update topbar label
      var topbarLabel = el('quizContainer').querySelector('.quiz__topbar-label');
      if (topbarLabel) topbarLabel.textContent = t('quizLabel');

      renderQuestion();
    } else if (currentScreen === 'results') {
      // Re-render to update labels
      finish();
    } else if (currentScreen === 'review') {
      showReviewScreen();
    }
  };

  // --- Init ---

  function init() {
    var container = el('quizContainer');
    if (!container) return;

    // Detect language from html lang attribute
    var htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang && htmlLang.substring(0, 2) === 'nl') {
      lang = 'nl';
    } else if (htmlLang && htmlLang.substring(0, 2) === 'en') {
      lang = 'en';
    }

    renderAll();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
