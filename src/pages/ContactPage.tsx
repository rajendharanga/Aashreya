import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import {
  SITE_CONFIG,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { ValuationWhatsAppForm } from '../components/ValuationModal';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      <section className="py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Direct Contact Column */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2.5">
                  DIRECT CONCIERGE DESK
                </p>
                <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
                  TALK TO <span className="text-[#D4AF37]">AASHREYA.</span>
                </h1>
              </div>

              {/* Large Easy-to-Tap CALL NOW & WHATSAPP US Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={getCallHref()}
                  className="flex-1 min-h-[54px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm transition-colors whitespace-nowrap shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={buildDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[54px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/45 text-[#FAF7F2] font-extrabold text-sm tracking-wider uppercase rounded-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>WHATSAPP US</span>
                </a>
              </div>

              <div className="space-y-5 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-[#E6C97A]">
                      PHONE
                    </p>
                    <a
                      href={getCallHref()}
                      className="block font-mono-num text-lg font-bold text-[#FAF7F2] hover:text-[#D4AF37] mt-0.5 py-0.5"
                    >
                      {SITE_CONFIG.PHONE}
                    </a>
                    <a
                      href={getCallHref(true)}
                      className="block font-mono-num text-sm text-[#FAF7F2]/70 hover:text-[#D4AF37] py-0.5"
                    >
                      {SITE_CONFIG.SECONDARY_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-[#E6C97A]">
                      OFFICIAL EMAIL
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.EMAIL}`}
                      className="block text-base font-bold text-[#FAF7F2] hover:text-[#D4AF37] mt-0.5 break-all py-0.5"
                    >
                      {SITE_CONFIG.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-[#E6C97A]">
                      CORPORATE HUB
                    </p>
                    <p className="text-[15px] text-[#FAF7F2]/80 mt-0.5 leading-relaxed">
                      {SITE_CONFIG.HEADQUARTERS.line1}, {SITE_CONFIG.HEADQUARTERS.line2},{' '}
                      {SITE_CONFIG.HEADQUARTERS.city}, {SITE_CONFIG.HEADQUARTERS.state}{' '}
                      {SITE_CONFIG.HEADQUARTERS.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-[#E6C97A]">
                      VALUATION HOURS
                    </p>
                    <p className="text-[15px] text-[#FAF7F2]/80 mt-0.5">
                      {SITE_CONFIG.HEADQUARTERS.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right WhatsApp Valuation Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#261132] border border-[#D4AF37]/40 rounded-sm p-6 sm:p-9 shadow-2xl">
                <p className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-1">
                  INSTANT WHATSAPP ENQUIRY
                </p>
                <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] mb-2">
                  GET A FREE GOLD VALUATION
                </h2>
                <p className="text-[15px] text-[#FAF7F2]/75 mb-6">
                  Submit your details directly to our official WhatsApp valuation desk.
                </p>

                <ValuationWhatsAppForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
