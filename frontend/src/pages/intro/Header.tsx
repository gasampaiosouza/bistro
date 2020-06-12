import React from 'react';
import { Link } from 'react-router-dom';
import './intro.scss';

import Button from '../../components/Button';

const Header = () => {
  return (
    <header id="header">
      <a href="/" className="logo">
        Bistrô.
      </a>

      <ul>
        <li>
          <Link to="/login">Fazer login</Link>
        </li>

        <li>
          <Link to="/register" className="noStyle">
            <Button text="Cadastrar-se" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
