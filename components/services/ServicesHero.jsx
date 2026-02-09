import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-300 text-white section-padding overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/components/images/dental-white.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="container-custom text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-100 max-w-3xl mx-auto">
          Comprehensive dental care tailored to your needs
        </p>
      </div>
    </section>
  )
}
