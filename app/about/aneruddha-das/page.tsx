import Image from 'next/image'

export default function AneruddhaDas() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-white py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-logo text-teal-600">STEMForU</h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-heading font-semibold">Program Director</p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="md:w-2/5">
              <Image
                src="/aneruddha-das.jpg"
                alt="Aneruddha Das - Program Director of STEMForU"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto sticky top-24"
              />
            </div>
            <div className="md:w-3/5 space-y-6">
              <div>
                <h2 className="text-4xl font-black mb-2 text-gray-900 font-display">Aneruddha Das</h2>
                <p className="text-primary-600 font-semibold text-xl mb-6">Program Director</p>
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Aneruddha Das is a rising 9th grade student at Briar Woods High School and Academies of Loudoun.
                  </p>
                  <p>
                    He has been actively involved in STEM, research, and innovation, while maintaining strong academic
                    achievement recognized through President&apos;s Outstanding Academic Excellence Awards. His accomplishments
                    include being an eCYBERMISSION National Finalist and Regional Winner, a two-time 3M Young Scientist
                    Challenge Virginia State Merit Winner, Broadcom Coding with Commitment Prize winner, and a Thermo
                    Fisher Junior Innovator Challenge participant. He also competes in FTC Robotics, MathCounts, and
                    other academic competitions and mentors younger students through math programs.
                  </p>
                  <p>
                    Aneruddha is committed to community service, volunteering through local library programs, Anna Sudha
                    Community Kitchen, FFO food drives, and other initiatives that support local families and underserved
                    communities.
                  </p>
                  <p>
                    He enjoys spending time with friends, playing basketball, and watching football and soccer. His
                    curiosity, creativity, and passion for building things continue to fuel his interest in engineering,
                    technology, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black mb-8 text-gray-900 font-display">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">President&apos;s Outstanding Academic Excellence Award (2026)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">Broadcom Coding with Commitment Prize Winner (2026)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">eCYBERMISSION National Finalist &amp; Regional Winner (2025)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">3M Young Scientist Challenge Virginia State Merit Winner (2024 &amp; 2025)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">FTC Robotics Reach Award &amp; Connect Award Recipient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black mb-8 text-gray-900 font-display">Leadership Roles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border-2 border-teal-100 hover:border-teal-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Research &amp; Innovation Team Leader</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Led award-winning STEM projects, including the nationally recognized EcoPaw Engineers eCYBERMISSION
                initiative, coordinating research, technology development, and presentations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Lead Programmer, FTC Robotics</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Serves as a lead coding contributor for the FTC Robotics team.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Math Mentor &amp; Peer Instructor</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mentors younger students through summer math readiness and community education programs, helping build
                confidence and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
