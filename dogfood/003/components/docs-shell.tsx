import Link from "next/link";
import { PanelLeft, Search } from "lucide-react";
import { Brand } from "./site";

export function DocsTop({active="home"}:{active?:"home"|"getting-started"}){
  return <div className="docs-top">
    <div className="docs-top-inner">
      <Brand/>
      <div className="docs-search"><Search size={15} aria-hidden="true"/>Search documentation, commands, concepts…</div>
      <Link className="btn docs-back" style={{height:36}} href="/">Back to Flowbit</Link>
      <details className="docs-mobile-menu">
        <summary className="docs-menu-trigger" aria-label="Open documentation navigation"><PanelLeft size={18}/><span>Docs</span></summary>
        <div className="docs-mobile-drawer">
          <div className="docs-drawer-group">Start</div>
          <Link className={active==='home'?'active':''} href="/docs">Overview</Link>
          <Link className={active==='getting-started'?'active':''} href="/docs/getting-started">Getting started</Link>
          <div className="docs-drawer-group">Build</div>
          <Link href="/docs">Workflows</Link><Link href="/docs">Agents</Link><Link href="/docs">Tools & MCP</Link><Link href="/docs">Triggers</Link>
          <div className="docs-drawer-group">Operate</div>
          <Link href="/docs">Runs & traces</Link><Link href="/docs">Approvals</Link><Link href="/docs">Artifacts</Link><Link href="/docs">Environments</Link>
          <div className="docs-drawer-group">Reference</div>
          <Link href="/docs">CLI</Link><Link href="/docs">API</Link><Link href="/docs">Security</Link>
          <Link className="docs-drawer-back" href="/">Back to Flowbit</Link>
        </div>
      </details>
    </div>
  </div>
}

export function DocsSidebar({active="home"}:{active?:string}){
  return <aside className="docs-sidebar"><div className="docs-group">Start</div><Link className={`docs-link ${active==='home'?'active':''}`} href="/docs">Overview</Link><Link className={`docs-link ${active==='getting-started'?'active':''}`} href="/docs/getting-started">Getting started</Link><div className="docs-group">Build</div><div className="docs-link">Workflows</div><div className="docs-link">Agents</div><div className="docs-link">Tools & MCP</div><div className="docs-link">Triggers</div><div className="docs-group">Operate</div><div className="docs-link">Runs & traces</div><div className="docs-link">Approvals</div><div className="docs-link">Artifacts</div><div className="docs-link">Environments</div><div className="docs-group">Reference</div><div className="docs-link">CLI</div><div className="docs-link">API</div><div className="docs-link">Security</div></aside>
}
