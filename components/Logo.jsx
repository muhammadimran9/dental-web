import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/teethandsmile.png" 
          alt="DentalCare Logo" 
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <span className="text-xl font-bold text-gray-800">DentalCare</span>
    </Link>
  )
}
