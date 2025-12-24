export default function Mission() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-white py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-logo text-teal-600">STEMForU</h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-heading font-semibold">
            Our Mission
          </p>
        </div>
      </section>

      {/* Mission Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              STEMForU&apos;s mission is to inspire and empower elementary and middle-school students,
              especially those from underrepresented communities. We emphasize innovative learning,
              hands-on experimentation and the importance of science, technology, engineering and
              mathematics.
            </p>
            <p>
              Through our programs, we provide a platform to ignite and nurture a strong interest in
              STEM fields, helping students develop critical thinking and problem-solving skills that
              will serve them throughout their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Participation Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black mb-8 text-gray-900 font-display">Who Can Participate?</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The Innovative Concepts and Science Talks programmes target students in{' '}
              <span className="font-semibold text-gray-900">grades 4–7</span>.
            </p>
            <p>
              This opportunity is designed to ignite a passion for science while exploring diverse
              topics. Students are encouraged to pitch and develop their own innovative ideas using an
              engineering-design-based approach.
            </p>
            <p>
              This unique approach sets our programme apart from other STEM enrichment initiatives,
              fostering creativity, critical thinking, and hands-on problem-solving skills.
            </p>
          </div>
        </div>
      </section>

      {/* Columbia Engagement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 font-display">
              Columbia University Engagement
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our founder actively participates in various Columbia organizations that extend
              our mission of service, research, and cultural enrichment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bronx BOLD */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border-2 border-teal-100 hover:border-teal-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Bronx Oncology Living Daily (BOLD)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Columbia-affiliated program dedicated to supporting cancer patients and survivors
                in the Bronx community through education, resources, and compassionate care initiatives.
              </p>
            </div>

            {/* Columbia GRC */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Columbia Global Research and Consulting
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A student-led consulting organization providing pro-bono research and strategic
                solutions to nonprofits and social enterprises, driving meaningful global impact.
              </p>
            </div>

            {/* Columbia Bhangra */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Columbia Bhangra
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Columbia&apos;s premier South Asian dance team, celebrating Punjabi culture through
                high-energy performances and fostering cultural awareness across campus.
              </p>
            </div>

            {/* Columbia Synapse */}
            <div className="bg-gradient-to-br from-pink-50 to-teal-50 p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
                Columbia Synapse
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A neuroscience-focused organization connecting students passionate about brain science,
                mental health, and cutting-edge research in cognitive neuroscience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900 font-display">Ready to Get Involved?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join us in our mission to empower the next generation of innovators and scientists.
          </p>
          <a
            href="/summer-camp"
            className="inline-block bg-teal-600 text-white px-8 py-3 font-semibold hover:bg-teal-700 transition-colors font-heading shadow-lg hover:shadow-xl"
          >
            View Programs
          </a>
        </div>
      </section>
    </div>
  )
}
