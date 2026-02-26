import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
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
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.longDescription,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.longDescription,
    image: project.image,
    author: {
      '@type': 'Person',
      name: 'Ananthakrishnan AN',
    },
    url: `https://your-domain.com/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white hover:text-[#c5ffb8] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="glass-card p-8 md:p-12 rounded-3xl mb-8">
            <span className="text-[#c5ffb8] font-semibold text-sm uppercase tracking-wider">
              {project.category}
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card text-white font-semibold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] text-gray-900 font-semibold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Main Image */}
          <div className="glass-card p-4 rounded-3xl mb-8">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Technologies */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Images */}
            <div className="lg:col-span-2 space-y-4">
              {project.images?.map((image, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-2xl"
                >
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="glass-card p-8 md:p-12 rounded-3xl mb-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 text-sm font-bold">
                      {index + 1}
                    </span>
                  </span>
                  <span className="text-white/80 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-white/70 leading-relaxed">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="text-white/70 leading-relaxed">
                    • {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
