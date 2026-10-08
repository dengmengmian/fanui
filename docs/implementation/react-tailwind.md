# React + Tailwind implementation contract

Use this contract when the target is React + Tailwind CSS. The host repository's supported versions and build system remain authoritative.

## React

- Use TypeScript, function components, semantic HTML, and the host component primitives.
- Preserve server/client boundaries. Browser-only APIs must not run during SSR, and initial markup must not depend on viewport measurements.
- Treat SSR, server components, static generation, and client hydration as separate facts. Verify response HTML and session dependencies; do not claim an SSR benefit from framework choice or a rendering flag alone.
- Keep state close to its owner. Do not mirror derivable props into state or add global state for local interaction.
- Prefer native controls. Custom controls must reproduce keyboard, focus, name, role, value, disabled, and error behavior.
- Reuse the host router, form, table, dialog, icon, and data-fetching conventions. Do not introduce a second UI library for one screen.
- Model variants with typed maps or a variant helper. Do not grow unbounded boolean props.
- Split a page when one file simultaneously owns remote-data orchestration, workflow transitions, layout, and many local view components. Split at behavior and test boundaries, not at an arbitrary line-count threshold; do not fragment a cohesive component merely to make files shorter.

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

## Remote reads and operational authority

For stateful operational UI, distinguish initial loading, background refresh, a successful empty result, no search results, request failure, forbidden access, and stale retained data. A missing/failed response must not manufacture zero metrics or an empty collection. Retain previously successful data during refresh; if refresh fails, label its provenance and offer a scoped retry. A forbidden response or revoked read permission must hide cached sensitive content. Failure in a secondary module must not erase a successfully loaded primary object.

Align each query's enabled condition with that resource's read permission. Menu visibility and disabled buttons are presentation, not authorization; the server still checks identity, resource scope, reference ownership, and legal transitions. Do not automatically replace a conflict's base version and retry a business write. Show the changed facts and require a new decision.

For lists with supported query parameters, keep committed filters and pagination in the host router URL. Restore them on direct entry, browser navigation, and return from detail. Reset pagination when a filter changes, restore explicit defaults on reset, and include every result-affecting parameter in the cache key. Pass only declared API fields; do not describe filtering the current page as global search. Update multiple related URL fields atomically so one setter does not erase another.

Preserve domain distinctions: moderation state, transaction stage, temporal expiry, publication, and contract effect are separate dimensions. Map status labels and tones per domain, and render unknown values as neutral and diagnosable. Financial computed obligations, recorded external facts, and executed payments are different evidence; do not infer payment from a successful record write. These rules govern truthful presentation and host-contract verification, not permission to add new domains or payment features.

## Definition of done

Run the host typecheck/lint/tests, then apply `docs/implementation/accessibility.md`, `docs/implementation/testing.md`, and the relevant FanUI rendered checklist. Compilation is not visual acceptance.

For financial registers, display each record’s actual currency. Do not assign the parent object’s currency to all records, or present a direct total across mixed currencies without a supported conversion contract.
