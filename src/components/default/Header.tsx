import React, { useState } from 'react';
import './default.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => {
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
            <Link to="/">Pedidos</Link>
          </li>
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/">Estoques</Link>
          </li>
          <li>
            <Link to="/">Controle de Vendas</Link>
          </li>
        </ul>
      </header>
    </Router>
  );
};

export default Header;
