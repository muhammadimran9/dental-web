import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
        <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center">
          <Image 
            src="/images/teethandsmile.png" 
            alt="Dental Care" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
