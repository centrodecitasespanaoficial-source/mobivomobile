import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryCards from '@/components/CategoryCards';
import PhoneDeals from '@/components/PhoneDeals';
import SimOnly from '@/components/SimOnly';
import DevicePlans from '@/components/DevicePlans';
import ShopByBrand from '@/components/ShopByBrand';
import Networks from '@/components/Networks';
import Deals from '@/components/Deals';
import Refurbished from '@/components/Refurbished';
import TradeIn from '@/components/TradeIn';
import WhyMobivo from '@/components/WhyMobivo';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');
  const [activeNetwork, setActiveNetwork] = useState('All');
  const [activeDealCategory, setActiveDealCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <Hero />
        <CategoryCards />
        <PhoneDeals
          searchQuery={searchQuery}
          activeBrand={activeBrand}
          activeNetwork={activeNetwork}
          activeDealCategory={activeDealCategory}
        />
        <SimOnly searchQuery={searchQuery} activeNetwork={activeNetwork} />
        <DevicePlans
          searchQuery={searchQuery}
          activeBrand={activeBrand}
          activeNetwork={activeNetwork}
        />
        <ShopByBrand activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
        <Networks activeNetwork={activeNetwork} setActiveNetwork={setActiveNetwork} />
        <Deals
          activeDealCategory={activeDealCategory}
          setActiveDealCategory={setActiveDealCategory}
          activeNetwork={activeNetwork}
        />
        <Refurbished />
        <TradeIn />
        <WhyMobivo />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
