'use client';

import React from 'react';
import { Navbar } from './components/navbar';
import PageTransition from '@/components/PageTransition';
import ScrollText from './components/scrolltext';
import AfspraakBlock from './components/AfspraakBlock';
import { FooterWhite } from '@/components/FooterWhite';

export default function FAQPage() {
  return (
    <PageTransition>
      <div className="bg-white relative" style={{ minHeight: 'calc(71vh + 110rem)' }}>
        <Navbar />

        {/* Verticale streep op 1/3 van het scherm - stopt bij horizontale lijn */}
        <div className="absolute left-[40%] top-16 w-[1px] bg-black z-10" style={{ height: 'calc(70vh - 4rem)' }} />

        {/* Horizontale streep op de helft van de pagina */}
        <div className="absolute left-0 right-0 top-[70vh] h-[1px] bg-black z-10" />

        <main className="pt-24 pb-20">
          {/* FAQ titel in linkervlak */}
          <div className="absolute left-0 top-[8vh] w-[40%] z-20">
            <div className="text-black" style={{
              fontFamily: 'SupremeLL-Bold, sans-serif',
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              FAQ
            </div>
          </div>

          {/* Scrollende tekst in rechtervlak */}
          <div className="absolute right-8 top-[15vh] w-[55%] overflow-y-auto overflow-x-hidden z-20" style={{ height: 'calc(70vh - 15vh)' }}>
            <ScrollText
              texts={[
                "Wat is Rauw Collectief?",
                "Hoe werkt het?",
                "Wie zijn jullie?",
                "Wat kosten jullie diensten?",
                "Hoe lang duurt een project?",
                "Kunnen we samenwerken?",
                "Waar zijn jullie gevestigd?",
                "Neem contact op"
              ]}
              className="text-black"
            />
          </div>

          {/* FAQ afbeelding in blok rechtsboven */}
          <div className="absolute left-[40%] top-16 right-0 z-20 p-8" style={{ height: 'calc(70vh - 4rem)' }}>
            <img
              src="/FAQ.png"
              alt="FAQ"
              className="w-full h-full object-cover"
            />
          </div>

          <AfspraakBlock
            title="Afspraak"
            question="Hoe kan ik een afspraak maken"
            contactText="bel Rick de Voogd op +31 6 12345678 of stuur een mail naar rick@rauwcollectief.nl"
            topPosition="71vh"
          />

          <AfspraakBlock
            title="Contact"
            question="Neem contact met ons op"
            contactText="info@rauwcollectief.nl of bel +31 6 12345678 voor directe vragen"
            topPosition="calc(71vh + 6rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Diensten"
            question="Wat kunnen we voor je doen"
            contactText="bekijk ons portfolio op rauwcollectief.nl/werk en ontdek onze mogelijkheden"
            topPosition="calc(71vh + 12rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Projecten"
            question="Bekijk onze werkzaamheden"
            contactText="zie onze cases van 50+ succesvolle projecten voor merken groot en klein"
            topPosition="calc(71vh + 18rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Team"
            question="Wie zijn wij eigenlijk"
            contactText="ontmoet het team van 12 creatieve professionals met passie voor design"
            topPosition="calc(71vh + 24rem)"
          />

          <AfspraakBlock
            title="Locatie"
            question="Waar zijn we gevestigd"
            contactText="bezoek ons kantoor in het hart van Amsterdam, Herengracht 123"
            topPosition="calc(71vh + 30rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Vacatures"
            question="Wil je bij ons werken"
            contactText="bekijk openstaande functies op rauwcollectief.nl/careers en word deel van ons team"
            topPosition="calc(71vh + 36rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Samenwerking"
            question="Hoe starten we een project"
            contactText="plan een vrijblijvend kennismakingsgesprek en we nemen je mee in onze werkwijze"
            topPosition="calc(71vh + 42rem)"
          />

          <AfspraakBlock
            title="Expertise"
            question="Wat zijn onze specialisaties"
            contactText="branding, webdesign & development voor startups tot enterprise klanten"
            topPosition="calc(71vh + 48rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Proces"
            question="Hoe verloopt een project"
            contactText="van strategie tot lancering in 6-8 weken met wekelijkse updates en feedback momenten"
            topPosition="calc(71vh + 54rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Support"
            question="Krijg ik ondersteuning na oplevering"
            contactText="ja, altijd bereikbaar voor onderhoud en doorontwikkeling van jouw project"
            topPosition="calc(71vh + 60rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Referenties"
            question="Wat zeggen jullie klanten"
            contactText="100% tevreden klanten sinds 2020 met een gemiddelde score van 9.5/10"
            topPosition="calc(71vh + 66rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Verzending"
            question="Wanneer kunnen we langskomen"
            contactText="bezoek ons kantoor elke werkdag tussen 9:00 en 18:00 of plan een online meeting via Zoom"
            topPosition="calc(71vh + 72rem)"
          />

          <AfspraakBlock
            title="Budget"
            question="Wat is de investering voor een project"
            contactText="projecten starten vanaf €5.000 afhankelijk van scope, complexiteit en gewenste deliverables"
            topPosition="calc(71vh + 78rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Technologie"
            question="Met welke tools werken jullie"
            contactText="wij werken met Next.js, React, Tailwind CSS, Figma en Adobe Creative Suite voor optimale resultaten"
            topPosition="calc(71vh + 84rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Timeline"
            question="Hoe snel kunnen jullie starten"
            contactText="gemiddelde starttijd is 2-3 weken na akkoord, afhankelijk van planning en project complexiteit"
            topPosition="calc(71vh + 90rem)"
            titleColor="white"
          />

          <AfspraakBlock
            title="Partnership"
            question="Bieden jullie lange termijn samenwerking"
            contactText="jazeker, we bieden maandelijkse retainer packages voor doorlopende support, updates en groei"
            topPosition="calc(71vh + 96rem)"
            titleColor="white"
          />

          <div className="max-w-7xl mx-auto px-6">
            {/* Content komt hier */}
          </div>

          {/* Footer onderaan */}
          <div className="absolute w-full" style={{ top: 'calc(71vh + 115rem)' }}>
            <FooterWhite />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
