import React from 'react';
import './default.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type BackArrowType = {
  text?: string;
  path: string;
};

export default function BackArrow({ text = 'Voltar', path }: BackArrowType) {
  return (
    <Link to={path} className="backArrow--container">
      <h1 className="defaultTitle">{text}</h1>
      <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow" />
    </Link>
  );
}
