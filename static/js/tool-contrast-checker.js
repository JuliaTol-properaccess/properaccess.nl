/**
 * Kleurcontrast Checker — Proper Access
 * WCAG contrast ratio calculation and results display.
 */
(function () {
  "use strict";

  const fgColor = document.getElementById("fgColor");
  const fgHex = document.getElementById("fgHex");
  const bgColor = document.getElementById("bgColor");
  const bgHex = document.getElementById("bgHex");
  const previewBox = document.getElementById("previewBox");
  const previewText = document.getElementById("previewText");
  const ratioValue = document.getElementById("ratioValue");
  const swapBtn = document.getElementById("swapBtn");
  const fontSizeSlider = document.getElementById("fontSizeSlider");
  const fontSizeValue = document.getElementById("fontSizeValue");
  const sizeIndicator = document.getElementById("sizeIndicator");

  if (!fgColor || !bgColor) return;

  // WCAG contrast calculation
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }

  function relativeLuminance(hex) {
    var rgb = hexToRgb(hex);
    var channels = [rgb.r, rgb.g, rgb.b].map(function (c) {
      var s = c / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }

  function contrastRatio(hex1, hex2) {
    var l1 = relativeLuminance(hex1);
    var l2 = relativeLuminance(hex2);
    var lighter = Math.max(l1, l2);
    var darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function isValidHex(hex) {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
  }

  function normalizeHex(hex) {
    hex = hex.trim();
    if (!hex.startsWith("#")) hex = "#" + hex;
    return hex;
  }

  function update() {
    var fg = fgColor.value;
    var bg = bgColor.value;

    // Preview
    previewBox.style.backgroundColor = bg;
    previewBox.style.color = fg;

    // Ratio
    var ratio = contrastRatio(fg, bg);
    var roundedRatio = Math.floor(ratio * 10) / 10;
    ratioValue.textContent = roundedRatio + ":1";

    // Color the ratio based on result
    if (ratio >= 7) {
      ratioValue.style.color = "#166534";
    } else if (ratio >= 4.5) {
      ratioValue.style.color = "#3730a3";
    } else if (ratio >= 3) {
      ratioValue.style.color = "#d97706";
    } else {
      ratioValue.style.color = "#dc2626";
    }

    // Badges
    setBadge("aa-normal", ratio >= 4.5);
    setBadge("aa-large", ratio >= 3);
    setBadge("aa-ui", ratio >= 3);
    setBadge("aaa-normal", ratio >= 7);
    setBadge("aaa-large", ratio >= 4.5);

    // Highlight relevant WCAG criteria
    highlightCriteria(ratio);
  }

  function setBadge(id, pass) {
    var el = document.getElementById(id);
    if (!el) return;
    if (pass) {
      el.className = "tool-contrast__badge tool-contrast__badge--pass";
      el.textContent = "Voldoet";
    } else {
      el.className = "tool-contrast__badge tool-contrast__badge--fail";
      el.textContent = "Onvoldoende";
    }
  }

  function highlightCriteria(ratio) {
    var ctx143 = document.getElementById("ctx-143");
    var ctx1411 = document.getElementById("ctx-1411");
    var ctx146 = document.getElementById("ctx-146");

    if (!ctx143) return;

    [ctx143, ctx1411, ctx146].forEach(function (el) {
      el.classList.remove("tool-contrast__criterion--relevant", "tool-contrast__criterion--failing");
    });

    if (ratio >= 4.5) {
      ctx143.classList.add("tool-contrast__criterion--relevant");
    } else {
      ctx143.classList.add("tool-contrast__criterion--failing");
    }

    if (ratio >= 3) {
      ctx1411.classList.add("tool-contrast__criterion--relevant");
    } else {
      ctx1411.classList.add("tool-contrast__criterion--failing");
    }

    if (ratio >= 7) {
      ctx146.classList.add("tool-contrast__criterion--relevant");
    } else if (ratio < 4.5) {
      ctx146.classList.add("tool-contrast__criterion--failing");
    }
  }

  // Color picker → hex input
  fgColor.addEventListener("input", function () {
    fgHex.value = fgColor.value.toUpperCase();
    fgHex.classList.remove("invalid");
    update();
  });
  bgColor.addEventListener("input", function () {
    bgHex.value = bgColor.value.toUpperCase();
    bgHex.classList.remove("invalid");
    update();
  });

  // Hex input → color picker
  fgHex.addEventListener("input", function () {
    var hex = normalizeHex(fgHex.value);
    if (isValidHex(hex)) {
      fgColor.value =
        hex.length === 4
          ? "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
          : hex;
      fgHex.classList.remove("invalid");
      update();
    } else {
      fgHex.classList.add("invalid");
    }
  });
  bgHex.addEventListener("input", function () {
    var hex = normalizeHex(bgHex.value);
    if (isValidHex(hex)) {
      bgColor.value =
        hex.length === 4
          ? "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
          : hex;
      bgHex.classList.remove("invalid");
      update();
    } else {
      bgHex.classList.add("invalid");
    }
  });

  // Normalize hex on blur
  fgHex.addEventListener("blur", function () {
    var hex = normalizeHex(fgHex.value);
    if (isValidHex(hex)) fgHex.value = hex.toUpperCase();
  });
  bgHex.addEventListener("blur", function () {
    var hex = normalizeHex(bgHex.value);
    if (isValidHex(hex)) bgHex.value = hex.toUpperCase();
  });

  // Swap
  swapBtn.addEventListener("click", function () {
    var tmpColor = fgColor.value;
    var tmpHex = fgHex.value;
    fgColor.value = bgColor.value;
    fgHex.value = bgHex.value;
    bgColor.value = tmpColor;
    bgHex.value = tmpHex;
    update();
  });

  // Font size slider
  function updateFontSize() {
    if (!fontSizeSlider || !previewText) return;
    var px = parseInt(fontSizeSlider.value, 10);
    previewText.style.fontSize = px + "px";
    fontSizeValue.textContent = px + "px";

    // WCAG "large text" = 24px (18pt) or 18.66px (14pt) bold
    var isLarge = px >= 24;
    if (isLarge) {
      sizeIndicator.textContent = "Dit is grote tekst \u2014 de drempel is 3:1 (AA) / 4.5:1 (AAA)";
      sizeIndicator.className = "tool-contrast__size-indicator tool-contrast__size-indicator--large";
    } else {
      sizeIndicator.textContent = "Dit is normale tekst \u2014 de drempel is 4.5:1 (AA) / 7:1 (AAA)";
      sizeIndicator.className = "tool-contrast__size-indicator tool-contrast__size-indicator--normal";
    }
  }

  if (fontSizeSlider) {
    fontSizeSlider.addEventListener("input", updateFontSize);
    updateFontSize();
  }

  // EyeDropper API (Chrome/Edge only)
  if (window.EyeDropper) {
    var fgDropper = document.getElementById("fgDropper");
    var bgDropper = document.getElementById("bgDropper");

    if (fgDropper) fgDropper.hidden = false;
    if (bgDropper) bgDropper.hidden = false;

    function pickColor(colorInput, hexInput) {
      var dropper = new EyeDropper();
      dropper.open().then(function (result) {
        var hex = result.sRGBHex.toUpperCase();
        colorInput.value = hex;
        hexInput.value = hex;
        hexInput.classList.remove("invalid");
        update();
      }).catch(function () {
        // User cancelled — do nothing
      });
    }

    if (fgDropper) {
      fgDropper.addEventListener("click", function () {
        pickColor(fgColor, fgHex);
      });
    }
    if (bgDropper) {
      bgDropper.addEventListener("click", function () {
        pickColor(bgColor, bgHex);
      });
    }
  }

  // Initial render
  update();
})();
