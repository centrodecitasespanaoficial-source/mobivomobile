import { useEffect, useState } from 'react';
import { Menu, X, Search, Phone } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Phones', href: '#phones' },
  { label: 'SIM Only', href: '#sim-only' },
  { label: 'Device Plans', href: '#device-plans' },
  { label: 'Networks', href: '#networks' },
  { label: 'Deals', href: '#deals' },
  { label: 'Refurbished', href: '#refurbished' },
  { label: 'Trade In', href: '#trade-in' },
];

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
};

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg shadow-navy-950/20' : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className={`transition-colors ${scrolled ? 'text-white' : 'text-white'}`}
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden items-center gap-2 rounded-xl bg-electric-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-electric-600 hover:shadow-lg hover:shadow-electric-500/30 sm:flex"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) {
                    const el = document.querySelector('#phones');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                placeholder="Search phones, brands or deals..."
                className="w-full rounded-xl border border-white/10 bg-white/95 py-3.5 pl-12 pr-4 text-sm text-navy-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-electric-400"
              />
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="border-t border-white/10 py-4 animate-fade-in lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 flex items-center gap-2 rounded-lg bg-electric-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
