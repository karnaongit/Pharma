import HeroSection from '../components/home/HeroSection'
import AboutPreview from '../components/home/AboutPreview'
import ProductOverview from '../components/home/ProductOverview'
import ComplianceHighlights from '../components/home/ComplianceHighlights'
import DistributionMap from '../components/home/DistributionMap'
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductOverview />
        <ComplianceHighlights />
        <DistributionMap />
      
    </>
  )
}
