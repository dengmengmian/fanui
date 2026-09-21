# Authentication gateway

Use this pattern for sign-in, registration, password recovery, one-time-code verification, and session-gated entry. Authentication is a critical gateway into another task, not a generic settings form or a decorative marketing surface.

## Preserve the interrupted task

- Preserve the requested destination and action intent through sign-in, registration, and account recovery. After success, return to the safe in-product destination instead of always sending the user to a generic home page.
- Resolve session/bootstrap state before redirecting or showing an authorization failure. Do not flash the wrong role, logged-out UI, or a dead-end page while identity is still loading.
- Keep authentication identity, business role, organization, and workspace context distinct. If an account realm or role is immutable, explain that fact before submission and require an explicit choice rather than a risky default.
- Never imply that a visual role switch changes the authenticated account domain when the product treats those identities as separate.

## Flow hierarchy

- Give each state one dominant task: sign in, create account, verify code, recover password, or confirm success.
- Switching between sign-in and registration is secondary. Switching credential methods is an alternate view of the same task and should use correctly wired tabs or an equally clear control.
- Present credential methods as one segmented control or tab surface, not as adjacent cards nested inside another container. Use fill, text contrast, or an indicator for the active method. Do not use validation, error, or brand-colored outlines to indicate selection; reserve outlines for `:focus-visible` and keep focus styling independent from selection.
- Keep policy consent adjacent to the action it governs. Links to terms and privacy remain independently reachable without toggling consent.
- Preserve entered values only when doing so is safe and useful. Explain destructive resets between credential methods or account realms.

## Form and credential behavior

- Every control has a programmatic label and the appropriate `type`, `name`, `autocomplete`, `inputmode`, and length constraints. Placeholder text is supplementary, never the only label.
- A password visibility control is a named button with observable pressed/state text such as "显示密码" and "隐藏密码"; the icon alone is not its accessible name.
- One-time-code fields support paste, numeric/mobile keyboards where applicable, resend countdown, expiry, rate-limit, and delivery-failure states. Do not claim that a code was sent when delivery failed.
- Associate field errors and instructions with the field, announce submission errors, focus the first invalid field, and preserve the user's valid input.
- Submission exposes pending/disabled state, blocks accidental duplicates, and distinguishes invalid credentials, existing account, expired code, rate limiting, network failure, and service failure.
- Verify browser autofill and password-manager behavior rather than fighting it with custom controls.

## Modal versus route

Use a modal only when authentication is a short interruption and the underlying destination should remain meaningful. Prefer a dedicated route or mobile sheet for long registration, recovery, legal consent, or flows that exceed the available viewport.

A modal authentication surface must:

- expose `role="dialog"`, `aria-modal="true"`, and a labelled title;
- move focus to a useful first control on open, maintain a focus trap while modal, support Escape when safe, and restore focus to the trigger on close;
- make the background inert to pointer and keyboard interaction;
- remain inside the viewport at 375px-class width, 200% zoom, text expansion, and with the mobile keyboard visible;
- keep the current action and recovery path reachable without document-level horizontal scrolling.

## Session and delivery truth

- Do not infer secure session architecture from a polished authentication UI. Record whether credentials/session tokens are script-readable, cookie-bound, revocable, expired, and protected against the relevant request-forgery and cross-origin risks; route security findings to the host security owner.
- Do not infer authenticated SSR from the framework name. Verify what the server can know, what useful HTML it renders before hydration, and whether browser-only session state forces the protected experience back to client rendering.
- Public acquisition routes and private authenticated routes need an explicit route-level index policy. Authentication overlays must not accidentally make public content `noindex`, and private content must not become crawlable.

## Acceptance

Verify at least:

- keyboard-only completion, focus trap, Escape, close-focus restoration, and screen-reader name/role/state;
- sign-in, registration, credential-method switch, recovery, resend/expiry, validation, duplicate submission, and service failure;
- requested-destination restoration after success and safe fallback for an invalid external destination;
- autofill, password manager, pasted one-time code, Chinese/English input, 200% zoom, 390px and 375px widths, and mobile keyboard pressure;
- Light/Dark contrast, visible focus, reduced motion, and no sensitive values in logs, URLs, screenshots, or analytics.
