export default function Contact() {
  return (
    <section className="w-full bg-surface-container-low py-24 relative overflow-hidden" id="contact">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary-container/15 blur-[150px]"></div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface-container p-8 sm:p-14 text-center shadow-2xl">
          <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-surface-container-highest/80 mx-auto mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">LET'S TALK OPERATIONS</span>
          </div>
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight mb-6">
            Let's build an operation designed <br className="hidden sm:inline"/>
            <span className="text-primary font-semibold">around your business.</span>
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you're trying to improve, scale or simplify. We'll engineer an outsourcing model tailored to your exact operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container transition-all active:scale-[0.98] shadow-[0_0_24px_rgba(255,122,33,0.35)] group" href="mailto:hello@hasanarasolutions.com">
              Speak to an Advisor
              <span aria-hidden="true" className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-surface-container-high text-on-surface font-label-md text-label-md font-medium rounded-lg hover:bg-surface-container-highest transition-colors" href="mailto:hello@hasanarasolutions.com?subject=Operations%20whitepaper%20request">
              Request Operations Whitepaper
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-outline-variant/20 text-label-sm text-on-surface-variant font-medium">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">lock</span>
              Confidential audit
            </span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">analytics</span>
              Custom SLA analysis
            </span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">support_agent</span>
              Dedicated solution architect
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
