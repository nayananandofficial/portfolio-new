'use client';

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import EmailLink from './EmailLink';
import { SOCIAL_LINKS } from '@/lib/constants';

const socialLinks = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: FaLinkedin },
  { label: 'GitHub', href: SOCIAL_LINKS.github, Icon: FaGithub },
  { label: 'X', href: SOCIAL_LINKS.x, Icon: FaXTwitter },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: FaInstagram },
];

export default function Contact() {
  return (
    <section id="contact" className="page-wrap page-section pb-20">
      <div className="surface-card rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr),minmax(280px,0.85fr)] lg:items-end">
          <div className="space-y-4">
            <p className="section-label">Contact</p>
            <h2 className="section-heading">
              Let&apos;s build something sharp, useful, and ready to ship.
            </h2>
            <p className="section-copy max-w-2xl">
              If you&apos;re building a product, tightening an interface, or need
              a full-stack developer who can carry an idea from concept to working
              delivery, I&apos;m open to the conversation.
            </p>
            <EmailLink />
          </div>

          <div className="surface-panel rounded-[1.8rem] p-5">
            <div className="space-y-4">
              <p className="section-label">Find Me Online</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                Available for product collaborations, freelance builds, and
                thoughtful frontend-plus-backend work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
