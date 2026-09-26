import { useEffect, useRef, useState } from "react"
import type { PointerEvent } from "react"
import OperationalMesh from "./operational-mesh"
import "./hero-motion.css"

export default function Hero() {
  const [paused, setPaused] = useState(false)
  const section = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  useEffect(() => {
    const element = section.current
    if (!element) return
    let visible = true
    const update = () => { element.dataset.visible = String(visible && !document.hidden) }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update() })
    observer.observe(element)
    document.addEventListener("visibilitychange", update)
    update()
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", update)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  function resetTilt() {
    cancelAnimationFrame(frame.current)
    stage.current?.style.setProperty("--tilt-x", "0deg")
    stage.current?.style.setProperty("--tilt-y", "0deg")
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      stage.current?.style.setProperty("--tilt-x", `${-y * 8}deg`)
      stage.current?.style.setProperty("--tilt-y", `${x * 10}deg`)
    })
  }

  return (
    <section ref={section} id="home" data-motion={paused ? "paused" : "playing"} aria-labelledby="home-headline" className="cinematic-hero">
      <div aria-hidden="true" className="hero-atmosphere"><div className="hero-aurora" /><div className="hero-floor" /></div>
      <div className="hero-inner">
        <div className="hero-story">
          <p className="hero-eyebrow"><span />Smarter outsourcing. Stronger operations.</p>
          <h1 id="home-headline" className="hero-headline">
            <span className="hero-line"><span>Scale your</span></span>
            <span className="hero-line"><span>operations.</span></span>
            <span className="hero-line hero-line-accent"><span>Not your complexity.</span></span>
          </h1>
          <p className="hero-description">Exceptional people. Connected technology. One seamless extension of your team — built to help your business move forward.</p>
          <div className="hero-actions">
            <a href="#contact" className="hero-primary">Build Your Team<span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span></a>
            <a href="#services" className="hero-secondary">Explore Our Services<span aria-hidden="true" className="material-symbols-outlined">south_east</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>99.98<span>%</span></strong><span>SLA precision</span></div>
            <div><strong>2.4<span>×</span></strong><span>Speed to scale</span></div>
            <div><strong>One<span> team.</span></strong><span>Built around you</span></div>
          </div>
        </div>

        <div className="hero-universe" onPointerMove={move} onPointerLeave={resetTilt}>
          <div className="hero-visual-label"><span className="hero-status-dot" />THE CONNECTED OPERATION<span>01 — 05</span></div>
          <div ref={stage} className="hero-stage">
            <div aria-hidden="true" className="hero-orbital-plane"><div className="hero-orbit-track"><span /></div></div>
            <div aria-hidden="true" className="hero-orbital-plane hero-orbital-plane-two"><div className="hero-orbit-track"><span /></div></div>
            <div className="hero-core"><OperationalMesh /></div>
            <div className="hero-satellite hero-satellite-top">
              <span aria-hidden="true" className="hero-satellite-icon material-symbols-outlined">groups</span>
              <div><span>HUMAN EXPERTISE</span><strong>Your people. Our priority.</strong></div>
            </div>
            <div className="hero-satellite hero-satellite-bottom">
              <div className="hero-satellite-heading"><span aria-hidden="true" className="material-symbols-outlined">monitoring</span><span>BUILT TO SCALE</span><span className="hero-status-dot" /></div>
              <strong>Connected. Capable. Ready.</strong>
              <div aria-hidden="true" className="hero-waveform">{[25, 42, 35, 60, 45, 75, 58, 88, 65, 80, 95, 72, 100, 82, 94, 100].map((height, index) => <i key={index} style={{ height: `${height}%`, animationDelay: `${index * -0.17}s` }} />)}</div>
            </div>
          </div>
          <div className="hero-visual-footer"><span>PEOPLE + PROCESS + TECHNOLOGY</span><button type="button" aria-label={paused ? "Resume hero animation" : "Pause hero animation"} aria-pressed={paused} onClick={() => { resetTilt(); setPaused(!paused) }} className="home-hero-motion-toggle"><span aria-hidden="true" className="material-symbols-outlined">{paused ? "play_arrow" : "pause"}</span><span>{paused ? "Resume" : "Pause"}</span></button></div>
        </div>
      </div>
      <a className="hero-scroll-cue" href="#trust"><span aria-hidden="true" className="material-symbols-outlined">south</span> A stronger way to operate</a>
    </section>
  )
}
