import React from "react"
import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { certifications } from "../data/content.js"

const CertificationItem = ({ name, issuer, date, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="glass-effect rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
  >
    <div className="flex items-start gap-3">
      <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400">
        <Award size={24} />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">{name}</h4>
        <p className="text-sm text-gray-400">
          <span className="font-medium text-sky-400">{issuer}</span> • {date}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 text-sm underline mt-2 block"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const Certifications = () => (
  <section
    id="certifications"
    className="bg-gradient-to-br from-gray-900 via-gray-80 to-gray-900 py-24 text-white"
  >
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="apple-heading text-white mb-4">Certifications</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of the certifications I've achieved, demonstrating my
          dedication to continuous learning and professional development.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((certification, index) => (
          <CertificationItem
            key={certification.name}
            {...certification}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Certifications
