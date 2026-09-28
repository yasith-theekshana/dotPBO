export default function Contact() {
  return (
    <section className="w-full bg-background py-24 relative overflow-hidden" id="contact">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary-container/10 rounded-full blur-[140px]"></div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="bg-surface-container-lowest rounded-2xl p-10 lg:p-16 shadow-2xl text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary-container/15 text-primary font-label-eyebrow text-label-eyebrow tracking-widest uppercase font-semibold">
              LET'S TALK OPERATIONS
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
              Tell us what you need to improve or scale.
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Speak directly with our operational architects to receive a tailored feasibility audit, capability mapping, and transparent cost modeling within 24 hours.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-primary-container text-on-primary-container px-8 py-4 rounded-sm transition-all duration-300 hover:bg-tertiary-container shadow-[0_0_28px_rgba(255,122,33,0.35)] active:scale-[0.98]" href="mailto:hello@hasanarasolutions.com">
              Speak to an Advisor →
            </a>
            <a className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-medium text-on-surface bg-surface-container-high hover:bg-surface-container px-8 py-4 rounded-sm transition-all" href="mailto:hello@hasanarasolutions.com?subject=Capabilities%20overview%20request">
              Request Capabilities Overview
            </a>
          </div>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-outline font-label-sm text-label-sm">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-base">lock</span>
              <span>Confidential operational diagnostic</span>
            </div>
            <span className="hidden sm:inline text-surface-container-highest">•</span>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-base">analytics</span>
              <span>Custom SLA analysis</span>
            </div>
            <span className="hidden sm:inline text-surface-container-highest">•</span>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-primary text-base">badge</span>
              <span>Dedicated solution architect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
