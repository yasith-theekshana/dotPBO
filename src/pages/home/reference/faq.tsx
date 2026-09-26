export default function Faq() {
  return (
<section id="faq" className="relative z-10 w-full py-24 lg:py-32 border-b border-white/[0.08] bg-[#170D07]">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">

<div className="lg:col-span-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#120A05] border border-white/[0.08] mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-eyebrow text-label-eyebrow uppercase tracking-[0.2em] text-primary-container font-semibold">
              Outsourcing, Explained
            </span>
</div>
<h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold tracking-tight text-on-surface leading-tight mb-6">
            Good outsourcing starts<br/>
<span className="text-primary-container">with the right questions.</span>
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Got specific technical, governance, or rollout considerations? Read through our operational standard answers or chat with our solutions architects.
          </p>
<a className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-semibold hover:underline" href="#contact">
<span>Speak with an Operational Lead</span>
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>

<div className="lg:col-span-8 space-y-4" id="faq-accordion-group">

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>How do you maintain service quality?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              We deploy a 3-layer Quality Assurance architecture: AI-automated semantic checks across 100% of customer interactions, independent QA auditor evaluations on random sampling sets, and weekly calibrate-to-target scoring sessions directly with your internal leadership.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>How quickly can a dedicated team be established?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              Standard operational pods (10–25 FTEs) typically transition from initial process mapping to full live operations in 3 to 5 weeks. For urgent expansions, we maintain a pre-certified bench capable of initial shadow deployment within 10 business days.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>Can we dynamically scale our team size?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              Yes. Our elastic contracts allow for seasonal bursting (e.g., Q4 Black Friday peaks) and structural contractions with predefined notice windows, eliminating the traditional liabilities of direct full-time internal hiring.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>Can dotpbo operate inside our existing software systems?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              Absolutely. Our talent works natively via secure virtual desktop environments (VDI) or SSO access into your Zendesk, Salesforce, Jira, NetSuite, HubSpot, or custom proprietary internal tools. We do not force you onto proprietary ticketing systems.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>How is day-to-day performance measured?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              We co-author an unambiguous SLA document measuring metrics such as Average Handle Time (AHT), First Contact Resolution (FCR), QA compliance scores, transaction throughput, and CSAT/NPS targets, reflected real-time in your client telemetry dashboard.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>Can you support bespoke or complex custom workflows?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              Yes. Rather than forcing your business into a rigid box, our solutions engineering team writes custom Standard Operating Procedures (SOPs), flow charts, and escalation matrices tailored explicitly to your unique edge cases and regulatory needs.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>How are operational teams trained and certified?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              All dotpbo associates undergo a rigorous 3-stage curriculum: foundational soft-skills &amp; data privacy certifications, interactive client-specific sandbox training, and supervised nesting where senior QA specialists oversee 100% of early output.
            </div></details>

<details name="home-faq" className="bg-[#120A05] border border-white/[0.08] rounded-lg overflow-hidden transition-colors"><summary className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-on-surface font-semibold accordion-toggle">
<span>How do you manage operational transition and business continuity?</span>
<span aria-hidden="true" className="material-symbols-outlined text-primary-container transition-transform duration-300">expand_more</span>
</summary><div className="accordion-content px-6 pb-6 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-white/[0.04] pt-4">
              We execute a strict parallel-run methodology so your existing operations never experience downtime. Dual-redundant internet backbones, backup generator facilities, and multi-geography rollover protocols safeguard 24/7/365 availability.
            </div></details>
</div>
</div>
</div>
</section>
  )
}
