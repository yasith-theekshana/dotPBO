const pillars = [
  { icon: "groups", title: "The right people", description: "Dedicated specialists who become part of your team." },
  { icon: "account_tree", title: "A better process", description: "Clear workflows. Shared standards. Consistent delivery." },
  { icon: "memory", title: "Smarter technology", description: "Connected tools that make every day run better." },
]

export default function Hero() {
  return (
    <section id="about-hero" aria-labelledby="about-hero-title" className="about-hero border-b border-outline-variant/30">
      <div className="mx-auto max-w-[1440px] px-margin-mobile lg:px-margin">
        <div className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3 text-label-eyebrow font-semibold uppercase tracking-[0.2em] text-primary">
              <span aria-hidden="true" className="h-px w-9 shrink-0 bg-primary-container" />
              The people behind your progress
            </div>
            <h1 id="about-hero-title" className="about-hero-title font-display-xl font-semibold text-on-surface">
              Better operations.<br /><span className="text-primary">Built together.</span>
            </h1>
            <p className="mt-7 max-w-lg text-body-xl text-on-surface-variant">
              We’re dotpbo. Your people, process and technology partner — helping you simplify the everyday and build what comes next.
            </p>
            <p className="mt-4 max-w-lg text-body-lg text-outline">
              We get to know your business, build around your needs, and work as an extension of your team. Because stronger operations start with a real partnership.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary-container px-6 py-3.5 text-label-md font-semibold text-on-primary-container shadow-[0_8px_30px_-12px_#ff7a2190] transition hover:bg-tertiary-container">
                Talk to Our Team
                <span aria-hidden="true" className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a href="#model" className="group inline-flex min-h-12 items-center justify-center gap-2 px-3 py-3 text-label-md font-medium text-on-surface transition hover:text-primary">
                How We Work
                <span aria-hidden="true" className="material-symbols-outlined text-lg text-primary transition-transform group-hover:translate-y-1">south</span>
              </a>
            </div>
            <div className="mt-10 flex items-start gap-3 border-t border-outline-variant/30 pt-6 text-body-md text-on-surface-variant">
              <span aria-hidden="true" className="material-symbols-outlined text-xl text-primary">handshake</span>
              <span>Your goals. Our shared commitment.</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="about-hero-orbit" />
            <div className="relative overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-low/90 p-5 shadow-[0_24px_80px_-32px_#000] sm:p-8">
              <div className="mb-8 flex items-center justify-between gap-4 border-b border-outline-variant/30 pb-5">
                <span className="font-headline-sm text-2xl font-semibold tracking-tight text-on-surface">dotpbo<span className="text-primary-container">.</span></span>
                <span className="text-right text-label-eyebrow uppercase tracking-[0.16em] text-outline">Built around you</span>
              </div>
              <div className="space-y-3">
                {pillars.map((pillar, index) => (
                  <div key={pillar.icon} className="relative flex items-start gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container p-4 transition-colors hover:border-primary-container/50 sm:p-5">
                    <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-container/20 bg-primary-container/10 text-primary"><span className="material-symbols-outlined text-xl">{pillar.icon}</span></span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-headline-sm text-xl font-medium text-on-surface">{pillar.title}</h2>
                      <p className="mt-1 text-body-md text-on-surface-variant">{pillar.description}</p>
                    </div>
                    <span aria-hidden="true" className="hidden pt-1 font-mono text-xs text-outline sm:block">0{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-primary-container/25 bg-primary-container/10 p-4 sm:p-5">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl text-primary">hub</span>
                <div><p className="font-headline-sm text-xl font-medium text-on-surface">One connected partnership.</p><p className="mt-1 text-label-md text-on-surface-variant">Aligned with your business. Ready to grow.</p></div>
              </div>
            </div>
            <p className="mt-5 text-center text-label-sm uppercase tracking-[0.2em] text-outline">Human expertise. Connected thinking.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
