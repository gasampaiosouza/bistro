import React from 'react';
import { Link } from 'react-router-dom';
import './intro.scss';

import axios from 'axios';

import Button from '../../components/Button';

const Header = () => {
  const handle = () => {
    console.log('sending to api');

    return axios.post('http://localhost:5000/login', {
      email: 'figma@gmail.com',
      password: 'figmazasso',
    });
  };

  return (
    <header id="header">
      <a href="/" className="logo">
        Bistrô.
      </a>
      <hr style={{ display: 'none' }} />
      <ul>
        <li>
          <Link
            to="/login"
            // onClick={handle}
          >
            Fazer login
          </Link>
        </li>

        <li>
          <Link to="/register" className="noStyle">
            <Button text="Cadastre-se" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
