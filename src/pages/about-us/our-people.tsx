import { teamGroups } from "../../data/about"

export default function OurPeople() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">OUR PEOPLE</div>
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
            People Behind the Solutions
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Our team brings together professionals with expertise across business operations, finance,
            accounting, technology, customer support, and process management. We believe that great
            results come from great people working together with a shared commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {teamGroups.map((tg) => (
            <div
              key={tg.initials}
              className="rounded-2xl bg-brand-50 px-4 py-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/15"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-extrabold text-white">
                {tg.initials}
              </div>
              <div className="text-sm font-bold text-slate-800">{tg.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
