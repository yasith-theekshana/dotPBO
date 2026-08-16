import { Link, useParams } from "@tanstack/react-router"
import { services } from "../../data/services"
import { processSteps } from "../../data/content"

export default function ServiceDetailPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" })
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="mb-4 text-2xl font-bold text-slate-800">Service not found</h1>
        <Link to="/" className="font-semibold text-brand-600">
          ← Back home
        </Link>
      </section>
    )
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-32 lg:px-10">
        <Link to="/" hash="services" className="text-sm font-bold text-brand-600">
          ← Back to Services
        </Link>
      </div>

      <section className="relative overflow-hidden px-6 py-16 lg:px-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-brand-400/30 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-extrabold text-white">
              {service.glyph}
            </div>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[44px]">
              {service.title}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-500">{service.shortDesc}</p>
          </div>
          <div className="animate-float-y h-64 rounded-3xl border border-white/80 bg-white/60 shadow-2xl shadow-slate-800/10 backdrop-blur-xl" />
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">BUSINESS CHALLENGES</div>
          <p className="text-[15.5px] leading-relaxed text-slate-500">{service.challenges}</p>
        </div>
        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">OUR SOLUTION</div>
          <p className="text-[15.5px] leading-relaxed text-slate-500">{service.solution}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-11 text-center text-[30px] font-extrabold tracking-tight text-slate-800">
            Benefits
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-brand-50 p-6 transition hover:-translate-y-1">
                <div className="mb-2 text-[15px] font-bold text-brand-600">{b.title}</div>
                <div className="text-[13px] leading-relaxed text-slate-500">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <h3 className="mb-9 text-center text-[30px] font-extrabold tracking-tight text-slate-800">
          Scope of Work
        </h3>
        <div className="flex flex-col gap-3.5">
          {service.scope.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3.5 rounded-xl border border-slate-800/5 bg-white px-5 py-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-extrabold text-brand-600">
                ✓
              </span>
              <span className="text-sm font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-10">
        <h3 className="mb-12 text-center text-[30px] font-extrabold tracking-tight text-slate-800">
          Process Timeline
        </h3>
        <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-center gap-y-8">
          {processSteps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-lg font-extrabold text-white">
                  {step.num}
                </div>
                <div className="w-24 text-[13.5px] font-bold text-slate-800">{step.label}</div>
              </div>
              {i < processSteps.length - 1 && (
                <div className="mb-7 h-0.5 w-12 bg-gradient-to-r from-brand-400 to-brand-600" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-20 text-center lg:px-10">
        <h3 className="mb-4 text-[32px] font-extrabold tracking-tight text-white">Ready to hand this off?</h3>
        <p className="mb-7 text-[15.5px] text-white/90">Talk to us about {service.title} today.</p>
        <Link
          to="/"
          hash="contact"
          className="inline-block rounded-xl bg-white px-8 py-4 text-sm font-bold text-brand-600"
        >
          Get a Free Consultation
        </Link>
      </section>
    </div>
  )
}
