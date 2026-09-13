# FanUI Desktop App Anti-patterns

## Web App in a Native Frame

**Symptom:** a generic responsive dashboard is wrapped in a desktop window and called native.

**Correction:** classify `desktop_app`, preserve native chrome, and design the command and window model before styling content panels.

## Fake Native Chrome

**Symptom:** custom traffic lights, caption buttons, title bars, or resize affordances imitate the operating system.

**Correction:** let the platform own native chrome unless deeper integration is required and preserves native behavior.

## Window-size Snapshot

**Symptom:** the UI is tuned for one screenshot and breaks when resized, maximized, restored, or shown full-screen.

**Correction:** define compact, normal, and large ownership rules for every persistent region and verify transitions continuously.

## Touch-sizing Desktop

**Symptom:** every row and command is inflated to phone touch dimensions despite precise pointer and keyboard input.

**Correction:** start with platform control metrics, then adjust for task frequency, localization, accessibility, and actual input devices.

## Hover-only Authority

**Symptom:** important actions or state exist only on hover.

**Correction:** keep essential state visible and expose commands through semantic controls and the native command/menu model.

## Pane Collapse Without Command

**Symptom:** narrow windows hide navigation, inspector, status, or runtime with no way to reopen it.

**Correction:** preserve a visible toolbar/menu command, shortcut, or equivalent replacement and maintain selection/focus across the transition.

## Custom Control Semantic Loss

**Symptom:** polished custom controls lose the correct role, value, state, keyboard behavior, or focus ring.

**Correction:** prefer native controls; otherwise reproduce semantic/input behavior and verify it with accessibility tooling.
