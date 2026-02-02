import Link from 'next/link'
import Button from '../Button'
import Card from '../Card'
import SectionHeader from '../SectionHeader'
import ServiceCard from './ServicesPreviewCard'
import { previewServices } from '../servicesConfig'
import ServicesGrid from '../services/ServicesGrid'
import ViewAllButton from '../ViewAllButton'

export default function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader title="Our Services" subtitle="Comprehensive dental care for all your needs" />
        <ServicesGrid services={previewServices} ServiceCard={ServiceCard} />
        <ViewAllButton />
      </div>
    </section>
  )
}
