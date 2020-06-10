import React from 'react';
import './default.scss';

type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => {
  // text
  return <button className="btn">{props.text}</button>;
};

export default Button;
