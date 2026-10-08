# Theme and token contract

FanUI themes have three layers. Do not collapse them into one palette.

## Stable contract

Semantic role names are the stable API: canvas, surface, text, border, brand action, focus, selection, status, overlay, shadow, and data-series roles. Components consume roles, never raw palette names such as `blue-600` or unexplained hex values.

Changing a product theme must not require rewriting component classes.

## Product override

Each product may override role values to express its brand. Preserve role meaning and required contrast. Brand color must not replace success, warning, danger, selection, or focus semantics.

Product overrides belong in one theme boundary, normally `[data-theme="light"]` and `[data-theme="dark"]`. Do not scatter overrides across components.

## Default theme

FanUI ships a restrained blue-neutral default theme so no-design-spec work has a coherent fallback. It is a fallback, not a mandatory AtomCode or product identity. When a product already has validated tokens, map them to the FanUI roles instead of replacing them.

Use `tokens/index.css` for the default Light/Dark values and `tokens/tailwind.css` for Tailwind v4 semantic utilities.

```css
@import "fanui/tokens/index.css";
@import "fanui/tokens/tailwind.css";
```

## Theme behavior

- A theme switch must preserve the same information architecture, task availability, content hierarchy, and network behavior. Theme controls appearance and component state styling; it must not silently select a different page implementation, fetch a different dataset, or remove a workflow. If those differences are intentional, model them as a product mode, experiment, or route with an explicit contract instead of calling them a theme.
- Preserve the host product's supported theme modes. In a partial maintenance task, do not add a theme switch or new mode without scope authority. If theme support is part of the requested implementation, support the contracted modes (commonly `light`, `dark`, and `system`) and store an explicit user choice when one exists.
- Apply the resolved mode to the root `data-theme` attribute before first paint to avoid a theme flash.
- Set `color-scheme` so native controls match the resolved theme.
- Test each supported mode; describe unsupported modes as outside the contract, rather than claiming they passed. When Dark mode is supported, do not obtain it by inverting colors.
- Keep focus, selection, disabled, hover, active, semantic status, chart, and overlay states distinct in both modes.
- Respect `prefers-reduced-motion`, `prefers-contrast`, and forced-colors where the host browser contract requires them.

## Integrating host component tokens

Verify where the installed library defines its variables before aliasing them. A root-level alias cannot resolve a variable defined only on a descendant such as `body`; the alias becomes invalid even though the library's own controls are colored correctly. For Tailwind v4, use `@theme inline` when semantic utilities must resolve the host variable at the consuming element. Base CSS should reference variables available at that element, or define aliases at the same theme scope.

Check computed background, text, border, selection, and focus colors on a real rendered page after integration. A successful bundle and a colored primary button do not prove that navigation, cards, or text tokens work. Record the failing rendered state before fixing a scope issue, then re-render the same state to verify the repair.

## Token promotion rule

A value becomes a token when it is shared, repeated, theme-dependent, or semantically meaningful. A truly local optical correction may remain local. Do not create a token for every pixel and do not repeat a system decision as arbitrary values.
