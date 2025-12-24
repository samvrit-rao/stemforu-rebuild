import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-white py-20 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-logo text-teal-600">STEMForU</h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-heading font-semibold">About the Founder</p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="md:w-2/5">
              <Image
                src="/Samvrit_Rao_3M.jpg"
                alt="Samvrit Rao - Founder & CEO of STEMForU"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto sticky top-24"
              />
            </div>
            <div className="md:w-3/5 space-y-6">
              <div>
                <h2 className="text-4xl font-black mb-6 text-gray-900 font-display">The Story</h2>
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Samvrit Rao is the founder and CEO of STEMForU. He is an incoming freshman at Columbia
                    University and a graduate of Thomas Jefferson High School for Science and Technology.
                  </p>
                  <p>
                    Growing up in the tri-state area and later moving from the Bronx to Virginia, he saw
                    educational disparities firsthand, inspiring him to start the organization in 2020.
                  </p>
                  <p>
                    STEMForU received a 2023 3M-Discovery Education alumni grant and has benefited over 120
                    students by promoting critical thinking and problem-solving skills through innovative
                    educational programs.
                  </p>
                  <p>
                    Outside of science, Samvrit enjoys reading and playing cricket, football and basketball
                    with friends, bringing a well-rounded perspective to the organization&apos;s mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Columbia Engagement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 font-display">
              Columbia University Engagement
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Actively participating in various Columbia organizations that extend
              the mission of service, research, and cultural enrichment.
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

      {/* Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black mb-8 text-gray-900 font-display">Recent Research Publications</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6 py-2">
              <p className="text-xl font-semibold text-gray-900 font-heading">
                Automated quantification of periodic discharges in human electroencephalogram
              </p>
              <p className="text-gray-600 mt-1">2024</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6 py-2">
              <p className="text-xl font-semibold text-gray-900 font-heading">
                Automated Medical Records Review for Mild Cognitive Impairment and Dementia
              </p>
              <p className="text-gray-600 mt-1">2024</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6 py-2">
              <p className="text-xl font-semibold text-gray-900 font-heading">
                Identification of Patients with Congestive Heart Failure: Automated Electronic Health
                Records Phenotyping
              </p>
              <p className="text-gray-600 mt-1">2024</p>
            </div>
            <div className="border-l-4 border-primary-600 pl-6 py-2">
              <p className="text-xl font-semibold text-gray-900 font-heading">
                Mechanisms of Intracellular Communication in Cancer and Pathogen Spreading
              </p>
              <p className="text-gray-600 mt-1">2024</p>
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
              <p className="text-gray-800 text-lg font-semibold">2025 National Merit Semifinalist</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">2023 & 2024 Virginia Junior Academy of Science Symposium – 1st place</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">2022–2024 Virginia State TSA – 1st, 2nd and 3rd placements</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">2023 JSHS National Finalist (Top 10)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">2023 Regional Science & State Fair – 1st place in Biochemistry</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">Extemporaneous Speech Top 10 at the GMU National Tournament (2023)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">America&apos;s Top 10 Young Scientists Recognition by 3M (2020)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">U.S. National Champion in the International Geography Bee (Junior Varsity, 2019)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <p className="text-gray-800 text-lg font-semibold">Indian Classical music performer at regional events (2015 – present)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black mb-12 text-gray-900 font-display">Major Projects</h2>
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="border-l-4 border-primary-600 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                In-vitro aided computational approach to identify preclinical drug targets to treat
                Glioblastoma Multiforme
              </h3>
              <p className="text-gray-600 mb-4 font-semibold">July 2022 – March 2024</p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Uses omics analysis, in-vitro imaging and machine learning to pinpoint molecular drug
                targets for glioblastoma. Conducted at UTMB in Galveston, TX with one resulting
                publication.
              </p>
              <div className="space-y-1">
                <p className="text-gray-900 font-semibold">Recognitions:</p>
                <ul className="space-y-1 ml-4">
                  <li className="text-gray-700">• 2024 VJAS Symposium (1st place, Biotechnology)</li>
                  <li className="text-gray-700">• 2023 Yale SEA outstanding project award</li>
                  <li className="text-gray-700">• Mark Licata award for Biotechnology</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-l-4 border-purple-600 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                BOREAS: Innovating Respiratory Care through Telemedicine
              </h3>
              <p className="text-gray-600 mb-4 font-semibold">May 2020 – present</p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                A unified hardware-software solution for capturing and transmitting breath sounds.
              </p>
              <div className="space-y-1">
                <p className="text-gray-900 font-semibold">Recognitions:</p>
                <ul className="space-y-1 ml-4">
                  <li className="text-gray-700">• Invited talk at the ISCB national computational biology conference</li>
                  <li className="text-gray-700">• 2023 VJAS Symposium (1st place, Engineering)</li>
                  <li className="text-gray-700">• 2023 VA Bio special award</li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-l-4 border-pink-600 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                Identifying Similar Whole Slide Images and Pathology Reports with Multimodal Machine
                Learning
              </h3>
              <p className="text-gray-600 mb-4 font-semibold">May 2023 – September 2023</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Uses graph neural networks and natural language processing to help pathologists find
                similar cases. Conducted via a virtual internship with Dartmouth Health and led to a
                publication.
              </p>
            </div>

            {/* Project 4 */}
            <div className="border-l-4 border-yellow-600 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Routine Remind</h3>
              <p className="text-gray-600 mb-4 font-semibold">August 2021 – May 2023</p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                An intuitive mobile app employing natural-language processing to aid individuals with
                social and cognitive impairments.
              </p>
              <div className="space-y-1">
                <p className="text-gray-900 font-semibold">Recognition:</p>
                <ul className="space-y-1 ml-4">
                  <li className="text-gray-700">• 2022 Congressional App Award for the Virginia 10th District</li>
                </ul>
              </div>
            </div>

            {/* Project 5 */}
            <div className="border-l-4 border-green-600 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                Understanding the Viral-Host Immune Interactions in SARS-CoV-2 Infection
              </h3>
              <p className="text-gray-600 mb-4 font-semibold">2021 – 2022</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Computational immunomics research to identify key immune mediators of COVID-19 disease
                severity. Conducted with collaborators at Karolinska Institute in Sweden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
