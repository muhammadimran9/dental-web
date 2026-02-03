import Link from 'next/link'
import Button from '../Button'
import Card from '../Card'
import CheckCircleIcon from '../icons/CheckCircleIcon'

export default function AboutClinic() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-700 font-medium text-sm">About DentalCare Dubai</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner
                <span className="block text-blue-600">for Dental Excellence</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Since 2008, DentalCare Dubai has been providing world-class dental services 
                to the UAE community. Our internationally trained dentists combine expertise 
                with cutting-edge technology to deliver exceptional patient care.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">DHA Licensed Clinic</h3>
                  <p className="text-gray-600">Fully certified by Dubai Health Authority</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">International Specialists</h3>
                  <p className="text-gray-600">American and European trained dentists</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                  <p className="text-gray-600">Latest dental equipment and techniques</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Patient-Centered Care</h3>
                  <p className="text-gray-600">Personalized treatment for every smile</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/doctors">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 font-semibold">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1600988227859-6c2857df8de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="DentalCare Dubai Clinic Interior" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
                
                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-1/3"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
