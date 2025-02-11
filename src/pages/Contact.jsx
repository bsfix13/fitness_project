import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - FitLife</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Location & Hours</h2>
            <div className="mb-6">
              <h3 className="font-bold mb-2">Address</h3>
              <p>123 Fitness Street</p>
              <p>New York, NY 10001</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2">Hours</h3>
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Contact Info</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@fitlife.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
