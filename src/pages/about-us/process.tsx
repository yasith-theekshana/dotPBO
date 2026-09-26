import { aboutProcessSteps } from "../../data/about"

export default function Process() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[36px]">
            From Understanding to Continuous Improvement
          </h2>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-8">
          {aboutProcessSteps.map((step, i) => (
            <div key={step.title} className="relative min-w-[170px] flex-1 text-center">
              {i > 0 && (
                <div className="absolute right-full top-[26px] hidden h-0.5 w-full bg-gradient-to-r from-brand-400 to-brand-600 sm:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-base font-extrabold text-white">
                {i + 1}
              </div>
              <div className="mb-2 text-sm font-bold tracking-wide text-slate-800">{step.title}</div>
              <div className="text-[13.5px] leading-relaxed text-slate-500">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
