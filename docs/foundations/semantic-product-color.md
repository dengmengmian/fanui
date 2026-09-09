# FanUI Semantic Product Color

## Purpose

FanUI separates brand expression from operational meaning. Real product UIs gain visual richness primarily from meaningful state and object color, not from spraying the brand color across every control.

## Role families

Keep these roles distinct:

```text
Brand
Interaction / primary action
Selection / current context
Success / completed
Warning / waiting / needs review
Danger / failed / destructive
Info / running / active process
Agent / model role
Tool / integration role
Approval / authority role
Artifact / output role
Type / method / domain-specific role
Data visualization
Decoration
```

## Recommended behavior

### Brand

Used for identity, primary action, selected Marketing moments, and high-expression surfaces.

### Selection

Usually a lighter tint of brand or a dedicated selection color. It should identify current context without reading as an action.

### Running / active process

Prefer a cool informational family distinct from success. A running task should not look completed.

### Success

Green-family semantics are appropriate for completed, healthy, valid, active-production states.

### Warning / approval

Amber-family semantics work for waiting, review required, gated, caution, or nonfatal attention.

### Danger

Red-family semantics are reserved for failure, destructive state, critical blocker, or invalid configuration.

### Agent / Tool / Artifact

When these object classes coexist densely, allow restrained object-type color so users can scan structure without reading every label.

Example:

```text
Agent       violet / indigo family
Tool        cyan / blue family
Approval    amber family
Artifact    teal family
Trigger     neutral / blue family
```

These are families, not fixed global hex values.

## Saturation discipline

Product workspaces should use color as a signal:

- small saturated marks / labels for high-signal state;
- pale tints for selection/background state;
- neutral surfaces for most canvas area.

Marketing can amplify the same brand family, but operational semantic colors should keep their meaning.

## Anti-rules

Do not:

- color success with brand purple just for consistency;
- make every icon purple;
- use the same tint for Running, Selected, and Agent Type;
- turn semantic status into decorative gradients;
- introduce many colors without a stable role mapping.

## Product evidence

Hero and feature product visuals should expose semantic color if the real product domain has meaningful states. This is often a better source of visual richness than adding more Marketing gradients.

## Hard rule

> Brand color says who the product is. Semantic color says what is happening.