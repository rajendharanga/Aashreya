/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ValuationModal } from './components/ValuationModal';
import { HomePage } from './pages/HomePage';
import { SellGoldPage } from './pages/SellGoldPage';
import { ReleasePledgedGoldPage } from './pages/ReleasePledgedGoldPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage, TermsAndConditionsPage } from './pages/LegalPages';

const RouteView: React.FC = () => {
  const { currentPath } = useApp();

  switch (currentPath) {
    case '/sell-gold':
      return <SellGoldPage />;
    case '/release-pledged-gold':
      return <ReleasePledgedGoldPage />;
    case '/about-us':
      return <AboutPage />;
    case '/contact-us':
      return <ContactPage />;
    case '/faq':
      return <FaqPage />;
    case '/privacy-policy':
      return <PrivacyPolicyPage />;
    case '/terms-and-conditions':
      return <TermsAndConditionsPage />;
    case '/':
    default:
      return <HomePage />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#1A0B22] text-[#FAF7F2]">
        <Navbar />
        <main className="flex-1">
          <RouteView />
        </main>
        <Footer />
        <ValuationModal />
      </div>
    </AppProvider>
  );
}
