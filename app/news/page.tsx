import Link from 'next/link'
import Image from 'next/image'

const newsArticles = [
  {
    id: 'mrna-vaccines',
    title: 'The future of mRNA vaccines',
    excerpt: 'mRNA vaccines played a major role in COVID-19 and are now being extended to diseases like influenza and HIV.',
    slug: 'mrna-vaccines-future',
    image: '/rna.jpg'
  },
  {
    id: 'immune-defense',
    title: "Immune Cells' Interesting Defense System",
    excerpt: 'A newly discovered foam-like substance produced by epithelial cells that dissolves bacterial membranes.',
    slug: 'immune-cells-defense-system',
    image: '/ccellsa.jpg'
  },
  {
    id: 'hiv-vaccine',
    title: "Why we don't have an HIV Vaccine yet",
    excerpt: 'Understanding the challenges in developing an HIV vaccine, including viral integration and high variation.',
    slug: 'hiv-vaccine-challenges',
    image: '/depression.jpg'
  }
]

export default function News() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Current Science News</h1>
          <p className="text-xl text-center mt-4">Stay updated with the latest in STEM</p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {/* Thumbnail image */}
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/news/${article.slug}`}
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
