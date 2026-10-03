import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-900 via-slate-950 to-transparent opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8 sm:space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm uppercase tracking-[0.24em] text-slate-300">
              Digital transformation for enterprise-grade technology
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technology that moves businesses forward with clarity, scale, and confidence.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                We partner with leaders to modernize operations, build reliable software, and deploy measurable digital transformation across complex enterprise systems.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contactus" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-600">
                Start a Conversation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-8 py-4 text-base font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-slate-800">
                Explore Our Solutions
              </Link>
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_40%)]" />
            <div className="relative grid gap-6">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-brand-600/15 px-3 py-1 text-sm font-medium text-brand-200">
                  Enterprise software. Strategic consulting.
                </span>
                <div className="rounded-3xl border border-slate-700 bg-slate-950/95 p-6 shadow-xl">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Modern technology platform
                  </div>
                  <div className="space-y-3">
                    <p className="text-xl font-semibold text-white">
                      Built to accelerate business decisions, reduce operational risk, and improve customer outcomes.
                    </p>
                    <p className="text-sm leading-6 text-slate-400">
                      Strong architecture, secure delivery, and measurable transformation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-700 bg-slate-950/95 p-5 shadow-xl transition hover:-translate-y-1">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Capable engineering</p>
                  <p className="mt-4 text-lg font-semibold text-white">Cloud-native applications</p>
                </div>
                <div className="rounded-3xl border border-slate-700 bg-slate-950/95 p-5 shadow-xl transition hover:-translate-y-1">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Strategic impact</p>
                  <p className="mt-4 text-lg font-semibold text-white">Technology-enabled transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
