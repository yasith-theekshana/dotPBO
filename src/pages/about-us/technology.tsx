import { techCategories } from "../../data/about"

export default function Technology() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">OUR TECHNOLOGY</div>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
          Technology That Makes Better Business Possible
        </h2>
        <p className="text-base leading-relaxed text-slate-500">
          We use modern cloud-based platforms and business applications to make processes faster, more
          accurate, connected, and transparent.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((tc) => (
          <div
            key={tc.title}
            className="rounded-2xl border border-slate-800/5 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/15"
          >
            <div className="mb-2.5 text-sm font-bold text-slate-800">{tc.title}</div>
            <div className="text-[13.5px] leading-relaxed text-slate-500">{tc.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
