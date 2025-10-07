'use client';

import React from 'react';
import ScrollText from '../../faq/components/scrolltext';

export default function FAQHeader() {
  return (
    <>
      {/* Verticale streep op 1/3 van het scherm - stopt bij horizontale lijn */}
      <div className="absolute left-[40%] top-16 w-[1px] bg-white z-10" style={{ height: 'calc(70vh - 4rem)' }} />

      {/* Horizontale streep op de helft van de pagina */}
      <div className="absolute left-0 right-0 top-[70vh] h-[1px] bg-white z-10" />

      {/* Beschrijvingstekst onder horizontale streep */}
      <div className="absolute left-0 right-0 top-[70vh] mt-4 z-20 pl-0 pr-0">
        <p className="text-white" style={{
          fontFamily: 'SupremeLL-Regular, sans-serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          lineHeight: 1.4
        }}>
          Creëer uw droomtafel door zelf een blad, onderstel en vorm te kiezen die perfect bij uw wensen passen. Upload desgewenst een foto van uw woon- of eetkamer en visualiseer binnen enkele seconden uw persoonlijke ontwerp in uw eigen ruimte, voor een tafel die jarenlang karakter en kwaliteit biedt.
        </p>
      </div>

      {/* Tafels titel in linkervlak */}
      <div className="absolute left-0 top-[8vh] w-[40%] z-20">
        <div className="text-white" style={{
          fontFamily: 'SupremeLL-Bold, sans-serif',
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em'
        }}>
          Ontwerp Tafel
        </div>
      </div>

      {/* Kleine beschrijvingstekst net boven de horizontale streep */}
      <div className="absolute left-0 w-[40%] z-20" style={{ top: 'calc(70vh - 3rem)' }}>
        <p className="text-white text-sm" style={{
          fontFamily: 'SupremeLL-Regular, sans-serif',
          lineHeight: 1.5
        }}>
          Ontwerp uw eigen unieke tafel, volledig op maat gemaakt met hoogwaardige materialen die perfect aansluiten bij uw wensen en interieur.
        </p>
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
          className="text-white"
        />
      </div>

      {/* Tafels afbeelding in blok rechtsboven */}
      <div className="absolute left-[40%] top-16 right-0 z-20 p-8" style={{ height: 'calc(70vh - 4rem)' }}>
        <img
          src="/tafels.png"
          alt="Tafels"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
