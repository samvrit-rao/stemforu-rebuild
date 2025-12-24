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
              STEMForU's mission is to inspire and empower elementary and middle-school students,
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

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-6 text-gray-900 font-display">Ready to Get Involved?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join us in our mission to empower the next generation of innovators and scientists.
          </p>
          <a
            href="/summer-camp"
            className="inline-block bg-teal-600 text-white px-8 py-3 font-semibold hover:bg-teal-700 transition-colors font-heading"
          >
            View Programs
          </a>
        </div>
      </section>
    </div>
  )
}
