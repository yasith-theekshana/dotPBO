export default function CustomSolutions() {
  return (
    <section id="services-custom-solutions" className="w-full bg-background py-20 relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="relative bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container rounded-2xl p-8 lg:p-14 overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-container/15 blur-[90px]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary-container/20 text-primary-container font-label-eyebrow text-label-eyebrow tracking-widest uppercase font-semibold">
                DON'T SEE YOUR PROCESS?
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
                Your operation doesn't need to fit inside a box.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                dotpbo routinely designs custom operational pods, proprietary workflows, and dedicated squads around highly specialized or hybrid operational models.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl mt-0.5">extension</span>
                  <div>
                    <h4 className="font-label-md text-label-md font-semibold text-on-surface">Bespoke Tooling Integrations</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Seamless ingestion with your proprietary APIs &amp; internal stacks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl mt-0.5">shield</span>
                  <div>
                    <h4 className="font-label-md text-label-md font-semibold text-on-surface">Custom Infosec Boundaries</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Isolated VPCs, biometric security rooms, and localized data stores.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl mt-0.5">dynamic_feed</span>
                  <div>
                    <h4 className="font-label-md text-label-md font-semibold text-on-surface">Elastic Pod Scaling</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Instantly ramp capacity up or down according to seasonality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary-container text-xl mt-0.5">engineering</span>
                  <div>
                    <h4 className="font-label-md text-label-md font-semibold text-on-surface">Dedicated Solution Architects</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Engineered SOP design and continuous Six Sigma governance.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-primary-container text-on-primary-container px-6 py-3 rounded-sm transition-all hover:bg-tertiary-container shadow-md" href="#contact">
                  Build a Custom Solution →
                </a>
                <a className="inline-flex items-center justify-center font-label-md text-label-md font-medium text-on-surface bg-surface-container-lowest/80 hover:bg-surface-container-lowest px-6 py-3 rounded-sm transition-all" href="#contact">
                  Schedule Workflow Diagnostic
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-lowest/90 rounded-xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase text-outline">ENGINEERING SPRINT MODEL</span>
                <span className="font-label-sm text-label-sm text-primary font-mono">PHASE 01: AUDIT</span>
              </div>
              <div className="space-y-3 font-label-sm text-label-sm">
                <div className="p-3 rounded bg-surface-container flex items-center justify-between">
                  <span className="text-on-surface">Process Discovery &amp; Shadowing</span>
                  <span className="text-primary font-semibold">Days 1 - 3</span>
                </div>
                <div className="p-3 rounded bg-surface-container flex items-center justify-between">
                  <span className="text-on-surface">SOP Matrix &amp; KPI Calibration</span>
                  <span className="text-primary font-semibold">Days 4 - 7</span>
                </div>
                <div className="p-3 rounded bg-surface-container flex items-center justify-between">
                  <span className="text-on-surface">Squad Onboarding &amp; Sandbox Runs</span>
                  <span className="text-primary font-semibold">Days 8 - 12</span>
                </div>
                <div className="p-3 rounded bg-surface-container-high flex items-center justify-between text-primary">
                  <span className="font-semibold">Go-Live: Full SLA Cutover</span>
                  <span className="font-bold">Day 14</span>
                </div>
              </div>
              <div className="pt-2 text-center">
                <span className="font-label-sm text-label-sm text-outline">Guaranteed zero disruption to ongoing customer-facing operations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
