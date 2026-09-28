import { useState } from "react"

export default function ServiceGrid() {
  const [filter, setFilter] = useState("all")
  return (
    <section className="w-full bg-surface-container-lowest py-16" id="services-grid">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-primary-container tracking-widest block">OPERATIONAL TAXONOMY</span>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface font-semibold tracking-tight">
              One partner. Multiple capabilities.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Build additional capacity where your business needs it most without creating unnecessary operational complexity or technological fragmentation.
            </p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
            <span aria-hidden="true" className="material-symbols-outlined text-primary-container text-base">info</span>
            <span role="status" aria-live="polite">{filter === "all" ? "Showing all 6 services" : "Showing 1 matching service"}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="service-filters">
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "all"} onClick={() => setFilter("all")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "all" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            All Services
          </button>
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "cx"} onClick={() => setFilter("cx")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "cx" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            Customer Experience
          </button>
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "ops"} onClick={() => setFilter("ops")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "ops" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            Back Office
          </button>
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "finance"} onClick={() => setFilter("finance")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "finance" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            Finance &amp; Accounting
          </button>
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "sales"} onClick={() => setFilter("sales")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "sales" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            Sales Support
          </button>
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "tech"} onClick={() => setFilter("tech")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "tech" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            Technical Support
          </button>
          <button type="button" aria-controls="services-cards-container" aria-pressed={filter === "data"} onClick={() => setFilter("data")} className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${filter === "data" ? "bg-primary-container text-on-primary-container font-semibold" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container"}`}>
            Data Operations
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4" id="services-cards-container">
          <div className="service-card group flex flex-col justify-between bg-surface-container rounded-xl p-8 transition-all duration-300 hover:bg-surface-container-high shadow-lg relative overflow-hidden" hidden={filter !== "all" && filter !== "cx"}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary font-bold">01 // CX SUITE</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 text-primary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  CSAT &gt; 94%
                </span>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner group-hover:scale-110 transition-transform">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow tracking-wider text-outline uppercase block">CUSTOMER EXPERIENCE</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Customer support that feels like part of your business.
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Deliver high-touch, empathetic customer interactions across all channels with trained domain specialists rigorously calibrated to your brand tone of voice.
              </p>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-3">Core Specializations</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Customer Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Email Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Live Chat</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Inbound Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Outbound Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Customer Retention</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Customer Administration</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200" href="#contact">
                Explore Customer Experience <span>→</span>
              </a>
            </div>
          </div>
          <div className="service-card group flex flex-col justify-between bg-surface-container rounded-xl p-8 transition-all duration-300 hover:bg-surface-container-high shadow-lg relative overflow-hidden" hidden={filter !== "all" && filter !== "ops"}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary font-bold">02 // OPS SUITE</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 text-primary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  99.9% Accuracy
                </span>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner group-hover:scale-110 transition-transform">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">account_tree</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow tracking-wider text-outline uppercase block">BACK OFFICE OPERATIONS</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Keep essential operations moving efficiently.
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Reliable, high-volume operational workflows executed with precision SOPs, strict error controls, and continuous procedural quality assurance.
              </p>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-3">Core Specializations</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Data Processing</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Data Entry</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Document Processing</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Administrative Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Order Processing</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Business Administration</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Operational Support</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200" href="#contact">
                Explore Back Office <span>→</span>
              </a>
            </div>
          </div>
          <div className="service-card group flex flex-col justify-between bg-surface-container rounded-xl p-8 transition-all duration-300 hover:bg-surface-container-high shadow-lg relative overflow-hidden" hidden={filter !== "all" && filter !== "finance"}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary font-bold">03 // FINANCE SUITE</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 text-primary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  P99 Turnaround
                </span>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner group-hover:scale-110 transition-transform">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow tracking-wider text-outline uppercase block">FINANCE &amp; ACCOUNTING</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Structured support for everyday finance operations.
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Audit-ready financial management ensuring timely reconciliations, accurate book closures, and tight fiscal governance across multi-entity setups.
              </p>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-3">Core Specializations</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Accounts Payable</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Accounts Receivable</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Bookkeeping Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Reconciliation</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Financial Data Processing</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Reporting Support</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200" href="#contact">
                Explore Finance &amp; Accounting <span>→</span>
              </a>
            </div>
          </div>
          <div className="service-card group flex flex-col justify-between bg-surface-container rounded-xl p-8 transition-all duration-300 hover:bg-surface-container-high shadow-lg relative overflow-hidden" hidden={filter !== "all" && filter !== "sales"}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary font-bold">04 // SALES SUITE</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 text-primary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  +38% Pipeline Velocity
                </span>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner group-hover:scale-110 transition-transform">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow tracking-wider text-outline uppercase block">SALES SUPPORT</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Give your sales team more capacity to sell.
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Accelerate pipeline velocity and optimize deal execution by offloading pipeline hygiene, data enrichment, research, and appointment coordination.
              </p>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-3">Core Specializations</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Lead Generation</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Prospect Research</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Appointment Setting</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">CRM Management</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Sales Administration</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Lead Follow-ups</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200" href="#contact">
                Explore Sales Support <span>→</span>
              </a>
            </div>
          </div>
          <div className="service-card group flex flex-col justify-between bg-surface-container rounded-xl p-8 transition-all duration-300 hover:bg-surface-container-high shadow-lg relative overflow-hidden" hidden={filter !== "all" && filter !== "tech"}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary font-bold">05 // TECH SUITE</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 text-primary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  SLA &lt;15m Response
                </span>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner group-hover:scale-110 transition-transform">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow tracking-wider text-outline uppercase block">TECHNICAL &amp; IT SUPPORT</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Reliable support for technology-driven businesses.
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Tier 1 to Tier 3 technical diagnostics, incident escalations, and 24/7 user guidance backed by certified engineering procedures and telemetry.
              </p>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-3">Core Specializations</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Technical Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Help Desk</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Application Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">User Assistance</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">IT Service Operations</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200" href="#contact">
                Explore Technical Support <span>→</span>
              </a>
            </div>
          </div>
          <div className="service-card group flex flex-col justify-between bg-surface-container rounded-xl p-8 transition-all duration-300 hover:bg-surface-container-high shadow-lg relative overflow-hidden" hidden={filter !== "all" && filter !== "data"}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-eyebrow text-label-eyebrow tracking-widest text-primary font-bold">06 // DATA SUITE</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary-container/15 text-primary text-label-sm font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  99.95% Data Integrity
                </span>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner group-hover:scale-110 transition-transform">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">hub</span>
                </div>
                <span className="font-label-eyebrow text-label-eyebrow tracking-wider text-outline uppercase block">DATA &amp; DIGITAL OPERATIONS</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                  Turn high-volume digital work into structured operations.
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Transform raw unstructured datasets into verified machine-learning annotations, clean operational records, and real-time executive reports.
              </p>
              <div className="pt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-3">Core Specializations</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Data Management</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Data Validation</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Content Operations</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Research Support</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Digital Administration</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm">Reporting &amp; BI</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:text-tertiary transition-colors group-hover:translate-x-1 duration-200" href="#contact">
                Explore Data Operations <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
