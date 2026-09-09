import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

const plans = [
  {name:"Free",for:"Solo exploration and one small workflow",price:"$0",cta:"Start free",features:["1 project","3 workflows","100 runs / month","Community support"]},
  {name:"Pro",for:"Independent builders shipping production automations",price:"$24",cta:"Choose Pro",features:["5 projects","Unlimited workflows","2,500 runs / month","Approval gates","Priority support"]},
  {name:"Business",for:"Product and engineering teams operating AI together",price:"$49",cta:"Choose Business",recommended:true,features:["Unlimited projects","10,000 runs / month","Team roles + audit trail","Policy controls","Shared artifact history"]},
  {name:"Scale",for:"Larger teams with governance and higher throughput",price:"$89",cta:"Choose Scale",features:["50,000 runs / month","Advanced environments","SAML SSO","Exportable audit logs","Priority incident support"]},
];

const rows = [
  ["Core", "Projects", "1", "5", "Unlimited", "Unlimited"],
  ["Core", "Monthly runs", "100", "2,500", "10,000", "50,000"],
  ["Operations", "Human approval gates", "—", "Included", "Included", "Included"],
  ["Operations", "Shared artifact history", "—", "7 days", "90 days", "1 year"],
  ["Governance", "Role-based access", "—", "Basic", "Advanced", "Advanced"],
  ["Governance", "SAML SSO", "—", "—", "—", "Included"],
  ["Support", "Support", "Community", "Priority", "Priority", "Incident priority"],
];

export default function PricingPage(){
  let lastCategory="";
  return <div className="website-shell"><SiteHeader/><main>
    <section className="page-hero"><div className="eyebrow">Pricing</div><h1>Start small. Add operating control as AI becomes real work.</h1><p>Every plan includes the core workflow builder, tool connections, run history, and artifact tracking. Upgrade for volume, collaboration, and governance.</p></section>
    <div className="pricing-wrap">
      <div className="billing"><div className="segmented"><span>Monthly</span><span className="active">Yearly · save 20%</span></div></div>
      <div className="plans">{plans.map(p=><article className={`plan ${p.recommended?'recommended':''}`} key={p.name}>{p.recommended&&<span className="recommend-badge">Most teams start here</span>}<div className="plan-name">{p.name}</div><div className="plan-for">{p.for}</div><div className="price">{p.price}<small> / seat / month</small></div><Link className={`btn ${p.recommended?'btn-primary':''}`} href="/app">{p.cta}</Link><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul></article>)}</div>
      <section className="enterprise"><div><h3>Enterprise & private deployment</h3><p>For organizations that need custom deployment, security review, procurement support, dedicated limits, or organization-wide governance.</p></div><Link className="btn" href="mailto:sales@example.com">Talk to sales</Link></section>

      <section className="comparison"><h2>Compare what changes as your team grows</h2><table className="compare-table"><thead><tr><th>Capability</th>{plans.map(p=><th key={p.name}>{p.name}</th>)}</tr></thead><tbody>{rows.map((r,i)=>{const [category,label,...vals]=r;const categoryRow=category!==lastCategory;lastCategory=category;return <>{categoryRow&&<tr className="category" key={`${category}-cat`}><td colSpan={5}>{category}</td></tr>}<tr key={`${label}-${i}`}><td>{label}</td>{vals.map((v,j)=><td key={j}>{v}</td>)}</tr></>})}</tbody></table></section>

      <section className="faq"><h2>Questions before you choose</h2><details><summary>What counts as a run?</summary><p>A run is one workflow execution from trigger to completion, including any agent steps, tool calls, approvals, and artifacts created inside that execution.</p></details><details><summary>Can I change plans later?</summary><p>Yes. Upgrades take effect immediately. Downgrades apply at the next billing period and preserve your existing history.</p></details><details><summary>Is private deployment the same product?</summary><p>Yes. The core workspace and workflow model remain the same; deployment, identity, network, and support arrangements differ.</p></details><details><summary>Do failed runs count toward usage?</summary><p>Runs that start execution count toward usage. Retries initiated by Flowbit because of transient infrastructure failures do not.</p></details></section>
    </div>
  </main><SiteFooter/></div>
}
