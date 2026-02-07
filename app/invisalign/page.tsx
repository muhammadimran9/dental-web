import InvisalignHero from './InvisalignHero'
import InvisalignBenefits from './InvisalignBenefits'
import TreatmentProcess from './TreatmentProcess'
import TechnologySection from './TechnologySection'
import PricingSection from './PricingSection'
import FAQSection from './FAQSection'

export default function Invisalign() {
  return (
    <main className="container-custom py-16">
      <InvisalignHero />
      <InvisalignBenefits />
      <TreatmentProcess />
      <TechnologySection />
      <PricingSection />
      <FAQSection />
    </main>
  )
}
