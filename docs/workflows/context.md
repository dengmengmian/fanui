# Context and Brief Layers

FanUI decisions should begin with the product's own evidence. A local FanUI brief can clarify missing context, but it must not silently replace the host product's requirements, design system, content, or runtime constraints.

## Workflow routing

Choose one workflow from the requested outcome before loading page-family detail:

| Workflow | Outcome | Required context | Stop condition |
| --- | --- | --- | --- |
| `shape` | Resolve audience, task, evidence, states, constraints, and IA | This document; relevant host product sources | Deliver the brief; do not implement |
| `build` | Implement a new or approved surface | This document; pattern capsule; routed foundations and family pattern | Current rendered acceptance evidence |
| `review` | Evaluate an existing rendered experience | This document; `review-protocol.md`; applicable checklist/rubric | Evidence-backed findings; no edits unless separately requested |
| `audit` | Test measurable implementation quality | This document; `review-protocol.md`; implementation contracts | Results and findings; no edits unless separately requested |
| `adapt` | Transform an existing surface across viewport/window states | This document; pattern capsule; responsive or native-window guidance | Primary task and access preserved in target states |
| `polish` | Refine an already-correct concept | This document; applicable foundations; `review-protocol.md` | Bounded refinement with fresh acceptance evidence |

Use `docs/workflows/redesign.md` whenever the work creates a new visual world or materially changes structure. `Polish` is not an implicit redesign. Load only the family and implementation references routed by the selected workflow.

## Source priority

Use context in this order:

1. the current user request and explicit acceptance criteria;
2. host-repository product requirements, routes, analytics contracts, design tokens, components, content, tests, and accessibility constraints;
3. current rendered behavior and production evidence;
4. optional `.fanui/` briefs;
5. FanUI family defaults and calibration bands.

When sources conflict, record the conflict. Do not reinterpret a host contract merely to make a layout easier to produce. Security, legal, privacy, and accessibility constraints remain authoritative wherever they are defined.

## Optional `.fanui/` context

Repositories may keep durable design context in the following files. None is required, and their absence must not block work when equivalent host evidence exists.

```text
.fanui/
├── product.md
├── design.md
└── surfaces/
    ├── website.md
    ├── docs.md
    ├── app.md
    └── desktop.md
```

### `product.md`

Describe durable product facts:

- primary users and jobs;
- core value loops;
- product vocabulary and object model;
- trust, privacy, compliance, and content-truth constraints;
- route, analytics, conversion, and business-critical behavior;
- facts that must never be fabricated.

### `design.md`

Describe shared design language:

- brand character and intended emotional register;
- existing tokens, type, icon, motion, and component sources;
- accessibility and supported-platform requirements;
- accepted and rejected visual patterns;
- theme and localization requirements.

### `surfaces/*.md`

Describe only the delta for one experience family or route group:

- experience family and archetype;
- primary task, action, and current context;
- page-specific hierarchy and evidence;
- responsive or native-window transformations;
- known exceptions and acceptance states.

Do not duplicate the full product or design brief in each surface file. A surface brief narrows shared context; it does not fork it.

## Working brief

Before substantial work, resolve the available evidence into a compact working brief:

```yaml
fanui_brief:
  sources:
    host_requirements: [...]
    host_design_system: [...]
    fanui_context: [...]
  experience: website | documentation | editorial | pricing | web_app | desktop_app
  primary_archetype: ...
  change_mode: greenfield | preserve | overhaul
  primary_user: ...
  core_value_loop: ...
  primary_task: ...
  primary_action: ...
  current_context: ...
  required_content: [...]
  protected_contracts: [...]
  target_states: [...]
  evidence_plan: [...]
  unknowns: [...]
```

Also retain the execution routing fields used by the Skill:

```yaml
workflow_context:
  workflow: shape | build | review | audit | adapt | polish
  experience: website | documentation | editorial | pricing | web_app | desktop_app
  primary_task: ...
  brief_read: true | false
  change_mode: greenfield | preserve | overhaul
  expression_profile: quiet | balanced | expressive
  evidence_available: [...]
  unresolved_decisions: [...]
```

The three change modes are defined in `docs/workflows/redesign.md`. `greenfield` means there is no incumbent surface contract to preserve; `preserve` includes compatible extensions; `overhaul` requires explicit authority to replace structure or visual direction.

`unknowns` must remain unknown until verified. Do not fill gaps with invented customer quotes, performance claims, pricing, usage statistics, compliance badges, or operational data.

## Context maintenance

- Keep durable facts separate from one-off implementation decisions.
- Date facts that can expire and link them to a source when possible.
- Update the host source first when it is the authority; do not create a contradictory `.fanui/` copy.
- Treat screenshots as evidence of a state, not as a complete specification.
- Re-resolve the brief after material requirement, route, content, or design-system changes.
