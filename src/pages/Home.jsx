import { useSEO } from '../lib/useSEO'
import HeroSection from '../components/home/HeroSection'
import AboutPreview from '../components/home/AboutPreview'
import ProductsOverview from '../components/home/ProductOverview'
import ComplianceHighlights from '../components/home/ComplianceHighlights'
import DistributionMap from '../components/home/DistributionMap'

export default function Home() {
  useSEO('home')

  return (
    <div className="home-page">
      <HeroSection />
      <AboutPreview />
      <ProductsOverview />
      <ComplianceHighlights />
      <DistributionMap />
    </div>
  )
}