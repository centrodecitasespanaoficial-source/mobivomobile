import Logo from './Logo';

const footerLinks = [
  { label: 'Phones', href: '#phones' },
  { label: 'SIM Only', href: '#sim-only' },
  { label: 'Device Plans', href: '#device-plans' },
  { label: 'Networks', href: '#networks' },
  { label: 'Deals', href: '#deals' },
  { label: 'Refurbished', href: '#refurbished' },
  { label: 'Trade In', href: '#trade-in' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = ['Privacy', 'Terms', 'Cookies'];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="gradient-navy pt-16 pb-8">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="text-white" />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Phones. SIMs. Better Deals.
            </p>
            <p className="mt-3 text-xs text-white/40">
              The UK mobile deals marketplace for phones, SIM plans and great-value offers.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-white/50 transition-colors hover:text-electric-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-white/50 transition-colors hover:text-electric-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/80">Contact</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="mailto:hello@mobivo.co.uk" className="text-sm text-white/50 transition-colors hover:text-electric-400">hello@mobivo.co.uk</a></li>
              <li><span className="text-sm text-white/50">0203 376 8873</span></li>
              <li><span className="text-sm text-white/50">Mon–Fri, 9am–6pm</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">© 2026 Mobivo. All rights reserved.</p>
            <p className="text-xs text-white/30">Demo website — prices and offers shown are illustrative.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
