interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <FAQItem 
          question="Do I need an appointment?"
          answer="While we accept walk-ins, we highly recommend booking an appointment to minimize waiting time and ensure we can give you our full attention."
        />
        <FAQItem 
          question="What payment methods do you accept?"
          answer="We accept cash, all major credit cards, debit cards, and most insurance plans. We also offer flexible payment plans for larger treatments."
        />
        <FAQItem 
          question="Do you treat children?"
          answer="Yes! We have a dedicated pediatric dentistry team and child-friendly facilities to make dental visits comfortable for kids of all ages."
        />
        <FAQItem 
          question="What if I have a dental emergency?"
          answer="For dental emergencies, call our emergency line at +971 50 123 4567. We provide 24/7 emergency dental care for urgent situations."
        />
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h4 className="text-lg font-bold text-gray-800 mb-3">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
