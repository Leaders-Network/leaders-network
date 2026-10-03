const insights = [
  {
    title: "Practical digital transformation patterns for 2026",
    category: "Digital Transformation",
    href: "/blogs",
  },
  {
    title: "Why cloud strategy matters for enterprise resilience",
    category: "Software Engineering",
    href: "/blogs",
  },
  {
    title: "Building trusted software delivery for regulated industries",
    category: "Quality Assurance",
    href: "/blogs",
  },
];

export default function Insights() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Insights</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Thoughtful technology perspective built for future-ready teams.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {insights.map((post) => (
            <article key={post.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-soft transition hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{post.category}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h3>
              <a href={post.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-500">
                Read article
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
