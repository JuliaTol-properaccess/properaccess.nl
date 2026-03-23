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

    icons: '<svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz__svg" aria-hidden="true"><rect x="12" y="14" width="96" height="62" rx="6" fill="#fff" stroke="#e5e7eb" stroke-width="1.5"/><circle cx="34" cy="44" r="12" fill="#A30D4B" opacity="0.12" stroke="#A30D4B" stroke-width="1.5"/><circle cx="60" cy="44" r="12" fill="#004050" opacity="0.12" stroke="#004050" stroke-width="1.5"/><circle cx="86" cy="44" r="12" fill="#1F2937" opacity="0.08" stroke="#1F2937" stroke-width="1.5"/><path d="M30 40v8l8-4z" fill="#A30D4B" opacity="0.6"/><rect x="56" y="40" width="8" height="8" rx="1" fill="#004050" opacity="0.5"/><circle cx="86" cy="44" r="4" fill="none" stroke="#1F2937" stroke-width="1.5" opacity="0.4"/><circle cx="86" cy="44" r="1.5" fill="#1F2937" opacity="0.4"/></svg>'
  };

  /* ═══════════════════════════════════════════
     UI translations
     ═══════════════════════════════════════════ */

  var UI = {
    title: 'Quiz: Toegankelijke content',
    subtitle: 'Test je kennis als webredacteur. Twintig praktijksituaties over koppen, afbeeldingen, links, tabellen en meer. Bij elke vraag leggen we uit waarom het antwoord is wat het is.',
    startBtn: 'Start quiz',
    questions: 'Vragen',
    duration: 'Geschatte tijd',
    selectType: 'Single-select',
    level: 'Niveau',
    levelValue: 'Webredactie',
    questionOf: 'Vraag {0} van {1}',
    checkBtn: 'Controleer antwoord',
    nextBtn: 'Volgende vraag',
    prevBtn: 'Vorige',
    finishBtn: 'Bekijk resultaten',
    perfect: 'Goed',
    incorrect: 'Fout',
    resultsTitle: 'Quiz voltooid',
    resultsExcellent: 'Toegankelijkheidskampioen — je weet precies wat je doet.',
    resultsGood: 'Goed op weg — met een paar tips ben je helemaal bij.',
    resultsFair: 'Basis is er — tijd om je kennis te verdiepen.',
    resultsNeedsWork: 'Geen zorgen — iedereen begint ergens.',
    reviewTitle: 'Antwoorden bekijken',
    retakeBtn: 'Opnieuw doen',
    reviewBtn: 'Antwoorden bekijken',
    scoreLabel: 'Score',
    quizLabel: 'Quiz',
    shareTitle: 'Deel je resultaat',
    shareText: 'Ik scoorde {0}% op de Webredactie Quiz van Proper Access! Test je eigen kennis:',
    copyLink: 'Kopieer link',
    copiedLink: 'Gekopieerd!',
    shareLinkedIn: 'Deel op LinkedIn',
    shareX: 'Deel op X',
    emailCtaTitle: 'Meer leren over toegankelijke content?',
    emailCtaDesc: 'Vul je e-mailadres in en we sturen je praktische tips over toegankelijke content publiceren.',
    welcomeFeatures: '<li>Uitslag direct te zien na de quiz</li><li>Bij elke vraag een uitgebreide uitleg</li><li>Deel je uitslag met je collega\'s</li>'
  };

  function t(key) { return UI[key] || key; }

  /* ═══════════════════════════════════════════
     Question data — 20 questions, single-select
     ═══════════════════════════════════════════ */

  var Q = [
    {
      id: 1,
      svg: 'image',
      scenario: 'Je plaatst deze banner op de pagina. Wat zet je in de alt-tekst?',
      options: [
        { l: 'A', t: '"Illustratie"' },
        { l: 'B', t: '"Banner met tekst over inschrijving"' },
        { l: 'C', t: '"Inschrijving sluit op 1 juli!"' },
        { l: 'D', t: 'Niets, de tekst is toch zichtbaar op de afbeelding' }
      ],
      correct: 'C',
      explanation: 'De volledige tekst die op de afbeelding staat, moet in de alt-tekst. Bezoekers die de afbeelding niet kunnen zien, missen anders de informatie. Nog beter: gebruik echte tekst in plaats van tekst-als-afbeelding.'
    },
    {
      id: 2,
      svg: 'imageLink',
      scenario: 'Een foto van een lezend kind is tegelijk een link naar de pagina "Boeken voor kinderen". Wat is de beste alt-tekst?',
      options: [
        { l: 'A', t: '"Kind dat een boek leest"' },
        { l: 'B', t: 'Lege alt-tekst (alt="")' },
        { l: 'C', t: '"Boeken voor kinderen"' },
        { l: 'D', t: '"Meer informatie hier"' }
      ],
      correct: 'C',
      explanation: 'Als een afbeelding een link is, beschrijft de alt-tekst de bestemming van de link — niet wat er op de foto staat. Een schermlezergebruiker wil weten waar de link naartoe gaat.'
    },
    {
      id: 3,
      svg: 'infographic',
      scenario: 'Je plaatst een infographic met veel cijfers en tekst op de pagina. Wat doe je?',
      options: [
        { l: 'A', t: 'Alt-tekst: "Infographic"' },
        { l: 'B', t: 'Alt-tekst: "Infographic met statistieken over afvalverwerking"' },
        { l: 'C', t: 'Alle informatie in de alt-tekst uitschrijven' },
        { l: 'D', t: 'Korte alt-tekst en een volledige tekstversie dichtbij de afbeelding op de pagina' }
      ],
      correct: 'D',
      explanation: 'Een infographic, organogram of schema bevat te veel informatie voor een alt-tekst (max 150 tekens). Geef een korte beschrijving als alt-tekst en zet de volledige inhoud als tekst op de pagina of link naar een uitgeschreven versie.'
    },
    {
      id: 4,
      svg: 'decorative',
      scenario: 'Je plaatst een sierrand als afbeelding op de pagina. Wat doe je met de alt-tekst?',
      options: [
        { l: 'A', t: '"Sierrand"' },
        { l: 'B', t: '"Decoratieve afbeelding"' },
        { l: 'C', t: 'Lege alt-tekst (alt="")' },
        { l: 'D', t: 'Je laat het alt-attribuut helemaal weg' }
      ],
      correct: 'C',
      explanation: 'Een lege alt-tekst (alt="") vertelt de schermlezer: sla deze afbeelding over. Geen alt-attribuut (D) is fout — dan leest de schermlezer de bestandsnaam voor, zoals "DSC_0847_final_v2.jpg".'
    },
    {
      id: 5,
      svg: 'logo',
      scenario: 'Welk statement over logo\'s is waar?',
      options: [
        { l: 'A', t: 'Een logo is altijd decoratief en heeft geen alt-tekst nodig' },
        { l: 'B', t: 'De alt-tekst van een logo moet het woord "logo" bevatten' },
        { l: 'C', t: 'De alt-tekst moet de tekst bevatten die in het logo staat' },
        { l: 'D', t: 'Een logo dat een link is naar de homepage heeft geen alt-tekst nodig' }
      ],
      correct: 'C',
      explanation: 'De alt-tekst van een logo bevat de tekst die erin staat, bijvoorbeeld "Gemeente Amsterdam". Als het logo ook een link is, mag je de bestemming toevoegen: "Gemeente Amsterdam — Ga naar de homepage."'
    },
    {
      id: 6,
      svg: 'heading',
      scenario: 'Je wilt een tekst visueel groter en opvallender maken. Wat doe je?',
      options: [
        { l: 'A', t: 'Je maakt er een H2 van' },
        { l: 'B', t: 'Je past de lettergrootte aan via de opmaakopties in je tekstbewerker' },
        { l: 'C', t: 'Je zet het in bold (B) en vergroot het lettertype' },
        { l: 'D', t: 'Je maakt er een H1 van, want die is het grootst' }
      ],
      correct: 'B',
      explanation: 'Tekst groter maken doe je via de opmaakopties in je tekstbewerker, niet met koppen of bold. Koppen (A, D) zijn er voor structuur, niet voor opmaak — een schermlezer gebruikt koppen om door de pagina te navigeren. Bold (C) is bedoeld voor nadruk op een woord of zin, niet om tekst visueel groter te maken.'
    },
    {
      id: 7,
      svg: 'headingStructure',
      scenario: 'Je pagina heeft deze koppen: H1, H2, H4, H2, H3. Wat is het probleem?',
      options: [
        { l: 'A', t: 'Er mogen geen twee H2\'s op een pagina' },
        { l: 'B', t: 'H4 komt na H2, maar H3 wordt overgeslagen' },
        { l: 'C', t: 'Er mag maar een H2 per pagina' },
        { l: 'D', t: 'Niets, dit is correct' }
      ],
      correct: 'B',
      explanation: 'Na een H2 hoort een H3 te komen, niet een H4. Het overslaan van een kopniveau maakt de structuur onduidelijk voor schermlezers die van kop naar kop navigeren. Meerdere H2\'s op een pagina mag wel — dat is juist hoe je parallelle secties aangeeft.'
    },
    {
      id: 8,
      svg: 'boldItalic',
      scenario: 'Een collega maakt tussenkopjes vet met de B-knop en zet de eerste alinea van elk artikel cursief met de I-knop. Wat gaat er mis?',
      options: [
        { l: 'A', t: 'Niets, dat is een gangbare opmaakstijl' },
        { l: 'B', t: 'Vet en cursief zijn voor nadruk op losse woorden of korte zinnen — niet voor hele alinea\'s of tussenkopjes' },
        { l: 'C', t: 'Je mag de B-knop wel gebruiken voor tussenkopjes, maar de I-knop niet voor alinea\'s' },
        { l: 'D', t: 'Je moet de B- en I-knoppen helemaal niet gebruiken' }
      ],
      correct: 'B',
      explanation: 'De B-knop is bedoeld om een woord of zin nadruk te geven, niet om structuur aan te brengen. Een tussenkopje maak je met een kopniveau (H2, H3).'
    },
    {
      id: 9,
      svg: 'list',
      scenario: 'Je moet een opsomming op de pagina zetten. Hoe doe je dat?',
      options: [
        { l: 'A', t: 'De tekst gewoon onder elkaar typen met streepjes en enters' },
        { l: 'B', t: 'De lijstknoppen gebruiken in je tekstbewerker' },
        { l: 'C', t: 'Elk punt als een aparte alinea opmaken' },
        { l: 'D', t: 'De tekst vetgedrukt maken zodat het opvalt' }
      ],
      correct: 'B',
      explanation: 'Gebruik altijd de lijstknoppen in je tekstbewerker. Die zorgen voor de juiste HTML-code. Een schermlezer herkent het dan als een lijst en vertelt de gebruiker hoeveel items erin staan.'
    },
    {
      id: 10,
      svg: 'link',
      scenario: 'Welke linktekst is het meest toegankelijk?',
      options: [
        { l: 'A', t: '"Klik hier"' },
        { l: 'B', t: '"Lees meer"' },
        { l: 'C', t: '"Bekijk de voorwaarden voor retourneren"' },
        { l: 'D', t: '"https://www.example.com/voorwaarden/retourneren"' }
      ],
      correct: 'C',
      explanation: 'Een schermlezergebruiker navigeert vaak van link naar link. "Klik hier" en "Lees meer" zeggen dan niets over de bestemming. Stel je voor dat je tien keer "Lees meer" achter elkaar hoort — welke is welke?'
    },
    {
      id: 11,
      svg: 'download',
      scenario: 'Op de pagina staat een knop om een rapport te downloaden. Welke tekst is het beste?',
      options: [
        { l: 'A', t: '"Download"' },
        { l: 'B', t: '"Download PDF-document"' },
        { l: 'C', t: '"Download jaarverslag 2024 (PDF)"' },
        { l: 'D', t: '"Klik hier"' }
      ],
      correct: 'C',
      explanation: 'Hoe specifieker, hoe beter. De gebruiker weet precies wat er gedownload wordt en in welk formaat. "Download" alleen zegt niets als er meerdere bestanden op de pagina staan.'
    },
    {
      id: 12,
      svg: 'newWindow',
      scenario: 'Je link opent in een nieuw tabblad. Wat moet je doen?',
      options: [
        { l: 'A', t: 'Niets, dat is normaal tegenwoordig' },
        { l: 'B', t: 'Vermeld in de linktekst dat het in een nieuw venster opent' },
        { l: 'C', t: 'Voeg alleen een icoontje toe van een vierkant met pijl' },
        { l: 'D', t: 'Zorg dat het niet in een nieuw venster opent' }
      ],
      correct: 'B',
      explanation: 'Een bezoeker met een schermlezer moet weten dat een nieuw venster wordt geopend. Vermeld dit in de linktekst, bijvoorbeeld: "Bekijk de voorwaarden (opent in nieuw venster)". Niets doen (A) is verwarrend — de terugknop werkt niet meer. Een icoontje alleen (C) helpt niet als het geen tekstalternatief heeft.'
    },
    {
      id: 13,
      svg: 'colorStatus',
      scenario: 'Je publiceert een tabel met de voortgang van projecten. De status wordt aangegeven met gekleurde bolletjes: groen = afgerond, oranje = in uitvoering, rood = vertraagd. Wat moet je verbeteren?',
      options: [
        { l: 'A', t: 'Niets, onder de tabel staat een legenda met uitleg' },
        { l: 'B', t: 'De statustekst ("Afgerond", "In uitvoering", "Vertraagd") toevoegen in de tabelcellen' },
        { l: 'C', t: 'De kleuren feller maken zodat het contrast hoger is' },
        { l: 'D', t: 'Deze tabel niet op de pagina plaatsen' }
      ],
      correct: 'B',
      explanation: 'Kleur mag nooit de enige manier zijn om informatie over te brengen. Een bezoeker die kleuren niet kan onderscheiden, ziet drie identieke bolletjes. Voeg altijd de status als tekst toe.'
    },
    {
      id: 14,
      svg: 'video',
      scenario: 'Je plaatst een YouTube-video op de pagina. YouTube heeft automatisch ondertiteling gegenereerd. Is dat voldoende?',
      options: [
        { l: 'A', t: 'Ja, automatische ondertiteling is tegenwoordig heel goed' },
        { l: 'B', t: 'Ja, als de ondertiteling standaard aanstaat' },
        { l: 'C', t: 'Nee, automatische ondertiteling bevat vaak fouten en moet gecontroleerd worden' },
        { l: 'D', t: 'Ja, als het de belangrijkste informatie maar overbrengt' }
      ],
      correct: 'C',
      explanation: 'Automatische ondertiteling maakt regelmatig fouten, vooral bij namen, vaktermen en zinnen die snel worden uitgesproken. Je moet de ondertiteling altijd controleren en corrigeren.'
    },
    {
      id: 15,
      svg: 'contrast',
      scenario: 'Je plaatst een banner met witte tekst over een foto. Wat moet je controleren?',
      options: [
        { l: 'A', t: 'Of de afbeelding niet te groot is voor de pagina' },
        { l: 'B', t: 'Of het contrast tussen de tekst en de achtergrond minimaal 4.5:1 is' },
        { l: 'C', t: 'Of de tekst in het midden van de afbeelding staat' },
        { l: 'D', t: 'Of de bestandsgrootte acceptabel is' }
      ],
      correct: 'B',
      explanation: 'Tekst over een foto is lastig, want het contrast verschilt per plek in de afbeelding. Een donker stuk kan voldoende contrast geven, maar een licht stuk niet. Gebruik een halftransparante overlay achter de tekst om overal voldoende contrast te garanderen.'
    },
    {
      id: 16,
      svg: 'table',
      scenario: 'Je wilt informatie in twee kolommen naast elkaar plaatsen: links tekst, rechts een afbeelding. Hoe doe je dat?',
      options: [
        { l: 'A', t: 'Een tabel met twee kolommen' },
        { l: 'B', t: 'Het kolommenblok in je tekstbewerker' },
        { l: 'C', t: 'De tekst korter maken zodat de afbeelding ernaast past' },
        { l: 'D', t: 'De elementen uitlijnen met spaties' }
      ],
      correct: 'B',
      explanation: 'Het kolommenblok in je tekstbewerker is de juiste keuze. Het maakt een visuele layout zonder de inhoud ontoegankelijk te maken. Een tabel (A) is bedoeld voor data — een schermlezer leest tabelcellen voor met rij- en kolomaanduiding, wat verwarrend is bij layout. De tekst korter maken (C) lost het probleem niet op. Spaties (D) worden in HTML genegeerd, dus de witruimte verdwijnt.'
    },
    {
      id: 17,
      svg: 'tableHeaders',
      scenario: 'Je plaatst een tabel met openingstijden op de pagina. Hoe maak je de eerste rij ("Dag" en "Openingstijden") toegankelijk?',
      options: [
        { l: 'A', t: 'De tekst vetgedrukt maken met de B-knop' },
        { l: 'B', t: 'Een andere achtergrondkleur geven zodat het opvalt' },
        { l: 'C', t: 'De eerste rij markeren als koprij in je tekstbewerker' },
        { l: 'D', t: 'Niets extra\'s, de tabel is al duidelijk' }
      ],
      correct: 'C',
      explanation: 'Markeer de eerste rij als koprij. Dan weet een schermlezer dat "Dag" en "Openingstijden" koppen zijn en kan hij bij elke cel vertellen bij welke kolom die hoort. Vetgedrukt of een kleurtje ziet er visueel uit als kop, maar geeft geen structuur.'
    },
    {
      id: 18,
      svg: 'colorChart',
      scenario: 'In een grafiek op je pagina worden vijf categorie\u00ebn onderscheiden met verschillende kleuren. Wat moet je toevoegen?',
      options: [
        { l: 'A', t: 'Niets, de kleuren zijn duidelijk genoeg' },
        { l: 'B', t: 'Een legenda met de kleurnamen' },
        { l: 'C', t: 'Extra visuele aanduidingen zoals arceringen of patronen' },
        { l: 'D', t: 'Alleen een alt-tekst bij de grafiek' }
      ],
      correct: 'C',
      explanation: 'Kleur mag niet de enige manier zijn om informatie te onderscheiden. Mensen met kleurenblindheid kunnen de categorie\u00ebn niet uit elkaar houden. Voeg arceringen, patronen of labels toe aan de grafiek.'
    },
    {
      id: 19,
      svg: 'language',
      scenario: 'Je Nederlandse pagina bevat een Engels citaat. Wat doe je?',
      options: [
        { l: 'A', t: 'Niets, het is maar een kort citaat' },
        { l: 'B', t: 'Je markeert het citaat met lang="en"' },
        { l: 'C', t: 'Je vertaalt het citaat naar het Nederlands' },
        { l: 'D', t: 'Je zet het citaat in cursief' }
      ],
      correct: 'B',
      explanation: 'Door de taal te markeren weet de schermlezer dat hij moet overschakelen naar Engelse uitspraak. Anders klinkt het als Nederlands met een raar accent. Vraag je developer om dit mogelijk te maken in je tekstbewerker.'
    },
    {
      id: 20,
      svg: 'icons',
      scenario: 'Je plaatst social media-iconen in je huisstijlkleur (lichtgroen) op een witte achtergrond. Welke eis geldt?',
      options: [
        { l: 'A', t: 'Iconen moeten een contrast hebben van minimaal 3:1 ten opzichte van de achtergrond' },
        { l: 'B', t: 'Iconen moeten een contrast van minimaal 4.5:1 hebben omdat het links zijn' },
        { l: 'C', t: 'Voor iconen gelden geen contrasteisen, net als voor logo\'s' },
        { l: 'D', t: 'Het hangt af van de grootte en herkenbaarheid' }
      ],
      correct: 'A',
      explanation: 'Niet-tekstuele elementen zoals iconen moeten een contrast van minimaal 3:1 hebben ten opzichte van de achtergrond. Dit valt onder WCAG-succescriterium 1.4.11. Het maakt niet uit hoe herkenbaar het icoon is.'
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
      '<form id="quiz-email-form" class="pa-form" onsubmit="event.preventDefault(); paFormSubmit(this, { bron: \'quiz webredactie\', successMessage: \'Verstuurd! Je ontvangt de tips per e-mail.\' });">' +
      '<input type="hidden" name="quiz_type" value="webredactie" />' +
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
      if (s.done) {
        c += ' quiz__option--locked';
        if (o.l === q.correct) c += ' quiz__option--correct';
        if (o.l === s.sel && o.l !== q.correct) c += ' quiz__option--wrong';
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
    s.correct = (s.sel === q.correct);
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

    // Share functionality
    var quizUrl = 'https://www.properaccess.nl/tools/quiz-webredactie/';
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
        var isCorrect = o.l === q.correct;
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
