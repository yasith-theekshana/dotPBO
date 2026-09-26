export default function About() {
  return (
<section id="about" className="relative z-10 w-full py-24 lg:py-32 border-b border-white/[0.08] bg-[#120A05]">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center">

<div className="lg:col-span-6 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-white/[0.08]">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-primary-container font-semibold">
              About dotpbo
            </span>
</div>
<h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold tracking-tight text-on-surface leading-tight">
            The right people.<br/>
            The right processes.<br/>
<span className="text-primary-container">One reliable partner.</span>
</h2>
<div className="space-y-4 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
<p>
              Modern businesses need more than arbitrary outsourced headcount. They require dependable operations, calibrated teams, efficient repeatable processes, and integrated technology that unifies fragmented organizational functions.
            </p>
<p>
              dotpbo combines people, process, technology, and rigorous executive governance to establish high-velocity operational units designed directly around how your business naturally works.
            </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container font-semibold group" href="#services">
<span>Discover the dotpbo operating model</span>
<span aria-hidden="true" className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
</a>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative bg-[#170D07] border border-white/[0.08] rounded-xl p-8 shadow-2xl">

<div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface uppercase tracking-wider">Unified Operating Matrix</span>
</div>
<span className="font-label-sm text-label-sm text-outline font-mono">SYS-ARCH.V4</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-[#120A05] p-5 rounded-lg border border-white/[0.05] hover:border-primary-container/40 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl">badge</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-base">01. People</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Top 2% vetted domain experts, continuous role certification, and zero churn buffer protocols.
                </p>
</div>

<div className="bg-[#120A05] p-5 rounded-lg border border-white/[0.05] hover:border-primary-container/40 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl">account_tree</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-base">02. Process</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Six Sigma workflow calibration, exhaustive SOP standardizations, and audited QA gates.
                </p>
</div>

<div className="bg-[#120A05] p-5 rounded-lg border border-white/[0.05] hover:border-primary-container/40 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl">terminal</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-base">03. Technology</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  AI-assisted copilot tooling, bi-directional CRM hooks, and real-time operational telemetry.
                </p>
</div>

<div className="bg-[#120A05] p-5 rounded-lg border border-white/[0.05] hover:border-primary-container/40 transition-colors">
<div className="flex items-center gap-3 mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl">gavel</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-base">04. Governance</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Executive sponsor alignment, bi-weekly strategic cadence, and predictive KPI forecasting.
                </p>
</div>
</div>

<div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-secondary">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                Synchronization Active
              </span>
<span className="font-mono text-outline">Mean MTTR &lt; 4.2m</span>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}
