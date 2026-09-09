# FanUI Dogfood #3 — Flowbit

This directory is a rendered validation target for **FanUI Web V0.3.1**.

It deliberately covers multiple experience families instead of validating only a Homepage:

- Product Website
- Pricing
- Documentation Home
- Documentation Article
- Blog Index
- Blog Article
- Web App Continue/Home
- AI / Professional Workspace
- Dense tree/run/inspector state
- Chinese stress surface

## Run

```bash
cd dogfood/003
npm install
npm run dev
```

Open `http://localhost:3000`.

For production validation:

```bash
npm run build
npm start
```

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

## Validation viewport

Primary visual comparison:

```text
1440 × 1000
```

Secondary responsive checks:

```text
1280 × 900
390 × 844
```

Use `SCREENSHOT_PLAN.md` for the exact capture set.

## Design authority

The demo is intentionally derived from FanUI rules, not from a direct page clone. Current authority:

1. `../../skill/SKILL.md`
2. `../../docs/foundations/experience-metrics.md`
3. relevant Website/Web App patterns
4. `../../eval/checklist.md`
5. `../../eval/rubric.md`

Apifox is the primary reference source behind FanUI and Pixso is secondary, but this demo does not copy their assets, wording, or exact layouts.
