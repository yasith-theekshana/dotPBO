import OperationalMesh from "./operational-mesh"

export default function Hero() {
  return (
<section id="home" className="relative z-10 w-full border-b border-white/[0.08] overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-32 bg-gradient-to-b from-[#120A05] via-[#170D07] to-[#120A05]">

<div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none -mr-40"></div>
<div className="absolute left-1/4 -top-20 w-[450px] h-[450px] bg-tertiary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center">

<div className="lg:col-span-7 space-y-8">

<div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-surface-container-high/90 border border-primary-container/30 shadow-[0_0_15px_rgba(255,122,33,0.15)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] font-semibold text-primary-container">
              Smarter Outsourcing. Stronger Operations.
            </span>
</div>

<h1 className="font-display-xl-mobile lg:font-display-xl text-display-xl-mobile lg:text-display-xl text-on-surface font-semibold tracking-tight leading-[1.08]">
            Scale your operations.<br className="hidden sm:inline"/>
            Not your <span className="relative inline-block text-primary-container">complexity.<span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-gradient-to-r from-primary-container via-tertiary to-transparent rounded-full"></span></span>
</h1>

<p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl leading-relaxed">
            dotpbo provides flexible, technology-enabled outsourcing solutions that help global enterprises streamline workflows, elevate customer experiences, access elite dedicated talent, and scale with absolute operational resilience.
          </p>

<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
<a className="inline-flex items-center justify-center font-label-md text-label-md bg-primary-container hover:bg-[#FF8A32] text-[#120A05] font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,122,33,0.35)] hover:shadow-[0_0_40px_rgba(255,122,33,0.5)] transition-all duration-300 transform active:scale-95 group" href="#contact">
<span>Speak to an Advisor</span>
<span aria-hidden="true" className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="inline-flex items-center justify-center font-label-md text-label-md border border-white/15 hover:border-primary-container/70 text-secondary hover:text-on-surface bg-surface-container-low/50 hover:bg-surface-container/60 px-8 py-4 rounded-full transition-all duration-300 group" href="#services">
<span>Explore Our Services</span>
<span aria-hidden="true" className="material-symbols-outlined ml-2 text-[18px] text-outline group-hover:text-primary-container group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
</div>

<div className="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-6 max-w-lg">
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">99.98%</div>
<div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-0.5">SLA Precision</div>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">2.4x</div>
<div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-0.5">Speed-to-Scale</div>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tier-1</div>
<div className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-0.5">SOC2 &amp; PCI Ready</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative flex items-center justify-center">
<div className="relative w-full max-w-[540px] aspect-square rounded-2xl bg-[#170D07] border border-white/[0.08] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] p-6 lg:p-8 flex items-center justify-center overflow-hidden group">

<div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary-container/60"></div>
<div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary-container/60"></div>
<div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary-container/60"></div>
<div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary-container/60"></div>

<div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

<div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
<OperationalMesh />
</div>

<div className="absolute top-6 left-6 z-20 bg-[#1D1009]/95 backdrop-blur-md border border-white/10 rounded-lg px-3.5 py-2 flex items-center gap-3 shadow-lg">
<div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
<div>
<div className="font-label-eyebrow text-[10px] text-outline uppercase tracking-wider">Mesh Status</div>
<div className="font-label-md text-label-md text-on-surface font-semibold">99.98% Latency Bound</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-20 bg-[#1D1009]/95 backdrop-blur-md border border-primary-container/30 rounded-lg px-4 py-2.5 flex items-center gap-3 shadow-[0_0_20px_rgba(255,122,33,0.2)]">
<span aria-hidden="true" className="material-symbols-outlined text-primary-container text-lg">hub</span>
<div>
<div className="font-label-eyebrow text-[10px] text-primary-container uppercase tracking-wider">Operational Scale</div>
<div className="font-label-md text-label-md text-on-surface font-bold">ACTIVE GLOBAL NODES</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}
