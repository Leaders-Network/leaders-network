const capabilities = [
  "Software Engineering",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "AI & Automation",
  "Cybersecurity",
  "Quality Engineering",
];

export default function Capabilities() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Serious technical capability for modern enterprise challenges.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We combine software craftsmanship, infrastructure expertise, and quality discipline to keep digital initiatives on track.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6 shadow-soft transition hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Capability</p>
                <p className="mt-4 text-lg font-semibold text-white">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
