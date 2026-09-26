export default function Contact() {
  return (
<section id="contact" className="relative z-10 w-full py-28 lg:py-36 bg-[#120A05] overflow-hidden">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-20">
<div className="max-w-4xl mx-auto text-center space-y-8 bg-[#170D07]/90 backdrop-blur-xl border border-white/[0.1] p-10 lg:p-16 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-primary-container/30">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
</span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] font-semibold text-primary-container">
            Let's Talk Operations
          </span>
</div>
<h2 className="font-display-lg-mobile lg:font-display-lg text-display-lg-mobile lg:text-display-lg font-bold tracking-tight text-on-surface leading-tight">
          Ready to build a smarter<br/>
<span className="text-primary-container">way to operate?</span>
</h2>
<p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Tell us what you're trying to improve, scale or simplify. We'll help you explore an outsourcing model designed specifically around your business.
        </p>

<div className="pt-4 flex flex-col items-center justify-center gap-6">
<a className="inline-flex items-center justify-center font-label-md text-label-md bg-primary-container hover:bg-[#FF8A32] text-[#120A05] font-bold px-10 py-5 rounded-full shadow-[0_0_35px_rgba(255,122,33,0.45)] hover:shadow-[0_0_50px_rgba(255,122,33,0.6)] transition-all duration-300 transform active:scale-95 group" href="mailto:hello@hasanarasolutions.com">
<span className="text-base">Speak to an Advisor</span>
<span aria-hidden="true" className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
</a>

<div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs text-outline font-label-sm">
<span className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
              Zero lock-in exploratory session
            </span>
<span className="text-white/20">•</span>
<span className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
              Custom SLA analysis
            </span>
<span className="text-white/20">•</span>
<span className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary-container">check_circle</span>
              48h turnaround
            </span>
</div>
</div>
</div>
</div>
</section>
  )
}
