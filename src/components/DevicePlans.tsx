import { useMemo, useState } from 'react';
import { ArrowRight, Signal, Smartphone, Infinity as InfinityIcon } from 'lucide-react';
import { devicePlans, devicePlanFilters, type DevicePlan } from '@/data';

const badgeStyles: Record<string, string> = {
  'NEW': 'bg-electric-100 text-electric-700',
  'POPULAR': 'bg-accent-100 text-accent-700',
  'BEST VALUE': 'bg-success-100 text-success-700',
  '5G': 'bg-navy-100 text-navy-700',
  'LIMITED OFFER': 'bg-error-100 text-error-700',
  'BUDGET': 'bg-success-100 text-success-700',
};

function DevicePlanCard({ plan }: { plan: DevicePlan }) {
  return (
    <div className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={plan.image}
          alt={`${plan.brand} ${plan.model}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className={`badge ${badgeStyles[plan.badge] || 'bg-gray-100 text-gray-700'}`}>
            {plan.badge}
          </span>
        </div>
        {plan.is5G && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-navy-900/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Signal className="h-3 w-3" />
            5G
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{plan.brand}</p>
            <h3 className="text-lg font-bold text-navy-900">{plan.model}</h3>
          </div>
          <span className="rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">{plan.storage}</span>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg bg-electric-50 px-3 py-2 text-xs text-electric-700">
          <Smartphone className="h-3.5 w-3.5" />
          <span className="font-semibold">Device + SIM Installment Plan</span>
        </div>

        <div className="mt-3 space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <span>Network</span>
            <span className="font-medium text-navy-700">{plan.network}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Data</span>
            <span className="font-medium text-navy-700">{plan.data}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Contract</span>
            <span className="font-medium text-navy-700">{plan.contractDuration}</span>
          </div>
        </div>

        <div className="mt-3 space-y-1 rounded-lg bg-gray-50 p-3 text-xs">
          <div className="flex items-center justify-between text-gray-500">
            <span>Device monthly</span>
            <span className="font-medium text-navy-700">£{plan.deviceMonthly}/mo</span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <span>SIM monthly</span>
            <span className="font-medium text-navy-700">£{plan.simMonthly}/mo</span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-extrabold text-navy-900">£{plan.totalMonthly}<span className="text-sm font-medium text-gray-400">/month</span></p>
              <p className="mt-0.5 text-sm text-gray-500">£{plan.upfront} upfront</p>
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
};

export default function DevicePlans({ searchQuery, activeBrand, activeNetwork }: Props) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredPlans = useMemo(() => {
    return devicePlans.filter((p) => {
      if (activeBrand !== 'All' && p.brand !== activeBrand) return false;
      if (activeNetwork !== 'All' && p.network !== activeNetwork) return false;
      if (activeFilter === '5g' && !p.is5G) return false;
      if (activeFilter === 'unlimited' && !p.data.toLowerCase().includes('unlimited')) return false;
      if (activeFilter === 'noupfront' && p.upfront > 0) return false;
      if (activeFilter === 'under35' && p.totalMonthly >= 35) return false;
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
  }, [searchQuery, activeBrand, activeNetwork, activeFilter]);

  const visiblePlans = showAll ? filteredPlans : filteredPlans.slice(0, 6);

  return (
    <section id="device-plans" className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-1.5 text-sm font-semibold text-electric-600">
            <Smartphone className="h-4 w-4" />
            Device + SIM Installment Plans
          </div>
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Phone & SIM Bundles</h2>
          <p className="mt-3 text-lg text-gray-500">
            Spread the cost of your phone over 36 months with a SIM plan included.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {devicePlanFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'filter-btn-active' : 'filter-btn-inactive'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {visiblePlans.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-400">No device plans match your filters.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePlans.map((plan) => (
              <DevicePlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}

        {filteredPlans.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-all hover:border-electric-400 hover:text-electric-600 active:scale-95"
            >
              {showAll ? 'Show Less' : 'Show More Plans'}
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-400">
          Device installment plan prices are illustrative demo offers.
        </p>
      </div>
    </section>
  );
}
