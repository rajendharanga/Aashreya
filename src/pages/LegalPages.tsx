import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <div>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#C59B27] mb-2">
              LEGAL · {SITE_CONFIG.DOMAIN}
            </p>
            <h1 className="font-editorial text-page-hero font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              PRIVACY POLICY
            </h1>
          </div>

          <div className="space-y-5 sm:space-y-6 text-[15px] sm:text-base text-[#161219]/80 leading-relaxed">
            <p>
              <strong>{SITE_CONFIG.BRAND_NAME}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal and KYC information you share with us through <strong>{SITE_CONFIG.DOMAIN}</strong> or during in-person and doorstep gold valuation appointments.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-[#1A0B22] pt-2">
              1. Information We Collect
            </h2>
            <p>
              When you request a valuation via WhatsApp, phone call, or in-person consultation, we collect only the details necessary to serve you: your name, contact number, approximate gold weight/type, and statutory KYC verification documents required for compliant precious-metal transactions.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-[#1A0B22] pt-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your details are used strictly to provide accurate gold valuation quotes, assist with pledged gold release, process instant bank settlements, and comply with applicable Indian regulatory and anti-fraud guidelines. We never sell or rent customer data to third-party marketers.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-[#1A0B22] pt-2">
              3. Contact for Privacy Enquiries
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your records, write to us at{' '}
              <a href={`mailto:${SITE_CONFIG.EMAIL}`} className="font-bold text-[#1A0B22] underline break-all">
                {SITE_CONFIG.EMAIL}
              </a>{' '}
              or call <strong>{SITE_CONFIG.PHONE}</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      <section className="py-12 sm:py-16 lg:py-24 bg-[#FAF7F2] text-[#161219]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <div>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#C59B27] mb-2">
              LEGAL · {SITE_CONFIG.DOMAIN}
            </p>
            <h1 className="font-editorial text-page-hero font-extrabold text-[#1A0B22] tracking-[-0.025em]">
              TERMS &amp; CONDITIONS
            </h1>
          </div>

          <div className="space-y-5 sm:space-y-6 text-[15px] sm:text-base text-[#161219]/80 leading-relaxed">
            <h2 className="text-lg sm:text-xl font-bold text-[#1A0B22]">
              1. Ownership &amp; KYC Verification
            </h2>
            <p>
              All customers selling gold or requesting pledged-gold release assistance through <strong>{SITE_CONFIG.BRAND_NAME}</strong> must be at least 18 years of age, the lawful owner of the ornaments presented, and must provide valid government-issued photo ID and address proof prior to settlement.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-[#1A0B22]">
              2. Purity Testing &amp; Net Weight Assessment
            </h2>
            <p>
              Final purchase offers are based on net gold weight (excluding non-gold stones, beads, wax, or alloy fastenings) and exact carat purity verified using non-destructive XRF spectrometer testing conducted in the customer&apos;s presence.
            </p>

            <div
              id="disclaimer"
              className="p-5 sm:p-6 bg-white border border-[#1A0B22]/15 rounded-sm space-y-2"
            >
              <h2 className="text-base sm:text-lg font-extrabold text-[#1A0B22] uppercase tracking-wide">
                3. Valuation &amp; Assessment Disclaimer
              </h2>
              <p className="text-[14px] sm:text-sm text-[#161219]/75">
                Preliminary valuation enquiries via phone or WhatsApp are indicative only. Final valuation offers depend on physical XRF purity verification and net gold weight assessment after non-gold stone or alloy deduction conducted in the customer&apos;s presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
