'use client'

import { useState } from 'react'
import ChevronDownIcon from './icons/ChevronDownIcon'
import ChevronUpIcon from './icons/ChevronUpIcon'

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend visiting every 6 months for regular checkups and cleanings to maintain optimal oral health.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance plans. Contact our office to verify your coverage.'
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept cash, credit cards, and offer financing options for larger treatments.'
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Yes, our professional teeth whitening treatments are safe and supervised by experienced dentists.'
  },
]

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about our dental services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="text-accent w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="text-accent w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
