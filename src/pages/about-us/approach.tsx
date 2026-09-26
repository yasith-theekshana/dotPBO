import { approachItems } from "../../data/about"

export default function Approach() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">HOW WE WORK</div>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
          People. Process. Technology.
        </h2>
        <p className="text-base leading-relaxed text-slate-500">
          Great outsourcing is not simply about transferring tasks. It&rsquo;s about understanding the
          business behind those tasks. Our approach combines three essential elements.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {approachItems.map((a) => (
          <div
            key={a.num}
            className="rounded-2xl border border-slate-800/5 bg-white p-9 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/15"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-extrabold text-white">
              {a.num}
            </div>
            <div className="mb-2.5 text-[17px] font-bold tracking-wide text-slate-800">{a.title}</div>
            <div className="text-sm leading-relaxed text-slate-500">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
