'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import useScrollDirection from '@/hooks/useScrollDirection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="px-4 pt-4">
        <div className="glass-card max-w-4xl mx-auto px-4 py-3 rounded-2xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-base font-semibold text-white">
              NBA
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/72 hover:text-[#9fe870]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen((open) => !open)}
              className="md:hidden text-white/85 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-white/75 hover:text-[#9fe870]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
