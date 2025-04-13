import Image from "next/image"
import { BarChart, LineChart, AlertTriangle, CheckCircle } from "lucide-react"

export default function EthicalVisuals() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Ethics in Data Visualization</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          How we visualize climate data can significantly impact public understanding and policy decisions. Ethical
          visualization practices ensure that data is presented accurately and fairly, while misleading visualizations
          can distort perceptions and hinder effective action.
        </p>

        {/* Section 1: Ethical Graph */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <CheckCircle className="mr-2 h-6 w-6 text-teal-600 dark:text-teal-400" />
            Ethical Data Visualization
          </h2>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
                Example: Dual-Axis Comparison of Power Usage vs Whitespace
              </h3>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                  <Image
                    src="/assets/ethical.jpg"
                    alt="Ethical dual-axis graph comparing power usage and whitespace"
                    width={600}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Source: Devastator, Kaggle (2025), "Global Data Centre Energy Footprints"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What Makes This Ethical:</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                      <span>Clearly labeled axes with appropriate scales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                      <span>Distinct colors with good contrast for accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                      <span>Includes zero baseline for proper context</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                      <span>Transparent methodology and data sources</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Impact on Understanding:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    This visualization accurately shows the relationship between power usage and efficiency
                    improvements. By using dual axes with appropriate scales, it allows viewers to see both absolute
                    values and relative changes without distortion.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    The clear presentation helps policymakers and the public make informed decisions based on accurate
                    data representation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Misleading Graph */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-orange-500" />
            Misleading Data Visualization
          </h2>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
                Example: Misleading Bar Graph Focusing Only on Power Use
              </h3>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                  <Image
                    src="/assets/misleading.jpg"
                    alt="Misleading bar graph with truncated y-axis"
                    width={600}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Example of misleading visualization
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What Makes This Misleading:</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Truncated y-axis that doesn't start at zero</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Cherry-picked time periods that hide long-term trends</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Misleading title that makes claims beyond the data</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Missing or vague information about data sources</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Impact on Understanding:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    This visualization artificially exaggerates small changes by manipulating the y-axis scale. It
                    creates a visual impression of dramatic change when the actual percentage difference might be
                    minimal.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Such misleading presentations can lead to misallocation of resources, inappropriate policy
                    responses, or public confusion about the true nature of climate trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Guidelines for Ethical Charts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Guidelines to Create Ethical Charts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                Technical Considerations
              </h3>

              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Appropriate Scales:</strong> Use scales that accurately represent the data without
                    distortion.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Complete Data:</strong> Show the full context of the data, including historical trends when
                    relevant.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Avoid Emotional Colors:</strong> Use neutral color schemes that don't bias interpretation.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Accessibility:</strong> Design visualizations that are perceivable by people with various
                    visual abilities.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                <LineChart className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                Ethical Responsibilities
              </h3>

              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Transparency:</strong> Clearly document data sources, methodologies, and any manipulations.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Objectivity:</strong> Present data fairly without cherry-picking to support predetermined
                    narratives.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Context:</strong> Provide sufficient background information for proper interpretation.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2 mt-0.5" />
                  <span>
                    <strong>Responsibility:</strong> Consider the potential impact of visualizations on public
                    understanding and policy.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
