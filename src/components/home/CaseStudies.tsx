const caseStudies = [
  {
    title: "Modernizing enterprise operations",
    industry: "Financial Services",
    challenge: "Siloed systems slowed decision-making and risk management.",
    solution: "Delivered a cloud-aligned platform, automation, and integrated analytics.",
    outcome: "Improved operational visibility and reduced cycle time for core processes.",
  },
  {
    title: "Scaling a digital product platform",
    industry: "Technology",
    challenge: "Legacy architecture could not support growth or secure customer data.",
    solution: "Rebuilt with modular microservices, API security, and DevOps automation.",
    outcome: "Enabled scalable launches and continuous release confidence.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Our work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Case studies framed by challenge, solution, and measurable impact.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.title} className="rounded-[2rem] border border-slate-700 bg-slate-900/95 p-8 shadow-soft transition hover:-translate-y-1">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center rounded-full bg-brand-600/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">
                  {caseStudy.industry}
                </div>
                <h3 className="text-2xl font-semibold text-white">{caseStudy.title}</h3>
                <div className="grid gap-6 text-sm leading-7 text-slate-300 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Challenge</p>
                    <p className="mt-3">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Solution</p>
                    <p className="mt-3">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Impact</p>
                    <p className="mt-3">{caseStudy.outcome}</p>
                  </div>
                </div>
                <a href="/contactus" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-brand-200">
                  View details
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
