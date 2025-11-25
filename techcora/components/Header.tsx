import React from 'react';
import { Menu } from 'lucide-react';

type Props = {
  onOpenContact?: (title: string) => void;
};

const Header: React.FC<Props> = ({ onOpenContact }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Techcora Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/assets/tc-logo1.png"
            alt="Techcora Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg font-display font-bold tracking-[0.25em] text-white uppercase">
            TECHCORA
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: 'Vision', href: '#vision' },
            { label: 'Mission', href: '#mission' },
            { label: 'Core Values', href: '#features' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-white/90 hover:text-techcora-orange transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button
            className="hidden md:flex items-center justify-center px-5 py-2 border border-techcora-orange text-techcora-orange text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-techcora-orange hover:text-white transition-all duration-300 rounded-sm"
            onClick={() => onOpenContact?.('Partner With Us')}
          >
            Partner With Us
          </button>
          <button className="lg:hidden text-white hover:text-techcora-orange transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Orange gradient line under header */}
      <div className="h-[1px] bg-gradient-to-r from-techcora-orange/60 via-techcora-orange/40 to-transparent"></div>
    </header>
  );
};

export default Header;
