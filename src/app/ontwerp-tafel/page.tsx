'use client';

import React from 'react';
import { Navbar } from '../contact/components/navbarblack';
import PageTransition from '@/components/PageTransition';
import { Footer } from '@/components/Footer';
import FAQHeader from '@/app/ontwerp-tafel/components/faqheaderblack';
import { VerkoopBlock } from '@/app/ontwerp-tafel/components/verkoopblock';

export default function TafelsPage() {
  return (
    <PageTransition>
      <div className="bg-black relative min-h-screen">
        <Navbar
          navigationLinks={[
            { href: '#', label: 'Producten' },
            { href: '#leren', label: 'Leren' },
            { href: '/contact', label: 'Contact' },
          ]}
          signInText="Login"
          ctaText="Start"
        />

        {/* FAQ Header Section */}
        <div className="relative -mt-16" style={{ height: '70vh' }}>
          <FAQHeader />
        </div>

        <main className="pt-84 pb-20">
          <div className="max-w-[120rem] mx-auto px-6">
            <VerkoopBlock
              images={[
                '/tafel1.png',
                '/tafel2.png',
                '/tafel3.png',
                '/tafel4.png',
                '/tafel5.png',
                '/tafel6.png',
              ]}
            />
          </div>
        </main>

        {/* Footer */}
        <div className="mt-60">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
