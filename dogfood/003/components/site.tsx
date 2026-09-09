import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";

export function Brand() {
  return <Link className="brand" href="/"><span className="brand-mark">F</span><span>Flowbit</span></Link>;
}

export function SiteHeader() {
  return <header className="site-header">
    <div className="site-header-inner">
      <Brand/>
      <nav className="site-nav" aria-label="Primary"><Link href="/#product">Product</Link><Link href="/docs">Docs</Link><Link href="/blog">Blog</Link><Link href="/pricing">Pricing</Link></nav>
      <div className="header-actions"><Link className="btn" href="/app">Sign in</Link><Link className="btn btn-primary" href="/app/projects/atlas">Open Flowbit <ArrowRight size={15}/></Link></div>
    </div>
    <nav className="mobile-site-nav" aria-label="Mobile primary"><Link href="/#product">Product</Link><Link href="/docs">Docs</Link><Link href="/blog">Blog</Link><Link href="/pricing">Pricing</Link></nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="footer-inner"><Brand/><div className="footer-links"><Link href="/docs">Documentation</Link><Link href="/blog">Blog</Link><Link href="/pricing">Pricing</Link><Link href="/zh">中文压力测试</Link></div></div></footer>;
}

export function ProductFrame() {
  const steps = [
    {title:"Plan launch brief",meta:"Product strategist · sources: 8",type:"Agent",typeClass:"agent",state:"Done",status:"green"},
    {title:"Check release blockers",meta:"GitHub + Linear · 12 checks",type:"Tool",typeClass:"tool",state:"Done",status:"green"},
    {title:"Draft launch assets",meta:"Content operator · 4 artifacts",type:"Agent",typeClass:"agent",state:"Running",status:"info"},
    {title:"Product lead approval",meta:"Maya Chen · external publish",type:"Approval",typeClass:"approval",state:"Waiting",status:"approval"},
  ];
  return <div className="product-frame">
    <div className="window-bar"><span className="dot"/><span className="dot"/><span className="dot"/><span className="window-title">Atlas / Launch readiness / Run #1842</span></div>
    <div className="demo-app">
      <aside className="demo-side">
        <div className="demo-side-title">Project</div>
        {['Overview','Workflows','Agents','Artifacts','Settings'].map((item,i)=><div key={item} className={`demo-nav-item ${i===1?'active':''}`}><span className="demo-nav-dot"/>{item}</div>)}
        <div className="demo-side-title" style={{marginTop:10}}>Workflows</div>
        {['Launch readiness','Weekly triage','Customer signals'].map((item,i)=><div key={item} className={`demo-nav-item ${i===0?'active':''}`}><span className="demo-nav-dot"/>{item}</div>)}
      </aside>
      <main className="demo-main">
        <div className="demo-toolbar"><span className="demo-breadcrumb">Atlas / Launch readiness</span><span className="status info">● Live run</span></div>
        <div className="demo-main-inner">
          <div className="demo-contextbar"><span className="context-chip">main · v2.4</span><span className="context-chip">Production</span><span className="context-chip">Policy · guarded</span></div>
          <div className="demo-run">
            <div className="demo-run-head"><div><strong style={{fontSize:14}}>Ship v2.4 launch package</strong><div className="step-meta">Started 8m ago · 3 agents · 5 tools · 1 approval</div></div><span className="status info"><Play size={11}/> Running</span></div>
            {steps.map((step,i)=><div className="step" key={step.title}><span className="step-num">{step.state==='Done'?<Check size={12}/>:i+1}</span><div><div className="step-title">{step.title}</div><div className="step-meta">{step.meta}</div></div><div className="step-side"><span className={`type-chip ${step.typeClass}`}>{step.type}</span><span className={`status ${step.status}`}>{step.state}</span></div></div>)}
            <div className="demo-run-footer"><div className="demo-run-stat"><b>11 tool calls</b><span>2 cached · 0 failed</span></div><div className="demo-run-stat"><b>4 artifacts</b><span>3 approved · 1 draft</span></div><div className="demo-run-stat"><b>8m 14s</b><span>waiting on approval</span></div></div>
          </div>
        </div>
      </main>
      <aside className="demo-inspector">
        <div style={{fontSize:13,fontWeight:800}}>Run inspector</div>
        <div className="inspector-label">Environment</div><div className="inspector-value">Production</div>
        <div className="inspector-label">Model policy</div><div className="inspector-value">Reasoning · balanced</div>
        <div className="inspector-label">Approval</div><div className="inspector-value">Product lead required</div>
        <div className="inspector-label">Output</div><div className="inspector-value">Launch brief · draft v3</div>
        <div className="inspector-mini-list"><div className="inspector-event"><span>Repository scan</span><span>14:22</span></div><div className="inspector-event"><span>Customer evidence</span><span>14:25</span></div><div className="inspector-event"><span>Draft produced</span><span>14:29</span></div><div className="inspector-event"><span>Approval requested</span><span>14:31</span></div></div>
      </aside>
    </div>
  </div>;
}
