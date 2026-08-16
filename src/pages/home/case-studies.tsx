import { caseStudies } from "../../data/content"

export default function CaseStudies() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">CASE STUDIES</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
            Outcomes, not just output
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="rounded-2xl bg-brand-50 p-7">
              <div className="mb-3.5 text-base font-bold text-slate-800">{cs.title}</div>
              <div className="mb-1 text-xs font-bold text-brand-600">CHALLENGE</div>
              <p className="mb-3.5 text-[13.5px] leading-relaxed text-slate-500">{cs.challenge}</p>
              <div className="mb-1 text-xs font-bold text-brand-600">SOLUTION</div>
              <p className="mb-5 text-[13.5px] leading-relaxed text-slate-500">{cs.solution}</p>
              <div className="flex gap-3">
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
