# Redesign Workflow

A redesign changes visual or interaction decisions without granting permission to break product contracts. Classify the change before editing and write down the protection contract for every existing surface.

## Change modes

### Greenfield

Use when no meaningful production behavior or visual contract exists.

- Establish the experience family, archetype, information model, responsive behavior, and acceptance states.
- Reuse host tokens and primitives when they already exist elsewhere in the product.
- Do not invent claims or operational data merely to make the concept look complete.

### Preserve

Use for visual refreshes, polish, migrations, and bounded improvements where existing product behavior remains authoritative.

- Preserve routes, information architecture, content meaning, task order, analytics events, form contracts, keyboard paths, SEO metadata, and accessibility outcomes unless the user explicitly changes them.
- Prefer local visual and structural improvements over wholesale replacement.
- Compare before and after at equivalent routes, states, viewports, themes, and locales.

### Overhaul

Use when the user explicitly authorizes a substantial change to structure, interaction, or design direction.

- State which contracts may change and which remain protected.
- Map old routes, tasks, content, events, and states to their new equivalents.
- Preserve continuity through redirects, migration behavior, replacement commands, or documented removals.
- An overhaul is not permission to discard accessibility, truth, telemetry, or platform/runtime obligations.

When intent is ambiguous, default an existing product to `preserve`. A broad request such as “make it modern” does not itself authorize an overhaul.

## Protection contract

Capture the contract before implementation:

```yaml
redesign_contract:
  mode: preserve
  protected:
    routes: [...]
    navigation_and_ia: [...]
    content_meaning: [...]
    forms_and_data: [...]
    analytics: [...]
    seo_and_structured_data: [...]
    accessibility: [...]
    keyboard_and_commands: [...]
    native_runtime_behavior: [...]
  authorized_changes: [...]
  migrations: [...]
  explicit_removals: [...]
  before_after_evidence: [...]
```

Empty fields are acceptable only when not applicable. “Unknown” is preferable to an assumed contract.

## Required checks

### Routes and navigation

- Existing inbound links continue to resolve or have intentional redirects.
- Navigation renames do not silently remove task access.
- Mobile drawers, selectors, and collapsed desktop panes retain complete replacement access.

### Content, data, and forms

- Required content and legal text survive the redesign.
- Labels preserve domain meaning.
- Form names, validation, submission, error, loading, success, and recovery states remain functional.
- Examples are explicitly fictional or are traceable to a supplied source.

### Analytics and conversion

- Event names, required properties, consent behavior, and conversion boundaries are preserved or deliberately migrated.
- A visual change does not create duplicate events or move tracking ahead of meaningful user action.

### SEO and public delivery

- Public routes preserve or intentionally migrate title, description, canonical, robots, structured data, and response behavior.
- Visible facts and structured data agree.
- Private and authenticated routes keep their intended indexing policy.

### Accessibility and runtime

- Semantic structure, names, focus order, keyboard operation, announcements, contrast, reduced motion, and error recovery are preserved or improved.
- Desktop Apps retain native commands, window behavior, focus, restoration, system appearance, and platform conventions.

## Redesign completion

A redesign is not complete until:

1. the protection contract has been checked against the implementation;
2. before/after evidence covers materially affected routes and states;
3. changed contracts have migration or removal evidence;
4. the normal FanUI review and finish gate has returned `ship`.

