import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, Instagram, Music2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ziad-aloush/',
      hoverClass: 'hover:bg-linkedin',
    },
    {
      icon: Github,
      href: 'https://github.com/zeck00/zeck00',
      hoverClass: 'hover:bg-github',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/zeq_0',
      hoverClass: 'hover:bg-instagram',
    },
    {
      icon: Music2,
      href: 'https://tiktok.com/@zeq000',
      hoverClass: 'hover:bg-tiktok',
    },
  ];

  return (
    <section id="contact" className="apple-section-light py-24">
      <div className="container mx-auto px-4">
        <h2 className="apple-heading text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <Mail className="text-[#0EA5E9]" />
              <a href="mailto:zalwsh@acm.org" className="text-gray-700 hover:text-[#0EA5E9]">
                zalwsh@acm.org
              </a>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4"
            >
              <Phone className="text-[#0EA5E9]" />
              <a href="tel:+971547151059" className="text-gray-700 hover:text-[#0EA5E9]">
                +971 54 715 1059
              </a>
            </motion.div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-600 transition-all duration-300 ${link.hoverClass} p-2 rounded-lg`}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0EA5E9] transition-transform"
            />
            <motion.input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0EA5E9] transition-transform"
            />
            <motion.textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              whileFocus={{ scale: 1.01 }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0EA5E9] transition-transform"
            ></motion.textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#0EA5E9] text-white py-2 rounded-lg hover:bg-[#2563EB] transition-all flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
