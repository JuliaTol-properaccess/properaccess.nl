/**
 * Tekstafstand-tester — Proper Access
 * WCAG 1.4.12 (Text Spacing): interactive preview + bookmarklet helper.
 * No external calls, pure client-side.
 */
(function () {
  "use strict";

  var preview = document.getElementById("spacingPreview");
  if (!preview) return;

  // WCAG 1.4.12 minimum values
  var WCAG_MIN = {
    lineHeight: 1.5,
    letterSpacing: 0.12,
    wordSpacing: 0.16,
    paraSpacing: 2,
  };
  var DEFAULTS = {
    lineHeight: 1.2,
    letterSpacing: 0,
    wordSpacing: 0,
    paraSpacing: 1,
  };

  var lineHeight = document.getElementById("lineHeight");
  var letterSpacing = document.getElementById("letterSpacing");
  var wordSpacing = document.getElementById("wordSpacing");
  var paraSpacing = document.getElementById("paraSpacing");

  var lineHeightVal = document.getElementById("lineHeightVal");
  var letterSpacingVal = document.getElementById("letterSpacingVal");
  var wordSpacingVal = document.getElementById("wordSpacingVal");
  var paraSpacingVal = document.getElementById("paraSpacingVal");

  var applyMin = document.getElementById("applyMin");
  var resetSpacing = document.getElementById("resetSpacing");
  var fixedHeight = document.getElementById("fixedHeight");
  var card = document.getElementById("spacingCard");

  function fmtEm(v) {
    // Trim trailing zeros: 0.12 -> "0.12em", 0 -> "0em"
    return parseFloat(v.toFixed(2)) + "em";
  }

  function markMin(slider, output, current, min) {
    // Flag the label when the value reaches the WCAG minimum
    if (current + 0.0001 >= min) {
      output.classList.add("tool-spacing__val--min");
    } else {
      output.classList.remove("tool-spacing__val--min");
    }
  }

  function render() {
    var lh = parseFloat(lineHeight.value);
    var ls = parseFloat(letterSpacing.value);
    var ws = parseFloat(wordSpacing.value);
    var ps = parseFloat(paraSpacing.value);

    preview.style.setProperty("--ts-line-height", lh);
    preview.style.setProperty("--ts-letter-spacing", ls + "em");
    preview.style.setProperty("--ts-word-spacing", ws + "em");
    preview.style.setProperty("--ts-para-spacing", ps + "em");

    lineHeightVal.textContent = parseFloat(lh.toFixed(2));
    letterSpacingVal.textContent = fmtEm(ls);
    wordSpacingVal.textContent = fmtEm(ws);
    paraSpacingVal.textContent = fmtEm(ps);

    markMin(lineHeight, lineHeightVal, lh, WCAG_MIN.lineHeight);
    markMin(letterSpacing, letterSpacingVal, ls, WCAG_MIN.letterSpacing);
    markMin(wordSpacing, wordSpacingVal, ws, WCAG_MIN.wordSpacing);
    markMin(paraSpacing, paraSpacingVal, ps, WCAG_MIN.paraSpacing);
  }

  [lineHeight, letterSpacing, wordSpacing, paraSpacing].forEach(function (el) {
    if (el) el.addEventListener("input", render);
  });

  if (applyMin) {
    applyMin.addEventListener("click", function () {
      lineHeight.value = WCAG_MIN.lineHeight;
      letterSpacing.value = WCAG_MIN.letterSpacing;
      wordSpacing.value = WCAG_MIN.wordSpacing;
      paraSpacing.value = WCAG_MIN.paraSpacing;
      render();
    });
  }

  if (resetSpacing) {
    resetSpacing.addEventListener("click", function () {
      lineHeight.value = DEFAULTS.lineHeight;
      letterSpacing.value = DEFAULTS.letterSpacing;
      wordSpacing.value = DEFAULTS.wordSpacing;
      paraSpacing.value = DEFAULTS.paraSpacing;
      render();
    });
  }

  if (fixedHeight && card) {
    fixedHeight.addEventListener("change", function () {
      card.classList.toggle("tool-spacing__card--fixed", fixedHeight.checked);
    });
  }

  // Copy bookmarklet code to clipboard
  var copyBtn = document.getElementById("copyBookmarklet");
  var bookmarklet = document.getElementById("bookmarkletLink");
  var copyStatus = document.getElementById("copyStatus");

  if (copyBtn && bookmarklet) {
    copyBtn.addEventListener("click", function () {
      var code = bookmarklet.getAttribute("href");
      var done = function () {
        if (copyStatus) copyStatus.textContent = copyBtn.getAttribute("data-done") || "Gekopieerd";
      };
      var fail = function () {
        if (copyStatus) copyStatus.textContent = copyBtn.getAttribute("data-fail") || "Kopiëren mislukt";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done).catch(fail);
      } else {
        try {
          var ta = document.createElement("textarea");
          ta.value = code;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          done();
        } catch (e) {
          fail();
        }
      }
    });
  }

  // Initial render
  render();
})();
