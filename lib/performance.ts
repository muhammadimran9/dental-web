// Performance monitoring utilities

export function measurePageLoad() {
  if (typeof window !== 'undefined' && window.performance) {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    const connectTime = perfData.responseEnd - perfData.requestStart
    const renderTime = perfData.domComplete - perfData.domLoading
    
    return {
      pageLoadTime,
      connectTime,
      renderTime
    }
  }
  return null
}

export function reportWebVitals(metric) {
  // Log Core Web Vitals
  if (metric.label === 'web-vital') {
    console.log(`${metric.name}: ${metric.value}`)
  }
}

// Lazy load images on scroll
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll('img.lazy').forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

// Prefetch links on hover
export function prefetchOnHover() {
  if (typeof window !== 'undefined') {
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href')
        if (href) {
          const linkElement = document.createElement('link')
          linkElement.rel = 'prefetch'
          linkElement.href = href
          document.head.appendChild(linkElement)
        }
      })
    })
  }
}
