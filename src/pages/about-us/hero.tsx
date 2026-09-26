import { Link } from "@tanstack/react-router"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36 lg:px-10 lg:pt-44"
      style={{
        background: "radial-gradient(ellipse 90% 70% at 30% 20%, #FFF3E6 0%, #FFF8F2 55%, #FFF8F2 100%)",
      }}
    >
      <div className="animate-float-y pointer-events-none absolute -right-36 -top-40 h-[40rem] w-[40rem] rounded-full bg-brand-400/40 blur-2xl" />
      <div className="animate-float-y2 pointer-events-none absolute -bottom-52 -left-32 h-[31rem] w-[31rem] rounded-full bg-brand-600/30 blur-2xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_30%,#000_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,41,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,55,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="animate-fade-up relative mx-auto max-w-3xl text-center">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-xs font-bold tracking-[1.5px] text-brand-600">
          ABOUT HASANARA SOLUTIONS
        </span>

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl lg:text-[56px]">
          Helping Businesses Work Smarter, Operate Better, and{" "}
          <span className="bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 bg-clip-text text-transparent">
            Grow With Confidence.
          </span>
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-slate-500">
          Hasanara Solutions provides professional outsourcing and business support services that help
          organizations simplify operations, improve efficiency, and focus on their core business.
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-500">
          We combine experienced professionals, structured processes, and modern technology to deliver
          reliable solutions tailored to the needs of every client.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="contact"
            className="rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-500/40 transition hover:-translate-y-0.5"
          >
            Let&rsquo;s Work Together →
          </Link>
          <Link
            to="/"
            hash="services"
            className="rounded-xl border border-slate-800/10 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-brand-500 hover:text-brand-600"
          >
            Explore Our Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
