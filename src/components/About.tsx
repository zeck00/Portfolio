import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Mail } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="apple-section-light py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="apple-heading text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            As an AI Engineer and Mobile App Developer, I bridge the gap between cutting-edge artificial intelligence and practical mobile applications. My journey in technology has been driven by a passion for creating innovative solutions that make a real difference in people's lives.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With expertise in Flutter development and machine learning, I've successfully delivered projects ranging from intelligent NLP systems to user-friendly mobile applications. My role as the President of the UOS ACM Student Chapter has further enhanced my leadership and community building skills.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <motion.a
              href="mailto:zalwsh@acm.org"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2 border-2 border-[#0EA5E9] text-[#0EA5E9] rounded-full hover:bg-[#0EA5E9] hover:text-white transition-colors"
            >
              <Mail className="mr-2" size={18} />
              Contact Me
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1zowTQnPWJnZjqbnsNBcHId8tu-E41ZSh/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <FileText className="mr-2" size={18} />
              View CV
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;