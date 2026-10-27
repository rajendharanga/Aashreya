import React from 'react';
import { Phone, ArrowRight, Check, ShieldCheck, Scale, Zap, FileText } from 'lucide-react';
import { SITE_CONFIG, getCallHref, buildDirectWhatsAppUrl } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/ResilientImage';
import { Breadcrumbs } from '../components/Breadcrumbs';

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
    title: 'Gold Coins & Bullion',
    desc: '999/916 gold coins, bullion bars, biscuits, and bank-minted gold tokens.',
  },
];

const VALUATION_STAGES = [
  {
    step: '01',
    name: 'Net Weight Verification',
    detail: 'Net gold weight measured on calibrated digital scales in front of you. All stones, wax, and enamel are accurately excluded.',
  },
  {
    step: '02',
    name: 'Laboratory XRF Spectrometry',
    detail: 'Non-destructive XRF analyzer tests the exact karat composition within seconds without acid damage or melting.',
  },
  {
    step: '03',
    name: 'Transparent Price Assessment',
    detail: 'Transparent valuation calculated directly from verified purity and net gold weight with zero arbitrary deductions.',
  },
  {
    step: '04',
    name: 'Instant Digital Bank Payout',
    detail: 'Full approved valuation transferred immediately to your verified bank account via IMPS, NEFT, RTGS, or UPI.',
  },
];

const QUICK_ANSWERS = [
  {
    question: 'How is net gold weight determined?',
    answer:
      'Gold ornaments often contain non-gold elements such as embedded precious stones, beads, wax (lac), or enamel. At Aashreya Gold Hub, our specialists accurately isolate these non-gold components and weigh your pure gold on certified, calibrated digital scales in your direct presence, ensuring you are paid only for authentic precious metal without arbitrary deductions.',
  },
  {
    question: 'Why does Aashreya use XRF spectrometry instead of acid testing?',
    answer:
      'Traditional goldsmiths frequently use abrasive touchstones and nitric acid, which permanently scratch and erode your ornaments. Aashreya Gold Hub uses advanced German-engineered X-Ray Fluorescence (XRF) spectrometry. It is 100% non-destructive, requires zero acid or melting, and provides a precise digital elemental readout of gold purity in seconds.',
  },
  {
    question: 'What KYC documents do I need to sell gold in Hyderabad?',
    answer:
      'In accordance with Indian statutory and anti-money-laundering regulations, sellers must be 18 years or older and present one valid government-issued photo identity proof (Aadhaar Card, PAN Card, Voter ID, or Passport) along with residential proof. Original purchase invoices are helpful if available, but are not mandatory.',
  },
  {
    question: 'Can I sell gold if I don’t have the original purchase invoice?',
    answer:
      'Yes. Inherited family jewellery, heirloom ornaments, or gifted items without purchase receipts can be sold legally at Aashreya Gold Hub. You simply need to provide your valid government-issued photo ID and complete our statutory ownership declaration during valuation.',
  },
];

export const SellGoldPage: React.FC = () => {
  const { navigate, openValuationModal } = useApp();

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Breadcrumbs for Hierarchy & Search Engines */}
      <div className="bg-[#1A0B22] border-b border-white/5">
        <Breadcrumbs items={[{ label: 'Sell Gold' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="relative py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22] border-b border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-7 space-y-5 sm:space-y-6">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
                INSTANT GOLD BUYING · SCIENTIFIC XRF TESTING · HYDERABAD
              </p>
              <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                <span className="block">SELL YOUR GOLD.</span>
                <span className="block text-[#D4AF37]">KNOW ITS TRUE VALUE.</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-[#FAF7F2]/80 max-w-xl leading-relaxed">
                Sell old jewellery, broken ornaments, coins, and bullion with 100% transparent non-destructive XRF purity testing conducted in front of you, and receive instant bank payment with zero hidden deductions.
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
                  alt="Indian gold ornaments, jewellery and bullion valued transparently at Aashreya Gold Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUY SECTION */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#1A0B22]/65 mb-2">
              ACCEPTED GOLD ITEMS
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              WHAT WE BUY.
            </h2>
            <p className="text-[15px] sm:text-base text-[#161219]/75 mt-2 max-w-2xl">
              We purchase all purities including 24K pure bullion, 22K standard Indian jewellery, and 18K contemporary or diamond-studded mountings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {WHAT_WE_BUY.map((item) => (
              <div
                key={item.index}
                className="bg-white border border-[#1A0B22]/10 rounded-sm p-6 flex flex-col justify-between shadow-sm hover:border-[#D4AF37] transition-colors"
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
                  <p className="text-[14px] text-[#161219]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW YOUR GOLD IS VALUED (PROCESS) */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#1A0B22] border-t border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2">
              ZERO HIDDEN DEDUCTIONS · LAB-GRADE TESTING
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              HOW YOUR GOLD IS VALUED.
            </h2>
            <p className="text-[15px] sm:text-base text-[#FAF7F2]/75 mt-2 max-w-2xl">
              Our 4-step scientific valuation ensures you receive the true market value of your precious metal without guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-5 lg:gap-6">
            {VALUATION_STAGES.map((stage, i) => (
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
                    <h3 className="font-editorial text-lg sm:text-xl font-extrabold text-[#FAF7F2] mb-2">
                      {stage.name}
                    </h3>
                    <p className="text-[14px] text-[#FAF7F2]/75 leading-relaxed">
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

          {/* TESTING COMPARISON: TRADITIONAL VS AASHREYA */}
          <div className="mt-12 sm:mt-16 bg-[#261132] border border-[#D4AF37]/35 rounded-sm p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono-num font-bold text-[#D4AF37] uppercase tracking-wider">
                TECHNOLOGY ADVANTAGE
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#FAF7F2] mt-1.5">
                Traditional Goldsmith Testing vs. Aashreya Scientific XRF
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#1A0B22] border border-white/10 rounded-sm space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Traditional Method (Destructive)
                </p>
                <p className="text-sm font-semibold text-[#FAF7F2]">Touchstone Scratching &amp; Nitric Acid</p>
                <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">
                  Scratches gold onto black stones, uses corrosive acids that damage intricate jewellery, and relies on visual eye estimates that often underestimate true karat value by 1–3 karats.
                </p>
              </div>
              <div className="p-5 bg-[#1A0B22] border border-[#D4AF37]/50 rounded-sm space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Aashreya Gold Hub (Non-Destructive)
                </p>
                <p className="text-sm font-semibold text-[#FAF7F2]">German XRF Spectrometry Testing</p>
                <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">
                  100% non-invasive X-Ray analysis. Zero acid, zero rubbing, and zero melting. Digital readout shows exact percentages of gold, silver, copper, and zinc within seconds in your presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO QUICK ANSWERS SECTION */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219] border-t border-[#1A0B22]/10">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#1A0B22]/65 mb-2">
              FREQUENT QUESTIONS · CLEAR FACTS
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              VALUATION GUIDE &amp; CHECKLIST.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUICK_ANSWERS.map((qa, index) => (
              <article
                key={index}
                className="bg-white border border-[#1A0B22]/10 rounded-sm p-6 sm:p-7 shadow-sm space-y-3"
              >
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1A0B22]">
                  {qa.question}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#161219]/80 leading-relaxed">
                  {qa.answer}
                </p>
              </article>
            ))}
          </div>

          {/* CHECKLIST BOX */}
          <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-white border border-[#D4AF37]/50 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5">
              <span className="text-xs font-mono-num font-bold text-[#C59B27] uppercase tracking-wider">
                SELLER CHECKLIST
              </span>
              <h3 className="font-editorial text-xl font-bold text-[#1A0B22]">
                What to Bring for Immediate Settlement
              </h3>
              <p className="text-sm text-[#161219]/75 max-w-xl">
                1. Gold ornaments or bullion · 2. One Government ID (Aadhaar / PAN / Voter ID / Passport) · 3. Bank account details (for IMPS/UPI transfer) · 4. Original purchase invoices (if available).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={getCallHref()}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-xs tracking-wider uppercase rounded-sm whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>CALL DESK</span>
              </a>
              <button
                type="button"
                onClick={() => navigate('/release-pledged-gold')}
                className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-[#1A0B22] hover:bg-[#261132] text-[#FAF7F2] font-bold text-xs tracking-wider uppercase rounded-sm whitespace-nowrap cursor-pointer"
              >
                <span>PLEDGED GOLD ASSIST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONVERSION STRIP */}
      <section className="py-14 sm:py-16 bg-[#1A0B22] border-t border-[#D4AF37]/25 text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 space-y-5">
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
            READY FOR HONEST VALUATION?
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold text-[#FAF7F2]">
            VISIT OUR JUBILEE HILLS HUB OR REQUEST DOORSTEP VISIT
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2">
            <a
              href={getCallHref()}
              className="min-h-[52px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL +91 7981 696969</span>
            </a>
            <a
              href={buildDirectWhatsAppUrl('Hi Aashreya Gold Hub, I would like to enquire about selling gold.')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap"
            >
              <span>WHATSAPP VALUATION DESK</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
