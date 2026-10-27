import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Scale, AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  SITE_CONFIG,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/ResilientImage';
import { Breadcrumbs } from '../components/Breadcrumbs';

const RELEASE_STEPS = [
  {
    num: '01',
    title: 'Share Pledge Receipt',
    desc: 'Bring or WhatsApp a clear copy of your gold loan receipt from your bank, NBFC, or local financier.',
  },
  {
    num: '02',
    title: 'Equity & Value Assessment',
    desc: 'We calculate current market gold value against your outstanding principal and interest dues to reveal your net surplus.',
  },
  {
    num: '03',
    title: 'Accompanied Loan Settlement',
    desc: 'Our representative accompanies you directly to the financial branch and provides the required funds to settle the loan.',
  },
  {
    num: '04',
    title: 'XRF Verification & Surplus Payout',
    desc: 'Once ornaments are handed over by the lender, we test purity via XRF and transfer the remaining balance immediately to your bank.',
  },
];

const PLEDGED_FAQS = [
  {
    question: 'Can Aashreya Gold Hub assist with any bank or NBFC in Hyderabad?',
    answer:
      'Yes. We assist clients across nationalized commercial banks (such as SBI, Canara Bank, Union Bank, PNB), private banks (HDFC, ICICI, Axis), NBFCs (Muthoot, Manappuram), and registered cooperative financial institutions operating in Hyderabad and Telangana.',
  },
  {
    question: 'How is the remaining surplus equity calculated?',
    answer:
      'Surplus equity is the difference between the total assessed value of your gold ornaments and the exact amount required to close your loan (principal plus accrued interest and foreclosure charges). You receive 100% of this surplus balance transferred immediately to your bank account upon physical XRF verification.',
  },
  {
    question: 'Why do customers choose pledged-gold assistance rather than loan renewal?',
    answer:
      'Compounding interest rates on gold loans can rapidly escalate, and prolonged delays risk default or public auction by the lender. Our assistance helps you preserve your gold equity, avoid auction penalties, settle the lender in full, and pocket the genuine surplus value.',
  },
  {
    question: 'What documents are required for pledged gold release?',
    answer:
      'You must be the original borrower whose name is on the pledge token. Carry the original gold loan pledge receipt, one valid government-issued photo ID (Aadhaar Card, PAN Card, Voter ID, or Passport), and your bank account details for digital payout settlement.',
  },
];

export const ReleasePledgedGoldPage: React.FC = () => {
  const { navigate, openValuationModal } = useApp();

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Breadcrumbs for Hierarchy & Search Engines */}
      <div className="bg-[#1A0B22] border-b border-white/5">
        <Breadcrumbs items={[{ label: 'Release Pledged Gold' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22] border-b border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-7 space-y-5 sm:space-y-6">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
                PLEDGED GOLD RELEASE ASSISTANCE · HYDERABAD &amp; TELANGANA
              </p>
              <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                WANT YOUR <span className="text-[#D4AF37]">GOLD BACK?</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-[#FAF7F2]/80 max-w-xl leading-relaxed">
                Stop paying compounding interest or risking loan auction. We assist you in settling outstanding bank or NBFC gold loans, release your ornaments safely, and unlock your surplus equity transparently.
              </p>

              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href={getCallHref()}
                  className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap shadow-[0_0_30px_rgba(212,175,55,0.28)]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL NOW</span>
                </a>
                <a
                  href={buildDirectWhatsAppUrl(
                    'Hi Aashreya Gold Hub, I need assistance releasing my pledged gold.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-[0.06em] uppercase rounded-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>WHATSAPP PLEDGE DESK</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.servicePledgedGold}
                  alt="Pledged gold release assistance service in Hyderabad by Aashreya Gold Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP VISUAL PROCESS */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#1A0B22]/65 mb-2">
              STRUCTURED SETTLEMENT
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              HOW PLEDGED GOLD RELEASE WORKS.
            </h2>
            <p className="text-[15px] sm:text-base text-[#161219]/75 mt-2 max-w-2xl">
              A transparent, safe, and fully accompanied 4-step process designed to help you unlock the maximum value from your locked ornaments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-5 lg:gap-6">
            {RELEASE_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="bg-white border border-[#1A0B22]/15 rounded-sm p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                  <div className="font-mono-num text-3xl sm:text-4xl font-extrabold text-[#C59B27] mb-5 sm:mb-7">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#1A0B22] mb-2 tracking-[-0.015em]">
                      {step.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#161219]/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {idx < 3 && (
                  <div
                    aria-hidden="true"
                    className="sm:hidden flex items-center justify-center py-2.5 text-[#C59B27] font-mono-num text-lg font-bold"
                  >
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* SERVICE NOTICE & REGULATORY TRANSPARENCY */}
          <div className="mt-10 sm:mt-14 bg-white border border-[#1A0B22]/15 rounded-sm p-6 sm:p-7 flex items-start gap-3.5 shadow-sm">
            <AlertCircle className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
            <div className="space-y-1 text-sm text-[#161219]/80 leading-relaxed">
              <p className="font-bold text-[#1A0B22]">
                Service Transparency &amp; Lending Guidelines
              </p>
              <p>
                Aashreya Gold Hub functions as an independent precious-metal buyer and loan settlement assistance provider. All gold loan closures and pledge release terms remain strictly subject to the records, verification procedures, and redemption rules of your original lending bank or NBFC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO QUESTION & ANSWER SECTION */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#1A0B22] text-[#FAF7F2] border-t border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2">
              FREQUENT QUESTIONS · PLEDGE RELEASE
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              COMMON QUESTIONS ABOUT PLEDGED GOLD.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLEDGED_FAQS.map((item, index) => (
              <article
                key={index}
                className="bg-[#261132] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-7 space-y-3"
              >
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#FAF7F2]">
                  {item.question}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#FAF7F2]/75 leading-relaxed">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          {/* Action Banner */}
          <div className="mt-10 sm:mt-14 bg-gradient-to-r from-[#261132] to-[#1A0B22] border border-[#D4AF37]/40 rounded-sm p-6 sm:p-9 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#FAF7F2] tracking-[-0.015em]">
                READY TO RELEASE YOUR PLEDGED GOLD?
              </h3>
              <p className="text-[15px] text-[#FAF7F2]/75 mt-1 max-w-xl">
                Share your pledge slip on WhatsApp or call our specialist desk for an immediate equity estimate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getCallHref()}
                className="min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CALL NOW</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  openValuationModal({ service: 'Release Pledged Gold' })
                }
                className="min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A0B22] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap cursor-pointer"
              >
                <span>REQUEST ASSISTANCE</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
