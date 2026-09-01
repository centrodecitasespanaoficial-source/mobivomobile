import { ArrowRight, Signal, Wifi, Smartphone, CheckCircle2 } from 'lucide-react';

const trustIndicators = [
  { icon: Signal, label: 'UK Deals' },
  { icon: Wifi, label: '5G Available' },
  { icon: Smartphone, label: 'SIM Only' },
  { icon: CheckCircle2, label: 'SIM Free' },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 gradient-blue-radial" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-electric-500/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-electric-600/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 glass px-4 py-2 text-sm font-medium text-white/90">
              <span className="flex h-2 w-2 rounded-full bg-success-400" />
              The UK mobile deals marketplace
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Find Your Perfect{' '}
              <span className="bg-gradient-to-r from-electric-400 to-electric-200 bg-clip-text text-transparent">
                Phone & SIM Deal
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Compare phones, SIM plans and great-value mobile deals from leading UK networks.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection('#phones')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-electric-600 hover:shadow-xl hover:shadow-electric-500/40 active:scale-95"
              >
                Shop Phone Deals
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#sim-only')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 glass px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-95"
              >
                View SIM Deals
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 glass px-4 py-2.5 text-sm font-medium text-white/80"
                >
                  <Icon className="h-4 w-4 text-electric-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-scale-in">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-10 rounded-full bg-electric-500/20 blur-3xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-3xl border border-white/10 glass p-3 animate-float">
                    <img
                      src="https://images.pexels.com/photos/37467615/pexels-photo-37467615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Modern smartphone"
                      className="h-64 w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 glass p-3 animate-float-slow">
                    <img
                      src="https://images.pexels.com/photos/30466731/pexels-photo-30466731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Galaxy smartphone"
                      className="h-48 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="overflow-hidden rounded-3xl border border-white/10 glass p-3 animate-float-slow">
                    <img
                      src="https://images.pexels.com/photos/32218867/pexels-photo-32218867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Pixel smartphone"
                      className="h-48 w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 glass p-3 animate-float">
                    <img
                      src="https://images.pexels.com/photos/11934173/pexels-photo-11934173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Black smartphone"
                      className="h-64 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
