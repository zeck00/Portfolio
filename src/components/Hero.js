import React from "react"
import { motion } from "framer-motion"
import ClickSpark from "./Spark.js"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Music2
} from "lucide-react"
import { useScrollTo } from "../hooks/useScrollTo.js"

const Hero = () => {
  const scrollTo = useScrollTo()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/zeck00/zeck00",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ziad-aloush/",
      label: "LinkedIn"
    },
    {
      icon: Mail, 
      href: "mailto:zalwsh@acm.com",
      label: "Email"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/zeq_0",
      label: "Instagram"
    },
    {
      icon: Music2,
      href: "https://tiktok.com/@zeq000",
      label: "TikTok"
    }
  ]

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden apple-gradient"
    >
      <div className="absolute inset-0 bg'/assets/images/bg.png' bg-cover bg-center opacity-20" />

      <ClickSpark
          sparkColor='#ffffff'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={300} 
          className="z-20"
        > 
        </ClickSpark>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >

        <ClickSpark
          sparkColor='#ffffff'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={300} 
          className="z-20"
        > 
        </ClickSpark>
          <div className="w-48 h-48 mx-auto relative">
            <img
              src="https://drive.google.com/thumbnail?id=14Nl6mqtLRIDfjZe1kYt-4Abwu8qhBKxW"
              alt="Ziad Ahmad"
              className="rounded-full w-45 h-45 md:w-45 md:h-45 object-cover mx-auto mb-8 glow-effect"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight"
        >
          Ziad Ahmad
        </motion.h1>

        <ClickSpark
          sparkColor='#ffffff'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={300} 
          className="z-20"
        > 
        </ClickSpark>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-400 mb-8 font-light"
        >
          Full Stack Mobile App Developer • Content Creator • AI Engineer • Innovator
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="grid grid-cols-5 sm:flex sm:flex-row justify-center gap-3 sm:gap-6 px-4 max-w-sm mx-auto">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-3 sm:p-4 rounded-2xl text-white transition-all duration-300 flex items-center justify-center"
                aria-label={link.label}
              >
                <link.icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="w-full px-4 sm:px-0 max-w-xs sm:max-w-none mb-20 mx-auto">
          <motion.button
            onClick={() => window.open("https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nA2SiK4yXmI39Vbw9UJxrXv2vtLp1gpqszZ_HuhvUAXUEtWRr94KR9rvgvrMqbSwruFsPkYw8?gv=true", '_blank')}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto glass-effect text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium
                     border border-[#0EA5E9] hover:bg-[#0EA5E9] transition-all duration-300"
          >
            Book an appointment
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 z-10"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.button>
      <ClickSpark
          sparkColor='#e4d4d4'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={300} 
          className="z-20"
        > 
        </ClickSpark>
    </motion.section>
  )
}

export default Hero
