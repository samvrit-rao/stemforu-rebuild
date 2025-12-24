import Image from 'next/image'

export default function CovidVariantsArticle() {
  return (
    <div className="bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src="/quarantine.jpg"
          alt="COVID-19 Vaccination"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-600 mb-2">2022</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A detailed analysis of COVID-19 variants
          </h1>
          <p className="text-gray-600">By STEMForU Team</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              The COVID-19 pandemic has been characterized by the emergence of various viral variants,
              each with unique characteristics that have shaped the course of the global health crisis.
              Understanding these variants is crucial for developing effective public health strategies
              and treatments.
            </p>

            <p className="text-gray-700 mb-4">
              Since the initial identification of SARS-CoV-2, the virus has undergone numerous
              mutations, leading to the emergence of variants of concern. These variants often exhibit
              changes in transmissibility, disease severity, or ability to evade immune responses from
              previous infections or vaccination.
            </p>

            <p className="text-gray-700 mb-4">
              Major variants that have emerged include Alpha, Beta, Gamma, Delta, and Omicron, each
              presenting different challenges to public health efforts. The spike protein, which the
              virus uses to enter human cells, has been a particular focus of study as mutations in
              this region can significantly affect how the virus behaves.
            </p>

            <p className="text-gray-700 mb-4">
              Scientists worldwide have worked tirelessly to sequence viral genomes, track variant
              spread, and understand how these changes impact vaccine effectiveness and treatment
              options. This ongoing surveillance is essential for staying ahead of the virus and
              protecting public health.
            </p>

            <p className="text-gray-700">
              As we continue to monitor and respond to new variants, the lessons learned from studying
              COVID-19 will inform our preparedness for future pandemic threats and advance our
              understanding of viral evolution and infectious disease control.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
