# Review, Audit, and Finish Protocol

FanUI separates design judgment, implementation correctness, and release disposition. A single “looks good” pass cannot establish all three.

## Roles and independence

- **Author** implements or revises the surface.
- **Design reviewer** evaluates hierarchy, calibration, experience fit, responsive/window adaptation, content truth, and rendered quality.
- **Implementation auditor** checks product contracts, semantics, accessibility, supported environments, behavior, and test evidence.
- **Finish reviewer** reads both findings, inspects current evidence, and issues the disposition.

For substantial work, the finish reviewer must be independent of the authoring pass: a separate agent, reviewer, or clean review context that did not make the implementation decisions. Small low-risk changes may combine design review and implementation audit, but must still distinguish their findings.

## Shared input contract

Every review receives:

```yaml
review_input:
  working_brief: path_or_inline
  redesign_contract: path_or_not_applicable
  routes_and_states: [...]
  supported_viewports_or_windows: [...]
  themes: [...]
  locales: [...]
  source_revision: ...
  changed_files: [...]
  rendered_snapshots: [...]
  behavior_and_accessibility_results: [...]
  known_limitations: [...]
```

Missing evidence is reported as missing. Reviewers must not infer a pass from a build log, a single screenshot, or an author's assertion.

## Design review

The design review uses `eval/checklist.md` and, for major surfaces, `eval/rubric.md`.

Output:

```yaml
design_review:
  scope: [...]
  score: 0-100 | not_scored
  hard_failures: [...]
  findings:
    - id: stable_finding_id
      severity: P0 | P1 | P2 | P3
      evidence: snapshot_or_source_reference
      issue: ...
      expected: ...
  strengths: [...]
  evidence_gaps: [...]
```

Rendered screenshots remain the visual authority. The review must compare equivalent states rather than mixing loading, empty, and populated evidence.

## Implementation audit

The audit checks the implementation behind the pixels:

- route, navigation, form, data, analytics, SEO, and redesign contracts;
- semantic HTML or native semantics, accessible names and state, focus, keyboard, pointer, and recovery behavior;
- responsive overflow, replacement access, native window behavior, themes, localization, and supported engines;
- deterministic tests and the provenance of displayed content/data;
- whether current snapshots correspond to the current source revision.

Output:

```yaml
implementation_audit:
  contracts_checked: [...]
  commands_and_tests: [...]
  passed: [...]
  findings: [...]
  evidence_gaps: [...]
```

## Snapshot and trace contract

Each acceptance snapshot or trace should record enough context to reproduce it:

```yaml
evidence:
  id: ...
  source_revision: git_sha_or_source_hash
  route_or_window: ...
  state_and_fixture: ...
  viewport_or_window_size: ...
  browser_engine_or_platform: ...
  theme: ...
  locale: ...
  captured_at: ...
  artifact: ...
  automation_or_manual: ...
```

Evidence becomes stale after a relevant source, fixture, token, font, route, theme, or environment change. Stale evidence can explain history but cannot approve the current implementation.

Keep a finding trace with stable IDs and one of: `open`, `fixed`, `accepted_with_reason`, or `not_reproducible`. A fixed finding links to the evidence that demonstrates closure.

The final machine-readable report uses `schemas/review-report.schema.json`. Design review and implementation audit may keep their separate working blocks, but the finish reviewer normalizes their findings into that schema before snapshot creation. A `ship` report requires a score of at least 85, a passing checklist, an independent reviewer, no hard failures, and no open issue. Accepted issues require an explicit reason.

## Finish gate dispositions

The finish reviewer emits exactly one disposition:

- `recapture` — implementation may be acceptable, but evidence is missing, stale, inconsistent, or captured in the wrong state. Capture valid evidence before changing design.
- `rebuild` — the experience/archetype, information architecture, responsive model, native runtime model, or primary implementation strategy is fundamentally wrong. Return to structure rather than polishing symptoms.
- `fix` — the direction is sound, but bounded hard failures, regressions, or material findings remain.
- `ship` — required evidence is current, no hard failure remains, applicable contracts pass, and the score meets the release threshold.

`ship` must include the source revision, evidence set, checklist result, rubric score when applicable, and any explicitly accepted limitations. No reviewer may use the numeric average to waive a hard failure.

## Bounded review loop

Use two unresolved author/reviewer remediation rounds as the default escalation threshold in one delivery cycle:

```text
author → review/audit → disposition
  ├─ recapture → capture evidence → finish review
  ├─ fix       → bounded fixes → review/audit → disposition
  └─ rebuild   → structural revision → review/audit → disposition
```

After two failed remediation rounds, stop autonomous polishing and report the unresolved decisions, evidence, and recommended scope change. An explicit user decision may fund another bounded round without making that round a quality failure. Do not conceal disagreement through endless polish.
