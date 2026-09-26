import { features } from "../../data/content"

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 max-w-2xl">
        <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">WHY CHOOSE US</div>
        <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
          Built for accuracy at scale
        </h2>
      </div>

      <div className="grid gap-x-10 gap-y-0 border-y border-slate-800/10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, index) => (
          <div
            key={f.title}
            className="group border-b border-slate-800/10 py-7 lg:[&:nth-last-child(-n+4)]:border-b-0"
          >
            <div className="mb-5 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-[11px] font-extrabold text-brand-600">
              {f.glyph}
            </div><span className="text-[11px] font-bold text-slate-800/20">0{index + 1}</span></div>
            <div className="mb-2 text-[15px] font-bold text-slate-800">{f.title}</div>
            <div className="text-[13px] leading-relaxed text-slate-500">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
