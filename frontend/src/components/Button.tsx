import React from 'react';
import './default.scss';

type ButtonProps = {
  text: string;
  type?: 'submit' | 'reset';
};

const Button = ({ text, type }: ButtonProps) => {
  // text
  return (
    <button className="btn" type={type || 'button'}>
      {text}
    </button>
  );
};

export default Button;
