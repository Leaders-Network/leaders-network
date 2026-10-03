const steps = [
  {
    title: "Discover",
    description: "Understand business objectives, users, and current technology landscape.",
  },
  {
    title: "Strategize",
    description: "Design the transformation roadmap, architecture, and delivery approach.",
  },
  {
    title: "Build",
    description: "Engineer and validate the solution with performance, security, and reliability in mind.",
  },
  {
    title: "Transform",
    description: "Deploy the solution, optimize operations, and enable sustained improvement.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A structured journey from insight to enterprise impact.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500 text-base font-semibold text-white">
                {`0${index + 1}`}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
