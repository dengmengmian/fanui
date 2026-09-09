import Link from "next/link";
import { Search } from "lucide-react";
import { Brand } from "./site";

export function DocsTop(){return <div className="docs-top"><div className="docs-top-inner"><Brand/><div className="docs-search"><Search size={14} style={{marginRight:8}}/>Search documentation, commands, concepts…</div><Link className="btn" style={{height:36}} href="/">Back to Flowbit</Link></div></div>}

export function DocsSidebar({active="home"}:{active?:string}){
  return <aside className="docs-sidebar">
    <div className="docs-group">Start</div>
    <Link className={`docs-link ${active==='home'?'active':''}`} href="/docs">Overview</Link>
    <Link className={`docs-link ${active==='getting-started'?'active':''}`} href="/docs/getting-started">Getting started</Link>
    <div className="docs-group">Build</div>
    <div className="docs-link">Workflows</div><div className="docs-link">Agents</div><div className="docs-link">Tools & MCP</div><div className="docs-link">Triggers</div>
    <div className="docs-group">Operate</div>
    <div className="docs-link">Runs</div><div className="docs-link">Approvals</div><div className="docs-link">Artifacts</div><div className="docs-link">Environments</div>
    <div className="docs-group">Reference</div>
    <div className="docs-link">CLI</div><div className="docs-link">API</div><div className="docs-link">Security</div>
  </aside>
}
