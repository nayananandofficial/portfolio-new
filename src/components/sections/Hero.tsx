'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

const techStack = [
  { name: 'React', Icon: FaReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'Node.js', Icon: FaNode },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Firebase', Icon: SiFirebase },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="glass-card p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, {'I\'m'}{' '}
                <span className="bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] bg-clip-text text-transparent">
                  Nayan Anand
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-white/80 mb-6">
                Full Stack Developer
              </h2>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                I create exceptional digital experiences through clean code and thoughtful design. 
                Specializing in React, Next.js, and modern web technologies, I transform ideas 
                into scalable, performant applications.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] text-gray-900 font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Mail size={20} />
                    Contact Me
                  </motion.button>
                </Link>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-card text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-4 rounded-3xl">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Nayan Anand"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Infinite Scroll */}
          <div className="mt-16 overflow-hidden">
            <p className="text-center text-white/60 mb-6 text-sm uppercase tracking-wider">
              Technologies I Work With
            </p>
            <div className="relative">
              <div className="flex animate-scroll">
                {[...techStack, ...techStack].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="glass-card px-6 py-4 rounded-xl mx-3 flex items-center gap-3 whitespace-nowrap"
                    whileHover={{ scale: 1.1 }}
                  >
                    <tech.Icon className="text-2xl text-white" />
                    <span className="text-white font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
