import Image from 'next/image'

export default function MehaSeshan() {
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
                src="/meha-seshan.png"
                alt="Meha Seshan - Program Director of STEMForU"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto sticky top-24"
              />
            </div>
            <div className="md:w-3/5 space-y-6">
              <div>
                <h2 className="text-4xl font-black mb-2 text-gray-900 font-display">Meha Seshan</h2>
                <p className="text-primary-600 font-semibold text-xl mb-6">Program Director</p>
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Meha Seshan is a rising 9th grader at Rock Ridge High School.
                  </p>
                  <p>
                    She has been actively involved in STEM and leadership activities, including participation
                    in the Technology Student Association (TSA), where she has earned 1st, 2nd, and 3rd place
                    recognitions across events. She is also a 3M Young Scientist Challenge State Merit Winner,
                    a Step Up Loudoun 3rd Place recipient, and placed 4th in Science Olympiad.
                  </p>
                  <p>
                    In addition to her academic and STEM achievements, Meha has held leadership roles as
                    President of her TSA club and Secretary of the National Junior Honor Society (NJHS),
                    demonstrating strong organizational and teamwork skills.
                  </p>
                  <p>
                    Outside of academics and competitions, she enjoys playing basketball, swimming, cricket,
                    and watching sports, bringing a balanced and active lifestyle to her interests.
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
              <p className="text-gray-800 text-lg font-semibold">TSA – 1st, 2nd, and 3rd place recognitions</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">3M Young Scientist Challenge State Merit Winner</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">Step Up Loudoun – 3rd Place</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">Science Olympiad – 4th Place</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">President&apos;s Outstanding Academic Excellence</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">TSA Club President</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Led the Technology Student Association club, organizing events and guiding members through
                competitive STEM challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">NJHS Secretary</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Served as Secretary of the National Junior Honor Society, demonstrating strong organizational
                and teamwork skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
