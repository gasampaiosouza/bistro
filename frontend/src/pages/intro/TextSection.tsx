import React from 'react';
import Button from '../../components/Button';
import ScrollAnimation from 'react-animate-on-scroll';

interface TextSectionType {
  title: string;
  desc?: string | boolean;
  cta?: string;
  bg?: boolean;
  classname?: string;
  after?: boolean;
  highlight?: number;
}

export default function TextSection({
  title,
  desc,
  cta,
  bg,
  classname,
  after,
  highlight,
}: TextSectionType) {
  return (
    <div
      className={`container text--section ${classname || ''}`}
      style={{
        background: bg ? '#F8F8F8' : '',
        justifyContent: cta ? 'space-around' : '',
        height: highlight ? `calc(100vh / ${highlight} - 100px)` : 'default',
      }}
    >
      <div className="text--container">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <h1 className={`title ${after ? 'after' : undefined}`}>{title}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          {desc ? <p>{desc}</p> : null}
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        {cta ? <Button text={cta} /> : null}
      </ScrollAnimation>
    </div>
  );
}
