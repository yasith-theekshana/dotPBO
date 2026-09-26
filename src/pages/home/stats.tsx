import { useEffect, useRef, useState } from "react"
import { stats } from "../../data/content"
import type { Stat } from "../../data/content"

function AnimatedStat({ target, suffix, label }: Stat) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const duration = 1400
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setValue(Math.round(target * progress))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="border-white/15 px-4 text-center text-white lg:border-r lg:last:border-r-0">
      <div className="mb-2 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">
          {value}
          {suffix}
      </div>
      <div className="text-[11px] font-semibold tracking-wide text-white/75">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {stats.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
