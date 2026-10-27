import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Scale, Zap, MapPin, Award, CheckCircle2 } from 'lucide-react';
import {
  SITE_CONFIG,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { ResilientImage } from '../components/ResilientImage';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Breadcrumbs */}
      <div className="bg-[#1A0B22] border-b border-white/5">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>

      {/* HERO */}
      <section className="py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22] border-b border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
            <div className="md:col-span-6 space-y-4 sm:space-y-6">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37]">
                ABOUT AASHREYA GOLD HUB · HYDERABAD
              </p>
              <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                A MODERN WAY
                <br />
                <span className="text-[#D4AF37]">TO VALUE GOLD.</span>
              </h1>
              <p className="text-[15px] sm:text-lg text-[#FAF7F2]/80 leading-relaxed max-w-xl">
                Founded on scientific XRF purity testing, complete operational transparency, and immediate digital bank settlements.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.xrfTesting}
                  alt="Scientific XRF gold purity testing technology at Aashreya Gold Hub Hyderabad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL STORY & LEADERSHIP */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-[#1A0B22]/15 shadow-xl">
                <ResilientImage
                  src={SITE_CONFIG.IMAGES.serviceDoorstep}
                  alt="Customer gold valuation and consultation at Aashreya Gold Hub"
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
              <p className="text-[15px] sm:text-[17px] text-[#161219]/85 leading-relaxed max-w-2xl">
                Founded under the leadership of <strong>{SITE_CONFIG.FOUNDER_NAME}</strong> ({SITE_CONFIG.FOUNDER_ROLE}), {SITE_CONFIG.BRAND_NAME} was established to eliminate the opacity, guesswork, and arbitrary deductions historically associated with selling precious metals in India.
              </p>
              <p className="text-[14px] sm:text-base text-[#161219]/75 leading-relaxed max-w-2xl">
                Operating out of our flagship hub in Jubilee Hills, Hyderabad, we serve customers across Hyderabad and Telangana by combining laboratory-grade German XRF spectrometry with precision digital scales, ensuring that every customer sees the exact karat and net weight of their gold before a single rupee is quoted.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#1A0B22]/10">
                <div className="p-4 sm:p-5 bg-white border border-[#1A0B22]/10 rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-[#C59B27] mb-2" />
                  <p className="font-editorial text-base font-bold text-[#1A0B22]">
                    100% Non-Destructive
                  </p>
                  <p className="text-xs text-[#161219]/65 mt-0.5">
                    German XRF spectrometer analysis without acid or melting
                  </p>
                </div>
                <div className="p-4 sm:p-5 bg-white border border-[#1A0B22]/10 rounded-sm">
                  <Scale className="w-5 h-5 text-[#C59B27] mb-2" />
                  <p className="font-editorial text-base font-bold text-[#1A0B22]">
                    Transparent Weighing
                  </p>
                  <p className="text-xs text-[#161219]/65 mt-0.5">
                    Calibrated digital scale readout in direct customer view
                  </p>
                </div>
                <div className="p-4 sm:p-5 bg-white border border-[#1A0B22]/10 rounded-sm">
                  <Zap className="w-5 h-5 text-[#C59B27] mb-2" />
                  <p className="font-editorial text-base font-bold text-[#1A0B22]">
                    Immediate Settlement
                  </p>
                  <p className="text-xs text-[#161219]/65 mt-0.5">
                    Instant IMPS / NEFT / RTGS / UPI digital bank transfers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACT SHEET FOR AEO & SEARCH ENGINES */}
      <section className="py-14 sm:py-18 bg-[#1A0B22] text-[#FAF7F2] border-t border-[#D4AF37]/20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2">
              FACTUAL SUMMARY
            </p>
            <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2]">
              AASHREYA GOLD HUB AT A GLANCE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#261132] border border-[#D4AF37]/25 rounded-sm p-6 space-y-2">
              <span className="text-xs font-mono-num text-[#D4AF37] uppercase tracking-wider block">
                FOUNDER &amp; MD
              </span>
              <p className="font-editorial text-lg font-bold text-[#FAF7F2]">
                {SITE_CONFIG.FOUNDER_NAME}
              </p>
              <p className="text-xs text-[#FAF7F2]/65">
                Steering vision, transparency, and high service benchmarks.
              </p>
            </div>

            <div className="bg-[#261132] border border-[#D4AF37]/25 rounded-sm p-6 space-y-2">
              <span className="text-xs font-mono-num text-[#D4AF37] uppercase tracking-wider block">
                HEADQUARTERS
              </span>
              <p className="font-editorial text-lg font-bold text-[#FAF7F2]">
                Jubilee Hills, Hyderabad
              </p>
              <p className="text-xs text-[#FAF7F2]/65">
                Near Film Nagar, Road No. 7, Jubilee Hills, Telangana 500033.
              </p>
            </div>

            <div className="bg-[#261132] border border-[#D4AF37]/25 rounded-sm p-6 space-y-2">
              <span className="text-xs font-mono-num text-[#D4AF37] uppercase tracking-wider block">
                CORE DISCIPLINES
              </span>
              <p className="font-editorial text-lg font-bold text-[#FAF7F2]">
                Valuation &amp; Liquidity
              </p>
              <p className="text-xs text-[#FAF7F2]/65">
                Selling gold, pledged gold assistance, and doorstep valuation.
              </p>
            </div>

            <div className="bg-[#261132] border border-[#D4AF37]/25 rounded-sm p-6 space-y-2">
              <span className="text-xs font-mono-num text-[#D4AF37] uppercase tracking-wider block">
                SETTLEMENT
              </span>
              <p className="font-editorial text-lg font-bold text-[#FAF7F2]">
                Instant Bank Transfer
              </p>
              <p className="text-xs text-[#FAF7F2]/65">
                100% digital bank payout with zero hidden deductions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1A0B22] to-[#261132] border-t border-[#D4AF37]/25 text-center">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 space-y-6">
          <h2 className="font-editorial text-section-title font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
            EXPERIENCE TRANSPARENT VALUATION TODAY.
          </h2>
          <p className="text-[15px] sm:text-base text-[#FAF7F2]/80 max-w-xl mx-auto">
            Connect with our specialist desk for an in-person assessment in Jubilee Hills or request a doorstep valuation.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={getCallHref()}
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap shadow-[0_0_24px_rgba(212,175,55,0.25)]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL +91 7981 696969</span>
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
