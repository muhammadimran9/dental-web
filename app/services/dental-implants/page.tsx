import Link from 'next/link'
import Image from 'next/image'

export default function DentalImplantsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <Image src="/dental-images/dh5.png" alt="Dental Implants" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dental Implants</h1>
            <p className="text-2xl mb-8">Permanent, Natural-Looking Solution for Missing Teeth</p>
            <Link href="/appointment" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What Are Dental Implants */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Are Dental Implants?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Dental implants are titanium posts surgically placed into your jawbone to serve as artificial tooth roots. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Unlike dentures or bridges, dental implants don't slip or shift in your mouth, allowing you to eat, speak, and smile with complete confidence. They're the closest thing to natural teeth available in modern dentistry.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="text-blue-900 font-semibold">Success Rate: Over 95% with proper care</p>
              </div>
            </div>
            <div className="relative h-96">
              <Image src="/dental-images/4.png" alt="Dental Implant Diagram" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Dental Implants?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Natural Look & Feel', desc: 'Designed to look, feel, and function like your natural teeth', icon: '😊' },
              { title: 'Long-Lasting', desc: 'With proper care, implants can last a lifetime', icon: '⏰' },
              { title: 'Preserve Jawbone', desc: 'Prevents bone loss and maintains facial structure', icon: '🦴' },
              { title: 'No Slipping', desc: 'Securely anchored, won\'t slip or move when eating or speaking', icon: '🔒' },
              { title: 'Protect Adjacent Teeth', desc: 'No need to alter neighboring healthy teeth', icon: '🦷' },
              { title: 'Improved Confidence', desc: 'Smile, eat, and speak without worry', icon: '✨' }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Procedure */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">The Implant Procedure</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Initial Consultation', desc: 'Comprehensive examination, X-rays, and 3D imaging to assess bone density and plan your treatment.' },
              { step: 2, title: 'Implant Placement', desc: 'Titanium post is surgically placed into the jawbone under local anesthesia. The procedure is typically painless.' },
              { step: 3, title: 'Osseointegration', desc: 'Healing period of 3-6 months where the implant fuses with your jawbone, creating a strong foundation.' },
              { step: 4, title: 'Abutment Placement', desc: 'A connector piece (abutment) is attached to the implant to hold the new tooth.' },
              { step: 5, title: 'Crown Placement', desc: 'Custom-made crown is attached to the abutment, completing your new tooth.' }
            ].map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-lg text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Implants */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Types of Dental Implants</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Tooth Implant</h3>
              <p className="text-gray-700 mb-4">Perfect for replacing one missing tooth without affecting adjacent teeth.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> No damage to healthy teeth</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Preserves jawbone</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Natural appearance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multiple Teeth Implants</h3>
              <p className="text-gray-700 mb-4">Implant-supported bridge for replacing several missing teeth.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> More stable than traditional bridges</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Cost-effective solution</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Prevents bone loss</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">All-on-4 Implants</h3>
              <p className="text-gray-700 mb-4">Full arch restoration using just four strategically placed implants.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Replaces entire arch</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Faster treatment time</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Often no bone grafting needed</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implant-Supported Dentures</h3>
              <p className="text-gray-700 mb-4">Secure dentures that snap onto implants for superior stability.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> No slipping or clicking</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Improved chewing ability</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> More comfortable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Candidacy */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Are You a Candidate?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good Candidates</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Healthy gums and adequate jawbone</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Good oral hygiene habits</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Non-smoker or willing to quit</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Committed to regular dental visits</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Overall good health</span></li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-6">May Need Additional Treatment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">•</span><span>Insufficient bone density (bone grafting available)</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">•</span><span>Active gum disease (treatable first)</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">•</span><span>Heavy smokers (affects healing)</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">•</span><span>Uncontrolled diabetes</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">•</span><span>Certain medications</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Insurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Investment in Your Smile</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between"><span>Single Implant:</span><strong>AED 5,000 - 8,000</strong></li>
                  <li className="flex justify-between"><span>Multiple Implants:</span><strong>AED 15,000 - 25,000</strong></li>
                  <li className="flex justify-between"><span>All-on-4:</span><strong>AED 40,000 - 60,000</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Flexible payment plans</li>
                  <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Insurance accepted</li>
                  <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> 0% financing available</li>
                  <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Free consultation</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-center">*Prices vary based on individual needs. Schedule a consultation for accurate quote.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Does the procedure hurt?', a: 'The procedure is performed under local anesthesia, so you won\'t feel pain during surgery. Most patients report minimal discomfort afterward, manageable with over-the-counter pain medication.' },
              { q: 'How long do dental implants last?', a: 'With proper care and maintenance, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear.' },
              { q: 'What is the success rate?', a: 'Dental implants have a success rate of over 95%. Success depends on factors like oral hygiene, overall health, and following post-operative care instructions.' },
              { q: 'How long is the recovery?', a: 'Initial healing takes 1-2 weeks. Complete osseointegration (bone fusion) takes 3-6 months before the final crown can be placed.' },
              { q: 'Can I eat normally with implants?', a: 'Yes! Once fully healed, you can eat all your favorite foods without restrictions. Implants function just like natural teeth.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Smile?</h2>
          <p className="text-xl mb-8">Schedule your free consultation today and discover if dental implants are right for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Book Free Consultation
            </Link>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
