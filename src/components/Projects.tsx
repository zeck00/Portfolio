import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="apple-section-dark py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="apple-heading text-center mb-16 text-white">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="glass-effect rounded-3xl overflow-hidden transition-all duration-300 
                            hover:transform hover:scale-[1.02]">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
                    {project.emoji} {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1.5 text-sm glass-effect rounded-full text-sky-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} className="mr-1" />
                        Source
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;