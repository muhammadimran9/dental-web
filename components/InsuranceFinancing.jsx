import Card from './Card'

export default function InsuranceFinancing() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Easy <span className="text-gradient">Payment Options</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible payment solutions to make your dental care affordable
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Insurance Accepted</h3>
              <p className="text-gray-600 mb-6">
                We work with most major insurance providers to maximize your benefits
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Delta Dental', 'MetLife', 'Cigna', 'Aetna', 'Blue Cross', 'UnitedHealth'].map((insurance) => (
                  <div key={insurance} className="bg-gray-50 px-3 py-2 rounded text-gray-700">
                    {insurance}
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="text-center">
              <div className="text-6xl mb-4">💳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Financing Options</h3>
              <p className="text-gray-600 mb-6">
                Flexible payment plans to fit your budget
              </p>
              <div className="space-y-3">
                <PaymentOption title="0% Interest Plans" description="12-24 month financing" />
                <PaymentOption title="CareCredit" description="Healthcare credit card" />
                <PaymentOption title="In-House Membership" description="Discount plans for uninsured" />
              </div>
            </div>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Not sure about your coverage?</h3>
          <p className="mb-6">Our team will help you understand your benefits and maximize your insurance</p>
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Check Your Coverage
          </button>
        </div>
      </div>
    </section>
  )
}

function PaymentOption({ title, description }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className="text-primary">→</span>
    </div>
  )
}
