# FanUI Dogfood #3 — Flowbit

This directory is the rendered validation target for **FanUI Web V0.3.2**.

It covers:

- Product Website
- Pricing
- Documentation Home
- Documentation Article
- Blog Index
- Blog Article
- Web App Continue/Home
- AI / Professional Workspace
- dense workflow/runtime/inspector state
- Chinese stress surface

## V0.3.2 rework focus

Dogfood #3 was reworked after rendered V0.3.1 review exposed these gaps:

- product evidence was correctly sized but still too demo-like;
- some large frames contained too little effective content;
- Docs content was optically left-heavy after the sidebar;
- Blog covers looked like gradient placeholders;
- article Hero area was not fully earned;
- Workspace did not own the full viewport;
- Product color relied too heavily on brand purple;
- radius language remained too uniform;
- some Product/Docs type approached the readability floor.

The V0.3.2 implementation now directly exercises Product Evidence Fidelity, Optical Layout, Semantic Product Color, Surface Hierarchy, Editorial Visuals, and Workspace Viewport Ownership.

## Run

```bash
cd dogfood/003
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

```text
/                         Product Homepage
/pricing                  Pricing
/docs                     Documentation Home
/docs/getting-started     Documentation Article
/blog                     Blog Index
/blog/reliable-agents     Blog Article
/app                      Product Home / Continue Work
/app/projects/atlas       Primary AI / Professional Workspace
/zh                       Chinese stress test
```

## Primary validation viewport

```text
1440 × 1000
Browser zoom: 100%
Light mode
```

Use `SCREENSHOT_PLAN.md` for the capture set.

## Mechanical validation

The V0.3.2 implementation commit `ccf799bb8018a4b9fda1e7cac9d3323a2a45a7c2` passed the GitHub Actions `FanUI Dogfood 003 Build` workflow on Node 20.

Mechanical build success does not close rendered acceptance.

## Design authority

1. `../../skill/SKILL.md`
2. V0.3.2 foundation documents
3. relevant Website/Web App patterns
4. `../../eval/checklist.md`
5. `../../eval/rubric.md`

Apifox remains the primary reference source behind FanUI and Pixso secondary, but the demo does not copy their assets or exact layouts.