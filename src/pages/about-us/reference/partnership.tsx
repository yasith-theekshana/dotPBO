export default function Partnership() {
  return (
    <section id="about-partnership" className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div className="inline-flex items-center gap-space-xs self-start px-3 py-1.5 rounded-full bg-surface-container-high/80">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">SEAMLESS INTEGRATION</span>
          </div>
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight">
            Not just an outsourced team. <span className="text-primary font-semibold">An extension of yours.</span>
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
            Traditional outsourcing relies on siloed ticketing walls and delayed batch feedback. dotpbo dismantles the black box entirely.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            We embed directly into your company Slack, Jira boards, CRMs, and operating rituals. Our leads attend your sprint planning, mirror your documentation standards, and take genuine pride in moving your company metrics forward.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-[14px]">✓</span>
              <span className="font-body-md text-body-md text-on-surface">Zero-latency communication via your native enterprise channels</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-[14px]">✓</span>
              <span className="font-body-md text-body-md text-on-surface">Unified data security and strict compliance controls (SOC 2, ISO 27001)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-[14px]">✓</span>
              <span className="font-body-md text-body-md text-on-surface">Unified culture, shared values, and mutual SLA commitments</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative mt-8 lg:mt-0">
          <div className="relative w-full rounded-2xl bg-surface-container p-6 shadow-2xl overflow-hidden group">
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-container/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative flex items-center justify-center p-4 rounded-xl bg-surface-container-lowest">
              <img width="512" height="512" loading="lazy" alt="Architecture diagram of your enterprise and dotpbo extension unified into a single operational mesh with synchronized SLAs" className="w-full h-auto max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-[1.02]" src="/images/about/diagram-1.png"/>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-high/60 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">Single Unified Pipeline</span>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-mono">100% PROTOCOL SYNC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
