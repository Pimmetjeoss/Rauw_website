'use client';

import React from 'react';
import { Navbar } from '../faq/components/navbar';
import PageTransition from '@/components/PageTransition';
import { FooterWhite } from '@/components/FooterWhite';

export default function OverOnsPage() {
  return (
    <PageTransition>
      <div className="bg-white relative min-h-screen">
        <Navbar
          navigationLinks={[
            { href: '#', label: 'Producten' },
            { href: '#leren', label: 'Leren' },
            { href: '/contact', label: 'Contact' },
          ]}
          signInText="Login"
          ctaText="Start"
        />

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-black text-6xl font-bold mb-8">Over Ons</h1>
            <p className="text-black text-lg">
              Welkom op de Over Ons pagina van Rauw Collectief.
            </p>
          </div>
        </main>

        {/* Footer */}
        <div className="mt-40">
          <FooterWhite />
        </div>
      </div>
    </PageTransition>
  );
}
