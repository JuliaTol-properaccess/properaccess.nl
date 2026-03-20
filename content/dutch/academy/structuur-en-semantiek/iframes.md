---
title: "iFrames"
section_number: 1
chapter_number: 8
locked: false
description: "Een iframe embedt externe content. Geef elk iframe een beschrijvende title zodat gebruikers weten wat erin staat."
points: 10
layout: "academy"
---

## Wat is een iframe?

Een `<iframe>` plaatst een complete externe pagina binnen jouw pagina. Denk aan YouTube-video's, Google Maps-kaarten, betaalformulieren of chatwidgets. De content in een iframe heeft een eigen document, eigen focusvolgorde en vaak een eigen oorsprong.

Voor hulpsoftware is een iframe een blok dat je kunt betreden of overslaan. Maar dan moet de gebruiker wel weten **wat** er in dat blok zit. Zonder beschrijving meldt een schermlezer alleen "frame" -- en dan moet de gebruiker erin navigeren om te ontdekken wat het is.

## Waarom het ertoe doet

WCAG succescriterium 4.1.2 (Naam, Rol, Waarde) vereist dat elk onderdeel van de interface een programmatisch bepaalbare naam heeft. Voor iframes betekent dat: een `title`-attribuut dat de inhoud beschrijft.

Daarnaast speelt SC 2.4.1 (Blokken omzeilen) een rol. Een iframe is een blok content. De gebruiker moet kunnen beslissen: ga ik dit blok in, of sla ik het over? Dat kan alleen als het iframe een duidelijke naam heeft.

De <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H64" rel="noopener">H64-techniek</a> van het W3C beschrijft precies deze aanpak: gebruik het `title`-attribuut op `<frame>` en `<iframe>` om de inhoud te beschrijven.

## Het title-attribuut

Elk iframe dat content bevat, heeft een `title`-attribuut nodig. Dat attribuut moet beschrijven **wat** er in het iframe staat -- niet dat het een iframe is.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: YouTube-embed</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<iframe src="https://www.youtube.com/embed/abc123"></iframe>
```

Geen `title`. De schermlezer zegt alleen "frame" of leest de URL voor.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<iframe
  src="https://www.youtube.com/embed/abc123"
  title="YouTube-video: Hoe werkt een schermlezer?"
></iframe>
```

De schermlezer zegt "frame, YouTube-video: Hoe werkt een schermlezer?" en de gebruiker weet direct wat erin staat.

</div>
</div>

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: Google Maps</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<iframe
  src="https://www.google.com/maps/embed?..."
  title="iframe"
></iframe>
```

De title "iframe" beschrijft het element, niet de inhoud. Dat helpt niemand.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<iframe
  src="https://www.google.com/maps/embed?..."
  title="Kaart met locatie van ons kantoor in Amsterdam"
></iframe>
```

Beschrijf wat de kaart toont, niet dat het een kaart is.

</div>
</div>

<div class="academy-tip">
<p class="academy-tip__title">Beschrijvende titles</p>

Een goede iframe-title beantwoordt de vraag: "Wat vind ik als ik dit blok binnenstap?" Vermijd generieke titles als "video", "kaart" of "extern formulier". Wees specifiek: "Contactformulier van Typeform" of "YouTube-video: Toetsenbordnavigatie in 3 minuten".

</div>

## Decoratieve of verborgen iframes

Soms bevat een iframe geen content die voor de gebruiker relevant is -- bijvoorbeeld een trackingpixel of een verborgen technisch frame. In dat geval wil je voorkomen dat een schermlezer het aankondigt.

<div class="academy-example">
<div class="academy-example__header">Voorbeeld: decoratief iframe verbergen</div>
<div class="academy-example__bad">
<p class="academy-example__label">Fout</p>

```html
<iframe src="https://tracking.example.com/pixel"></iframe>
```

Zonder title en zonder verberging meldt de schermlezer een naamloos frame.

</div>
<div class="academy-example__good">
<p class="academy-example__label">Goed</p>

```html
<iframe
  src="https://tracking.example.com/pixel"
  aria-hidden="true"
  tabindex="-1"
  title=""
></iframe>
```

Het iframe is volledig verborgen voor hulpsoftware en niet bereikbaar met het toetsenbord.

</div>
</div>

## Veelvoorkomende iframe-types

Elk type iframe heeft specifieke aandachtspunten:

| Type | Aandachtspunt |
|------|---------------|
| **YouTube / Vimeo** | Beschrijf de video in de title. YouTube voegt standaard een title toe, maar die is vaak generiek. |
| **Google Maps** | Beschrijf de locatie, niet alleen "Google Maps". |
| **Betaalformulieren** | De title moet duidelijk maken dat het een betaalstap is. De focus moet correct verplaatsen naar het iframe. |
| **Chatwidgets** | Vaak meerdere iframes -- elk moet een beschrijvende title hebben. |
| **Social media embeds** | Beschrijf wat de embed toont: "Instagram-post van @bedrijfsnaam" of "Twitter-tijdlijn". |

## Lazy loading

Moderne browsers ondersteunen `loading="lazy"` op iframes. Dat is goed voor performance en heeft geen negatieve impact op toegankelijkheid. Het iframe wordt pas geladen als het in beeld komt.

```html
<iframe
  src="https://www.youtube.com/embed/abc123"
  title="YouTube-video: Toetsenbordnavigatie uitgelegd"
  loading="lazy"
></iframe>
```

<div class="academy-tip">
<p class="academy-tip__title">tabindex="-1"</p>

Gebruik `tabindex="-1"` alleen op iframes die **geen interactieve content** bevatten. Een iframe met een video, formulier of kaart moet gewoon bereikbaar blijven met het toetsenbord. Anders sluit je gebruikers buiten.

</div>

## WCAG-succescriteria

| Succescriterium | Niveau | Toelichting |
|---|---|---|
| **4.1.2** Naam, Rol, Waarde | A | Elk iframe moet een programmatisch bepaalbare naam hebben (title-attribuut) |
| **2.4.1** Blokken omzeilen | A | Een beschrijvende title helpt gebruikers om iframes te begrijpen en eventueel over te slaan |

---

## Quiz

<div class="academy-quiz" id="quiz-iframes">

<fieldset class="academy-quiz__question" data-question="1">
<legend class="academy-quiz__q-text"><strong>Vraag 1.</strong> Een pagina bevat een YouTube-embed zonder <code>title</code>-attribuut. Wat meldt een schermlezer?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q1" value="a" />
<span>De titel van de YouTube-video</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="b" />
<span>Alleen "frame" of de URL -- de gebruiker weet niet wat erin staat</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="c" />
<span>Niets -- iframes worden overgeslagen door schermlezers</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q1" value="d" />
<span>"YouTube-video" -- de browser herkent het domein automatisch</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Klopt. Zonder <code>title</code>-attribuut kan de schermlezer alleen het bestaan van een frame melden, vaak met de URL erbij. De gebruiker heeft geen idee wat erin zit.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een schermlezer leest het <code>title</code>-attribuut van het iframe. Zonder dat attribuut meldt het alleen "frame" of de URL. De browser haalt geen titel op van de externe pagina.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="2">
<legend class="academy-quiz__q-text"><strong>Vraag 2.</strong> Welke <code>title</code> is het meest geschikt voor een Google Maps-iframe dat de locatie van een restaurant toont?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q2" value="a" />
<span>"Google Maps"</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="b" />
<span>"Kaart"</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="c" />
<span>"Kaart met locatie van Restaurant De Gouden Leeuw, Keizersgracht 50, Amsterdam"</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q2" value="d" />
<span>"iframe"</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="c" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. De title beschrijft wat de kaart toont, zodat de gebruiker weet of het iframe relevant is zonder erin te navigeren.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een goede title beschrijft de inhoud, niet het type element. "Kaart met locatie van Restaurant De Gouden Leeuw, Keizersgracht 50, Amsterdam" vertelt de gebruiker precies wat er te vinden is.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="3">
<legend class="academy-quiz__q-text"><strong>Vraag 3.</strong> Een iframe bevat een trackingpixel (geen zichtbare content). Wat is de beste aanpak?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q3" value="a" />
<span>Geef het een beschrijvende title: "Trackingpixel"</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="b" />
<span>Verberg het met <code>aria-hidden="true"</code> en <code>tabindex="-1"</code></span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="c" />
<span>Laat het zonder attributen -- het is toch onzichtbaar</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q3" value="d" />
<span>Verwijder het iframe en gebruik een <code>&lt;img&gt;</code> voor de pixel</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Goed. Een trackingpixel is niet relevant voor de gebruiker. Met <code>aria-hidden="true"</code> en <code>tabindex="-1"</code> verberg je het voor hulpsoftware en toetsenbordnavigatie.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Een trackingpixel bevat geen nuttige content. Verberg het iframe met <code>aria-hidden="true"</code> en <code>tabindex="-1"</code>. Zonder die attributen kan een schermlezer het onnodig aankondigen.</p>
</div>
</div>
</fieldset>

<fieldset class="academy-quiz__question" data-question="4">
<legend class="academy-quiz__q-text"><strong>Vraag 4.</strong> Een iframe bevat een betaalformulier van een externe provider. Je voegt <code>tabindex="-1"</code> toe. Wat is het probleem?</legend>
<div class="academy-quiz__options">
<label class="academy-quiz__option">
<input type="radio" name="q4" value="a" />
<span>Niets -- het formulier in het iframe blijft gewoon bereikbaar</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="b" />
<span>De gebruiker kan het betaalformulier niet meer bereiken met het toetsenbord</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="c" />
<span>Het iframe wordt onzichtbaar voor schermlezers</span>
</label>
<label class="academy-quiz__option">
<input type="radio" name="q4" value="d" />
<span>De betaling wordt geblokkeerd door de browser</span>
</label>
</div>
<div class="academy-quiz__feedback" data-correct="b" hidden>
<div class="academy-quiz__feedback--correct" hidden>
<p>Precies. <code>tabindex="-1"</code> op het iframe voorkomt dat toetsenbordgebruikers het frame kunnen betreden. Gebruik dit alleen bij iframes zonder interactieve content.</p>
</div>
<div class="academy-quiz__feedback--incorrect" hidden>
<p>Met <code>tabindex="-1"</code> kan een toetsenbordgebruiker het iframe niet betreden. Dat betekent dat het betaalformulier onbereikbaar wordt. Gebruik <code>tabindex="-1"</code> alleen bij iframes die geen interactieve elementen bevatten.</p>
</div>
</div>
</fieldset>

</div>
