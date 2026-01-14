// SEO Metadata Configuration for Sunrise Pharma

export const siteMetadata = {
  // Company Information
  companyName: 'Sunrise Pharma',
  tagline: 'Quality Healthcare Solutions',
  foundedYear: 1999,
  
  // Basic SEO
  siteName: 'Sunrise Pharma',
  siteUrl: 'https://sunrisepharma.com',
  defaultTitle: 'Sunrise Pharma - Leading Pharmaceutical & Nutraceutical Company',
  defaultDescription: 'ISO certified pharmaceutical company providing quality medicines, nutraceuticals, and healthcare products across India and 50+ countries worldwide. WHO-GMP compliant with 25+ years of excellence.',
  
  // Keywords
  keywords: [
    'pharmaceutical company',
    'nutraceuticals',
    'healthcare products',
    'ISO certified pharma',
    'WHO-GMP certified',
    'quality medicines',
    'pharmaceutical manufacturer',
    'healthcare solutions',
    'Indian pharmaceutical company',
    'wellness products',
    'FDA approved medicines',
    'export pharmaceutical',
    'Sunrise Pharma'
  ],
  
  // Social Media
  social: {
    twitter: '@SunrisePharma',
    facebook: 'SunrisePharmaOfficial',
    linkedin: 'company/sunrise-pharma',
    instagram: 'sunrisepharmaofficial',
  },
  
  // Contact Information
  contact: {
    email: 'info@sunrisepharma.com',
    phone: '+91 98765 43210',
    address: '123 Pharma Street, Medical District, Mumbai, India 400001',
  },
  
  // Images
  images: {
    logo: '/images/logo/logo.png',
    ogImage: '/images/og-image.jpg',
    favicon: '/favicon.ico',
  },
  
  // Structured Data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sunrise Pharma',
    url: 'https://sunrisepharma.com',
    logo: 'https://sunrisepharma.com/images/logo/logo.png',
    description: 'Leading pharmaceutical and nutraceutical manufacturer with ISO certification and WHO-GMP compliance.',
    foundingDate: '1999',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'Customer Service',
      email: 'info@sunrisepharma.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.facebook.com/SunrisePharmaOfficial',
      'https://twitter.com/SunrisePharma',
      'https://www.linkedin.com/company/sunrise-pharma',
      'https://www.instagram.com/sunrisepharmaofficial'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Pharma Street, Medical District',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400001',
      addressCountry: 'IN'
    }
  },
}

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'Sunrise Pharma - Quality Healthcare Solutions | ISO Certified',
    description: 'Leading pharmaceutical manufacturer with 25+ years of excellence in healthcare. ISO certified, WHO-GMP compliant, serving 50+ countries with quality medicines and nutraceuticals.',
    keywords: 'pharmaceutical company, quality medicines, healthcare solutions, ISO certified pharma, WHO-GMP',
    ogTitle: 'Sunrise Pharma - Your Trusted Healthcare Partner',
    ogDescription: 'Delivering quality pharmaceutical and nutraceutical products worldwide for over 25 years.',
  },
  
  about: {
    title: 'About Us - Sunrise Pharma | Our Story, Values & Leadership',
    description: 'Learn about Sunrise Pharma\'s 25-year journey in pharmaceutical excellence, our core values, ISO certifications, WHO-GMP compliance, leadership team, and commitment to quality healthcare.',
    keywords: 'about sunrise pharma, pharmaceutical company history, leadership team, ISO certification, WHO-GMP, company values',
    ogTitle: 'About Sunrise Pharma - 25 Years of Excellence',
    ogDescription: 'Discover our journey from 1999 to becoming a trusted pharmaceutical leader with operations in 50+ countries.',
  },
  
  products: {
    title: 'Products - Sunrise Pharma | Pharmaceutical & Nutraceutical Range',
    description: 'Explore our comprehensive range of pharmaceutical medicines, nutraceuticals, wellness products, and healthcare solutions. Quality assured, internationally certified, ISO 9001:2015 compliant.',
    keywords: 'pharmaceutical products, medicines, nutraceuticals, wellness products, healthcare solutions, vitamins, supplements',
    ogTitle: 'Sunrise Pharma Products - Quality Healthcare Solutions',
    ogDescription: 'Browse our extensive portfolio of 100+ pharmaceutical and nutraceutical products.',
  },
  
  contact: {
    title: 'Contact Us - Sunrise Pharma | Get in Touch',
    description: 'Contact Sunrise Pharma for inquiries, partnerships, distribution opportunities, or product information. We\'re here to serve your healthcare needs with 24/7 support.',
    keywords: 'contact sunrise pharma, pharmaceutical inquiries, distribution partnership, healthcare support',
    ogTitle: 'Contact Sunrise Pharma',
    ogDescription: 'Reach out to our team for inquiries, partnerships, or support.',
  },
  
  notFound: {
    title: '404 - Page Not Found | Sunrise Pharma',
    description: 'The page you\'re looking for doesn\'t exist. Return to Sunrise Pharma homepage or contact us for assistance.',
    keywords: '404, page not found',
  }
}

// Generate page metadata
export const generatePageMetadata = (page) => {
  const pageMeta = pageMetadata[page] || {}
  
  return {
    title: pageMeta.title || siteMetadata.defaultTitle,
    description: pageMeta.description || siteMetadata.defaultDescription,
    keywords: pageMeta.keywords || siteMetadata.keywords.join(', '),
    ogTitle: pageMeta.ogTitle || pageMeta.title || siteMetadata.defaultTitle,
    ogDescription: pageMeta.ogDescription || pageMeta.description || siteMetadata.defaultDescription,
    ogImage: siteMetadata.images.ogImage,
    ogUrl: `${siteMetadata.siteUrl}/${page === 'home' ? '' : page}`,
    canonical: `${siteMetadata.siteUrl}/${page === 'home' ? '' : page}`,
  }
}

// Set page metadata (for document head)
export const setPageMetadata = (page) => {
  const meta = generatePageMetadata(page)
  
  // Update document title
  document.title = meta.title
  
  // Update meta tags
  updateMetaTag('description', meta.description)
  updateMetaTag('keywords', meta.keywords)
  
  // Open Graph tags
  updateMetaTag('og:title', meta.ogTitle, 'property')
  updateMetaTag('og:description', meta.ogDescription, 'property')
  updateMetaTag('og:image', meta.ogImage, 'property')
  updateMetaTag('og:url', meta.ogUrl, 'property')
  updateMetaTag('og:type', 'website', 'property')
  updateMetaTag('og:site_name', siteMetadata.siteName, 'property')
  
  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image', 'name')
  updateMetaTag('twitter:site', siteMetadata.social.twitter, 'name')
  updateMetaTag('twitter:title', meta.ogTitle, 'name')
  updateMetaTag('twitter:description', meta.ogDescription, 'name')
  updateMetaTag('twitter:image', meta.ogImage, 'name')
  
  // Canonical URL
  updateLinkTag('canonical', meta.canonical)
  
  return meta
}

// Helper function to update meta tags
const updateMetaTag = (name, content, attribute = 'name') => {
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

// Helper function to update link tags
const updateLinkTag = (rel, href) => {
  if (!href) return
  
  let element = document.querySelector(`link[rel="${rel}"]`)
  
  if (element) {
    element.setAttribute('href', href)
  } else {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    element.setAttribute('href', href)
    document.head.appendChild(element)
  }
}

// Generate JSON-LD structured data
export const generateStructuredData = () => {
  return JSON.stringify(siteMetadata.organization)
}

// Breadcrumb structured data
export const generateBreadcrumbData = (items) => {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteMetadata.siteUrl}${item.path}`
    }))
  }
  
  return JSON.stringify(breadcrumbList)
}

// Product structured data
export const generateProductData = (product) => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Sunrise Pharma'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Sunrise Pharma'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR'
    }
  })
}

export default siteMetadata