import { useEffect } from "react"
import Hero from "./reference/hero"
import Trust from "./reference/trust"
import About from "./reference/about"
import Challenge from "./reference/challenge"
import Services from "./reference/services"
import Approach from "./reference/approach"
import Why from "./reference/why"
import Technology from "./reference/technology"
import Industries from "./reference/industries"
import Faq from "./reference/faq"
import Contact from "./reference/contact"
import Navigation from "./reference/navigation"
import Footer from "./reference/footer"

export default function HomePage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "dotpbo | Smarter Outsourcing. Stronger Operations."
    return () => { document.title = previousTitle }
  }, [])
  return (
    <div className="reference-home">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-container focus:p-4 focus:text-on-primary-container">Skip to content</a>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="overflow-x-clip pt-20">
      <Hero />
      <Trust />
      <About />
      <Challenge />
      <Services />
      <Approach />
      <Why />
      <Technology />
      <Industries />
      <Faq />
      <Contact />
      </main>
      <Footer />
    </div>
  )
}
