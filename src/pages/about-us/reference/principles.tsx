export default function Principles() {
  return (
    <section id="about-principles" className="w-full bg-surface-container-low py-24 relative">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded bg-surface-container-high/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">CORE TENETS</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight">
            What guides the way we work.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            The non-negotiable operational principles behind every partnership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">visibility</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Transparency</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Complete visibility into KPIs, live dashboards, and daily operational health. No hidden queues, no obfuscated SLAs.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Accountability</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Definite SLA ownership, dedicated delivery leads, and proactive bottleneck resolution before issues reach stakeholders.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Quality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Uncompromising precision, continuous double-blind auditing, and enterprise-grade benchmarks across every delivery vertical.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">sync_alt</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Flexibility</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Elastic team structures that flex seamlessly up or down with your seasonal business volume and changing product priorities.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">trending_up</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Continuous Improvement</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Relentless process refinement, workflow automation, and margin enhancement. We don't just maintain; we systematically optimize.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-6">
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">handshake</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Partnership</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Shared mission alignment where our operators integrate directly as a dedicated extension of your own domestic enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
