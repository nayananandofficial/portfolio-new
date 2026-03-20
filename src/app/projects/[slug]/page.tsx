import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const overviewLines = project.longDescription
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const technicalSummary = overviewLines.slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    author: {
      '@type': 'Person',
      name: 'Nayan B Anand',
    },
    url: `https://your-domain.com/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="space-y-6 text-center">
            <div className="text-left">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#9fe870]"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                {project.title}
              </h1>
              <p className="text-base text-white/65 max-w-2xl mx-auto">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#9fe870] px-5 py-2.5 text-sm font-medium text-[#09110d] hover:bg-[#b4f58b]"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/30 hover:text-white"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.65fr),minmax(280px,1fr)] gap-5 items-start">
            <div className="glass-card rounded-2xl p-3">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <aside className="glass-card rounded-2xl p-6 space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Technical Details
                </p>
                <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                  {technicalSummary.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Tools & Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9fe870] px-5 py-2.5 text-sm font-medium text-[#09110d] hover:bg-[#b4f58b]"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/30 hover:text-white"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </aside>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Project Overview
            </h2>
            <div className="space-y-3 text-white/70 leading-relaxed">
              {overviewLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.features.length > 0 && (
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3 text-white/70 leading-relaxed">
                  {project.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.enggdecs.length > 0 && (
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Engineering Decisions
                </h2>
                <ul className="space-y-3 text-white/70 leading-relaxed">
                  {project.enggdecs.map((decision) => (
                    <li key={decision}>- {decision}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {project.images.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white text-center">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div key={image} className="glass-card rounded-2xl p-3">
                    <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <Image
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
