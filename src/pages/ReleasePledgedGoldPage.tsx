import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import {
  SITE_CONFIG,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { ResilientImage } from '../components/ResilientImage';

const RELEASE_STEPS = [
  {
    num: '01',
    title: 'Share pledge details',
    desc: 'Bring or WhatsApp your existing bank, NBFC, or financier gold loan pledge receipt.',
  },
  {
    num: '02',
    title: 'Assessment',
    desc: 'We verify the principal, accrued interest, and current value of your pledged ornaments.',
  },
  {
    num: '03',
    title: 'Assistance',
    desc: 'Our executive accompanies you to the pledge institution and settles the outstanding loan amount.',
  },
  {
    num: '04',
    title: 'Gold release process',
    desc: 'Once released, we test purity via XRF and transfer your remaining surplus balance immediately.',
  },
];

export const ReleasePledgedGoldPage: React.FC = () => {
  const { openValuationModal } = useApp();

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* HERO */}
      <section className="py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22] border-b border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-7 space-y-5 sm:space-y-6">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
                PLEDGED GOLD RELEASE ASSISTANCE
              </p>
              <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                WANT YOUR <span className="text-[#D4AF37]">GOLD BACK?</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-[#FAF7F2]/80 max-w-xl leading-relaxed">
                Stop paying compounding interest or risking auction. We settle your gold loan and unlock your surplus equity transparently.
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
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.servicePledgedGold}
                  alt="Pledged gold release service at Aashreya Gold Hub"
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
              SIMPLE 4-STEP SETTLEMENT
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              HOW PLEDGED GOLD RELEASE WORKS.
            </h2>
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
                    <p className="text-[15px] text-[#161219]/75 leading-relaxed">
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

          {/* Action Banner */}
          <div className="mt-10 sm:mt-14 bg-[#1A0B22] text-[#FAF7F2] border border-[#D4AF37]/40 rounded-sm p-6 sm:p-9 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-editorial text-card-title font-bold text-[#FAF7F2] tracking-[-0.015em]">
                READY TO RELEASE YOUR PLEDGED GOLD?
              </h3>
              <p className="text-[15px] text-[#FAF7F2]/75 mt-1">
                Share your pledge details on WhatsApp or call our specialist desk now.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getCallHref()}
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CALL NOW</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  openValuationModal({
                    goldType: 'Pledged Gold',
                    service: 'Release Pledged Gold',
                  })
                }
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap cursor-pointer"
              >
                <span>SHARE PLEDGE ON WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
