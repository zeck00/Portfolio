import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Users,
  Calendar,
  Trophy,
  ChevronRight,
  Database,
  Globe,
  Code2,
  Layers,
} from "lucide-react"
import { projects } from "../data/content.js"
import animationConfig from "../utils/animationConfig.js"

const getTechIcon = (techName) => {
  const iconMap = {
    'Flutter': Layers,
    'Firebase': Database,
    'Google Maps API': Globe,
    'React': () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
      </svg>
    ),
    'Node.js': () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    ),
    'MongoDB': () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    ),
  }

  const Icon = iconMap[techName] || Code2
  return Icon
}

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="inline-block px-6 py-3 text-[#0EA5E9] glass-effect rounded-full hover:scale-105 transition-all"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    )
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: animationConfig.duration.fast }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/20 to-black/90 text-white">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-[#0EA5E9] hover:text-white transition-colors group"
          >
            <ArrowLeft
              className="mr-2 group-hover:-translate-x-1 transition-transform"
              size={20}
            />
            Back to Projects
          </Link>
          <div className="flex gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-2 rounded-full hover:text-[#0EA5E9] transition-colors"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-2 rounded-full hover:text-[#0EA5E9] transition-colors"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-3xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-[40vh] md:h-[60vh]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div {...fadeInUp} className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold flex items-center gap-3">
                  {project.emoji} {project.title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 text-sm glass-effect rounded-full text-[#0EA5E9] hover:scale-105 transition-transform cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Meta Info */}
                <div className="flex flex-wrap gap-6 text-gray-300 pt-4">
                  {project.teamSize && (
                    <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                      <Users size={18} className="text-[#0EA5E9]" />
                      <span>Team of {project.teamSize}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                      <Calendar size={18} className="text-[#0EA5E9]" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                      <Trophy size={18} className="text-[#0EA5E9]" />
                      <span>{project.role}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-16">
            <div className="max-w-4xl mx-auto">
              <motion.p
                {...fadeInUp}
                className="text-xl text-gray-300 leading-relaxed"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Features Section */}
            {project.features && (
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="text-[#0EA5E9]">Key Features</span>
                  <ChevronRight className="text-[#0EA5E9]" size={20} />
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="glass-effect p-6 rounded-xl hover:scale-[1.02] transition-transform"
                    >
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technologies Section */}
            {project.technologies && (
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="text-[#0EA5E9]">Tech Stack</span>
                  <ChevronRight className="text-[#0EA5E9]" size={20} />
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.technologies.map((tech, index) => {
                    const TechIcon = getTechIcon(tech.name)
                    return (
                      <div
                        key={index}
                        className="glass-effect p-6 rounded-xl space-y-3 hover:scale-[1.02] transition-transform"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#0EA5E9]/10">
                            <TechIcon size={24} className="text-[#0EA5E9]" />
                          </div>
                          <h3 className="font-semibold text-lg text-[#0EA5E9]">
                            {tech.name}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {tech.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12">
                {project.challenges && (
                  <div>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                      <span className="text-[#0EA5E9]">Challenges</span>
                      <ChevronRight className="text-[#0EA5E9]" size={20} />
                    </h2>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div
                          key={index}
                          className="glass-effect p-6 rounded-xl hover:scale-[1.02] transition-transform"
                        >
                          <p className="text-gray-300">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.solutions && (
                  <div>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                      <span className="text-[#0EA5E9]">Solutions</span>
                      <ChevronRight className="text-[#0EA5E9]" size={20} />
                    </h2>
                    <div className="space-y-4">
                      {project.solutions.map((solution, index) => (
                        <div
                          key={index}
                          className="glass-effect p-6 rounded-xl hover:scale-[1.02] transition-transform"
                        >
                          <p className="text-gray-300">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetails
