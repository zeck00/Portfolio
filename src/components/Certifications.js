import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { certifications } from "../data/content.js"
import animationConfig from "../utils/animationConfig.js"

const Certifications = () => {
  return (
    <section className="bg-gradient-to-b from-[#0A192F]/60 to-[#0A192F]/90 py-24">
      <div className="container mx-auto px-4">
        <h2 className="apple-heading text-center mb-16 text-white">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: animationConfig.duration.fast, delay: index * animationConfig.delay.short }}
              className="glass-effect p-6 rounded-xl hover:scale-[1.02] transition-all group relative bg-black/40"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-white mb-2 pr-8">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="text-gray-600">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] 
                           hover:bg-[#0EA5E9] hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
