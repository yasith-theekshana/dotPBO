export default function Purpose() {
  return (
    <section id="about-purpose" className="w-full bg-surface-container-low py-20 relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded bg-surface-container-highest/60">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">OUR PURPOSE</span>
            </div>
            <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight">
              Making complexity easier to manage.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col space-y-8 lg:pl-10">
            <p className="font-body-xl text-body-xl text-on-surface leading-relaxed border-l-2 border-primary-container pl-6 py-1">
              “As organizations grow, operational complexity grows with them. Our purpose is to help businesses simplify that complexity by creating outsourcing solutions that provide additional capability, structured processes and dependable operational support.”
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Global scale doesn't have to imply fragmented handoffs or opaque offshore management. We strip away the overhead of legacy BPO constructs to deliver a transparent, high-fidelity operational layer engineered directly into your native tooling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between">
                <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary font-semibold tracking-tight">99.4%</span>
                <span className="font-label-md text-label-md text-on-surface font-medium mt-2">Workflow Precision</span>
                <span className="font-body-md text-body-md text-on-surface-variant text-xs mt-1">Multi-stage QA verified</span>
              </div>
              <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between">
                <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary font-semibold tracking-tight">3.2x</span>
                <span className="font-label-md text-label-md text-on-surface font-medium mt-2">Faster Onboarding</span>
                <span className="font-body-md text-body-md text-on-surface-variant text-xs mt-1">Accelerated team ramp</span>
              </div>
              <div className="p-6 rounded-xl bg-surface-container flex flex-col justify-between">
                <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary font-semibold tracking-tight">100%</span>
                <span className="font-label-md text-label-md text-on-surface font-medium mt-2">Audit-Grade Transparency</span>
                <span className="font-body-md text-body-md text-on-surface-variant text-xs mt-1">SOC 2 Type II baseline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
