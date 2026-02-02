import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

interface ServicePageProps {
  params: {
    slug: string
  }
}

const serviceData: Record<string, any> = {
  'general-dentistry': {
    title: 'General Dentistry',
    description: 'Comprehensive dental care for the whole family',
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
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our cosmetic treatments',
    overview: 'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. From simple whitening to complete smile makeovers, we offer various treatments to enhance your confidence.',
    whoNeeds: 'If you\'re unhappy with the appearance of your smile, cosmetic dentistry can help. Whether you have stained, chipped, misaligned, or missing teeth, we have solutions to transform your smile.',
    benefits: [
      'Boosts self-confidence',
      'Improves smile aesthetics',
      'Natural-looking results',
      'Long-lasting solutions',
      'Minimal discomfort',
    ],
    steps: [
      'Smile consultation and design',
      'Treatment planning',
      'Preparation if needed',
      'Cosmetic procedure',
      'Final adjustments and polish',
    ],
    aftercare: 'Maintain your new smile with good oral hygiene, avoid staining foods and drinks initially, and attend regular check-ups to ensure longevity of your cosmetic work.',
    faqs: [
      {
        q: 'How long do cosmetic procedures take?',
        a: 'It depends on the procedure. Simple whitening takes about an hour, while veneers may require multiple visits.',
      },
      {
        q: 'Will my insurance cover cosmetic dentistry?',
        a: 'Most cosmetic procedures are not covered by insurance, but we offer flexible payment options.',
      },
      {
        q: 'How long do cosmetic results last?',
        a: 'With proper care, most cosmetic treatments last many years. Veneers can last 10-15 years, while whitening may need touch-ups.',
      },
    ],
  },
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth',
    overview: 'Dental implants are the gold standard for replacing missing teeth. They provide a permanent, natural-looking solution that functions just like your natural teeth.',
    whoNeeds: 'Dental implants are ideal for anyone missing one or more teeth who wants a permanent, stable solution. They require healthy gums and adequate bone density.',
    benefits: [
      'Permanent solution',
      'Natural look and feel',
      'Prevents bone loss',
      'No impact on adjacent teeth',
      'Long-lasting results',
    ],
    steps: [
      'Initial consultation and imaging',
      'Implant placement surgery',
      'Healing period (3-6 months)',
      'Abutment placement',
      'Crown attachment',
    ],
    aftercare: 'Follow post-surgical instructions carefully. Maintain excellent oral hygiene, avoid hard foods initially, and attend all follow-up appointments for optimal healing.',
    faqs: [
      {
        q: 'How long do dental implants last?',
        a: 'With proper care, dental implants can last a lifetime. The crown may need replacement after 10-15 years.',
      },
      {
        q: 'Is the implant procedure painful?',
        a: 'The procedure is performed under local anesthesia, so you won\'t feel pain during the surgery. Some discomfort may occur during healing.',
      },
      {
        q: 'How long is the recovery period?',
        a: 'Initial healing takes 1-2 weeks, but full osseointegration (bone fusion) takes 3-6 months before the final crown can be placed.',
      },
    ],
  },
  'teeth-whitening': {
    title: 'Teeth Whitening',
    description: 'Brighten your smile in just one visit',
    overview: 'Professional teeth whitening can dramatically brighten your smile in a single visit or through a take-home system. We use safe, effective whitening agents to remove stains and discoloration.',
    whoNeeds: 'Teeth whitening is perfect for anyone with stained or discolored teeth who wants a brighter, more confident smile. It\'s safe for most patients.',
    benefits: [
      'Immediate results',
      'Safe and effective',
      'Boosts confidence',
      'Professional-grade results',
      'Customizable treatment',
    ],
    steps: [
      'Pre-whitening examination',
      'Teeth cleaning',
      'Whitening application',
      'Activation period',
      'Final polish',
    ],
    aftercare: 'Avoid dark-colored foods and drinks for 48 hours after whitening. Maintain good oral hygiene and consider touch-up treatments to maintain results.',
    faqs: [
      {
        q: 'How white will my teeth get?',
        a: 'Results vary, but most patients see 2-8 shades of improvement. Your dentist will discuss realistic expectations.',
      },
      {
        q: 'Does teeth whitening hurt?',
        a: 'Some patients experience temporary sensitivity, which usually subsides within 24-48 hours.',
      },
      {
        q: 'How long do whitening results last?',
        a: 'Results typically last 1-3 years, depending on your diet and oral hygiene habits.',
      },
    ],
  },
  'root-canal': {
    title: 'Root Canal',
    description: 'Pain-free root canal treatments',
    overview: 'Root canal therapy saves infected or damaged teeth by removing the infected pulp, cleaning the root canals, and sealing them. Modern techniques make this procedure comfortable and effective.',
    whoNeeds: 'Root canal treatment is needed when the tooth\'s pulp becomes infected or inflamed due to deep decay, trauma, or repeated dental procedures.',
    benefits: [
      'Saves your natural tooth',
      'Relieves pain',
      'Prevents infection spread',
      'Maintains natural appearance',
      'Cost-effective solution',
    ],
    steps: [
      'Diagnosis and X-rays',
      'Local anesthesia',
      'Access and cleaning',
      'Root canal filling',
      'Temporary or permanent restoration',
    ],
    aftercare: 'Take prescribed medications as directed. Avoid chewing on the treated tooth until fully restored. Maintain good oral hygiene and attend follow-up appointments.',
    faqs: [
      {
        q: 'Is root canal treatment painful?',
        a: 'No, modern root canal treatment is performed under local anesthesia and is typically no more uncomfortable than a filling.',
      },
      {
        q: 'How long does a root canal take?',
        a: 'Most root canals can be completed in 1-2 visits, each lasting 60-90 minutes.',
      },
      {
        q: 'Will I need a crown after a root canal?',
        a: 'Yes, a crown is usually recommended to protect and strengthen the treated tooth.',
      },
    ],
  },
  'pediatric-dentistry': {
    title: 'Pediatric Dentistry',
    description: 'Gentle care for your children',
    overview: 'Pediatric dentistry specializes in the oral health of children from infancy through adolescence. We create a positive, comfortable environment for young patients.',
    whoNeeds: 'All children should visit a pediatric dentist regularly. We provide specialized care for children\'s unique dental needs and help establish good oral hygiene habits.',
    benefits: [
      'Specialized children\'s care',
      'Gentle, child-friendly approach',
      'Early problem detection',
      'Preventive treatments',
      'Positive dental experiences',
    ],
    steps: [
      'Child-friendly introduction',
      'Gentle examination',
      'Age-appropriate cleaning',
      'Preventive treatments if needed',
      'Education and home care tips',
    ],
    aftercare: 'Help your child maintain good oral hygiene with regular brushing and flossing. Limit sugary snacks and drinks, and bring them for regular check-ups.',
    faqs: [
      {
        q: 'When should my child first visit the dentist?',
        a: 'The American Academy of Pediatric Dentistry recommends the first visit by age 1 or within 6 months of the first tooth.',
      },
      {
        q: 'Are baby teeth really that important?',
        a: 'Yes, baby teeth help with speech development, proper chewing, and hold space for permanent teeth.',
      },
      {
        q: 'What if my child is afraid of the dentist?',
        a: 'We specialize in making children comfortable. Our gentle approach and child-friendly environment help reduce anxiety.',
      },
    ],
  },
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.slug] || {
    title: 'Service',
    description: 'Dental service',
    overview: 'This service provides comprehensive dental care.',
    whoNeeds: 'Patients who need this service.',
    benefits: ['Benefit 1', 'Benefit 2'],
    steps: ['Step 1', 'Step 2'],
    aftercare: 'Follow post-treatment instructions.',
    faqs: [],
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-200">{service.description}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-8">{service.overview}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-2xl font-semibold text-secondary mb-4">Who Needs This?</h3>
              <p className="text-gray-700">{service.whoNeeds}</p>
            </Card>
            <Card>
              <h3 className="text-2xl font-semibold text-secondary mb-4">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="mb-12">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Procedure Steps</h3>
            <ol className="space-y-3">
              {service.steps.map((step: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          <Card className="mb-12">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Aftercare</h3>
            <p className="text-gray-700">{service.aftercare}</p>
          </Card>

          {service.faqs && service.faqs.length > 0 && (
            <Card>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {service.faqs.map((faq: any, index: number) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-secondary mb-2">{faq.q}</h4>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          <div className="mt-12 text-center">
            <Link href="/appointment">
              <Button variant="primary" className="text-lg px-8 py-4">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
