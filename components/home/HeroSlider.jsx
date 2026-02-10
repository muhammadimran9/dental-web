'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  { img: '/dental-images/dh1.png', title: 'Transform Your Smile', text: 'Expert Cosmetic Dentistry Services' },
  { img: '/dental-images/dh2.png', title: 'Dental Implants', text: 'Permanent Solution for Missing Teeth' },
  { img: '/dental-images/dh3 (1).png', title: 'Teeth Whitening', text: 'Brighten Your Smile Today' },
  { img: '/dental-images/dh4.png', title: 'Orthodontics', text: 'Straighten Your Teeth with Confidence' }
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[85vh] overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={s.img} alt={s.title} fill priority={i === 0} className="object-cover" sizes="100vw" quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">{s.title}</h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">{s.text}</p>
                <Link href="/appointment" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button onClick={() => setActive(p => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl z-10 transition">
        ‹
      </button>
      <button onClick={() => setActive(p => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl z-10 transition">
        ›
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full transition ${active === i ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  )
}
