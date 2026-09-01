import { ArrowRight, Battery, Shield, BadgeCheck } from 'lucide-react';
import { refurbishedPhones, type Phone } from '@/data';

const badgeStyles: Record<string, string> = {
  'EXCELLENT': 'bg-success-100 text-success-700',
  'VERY GOOD': 'bg-electric-100 text-electric-700',
  'GOOD': 'bg-accent-100 text-accent-700',
};

function RefurbCard({ phone }: { phone: Phone }) {
  return (
    <div className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={phone.image}
          alt={`${phone.brand} ${phone.model}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className={`badge ${badgeStyles[phone.badge] || 'bg-gray-100 text-gray-700'}`}>
            {phone.badge}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-900">{phone.brand} {phone.model}</h3>
        <div className="mt-3 space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-success-500" />
            {phone.condition}
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-electric-500" />
            {phone.warranty}
          </div>
          <div className="flex items-center gap-2">
            <Battery className="h-4 w-4 text-accent-500" />
            {phone.battery}
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="font-medium">{phone.storage}</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-2xl font-extrabold text-navy-900">£{phone.price}</p>
            <p className="text-xs text-success-600">Save up to 40% vs new</p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-xl bg-electric-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-electric-600 active:scale-95">
            View Phone
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Refurbished() {
  return (
    <section id="refurbished" className="section-pad bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Premium Phones. Better Prices.</h2>
          <p className="mt-3 text-lg text-gray-500">Quality refurbished smartphones at lower prices.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {refurbishedPhones.map((phone) => (
            <RefurbCard key={phone.id} phone={phone} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-electric-500" /> Warranty included</span>
          <span className="flex items-center gap-1.5"><Battery className="h-4 w-4 text-accent-500" /> Battery tested</span>
          <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-success-500" /> Quality checked</span>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Refurbished phone details are illustrative demo information.
        </p>
      </div>
    </section>
  );
}
