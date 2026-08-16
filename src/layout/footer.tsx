import { Link } from "@tanstack/react-router"
import { services } from "../data/services"
import { techGroups } from "../data/content"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-700 px-6 pb-8 pt-20 text-white lg:px-10">
      <div className="pointer-events-none absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-brand-500/25 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-xs font-extrabold">
              HS
            </span>
            <span className="text-sm font-extrabold tracking-wide">HASANARA SOLUTIONS</span>
          </div>
          <p className="max-w-[260px] text-sm leading-relaxed text-white/65">
            A premium outsourced finance and operations partner for growing businesses worldwide.
          </p>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold tracking-wide text-white/90">QUICK LINKS</div>
          <div className="flex flex-col gap-2.5 text-sm text-white/65">
            <Link to="/" hash="about" className="transition hover:text-white">
              About
            </Link>
            <Link to="/" hash="industries" className="transition hover:text-white">
              Industries
            </Link>
            <Link to="/" hash="why" className="transition hover:text-white">
              Why Choose Us
            </Link>
            <Link to="/" hash="contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold tracking-wide text-white/90">SERVICES</div>
          <div className="flex flex-col gap-2.5 text-sm text-white/65">
            {services.map((svc) => (
              <Link
                key={svc.id}
                to="/services/$serviceId"
                params={{ serviceId: svc.id }}
                className="transition hover:text-white"
              >
                {svc.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold tracking-wide text-white/90">TECHNOLOGIES</div>
          <div className="flex flex-col gap-2.5 text-sm text-white/65">
            {techGroups.map((grp) => (
              <span key={grp.title}>{grp.title}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold tracking-wide text-white/90">NEWSLETTER</div>
          <form onSubmit={(e) => e.preventDefault()} className="mb-5 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button type="submit" className="rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-brand-700">
              Join
            </button>
          </form>
          <div className="flex gap-4 text-sm text-white/65">
            <span>LinkedIn</span>
            <span>X</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl pt-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Hasanara Solutions. All rights reserved.
      </div>
    </footer>
  )
}
