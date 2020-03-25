import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login-page/login-page.component';
import CadastroPage from './pages/cadastro-page/cadastro.component';
import CadastroEditPage from './pages/cadastro-edit-page/cadastro-edit-page.component';
import CreateAddress from './pages/create-address-page/create-address-page.component';
import DashboardPage from './pages/dashboard-page/dashboard.page';
import Product from '../src/components/grid-produto/grid-produto.components';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Product/>  {/* - só para testar a pag produto*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={CadastroPage} />
        <Route exact path="/dashboard" component={DashboardPage}/>
        <Route exact path="/dashboard/novo-endereco" component={CreateAddress}/>
        <Route exact path="/dashboard/edit-endereco" component={CreateAddress}/>
        <Route exact path="/dashboard/edit-usuario" component={CadastroEditPage}/>
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;

