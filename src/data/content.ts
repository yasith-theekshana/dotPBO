export interface Milestone {
  year: string
  title: string
  desc: string
}

export const milestones: Milestone[] = [
  { year: "2011", title: "Founded", desc: "Started as a small bookkeeping practice serving local businesses." },
  { year: "2014", title: "Regional Expansion", desc: "Opened service lines for payroll and tax compliance." },
  { year: "2018", title: "Technology Upgrade", desc: "Migrated clients to modern cloud accounting platforms." },
  { year: "2022", title: "400+ Clients", desc: "Crossed 400 active clients across 10 countries." },
  { year: "2026", title: "Full-Service Partner", desc: "Now a full outsourced finance and operations partner." },
]

export interface Industry {
  name: string
  desc: string
}

export const industries: Industry[] = [
  { name: "Healthcare", desc: "Compliant billing and back-office finance." },
  { name: "Retail", desc: "High-volume reconciliation and reporting." },
  { name: "Finance", desc: "Regulated accounting and audit support." },
  { name: "Manufacturing", desc: "Cost accounting and payroll at scale." },
  { name: "Hospitality", desc: "Multi-site bookkeeping and payroll." },
  { name: "Construction", desc: "Project-based financial tracking." },
  { name: "Professional Services", desc: "Time, billing and statutory filings." },
  { name: "Technology", desc: "Fast-scaling finance operations." },
]

export interface Feature {
  glyph: string
  title: string
  desc: string
}

export const features: Feature[] = [
  { glyph: "QA", title: "Quality Assurance", desc: "Multi-level review on every deliverable." },
  { glyph: "EP", title: "Experienced Professionals", desc: "Senior accountants and finance leads." },
  { glyph: "SI", title: "Secure Infrastructure", desc: "Encrypted systems and access controls." },
  { glyph: "DT", title: "Dedicated Teams", desc: "The same people on your account, always." },
  { glyph: "CF", title: "Confidentiality", desc: "Strict data handling protocols." },
  { glyph: "GS", title: "Global Standards", desc: "Aligned to international best practice." },
  { glyph: "SO", title: "Scalable Operations", desc: "Flex up or down with your business." },
  { glyph: "FT", title: "Fast Turnaround", desc: "Reliable delivery against every deadline." },
]

export interface TechGroup {
  title: string
  tools: string[]
}

export const techGroups: TechGroup[] = [
  { title: "Accounting Software", tools: ["QuickBooks", "Xero", "Sage", "NetSuite"] },
  { title: "Cloud Platforms", tools: ["Microsoft 365", "Google Workspace", "AWS"] },
  { title: "Business Tools", tools: ["Slack", "Asana", "DocuSign"] },
  { title: "Security Systems", tools: ["SSO / MFA", "Encrypted VPN", "SOC 2 Controls"] },
  { title: "Automation Platforms", tools: ["Zapier", "Power Automate", "RPA Bots"] },
]

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Amara Fernando",
    role: "CFO",
    company: "Northline Retail",
    quote:
      "Hasanara took over our entire finance back office in six weeks and our monthly close time was cut in half.",
  },
  {
    name: "Devon Marsh",
    role: "Operations Director",
    company: "Kavu Manufacturing",
    quote: "Payroll used to be our biggest headache. Now it just runs, accurately, every single month.",
  },
  {
    name: "Priya Nair",
    role: "Founder",
    company: "Solstice Health Group",
    quote:
      "Their team feels like an extension of ours — proactive, precise, and always ahead of deadlines.",
  },
]

export interface Faq {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: "How quickly can we get started?",
    a: "Most engagements go live within two to four weeks, including onboarding and data migration.",
  },
  {
    q: "Do you work with our existing accounting software?",
    a: "Yes — we work within QuickBooks, Xero, Sage, NetSuite and most major platforms.",
  },
  {
    q: "How do you keep our data secure?",
    a: "All data is encrypted in transit and at rest, with strict access controls and regular audits.",
  },
  {
    q: "Can we scale services up or down?",
    a: "Yes, every engagement is structured to flex with your business, month to month.",
  },
  {
    q: "Do you offer a single point of contact?",
    a: "Every client is assigned a dedicated account lead alongside their delivery team.",
  },
]

export interface CaseStudy {
  title: string
  challenge: string
  solution: string
  before: string
  after: string
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Regional Retailer",
    challenge: "Manual bookkeeping causing a 3-week delayed close.",
    solution: "Migrated to cloud accounting with dedicated bookkeeping team.",
    before: "21 days",
    after: "4 days",
  },
  {
    title: "Healthcare Group",
    challenge: "Payroll errors across 6 clinic locations.",
    solution: "Centralized payroll processing with statutory review.",
    before: "92% accurate",
    after: "99.7% accurate",
  },
  {
    title: "SaaS Scale-up",
    challenge: "No real-time visibility into monthly finances.",
    solution: "Monthly management accounts and KPI dashboards.",
    before: "6 week lag",
    after: "3 day lag",
  },
]

export interface Stat {
  target: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { target: 15, suffix: "+", label: "Years Running" },
  { target: 480, suffix: "+", label: "Clients Served" },
  { target: 12, suffix: "", label: "Countries" },
  { target: 120, suffix: "+", label: "Professionals" },
  { target: 900, suffix: "+", label: "Projects Delivered" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
]

export interface ProcessStep {
  num: string
  label: string
}

export const processSteps: ProcessStep[] = [
  { num: "1", label: "Discovery" },
  { num: "2", label: "Onboarding" },
  { num: "3", label: "Transition" },
  { num: "4", label: "Execution" },
  { num: "5", label: "Continuous Improvement" },
]
