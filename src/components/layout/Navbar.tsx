'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { useTheme } from '@/components/theme/ThemeProvider';

function NavItem({
  href,
  label,
  external,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const className =
    'text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--foreground)]';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { mounted, theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="page-wrap pt-4">
        <div className="nav-shell relative rounded-[1.75rem] px-4 py-3 md:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 md:min-w-[28rem]">
              <button
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--foreground)] md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={19} /> : <Menu size={19} />}
              </button>

              <div className="hidden md:flex items-center gap-5">
                {NAV_LINKS.map((link) => (
                  <NavItem
                    key={link.name}
                    href={link.href}
                    label={link.name}
                    external={link.external}
                  />
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold tracking-[-0.08em] text-[color:var(--foreground)]"
              data-navbar-brand-target
              style={{
                opacity: 'calc(0.14 + (var(--brand-progress) * 0.86))',
              }}
            >
              Nay4n
            </Link>

            <button
              onClick={toggleTheme}
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--background-elevated)] text-[color:var(--foreground)]"
              aria-label={
                mounted && theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title={
                mounted && theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {mounted && theme === 'dark' ? (
                <SunMedium size={18} />
              ) : (
                <MoonStar size={18} />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="mt-4 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--background-strong)] p-4 md:hidden">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <NavItem
                    key={link.name}
                    href={link.href}
                    label={link.name}
                    external={link.external}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
