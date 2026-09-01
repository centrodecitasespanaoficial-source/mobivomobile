import { Smartphone, CreditCard, RefreshCw, Repeat, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    title: 'Phones',
    description: 'Latest smartphones and great contract deals.',
    href: '#phones',
    gradient: 'from-electric-500 to-electric-700',
  },
  {
    icon: CreditCard,
    title: 'SIM Only',
    description: 'Flexible plans for every budget.',
    href: '#sim-only',
    gradient: 'from-navy-500 to-navy-700',
  },
  {
    icon: RefreshCw,
    title: 'Refurbished',
    description: 'Quality smartphones for less.',
    href: '#refurbished',
    gradient: 'from-success-500 to-success-700',
  },
  {
    icon: Repeat,
    title: 'Trade In',
    description: 'Turn your old phone into value.',
    href: '#trade-in',
    gradient: 'from-accent-500 to-accent-700',
  },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function CategoryCards() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="container-x">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, description, href, gradient }) => (
            <button
              key={title}
              onClick={() => scrollToSection(href)}
              className="group card card-hover p-6 text-left"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{description}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-electric-600">
                {title === 'Phones' && 'Explore Phones'}
                {title === 'SIM Only' && 'View SIM Deals'}
                {title === 'Refurbished' && 'Shop Refurbished'}
                {title === 'Trade In' && 'Trade In'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
