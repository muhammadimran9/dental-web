'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  { img: '/components/images/img-cosmetic-smile1.webp', title: 'Transform Your Smile', text: 'Expert Cosmetic Dentistry' },
  { img: '/components/images/img-dental-implants.webp', title: 'Dental Implants', text: 'Permanent Solution for Missing Teeth' },
  { img: '/components/images/img-teeth-whitening.webp', title: 'Teeth Whitening', text: 'Brighten Your Smile Today' },
  { img: '/components/images/img-dental-braces.webp', title: 'Orthodontics', text: 'Straighten Your Teeth' }
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[85vh] bg-black overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{s.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{s.text}</p>
              <Link href="/appointment" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setActive(p => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white text-2xl z-10">‹</button>
      <button onClick={() => setActive(p => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white text-2xl z-10">›</button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full transition ${active === i ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  )
}
