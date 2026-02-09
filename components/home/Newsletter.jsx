'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Subscribing...')
    
    setTimeout(() => {
      setStatus('Thank you for subscribing!')
      setEmail('')
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">Subscribe to our newsletter for dental tips, special offers, and clinic updates</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
            <button type="submit" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Subscribe
            </button>
          </form>
          
          {status && <p className="mt-4 text-white font-medium">{status}</p>}
        </div>
      </div>
    </section>
  )
}
