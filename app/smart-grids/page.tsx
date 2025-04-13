import Image from "next/image"
import { Zap, BarChart3, Gauge, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SmartGrids() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Smart Grids & Sustainable Energy</h1>

        {/* Section 1: What are Smart Grids */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <Zap className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
            What Are Smart Grids and Why Are They Needed?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Smart grids represent the evolution of traditional power grids into intelligent, responsive networks
                that optimize the generation, distribution, and consumption of electricity. These systems rely on
                advanced computer technologies to manage the complexities of integrating renewable energy sources.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Unlike conventional power grids, smart grids incorporate two-way digital communication between utilities
                and consumers, allowing for real-time monitoring and adjustment of electricity flow. This bidirectional
                communication enables more efficient energy management and faster response to changing conditions.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                As we transition to renewable energy sources like solar and wind, which are inherently variable, smart
                grids become essential for maintaining grid stability and reliability while maximizing the use of clean
                energy.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/smart-grid-overview.jpg"
                  alt="Smart Grid Distributed Energy System"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Distributed energy resource management connecting various power sources and consumers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How CS Improves Energy Efficiency */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            How Computer Science Improves Energy Efficiency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <BarChart3 className="h-6 w-6 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle className="text-lg">Real-time Load Balancing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Advanced algorithms balance electricity supply and demand in real-time, preventing outages and
                  reducing the need for expensive peaker plants. They can shift non-critical consumption to times when
                  renewable energy is abundant.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <Gauge className="h-6 w-6 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle className="text-lg">Predictive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Machine learning models analyze data from sensors throughout the grid to predict equipment failures
                  before they occur. This proactive approach reduces downtime, extends the lifespan of infrastructure,
                  and improves overall efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle className="text-lg">Renewable Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Smart grid systems enable seamless integration of solar, wind, and other renewable energy sources by
                  managing their variability. Advanced forecasting algorithms predict renewable generation, while
                  intelligent control systems ensure grid stability.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Computer science is at the heart of modern energy systems, providing the intelligence needed to optimize
            complex networks of generators, storage systems, and consumers. Machine learning algorithms continuously
            analyze patterns in energy production and consumption, identifying opportunities for efficiency improvements
            that would be impossible to detect manually.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            These technologies not only improve the technical performance of energy systems but also enhance the user
            experience through smart meters, home energy management systems, and intuitive interfaces that help
            consumers make more informed decisions about their energy use.
          </p>
        </section>

        {/* Section 3: Impact on CO2 Reduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Impact on Reducing CO₂ Emissions
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">
              Smart Grids' Contribution to Climate Goals
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="font-medium text-teal-600 dark:text-teal-400 mb-3">Direct Emissions Reduction</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Increased renewable energy penetration by 15-30%</li>
                  <li>• Reduced need for fossil fuel "peaker" plants</li>
                  <li>• Lower transmission and distribution losses (5-10% improvement)</li>
                  <li>• Optimized energy storage utilization</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="font-medium text-teal-600 dark:text-teal-400 mb-3">Indirect Emissions Reduction</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Enabled demand response programs reducing peak demand by 10-20%</li>
                  <li>• Facilitated electric vehicle integration and smart charging</li>
                  <li>• Supported energy-efficient building management systems</li>
                  <li>• Reduced need for grid infrastructure expansion</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            According to research, the widespread implementation of smart grid technologies could reduce global CO₂
            emissions by 2-4 billion tons annually by 2030—equivalent to removing over 400 million cars from the road.
            By enabling higher penetration of renewable energy and improving overall system efficiency, smart grids are
            a critical component of our climate change mitigation strategy.
          </p>
        </section>
      </div>
    </div>
  )
}
