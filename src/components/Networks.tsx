import { useState } from 'react';
import { networks } from '@/data';
import { ChevronDown } from 'lucide-react';

type Props = {
  activeNetwork: string;
  setActiveNetwork: (network: string) => void;
};

export default function Networks({ activeNetwork, setActiveNetwork }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visibleNetworks = showAll ? networks : networks.slice(0, 6);

  const handleNetworkClick = (network: string) => {
    const newNetwork = activeNetwork === network ? 'All' : network;
    setActiveNetwork(newNetwork);
    const el = document.querySelector('#phones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="networks" className="section-pad bg-gray-50">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Choose Your Network</h2>
          <p className="mt-3 text-lg text-gray-500">Explore deals from popular UK mobile networks.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleNetworks.map((network) => (
            <button
              key={network.name}
              onClick={() => handleNetworkClick(network.name)}
              className={`group card card-hover flex items-center gap-4 p-5 text-left ${
                activeNetwork === network.name ? 'ring-2 ring-electric-500' : ''
              }`}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white shadow-md transition-transform group-hover:scale-110"
                style={{ backgroundColor: network.color }}
              >
                {network.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold text-navy-900">{network.name}</h3>
                <p className="truncate text-sm text-gray-500">{network.tagline}</p>
              </div>
            </button>
          ))}
        </div>

        {networks.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-all hover:border-electric-400 hover:text-electric-600 active:scale-95"
            >
              {showAll ? 'Show Less' : 'View All Networks'}
              <ChevronDown className={`h-5 w-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {activeNetwork !== 'All' && (
          <div className="mt-6 text-center text-sm text-gray-500">
            Filtering deals by <span className="font-semibold text-navy-900">{activeNetwork}</span>. Click the network again to clear.
          </div>
        )}
      </div>
    </section>
  );
}
