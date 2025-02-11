import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'The Ultimate Guide to HIIT Workouts',
    category: 'Cardio',
    excerpt: 'Discover how High-Intensity Interval Training can transform your fitness routine...',
    image: '/blog/hiit.jpg',
    author: 'Sarah Johnson',
    date: '2023-08-15'
  },
  {
    id: 2,
    title: 'Nutrition Basics: Building a Balanced Diet',
    category: 'Nutrition',
    excerpt: 'Learn the fundamentals of proper nutrition and how to fuel your workouts...',
    image: '/blog/nutrition.jpg',
    author: 'Mike Thompson',
    date: '2023-08-14'
  },
  {
    id: 3,
    title: 'Strength Training for Beginners',
    category: 'Strength Training',
    excerpt: 'Start your strength training journey with these essential exercises...',
    image: '/blog/strength.jpg',
    author: 'Chris Davis',
    date: '2023-08-13'
  }
]

const categories = ['All', 'Strength Training', 'Cardio', 'Nutrition']

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - FitLife</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Fitness Blog</h1>
          <div className="flex gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-4">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
