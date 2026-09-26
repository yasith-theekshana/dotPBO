import { Link } from "@tanstack/react-router"

const heroStats = [{ value: "15+", label: "Years running" }, { value: "480+", label: "Clients served" }, { value: "98%", label: "Client satisfaction" }]
const bars = [55, 75, 40, 92, 66, 80]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-400/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_75%_65%_at_60%_25%,#000_30%,transparent_100%)]" style={{ backgroundImage: "linear-gradient(rgba(31,41,55,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(31,41,55,.045) 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:min-h-[620px] lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-brand-500/15 bg-white/70 px-4 py-2 text-[11px] font-bold tracking-[.14em] text-brand-600 shadow-sm backdrop-blur"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" />TRUSTED BUSINESS PROCESS PARTNER</span>
          <h1 className="mb-6 text-[42px] font-extrabold leading-[1.06] tracking-[-.04em] text-slate-800 sm:text-5xl lg:text-[64px]">Precision finance &amp; operations, <span className="bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">engineered for growth.</span></h1>
          <p className="mx-auto mb-9 max-w-xl text-[17px] leading-8 text-slate-500 lg:mx-0">We run the back office of ambitious companies — accounting, payroll, compliance and support — with the accuracy of an in-house team and the efficiency of modern technology.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link to="/" hash="contact" className="rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(246,142,55,.75)] transition duration-300 hover:-translate-y-0.5">Get a Free Consultation</Link>
            <Link to="/" hash="services" className="rounded-xl border border-slate-800/10 bg-white/80 px-7 py-4 text-sm font-bold text-slate-800 shadow-sm backdrop-blur transition duration-300 hover:border-brand-500/60 hover:text-brand-600">Explore Our Services</Link>
          </div>
          <div className="mt-12 flex justify-center divide-x divide-slate-800/10 lg:justify-start">{heroStats.map((stat) => <div key={stat.label} className="px-5 first:pl-0 last:pr-0"><div className="text-2xl font-extrabold tracking-tight text-slate-800">{stat.value}</div><div className="mt-0.5 text-[11px] font-medium text-slate-500">{stat.label}</div></div>)}</div>
        </div>
        <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[500px]">
          <div className="absolute inset-[10%_2%_8%_8%] rounded-[2.5rem] border border-brand-500/10 bg-brand-100/50" />
          <div className="animate-float-y absolute left-[2%] top-[5%] h-[76%] w-[91%] rounded-[28px] border border-white bg-white/80 p-6 shadow-[0_30px_80px_-30px_rgba(30,41,59,.3)] backdrop-blur-xl sm:p-7">
            <div className="mb-5 flex items-center justify-between"><span className="text-sm font-bold text-slate-800">Operations Overview</span><span className="animate-pulse-glow h-2 w-2 rounded-full bg-brand-500" /></div>
            <div className="mb-6 flex h-36 items-end gap-2.5 border-b border-slate-800/5">{bars.map((height, index) => <div key={index} className={`flex-1 rounded-t-md bg-gradient-to-t ${index === 3 ? "from-brand-600 to-brand-400" : "from-brand-500 to-brand-300"}`} style={{ height: `${height}%` }} />)}</div>
            <div className="flex gap-2.5"><div className="flex-1 rounded-xl bg-brand-100 px-3 py-3"><div className="text-[10px] font-bold tracking-wider text-brand-600">REVENUE</div><div className="text-lg font-extrabold text-slate-800">+32.4%</div></div><div className="flex-1 rounded-xl bg-brand-100 px-3 py-3"><div className="text-[10px] font-bold tracking-wider text-brand-600">ACCURACY</div><div className="text-lg font-extrabold text-slate-800">99.6%</div></div></div>
          </div>
          <div className="animate-float-y2 absolute bottom-[3%] right-0 w-48 rounded-2xl border border-white bg-white/90 p-5 shadow-[0_20px_50px_-20px_rgba(30,41,59,.35)] backdrop-blur-lg"><div className="mb-1.5 text-[10px] font-bold tracking-wider text-slate-500">MONTHLY CLOSE</div><div className="text-xl font-extrabold text-slate-800">3.2 days</div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-100"><div className="h-full w-[82%] rounded-full bg-gradient-to-r from-brand-400 to-brand-600" /></div></div>
          <div className="animate-float-y2 absolute -left-1 top-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-xl shadow-brand-500/35"><span className="h-5 w-5 rounded-full border-[5px] border-white/90" /></div>
        </div>
      </div>
    </section>
  )
}
