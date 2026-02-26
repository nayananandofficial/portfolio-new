'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70">
            Showcasing my best work and creative solutions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  
                  {/* GitHub Link Overlay */}
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 glass-card p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="text-white" size={24} />
                    </a>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <span className="text-[#c5ffb8] font-semibold text-sm uppercase tracking-wider">
                    {currentProject.category}
                  </span>
                  
                  <h3 className="text-4xl font-bold text-white mt-2 mb-4">
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass-card px-4 py-2 rounded-lg text-white text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Link href={`/projects/${currentProject.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] text-gray-900 font-semibold rounded-lg"
                      >
                        View Details
                      </motion.button>
                    </Link>
                    
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 glass-card text-white font-semibold rounded-lg flex items-center gap-2"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </motion.button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-card p-4 rounded-full hover:scale-110 transition-transform"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-card p-4 rounded-full hover:scale-110 transition-transform"
            aria-label="Next project"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
