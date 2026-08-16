import { features } from "../../data/content"

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">WHY CHOOSE US</div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
          Built for accuracy at scale
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-800/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/15"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-xs font-extrabold text-brand-600">
              {f.glyph}
            </div>
            <div className="mb-2 text-[15px] font-bold text-slate-800">{f.title}</div>
            <div className="text-[13px] leading-relaxed text-slate-500">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
