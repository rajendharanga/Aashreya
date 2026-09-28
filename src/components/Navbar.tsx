import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, getCallHref, buildDirectWhatsAppUrl } from '../config/siteConfig';
import { useApp, RoutePath } from '../context/AppContext';

const NAV_LINKS: Array<{ label: string; path: RoutePath }> = [
  { label: 'Home', path: '/' },
  { label: 'Sell Gold', path: '/sell-gold' },
  { label: 'Release Pledged Gold', path: '/release-pledged-gold' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const BrandLogo: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex items-center select-none">
      {!imgFailed ? (
        <img
          src={SITE_CONFIG.LOGO_URL}
          alt={SITE_CONFIG.BRAND_NAME}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className={`w-auto object-contain transition-all duration-200 ${
            compact
              ? 'h-[62px] sm:h-[72px] md:h-[76px] lg:h-[84px]'
              : 'h-[68px] sm:h-[78px] md:h-[86px] lg:h-[100px]'
          }`}
        />
      ) : (
        <span className="font-editorial font-extrabold tracking-tight text-[#D4AF37] text-lg sm:text-xl">
          {SITE_CONFIG.BRAND_NAME}
        </span>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#1A0B22]/96 backdrop-blur-md border-b border-[#D4AF37]/25 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]'
            : 'bg-gradient-to-b from-[#1A0B22]/95 via-[#1A0B22]/85 to-transparent border-b border-white/10 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
          {/* Zone 1: Official Aashreya Logo ONLY (No text beside logo) */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm shrink-0"
            aria-label="Aashreya Gold Hub Home"
          >
            <BrandLogo compact={isScrolled} />
          </a>

          {/* Zone 2: Desktop Navigation Links (1024px+ only to avoid tablet crowding) */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`relative py-1.5 text-[14px] font-semibold tracking-normal whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-[#FAF7F2]/85 hover:text-[#FAF7F2]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`block h-[2px] bg-[#D4AF37] transition-transform duration-200 origin-left mt-1 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Desktop/Tablet CTA & Mobile/Tablet Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Tablet & Desktop Primary CTA: CALL NOW */}
            <a
              href={getCallHref()}
              className="hidden md:inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-bold text-xs tracking-[0.06em] uppercase rounded-sm transition-all duration-150 whitespace-nowrap shadow-[0_0_24px_rgba(212,175,55,0.22)]"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>CALL NOW</span>
            </a>

            {/* Mobile & Tablet Hamburger Menu Button ([ LARGE AASHREYA LOGO ]  [ MENU ]) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center gap-2 min-h-[44px] px-3.5 py-2.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/40 text-[#FAF7F2] font-bold text-xs tracking-[0.06em] uppercase rounded-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Menu className="w-4 h-4 text-[#D4AF37]" />
              )}
              <span>MENU</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A0B22] border-b border-[#D4AF37]/30 px-4 sm:px-6 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-76px)] overflow-y-auto">
            <nav
              className="flex flex-col divide-y divide-white/10"
              aria-label="Mobile Navigation"
            >
              {NAV_LINKS.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className={`py-3.5 min-h-[48px] flex items-center justify-between text-base font-bold tracking-tight ${
                      isActive ? 'text-[#D4AF37]' : 'text-[#FAF7F2]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]/75" />
                  </a>
                );
              })}
            </nav>

            {/* Prominent CALL NOW and WHATSAPP US CTAs inside Mobile Menu */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={getCallHref()}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[52px] px-5 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm inline-flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CALL NOW</span>
              </a>

              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[52px] px-5 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/50 text-[#FAF7F2] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm inline-flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA Bar — Two Actions: CALL & WHATSAPP */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A0B22]/96 backdrop-blur-md border-t border-[#D4AF37]/35 grid grid-cols-2 h-[56px] shadow-[0_-8px_24px_rgba(0,0,0,0.45)]">
        <a
          href={getCallHref()}
          className="flex items-center justify-center gap-2 bg-[#D4AF37] active:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-xs sm:text-sm tracking-[0.06em] uppercase whitespace-nowrap"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>CALL</span>
        </a>
        <a
          href={buildDirectWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#261132] active:bg-[#331842] text-[#FAF7F2] font-extrabold text-xs sm:text-sm tracking-[0.06em] uppercase border-l border-[#D4AF37]/30 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </>
  );
};
