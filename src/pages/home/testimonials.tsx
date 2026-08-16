import { useState } from "react"
import { testimonials } from "../../data/content"

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">TESTIMONIALS</div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[40px]">
          Trusted by finance leaders
        </h2>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/70 bg-white/60 p-12 text-center shadow-xl shadow-slate-800/10 backdrop-blur-xl">
        <p className="mb-7 text-lg leading-relaxed text-slate-800">&ldquo;{current.quote}&rdquo;</p>
        <div className="mb-0.5 text-[15px] font-bold text-slate-800">{current.name}</div>
        <div className="mb-6 text-[13.5px] text-slate-500">
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
                  ? "h-2.5 w-2.5 rounded-full bg-brand-500"
                  : "h-2.5 w-2.5 rounded-full bg-slate-800/15"
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
