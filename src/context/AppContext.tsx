import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { SITE_CONFIG, FAQ_ITEMS } from '../config/siteConfig';

export type RoutePath =
  | '/'
  | '/sell-gold'
  | '/release-pledged-gold'
  | '/about-us'
  | '/contact-us'
  | '/faq'
  | '/privacy-policy'
  | '/terms-and-conditions';

export interface ValuationModalPrefill {
  goldType?: string;
  weight?: string;
  service?: string;
}

interface AppContextValue {
  currentPath: RoutePath;
  navigate: (path: RoutePath | string, hash?: string) => void;
  isValuationModalOpen: boolean;
  valuationPrefill: ValuationModalPrefill;
  openValuationModal: (prefill?: ValuationModalPrefill) => void;
  closeValuationModal: () => void;
}

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/sell-gold',
  '/release-pledged-gold',
  '/about-us',
  '/contact-us',
  '/faq',
  '/privacy-policy',
  '/terms-and-conditions',
];

function normalizePath(rawPath: string): RoutePath {
  const cleaned = (rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/') as RoutePath;
  return VALID_ROUTES.includes(cleaned) ? cleaned : '/';
}

const PAGE_SEO: Record<
  RoutePath,
  { title: string; description: string; schemaType?: 'LocalBusiness' | 'FAQPage' }
> = {
  '/': {
    title: 'Aashreya Gold Hub — Your Gold. Your Value. | Sell Gold & Release Pledged Gold',
    description:
      'Turn your old, unused or pledged gold into real value with Aashreya Gold Hub. Certified XRF purity testing, transparent valuation, and instant payment in Hyderabad & Telangana.',
    schemaType: 'LocalBusiness',
  },
  '/sell-gold': {
    title: 'Sell Your Gold Transparently — Aashreya Gold Hub Hyderabad',
    description:
      'Sell old jewellery, broken ornaments, and gold coins with 100% transparent XRF purity testing and instant bank payment at Aashreya Gold Hub.',
    schemaType: 'LocalBusiness',
  },
  '/release-pledged-gold': {
    title: 'Release Pledged Gold Easily — Aashreya Gold Hub | Get Your Gold Back',
    description:
      'Need help releasing pledged gold from banks or financiers? Aashreya Gold Hub settles your pledge and unlocks the full value of your gold transparently.',
    schemaType: 'LocalBusiness',
  },
  '/about-us': {
    title: 'About Aashreya Gold Hub — A Modern, Transparent Way to Value Gold',
    description:
      'Discover how Aashreya Gold Hub brings modern financial transparency, scientific XRF purity testing, and instant settlement to gold buying in India.',
  },
  '/contact-us': {
    title: 'Contact Aashreya Gold Hub — Call, WhatsApp or Request Doorstep Valuation',
    description:
      'Talk directly to Aashreya Gold Hub via Call or WhatsApp for free gold valuation, pledged gold release assistance, or doorstep gold testing in Hyderabad.',
    schemaType: 'LocalBusiness',
  },
  '/faq': {
    title: 'Frequently Asked Questions — Gold Valuation, XRF Testing & Payment | Aashreya Gold Hub',
    description:
      'Clear answers on how gold is valued, XRF non-destructive purity testing, required KYC documents, doorstep valuation, and pledged gold release.',
    schemaType: 'FAQPage',
  },
  '/privacy-policy': {
    title: 'Privacy Policy — Aashreya Gold Hub (aashreyagold.com)',
    description:
      'Read how Aashreya Gold Hub protects your personal information, KYC records, and valuation enquiries.',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions and Valuation Disclaimer — Aashreya Gold Hub',
    description:
      'Review the terms, KYC compliance requirements, and valuation disclaimers for Aashreya Gold Hub.',
  },
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );
  const [isValuationModalOpen, setIsValuationModalOpen] = useState<boolean>(false);
  const [valuationPrefill, setValuationPrefill] = useState<ValuationModalPrefill>({});

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO tags, OpenGraph, Canonical & Schema.org JSON-LD on route change
  useEffect(() => {
    const seo = PAGE_SEO[currentPath] || PAGE_SEO['/'];
    document.title = seo.title;

    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propMatch = selector.match(/property="([^"]+)"/);
          if (propMatch) el.setAttribute('property', propMatch[1]);
        } else if (selector.includes('name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) el.setAttribute('name', nameMatch[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta(
      'meta[property="og:url"]',
      'content',
      `${SITE_CONFIG.SITE_URL}${currentPath === '/' ? '' : currentPath}`
    );
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      'href',
      `${SITE_CONFIG.SITE_URL}${currentPath === '/' ? '/' : currentPath}`
    );

    // Structured Data JSON-LD
    let ldScript = document.getElementById('aashreya-json-ld');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'aashreya-json-ld';
      ldScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldScript);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      name: SITE_CONFIG.BRAND_NAME,
      url: SITE_CONFIG.SITE_URL,
      logo: SITE_CONFIG.LOGO_URL,
      image: SITE_CONFIG.LOGO_URL,
      email: SITE_CONFIG.EMAIL,
      telephone: SITE_CONFIG.PHONE,
      priceRange: '₹₹₹',
      description: seo.description,
      founder: {
        '@type': 'Person',
        name: SITE_CONFIG.FOUNDER_NAME,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${SITE_CONFIG.HEADQUARTERS.line1}, ${SITE_CONFIG.HEADQUARTERS.line2}`,
        addressLocality: SITE_CONFIG.HEADQUARTERS.city,
        addressRegion: SITE_CONFIG.HEADQUARTERS.state,
        postalCode: SITE_CONFIG.HEADQUARTERS.postalCode,
        addressCountry: 'IN',
      },
      areaServed: ['Hyderabad', 'Telangana', 'Andhra Pradesh', 'India'],
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    ldScript.textContent = JSON.stringify(
      currentPath === '/faq' || currentPath === '/'
        ? [localBusinessSchema, faqSchema]
        : localBusinessSchema
    );
  }, [currentPath]);

  const navigate = useCallback((path: RoutePath | string, hash?: string) => {
    const target = normalizePath(path);
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target + (hash ? `#${hash}` : ''));
      setCurrentPath(target);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openValuationModal = useCallback((prefill?: ValuationModalPrefill) => {
    setValuationPrefill(prefill || {});
    setIsValuationModalOpen(true);
  }, []);

  const closeValuationModal = useCallback(() => {
    setIsValuationModalOpen(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        isValuationModalOpen,
        valuationPrefill,
        openValuationModal,
        closeValuationModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
}
