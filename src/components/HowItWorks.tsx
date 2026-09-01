const steps = [
  { number: '01', title: 'Choose', description: 'Pick a phone or SIM plan.' },
  { number: '02', title: 'Compare', description: 'Compare prices, data and contract options.' },
  { number: '03', title: 'Get Your Deal', description: "Choose the deal that's right for you." },
];

export default function HowItWorks() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-lg text-gray-500">Three simple steps to your next deal.</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-electric-200 via-electric-400 to-electric-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-electric-700 text-xl font-extrabold text-white shadow-lg shadow-electric-500/30">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="mx-auto mt-6 h-8 w-px bg-electric-200 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
