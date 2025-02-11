import { Helmet } from 'react-helmet-async'

const trainers = [
  {
    name: 'John Smith',
    role: 'Head Trainer',
    image: '/trainers/john.jpg',
    specialties: ['Strength Training', 'HIIT', 'Nutrition'],
    bio: 'Certified personal trainer with 10+ years of experience.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Yoga Instructor',
    image: '/trainers/sarah.jpg',
    specialties: ['Yoga', 'Pilates', 'Meditation'],
    bio: 'Experienced yoga instructor passionate about mindful movement.'
  },
  {
    name: 'Mike Thompson',
    role: 'Nutrition Specialist',
    image: '/trainers/mike.jpg',
    specialties: ['Nutrition Planning', 'Weight Management', 'Sports Nutrition'],
    bio: 'Registered dietitian with expertise in sports nutrition.'
  }
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - FitLife</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About FitLife</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're dedicated to helping you achieve your fitness goals through expert guidance,
            state-of-the-art facilities, and a supportive community.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Trainers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-blue-600 mb-4">{trainer.role}</p>
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  <div>
                    <h4 className="font-bold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">What are your gym hours?</h3>
              <p className="text-gray-600">
                We're open Monday through Friday from 6:00 AM to 10:00 PM, and weekends from 8:00 AM to 8:00 PM.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">Do you offer personal training?</h3>
              <p className="text-gray-600">
                Yes, we offer personal training sessions with our certified trainers. You can book individual sessions or purchase training packages.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">What's included in the membership?</h3>
              <p className="text-gray-600">
                Our memberships include access to all equipment, group classes, locker rooms, and basic fitness assessment. Premium memberships include additional perks.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
