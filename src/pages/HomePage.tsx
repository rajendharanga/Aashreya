import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Award,
  Scale,
  Zap,
} from 'lucide-react';
import {
  SITE_CONFIG,
  FAQ_ITEMS,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/ResilientImage';

export const HomePage: React.FC = () => {
  const { navigate, openValuationModal } = useApp();
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <div className="overflow-hidden">
      {/* =====================================================================
          SECTION 01 — HERO (RESPONSIVE ACROSS MOBILE, TABLET & DESKTOP)
      ===================================================================== */}
      <section className="relative lg:min-h-[86vh] flex items-center pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-32 bg-[#1A0B22] overflow-hidden">
        {/* Desktop & Tablet Background Visual with Controlled Scrim */}
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={SITE_CONFIG.IMAGES.heroGold}
            alt="Close-up Indian gold jewellery and pure bullion at Aashreya Gold Hub"
            className="w-full h-full object-cover object-center opacity-55 sm:opacity-65 lg:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B22] via-[#1A0B22]/92 to-[#1A0B22]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B22] via-[#1A0B22]/45 to-[#1A0B22]/80" />
        </div>

        {/* Subtle Ambient Gold Light (Desktop/Tablet) */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute -top-24 right-1/4 w-[360px] h-[360px] rounded-full bg-[#D4AF37]/12 blur-[130px] animate-pulse-glow"
        />

        <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Hero Left: Controlled Two-Line Headline, Short Copy & Easy-to-Tap CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.09em] uppercase text-[#E6C97A]">
                AASHREYA GOLD HUB · HYDERABAD &amp; TELANGANA
              </p>

              <h1 className="font-editorial text-hero font-extrabold tracking-[-0.025em]">
                <span className="block text-[#FAF7F2]">YOUR GOLD.</span>
                <span className="block text-[#D4AF37]">YOUR VALUE.</span>
              </h1>

              <p className="text-[15px] sm:text-lg font-medium text-[#FAF7F2]/85 max-w-lg leading-relaxed">
                Turn your old, unused or pledged gold into real value.
              </p>

              {/* Mobile & Tablet Framed Hero Visual so important gold subject is always visible */}
              <div className="lg:hidden pt-1">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-[#120718]">
                  <ResilientImage
                    src={SITE_CONFIG.IMAGES.heroGold}
                    alt="Indian gold jewellery and pure bullion valued at Aashreya Gold Hub"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B22]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-[#E6C97A]">
                    <span>XRF Purity Verified</span>
                    <span className="text-[#D4AF37]">Instant Payout</span>
                  </div>
                </div>
              </div>

              {/* Hero CTAs: Stacked Full-Width on Mobile, Side-by-Side on Tablet/Desktop */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/sell-gold')}
                  className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm transition-all duration-150 whitespace-nowrap shadow-[0_0_28px_rgba(212,175,55,0.28)] cursor-pointer"
                >
                  <span>SELL YOUR GOLD</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getCallHref()}
                  className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#261132]/95 hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-[0.06em] uppercase rounded-sm transition-all duration-150 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Hero Right: Valuation Assurance Card (Desktop & Tablet) */}
            <div className="hidden lg:block lg:col-span-5 lg:justify-self-end w-full max-w-md">
              <div className="bg-[#1A0B22]/92 backdrop-blur-md border border-[#D4AF37]/40 rounded-sm p-6 xl:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.65)] animate-float-slow">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <h2 className="text-xs font-bold tracking-[0.08em] uppercase text-[#D4AF37]">
                    INSTANT GOLD VALUATION
                  </h2>
                  <span className="text-xs text-[#E6C97A] font-semibold">
                    24K · 22K · 18K
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-baseline justify-between py-2 border-b border-white/5">
                    <div>
                      <span className="text-sm font-bold text-[#FAF7F2] block">
                        Scientific XRF Testing
                      </span>
                      <span className="text-xs text-[#FAF7F2]/55">
                        Zero melting or acid damage
                      </span>
                    </div>
                    <span className="font-mono-num text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      100% Safe
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between py-2 border-b border-white/5">
                    <div>
                      <span className="text-sm font-bold text-[#FAF7F2] block">
                        Pledged Gold Release
                      </span>
                      <span className="text-xs text-[#FAF7F2]/55">
                        Banks, NBFCs &amp; financiers
                      </span>
                    </div>
                    <span className="font-mono-num text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      Direct Assist
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between py-2">
                    <div>
                      <span className="text-sm font-bold text-[#FAF7F2] block">
                        Instant Settlement
                      </span>
                      <span className="text-xs text-[#FAF7F2]/55">
                        IMPS · NEFT · RTGS · UPI
                      </span>
                    </div>
                    <span className="font-mono-num text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      Immediate
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openValuationModal()}
                    className="text-xs font-bold tracking-[0.05em] uppercase text-[#D4AF37] hover:text-[#E6C97A] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Get Free Valuation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/release-pledged-gold')}
                    className="text-xs font-bold tracking-[0.05em] uppercase text-[#FAF7F2] hover:text-[#D4AF37] cursor-pointer"
                  >
                    Release Pledged Gold
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02 — OUR SERVICES (3 COLS DESKTOP, 2 COLS TABLET, 1 COL MOBILE)
      ===================================================================== */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#1A0B22] border-t border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2.5">
              OUR SERVICES
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              THREE WAYS TO UNLOCK VALUE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {/* Card 1: SELL GOLD */}
            <div className="group bg-[#261132] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-200">
              <div>
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#120718]">
                  <ResilientImage
                    src={SITE_CONFIG.IMAGES.serviceSellGold}
                    alt="Sell old, broken or unused Indian gold jewellery at Aashreya Gold Hub"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261132] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 sm:p-7 space-y-2">
                  <span className="text-xs font-mono-num font-bold text-[#D4AF37]">
                    01 · INSTANT LIQUIDITY
                  </span>
                  <h3 className="font-editorial text-card-title font-bold text-[#FAF7F2] tracking-[-0.015em]">
                    SELL GOLD
                  </h3>
                  <p className="text-[15px] text-[#FAF7F2]/80 leading-relaxed">
                    Old gold, broken gold, or unused ornaments turned into immediate value.
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center gap-3">
                <a
                  href={getCallHref()}
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-xs tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>CALL NOW</span>
                </a>
                <button
                  type="button"
                  onClick={() => navigate('/sell-gold')}
                  className="min-h-[48px] px-4 py-3 bg-[#1A0B22] hover:bg-[#331842] border border-white/15 text-[#FAF7F2] font-bold text-xs tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  DETAILS
                </button>
              </div>
            </div>

            {/* Card 2: RELEASE PLEDGED GOLD */}
            <div className="group bg-[#261132] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-200">
              <div>
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#120718]">
                  <ResilientImage
                    src={SITE_CONFIG.IMAGES.servicePledgedGold}
                    alt="Release pledged gold from banks and financiers with Aashreya Gold Hub"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261132] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 sm:p-7 space-y-2">
                  <span className="text-xs font-mono-num font-bold text-[#D4AF37]">
                    02 · PLEDGE SETTLEMENT
                  </span>
                  <h3 className="font-editorial text-card-title font-bold text-[#FAF7F2] tracking-[-0.015em]">
                    RELEASE PLEDGED GOLD
                  </h3>
                  <p className="text-[15px] text-[#FAF7F2]/80 leading-relaxed">
                    Need help getting your pledged gold back? We guide and settle it for you.
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center gap-3">
                <a
                  href={getCallHref()}
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-xs tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>CALL NOW</span>
                </a>
                <button
                  type="button"
                  onClick={() => navigate('/release-pledged-gold')}
                  className="min-h-[48px] px-4 py-3 bg-[#1A0B22] hover:bg-[#331842] border border-white/15 text-[#FAF7F2] font-bold text-xs tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  DETAILS
                </button>
              </div>
            </div>

            {/* Card 3: DOORSTEP VALUATION */}
            <div className="group bg-[#261132] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-200 md:col-span-2 lg:col-span-1">
              <div>
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#120718]">
                  <ResilientImage
                    src={SITE_CONFIG.IMAGES.serviceDoorstep}
                    alt="Doorstep gold valuation at home by Aashreya Gold Hub specialists"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261132] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 sm:p-7 space-y-2">
                  <span className="text-xs font-mono-num font-bold text-[#D4AF37]">
                    03 · PRIVATE &amp; SECURE
                  </span>
                  <h3 className="font-editorial text-card-title font-bold text-[#FAF7F2] tracking-[-0.015em]">
                    DOORSTEP VALUATION
                  </h3>
                  <p className="text-[15px] text-[#FAF7F2]/80 leading-relaxed">
                    Prefer valuation at home? Talk to our team to schedule a private visit.
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center gap-3">
                <a
                  href={getCallHref()}
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-xs tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>CALL NOW</span>
                </a>
                <button
                  type="button"
                  onClick={() => openValuationModal({ service: 'Doorstep Valuation' })}
                  className="min-h-[48px] px-4 py-3 bg-[#1A0B22] hover:bg-[#331842] border border-white/15 text-[#FAF7F2] font-bold text-xs tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  BOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03 — WHY AASHREYA
      ===================================================================== */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#1A0B22]/65 mb-2.5">
              WHY AASHREYA GOLD HUB
            </p>
            <h2 className="font-editorial text-section-title font-extrabold tracking-[-0.025em] text-[#1A0B22]">
              GOLD DESERVES{' '}
              <span className="text-[#C59B27] sm:block">TRANSPARENCY.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              {
                index: '01',
                title: 'XRF TESTING',
                copy: 'Zero melting or damage during purity check.',
                icon: ShieldCheck,
              },
              {
                index: '02',
                title: 'HONEST VALUATION',
                copy: 'Fair, competitive assessment with zero hidden deductions.',
                icon: Award,
              },
              {
                index: '03',
                title: 'TRANSPARENT PROCESS',
                copy: 'Every gram and karat tested right before your eyes.',
                icon: Scale,
              },
              {
                index: '04',
                title: 'INSTANT PAYMENT',
                copy: 'Immediate bank transfer the moment you approve.',
                icon: Zap,
              },
            ].map((point) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={point.index}
                  className="bg-white border border-[#1A0B22]/10 hover:border-[#D4AF37] rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-[0_12px_30px_rgba(26,11,34,0.04)]"
                >
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <span className="font-mono-num text-sm font-bold text-[#C59B27]">
                      {point.index}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#1A0B22] text-[#D4AF37] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1A0B22] mb-1.5 tracking-[-0.015em]">
                      {point.title}
                    </h3>
                    <p className="text-[15px] text-[#161219]/75 leading-relaxed">
                      {point.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04 — PURITY TESTING (DRAMATIC VISUAL SECTION)
      ===================================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-[#1A0B22] overflow-hidden border-y border-[#D4AF37]/25">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={SITE_CONFIG.IMAGES.xrfTesting}
            alt="Professional XRF spectrometer gold purity testing machine at Aashreya Gold Hub"
            className="w-full h-full object-cover object-center opacity-70 sm:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B22] via-[#1A0B22]/90 to-[#1A0B22]/50" />
        </div>

        <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-xl space-y-4 sm:space-y-5">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
              SCIENTIFIC XRF SPECTROMETRY
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              SEE THE PURITY.
              <br />
              <span className="text-[#D4AF37]">SEE THE VALUE.</span>
            </h2>
            <p className="text-[15px] sm:text-lg text-[#FAF7F2]/85 leading-relaxed">
              Your gold is tested using professional purity-testing technology before valuation.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openValuationModal()}
                className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm transition-all duration-150 whitespace-nowrap shadow-[0_0_30px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                <span>GET A VALUATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05 — HOW IT WORKS (VERTICAL ON MOBILE, GRID ON TABLET, HORIZONTAL ON DESKTOP)
      ===================================================================== */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#1A0B22]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2.5">
              SIMPLE 4-STEP PROCESS
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              HOW IT WORKS.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-5 lg:gap-6">
            {[
              { step: '01', title: 'BRING YOUR GOLD', sub: 'Walk in or book a doorstep visit' },
              { step: '02', title: 'TEST THE PURITY', sub: 'Non-destructive XRF purity check' },
              { step: '03', title: 'GET YOUR VALUE', sub: 'Transparent weight & purity offer' },
              { step: '04', title: 'GET PAID', sub: 'Immediate bank / UPI settlement' },
            ].map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="relative bg-[#261132] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-7 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <span className="font-mono-num text-3xl sm:text-4xl font-extrabold text-[#D4AF37]">
                      {item.step}
                    </span>
                    {idx < 3 && (
                      <span
                        aria-hidden="true"
                        className="hidden lg:inline-block text-sm font-bold text-[#D4AF37]/60"
                      >
                        →
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#FAF7F2] mb-1.5 tracking-[-0.015em]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#FAF7F2]/70 leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                </div>

                {/* Mobile Vertical Flow Arrow (↓) */}
                {idx < 3 && (
                  <div
                    aria-hidden="true"
                    className="sm:hidden flex items-center justify-center py-2.5 text-[#D4AF37] font-mono-num text-lg font-bold"
                  >
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06 — ABOUT AASHREYA (IMAGE FIRST ON MOBILE, SIDE-BY-SIDE ON TABLET & DESKTOP)
      ===================================================================== */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
            <div className="md:col-span-5 lg:col-span-6">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-[#1A0B22]/15 shadow-xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.serviceDoorstep}
                  alt="Professional gold valuation team at Aashreya Gold Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-6 space-y-4 sm:space-y-5">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#1A0B22]/70">
                ABOUT AASHREYA GOLD HUB
              </p>
              <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
                A MODERN WAY
                <br />
                <span className="text-[#C59B27]">TO VALUE GOLD.</span>
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#161219]/80 leading-relaxed max-w-xl">
                We replaced traditional guesswork and hidden deductions with laboratory-grade XRF testing, complete transparency, and instant digital payouts.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/about-us')}
                  className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1A0B22] hover:bg-[#261132] text-[#D4AF37] font-bold text-sm tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>ABOUT AASHREYA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 07 — FAQ
      ===================================================================== */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#1A0B22] border-t border-white/10">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2.5">
              CLEAR ANSWERS
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                    className="w-full min-h-[48px] flex items-center justify-between gap-4 text-left py-1.5 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] sm:text-lg font-bold text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-2.5 pb-1 pr-4 sm:pr-8 text-[15px] text-[#FAF7F2]/75 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <a
              href={getCallHref()}
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>HAVE MORE QUESTIONS? CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 08 — FINAL CTA
      ===================================================================== */}
      <section className="relative py-16 sm:py-22 lg:py-28 bg-gradient-to-b from-[#261132] to-[#1A0B22] border-t border-[#D4AF37]/30 overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#D4AF37]/12 blur-[140px] animate-pulse-glow"
        />

        <div className="relative z-10 max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 text-center space-y-6">
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#E6C97A]">
            INSTANT GOLD VALUATION · HYDERABAD
          </p>
          <h2 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
            YOUR GOLD HAS VALUE.
            <br />
            <span className="text-[#D4AF37]">LET&apos;S FIND IT.</span>
          </h2>

          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={getCallHref()}
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm transition-all duration-150 whitespace-nowrap shadow-[0_0_32px_rgba(212,175,55,0.3)]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL NOW</span>
            </a>

            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1A0B22] hover:bg-[#331842] border border-[#D4AF37]/50 text-[#FAF7F2] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm transition-all duration-150 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
