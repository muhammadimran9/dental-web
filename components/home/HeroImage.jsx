import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
        <div className="aspect-square rounded-xl overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1600988227859-6c2857df8de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Happy Dental Patient Dubai" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-4 left-4 bg-accent text-white px-4 py-2 rounded-lg">
          <p className="text-sm font-bold">Premium Dubai Dental Care</p>
        </div>
      </div>
    </div>
  )
}
