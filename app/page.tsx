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
      <section className="relative py-24 border-b overflow-hidden">
        <BackgroundSlideshow images={slideshowImages} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 font-logo text-teal-600 drop-shadow-lg">
              STEMForU
            </h1>
            <p className="text-2xl md:text-4xl mb-6 text-gray-900 font-heading font-bold drop-shadow-md">
              STEM Excellence for Tomorrow
            </p>
            <p className="text-lg md:text-2xl mb-10 leading-relaxed text-gray-800 max-w-4xl mx-auto font-semibold drop-shadow-sm">
              Inspire and empower elementary and middle school students, especially those from
              underrepresented communities, by providing them with a platform to ignite and nurture
              a strong interest in STEM.
            </p>
            <Link
              href="/mission"
              className="inline-block bg-teal-600 text-white px-10 py-4 text-lg font-semibold hover:bg-teal-700 transition-colors font-heading shadow-xl hover:shadow-2xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 order-2 md:order-1">
              <Image
                src="/concepts.png"
                alt="Innovative Concepts program framework"
                fill
                className="object-contain"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-display">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Inspire and empower elementary and middle school students, especially those from
                underrepresented communities, by providing them with a platform to ignite and nurture
                a strong interest in STEM.
              </p>
              <Link
                href="/mission"
                className="inline-block bg-teal-600 text-white px-8 py-3 font-semibold hover:bg-teal-700 transition-colors font-heading"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-display">
              Resources
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We have curated a collection of materials and web links selected for our program.
              Some resources are proprietary and exclusively available to participants, designed
              to enhance the educational experience.
            </p>
            <Link
              href="/resources"
              className="inline-block bg-teal-600 text-white px-8 py-3 font-semibold hover:bg-teal-700 transition-colors font-heading"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Camp Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-display">
              Summer Camp
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Information about the 2025 summer camp program is forthcoming. Stay tuned for updates!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-64 md:h-80">
              <Image
                src="/IMG_7071.jpg"
                alt="STEMForU summer camp activities"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/IMG_9616.jpg"
                alt="Students working on STEM projects"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/summer-camp"
              className="inline-block bg-teal-600 text-white px-8 py-3 font-semibold hover:bg-teal-700 transition-colors font-heading"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
