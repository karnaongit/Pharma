import { useSEO } from '../lib/useSEO'
import ProductsHero from '../components/products/ProductsHero'
import ProductCategories from '../components/products/ProductCategories'
import ProductShowcase from '../components/products/ProductShowcase'
import QualityAssurance from '../components/products/QualityAssurance'
import ProductInquiry from '../components/products/ProductInquiry'

export default function Products() {
  useSEO('products')

  return (
    <div className="products-page">
      <ProductsHero />
      <ProductCategories />
      <ProductShowcase />
      <QualityAssurance />
      <ProductInquiry />
    </div>
  )
}