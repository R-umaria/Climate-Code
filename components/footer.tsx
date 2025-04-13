import Link from "next/link"
import { Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Climate+Code</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Exploring the intersection of computer science and climate change.
            </p>
            <div className="flex space-x-4">
              <Link
                href="mailto:contact@climateandcode.org"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/climate-modeling"
                  className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Climate Modeling
                </Link>
              </li>
              <li>
                <Link
                  href="/smart-grids"
                  className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Smart Grids
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">License</h3>
            <p className="text-gray-600 dark:text-gray-400">
              This site is licensed under{" "}
              <Link
                href="https://creativecommons.org/licenses/by-nc/4.0/"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Creative Commons BY-NC 4.0
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
