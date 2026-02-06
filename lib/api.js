// API Configuration for Dental Clinic
const API_CONFIG = {
  // Base URLs
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://dental-web-app.netlify.app',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://dental-web-app.netlify.app',
  
  // API Endpoints
  ENDPOINTS: {
    CONTACT: '/api/contact',
    APPOINTMENT: '/api/appointment',
    NEWSLETTER: '/api/newsletter',
    TESTIMONIALS: '/api/testimonials'
  },
  
  // Headers for CORS
  HEADERS: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
}

// API Helper Functions
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`
  const config = {
    headers: API_CONFIG.HEADERS,
    ...options
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API Request Failed:', error)
    throw error
  }
}

// Contact Form Submission
export async function submitContactForm(formData) {
  return apiRequest(API_CONFIG.ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}

// Appointment Booking
export async function bookAppointment(appointmentData) {
  return apiRequest(API_CONFIG.ENDPOINTS.APPOINTMENT, {
    method: 'POST',
    body: JSON.stringify(appointmentData)
  })
}

// Newsletter Subscription
export async function subscribeNewsletter(email) {
  return apiRequest(API_CONFIG.ENDPOINTS.NEWSLETTER, {
    method: 'POST',
    body: JSON.stringify({ email })
  })
}

export default API_CONFIG
