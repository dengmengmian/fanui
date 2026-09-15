# React + Tailwind implementation contract

Use this contract when the target is React + Tailwind CSS. The host repository's supported versions and build system remain authoritative.

## React

- Use TypeScript, function components, semantic HTML, and the host component primitives.
- Preserve server/client boundaries. Browser-only APIs must not run during SSR, and initial markup must not depend on viewport measurements.
- Keep state close to its owner. Do not mirror derivable props into state or add global state for local interaction.
- Prefer native controls. Custom controls must reproduce keyboard, focus, name, role, value, disabled, and error behavior.
- Reuse the host router, form, table, dialog, icon, and data-fetching conventions. Do not introduce a second UI library for one screen.
- Model variants with typed maps or a variant helper. Do not grow unbounded boolean props.

## Tailwind CSS

- Components consume semantic utilities mapped by `tokens/tailwind.css`; product values live behind CSS custom properties.
- Do not construct Tailwind class names dynamically, for example `bg-${tone}-500`. Use complete static class maps so extraction is deterministic.
- Use arbitrary values only for a genuinely one-off optical correction. Promote repeated, theme-dependent, or semantic values to tokens.
- Keep `className` readable. Extract a component or typed variant map when a repeated class group represents behavior or a stable visual role.
- Never use `!important` to bypass unclear ownership except for documented third-party integration boundaries.

## Layout

- Use Flexbox for one-dimensional flow and CSS Grid for genuine two-dimensional row/column alignment or spanning.
- Use semantic tables for tabular data and Absolute/Fixed only for overlays or deliberate layering.
- Preserve DOM reading order. CSS visual reordering must not create a conflicting keyboard or screen-reader sequence.
- Prefer intrinsic sizing, `min-width: 0`, wrapping, container pressure, and content-driven transformations over device-name branching.

## States and content

Implement loading, empty, error, permission-denied, disabled, selected, hover, focus-visible, and success states that materially exist in the product. Do not fabricate production data. Text expansion, Chinese/English mixing, long identifiers, and empty values must not break layout.

## Definition of done

Run the host typecheck/lint/tests, then apply `docs/implementation/accessibility.md`, `docs/implementation/testing.md`, and the relevant FanUI rendered checklist. Compilation is not visual acceptance.

