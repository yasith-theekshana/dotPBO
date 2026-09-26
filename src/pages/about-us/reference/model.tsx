export default function Model() {
  return (
    <section className="w-full bg-surface-container-lowest py-24 relative" id="model">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-surface-container-high/60 mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">THE TRI-CORE SYSTEM</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight mb-3">
            Three elements. One connected operation.
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            True operational resilience requires harmony across your talent, workflows, and technological foundation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[28px]">person</span>
              </div>
              <div className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest mb-1">01. CAPABILITY</div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-4">People</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Skilled teams aligned with your operational requirements. Top 2% domain specialists configured directly into your workflow cadence.
              </p>
            </div>
            <div className="space-y-3 pt-6 border-t border-outline-variant/20">
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span>Rigorous QA &amp; Competency Testing</span>
              </div>
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">school</span>
                <span>Continuous Domain Upskilling</span>
              </div>
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">manage_accounts</span>
                <span>Dedicated Delivery Leadership</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[28px]">schema</span>
              </div>
              <div className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest mb-1">02. CADENCE</div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-4">Process</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Structured workflows designed for consistency, accountability and performance. ISO-certified rigor with fail-safe escalation protocols.
              </p>
            </div>
            <div className="space-y-3 pt-6 border-t border-outline-variant/20">
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">adjust</span>
                <span>Six Sigma Process Baseline</span>
              </div>
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">menu_book</span>
                <span>Standardized Enterprise SOPs</span>
              </div>
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">monitor_heart</span>
                <span>Live Milestone &amp; SLA Tracking</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[28px]">integration_instructions</span>
              </div>
              <div className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest mb-1">03. LEVERAGE</div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-4">Technology</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Modern tools and integrations that help teams operate efficiently and provide visibility. Deep CRM/ERP hooks and unified telemetry.
              </p>
            </div>
            <div className="space-y-3 pt-6 border-t border-outline-variant/20">
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">api</span>
                <span>API-First Integration Mesh</span>
              </div>
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">smart_toy</span>
                <span>Automated Copilots &amp; RPA</span>
              </div>
              <div className="flex items-center text-label-md text-on-surface gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">insights</span>
                <span>Real-Time Predictive Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
