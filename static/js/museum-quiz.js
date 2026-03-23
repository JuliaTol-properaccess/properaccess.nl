(function () {
  'use strict';

  /* ═══════════════════════════════════════════
     SVG illustrations per question category
     ═══════════════════════════════════════════ */

  var SVG = {
    image: '<svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect width="320" height="200" rx="8" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Nav bar -->' +
      '<rect x="0" y="0" width="320" height="32" rx="8" fill="#fff"/><rect x="0" y="24" width="320" height="8" fill="#fff"/>' +
      '<line x1="0" y1="32" x2="320" y2="32" stroke="#e5e7eb" stroke-width="1"/>' +
      '<circle cx="24" cy="16" r="8" fill="#A30D4B" opacity="0.25"/>' +
      '<rect x="40" y="13" width="20" height="3" rx="1.5" fill="#1F2937" opacity="0.25"/><rect x="40" y="19" width="14" height="2" rx="1" fill="#1F2937" opacity="0.12"/>' +
      '<rect x="140" y="14" width="18" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="168" y="14" width="22" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="200" y="14" width="16" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="226" y="14" width="20" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="268" y="10" width="36" height="12" rx="4" fill="#A30D4B" opacity="0.15"/><rect x="274" y="14" width="24" height="3" rx="1.5" fill="#A30D4B" opacity="0.4"/>' +
      '<!-- Banner -->' +
      '<rect x="0" y="32" width="320" height="110" fill="#A30D4B"/>' +
      '<circle cx="40" cy="87" r="36" fill="#fff" opacity="0.05"/>' +
      '<circle cx="290" cy="55" r="24" fill="#fff" opacity="0.04"/>' +
      '<circle cx="260" cy="120" r="18" fill="#fff" opacity="0.04"/>' +
      '<text x="160" y="80" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" font-family="Nunito Sans, sans-serif">Inschrijving sluit</text>' +
      '<text x="160" y="106" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" font-family="Nunito Sans, sans-serif">op 1 juli!</text>' +
      '<!-- Below fold -->' +
      '<rect x="20" y="156" width="120" height="5" rx="2.5" fill="#1F2937" opacity="0.15"/>' +
      '<rect x="20" y="166" width="280" height="3" rx="1.5" fill="#1F2937" opacity="0.08"/>' +
      '<rect x="20" y="174" width="240" height="3" rx="1.5" fill="#1F2937" opacity="0.08"/>' +
      '<rect x="20" y="182" width="260" height="3" rx="1.5" fill="#1F2937" opacity="0.08"/>' +
      '</svg>',

    imageLink: '<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="2" y="2" width="156" height="96" rx="10" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Child sitting, seen from the side -->' +
      '<!-- Head -->' +
      '<circle cx="52" cy="24" r="10" fill="#A30D4B" opacity="0.18"/>' +
      '<circle cx="52" cy="24" r="8.5" fill="#f5f5f5"/>' +
      '<circle cx="52" cy="24" r="8.5" fill="#A30D4B" opacity="0.12"/>' +
      '<!-- Hair -->' +
      '<path d="M44 20c0-5 4-9 8-9s8 4 8 9c0 1-1 2-2 2h-1c0-4-2-6-5-6s-5 2-5 6h-1c-1 0-2-1-2-2z" fill="#1F2937" opacity="0.25"/>' +
      '<!-- Body / torso - sitting, leaning forward -->' +
      '<path d="M48 33c-1 0-2 1-2 3l-1 14c0 1 .5 2 1.5 2h2l1 12c0 1 1 2 2 2h5c1 0 2-1 2-2l1-12h2c1 0 1.5-1 1.5-2l-1-14c0-2-1-3-2-3" fill="#1F2937" opacity="0.15"/>' +
      '<!-- Arms reaching forward to hold book -->' +
      '<path d="M48 38c-2 1-3 2-3 3l3 6" stroke="#1F2937" stroke-width="2" stroke-linecap="round" opacity="0.12" fill="none"/>' +
      '<path d="M58 38c1 1 2 2 2 4l-1 4" stroke="#1F2937" stroke-width="2" stroke-linecap="round" opacity="0.12" fill="none"/>' +
      '<!-- Open book -->' +
      '<g transform="translate(60, 34)">' +
      '<path d="M0 4C0 2 4 0 10 0v22c-6 0-10-1-10-3z" fill="#fff" stroke="#1F2937" stroke-width="1" opacity="0.5"/>' +
      '<path d="M20 4c0-2-4-4-10-4v22c6 0 10-1 10-3z" fill="#fff" stroke="#1F2937" stroke-width="1" opacity="0.5"/>' +
      '<line x1="10" y1="0" x2="10" y2="22" stroke="#1F2937" stroke-width="0.75" opacity="0.2"/>' +
      '<rect x="2" y="5" width="6" height="1" rx="0.5" fill="#1F2937" opacity="0.15"/>' +
      '<rect x="2" y="8" width="5" height="1" rx="0.5" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="2" y="11" width="6" height="1" rx="0.5" fill="#1F2937" opacity="0.15"/>' +
      '<rect x="12" y="5" width="6" height="1" rx="0.5" fill="#1F2937" opacity="0.15"/>' +
      '<rect x="12" y="8" width="5" height="1" rx="0.5" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="12" y="11" width="6" height="1" rx="0.5" fill="#1F2937" opacity="0.15"/>' +
      '</g>' +
      '<!-- Link icon -->' +
      '<g transform="translate(110, 58)">' +
      '<rect x="-6" y="-6" width="36" height="36" rx="18" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<path d="M8 16l-2 2a4 4 0 0 0 5.66 5.66l2-2" stroke="#004050" stroke-width="2.5" stroke-linecap="round" fill="none"/>' +
      '<path d="M16 8l2-2a4 4 0 0 1 5.66 5.66l-2 2" stroke="#004050" stroke-width="2.5" stroke-linecap="round" fill="none"/>' +
      '<line x1="10" y1="14" x2="14" y2="10" stroke="#A30D4B" stroke-width="2.5" stroke-linecap="round"/>' +
      '</g>' +
      '</svg>',

    infographic: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="4" y="8" width="112" height="74" rx="8" fill="#f5f5f5" stroke="#1F2937" stroke-width="2"/><rect x="16" y="50" width="14" height="24" rx="3" fill="#A30D4B" opacity="0.6"/><rect x="36" y="38" width="14" height="36" rx="3" fill="#A30D4B" opacity="0.4"/><rect x="56" y="28" width="14" height="46" rx="3" fill="#A30D4B" opacity="0.7"/><rect x="76" y="44" width="14" height="30" rx="3" fill="#004050" opacity="0.5"/><rect x="96" y="34" width="14" height="40" rx="3" fill="#004050" opacity="0.35"/><path d="M16 46l20-10 20 6 20-12 20 8" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/><rect x="16" y="18" width="40" height="4" rx="2" fill="#1F2937" opacity="0.2"/></svg>',

    decorative: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="4" y="8" width="112" height="74" rx="8" fill="#f5f5f5" stroke="#1F2937" stroke-width="2"/><path d="M20 45c10-20 25 10 40-5s20 15 40-3" stroke="#A30D4B" stroke-width="2" stroke-linecap="round" opacity="0.3" fill="none"/><path d="M20 55c12-15 22 8 38-2s22 12 38-5" stroke="#004050" stroke-width="1.5" stroke-linecap="round" opacity="0.2" fill="none"/><circle cx="90" cy="30" r="5" fill="#A30D4B" opacity="0.1"/><circle cx="30" cy="62" r="4" fill="#004050" opacity="0.1"/></svg>',

    logo: '<svg viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="20" y="18" width="120" height="54" rx="12" fill="#f5f5f5" stroke="#1F2937" stroke-width="2"/><circle cx="52" cy="45" r="14" fill="#A30D4B" opacity="0.2"/><circle cx="52" cy="45" r="9" fill="#A30D4B" opacity="0.35"/><text x="74" y="43" font-size="9" font-weight="700" fill="#1F2937" font-family="sans-serif">Gemeente</text><text x="74" y="53" font-size="9" font-weight="700" fill="#1F2937" font-family="sans-serif">Zon</text></svg>',

    heading: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><rect x="20" y="22" width="36" height="7" rx="3" fill="#1F2937" opacity="0.7"/><rect x="20" y="34" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.12"/><rect x="20" y="40" width="72" height="3" rx="1.5" fill="#1F2937" opacity="0.12"/><rect x="20" y="50" width="28" height="5" rx="2.5" fill="#A30D4B" opacity="0.5"/><rect x="20" y="58" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.12"/><rect x="20" y="64" width="56" height="3" rx="1.5" fill="#1F2937" opacity="0.12"/></svg>',

    headingStructure: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="14" y="12" width="92" height="66" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><text x="22" y="27" font-size="9" font-weight="700" fill="#1F2937" font-family="sans-serif">H1</text><rect x="36" y="20" width="50" height="5" rx="2.5" fill="#1F2937" opacity="0.5"/><text x="28" y="40" font-size="8" font-weight="700" fill="#A30D4B" font-family="sans-serif">H2</text><rect x="42" y="34" width="40" height="4" rx="2" fill="#A30D4B" opacity="0.35"/><text x="34" y="52" font-size="7" font-weight="700" fill="#004050" font-family="sans-serif">H3</text><rect x="46" y="47" width="32" height="3.5" rx="1.75" fill="#004050" opacity="0.3"/><text x="28" y="64" font-size="8" font-weight="700" fill="#A30D4B" font-family="sans-serif">H2</text><rect x="42" y="58" width="44" height="4" rx="2" fill="#A30D4B" opacity="0.35"/><path d="M22 30v4h4" stroke="#1F2937" stroke-width="1" opacity="0.3" stroke-linecap="round"/><path d="M28 42v4h4" stroke="#A30D4B" stroke-width="1" opacity="0.3" stroke-linecap="round"/></svg>',

    boldItalic: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><rect x="20" y="22" width="24" height="10" rx="4" fill="#f5f5f5" stroke="#1F2937" stroke-width="1.5"/><text x="32" y="30" text-anchor="middle" font-size="8" font-weight="900" fill="#1F2937" font-family="serif">B</text><rect x="50" y="22" width="24" height="10" rx="4" fill="#f5f5f5" stroke="#1F2937" stroke-width="1.5"/><text x="62" y="30" text-anchor="middle" font-size="8" fill="#1F2937" font-family="serif" font-style="italic">I</text><rect x="20" y="38" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="44" width="60" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="42" y="38" width="18" height="3" rx="1.5" fill="#A30D4B" opacity="0.5"/><rect x="20" y="54" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.1"/><rect x="20" y="60" width="72" height="3" rx="1.5" fill="#1F2937" opacity="0.1"/><rect x="20" y="66" width="50" height="3" rx="1.5" fill="#1F2937" opacity="0.1"/></svg>',

    list: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><circle cx="26" cy="30" r="3" fill="#A30D4B"/><rect x="34" y="28" width="60" height="4" rx="2" fill="#1F2937" opacity="0.3"/><circle cx="26" cy="42" r="3" fill="#A30D4B"/><rect x="34" y="40" width="52" height="4" rx="2" fill="#1F2937" opacity="0.3"/><circle cx="26" cy="54" r="3" fill="#A30D4B"/><rect x="34" y="52" width="64" height="4" rx="2" fill="#1F2937" opacity="0.3"/><circle cx="26" cy="66" r="3" fill="#A30D4B"/><rect x="34" y="64" width="44" height="4" rx="2" fill="#1F2937" opacity="0.3"/></svg>',

    link: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><rect x="20" y="30" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="36" width="65" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="46" width="34" height="4" rx="2" fill="#004050"/><path d="M56 48h6" stroke="#004050" stroke-width="1.5" stroke-linecap="round"/><rect x="20" y="56" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="62" width="48" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><path d="M36 50l-2-2M36 50l2-2" stroke="#fff" stroke-width="1" stroke-linecap="round"/></svg>',

    download: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="30" y="10" width="60" height="70" rx="6" fill="#fff" stroke="#1F2937" stroke-width="2"/><path d="M70 10v16h20" stroke="#1F2937" stroke-width="2" fill="#f5f5f5"/><rect x="40" y="36" width="40" height="4" rx="2" fill="#1F2937" opacity="0.15"/><rect x="40" y="44" width="32" height="4" rx="2" fill="#1F2937" opacity="0.15"/><path d="M60 56v14M54 64l6 6 6-6" stroke="#A30D4B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><text x="60" y="30" text-anchor="middle" font-size="8" font-weight="700" fill="#A30D4B" opacity="0.6" font-family="sans-serif">PDF</text></svg>',

    newWindow: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="8" y="18" width="72" height="56" rx="6" fill="#fff" stroke="#1F2937" stroke-width="2"/><rect x="8" y="18" width="72" height="12" rx="6" fill="#f5f5f5"/><circle cx="18" cy="24" r="2.5" fill="#f87171"/><circle cx="26" cy="24" r="2.5" fill="#fbbf24"/><circle cx="34" cy="24" r="2.5" fill="#34d399"/><rect x="40" y="40" width="72" height="44" rx="6" fill="#fff" stroke="#A30D4B" stroke-width="2"/><rect x="40" y="40" width="72" height="10" rx="6" fill="rgba(163,13,75,0.08)"/><circle cx="50" cy="45" r="2.5" fill="#f87171"/><circle cx="58" cy="45" r="2.5" fill="#fbbf24"/><circle cx="66" cy="45" r="2.5" fill="#34d399"/><path d="M92 18l16-6M108 12v10h-10" stroke="#A30D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

    colorStatus: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><circle cx="30" cy="36" r="6" fill="#34d399"/><rect x="42" y="33" width="54" height="5" rx="2.5" fill="#1F2937" opacity="0.15"/><circle cx="30" cy="50" r="6" fill="#fbbf24"/><rect x="42" y="47" width="48" height="5" rx="2.5" fill="#1F2937" opacity="0.15"/><circle cx="30" cy="64" r="6" fill="#f87171"/><rect x="42" y="61" width="40" height="5" rx="2.5" fill="#1F2937" opacity="0.15"/></svg>',

    video: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="10" y="10" width="100" height="60" rx="8" fill="#1F2937"/><path d="M52 32v16l14-8z" fill="#fff"/><rect x="10" y="72" width="100" height="10" rx="4" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1"/><rect x="16" y="75" width="40" height="4" rx="2" fill="#A30D4B" opacity="0.4"/><rect x="62" y="75" width="20" height="4" rx="2" fill="#004050" opacity="0.2"/></svg>',

    contrast: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="8" y="8" width="104" height="74" rx="8" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><rect x="8" y="8" width="104" height="40" rx="8" fill="#004050"/><rect x="8" y="40" width="104" height="8" fill="#004050"/><text x="60" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">Contact</text><rect x="20" y="56" width="80" height="4" rx="2" fill="#1F2937" opacity="0.12"/><rect x="20" y="64" width="64" height="4" rx="2" fill="#1F2937" opacity="0.12"/><path d="M96 14l8-4v14l-8-4z" fill="#A30D4B" opacity="0.3"/></svg>',

    table: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#1F2937" stroke-width="2"/><rect x="12" y="14" width="96" height="14" rx="6" fill="#f5f5f5"/><rect x="12" y="22" width="96" height="6" fill="#f5f5f5"/><line x1="12" y1="28" x2="108" y2="28" stroke="#e5e7eb" stroke-width="1"/><line x1="12" y1="44" x2="108" y2="44" stroke="#e5e7eb" stroke-width="1"/><line x1="12" y1="60" x2="108" y2="60" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="14" x2="50" y2="76" stroke="#e5e7eb" stroke-width="1"/><rect x="20" y="19" width="24" height="4" rx="2" fill="#1F2937" opacity="0.5"/><rect x="56" y="19" width="28" height="4" rx="2" fill="#1F2937" opacity="0.5"/><rect x="20" y="34" width="20" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/><rect x="56" y="34" width="16" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/></svg>',

    tableHeaders: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#1F2937" stroke-width="2"/><rect x="12" y="14" width="96" height="16" rx="6" fill="#A30D4B" opacity="0.12"/><rect x="12" y="24" width="96" height="6" fill="#A30D4B" opacity="0.12"/><line x1="12" y1="30" x2="108" y2="30" stroke="#A30D4B" stroke-width="1.5" opacity="0.3"/><line x1="12" y1="46" x2="108" y2="46" stroke="#e5e7eb" stroke-width="1"/><line x1="12" y1="62" x2="108" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="60" y1="14" x2="60" y2="76" stroke="#e5e7eb" stroke-width="1"/><rect x="20" y="20" width="28" height="5" rx="2.5" fill="#A30D4B" opacity="0.6"/><rect x="68" y="20" width="32" height="5" rx="2.5" fill="#A30D4B" opacity="0.6"/><rect x="20" y="36" width="20" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/><rect x="68" y="36" width="24" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/><rect x="20" y="52" width="18" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/><rect x="68" y="52" width="20" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/></svg>',

    colorChart: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><circle cx="52" cy="44" r="22" fill="none" stroke="#e5e7eb" stroke-width="1"/><path d="M52 22a22 22 0 0 1 19 11l-19 11z" fill="#A30D4B" opacity="0.6"/><path d="M71 33a22 22 0 0 1 3 11 22 22 0 0 1-11 19l-11-19z" fill="#004050" opacity="0.5"/><path d="M63 63a22 22 0 0 1-11 3 22 22 0 0 1-19-11l19-11z" fill="#1F2937" opacity="0.3"/><path d="M33 55a22 22 0 0 1-3-11 22 22 0 0 1 22-22v22z" fill="#fbbf24" opacity="0.4"/><line x1="82" y1="26" x2="100" y2="26" stroke="#A30D4B" stroke-width="3" stroke-linecap="round"/><line x1="82" y1="36" x2="100" y2="36" stroke="#004050" stroke-width="3" stroke-linecap="round"/><line x1="82" y1="46" x2="100" y2="46" stroke="#1F2937" stroke-width="3" stroke-linecap="round" opacity="0.4"/><line x1="82" y1="56" x2="100" y2="56" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/></svg>',

    language: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><rect x="20" y="22" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="28" width="68" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="38" width="72" height="14" rx="4" fill="#004050" opacity="0.08" stroke="#004050" stroke-width="1" opacity="0.2"/><rect x="20" y="58" width="80" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/><rect x="20" y="64" width="56" height="3" rx="1.5" fill="#1F2937" opacity="0.15"/></svg>',

    icons: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><circle cx="34" cy="44" r="12" fill="#A30D4B" opacity="0.12" stroke="#A30D4B" stroke-width="1.5"/><circle cx="60" cy="44" r="12" fill="#004050" opacity="0.12" stroke="#004050" stroke-width="1.5"/><circle cx="86" cy="44" r="12" fill="#1F2937" opacity="0.08" stroke="#1F2937" stroke-width="1.5"/><path d="M30 40v8l8-4z" fill="#A30D4B" opacity="0.6"/><rect x="56" y="40" width="8" height="8" rx="1" fill="#004050" opacity="0.5"/><circle cx="86" cy="44" r="4" fill="none" stroke="#1F2937" stroke-width="1.5" opacity="0.4"/><circle cx="86" cy="44" r="1.5" fill="#1F2937" opacity="0.4"/></svg>',

    museum: '<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="2" y="2" width="156" height="96" rx="8" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Museum building -->' +
      '<path d="M80 18l-40 20v4h80v-4z" fill="#1F2937" opacity="0.15"/>' +
      '<rect x="44" y="42" width="72" height="36" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="50" y="42" width="10" height="36" fill="#1F2937" opacity="0.08"/>' +
      '<rect x="66" y="42" width="10" height="36" fill="#1F2937" opacity="0.08"/>' +
      '<rect x="82" y="42" width="10" height="36" fill="#1F2937" opacity="0.08"/>' +
      '<rect x="98" y="42" width="10" height="36" fill="#1F2937" opacity="0.08"/>' +
      '<!-- Columns -->' +
      '<rect x="48" y="38" width="4" height="40" rx="2" fill="#1F2937" opacity="0.25"/>' +
      '<rect x="64" y="38" width="4" height="40" rx="2" fill="#1F2937" opacity="0.25"/>' +
      '<rect x="80" y="38" width="4" height="40" rx="2" fill="#1F2937" opacity="0.25"/>' +
      '<rect x="96" y="38" width="4" height="40" rx="2" fill="#1F2937" opacity="0.25"/>' +
      '<rect x="112" y="38" width="4" height="40" rx="2" fill="#1F2937" opacity="0.25"/>' +
      '<!-- Triangle pediment -->' +
      '<path d="M80 14l-38 22h76z" fill="#fff" stroke="#1F2937" stroke-width="1.5" opacity="0.3"/>' +
      '<!-- Door -->' +
      '<rect x="72" y="56" width="16" height="22" rx="8" fill="#A30D4B" opacity="0.2"/>' +
      '<!-- Steps -->' +
      '<rect x="40" y="78" width="80" height="4" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="36" y="82" width="88" height="4" rx="1" fill="#1F2937" opacity="0.08"/>' +
      '<rect x="32" y="86" width="96" height="4" rx="1" fill="#1F2937" opacity="0.06"/>' +
      '</svg>',

    painting: '<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="2" y="2" width="156" height="96" rx="8" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Wall -->' +
      '<rect x="10" y="10" width="140" height="80" fill="#fff" opacity="0.5"/>' +
      '<!-- Frame -->' +
      '<rect x="40" y="16" width="80" height="56" rx="2" fill="#1F2937" opacity="0.08" stroke="#1F2937" stroke-width="2.5" opacity="0.4"/>' +
      '<!-- Inner frame -->' +
      '<rect x="45" y="21" width="70" height="46" fill="#004050" opacity="0.08"/>' +
      '<!-- Painting contents: woman pouring milk (abstract) -->' +
      '<circle cx="72" cy="36" r="5" fill="#A30D4B" opacity="0.15"/>' +
      '<path d="M68 41c0 0-2 1-3 6s-1 8-1 8h14s0-4-1-8-3-6-3-6" fill="#004050" opacity="0.12"/>' +
      '<rect x="82" y="38" width="8" height="10" rx="2" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="56" y="48" width="28" height="14" rx="1" fill="#1F2937" opacity="0.06"/>' +
      '<!-- Hanging wire -->' +
      '<path d="M80 8l-12 8M80 8l12 8" stroke="#1F2937" stroke-width="1" opacity="0.3"/>' +
      '<!-- Caption plate -->' +
      '<rect x="58" y="76" width="44" height="8" rx="2" fill="#fff" stroke="#1F2937" stroke-width="1" opacity="0.3"/>' +
      '<rect x="62" y="79" width="36" height="2" rx="1" fill="#1F2937" opacity="0.15"/>' +
      '</svg>',

    threeCards: '<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="2" y="2" width="156" height="96" rx="8" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Card 1 -->' +
      '<rect x="10" y="8" width="42" height="84" rx="4" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<rect x="14" y="12" width="34" height="18" rx="2" fill="#A30D4B" opacity="0.1"/>' +
      '<rect x="14" y="34" width="30" height="4" rx="2" fill="#1F2937" opacity="0.4"/>' +
      '<rect x="14" y="42" width="34" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="14" y="47" width="28" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="14" y="52" width="32" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="14" y="60" width="24" height="3" rx="1.5" fill="#004050" opacity="0.6"/><rect x="14" y="60" width="24" height="3" rx="1.5" fill="none" stroke="#004050" stroke-width="0.5" opacity="0.3"/>' +
      '<!-- Card 2 -->' +
      '<rect x="59" y="8" width="42" height="84" rx="4" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<rect x="63" y="12" width="34" height="18" rx="2" fill="#004050" opacity="0.1"/>' +
      '<rect x="63" y="34" width="30" height="4" rx="2" fill="#1F2937" opacity="0.4"/>' +
      '<rect x="63" y="42" width="34" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="63" y="47" width="28" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="63" y="52" width="32" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="63" y="60" width="24" height="3" rx="1.5" fill="#004050" opacity="0.6"/>' +
      '<!-- Card 3 -->' +
      '<rect x="108" y="8" width="42" height="84" rx="4" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<rect x="112" y="12" width="34" height="18" rx="2" fill="#1F2937" opacity="0.06"/>' +
      '<rect x="112" y="34" width="30" height="4" rx="2" fill="#1F2937" opacity="0.4"/>' +
      '<rect x="112" y="42" width="34" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="112" y="47" width="28" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="112" y="52" width="32" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="112" y="60" width="24" height="3" rx="1.5" fill="#004050" opacity="0.6"/>' +
      '<!-- "Lees meer" labels -->' +
      '<text x="26" y="62" text-anchor="middle" font-size="3" fill="#004050" font-family="sans-serif">Lees meer</text>' +
      '<text x="75" y="62" text-anchor="middle" font-size="3" fill="#004050" font-family="sans-serif">Lees meer</text>' +
      '<text x="124" y="62" text-anchor="middle" font-size="3" fill="#004050" font-family="sans-serif">Lees meer</text>' +
      '</svg>',

    threeCardsDate: '<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="2" y="2" width="156" height="96" rx="8" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Card 1 -->' +
      '<rect x="10" y="8" width="42" height="84" rx="4" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<rect x="14" y="14" width="20" height="3" rx="1.5" fill="#A30D4B" opacity="0.3"/>' +
      '<text x="14" y="16" font-size="2.5" fill="#A30D4B" opacity="0.6" font-family="sans-serif">15 mrt 2026</text>' +
      '<rect x="14" y="22" width="30" height="4" rx="2" fill="#1F2937" opacity="0.5"/>' +
      '<rect x="14" y="30" width="34" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="14" y="35" width="28" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="14" y="40" width="32" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<!-- Card 2 -->' +
      '<rect x="59" y="8" width="42" height="84" rx="4" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<rect x="63" y="14" width="20" height="3" rx="1.5" fill="#A30D4B" opacity="0.3"/>' +
      '<rect x="63" y="22" width="30" height="4" rx="2" fill="#1F2937" opacity="0.5"/>' +
      '<rect x="63" y="30" width="34" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="63" y="35" width="28" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="63" y="40" width="32" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<!-- Card 3 -->' +
      '<rect x="108" y="8" width="42" height="84" rx="4" fill="#fff" stroke="#e5e7eb" stroke-width="1"/>' +
      '<rect x="112" y="14" width="20" height="3" rx="1.5" fill="#A30D4B" opacity="0.3"/>' +
      '<rect x="112" y="22" width="30" height="4" rx="2" fill="#1F2937" opacity="0.5"/>' +
      '<rect x="112" y="30" width="34" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="112" y="35" width="28" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="112" y="40" width="32" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<!-- Arrow showing wrong order -->' +
      '<path d="M14 18l4-6" stroke="#f87171" stroke-width="1" stroke-linecap="round" opacity="0.6"/>' +
      '<text x="22" y="12" font-size="2.5" fill="#f87171" opacity="0.7" font-family="sans-serif">datum eerst?</text>' +
      '</svg>',

    formPlaceholder: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="12" y="8" width="96" height="74" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Field 1 -->' +
      '<rect x="20" y="16" width="80" height="14" rx="3" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<text x="26" y="26" font-size="5" fill="#9ca3af" font-family="sans-serif">Vul hier je naam in</text>' +
      '<!-- Field 2 -->' +
      '<rect x="20" y="36" width="80" height="14" rx="3" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<text x="26" y="46" font-size="5" fill="#9ca3af" font-family="sans-serif">E-mailadres</text>' +
      '<!-- Field 3 -->' +
      '<rect x="20" y="56" width="80" height="14" rx="3" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<text x="26" y="66" font-size="5" fill="#9ca3af" font-family="sans-serif">Je bericht</text>' +
      '<!-- No visible labels! -->' +
      '</svg>',

    formError: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="12" y="8" width="96" height="74" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Label -->' +
      '<text x="20" y="20" font-size="5" font-weight="600" fill="#1F2937" font-family="sans-serif">E-mailadres</text>' +
      '<!-- Field with red border -->' +
      '<rect x="20" y="24" width="80" height="14" rx="3" fill="#fff" stroke="#f87171" stroke-width="2"/>' +
      '<!-- Error message -->' +
      '<text x="20" y="48" font-size="4.5" fill="#f87171" font-family="sans-serif">Vul een geldig e-mailadres in.</text>' +
      '<!-- Second field -->' +
      '<text x="20" y="58" font-size="5" font-weight="600" fill="#1F2937" font-family="sans-serif">Telefoonnummer</text>' +
      '<rect x="20" y="62" width="80" height="14" rx="3" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Warning icon -->' +
      '<circle cx="96" cy="31" r="4" fill="#f87171" opacity="0.15"/>' +
      '<text x="96" y="33" text-anchor="middle" font-size="6" font-weight="700" fill="#f87171" font-family="sans-serif">!</text>' +
      '</svg>',

    dataTable3col: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="8" y="10" width="104" height="70" rx="6" fill="#fff" stroke="#1F2937" stroke-width="1.5"/>' +
      '<!-- Header row -->' +
      '<rect x="8" y="10" width="104" height="14" rx="6" fill="#A30D4B" opacity="0.1"/>' +
      '<rect x="8" y="18" width="104" height="6" fill="#A30D4B" opacity="0.1"/>' +
      '<line x1="8" y1="24" x2="112" y2="24" stroke="#A30D4B" stroke-width="1" opacity="0.3"/>' +
      '<!-- Column dividers -->' +
      '<line x1="48" y1="10" x2="48" y2="80" stroke="#e5e7eb" stroke-width="1"/>' +
      '<line x1="82" y1="10" x2="82" y2="80" stroke="#e5e7eb" stroke-width="1"/>' +
      '<!-- Header text -->' +
      '<rect x="14" y="16" width="26" height="4" rx="2" fill="#A30D4B" opacity="0.5"/>' +
      '<rect x="54" y="16" width="20" height="4" rx="2" fill="#A30D4B" opacity="0.5"/>' +
      '<rect x="88" y="16" width="18" height="4" rx="2" fill="#A30D4B" opacity="0.5"/>' +
      '<!-- Row dividers -->' +
      '<line x1="8" y1="38" x2="112" y2="38" stroke="#e5e7eb" stroke-width="1"/>' +
      '<line x1="8" y1="52" x2="112" y2="52" stroke="#e5e7eb" stroke-width="1"/>' +
      '<line x1="8" y1="66" x2="112" y2="66" stroke="#e5e7eb" stroke-width="1"/>' +
      '<!-- Data rows -->' +
      '<rect x="14" y="29" width="22" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="54" y="29" width="14" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="88" y="29" width="16" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="14" y="43" width="20" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="54" y="43" width="12" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="88" y="43" width="18" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="14" y="57" width="24" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="54" y="57" width="16" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '<rect x="88" y="57" width="14" height="3" rx="1.5" fill="#1F2937" opacity="0.2"/>' +
      '</svg>',

    formAsterisk: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="12" y="8" width="96" height="74" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Label 1 with asterisk -->' +
      '<text x="20" y="20" font-size="5" font-weight="600" fill="#1F2937" font-family="sans-serif">Naam</text>' +
      '<text x="36" y="20" font-size="6" fill="#f87171" font-family="sans-serif">*</text>' +
      '<rect x="20" y="24" width="80" height="12" rx="3" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Label 2 with asterisk -->' +
      '<text x="20" y="46" font-size="5" font-weight="600" fill="#1F2937" font-family="sans-serif">E-mail</text>' +
      '<text x="41" y="46" font-size="6" fill="#f87171" font-family="sans-serif">*</text>' +
      '<rect x="20" y="50" width="80" height="12" rx="3" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Label 3 without asterisk -->' +
      '<text x="20" y="72" font-size="5" font-weight="600" fill="#1F2937" font-family="sans-serif">Opmerking</text>' +
      '<rect x="20" y="76" width="80" height="4" rx="2" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '</svg>',

    bannerText: '<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="2" y="2" width="156" height="96" rx="8" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- Banner image -->' +
      '<rect x="10" y="10" width="140" height="80" rx="6" fill="#A30D4B"/>' +
      '<circle cx="40" cy="50" r="28" fill="#fff" opacity="0.04"/>' +
      '<circle cx="130" cy="30" r="20" fill="#fff" opacity="0.03"/>' +
      '<!-- Text baked into image -->' +
      '<text x="80" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Nunito Sans, sans-serif">Zomerprogramma 2026</text>' +
      '<text x="80" y="58" text-anchor="middle" font-size="8" fill="#fff" font-family="Nunito Sans, sans-serif" opacity="0.9">Ontdek onze activiteiten</text>' +
      '<!-- Image icon to show it is an image -->' +
      '<rect x="12" y="74" width="16" height="12" rx="2" fill="#fff" opacity="0.15"/>' +
      '<circle cx="17" cy="78" r="2" fill="#fff" opacity="0.2"/>' +
      '<path d="M12 84l5-5 3 3 3-2 5 4" fill="#fff" opacity="0.15"/>' +
      '</svg>',

    accordion: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true">' +
      '<rect x="12" y="8" width="96" height="74" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/>' +
      '<!-- FAQ title -->' +
      '<rect x="20" y="14" width="24" height="5" rx="2.5" fill="#1F2937" opacity="0.5"/>' +
      '<!-- Accordion item 1 (open) -->' +
      '<rect x="20" y="24" width="80" height="10" rx="3" fill="#A30D4B" opacity="0.08" stroke="#A30D4B" stroke-width="0.75" opacity="0.2"/>' +
      '<rect x="26" y="28" width="40" height="3" rx="1.5" fill="#A30D4B" opacity="0.5"/>' +
      '<text x="94" y="31" text-anchor="middle" font-size="6" fill="#A30D4B" opacity="0.5" font-family="sans-serif">\u2212</text>' +
      '<!-- Answer content -->' +
      '<rect x="26" y="38" width="70" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<rect x="26" y="43" width="60" height="2" rx="1" fill="#1F2937" opacity="0.1"/>' +
      '<!-- Accordion item 2 (closed) -->' +
      '<rect x="20" y="50" width="80" height="10" rx="3" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="0.75"/>' +
      '<rect x="26" y="54" width="36" height="3" rx="1.5" fill="#1F2937" opacity="0.3"/>' +
      '<text x="94" y="57" text-anchor="middle" font-size="6" fill="#1F2937" opacity="0.3" font-family="sans-serif">+</text>' +
      '<!-- Accordion item 3 (closed) -->' +
      '<rect x="20" y="64" width="80" height="10" rx="3" fill="#f5f5f5" stroke="#e5e7eb" stroke-width="0.75"/>' +
      '<rect x="26" y="68" width="44" height="3" rx="1.5" fill="#1F2937" opacity="0.3"/>' +
      '<text x="94" y="71" text-anchor="middle" font-size="6" fill="#1F2937" opacity="0.3" font-family="sans-serif">+</text>' +
      '</svg>'
  };

  /* ═══════════════════════════════════════════
     UI translations
     ═══════════════════════════════════════════ */

  var UI = {
    title: 'Quiz: Hoe toegankelijk is jouw museumcontent?',
    subtitle: 'Twintig praktijkvragen over situaties die je als webredacteur in de culturele sector dagelijks tegenkomt. Van alt-teksten bij kunstwerken tot ticketformulieren. Bij elke vraag leggen we uit waarom het antwoord is wat het is.',
    startBtn: 'Start quiz',
    questions: 'Vragen',
    duration: 'Geschatte tijd',
    selectType: 'Single-select',
    level: 'Culturele sector',
    levelValue: 'Culturele sector',
    questionOf: 'Vraag {0} van {1}',
    checkBtn: 'Controleer antwoord',
    nextBtn: 'Volgende vraag',
    prevBtn: 'Vorige',
    finishBtn: 'Bekijk resultaten',
    perfect: 'Goed',
    incorrect: 'Fout',
    resultsTitle: 'Quiz voltooid',
    resultsExcellent: 'Je mag onze audit doen (grapje \u2014 of toch niet?).',
    resultsGood: 'Goed bezig. Met een paar kleine aanpassingen maak je een groot verschil.',
    resultsFair: 'De basis is er, maar er zijn blinde vlekken. Een quickscan kan helpen.',
    resultsNeedsWork: 'Geen zorgen \u2014 de meeste museumwebsites scoren niet veel beter. Tijd voor een gesprek?',
    reviewTitle: 'Antwoorden bekijken',
    retakeBtn: 'Opnieuw doen',
    reviewBtn: 'Antwoorden bekijken',
    scoreLabel: 'Score',
    quizLabel: 'Quiz',
    shareTitle: 'Deel je resultaat',
    shareText: 'Ik scoorde {0}% op de Museum Quiz van Proper Access! Test je eigen kennis:',
    copyLink: 'Kopieer link',
    copiedLink: 'Gekopieerd!',
    shareLinkedIn: 'Deel op LinkedIn',
    shareX: 'Deel op X',
    emailCtaTitle: 'Wil je weten hoe toegankelijk jouw museumwebsite is?',
    emailCtaDesc: 'Vul je e-mailadres in en we sturen je praktische tips over toegankelijke content publiceren in de culturele sector.',
    welcomeFeatures: '<li>Uitslag direct te zien na de quiz</li><li>Bij elke vraag een uitgebreide uitleg</li><li>Gebaseerd op echte auditresultaten bij Nederlandse musea</li>'
  };

  function t(key) { return UI[key] || key; }

  /* ═══════════════════════════════════════════
     Question data — 20 questions, single-select
     ═══════════════════════════════════════════ */

  var Q = [
    {
      id: 1,
      svg: 'museum',
      scenario: 'Op de homepage staat een grote sfeerfoto van het museumgebouw. Erboven staat al de kop "Welkom in het museum". De foto voegt geen nieuwe informatie toe. Wat doe je met de alt-tekst?',
      options: [
        { l: 'A', t: '"Foto van het museumgebouw vanaf de straat"' },
        { l: 'B', t: '"Welkom in het museum"' },
        { l: 'C', t: 'Lege alt-tekst (alt="")' },
        { l: 'D', t: 'Je laat het alt-attribuut helemaal weg' }
      ],
      correct: ['A', 'C'],
      explanation: 'Dit mag je als webredacteur zelf bepalen. De foto voegt geen informatie toe die niet al in de kop staat, dus alt="" (C) is prima. Maar een korte beschrijving zoals "Foto van het museumgebouw vanaf de straat" (A) is ook goed \u2014 het geeft de sfeer mee. Optie B herhaalt de kop, dat is overbodig. Optie D is het slechtst: zonder alt-attribuut leest een schermlezer de bestandsnaam voor, zoals "DSC_0482_homepage_header_final_v3.jpg".'
    },
    {
      id: 2,
      svg: 'painting',
      scenario: 'In een artikel over een tentoonstelling staat een foto van een schilderij van Vermeer. Onder de foto staat het bijschrift: "Johannes Vermeer, Het melkmeisje, ca. 1660." Wat is de beste alt-tekst?',
      options: [
        { l: 'A', t: '"Schilderij"' },
        { l: 'B', t: '"Johannes Vermeer, Het melkmeisje, ca. 1660"' },
        { l: 'C', t: '"Een vrouw in een blauw schort schenkt melk uit een kan in een donkere keuken"' },
        { l: 'D', t: '"het-melkmeisje-vermeer-1660.jpg"' }
      ],
      correct: 'C',
      explanation: 'Het bijschrift geeft al de titel en de kunstenaar. De alt-tekst moet beschrijven wat er op de afbeelding te zien is. "Schilderij" (A) is te vaag. Optie B herhaalt het bijschrift. Optie D is een bestandsnaam \u2014 dit gebeurt als het CMS automatisch de bestandsnaam invult. We zagen dit bij meerdere museumsites.'
    },
    {
      id: 3,
      svg: 'headingStructure',
      scenario: 'Je maakt een pagina over openingstijden. De paginatitel is "Bezoek ons museum" (h1). Daaronder wil je secties maken voor "Openingstijden", "Bereikbaarheid" en "Toegangsprijzen". Welk kopniveau gebruik je?',
      options: [
        { l: 'A', t: 'h1 \u2014 het zijn belangrijke onderwerpen' },
        { l: 'B', t: 'h2 \u2014 het zijn subsecties van de h1' },
        { l: 'C', t: 'h3 \u2014 h2 gebruik je alleen voor hele belangrijke koppen' },
        { l: 'D', t: 'Je mag deze tekst vet maken met de B-knop' }
      ],
      correct: 'B',
      explanation: 'Kopniveaus werken als een inhoudsopgave. De h1 is de paginatitel, de h2\'s zijn de hoofdsecties. Er mag maar \u00e9\u00e9n h1 per pagina zijn (A). Kopniveaus sla je niet over: van h1 naar h3 (C) is verwarrend. Vet (D) is geen kop \u2014 een schermlezer herkent het niet als zodanig.'
    },
    {
      id: 4,
      svg: 'boldItalic',
      scenario: 'In het CMS maak je een nieuw artikel. Je typt de tussenkop "Praktische informatie" en maakt die tekst vet met de B-knop in plaats van een kopelement te kiezen. Wat is het probleem?',
      options: [
        { l: 'A', t: 'Niets, vet is hetzelfde als een kop' },
        { l: 'B', t: 'De tekst wordt niet groot genoeg weergegeven' },
        { l: 'C', t: 'Een schermlezer herkent dit niet als kop, waardoor de structuur verloren gaat' },
        { l: 'D', t: 'Google indexeert vette tekst niet' }
      ],
      correct: 'C',
      explanation: 'Vet (<code>strong</code>) is alleen bedoeld om nadruk te leggen op tekst. Alleen HTML-kopelementen (h1-h6) worden herkend als koppen. Dit was een van de meest voorkomende fouten in onze audits bij musea: tussenkopjes die er visueel uitzien als koppen, maar in de code gewoon vet zijn.'
    },
    {
      id: 5,
      svg: 'threeCards',
      scenario: 'Op de tentoonstellingspagina staan drie blokken met elk een link met de tekst "Lees meer". Wat is het probleem?',
      options: [
        { l: 'A', t: 'Niets, "Lees meer" staat onder het bericht en dat is duidelijk genoeg' },
        { l: 'B', t: 'Een schermlezer leest drie keer "Lees meer" voor zonder context \u2014 de gebruiker weet niet waar elke link naartoe gaat' },
        { l: 'C', t: '"Lees meer" is te informeel voor een museumwebsite' },
        { l: 'D', t: 'De links moeten minstens vijf woorden bevatten' }
      ],
      correct: 'B',
      explanation: 'Een schermlezergebruiker kan een lijst van alle links opvragen. Als er drie keer "Lees meer" staat, is niet te onderscheiden welke link bij welke tentoonstelling hoort. Beter: "Meer over Vermeer-tentoonstelling", "Meer over Mondriaan-expositie", enzovoort.'
    },
    {
      id: 6,
      svg: 'newWindow',
      scenario: 'Je plaatst een link naar de ticketshop die in een nieuw venster opent. Welke linktekst is het beste?',
      options: [
        { l: 'A', t: '"Klik hier"' },
        { l: 'B', t: '"Tickets kopen"' },
        { l: 'C', t: '"Tickets kopen (opent in nieuw venster)"' },
        { l: 'D', t: '"https://tickets.museum.nl/koop-nu"' }
      ],
      correct: 'C',
      explanation: 'Als een link in een nieuw venster opent, moet de gebruiker dat van tevoren weten. "Klik hier" (A) is nietszeggend. "Tickets kopen" (B) mist de waarschuwing. Een kale URL (D) wordt letter voor letter voorgelezen door een schermlezer.'
    },
    {
      id: 7,
      svg: 'heading',
      scenario: 'Je maakt vijf pagina\'s aan voor een nieuwe tentoonstelling. Het CMS vult automatisch "Museum \u2014 Tentoonstellingen" in als paginatitel voor allemaal. Wat doe je?',
      options: [
        { l: 'A', t: 'Prima zo, de titel klopt toch' },
        { l: 'B', t: 'Je past elke paginatitel aan: "Kunstwerken \u2014 Vermeer-tentoonstelling \u2014 Museum"' },
        { l: 'C', t: 'Je verwijdert de paginatitel, die ziet toch niemand' },
        { l: 'D', t: 'Je maakt alle titels zo kort mogelijk: "Vermeer"' }
      ],
      correct: 'B',
      explanation: 'De paginatitel verschijnt in het browsertabblad en is het eerste wat een schermlezer voorleest. Als vijf pagina\'s dezelfde titel hebben, weet een gebruiker niet op welke pagina die zit. We zagen dit bij meerdere museumwebsites: alle pagina\'s in het bestelproces hadden exact dezelfde titel.'
    },
    {
      id: 8,
      svg: 'threeCardsDate',
      scenario: 'Je maakt een nieuwsoverzicht. Elk artikel heeft een datum, categorie, afbeelding en kop. In het CMS voer je ze in deze volgorde in: datum, categorie, afbeelding, kop. Waarom is dat een probleem?',
      options: [
        { l: 'A', t: 'Een schermlezer leest de datum en categorie voor voordat de kop komt \u2014 daardoor lijkt de datum bij het vorige artikel te horen' },
        { l: 'B', t: 'Google kan de artikelen niet indexeren' },
        { l: 'C', t: 'De afbeelding laadt langzamer als die voor de kop staat' }
      ],
      correct: 'A',
      explanation: 'Een schermlezer volgt de HTML-volgorde, niet de visuele volgorde. Als de datum voor de kop staat in de code, hoort een blinde gebruiker eerst "15 maart 2026, Workshops" en dan pas de titel. Die datum klinkt dan alsof die bij het vorige artikel hoort. De kop moet altijd eerst.'
    },
    {
      id: 9,
      svg: 'colorStatus',
      scenario: 'Op de agenda-pagina zijn beschikbare data groen en uitverkochte data rood. Er is geen andere visuele aanwijzing. Wat is het probleem?',
      options: [
        { l: 'A', t: 'Rood en groen zijn lelijke kleuren voor een museumwebsite' },
        { l: 'B', t: 'Mensen met kleurenblindheid (circa 8% van de mannen) kunnen geen verschil zien tussen rood en groen' },
        { l: 'C', t: 'Niets, kleur is de standaard manier om status aan te geven' },
        { l: 'D', t: 'De kleuren zijn niet on-brand' }
      ],
      correct: 'B',
      explanation: 'Als kleur de enige manier is om informatie over te brengen, mis je een groot deel van je bezoekers. Voeg altijd een tweede visuele aanwijzing toe: een icoon, tekst ("uitverkocht"), of een patroon. We zagen dit bij meerdere museumticketshops.'
    },
    {
      id: 10,
      svg: 'contrast',
      scenario: 'Je plaatst witte tekst over een sfeervolle, donkere foto van een tentoonstellingszaal. Waar moet je op letten?',
      options: [
        { l: 'A', t: 'De tekst moet minimaal 16px zijn' },
        { l: 'B', t: 'De contrastverhouding tussen tekst en achtergrond moet minstens 4,5:1 zijn \u2014 en bij foto\'s varieert de achtergrondkleur' },
        { l: 'C', t: 'Witte tekst op een donkere foto is altijd goed leesbaar' },
        { l: 'D', t: 'Je hoeft alleen te controleren of de tekst er mooi uitziet' }
      ],
      correct: 'B',
      explanation: 'Bij tekst op een foto verschilt het contrast per plek. Gebruik een semi-transparant vlak achter de tekst. Grotere tekst (A) lost het contrastprobleem niet op. Foto\'s wisselen vaak (C), en "mooi" (D) is niet hetzelfde als "leesbaar".'
    },
    {
      id: 11,
      svg: 'formPlaceholder',
      scenario: 'In het contactformulier gebruik je placeholder-tekst ("Je naam") als label voor de invoervelden. Wat is het probleem?',
      options: [
        { l: 'A', t: 'Niets, placeholders zijn hetzelfde als labels' },
        { l: 'B', t: 'Placeholder-tekst verdwijnt zodra iemand begint te typen \u2014 dan weet de gebruiker niet meer welk veld het is' },
        { l: 'C', t: 'Placeholders zijn alleen zichtbaar op mobiel' },
        { l: 'D', t: 'Placeholders worden niet vertaald door Google Translate' }
      ],
      correct: 'B',
      explanation: 'Een placeholder verdwijnt zodra je begint te typen. Gebruik altijd een zichtbaar label boven of naast het veld. De placeholder kan aanvullende informatie geven ("bijv. 020 123 4567"), maar is geen vervanging voor een label.'
    },
    {
      id: 12,
      svg: 'formError',
      scenario: 'Een bezoeker vult het bestelformulier in maar vergeet een e-mailadres. De foutmelding luidt: "Vul een geldig e-mailadres in." Wat is er mis met deze foutmelding?',
      options: [
        { l: 'A', t: 'Niets, dit is een duidelijke instructie' },
        { l: 'B', t: 'De melding zegt wat je moet doen, maar niet wat er fout is gegaan \u2014 beter: "Het veld E-mailadres is niet ingevuld"' },
        { l: 'C', t: 'De melding is te lang' },
        { l: 'D', t: 'De melding moet in het Engels zijn' }
      ],
      correct: 'B',
      explanation: 'Een goede foutmelding legt uit wat er mis is, niet alleen wat de gebruiker moet doen. "Vul een geldig e-mailadres in" kan van alles betekenen. Dit zagen we bij vrijwel elk museumformulier dat we hebben geaudit.'
    },
    {
      id: 13,
      svg: 'download',
      scenario: 'Je uploadt een PDF van het jaarverslag naar de website. Welke stap vergeten de meeste mensen?',
      options: [
        { l: 'A', t: 'De PDF mooier opmaken' },
        { l: 'B', t: 'Controleren of de PDF getagd is (koppen, lijsten, alt-teksten, leesvolgorde)' },
        { l: 'C', t: 'De PDF kleiner maken voor sneller laden' }
      ],
      correct: 'B',
      explanation: 'Een ongetagde PDF is voor een schermlezer een blanco pagina. Teksten, koppen, lijsten en afbeeldingen moeten in de PDF getagd zijn. Bij drie van de vier musea die we auditeerden waren de PDF\'s volledig ontoegankelijk.'
    },
    {
      id: 14,
      svg: 'video',
      scenario: 'Je plaatst een promotievideo van de nieuwe tentoonstelling op de website. De video heeft Engels gesproken commentaar. Wat is het minimum dat je moet regelen?',
      options: [
        { l: 'A', t: 'Niets, het is maar een promotievideo' },
        { l: 'B', t: 'Engelse ondertiteling die overeenkomt met het gesproken commentaar' },
        { l: 'C', t: 'Automatisch gegenereerde ondertiteling van YouTube is voldoende' },
        { l: 'D', t: 'Nederlandse ondertiteling die overeenkomt met het gesproken commentaar' }
      ],
      correct: 'B',
      explanation: 'Ondertiteling moet nauwkeurig overeenkomen met wat er gezegd wordt, in de taal die gesproken wordt. Automatische ondertiteling (C) bevat vaak fouten. Nederlandse ondertiteling (D) voor Engelse spraak is een vertaling, geen ondertiteling \u2014 dat is een andere eis.'
    },
    {
      id: 15,
      svg: 'dataTable3col',
      scenario: 'Je maakt een overzicht van toegangsprijzen met kolommen voor "Type ticket", "Prijs" en "Opmerking". Hoe zet je dit op?',
      options: [
        { l: 'A', t: 'Met tabs en spaties zodat het er netjes uitziet' },
        { l: 'B', t: 'Als een echte HTML-tabel met koprij (<th>) zodat een schermlezer de kolom- en rijkoppen kan voorlezen' },
        { l: 'C', t: 'Als een afbeelding van een tabel \u2014 dan ziet het er altijd goed uit' },
        { l: 'D', t: 'Als een opsomming: "Volwassenen: \u20ac20, Kinderen: gratis"' }
      ],
      correct: 'B',
      explanation: 'Een HTML-tabel met koppen stelt een schermlezer in staat om bij elke cel de bijbehorende kolomkop voor te lezen: "Prijs: \u20ac20". Een afbeelding (C) is niet voorleesbaar. Tabs en spaties (A) geven geen structuur. Bij een museumticketshop zagen we de hele prijstabel als losse div-elementen.'
    },
    {
      id: 16,
      svg: 'formAsterisk',
      scenario: 'In je formulier markeer je verplichte velden met een rood sterretje (*). Wat vergeten de meeste redacteurs?',
      options: [
        { l: 'A', t: 'Het sterretje groter maken' },
        { l: 'B', t: 'Ergens op de pagina uitleggen wat het sterretje betekent: "Velden met een * zijn verplicht"' },
        { l: 'C', t: 'Het sterretje in het alt-attribuut zetten' },
        { l: 'D', t: 'Niets, iedereen weet wat een sterretje betekent' }
      ],
      correct: 'B',
      explanation: 'Niet iedereen kent de conventie van het rode sterretje \u2014 en een schermlezer leest het voor als "ster" of slaat het over. Leg bovenaan het formulier uit wat het symbool betekent. Dit ontbrak bij meerdere museumformulieren.'
    },
    {
      id: 17,
      svg: 'video',
      scenario: 'Je plaatst een YouTube-video op de pagina via een iframe. Wat vergeet bijna iedereen?',
      options: [
        { l: 'A', t: 'De video op autoplay zetten' },
        { l: 'B', t: 'Een beschrijvende titel op het iframe zodat een schermlezer weet wat erin staat: title="Video: rondleiding door de Vermeer-tentoonstelling"' },
        { l: 'C', t: 'De video op maximale kwaliteit zetten' },
        { l: 'D', t: 'Het YouTube-logo verbergen' }
      ],
      correct: 'B',
      explanation: 'Een iframe zonder titel is voor een schermlezer een raadsel. De gebruiker hoort alleen "iframe" zonder te weten wat erin zit. Autoplay (A) is juist een toegankelijkheidsprobleem. Kwaliteit (C) en logo (D) zijn cosmetisch.'
    },
    {
      id: 18,
      svg: 'bannerText',
      scenario: 'De grafisch ontwerper levert een banner aan voor de homepage: een afbeelding met daarin de tekst "Zomerprogramma 2026 \u2014 Ontdek onze activiteiten". Wat is het probleem?',
      options: [
        { l: 'A', t: 'De afbeelding is te groot voor mobiel' },
        { l: 'B', t: 'Tekst in een afbeelding kan niet worden vergroot door gebruikers die inzoomen, wordt niet voorgelezen door schermlezers (tenzij er alt-tekst is), en is niet vertaalbaar' },
        { l: 'C', t: 'Niets, banners zijn altijd afbeeldingen' },
        { l: 'D', t: 'De tekst moet in een ander lettertype' }
      ],
      correct: 'B',
      explanation: 'Tekst die in een afbeelding is "gebakken" kan niet worden aangepast: niet vergroot, niet voorgelezen, niet vertaald, niet geselecteerd. Gebruik waar mogelijk echte HTML-tekst over de afbeelding. Als dat niet kan, zorg dan minimaal voor een alt-tekst die de volledige tekst uit de afbeelding bevat.'
    },
    {
      id: 19,
      svg: 'accordion',
      scenario: 'Op de FAQ-pagina staan 15 vragen in een accordeon. Elke vraag is een klikbaar element dat het antwoord ontvouwt. Wat moet je controleren als redacteur?',
      options: [
        { l: 'A', t: 'Of de vragen als koppen zijn gemarkeerd, niet als gewone tekst' },
        { l: 'B', t: 'Of de vragen genoeg opvallen' },
        { l: 'C', t: 'Of er niet te veel vragen zijn' },
        { l: 'D', t: 'Of de antwoorden niet te lang zijn' }
      ],
      correct: 'A',
      explanation: 'Een schermlezergebruiker navigeert via koppen. Als de accordeon-vragen niet als koppen (h2 of h3) zijn gemarkeerd, kan de gebruiker niet snel door de lijst scannen. Gebruik geen vet (B) om ze te laten opvallen \u2014 dat geeft geen structuur.'
    },
    {
      id: 20,
      svg: 'language',
      scenario: 'Je plakt een tekst in het CMS. In de broncode zie je dat er drie alinea\'s in \u00e9\u00e9n <p>-element staan, gescheiden door <br>-tags. Waarom is dat een probleem?',
      options: [
        { l: 'A', t: 'Het ziet er visueel anders uit' },
        { l: 'B', t: 'Een schermlezer behandelt het als \u00e9\u00e9n lange alinea en kan niet per alinea navigeren \u2014 de structuur gaat verloren' },
        { l: 'C', t: '<br>-tags zijn verouderd' },
        { l: 'D', t: 'Google straft je af voor het gebruik van <br>' }
      ],
      correct: 'B',
      explanation: 'Elk los tekstblok hoort in een eigen <p>-element. Als je <br><br> gebruikt om visueel ruimte te maken, ziet het er hetzelfde uit, maar voor een schermlezer is het \u00e9\u00e9n doorlopende tekst. De gebruiker kan niet per alinea navigeren. Dit zagen we bij meerdere museumwebsites, vooral in het footer-contactblok en bij langere paginateksten.'
    }
  ];

  /* ═══════════════════════════════════════════
     Quiz state
     ═══════════════════════════════════════════ */

  var cur = 0;
  var st = {};
  var currentScreen = 'welcome';

  function resetState() {
    cur = 0;
    st = {};
    Q.forEach(function (q) {
      st[q.id] = { sel: null, done: false, correct: false };
    });
  }
  resetState();

  function el(id) { return document.getElementById(id); }

  function scrollToQuiz() {
    var c = el('quizContainer');
    if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ═══════════════════════════════════════════
     Rendering
     ═══════════════════════════════════════════ */

  function showScreen(name) {
    currentScreen = name;
    var container = el('quizContainer');
    if (!container) return;
    var screens = container.querySelectorAll('.quiz__screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove('quiz__screen--active');
    }
    var target = container.querySelector('[data-screen="' + name + '"]');
    if (target) target.classList.add('quiz__screen--active');
    scrollToQuiz();
  }

  function renderWelcome() {
    return '<div class="quiz__screen quiz__screen--active" data-screen="welcome">' +
      '<div class="quiz__welcome"><div class="quiz__welcome-card">' +
      '<h2 class="quiz__welcome-title">' + t('title') + '</h2>' +
      '<p class="quiz__welcome-subtitle">' + t('subtitle') + '</p>' +
      '<div class="quiz__welcome-stats">' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">20</div><div class="quiz__welcome-stat-label">' + t('questions') + '</div></div>' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">~15 min</div><div class="quiz__welcome-stat-label">' + t('duration') + '</div></div>' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">' + t('levelValue') + '</div><div class="quiz__welcome-stat-label">' + t('level') + '</div></div>' +
      '<div class="quiz__welcome-stat"><div class="quiz__welcome-stat-num">A/B/C/D</div><div class="quiz__welcome-stat-label">' + t('selectType') + '</div></div>' +
      '</div>' +
      '<ul class="quiz__welcome-features">' + t('welcomeFeatures') + '</ul>' +
      '<button class="quiz__btn quiz__btn--start" id="quizStartBtn">' + t('startBtn') + '</button>' +
      '</div></div></div>';
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
      '<div class="quiz__breakdown-item"><div class="quiz__breakdown-num quiz__breakdown-num--green" id="quizCorrectCount">0</div><div class="quiz__breakdown-label">' + t('perfect') + '</div></div>' +
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
      '</div>' +
      '<div class="quiz__email-cta">' +
      '<h3 class="quiz__share-title">' + t('emailCtaTitle') + '</h3>' +
      '<p class="quiz__email-cta-desc">' + t('emailCtaDesc') + '</p>' +
      '<div class="quiz__email-form" id="quizEmailForm">' +
      '<form id="quiz-email-form" class="pa-form" onsubmit="event.preventDefault(); paFormSubmit(this, { bron: \'quiz museum\', successMessage: \'Verstuurd! Je ontvangt de tips per e-mail.\' });">' +
      '<input type="hidden" name="quiz_type" value="museum" />' +
      '<input type="hidden" name="quiz_score" id="quizEmailScore" value="" />' +
      '<input type="hidden" name="quiz_correct" id="quizEmailCorrect" value="" />' +
      '<input type="hidden" name="quiz_total" id="quizEmailTotal" value="" />' +
      '<input type="text" name="_gotcha" style="display:none" aria-hidden="true" tabindex="-1" />' +
      '<div class="pa-form__row">' +
      '<label for="quiz-email" class="sr-only">E-mailadres</label>' +
      '<input type="email" id="quiz-email" name="email" required autocomplete="email" placeholder="Je e-mailadres" class="pa-form__input" />' +
      '<button type="submit" class="pa-form__btn">Verstuur</button>' +
      '</div>' +
      '<div role="status" aria-live="polite"></div>' +
      '</form>' +
      '</div>' +
      '</div>' +
      '</div></div></div>';
  }

  function renderReview() {
    return '<div class="quiz__screen" data-screen="review">' +
      '<div class="quiz__review">' +
      '<div class="quiz__review-header"><h2 class="quiz__review-title">' + t('reviewTitle') + '</h2><button class="quiz__btn quiz__btn--retake" id="quizRetakeBtn2">' + t('retakeBtn') + '</button></div>' +
      '<div id="quizReviewList"></div>' +
      '</div></div>';
  }

  function renderAll() {
    var container = el('quizContainer');
    if (!container) return;
    container.innerHTML = renderWelcome() + renderPlay() + renderResults() + renderReview();

    var startBtn = el('quizStartBtn');
    if (startBtn) startBtn.addEventListener('click', startQuiz);
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
      if (s.done && s.correct) d.classList.add('quiz__dot--perfect');
      if (s.done && !s.correct) d.classList.add('quiz__dot--wrong');
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

    var area = el('quizQuestionArea');
    if (!area) return;

    var html = '<div class="quiz__question-header">' +
      '<span class="quiz__question-number">' + t('questionOf').replace('{0}', q.id).replace('{1}', Q.length) + '</span>' +
      '</div>';

    // SVG illustration
    if (q.svg && SVG[q.svg]) {
      html += '<div class="quiz__illustration">' + SVG[q.svg] + '</div>';
    }

    html += '<div class="quiz__scenario">' + q.scenario + '</div>';

    // Options (single-select radio style)
    html += '<div class="quiz__options" id="quizOptions" role="radiogroup" aria-label="Antwoordopties">';
    q.options.forEach(function (o) {
      var c = 'quiz__option';
      var isCorrectOption = Array.isArray(q.correct) ? q.correct.indexOf(o.l) !== -1 : o.l === q.correct;
      if (s.done) {
        c += ' quiz__option--locked';
        if (isCorrectOption) c += ' quiz__option--correct';
        if (o.l === s.sel && !isCorrectOption) c += ' quiz__option--wrong';
      } else if (o.l === s.sel) {
        c += ' quiz__option--selected';
      }
      var isSelected = o.l === s.sel;
      html += '<button class="' + c + '" data-letter="' + o.l + '"' +
        ' role="radio" aria-checked="' + (isSelected ? 'true' : 'false') + '">' +
        '<span class="quiz__option-letter">' + o.l + '</span>' +
        '<span class="quiz__option-text">' + o.t + '</span>' +
        '</button>';
    });
    html += '</div>';

    // Actions
    html += '<div class="quiz__actions">';
    if (!s.done) {
      html += '<button class="quiz__btn quiz__btn--check" id="quizCheckBtn"' + (s.sel === null ? ' disabled' : '') + '>' + t('checkBtn') + '</button>';
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
      var badgeLabel = s.correct ? t('perfect') : t('incorrect');
      var badgeClass = s.correct ? 'perfect' : 'wrong';
      html += '<span class="quiz__result-badge quiz__result-badge--' + badgeClass + '">' + badgeLabel + '</span>';
    }
    html += '</div>';

    // Explanation
    var expClass = 'quiz__explanation';
    if (s.done) {
      expClass += ' quiz__explanation--show';
      expClass += s.correct ? ' quiz__explanation--correct' : ' quiz__explanation--wrong';
    }
    html += '<div class="' + expClass + '">' + q.explanation + '</div>';

    area.innerHTML = html;
    updateDots();
    bindQuestionEvents();
  }

  function bindQuestionEvents() {
    var options = el('quizOptions');
    if (options) {
      var btns = options.querySelectorAll('.quiz__option');
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
          var q = Q[cur];
          var s = st[q.id];
          if (s.done) return;
          var letter = this.getAttribute('data-letter');

          // Deselect all
          var allBtns = options.querySelectorAll('.quiz__option');
          for (var j = 0; j < allBtns.length; j++) {
            allBtns[j].classList.remove('quiz__option--selected');
            allBtns[j].setAttribute('aria-checked', 'false');
          }

          // Select this one
          s.sel = letter;
          this.classList.add('quiz__option--selected');
          this.setAttribute('aria-checked', 'true');

          var ck = el('quizCheckBtn');
          if (ck) ck.disabled = false;
        });
      }
    }

    var checkBtn = el('quizCheckBtn');
    if (checkBtn) checkBtn.addEventListener('click', checkAnswer);
    var nextBtn = el('quizNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', goNext);
    var prevBtn = el('quizPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    var finishBtn = el('quizFinishBtn');
    if (finishBtn) finishBtn.addEventListener('click', finish);
  }

  /* ═══════════════════════════════════════════
     Quiz Logic
     ═══════════════════════════════════════════ */

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
    s.correct = Array.isArray(q.correct) ? q.correct.indexOf(s.sel) !== -1 : (s.sel === q.correct);
    renderQuestion();
  }

  function goNext() {
    if (cur < Q.length - 1) { cur++; renderQuestion(); scrollToQuiz(); }
  }

  function goPrev() {
    if (cur > 0) { cur--; renderQuestion(); scrollToQuiz(); }
  }

  function goTo(i) {
    cur = i;
    renderQuestion();
    scrollToQuiz();
  }

  function finish() {
    var correct = 0, wrong = 0;
    Q.forEach(function (q) {
      var s = st[q.id];
      if (!s.done) { wrong++; s.correct = false; return; }
      if (s.correct) correct++;
      else wrong++;
    });

    var sc = Math.round((correct / Q.length) * 100);

    el('quizCorrectCount').textContent = correct;
    el('quizWrongCount').textContent = wrong;
    el('quizScorePct').textContent = sc + '%';

    var ring = el('quizScoreRing');
    var circ = 2 * Math.PI * 65;
    var off = circ - (sc / 100) * circ;

    ring.style.strokeDasharray = circ;
    ring.style.strokeDashoffset = circ;

    if (sc >= 90) {
      ring.style.stroke = 'var(--correct, #34d399)';
      el('quizResultsSubtitle').textContent = t('resultsExcellent');
    } else if (sc >= 70) {
      ring.style.stroke = 'var(--correct, #34d399)';
      el('quizResultsSubtitle').textContent = t('resultsGood');
    } else if (sc >= 45) {
      ring.style.stroke = 'var(--warning, #fbbf24)';
      el('quizResultsSubtitle').textContent = t('resultsFair');
    } else {
      ring.style.stroke = 'var(--wrong, #f87171)';
      el('quizResultsSubtitle').textContent = t('resultsNeedsWork');
    }

    // Fill hidden fields for email form
    var scoreField = el('quizEmailScore');
    var correctField = el('quizEmailCorrect');
    var totalField = el('quizEmailTotal');
    if (scoreField) scoreField.value = sc + '%';
    if (correctField) correctField.value = correct;
    if (totalField) totalField.value = total;

    // Share functionality
    var quizUrl = 'https://www.properaccess.nl/tools/quiz-museum/';
    var shareUrl = quizUrl + '?score=' + sc;
    var shareMsg = t('shareText').replace('{0}', sc);

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

    var liBtn = el('quizShareLinkedIn');
    if (liBtn) {
      liBtn.addEventListener('click', function () {
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl), '_blank', 'width=600,height=500');
      });
    }

    var xBtn = el('quizShareX');
    if (xBtn) {
      xBtn.addEventListener('click', function () {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareMsg) + '&url=' + encodeURIComponent(shareUrl), '_blank', 'width=600,height=500');
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

    Q.forEach(function (q) {
      var s = st[q.id];
      var resLabel = s.correct ? t('perfect') : t('incorrect');
      var resClass = s.correct ? 'perfect' : 'wrong';
      var item = document.createElement('div');
      item.className = 'quiz__review-item quiz__review-item--' + resClass;

      var optionsHtml = '';
      q.options.forEach(function (o) {
        var isCorrect = Array.isArray(q.correct) ? q.correct.indexOf(o.l) !== -1 : o.l === q.correct;
        var wasSelected = o.l === s.sel;
        var c = 'quiz__review-option';
        if (isCorrect) c += ' quiz__review-option--correct';
        else if (wasSelected) c += ' quiz__review-option--wrong';
        var marker = isCorrect ? '\u2713' : wasSelected ? '\u2717' : o.l;
        var markerLabel = isCorrect ? 'Juist' : wasSelected ? 'Fout' : o.l;
        optionsHtml += '<div class="' + c + '"><span class="quiz__review-marker" aria-hidden="true">' + marker + '</span><span class="sr-only">' + markerLabel + ': </span><span>' + o.t + '</span></div>';
      });

      // Include SVG in review
      var svgHtml = (q.svg && SVG[q.svg]) ? '<div class="quiz__review-svg">' + SVG[q.svg] + '</div>' : '';

      item.innerHTML = '<button class="quiz__review-item-header" aria-expanded="false">' +
        '<span class="quiz__review-item-num">Q' + q.id + '</span>' +
        '<span class="quiz__review-badge quiz__review-badge--' + resClass + '">' + resLabel + '</span>' +
        '<span class="quiz__review-chevron" aria-hidden="true">\u25b6</span>' +
        '</button>' +
        '<div class="quiz__review-item-body" role="region">' +
        svgHtml +
        '<div class="quiz__review-scenario">' + q.scenario + '</div>' +
        optionsHtml +
        '<div class="quiz__review-explanation">' + q.explanation + '</div>' +
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

  /* ═══════════════════════════════════════════
     Init
     ═══════════════════════════════════════════ */

  function init() {
    var container = el('quizContainer');
    if (!container) return;
    renderAll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
