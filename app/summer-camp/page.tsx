import Image from 'next/image'

export default function SummerCamp() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-white py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-logo text-teal-600">STEMForU</h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-heading font-semibold">
            Summer Camp Programs
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Inspiring young minds through STEM education
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900 text-center font-display">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/IMG_9637.jpg"
                alt="Students presenting at poster competition"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/IMG_7071.jpg"
                alt="Student presenting research to judge"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/IMG_9616.jpg"
                alt="Student with poster presentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2024 Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-display">
            2024 – Summer of Innovation
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Join us for an exciting two-week virtual camp where students explore scientific
              principles, engineering design, and data analysis through hands-on learning and research.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 font-heading">Learning Format</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience captivating research presentations featuring informative graphs and interactive
              demonstrations. Students lead their own research projects addressing specific problems
              with creativity and ingenuity. Prototyping materials are provided upon request.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 font-heading">Culminating Event</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The camp concludes with an in-person poster presentation competition, giving participants
              the opportunity to showcase their work to judges and peers.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Program Details</h3>
              <ul className="space-y-3">
                <li className="text-lg text-gray-700">
                  <strong className="text-gray-900">Schedule:</strong> August 1st–9th, with culminating in-person poster
                  presentation on August 17th
                </li>
                <li className="text-lg text-gray-700">
                  <strong className="text-gray-900">Topics:</strong> Fundamentals of scientific principles, engineering design,
                  and data collection/analysis
                </li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 font-heading">Judges</h3>
            <ul className="list-disc list-inside text-lg text-gray-600 ml-4 mb-4 space-y-2">
              <li>Dr. Kathy Schaefer (Senior Scientist, HHMI Janelia Research Campus)</li>
              <li>Mr. Mahesh Seshan (Technical Director, Titan.ium Platform LLC)</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6 font-heading">Results & Recognition</h3>
            <p className="text-gray-700 mb-8 text-xl font-semibold font-heading">3M Virginia State Merit Award Winners:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* 2023 Winner */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-teal-200">
                <div className="relative h-80">
                  <Image
                    src="/MS.jpeg"
                    alt="Meha Seshan - 2023 Winner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 2024 Winner */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-teal-200">
                <div className="relative h-80">
                  <Image
                    src="/AD.jpeg"
                    alt="Aneruddha Das - 2024 Winner"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2023 Program */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-display">
            2023 – Summer of Innovation
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              An engaging virtual camp focusing on the fundamentals of scientific principles,
              engineering design, and data collection and analysis.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Program Details</h3>
              <ul className="space-y-3">
                <li className="text-lg text-gray-700">
                  <strong className="text-gray-900">Schedule:</strong> August 1st–12th, with final in-person poster
                  presentation on August 19th
                </li>
                <li className="text-lg text-gray-700">
                  <strong className="text-gray-900">Topics:</strong> Fundamentals of scientific principles, engineering design,
                  and data collection/analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2022 Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-display">
            2022 – Innovative Concepts
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              A program encouraging students to devise solutions to global problems. Using a
              presentation-based learning paradigm, students create prototypes addressing issues such
              as climate change, cancer, infectious diseases, water contamination, and food inequality.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Program Details</h3>
              <ul className="space-y-3">
                <li className="text-lg text-gray-700">
                  <strong className="text-gray-900">Schedule:</strong> August 3rd–11th, with final pitch/presentation on August
                  13th
                </li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">Winners</h3>
            <ul className="list-disc list-inside text-lg text-gray-600 ml-4 space-y-2">
              <li>1st Place: Vihaan Gangshettiwar</li>
              <li>2nd Place: Agastya Billipuram</li>
              <li>3rd Place: Sahasra Chinthal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2021 Program */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-display">
            2021 – Science Talks
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              A camp featuring guided sessions with catalyst questions that students use to create
              weekly presentations. Each student is assigned one of three topics: climate change,
              cancer, or sustainability.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Weekly presentations allow participants to share their research and findings with peers
              and mentors, fostering a collaborative learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 font-display">Interested in Joining?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stay tuned for information about the 2025 summer camp program. Follow us for updates!
          </p>
        </div>
      </section>
    </div>
  )
}
