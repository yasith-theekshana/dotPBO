import { Link } from "@tanstack/react-router"
import { Brand } from "./navigation"

const groups = [
  { title: "Services", links: [["Customer Experience", "#services"], ["Back Office", "#services"], ["Dedicated Teams", "#services"], ["Technical Support", "#services"]] },
  { title: "Industries", links: [["Fintech & Banking", "#industries"], ["Healthcare", "#industries"], ["E-Commerce", "#industries"], ["SaaS & Technology", "#industries"]] },
  { title: "Explore", links: [["Our Approach", "#how-it-works"], ["Technology", "#technology"], ["Common Questions", "#faq"], ["Let’s Talk", "#contact"]] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface-container-lowest">
      <div className="mx-auto max-w-[1440px] px-margin-mobile pb-10 pt-12 lg:px-margin">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div><Brand /><p className="mt-5 max-w-sm text-on-surface-variant">Smarter outsourcing for modern businesses. People, processes and technology, working together for stronger operations.</p><div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary-container/20 bg-surface-container-high px-3 py-2 text-label-sm text-on-surface-variant"><span className="h-2 w-2 rounded-full bg-primary-container" />Global Operational Nodes Active</div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div><h2 className="mb-4 text-label-eyebrow uppercase tracking-widest text-outline">Company</h2><div className="flex flex-col gap-3 text-on-surface-variant"><Link to="/about-us" className="hover:text-on-surface">About Us</Link><a href="#why" className="hover:text-on-surface">Why dotpbo</a><a href="#contact" className="hover:text-on-surface">Contact</a></div></div>
            {groups.map((group) => <div key={group.title}><h2 className="mb-4 text-label-eyebrow uppercase tracking-widest text-outline">{group.title}</h2><ul className="space-y-3 text-on-surface-variant">{group.links.map(([label, href]) => <li key={label}><a href={href} className="hover:text-on-surface">{label}</a></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-white/5 pt-8 text-label-md text-outline"><p>© {new Date().getFullYear()} dotpbo. All rights reserved.</p><a href="#home" className="hover:text-on-surface">Back to top ↑</a></div>
      </div>
    </footer>
  )
}
