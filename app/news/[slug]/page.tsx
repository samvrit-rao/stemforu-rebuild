import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/markdown'

export function generateStaticParams() {
  return getAllSlugs('news').map((slug) => ({ slug }))
}

export default async function NewsArticle({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug('news', params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-600">Current Science News</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="prose prose-lg max-w-none prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>
    </div>
  )
}
