import Hero from "./hero"
import About from "./about"
import Services from "./services"
import WhyChooseUs from "./why-choose-us"
import Technology from "./technology"
import Industries from "./industries"
import Stats from "./stats"
import Testimonials from "./testimonials"
import CaseStudies from "./case-studies"
import Faq from "./faq"
import Contact from "./contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Technology />
      <Industries />
      <Stats />
      <Testimonials />
      <CaseStudies />
      <Faq />
      <Contact />
    </main>
  )
}
