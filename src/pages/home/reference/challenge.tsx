export default function Challenge() {
  return (
<section id="challenge" className="relative z-10 w-full py-24 lg:py-32 border-b border-white/[0.08] bg-[#170D07]">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#120A05] border border-white/[0.08] mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-primary-container font-semibold">
            The Challenge
          </span>
</div>
<h2 className="font-display-lg-mobile lg:font-display-lg text-display-lg-mobile lg:text-display-lg font-bold tracking-tight text-on-surface leading-tight">
          Growth creates opportunity.<br/>
<span className="text-outline">It also creates complexity.</span>
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          As enterprise volume accelerates, internal infrastructure strains under fragmented tools, expanding headcount costs, and shifting compliance rules. Agility stalls right when execution matters most.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-[#120A05] p-6 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-red-950/40 text-red-400 flex items-center justify-center mb-4">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">troubleshoot</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 text-lg">Hiring Bottlenecks</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Lengthy 90-day recruiter cycles, sky-high local salary demands, and costly turnover that constantly resets institutional knowledge.
          </p>
</div>
<div className="bg-[#120A05] p-6 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-red-950/40 text-red-400 flex items-center justify-center mb-4">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">alt_route</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 text-lg">Siloed Workflows</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Disparate SaaS stacks without standardized automation cause operational blindspots, delays, and critical customer churn.
          </p>
</div>
<div className="bg-[#120A05] p-6 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-red-950/40 text-red-400 flex items-center justify-center mb-4">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">policy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 text-lg">Regulatory Risk</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Managing global data confidentiality, GDPR, and PCI requirements across distributed teams exposes organizations to severe liabilities.
          </p>
</div>
<div className="bg-[#120A05] p-6 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-red-950/40 text-red-400 flex items-center justify-center mb-4">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">schedule</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2 text-lg">24/7 Coverage Lag</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Inability to maintain true follow-the-sun customer response and back-office processing leaves global clients frustrated.
          </p>
</div>
</div>

<div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-[#1D1009] via-[#23150D] to-[#1D1009] border border-primary-container/40 shadow-[0_0_30px_rgba(255,122,33,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
<span aria-hidden="true" className="material-symbols-outlined text-2xl">architecture</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">The dotpbo Core Thesis</h4>
<p className="font-body-lg text-body-lg text-primary italic mt-0.5">
              “Outsourcing should remove complexity — not create another layer of it.”
            </p>
</div>
</div>
<a className="whitespace-nowrap px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest border border-white/10 text-on-surface font-label-md text-label-md font-semibold transition-all" href="#how-it-works">
          See How We Solve It →
        </a>
</div>
</div>
</section>
  )
}
