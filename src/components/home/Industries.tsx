const industries = [
  "Financial Services",
  "Government",
  "Healthcare",
  "Professional Services",
  "Technology",
  "Manufacturing",
];

export default function Industries() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Industries we serve</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Practical experience across enterprise and public sector domains.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-brand-300">
              <p className="text-lg font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
