import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Instagram, Music2 } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

const Hero = () => {
  const scrollTo = useScrollTo();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/zeck00/zeck00',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ziad-aloush/',
    },
    {
      icon: Mail,
      href: 'mailto:zalwsh@acm.com',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/zeq_0',
    },
    {
      icon: Music2,
      href: 'https://tiktok.com/@zeq000',
    },
  ];

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden apple-gradient"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=3353&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 mx-auto relative">
            <img
              src="../../assets/pfp_en.png"
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

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
        >
          Full Stack Mobile App Developer • AI Engineer • Innovator
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect p-4 rounded-2xl text-white transition-all duration-300"
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollTo('projects')}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-effect text-white px-8 py-4 rounded-full text-lg font-medium 
                     border border-[#0EA5E9] hover:bg-[#0EA5E9] transition-all duration-300"
        >
          Explore My Work
        </motion.button>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 z-10"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.button>
    </motion.section>
  );
};

export default Hero;
