import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

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
      videos: project.video?.url
        ? {
            url: project.video.url,
            type: 'video/mp4',
          }
        : undefined,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

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
    video: project.video?.url,
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

      <section className="page-wrap page-section pt-32 md:pt-36">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-5">
            <Link
              href="/#projects"
              className="button-text"
            >
              <ArrowLeft size={16} />
              Back to My Work
            </Link>

            <div className="surface-card rounded-[2rem] p-6 md:p-8">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="hero-chip">{project.category}</span>
                  <span className="eyebrow text-xs text-[color:var(--muted-soft)]">
                    Technical Notes
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="section-heading max-w-4xl">{project.title}</h1>
                  <p className="max-w-3xl text-[1rem] leading-8 text-[color:var(--muted)] md:text-[1.08rem]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="hero-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr),minmax(280px,0.95fr)] lg:items-start">
            <div className="surface-card rounded-[2rem] p-3 md:p-4">
              <div className="relative aspect-video overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--background-strong)]">
                {project.video?.url ? (
                  <video
                    src={project.video.url}
                    poster={project.video.poster || project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>

            <aside className="surface-card rounded-[2rem] p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="section-label">Technical</p>
                  <div className="space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                    {technicalSummary.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="section-label">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="hero-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="space-y-4">
              <p className="section-label">Overview</p>
              <div className="space-y-3 text-[1rem] leading-8 text-[color:var(--muted)]">
                {overviewLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {project.features.length > 0 && (
              <div className="surface-card rounded-[2rem] p-6 md:p-7">
                <p className="section-label">Key Features</p>
                <div className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <p key={feature} className="text-[0.98rem] leading-7 text-[color:var(--muted)]">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.enggdecs.length > 0 && (
              <div className="surface-card rounded-[2rem] p-6 md:p-7">
                <p className="section-label">Engineering Decisions</p>
                <div className="mt-4 space-y-3">
                  {project.enggdecs.map((decision) => (
                    <p key={decision} className="text-[0.98rem] leading-7 text-[color:var(--muted)]">
                      {decision}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {project.images.length > 0 && (
            <div className="space-y-4">
              <p className="section-label">Gallery</p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {project.images.map((image, index) => (
                  <div key={image} className="surface-card rounded-[1.8rem] p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem] border border-[color:var(--line)] bg-[color:var(--background-strong)]">
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
