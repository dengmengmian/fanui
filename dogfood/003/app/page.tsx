import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  History,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ProductFrame, SiteFooter, SiteHeader } from "@/components/site";

export default function HomePage() {
  return (
    <div className="website-shell">
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="eyebrow">AI workflow operations</div>
            <h1>
              Turn AI work into a <span className="hero-gradient">reliable operating system.</span>
            </h1>
            <p className="hero-lead">
              Design agent workflows, run them with real tools, supervise critical decisions, and keep every artifact connected to the work that produced it.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/app/projects/atlas">
                Start building <ArrowRight size={16} />
              </Link>
              <Link className="btn" href="/docs">Read the docs</Link>
            </div>
            <div className="hero-note">No credit card · Local-friendly · Human approval built in</div>
          </div>
          <div className="hero-showcase-wrap"><ProductFrame /></div>
        </section>

        <section className="logo-band">
          <p>Built for teams that need AI to operate inside real product and engineering systems.</p>
          <div className="logos">
            <span>Northstar</span><span>Orbit Labs</span><span>Papertrail</span><span>Grain</span><span>Volt</span>
          </div>
        </section>

        <section className="section section-quiet" id="product">
          <div className="section-inner split">
            <div>
              <div className="section-kicker">Design the work</div>
              <h2>Make the workflow visible before the agent runs.</h2>
              <p className="section-lead">
                Triggers, agent roles, tools, approvals, and outputs live in one operating context—not across disconnected settings screens.
              </p>
              <div className="feature-list">
                <div className="feature-row">
                  <span className="feature-icon" aria-hidden="true"><Workflow /></span>
                  <div>
                    <b>Composable workflow graph</b>
                    <span>Model the path, branches, approvals, and outputs that matter.</span>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-icon" aria-hidden="true"><ShieldCheck /></span>
                  <div>
                    <b>Agent roles with boundaries</b>
                    <span>Assign models, tool scopes, runtime policy, and handoff rules.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="evidence-panel">
              <div className="workflow-map">
                <div className="workflow-main-line">
                  <div className="workflow-node-v2">
                    <div className="node-type trigger">Trigger</div>
                    <b>Release tag</b>
                    <small>main · v2.4 · payload validated</small>
                  </div>
                  <div className="flow-arrow" />
                  <div className="workflow-node-v2">
                    <div className="node-type agent">Agent</div>
                    <b>Review launch blockers</b>
                    <small>Reviewer · 12 checks · 2 tools</small>
                  </div>
                  <div className="flow-arrow" />
                  <div className="workflow-node-v2 selected">
                    <div className="node-type approval">Approval</div>
                    <b>Product lead gate</b>
                    <small>Maya Chen · external publishing</small>
                  </div>
                </div>
                <div className="workflow-sub-line">
                  <div className="workflow-node-v2">
                    <div className="node-type tool">Tool</div>
                    <b>GitHub + Linear</b>
                    <small>repository + issue evidence</small>
                  </div>
                  <div className="workflow-node-v2">
                    <div className="node-type agent">Agent</div>
                    <b>Content operator</b>
                    <small>brief · FAQ · release notes</small>
                  </div>
                  <div className="workflow-node-v2">
                    <div className="node-type artifact">Artifact</div>
                    <b>Launch package</b>
                    <small>4 files · versioned · reviewable</small>
                  </div>
                </div>
                <div className="workflow-map-footer">
                  <strong>Workflow v12 · Production</strong>
                  <span>3 agents · 5 tools · 1 human gate · 4 artifacts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint">
          <div className="section-inner">
            <div className="section-kicker">Operate with evidence</div>
            <h2>Every run stays connected to the decisions, tools, and artifacts behind it.</h2>
            <p className="section-lead">
              Flowbit gives operators enough runtime detail to understand what happened without turning the product into a wall of logs.
            </p>
            <div className="proof-grid">
              <div className="proof-card big">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <b>Launch readiness · Run #1842</b>
                  <span className="status green">Completed</span>
                </div>
                <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
                  {[
                    ["Repository scan", "12 files changed · 0 critical blockers"],
                    ["Customer signals", "3 launch objections summarized"],
                    ["Content pack", "4 approved artifacts created"],
                    ["Human approval", "Approved by Maya Chen · 14:32"],
                  ].map(([a, b], i) => (
                    <div key={a} style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 10, alignItems: "start", padding: "10px 0", borderBottom: i < 3 ? "1px solid #ece9f0" : "none" }}>
                      <span className="step-num">{i + 1}</span>
                      <div><b style={{ fontSize: 13 }}>{a}</b><div className="step-meta">{b}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gap: 24 }}>
                <div className="proof-card"><Sparkles size={18} /><div className="metric">84%</div><div className="metric-label">runs completed without manual retry</div></div>
                <div className="proof-card"><ShieldCheck size={18} /><div className="metric">0</div><div className="metric-label">critical actions bypassed approval policy</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-quiet">
          <div className="section-inner split reverse">
            <div className="evidence-panel">
              <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", minHeight: 330 }}>
                <div style={{ borderRight: "1px solid #e9e6ed", padding: 14, background: "#faf9fc" }}>
                  <div className="demo-side-title">Artifacts</div>
                  {["Launch brief", "Risk register", "Customer FAQ", "Release notes"].map((x, i) => (
                    <div className={`demo-nav-item ${i === 0 ? "active" : ""}`} key={x}>{x}</div>
                  ))}
                </div>
                <div style={{ padding: 24 }}>
                  <div className="step-meta">MARKDOWN · APPROVED</div>
                  <h3 style={{ fontSize: 22, margin: "8px 0 14px" }}>Launch brief · v2.4</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#66616d" }}>
                    Flowbit keeps the deliverable attached to the run, source evidence, reviewer, and approval state that produced it.
                  </p>
                  <div className="callout" style={{ fontSize: 13 }}>Approved after reviewer requested one change to the rollout risk section.</div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-kicker">Results stay useful</div>
              <h2>Artifacts are first-class work, not chat leftovers.</h2>
              <p className="section-lead">
                Review generated output in context, trace it to a run, then keep the approved version ready for the next person or workflow.
              </p>
              <div className="feature-list">
                <div className="feature-row">
                  <span className="feature-icon" aria-hidden="true"><History /></span>
                  <div><b>Structured artifact history</b><span>Versions, reviewers, source run, and approval state remain visible.</span></div>
                </div>
                <div className="feature-row">
                  <span className="feature-icon" aria-hidden="true"><ArrowUpRight /></span>
                  <div><b>Continue from the result</b><span>Use an artifact as input to the next workflow without rebuilding context.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-zone">
          <div className="cta-inner">
            <h2>Give AI a place to work that your team can actually operate.</h2>
            <p>Start with one workflow. Keep the runtime, approvals, and outputs visible as the system grows.</p>
            <Link className="btn btn-light" href="/app/projects/atlas">Open the Atlas workspace <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
