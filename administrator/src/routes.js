import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon/index';
import Main from './pages/Main';
import Clientes from './pages/Clientes/index';
import Pedidos from './pages/Pedidos';
import CadastrarProduto from './pages/CadastrarProduto';
import PedidoCliente from './pages/PedidoCliente';


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/main" exact component={Main} />
            <Route path="/clientes" exact component={Clientes} />
            <Route path="/pedidos" exact component={Pedidos} />
            <Route path="/cadastrar-produto" exact component={CadastrarProduto} />
            <Route path="/pedido-cliente" exact component={PedidoCliente} />
        </Switch>
    </BrowserRouter>
  );
}
