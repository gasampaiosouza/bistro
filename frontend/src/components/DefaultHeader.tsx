import React, { useState } from 'react';
import './default.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

type HeaderType = {
  onPage?: string;
};

const DefaultHeader = ({ onPage }: HeaderType) => {
  const [{ open }, setCondition] = useState({ open: false });

  const changeHeader = () => {
    setCondition({ open: !open });
  };

  return (
    <Router>
      <header className="header">
        <a href="/" className="logo">
          Bistrô.
        </a>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          onChange={changeHeader}
        />

        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className={`menu ${open ? 'active' : ''}`}>
          <li>
            <Link
              to="/pedidos"
              className={onPage === 'pedidos' ? 'onPage' : ''}
            >
              Pedidos
            </Link>
          </li>
          <li>
            <Link
              to="/produtos"
              className={onPage === 'produtos' ? 'onPage' : ''}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to="/estoques"
              className={onPage === 'estoques' ? 'onPage' : ''}
            >
              Estoques
            </Link>
          </li>
          <li>
            <Link
              to="/controle"
              className={onPage === 'controleVenda' ? 'onPage' : ''}
            >
              Controle de Vendas
            </Link>
          </li>
        </ul>
      </header>
    </Router>
  );
};

export default DefaultHeader;
