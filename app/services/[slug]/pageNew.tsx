import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { Metadata } from 'next'

interface ServicePageProps {
  params: {
    slug: string
  }
}

const serviceData: Record<string, any> = {
  'general-dentistry': {
    title: 'General Dentistry Dubai | Family Dental Care | DentalCare Dubai',
    description: 'Comprehensive general dentistry services in Dubai. Preventive care, routine check-ups, cleanings, and family dental care. DHA licensed dentists.',
    keywords: 'general dentistry Dubai, family dental care Dubai, dental check-up Dubai, teeth cleaning Dubai, preventive dentistry Dubai',
    overview: 'General dentistry encompasses a wide range of services focused on maintaining your oral health. Our general dentists provide preventive care, diagnose oral diseases, and treat various dental conditions.',
    whoNeeds: 'Everyone benefits from regular general dentistry visits. Whether you need a routine cleaning, have a cavity, or require preventive care, our general dentistry services are designed to keep your smile healthy.',
    benefits: [
      'Prevents tooth decay and gum disease',
      'Early detection of oral health issues',
      'Maintains overall oral hygiene',
      'Saves money through preventive care',
      'Keeps your natural teeth healthy',
    ],
    steps: [
      'Initial consultation and examination',
      'X-rays and diagnostic imaging',
      'Treatment planning',
      'Procedure execution',
      'Follow-up care instructions',
    ],
    aftercare: 'After your general dentistry procedure, follow your dentist\'s instructions carefully. Maintain good oral hygiene, attend follow-up appointments, and contact us if you experience any concerns.',
    faqs: [
      {
        q: 'How often should I visit the dentist?',
        a: 'We recommend visiting every six months for routine cleanings and check-ups.',
      },
      {
        q: 'Does dental cleaning hurt?',
        a: 'No, dental cleanings are typically painless. We use gentle techniques to ensure your comfort.',
      },
      {
        q: 'What is included in a dental exam?',
        a: 'A comprehensive exam includes checking for cavities, gum disease, oral cancer screening, and X-rays if needed.',
      },
    ],
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry Dubai | Smile Makeover | DentalCare Dubai',
    description: 'Transform your smile with cosmetic dentistry in Dubai. Teeth whitening, veneers, smile makeovers. Expert cosmetic dentists for beautiful results.',
    keywords: 'cosmetic dentistry Dubai, smile makeover Dubai, teeth whitening Dubai, dental veneers Dubai, cosmetic dentist Dubai',
    overview: 'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. From simple whitening to complete smile makeovers, we offer various treatments to enhance your confidence.',
    whoNeeds: 'Anyone looking to improve their smile aesthetics. Whether you have stained teeth, gaps, or want a complete smile transformation, our cosmetic dentistry services can help.',
    benefits: [
      'Enhanced smile appearance',
      'Increased confidence and self-esteem',
      'Natural-looking results',
      'Long-lasting improvements',
      'Customized treatment plans',
    ],
    steps: [
      'Smile analysis and consultation',
      'Digital smile design',
      'Treatment planning',
      'Procedure execution',
      'Final adjustments and polishing',
    ],
    aftercare: 'Maintain good oral hygiene, avoid staining foods and drinks initially, and attend regular follow-up appointments to ensure lasting results.',
    faqs: [
      {
        q: 'How long does teeth whitening last?',
        a: 'Results can last 6-12 months with proper care and maintenance.',
      },
      {
        q: 'Are veneers permanent?',
        a: 'Veneers are a long-term solution that can last 10-15 years with proper care.',
      },
      {
        q: 'Is cosmetic dentistry painful?',
        a: 'Most procedures are minimally invasive. We use anesthesia and sedation options for your comfort.',
      },
    ],
  },
  'dental-implants': {
    title: 'Dental Implants Dubai | Permanent Tooth Replacement | DentalCare Dubai',
    description: 'Premium dental implants in Dubai. Permanent solution for missing teeth. Expert implant dentists with advanced technology. Natural-looking results.',
    keywords: 'dental implants Dubai, tooth replacement Dubai, missing teeth Dubai, implant dentist Dubai, permanent dental solution Dubai',
    overview: 'Dental implants are the gold standard for replacing missing teeth. They provide a permanent, stable foundation for replacement teeth that look, feel, and function like natural teeth.',
    whoNeeds: 'Anyone with missing teeth who wants a permanent solution. Ideal for those who have lost teeth due to injury, decay, or disease and want to restore their smile and function.',
    benefits: [
      'Permanent tooth replacement',
      'Natural appearance and function',
      'Prevents bone loss',
      'No impact on adjacent teeth',
      'Long-lasting solution',
    ],
    steps: [
      'Comprehensive evaluation and imaging',
      'Treatment planning and implant placement',
      'Healing period (3-6 months)',
      'Abutment placement',
      'Final crown restoration',
    ],
    aftercare: 'Maintain excellent oral hygiene, avoid hard foods initially, and attend regular check-ups to ensure implant health and longevity.',
    faqs: [
      {
        q: 'How long do dental implants last?',
        a: 'With proper care, dental implants can last a lifetime.',
      },
      {
        q: 'Is the implant procedure painful?',
        a: 'The procedure is performed under anesthesia. Most patients report minimal discomfort.',
      },
      {
        q: 'Who is a good candidate for implants?',
        a: 'Good candidates have healthy gums and sufficient bone density. We evaluate each case individually.',
      },
    ],
  },
  'teeth-whitening': {
    title: 'Teeth Whitening Dubai | Professional Whitening | DentalCare Dubai',
    description: 'Professional teeth whitening in Dubai. Safe, effective teeth whitening treatments. Get a brighter, whiter smile in just one visit. Expert cosmetic dentists.',
    keywords: 'teeth whitening Dubai, professional teeth whitening Dubai, smile whitening Dubai, teeth bleaching Dubai, cosmetic teeth whitening Dubai',
    overview: 'Professional teeth whitening is a safe and effective way to brighten your smile and remove stains. Our advanced whitening treatments can lighten your teeth by several shades in just one visit.',
    whoNeeds: 'Anyone with stained or discolored teeth who wants a brighter smile. Perfect for special occasions or regular smile maintenance.',
    benefits: [
      'Immediate visible results',
      'Safe and professional treatment',
      'Boosts confidence',
      'Long-lasting brightness',
      'Customized whitening level',
    ],
    steps: [
      'Dental examination and cleaning',
      'Shade assessment and documentation',
      'Protective barrier application',
      'Whitening gel application',
      'Activation and monitoring',
      'Final shade evaluation',
    ],
    aftercare: 'Avoid staining foods and drinks for 48 hours, use whitening toothpaste, and maintain good oral hygiene for lasting results.',
    faqs: [
      {
        q: 'Is teeth whitening safe?',
        a: 'Yes, professional teeth whitening is completely safe when performed by qualified dentists.',
      },
      {
        q: 'How white will my teeth get?',
        a: 'Results vary, but most patients see 6-8 shades improvement.',
      },
      {
        q: 'Does teeth whitening cause sensitivity?',
        a: 'Some temporary sensitivity may occur, but it typically resolves within 24-48 hours.',
      },
    ],
  },
  'root-canal': {
    title: 'Root Canal Treatment Dubai | Pain-Free Endodontics | DentalCare Dubai',
    description: 'Pain-free root canal treatment in Dubai. Expert endodontists using advanced technology. Save your natural tooth with comfortable root canal therapy.',
    keywords: 'root canal Dubai, endodontic treatment Dubai, root canal therapy Dubai, tooth pain Dubai, endodontist Dubai',
    overview: 'Root canal treatment is a procedure to save infected or damaged teeth. Modern techniques make it comfortable and effective, allowing you to keep your natural tooth.',
    whoNeeds: 'Patients with infected, damaged, or severely decayed teeth. Symptoms include severe tooth pain, sensitivity, or swelling.',
    benefits: [
      'Saves natural tooth',
      'Relieves pain and infection',
      'Restores tooth function',
      'Prevents extraction',
      'Long-term solution',
    ],
    steps: [
      'Diagnosis and imaging',
      'Local anesthesia',
      'Access and cleaning',
      'Canal shaping and disinfection',
      'Filling and sealing',
      'Final restoration',
    ],
    aftercare: 'Follow post-treatment instructions carefully, take prescribed medications, and attend follow-up appointments for final restoration.',
    faqs: [
      {
        q: 'Is root canal treatment painful?',
        a: 'Modern techniques and anesthesia make root canal treatment comfortable and pain-free.',
      },
      {
        q: 'How long does a root canal take?',
        a: 'Most treatments are completed in 1-2 visits, each lasting 60-90 minutes.',
      },
      {
        q: 'What is the success rate?',
        a: 'Root canal treatments have a 95% success rate when performed properly.',
      },
    ],
  },
  'pediatric-dentistry': {
    title: 'Pediatric Dentistry Dubai | Children Dental Care | DentalCare Dubai',
    description: 'Gentle pediatric dentistry in Dubai. Specialized dental care for children. Creating positive dental experiences. Expert pediatric dentists.',
    keywords: 'pediatric dentistry Dubai, children dentist Dubai, kids dental care Dubai, pediatric dental clinic Dubai, child-friendly dentist Dubai',
    overview: 'Pediatric dentistry focuses on the oral health of children from infancy through adolescence. Our pediatric dentists create positive, comfortable experiences for young patients.',
    whoNeeds: 'Children of all ages, from infants to teenagers. Early dental visits help establish good oral health habits for life.',
    benefits: [
      'Specialized child care',
      'Prevention-focused approach',
      'Positive dental experiences',
      'Early problem detection',
      'Age-appropriate treatments',
    ],
    steps: [
      'Welcome and orientation',
      'Gentle examination',
      'Preventive treatments',
      'Parent education',
      'Oral hygiene instructions',
      'Follow-up planning',
    ],
    aftercare: 'Help your child maintain good oral hygiene, follow dietary recommendations, and attend regular check-ups every 6 months.',
    faqs: [
      {
        q: 'When should my child first visit the dentist?',
        a: 'We recommend the first visit by age 1 or within 6 months of the first tooth appearing.',
      },
      {
        q: 'How often should children visit the dentist?',
        a: 'Every 6 months for regular check-ups and preventive care.',
      },
      {
        q: 'Are pediatric dentists different from general dentists?',
        a: 'Yes, pediatric dentists have additional training in child psychology, growth, and development.',
      },
    ],
  },
  'orthodontics': {
    title: 'Orthodontics Dubai | Braces & Invisalign | DentalCare Dubai',
    description: 'Expert orthodontic treatment in Dubai. Traditional braces and Invisalign. Straighten your teeth with certified orthodontists. Beautiful smiles.',
    keywords: 'orthodontics Dubai, braces Dubai, Invisalign Dubai, teeth straightening Dubai, orthodontist Dubai, clear aligners Dubai',
    overview: 'Orthodontic treatment corrects misaligned teeth and jaws. We offer traditional braces and clear aligners to give you the straight, beautiful smile you deserve.',
    whoNeeds: 'Anyone with crooked teeth, misaligned bites, or spacing issues. Both children and adults can benefit from orthodontic treatment.',
    benefits: [
      'Straight, beautiful smile',
      'Improved bite function',
      'Better oral hygiene',
      'Enhanced confidence',
      'Long-term stability',
    ],
    steps: [
      'Comprehensive evaluation',
      'Treatment planning',
      'Appliance placement',
      'Regular adjustments',
      'Retention phase',
      'Final results',
    ],
    aftercare: 'Wear retainers as prescribed, maintain excellent oral hygiene, and attend regular follow-up appointments.',
    faqs: [
      {
        q: 'How long does orthodontic treatment take?',
        a: 'Treatment time varies from 12-36 months depending on complexity.',
      },
      {
        q: 'Are braces painful?',
        a: 'Some discomfort is normal initially, but most patients adjust quickly.',
      },
      {
        q: 'Am I too old for braces?',
        a: 'No, adults can successfully undergo orthodontic treatment at any age.',
      },
    ],
  },
  'periodontics': {
    title: 'Periodontics Dubai | Gum Disease Treatment | DentalCare Dubai',
    description: 'Expert periodontal care in Dubai. Treatment for gum disease and gum health. Certified periodontists. Advanced gum therapy and implant surgery.',
    keywords: 'periodontics Dubai, gum disease Dubai, periodontist Dubai, gum treatment Dubai, scaling and root planing Dubai',
    overview: 'Periodontics focuses on the health of gums and supporting structures of teeth. We treat gum disease and provide advanced periodontal therapies.',
    whoNeeds: 'Patients with gum disease, bleeding gums, or those needing implant placement. Early treatment prevents tooth loss.',
    benefits: [
      'Healthy gums',
      'Prevents tooth loss',
      'Fresh breath',
      'Improved oral health',
      'Better overall health',
    ],
    steps: [
      'Periodontal evaluation',
      'Diagnostic imaging',
      'Deep cleaning procedures',
      'Advanced treatments if needed',
      'Maintenance planning',
      'Regular monitoring',
    ],
    aftercare: 'Maintain excellent oral hygiene, follow personalized care instructions, and attend regular maintenance visits.',
    faqs: [
      {
        q: 'What are the signs of gum disease?',
        a: 'Bleeding gums, bad breath, receding gums, and loose teeth are common signs.',
      },
      {
        q: 'Is gum disease reversible?',
        a: 'Early stages are reversible, but advanced cases require ongoing management.',
      },
      {
        q: 'How often should I have periodontal maintenance?',
        a: 'Every 3-4 months for patients with gum disease history.',
      },
    ],
  },
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = serviceData[params.slug]
  
  if (!service) {
    return {
      title: 'Service Not Found | DentalCare Dubai',
      description: 'The requested dental service could not be found.',
    }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: `/images/services/${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.slug]
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested dental service could not be found.</p>
          <Link href="/services">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Service Hero */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.title.replace(' | DentalCare Dubai', '')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description.replace('DentalCare Dubai', '').trim()}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.overview}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs This Treatment?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.whoNeeds}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Treatment Process</h2>
            <div className="space-y-4">
              {service.steps.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Aftercare Instructions</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              {service.aftercare}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq: { q: string; a: string }, index: number) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <Link href="/appointment">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
