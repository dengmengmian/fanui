import Link from "next/link";
import { EditorialHeroVisual, MiniEditorialVisual } from "@/components/editorial-visuals";
import { SiteFooter, SiteHeader } from "@/components/site";

const articles=[
  ["Best practices","Why reliable agents need an operating loop, not a longer prompt","The practical difference between a clever agent demo and a workflow a team can trust in production.","run"],
  ["Product","Run review is now a first-class workspace","Review tools, decisions, and artifacts without leaving the workflow context.","artifact"],
  ["Engineering","Designing approval gates that do not become bottlenecks","How to preserve human authority while keeping routine AI work moving.","approval"],
  ["Customer stories","How Northstar runs weekly product triage with three bounded agents","A small workflow replaced manual evidence gathering without hiding the decision process.","research"],
  ["Best practices","Treat artifacts as durable work, not chat history","Generated output becomes more useful when it has versions, reviewers, and provenance.","artifact"],
  ["Product","Environment policies for tools and models","Make dev, staging, and production behavior explicit without duplicating workflows.","policy"],
] as const;

export default function BlogIndex(){return <div className="website-shell"><SiteHeader/><main className="blog-wrap"><div className="eyebrow">Flowbit journal</div><h1 className="blog-title">Notes on operating AI as real work.</h1><p className="blog-sub">Product thinking, engineering practices, customer workflows, and what we learn building Flowbit.</p><nav className="blog-cats"><span className="active">All</span><span>Perspectives</span><span>Best practices</span><span>Product</span><span>Customer stories</span></nav><section className="featured"><EditorialHeroVisual/><div><div className="eyebrow">Featured · Best practices</div><h2>Reliable agents need an operating loop, not a longer prompt.</h2><p>Teams often improve an agent by adding more instructions. The bigger unlock is designing the work around it: bounded tools, visible state, durable artifacts, and a place for humans to intervene.</p><div className="meta">Maya Chen · 9 min read · Sep 8, 2026</div><Link href="/blog/reliable-agents" className="btn" style={{marginTop:22}}>Read article</Link></div></section><section className="blog-section"><h2>Latest</h2><div className="article-grid">{articles.map(([cat,title,desc,variant],i)=><article className="article-card" key={title}><MiniEditorialVisual variant={variant}/><div className="meta" style={{marginTop:13}}>{cat} · {4+i} min read</div><h3>{title}</h3><p>{desc}</p></article>)}</div></section></main><SiteFooter/></div>}
