'use client';

import React from 'react';
import ScrollText from './scrolltext';

export default function FAQHeader() {
  return (
    <>
      {/* Verticale streep op 1/3 van het scherm - stopt bij horizontale lijn */}
      <div className="absolute left-[40%] top-16 w-[1px] bg-black z-10" style={{ height: 'calc(70vh - 4rem)' }} />

      {/* Horizontale streep op de helft van de pagina */}
      <div className="absolute left-0 right-0 top-[70vh] h-[1px] bg-black z-10" />

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
    </>
  );
}
