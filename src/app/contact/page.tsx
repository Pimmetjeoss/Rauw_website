'use client';

import React from 'react';
import { Navbar } from './components/navbarblack';
import PageTransition from '@/components/PageTransition';
import { Footer } from '@/components/Footer';
import SideMenu from '@/components/SideMenu';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="bg-black relative min-h-screen">
        <Navbar
          navigationLinks={[
            { href: '#', label: 'Producten' },
            { href: '#leren', label: 'Leren' },
            { href: '/contact', label: 'Contact', active: true },
          ]}
          signInText="Login"
          ctaText="Start"
        />

        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Links - Menu items */}
              <SideMenu
                items={[
                  { label: "Over ons", onClick: () => router.push('/over-ons') },
                  { label: "Tafel ontwerpen" },
                  { label: "Review" },
                  { label: "Contact", active: true },
                  { label: "FAQ" },
                ]}
                className="pt-48 -ml-12"
              />

              {/* Midden - Contact formulier */}
              <div className="px-6 pt-24">
                <h1 className="text-white text-7xl font-bold mb-8">Contact</h1>
                <p className="text-white font-semibold mb-8">Vul je contactgegevens in.</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Voornaam"
                      className="w-full px-0 py-2 bg-transparent border-b border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white"
                    />
                    <input
                      type="text"
                      placeholder="Achternaam"
                      className="w-full px-0 py-2 bg-transparent border-b border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-0 py-2 bg-transparent border-b border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white"
                    />
                    <input
                      type="tel"
                      placeholder="Telefoon"
                      className="w-full px-0 py-2 bg-transparent border-b border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Onderwerp"
                    className="w-full px-0 py-2 bg-transparent border-b border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <textarea
                    placeholder="Bericht"
                    rows={6}
                    className="w-full px-4 py-4 bg-transparent border border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white resize-none"
                  />
                  <input
                    type="text"
                    placeholder="Hoe heb je ons gevonden?"
                    className="w-full px-0 py-2 bg-transparent border-b border-white/60 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
                  >
                    Verstuur
                  </button>
                </form>
              </div>

              {/* Rechts - Studio informatie */}
              <div className="text-white px-6 pt-48 pl-48">
                <h2 className="text-xl font-bold mb-6">Showroom</h2>
                <div className="space-y-1 mb-8">
                  <p>Spoorlaan 64</p>
                  <p>5348 KC</p>
                  <p>Oss</p>
                </div>

                <h3 className="text-lg font-semibold mb-4">Openingstijden</h3>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between gap-4">
                    <span>donderdag</span>
                    <span>08:00-17:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>vrijdag</span>
                    <span>09:00-17:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>zaterdag</span>
                    <span>09:00-17:00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>zondag</span>
                    <span>Gesloten</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>maandag</span>
                    <span>Gesloten</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>dinsdag</span>
                    <span>Gesloten</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>woensdag</span>
                    <span>Gesloten</span>
                  </div>
                </div>
                <p className="text-white/80">Andere dagen op afspraak</p>
              </div>
            </div>
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
