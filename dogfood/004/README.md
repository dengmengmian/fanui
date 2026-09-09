# FanUI Dogfood #004 — Mafan Lab Editorial

This directory is a real-content editorial dogfood target derived from the live Chinese site at `https://www.dengmengmian.com/zh`.

It validates FanUI against a personal creator / independent developer site rather than another SaaS product demo.

## Why this target

The live site already has a strong identity system:

- MAFAN LAB / public laboratory framing;
- Projects / Picks / Writing / Experiments / About;
- numbered Index language;
- real projects: CodeLeveler, MuxLayer, ReviewGate;
- real writing about Agent engineering, independent development, product decisions, and life systems.

The refactor intentionally preserves that language and tests whether FanUI can improve hierarchy, discovery, reading, visual evidence, and responsive behavior **without turning editorial into a product-card website**.

## Routes

```text
/zh                                      Home / public lab
/zh/projects                             Projects index
/zh/writing                              Editorial index
/zh/writing/agent-eval                   Article / Eval
/zh/writing/chatgpt-codex-protocol       Article / protocol
```

Some navigation destinations remain intentionally non-implemented because this dogfood focuses on the currently validated surface families rather than cloning the entire production site.

## FanUI classification

```yaml
fanui:
  experience:
    - website
    - editorial
  primary_user: reader_or_potential_collaborator
  core_value_loop: discover_builder -> inspect_work -> read_reasoning -> return_or_contact
  primary_visual_anchor:
    home: real_projects_and_featured_writing
    writing: featured_editorial_evidence
    project: current_work_and_building_principles
    article: readable_argument_plus_idea_bearing_visual
  density: calm_editorial
  visual_amplitude:
    home: medium
    index: medium
    article: low
  brand_expression:
    home: medium
    index: low_medium
    article: low
```

## Run

```bash
cd dogfood/004
npm install
npm run verify
npm run dev
```

Open `http://localhost:3000/zh`.

## Validation viewports

```text
1440 × 1000
1024 × 900
768 × 1024
390 × 844
375 × 812
```

Use `SCREENSHOT_PLAN.md` for rendered acceptance.

## Design authority

1. `../../skill/SKILL.md`
2. `../../docs/website/editorial-blog.md`
3. `../../docs/website/editorial-visuals.md`
4. `../../docs/website/mobile.md`
5. relevant foundations
6. `../../eval/checklist.md`
7. `../../eval/rubric.md`

Apifox remains the primary quality reference and Pixso secondary. This implementation does not copy either product's exact assets or page composition.

## Production-source note

The connected `dengmengmian/blog` repository currently contains an older Hugo/NexT-style site and does not match the live `/zh` information architecture. Dogfood #004 therefore lives in FanUI as a safe runnable refactor target rather than modifying that unrelated production repository.
