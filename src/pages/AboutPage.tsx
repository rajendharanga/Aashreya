import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Scale, Zap } from 'lucide-react';
import {
  SITE_CONFIG,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { ResilientImage } from '../components/ResilientImage';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* HERO */}
      <section className="py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22] border-b border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
            <div className="md:col-span-6 space-y-4 sm:space-y-6">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
                ABOUT AASHREYA GOLD HUB
              </p>
              <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                A MODERN WAY
                <br />
                <span className="text-[#D4AF37]">TO VALUE GOLD.</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-[#FAF7F2]/80 leading-relaxed max-w-xl">
                Built on scientific purity testing, complete transparency, and zero hidden deductions.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.xrfTesting}
                  alt="XRF purity testing technology at Aashreya Gold Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL STORY & LEADERSHIP (IMAGE FIRST ON MOBILE, SIDE-BY-SIDE ON TABLET & DESKTOP) */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-[#1A0B22]/15 shadow-xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.serviceDoorstep}
                  alt="Transparent customer gold valuation at Aashreya Gold Hub"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#C59B27]">
                OUR VISION &amp; LEADERSHIP
              </p>
              <h2 className="font-editorial text-section-title font-extrabold text-[#1A0B22] tracking-[-0.025em]">
                TRUST ENGINEERED INTO EVERY GRAM.
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#161219]/80 leading-relaxed max-w-2xl">
                Founded under the leadership of <strong>{SITE_CONFIG.FOUNDER_NAME}</strong> ({SITE_CONFIG.FOUNDER_ROLE}), {SITE_CONFIG.BRAND_NAME} transforms how families and individuals unlock the value of their gold in Hyderabad and Telangana.
              </p>
              <p className="text-[15px] sm:text-base text-[#161219]/75 leading-relaxed max-w-2xl">
                Every ornament is tested right before your eyes using non-destructive XRF spectrometry and weighed on calibrated precision scales.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#1A0B22]/10">
                <div className="p-4 sm:p-5 bg-white border border-[#1A0B22]/10 rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-[#C59B27] mb-2" />
                  <p className="font-editorial text-base font-bold text-[#1A0B22]">
                    100% Non-Destructive
                  </p>
                  <p className="text-xs text-[#161219]/65 mt-0.5">
                    Certified XRF spectrometer purity check
                  </p>
                </div>
                <div className="p-4 sm:p-5 bg-white border border-[#1A0B22]/10 rounded-sm">
                  <Scale className="w-5 h-5 text-[#C59B27] mb-2" />
                  <p className="font-editorial text-base font-bold text-[#1A0B22]">
                    Transparent Weight
                  </p>
                  <p className="text-xs text-[#161219]/65 mt-0.5">
                    Accurate 24K, 22K &amp; 18K assessment
                  </p>
                </div>
                <div className="p-4 sm:p-5 bg-white border border-[#1A0B22]/10 rounded-sm">
                  <Zap className="w-5 h-5 text-[#C59B27] mb-2" />
                  <p className="font-editorial text-base font-bold text-[#1A0B22]">
                    Instant Settlement
                  </p>
                  <p className="text-xs text-[#161219]/65 mt-0.5">
                    Immediate bank payout on approval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1A0B22] border-t border-[#D4AF37]/25 text-center">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 space-y-6">
          <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
            EXPERIENCE TRANSPARENT VALUATION.
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={getCallHref()}
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL NOW</span>
            </a>
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap"
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
