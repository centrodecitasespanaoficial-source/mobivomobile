import { PoundSterling, Layers, GitCompare, MapPin } from 'lucide-react';

const features = [
  { icon: PoundSterling, title: 'Great Value', description: 'Competitive mobile deals.', color: 'text-success-600 bg-success-50' },
  { icon: Layers, title: 'Wide Choice', description: 'Phones and SIM plans from popular brands and networks.', color: 'text-electric-600 bg-electric-50' },
  { icon: GitCompare, title: 'Simple Comparison', description: 'Find the right option without the hassle.', color: 'text-accent-600 bg-accent-50' },
  { icon: MapPin, title: 'UK Focused', description: 'Designed specifically for UK mobile shoppers.', color: 'text-navy-600 bg-navy-50' },
];

export default function WhyMobivo() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Why MOBIVO</h2>
          <p className="mt-3 text-lg text-gray-500">Built to make mobile deals simpler.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="card card-hover p-7 text-center">
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}>
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
