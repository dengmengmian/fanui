import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";

export function Brand() {
  return (
    <Link className="brand" href="/">
      <span className="brand-mark">F</span>
      <span>Flowbit</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Brand />
        <nav className="site-nav" aria-label="Primary">
          <Link href="/#product">Product</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="header-actions">
          <Link className="btn" href="/app">Sign in</Link>
          <Link className="btn btn-primary" href="/app/projects/atlas">Open Flowbit <ArrowRight size={15} /></Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Brand />
        <div className="footer-links">
          <Link href="/docs">Documentation</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/zh">中文压力测试</Link>
        </div>
      </div>
    </footer>
  );
}

export function ProductFrame() {
  const steps = [
    ["Plan launch brief", "Agent · Product strategist", "Done"],
    ["Check release blockers", "Tool · GitHub + Linear", "Done"],
    ["Draft launch assets", "Agent · Content operator", "Running"],
    ["Request approval", "Human gate · Product lead", "Waiting"],
  ];
  return (
    <div className="product-frame">
      <div className="window-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="window-title">Atlas / Launch readiness / Run #1842</span>
      </div>
      <div className="demo-app">
        <aside className="demo-side">
          <div className="demo-side-title">Project</div>
          {['Overview','Workflows','Agents','Artifacts','Settings'].map((item, i) => (
            <div key={item} className={`demo-nav-item ${i===1?'active':''}`}>
              <span className="demo-nav-dot" />{item}
            </div>
          ))}
          <div className="demo-side-title" style={{marginTop:10}}>Workflows</div>
          <div className="demo-nav-item active"><span className="demo-nav-dot" />Launch readiness</div>
          <div className="demo-nav-item"><span className="demo-nav-dot" />Weekly triage</div>
          <div className="demo-nav-item"><span className="demo-nav-dot" />Customer signals</div>
        </aside>
        <main className="demo-main">
          <div className="demo-toolbar">
            <span className="demo-breadcrumb">Atlas / Launch readiness</span>
            <span className="status green">Live run</span>
          </div>
          <div className="demo-run">
            <div className="demo-run-head">
              <div>
                <strong style={{fontSize:14}}>Ship v2.4 launch package</strong>
                <div className="step-meta">Started 8m ago · 3 agents · 5 tools</div>
              </div>
              <span className="status purple"><Play size={11} style={{verticalAlign:-1}} /> Running</span>
            </div>
            {steps.map(([title, meta, state], i) => (
              <div className="step" key={title}>
                <span className="step-num">{state==='Done'?<Check size={12}/>:i+1}</span>
                <div><div className="step-title">{title}</div><div className="step-meta">{meta}</div></div>
                <span className={`status ${state==='Done'?'green':state==='Running'?'purple':'amber'}`}>{state}</span>
              </div>
            ))}
          </div>
        </main>
        <aside className="demo-inspector">
          <div style={{fontSize:13,fontWeight:800}}>Run inspector</div>
          <div className="inspector-label">Environment</div><div className="inspector-value">Production</div>
          <div className="inspector-label">Model policy</div><div className="inspector-value">Reasoning · balanced</div>
          <div className="inspector-label">Approval</div><div className="inspector-value">Product lead required</div>
          <div className="inspector-label">Output</div><div className="inspector-value">4 artifacts · 1 pending</div>
        </aside>
      </div>
    </div>
  );
}
