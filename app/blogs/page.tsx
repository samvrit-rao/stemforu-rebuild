import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: 'tardigrades',
    title: 'Tardigrades – A glimpse into the future',
    date: '6/14/2022',
    excerpt: 'Explore the fascinating world of tardigrades and how these resilient creatures might hold clues to life on other planets.',
    slug: 'tardigrades-glimpse-future',
    image: '/rover.jpg'
  },
  {
    id: 'covid-variants',
    title: 'A detailed analysis of COVID-19 variants',
    date: '2022',
    excerpt: 'An in-depth look at the various COVID-19 variants and their impact on global health.',
    slug: 'covid-19-variants-analysis',
    image: '/quarantine.jpg'
  }
]

export default function Blogs() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Blogs</h1>
          <p className="text-xl text-center mt-4">Insights and discoveries from the world of STEM</p>
        </div>
      </section>

      {/* Blog Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {/* Thumbnail image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
