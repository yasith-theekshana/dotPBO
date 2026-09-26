import { hubLabels } from "../../data/about"

const cardPositions = [
  "absolute left-[6%] top-[10%]",
  "absolute right-[4%] top-[10%]",
  "absolute bottom-[10%] left-[4%]",
  "absolute bottom-[10%] right-[6%]",
]

const cardAnimations = ["animate-float-y", "animate-float-y2", "animate-float-y2", "animate-float-y"]

export default function WhoWeAre() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2 lg:gap-16 lg:px-10">
      <div>
        <div className="mb-3.5 text-xs font-bold tracking-[2px] text-brand-500">WHO WE ARE</div>
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-[38px]">
          A Reliable Extension of Your Business
        </h2>
        <p className="mb-4 text-base leading-relaxed text-slate-500">
          Hasanara Solutions is a professional business solutions and outsourcing company dedicated to
          helping organizations manage their operational challenges more effectively.
        </p>
        <p className="mb-4 text-base leading-relaxed text-slate-500">
          We work alongside businesses to provide the people, expertise, processes, and technology needed
          to handle essential business functions with confidence.
        </p>
        <p className="mb-4 text-base leading-relaxed text-slate-500">
          From accounting and finance to payroll, compliance, customer support, and business process
          outsourcing, our goal is simple — make your business operations easier, more efficient, and more
          scalable.
        </p>
        <p className="text-base leading-relaxed text-slate-500">
          Rather than operating as just another service provider, we aim to become a trusted extension of
          our clients&rsquo; teams.
        </p>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-md">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
          <line x1="200" y1="200" x2="80" y2="80" stroke="#F9A03A" strokeWidth="2" opacity="0.5" />
          <line x1="200" y1="200" x2="320" y2="80" stroke="#F9A03A" strokeWidth="2" opacity="0.5" />
          <line x1="200" y1="200" x2="80" y2="320" stroke="#F26F38" strokeWidth="2" opacity="0.5" />
          <line x1="200" y1="200" x2="320" y2="320" stroke="#F26F38" strokeWidth="2" opacity="0.5" />
        </svg>

        <div className="animate-pulse-glow absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-center text-sm font-extrabold leading-tight text-white shadow-2xl shadow-brand-500/50">
          BUSINESS
          <br />
          GROWTH
        </div>

        {hubLabels.map((label, i) => (
          <div
            key={label}
            className={`${cardPositions[i]} ${cardAnimations[i]} rounded-2xl border border-slate-800/5 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-lg shadow-slate-800/10`}
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
