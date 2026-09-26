import { Link } from "@tanstack/react-router"

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-28 text-center lg:px-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-2xl" />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-[40px]">
          Let&rsquo;s Build a Smarter Way to Work.
        </h2>
        <p className="mb-9 text-[16.5px] leading-relaxed text-white/90">
          Whether you&rsquo;re looking to outsource a single process or build a long-term operational
          partnership, we&rsquo;re ready to understand your needs and explore how we can help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-brand-600 shadow-lg shadow-slate-800/15 transition hover:-translate-y-0.5"
          >
            Get a Free Consultation →
          </Link>
          <Link
            to="/"
            hash="services"
            className="rounded-xl border border-white/50 bg-white/15 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/25"
          >
            Explore Our Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
