'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNode, FaPython, FaDocker, FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiTailwindcss, 
  SiMongodb, SiPostgresql, SiFirebase, SiExpress, 
  SiRedis, SiGraphql, SiVercel, SiNetlify 
} from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'React', Icon: FaReact, category: 'Frontend' },
  { name: 'TypeScript', Icon: SiTypescript, category: 'Frontend' },
  { name: 'JavaScript', Icon: SiJavascript, category: 'Frontend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', Icon: FaNode, category: 'Backend' },
  { name: 'Express', Icon: SiExpress, category: 'Backend' },
  { name: 'Python', Icon: FaPython, category: 'Backend' },
  { name: 'GraphQL', Icon: SiGraphql, category: 'Backend' },
  
  // Database
  { name: 'MongoDB', Icon: SiMongodb, category: 'Database' },
  { name: 'PostgreSQL', Icon: SiPostgresql, category: 'Database' },
  { name: 'Firebase', Icon: SiFirebase, category: 'Database' },
  { name: 'Redis', Icon: SiRedis, category: 'Database' },
  
  // Tools
  { name: 'Git', Icon: FaGitAlt, category: 'Tools' },
  { name: 'Docker', Icon: FaDocker, category: 'Tools' },
  { name: 'Figma', Icon: FaFigma, category: 'Tools' },
  { name: 'Vercel', Icon: SiVercel, category: 'Tools' },
  { name: 'Netlify', Icon: SiNetlify, category: 'Tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="flex mb-8">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
              className="flex gap-6"
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={`skill-1-${index}`}
                  className="glass-card px-8 py-6 rounded-xl flex flex-col items-center justify-center min-w-[180px] group hover:scale-110 transition-transform cursor-pointer"
                >
                  <skill.Icon className="text-6xl text-white mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-white/60 text-sm mt-1">{skill.category}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex">
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
              className="flex gap-6"
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={`skill-2-${index}`}
                  className="glass-card px-8 py-6 rounded-xl flex flex-col items-center justify-center min-w-[180px] group hover:scale-110 transition-transform cursor-pointer"
                >
                  <skill.Icon className="text-6xl text-white mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-white/60 text-sm mt-1">{skill.category}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {['Frontend', 'Backend', 'Database', 'Tools'].map((category) => (
            <div key={category} className="glass-card px-6 py-3 rounded-full">
              <span className="text-white font-medium">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
