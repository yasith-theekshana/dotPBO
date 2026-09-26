export default function Approach() {
  return (
    <section id="about-approach" className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-24">
      <div className="flex flex-col space-y-4 max-w-3xl mb-16">
        <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded bg-surface-container-high/60">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
          <span className="font-label-eyebrow text-label-eyebrow text-primary uppercase tracking-widest">OUR APPROACH</span>
        </div>
        <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight">
          We don't start with a predefined solution.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Every organization operates differently. We begin by understanding the business, its processes, systems, customers, challenges and objectives before designing an outsourcing model.
        </p>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-label-md text-primary font-bold">01</span>
              <span aria-hidden="true" className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">search_insights</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Understand</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Deep workflow forensics, tool stack audits, and baseline latency discovery.</p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary font-medium">Stage 01 • Audit</div>
        </div>
        <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-label-md text-primary font-bold">02</span>
              <span aria-hidden="true" className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">architecture</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Design</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Custom SLA architecture, escalation rules, and data governance blueprints.</p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary font-medium">Stage 02 • Blueprint</div>
        </div>
        <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-label-md text-primary font-bold">03</span>
              <span aria-hidden="true" className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">group_add</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Build</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Targeted specialist vetting, environment integration, and sandbox testing.</p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary font-medium">Stage 03 • Assembly</div>
        </div>
        <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-label-md text-primary font-bold">04</span>
              <span aria-hidden="true" className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">rocket_launch</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Operate</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Live high-precision execution, active SLA supervision, and performance telemetry.</p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary font-medium">Stage 04 • Execution</div>
        </div>
        <div className="p-6 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-label-md text-primary font-bold">05</span>
              <span aria-hidden="true" className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">auto_mode</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">Improve</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Continuous tuning, algorithmic copilot adoption, and unit cost reduction.</p>
          </div>
          <div className="mt-8 pt-4 border-t border-outline-variant/20 font-label-sm text-label-sm text-primary font-medium">Stage 05 • Evolution</div>
        </div>
      </div>
    </section>
  )
}
