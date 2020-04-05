import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Main from './pages/Main';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos';
import CadastrarProduto from './pages/CadastrarProduto';


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/main" exact component={Main} />
            <Route path="/clientes" exact component={Clientes} />
            <Route path="/pedidos" exact component={Pedidos} />
            <Route path="/cadastrar-produto" exact component={CadastrarProduto} />
        </Switch>
    </BrowserRouter>
  );
}
