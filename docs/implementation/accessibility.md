# Accessibility contract

FanUI Web implementations target WCAG 2.2 Level AA unless the product contract requires more.

## Required behavior

- Use semantic landmarks, headings, lists, buttons, links, inputs, and tables before ARIA.
- Every task must work by keyboard. Focus order follows DOM/task order; focus is visible, not clipped, and restored after dialogs, drawers, or temporary panes close.
- Provide programmatic names, instructions, errors, status announcements, and relationships. Do not use placeholder text as the only label.
- Color is never the only status cue. Normal text targets 4.5:1 contrast; large text and essential UI graphics target 3:1.
- Pointer targets meet the WCAG 2.2 AA 24×24 CSS-pixel minimum or its spacing exception. FanUI primary phone controls normally use the stronger 40–44px class for practical touch use.
- Dialogs trap focus only while modal, expose a labelled title, support Escape where safe, and return focus to the trigger.
- Dynamic updates use live announcements only when users need them; avoid noisy status streams.
- Respect zoom/reflow, text spacing, reduced motion, forced colors, and OS/browser contrast preferences. Never disable zoom.
- Images have purposeful alternatives; decorative images use empty alternatives. Charts provide a text/table equivalent for decisions carried by the graphic.

## Verification

Automated checks catch only part of accessibility. Pair semantic/axe checks with keyboard-only completion, focus inspection, 200% zoom/reflow, both themes, and a screen-reader smoke test for primary flows.

