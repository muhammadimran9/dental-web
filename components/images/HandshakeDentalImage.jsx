import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function HandshakeDentalImage({ className = "w-8 h-8" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/sh4.png"
      alt="Integrity"
      className={className}
      priority={true}
    />
  )
}
