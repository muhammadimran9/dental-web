import ServicesHero from '@/components/ServicesHero'
import ServicesGrid from '@/components/ServicesGrid'
import SectionHeader from '@/components/SectionHeader'

export const dynamic = 'force-dynamic'

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            title="Our Services" 
            subtitle="Comprehensive dental care for all your needs" 
          />
          <ServicesGrid />
        </div>
      </section>
    </div>
  )
}
