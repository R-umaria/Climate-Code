import Image from "next/image"
import { CheckCircle, Database, Brain, LineChart } from "lucide-react"

export default function ClimateModeling() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">AI & Climate Forecasting</h1>

        {/* Section 1: Machine Learning and Climate Patterns */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <Brain className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
            Machine Learning & Climate Pattern Forecasting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Climate modeling has been revolutionized by the application of machine learning algorithms. These
                technologies enable scientists to process vast amounts of climate data from satellites, weather
                stations, ocean buoys, and other sources.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Advanced neural networks can identify patterns and correlations that traditional statistical methods
                might miss, leading to more accurate predictions of climate trends, extreme weather events, and
                long-term climate changes.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Deep learning models are particularly effective at handling the complexity and non-linearity of climate
                systems, allowing for more nuanced understanding of climate feedback loops and tipping points.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/climate-model-diagram.png"
                  alt="AI-Driven Climate Model Architecture"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Machine learning model for climate prediction showing soil respiration analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Scenario Prediction */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <Database className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
            Scenario Prediction & Data Pipelines
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <div className="relative">
              {/* Data Pipeline Visual */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/4">
                  <h3 className="font-medium text-teal-600 dark:text-teal-400 mb-2">Data Collection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Satellites, sensors, weather stations, and historical records
                  </p>
                </div>

                <div className="hidden md:block text-gray-400 dark:text-gray-500">→</div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/4">
                  <h3 className="font-medium text-teal-600 dark:text-teal-400 mb-2">Data Processing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Cleaning, normalization, and feature extraction
                  </p>
                </div>

                <div className="hidden md:block text-gray-400 dark:text-gray-500">→</div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4 md:mb-0 w-full md:w-1/4">
                  <h3 className="font-medium text-teal-600 dark:text-teal-400 mb-2">Model Training</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    AI algorithms learn patterns from historical data
                  </p>
                </div>

                <div className="hidden md:block text-gray-400 dark:text-gray-500">→</div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-full md:w-1/4">
                  <h3 className="font-medium text-teal-600 dark:text-teal-400 mb-2">Scenario Analysis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Forecasting multiple climate scenarios for policy decisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Climate scenario prediction allows scientists and policymakers to explore possible future climate states
            under different conditions. These scenarios help in understanding potential impacts and developing
            appropriate mitigation and adaptation strategies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Modern climate modeling relies on sophisticated data pipelines that transform raw environmental data into
            actionable insights. These pipelines handle the enormous volume, velocity, and variety of climate data,
            ensuring that models receive clean, consistent, and relevant inputs.
          </p>
        </section>

        {/* Section 3: Energy Optimization */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <LineChart className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
            Energy Optimization with Neural Networks
          </h2>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
              Neural Networks for Renewable Energy Grids
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Neural networks are increasingly being used to optimize renewable energy systems. These AI models can:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Predict Energy Production</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Forecast solar and wind energy output based on weather predictions, enabling better grid management
                    and reducing the need for fossil fuel backups.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Optimize Energy Distribution</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Balance electricity supply and demand in real-time, reducing waste and ensuring stability in grids
                    with high renewable penetration.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Manage Energy Storage</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Determine optimal charging and discharging patterns for battery systems, maximizing the use of
                    renewable energy and extending battery life.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            By applying neural networks to renewable energy systems, we can significantly increase the efficiency and
            reliability of clean energy sources. This technology is crucial for accelerating the transition away from
            fossil fuels and reducing the carbon footprint of our energy systems.
          </p>
        </section>
      </div>
    </div>
  )
}
