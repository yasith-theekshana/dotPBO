import { industries } from "../../data/content"

export default function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">INDUSTRIES SERVED</div>
        <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
          Sector experience that matters
        </h2></div><div className="hidden h-px flex-1 bg-slate-800/10 md:mb-3 md:ml-10 md:block" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, index) => (
          <div
            key={ind.name}
            className="group rounded-2xl border border-slate-800/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_20px_50px_-28px_rgba(30,41,59,.35)]"
          >
            <div className="mb-7 flex items-center justify-between"><div className="h-2.5 w-2.5 rounded-full bg-brand-500 ring-4 ring-brand-100" /><span className="text-[11px] font-bold text-slate-800/20">0{index + 1}</span></div>
            <div className="mb-1.5 text-[15px] font-bold text-slate-800">{ind.name}</div>
            <div className="text-[13px] leading-relaxed text-slate-500">{ind.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
