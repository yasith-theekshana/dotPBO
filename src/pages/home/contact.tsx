import { useState } from "react"
import { services } from "../../data/services"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-brand-500/15 bg-brand-50 lg:grid-cols-[.85fr_1.15fr]">
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mb-4 text-[11px] font-bold tracking-[.18em] text-brand-500">CONTACT</div>
          <h2 className="mb-5 text-3xl font-extrabold tracking-[-.03em] text-slate-800 sm:text-[42px]">
            Let&rsquo;s talk about your back office
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-slate-500">
            Tell us what&rsquo;s slowing you down and we&rsquo;ll come back with a plan within one
            business day.
          </p>

          <div className="mb-7 flex flex-col gap-4">
            <div>
              <div className="text-xs font-bold text-slate-400">ADDRESS</div>
              <div className="text-[14.5px] font-semibold text-slate-800">
                14 Galle Road, Colombo 03, Sri Lanka
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400">PHONE</div>
              <div className="text-[14.5px] font-semibold text-slate-800">+94 11 234 5678</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400">EMAIL</div>
              <div className="text-[14.5px] font-semibold text-slate-800">hello@hasanarasolutions.com</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400">HOURS</div>
              <div className="text-[14.5px] font-semibold text-slate-800">Mon–Fri, 9:00–18:00</div>
            </div>
          </div>

          <div className="flex h-36 items-center justify-center rounded-2xl border border-brand-500/10 bg-[repeating-linear-gradient(45deg,#FEEED6,#FEEED6_10px,#FFF8F2_10px,#FFF8F2_20px)] font-mono text-xs text-brand-600">
            map placeholder
          </div>
        </div>

        <div className="border-t border-brand-500/15 bg-white p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-2xl text-white">
                ✓
              </div>
              <div className="mb-2 text-lg font-bold text-slate-800">Thanks — we&rsquo;ll be in touch</div>
              <div className="text-sm text-slate-500">Our team typically responds within one business day.</div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input
                required
                placeholder="Name"
                className="rounded-xl border border-slate-800/10 bg-brand-50/40 px-4 py-3.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
              <input
                placeholder="Company"
                className="rounded-xl border border-slate-800/10 bg-brand-50/40 px-4 py-3.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="rounded-xl border border-slate-800/10 bg-brand-50/40 px-4 py-3.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
              <input
                placeholder="Phone"
                className="rounded-xl border border-slate-800/10 bg-brand-50/40 px-4 py-3.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
              <select
                defaultValue=""
                className="rounded-xl border border-slate-800/10 bg-brand-50/40 px-4 py-3.5 text-sm text-slate-500 focus:border-brand-500 focus:bg-white focus:outline-none sm:col-span-2"
              >
                <option value="" disabled>
                  Service Interested In
                </option>
                {services.map((svc) => (
                  <option key={svc.id} value={svc.id}>
                    {svc.title}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="resize-none rounded-xl border border-slate-800/10 bg-brand-50/40 px-4 py-3.5 text-sm focus:border-brand-500 focus:bg-white focus:outline-none sm:col-span-2"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 py-4 text-sm font-bold text-white shadow-lg shadow-brand-500/40 transition hover:-translate-y-0.5 sm:col-span-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
