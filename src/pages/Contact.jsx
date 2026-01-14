import { useSEO } from '../lib/useSEO'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import MapLocation from '../components/contact/MapLocation'
import FAQ from '../components/contact/FAQ'

export default function Contact() {
  useSEO('contact')

  return (
    <div className="contact-page">
      <ContactHero />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapLocation />
      <FAQ />
    </div>
  )
}