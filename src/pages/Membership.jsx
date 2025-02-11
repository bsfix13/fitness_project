import { Helmet } from 'react-helmet-async'

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Access to workout library',
      'Basic nutrition guides',
      'Community forum access',
      'Monthly fitness webinar'
    ]
  },
  {
    name: 'Pro',
    price: 49,
    features: [
      'Everything in Basic',
      'Personalized workout plans',
      'Live coaching sessions',
      'Premium nutrition plans',
      'Progress tracking tools'
    ]
  },
  {
    name: 'Elite',
    price: 99,
    features: [
      'Everything in Pro',
      '1-on-1 coaching',
      'Custom meal plans',
      'Priority support',
      'Exclusive workshops',
      'Personal training sessions'
    ]
  }
]

export default function Membership() {
  return (
    <>
      <Helmet>
        <title>Membership Plans - FitLife</title>
      </Helmet>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-gray-600">Transform your fitness journey with our premium memberships</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
