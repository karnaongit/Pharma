import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setPageMetadata, generateStructuredData } from '../seo/metadata'

// Custom hook for managing SEO
export const useSEO = (page, customMetadata = {}) => {
  const location = useLocation()

  useEffect(() => {
    // Set page metadata
    const metadata = setPageMetadata(page)
    
    // Override with custom metadata if provided
    if (customMetadata.title) {
      document.title = customMetadata.title
    }
    
    if (customMetadata.description) {
      const descMeta = document.querySelector('meta[name="description"]')
      if (descMeta) {
        descMeta.setAttribute('content', customMetadata.description)
      }
    }
    
    // Add structured data
    addStructuredData()
    
    // Scroll to top on route change
    window.scrollTo(0, 0)
    
    return () => {
      // Cleanup if needed
    }
  }, [page, location.pathname, customMetadata])
}

// Add structured data to page
const addStructuredData = () => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]')
  if (existing) {
    existing.remove()
  }
  
  // Add new structured data
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = generateStructuredData()
  document.head.appendChild(script)
}

// Hook for setting custom meta tags
export const useMetaTags = (tags) => {
  useEffect(() => {
    const addedTags = []
    
    tags.forEach(tag => {
      const element = document.createElement('meta')
      Object.keys(tag).forEach(key => {
        element.setAttribute(key, tag[key])
      })
      document.head.appendChild(element)
      addedTags.push(element)
    })
    
    return () => {
      addedTags.forEach(tag => {
        if (tag.parentNode) {
          tag.parentNode.removeChild(tag)
        }
      })
    }
  }, [tags])
}

export default useSEO