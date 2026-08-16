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
    <div ref={ref} className="text-center text-white">
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/15 p-1.5">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-600 text-lg font-extrabold">
          {value}
          {suffix}
        </div>
      </div>
      <div className="text-[13px] font-semibold text-white/90">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
