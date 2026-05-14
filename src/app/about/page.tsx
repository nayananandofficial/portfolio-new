import Image from 'next/image';

const strengths = [
  {
    title: 'What I Build',
    body:
      'Complete web applications, from the user-facing interface to the database and deployment layer behind it.',
  },
  {
    title: 'How I Solve Problems',
    body:
      'I start with product goals, simplify the architecture around them, and keep complexity only when it earns its place.',
  },
  {
    title: 'What I Deliver',
    body:
      'Working, deployed applications with maintainable structure, thoughtful UI, and real-world utility.',
  },
];

const story = [
  "I'm self-taught, which means everything I know came from building real products, breaking them, and learning what makes them hold up.",
  'I care about how software feels as much as how it functions, which is why I gravitate toward building complete products instead of isolated features.',
  'Right now I am focused on thoughtful tools and interfaces that solve genuine problems and still look sharp while doing it.',
];

const experienceItems = [
  'Built full-stack applications including admin dashboards, ordering systems, and AI interfaces.',
  'Designed API layers, async request handling, reusable data models, and validation-minded backend workflows.',
  'Deployed systems using PostgreSQL, Supabase, and modern frontend stacks with production-ready structure.',
];

const architectureSnippet = `Frontend (React / Next.js)
↓
API Layer (Node.js / Express)
↓
Database (PostgreSQL / Supabase)
↓
Deployment (Vercel / Render)`;

export default function AboutPage() {
  return (
    <section className="page-wrap page-section pt-32 md:pt-36">
      <div className="space-y-6 md:space-y-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr),minmax(320px,0.9fr)]">
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="space-y-5">
              <p className="section-label">About</p>
              <h1 className="section-heading max-w-3xl">
                I build complete products with equal attention to clarity, usability,
                and backend reliability.
              </h1>
              <div className="space-y-4">
                {story.map((paragraph) => (
                  <p key={paragraph} className="section-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-5 md:p-6">
            <div className="space-y-5">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--background-strong)]">
                <Image
                  src="/profile(2).png"
                  alt="Portrait of Nayan B Anand"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--secondary-soft)] p-4">
                <p className="section-label">Currently Building</p>
                <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                  SocialFlow
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  A cross-platform scheduling tool for creators who need cleaner
                  workflows and less friction between planning and publishing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="space-y-5">
              <p className="section-label">Experience</p>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)] md:text-3xl">
                    Full Stack Developer
                  </h2>
                  <span className="eyebrow text-xs text-[color:var(--muted-soft)]">
                    Personal Projects
                  </span>
                </div>

                <div className="space-y-3">
                  {experienceItems.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-[color:var(--line)] px-4 py-4"
                    >
                      <p className="eyebrow text-xs text-[color:var(--secondary)]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-[0.98rem] leading-7 text-[color:var(--muted)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="space-y-4">
              <p className="section-label">Architecture Snippet</p>
              <p className="section-copy">
                I like systems that stay readable as they grow. This is the mental
                model I usually optimize around.
              </p>
              <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--background-strong)] p-5">
                <pre className="whitespace-pre-wrap text-sm leading-8 text-[color:var(--accent-strong)]">
                  {architectureSnippet}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.title} className="surface-card rounded-[1.8rem] p-6">
              <p className="section-label">{item.title}</p>
              <p className="mt-4 text-[1rem] leading-7 text-[color:var(--muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
