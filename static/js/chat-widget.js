(function () {
  "use strict";

  var WORKER_URL = "https://pa-chat.juliatol.workers.dev/chat";
  var MAX_HISTORY = 10;
  var MAX_LENGTH = 500;
  var TIMEOUT_MS = 30000;

  // State
  var isOpen = false;
  var messages = []; // { role: "user"|"assistant", content: string }
  var isLoading = false;
  var previousFocus = null;
  var botResponseCount = 0;

  // DOM references
  var wrapper, toggle, dialog, messagesEl, form, input, sendBtn, closeBtn;
  var lang = "nl";

  // ── Init ──────────────────────────────────────────────────

  function init() {
    wrapper = document.querySelector(".pa-chat-wrapper");
    if (!wrapper) return;

    toggle = document.getElementById("pa-chat-toggle");
    dialog = document.getElementById("pa-chat-dialog");
    messagesEl = document.getElementById("pa-chat-messages");
    form = document.getElementById("pa-chat-form");
    input = document.getElementById("pa-chat-input");
    sendBtn = form ? form.querySelector(".pa-chat__send") : null;
    closeBtn = dialog ? dialog.querySelector(".pa-chat__close") : null;
    lang = wrapper.getAttribute("data-lang") || "nl";

    if (!toggle || !dialog || !form || !input || !sendBtn || !closeBtn) return;

    toggle.addEventListener("click", openChat);
    closeBtn.addEventListener("click", closeChat);
    form.addEventListener("submit", handleSubmit);
    dialog.addEventListener("keydown", handleKeydown);

    // Auto-resize textarea
    input.addEventListener("input", autoResize);
  }

  // ── Open / Close ──────────────────────────────────────────

  function openChat() {
    previousFocus = document.activeElement;
    dialog.removeAttribute("hidden");
    toggle.setAttribute("aria-expanded", "true");
    isOpen = true;

    // Focus input
    input.focus();

    // Prevent background scroll on mobile
    if (window.innerWidth <= 480) {
      document.body.classList.add("pa-chat--open");
    }

    // GTM event
    if (window.dataLayer) {
      window.dataLayer.push({ event: "chat_opened" });
    }
  }

  function closeChat() {
    dialog.setAttribute("hidden", "");
    toggle.setAttribute("aria-expanded", "false");
    isOpen = false;

    document.body.classList.remove("pa-chat--open");

    // Restore focus
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  // ── Keyboard handling ─────────────────────────────────────

  function handleKeydown(e) {
    if (e.key === "Escape") {
      closeChat();
      return;
    }

    // Enter without Shift submits
    if (e.key === "Enter" && !e.shiftKey && e.target === input) {
      e.preventDefault();
      form.dispatchEvent(new Event("submit", { cancelable: true }));
      return;
    }

    // Focus trap
    if (e.key === "Tab") {
      trapFocus(e);
    }
  }

  function trapFocus(e) {
    var focusable = dialog.querySelectorAll(
      'button:not([disabled]), [href], textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ── Form submit ───────────────────────────────────────────

  function handleSubmit(e) {
    e.preventDefault();
    if (isLoading) return;

    // Honeypot
    var honeypot = form.querySelector('[name="_gotcha"]');
    if (honeypot && honeypot.value) return;

    var text = input.value.trim();
    if (!text || text.length > MAX_LENGTH) return;

    // Add user message
    appendMessage("user", text);
    messages.push({ role: "user", content: text });

    // Clear input
    input.value = "";
    autoResize();

    // Show loading
    showLoading();

    // Send to worker
    callWorker();
  }

  // ── API call ──────────────────────────────────────────────

  function callWorker() {
    isLoading = true;
    sendBtn.disabled = true;
    input.disabled = true;

    var controller = new AbortController();
    var timeoutId = setTimeout(function () {
      controller.abort();
    }, TIMEOUT_MS);

    var historyToSend = messages.slice(-MAX_HISTORY);

    fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: historyToSend,
        lang: lang,
      }),
      signal: controller.signal,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        clearTimeout(timeoutId);
        hideLoading();

        if (data.ok && data.content) {
          appendMessage("bot", data.content);
          messages.push({ role: "assistant", content: data.content });
          botResponseCount++;

          // After 3 bot responses, add a subtle CTA
          if (botResponseCount === 3) {
            appendContactHint();
          }
        } else {
          appendMessage("error", data.error || getErrorText());
        }
      })
      .catch(function () {
        clearTimeout(timeoutId);
        hideLoading();
        appendMessage("error", getErrorText());
      })
      .finally(function () {
        isLoading = false;
        sendBtn.disabled = false;
        input.disabled = false;
        input.focus();
      });
  }

  // ── Message rendering ─────────────────────────────────────

  function appendMessage(role, content) {
    var div = document.createElement("div");

    if (role === "error") {
      div.className = "pa-chat__msg pa-chat__msg--error";
      div.setAttribute("role", "alert");
    } else if (role === "bot") {
      div.className = "pa-chat__msg pa-chat__msg--bot";
    } else {
      div.className = "pa-chat__msg pa-chat__msg--user";
    }

    div.textContent = content;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function appendContactHint() {
    var ctaLink = messagesEl.closest("[data-lang]");
    var isEn = ctaLink && ctaLink.getAttribute("data-lang") === "en";
    var hint = document.createElement("div");
    hint.className = "pa-chat__msg pa-chat__msg--bot";
    hint.innerHTML = isEn
      ? 'Want to discuss your situation? <a href="/en/contact/" class="pa-chat__cta">Schedule a call</a>.'
      : 'Wil je je situatie bespreken? <a href="/contact/" class="pa-chat__cta">Plan een gesprek</a>.';
    messagesEl.appendChild(hint);
    scrollToBottom();
  }

  // ── Loading indicator ─────────────────────────────────────

  function showLoading() {
    var loader = document.createElement("div");
    loader.className = "pa-chat__loading";
    loader.id = "pa-chat-loader";
    loader.setAttribute("role", "status");
    loader.setAttribute(
      "aria-label",
      lang === "en" ? "Typing a response..." : "Antwoord wordt getypt..."
    );

    for (var i = 0; i < 3; i++) {
      var dot = document.createElement("span");
      dot.className = "pa-chat__loading-dot";
      loader.appendChild(dot);
    }

    messagesEl.appendChild(loader);
    scrollToBottom();
  }

  function hideLoading() {
    var loader = document.getElementById("pa-chat-loader");
    if (loader) loader.remove();
  }

  // ── Helpers ───────────────────────────────────────────────

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function autoResize() {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 100) + "px";
  }

  function getErrorText() {
    return lang === "en"
      ? "Something went wrong. Please try again later."
      : "Er ging iets mis. Probeer het later opnieuw.";
  }

  // ── Public API for GTM ────────────────────────────────────

  window.paChat = {
    open: openChat,
    close: closeChat,
  };

  // ── Bootstrap ─────────────────────────────────────────────

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
