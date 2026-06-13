// main script
// Project-override van het hugoplate-main.js.
// Swiper zit nu in de lazy (async) bundel, dus de testimonial-slider wordt pas
// geïnitialiseerd zodra Swiper beschikbaar is. Op pagina's zonder slider gebeurt
// er niets.
(function () {
  "use strict";

  function initTestimonialSlider() {
    if (typeof Swiper === "undefined") return false; // Swiper nog niet geladen
    if (!document.querySelector(".testimonial-slider")) return true; // geen slider op deze pagina
    new Swiper(".testimonial-slider", {
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: ".testimonial-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
    return true;
  }

  // Direct proberen; lukt het niet (Swiper nog niet geladen), kort pollen tot de
  // lazy-bundel binnen is. Stopt na een ruime marge.
  if (!initTestimonialSlider()) {
    var tries = 0;
    var timer = setInterval(function () {
      if (initTestimonialSlider() || ++tries > 100) {
        clearInterval(timer);
      }
    }, 50);
  }
})();
