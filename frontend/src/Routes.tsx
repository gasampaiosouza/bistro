import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pedidos from './pages/pedidos/Pedidos';
import Produtos from './pages/produtos/Produtos';
import Estoques from './pages/estoques/Estoques';
import ControleVenda from './pages/controleVenda/ControleVenda';
import Intro from './pages/intro/Intro';

export default function Routes() {
  return (
    <Router>
      {/* default route */}
      <Route component={Intro} path="/" exact />

      <Route component={Pedidos} path="/pedidos" exact />
      <Route component={Produtos} path="/produtos" exact />
      <Route component={Estoques} path="/estoques" />
      <Route component={ControleVenda} path="/controle" exact />
    </Router>
  );
}
