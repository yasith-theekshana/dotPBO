export default function MissionVision() {
  return (
    <section className="mx-auto grid max-w-7xl gap-7 px-6 py-28 lg:grid-cols-2 lg:px-10">
      <div className="animate-float-y relative overflow-hidden rounded-3xl border border-white/80 bg-white/60 p-11 shadow-xl shadow-brand-500/15 backdrop-blur-xl">
        <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-brand-400/35 blur-2xl" />
        <div className="relative mb-4 text-xs font-bold tracking-[2px] text-brand-500">OUR MISSION</div>
        <p className="relative text-xl font-semibold leading-snug text-slate-800">
          To empower businesses with reliable, efficient, and technology-enabled solutions that simplify
          operations, improve productivity, and create the freedom to focus on sustainable growth.
        </p>
      </div>

      <div className="animate-float-y2 relative overflow-hidden rounded-3xl border border-white/80 bg-white/60 p-11 shadow-xl shadow-brand-600/15 backdrop-blur-xl">
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-brand-600/30 blur-2xl" />
        <div className="relative mb-4 text-xs font-bold tracking-[2px] text-brand-500">OUR VISION</div>
        <p className="relative text-xl font-semibold leading-snug text-slate-800">
          To become a trusted global partner for businesses seeking smarter, more efficient, and scalable
          operational solutions.
        </p>
      </div>
    </section>
  )
}
