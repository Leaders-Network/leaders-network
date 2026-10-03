import Link from "next/link";

const solutions = [
  {
    title: "Strategic Consulting",
    description: "Align technology decisions with business goals, reduce complexity, and define execution-ready transformation roadmaps.",
    icon: "🧭",
    href: "/services",
  },
  {
    title: "Software Development",
    description: "Engineered applications, API platforms, and integration systems built for reliability, security, and long-term growth.",
    icon: "💠",
    href: "/services",
  },
  {
    title: "Digital Transformation",
    description: "Modernize operations, systems, and customer experiences through pragmatic process, platform, and cloud delivery.",
    icon: "⚙️",
    href: "/services",
  },
  {
    title: "Quality Assurance",
    description: "Ensure software quality, security, performance, and compliance through disciplined testing and validation.",
    icon: "✔️",
    href: "/services",
  },
  {
    title: "IT Consulting & Strategy",
    description: "Build resilient infrastructure, enterprise architecture, and IT roadmaps for sustainable technology advantage.",
    icon: "🧩",
    href: "/services",
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">What we do</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Delivering comprehensive technology solutions with strategic intent.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our services are designed to treat technology as a business asset, not a commodity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <Link key={solution.title} href={solution.href} className="group rounded-[1.75rem] border border-slate-200 bg-slate-950/95 p-8 text-white transition hover:-translate-y-1 hover:border-brand-500 hover:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-600 text-2xl shadow-soft transition group-hover:bg-brand-500">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{solution.description}</p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition group-hover:text-brand-200">
                Learn more
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
