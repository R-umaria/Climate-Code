import Image from "next/image"
import { Server, Recycle, Leaf } from "lucide-react"

export default function EnvironmentalImpact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">The Footprint of Technology</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Section 1: Energy Usage of Data Centers */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
              <Server className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
              Data Centers & Energy Consumption
            </h2>

            <div className="mb-8">
              <div className="mb-4">
                <Image
                  src="/assets/datacentre.jpg"
                  alt="Data Center with Complex Wiring and LED Power Indicators"
                  width={350}
                  height={200}
                  className="rounded-lg mb-3 shadow"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Modern data center with extensive networking infrastructure and power consumption
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Data centers are the backbone of our digital infrastructure, but they consume enormous amounts of
                electricity. A single large data center can use as much power as a small town, with much of this energy
                still coming from fossil fuels.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The cooling systems required to prevent servers from overheating are particularly energy-intensive,
                accounting for up to 40% of a data center's total energy consumption. As our digital economy grows, so
                does the environmental impact of these facilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">E-waste & Obsolescence</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The rapid pace of technological advancement leads to frequent hardware upgrades, generating millions of
                tons of electronic waste annually. E-waste contains toxic materials like lead, mercury, and cadmium that
                can contaminate soil and water when improperly disposed of.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Software obsolescence compounds this problem, as updates often require newer hardware, forcing perfectly
                functional devices into retirement. Only about 20% of global e-waste is formally recycled, with the
                remainder ending up in landfills or being processed in unsafe conditions.
              </p>
            </div>
          </div>

          {/* Section 3: Sustainable Practices */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
              <Leaf className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
              Sustainable Computing Practices
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Green Computing</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Major tech companies are increasingly powering their data centers with renewable energy. Google,
                Microsoft, and Apple have all made commitments to carbon neutrality or 100% renewable energy for their
                operations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Innovative cooling technologies, such as liquid cooling and locating data centers in cold climates, can
                significantly reduce energy consumption. Some companies are even placing data centers underwater or in
                deep mines to take advantage of natural cooling.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Case Study: Microsoft's Underwater Data Center
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Microsoft's Project Natick demonstrated that underwater data centers can be more reliable and
                  energy-efficient than traditional facilities. The natural cooling provided by the ocean eliminated the
                  need for artificial cooling systems.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Circular Economy Approaches</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The circular economy model aims to minimize waste and maximize the reuse of resources. In computing,
                this translates to designing hardware for longevity, repairability, and eventual recycling.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Eco-Design Principles</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                    <span>Designing hardware for longevity, repairability, and eventual recycling</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                    <span>Implementing take-back programs for proper disposal and recycling</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                    <span>Developing energy-efficient algorithms that require less computational power</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                    <span>Creating software that can run efficiently on older hardware</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Balancing Digital Innovation and Sustainability
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            As we continue to rely more heavily on digital technologies, finding ways to minimize their environmental
            impact becomes increasingly important. The challenge lies in balancing the benefits of technological
            advancement with the need to protect our planet.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Computer scientists have a unique opportunity to address this challenge by developing more efficient
            systems, promoting sustainable practices, and raising awareness about the environmental implications of our
            digital choices.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            By approaching computing with sustainability in mind, we can harness the power of technology to address
            climate change while minimizing its contribution to the problem.
          </p>
        </section>
      </div>
    </div>
  )
}
