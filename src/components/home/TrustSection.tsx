export default function TrustSection() {
  const stats = [
    { label: "Enterprise-grade delivery", value: "Built for modern scale" },
    { label: "Technology focus", value: "Strategy, software, transformation" },
    { label: "Adaptive operations", value: "Designed for complex systems" },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Trusted capability</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Technology-led delivery with the precision of enterprise consulting.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We help organizations modernize their infrastructure, simplify software operations, and make strategic technology decisions without the noise.
            </p>
          </div>
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
