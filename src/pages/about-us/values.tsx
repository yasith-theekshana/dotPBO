import { values } from "../../data/about"

export default function Values() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">WHAT DRIVES US</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
            The Principles Behind Everything We Do
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.num}
              className="rounded-[20px] border border-brand-500/15 bg-brand-50 p-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/20"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="h-[46px] w-[46px] rounded-xl bg-gradient-to-br from-brand-400 to-brand-600" />
                <div className="text-3xl font-extrabold text-brand-100">{v.num}</div>
              </div>
              <div className="mb-2.5 text-lg font-bold text-slate-800">{v.title}</div>
              <div className="text-sm leading-relaxed text-slate-500">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
