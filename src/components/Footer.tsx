import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, getCallHref, buildDirectWhatsAppUrl } from '../config/siteConfig';
import { useApp, RoutePath } from '../context/AppContext';
import { BrandLogo } from './Navbar';

export const Footer: React.FC = () => {
  const { navigate, openValuationModal } = useApp();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath, hash?: string) => {
    e.preventDefault();
    navigate(path, hash);
  };

  return (
    <footer className="bg-[#120718] border-t border-[#D4AF37]/20 text-[#FAF7F2] pb-24 lg:pb-12">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-block focus-visible:outline-none"
            >
              <BrandLogo />
            </a>
            <p className="text-sm text-[#FAF7F2]/75 max-w-sm leading-relaxed">
              Modern gold valuation built on scientific XRF purity testing, transparent assessment, and instant settlement.
            </p>
            <div className="pt-1 flex items-start gap-2.5 text-xs text-[#FAF7F2]/65">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                {SITE_CONFIG.HEADQUARTERS.line1}, {SITE_CONFIG.HEADQUARTERS.line2},{' '}
                {SITE_CONFIG.HEADQUARTERS.city}, {SITE_CONFIG.HEADQUARTERS.state}{' '}
                {SITE_CONFIG.HEADQUARTERS.postalCode}
              </span>
            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <a
                  href="/sell-gold"
                  onClick={(e) => handleNav(e, '/sell-gold')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Sell Gold
                </a>
              </li>
              <li>
                <a
                  href="/release-pledged-gold"
                  onClick={(e) => handleNav(e, '/release-pledged-gold')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Release Pledged Gold
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openValuationModal({ service: 'Doorstep Valuation' })}
                  className="py-1 hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Doorstep Valuation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openValuationModal({ service: 'Sell Gold' })}
                  className="py-1 hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                >
                  Free Gold Valuation
                </button>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <a
                  href="/about-us"
                  onClick={(e) => handleNav(e, '/about-us')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => handleNav(e, '/contact-us')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.EMAIL}?subject=Careers%20at%20Aashreya%20Gold%20Hub`}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => handleNav(e, '/faq')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              CONTACT
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/80">
              <li>
                <a
                  href={getCallHref()}
                  className="inline-flex items-center gap-2 py-1 hover:text-[#D4AF37] transition-colors font-mono-num"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{SITE_CONFIG.PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1 hover:text-[#D4AF37] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.EMAIL}`}
                  className="inline-flex items-center gap-2 py-1 hover:text-[#D4AF37] transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{SITE_CONFIG.EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
              LEGAL
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleNav(e, '/privacy-policy')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => handleNav(e, '/terms-and-conditions')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions#disclaimer"
                  onClick={(e) => handleNav(e, '/terms-and-conditions', 'disclaimer')}
                  className="inline-block py-1 hover:text-[#D4AF37] transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Domain Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F2]/55 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.BRAND_NAME}. All rights reserved.
          </p>
          <p className="font-bold tracking-wider text-[#D4AF37]">
            {SITE_CONFIG.DOMAIN}
          </p>
        </div>
      </div>
    </footer>
  );
};
