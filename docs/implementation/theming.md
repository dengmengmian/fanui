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

- Support `light`, `dark`, and `system`; store an explicit user choice when one exists.
- Apply the resolved mode to the root `data-theme` attribute before first paint to avoid a theme flash.
- Set `color-scheme` so native controls match the resolved theme.
- Test both modes; do not obtain Dark mode by inverting colors.
- Keep focus, selection, disabled, hover, active, semantic status, chart, and overlay states distinct in both modes.
- Respect `prefers-reduced-motion`, `prefers-contrast`, and forced-colors where the host browser contract requires them.

## Token promotion rule

A value becomes a token when it is shared, repeated, theme-dependent, or semantically meaningful. A truly local optical correction may remain local. Do not create a token for every pixel and do not repeat a system decision as arbitrary values.

