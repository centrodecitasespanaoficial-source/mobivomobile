import { useMemo, useState } from 'react';
import { ChevronDown, ArrowRight, Signal } from 'lucide-react';
import { phones, brands, type Phone } from '@/data';

const badgeStyles: Record<string, string> = {
  'NEW': 'bg-electric-100 text-electric-700',
  'POPULAR': 'bg-accent-100 text-accent-700',
  'BEST VALUE': 'bg-success-100 text-success-700',
  '5G': 'bg-navy-100 text-navy-700',
  'LIMITED OFFER': 'bg-error-100 text-error-700',
  'BUDGET': 'bg-success-100 text-success-700',
};

function PhoneCard({ phone }: { phone: Phone }) {
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
        {phone.is5G && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-navy-900/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Signal className="h-3 w-3" />
            5G
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{phone.brand}</p>
            <h3 className="text-lg font-bold text-navy-900">{phone.model}</h3>
          </div>
          <span className="rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">{phone.storage}</span>
        </div>
        <div className="mt-4 space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <span>Network</span>
            <span className="font-medium text-navy-700">{phone.network}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Data</span>
            <span className="font-medium text-navy-700">{phone.data}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Contract</span>
            <span className="font-medium text-navy-700">{phone.contractDuration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Unlimited mins & texts</span>
            <span className="font-medium text-success-600">Yes</span>
          </div>
        </div>
        <div className="mt-5 border-t border-gray-100 pt-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-extrabold text-navy-900">£{phone.monthlyPrice}<span className="text-sm font-medium text-gray-400">/month</span></p>
              <p className="mt-0.5 text-sm text-gray-500">£{phone.upfrontPrice} upfront</p>
            </div>
            <button className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-electric-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-electric-600 active:scale-95">
              View Deal
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  searchQuery: string;
  activeBrand: string;
  activeNetwork: string;
  activeDealCategory: string;
};

export default function PhoneDeals({ searchQuery, activeBrand, activeNetwork, activeDealCategory }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? phones.length : 6;

  const filteredPhones = useMemo(() => {
    return phones.filter((p) => {
      if (activeBrand !== 'All' && p.brand !== activeBrand) return false;
      if (activeNetwork !== 'All' && p.network !== activeNetwork) return false;
      if (activeDealCategory === '5g' && !p.is5G) return false;
      if (activeDealCategory === 'budget' && !p.isBudget) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.brand.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.network.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, activeBrand, activeNetwork, activeDealCategory]);

  const displayPhones = filteredPhones.slice(0, showAll ? filteredPhones.length : 6);

  return (
    <section id="phones" className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Featured Phone Deals</h2>
          <p className="mt-3 text-lg text-gray-500">Popular smartphones at great-value prices.</p>
        </div>

        {searchQuery && (
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Showing results for</span>
            <span className="font-semibold text-navy-900">"{searchQuery}"</span>
            <span>— {filteredPhones.length} found</span>
          </div>
        )}

        {activeBrand !== 'All' && (
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Filtered by brand:</span>
            <span className="font-semibold text-navy-900">{activeBrand}</span>
          </div>
        )}

        {activeNetwork !== 'All' && (
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Filtered by network:</span>
            <span className="font-semibold text-navy-900">{activeNetwork}</span>
          </div>
        )}

        {displayPhones.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-400">No phones match your filters. Try clearing them.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayPhones.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        )}

        {filteredPhones.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-all hover:border-electric-400 hover:text-electric-600 active:scale-95"
            >
              {showAll ? 'Show Less' : 'Show More Deals'}
              <ChevronDown className={`h-5 w-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-400">
          Prices shown are illustrative demo offers.
        </p>
      </div>
    </section>
  );
}
