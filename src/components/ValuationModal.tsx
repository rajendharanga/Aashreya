import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Copy, Check } from 'lucide-react';
import {
  buildWhatsAppValuationUrl,
  getCallHref,
  SITE_CONFIG,
} from '../config/siteConfig';
import { useApp } from '../context/AppContext';

interface ValuationFormProps {
  initialGoldType?: string;
  initialWeight?: string;
  initialService?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const ValuationWhatsAppForm: React.FC<ValuationFormProps> = ({
  initialGoldType = 'Gold Jewellery / Ornaments',
  initialWeight = '',
  initialService = 'Sell Gold',
  compact = false,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goldType, setGoldType] = useState(initialGoldType);
  const [weight, setWeight] = useState(initialWeight);
  const [service, setService] = useState(initialService);
  const [error, setError] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialGoldType) setGoldType(initialGoldType);
    if (initialWeight !== undefined) setWeight(initialWeight);
    if (initialService) setService(initialService);
  }, [initialGoldType, initialWeight, initialService]);

  const whatsappHref = buildWhatsAppValuationUrl({
    name,
    phone,
    goldType,
    weight,
    service,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/[^0-9+]/g, '');
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setError('');
    setSubmittedUrl(whatsappHref);

    // Trigger anchor click in a new tab safely
    const link = document.createElement('a');
    link.href = whatsappHref;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyDetails = async () => {
    const summary = `Hi Aashreya Gold Hub, I would like to get a gold valuation.\n\nName: ${name}\nPhone: ${phone}\nGold Type: ${goldType}\nApprox. Weight: ${weight}g\nService: ${service}`;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore clipboard error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold tracking-wider uppercase text-[#E6C97A] mb-1.5">
            Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="Your full name"
            className="w-full px-4 py-3 bg-[#1A0B22] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/35 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-wider uppercase text-[#E6C97A] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (error) setError('');
            }}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-[#1A0B22] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-[#FAF7F2] font-mono-num placeholder:text-[#FAF7F2]/35 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold tracking-wider uppercase text-[#E6C97A] mb-1.5">
            Gold Type
          </label>
          <select
            value={goldType}
            onChange={(e) => setGoldType(e.target.value)}
            className="w-full px-3.5 py-3 bg-[#1A0B22] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-[#FAF7F2] focus:outline-none transition-colors"
          >
            <option value="Gold Jewellery / Ornaments">Gold Jewellery / Ornaments</option>
            <option value="Old / Broken Gold">Old / Broken Gold</option>
            <option value="Pledged Gold">Pledged Gold</option>
            <option value="Gold Coins / Bars">Gold Coins / Bars</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold tracking-wider uppercase text-[#E6C97A] mb-1.5">
            Approx. Weight (Grams)
          </label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 25"
            className="w-full px-4 py-3 bg-[#1A0B22] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-[#FAF7F2] font-mono-num placeholder:text-[#FAF7F2]/35 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-wider uppercase text-[#E6C97A] mb-1.5">
            Service Required
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3.5 py-3 bg-[#1A0B22] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-[#FAF7F2] focus:outline-none transition-colors"
          >
            <option value="Sell Gold">Sell Gold</option>
            <option value="Release Pledged Gold">Release Pledged Gold</option>
            <option value="Doorstep Valuation">Doorstep Valuation</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-400/30 px-3 py-2 rounded-sm">
          {error}
        </p>
      )}

      <div className={`pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${compact ? '' : ''}`}>
        <button
          type="submit"
          className="flex-1 min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E6C97A] text-[#1A0B22] font-extrabold text-sm tracking-wider uppercase rounded-sm transition-all duration-150 whitespace-nowrap shadow-[0_0_30px_rgba(212,175,55,0.3)] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>SUBMIT ON WHATSAPP</span>
        </button>

        <a
          href={getCallHref()}
          className="min-h-[52px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#261132] hover:bg-[#331842] border border-[#D4AF37]/35 text-[#FAF7F2] font-bold text-sm tracking-wider uppercase rounded-sm transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span>CALL NOW</span>
        </a>
      </div>

      {submittedUrl && (
        <div className="mt-3 p-3.5 bg-[#1A0B22] border border-[#D4AF37]/40 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#E6C97A]">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              WhatsApp message ready for <strong>{SITE_CONFIG.PHONE}</strong>.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#D4AF37] text-[#1A0B22] font-bold text-xs uppercase rounded-sm whitespace-nowrap"
            >
              Open WhatsApp
            </a>
            <button
              type="button"
              onClick={handleCopyDetails}
              className="px-3 py-1.5 bg-[#261132] border border-white/15 text-[#FAF7F2] text-xs font-medium rounded-sm inline-flex items-center gap-1 whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export const ValuationModal: React.FC = () => {
  const { isValuationModalOpen, closeValuationModal, valuationPrefill } = useApp();

  if (!isValuationModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="valuation-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#261132] border border-[#D4AF37]/40 rounded-sm p-5 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.75)]">
        <button
          type="button"
          onClick={closeValuationModal}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 flex items-center justify-center rounded-sm bg-[#1A0B22] border border-white/15 text-[#FAF7F2]/80 hover:text-[#D4AF37] transition-colors cursor-pointer"
          aria-label="Close valuation modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-5 sm:mb-6 pr-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-1">
            DIRECT WHATSAPP VALUATION
          </p>
          <h2
            id="valuation-modal-title"
            className="font-editorial text-xl sm:text-3xl font-extrabold text-[#FAF7F2] tracking-tight"
          >
            GET A FREE GOLD VALUATION
          </h2>
          <p className="text-sm text-[#FAF7F2]/70 mt-1">
            Enter your gold details below to start an instant valuation chat on WhatsApp.
          </p>
        </div>

        <ValuationWhatsAppForm
          initialGoldType={valuationPrefill.goldType}
          initialWeight={valuationPrefill.weight}
          initialService={valuationPrefill.service}
        />
      </div>
    </div>
  );
};
