import { whyItems } from "../../data/about"

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">WHY HASANARA SOLUTIONS</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
            Built to Be More Than a Service Provider
          </h2>
        </div>
        <p className="text-base leading-relaxed text-slate-500">
          Clients choose Hasanara Solutions because we focus on long-term partnerships rather than
          short-term transactions.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyItems.map((w) => (
          <div
            key={w.title}
            className="rounded-2xl border border-white/90 bg-white/70 p-6 shadow-lg shadow-slate-800/5 backdrop-blur-md transition hover:-translate-y-1"
          >
            <div className="mb-2.5 text-sm font-bold tracking-wide text-brand-600">{w.title}</div>
            <div className="text-sm leading-relaxed text-slate-500">{w.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
