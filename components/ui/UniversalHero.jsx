import Image from 'next/image'

export default function UniversalHero({ 
  title, 
  subtitle, 
  description, 
  backgroundImage,
  overlayOpacity = "bg-black/50",
  children
}) {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority={true}
          quality={85}
        />
      </div>
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl font-medium mb-6 text-blue-200">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-100 mb-8">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
