import { useState } from "react"
import { testimonials } from "../../data/content"

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">TESTIMONIALS</div>
        <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
          Trusted by finance leaders
        </h2>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-slate-800/10 bg-white p-8 text-center shadow-[0_28px_70px_-42px_rgba(30,41,59,.4)] sm:p-12 lg:p-16">
        <div className="absolute left-8 top-4 text-7xl font-extrabold leading-none text-brand-100">“</div>
        <p className="relative mb-8 text-xl font-medium leading-9 tracking-[-.01em] text-slate-800 sm:text-2xl">&ldquo;{current.quote}&rdquo;</p>
        <div className="mb-0.5 text-[15px] font-bold text-slate-800">{current.name}</div>
        <div className="mb-7 text-[13px] text-slate-500">
          {current.role}, {current.company}
        </div>
        <div className="flex justify-center gap-2.5">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={
                i === active
                  ? "h-2 w-7 rounded-full bg-brand-500 transition-all"
                  : "h-2 w-2 rounded-full bg-slate-800/15 transition-all"
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
