import { storyStages } from "../../data/about"

export default function OurStory() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">OUR STORY</div>
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
            Built Around a Simple Idea
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Businesses should spend more time growing and less time managing operational complexity. As
            businesses grow, their operational requirements become increasingly complex — managing
            finances, compliance, payroll, customer support, and administrative processes can consume
            valuable time and resources. We help businesses overcome these challenges by providing
            dependable expertise and scalable support, combining people, process, and technology to create
            practical solutions that deliver long-term value.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-2.5 left-7 top-2.5 w-0.5 bg-gradient-to-b from-brand-400 to-brand-600" />
          {storyStages.map((stage) => (
            <div key={stage.num} className="relative mb-11 flex gap-7 last:mb-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-base font-extrabold text-white ring-8 ring-white">
                {stage.num}
              </div>
              <div className="pt-2.5">
                <div className="mb-1.5 text-lg font-bold text-slate-800">{stage.title}</div>
                <div className="max-w-lg text-sm leading-relaxed text-slate-500">{stage.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
