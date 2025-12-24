import Image from 'next/image'

export default function TardigradesArticle() {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src="/rover.jpg"
          alt="Mars Rover on the surface of Mars"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-600 mb-2">June 14, 2022</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tardigrades – A glimpse into the future
          </h1>
          <p className="text-gray-600">By STEMForU Team</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Tardigrades are unique animals that are immune to many environmental stresses that would
              be fatal to most other forms of life. These microscopic creatures, also known as water
              bears or moss piglets, have captivated scientists with their extraordinary resilience.
            </p>

            <p className="text-gray-700 mb-4">
              What makes tardigrades truly remarkable is their ability to survive in the vacuum of
              space, withstand extreme radiation, and endure temperatures ranging from near absolute
              zero to well above the boiling point of water. They can survive without water for
              decades and have even survived being frozen in ice for extended periods.
            </p>

            <p className="text-gray-700 mb-4">
              This incredible resilience has led scientists to study tardigrades extensively, as they
              may hold important clues about the possibility of life on other planets. Their ability
              to enter a state called cryptobiosis, where their metabolism slows to an almost
              undetectable level, could provide insights into how life might survive in the harsh
              conditions of space or on other celestial bodies.
            </p>

            <p className="text-gray-700 mb-4">
              Research into tardigrades has implications not just for astrobiology, but also for
              practical applications here on Earth. Understanding the mechanisms behind their extreme
              survival capabilities could lead to advances in preserving biological materials,
              developing new medical treatments, and even improving food storage techniques.
            </p>

            <p className="text-gray-700">
              As we continue to explore the cosmos and search for life beyond Earth, these tiny
              creatures remind us that life can be far more resilient and adaptable than we might
              imagine. Tardigrades truly offer us a glimpse into what the future of space exploration
              and our understanding of life might hold.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
