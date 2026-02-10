import Image from 'next/image'

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-300 text-white section-padding overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/dental-images/dental-blog3.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="container-custom text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Dental Health <span className="text-white font-extrabold">Blog</span>
        </h1>
        <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Stay informed about dental health, tips, and the latest in dental care
        </p>
      </div>
    </section>
  )
}
