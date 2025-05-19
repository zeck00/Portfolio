import React, { useState, useEffect } from "react"
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
import animationConfig from "../utils/animationConfig.js"

// Import the background image from src/assets
import bgImage from "../assets/bg1.png";

const Hero = () => {
  const scrollTo = useScrollTo()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.1
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 20%, rgba(0, 0, 0, 0.4) 100%)`,
          mixBlendMode: 'multiply'
        }}
      />

      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -5%) }
          20% { transform: translate(-10%, 5%) }
          30% { transform: translate(5%, -10%) }
          40% { transform: translate(-5%, 15%) }
          50% { transform: translate(-10%, 5%) }
          60% { transform: translate(15%, 0) }
          70% { transform: translate(0, 10%) }
          80% { transform: translate(-15%, 0) }
          90% { transform: translate(10%, 5%) }
        }
      `}</style>

      <ClickSpark
          sparkColor='#ffffff'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={200} 
          className="z-20"
        > 
        </ClickSpark>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: animationConfig.duration.medium }}
          className="mb-8 relative"
        >

        <ClickSpark
          sparkColor='#ffffff'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={200} 
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
          transition={{ delay: animationConfig.delay.short }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight"
        >
          Ziad Ahmad
        </motion.h1>

        <ClickSpark
          sparkColor='#ffffff'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={200} 
          className="z-20"
        > 
        </ClickSpark>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: animationConfig.delay.medium }}
          className="text-lg md:text-2xl text-gray-400 mb-8 font-light"
        >
          Full Stack Mobile App Developer • Content Creator • AI Engineer • Innovator
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: animationConfig.delay.medium + 0.05 }}
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
                className="glass-effect p-3 sm:p-4 rounded-2xl text-white transition-all duration-200 flex items-center justify-center"
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
            transition={{ delay: animationConfig.delay.long }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto glass-effect text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium
                     border border-[#0EA5E9] hover:bg-[#0EA5E9] transition-all duration-200"
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
          duration: animationConfig.infinity.duration
        }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.button>
      <ClickSpark
          sparkColor='#e4d4d4'
          sparkSize={10}
          sparkRadius={50}
          sparkCount={10}
          duration={200} 
          className="z-20"
        > 
        </ClickSpark>
    </motion.section>
  )
}

export default Hero
