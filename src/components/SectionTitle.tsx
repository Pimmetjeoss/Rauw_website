import React from 'react';

interface SectionTitleProps {
  text: string;
  fontSize?: string;
  fontWeight?: number;
}

export default function SectionTitle({
  text,
  fontSize = 'clamp(1.5rem, 4vw, 3.5rem)',
  fontWeight = 400
}: SectionTitleProps) {
  return (
    <div className="text-black" style={{
      fontFamily: 'SupremeLL-Bold, sans-serif',
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }}>
      {text}
    </div>
  );
}
