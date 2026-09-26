import PartnershipGraphic from "./partnership-graphic"

export default function Hero() {
  return (
    <section id="about-hero" aria-labelledby="about-hero-title" className="about-hero overflow-hidden border-b border-outline-variant/30">
      <div className="relative mx-auto max-w-[1440px] px-margin-mobile pt-14 lg:px-margin lg:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 text-label-eyebrow font-semibold uppercase tracking-[0.24em] text-primary">
            <span aria-hidden="true" className="h-px w-7 bg-primary-container/60" />
            About dotpbo
            <span aria-hidden="true" className="h-px w-7 bg-primary-container/60" />
          </div>
          <h1 id="about-hero-title" className="about-hero-title font-display-xl font-semibold text-on-surface">
            Great operations start<br />with <span className="text-primary">a shared vision.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-on-surface-variant sm:text-body-xl">
            We bring people, process and technology together to help your business move forward. One team, connected by your goals.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="#contact" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary-container px-6 py-3.5 text-label-md font-semibold text-on-primary-container shadow-[0_8px_30px_-12px_#ff7a2190] transition hover:bg-tertiary-container">
              Meet Your Operations Partner
              <span aria-hidden="true" className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a href="#model" className="group inline-flex min-h-12 items-center justify-center gap-2 px-3 py-3 text-label-md font-medium text-on-surface transition hover:text-primary">
              Explore Our Approach
              <span aria-hidden="true" className="material-symbols-outlined text-lg text-primary transition-transform group-hover:translate-y-1">south</span>
            </a>
          </div>
        </div>
        <figure className="relative mx-auto mt-5 max-w-6xl sm:mt-0">
          <PartnershipGraphic />
          <figcaption className="relative mx-auto grid max-w-3xl grid-cols-3 gap-3 border-t border-outline-variant/30 pb-10 pt-5 text-center sm:gap-8 sm:pb-12">
            {[
              ["People", "Expertise with purpose"],
              ["Process", "Clarity at every step"],
              ["Technology", "Progress, connected"],
            ].map(([title, description]) => (
              <div key={title}><p className="font-headline-sm text-lg text-on-surface sm:text-xl">{title}</p><p className="mt-1 text-[11px] leading-relaxed text-outline sm:text-label-md">{description}</p></div>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
