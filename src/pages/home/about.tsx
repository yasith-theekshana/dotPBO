import { milestones } from "../../data/content"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-16 grid gap-8 border-b border-slate-800/10 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">ABOUT US</div><h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-.03em] text-slate-800 sm:text-[42px]">Fifteen years building trusted back-office teams</h2></div>
        <p className="max-w-2xl text-[15px] leading-7 text-slate-500 lg:justify-self-end">Hasanara Solutions was founded to give growing companies a finance and operations function they never have to worry about. Our mission is simple: absorb the complexity of compliance, accounting and support so our clients can focus entirely on growth. Every engagement is guided by accuracy, confidentiality and measurable business impact.</p>
      </div>
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-slate-800/10 bg-slate-800/10 md:grid-cols-5">{milestones.map((milestone) => <li key={milestone.year} className="group bg-white p-6 transition hover:bg-brand-50 sm:p-7"><div className="mb-8 flex items-center justify-between"><div className="text-sm font-extrabold text-brand-500">{milestone.year}</div><span className="h-2 w-2 rounded-full bg-brand-500 ring-4 ring-brand-100" /></div><div className="mb-2 text-base font-bold text-slate-800">{milestone.title}</div><div className="text-[13px] leading-6 text-slate-500">{milestone.desc}</div></li>)}</ol>
    </section>
  )
}
