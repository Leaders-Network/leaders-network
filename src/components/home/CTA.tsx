export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-brand-700 via-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 text-center shadow-soft backdrop-blur-xl sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Ready to move forward?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Have a technology challenge? Let’s solve it together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Book a consultation to discuss your business priorities and define a practical path for technology-led growth.
          </p>
          <a href="/contactus" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100">
            Start a Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
