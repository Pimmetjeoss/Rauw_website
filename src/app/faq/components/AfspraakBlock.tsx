import React from 'react';

interface AfspraakBlockProps {
  title: string;
  question: string;
  contactText: string;
  topPosition: string;
  titleColor?: string;
}

export default function AfspraakBlock({
  title,
  question,
  contactText,
  topPosition,
  titleColor = 'black'
}: AfspraakBlockProps) {
  return (
    <>
      {/* Afspraak tekst links */}
      <div className="absolute left-0 z-20" style={{
        top: topPosition
      }}>
        <div style={{
          fontFamily: 'SupremeLL-Bold, sans-serif',
          fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: titleColor
        }}>
          {title}
        </div>
      </div>

      {/* Question tekst - altijd op vaste positie */}
      <div className="absolute z-20" style={{
        left: 'calc(40% - 15.4rem)',
        top: `calc(${topPosition} + 0.95rem)`
      }}>
        <div className="text-black font-bold" style={{
          fontFamily: 'SupremeLL-Bold, sans-serif',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.02em'
        }}>
          {question}
        </div>
      </div>

      {/* Contact tekst */}
      <div className="absolute left-[40%] z-20 flex items-center" style={{
        marginLeft: '18rem',
        top: `calc(${topPosition} + 1.25rem)`
      }}>
        <div className="text-black" style={{
          fontFamily: 'SupremeLL-Bold, sans-serif',
          fontSize: 'clamp(0.75rem, 1.25vw, 1rem)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.02em'
        }}>
          {contactText}
        </div>
      </div>

      {/* Horizontale streep vanaf "Hoe kan ik een afspraak maken" naar rechts */}
      <div className="absolute right-0 h-[1px] bg-black z-10" style={{
        left: 'calc(40% - 15.4rem)',
        top: `calc(${topPosition} + 2.5rem)`
      }} />
    </>
  );
}
