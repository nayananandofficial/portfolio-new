import Link from 'next/link';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { CONTACT_EMAIL, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const socialLinks = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: SOCIAL_LINKS.github, Icon: Github },
  { label: 'X', href: SOCIAL_LINKS.x, Icon: Twitter },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="page-wrap pb-8">
      <div className="surface-card rounded-[1.8rem] px-5 py-6 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold tracking-[-0.05em] text-[color:var(--foreground)]">
              Nay4n
            </p>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)]">
              Building focused full-stack products with strong interfaces, clean
              architecture, and a light-first portfolio experience.
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <div className="flex flex-wrap gap-4 text-sm text-[color:var(--muted)] md:justify-end">
              {NAV_LINKS.filter((link) => link.name !== 'Home').map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--foreground)]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-[color:var(--foreground)]"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
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
