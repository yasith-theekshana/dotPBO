import { industries } from "../../data/content"

export default function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">INDUSTRIES SERVED</div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
          Sector experience that matters
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="rounded-2xl border border-slate-800/5 bg-white p-6 transition hover:shadow-lg hover:shadow-brand-500/15"
          >
            <div className="mb-3.5 h-10 w-10 rounded-[10px] bg-gradient-to-br from-brand-400 to-brand-600" />
            <div className="mb-1.5 text-[15px] font-bold text-slate-800">{ind.name}</div>
            <div className="text-[13px] leading-relaxed text-slate-500">{ind.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
