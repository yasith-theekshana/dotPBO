import { Link } from "@tanstack/react-router"
import { services } from "../../data/services"

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-slate-800/10 pb-10 md:flex-row md:items-end">
          <div>
          <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">SERVICES</div>
          <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
            A full outsourced finance function
          </h2>
          </div>
          <p className="max-w-lg text-[15px] leading-7 text-slate-500">
            Pick a single service or hand us the entire back office — every engagement is
            delivered by dedicated, senior-reviewed teams.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-slate-800/10 bg-slate-800/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, index) => (
            <div
              key={svc.id}
              className="group relative bg-white p-8 transition duration-300 hover:z-10 hover:bg-brand-50"
            >
              <div className="absolute right-7 top-7 text-xs font-bold text-slate-800/20">0{index + 1}</div>
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-xs font-extrabold text-brand-600 transition group-hover:bg-gradient-to-br group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                {svc.glyph}
              </div>
              <div className="mb-2.5 text-lg font-bold text-slate-800">{svc.title}</div>
              <p className="mb-7 min-h-[66px] text-sm leading-6 text-slate-500">{svc.shortDesc}</p>
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
