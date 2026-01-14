import { useEffect } from 'react'
import { siteMetadata, generateStructuredData } from '../../seo/metadata'

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  image,
  url,
  type = 'website',
  structuredData 
}) {
  useEffect(() => {
    // Set title
    if (title) {
      document.title = title
    }

    // Set meta tags
    setMetaTag('description', description)
    setMetaTag('keywords', keywords)

    // Open Graph
    setMetaTag('og:title', title, 'property')
    setMetaTag('og:description', description, 'property')
    setMetaTag('og:image', image || siteMetadata.images.ogImage, 'property')
    setMetaTag('og:url', url || window.location.href, 'property')
    setMetaTag('og:type', type, 'property')
    setMetaTag('og:site_name', siteMetadata.siteName, 'property')

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image', 'name')
    setMetaTag('twitter:title', title, 'name')
    setMetaTag('twitter:description', description, 'name')
    setMetaTag('twitter:image', image || siteMetadata.images.ogImage, 'name')

    // Structured Data
    if (structuredData) {
      addStructuredData(structuredData)
    } else {
      addStructuredData(generateStructuredData())
    }
  }, [title, description, keywords, image, url, type, structuredData])

  return null
}

const setMetaTag = (name, content, attribute = 'name') => {
  if (!content) return

  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

const addStructuredData = (data) => {
  const existing = document.querySelector('script[data-schema="structured-data"]')
  if (existing) {
    existing.remove()
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-schema', 'structured-data')
  script.text = typeof data === 'string' ? data : JSON.stringify(data)
  document.head.appendChild(script)
}