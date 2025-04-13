import Link from "next/link"
import { ArrowRight, Database, Wind, Server, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-700 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Climate+Code – Where Code Meets Climate</h1>
            <p className="text-xl mb-8">
              Explore how algorithms, smart energy systems, and ethical data design are shaping our response to the
              climate crisis.
            </p>
            <Button asChild className="bg-white text-teal-600 hover:bg-gray-100 hover:text-teal-700">
              <Link href="/climate-modeling">
                Explore the Topics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-20">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M45.5,-51.2C59.1,-35.6,70.3,-17.8,71.1,0.8C71.9,19.4,62.3,38.8,48.7,53.9C35.1,69,17.6,79.8,-0.9,80.7C-19.3,81.6,-38.6,72.6,-53.5,57.5C-68.4,42.4,-78.9,21.2,-78.2,0.7C-77.5,-19.8,-65.6,-39.6,-50.6,-55.2C-35.6,-70.8,-17.8,-82.2,0.1,-82.3C17.9,-82.4,35.9,-71.2,45.5,-51.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Computer Science & Climate Change</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Computer science plays a dual role in climate change. While data centers and electronic waste contribute
              to our carbon footprint, advanced algorithms, AI, and smart systems offer powerful solutions for
              monitoring, predicting, and mitigating climate impacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Database className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle>Climate Modeling</CardTitle>
                <CardDescription>AI and big data for climate prediction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Machine learning algorithms process vast datasets to create accurate climate models and forecasts.
                </p>
                <Link
                  href="/climate-modeling"
                  className="text-teal-600 hover:underline dark:text-teal-400 inline-flex items-center mt-4"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Wind className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle>Smart Grids</CardTitle>
                <CardDescription>Optimizing renewable energy systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Computer systems that manage and optimize wind, solar, and hybrid energy production and distribution.
                </p>
                <Link
                  href="/smart-grids"
                  className="text-teal-600 hover:underline dark:text-teal-400 inline-flex items-center mt-4"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Server className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>Computing's carbon footprint</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Examining the environmental costs of data centers, electronic waste, and digital infrastructure.
                </p>
                <Link
                  href="/environmental-impact"
                  className="text-teal-600 hover:underline dark:text-teal-400 inline-flex items-center mt-4"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BarChart className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-2" />
                <CardTitle>Data Visualization</CardTitle>
                <CardDescription>Ethical presentation of climate data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Exploring how data visualization can either clarify or mislead in climate science communication.
                </p>
                <Link
                  href="/ethical-visuals"
                  className="text-teal-600 hover:underline dark:text-teal-400 inline-flex items-center mt-4"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
