import Link from 'next/link'
import Image from 'next/image'

export default function TeethWhiteningPage() {
  return (
    <div>
      <section className="relative h-[60vh] bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <Image src="/dental-images/dental-white.jpg" alt="Teeth Whitening" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Teeth Whitening</h1>
            <p className="text-2xl mb-8">Brighten Your Smile in Just One Visit</p>
            <Link href="/appointment" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Book Whitening Session
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Teeth Whitening</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our professional teeth whitening treatments use advanced technology to safely brighten your smile by several shades in just one visit. Unlike over-the-counter products, our treatments are supervised by dental professionals and deliver dramatic, long-lasting results.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We offer both in-office and take-home whitening options to fit your lifestyle and budget. All treatments are customized to your specific needs and sensitivity levels.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                <p className="text-blue-900 font-semibold">Results: Up to 8 shades whiter in 60 minutes</p>
              </div>
            </div>
            <div className="relative h-96">
              <Image src="/dental-images/dental-white.jpg" alt="Whitening Results" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Professional Whitening?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Immediate Results', desc: 'See dramatic whitening in just one 60-minute session', icon: '⚡' },
              { title: 'Safe & Effective', desc: 'FDA-approved treatments that protect your enamel', icon: '🛡️' },
              { title: 'Long-Lasting', desc: 'Results last 1-2 years with proper maintenance', icon: '⏰' },
              { title: 'Customized Treatment', desc: 'Tailored to your sensitivity and desired shade', icon: '🎯' },
              { title: 'Professional Supervision', desc: 'Monitored by experienced dental professionals', icon: '👨‍⚕️' },
              { title: 'Confidence Boost', desc: 'A brighter smile enhances your self-esteem', icon: '✨' }
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

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Whitening Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Office Whitening</h3>
              <p className="text-gray-700 mb-6">Professional-grade treatment for immediate, dramatic results in just one visit.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> 60-minute treatment</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Up to 8 shades whiter</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Immediate results</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Professional supervision</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">AED 1,200 - 1,800</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Take-Home Whitening</h3>
              <p className="text-gray-700 mb-6">Custom trays and professional-grade gel for convenient at-home whitening.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Custom-fitted trays</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Professional-grade gel</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Gradual whitening</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">✓</span> Convenient schedule</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">AED 800 - 1,200</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">The Whitening Process</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Consultation', desc: 'Evaluate your teeth, discuss goals, and determine the best whitening option for you.' },
              { step: 2, title: 'Preparation', desc: 'Professional cleaning to remove surface stains and ensure optimal whitening results.' },
              { step: 3, title: 'Protection', desc: 'Apply protective barrier to gums and soft tissues to prevent sensitivity.' },
              { step: 4, title: 'Whitening Application', desc: 'Apply professional-grade whitening gel to teeth surface.' },
              { step: 5, title: 'Activation', desc: 'Use LED light or laser to activate gel and accelerate whitening process.' },
              { step: 6, title: 'Reveal Results', desc: 'Remove gel and reveal your dramatically whiter, brighter smile.' }
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

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Maintaining Your White Smile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Do These</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Brush twice daily with whitening toothpaste</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Floss daily to remove stains between teeth</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Use a straw for dark beverages</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Regular dental cleanings every 6 months</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span>Touch-up treatments as needed</span></li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Avoid These</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">×</span><span>Coffee, tea, and red wine (or rinse immediately)</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">×</span><span>Tobacco products and smoking</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">×</span><span>Dark-colored sauces and berries</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">×</span><span>Acidic foods that weaken enamel</span></li>
                <li className="flex items-start gap-3"><span className="text-red-600 text-xl">×</span><span>Skipping dental hygiene routine</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is teeth whitening safe?', a: 'Yes, professional teeth whitening is completely safe when performed by dental professionals. We use FDA-approved products and protect your gums and enamel throughout the process.' },
              { q: 'How long do results last?', a: 'Results typically last 1-2 years with proper care. Longevity depends on your diet, oral hygiene, and lifestyle habits. Touch-up treatments can extend results.' },
              { q: 'Will it cause sensitivity?', a: 'Some patients experience temporary sensitivity, which usually subsides within 24-48 hours. We offer desensitizing treatments to minimize discomfort.' },
              { q: 'How white will my teeth get?', a: 'Most patients achieve 4-8 shades whiter. Results vary based on starting shade and tooth structure. We\'ll discuss realistic expectations during consultation.' },
              { q: 'Can everyone get teeth whitening?', a: 'Most people are good candidates. However, whitening works best on natural teeth and won\'t affect crowns, veneers, or fillings. We\'ll evaluate your suitability during consultation.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Brighter Smile?</h2>
          <p className="text-xl mb-8">Book your professional teeth whitening session today and see results in just 60 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Book Whitening Session
            </Link>
            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

