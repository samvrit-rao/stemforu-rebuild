import Image from 'next/image'

const resources = [
  {
    id: 'frontiers',
    name: 'Frontiers for Young Minds',
    description: 'Provides science articles on topics such as COVID-19 and climate change. Articles are edited by kids, making them easy to read for young audiences.',
    url: 'https://kids.frontiersin.org/',
    image: '/frontiers.png'
  },
  {
    id: 'science-journal',
    name: 'Science Journal for Kids',
    description: 'Adapts peer-reviewed scientific papers into youth-friendly articles and resources, making complex research accessible to young learners.',
    url: 'https://www.sciencejournalforkids.org/',
    image: '/image-asset.png'
  },
  {
    id: 'brainpop',
    name: 'BrainPop',
    description: 'Known for high-quality science content, offering informational videos on topics ranging from acceleration to weathering, serving millions of learners worldwide.',
    url: 'https://www.brainpop.com/',
    image: '/1200px-BrainPop_logo.svg.png'
  },
  {
    id: 'science-kids',
    name: 'Science for Kids',
    description: 'Promotes interactive learning through games and activities, presenting science in a fun and engaging way.',
    url: 'https://www.sciencekids.co.nz/',
    image: '/sci4kids.png'
  }
]

export default function Resources() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Helpful Links for Research</h1>
          <p className="text-xl text-center mt-4">Curated resources to enhance your STEM journey</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-gray-700">
            We have curated a collection of materials and web links selected for our program. Some
            resources are proprietary and exclusively available to participants, designed to enhance
            the educational experience.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                {/* Resource Logo */}
                <div className="h-40 bg-gray-50 flex items-center justify-center p-6">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    width={300}
                    height={120}
                    className="object-contain max-h-full w-auto"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{resource.name}</h2>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <span className="inline-flex items-center text-primary-600 font-semibold">
                    Visit Site
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Note */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Resources?</h2>
          <p className="text-gray-700">
            Participants in our programs gain access to exclusive proprietary materials designed to
            enhance their learning experience. Join our summer camp to unlock these additional resources!
          </p>
        </div>
      </section>
    </div>
  )
}
