import { trustPoints } from "../../data/about"

export default function Trust() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-10"
      style={{ background: "linear-gradient(135deg, #C85A12 0%, #F26F38 55%, #F9A03A 100%)" }}
    >
      <div className="animate-float-y pointer-events-none absolute -top-36 left-[10%] h-[26rem] w-[26rem] rounded-full bg-white/15 blur-2xl" />
      <div className="animate-float-y2 pointer-events-none absolute -bottom-40 right-[8%] h-[30rem] w-[30rem] rounded-full bg-white/10 blur-2xl" />

      <div className="relative mx-auto max-w-3xl text-center text-white">
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-[38px]">
          Your Business Deserves a Partner You Can Trust.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-[16.5px] leading-relaxed text-white/90">
          We understand that outsourcing requires more than technical capability. It requires trust.
          That&rsquo;s why we focus on confidentiality, data protection, quality assurance, professional
          standards, clear communication, reliable delivery, and continuous improvement.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-full border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur-md"
            >
              {point}
            </div>
          ))}
        </div>
        <p className="text-lg font-semibold leading-relaxed">
          Our objective is to make working with Hasanara Solutions feel like having a trusted team within
          your own organization.
        </p>
      </div>
    </section>
  )
}
