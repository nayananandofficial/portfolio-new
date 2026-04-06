'use client';

import Image from 'next/image';
import Link from 'next/link';

const techStack = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
];

export default function Hero() {
  return (
    <section id="home" className="py-12 pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card rounded-3xl px-6 py-12 md:px-10 text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border border-white/10">
            <Image
              src="/profile(2).png"
              alt="Nayan Anand"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Nayan B Anand
            </h1>
            <p className="text-lg text-white/80">Full Stack Developer</p>
            <p className="text-base italic text-white/65 max-w-lg mx-auto">
              I build complete web products, from interface to database, that actually work in the real world.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-full border border-[#9fe870]/40 px-5 py-2.5 text-sm font-medium text-[#9fe870] hover:bg-[#9fe870]/10"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45 mb-3">
              Tech Stack
            </p>
            <div className="overflow-x-auto">
              <p className="whitespace-nowrap text-sm text-white/65">
                {techStack.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
