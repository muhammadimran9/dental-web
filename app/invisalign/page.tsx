import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'
import InvisalignHero from './InvisalignHero'
import InvisalignBenefits from './InvisalignBenefits'
import TreatmentProcess from './TreatmentProcess'
import TechnologySection from './TechnologySection'
import PricingSection from './PricingSection'
import FAQSection from './FAQSection'

export default function Invisalign() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container-custom py-16">
        <InvisalignHero />
        <InvisalignBenefits />
        <TreatmentProcess />
        <TechnologySection />
        <PricingSection />
        <FAQSection />
      </main>
    </div>
  )
}
