export interface StoryStage {
  num: string
  title: string
  desc: string
}

export const storyStages: StoryStage[] = [
  {
    num: "01",
    title: "The Challenge",
    desc: "Growing businesses face increasing operational complexity across finance, compliance, and support functions.",
  },
  {
    num: "02",
    title: "The Need",
    desc: "Leaders need dependable expertise without the overhead of building every function in-house.",
  },
  {
    num: "03",
    title: "The Solution",
    desc: "Hasanara Solutions was built to combine people, process, and technology into practical, reliable support.",
  },
  {
    num: "04",
    title: "The Partnership",
    desc: "We integrate with client teams as a trusted extension, not a distant vendor.",
  },
  {
    num: "05",
    title: "The Growth",
    desc: "Clients scale with confidence, freed up to focus on what matters most — growing their business.",
  },
]

export interface ValueItem {
  num: string
  title: string
  desc: string
}

export const values: ValueItem[] = [
  { num: "01", title: "Integrity", desc: "We operate with honesty, transparency, and accountability in everything we do." },
  { num: "02", title: "Excellence", desc: "We continuously strive for accuracy, quality, and better outcomes." },
  {
    num: "03",
    title: "Partnership",
    desc: "We build long-term relationships by working as an extension of our clients' teams.",
  },
  {
    num: "04",
    title: "Innovation",
    desc: "We embrace technology and continuously improve the way business processes are delivered.",
  },
  { num: "05", title: "Reliability", desc: "Our clients depend on us, and we take that responsibility seriously." },
  { num: "06", title: "Growth", desc: "We measure our success by the value and growth we create for our clients." },
]

export interface ApproachItem {
  num: string
  title: string
  desc: string
}

export const approachItems: ApproachItem[] = [
  {
    num: "01",
    title: "PEOPLE",
    desc: "Experienced professionals who understand the importance of accuracy, communication, and accountability.",
  },
  { num: "02", title: "PROCESS", desc: "Structured workflows and quality controls designed to deliver consistent results." },
  {
    num: "03",
    title: "TECHNOLOGY",
    desc: "Modern tools and digital platforms that improve efficiency, collaboration, automation, and visibility.",
  },
]

export interface AboutProcessStep {
  title: string
  desc: string
}

export const aboutProcessSteps: AboutProcessStep[] = [
  { title: "UNDERSTAND", desc: "We learn about your business, challenges, objectives, and existing processes." },
  { title: "DESIGN", desc: "We develop a tailored solution based on your requirements." },
  { title: "IMPLEMENT", desc: "Our team integrates with your workflow and establishes the required processes." },
  { title: "DELIVER", desc: "We manage the agreed responsibilities with accuracy, consistency, and transparency." },
  { title: "IMPROVE", desc: "We continuously review performance and identify opportunities to improve efficiency." },
]

export interface WhyItem {
  title: string
  desc: string
}

export const whyItems: WhyItem[] = [
  { title: "DEDICATED EXPERTISE", desc: "Access experienced professionals without the overhead of building everything internally." },
  { title: "FLEXIBLE SOLUTIONS", desc: "Services can be adapted to your business size, industry, and operational requirements." },
  { title: "CONSISTENT QUALITY", desc: "Structured processes and quality controls help maintain reliable results." },
  { title: "COST EFFICIENCY", desc: "Reduce operational overhead while maintaining professional service standards." },
  { title: "SECURE & CONFIDENTIAL", desc: "We understand the importance of protecting sensitive business information." },
  { title: "SCALABLE SUPPORT", desc: "Our solutions can grow and adapt as your business changes." },
]

export interface TeamGroup {
  initials: string
  name: string
}

export const teamGroups: TeamGroup[] = [
  { initials: "FIN", name: "Finance & Accounting" },
  { initials: "PAY", name: "Payroll" },
  { initials: "OPS", name: "Operations" },
  { initials: "TEC", name: "Technology" },
  { initials: "SUP", name: "Client Support" },
]

export interface TechCategory {
  title: string
  desc: string
}

export const techCategories: TechCategory[] = [
  { title: "ACCOUNTING & FINANCE", desc: "Xero, QuickBooks, Sage." },
  { title: "PAYROLL", desc: "Modern payroll and workforce management platforms." },
  { title: "BUSINESS MANAGEMENT", desc: "Cloud-based business and practice management systems." },
  { title: "COMMUNICATION", desc: "Secure collaboration and communication platforms." },
  { title: "AUTOMATION", desc: "Digital workflow and automation tools." },
  { title: "SECURITY", desc: "Secure infrastructure and data protection technologies." },
]

export const trustPoints: string[] = [
  "Confidentiality",
  "Data Protection",
  "Quality Assurance",
  "Professional Standards",
  "Clear Communication",
  "Reliable Delivery",
  "Continuous Improvement",
]

export const hubLabels = ["People", "Process", "Technology", "Growth"]
