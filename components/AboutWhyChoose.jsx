import { aboutReasons } from './aboutConfig'
import ReasonItem from './ReasonItem'
import AboutSectionHeader from './AboutSectionHeader'

export default function AboutWhyChoose() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <AboutSectionHeader 
            title="Why Choose DentalCare"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
          />
          <ReasonsList reasons={aboutReasons} />
        </div>
      </div>
    </section>
  )
}

function ReasonsList({ reasons }) {
  return (
    <div className="space-y-6">
      {reasons.map((reason, index) => (
        <ReasonItem key={index} {...reason} />
      ))}
    </div>
  )
}
