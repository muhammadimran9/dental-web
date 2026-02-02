import Image from 'next/image'

export default function ServiceImage({ className = "w-6 h-6" }) {
  return (
    <Image 
      src="/images/teethandsmile.png" 
      alt="Dental Service" 
      width={24}
      height={24}
      className={`object-contain ${className}`}
    />
  )
}
