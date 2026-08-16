import { Link } from "@tanstack/react-router"
import { services } from "../../data/services"

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">SERVICES</div>
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
            A full outsourced finance function
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Pick a single service or hand us the entire back office — every engagement is
            delivered by dedicated, senior-reviewed teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group rounded-[20px] border border-brand-500/15 bg-brand-50 p-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/20"
            >
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-extrabold text-white">
                {svc.glyph}
              </div>
              <div className="mb-2.5 text-lg font-bold text-slate-800">{svc.title}</div>
              <p className="mb-5 min-h-[66px] text-sm leading-relaxed text-slate-500">{svc.shortDesc}</p>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: svc.id }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition group-hover:gap-2.5"
              >
                Explore Service <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
