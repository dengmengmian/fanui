import Link from "next/link";
import { Activity, Bell, ChevronDown, CircleHelp, Home, Layers3, Plug, Search, Settings, Workflow } from "lucide-react";
import { Brand } from "./site";

export function AppTopbar() {
  return (
    <div className="app-top">
      <Brand />
      <div className="project-switch">Atlas <ChevronDown size={13} /></div>
      <div className="app-top-spacer" />
      <button className="icon-btn app-search" aria-label="Search"><Search size={16} /></button>
      <button className="icon-btn app-help" aria-label="Help"><CircleHelp size={16} /></button>
      <button className="icon-btn app-notifications" aria-label="Notifications"><Bell size={16} /></button>
    </div>
  );
}

export function AppSidebar({ active = "home" }: { active?: string }) {
  const items = [
    ["home", "Continue", Home, "/app"],
    ["workspace", "Workspace", Workflow, "/app/projects/atlas"],
    ["runs", "Recent runs", Activity, "/app/projects/atlas#runs"],
  ] as const;
  return (
    <aside className="app-sidebar">
      <div className="app-nav-group">Work</div>
      {items.map(([id,label,Icon,href]) => <Link key={id} href={href} className={`app-nav ${active===id?'active':''}`}><Icon size={15}/>{label}</Link>)}
      <div className="app-nav-group">Project</div>
      <div className="app-nav"><Layers3 size={15}/>Environments</div>
      <div className="app-nav"><Plug size={15}/>Integrations</div>
      <div className="app-nav"><Settings size={15}/>Settings</div>
    </aside>
  );
}
