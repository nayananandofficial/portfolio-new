import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-card mx-4 mb-4 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ananthakrishnan AN</h3>
            <p className="text-white/70">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link href="#projects" className="text-white/70 hover:text-white">Projects</Link></li>
              <li><Link href="#contact" className="text-white/70 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-white/70 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                 className="text-white/70 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:your@email.com"
                 className="text-white/70 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Ananthakrishnan AN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
