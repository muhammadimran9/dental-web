import Image from 'next/image'

export default function ServiceImage({ src, alt, className = '' }) {
  return (
    <div className={`relative w-full h-64 rounded-lg overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
