export default function Technology() {
  return (
<section id="technology" className="relative z-10 w-full py-24 lg:py-32 border-b border-white/[0.08] bg-[#170D07] overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#120A05] border border-white/[0.08] mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-primary-container font-semibold">
              Technology Architecture
            </span>
</div>
<h2 className="font-display-lg-mobile lg:font-display-lg text-display-lg-mobile lg:text-display-lg font-bold tracking-tight text-on-surface leading-tight">
            People deliver the service.<br/>
<span className="text-primary-container">Technology makes it smarter.</span>
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Our operational stack unifies workflow automation, predictive capacity forecasting, and live omnichannel telemetry into one high-clarity control center.
          </p>
</div>
<div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="bg-[#120A05] p-4 rounded border border-white/[0.05]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container mb-2">auto_fix_high</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">Workflow Automation</div>
</div>
<div className="bg-[#120A05] p-4 rounded border border-white/[0.05]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container mb-2">query_stats</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">Performance Analytics</div>
</div>
<div className="bg-[#120A05] p-4 rounded border border-white/[0.05]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container mb-2">sync_alt</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">CRM Integration</div>
</div>
<div className="bg-[#120A05] p-4 rounded border border-white/[0.05]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container mb-2">database</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">Data Management</div>
</div>
<div className="bg-[#120A05] p-4 rounded border border-white/[0.05]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container mb-2">security</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">Quality Monitoring</div>
</div>
<div className="bg-[#120A05] p-4 rounded border border-white/[0.05]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container mb-2">summarize</span>
<div className="font-label-md text-label-md text-on-surface font-semibold">Executive Reporting</div>
</div>
</div>
</div>

<div className="w-full bg-[#120A05] border border-white/[0.08] rounded-2xl p-6 lg:p-8 shadow-2xl relative">
<div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-red-500/80"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
<span className="w-3 h-3 rounded-full bg-green-500/80"></span>
<span className="text-xs font-mono text-outline ml-2">dotpbo-telemetry-engine // live-prod-eu-us</span>
</div>
<div className="inline-flex items-center gap-2 text-xs text-primary-container font-mono">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            MESH INGESTION: 18,420 EVT/SEC
          </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-[#170D07] p-5 rounded-lg border border-white/[0.04]">
<div className="font-label-eyebrow text-[10px] text-outline uppercase tracking-wider mb-2">Queue Latency Index</div>
<div className="font-display-lg text-display-lg text-on-surface font-mono font-bold leading-none mb-2">1.8s</div>
<p className="text-xs text-secondary mb-4">Benchmark target: &lt; 5.0s</p>

<svg className="w-full h-12 stroke-primary-container fill-none" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0,20 Q15,10 30,18 T60,5 T90,14 L100,8" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
</svg>
</div>

<div className="bg-[#170D07] p-5 rounded-lg border border-white/[0.04]">
<div className="font-label-eyebrow text-[10px] text-outline uppercase tracking-wider mb-2">Automated QA Score</div>
<div className="font-display-lg text-display-lg text-on-surface font-mono font-bold leading-none mb-2">99.4%</div>
<p className="text-xs text-secondary mb-4">Audited interactions: 412,980/day</p>

<div className="w-full bg-[#120A05] rounded-full h-2 mb-2 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{ width: "99.4%" }}></div>
</div>
<div className="flex justify-between text-[11px] font-mono text-outline">
<span>Threshold: 98.0%</span>
<span className="text-primary-container">+1.4% Ahead</span>
</div>
</div>

<div className="bg-[#170D07] p-5 rounded-lg border border-white/[0.04]">
<div className="font-label-eyebrow text-[10px] text-outline uppercase tracking-wider mb-2">Incident Triage MTTR</div>
<div className="font-display-lg text-display-lg text-on-surface font-mono font-bold leading-none mb-2">12.4m</div>
<p className="text-xs text-secondary mb-4">Resolution efficacy: 98.9% First Contact</p>

<svg className="w-full h-12 stroke-primary fill-none" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0,8 Q20,22 40,12 T70,18 T100,4" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>
</section>
  )
}
