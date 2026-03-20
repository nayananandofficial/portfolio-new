import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Projects
            </h2>
            <p className="text-base text-white/65">
              A focused selection of full-stack builds, internal tools, and
              product demos.
            </p>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="glass-card rounded-2xl p-5 md:p-6"
              >
                <div className="flex flex-col md:flex-row gap-5 md:items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block md:w-44 md:flex-shrink-0"
                  >
                    <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="min-w-0 flex-1 space-y-3">
                    <div className="space-y-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-block text-2xl font-semibold text-white hover:text-[#9fe870]"
                      >
                        {project.title}
                      </Link>
                      <p className="text-white/68">{project.description}</p>
                      <p className="text-sm text-white/52">
                        Tech: {project.technologies.join(' • ')}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-[#9fe870] hover:text-[#b6f48f]"
                      >
                        Details
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#9fe870]/30 px-4 py-2 text-white/80 hover:border-[#9fe870]/60 hover:text-white"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-white/75 hover:border-white/30 hover:text-white"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
