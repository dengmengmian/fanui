# Page Pattern Capsules

A Page Pattern Capsule is a compact, evidence-backed implementation guide for a recurring page or workflow pattern. It is more specific than a foundation and less prescriptive than a finished template.

Capsules capture why and when a pattern works. They must not copy proprietary layouts, assets, text, or exact styling from a reference product.

## Routing capsule

Start with the smallest row that covers the primary task, then open only its listed references plus shared foundations required by the Skill.

| Experience / task | Start with | Add when needed |
| --- | --- | --- |
| Product Website narrative | `docs/website/homepage.md`, `docs/website/hero.md` | navigation, product showcase, pricing, `docs/website/expression-profiles.md`, mobile |
| Documentation discovery or article | `docs/website/documentation.md` | navigation, mobile, code/local-scroll rules |
| Editorial index or article | `docs/website/editorial-blog.md`, `docs/website/editorial-visuals.md` | `docs/website/expression-profiles.md`, mobile |
| Pricing decision | `docs/website/pricing.md` | product evidence, mobile |
| Public marketplace/directory | `docs/website/public-marketplace.md` | navigation, authentication, mobile |
| Management or data application | `docs/web-app/archetypes.md`, `docs/web-app/app-shell.md` | workspace, authentication |
| Professional or AI workspace | `docs/web-app/archetypes.md`, `docs/web-app/workspace.md`, `docs/web-app/viewport-ownership.md` | mobile workspace, authentication |
| Desktop Application | `docs/desktop-app/classification.md`, `docs/desktop-app/native-shell.md` | desktop acceptance |

This table routes reading; it is not itself a page specification. If no row fits, classify the experience and task before borrowing the nearest pattern.

## Promotion threshold

Create a capsule only after the pattern has:

- appeared in at least two relevant implementations or one strong implementation plus reference evidence;
- survived Desktop/Mobile or native-window transformation where applicable;
- passed the FanUI checklist with no hard failure;
- demonstrated a reusable task or information-architecture benefit.

Otherwise keep it as a local design decision or candidate note.

## Schema

The machine-readable authority for this block is `schemas/pattern-capsule.schema.json`; keep the YAML field names and nesting unchanged.

```yaml
page_pattern_capsule:
  id: stable-kebab-case-id
  name: ...
  status: observed | candidate | validated | deprecated
  experience_families: [...]
  archetypes: [...]
  user_job: ...
  use_when: [...]
  avoid_when: [...]
  prerequisites: [...]
  hierarchy:
    primary_anchor: ...
    sequence: [...]
    supporting_regions: [...]
  required_content_and_state: [...]
  interaction_model: [...]
  responsive_or_window_transformations:
    wide: ...
    compact: ...
    mobile_or_minimum: ...
    replacement_access: [...]
  fidelity_requirements: [...]
  semantic_roles: [...]
  accessibility_contract: [...]
  content_truth_constraints: [...]
  known_failure_modes: [...]
  implementation_notes: [...]
  evidence:
    observed_sources: [...]
    fanui_snapshots: [...]
    validated_at: ...
  related_rules: [...]
```

## Capsule rules

- `use_when` and `avoid_when` are mandatory. A capsule without boundaries becomes a generic template.
- `required_content_and_state` lists the minimum credible content, including loading, empty, failure, permission, or approval states when relevant.
- Transformations describe changes in task structure, not only breakpoints.
- `replacement_access` is required whenever a persistent region collapses.
- Evidence distinguishes observed reference behavior from FanUI's interpretation.
- Implementation notes may recommend semantic structures but should not freeze framework-specific markup unless the capsule is explicitly framework-scoped.
- Deprecation records the replacement capsule or reason; do not silently mutate a stable pattern into a different job.

## Relationship to components

A page capsule may compose many host components and may produce no reusable component at all. Promote a component separately only after repeated behavior and API shape are stable. FanUI's goal is reusable judgment first, library growth second.
