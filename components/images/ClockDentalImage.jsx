import Image from 'next/image'
import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function ClockDentalImage({ className = "w-5 h-5" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/8.png"
      alt="Clock"
      className={className}
    />
  )
}
