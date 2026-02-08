import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function WhiteningDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dental-white.jpg"
      alt="Teeth Whitening"
      className={className}
      priority={true}
    />
  )
}
