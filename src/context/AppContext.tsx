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

interface PageMetaConfig {
  title: string;
  description: string;
  breadcrumbName: string;
  pageType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
}

const PAGE_SEO: Record<RoutePath, PageMetaConfig> = {
  '/': {
    title: 'Aashreya Gold Hub — Your Gold. Your Value. | Sell Gold & Release Pledged Gold',
    description:
      'Turn your old, unused or pledged gold into real value with Aashreya Gold Hub in Hyderabad & Telangana. Certified XRF purity testing, transparent valuation, and instant bank payout.',
    breadcrumbName: 'Home',
    pageType: 'WebPage',
  },
  '/sell-gold': {
    title: 'Sell Old Gold in Hyderabad — XRF Purity Testing & Instant Bank Payout | Aashreya Gold Hub',
    description:
      'Sell old jewellery, broken ornaments, coins, and bullion with 100% transparent non-destructive XRF testing and instant bank payout at Aashreya Gold Hub.',
    breadcrumbName: 'Sell Gold',
    pageType: 'WebPage',
  },
  '/release-pledged-gold': {
    title: 'Release Pledged Gold Assistance — Settle Gold Loans & Unlock Value | Aashreya Gold Hub',
    description:
      'Assistance releasing pledged gold from banks, NBFCs, and pawnbrokers in Hyderabad. We help settle loan dues and unlock your gold surplus value transparently.',
    breadcrumbName: 'Release Pledged Gold',
    pageType: 'WebPage',
  },
  '/about-us': {
    title: 'About Aashreya Gold Hub — Transparent Gold Valuation & Leadership in Hyderabad',
    description:
      'Learn about Aashreya Gold Hub, founded under the leadership of Sangam Reddy Siva Prasad. Laboratory-grade XRF spectrometry, honest valuation, and instant settlement.',
    breadcrumbName: 'About Us',
    pageType: 'AboutPage',
  },
  '/contact-us': {
    title: 'Contact Aashreya Gold Hub — Jubilee Hills, Hyderabad | Call, WhatsApp & Valuation',
    description:
      'Contact Aashreya Gold Hub in Jubilee Hills, Hyderabad. Call +91 7981 696969 or WhatsApp for transparent gold valuation, pledged gold release, or doorstep visits.',
    breadcrumbName: 'Contact Us',
    pageType: 'ContactPage',
  },
  '/faq': {
    title: 'Gold Valuation FAQ — XRF Testing, KYC Documents & Payment | Aashreya Gold Hub',
    description:
      'Frequently asked questions on gold valuation, non-destructive XRF purity testing, KYC documents, net weight calculation, doorstep visits, and pledged gold release.',
    breadcrumbName: 'FAQ',
    pageType: 'FAQPage',
  },
  '/privacy-policy': {
    title: 'Privacy Policy — Aashreya Gold Hub (aashreyagold.com)',
    description:
      'Read how Aashreya Gold Hub protects your personal data, KYC documents, and valuation enquiries in compliance with Indian privacy and regulatory guidelines.',
    breadcrumbName: 'Privacy Policy',
    pageType: 'WebPage',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions and Valuation Disclaimer — Aashreya Gold Hub',
    description:
      'Review the transaction terms, KYC compliance requirements, and valuation disclaimers for precious-metal transactions at Aashreya Gold Hub.',
    breadcrumbName: 'Terms & Conditions',
    pageType: 'WebPage',
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

  // Update SEO tags, OpenGraph, Twitter, Canonical & Schema.org JSON-LD on route change
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

    const canonicalUrl = `${SITE_CONFIG.SITE_URL}${currentPath === '/' ? '/' : currentPath}`;

    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:locale"]', 'content', 'en_IN');
    setMeta('meta[property="og:site_name"]', 'content', SITE_CONFIG.BRAND_NAME);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Enforce official favicon & touch icon
    const setLink = (rel: string, href: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (type) link.setAttribute('type', type);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setLink('icon', SITE_CONFIG.LOGO_URL, 'image/png');
    setLink('shortcut icon', SITE_CONFIG.LOGO_URL, 'image/png');
    setLink('apple-touch-icon', SITE_CONFIG.LOGO_URL);

    // =========================================================================
    // RICH SCHEMA.ORG JSON-LD GENERATION (LOCALBUSINESS + WEBSITE + BREADCRUMBS + HOWTO + FAQ)
    // =========================================================================
    let ldScript = document.getElementById('aashreya-json-ld');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'aashreya-json-ld';
      ldScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldScript);
    }

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      '@id': `${SITE_CONFIG.SITE_URL}/#organization`,
      name: SITE_CONFIG.BRAND_NAME,
      legalName: SITE_CONFIG.BRAND_NAME,
      url: SITE_CONFIG.SITE_URL,
      logo: SITE_CONFIG.LOGO_URL,
      image: SITE_CONFIG.LOGO_URL,
      email: SITE_CONFIG.EMAIL,
      telephone: SITE_CONFIG.PHONE,
      priceRange: '₹₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, IMPS, NEFT, RTGS, UPI, Bank Transfer',
      description:
        'Aashreya Gold Hub provides scientific non-destructive XRF gold purity testing, honest valuation, instant bank transfer settlement, and pledged gold loan release assistance in Hyderabad & Telangana.',
      founder: {
        '@type': 'Person',
        name: SITE_CONFIG.FOUNDER_NAME,
        jobTitle: SITE_CONFIG.FOUNDER_ROLE,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${SITE_CONFIG.HEADQUARTERS.line1}, ${SITE_CONFIG.HEADQUARTERS.line2}`,
        addressLocality: SITE_CONFIG.HEADQUARTERS.city,
        addressRegion: SITE_CONFIG.HEADQUARTERS.state,
        postalCode: SITE_CONFIG.HEADQUARTERS.postalCode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.4326,
        longitude: 78.4071,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:30',
        },
      ],
      areaServed: [
        {
          '@type': 'City',
          name: 'Hyderabad',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Telangana',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gold Valuation & Liquidity Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sell Old Gold Ornaments & Bullion',
              description:
                'Turn old, broken, or unused 24K, 22K, and 18K gold jewellery and coins into instant liquidity with zero hidden deductions.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Non-Destructive XRF Gold Purity Testing',
              description:
                'Scientific German-engineered X-Ray Fluorescence spectrometry determining exact karat value without acid or melting.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pledged Gold Loan Release Assistance',
              description:
                'Assisting customers to settle outstanding pawn or bank gold loans, release ornaments, and unlock remaining equity.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Doorstep Gold Valuation',
              description:
                'Private, secure in-home gold valuation with portable certified precision scales and testing equipment.',
            },
          },
        ],
      },
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.SITE_URL}/#website`,
      url: SITE_CONFIG.SITE_URL,
      name: SITE_CONFIG.BRAND_NAME,
      publisher: {
        '@id': `${SITE_CONFIG.SITE_URL}/#organization`,
      },
      inLanguage: 'en-IN',
    };

    // Breadcrumbs for inner pages
    const breadcrumbSchema =
      currentPath !== '/'
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_CONFIG.SITE_URL}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: seo.breadcrumbName,
                item: canonicalUrl,
              },
            ],
          }
        : null;

    // FAQ schema
    const faqSchema =
      currentPath === '/faq' || currentPath === '/'
        ? {
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
          }
        : null;

    // HowTo schema for Sell Gold
    const sellGoldHowToSchema =
      currentPath === '/sell-gold'
        ? {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Sell Old Gold at Aashreya Gold Hub',
            description:
              'A straightforward, transparent 4-step process to sell old gold jewellery with XRF purity verification and instant bank payment.',
            totalTime: 'PT20M',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Bring Your Gold and Government ID',
                text: 'Visit our Jubilee Hills hub or request a doorstep valuation. Carry one valid government ID (Aadhaar, PAN, Voter ID, or Passport).',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Non-Destructive XRF Purity Testing',
                text: 'Your gold is analyzed using laboratory-grade XRF spectrometry in your presence with zero acid damage and zero melting.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Calibrated Digital Weighing & Value Assessment',
                text: 'Net gold weight is recorded on certified precision digital scales. Transparent valuation is calculated with zero hidden deductions.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Instant Digital Payment Settlement',
                text: 'Upon your approval of the valuation quote, funds are transferred immediately to your verified bank account via IMPS, NEFT, RTGS, or UPI.',
              },
            ],
          }
        : null;

    // HowTo schema for Release Pledged Gold
    const releasePledgedHowToSchema =
      currentPath === '/release-pledged-gold'
        ? {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Release Pledged Gold with Aashreya Gold Hub',
            description:
              'Step-by-step guidance to settle your bank or NBFC gold loan, release your pledged ornaments, and receive your surplus value.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Share Pledge Receipt Details',
                text: 'Share your bank or financier pledge loan receipt via WhatsApp or call our specialist desk to review the principal and accrued interest.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Value & Equity Assessment',
                text: 'We estimate the current gold value of your ornaments and calculate your net positive surplus after loan clearance.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Accompanied Loan Settlement',
                text: 'Our specialist accompanies you to the financial institution and provides funds to settle the loan dues directly.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Purity Testing & Immediate Surplus Payout',
                text: 'Once released, the ornaments undergo in-person XRF verification, and your remaining cash equity is transferred instantly to your bank account.',
              },
            ],
          }
        : null;

    const schemaGraph = [
      organizationSchema,
      websiteSchema,
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ...(faqSchema ? [faqSchema] : []),
      ...(sellGoldHowToSchema ? [sellGoldHowToSchema] : []),
      ...(releasePledgedHowToSchema ? [releasePledgedHowToSchema] : []),
    ];

    ldScript.textContent = JSON.stringify(schemaGraph);
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
