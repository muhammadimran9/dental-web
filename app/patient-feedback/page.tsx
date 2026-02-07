import FeedbackHero from './FeedbackHero'
import TestimonialsGrid from './TestimonialsGrid'
import FeedbackForm from './FeedbackForm'
import StatsSection from './StatsSection'

export default function PatientFeedback() {
  return (
    <main className="container-custom py-16">
      <FeedbackHero />
      <TestimonialsGrid />
      <FeedbackForm />
      <StatsSection />
    </main>
  )
}
