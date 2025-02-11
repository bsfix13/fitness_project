import { Helmet } from 'react-helmet-async'
import Newsletter from '../components/Newsletter'
import FeaturedPosts from '../components/FeaturedPosts'
import FitnessTrends from '../components/FitnessTrends'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FitLife - Transform Your Life</title>
      </Helmet>

      <section className="relative h-[80vh] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Transform Your Life</h1>
            <p className="text-xl mb-8">Start your fitness journey today</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <FitnessTrends />
      <FeaturedPosts />
      <Newsletter />
    </>
  )
}
