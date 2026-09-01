import { useMemo, useState } from 'react';
import { ArrowRight, Tag, Zap, Smartphone } from 'lucide-react';
import { phones, simPlans, refurbishedPhones, devicePlans, dealCategories } from '@/data';

const badgeStyles: Record<string, string> = {
  'NEW': 'bg-electric-100 text-electric-700',
  'POPULAR': 'bg-accent-100 text-accent-700',
  'BEST VALUE': 'bg-success-100 text-success-700',
  '5G': 'bg-navy-100 text-navy-700',
  'LIMITED OFFER': 'bg-error-100 text-error-700',
  'BUDGET': 'bg-success-100 text-success-700',
  'EXCELLENT': 'bg-success-100 text-success-700',
  'VERY GOOD': 'bg-electric-100 text-electric-700',
  'GOOD': 'bg-accent-100 text-accent-700',
  'UNLIMITED': 'bg-electric-100 text-electric-700',
  'SIM': 'bg-navy-100 text-navy-700',
};

type DealItem = {
  id: string;
  type: 'phone' | 'sim' | 'refurbished' | 'device';
  title: string;
  subtitle: string;
  price: string;
  badge: string;
  image?: string;
  is5G?: boolean;
  isBudget?: boolean;
  network?: string;
};

function buildDealItems(): DealItem[] {
  const phoneItems: DealItem[] = phones.map((p) => ({
    id: p.id,
    type: 'phone' as const,
    title: `${p.brand} ${p.model}`,
    subtitle: `${p.storage} · ${p.data} · ${p.contractDuration}`,
    price: `£${p.monthlyPrice}/mo`,
    badge: p.badge,
    image: p.image,
    is5G: p.is5G,
    isBudget: p.isBudget,
    network: p.network,
  }));

  const simItems: DealItem[] = simPlans.map((s) => ({
    id: s.id,
    type: 'sim' as const,
    title: s.data,
    subtitle: `Unlimited mins & texts · ${s.network}`,
    price: `£${s.monthlyPrice}/mo`,
    badge: s.badge || 'SIM',
    is5G: s.is5G,
    network: s.network,
  }));

  const refurbItems: DealItem[] = refurbishedPhones.map((p) => ({
    id: p.id,
    type: 'refurbished' as const,
    title: `${p.brand} ${p.model}`,
    subtitle: `${p.condition} · ${p.storage} · ${p.warranty}`,
    price: `£${p.price}`,
    badge: p.badge,
    image: p.image,
  }));

  const deviceItems: DealItem[] = devicePlans.map((d) => ({
    id: d.id,
    type: 'device' as const,
    title: `${d.brand} ${d.model}`,
    subtitle: `${d.storage} · ${d.data} · ${d.contractDuration}`,
    price: `£${d.totalMonthly}/mo`,
    badge: d.badge,
    image: d.image,
    is5G: d.is5G,
    network: d.network,
  }));

  return [...phoneItems, ...simItems, ...refurbItems, ...deviceItems];
}

const allDealItems = buildDealItems();

function DealCard({ item }: { item: DealItem }) {
  return (
    <div className="card card-hover group flex flex-col overflow-hidden">
      {item.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <span className={`badge ${badgeStyles[item.badge] || 'bg-gray-100 text-gray-700'}`}>
              {item.badge}
            </span>
          </div>
        </div>
      ) : (
        <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
          <div className="text-center">
            <Tag className="mx-auto h-8 w-8 text-electric-400" />
            <p className="mt-2 text-sm font-semibold text-white/80">SIM Only Plan</p>
          </div>
          <div className="absolute left-3 top-3">
            <span className={`badge ${badgeStyles[item.badge] || 'bg-gray-100 text-gray-700'}`}>
              {item.badge}
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
          {item.type === 'device' && <Smartphone className="h-3.5 w-3.5 text-electric-500" />}
          {item.type === 'device' && <span>Installment Plan</span>}
          {item.type === 'sim' && <span>SIM Only</span>}
          {item.type === 'refurbished' && <span>Refurbished</span>}
          {item.type === 'phone' && <span>Phone Deal</span>}
        </div>
        <h3 className="mt-1 text-base font-bold text-navy-900">{item.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <p className="text-xl font-extrabold text-navy-900">{item.price}</p>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-electric-500 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-electric-600 active:scale-95">
            View Deal
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  activeDealCategory: string;
  setActiveDealCategory: (cat: string) => void;
  activeNetwork: string;
};

export default function Deals({ activeDealCategory, setActiveDealCategory, activeNetwork }: Props) {
  const [showAll, setShowAll] = useState(false);

  const filteredDeals = useMemo(() => {
    return allDealItems.filter((item) => {
      if (activeNetwork !== 'All' && item.network !== activeNetwork) return false;
      if (activeDealCategory === 'phone' && item.type !== 'phone') return false;
      if (activeDealCategory === 'sim' && item.type !== 'sim') return false;
      if (activeDealCategory === 'device' && item.type !== 'device') return false;
      if (activeDealCategory === 'refurbished' && item.type !== 'refurbished') return false;
      if (activeDealCategory === '5g' && !item.is5G) return false;
      if (activeDealCategory === 'budget' && !item.isBudget && item.type !== 'refurbished') return false;
      return true;
    });
  }, [activeDealCategory, activeNetwork]);

  const visibleDeals = showAll ? filteredDeals : filteredDeals.slice(0, 8);

  return (
    <section id="deals" className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-error-50 px-4 py-1.5 text-sm font-semibold text-error-600">
            <Zap className="h-4 w-4" />
            Limited Time
          </div>
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Today's Best Deals</h2>
          <p className="mt-3 text-lg text-gray-500">Hand-picked offers across phones, SIMs, device plans and refurbished.</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {dealCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveDealCategory(cat.id);
                setShowAll(false);
              }}
              className={`filter-btn ${activeDealCategory === cat.id ? 'filter-btn-active' : 'filter-btn-inactive'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {visibleDeals.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-400">No deals match this category.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleDeals.map((item) => (
              <DealCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {filteredDeals.length > 8 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-all hover:border-electric-400 hover:text-electric-600 active:scale-95"
            >
              {showAll ? 'Show Less' : 'Show More Deals'}
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-gray-400">
          Demo offers only — not live network pricing.
        </p>
      </div>
    </section>
  );
}
