import React from 'react';

interface CardsType {
  content: {
    title: string;
    desc: string;
  }[];
}

export default function Cards({ content }: CardsType) {
  return (
    <div className="container cards--container">
      {content.map((card, i) => {
        return (
          <div className="card" key={i}>
            <h1 className="card--title">{card.title}</h1>
            <p className="card--desc">{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
