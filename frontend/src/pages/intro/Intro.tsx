import React from 'react';

import Header from './Header';
import TextSection from './TextSection';
import Cards from './Cards';
import Footer from './Footer';

import information from './information';

export default function Intro() {
  const { text, card } = information;

  return (
    <div>
      <Header />
      <TextSection
        cta={'Comece agora'}
        title={text[0].title}
        desc={text[0].desc}
      />
      {/* content={card} */}
      <Cards content={card} />
      <TextSection title={text[1].title} desc={text[1].desc} />
      <TextSection bg={true} title={text[2].title} desc={text[2].desc} />
      <TextSection
        title={text[3].title}
        desc={text[3].desc}
        cta={'Sim, vamos lá!'}
        classname="row"
      />
      <Footer />
    </div>
  );
}
