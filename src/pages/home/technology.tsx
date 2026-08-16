import { techGroups } from "../../data/content"

export default function Technology() {
  return (
    <section id="technology" className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">TECHNOLOGY STACK</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
            Modern platforms, senior oversight
          </h2>
        </div>

        <div className="space-y-8">
          {techGroups.map((grp) => (
            <div key={grp.title}>
              <div className="mb-3.5 text-sm font-bold text-slate-800">{grp.title}</div>
              <div className="flex flex-wrap gap-3.5">
                {grp.tools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-xl border border-slate-800/5 bg-brand-50 px-5 py-3.5 text-[13.5px] font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-500"
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
