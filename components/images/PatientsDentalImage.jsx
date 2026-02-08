import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function PatientsDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh6.png"
      alt="Patients"
      className={className}
      priority={true}
    />
  )
}
