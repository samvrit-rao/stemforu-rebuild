import Image from 'next/image'

export default function HIVVaccineArticle() {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src="/depression.jpg"
          alt="Medical research challenges"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why we don&apos;t have an HIV Vaccine yet
          </h1>
          <p className="text-gray-600">Current Science News</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Despite decades of research and significant scientific advances, developing an effective
              HIV vaccine remains one of the greatest challenges in modern medicine. Understanding why
              this has proven so difficult requires examining the unique characteristics of the HIV
              virus and how it interacts with the human immune system.
            </p>

            <p className="text-gray-700 mb-4">
              One of the primary obstacles is HIV&apos;s ability to integrate its genetic code directly into
              T-cells, a crucial component of our immune system. Once integrated, the virus can remain
              dormant in these cells for extended periods, creating long-term reservoirs that are
              extremely difficult to eliminate. This means that even if a vaccine could prevent new
              infections, it would still face the challenge of clearing existing viral reservoirs.
            </p>

            <p className="text-gray-700 mb-4">
              Another significant challenge is the extraordinarily high variation across HIV strains.
              The virus mutates rapidly, producing numerous variants that can differ substantially from
              one another. This genetic diversity makes it difficult to develop a vaccine that provides
              broad protection against all strains of the virus.
            </p>

            <p className="text-gray-700 mb-4">
              Additionally, HIV has evolved sophisticated mechanisms to evade the immune system,
              including the ability to hide from antibodies and rapidly develop resistance to immune
              responses. These characteristics make it particularly difficult to generate the kind of
              lasting immunity that vaccines typically provide.
            </p>

            <p className="text-gray-700">
              Despite these challenges, research efforts continue with determination. Scientists are
              exploring novel approaches including broadly neutralizing antibodies, therapeutic
              vaccines, and combination strategies. While a fully effective HIV vaccine remains elusive,
              each advance in our understanding brings us closer to this critical goal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
