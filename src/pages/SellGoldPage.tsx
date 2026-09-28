import React from 'react';
import { Phone, ArrowRight, Check } from 'lucide-react';
import { SITE_CONFIG, getCallHref } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/ResilientImage';

const WHAT_WE_BUY = [
  {
    index: '01',
    title: 'Old Jewellery',
    desc: 'Heirloom necklaces, traditional sets, and out-of-fashion gold jewellery.',
  },
  {
    index: '02',
    title: 'Broken Jewellery',
    desc: 'Snapped chains, single earrings, dented bangles, and damaged clasps.',
  },
  {
    index: '03',
    title: 'Unused Jewellery',
    desc: 'Locker-stored ornaments you no longer wear that can be turned into liquidity.',
  },
  {
    index: '04',
    title: 'Gold Ornaments',
    desc: '24K, 22K, and 18K hallmark and non-hallmark Indian & international ornaments.',
  },
  {
    index: '05',
    title: 'Other Eligible Gold Items',
    desc: 'Gold coins, bullion bars, biscuits, and released bank-pledged gold.',
  },
];

export const SellGoldPage: React.FC = () => {
  const { openValuationModal } = useApp();

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* HERO */}
      <section className="relative py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22] border-b border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-7 space-y-5 sm:space-y-6">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
                INSTANT GOLD BUYING · SCIENTIFIC XRF TESTING
              </p>
              <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                <span className="block">SELL YOUR GOLD.</span>
                <span className="block text-[#D4AF37]">KNOW ITS VALUE.</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-[#FAF7F2]/80 max-w-xl leading-relaxed">
                Transparent XRF purity testing in front of you and instant bank transfer with zero hidden deductions.
              </p>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href={getCallHref()}
                  className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap shadow-[0_0_30px_rgba(212,175,55,0.28)]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL NOW</span>
                </a>
                <button
                  type="button"
                  onClick={() => openValuationModal({ service: 'Sell Gold' })}
                  className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>GET GOLD VALUATION</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.serviceSellGold}
                  alt="Indian gold ornaments and jewellery valued at Aashreya Gold Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUY */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#1A0B22]/65 mb-2">
              ELIGIBLE GOLD ITEMS
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              WHAT WE BUY.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {WHAT_WE_BUY.map((item) => (
              <div
                key={item.index}
                className="bg-white border border-[#1A0B22]/10 rounded-sm p-6 flex flex-col justify-between shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-num text-xs font-bold text-[#C59B27]">
                    {item.index}
                  </span>
                  <Check className="w-4 h-4 text-[#C59B27]" />
                </div>
                <div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1A0B22] mb-2 tracking-[-0.015em]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#161219]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW YOUR GOLD IS VALUED */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#1A0B22] border-t border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2">
              ZERO HIDDEN DEDUCTIONS
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              HOW YOUR GOLD IS VALUED.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-5 lg:gap-6">
            {[
              {
                step: '01',
                name: 'Weight',
                detail: 'Net gold weight measured on calibrated digital scales in front of you.',
              },
              {
                step: '02',
                name: 'Purity',
                detail: 'Exact karat reading via non-destructive XRF spectrometer testing.',
              },
              {
                step: '03',
                name: 'Assessment',
                detail: 'Transparent valuation calculated directly from verified purity and net weight.',
              },
              {
                step: '04',
                name: 'Instant Payout',
                detail: 'Full transparent payout transferred immediately to your bank account.',
              },
            ].map((stage, i) => (
              <React.Fragment key={stage.step}>
                <div className="bg-[#261132] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-7 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="font-mono-num text-3xl sm:text-4xl font-extrabold text-[#D4AF37]">
                      {stage.step}
                    </span>
                    {i < 3 && (
                      <span className="hidden lg:inline-block text-sm font-bold text-[#D4AF37]/60">
                        →
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl font-extrabold text-[#FAF7F2] mb-2">
                      {stage.name}
                    </h3>
                    <p className="text-[15px] text-[#FAF7F2]/75 leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                </div>

                {i < 3 && (
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

          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={getCallHref()}
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL NOW</span>
            </a>
            <button
              type="button"
              onClick={() => openValuationModal({ service: 'Sell Gold' })}
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>GET GOLD VALUATION</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
