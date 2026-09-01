import { useState } from 'react';
import { Smartphone, CheckCircle2, PoundSterling, Info } from 'lucide-react';

const brandOptions = ['Apple', 'Samsung', 'Google', 'Other'];
const conditionOptions = ['Excellent', 'Good', 'Fair'];

const valueMatrix: Record<string, Record<string, number>> = {
  Apple: { Excellent: 350, Good: 250, Fair: 150 },
  Samsung: { Excellent: 280, Good: 200, Fair: 120 },
  Google: { Excellent: 260, Good: 180, Fair: 100 },
  Other: { Excellent: 150, Good: 100, Fair: 60 },
};

export default function TradeIn() {
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleEstimate = () => {
    if (!brand || !condition) return;
    setEstimate(valueMatrix[brand][condition]);
  };

  return (
    <section id="trade-in" className="section-pad">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl gradient-navy">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-electric-500/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 glass px-4 py-2 text-sm font-medium text-white/90">
                  <Smartphone className="h-4 w-4 text-electric-400" />
                  Trade-In Estimator
                </div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Got an Old Phone? Turn It Into Value.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Trade in your old smartphone and put its value towards your next device.
                </p>
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Select Brand</label>
                    <div className="flex flex-wrap gap-2">
                      {brandOptions.map((b) => (
                        <button
                          key={b}
                          onClick={() => setBrand(b)}
                          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                            brand === b
                              ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/30'
                              : 'border border-white/15 glass text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Select Condition</label>
                    <div className="flex flex-wrap gap-2">
                      {conditionOptions.map((c) => (
                        <button
                          key={c}
                          onClick={() => setCondition(c)}
                          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                            condition === c
                              ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/30'
                              : 'border border-white/15 glass text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleEstimate}
                    disabled={!brand || !condition}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-navy-900 transition-all hover:bg-gray-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <PoundSterling className="h-5 w-5" />
                    Get Estimated Value
                  </button>

                  {estimate !== null && (
                    <div className="animate-scale-in rounded-2xl border border-white/15 glass p-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-success-400" />
                        <div>
                          <p className="text-sm text-white/60">Estimated demo value</p>
                          <p className="text-3xl font-extrabold text-white">£{estimate}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2 text-xs text-white/50">
                    <Info className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>Illustrative estimate only. Final value depends on device model and condition.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 gradient-blue-radial" />
              <div className="relative flex h-full items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-3xl border border-white/10 glass p-3 animate-float">
                    <img
                      src="https://images.pexels.com/photos/13570135/pexels-photo-13570135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Phone trade-in"
                      className="h-56 w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 glass p-3 animate-float-slow mt-8">
                    <img
                      src="https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      alt="Old phones"
                      className="h-56 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
