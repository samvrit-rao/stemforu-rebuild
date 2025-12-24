import Image from 'next/image'

export default function ImmuneCellsArticle() {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src="/ccellsa.jpg"
          alt="Immune cells attacking bacteria"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immune Cells' Interesting Defense System
          </h1>
          <p className="text-gray-600">Current Science News</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Scientists have recently discovered a fascinating foam-like substance produced by
              epithelial cells that has the remarkable ability to dissolve chunks of bacterial
              membranes. This groundbreaking finding reveals a previously unknown mechanism of immune
              defense that has been operating in our bodies all along.
            </p>

            <p className="text-gray-700 mb-4">
              What makes this discovery particularly interesting is that this immune response had been
              overlooked for centuries, despite extensive study of the immune system. The foam-like
              substance represents a unique approach to fighting bacterial infections that differs
              from other known immune mechanisms.
            </p>

            <p className="text-gray-700 mb-4">
              The key to this defense system's effectiveness lies in how it targets bacterial lipids
              while leaving host cells unharmed. This selective targeting is crucial, as it allows the
              immune system to eliminate bacterial threats without causing collateral damage to the
              body's own tissues.
            </p>

            <p className="text-gray-700 mb-4">
              This discovery has significant implications for the development of new antimicrobial
              treatments. By understanding how this natural defense system works, researchers may be
              able to develop new therapies that harness or enhance this mechanism to fight bacterial
              infections more effectively.
            </p>

            <p className="text-gray-700">
              As antibiotic resistance continues to be a growing concern, finding new ways to combat
              bacterial infections is more important than ever. This newly discovered immune mechanism
              could provide a valuable tool in the ongoing battle against infectious diseases.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
