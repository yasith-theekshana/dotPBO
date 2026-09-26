import { useEffect, useRef, useState } from "react"
import { Link } from "@tanstack/react-router"

const links = [
  ["Home", "#home"], ["About", "/about-us"], ["Services", "#services"],
  ["Industries", "#industries"], ["Technology", "#technology"],
  ["Why dotpbo", "#why"], ["FAQ", "#faq"], ["Contact", "#contact"],
]

export function Brand() {
  return <a href="#home" aria-label="dotpbo home" className="flex items-center gap-3 font-headline-sm text-2xl font-semibold tracking-tight"><span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg border border-primary-container/50 bg-primary-container/10 text-primary-container">d</span><span>dotpbo<span className="text-primary-container">.</span></span></a>
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus() }
    }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [open])
  const items = links.map(([label, href]) => href === "/about-us"
    ? <Link key={label} to="/about-us" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface">{label}</Link>
    : <a key={label} href={href} onClick={() => setOpen(false)} aria-current={label === "Home" ? "page" : undefined} className={`rounded-xl px-3 py-2 hover:bg-surface-container-high hover:text-on-surface ${label === "Home" ? "bg-surface-container-high font-semibold" : "text-on-surface-variant"}`}>{label}</a>)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface-container-lowest/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-margin-mobile lg:px-margin">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-1 text-label-md xl:flex">{items}</nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-xl bg-primary-container px-5 py-2.5 font-semibold text-on-primary-container shadow-[0_0_20px_#ff7a2140] transition hover:bg-tertiary-container sm:inline-flex">Let’s Talk →</a>
          <button ref={toggle} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="home-mobile-nav" onClick={() => setOpen(!open)} className="rounded-lg p-2 hover:bg-surface-container-high xl:hidden"><span aria-hidden="true" className="material-symbols-outlined text-2xl">{open ? "close" : "menu"}</span></button>
        </div>
      </div>
      <nav id="home-mobile-nav" aria-label="Mobile navigation" hidden={!open} className={`${open ? "flex" : "hidden"} max-h-[calc(100dvh-80px)] flex-col overflow-y-auto border-t border-white/5 bg-surface-container-lowest p-5 xl:hidden`}>{items}<a href="#contact" onClick={() => setOpen(false)} className="mt-3 rounded-xl bg-primary-container p-3 text-center font-semibold text-on-primary-container">Let’s Talk →</a></nav>
    </header>
  )
}
