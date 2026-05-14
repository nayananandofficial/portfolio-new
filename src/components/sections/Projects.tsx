import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="page-wrap page-section">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="section-label">My Work</p>
          <h2 className="section-heading">
            Selected full-stack builds with product thinking underneath the polish.
          </h2>
          <p className="section-copy">
            A tighter set of projects that show how I approach interfaces, data
            workflows, and the engineering decisions that make a product feel stable.
          </p>
        </div>

        <div className="grid gap-5">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="surface-card rounded-[2rem] p-4 md:p-5"
            >
              <div className="grid gap-5 lg:grid-cols-[minmax(0,280px),minmax(0,1fr)] lg:items-center">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--background-strong)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="hero-chip">{project.category}</span>
                      <span className="eyebrow text-xs text-[color:var(--muted-soft)]">
                        {project.technologies.slice(0, 3).join(' • ')}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-block text-2xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)] hover:text-[color:var(--accent-strong)] md:text-3xl"
                      >
                        {project.title}
                      </Link>
                      <p className="text-[1rem] leading-7 text-[color:var(--muted)]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="button-primary"
                    >
                      View Details
                      <ArrowUpRight size={16} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        Live Site
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-text"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
