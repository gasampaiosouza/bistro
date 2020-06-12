import React from 'react';
import Button from '../../components/Button';

interface TextSectionType {
  title: string;
  desc?: string | boolean;
  cta?: string;
  bg?: boolean;
  classname?: string;
}

export default function TextSection({
  title,
  desc,
  cta,
  bg,
  classname,
}: TextSectionType) {
  return (
    <div
      className={`container text--section ${classname || undefined}`}
      style={{ background: bg ? '#F8F8F8' : '' }}
    >
      <div className="text--container">
        <h1>{title}</h1>
        {desc ? <p>{desc}</p> : null}
      </div>

      {cta ? <Button text={cta} /> : null}
    </div>
  );
}
