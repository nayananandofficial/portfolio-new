'use client';

import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Heart, Zap } from 'lucide-react';

const aboutBoxes = [
  {
    id: 1,
    title: "What I do?",
    icon: Code,
    content: "I am a web developer specializing in both front-end and back-end web applications, with a stronger focus on backend technologies. I build complex web applications and optimize them for performance. My coding abilities include creating some decent front-end applications, but my passion lies in mastering back-end development.",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "How I reached here?",
    icon: Lightbulb,
    content: "My coding journey began with a friend, starting from the basics of HTML, CSS, and JavaScript. Over time, I progressed to back-end technologies, learning about databases and APIs, and explored frameworks like React, Node.js, and Express.js. A pivotal experience was building an e-commerce website using these technologies.",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "What I can provide for you?",
    icon: Target,
    content: "I can create both static and dynamic websites tailored to your specific needs. My experience includes building an e-commerce application where I develop the client side, integrate APIs, and manage the database. I am dedicated to staying updated with advanced web technologies.",
    color: "from-pink-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "What I have learned so far?",
    icon: Zap,
    content: "Through my journey, I have mastered essential web development skills and concepts, including front-end frameworks, database management, and API integration. I've learned how to solve coding challenges efficiently and gained experience through practical projects.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 5,
    title: "Why I'm doing this?",
    icon: Heart,
    content: "I have a strong interest in the technical aspects of programming and a desire to continuously learn and grow my skills. With the emergence of AI, my learning experience has deepened my fascination with technology and reinforced my commitment to developing innovative web applications.",
    color: "from-indigo-500/20 to-purple-500/20"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            "Embrace the journey of learning and creation; With passion and perseverance, 
            you have the power to turn visions into reality."
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutBoxes.map((box, index) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-2xl ${
                box.id === 1 ? 'md:col-span-2' : ''
              } ${
                box.id === 5 ? 'lg:col-span-3' : ''
              }`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${box.color} flex items-center justify-center mb-6`}>
                <box.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{box.title}</h3>
              <p className="text-white/70 leading-relaxed">{box.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
