
const blocks = [
  {
    title: 'What I Build',
    body: `Complete web applications : From the interface a user sees to the database storing their data. I'm comfortable across the full stack and I build things end to end, not just the front or back in isolation.`
  },
  {
    title: 'How I Solve Problems',
    body: `I start by understanding what the product actually needs to do, then I work backwards into the architecture. I'd rather build the right thing simply than the wrong thing with complexity.`
  },
  {
    title: 'What I Deliver',
    body: `Working, deployed applications with clean code structure and maintainable architecture. Not prototypes. Not demos. Things that run.`
  },
];

const architectureSnippet = `Frontend (React / Next.js)
↓
API Layer (Node.js / Express)
↓
Database (PostgreSQL / Supabase)
↓
Deployment (Vercel / Render)`;

const aboutScript = [
{line: `I'm self-taught, which means everything I know came from building real things, breaking them, and figuring out why.`},
{line: `I started with curiosity and ended up with a full stack - React, Next.js, Node.js, PostgreSQL, Supabase, not from courses, but from projects that needed to actually work.`},
{line: `I care about how things look and how they function equally. That's rare for a backend-comfortable developer, and it's why I gravitate toward building complete products rather than isolated features.`},
{line: `Right now I&apos;m focused on building tools that solve real problems, not just things that look good in a portfolio.`}
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-10 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              About Me
            </h2>
            <p className="text-base text-white/65 max-w-xl mx-auto">
              {aboutScript.map((item, idx) => (
                <span key={idx} className="block italic mb-3">
                  {item.line}
                </span>
              ))}
            </p>
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
                <div className="italic space-y-4 text-white/70 leading-relaxed">
                  {Array.isArray(block.body) ? (
                    <ul className="list-disc list-inside space-y-2">
                      {block.body.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="italic">{block.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center glass-card rounded-2xl p-6 bg-black/30">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45 mb-4">
              Architecture Snippet
            </p>
            <pre className="font-mono text-sm text-[#e6ffd9] whitespace-pre-wrap leading-7">
              {architectureSnippet}
            </pre>
          </div>

          <div className="max-w-2xl mx-auto text-left glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45 mb-2">
              Currently building
            </p>
            <p className="text-white/75 leading-relaxed italic">
              SocialFlow — a cross-platform content scheduling tool for creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
