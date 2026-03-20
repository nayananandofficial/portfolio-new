const stats = [
  '3 Apps Built',
  '9 Features Shipped',
  'Deployed on Vercel',
  'PostgreSQL + Supabase',
];

const blocks = [
  {
    title: 'What I Build',
    body: [
      'End-to-end web applications covering frontend, backend, and data layers.',
      'I build interfaces using React and Next.js, design APIs with Node.js and Express, and manage data using PostgreSQL or MongoDB.',
      'I focus on building complete, production-ready systems instead of isolated UI components.',
    ],
  },
  {
    title: 'How I Solve Problems',
    body: [
      'I design clean API architectures, structure data flow, and handle edge cases like async operations, validation, and error handling.',
      'I focus on predictable state management, modular backend services, and scalable system design.',
    ],
  },
  {
    title: 'What I Deliver',
    body: [
      'Fast, reliable, and user-focused applications.',
      'I ship features with clean code, maintainable structure, and optimized performance across frontend and backend systems.',
    ],
  },
];

const architectureSnippet = `Frontend (React / Next.js)
    |
    v
API Layer (Node.js / Express)
    |
    v
Database (PostgreSQL / Supabase)
    |
    v
Deployment (Vercel / Render)`;

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-10 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              About Me
            </h2>
            <p className="text-base text-white/65 max-w-2xl mx-auto">
              I build end-to-end web applications from UI to database and
              deployment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {stats.map((stat) => (
              <div
                key={stat}
                className="glass-card rounded-full px-4 py-2 text-sm text-white/75"
              >
                {stat}
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {blocks.map((block) => (
              <div
                key={block.title}
                className="max-w-2xl mx-auto text-left glass-card rounded-2xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {block.title}
                </h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  {block.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-left glass-card rounded-2xl p-6 bg-black/30">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45 mb-4">
              Architecture Snippet
            </p>
            <pre className="font-mono text-sm text-[#e6ffd9] whitespace-pre-wrap leading-7">
              {architectureSnippet}
            </pre>
          </div>

          <div className="max-w-2xl mx-auto text-left glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45 mb-2">
              Recent Highlight
            </p>
            <p className="text-white/75 leading-relaxed">
              Built a full-stack task management system with drag-and-drop UI,
              Supabase backend, and persistent state handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
