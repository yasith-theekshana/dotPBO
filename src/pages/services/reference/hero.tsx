import ServiceGraphic from "./service-graphic"

export default function Hero() {
  return (
    <section id="services-hero" className="relative w-full overflow-hidden bg-background pt-10 pb-20">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-primary-container/10 blur-[130px]"></div>
      <div className="pointer-events-none absolute -bottom-20 left-10 h-[380px] w-[380px] rounded-full bg-surface-container-high/60 blur-[100px]"></div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-surface-container-high text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              <span className="font-label-eyebrow text-label-eyebrow tracking-widest uppercase text-on-surface">OUR SERVICES</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface font-semibold tracking-tight leading-tight">
              The operational support your business <span className="text-primary-container bg-gradient-to-r from-primary-container via-tertiary-container to-primary bg-clip-text text-transparent">needs to scale.</span>
            </h1>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
              From customer-facing operations to essential back-office processes, dotpbo provides flexible outsourcing solutions engineered directly around your enterprise requirements.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-primary-container text-on-primary-container px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-tertiary-container shadow-[0_0_24px_rgba(255,122,33,0.3)] hover:shadow-[0_0_32px_rgba(255,122,33,0.45)] active:scale-[0.98]" href="#contact">
                Discuss Your Requirements →
              </a>
              <a className="inline-flex items-center justify-center font-label-md text-label-md font-medium text-on-surface bg-surface-container-high/60 hover:bg-surface-container-high px-7 py-3.5 rounded-sm transition-all duration-300 shadow-sm hover:text-primary" href="#services-grid">
                Explore Capabilities ↓
              </a>
            </div>
            <div className="pt-6 flex flex-wrap items-center gap-y-3 gap-x-8 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary-container text-lg">verified</span>
                <span className="font-label-sm text-label-sm">ISO 27001 &amp; SOC-2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-primary text-lg">bolt</span>
                <span className="font-label-sm text-label-sm">Sub-14-Day Squad Provisioning</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-surface-container-low/90 backdrop-blur-md rounded-xl p-4 lg:p-6 shadow-2xl overflow-hidden group">
              <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg bg-surface-container-lowest/60">
                <ServiceGraphic />
                <div className="pointer-events-none absolute inset-0 bg-radial from-primary-container/10 via-transparent to-transparent"></div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="tracking-wide">Hex-Mesh Orchestration</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Latency: <strong className="text-on-surface">&lt;12ms</strong></span>
                  <span className="text-primary font-semibold">100% SLA Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-surface-container-low rounded-lg p-6 lg:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="block font-headline-lg text-headline-lg font-semibold text-primary">6</span>
              <span className="block font-label-md text-label-md text-on-surface-variant font-medium">Core Disciplines</span>
            </div>
            <div className="space-y-1">
              <span className="block font-headline-lg text-headline-lg font-semibold text-primary">99.98%</span>
              <span className="block font-label-md text-label-md text-on-surface-variant font-medium">Process Precision</span>
            </div>
            <div className="space-y-1">
              <span className="block font-headline-lg text-headline-lg font-semibold text-primary">24/7/365</span>
              <span className="block font-label-md text-label-md text-on-surface-variant font-medium">Dedicated Coverage</span>
            </div>
            <div className="space-y-1">
              <span className="block font-headline-lg text-headline-lg font-semibold text-primary">Zero</span>
              <span className="block font-label-md text-label-md text-on-surface-variant font-medium">Overhead Transition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
