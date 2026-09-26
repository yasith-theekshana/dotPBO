import { caseStudies } from "../../data/content"

export default function CaseStudies() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">CASE STUDIES</div>
          <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
            Outcomes, not just output
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((cs, index) => (
            <div key={cs.title} className="rounded-2xl border border-brand-500/15 bg-brand-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(30,41,59,.35)]">
              <div className="mb-6 flex items-center justify-between"><div className="text-base font-bold text-slate-800">{cs.title}</div><span className="text-xs font-bold text-brand-500">0{index + 1}</span></div>
              <div className="mb-1 text-xs font-bold text-brand-600">CHALLENGE</div>
              <p className="mb-3.5 text-[13.5px] leading-relaxed text-slate-500">{cs.challenge}</p>
              <div className="mb-1 text-xs font-bold text-brand-600">SOLUTION</div>
              <p className="mb-5 text-[13.5px] leading-relaxed text-slate-500">{cs.solution}</p>
              <div className="flex gap-3 border-t border-brand-500/15 pt-5">
                <div className="flex-1 rounded-xl bg-white p-3 text-center">
                  <div className="text-[11px] text-slate-500">BEFORE</div>
                  <div className="text-[15px] font-extrabold text-slate-800">{cs.before}</div>
                </div>
                <div className="flex-1 rounded-xl bg-brand-100 p-3 text-center">
                  <div className="text-[11px] text-brand-600">AFTER</div>
                  <div className="text-[15px] font-extrabold text-brand-600">{cs.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
