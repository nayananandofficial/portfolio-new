import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/constants';

const socialLinks = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: SOCIAL_LINKS.github, Icon: Github },
  { label: 'X', href: SOCIAL_LINKS.x, Icon: Twitter },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="py-10 px-4">
      <div className="glass-card max-w-4xl mx-auto px-4 py-6 rounded-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-white font-semibold">Nayan Anand</p>
            <p className="text-sm text-white/60">
              Building focused full-stack products with clean frontend,
              backend, and data workflows.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/65">
              <Link href="/#about" className="hover:text-[#9fe870]">
                About
              </Link>
              <Link href="/#projects" className="hover:text-[#9fe870]">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-[#9fe870]">
                Contact
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/65 hover:text-[#9fe870]"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#9fe870]"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
