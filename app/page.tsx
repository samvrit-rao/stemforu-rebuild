import Link from 'next/link'
import Image from 'next/image'
import BackgroundSlideshow from '@/components/BackgroundSlideshow'

const slideshowImages = [
  '/IMG_9637.jpg',
  '/IMG_7071.jpg',
  '/IMG_9616.jpg',
  '/IMG_7085.jpg',
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <BackgroundSlideshow images={slideshowImages} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="inline-block animate-bounce text-4xl mb-4">🚀</span>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 font-logo bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              STEMForU
            </h1>
            <p className="text-2xl md:text-4xl mb-6 text-gray-900 font-display font-bold drop-shadow-md">
              STEM Excellence for Tomorrow
            </p>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Inspire and empower elementary and middle school students, especially those from
              underrepresented communities, by providing them with a platform to ignite and nurture
              a strong interest in STEM.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/mission"
                className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-10 py-4 text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all font-heading shadow-xl hover:shadow-2xl hover:scale-105 transform rounded-full"
              >
                Learn More →
              </Link>
              <Link
                href="/summer-camp"
                className="inline-block bg-white text-teal-600 border-2 border-teal-600 px-10 py-4 text-lg font-semibold hover:bg-teal-50 transition-all font-heading shadow-xl hover:shadow-2xl hover:scale-105 transform rounded-full"
              >
                Summer Camp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Teaser */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-3xl opacity-30 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 -z-0"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 order-2 md:order-1 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/concepts.png"
                alt="Innovative Concepts program framework"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4">
                <span className="text-5xl">🎯</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-display">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Inspire and empower elementary and middle school students, especially those from
                underrepresented communities, by providing them with a platform to ignite and nurture
                a strong interest in STEM.
              </p>
              <Link
                href="/mission"
                className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-3 font-semibold hover:from-teal-700 hover:to-blue-700 transition-all font-heading rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-9xl opacity-10">📚</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-10">💡</div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-5xl">📖</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-display">
              Resources
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We have curated a collection of materials and web links selected for our program.
              Some resources are proprietary and exclusively available to participants, designed
              to enhance the educational experience.
            </p>
            <Link
              href="/resources"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 font-semibold hover:from-purple-700 hover:to-pink-700 transition-all font-heading rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              View Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Camp Teaser */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">☀️</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent font-display">
              Summer Camp
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Information about the 2025 summer camp program is forthcoming. Stay tuned for updates!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-64 md:h-80 group">
              <Image
                src="/IMG_7071.jpg"
                alt="STEMForU summer camp activities"
                fill
                className="object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent rounded-3xl"></div>
            </div>
            <div className="relative h-64 md:h-80 group">
              <Image
                src="/IMG_9616.jpg"
                alt="Students working on STEM projects"
                fill
                className="object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/summer-camp"
              className="inline-block bg-gradient-to-r from-orange-600 to-teal-600 text-white px-8 py-3 font-semibold hover:from-orange-700 hover:to-teal-700 transition-all font-heading rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
