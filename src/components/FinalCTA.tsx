import { ArrowRight } from 'lucide-react';

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl gradient-hero px-6 py-16 md:py-24">
          <div className="absolute inset-0 gradient-blue-radial" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-electric-500/20 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-electric-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Find Your Next Mobile Deal?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Explore phones, SIM plans and mobile deals in one place.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection('#phones')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-electric-600 hover:shadow-xl hover:shadow-electric-500/40 active:scale-95"
              >
                Browse Phone Deals
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#sim-only')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 glass px-7 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
              >
                Explore SIM Only
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
