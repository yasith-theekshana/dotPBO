import { useEffect, useState } from "react"
import { Link } from "@tanstack/react-router"

const navLinks = [
  { label: "About", to: "/about-us" } as const,
  { label: "Services", to: "/", hash: "services" } as const,
  { label: "Industries", to: "/", hash: "industries" } as const,
  { label: "Technology", to: "/", hash: "technology" } as const,
  { label: "Why Choose Us", to: "/", hash: "why" } as const,
  { label: "Contact", to: "/", hash: "contact" } as const,
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        scrolled
          ? "fixed inset-x-0 top-0 z-50 bg-white/90 shadow-md backdrop-blur-md transition-all duration-300"
          : "fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 text-sm font-extrabold text-white shadow-lg shadow-brand-500/30">
            HS
          </span>
          <span className="text-sm font-extrabold tracking-wide text-slate-800">
            HASANARA
            <span className="block text-[9px] font-medium tracking-[3px] text-brand-500">SOLUTIONS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          hash="contact"
          className="hidden rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/35 transition hover:-translate-y-0.5 hover:shadow-xl lg:inline-block"
        >
          Get a Free Consultation
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800/10 bg-white text-slate-800 lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-800/10 bg-white px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-6 py-3 text-center text-sm font-bold text-white"
          >
            Get a Free Consultation
          </Link>
        </nav>
      )}
    </header>
  )
}
