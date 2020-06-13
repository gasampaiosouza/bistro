import React from 'react';
import './intro.scss';
import ScrollAnimation from 'react-animate-on-scroll';

interface CardsType {
  content: {
    title: string;
    desc: string;
  }[];
}

export default function Test({ content }: CardsType) {
  function card({ title, desc }: { title: string; desc: string }) {
    return (
      <div className="card">
        <h1 className="card--title">{title}</h1>
        <p className="card--desc">{desc}</p>
      </div>
    );
  }

  return (
    <div>
      <ScrollAnimation animateIn="fadeInDown" offset={300} animateOnce={true}>
        <h1 className="title">Por que nós?</h1>
      </ScrollAnimation>

      <div className="container card--container">
        <ScrollAnimation animateIn="fadeInUp" offset={300} animateOnce={true}>
          {card(content[0])}
        </ScrollAnimation>

        {/* the 2 cards in the center */}
        <div className="center">
          <ScrollAnimation animateIn="fadeInUp" offset={315} animateOnce={true}>
            {card(content[1])}
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" offset={315} animateOnce={true}>
            {card(content[2])}
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInUp" offset={300} animateOnce={true}>
          {card(content[3])}
        </ScrollAnimation>
      </div>
    </div>
  );
}
