import { useState } from "react"
import { faqs } from "../../data/content"

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-28 lg:px-10">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">FAQ</div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">Common questions</h2>
      </div>

      <div>
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <button
              key={faq.q}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="block w-full border-b border-slate-800/10 py-5 text-left"
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
