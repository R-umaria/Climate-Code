import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  links: {
    github?: string
    linkedin?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Ryan Witley",
    role: "Research and Visuals",
    bio: "Specializes in climate data research and creating informative visualizations that accurately represent complex climate trends.",
    image: "/assets/ryan-witley.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/ryan-witley/",
      email: "rwitley7037@conestogac.on.ca",
    },
  },
  {
    name: "Rishi Nimeshbhai Umaria",
    role: "Web Design & AI Integration",
    bio: "Focuses on creating intuitive user interfaces and integrating AI models for climate data analysis and visualization.",
    image: "/assets/rishi-umaria.jpg",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/rishiumaria/",
      email: "rumaria6371@conestogac.on.ca",
    },
  },
  {
    name: "Kahlib Stewart",
    role: "Content Writing",
    bio: "Translates complex scientific concepts into accessible content for diverse audiences, with a focus on climate science communication.",
    image: "/assets/kahlib-stewart.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/kahlib/",
      email: "kstewart6587@conestogac.on.ca",
    },
  },
  {
    name: "Krishi Nikeshkumar Patel",
    role: "Research and Citation",
    bio: "Conducts thorough research on climate science and computer science intersections, ensuring all content is accurately sourced and cited.",
    image: "/assets/krishi-nikeshkumar-patel.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/krishi-patel0211/",
      email: "kpatel0936@conestogac.on.ca",
    },
  },
  {
    name: "Thinh Nguyen",
    role: "Visuals and Formatting",
    bio: "Creates engaging visual elements and ensures consistent formatting across the platform for optimal user experience.",
    image: "/assets/thinh-nguyen.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/thinhnguyen2208/",
      email: "dnguyen4200@conestogac.on.ca",
    },
  },
  {
    name: "Donaben Barot",
    role: "Review and QA",
    bio: "Ensures accuracy, accessibility, and quality of all content through rigorous review processes and user testing.",
    image: "/assets/donaben-barot.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/dona-barot/",
      email: "dbarot5173@conestogac.on.ca",
    },
  },
]

const references = [
  {
    title: "Climate Change 2023: Synthesis Report",
    authors: "Intergovernmental Panel on Climate Change (IPCC)",
    year: "2023",
    link: "https://www.ipcc.ch/",
  },
  {
    title: "Machine Learning for Climate Science: Challenges and Opportunities",
    authors: "Monteleoni, C., Schmidt, G.A., et al.",
    year: "2021",
    journal: "Journal of Climate",
    link: "https://journals.ametsoc.org/",
  },
  {
    title: "Global Energy Consumption Database",
    organization: "International Energy Agency",
    year: "2022",
    link: "https://www.iea.org/",
  },
  {
    title: "Climate Change AI Dataset",
    organization: "Kaggle",
    year: "2022",
    link: "https://www.kaggle.com/",
  },
  {
    title: "Green Computing: Systems and Applications",
    authors: "Murugesan, S. & Gangadharan, G.R.",
    year: "2022",
    publisher: "IEEE Press",
    link: "https://www.ieee.org/",
  },
  {
    title: "Global Data Centre Energy Footprints",
    authors: "Devastator",
    year: "2025",
    organization: "Kaggle",
    link: "https://www.kaggle.com/",
  },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About the Team</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Climate+Code is a collaborative project exploring the intersection of computer science and climate change. Our
          team brings together expertise in research, design, content creation, and quality assurance to create
          resources that help people understand and address climate challenges.
        </p>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-100">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:w-1/3 p-4 flex justify-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-teal-600 dark:text-teal-400 mb-2">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.links.github && (
                      <Link
                        href={member.links.github}
                        className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={18} />
                      </Link>
                    )}
                    {member.links.linkedin && (
                      <Link
                        href={member.links.linkedin}
                        className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </Link>
                    )}
                    {member.links.email && (
                      <Link
                        href={`mailto:${member.links.email}`}
                        className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">References</h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <ul className="space-y-4">
              {references.map((ref, index) => (
                <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                  <p className="text-gray-900 dark:text-white font-medium">{ref.title}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {ref.authors || ref.organization}, {ref.year}
                    {ref.journal && `, ${ref.journal}`}
                    {ref.publisher && `, ${ref.publisher}`}
                  </p>
                  <Link
                    href={ref.link}
                    className="text-teal-600 hover:underline dark:text-teal-400 text-sm flex items-center"
                  >
                    View source <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mt-6">
            We are committed to using reliable, peer-reviewed sources in our work. If you have suggestions for
            additional resources or would like to contribute to our project, please contact us.
          </p>
        </section>
      </div>
    </div>
  )
}
