export const comprehensiveServices = {
  'dental-implants': {
    slug: 'dental-implants',
    title: 'Dental Implants Dubai',
    metaTitle: 'Dental Implants in Dubai | Permanent Tooth Replacement Solution',
    description: 'Get permanent, natural-looking dental implants in Dubai. Expert implant dentistry with 95%+ success rate. Free consultation available.',
    image: '/dental-images/dh5.png',
    hero: {
      title: 'Dental Implants',
      subtitle: 'Permanent, Natural-Looking Solution for Missing Teeth',
      image: '/dental-images/dh5.png'
    },
    overview: {
      title: 'What Are Dental Implants?',
      content: 'Dental implants are titanium posts surgically placed into your jawbone to serve as artificial tooth roots. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth. Unlike dentures or bridges, dental implants don\'t slip or shift in your mouth, allowing you to eat, speak, and smile with complete confidence.',
      image: '/dental-images/4.png',
      stats: [
        { label: 'Success Rate', value: '95%+' },
        { label: 'Lifespan', value: 'Lifetime' },
        { label: 'Healing Time', value: '3-6 months' }
      ]
    },
    benefits: [
      { title: 'Natural Look & Feel', desc: 'Designed to look, feel, and function like your natural teeth', icon: '😊' },
      { title: 'Long-Lasting', desc: 'With proper care, implants can last a lifetime', icon: '⏰' },
      { title: 'Preserve Jawbone', desc: 'Prevents bone loss and maintains facial structure', icon: '🦴' },
      { title: 'No Slipping', desc: 'Securely anchored, won\'t slip or move when eating or speaking', icon: '🔒' },
      { title: 'Protect Adjacent Teeth', desc: 'No need to alter neighboring healthy teeth', icon: '🦷' },
      { title: 'Improved Confidence', desc: 'Smile, eat, and speak without worry', icon: '✨' }
    ],
    procedure: [
      { step: 1, title: 'Initial Consultation', desc: 'Comprehensive examination, X-rays, and 3D imaging to assess bone density and plan your treatment.' },
      { step: 2, title: 'Implant Placement', desc: 'Titanium post is surgically placed into the jawbone under local anesthesia. The procedure is typically painless.' },
      { step: 3, title: 'Osseointegration', desc: 'Healing period of 3-6 months where the implant fuses with your jawbone, creating a strong foundation.' },
      { step: 4, title: 'Abutment Placement', desc: 'A connector piece (abutment) is attached to the implant to hold the new tooth.' },
      { step: 5, title: 'Crown Placement', desc: 'Custom-made crown is attached to the abutment, completing your new tooth.' }
    ],
    types: [
      { name: 'Single Tooth Implant', desc: 'Perfect for replacing one missing tooth without affecting adjacent teeth.', features: ['No damage to healthy teeth', 'Preserves jawbone', 'Natural appearance'] },
      { name: 'Multiple Teeth Implants', desc: 'Implant-supported bridge for replacing several missing teeth.', features: ['More stable than traditional bridges', 'Cost-effective solution', 'Prevents bone loss'] },
      { name: 'All-on-4 Implants', desc: 'Full arch restoration using just four strategically placed implants.', features: ['Replaces entire arch', 'Faster treatment time', 'Often no bone grafting needed'] },
      { name: 'Implant-Supported Dentures', desc: 'Secure dentures that snap onto implants for superior stability.', features: ['No slipping or clicking', 'Improved chewing ability', 'More comfortable'] }
    ],
    pricing: {
      single: 'AED 5,000 - 8,000',
      multiple: 'AED 15,000 - 25,000',
      allOn4: 'AED 40,000 - 60,000'
    },
    faqs: [
      { q: 'Does the procedure hurt?', a: 'The procedure is performed under local anesthesia, so you won\'t feel pain during surgery. Most patients report minimal discomfort afterward, manageable with over-the-counter pain medication.' },
      { q: 'How long do dental implants last?', a: 'With proper care and maintenance, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear.' },
      { q: 'What is the success rate?', a: 'Dental implants have a success rate of over 95%. Success depends on factors like oral hygiene, overall health, and following post-operative care instructions.' },
      { q: 'How long is the recovery?', a: 'Initial healing takes 1-2 weeks. Complete osseointegration (bone fusion) takes 3-6 months before the final crown can be placed.' },
      { q: 'Can I eat normally with implants?', a: 'Yes! Once fully healed, you can eat all your favorite foods without restrictions. Implants function just like natural teeth.' }
    ]
  }
}

// Keep existing simple services for backward compatibility
export const services = [
  {
    slug: 'orthodontic-treatment',
    title: 'Orthodontic Treatment',
    description: 'Comprehensive orthodontic solutions for perfectly aligned teeth',
    image: '/dental-images/7.png',
    content: 'Our orthodontic treatments use the latest technology to straighten teeth and correct bite issues. We offer personalized treatment plans for patients of all ages.',
    benefits: ['Improved smile aesthetics', 'Better oral health', 'Enhanced bite function', 'Boosted confidence'],
    duration: '12-24 months',
    price: 'Starting from AED 8,000'
  },
  {
    slug: 'metal-braces',
    title: 'Metal Braces',
    description: 'Traditional and effective teeth straightening solution',
    image: '/dental-images/8.png',
    content: 'Metal braces are the most common and cost-effective orthodontic treatment. Made from high-grade stainless steel, they effectively correct various dental issues.',
    benefits: ['Most affordable option', 'Highly effective', 'Durable and strong', 'Suitable for complex cases'],
    duration: '18-24 months',
    price: 'Starting from AED 7,000'
  },
  {
    slug: 'clear-aligners',
    title: 'Clear Aligners',
    description: 'Invisible orthodontic treatment for a discreet smile transformation',
    image: '/dental-images/9.png',
    content: 'Clear aligners offer a virtually invisible way to straighten your teeth. Custom-made and removable, they provide comfort and convenience.',
    benefits: ['Nearly invisible', 'Removable for eating', 'Comfortable fit', 'Easy to maintain'],
    duration: '12-18 months',
    price: 'Starting from AED 12,000'
  },
  {
    slug: 'routine-dental-checkup',
    title: 'Routine Dental Check-Up',
    description: 'Comprehensive dental examinations for optimal oral health',
    image: '/dental-images/dental-blog3.jpg',
    content: 'Regular dental check-ups are essential for maintaining healthy teeth and gums. Our thorough examinations detect issues early and prevent future problems.',
    benefits: ['Early problem detection', 'Professional cleaning', 'Oral cancer screening', 'Personalized advice'],
    duration: '30-45 minutes',
    price: 'Starting from AED 200'
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with advanced cosmetic procedures',
    image: '/dental-images/10.png',
    content: 'Our cosmetic dentistry services enhance the appearance of your teeth, gums, and smile. We use state-of-the-art techniques for natural-looking results.',
    benefits: ['Enhanced smile aesthetics', 'Improved confidence', 'Natural-looking results', 'Long-lasting effects'],
    duration: 'Varies by procedure',
    price: 'Starting from AED 1,500'
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth',
    image: '/dental-images/dh5.png',
    content: 'Dental implants are the gold standard for replacing missing teeth. They look, feel, and function like natural teeth, providing a permanent solution.',
    benefits: ['Permanent solution', 'Natural appearance', 'Preserves jawbone', 'No impact on adjacent teeth'],
    duration: '3-6 months',
    price: 'Starting from AED 5,000'
  },
  {
    slug: 'childrens-dentistry',
    title: "Children's Dentistry",
    description: 'Gentle and caring dental treatment for kids',
    image: '/dental-images/11.png',
    content: 'Our pediatric dentistry services create positive dental experiences for children. We focus on prevention, education, and gentle care.',
    benefits: ['Child-friendly environment', 'Preventive care', 'Early problem detection', 'Dental education'],
    duration: '30-45 minutes',
    price: 'Starting from AED 250'
  },
  {
    slug: 'dental-fillings',
    title: 'Dental Fillings',
    description: 'Restore damaged teeth with natural-looking fillings',
    image: '/dental-images/dental-blog4.jpg',
    content: 'We use tooth-colored composite fillings to restore cavities and damaged teeth. Our fillings blend seamlessly with your natural teeth.',
    benefits: ['Natural appearance', 'Durable materials', 'Quick procedure', 'Preserves tooth structure'],
    duration: '30-60 minutes',
    price: 'Starting from AED 300'
  },
  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning for healthy teeth and gums',
    image: '/dental-images/5.png',
    content: 'Professional teeth cleaning removes plaque, tartar, and stains that regular brushing cannot. Essential for maintaining oral health.',
    benefits: ['Removes plaque and tartar', 'Prevents gum disease', 'Freshens breath', 'Brightens smile'],
    duration: '45-60 minutes',
    price: 'Starting from AED 250'
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Brighten your smile with professional whitening',
    image: '/dental-images/dental-white.jpg',
    content: 'Our professional teeth whitening treatments safely and effectively brighten your smile by several shades in just one visit.',
    benefits: ['Immediate results', 'Safe and effective', 'Long-lasting whiteness', 'Boosts confidence'],
    duration: '60-90 minutes',
    price: 'Starting from AED 1,200'
  },
  {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    description: 'Pain-free root canal therapy to save your tooth',
    image: '/dental-images/dental-veneers.jpg',
    content: 'Modern root canal treatment is virtually painless. We use advanced techniques to save infected teeth and eliminate pain.',
    benefits: ['Saves natural tooth', 'Eliminates pain', 'Prevents infection spread', 'Quick recovery'],
    duration: '60-90 minutes',
    price: 'Starting from AED 1,500'
  },
  {
    slug: 'dental-veneers',
    title: 'Dental Veneers',
    description: 'Transform your smile with custom porcelain veneers',
    image: '/dental-images/dental-veneers.jpg',
    content: 'Porcelain veneers are thin shells that cover the front surface of teeth, creating a beautiful, natural-looking smile.',
    benefits: ['Instant smile transformation', 'Natural appearance', 'Stain resistant', 'Long-lasting results'],
    duration: '2-3 visits',
    price: 'Starting from AED 2,000 per tooth'
  },
  {
    slug: 'dental-crowns',
    title: 'Dental Crowns',
    description: 'Restore and protect damaged teeth with crowns',
    image: '/dental-images/dental-white.jpg',
    content: 'Dental crowns cover and protect damaged teeth, restoring their shape, size, and strength while improving appearance.',
    benefits: ['Protects weak teeth', 'Restores function', 'Natural appearance', 'Durable solution'],
    duration: '2 visits',
    price: 'Starting from AED 1,800'
  },
  {
    slug: 'gum-treatment',
    title: 'Gum Treatment',
    description: 'Comprehensive periodontal care for healthy gums',
    image: '/dental-images/bg-img.jpg',
    content: 'Our gum treatments address periodontal disease, gingivitis, and other gum issues to restore and maintain healthy gums.',
    benefits: ['Prevents tooth loss', 'Reduces inflammation', 'Improves oral health', 'Fresh breath'],
    duration: 'Varies by condition',
    price: 'Starting from AED 500'
  },
  {
    slug: 'emergency-dental-care',
    title: 'Emergency Dental Care',
    description: '24/7 emergency dental services for urgent situations',
    image: '/dental-images/appointment-bg.jpg',
    content: 'We provide immediate care for dental emergencies including severe pain, broken teeth, and dental trauma.',
    benefits: ['24/7 availability', 'Immediate pain relief', 'Expert emergency care', 'Same-day treatment'],
    duration: 'As needed',
    price: 'Starting from AED 300'
  }
]
