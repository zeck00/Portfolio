import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, Trophy } from 'lucide-react';
import { projects } from '../data/content';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

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
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/"
          className="inline-flex items-center text-[#0EA5E9] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-3xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-[50vh] md:h-[70vh]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div {...fadeInUp} className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold flex items-center gap-3">
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
                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span>Team of {project.teamSize}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{project.duration}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-2">
                      <Trophy size={18} />
                      <span>{project.role}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <motion.p 
                {...fadeInUp}
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              >
                {project.description}
              </motion.p>

              <div className="space-y-16">
                {/* Features Section */}
                {project.features && (
                  <motion.div {...fadeInUp}>
                    <h2 className="text-3xl font-bold mb-6 text-[#0EA5E9]">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-4">
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
                    <h2 className="text-3xl font-bold mb-6 text-[#0EA5E9]">Tech Stack</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.technologies.map((tech, index) => (
                        <div 
                          key={index}
                          className="glass-effect p-6 rounded-xl space-y-2 hover:scale-[1.02] transition-transform"
                        >
                          {tech.icon && <img src={tech.icon} alt={tech.name} className="w-8 h-8 mb-3" />}
                          <h3 className="font-semibold text-lg">{tech.name}</h3>
                          <p className="text-gray-400 text-sm">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Challenges & Solutions */}
                {(project.challenges || project.solutions) && (
                  <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-8">
                    {project.challenges && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#0EA5E9]">Challenges</h2>
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
                        <h2 className="text-3xl font-bold mb-6 text-[#0EA5E9]">Solutions</h2>
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

                {/* Action Buttons */}
                <motion.div {...fadeInUp} className="flex flex-wrap gap-4 pt-8">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-[#0EA5E9] text-white rounded-full hover:bg-[#2563EB] transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 glass-effect rounded-full hover:border-[#0EA5E9] transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      View Source
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;