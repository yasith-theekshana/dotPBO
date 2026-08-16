import { Link } from "@tanstack/react-router"

const heroStats = [
  { value: "15+", label: "Years running" },
  { value: "480+", label: "Clients served" },
  { value: "98%", label: "Client satisfaction" },
]

const bars = [55, 75, 40, 92, 66, 80]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
      <div className="pointer-events-none absolute -right-24 -top-28 h-[28rem] w-[28rem] rounded-full bg-brand-400/35 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-brand-600/25 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,41,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,55,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-xs font-bold tracking-wide text-brand-600">
            TRUSTED BUSINESS PROCESS PARTNER
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-800 sm:text-5xl lg:text-[58px]">
            Precision finance &amp; operations,{" "}
            <span className="bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">
              engineered for growth.
            </span>
          </h1>

          <p className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-slate-500 lg:mx-0">
            We run the back office of ambitious companies — accounting, payroll, compliance and
            support — with the accuracy of an in-house team and the efficiency of modern
            technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              to="/"
              hash="contact"
              className="rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-500/40 transition hover:-translate-y-0.5"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/"
              hash="services"
              className="rounded-xl border border-slate-800/10 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-brand-500 hover:text-brand-600"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-9 lg:justify-start">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-slate-800">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[480px]">
          <div className="animate-float-y absolute left-[6%] top-[8%] h-[74%] w-[88%] rounded-3xl border border-white/70 bg-white/55 p-6 shadow-2xl shadow-slate-800/10 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800">Operations Overview</span>
              <span className="animate-pulse-glow h-2 w-2 rounded-full bg-brand-500" />
            </div>
            <div className="mb-5 flex h-32 items-end gap-2.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={
                    i === 3
                      ? "flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                      : "flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-brand-300"
                  }
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <div className="flex-1 rounded-lg bg-brand-100 px-3 py-2.5">
                <div className="text-[11px] font-bold text-brand-600">REVENUE</div>
                <div className="text-lg font-extrabold text-slate-800">+32.4%</div>
              </div>
              <div className="flex-1 rounded-lg bg-brand-100 px-3 py-2.5">
                <div className="text-[11px] font-bold text-brand-600">ACCURACY</div>
                <div className="text-lg font-extrabold text-slate-800">99.6%</div>
              </div>
            </div>
          </div>

          <div className="animate-float-y2 absolute bottom-[2%] right-0 w-44 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl shadow-slate-800/15 backdrop-blur-lg">
            <div className="mb-1.5 text-[11px] font-bold text-slate-500">MONTHLY CLOSE</div>
            <div className="text-xl font-extrabold text-slate-800">3.2 days</div>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-brand-100">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
            </div>
          </div>

          <div className="animate-float-y2 absolute left-0 top-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-xl shadow-brand-500/45" />
        </div>
      </div>
    </section>
  )
}
