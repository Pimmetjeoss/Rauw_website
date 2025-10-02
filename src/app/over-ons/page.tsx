'use client';

import React from 'react';
import { Navbar } from '../faq/components/navbar';
import PageTransition from '@/components/PageTransition';
import { FooterWhite } from '@/components/FooterWhite';
import FAQHeader from '../faq/components/FAQHeader';
import AfspraakBlock from '../faq/components/AfspraakBlock';

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

        {/* Over Ons Header Section */}
        <div className="relative -mt-16" style={{ height: '70vh' }}>
          <FAQHeader
            title="Over ons"
            texts={[
              "Wie zijn wij?",
              "Wat doen we?",
              "Onze missie",
              "Ons team",
              "Onze visie",
              "Waarom Rauw Collectief?",
              "Neem contact op"
            ]}
            imageSrc="/hal2.png"
            descriptionText="Wij maken meubels die mooi én functioneel zijn. Elk ontwerp dat we de wereld in sturen is het resultaat van een grondig en iteratief proces, culminerend in tijdloze stukken waar generaties lang van kunnen genieten."
          />
        </div>

        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Speelse afbeeldingen layout */}
            <div className="relative h-[600px] mt-96">
              {/* Linker afbeelding - werknemer2 */}
              <div className="absolute -left-[15%] top-12 w-[45%] h-[500px] z-10">
                <img
                  src="/werknemer2.png"
                  alt="Rauw Collectief Werknemer"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </main>

        {/* Werknemer 1 afbeelding - horizontale rechthoek rechtsonder */}
        <div className="absolute right-0 w-[900px] h-[600px] z-20 animate-fade-in" style={{ top: 'calc(70vh + 45rem)', animation: 'fadeIn 1s ease-in' }}>
          <img
            src="/werknemer1.png"
            alt="Rauw Collectief Vakmanschap"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Ons team tekst boven Afspraak */}
        <div className="absolute left-0 z-20" style={{ top: 'calc(70vh + 45rem + 635px)' }}>
          <p className="text-black" style={{
            fontFamily: 'SupremeLL-Bold, sans-serif',
            fontSize: 'clamp(0.75rem, 1.25vw, 1rem)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '-0.02em'
          }}>
            Ons team
          </p>
        </div>

        {/* Team Member 1 - Rick de Voogt */}
        <AfspraakBlock
          title="Rick de Voogt"
          question="Opgericht door hem"
          contactText="Vakman met passie voor houtbewerking en duurzaam ondernemen"
          topPosition="calc(70vh + 45rem + 650px)"
          titleColor="black"
        />

        {/* Team Member 2 - Marleen Louw */}
        <AfspraakBlock
          title="Marleen Louw"
          question="Begeleid mensen op de werkvloer"
          contactText="Gedreven begeleider met oog voor talent en persoonlijke groei"
          topPosition="calc(70vh + 45rem + 750px)"
          titleColor="black"
        />

        {/* Team Member 3 - Pim van Lieshout */}
        <AfspraakBlock
          title="Pim van Lieshout"
          question="Twee linker handen"
          contactText="Enthousiast teamlid met liefde voor het ambacht"
          topPosition="calc(70vh + 45rem + 850px)"
          titleColor="black"
        />

        {/* Team Member 4 - Sophie Janssen */}
        <AfspraakBlock
          title="Sophie Janssen"
          question="Creatief ontwerper en innovator"
          contactText="Ontwerper met een scherp oog voor detail en functionaliteit"
          topPosition="calc(70vh + 45rem + 950px)"
          titleColor="black"
        />

        {/* Team foto's - Rick en Pim */}
        <div className="absolute left-[0%] top-[1050px] w-[40%] h-[480px] z-10" style={{ top: 'calc(70vh + 45rem + 1150px)' }}>
          <img
            src="/rick2.png"
            alt="Rick de Voogt"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute right-[5%] w-[900px] h-[600px] z-20" style={{ top: 'calc(70vh + 45rem + 1250px)' }}>
          <img
            src="/pim1.png"
            alt="Pim van Lieshout"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer */}
        <div style={{ marginTop: '100rem' }}>
          <FooterWhite />
        </div>
      </div>
    </PageTransition>
  );
}
