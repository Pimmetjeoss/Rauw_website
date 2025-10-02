import React from 'react';
import AfspraakTitle from './AfspraakTitle';
import AfspraakQuestion from './AfspraakQuestion';
import BelRickText from './BelRickText';

export default function AfspraakSection() {
  return (
    <>
      {/* Afspraak tekst links onder horizontale lijn */}
      <div className="fixed left-0 top-[71vh] w-[40%] z-20 flex items-center justify-between pr-2">
        <AfspraakTitle />
        <AfspraakQuestion />
      </div>


      {/* Bel Rick de Voogd tekst */}
      <div className="fixed left-[40%] z-20 flex items-center" style={{
        marginLeft: '12rem',
        top: 'calc(71vh + 1.25rem)'
      }}>
        <BelRickText />
      </div>
    </>
  );
}
