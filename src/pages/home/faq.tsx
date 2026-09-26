import { useState } from "react"
import { faqs } from "../../data/content"

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32">
      <div className="max-w-xl">
        <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">FAQ</div>
        <h2 className="text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">Common questions</h2>
      </div>

      <div className="border-t border-slate-800/10">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <button
              key={faq.q}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="block w-full border-b border-slate-800/10 py-6 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-bold text-slate-800">{faq.q}</span>
                <span className="text-xl text-brand-500">{isOpen ? "−" : "+"}</span>
              </div>
              {isOpen && <p className="mt-3 text-sm leading-relaxed text-slate-500">{faq.a}</p>}
            </button>
          )
        })}
      </div>
    </section>
  )
}
