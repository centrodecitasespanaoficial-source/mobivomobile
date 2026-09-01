import { brands } from '@/data';

type Props = {
  activeBrand: string;
  setActiveBrand: (brand: string) => void;
};

export default function ShopByBrand({ activeBrand, setActiveBrand }: Props) {
  const handleBrandClick = (brand: string) => {
    const newBrand = activeBrand === brand ? 'All' : brand;
    setActiveBrand(newBrand);
    const el = document.querySelector('#phones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Shop By Brand</h2>
          <p className="mt-3 text-lg text-gray-500">Find your favourite manufacturer.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {brands.map((brand) => (
            <button
              key={brand.name}
              onClick={() => handleBrandClick(brand.name)}
              className={`group card card-hover relative overflow-hidden p-0 ${
                activeBrand === brand.name ? 'ring-2 ring-electric-500' : ''
              }`}
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent p-4">
                <span className="text-lg font-bold text-white">{brand.name}</span>
              </div>
              {activeBrand === brand.name && (
                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-electric-500 text-xs font-bold text-white">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>

        {activeBrand !== 'All' && (
          <div className="mt-6 text-center text-sm text-gray-500">
            Showing <span className="font-semibold text-navy-900">{activeBrand}</span> phones. Click the brand again to clear.
          </div>
        )}
      </div>
    </section>
  );
}
