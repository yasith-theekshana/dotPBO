export interface ServiceBenefit {
  title: string
  desc: string
}

export interface Service {
  id: string
  glyph: string
  title: string
  shortDesc: string
  challenges: string
  solution: string
  benefits: ServiceBenefit[]
  scope: string[]
}

export const services: Service[] = [
  {
    id: "callcenter",
    glyph: "CC",
    title: "Call Center Outsourcing Solutions",
    shortDesc:
      "Trained agents handling customer support, order desks and helplines on your behalf.",
    challenges:
      "Growing companies struggle to staff, train and retain a reliable customer support team, leading to long wait times and inconsistent service quality.",
    solution:
      "We deploy dedicated, trained agent teams with scripted workflows, live monitoring and multilingual coverage so every customer interaction meets your standard, day or night.",
    benefits: [
      { title: "Cost Savings", desc: "Up to 60% lower than an in-house team." },
      { title: "Scalability", desc: "Scale agents up or down with demand." },
      { title: "Faster Delivery", desc: "Live in as little as two weeks." },
      { title: "Data Security", desc: "Encrypted systems, strict access control." },
    ],
    scope: [
      "Inbound & outbound call handling",
      "Live chat and email support",
      "Order and ticket management",
      "Multilingual agent coverage",
      "Monthly quality reporting",
    ],
  },
  {
    id: "tax",
    glyph: "TC",
    title: "Tax Compliance",
    shortDesc: "End-to-end tax filing and advisory that keeps you ahead of every deadline.",
    challenges:
      "Shifting tax regulations and multiple filing deadlines create risk of penalties and consume valuable internal time.",
    solution:
      "Our tax specialists manage preparation, filing and advisory year-round, tracking regulatory changes so your business stays fully compliant.",
    benefits: [
      { title: "Compliance", desc: "Zero missed filings, guaranteed." },
      { title: "Accuracy", desc: "Multi-level review on every return." },
      { title: "Cost Savings", desc: "No need for an in-house tax team." },
      { title: "Dedicated Team", desc: "The same specialists every cycle." },
    ],
    scope: [
      "Corporate & VAT tax filing",
      "Tax planning & advisory",
      "Regulatory change monitoring",
      "Audit support & documentation",
      "Deadline & penalty tracking",
    ],
  },
  {
    id: "yearend",
    glyph: "YE",
    title: "Year End Statutory Accounts",
    shortDesc: "Statutory financial statements prepared and reviewed to full regulatory standard.",
    challenges:
      "Preparing statutory accounts in-house is time-intensive and easy to get wrong, risking non-compliance and delayed filings.",
    solution:
      "We prepare, reconcile and finalize your statutory accounts under applicable accounting standards, ready for audit and filing without last-minute pressure.",
    benefits: [
      { title: "Compliance", desc: "Prepared to statutory standard." },
      { title: "Accuracy", desc: "Fully reconciled before filing." },
      { title: "Faster Delivery", desc: "Predictable, on-time close." },
      { title: "Scalability", desc: "Handles single or multi-entity groups." },
    ],
    scope: [
      "Financial statement preparation",
      "Reconciliation & adjustments",
      "Statutory disclosure notes",
      "Audit liaison support",
      "Regulatory filing coordination",
    ],
  },
  {
    id: "bookkeeping",
    glyph: "BV",
    title: "Bookkeeping and VAT Returns",
    shortDesc: "Daily bookkeeping and accurate, on-time VAT submissions.",
    challenges:
      "Falling behind on day-to-day bookkeeping leads to messy records and rushed, error-prone VAT returns.",
    solution:
      "We maintain your books continuously in your accounting platform of choice and submit VAT returns on schedule, every quarter.",
    benefits: [
      { title: "Accuracy", desc: "Reconciled books every month." },
      { title: "Compliance", desc: "VAT filed on time, every time." },
      { title: "Cost Savings", desc: "Fraction of an in-house bookkeeper." },
      { title: "Faster Delivery", desc: "Real-time visibility into your ledgers." },
    ],
    scope: [
      "Daily transaction bookkeeping",
      "Bank & credit reconciliation",
      "Quarterly VAT return preparation",
      "VAT registration support",
      "Management reporting",
    ],
  },
  {
    id: "admin",
    glyph: "AC",
    title: "Admin and Company Secretarial Services",
    shortDesc: "Corporate filings, registers and governance handled without the paperwork burden.",
    challenges:
      "Company secretarial duties and statutory admin are easy to overlook but carry real legal and compliance risk.",
    solution:
      "We manage statutory registers, filings and governance calendars so your company stays compliant with corporate law at every stage.",
    benefits: [
      { title: "Compliance", desc: "Statutory deadlines never missed." },
      { title: "Confidentiality", desc: "Sensitive records handled securely." },
      { title: "Dedicated Team", desc: "One point of contact throughout." },
      { title: "Global Standards", desc: "Aligned to international governance norms." },
    ],
    scope: [
      "Statutory register maintenance",
      "Annual return filing",
      "Board resolution documentation",
      "Company incorporation support",
      "Registered office administration",
    ],
  },
  {
    id: "payroll",
    glyph: "PR",
    title: "Payroll",
    shortDesc: "Accurate, on-time payroll processing with full statutory compliance.",
    challenges:
      "Payroll errors damage employee trust and non-compliant filings bring regulatory penalties.",
    solution:
      "We run your full payroll cycle — calculations, statutory deductions, payslips and filings — with built-in review at every step.",
    benefits: [
      { title: "Accuracy", desc: "Multi-point payroll validation." },
      { title: "Compliance", desc: "Statutory contributions filed correctly." },
      { title: "Confidentiality", desc: "Employee data handled securely." },
      { title: "Scalability", desc: "From ten to ten thousand employees." },
    ],
    scope: [
      "Monthly payroll processing",
      "Statutory deductions & filings",
      "Payslip generation & distribution",
      "Leave & benefits administration",
      "Year-end payroll reporting",
    ],
  },
  {
    id: "finance",
    glyph: "IF",
    title: "Internal Finance Services",
    shortDesc: "Management accounts, budgeting and reporting for confident decision-making.",
    challenges:
      "Leadership teams often lack timely, reliable financial visibility to make fast decisions.",
    solution:
      "We deliver monthly management accounts, budgets and KPI reporting so leadership always has an accurate, current view of the business.",
    benefits: [
      { title: "Accuracy", desc: "Reviewed, reconciled reporting." },
      { title: "Faster Delivery", desc: "Monthly close in days, not weeks." },
      { title: "Dedicated Team", desc: "Finance experts who know your business." },
      { title: "Scalability", desc: "Grows with your reporting needs." },
    ],
    scope: [
      "Management accounts preparation",
      "Budgeting & forecasting",
      "KPI & board reporting",
      "Cash flow monitoring",
      "Cost center analysis",
    ],
  },
]
