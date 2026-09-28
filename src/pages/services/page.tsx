import { useEffect } from "react"
import Navigation from "../home/reference/navigation"
import Footer from "../home/reference/footer"
import Hero from "./reference/hero"
import ServiceGrid from "./reference/service-grid"
import CustomSolutions from "./reference/custom-solutions"
import EngagementModels from "./reference/engagement-models"
import Contact from "./reference/contact"
import "./reference/services.css"

export default function ServicesPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Services | dotpbo"
    return () => { document.title = previousTitle }
  }, [])

  return (
    <div className="reference-home reference-services">
      <a href="#services-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-container focus:p-4 focus:text-on-primary-container">Skip to content</a>
      <Navigation activePage="services" />
      <main id="services-content" tabIndex={-1} className="overflow-x-clip bg-background pt-20">
        <Hero />
        <ServiceGrid />
        <CustomSolutions />
        <EngagementModels />
        <Contact />
      </main>
      <Footer homePrefix="/" backToTop="#services-hero" />
    </div>
  )
}
