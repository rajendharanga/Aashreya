import heroGoldImg from '../assets/images/hero_indian_gold_luxury_1790611753569.jpg';
import serviceSellGoldImg from '../assets/images/service_sell_gold_1790611770328.jpg';
import servicePledgedGoldImg from '../assets/images/service_pledged_gold_1790611784563.jpg';
import serviceDoorstepImg from '../assets/images/service_doorstep_valuation_1790611796612.jpg';
import xrfTestingImg from '../assets/images/xrf_purity_testing_1790611808335.jpg';

export const SITE_CONFIG = {
  BRAND_NAME: 'Aashreya Gold Hub',
  BRAND_SHORT: 'AASHREYA',
  DOMAIN: 'aashreyagold.com',
  SITE_URL: 'https://aashreyagold.com',
  EMAIL: 'info@aashreyagold.com',
  PHONE: '+91 79959 84433',
  PHONE_RAW: '+917995984433',
  SECONDARY_PHONE: '+91 79959 88282',
  SECONDARY_PHONE_RAW: '+917995988282',
  WHATSAPP_NUMBER: '917995984433',
  LOGO_URL: 'https://static.wixstatic.com/media/14ff0a_518248a4b63941da9452f3adb633d7c2~mv2.png',
  FOUNDER_NAME: 'Sangam Reddy Siva Prasad',
  FOUNDER_ROLE: 'Founder & Managing Director',
  HEADQUARTERS: {
    line1: '1/B, Aashrey Heights, 5th Floor, 8-3-720',
    line2: 'Lane Number 3, Shalivahana Nagar, Yella Reddy Guda',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500073',
    country: 'India',
    hours: 'Mon – Sat · 10:00 AM – 7:30 PM IST',
  },
  COLORS: {
    deepPlum: '#1A0B22',
    plumSurface: '#261132',
    plumElevated: '#331842',
    metallicGold: '#D4AF37',
    champagneGold: '#E6C97A',
    warmIvory: '#FAF7F2',
    softWhite: '#FFFFFF',
    darkCharcoal: '#161219',
  },
  IMAGES: {
    heroGold: heroGoldImg,
    serviceSellGold: serviceSellGoldImg,
    servicePledgedGold: servicePledgedGoldImg,
    serviceDoorstep: serviceDoorstepImg,
    xrfTesting: xrfTestingImg,
  },
} as const;

export interface ValuationRequestPayload {
  name: string;
  phone: string;
  goldType: string;
  weight: string;
  service: string;
}

export function buildWhatsAppValuationUrl(payload: ValuationRequestPayload): string {
  const message = `Hi Aashreya Gold Hub, I would like to get a gold valuation.

Name: ${payload.name.trim() || 'Not specified'}
Phone: ${payload.phone.trim() || 'Not specified'}
Gold Type: ${payload.goldType}
Approx. Weight: ${payload.weight.trim() ? `${payload.weight.trim()}g` : 'To be weighed'}
Service: ${payload.service}`;

  return `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildDirectWhatsAppUrl(customMessage?: string): string {
  const text =
    customMessage ||
    'Hi Aashreya Gold Hub, I would like to enquire about selling or releasing my gold.';
  return `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getCallHref(useSecondary = false): string {
  return `tel:${useSecondary ? SITE_CONFIG.SECONDARY_PHONE_RAW : SITE_CONFIG.PHONE_RAW}`;
}

export const FAQ_ITEMS = [
  {
    id: 'valuation',
    question: 'How is my gold valued?',
    answer:
      'Your gold value is determined transparently right in front of you based on exact net weight in grams on calibrated digital scales and exact carat purity verified via non-destructive XRF technology, with zero hidden deductions.',
  },
  {
    id: 'items',
    question: 'What gold items do you buy?',
    answer:
      'We purchase all forms of genuine yellow and white gold, including old Indian jewellery, broken ornaments, single earrings, tangled chains, heirloom pieces, gold coins, biscuits, and released pledged gold across 24K, 22K, and 18K purities.',
  },
  {
    id: 'purity',
    question: 'How is gold purity tested?',
    answer:
      'We use German-engineered XRF (X-Ray Fluorescence) spectrometer machines. The test is 100% non-destructive, requires zero acid or melting during inspection, and delivers a digital carat accuracy readout within seconds while you watch.',
  },
  {
    id: 'docs',
    question: 'What documents are required?',
    answer:
      'For a compliant and secure transaction, please carry one valid government-issued photo ID (Aadhaar Card, PAN Card, Passport, or Voter ID) and address proof, along with original purchase invoices or pledge receipts if available.',
  },
  {
    id: 'payment',
    question: 'How quickly will I receive payment?',
    answer:
      'Once you approve the final valuation quote, payment is transferred immediately—before you step out—via instant bank transfer (IMPS / NEFT / RTGS / UPI) or in accordance with statutory norms.',
  },
  {
    id: 'doorstep',
    question: 'Can I request doorstep valuation?',
    answer:
      'Yes. If you prefer privacy and convenience at home, our trained valuation specialists can visit your residence with portable precision scales and purity testing equipment. Call or WhatsApp us to schedule an appointment.',
  },
  {
    id: 'pledged',
    question: 'How does pledged-gold release work?',
    answer:
      'Share your existing gold loan or pledge receipt with our team. We verify the principal and interest due, accompany you to settle the institution directly to release your ornaments, test the gold transparently, and pay you the remaining surplus value immediately.',
  },
] as const;
