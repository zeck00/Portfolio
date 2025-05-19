import React from "react"
import { motion } from "framer-motion"
import { skills } from "../data/content.js"
import { Code2, Brain, Smartphone, Server, Star } from "lucide-react"
import animationConfig from "../utils/animationConfig.js"

const levelToStars = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4
}

const SkillBar = ({ name, level, emoji, delay }) => {
  const stars = levelToStars[level]

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-gray-200 flex items-center gap-2">
          {emoji} {name}
        </span>
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              size={16}
              color={i < stars ? "#0ea5e9" : "#374151"}
              fill={i < stars ? "#0ea5e9" : "none"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SkillCategory = ({ title, icon, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: animationConfig.duration.fast, delay }}
      className="glass-effect rounded-3xl p-8 hover:transform hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-sky-400/10 text-sky-400">{icon}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            emoji={skill.emoji}
            delay={delay + index * animationConfig.delay.short}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      skills: skills.filter(s => s.category === "frontend")
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: skills.filter(s => s.category === "mobile")
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain size={24} />,
      skills: skills.filter(s => s.category === "ai")
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: skills.filter(s => s.category === "backend")
    }
  ]

  return (
    <section id="skills" className="apple-section-dark py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: animationConfig.duration.fast }}
          className="text-center mb-16"
        >
          <h2 className="apple-heading text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and
            proficiency levels across different domains of software development
            and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * animationConfig.delay.medium}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
