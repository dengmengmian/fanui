# Terminal TUI design and acceptance

Use this lane only when the user explicitly requests FanUI. A terminal TUI has a cell grid, terminal color capability, keyboard focus, and a host runtime contract. Treat the host's rendered interface and actual user tasks as evidence. Web pixels, CSS breakpoints, native window chrome, pointer targets, and card styling do not define a TUI.

## Establish the task and evidence

Record the primary task, current context, required actions, runtime states, supported terminal sizes/color modes, keyboard contract, and what can be observed. Distinguish source inspection, controlled rendered frames, and a real terminal session. A fixture can prove the current renderer's output; it cannot prove a successful live service interaction. Keep untested modes explicit.

Map the visible interface before changing it: persistent chrome, work area, input, transient decisions, secondary screens, and scroll owner. For each area, state which product fact owns it. Current status must come from actual runtime state; a progress or completion claim needs matching evidence.

## Hierarchy and density

Allocate rows and columns from the smallest supported terminal outward. Show current context, current activity or wait, actionable decisions, and final result clearly. Keep detailed traces, long output, and history reachable through a discoverable expansion or navigation path. Preserve the first useful error cause in the main view. A status line must not invent a step, duration, or successful outcome.

Use a small semantic set of text roles, status words, symbols, and color roles. Express failure, warning, selection, running, and completion with text or glyphs as well as color. Audit symbols in context: a single glyph reused for different roles requires an additional visible cue. Use whitespace, indentation, trees, and separators to express relationships; measure their row cost in populated and narrow states before adding them.

Streaming content must retain a stable reading position when possible. If a turn's semantic role is only known at completion, show an honest provisional state and verify that the transition does not lose the user's place. When the reader scrolls into history, new output must not unexpectedly pull the viewport away; provide a clear way to return to latest content.

## Focus, decisions, and input

Every keyboard-operable view needs visible focus and a discoverable exit path. Search/filter lists must keep the selected row visible as candidates or terminal dimensions change. A decision panel with long content must preserve access to its consequences, available actions, and current selection; scrolling the explanation must not hide the action being confirmed. For destructive or permission decisions, make the default and Enter/Esc meanings explicit. Do not assume Esc means the same action in every view.

Check the real command and input model: editing, multiline entry, completion, history, submission while busy, cancellation, and secondary screens. Verify keyboard-only completion of the primary task. Test mouse, clipboard, IME, and accessibility behavior when the host product claims or depends on them; do not infer support from the rendering library.

## Rendered acceptance

Use the product's supported size and color matrix, including its actual minimum, common working size, narrow/short resize, and large terminal. Inspect idle, running, waiting, empty, populated, long content, error, disabled, selected, and decision states where applicable. Verify that resizing preserves the selected item and primary action. Run a real PTY session for claims about startup, input, focus, color, and terminal behavior; use controlled frames for hard-to-trigger states and label them as such.

For review or audit, keep each issue tied to a reproducible task/state, rendered evidence, user impact, and source location when available. For implementation, close the loop with new rendered evidence at the affected sizes and states. A passing build or snapshot name alone is not visual acceptance.
