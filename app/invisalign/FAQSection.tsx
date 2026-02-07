import { CheckCircleIcon, ClockIcon, UsersIcon, ZapIcon } from '@/components/ui/Icons'

export default function FAQSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <FAQItem 
          question="How long does Invisalign treatment take?"
          answer="Treatment time varies from 6 to 24 months depending on your case complexity. Most adults complete treatment in 12-18 months."
        />
        <FAQItem 
          question="Is Invisalign painful?"
          answer="Invisalign is generally more comfortable than traditional braces. You may feel temporary discomfort when switching to new aligners, but this typically subsides within a few days."
        />
        <FAQItem 
          question="Can I eat with aligners in?"
          answer="No, you should remove your aligners when eating or drinking anything other than water. This is one of the main advantages over traditional braces."
        />
        <FAQItem 
          question="How often do I need to wear aligners?"
          answer="For best results, wear your aligners 20-22 hours per day, removing them only for eating, drinking, and oral hygiene."
        />
        <FAQItem 
          question="What are the advantages of Invisalign over braces?"
          answer="Virtually invisible aligners that are removable for eating and drinking. Clear aligners offer the flexibility of traditional braces with the aesthetics of invisible treatment."
        />
      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircleIcon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800 mb-2">{question}</h4>
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}
