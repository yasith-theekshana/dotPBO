import { useEffect } from "react"
import Navigation from "../home/reference/navigation"
import Footer from "../home/reference/footer"
import Hero from "./reference/hero"
import Purpose from "./reference/purpose"
import Approach from "./reference/approach"
import Model from "./reference/model"
import Process from "./reference/process"
import Principles from "./reference/principles"
import Partnership from "./reference/partnership"
import Contact from "./reference/contact"
import "./reference/about.css"

export default function AboutUsPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "About dotpbo | Built for Better Operations"
    return () => { document.title = previousTitle }
  }, [])

  return (
    <div className="reference-home reference-about">
      <a href="#about-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-container focus:p-4 focus:text-on-primary-container">Skip to content</a>
      <Navigation activePage="about" />
      <main id="about-content" tabIndex={-1} className="relative isolate overflow-x-clip bg-surface pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary-container/10 blur-[140px]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-[30%] -z-10 h-[500px] w-[500px] rounded-full bg-primary-container/5 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-10 top-[70%] -z-10 h-[600px] w-[600px] rounded-full bg-primary-container/8 blur-[160px]" />
        <Hero />
        <Purpose />
        <Approach />
        <Model />
        <Process />
        <Principles />
        <Partnership />
        <Contact />
      </main>
      <Footer homePrefix="/" backToTop="#about-hero" />
    </div>
  )
}
