'use client';

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import EmailLink from './EmailLink';
import { SOCIAL_LINKS } from '@/lib/constants';

const socialLinks = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: SOCIAL_LINKS.github, Icon: Github },
  { label: 'X', href: SOCIAL_LINKS.x, Icon: Twitter },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: Instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card rounded-3xl px-6 py-10 md:px-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Get in touch
            </h2>
            <EmailLink />
            <p className="text-sm text-white/55">or find me on</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/75 hover:border-[#9fe870]/45 hover:text-[#9fe870]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
