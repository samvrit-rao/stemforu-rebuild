import Image from 'next/image'

export default function MRNAVaccinesArticle() {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src="/rna.jpg"
          alt="mRNA and vaccines illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The future of mRNA vaccines
          </h1>
          <p className="text-gray-600">Current Science News</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              mRNA vaccines played a major role in the fight against COVID-19, revolutionizing how we
              approach vaccine development and deployment. These innovative vaccines work by instructing
              cells to produce viral proteins, which then trigger an immune response without exposing
              the body to the actual virus.
            </p>

            <p className="text-gray-700 mb-4">
              The success of mRNA technology in COVID-19 vaccines has opened up exciting possibilities
              for treating and preventing other diseases. Researchers are now exploring how this
              technology can be applied to influenza, HIV, cancer, and various other conditions that
              have proven difficult to address with traditional vaccine approaches.
            </p>

            <p className="text-gray-700 mb-4">
              New discoveries are being made almost weekly, as scientists work to extend mRNA technology
              to a broader range of applications. The flexibility of mRNA vaccines allows for rapid
              adaptation to new variants and diseases, making them particularly valuable in responding
              to emerging health threats.
            </p>

            <p className="text-gray-700 mb-4">
              Beyond infectious diseases, mRNA technology shows promise in personalized medicine,
              particularly in cancer immunotherapy. By programming the immune system to recognize and
              attack cancer cells, these treatments could provide new hope for patients with difficult-to-treat
              cancers.
            </p>

            <p className="text-gray-700">
              As research continues and technology advances, mRNA vaccines and therapeutics are likely
              to become an increasingly important tool in modern medicine, potentially transforming how
              we prevent and treat a wide range of diseases in the years to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
