'use client';

import React from 'react';
import ScrollText from './scrolltext';

interface FAQHeaderProps {
  title?: string;
  texts?: string[];
  imageSrc?: string;
  descriptionText?: string;
}

export default function FAQHeader({
  title = "FAQ",
  texts = [
    "Wat is Rauw Collectief?",
    "Hoe werkt het?",
    "Wie zijn jullie?",
    "Wat kosten jullie diensten?",
    "Hoe lang duurt een project?",
    "Kunnen we samenwerken?",
    "Waar zijn jullie gevestigd?",
    "Neem contact op"
  ],
  imageSrc = "/FAQ.png",
  descriptionText
}: FAQHeaderProps) {
  return (
    <>
      {/* Verticale streep op 1/3 van het scherm - stopt bij horizontale lijn */}
      <div className="absolute left-[40%] top-16 w-[1px] bg-black z-10" style={{ height: 'calc(70vh - 4rem)' }} />

      {/* Horizontale streep op de helft van de pagina */}
      <div className="absolute left-0 right-0 top-[70vh] h-[1px] bg-black z-10" />

      {/* Beschrijvingstekst boven horizontale streep */}
      <div className="absolute left-0 right-0 top-[70vh] mt-4 z-20 pl-0 pr-0">
        <p className="text-black" style={{
          fontFamily: 'SupremeLL-Regular, sans-serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          lineHeight: 1.4
        }}>
          Wij onderscheiden ons door meubels te ontwerpen en te maken die langdurige functionele én emotionele waarde hebben voor de mensen die ze gebruiken. Onze focus is, en zal altijd zijn, op design dat verder gaat dan oplossingen alleen – meubels die een ervaring bieden die de moeite waard is om te hebben en te behouden. Daarbij streven we ernaar om de ecologische voetafdruk van meubelproductie te verkleinen en nemen we onze verantwoordelijkheid met een volledig lokale aanpak voor ontwerp en productie. Tegelijkertijd bieden we mensen met een afstand tot de arbeidsmarkt een waardevolle werkplek waar vakmanschap centraal staat – ontworpen en gemaakt in Nederland.
        </p>
      </div>

      {/* Titel in linkervlak */}
      <div className="absolute left-0 top-[8vh] w-[40%] z-20">
        <div className="text-black" style={{
          fontFamily: 'SupremeLL-Bold, sans-serif',
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em'
        }}>
          {title}
        </div>
        {descriptionText && (
          <p className="text-black text-sm" style={{
            fontFamily: 'SupremeLL-Regular, sans-serif',
            lineHeight: 1.5,
            marginTop: '575px'
          }}>
            {descriptionText}
          </p>
        )}
      </div>

      {/* Scrollende tekst in rechtervlak */}
      <div className="absolute right-8 top-[15vh] w-[55%] overflow-y-auto overflow-x-hidden z-20" style={{ height: 'calc(70vh - 15vh)' }}>
        <ScrollText
          texts={texts}
          className="text-black"
        />
      </div>

      {/* Afbeelding in blok rechtsboven */}
      <div className="absolute left-[40%] top-16 right-0 z-20 p-8" style={{ height: 'calc(70vh - 4rem)' }}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
