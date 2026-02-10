import Link from 'next/link'
import Image from 'next/image'

const galleryImages = [
  { src: '/dental-images/26.png', alt: 'Beautiful Smile Transformation' },
  { src: '/dental-images/27.png', alt: 'Professional Teeth Whitening Result' },
  { src: '/dental-images/28.png', alt: 'Dental Veneers Before After' },
  { src: '/dental-images/1.png', alt: 'Orthodontic Treatment Success' },
  { src: '/dental-images/2.png', alt: 'Cosmetic Dentistry Result' },
  { src: '/dental-images/3.png', alt: 'Perfect Smile Makeover' }
]

export default function SmileGallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smile Gallery</h2>
          <p className="text-xl text-gray-600">See the amazing transformations we've created</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg shadow-lg group aspect-square">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/smile-gallery" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg hover:shadow-xl">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
