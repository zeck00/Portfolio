import React from "react"
import { motion } from "framer-motion"
import { projects } from "../data/content.js"
import { useNavigate } from "react-router-dom"
import TiltedCard from "./TiltedCard.js"

const Projects = () => {
  const navigate = useNavigate()

  return (
    <section id="projects" className="bg-gradient-to-b from-black/20 to-black/90 py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="apple-heading text-center mb-16 text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                showTooltip={false}
                containerHeight="250px"
                containerWidth="100%"
                imageHeight="250px"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={15}
                showMobileWarning={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full p-6 bg-gradient-to-b from-black/50 to-black/90 rounded-[15px] flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
                      {project.emoji} {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-white/20 rounded-full text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
