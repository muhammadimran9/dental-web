import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeaderNew'
import FeedbackHero from './FeedbackHero'
import TestimonialsGrid from './TestimonialsGrid'
import FeedbackForm from './FeedbackForm'
import StatsSection from './StatsSection'

export default function PatientFeedback() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container-custom py-16">
        <FeedbackHero />
        <TestimonialsGrid />
        <FeedbackForm />
        <StatsSection />
      </main>
    </div>
  )
}
