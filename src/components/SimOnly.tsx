import { useMemo, useState } from 'react';
import { ArrowRight, Signal, Infinity as InfinityIcon, Calendar } from 'lucide-react';
import { simPlans, simFilters, type SimPlan } from '@/data';

const badgeStyles: Record<string, string> = {
  'POPULAR': 'bg-accent-100 text-accent-700',
  'BEST VALUE': 'bg-success-100 text-success-700',
  'UNLIMITED': 'bg-electric-100 text-electric-700',
  'BUDGET': 'bg-navy-100 text-navy-700',
};

function SimCard({ plan }: { plan: SimPlan }) {
  return (
    <div className="card card-hover group relative flex flex-col p-6">
      {plan.badge && (
        <div className="absolute -top-3 left-6">
          <span className={`badge ${badgeStyles[plan.badge] || 'bg-gray-100 text-gray-700'} shadow-sm`}>
            {plan.badge}
          </span>
        </div>
      )}
      <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
        {plan.is5G && <Signal className="h-4 w-4 text-electric-500" />}
        {plan.isUnlimited && <InfinityIcon className="h-4 w-4 text-electric-500" />}
        <span>{plan.network}</span>
      </div>
      <h3 className="mt-3 text-2xl font-extrabold text-navy-900">{plan.data}</h3>
      <div className="mt-4 space-y-1.5 text-sm text-gray-500">
        <p>Unlimited Minutes</p>
        <p>Unlimited Texts</p>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
        <Calendar className="h-3.5 w-3.5" />
        <span>{plan.contractDuration || '30-day'} rolling plan</span>
      </div>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="text-3xl font-extrabold text-navy-900">£{plan.monthlyPrice}<span className="text-base font-medium text-gray-400">/month</span></p>
      </div>
      <button className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-electric-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-electric-600 active:scale-95">
        View Plan
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

type Props = {
  searchQuery: string;
  activeNetwork: string;
};

export default function SimOnly({ searchQuery, activeNetwork }: Props) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPlans = useMemo(() => {
    return simPlans.filter((p) => {
      if (activeNetwork !== 'All' && p.network !== activeNetwork) return false;
      if (activeFilter === '5g' && !p.is5G) return false;
      if (activeFilter === 'unlimited' && !p.isUnlimited) return false;
      if (activeFilter === 'under15' && p.monthlyPrice >= 15) return false;
      if (activeFilter === '12month' && p.contractDuration !== '12-month') return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.data.toLowerCase().includes(q) ||
          p.network.toLowerCase().includes(q) ||
          (q === 'sim' ? true : false)
        );
      }
      return true;
    });
  }, [searchQuery, activeNetwork, activeFilter]);

  return (
    <section id="sim-only" className="section-pad bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">SIM Only Deals</h2>
          <p className="mt-3 text-lg text-gray-500">Flexible data plans without the cost of a new phone.</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {simFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'filter-btn-active' : 'filter-btn-inactive'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredPlans.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-400">No SIM plans match your filters.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPlans.map((plan) => (
              <SimCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-400">
          All SIM plan prices are illustrative demo offers.
        </p>
      </div>
    </section>
  );
}
