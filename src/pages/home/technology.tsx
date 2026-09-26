import { techGroups } from "../../data/content"

export default function Technology() {
  return (
    <section id="technology" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">TECHNOLOGY STACK</div>
          <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
            Modern platforms, senior oversight
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800/10">
          {techGroups.map((grp) => (
            <div key={grp.title} className="grid gap-5 border-b border-slate-800/10 p-6 last:border-b-0 md:grid-cols-[220px_1fr] md:items-center">
              <div className="text-sm font-bold text-slate-800">{grp.title}</div>
              <div className="flex flex-wrap gap-2.5">
                {grp.tools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-full border border-brand-500/15 bg-brand-50 px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition hover:border-brand-500"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
