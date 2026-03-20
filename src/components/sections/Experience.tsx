const experienceItems = [
  'Built full-stack applications across admin dashboards, restaurant ordering flows, and AI product interfaces.',
  'Designed API layers, async request handling, reusable data models, and validation-driven backend workflows.',
  'Deployed working systems and integrated modern data platforms including PostgreSQL, Supabase, and backend-ready mock contracts.',
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Experience
            </h2>
            <p className="text-base text-white/65">
              Product-focused development grounded in real personal builds.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-7">
            <h3 className="text-xl font-semibold text-white">
              Full Stack Developer — Personal Projects
            </h3>
            <ul className="mt-4 space-y-3 text-white/70 leading-relaxed">
              {experienceItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
