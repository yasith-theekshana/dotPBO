import { milestones } from "../../data/content"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">ABOUT US</div>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
          Fifteen years building trusted back-office teams
        </h2>
        <p className="text-base leading-relaxed text-slate-500">
          Hasanara Solutions was founded to give growing companies a finance and operations
          function they never have to worry about. Our mission is simple: absorb the complexity
          of compliance, accounting and support so our clients can focus entirely on growth.
          Every engagement is guided by accuracy, confidentiality and measurable business impact.
        </p>
      </div>

      <ol className="relative">
        <div className="absolute inset-y-0 left-[7px] w-0.5 bg-gradient-to-b from-brand-400 to-brand-600 md:left-1/2 md:-translate-x-1/2" />
        {milestones.map((m, i) => {
          const onRight = i % 2 === 0
          return (
            <li key={m.year} className="relative mb-10 pl-8 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 ring-8 ring-brand-50 md:left-1/2 md:-translate-x-1/2" />
              <div className={onRight ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
                <div className="inline-block rounded-2xl border border-slate-800/5 bg-white px-6 py-5 shadow-md shadow-slate-800/5">
                  <div className="mb-1 text-sm font-extrabold text-brand-500">{m.year}</div>
                  <div className="mb-1 text-base font-bold text-slate-800">{m.title}</div>
                  <div className="text-sm text-slate-500">{m.desc}</div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
