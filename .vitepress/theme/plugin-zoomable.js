/**
 * markdown-it plugin: replace every markdown image with <ZoomableImage>.
 *
 * SSR-safe by construction — see the notes on each decision below. The short
 * version: the component owns the <img> (no slot), both attribute values are
 * escaped, and the tag is wrapped in <ClientOnly> so there is no server-rendered
 * markup for hydration to disagree with. Getting any of these wrong makes images
 * vanish in the production build while `npm run dev` looks perfectly fine.
 */

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function zoomablePlugin(md) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options)
    })

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // The component builds the <img> from a raw string, so `src` never passes
    // through Vite's asset pipeline. Relative paths would be emitted verbatim
    // and 404 in production, so leave them to the default renderer. Every image
    // in this repo is an absolute /images/... public-dir path, but a future
    // relative one must not break silently.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self)
    }

    // Props, not slot content: one source of truth for the <img>, so server and
    // client would render identical markup. Explicit closing tag rather than a
    // self-closing one — Vue's SSR-side parsing of markdown-emitted markup is
    // more reliable with it.
    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`
  }
}
