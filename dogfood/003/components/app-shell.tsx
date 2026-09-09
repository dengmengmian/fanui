import Link from "next/link";
import { Bell, Box, ChevronDown, CircleHelp, GitBranch, Home, PlayCircle, Search, Settings, Sparkles } from "lucide-react";
import { Brand } from "./site";

export function AppTopbar() {
  return (
    <div className="app-top">
      <Brand />
      <div className="project-switch">Atlas <ChevronDown size={13} /></div>
      <div className="app-top-spacer" />
      <button className="icon-btn" aria-label="Search"><Search size={15} /></button>
      <button className="icon-btn" aria-label="Help"><CircleHelp size={15} /></button>
      <button className="icon-btn" aria-label="Notifications"><Bell size={15} /></button>
    </div>
  );
}

export function AppSidebar({ active = "home" }: { active?: string }) {
  const items = [
    ["home", "Continue", Home, "/app"],
    ["workspace", "Workspace", Sparkles, "/app/projects/atlas"],
    ["runs", "Recent runs", PlayCircle, "/app/projects/atlas#runs"],
  ] as const;
  return (
    <aside className="app-sidebar">
      <div className="app-nav-group">Work</div>
      {items.map(([id,label,Icon,href]) => <Link key={id} href={href} className={`app-nav ${active===id?'active':''}`}><Icon size={14}/>{label}</Link>)}
      <div className="app-nav-group">Project</div>
      <div className="app-nav"><GitBranch size={14}/>Environments</div>
      <div className="app-nav"><Box size={14}/>Integrations</div>
      <div className="app-nav"><Settings size={14}/>Settings</div>
    </aside>
  );
}
