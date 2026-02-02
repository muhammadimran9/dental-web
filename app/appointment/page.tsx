import AppointmentHero from '@/components/AppointmentHero'
import QuickAppointmentForm from '@/components/QuickAppointmentForm'
import ProcessSteps from '@/components/ProcessSteps'
import TestimonialsSlider from '@/components/TestimonialsSlider'

export default function Appointment() {
  return (
    <div>
      <AppointmentHero />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <QuickAppointmentForm />
        </div>
      </section>
      
      <ProcessSteps />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Patients Choose Us
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            See what our patients say about their experience
          </p>
          <TestimonialsSlider />
        </div>
      </section>
    </div>
  )
}
