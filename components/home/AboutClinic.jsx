import AboutClinicContent from './AboutClinicContent'
import AboutClinicImage from './AboutClinicImage'

export default function AboutClinic() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutClinicContent />
          <AboutClinicImage />
        </div>
      </div>
    </section>
  )
}
