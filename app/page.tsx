import Hero from '../components/Hero'
import WhyConsult from '../components/WhyConsult'
import About from '../components/About'
import AttorneyIntro from '../components/AttorneyIntro'
import PracticeAreas from '../components/PracticeAreas'
import ConsultationProcess from '../components/ConsultationProcess'
import LocationSection from '../components/LocationSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      {/* "What's your situation?" sits directly under the hero, matching the
          Korean site: visitors pick their situation before reading about us. */}
      <PracticeAreas />
      <WhyConsult />
      <About />
      <AttorneyIntro />
      <ConsultationProcess />
      <LocationSection />
      <ContactSection />
    </>
  )
}
