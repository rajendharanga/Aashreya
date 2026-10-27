import React, { useState } from 'react';
import { ChevronDown, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import {
  FAQ_ITEMS,
  SITE_CONFIG,
  getCallHref,
  buildDirectWhatsAppUrl,
} from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const FaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      {/* Breadcrumbs */}
      <div className="bg-[#1A0B22] border-b border-white/5">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
      </div>

      <section className="py-10 sm:py-14 lg:py-[65px] bg-[#1A0B22]">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#D4AF37] mb-2.5">
              KNOWLEDGE BASE &amp; FREQUENT QUESTIONS
            </p>
            <h1 className="font-editorial text-page-hero font-extrabold text-[#FAF7F2] tracking-[-0.025em]">
              FREQUENTLY ASKED QUESTIONS.
            </h1>
            <p className="text-[15px] sm:text-base text-[#FAF7F2]/80 mt-2 max-w-2xl leading-relaxed">
              Clear, transparent answers on gold valuation standards, non-destructive XRF testing, required KYC documents, doorstep appointments, and pledged gold release in Hyderabad.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    className="w-full min-h-[48px] flex items-center justify-between gap-4 text-left py-1.5 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] sm:text-xl font-bold text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-2.5 pb-1 pr-4 sm:pr-8 text-[15px] sm:text-base text-[#FAF7F2]/80 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 bg-[#261132] border border-[#D4AF37]/35 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
            <div>
              <h2 className="font-editorial text-card-title font-extrabold text-[#FAF7F2]">
                HAVE A SPECIFIC VALUATION QUESTION?
              </h2>
              <p className="text-[15px] text-[#FAF7F2]/75 mt-1">
                Speak directly with our gold valuation specialists at our Jubilee Hills desk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getCallHref()}
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CALL +91 7981 696969</span>
              </a>
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A0B22] border border-[#D4AF37]/40 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
