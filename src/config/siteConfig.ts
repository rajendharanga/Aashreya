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
  PHONE: '+91 7981 696969',
  PHONE_RAW: '+917981696969',
  WHATSAPP_NUMBER: '917981696969',
  LOGO_URL: 'https://static.wixstatic.com/media/14ff0a_518248a4b63941da9452f3adb633d7c2~mv2.png',
  FOUNDER_NAME: 'Sangam Reddy Siva Prasad',
  FOUNDER_ROLE: 'Founder & Managing Director',
  HEADQUARTERS: {
    line1: 'Ground Floor, Plot No. 8-2-299/82/W/B2',
    line2: "Women's Cooperative Housing Society, Road No. 7, Near Film Nagar, Jubilee Hills",
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500033',
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

export function getCallHref(): string {
  return `tel:${SITE_CONFIG.PHONE_RAW}`;
}

export const FAQ_ITEMS = [
  {
    id: 'valuation',
    question: 'How is my gold valued at Aashreya Gold Hub?',
    answer:
      'Your gold value is determined transparently in your presence based on two verified metrics: the exact net weight measured on calibrated digital scales (with non-gold stones deducted) and the exact carat purity determined via non-destructive XRF spectrometry. We calculate the valuation quote openly with zero hidden melt loss or melting deductions.',
  },
  {
    id: 'items',
    question: 'What gold items can I sell?',
    answer:
      'We purchase all forms of genuine gold ornaments and bullion across 24K, 22K, and 18K purities. This includes heirloom jewellery, bangles, necklaces, rings, chains, single earrings, broken or dented items, gold coins, biscuits, bars, and gold ornaments released from bank or pawnbroker pledges.',
  },
  {
    id: 'purity',
    question: 'How is gold purity tested, and will it damage my jewellery?',
    answer:
      'We utilize German-engineered X-Ray Fluorescence (XRF) spectrometry. This testing method is 100% non-destructive and requires zero acid, rubbing, or melting during inspection. The XRF analyzer scans the atomic composition of the alloy within seconds, displaying the exact gold percentage and karat grade on a digital screen before your eyes.',
  },
  {
    id: 'docs',
    question: 'What documents (KYC) are required to sell gold in India?',
    answer:
      'In accordance with Indian regulatory compliance and anti-fraud guidelines, customers must be at least 18 years of age and provide one valid government-issued photo identity proof (Aadhaar Card, PAN Card, Voter ID, or Passport) along with address proof. If available, original purchase invoices or pledge receipts help expedite verification.',
  },
  {
    id: 'payment',
    question: 'How and when do I receive payment for my gold?',
    answer:
      'Payment is settled immediately upon your written acceptance of the valuation quote. The full amount is credited directly to your bank account via instant digital transfer (IMPS, NEFT, RTGS, or UPI) before you leave our hub. We provide a clear digital receipt for every transaction.',
  },
  {
    id: 'doorstep',
    question: 'Do you offer doorstep gold valuation in Hyderabad?',
    answer:
      'Yes, Aashreya Gold Hub provides private, doorstep gold valuation for clients in Hyderabad and surrounding Telangana areas. Our certified valuation officers visit your home with portable calibrated digital scales and secure testing kits to conduct an in-person assessment in complete privacy.',
  },
  {
    id: 'pledged',
    question: 'How does the pledged-gold release assistance service work?',
    answer:
      'If your gold is pledged with a bank, NBFC, or pawnbroker, we review your pledge receipt to confirm the principal and accrued interest. Our representative accompanies you to the financial institution, provides funds to settle the loan dues directly, releases your jewellery, tests its purity via XRF, and transfers the remaining surplus equity to your bank account.',
  },
  {
    id: 'stones',
    question: 'How are gemstones, wax, and enamel handled during gold valuation?',
    answer:
      'All non-gold components—such as precious and semi-precious stones, beads, lac, wax fillings, and enamel—are accurately assessed and excluded from the net gold weight. You are only paid for the pure gold content, ensuring complete transparency with no arbitrary weight deductions.',
  },
  {
    id: 'bills',
    question: 'Can I sell old gold jewellery if I no longer have the purchase bill?',
    answer:
      'Yes. While original purchase bills or invoices are helpful, they are not mandatory. You can sell heirloom, gifted, or old family jewellery by providing valid government-issued photo ID (Aadhaar or PAN) and completing our statutory ownership declaration at the time of valuation.',
  },
] as const;
