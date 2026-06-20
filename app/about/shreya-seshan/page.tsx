import Image from 'next/image'

export default function ShreyaSeshan() {
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
                src="/shreya-seshan.png"
                alt="Shreya Seshan - Program Director of STEMForU"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto sticky top-24"
              />
            </div>
            <div className="md:w-3/5 space-y-6">
              <div>
                <h2 className="text-4xl font-black mb-2 text-gray-900 font-display">Shreya Seshan</h2>
                <p className="text-primary-600 font-semibold text-xl mb-6">Program Director</p>
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Shreya Seshan is a student at Stone Hill Middle School and an 8th grader with a passion
                    for STEM. Growing up in Massachusetts before moving to Ashburn, Virginia, she saw how
                    access to science and technology education can make a big difference in students&apos; lives,
                    and that inspired her to get involved with STEMForU.
                  </p>
                  <p>
                    Through STEMForU, Shreya is helping promote critical thinking and problem solving skills
                    for students in her community, making STEM fun and accessible for everyone.
                  </p>
                  <p>
                    Outside of science, Shreya loves playing sports, hanging out with friends, and reading,
                    bringing a well rounded and energetic perspective to everything she does.
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
              <p className="text-gray-800 text-lg font-semibold">TSA – Top 3 in Data Science & Analytics and Community Service</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">Step Up Loudoun – 3rd Place</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black mb-8 text-gray-900 font-display">Leadership Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border-2 border-teal-100 hover:border-teal-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">TSA Club Vice President</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Led the Technology Student Association club serving as primary student leader for the club,
                responsible for maintaining a strong chapter, work program and stepping in to lead meetings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
