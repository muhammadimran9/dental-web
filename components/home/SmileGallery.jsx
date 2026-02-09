import Link from 'next/link'

const galleryImages = [
  { src: '/dental-images/dh1.png', alt: 'Smile Transformation 1' },
  { src: '/dental-images/dh2.png', alt: 'Smile Transformation 2' },
  { src: '/dental-images/dh3 (1).png', alt: 'Smile Transformation 3' },
  { src: '/dental-images/dh4.png', alt: 'Smile Transformation 4' },
  { src: '/dental-images/dh5.png', alt: 'Smile Transformation 5' },
  { src: '/dental-images/dh6.png', alt: 'Smile Transformation 6' }
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
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
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
