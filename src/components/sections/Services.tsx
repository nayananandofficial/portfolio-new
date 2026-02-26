'use client';

import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Database, Cloud, Palette } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    icon: Code,
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'Custom Animations',
    ],
    pricing: 'Starting at $2000',
  },
  {
    id: 2,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs for your applications',
    icon: Server,
    features: [
      'Scalable Architecture',
      'Complete Documentation',
      'Security Best Practices',
      'Database Integration',
    ],
    pricing: 'Starting at $1500',
  },
  {
    id: 3,
    title: 'Mobile-First Design',
    description: 'Progressive web apps that work seamlessly on all devices',
    icon: Smartphone,
    features: [
      'PWA Development',
      'Offline Support',
      'Push Notifications',
      'App-like Experience',
    ],
    pricing: 'Starting at $2500',
  },
  {
    id: 4,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization',
    icon: Database,
    features: [
      'Schema Design',
      'Query Optimization',
      'Migration Services',
      'Data Modeling',
    ],
    pricing: 'Custom Quote',
  },
  {
    id: 5,
    title: 'Cloud Deployment',
    description: 'Deploy and scale your applications on cloud platforms',
    icon: Cloud,
    features: [
      'CI/CD Pipeline',
      'Auto Scaling',
      'Performance Monitoring',
      'Cost Optimization',
    ],
    pricing: 'Starting at $1000',
  },
  {
    id: 6,
    title: 'UI/UX Consultation',
    description: 'Design systems and user experience optimization',
    icon: Palette,
    features: [
      'Wireframing',
      'Prototyping',
      'User Research',
      'Design Systems',
    ],
    pricing: 'Starting at $1200',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-xl text-white/70">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c5ffb8] to-[#f2b8ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-gray-900" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/70 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-white/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <p className="text-[#c5ffb8] font-semibold">{service.pricing}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] text-gray-900 font-semibold rounded-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
