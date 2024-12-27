export default function (md) {
  // Store the default link renderer
  const defaultLinkRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  // Override the link_open renderer
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const href = tokens[idx].attrs.find((attr) => attr[0] === "href")[1];
    const isExternal = href.startsWith("http") || href.startsWith("https");

    let link = defaultLinkRender(tokens, idx, options, env, self);

    if (isExternal) {
      link = link.replace("<a", '<a class="external-link"');
    }

    return link;
  };

  // Store the default link_close renderer
  const defaultLinkCloseRender =
    md.renderer.rules.link_close ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  // Override the link_close renderer
  md.renderer.rules.link_close = function (tokens, idx, options, env, self) {
    const openToken = tokens[idx - 2];
    const href = openToken.attrs.find((attr) => attr[0] === "href")[1];
    const isExternal = href.startsWith("http") || href.startsWith("https");

    if (isExternal) {
      return '<i class="ph ph-arrow-up-right"></i></a>';
    }

    return defaultLinkCloseRender(tokens, idx, options, env, self);
  };
}
