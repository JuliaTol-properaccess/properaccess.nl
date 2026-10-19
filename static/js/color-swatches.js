(() => {
  const hexPattern = /(^|[^\w-])(#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8}))(?![\w-])/gi;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (parent && !parent.closest("script, style, textarea, .pa-color-swatch")) textNodes.push(node);
  }

  for (const node of textNodes) {
    if (!hexPattern.test(node.nodeValue)) {
      hexPattern.lastIndex = 0;
      continue;
    }
    hexPattern.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    for (const match of node.nodeValue.matchAll(hexPattern)) {
      const prefix = match[1];
      const hex = match[2];
      const start = match.index;
      const prefixStart = start + (prefix ? 1 : 0);
      fragment.append(node.nodeValue.slice(lastIndex, prefixStart));

      const swatch = document.createElement("span");
      swatch.className = "pa-color-swatch";
      swatch.setAttribute("aria-hidden", "true");
      swatch.title = `Kleur ${hex}`;
      swatch.style.backgroundColor = hex;
      fragment.append(swatch, hex);
      lastIndex = prefixStart + hex.length;
    }
    fragment.append(node.nodeValue.slice(lastIndex));
    node.replaceWith(fragment);
  }
})();
