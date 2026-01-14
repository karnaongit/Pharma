import { useSEO } from '../lib/useSEO'
import CompanyOverview from '../components/about/CompanyOverview'
import OurValues from '../components/about/OurValues'
import Timeline from '../components/about/Timeline'
import FounderMessage from '../components/about/FounderMessage'
import TeamSection from '../components/about/TeamSection'
import Certifications from '../components/about/Certifications'

export default function About() {
  useSEO('about')

  return (
    <div className="about-page">
      <CompanyOverview />
      <OurValues />
      <Timeline />
      <FounderMessage />
      <TeamSection />
      <Certifications />
    </div>
  )
}